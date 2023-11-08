/* eslint-disable react/prop-types */
import "./Menu.css";
function Menu({ setPage }) {
  return (
    <ul className="menu">
      <li className="menu-item" onClick={() => setPage("home")}>
        Home
      </li>
      <li className="menu-item" onClick={() => setPage("about")}>
        About
      </li>
      <li className="menu-item" onClick={() => setPage("projects")}>
        Projects
      </li>
      <li className="menu-item" onClick={() => setPage("clients")}>
        Clients
      </li>
      <li className="menu-item" onClick={() => setPage("contact")}>
        Contact
      </li>
    </ul>
  );
}

export default Menu;
