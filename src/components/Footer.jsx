import { Link } from "react-scroll";
import logo from "../assets/fotor-2024020410379.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-bgShade px-4 md:px-8">
      <div className="flex flex-col justify-between gap-8 py-4 md:flex-row md:items-center">
        <a href="/">
          <img src={logo} alt="" className="mx-auto w-14 md:mx-0" />
        </a>
        <div className="mx-auto flex flex-col flex-wrap gap-4 md:mx-0 md:flex-row md:items-center">
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
            className="block cursor-pointer px-4 py-2 hover:text-primary"
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
            className="block cursor-pointer px-4 py-2 hover:text-primary"
          >
            Portfolio
          </Link>
        </div>
        <div className="ml-4 flex items-center justify-center gap-4">
          <a
            href="https://www.facebook.com/himansu.sahoo.121"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="cursor-pointer text-xl transition-all duration-300 hover:-translate-y-3 hover:text-primary" />
          </a>
          <a
            href="https://www.instagram.com/_h_i_t_m_a_n_s_h_u_23/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="cursor-pointer text-xl transition-all duration-300 hover:-translate-y-3 hover:text-primary" />
          </a>
          <a
            href="https://twitter.com/Himansh78544996"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="cursor-pointer text-xl transition-all duration-300 hover:-translate-y-3 hover:text-primary" />
          </a>
          <a
            href="https://www.linkedin.com/in/hit-man-shu-sahoo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="cursor-pointer text-xl transition-all duration-300 hover:-translate-y-3 hover:text-primary" />
          </a>
        </div>
      </div>
      <hr />
      <div className="my-4 flex flex-col justify-between gap-8 text-center md:flex-row md:text-left">
        <p>Copyright by Himanshu 2024</p>
        <div className="space-x-6">
          <a href="/" className="hover:text-slate-400">
            Privacy Policy
          </a>
          <a href="/" className="hover:text-slate-400">
            Terms of Service
          </a>
          <a href="/" className="hover:text-slate-400">
            Cookies Settings
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
