import React from 'react';
import './skills.css';
import { BadgeCheckIcon } from "@heroicons/react/solid";
import { skills } from '../../data';

const Skills = () => {
  return (
    <section id='skills'>
        <div className='container4'>
        <h1 id='skills_header'>Compétences Informatique</h1>
        <div className="skill-container">
          {skills.map((skill) => (
            <div key={skill.skill} className="class">
              <a href={skill.link} target="_blank" rel="noreferrer noopener" className='link'>
              <div className="content">
                <BadgeCheckIcon className="badge" />
                <span className="txt">
                  {skill.skill}
                </span>
              </div>
              </a>
            </div>
          ))}
        </div>
        </div>
    </section>
  )
}

export default Skills
