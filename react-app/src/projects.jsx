import React, {useState} from "react";
import pizzerie from "./assets/pizzerie.png";
import cafenea from "./assets/cafenea.png";
import sala from "./assets/sala.png"




 
const project = [
  {
    nume: "Brew Haven",
    desc: "Site de prezentare pentru o cafenea, cu meniu și program.",
    poza: cafenea,
    live: "https://caffebrew.netlify.app/",
    github: "https://github.com/raulVM7/Coffee-Website"
    
  },
  {
    nume: "Raul's Pizza",
    desc: "Site de pizzerie cu meniu și buton de comandă directă.",
    poza: pizzerie,
    live: "https://raulspizza.netlify.app/",
    github: "https://github.com/raulVM7/Pizza-Restaurant"
  },
  {
    nume: "Gym Power",
    desc: "Landing page pentru o sală de forță, cu prețuri și orar.",
    poza: sala,
    live: "https://gympowerstudio.netlify.app/",
    github: "https://github.com/raulVM7/Fitness-Page-Forge-Studio"
  },
  
];

function Projects(){
const [pozamarita, setPozaMarita] = useState(null);
    return<>

        <section className="projects">
            
        <p className="pTitle">PROJECTS</p>

        <div className="project-grid">
        {project.map((p) => (
          <ProjectCard 
          project={p} 
          setPozaMarita={setPozaMarita}
          key={p.nume} />
        ))}
          </div>
           
        </section>
        
           {pozamarita && (
              <div className="modal" onClick={() => setPozaMarita(null)}>
              <img src={pozamarita} className="modal-img" />
              </div>
            )}
    </>

}


function ProjectCard({ project, setPozaMarita }){
    return<>
        <div className="projects-card" id="projects">
                <img src={project.poza} alt={project.nume} className="project-img" onClick={() => setPozaMarita(project.poza)}/>
                <h3 className="project-title">{project.nume}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-links">
        <a href={project.live} target="_blank">Live</a>
        <a href={project.github} target="_blank">GitHub</a>
      </div>
        </div>
    </>

}





export default Projects;