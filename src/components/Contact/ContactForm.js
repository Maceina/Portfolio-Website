import React from 'react';
import { useForm } from "react-hook-form";
import { useForm as useFormspree } from "@formspree/react";

function ContactForm(){
    // norint kad veiktu reikia pasalinti vieneta nuorodos pabaigoje
    const [serverState, sendToFormspree] = useFormspree("https://formspree.io/f/xnqljnyw1");
    const { register, handleSubmit, errors } = useForm();
 
    if (serverState.succeeded) {
        console.log('success!');
        return(
            <div className="email-form">
                <div className="sent-message">Your message has been sent. Thank you!</div>
            </div>
        );
    }

    return(
        <form onSubmit={handleSubmit(sendToFormspree)} method="POST" className="email-form">
            <p>Fields marked with * are required.</p>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="name">Name*:</label>
                    <input 
                        type="text"
                        name="name"
                        className="form-control"
                        id="name" 
                        data-rule="minlen:4" 
                        placeholder="First and Last"
                        ref={register({ 
                            required: true 
                        })}
                    />
                    {errors.name && <div className="validate">This field is required.</div>}
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="name">Email*:</label>
                    <input 
                        type="email"
                        className="form-control"
                        name="_replyto"
                        id="email"
                        data-rule="email"
                        placeholder="example@abc.com"
                        ref={register({ 
                            required: true,
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                            }
                        })}
                    />
                    {errors._replyto && <div className="validate">This field is required.<br/>Ensure email is in the correct format.</div>}
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="name">Subject*:</label>
                <input 
                    type="text"
                    className="form-control"
                    name="_subject"
                    id="subject"
                    placeholder="What is your topic of discussion?"
                    ref={register({
                        required: true
                    })}
                />
                {errors._subject && <div className="validate">This field is required.</div> }
            </div>
            <div className="form-group">
                <label htmlFor="name">Message*:</label>
                <textarea 
                    className="form-control"
                    name="message"
                    rows="10"
                    placeholder="Write away!"
                    ref={register({
                        required: true
                    })}
                />
                {errors._subject && <div className="validate">This field is required.</div> }
            </div>
            <div className="text-center">
                <button type="submit">Send Message</button>
            </div>
        </form>
        
    );
}

export default ContactForm;

