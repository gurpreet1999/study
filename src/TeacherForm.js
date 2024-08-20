import React from 'react';
import './TeacherForm.css';

const TeacherForm = () => {
  return (

<div className='container'>


<h1>Studyhelpline.in</h1>
<p>Tutor Registration Form
</p>

<form className="teacher-form">
      <div className="form-group">
        <label>Name</label>
        <input type="text" placeholder="Full Name" />
      </div>

      <div className="form-group">
        <label>Reference</label>
        <input type="text" placeholder="How do you know about us? (Poster/Facebook/JustDial/Friends/etc.)" />
      </div>

      <div className="form-group">
        <label>Contact No.</label>
        <input type="text" placeholder="+91" />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input type="email" placeholder="to receive email invoice" />
      </div>

      <div className="form-group">
        <label>Local Address with PIN code</label>
        <input type="text" placeholder="As in ID CARD" />
      </div>

      <div className="form-group">
        <label>Permanent Address</label>
        <input type="text" />
      </div>

      <div className="form-group">
        <label>Qualification</label>
        <input type="text" placeholder="From 12th to all degree" />
      </div>

      <div className="form-group">
        <label>Area, Classes and subject you are teaching right now</label>
        <input type="text" placeholder="like class 10/ 8/ 9th/10th maths, language Spanish/ Urdu" />
      </div>

      <div className="form-group">
        <label>Can you teach spoken English or any foreign language</label>
        <input type="text" placeholder="like French/German/Spanish/Chinese/etc." />
      </div>

      <div className="form-group">
        <label>Experience</label>
        <textarea placeholder="Teaching experience" />
      </div>

      <div className="form-group">
        <label>Mother tongue</label>
        <input type="text" placeholder="Assamese/Bengali/Punjabi/etc." />
      </div>

      <div className="form-group">
        <label>WhatsApp mobile no.</label>
        <input type="text" placeholder="With STD code" />
      </div>

      <div className="form-group">
        <label>Do you own a vehicle</label>
        <input type="text" placeholder="Yes/No" />
      </div>

      <div className="form-group">
        <label>Reference Phone (friend/parents)</label>
        <input type="text" placeholder="For verification" />
      </div>

      <div className="form-group">
        <label>Date of Birth</label>
        <input type="text" placeholder="DD" className="dob-input" />
        <input type="text" placeholder="MM" className="dob-input" />
        <input type="text" placeholder="YYYY" className="dob-input" />
      </div>

      <div className="form-group">
        <label>Feedback</label>
        <div className="feedback">
          <input type="radio" name="feedback" value="1" />
          <input type="radio" name="feedback" value="2" />
          <input type="radio" name="feedback" value="3" />
          <input type="radio" name="feedback" value="4" />
          <input type="radio" name="feedback" value="5" />
        </div>
      </div>

      <div className="form-group">
        <label>Bank A/c no.</label>
        <input type="text" placeholder="Bank A/c no. to deposit fees" />
      </div>

      <div className="form-buttons">
        <button type="submit">Submit</button>
        <button type="button" onClick={() => alert('Pay Now')}>Pay Now with PayU/Money</button>
      </div>
    </form>

</div>
   
  );
};

export default TeacherForm;
