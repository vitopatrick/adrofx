"use client";
import Link from "next/link";
import RegisterForm from "./components/RegisterForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

export default function GetStarted() {
  return (
    // page Wrapper
    <>
      {/* main form wrapper */}
      <main
        style={{
          background:
            "url('https://adrofx.club/sites/all/themes/new_ib/front/images/register-bg.jpg')",
          backgroundPosition: "center center",
        }}
        className="md:h-screen h-[115vh]"
      >
        {/* container */}
        <div className="mx-auto p-4 md:w-[40%] w-[95%]">
          {/* header */}
          <div className="flex items-center justify-center text-center flex-col gap-2">
            <Link href="/">
              <img
                src="https://adrofx.club/sites/all/themes/new_ib/front/img/logo-white.svg"
                alt=""
              />
            </Link>
            <h4 className="text-white capitalize font-body font-light text-xl">
              Register now, it’s quick!
            </h4>
          </div>
          <RegisterForm />
        </div>
      </main>
      {/* End of Form Wrapper */}
      <ToastContainer className="toast" theme="colored" />
    </>
  );
}
