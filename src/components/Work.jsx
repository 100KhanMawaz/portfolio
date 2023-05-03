import React from 'react'
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import data from "../assets/data.json"
import "../style/Work.scss"
const Work = () => {
  return (
    <div id="work">
        
    <h2>Projects</h2>

    <section>

    <article>

   <Carousel
   showArrows={false}
   showIndicators={false}
   showStatus={false}
   showThumbs={false}
   interval={2000}
   infiniteLoop={true}
   autoPlay={true}
   >
    
    {

      data.projects.map((i)=>(
        <div key={i.title} className="workItem">
        <img src={i.imgSrc} alt={i.title} />

        <aside>
          <h3>{i.title}</h3>
          <p>{i.description}</p>
          <p>{i.description2}</p>
          <div>
          <a target={"_blank"} href={i.github}>Source Code</a>
          <a target={"_blank"} className={i.url===""?'d-none':""} href={i.url}>Live Demo</a>
          </div>
        </aside>
        </div>

      ))

    }

   </Carousel>

    </article>

    </section>
    </div>
  )
}

export default Work