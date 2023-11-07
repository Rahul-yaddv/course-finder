import { useSelector, useDispatch } from "react-redux";
import { selectFilteredCourses, enrollCourse } from "../Slice/courseSlice";
import { Link } from "react-router-dom";

export default function Courses() {
  // Use the selector to get the filtered courses
  const dispatch = useDispatch();

  const enrolledCourses = useSelector((state) => state.courses.enrolledCourses);
  const courses = useSelector(selectFilteredCourses);
  const handleEnroll = (course) => {
    dispatch(enrollCourse(course));
  };
  const isCourseEnrolled = (courseId) => {
    return enrolledCourses.some(
      (enrolledCourse) => enrolledCourse.id === courseId
    );
  };

  return (
    <div className="flex flex-wrap justify-center lg:justify-start gap-10 pt-16 sm:pl-8">
      {courses.map((course) => (
        <div
          key={course.id}
          className="border-2 w-96 h-[48rem] flex flex-col rounded-md shadow-xl transition ease-in-out  hover:-translate-y-1 hover:scale-105 duration-300"
        >
          <h2 className="text-xl text-center p-2">{course.name}</h2>
          <img
            className="h-80 w-full pt-4 "
            src={course.thumbnail}
            alt={`Thumbnail for ${course.name}`}
          />
          <p className="text-left p-2">{course.description}</p>
          <p className="px-2">
            <strong>Instructor:</strong> {course.instructor}
          </p>
          <p className="px-2">
            <strong>Duration:</strong> {course.duration}
          </p>
          <p className="px-2">
            <strong>Schedule:</strong> {course.schedule}
          </p>
          <ul className="flex flex-col gap-1 p-2">
            <strong>Prerequisites:</strong>
            {course.prerequisites.map((prerequisite, index) => (
              <li key={index} className="border-2 rounded-sm p-2">
                {prerequisite}
              </li>
            ))}
          </ul>
          <Link
            to={`/courses/${course.id}`}
            key={course.id}
            className="flex justify-center text-xl hover:text-blue-800"
          >
            Course details
          </Link>
          <button
            onClick={() => handleEnroll(course)}
            disabled={isCourseEnrolled(course.id)} // Disable button if course is enrolled
            className={`text-xl pt-4 ${
              isCourseEnrolled(course.id)
                ? "hover:text-gray-500"
                : "hover:text-green-500"
            }`}
          >
            {isCourseEnrolled(course.id) ? (
              <div>Already enrolled</div>
            ) : (
              <div>Enroll</div>
            )}
          </button>
          {/* <button
            onClick={() => handleEnroll(course)}
            className="text-xl hover:text-green-500 pt-4"
          >
            Enroll
          </button> */}
        </div>
      ))}
    </div>
  );
}
