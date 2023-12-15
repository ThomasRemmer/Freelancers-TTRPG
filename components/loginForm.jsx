// LoginForm.js
import React from "react";
import Link from "next/link";

export default function LoginForm({ onLogin }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin();
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400 bg-slate-400">
        <h1 className="text-xl font-bold my-4"> Enter the details</h1>

        <form className="flex flex-col gap-3">
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
            Submit
          </button>
          <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
            error
          </div>

          <Link href="/register"> Dont have an account? </Link>
        </form>
      </div>
    </div>
  );
}
