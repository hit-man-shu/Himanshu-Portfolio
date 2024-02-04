import banner from "../assets/HdCircleBG.png";
import resumePdf from "../assets/Himanshu's Resume.pdf";

const Home = () => {
  return (
    <div className="mt-20 bg-bgShade" id="home">
      <div className="flex flex-col items-center justify-between gap-5 px-4 py-20 md:flex-row-reverse lg:px-12">
        <div className="w-full md:w-1/2">
          <img src={banner} alt="Banner" className="w-full" />
        </div>
        {/* left side */}
        <div className="mt-2 w-full md:w-1/2">
          <p className="mb-5 text-2xl font-semibold text-headingcolor">
            Hey, I am Himanshu
          </p>
          <h1 className="mb-5 text-4xl font-bold leading-snug text-headingcolor md:text-6xl  md:leading-[76px]">
            I am a<span className="text-primary">Web Developer</span>
          </h1>

          <a href={resumePdf} download>
            <button className="rounded-md bg-primary px-8 py-4 text-xl text-white transition-all duration-300 hover:translate-y-4 hover:bg-body">
              Download CV
            </button>
          </a>
        </div>
        {/* right side */}
      </div>
    </div>
  );
};

export default Home;
