import React, {useState} from 'react';
import emailjs from 'emailjs-com'
import "./App.css";

const App = () => {
  // const [data, setData] = useState({
  //   subject:'',
  //   email:'',
  //   message:''
  // })
  // const {subject,email,message} = data;
  // const changeHandler = e => {
  //   setImmediate({...data,[e.target.name]:e.target.value})
  // }
  const submitHandler = async(e)=> {
    e.preventDefault();
    try{
      const value = await emailjs.sendForm('service_3lm77z6', 'template_u04mcj5', e.target, '_jc5_6IiV7raF4uke')
    console.log(value)
    }catch(error){
      console.log(error)
    }

      e.target.reset();


  }
  return (
    <div className="container">
      <form onSubmit={submitHandler} autoComplete="off">
        <label>Subject</label><br/>
        <input type='text' name="subject"  />
        <label>email:</label><br/>
        <input type='email' name="email" />
        <label>Message:</label>
        <input type='text' name="message" />
        <input type="submit" name="submit"/>
      </form>
    </div>
  )
}

export default App




// import React from "react";

// import emailjs from "emailjs-com";

// import "./index.css";

// const ContactForm = () => {
//   const formSubmitHandler = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await emailjs.sendForm(
//         "service_twfe4k5",
//         "template_b5zi902",
//         event.target,
//         "sLD8u5vVMjhEFM1gW"
//       );

//       console.log(response);
//     } catch (error) {
//       console.log(error);
//     }
//     event.target.reset()
//   };
//   return (
//     <div className="top-container">
//     <form onSubmit={formSubmitHandler}>
//       <h1 className="heading"> Contact Form </h1>
//       <label className="label">Name</label>
//       <br />
//       <input type="text" className="input" name="name" /> <br />
//       <label className="label">Email</label>
//       <br />
//       <input type="email" className="input" name="email" /> <br />
//       <label className="label">Message</label>
//       <br />
//       <textarea rows="6" className="textarea" name="message"/>
//       <div>
//           <button className="btn btn-primary">Send</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;