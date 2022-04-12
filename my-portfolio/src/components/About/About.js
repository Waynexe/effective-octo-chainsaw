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
          <div class ="line">
            <nav className='logos'>
              <a href="https://www.linkedin.com/in/manihiki-tuahivaatetonohiti-13221a216/" target ="_blank" rel='noreferrer'>
                <img src="./linkedin.png" alt="linkedin logo" />
              </a>
              <a href="https://www.instagram.com/waynexe_/" target ="_blank" rel='noreferrer'>
                <img src="./instagram.png" alt="instagram logo" />
              </a>
              <a href="https://www.facebook.com/manihiki.tuahivaatetonohiti/" target ="_blank" rel='noreferrer'>
                <img src="./facebook.png" alt="facebook logo" />
              </a>
              <a href="https://github.com/Waynexe" target ="_blank" rel='noreferrer'>
                <img src="./github.png" alt="facebook logo" />
              </a>
            </nav>
          </div>
          <div className='cv-link'>
            <a href='./CV Manihiki Tuahivaatetonohiti.pdf' download>Télécharger mon CV</a>
          </div>
        </div>
    </section>
  )
}

export default About
