import { createSlice } from "@reduxjs/toolkit";
import courses from "../../data/data";
export const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    allCourses: courses,
    enrolledCourses: [],
    searchQuery: "",
    completedCourses: [],
  },
  reducers: {
    // Action to set all courses (you would use this when fetching courses data)
    setAllCourses: (state, action) => {
      state.allCourses = action.payload;
    },
    // Action to set the search query
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    enrollCourse: (state, action) => {
      // Prevent duplicate enrollment
      const isAlreadyEnrolled = state.enrolledCourses.some(
        (course) => course.id === action.payload.id
      );

      if (!isAlreadyEnrolled) {
        state.enrolledCourses.push(action.payload);
      }
    },
    // Action to unenroll from a course
    unenrollCourse: (state, action) => {
      state.enrolledCourses = state.enrolledCourses.filter(
        (course) => course.id !== action.payload
      );
    },
    markCourseComplete: (state, action) => {
      // Adds the course id to the completedCourses array if it's not already there
      if (!state.completedCourses.includes(action.payload)) {
        state.completedCourses.push(action.payload);
      }
    },
    // You might also want to handle unmarking a course as complete
    unmarkCourseComplete: (state, action) => {
      state.completedCourses = state.completedCourses.filter(
        (id) => id !== action.payload
      );
    },
  },
});

export const {
  setAllCourses,
  setSearchQuery,
  enrollCourse,
  unenrollCourse,
  markCourseComplete,
  unmarkCourseComplete,
} = coursesSlice.actions;

// Selector for the filtered courses based on search query
export const selectFilteredCourses = (state) => {
  const { allCourses, searchQuery } = state.courses;
  if (!searchQuery.trim()) return allCourses;

  const lowercasedQuery = searchQuery.toLowerCase();
  return allCourses.filter(
    (course) =>
      course.name.toLowerCase().includes(lowercasedQuery) ||
      course.instructor.toLowerCase().includes(lowercasedQuery)
  );
};

export const selectCompletedCourses = (state) => {
  return state.courses.completedCourses.map((courseId) =>
    state.courses.allCourses.find((course) => course.id === courseId)
  );
};

// Selector to check if a course is enrolled
export const selectIsCourseEnrolled = (state, courseId) => {
  return state.courses.enrolledCourses.some((course) => course.id === courseId);
};

export default coursesSlice.reducer;
