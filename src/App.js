import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./index.css";
import Form from "react-bootstrap/Form";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Firstform from "./home";
import Page2 from "./page2";
import Page3 from "./page3";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Firstform />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
