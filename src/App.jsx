import Principal from "./components/Principal";
import './app.css'
import { IoCloseCircleOutline } from "react-icons/io5";
import { LuMenuSquare } from "react-icons/lu";
import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";


function App() {
  const [rotateApp, setRotateApp] = React.useState(false)
  return (
    <div className="container">
      <div className={rotateApp ? 'circle circle-animation': 'circle'}>
          <div>
            <IoCloseCircleOutline 
              size={40}
              onClick={()=>setRotateApp(false)}
          /></div>
          <div>
            <LuMenuSquare  
              onClick={()=>setRotateApp(true)}
              size={40}/>
          </div>
      </div>
        <div className={rotateApp ?'principal principal-action1' : 'principal principal-action2'}>
          <Principal/>
        </div>
          <div className={`icon-init ${rotateApp ? 'icon-end1' : 'icon-init1'}`}><FaHome /><div className="div-icon">HOME</div></div>
          <div className={`icon-init ${rotateApp ? 'icon-end2' : 'icon-init2'}`}><FaUserAlt /><div className="div-icon">ABOUT</div></div>
          <div className={`icon-init ${rotateApp ? 'icon-end3' : 'icon-init3'}`}><IoMdMail /><div className="div-icon">CONTAC</div></div>
    </div>
  );
}

export default App;
