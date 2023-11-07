import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ExpandableItem from "./expandableItem";
import { enrollCourse } from "../Slice/courseSlice";

const CourseDetails = () => {
  const { courseId } = useParams(); // This hook allows you to grab the courseId from the URL
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.allCourses); // Access the courses from the Redux store
  const course = courses.find((c) => c.id.toString() === courseId); // Find the course with the matching ID

  if (!course) {
    return <div>Course not found</div>;
  }
  const handleEnroll = (course) => {
    dispatch(enrollCourse(course));
  };

  return (
    <div className="flex flex-wrap justify-center gap-10 pt-16 sm:pl-8">
      <div
        key={course.id}
        className="border-2 sm:w-2/4 h -[48rem] flex flex-col"
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
          <strong>Instructor:</strong>
          {course.location}
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
        <p className="flex justify-center">
          <strong>Syllabus:</strong>
        </p>
        {course.syllabus.map((item, index) => (
          <ExpandableItem
            key={index}
            week={item.week}
            topic={item.topic}
            content={item.content}
          />
        ))}
        <button
          onClick={() => handleEnroll(course)}
          className="w-full hover:text-green-400"
        >
          Enroll
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;
