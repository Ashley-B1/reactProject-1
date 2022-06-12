import skills from './skills.js'
import './Skills.css';


const Skills = () => {
  return (
    <div className='skills-grid'>
      {skills.map(skill => (
        <div className='skill-item' key={skill.id}>
          <div>
            <img src={skill.img} className='img-skill' />
          </div>
          <div className='skill-info'>
            <h3>{skill.title}</h3>
            <p>{skill.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Skills;
