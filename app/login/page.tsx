"use client";
import LoginForm from "@/components/login-form/LoginForm";
import JivoChatSupport from "@/hooks/JivoChatSupport";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";


export default function LoginPage() {
  return (
    <div
      style={{
        background:
          "url('https://adrofx.club/sites/all/themes/new_ib/front/images/register-bg.jpg')",
        backgroundPosition: "center center",
      }}
      className="h-screen"
    >
      {/* container */}
      <div className="md:w-[30%] w-[95%]  mx-auto p-4">
        {/* header */}
        <div className="flex items-center justify-center text-center flex-col gap-2">
          <Link href="/">
            <img
              src="https://adrofx.club/sites/all/themes/new_ib/front/img/logo-white.svg"
              alt=""
            />
          </Link>
          <h4 className="text-white capitalize font-body font-light text-xl">
            Access to Your personal cabinet
          </h4>
        </div>
        <LoginForm />
      </div>
      <ToastContainer theme="colored" className="toast" />
      <JivoChatSupport />
    </div>
  );
}
