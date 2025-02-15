import React from "react";
import './dropdown.css'
export const Dropown=()=>{
    return(
        <div className="dropdown">
  <button onClick={()=>document.getElementById("myDropdown").classList.toggle("show")} className="dropbtn">Dropdown</button>
  <div id="myDropdown" className="dropdown-content">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
  </div>
</div>
    )
}