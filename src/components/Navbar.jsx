/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import logo from "../assets/fotor-2024020410379.png";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 w-full">
      <nav
        className={`bg-white px-4 py-4 md:px-12 ${
          isSticky ? "sticky left-0 right-0 top-0 bg-white " : ""
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex cursor-pointer items-center gap-2 text-lg font-bold text-white">
            <img src={logo} alt="" className="h-10" />
            <p className="text-black">
              Himanshu's <span className="text-primary">Portfolio</span>
            </p>
          </div>

          {/* for larger device */}
          <div className="hidden items-center gap-3 text-body lg:flex">
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="home"
              className="block cursor-pointer px-4 py-2 text-primary hover:text-primary"
            >
              Home
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="about"
              className="block  cursor-pointer px-4 py-2 hover:text-primary"
            >
              About me
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="skills"
              className="block cursor-pointer px-4 py-2 hover:text-primary"
            >
              Skills
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="portfolio"
              className="block  cursor-pointer px-4 py-2 hover:text-primary"
            >
              Portfolio
            </Link>
          </div>

          {/* contact me btn */}
          <div className="hidden lg:block">
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="contacts"
              className="block  cursor-pointer px-4 py-2 hover:text-primary"
            >
              <button className="rounded border border-primary bg-transparent px-4 py-2 text-primary transition-all duration-300 hover:bg-primary hover:text-white">
                Contact Me
              </button>
            </Link>
          </div>

          {/* btn for small devices */}
          <button onClick={toggleMenu} className="text-3xl text-body lg:hidden">
            <HiMenu />
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mt-4 rounded-lg bg-body p-4 text-white">
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="home"
              className="block py-2 hover:text-primary"
            >
              Home
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="skills"
              className="block py-2 hover:text-primary"
            >
              Skills
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="about"
              className="block py-2 hover:text-primary"
            >
              About me
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="portfolio"
              className="block py-2 hover:text-primary"
            >
              Portfolio
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
