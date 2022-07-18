import { Routes, Route } from "react-router-dom";

//Components
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="bg-gray-300 min-h-screen flex flex-col">
      <Header />
      <div className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
