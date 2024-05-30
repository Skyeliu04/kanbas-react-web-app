import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './index.css';
import {
  updateAssignment,
  selectAssignment,
  selectAssignments,
} from '../assignmentsReducer';
import * as client from '../client';
import { KanbasState } from '../../../store';

function AssignmentEditor() {
  const assignment = useSelector(
    (state: KanbasState) => state.assignmentsReducer.assignment
  );
  const assignments = useSelector(
    (state: KanbasState) => state.assignmentsReducer.assignments
  );
  const dispatch = useDispatch();
  const { courseId } = useParams();
  useEffect(() => {
    client
      .findAssignmentsForCourse(courseId)
      .then((assignments) => dispatch(selectAssignments(assignments)));
  }, [courseId]);
  const handleUpdateAssignment = async () => {
    const status = await client.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };
  const navigate = useNavigate();
  const [dueDate, setDueDate] = useState('2024-01-01');
  const [availableFromDate, setAvailableFromDate] = useState('2024-01-01');
  const [availableUntilDate, setAvailableUntilDate] = useState('2024-01-01');
  return (
    <div>
      <h5>Assignment Name</h5>
      <input
        value={assignment.title}
        className="form-control mb-2"
        onChange={(e) =>
          dispatch(selectAssignment({ ...assignment, title: e.target.value }))
        }
      />
      <textarea
        value={assignment.description}
        className="form-control"
        onChange={(e) =>
          dispatch(
            selectAssignment({ ...assignment, description: e.target.value })
          )
        }
      />
      <br />
      <div className="row mb-4">
        <div className="col-4 justify-content-end">
          <label className="col-form-label float-end">Points</label>
        </div>
        <div className="col-4 point-input">
          <input value={assignment.points} placeholder="100" />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-4 justify-content-end">
          <label className="col-form-label float-end">Assign</label>
        </div>
        <div className="col-4 assign-box">
          <div className="row" style={{ padding: '10px' }}>
            <div className="mb-3">
              <label className="form-label">Due</label>
              <input
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                id="due"
                className="form-control"
                type="date"
              />
            </div>
            <div className="mb-3">
              <div className="row">
                <div className="col">
                  <label className="form-label">Available from</label>
                  <input
                    value={availableFromDate}
                    onChange={(e) => setAvailableFromDate(e.target.value)}
                    id="due"
                    className="form-control"
                    type="date"
                  />
                </div>
                <div className="col">
                  <label className="form-label">Until</label>
                  <input
                    value={availableUntilDate}
                    onChange={(e) => setAvailableUntilDate(e.target.value)}
                    id="due"
                    className="form-control"
                    type="date"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <hr />
      <button
        onClick={() => {
          handleUpdateAssignment();
          navigate(`/Kanbas/Courses/${courseId}/Assignments`);
        }}
        className="btn btn-danger ms-2 float-end"
      >
        Save
      </button>
      <Link
        to={`/Kanbas/Courses/${courseId}/Assignments`}
        className="btn btn-seconary float-end"
        style={{ border: 'solid', borderColor: 'grey' }}
      >
        Cancel
      </Link>
    </div>
  );
}

export default AssignmentEditor;
