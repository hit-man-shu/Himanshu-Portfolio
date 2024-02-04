import { Link } from "react-scroll";
import proPic from "../assets/AboutImg.jpg";

const About = () => {
  return (
    <div className="mx-4 lg:mx-12" id="about">
      <div className="flex flex-col items-center justify-between gap-12 sm:flex-row md:gap-24">
        <div className="sm:w-1/2">
          <img
            src={proPic}
            alt="Himansu Sahoo"
            className="w-full p-16 sm:w-11/12 sm:p-4"
          />
        </div>
        <div className="py-4 sm:m-12 sm:w-1/2">
          <h2 className="text-4xl font-bold text-headingcolor md:text-5xl">
            About Me
          </h2>
          <p className="mb-8 mt-8 md:pr-8">
            Hey there! I'm Himansu Sahoo, a passionate individual hailing from
            Cuttack, Odisha. I recently completed my engineering degree from
            Gita Autonomous College, where I graduated with an impressive 8.5
            CGPA.
            <br />
            <br />
            During my academic journey, I've honed my skills in various aspects
            of computer science and engineering, with a keen interest in
            software development and programming.
            <br />
            <br />
            I've had the opportunity to gain practical experience through a
            4-month internship at Race 2Cloud, an IT company based in Bangalore,
            specializing in Zoho-based solutions. This experience has further
            fueled my passion for technology and provided me with valuable
            insights into the industry.
            <br />
            <br />
            When I'm not coding, you can find me exploring new technologies,
            reading books, or indulging in outdoor activities. I'm always eager
            to learn and grow professionally, and I'm excited about the
            opportunities that lie ahead in my career journey.
          </p>

          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-100}
            to="contacts"
            className="block  cursor-pointer px-4 py-2 hover:text-gray-400"
          >
            <button className="rounded-md bg-primary px-8 py-4 text-xl text-white transition-all duration-300 hover:bg-body">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
