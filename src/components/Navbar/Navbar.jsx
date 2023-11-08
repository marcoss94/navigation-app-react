import NavLink from "../NavLink";
import "./Navbar.css";

function Navbar() {
  return (
    <section className="navbar-container">
      <nav>
        <ul>
          <li>
            <NavLink path="/" label="Home" />
          </li>
          <li>
            <NavLink path="/products" label="Products" />
          </li>
          <li>
            <NavLink path="/services" label="Services" />
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Navbar;
