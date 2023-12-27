import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./index.css";
import Tracker from "./components/Tracker";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className=" h-screen w-full flex flex-col text-red-600 justify-center items-center">
              <h1 className="text-4xl">Bosta Task</h1>
              <p className="text-xl">you can try with this ids</p>
              <Link to="/tracker/7234258" className="underline">
                7234258
              </Link>
              <Link to="/tracker/13737343" className="underline">
                13737343
              </Link>
              <Link to="/tracker/67151313" className="underline">
                67151313
              </Link>
            </div>
          }
          index
        />
        <Route path="/tracker/:id" element={<Tracker />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
