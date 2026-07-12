import "./App.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import FutureSelf from "./pages/FutureSelf/FutureSelf";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import SkipLink from "./components/SkipLink/SkipLink";

const Root = () => {
  return (
    <>
      <SkipLink />
      <Navbar />
      <main id="center" tabIndex={-1}>
        <Outlet />
      </main>
      <footer id="footer-content" tabIndex={-1}>
        <Footer />
      </footer>
    </>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Root />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/futureSelf" element={<FutureSelf />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
