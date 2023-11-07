import { useSelector, useDispatch } from "react-redux";
import {
  markCourseComplete,
  unmarkCourseComplete,
  unenrollCourse,
} from "../Slice/courseSlice";

const Dashboard = () => {
  const dispatch = useDispatch();

  const enrolledCourses = useSelector((state) => state.courses.enrolledCourses);
  const completedCourses = useSelector(
    (state) => state.courses.completedCourses
  );
  const handleUnEnroll = (courseId) => {
    dispatch(unenrollCourse(courseId));
  };

  // Function to handle course completion toggle
  const toggleCourseComplete = (courseId) => {
    if (completedCourses.includes(courseId)) {
      dispatch(unmarkCourseComplete(courseId));
    } else {
      dispatch(markCourseComplete(courseId));
    }
  };

  const calculateCompletion = (courseId) => {
    return completedCourses.includes(courseId) ? 100 : 0;
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold underline p-4">
        Your Enrolled Courses
      </h1>
      <div className="enrolled-courses">
        {enrolledCourses.length > 0 ? (
          enrolledCourses.map((course) => (
            <div
              key={course.id}
              className="border p-4 rounded-lg mb-4 shadow-lg"
            >
              <h2 className="text-xl font-semibold">{course.name}</h2>
              <img
                src={course.thumbnail}
                alt={`Thumbnail for ${course.name}`}
                className="w-32 h-20 object-cover"
              />
              <p className="text-sm my-2">
                <strong>Instructor:</strong> {course.instructor}
              </p>
              <p className="text-sm my-2">
                <strong>Due:</strong> {course.dueDate}
              </p>
              <div className="progress-bar bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${calculateCompletion(course.id)}%` }}
                ></div>
              </div>
              <button
                className={`mt-3 p-2 text-white ${
                  completedCourses.includes(course.id)
                    ? "bg-red-500"
                    : "bg-green-500"
                } rounded-lg`}
                onClick={() => toggleCourseComplete(course.id)}
              >
                {completedCourses.includes(course.id)
                  ? "Mark as Incomplete"
                  : "Mark as Complete"}
              </button>
              <button
                onClick={() => handleUnEnroll(course.id)}
                className="w-full hover:text-red-400"
              >
                Un-Enroll
              </button>
            </div>
          ))
        ) : (
          <p>You are not enrolled in any courses.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
