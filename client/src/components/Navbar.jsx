import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.scss";
import logo from "../assets/images/logo.png";
import burgerIcon from "../assets/images/burger.jpg";

function NavBar() {
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleTabNavigation = (e) => {
      if (e.key === "Tab" && menuRef.current) {
        const menuLinks = menuRef.current.querySelectorAll("a, button");
        const firstLink = menuLinks[0];
        const lastLink = menuLinks[menuLinks.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstLink) {
            e.preventDefault();
            lastLink.focus();
          }
        }
        if (document.activeElement === lastLink) {
          e.preventDefault();
          firstLink.focus();
        }
      }
    };

    window.addEventListener("keydown", handleTabNavigation);

    return () => {
      window.removeEventListener("keydown", handleTabNavigation);
    };
  }, []);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <>
      <img className="nav-logo" src={logo} alt="logo nebula" />

      <nav ref={menuRef}>
        <button
          type="button"
          aria-label="burgerMenu"
          className="burgerMenu"
          onClick={updateMenu}
        >
          <img className={burgerClass} src={burgerIcon} alt="" />
        </button>
        <ul className={menuClass}>
          <li>
            <Link
              to="/"
              onClick={updateMenu}
              aria-label="link to the Home page"
            >
              Acceuil
            </Link>
          </li>
          <li>
            <Link
              to="/traducteur"
              onClick={updateMenu}
              aria-label="link to Our destinations page"
            >
              Service
            </Link>
          </li>
          <li>
            <Link to="/devis" aria-label="link to the our vehicles page">
              Devis
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={updateMenu}
              aria-label="link to the Traffic info page"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              onClick={updateMenu}
              aria-label="link to the Traffic info page"
            >
              Profile
            </Link>
          </li>
          <li>
            <a href="/register" onClick={updateMenu} className="nav-login-btn">
              Connecter
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
