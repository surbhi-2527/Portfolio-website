import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");

  const navItems = ["home", "about", "projects", "contact"];

  return (
    <nav className="navbar">
      <h2 className="logo">Surbhi</h2>

      <ul className="nav-links">
        {navItems.map((item) => (
          <li
            key={item}
            className={active === item ? "active" : ""}
            onClick={() => {
              setActive(item);
              document
                .getElementById(item)
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;