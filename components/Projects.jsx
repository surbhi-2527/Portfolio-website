const projects = [
  {
    title: "Invisible-Cloak",
    desc: "Python project using computer vision to create an invisibility effect.",
    tech: "Python",
    link: "https://github.com/surbhi-2527/Invisible-Cloak",
  },
  {
    title: "HindiSongRecommendation",
    desc: "Recommends Hindi songs based on user preferences.",
    tech: "Python",
    link: "https://github.com/surbhi-2527/HindiSongRecommendation",
  },
  {
    title: "Expert-System",
    desc: "Rule-based expert system built using Python.",
    tech: "Python",
    link: "https://github.com/surbhi-2527/Expert-System",
  },
  {
    title: "Clock-app",
    desc: "Digital clock built using JavaScript.",
    tech: "JavaScript",
    link: "https://github.com/surbhi-2527/Clock-app",
  },
  {
    title: "To-do-react",
    desc: "Task management app built with React.",
    tech: "React",
    link: "https://github.com/surbhi-2527/To-do-react",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      <div className="project-grid">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            
            <div className="top">
              <h3>{p.title}</h3>
              <span className="badge">Public</span>
            </div>

            <p>{p.desc}</p>

            <div className="bottom">
              <span className="tech">{p.tech}</span>

              <a href={p.link} target="_blank" rel="noreferrer">
                View →
              </a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;