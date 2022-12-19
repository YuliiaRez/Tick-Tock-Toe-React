import React from "react";
import { FaTimes, FaPen, FaRegCircle, FaCross } from "react-icons/fa";
const Icon = ({ name }) => {
  switch (name) {
    case "circle":
      return <FaRegCircle className="icon" />;
      break;
    case "circle":
      return <FaCross className="icon" />;
      break;
    default:
      return <FaPen className="icon" />;
      break;
  }
};
export default Icon;
