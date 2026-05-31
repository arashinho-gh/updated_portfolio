import { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

interface NavBarProps {
  changeTheme: () => void;
  theme: string;
}

const NAV_LINKS = [
  { label: "Experience", target: "experience" },
  { label: "Projects", target: "projects" },
  { label: "Contact", target: "contacts" },
];

const NavBar = ({ changeTheme, theme }: NavBarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const scrollTo = (className: string) => {
    const el = document.getElementsByClassName(className)[0];
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  const openUrl = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
    setMobileOpen(false);
  };

  return (
    <>
      <nav className={`nav-bar${scrolled ? " nav-bar--scrolled" : ""}`}>
        <div
          className="nav-bar-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          AG
        </div>

        {/* Desktop links */}
        <div className="nav-bar-links">
          {NAV_LINKS.map(({ label, target }) => (
            <button
              key={label}
              className="nav-bar-link"
              onClick={() => scrollTo(target)}
            >
              {label}
            </button>
          ))}
          <button
            className="nav-bar-link nav-bar-link--cta"
            onClick={() =>
              openUrl(
                "https://drive.google.com/drive/folders/1ie895UHlErR5QE9kzgl6CSGTQfeNOO-i?usp=drive_link"
              )
            }
          >
            Resume ↗
          </button>
          <IconButton onClick={changeTheme} size="small" sx={{ ml: "4px" }}>
            {theme === "light" ? (
              <LightModeIcon sx={{ fontSize: 16, color: "var(--text-secondary)" }} />
            ) : (
              <DarkModeIcon sx={{ fontSize: 16, color: "var(--text-secondary)" }} />
            )}
          </IconButton>
        </div>

        {/* Mobile controls */}
        <div className="nav-bar-mobile-controls">
          <IconButton onClick={changeTheme} size="small">
            {theme === "light" ? (
              <LightModeIcon sx={{ fontSize: 16, color: "var(--text-secondary)" }} />
            ) : (
              <DarkModeIcon sx={{ fontSize: 16, color: "var(--text-secondary)" }} />
            )}
          </IconButton>
          <IconButton
            onClick={() => setMobileOpen((v) => !v)}
            size="small"
            sx={{ ml: "4px" }}
          >
            {mobileOpen ? (
              <CloseIcon sx={{ fontSize: 20, color: "var(--text-primary)" }} />
            ) : (
              <MenuIcon sx={{ fontSize: 20, color: "var(--text-primary)" }} />
            )}
          </IconButton>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`nav-drawer${mobileOpen ? " nav-drawer--open" : ""}`}>
        <div className="nav-drawer-links">
          {NAV_LINKS.map(({ label, target }) => (
            <button
              key={label}
              className="nav-drawer-link"
              onClick={() => scrollTo(target)}
            >
              {label}
            </button>
          ))}
          <button
            className="nav-drawer-link nav-drawer-link--cta"
            onClick={() =>
              openUrl(
                "https://drive.google.com/drive/folders/1ie895UHlErR5QE9kzgl6CSGTQfeNOO-i?usp=drive_link"
              )
            }
          >
            Resume ↗
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="nav-drawer-overlay" onClick={() => setMobileOpen(false)} />
      )}
    </>
  );
};

export default NavBar;
