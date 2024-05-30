import React, { useEffect, useState } from 'react';
import './index.css';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteModule,
  addModule,
  updateModule,
  setModule,
  setModules,
} from './reducer';
import { KanbasState } from '../../store';
import * as client from './client';
function ModuleList() {
  const moduleList = useSelector(
    (state: KanbasState) => state.modulesReducer.modules
  );
  const module = useSelector(
    (state: KanbasState) => state.modulesReducer.module
  );
  const dispatch = useDispatch();
  const { courseId } = useParams();
  useEffect(() => {
    client
      .findModulesForCourse(courseId)
      .then((modules) => dispatch(setModules(modules)));
  }, [courseId]);
  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };
  const handleDeleteModule = (moduleId: string) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  return (
    <>
      {/* <!-- Add buttons here --> */}
      <div className="wd-modules-buttons">
        <button>Collapse All</button>
        <button>View Program</button>
        <button>
          <i
            className="fa fa-check-circle text-success"
            style={{ width: '20px' }}
          ></i>
          Publish All
          <i className="fa fa-caret-down" style={{ width: '20p' }}></i>
        </button>
        <button className="wd-modules-buttons-module">
          <i className="fa fa-plus ms-2" style={{ width: '20px' }}></i>Module
        </button>
        {/* <button className="wd-modules-buttons-rightmost">
          <FaEllipsisV />
        </button> */}
      </div>
      <hr />
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <button onClick={handleAddModule}>Add</button>
          <button onClick={handleUpdateModule}>Update</button>
          <input
            value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }
          />
          <textarea
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
          />
        </li>
        {moduleList
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item">
              <div>
                <h3>{module.name}</h3>{' '}
                <button
                  onClick={() => {
                    dispatch(setModule(module));
                  }}
                >
                  Edit
                </button>
                <button onClick={() => handleDeleteModule(module._id)}>
                  Delete
                </button>
                <br />
                {module.description}
                <br />
                <br />
                {module.course}
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}

export default ModuleList;
