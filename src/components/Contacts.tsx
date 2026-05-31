import { useEffect, useRef } from "react";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const LINKS = [
  {
    label: "Email",
    icon: EmailIcon,
    action: () => window.open("mailto:arashinhoghafoori@gmail.com"),
    value: "arashinhoghafoori@gmail.com",
  },
  {
    label: "LinkedIn",
    icon: LinkedInIcon,
    action: () =>
      window.open(
        "https://www.linkedin.com/in/arashghafoori/",
        "_blank",
        "noopener,noreferrer"
      ),
    value: "linkedin.com/in/arashghafoori",
  },
  {
    label: "GitHub",
    icon: GitHubIcon,
    action: () =>
      window.open(
        "https://github.com/arashinho-gh",
        "_blank",
        "noopener,noreferrer"
      ),
    value: "github.com/arashinho-gh",
  },
];

const Contacts = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="contacts reveal" ref={ref}>
      <p className="section-label">Get in touch</p>
      <h2 className="contacts-headline">Let's work together.</h2>
      <p className="contacts-sub">
        Open to new opportunities, collaborations, or just a good conversation
        about software.
      </p>
      <div className="contacts-list">
        {LINKS.map(({ label, icon: Icon, action, value }) => (
          <button key={label} className="contacts-item" onClick={action}>
            <span className="contacts-item-icon">
              <Icon sx={{ fontSize: 18 }} />
            </span>
            <span className="contacts-item-info">
              <span className="contacts-item-label">{label}</span>
              <span className="contacts-item-value">{value}</span>
            </span>
            <span className="contacts-item-arrow">↗</span>
          </button>
        ))}
      </div>
      <p className="contacts-footer">
        Arash Ghafoori · {new Date().getFullYear()}
      </p>
    </section>
  );
};

export default Contacts;
