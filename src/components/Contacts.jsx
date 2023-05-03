import React, { useState,useRef } from 'react'
import vg from "../assets/vg.png"
import toast  from 'react-hot-toast'
import {motion} from 'framer-motion'
import {addDoc,collection} from "firebase/firestore";
import {db} from '../firebase'
import emailjs from '@emailjs/browser';


const Contacts = () => {

const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [message, setMessage] = useState("")
const [disablebtn, setdisablebtn] = useState(false)

const form = useRef();
const submitHandler=async(e)=>{
  e.preventDefault();// meaning of this function is that it will prevent the default behaviour of particular event here event is form submission so by default when for is submitted then page is reloaded this will prohibit the page from reloading

//Sending message to firebase  
  setdisablebtn(true);
  try{
  await addDoc(collection(db,"contacts"),{
    name,
    email,
    message
  });

  //sending message to emailJS
  emailjs.sendForm('service_enb4e8t', 'template_x0eirsb', form.current, 'wahHR_8Aqklr0sEjg')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    //showing success ki kaam ho gaya
  toast.success( `Thanks ${name} your Message is Sent`);
  setdisablebtn(false);
  setName("");
  setEmail("");
  setMessage("");
}
catch(error){
  toast.error("Error");
  console.log(error)
  setdisablebtn(false);
}


  
}

const animations={
  form:{
    initial:{
      x:"-100%",
      opacity:0
    },
    whileInView:{
      x:0,
      opacity:1
    }
  },
  button:{
    initial:{
      y:"-100%",
      opacity:0
    },
    whileInView:{
      y:0,
      opacity:1
    },
    transition:{
      delay:0.5,
  }
}
}


  return (
    <div id='contact'>

    <section>

        <motion.form onSubmit={submitHandler} ref={form} {...animations.form}>

            <h2>Contact Me</h2>

            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Your Name' required name='user_name'/>
            <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}placeholder='Your Email' required name='user_email'/>
            <input type="text" value={message} onChange={(e)=>{setMessage(e.target.value)}}placeholder='Your Message' required name='message'/>

            <motion.button disabled={disablebtn} {...animations.button} type="submit" className={disablebtn?"disablebtn":""}>Send</motion.button>
        </motion.form>

    </section>

    <aside>
        <img src={vg} alt="Graphics" />
    </aside>

    </div>
  )
}

export default Contacts