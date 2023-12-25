import { Route, Routes } from "react-router-dom";
import "./index.css";
import Tracker from "./components/Tracker";

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>hello</div>} />
      <Route path="/tracker/:id" element={<Tracker />} />
    </Routes>
  );
}

export default App;
