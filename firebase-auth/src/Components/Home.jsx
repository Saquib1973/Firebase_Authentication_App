import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
const Home = (props) => {
  function sign_out() {
    signOut(auth)
      .then(() => {
        console.log("SignOut Succesfull");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-sky-200">
      <header className="flex justify-evenly items-center min-w-full h-40">
        {props.name === "" ? (
          <Link
            className="text-4xl text-blue-800 hover:text-blue-500 font-semibold"
            to="/login"
          >
            Login
          </Link>
        ) : (
          <Link
            className="text-4xl text-red-600 hover:text-red-400 font-semibold"
            onClick={sign_out}
          >
            Logout
          </Link>
        )}

        <h1 className="text-3xl">
          {props.name ? `Welcome : ${props.name}` : "Login Please"}
        </h1>
      </header>
      <div className="h-[50vh] flex flex-col items-center justify-center text-6xl text-center border-4 px-10 border-blue-400 rounded-[5rem] text-blue-800">
        Welcome to Firebase Authentication Application
        <br />
        <br />
        {props.name === "" ? "Please Login" : `${props.name}`}
      </div>
    </div>
  );
};

export default Home;
