import "./App.css";
import AboutMe from "./components/AboutMe";
import Favourites from "./components/Favourites";
import Gallery from "./components/Gallery";
import HeroSection from "./components/HeroSection";
import Milestones from "./components/Milestones ";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Gallery />
      <Favourites />
      <Milestones />
    </>
  );
}

export default App;
