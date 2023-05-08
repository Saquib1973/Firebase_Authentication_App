import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Auth from "./Components/Auth";
import SignUp from "./Components/SignUp";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
function App() {
  const [userData, setUserData] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserData(user.displayName);
      } else {
        setUserData("");
      }
    });
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home name={userData} />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
