// import TypingEffect from "../TypingEffect/TypingEffect";

function About() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-16 bg-gray-700">
      {/* <TypingEffect /> */}
      <h1 className="text-4xl md:text-5xl font-bold">
        Welcome to my portfolio!
      </h1>
      <div className="h-6" />
      <p className="max-w-4xl text-justify text-gray-100 text-lg md:text-lg leading-relaxed">
        I’m Diego, an IT Engineer with a strong interest in building scalable
        and impactful digital solutions. My background spans web development
        focused on sustainability, and data analysis, allowing me to approach
        problems from both technical and analytical perspectives.
        <br />
        <br />
        I have experience collaborating with multidisciplinary teams to design,
        develop, and automate solutions that improve workflows and support
        project managers and stakeholders in achieving their goals. I enjoy
        contributing in environments where knowledge sharing, adaptability, and
        continuous improvement are valued.
        <br />
        <br />
        Beyond professional work, I actively build web applications for personal
        and exploratory projects. I am highly motivated to learn new
        technologies and frameworks, and I am always open to joining teams where
        I can grow, contribute, and create meaningful impact together.
      </p>
    </div>
  );
}

export default About;
