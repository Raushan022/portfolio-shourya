import "./App.css";
import AboutMe from "./components/AboutMe";
import Gallery from "./components/Gallery";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Gallery />
    </>
  );
}

export default App;
