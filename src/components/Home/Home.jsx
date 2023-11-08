import { useState } from "react";
import Menu from "../Menu/Menu";
import Content from "../Content/Content";
import "./Home.css";

function Home() {
  const [page, setPage] = useState("home");
  return (
    <section className="home">
      <Menu setPage={setPage} />
      <Content page={page} />
    </section>
  );
}

export default Home;
