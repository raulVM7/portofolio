import React, {useState} from "react";
import pizzerie from "./assets/pizzerie.webp";
import cafenea from "./assets/cafenea.webp";
import sala from "./assets/sala.webp";
import cofetarie from "./assets/cofetarie.webp";
import salon from "./assets/salon.webp";
import graffiti from "./assets/graffiti.webp";


 
const project = [
  {
    nume: "Brew Haven",
    desc: "Presentation website for a coffee shop, featuring the menu and opening hours.",
    poza: cafenea,
    live: "https://caffebrew.netlify.app/",
    github: "https://github.com/raulVM7/Coffee-Website"
    
  },
  {
    nume: "Odette Salon",
    desc: "Showcase website for a beauty salon, featuring a price list, gallery, and appointment booking button.",
    poza: salon,
    live: "https://odette-salon.netlify.app/",
    github: "https://github.com/raulVM7/Salon-Odette"
  },
  
  {
    nume: "Amandine Cofetarie",
    desc: "Showcase website for a confectionery, featuring the menu and opening hours.",
    poza: cofetarie,
    live: "https://amandinecofetarie.netlify.app/",
    github: "https://github.com/raulVM7/Amandine-Cofetarie"
    
  },

  {
    nume: "Raul's Pizza",
    desc: "Pizzeria website with a menu and a direct order button.",
    poza: pizzerie,
    live: "https://raulspizza.netlify.app/",
    github: "https://github.com/raulVM7/Pizza-Restaurant"
  },
  {
    nume: "Gym Power",
    desc: "Landing page for a gym, featuring prices and opening hours.",
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
        <a href={project.live} target="_blank" rel="noopener">Live</a>
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener">GitHub</a>
        )}
      </div>
        </div>
    </>

}





export default Projects;