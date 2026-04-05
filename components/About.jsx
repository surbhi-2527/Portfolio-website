const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>

      <div className="about-container">
        <p>
          Hi, I’m <strong>Surbhi</strong> — a Computer Science student specializing in 
          Artificial Intelligence. I enjoy turning ideas into clean, interactive, 
          and meaningful web experiences.
        </p>

        <p>
          I love working with <strong>React, JavaScript, and Python</strong>, and I’m 
          always curious about how technology can solve real-world problems in simple 
          and elegant ways.
        </p>

        <p>
          Beyond coding, I value creativity, growth, and building things that feel 
          both useful and beautiful. I’m constantly learning and exploring new 
          technologies to improve my skills.
        </p>

        <div className="skills">
          {["HTML", "CSS", "JavaScript", "React", "Python", "MySQL"].map(
            (skill) => (
              <span key={skill}>{skill}</span>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default About;