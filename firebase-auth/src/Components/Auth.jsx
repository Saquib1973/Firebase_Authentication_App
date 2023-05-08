import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
const Auth = () => {
  const Navigate = useNavigate();
  const [err, setErr] = useState("");
  const [data, setdata] = useState({
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

  //Function to handle form submission
  async function handleSubmission(e) {
    e.preventDefault();
    if (!data.email || !data.password) {
      setErr("Please Fill Form");
      return;
    }
    setErr("");
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((res) => {
        console.log(res.user);
        Navigate("/");
      })
      .catch((err) => {
        setErr(err.message);
        console.log(err.message);
        return;
      });
  }

  return (
    <div className="App bg-sky-200 min-h-screen flex items-center justify-center">
      <form
        onSubmit={(e) => handleSubmission(e)}
        action=""
        method="get"
        className="flex flex-col items-center justify-evenly h-[25rem] w-[30rem] px-10 py-4 rounded-3xl shadow-2xl bg-blue-600"
      >
        <p className="text-center text-3xl font-semibold text-white">Login</p>
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
            className="bg-white text-sky-600 h-10 w-20 hover:scale-[1.2] hover:bg-sky-300 hover:rounded-sm hover:text-white transition-all duration-100"
          >
            Submit
          </button>
        </div>
        <div className="flex items-center justify-center pr-10 text-white">
          <p>Already Registered ?</p>
          <Link
            to="/signup"
            className=" pl-2 hover:text-red-400 transition-all duration-300 inline text-xl font-bold"
          >
            Register..
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Auth;
