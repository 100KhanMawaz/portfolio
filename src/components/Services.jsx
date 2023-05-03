import React from 'react';
import {motion} from "framer-motion"

const Services = () => {

    const animations={
        whileInView:{
            x:0,y:0,opacity:1
        },
        one:{
            opacity:0,
            x:"-100%"
        },
        twoAndThree:{
            opacity:0,
            y:"-100%"
        },
       
        four:{
            opacity:0,
            x:"100%"
        },
    }

  return (
    <div id='services'>
        <h2>Skills</h2>
        <section>
            <motion.div className='serviceBox1' whileInView={animations.whileInView} initial={animations.one} >
                <h3>C.S Fundamentals</h3>
            </motion.div>

            <motion.div className='serviceBox2' whileInView={animations.whileInView} initial={animations.twoAndThree} >
            <i className="fa-brands fa-chrome"></i>
               <span>Web Devlopment</span> 
               <p>Full Stack</p>
                <p> M.E.R.N stack <i class="fa-solid fa-leaf"></i></p>
                <p>Git <i class="fa-brands fa-github"></i></p>
                </motion.div>

            <motion.div className='serviceBox3' whileInView={animations.whileInView} initial={animations.twoAndThree}
            transition={{
                delay:0.2,
            }} >
            <i className="fa-brands fa-google-play"></i>
            <span>Programming</span>
            <p>Advance: C++</p> 
            <p>Intermediate: JavaScript, Java, C</p>
            <p>Novice: Python</p>
            <p>D.S.A + Oops</p> 

            </motion.div>

            <motion.div className='serviceBox4' whileInView={animations.whileInView} initial={animations.four} >
                <span>Extra Skills</span>
                <p>Public Speaking, Debate</p>
                <p>Fluent English+Hindi</p>
                <p>Eveready Curious to learn new things</p>
                
                
            </motion.div>
        </section>
    </div>
  )
}

export default Services