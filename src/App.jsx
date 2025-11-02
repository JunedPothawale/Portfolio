import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/layout/UserLayout";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import About from "./pages/About";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="/admin" element=""></Route>
          <Route path="*" element={<div>404 Page not found</div>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
