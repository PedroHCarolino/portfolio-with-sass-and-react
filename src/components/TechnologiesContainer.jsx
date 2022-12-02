import {
    DiHtml5,
    DiCss3,
    DiJavascript,
    DiNodejsSmall,
    DiGit,
    DiMysql,
    DiMongodb,
    DiReact,
    DiSass,
    DiScrum,
    DiGithubBadge,
  } from "react-icons/di";
  
  import "../styles/components/technologiescontainer.sass";
  
  const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "js", name: "JavaScript", icon: <DiJavascript /> },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
    { id: "git", name: "Git", icon: <DiGit /> },
    { id: "github", name: "GitHub", icon: <DiGithubBadge /> },
    { id: "mysql", name: "MySQL", icon: <DiMysql /> },
    { id: "mongodb", name: "Mongodb", icon: <DiMongodb /> },
    { id: "react", name: "React", icon: <DiReact /> },
    { id: "sass", name: "Sass", icon: <DiSass /> },
    { id: "scrum", name: "Scrum", icon: <DiScrum /> },
  ];
  
  const TechnologiesContainer = () => {
    return (
      <section className="technologies-container">
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
          {technologies.map((tech) => (
            <div className="technology-card" id={tech.id} key={tech.id}>
              {tech.icon}
              <div className="technology-info">
                <h3>{tech.name}</h3>
                <p>Tecnologia a qual venho me especializando diariamente.</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default TechnologiesContainer; 