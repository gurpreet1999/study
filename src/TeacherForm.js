import React, { useRef } from 'react';
import './TeacherForm.css';
import toast from 'react-hot-toast';

import emailjs from '@emailjs/browser'

const TeacherForm = () => {



  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_v4jh6ei', 'template_pwcw1et', form.current, {
        publicKey: 'CrthvxJQ4GGdUhYnc',
      })
      .then(
        () => {
          toast.success('Your Response has been recorded Successfully!')
          window.location.href = 'https://payu.in/web/564AEF2740D5845606E600F7DB19B8D1';
          form.current.reset(); 
        },
        (error) => {
          toast.error('Server Error! Please try again after sometime!')
          console.log(error)
        },
      );
  };





  return (

<div className='container'>


<h1>Studyhelpline.in</h1>
<p>Tutor Registration Form
</p>

<form className="teacher-form" ref={form} onSubmit={sendEmail}>
  <div className="form-group">
    <label>Name</label>
    <input type="text" name="name" placeholder="Full Name" required />
  </div>

  <div className="form-group">
    <label>Reference</label>
    <input type="text" name="reference" placeholder="How do you know about us? (Poster/Facebook/JustDial/Friends/etc.)" />
  </div>

  <div className="form-group">
    <label>Contact No.</label>
    <input type="number" name="contact_no" placeholder="+91" required />
  </div>

  <div className="form-group">
    <label>Email</label>
    <input type="email" name="email" placeholder="to receive email invoice" required />
  </div>

  <div className="form-group">
    <label>Local Address with PIN code</label>
    <input type="text" name="local_address" placeholder="As in ID CARD" required />
  </div>

  <div className="form-group">
    <label>Permanent Address</label>
    <input type="text" name="permanent_address" required />
  </div>

  <div className="form-group">
    <label>Qualification</label>
    <input type="text" name="qualification" placeholder="From 12th to all degree" required />
  </div>

  <div className="form-group">
    <label>Area, Classes, and Subject You Are Teaching Right Now</label>
    <input type="text" name="current_teaching" placeholder="like class 10/ 8/ 9th/10th maths, language Spanish/ Urdu" />
  </div>

  <div className="form-group">
    <label>Can you teach spoken English or any foreign language</label>
    <input type="text" name="foreign_language" placeholder="like French/German/Spanish/Chinese/etc." />
  </div>

  <div className="form-group">
    <label>Experience</label>
    <textarea name="experience" placeholder="Teaching experience" required />
  </div>

  <div className="form-group">
    <label>Mother tongue</label>
    <input type="text" name="mother_tongue" placeholder="Assamese/Bengali/Punjabi/etc." />
  </div>

  <div className="form-group">
    <label>WhatsApp mobile no.</label>
    <input type="number" name="whatsapp_no" placeholder="With STD code" required />
  </div>

  <div className="form-group">
    <label>Do you own a vehicle</label>
    <input type="text" name="vehicle" placeholder="Yes/No" />
  </div>

  <div className="form-group">
    <label>Reference Phone (friend/parents)</label>
    <input type="number" name="reference_phone" placeholder="For verification" required />
  </div>

  <div className="form-buttons">
    <button type="submit">Submit</button>
  </div>
</form>



</div>
   
  );
};

export default TeacherForm;
