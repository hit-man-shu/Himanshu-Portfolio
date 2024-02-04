import htmlcss from "../assets/html&css.png";
import react from "../assets/react.png";
import js from "../assets/js.png";

const skills = [
  {
    id: 1,
    name: "Html & CSS Advance",
    description:
      "I have an advanced understanding of HTML and CSS, including modern techniques such as flexbox and grid layouts. I can efficiently structure and style web pages to achieve desired designs.",
    image: htmlcss,
  },
  {
    id: 2,
    name: "JS Expert",
    description:
      "As a JavaScript expert, I possess a deep understanding of the language's core concepts and advanced features. I am proficient in implementing complex logic, asynchronous operations, and interactive functionality using JavaScript.",
    image: js,
  },
  {
    id: 3,
    name: "React Intermediate",
    description:
      "With intermediate skills in React, I can develop interactive user interfaces and single-page applications efficiently. I am familiar with React's component-based architecture, state management, and handling of lifecycle methods.",
    image: react,
  },
];

const Skills = () => {
  return (
    <div className="mx-4 py-32 lg:mx-12" id="skills">
      <div className="mb-20">
        <p className="mb-5 text-xl font-semibold text-headingcolor">
          My Skills
        </p>
        <h2 className="text-4xl font-bold text-headingcolor md:text-5xl">
          & Expertise
        </h2>
      </div>

      {/* skillis card */}
      <div className=" grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="cursor-pointer rounded-lg bg-bgShade p-8 transition-all duration-300 hover:-translate-y-5"
          >
            <img
              src={skill.image}
              alt=""
              className="mb-7 h-16 w-16 rounded-lg bg-white p-3 shadow-md"
            />
            <h3 className="mb-4 text-2xl font-bold">{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
