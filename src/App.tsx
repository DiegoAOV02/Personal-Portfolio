import "./App.css";
import "./index.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import { useState } from "react";
import About from "./components/Sections/About";
import Projects from "./components/Sections/Projects";
import Resume from "./components/Sections/Resume";
import Home from "./components/Sections/Home";

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
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-24 scroll-smooth">
              <section id="home">
                <Home />
              </section>
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
          </div>

          <Footer />
        </>
      )}
    </>
  );
}

export default App;
