import React, { useEffect, useState } from 'react';
import axios from 'axios';
function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: 'NodeJS Assignment',
    description: 'Create a NodeJS server with ExpressJS',
    due: '2021-10-10',
    completed: false,
    score: 0,
  });
  const [module, setModule] = useState({
    _id: 'M101',
    name: 'Introduction to Rocket Propulsion',
    description: 'Basic principles of rocket propulsion and rocket engines.',
    course: 'RS101',
    lessons: [
      {
        _id: 'L101',
        name: 'History of Rocketry',
        description: 'A brief history of rocketry and space exploration.',
        module: 'M101',
      },
      {
        _id: 'L102',
        name: 'Rocket Propulsion Fundamentals',
        description: 'Basic principles of rocket propulsion.',
        module: 'M101',
      },
      {
        _id: 'L103',
        name: 'Rocket Engine Types',
        description: 'Overview of different types of rocket engines.',
        module: 'M101',
      },
    ],
  });
  const ASSIGNMENT_URL = 'http://localhost:4000/a5/assignment';
  const MODULE_URL = 'http://localhost:4000/a5/module';
  const fetchAssignment = async () => {
    const response = await axios.get(`${ASSIGNMENT_URL}`);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios.get(
      `${ASSIGNMENT_URL}/title/${assignment.title}`
    );
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
  }, []);
  return (
    <div>
      <h2>Working With Objects</h2>
      <h3>Modifying Properties</h3>
      <input
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
        value={assignment.title}
        type="text"
      />
      <button onClick={updateTitle}>Update Title to: {assignment.title}</button>
      <button onClick={fetchAssignment}>Fetch Assignment</button>
      <h4>Modifying Properties</h4>
      <a href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>Update Title</a>
      <input
        type="text"
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
        value={assignment.title}
      />
      <br />
      <a href={`${MODULE_URL}/name/${module.name}`}>Update Module Name</a>
      <input
        type="text"
        onChange={(e) => setModule({ ...module, name: e.target.value })}
        value={module.name}
      />
      <br />
      <a href={`${ASSIGNMENT_URL}/score/${assignment.score}`}>
        Update Assignment Score
      </a>
      <input
        type="text"
        onChange={(e) =>
          setAssignment({ ...assignment, score: Number(e.target.value) })
        }
        value={assignment.score}
      />
      <br />
      <a href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}>
        Update Assignment Completed
      </a>
      <input
        type="checkbox"
        onClick={(e) =>
          setAssignment({ ...assignment, completed: !assignment.completed })
        }
      />
      <h4>Retrieving Objects</h4>
      <a href="http://localhost:4000/a5/assignment">Get Assignment</a>
      <br />
      <a href="http://localhost:4000/a5/module">Get Module</a>
      <h4>Retrieving Properties</h4>
      <a href="http://localhost:4000/a5/assignment/title">Get Title</a>
      <br />
      <a href="http://localhost:4000/a5/module/name">Get Module Name</a>
    </div>
  );
}
export default WorkingWithObjects;
