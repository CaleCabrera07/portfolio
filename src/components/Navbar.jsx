import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex flex-col py-5 fixed top-0 z-20 ${
        scrolled || toggle ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-14 h-14 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            CaleCode &nbsp;
            <span className='sm:block hidden'> | Software Studio</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
        </div>
      </div>

      <div
        className={`${
          !toggle ? "hidden" : "flex"
        } sm:hidden flex-col w-full bg-primary border-t border-white border-opacity-10 mt-5`}
      >
        {navLinks.map((nav) => (
          <a
            key={nav.id}
            href={`#${nav.id}`}
            onClick={() => {
              setToggle(false);
              setActive(nav.title);
            }}
            className={`${
              active === nav.title ? "text-white" : "text-secondary"
            } hover:text-white hover:bg-tertiary text-[18px] font-medium px-6 py-4 w-full transition-colors duration-200`}
          >
            {nav.title}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
