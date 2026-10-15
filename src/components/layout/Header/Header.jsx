import Hero from "../../sections/Hero/Hero";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="jumbotron bg-theme-v5">
      <div className="bg-overlay"></div>
      <Navbar variant="hero" />
      <Hero />
    </header>
  );
}

export default Header;
