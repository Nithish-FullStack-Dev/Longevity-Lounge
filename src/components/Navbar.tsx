import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StarButton } from "./ui/star-button";
import { useDesktop } from "@/hooks/useDesktop";

const Navbar = () => {
  const isDesktop = useDesktop();
  const [menuOpen, setMenuOpen] = useState(false);
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

  const NAV_BTN_CLASSES =
    "h-10 px-3 inline-flex items-center justify-center rounded-full whitespace-nowrap";

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
              { label: "About", id: "about" },
              { label: "Our Services", id: "services" },
              { label: "Contact", id: "contact" },
            ].map((item) => {
              const isActive = activeItem === item.label;

              return (
                <li key={item.label} className="nav-item overflow-visible">
                  {isActive ? (
                    isDesktop ? (
                      /* DESKTOP — Animated StarButton */
                      <button
                        type="button"
                        onClick={() =>
                          item.id
                            ? handleNavClick(item.id, item.label)
                            : setActiveItem("Home")
                        }
                        className={NAV_BTN_CLASSES}
                      >
                        <StarButton
                          lightColor="#F6BF7F"
                          backgroundColor="black"
                          borderWidth={1}
                          className="bg-black border border-white/25 px-5 py-2 rounded-full pointer-events-none [&_span]:text-[#f6bf7f] [&_span]:bg-none [&_span]:!text-opacity-100 [&_span]:font-['Inter',sans-serif]"
                        >
                          {item.label}
                        </StarButton>
                      </button>
                    ) : (
                      /* MOBILE — Plain button */
                      <button
                        type="button"
                        onClick={() =>
                          item.id
                            ? handleNavClick(item.id, item.label)
                            : setActiveItem("Home")
                        }
                        className={`${NAV_BTN_CLASSES} text-[#f6bf7f] font-['Inter',sans-serif] bg-transparent`}
                      >
                        {item.label}
                      </button>
                    )
                  ) : (
                    /* INACTIVE ITEM (ALL DEVICES) */
                    <button
                      type="button"
                      onClick={() =>
                        item.id
                          ? handleNavClick(item.id, item.label)
                          : setActiveItem("Home")
                      }
                      className={`${NAV_BTN_CLASSES} nav-link`}
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
                className="px-7 py-3 rounded-full text-[#f6bf7f] font-['Inter',sans-serif] bg-transparent border border-white/25"
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
