import React, { useState } from "react";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const scrollUpHandler = () => {
    setActive("");
    window.scrollTo(0, 0);
  };

  const menuClickHandler = () => {
    setToggle((toggle) => !toggle);
  };

  const navigationLinks = navLinks.map((link) => (
    <li
      key={link.id}
      className={`${
        active === link.title ? "text-white" : "text-secondary"
      } hover:text-white text-[18px] font-medium cursor-pointer`}
      onClick={() => setActive(link.title)}
    >
      <a href={`#${link.id}`}>{link.title}</a>
    </li>
  ));

  const phoneNavLinkClickHandler = (link) => {
    menuClickHandler();
    setActive(link.title);
  };

  const phoneNavigationLinks = navLinks.map((link) => (
    <li
      key={link.id}
      className={`${
        active === link.title ? "text-white" : "text-secondary"
      } font-poppins font-medium cursor-pointer text-[16px]`}
      onClick={() => phoneNavLinkClickHandler(link)}
    >
      <a href={`#${link.id}`}>{link.title}</a>
    </li>
  ));

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={scrollUpHandler}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Alexandru Livadaru &nbsp;
            <span className="sm:block hidden">| Personal Portfolio</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navigationLinks}
        </ul>
        <div className="flex flex-1 justify-end items-center sm:hidden">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={menuClickHandler}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {phoneNavigationLinks}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;