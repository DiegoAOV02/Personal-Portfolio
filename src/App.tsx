import "./App.css";
import "./index.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import { useState } from "react";
import About from "./components/Sections/About";
import Projects from "./components/Sections/Projects";
import Resume from "./components/Sections/Resume";

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
            setTimeout(() => setIsLoaded(true), 1000); // Wait a second before setting isLoaded to true
          }}
        />
      ) : (
        <>
          {/* After the loading screen, the rest of the webpage is displayed. */}
          <div className="flex flex-col min-h-screen">
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
          </div>
        </>
      )}
    </>
  );
}

export default App;
