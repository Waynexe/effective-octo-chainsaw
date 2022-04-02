import React from 'react'
import './projects.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { projects } from '../../data';

const Projects = () => {
  return (
    <section className='projects' id='projects'>
        <h1 id='project_header'>Projets</h1>
        <div className='slider'>
        <AwesomeSlider className='awesomeslider'>
          {projects.map((project) => (
            <div data-src={project.image} className='project' alt={project.alt}>
              <div className='middle'>
                <div className='project-title'>{project.title}</div>
                <div className='description'>{project.description1}</div>
                <div className='description'>{project.description2}</div>
                <div className='description'>{project.description3}</div>
              </div>
            </div>
          ))}
        </AwesomeSlider>
        </div>
    </section>
  )
}

export default Projects
