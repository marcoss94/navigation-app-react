/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function NavLink({ path, label }) {
  return <Link to={path}>{label}</Link>;
}

export default NavLink;
