import "./App.css";
import AboutMe from "./components/AboutMe";
import ContactPage from "./components/ContactPage";
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
      <ContactPage />
    </>
  );
}

export default App;
