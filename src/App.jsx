import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Services from "./components/Services/Services";
import Products from "./components/Products/Products";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </main>
  );
}

export default App;
