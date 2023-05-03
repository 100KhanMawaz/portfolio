import React, { useRef,useEffect } from 'react'
import {animate, motion} from "framer-motion"
import  Typewriter from 'typewriter-effect'
import "../style/home.scss"
import Cube3d from '../components/Cube3d'
import video from '../assets/video.mp4'
const Home = () => {
  
  const CGPA=useRef(null);//Using useRef we can directly access a particular element where the name of useRef is used i.e wherever we write ref={CGPA} we can access it by using clientClount.current object
  
  const QuestionCount=useRef(null);

  const VideoRef = useRef(null);


  const animationCGPA =()=>{
    animate(0,8.5,{//1st jo 0 uska matlb starting point and 2nd jo 100 hai uska matlab ending point
      duration:1,//kitna der mein complete krna hai
      onUpdate:(v)=>(CGPA.current.textContent=v.toFixed(1)),//CGPA.current isse useRef wala element select hoga as explained above already or CGPA.current.textContent mein v daal do v kya hai ? v 0 se 100 tak saara number hai or v.toFixed mtlb koi decimal nai chaiye apne ko
    });
  };


  const animationQuestionCount =()=>{
    animate(0,500,{
      duration:3,
      onUpdate:(v)=>(QuestionCount.current.textContent=v.toFixed()),
    });
  };
  const handlePlay=async()=>{
    
    await VideoRef.current.play();
  };
//   useEffect (() => {
//      VideoRef.current.play();
    
// }, [])

   // here animation is an object containing h1
    const animations = {
       
      //h1 is again a object containing initial and whileInView
        h1:{
            //initial is again an object which contains x and opacity
            initial:{
              x:"-100%",
              opacity:0,
            },
                 
            //WhileInView is again an object which contains x and opacity
            whileInView:{
              x:0,
              opacity:1,
            }
},

        //button is again a object containing initial and whileInView
        button:{
            //initial is again an object which contains x and opacity
            initial:{
              y:"200%",
              opacity:0,
            },
                      
            //WhileInView is again an object which contains x and opacity
            whileInView:{
              y:"1%",
              opacity:1,
            },
            transition:{
              duration: 0.6,
            }
          },
          //button is again a object containing initial and whileInView
          video:{
            //initial is again an object which contains x and opacity
            initial:{
              y:"-100%",
              opacity:0,
            },
            
            //WhileInView is again an object which contains x and opacity
            whileInView:{
              y:"20%",
              opacity:1,
            },
            transition:{
              duration: 0.6,
            }
            
}
}

// useEffect(() => {
//   //console.log(VideoRef.current.play())
//   VideoRef.current.play();
// }, [])

  return (
    <>
    <div id="home">
        <section>
            <div>
            {/* to insert an object inside code we use spread operator i.e ... */}
                <motion.h1 {...animations.h1} > 
                    Hi, I Am <br/> Mawaz
                </motion.h1>
                

            <Typewriter options={{
                strings:["A FULL Stack Developer","DSA Problem Solving","An Enthusiast Learner!"],//jo bhi likhna use idhar likho
                autoStart:true,
                loop:true,//chalte raho
                delay:50,
                cursor:"😋",
                wrapperClassName:"typewriterpara"// becuase we will apply css in it therefore we Allocating ClassName
            }}/>

            <div>
            <a href="mailto:khanmowaz@gmail.com">Hire Me</a>
            <a href="#work">Projects <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>

            <article>
              <p>
                +<motion.span ref={QuestionCount} whileInView={animationQuestionCount}>500</motion.span> {/* Motion nai likhenge to kaam nai karega animation,sirf span likhne se kaam ni krega */}
              </p>
              <span>Questions Solved on Various Platform</span>
            </article>

            <aside>
            <article>
              <p>
                <motion.span whileInView={animationCGPA} ref={CGPA}>8.5</motion.span> {/* Motion nai likhenge to kaam nai karega animation,sirf span likhne se kaam ni krega */}
              </p>
              <span>Current<br/>C.G.P.A</span>
            </article>

            <article className='data'>
              <p>2020-24(C.S.E)</p>
              <span>Ramgarh Engineering College</span>
            </article>
            </aside>
            </div>
        </section>
            
        <section id='VideoSection'>
          <motion.div id='video' {...animations.video}   transition={{ delay: 0.5 }}>
          <video width={400} height={200} ref={VideoRef} >
          <source src={video} type="video/mp4" /> 
           </video>
           
           </motion.div>
           <motion.button className='Videobtn' {...animations.button} onClick={handlePlay}>Video Resume In 15 Seconds <br/> Click Here <i class="fa-solid fa-play"></i></motion.button>
        </section>

        <section>
            <Cube3d/>
        <a href="#work">Projects<i className="fa-solid fa-chevron-down"></i></a>
        </section>
        <a href="#work">Projects<i className="fa-solid fa-chevron-down"></i></a>
        
    </div>
            </>
  )
}

export default Home