import "./App.css";
import React from "react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import MyTicket from "./pages/MyTicket";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/myticket" element={<MyTicket />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
