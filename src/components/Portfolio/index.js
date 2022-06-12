import React from 'react';
import projects from './projects';
import './Portfolio.css'

const Portfolio = () => {
  return (
    <div className='portfolio-snip'>
      <header className='port-header'>
        <h1>Projects and Portfolio</h1>
        <i>Sharing my endeavors and passions...</i>
      </header>
      <div className='projects-section'>
        {projects.map(project => (
          <div
          style={{background: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(${project.img})`, backgroundPosition: `center center`}}
          className='proj-box'
          key={project.id}
          >
            <h2>{project.name}</h2>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
