// src/components/About.js
import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Manihiki Tuahivaatetonohiti
            <br className="hidden lg:inline-block" />Développeur Intégrateur Web
          </h1>
          <p className="mb-8 leading-relaxed">
            Bonjour! Bienvenue sur mon Portfolio, je m'appelle Manihiki et je suis étudiant à l'ETNA!
            Je suis passioné d'informatique, j'adore jouer aux Jeux Vidéos, j'aime lire des livres et des mangas et surtout je suis un grand fan de Basket!
            J'ai commencé mes études en Informatique en 2021 en Autodidacte avec les cours gratuits de l'école d'Harvard intitulé CS50. A la suite de cette formation qui a duré
            plus de 150 heures, j'ai décidé de venir en France pour continuer mes études et apprendre plus sur l'univers de la Programmation et du Développement Web et Logiciel
            et c'est là que j'ai intégré l'ETNA, l'Ecole des Technologies Numériques Avancées, en Septembre 2021.  
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Contactez-moi!
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Voir Mes Projets
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./pngegg.png"
          />
        </div>
      </div>
    </section>
  );
}