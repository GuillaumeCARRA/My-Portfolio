import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Icon } from 'semantic-ui-react';
import './contact.css';


function Contact() {

    const REACT_APP_SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const REACT_APP_TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const REACT_APP_USER_ID = process.env.REACT_APP_USER_ID;


    const formRef = useRef();
    const [emailSend, setEmailSend] = useState(false);

    const handleSendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            REACT_APP_SERVICE_ID,
            REACT_APP_TEMPLATE_ID,
            formRef.current,
            REACT_APP_USER_ID
        )
        .then(
            (response) => {
                setEmailSend(true);
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )
    }

    return (
        <div className="contact" id="contact">
            <h2 className="contact__title">
                Me Contacter
            </h2>
                <div className="contact__container">
                    <form 
                        ref={formRef}
                        className="contact__form"
                        onSubmit={handleSendEmail}
                    >
                        <input 
                            type="text"
                            placeholder="Nom"
                            name="user_name"
                            className="contact__input"
                            required
                        />
                        <input 
                            type="email"
                            placeholder="Email"
                            name="user_email"
                            className="contact__input"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Objet"
                            name="user_object"
                            className="contact__input"
                        />
                        <textarea 
                            rows="7"
                            placeholder="Message"
                            name="user_message"
                            className="contact__input"
                            style={{height: '350px'}}
                            required
                        />
                        <button 
                            className="send__button"
                        >
                            Envoyer
                            {
                                emailSend 
                                    ? <Icon 
                                        name='thumbs up outline'
                                        style={{marginLeft: '10px'}}
                                    />
                                    : <Icon 
                                        name="send"
                                        style={{marginLeft: '10px'}}
                                    />
                            }
                           
                        </button>
                        {emailSend ? <p className="msg__verification">Merci pour votre message, je vous répondrai le plus vite possible</p> : ''}
                    </form>
                </div>
        </div>
    )
}

export default Contact;
