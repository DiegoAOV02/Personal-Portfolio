import TypingEffect from "../TypingEffect/TypingEffect";

function About() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-16 bg-gray-100">
      <TypingEffect />
      <p className="max-w-2xl text-center text-gray-700">
        My name is Diego, I'm a IT Engineer with a strong passion for technology
        and AI. I have experience working with different fullstack technologies,
        including React, Node.js, and Python. I enjoy building web applications
        that solve real-world problems and improve user experiences. I am always
        eager to learn new skills and stay updated with the latest trends in the
        tech industry.
      </p>
    </div>
  );
}

export default About;
