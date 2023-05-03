import React from 'react'
import '../style/Cube3d.scss';
import MERN from '../assets/Images/mern-stack2.png'
import API from '../assets/Images/Api.png'
import CppJava from '../assets/Images/Cpp.jpg'
import DSA from '../assets/Images/DSA.jpg'
import JS from '../assets/Images/JavaScript.png'
import react from '../assets/Images/ReactJS.jpg'


import Typography from "@mui/material/Typography";

const Cube3d = () => {
  return (
    <div className='cube'>
    <div className='homeskills'>
      <h3>Skills</h3>
      {/* <Typography variant='h5'>SKILLS</Typography> */}
    <div className="homeCubeSkills">
      <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
        <img src={CppJava} alt="" />
      </div>
      <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
        <img src={react} alt="" />
      </div>
      <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
        <img src={API} alt="" />
      </div>
      <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
        <img src={DSA}  alt="" />
      </div>
      <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
        <img src={MERN} alt="" />
      </div>
      <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
        <img src={JS} alt="" />
      </div>
    </div>
    <div className="cubeShadow"></div>
    </div>
    </div>
  )
}

export default Cube3d;