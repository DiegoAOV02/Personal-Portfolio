import "./App.css";
import "./index.css";
import Background from "./components/Background/Background";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import { useState } from "react";
import type { CSSProperties } from "react";
import Projects from "./components/Sections/Projects";
import Resume from "./components/Sections/Resume";
import Home from "./components/Sections/Home";
import Tech from "./components/Sections/Tech";

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
          <Background />
          {/* Commented section to display a "Construction Message". */}
          <div
            style={
              {
                // Left edge of a 1152px-wide centered column, never closer
                // than 2.5rem to the viewport edge on narrower desktops.
                "--sidebar-left": "max(2.5rem, calc(50% - 576px))",
              } as CSSProperties
            }
          >
            <div className="flex flex-col min-h-screen">
              <Header />
              <ProfileCard />
              <main className="flex-grow pt-24 lg:pt-36 scroll-smooth lg:pl-[calc(var(--sidebar-left)+384px)]">
                <section id="home">
                  <Home />
                </section>
                <section id="projects">
                  <Projects />
                </section>
                <section id="resume">
                  <Resume />
                </section>
                <section id="tech">
                  <Tech />
                </section>
              </main>
            </div>

            <div className="lg:pl-[calc(var(--sidebar-left)+384px)]">
              <Footer />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
