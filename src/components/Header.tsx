import { useEffect, useRef } from "react";

const Header = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      ref.current?.classList.add("revealed");
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (className: string) => {
    const el = document.getElementsByClassName(className)[0];
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const openUrl = (url: string) =>
    window.open(url, "_blank", "noopener,noreferrer");

  return (
    <div className="header reveal" ref={ref}>
      <div className="header-badge">
        <span className="header-badge-dot" />
        Software Developer II · Dayforce
      </div>

      <p className="header-greeting">Hey, I'm</p>

      <h1 className="header-name gradient-text">Arash Ghafoori</h1>

      <p className="header-desc">
        Software engineering graduate from McMaster University with hands-on
        production experience at Dayforce and EllisDon. I build backend
        services, design APIs, and ship features that real teams depend on
        — currently working on the GlobalPerson project at Dayforce.
      </p>

      <div className="header-cta">
        <button
          className="header-cta-primary"
          onClick={() => scrollTo("contacts")}
        >
          Get in touch <span className="header-cta-arrow">→</span>
        </button>
        <button
          className="header-cta-secondary"
          onClick={() =>
            openUrl(
              "https://drive.google.com/drive/folders/1ie895UHlErR5QE9kzgl6CSGTQfeNOO-i?usp=drive_link"
            )
          }
        >
          View Resume ↗
        </button>
      </div>

      <div className="header-scroll-hint">
        <span />
      </div>
    </div>
  );
};

export default Header;
