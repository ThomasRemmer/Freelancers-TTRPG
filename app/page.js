import React from "react";
import Nav from "../components/nav";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header className="flex flex-col items-center  min-h-screen text-6xl text-center">
        <Nav />
      </header>

      <footer className="flex flex-col items-center justify-center w-full h-24 border-t"></footer>
    </main>
  );
}
