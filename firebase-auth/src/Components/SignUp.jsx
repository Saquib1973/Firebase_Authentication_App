import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
const SignUp = () => {
  const Navigate = useNavigate();
  const [err, setErr] = useState("");
  const [data, setdata] = useState({
    name: "",
    email: "",
    password: "",
  });
  //Handle Change function
  function handleChange(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setdata(newdata);
    console.log(newdata);
  }

  //Handle Submit Function

  //Function to handle form submission
  function handleSubmission(e) {
    if (!data.name || !data.email || !data.name) {
      setErr("Please Fill Form");
      return;
    }
    setErr("");
    e.preventDefault();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(async (res) => {
        console.log(res);
        const user = res.user;
        await updateProfile(user, {
          displayName: data.name,
        });
        console.log(user);
        Navigate("/login");
      })
      .catch((err) => {
        setErr(err.message);
        console.log(err.message);
      });
  }

  return (
    <div className="App bg-sky-200 min-h-screen flex items-center justify-center">
      <form
        onSubmit={(e) => handleSubmission(e)}
        action=""
        method="get"
        className="flex flex-col justify-evenly items-center h-[30rem] w-[30rem] px-10 py-4 rounded-3xl shadow-2xl bg-blue-600"
      >
        <p className="text-center text-3xl font-semibold text-white">
          Register
        </p>
        <input
          type="text"
          id="name"
          value={data.name}
          onChange={(e) => handleChange(e)}
          placeholder="Name"
          className="min-h-[2rem] w-50 md:w-64 rounded p-2 focus:bg-sky-100 focus:text-blue-500 focus:font-base "
        />
        <input
          type="email"
          id="email"
          value={data.email}
          onChange={(e) => handleChange(e)}
          placeholder="Email"
          className="min-h-[2rem] w-50 md:w-64 rounded p-2 focus:bg-sky-100 focus:text-blue-500 focus:font-base "
        />
        <input
          autoComplete="true"
          type="password"
          placeholder="Password"
          id="password"
          value={data.password}
          onChange={(e) => handleChange(e)}
          className="min-h-[2rem] w-50 md:w-64 rounded p-2 focus:bg-sky-100 focus:text-blue-500 focus:font-base"
        />

        <p className="text-red-400 font-bold text-lg pt-3">{err}</p>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="bg-white text-sky-600 h-10 w-20 hover:bg-sky-300 hover:scale-[1.2] hover:rounded-sm hover:text-white transition-all duration-400"
          >
            Submit
          </button>
        </div>
        <div className="flex items-center justify-center pr-10 text-white">
          <p>Already Registered ?</p>
          <Link
            to="/login"
            className=" pl-2 hover:text-red-400 transition-all duration-300 inline text-xl font-bold"
          >
            Login..
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
