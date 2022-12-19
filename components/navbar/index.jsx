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
    <div className="bg-dark-blue py-5">
      <Wrapper>
        <div className="flex justify-between items-center text-white">
          <div className="flex gap-4">
            <Image src={menu} alt="menu" />
            <div className="flex gap-3">
              <Image src={tamulogo} alt="TUM" />
              <span className="md:text-sm md:leading-tight md:flex hidden ">
                Technical <br /> University <br /> of Munich
              </span>
            </div>
          </div>
          <div className="flex gap-3 items-center text-sm  font-medium ">
            <ul className="md:flex gap-5  mr-12 hidden">
              <Link href="/news">
                <li>NEWS AND EVENTS</li>
              </Link>

              <Link href="/studies">
                <li>STUDIES</li>
              </Link>

              <Link href="/lifelong">
                <li>LIFE LONG LEARNING</li>
              </Link>

              <Link href="/research">
                <li>RESEARCH</li>
              </Link>

              <Link href="/innovation">
                <li>INNOVATION</li>
              </Link>
              <Link href="/community">
                <li>COMMUNITY</li>
              </Link>
              <Link href="/about">
                <li>ABOUT TUM</li>
              </Link>
            </ul>

            <div className="flex gap-2 ">
              <p className="border-r-2 border-white px-2 text-slate-300">DE</p>
              <p>ENG</p>
            </div>
            <Image src={search} alt="search" />

          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Navbar;
