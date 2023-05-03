import React from 'react'
import img from '../assets/vg.png'
const Footer = () => {
  return (
    <footer>
        <div>
            <img src={img} alt="" />
        <h2>Mawaz Khan</h2>
        <p>Always Enthusiast to learn new things, accepting challenges, travelling to new places and love to interact and connect to new people</p>
        </div>
        <aside>
            <h2>Social Media</h2>
            <article>
                <a href="https://www.linkedin.com/in/md-mawaz-khan-871a521a8/" target={"blank"}><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/100KhanMawaz" target={"blank"}><i className="fa-brands fa-github"></i></a>
                <a href="#home" target={"blank"}><i class="fa-brands fa-chrome"></i></a>

            </article>
        </aside>
        <a href="#home"><i className="fa-solid fa-arrow-up"></i></a>
    </footer>
  )
}

export default Footer