import React from 'react'
import './about.css';

const About = () => {
  return (
    <section className='about' id='about'>
        <div className='container'>
          <h1 className='aboutitle' id='title'>Qui suis-je ?</h1>
          <p id='aboutme'>
          J’ai 22 ans, je suis Développeur 
          FullStack et actuellement en formation 
          en Année de Préparatoire à l’ETNA, 
          Ecole des Technologies Numériques Avancées.

          Je suis passionnné d’Informatique, de 
          programmation et surtout de Sécurité 
          Informatique. J’aime les jeux vidéos, les 
          mangas et jouer de la guitare, je suis 
          aussi un grand fan de NBA 
          (#DubNation), et quand j’ai du temps 
          libre, j’aime faire de la musculation pour 
          me détendre.
          </p>
        </div>
        <div className='container'>
          <div className='image-container'>

          </div>
        </div>
    </section>
  )
}

export default About
