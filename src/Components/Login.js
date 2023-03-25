import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../Context/AppContext";

const Login = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');

  const loginfunc = useContext(AppContext);

  const LogFunc = ()=>{
    if(value2 === ""){

    }
    else{
      loginfunc.setLogin(true)
    }
  }

  return (
    <div className="flex flex-col flex-wrap">
      <p className="mt-40 mb-7 text-center">Please Log-in to use E-Bazzar</p>
      <p className="my-4 text-center">
        <input
          value={value1}
          onChange={(e)=>{setValue1(e.target.value)}}
          type="text"
          placeholder="username/email/phone"
          className="border border-gray-500 my-1 rounded-sm p-1"
        />
        <input
          value={value2}
          onChange={(e)=>{setValue2(e.target.vlaue)}}
          type="password"
          placeholder="Password"
          className="border border-gray-500 my-1 rounded-sm p-1"
        />
        <br />
        <button
          className=" bg-lime-700 px-2 rounded-lg mt-3 text-white"
          onClick={LogFunc}
        >
          Log-In
        </button>
      </p>
      <p className="text-sm mt-40 text-center">
        Don't have an Account ,create a{" "}
        <Link className="text-blue-700" to="/New">
          new account{" "}
        </Link>
        right now.
      </p>
    </div>
  );
};

export default Login;
