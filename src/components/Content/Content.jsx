/* eslint-disable react/prop-types */
import { About } from "../pages/About";
import { Clients } from "../pages/Clients";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";
import { Projects } from "../pages/Projects";
import "./Content.css";

function Content({ page }) {
  const renderPage = (page) => {
    switch (page) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "clients":
        return <Clients />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <h1>No se selecciono nada</h1>;
    }
  };
  return <section className="content">{renderPage(page)}</section>;
}

export default Content;
