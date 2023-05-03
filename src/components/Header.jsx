import React from 'react'
import "../style/header.scss"

export const Header = ({MenuOpen,setMenuOpen}) => {
  return (
    <>
   <nav>
    <NavContent/>

   </nav>
   <button className="burgerButton" onClick={()=>{return (setMenuOpen(!MenuOpen))/*here in this callback function intially menu is true and if clicked then it will be reverse of whatever the menu is at that instant so that's why we wrote reverse of MenuOpen i.e !MenuOpen so when it will be clicked again then again it will be reversed whatever is the value of MenuOen */}}> 
   <i className="fa-solid fa-bars"></i>   </button>
  </>
  )
}
export const PhoneHeader = ({MenuOpen,setMenuOpen}) => {
  return (
    <div className={`navPhone ${MenuOpen===true?'navPhoneComes':''}`}>
        <NavContent MenuOpen={MenuOpen} setMenuOpen={setMenuOpen} />
    </div>
  )
}
const NavContent=({MenuOpen,setMenuOpen})=>{
  return (
    <>
    <h2>Mawaz</h2>
    <div>
        <a href="#home" onClick={()=>setMenuOpen(false)}>Home</a>
        <a href="#work" onClick={()=>setMenuOpen(false)}>Projects</a>
        <a href="#timeline" onClick={()=>setMenuOpen(false)}>timeline</a>
        <a href="#services" onClick={()=>setMenuOpen(false)}>Skills</a>
        <a href="#contact" onClick={()=>setMenuOpen(false)}>contact</a>
    </div>
    <a href="mailto:khanmowaz@gmail.com">
      <button>Email</button>
    </a>
    </>
  );
};
