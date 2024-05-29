import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import "./index.css";
import BreadcrumbBar from "./BreadcrumbBar";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";

interface Course {
  _id: string;
  // Add other course properties as needed
}

interface CoursesProps {
  courses: Course[];
}

function Courses({ courses }: CoursesProps) {
  const { courseId } = useParams<{ courseId: string }>();
  const course = courses.find((course) => course._id === courseId);

  if (!course) {
    return <h1>Course not found</h1>; // Or redirect to a default page
  }

  return (
    <>
      {/* Breadcrumb bar */}
      <div className="d-none d-md-flex col-md-auto d-flex flex-row align-items-center mt-2">
        <BreadcrumbBar />
      </div>
      <hr className="d-none d-md-flex" />

      <div className="row">
        {/* Course Navigation */}
        <CourseNavigation />

        {/* Course Content */}
        <div className="col col-lg overflow-y-scroll">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="ZoomMeetings" element={<h1>Zoom Meetings</h1>} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Quizzes" element={<h1>Quizzes</h1>} />
            <Route path="Grades" element={<Grades />} />
            <Route path="People" element={<h1>People</h1>} />
            <Route path="PanoptoVideo" element={<h1>Panopto Video</h1>} />
            <Route path="Discussions" element={<h1>Discussions</h1>} />
            <Route path="Announcements" element={<h1>Announcements</h1>} />
            <Route path="Pages" element={<h1>Pages</h1>} />
            <Route path="Files" element={<h1>Files</h1>} />
            <Route path="Outcomes" element={<h1>Outcomes</h1>} />
            <Route path="Collaborations" element={<h1>Collaborations</h1>} />
            <Route path="Syllabus" element={<h1>Syllabus</h1>} />
            <Route path="Settings" element={<h1>Settings</h1>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Courses;

