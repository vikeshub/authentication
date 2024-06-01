import React,{useState} from "react";

const defaultValues = {
  email: "",
  username: "",
  password: "",
};
export default function Signup() {
  const [signupInput, setsignupInput] = useState(defaultValues);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    } catch (error) {}
  };

  const handleOnChange = (e) => {
    setsignupInput((prevVal) => ({
      ...prevVal,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="__login w-full h-[calc(100dvh-60px)] bg-slate-800 text-white flex justify-center items-center flex-col gap-3">
      <h1 className="text-3xl">Signup Page</h1>
      <form onSubmit={handleSubmit} action="" className="flex flex-col gap-2">
      <input
          type="text"
          className="text-black outline-none p-2 rounded"
          placeholder="Enter your Username"
          required
          name="username"
          value={signupInput.username}
          onChange={handleOnChange}
        />
        
        <input
          type="text"
          className="text-black outline-none p-2 rounded"
          placeholder="Enter your Email"
          required
          name="email"
          value={signupInput.email}
          onChange={handleOnChange}
        />
        
        <input
          type="password"
          className="text-black outline-none p-2 rounded"
          placeholder="Enter your Password"
          required
          name="password"
          value={signupInput.password}
          onChange={handleOnChange}
        />
        <button type="submit" className="primary-btn">
          Sign up
        </button>
      </form>
    </div>
  );
}
