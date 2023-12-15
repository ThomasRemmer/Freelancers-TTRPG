"use client";
import React, { useState, useEffect } from "react";
import LoginForm from "../components/loginForm";
import Nav from "../components/nav";

export default function Home() {
  const handleLogin = () => {
    console.log("login");
  };

  return (
    <>
      <main className="flex min-h-screen flex-col justify-between p-24">
        <LoginForm onLogin={handleLogin} />
      </main>
    </>
  );
}
