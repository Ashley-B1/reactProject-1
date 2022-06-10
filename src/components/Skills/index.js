import skills from './skills.js'
import './Skills.css';

const Skills = () => {
  return (
    <div className='skills-grid'>
      {skills.map(skill => (
      <div className='skill-item'>
        <h2>{skill.title}</h2>
        <p>{skill.desc}</p>
      </div>
      ))}
    </div>
  )
}

export default Skills;
