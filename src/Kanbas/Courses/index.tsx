import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';
import { HiMiniBars3 } from 'react-icons/hi2';
import CourseNavigation from './Navigation';
import Modules from './Modules';
import Home from './Home';
import Assignments from './Assignments';
import AssignmentEditor from './Assignments/Editor';
import Grades from './Grades';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Courses({ courses }: { courses: any[] }) {
  const { courseId } = useParams();
  const COURSES_API =
    'https://kanbas-node-server-app-tejb.onrender.com/api/courses';
  const [course, setCourse] = useState<any>({ _id: '' });
  const findCourseById = async (courseId?: string) => {
    const response = await axios.get(`${COURSES_API}/${courseId}`);
    setCourse(response.data);
  };
  const locationArr = useLocation().pathname.split('/');
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);
  
  return (
    <div>
      <div style={{ marginLeft: '25px', marginTop: '10px' }}>
        <h1>
          <span style={{ color: 'red' }}>
            <HiMiniBars3 /> Course {course?.name}
          </span>{' '}
          <span style={{ color: 'grey' }}>&gt;</span>{' '}
          {locationArr[locationArr.length - 1]}
        </h1>
        <hr />
      </div>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0 margin-top-30px"
          style={{ left: '320px', top: '50px' }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;
