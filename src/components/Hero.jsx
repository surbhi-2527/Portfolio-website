import { useEffect, useState } from "react";

const Hero = () => {
  const roles = ["Frontend Developer", "AI Enthusiast", "React Developer"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(roles[index].slice(0, i));
      i++;
      if (i > roles[index].length) {
        clearInterval(typing);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % roles.length);
        }, 1500);
      }
    }, 100);

    return () => clearInterval(typing);
  }, [index]);

  return (
    <section id="home" className="hero">
      <h1>
        Hi, I am <span>Surbhi Rana</span> 
      </h1>
      <h2>{text}</h2>
      <p>I build modern, responsive, and user-friendly web applications.</p>

      <div className="hero-buttons">
        <button onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}>
          View Projects
        </button>
        <button className="outline">Download CV</button>
      </div>
    </section>
  );
};

export default Hero;