import Link from "next/link";
import React from "react";
import { Menu } from "lucide-react";

type Props = {};

const links = [
  {
    id: 3,
    name: "About Us",
    path: "/about",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = (props: Props) => {
  return (
    <nav className="sticky top-0 bg-white z-50">
      {/* container */}
      <div className="flex w-[80%] mx-auto py-4 px-2 justify-between items-center">
        <div className="w-[150px]">
          <Link href="/">
            <img
              src="https://adrofx.com/themes/custom/adrofx_theme/img/adro-fx-logo.svg"
              alt="logo"
              className="w-full"
            />
          </Link>
        </div>

        {/* <div className="space-x-6 hidden md:block">
          {links.map((link) => (
            <Link
              href={link.path}
              key={link.id}
              className="font-body uppercase tracking-widest font-semibold hover:underline"
            >
              {link.name}
            </Link>
          ))}
        </div> */}
        <div className="flex gap-4">
          <Link
            href="/login"
            className="font-body hidden  font-semibold border border-blue-400 text-blue-400 uppercase   rounded-md px-6 py-3 w-full md:block"
          >
            Login
          </Link>
          <Link
            href="/get-started"
            className="font-body font-semibold bg-blue-400 uppercase text-white rounded-md px-6 py-3 w-full block"
          >
            Register
          </Link>
        </div>
        <button className="hidden">
          <Menu />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
