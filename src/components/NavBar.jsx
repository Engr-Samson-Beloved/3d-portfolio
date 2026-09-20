import { useState, useEffect } from "react";

import { navLinks } from "../constants";
import { useNavigation } from "../context/NavigationContext";

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);
  const { goTo, isSlideMode } = useNavigation();

  useEffect(() => {
    // In slide mode there's no window scroll to react to, so keep the
    // "scrolled" chrome permanently on for a consistent, readable navbar.
    if (isSlideMode) {
      setScrolled(true);
      return;
    }

    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSlideMode]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    goTo(id);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo" onClick={(e) => handleNavClick(e, "hero")}>
          Samson, Olabanji.
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link} onClick={(e) => handleNavClick(e, link.replace("#", ""))}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group" onClick={(e) => handleNavClick(e, "contact")}>
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
}

export default NavBar;
