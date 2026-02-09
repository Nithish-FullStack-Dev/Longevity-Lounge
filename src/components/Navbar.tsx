import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StarButton } from "./ui/star-button"; // Adjust path if necessary
import { useDesktop } from "@/hooks/useDesktop"; // Adjust path if necessary

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ menuOpen, setMenuOpen }: NavbarProps) => {
  const isDesktop = useDesktop();
  const [activeItem, setActiveItem] = useState("Home");
  const navigate = useNavigate();

  const navMenuRef = useRef<HTMLUListElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.position = "";
      document.body.style.width = "";
    }
  }, [menuOpen]);

  const handleNavClick = (id: string, label: string) => {
    setActiveItem(label);
    closeMenu();
    navigate(`/#${id}`);
  };

  const NAV_ITEM_BASE =
    "inline-flex items-center justify-center h-10 px-5 py-2 text-sm font-medium rounded-full whitespace-nowrap font-['Inter',sans-serif]";

  return (
    <header className="site-header">
      <div className="container">
        <nav className="navbar">
          <div className="nav-logo">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              <img src="/assets/images/logo.png" alt="Longevity Lounge Logo" />
            </a>
          </div>

          <button
            className={`mobile-menu-toggle ${menuOpen ? "active" : ""}`}
            onClick={() => (menuOpen ? closeMenu() : openMenu())}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>

          <ul
            ref={navMenuRef}
            className={`nav-menu ${menuOpen ? "active" : ""}`}
          >
            {[
              { label: "Home", id: "home" },
              { label: "Our Services", id: "services" },
              { label: "About", id: "about" },
              { label: "Contact", id: "contact" },
            ].map((item) => {
              const isActive = activeItem === item.label;

              return (
                <li key={item.label} className="nav-item">
                  {isDesktop ? (
                    /* DESKTOP VERSION */
                    <div
                      onClick={() =>
                        item.id
                          ? handleNavClick(item.id, item.label)
                          : setActiveItem("Home")
                      }
                      className="cursor-pointer"
                    >
                      <StarButton
                        lightColor="#F6BF7F"
                        backgroundColor={isActive ? "black" : "transparent"}
                        borderWidth={isActive ? 1 : 0}
                        className={`
                          h-10 px-5 py-2 rounded-full transition-all duration-300
                          ${
                            isActive
                              ? "bg-black border border-white/25"
                              : "bg-transparent border border-transparent hover:bg-white/10"
                          }
                          [&_span]:font-['Inter',sans-serif]
                          ${
                            isActive
                              ? "[&_span]:text-[#f6bf7f] [&_span]:!text-opacity-100"
                              : "[&_span]:text-white/80 [&_span]:!text-opacity-80 hover:[&_span]:text-white hover:[&_span]:!text-opacity-100"
                          }
                          [&_span]:bg-none
                          ${isActive ? "" : "[&>div:first-child]:opacity-0"}
                        `}
                      >
                        {item.label}
                      </StarButton>
                    </div>
                  ) : (
                    /* MOBILE VERSION */
                    <button
                      type="button"
                      onClick={() =>
                        item.id
                          ? handleNavClick(item.id, item.label)
                          : setActiveItem("Home")
                      }
                      className={`${NAV_ITEM_BASE} ${
                        isActive
                          ? "text-[#f6bf7f]"
                          : "text-white/80 hover:text-white"
                      } bg-transparent transition-colors duration-300`}
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              );
            })}
          </ul>

          <div className={`nav-cta ${menuOpen ? "active" : ""}`}>
            {isDesktop ? (
              <button
                type="button"
                onClick={() => navigate("/callback")}
                className="rounded-full"
              >
                <StarButton
                  lightColor="#F6BF7F"
                  backgroundColor="black"
                  borderWidth={1}
                  className="
                    bg-transparent
                    border border-white/25
                    px-7 py-3
                    rounded-full
                    pointer-events-none
                    [&_span]:text-[#f6bf7f]
                    [&_span]:bg-none
                    [&_span]:!text-opacity-100
                    [&_span]:font-['Inter',sans-serif]
                  "
                >
                  Request Callback
                </StarButton>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  closeMenu();
                  navigate("/callback");
                }}
                className="sm:px-7 sm:py-3 p-3 rounded-full text-[#f6bf7f] font-['Inter',sans-serif] bg-transparent border border-white/25"
              >
                Request Callback
              </button>
            )}

            <div className="follow-us">
              <h5>Social Media :</h5>
              <div className="social-icons">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-youtube"></i>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div
        ref={overlayRef}
        className={`mobile-overlay ${menuOpen ? "active" : ""}`}
        onClick={closeMenu}
      />
    </header>
  );
};

export default Navbar;
