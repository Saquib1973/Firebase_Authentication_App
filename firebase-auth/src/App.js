import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
function App() {
  const [auth, setAuth] = useState(true);
  function handleAuth() {
    setAuth(!auth);
  }
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

  //Handle Submit Function
  async function submit(e) {
    e.preventDefault();
  }

  return (
    <div className="App bg-red-200 min-h-screen flex items-center justify-center">
      <form
        onSubmit={(e) => submit(e)}
        action=""
        method="get"
        className="flex flex-col justify-evenly h-[25rem] px-10 py-4 rounded-3xl shadow-2xl bg-green-600"
      >
        <p className="text-center text-3xl font-semibold">
          {auth ? "Login" : "Register"}
        </p>
        <input
          type="text"
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

        <Link
          onClick={handleAuth}
          className="text-blue-600 hover:text-blue-500 transition-all duration-300 inline text-lg font-medium pl-4"
        >
          {auth ? "Register" : "Login"}
        </Link>

        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="bg-white text-sky-600 h-10 w-20 hover:bg-sky-300 hover:rounded-sm hover:text-white transition-all duration-100"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
