import "./App.css";
import "./index.css";
import Footer from "./components/Footer/Footer";
// import Header from "./components/Header/Header";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import { useState } from "react";
import { motion } from "framer-motion";
// import About from "./components/Sections/About";
// import Projects from "./components/Sections/Projects";
// import Resume from "./components/Sections/Resume";

function App() {
  const [isLoaded, setIsLoaded] = useState(false); // State to track if the loading screen is complete
  const [fadeOut, setFadeOut] = useState(false); // State to track if the loading screen should fade out

  return (
    <>
      {!isLoaded ? (
        <LoadingScreen
          fadeOut={fadeOut}
          onComplete={() => {
            setFadeOut(true);
            setTimeout(() => setIsLoaded(true), 1500); // Wait a second before setting isLoaded to true
          }}
        />
      ) : (
        <>
          {/* Commented section to display a "Construction Message". */}
          {/* <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-24 scroll-smooth">
              <section id="about">
                <About />
              </section>
              <section id="projects">
                <Projects />
              </section>
              <section id="resume">
                <Resume />
              </section>
            </main>
            <Footer />
          </div> */}

          <div className="flex flex-col min-h-screen bg-black text-gray-100 font-mono">
            <main className="flex-grow flex items-center justify-center p-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center space-y-8"
              >
                {/* Construction message */}
                <div className="space-y-2">
                  <h1 className="text-4xl md:text-6xl font-bold text-cyan-400 tracking-tighter">
                    On construction portfolio...
                  </h1>
                  <p className="text-lg md:text-2xl text-gray-400">
                    Thank you for visiting me, let's connect!
                  </p>
                </div>

                {/* LinkedIn */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="flex flex-col items-center gap-4"
                >
                  <p className="text-xl">Let's connect on LinkedIn!</p>
                  <a
                    href="https://www.linkedin.com/in/diego-ortizv/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-8 py-6 bg-transparent border border-cyan-500 text-cyan-400 rounded-lg overflow-hidden transition-all duration-300 hover:text-black"
                  >
                    <span className="relative z-10 font-bold">
                      LinkedIn Profile
                    </span>
                    <div className="absolute inset-0 bg-cyan-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </a>
                </motion.div>
              </motion.div>
            </main>

            <Footer />
          </div>
        </>
      )}
    </>
  );
}

export default App;
