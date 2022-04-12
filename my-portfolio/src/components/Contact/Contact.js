import React from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

export default function Contact() {
/*   const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState(""); */

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      'service_yzjlcun',
      'template_elvs2pz',
      e.target,
      'HUpy5BYK6JEuRtYOs' 
    ).then(res=>{
      console.log(res);
      alert('Votre message a bien été envoyé!')
    }).catch(err=> console.log(err));
  }

    return (
      <section id='contact'>
        <div className='container5'>
          <div className='contact_container'>
            <iframe 
            title="map" 
            className="map" 
            frameBorder={0} 
            marginHeight={0} 
            marginWidth={0} 
            style={{ filter: "opacity(0.7)" }} 
            src="https://www.google.com/maps/embed/v1/place?q=La+Défense&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"/>
            <div className='contact_info'>
              <div className='address_block'>
                <h2 className='info_header'>
                  ADRESSE
                </h2>
                <p id='para'>
                  Paris Ouest, La Défense <br/>
                  Ile-de-France
                </p>
              </div>
              <div className='right_side'>
                <h2 className='email_header'>
                  EMAIL
                </h2>
                <a href='mailto:manihiki2000@hotmail.fr' className='email'>
                  manihiki2000@hotmail.fr
                </a>
                <h2 className='phone_header'>
                  TELEPHONE
                </h2>
                <p id='phone'>
                  0766727619
                </p>
              </div>
            </div>
          </div>
          <form 
            netlify
            name='contact'
            onSubmit={sendEmail}
            className="contact_form">
            <h2 className='contact-header'>
              Contactez-moi
            </h2>
            <p className='contact-text'>
            Si vous voulez me contacter, remplissez ce formulaire et je serai ravi de vous répondre!
            </p>
            <div className='label-container'>
              <label className='label'>
                Nom
              </label>
              <input 
              type="text"
              id='name'
              name='sender_name'
              /* onChange={(e) => setName(e.target.value)} *//>
            </div>
            <div className='label-container'>
              <label className='label'>
                Email
              </label>
              <input
              type="email"
              id='email'
              name='sender_email'
              /* onChange={(e) => setEmail(e.target.value)} *//>
            </div>
            <div className='label-container'>
              <label className='label'>
                Message
              </label>
              <textarea
              id='message'
              name='message'
              /* onChange={(e) => setMessage(e.target.value)} *//>
            </div>
            <button
            type='submit'
            className='send'>
              Envoyer
            </button>
          </form>
        </div>
      </section>
    );
  }
