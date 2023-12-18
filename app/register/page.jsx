"use client";
import RegisterForm from "../../components/registerForm";
import React, { useState } from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function RegisterPage() {
  return (
    <>
      <RegisterForm />
    </>
  );
}
