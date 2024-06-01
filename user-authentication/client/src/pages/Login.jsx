import React, { useState } from "react";

const defaultValues = {
  email: "",
  password: "",
};

export default function Login() {
  const [loginInput, setLoginInput] = useState(defaultValues);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    } catch (error) {}
  };

  const handleOnChange = (e) => {
    setLoginInput((prevVal) => ({
      ...prevVal,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="__login w-full h-[calc(100dvh-60px)] bg-slate-800 text-white flex justify-center items-center flex-col gap-3">
      <h1 className="text-3xl">Login Page</h1>
      <form onSubmit={handleSubmit} action="" className="flex flex-col gap-2">
        <input
          type="text"
          className="text-black outline-none p-2 rounded"
          placeholder="Enter your Email" 
          required
          name="email"
          value={loginInput.email}
          onChange={handleOnChange}
        />
        <input
          type="password"
          className="text-black outline-none p-2 rounded"
          placeholder="Enter your Password"
          required
          name="password"
          value={loginInput.password}
          onChange={handleOnChange}
        />
        <button type="submit" className="primary-btn">
          Login
        </button>
      </form>
    </div>
  );
}
