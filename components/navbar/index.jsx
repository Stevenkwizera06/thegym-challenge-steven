/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Wrapper from "../layout/wrapper";
import React from "react";
import Image from "next/image";
import tamulogo from "../../public/images/tum-logo.svg";
import menu from "../../public/icons/menu.svg";
import search from "../../public/icons/search.svg";

function Navbar() {
  return (
    <div className="bg-[#0A2D57]  fixed z-50 w-full flex justify-between text-white py-5 px-5 md:px-10">
    <div className="flex gap-x-2">
      <Image src={menu} width={33} height={33} alt="logo" />
      <Image src={tamulogo} width={82} height={42} alt="logo" />
      <span className="hidden xl:block text-xs">
        Technical <br />
        University <br />
        of Munich
      </span>
    </div>
    <div className="flex mt-2 md:mt-3 gap-x-5 md:gap-x-10 font-semibold text-sm uppercase">
      <ul className="hidden xl:flex gap-x-5">
        <Link href="/" className="hover:border-b-4">News and events</Link>
        <Link href="/studies" className="hover:border-b-4">STUDIES</Link>
        <Link href="/lifelong" className="hover:border-b-4">lifelong learning</Link>
        <Link href="/research" className="hover:border-b-4">Research</Link>
        <Link href="/innovation" className="hover:border-b-4">Innovation</Link>
        <Link href="/community" className="hover:border-b-4">Community</Link>
        <Link href="/about" className="hover:border-b-4">About Tum</Link>
      </ul>
      <div>
        <span className="border-r pr-1 mr-1 text-gray-700">DE</span>
        <span>EN</span>
      </div>
      <Image src={search} className="-mt-5" width={24} height={24} alt="search" />
      <Image src={menu} className="xl:hidden -mt-5" width={24} height={24} alt="search" />
    </div>
  </div>
  );
}

export default Navbar;
