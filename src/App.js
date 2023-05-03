import {Header,  PhoneHeader } from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import TimeLine from "./components/TimeLine";
import Work from "./components/Work";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { useState } from "react";



function App() {
  const [MenuOpen, setMenuOpen] = useState(false)
  return (
   <>
   <PhoneHeader MenuOpen={MenuOpen} setMenuOpen={setMenuOpen}/>
   <Header MenuOpen={MenuOpen} setMenuOpen={setMenuOpen}/>
   <Home/>
   <Work/>
   <TimeLine/>
   <Services/>
   <Contacts/>
   <Footer/>
   <Toaster/>

   </>
  );
}

export default App;
