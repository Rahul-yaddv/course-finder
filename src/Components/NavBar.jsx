import { useDispatch } from "react-redux";
import { setSearchQuery } from "../Slice/courseSlice";
import { Link } from "react-router-dom";

export default function NavBar() {
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    // Dispatch the action to update the search query in the Redux state
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div className="flex flex-col sm:flex-row justify-around pt-8 items-center">
      <Link
        to={`/`}
        className="flex justify-center text-xl hover:text-blue-800"
      >
        <div className="text-3xl">Courses Finder</div>
      </Link>
      <Link to="/dashboard" className="nav-link">
        Dashboard
      </Link>
      <div className="border-2 mt-2 flex justify-between w-4/5 sm:w-96 rounded-lg">
        <input
          className="focus:outline-none text-xl px-2 h-10"
          placeholder="Course/instructor name"
          onChange={handleSearchChange} // Set the search handler here
        />
        <button className="flex justify-center items-center w-10">
          <img src="/search.png" className="w-4 hover:cursor-pointer" />
        </button>
      </div>
    </div>
  );
}
