function Skills(){
    const skills = ["HTML","CSS","JavaScript", "React"];
    return<>
        <div className="skill-list">
            <p className="skill-title">SKILLS</p>
            
            {skills.map((skill) => (
                <span className="skill-tag" key={skill}>{skill}</span>
            ))}

        </div>
    </>
}
export default Skills;