"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Squash as Hamburger } from "hamburger-react";

import LogoTitle from "~/assets/svg/LogoTitle.svg";

const headerMenuItems: {
  label: string;
  link: string;
}[] = [
  { label: "About", link: "/about" },
  //{ label: "menu_solution", link: "/solution" },
  { label: "Product", link: "/product" },
  { label: "R&D", link: "/rnd" },
  { label: "News", link: "/news" },
  { label: "Contact", link: "/contact" },
];

type HeaderProps = {
  home?: boolean;
};

export default function Header({ home }: HeaderProps) {
  const curPath = usePathname();
  const [isMenuOpen, setMenuOpen] = React.useState(false); // menu is used on mobile only

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`max-md:hidden dtp flex justify-between items-center px-6 ${
          home ? "home" : "othr"
        }`}
      >
        <Link href="/" className="flex items-center">
          <Image src="/img/logo64.png" width={32} height={32} alt="logo" />
          <LogoTitle
            style={{ marginLeft: "8px", marginTop: "5px", height: "26px" }}
            //color={home ? "white" : "#B81D23"} // primary red
            color="white"
          />
        </Link>

        <nav className="grid grid-flow-col justify-stretch">
          {headerMenuItems.map((mnu) => (
            <div
              key={mnu.link}
              className={curPath.includes(mnu.link) ? "sel" : ""}
            >
              <Link href={mnu.link}>
                <span>{mnu.label}</span>
              </Link>
            </div>
          ))}
        </nav>
      </header>

      <header
        className={`md:hidden mob flex justify-between items-center px-6 ${
          isMenuOpen ? "menu" : ""
        } ${home ? "home" : "othr"}`}
      >
        <Link href="/" className="flex items-center" onClick={closeMenu}>
          <Image
            src="/img/logo64.png"
            width={32}
            height={32}
            alt="logo"
            className={`absolute ${isMenuOpen ? "hide" : "show"}`}
          />
          <Image
            src="/img/logo64b.png"
            width={32}
            height={32}
            alt="logo"
            className={`absolute ${isMenuOpen ? "show" : "hide"}`}
          />
          <LogoTitle
            style={{ marginLeft: "42px", marginTop: "5px", height: "26px" }}
            className={`${
              isMenuOpen ? "show" : "hide"
            } cursor-default pointer-events-none`}
          />
        </Link>

        <Hamburger
          toggled={isMenuOpen}
          toggle={setMenuOpen}
          color="white" //{home || isMenuOpen ? "home" : "othr"}
        />

        <div className={`fixed ${isMenuOpen ? "show" : "hide"}`}>
          <div className={isMenuOpen ? "block" : "hidden"}>
            {headerMenuItems.map((mnu, i) => (
              <Link key={mnu.link} href={mnu.link} onClick={closeMenu}>
                <h2
                  className={`text-center animate grow delay-${i} ${
                    curPath.includes(mnu.link) ? "sel" : ""
                  }`}
                >
                  {mnu.label}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}
