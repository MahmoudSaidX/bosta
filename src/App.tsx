import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Tracker from "./components/Tracker";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>hello</div>} index />
        <Route path="/tracker/:id" element={<Tracker />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
