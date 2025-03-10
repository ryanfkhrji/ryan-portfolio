import React, { useState } from "react";
import Container from "../Container";
import { NavLink } from "react-router-dom";
import Button from "../../Elements/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faTimes } from "@fortawesome/free-solid-svg-icons";
import Section from "../Section";

const Navbar = () => {
  // mobile menu
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Section>
        <Container>
          <nav className="py-3">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div>
                <NavLink to="/">
                  <span className={`font-Grotesk text-base font-black text-black-custom`}>RYAN</span> <span className="text-base font-black font-Grotesk text-green-secondary">FAKHROJI</span>
                </NavLink>
              </div>

              {/* menu desktop */}
              <div className="hidden md:block">
                <ul className="flex items-center text-sm font-semibold gap-x-5 font-Grotesk">
                  <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? "text-green-secondary" : `text-black-custom`)}>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? "text-green-secondary" : `text-black-custom`)}>
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/project" className={({ isActive }) => (isActive ? "text-green-secondary" : `text-black-custom`)}>
                      Project
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-green-secondary" : `text-black-custom`)}>
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>

              {/* menu mobile */}
              <ul
                className={`md:hidden bg-white z-10 absolute top-15 left-0 w-full transition-all duration-300 flex flex-col items-center gap-4 py-4 font-semibold text-sm font-Grotesk ${
                  menuOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-full opacity-0 invisible"
                }`}
              >
                <li>
                  <NavLink to="/" className={({ isActive }) => (isActive ? "text-green-secondary" : `text-black-custom`)}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className={({ isActive }) => (isActive ? "text-green-secondary" : `text-black-custom`)}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/project" className={({ isActive }) => (isActive ? "text-green-secondary" : `text-black-custom`)}>
                    Project
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-green-secondary" : `text-black-custom`)}>
                    Contact
                  </NavLink>
                </li>
              </ul>

              {/* humburger menu */}
              <div className="cursor-pointer md:hidden">
                <Button type="button" sizeText="text-sm" onClick={() => setMenuOpen(!menuOpen)}>
                  <FontAwesomeIcon icon={menuOpen ? faTimes : faBarsStaggered} size="sm" className="text-black-custom" />
                </Button>
              </div>
            </div>
          </nav>
        </Container>
      </Section>
    </>
  );
};

export default Navbar;
