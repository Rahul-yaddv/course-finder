import { useState } from "react";
import PropTypes from "prop-types";
const ExpandableItem = ({ week, topic, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full p-5 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-lg">{`Week ${week}: ${topic}`}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`${
          isOpen ? "max-h-96" : "max-h-0"
        } overflow-hidden transition-max-height duration-300 ease-in-out`}
      >
        <p className="p-5">{content}</p>
      </div>
    </div>
  );
};

ExpandableItem.propTypes = {
  week: PropTypes.number.isRequired,
  topic: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
export default ExpandableItem;
