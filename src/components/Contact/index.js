import React from 'react';
import { Icon } from 'semantic-ui-react';
import './contact.css';

function Contact() {
    return (
        <div className="contact" id="contact">
            <h2 className="contact__title">
                Me Contacter
            </h2>
                <div className="contact__container">
                    <form className="contact__form">
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
                            <Icon 
                                name="send"
                                style={{marginLeft: '10px'}}
                            />
                        </button>
                    </form>
                </div>
        </div>
    )
}

export default Contact;
