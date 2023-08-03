import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Screens/Home";
import Login from "./Screens/Login";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path = "/" element={<Home/>} />
          <Route exact path = "/login" element={<Login/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
