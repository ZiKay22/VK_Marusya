import React from "react";
import './acc.css'
import { fetchUserList } from "../Login/FetchUser";
import { Link } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { queryClient } from "../../queryclient";
import {  validateResponse } from "../../api/random_move";
import {   fetchFilmResponse,  topSchema } from "../../api/tops";
import { delfav } from "../../api/delfav";
import { string } from "zod";
import { DeleteBtn } from "./delete";
export const AccPage=()=>{
    const useUserQuery=useQuery({
        queryFn:()=>fetchUserList(),
        queryKey:["users","me"], retry:0,
      },queryClient)
      const user = useUserQuery.data

      function fetchGetFavMovie(){
                             
                         
        return fetch(`https://cinemaguide.skillbox.cc/favorites`,{credentials:"include"})
        .then(validateResponse)
        .then(response => response.json())
       .then(data => topSchema.parse(data))}
    const useMoveQuery=useQuery({
        queryFn:()=>fetchGetFavMovie(),
        queryKey:["movie"], retry:0,
      },queryClient)

      const move= useMoveQuery.data          

user?.favorites.map((moveitem)=>console.log(moveitem))
function LogOut():Promise<void>{
    return (fetch("https://cinemaguide.skillbox.cc/auth/logout",{
        credentials:"include",
        method:"POST",
        headers:{ "Content-Type":"application/json" },
    })
        .then(validateResponse)
        .then(()=>undefined)
    
    
    )
    
}


    return(
        <div className="">
            <h1 className="first__title">Мой аккаунт</h1>
            <div className="container">

            <div className="drop_flex">
                <div className="icon__flex" >

           
            <div  className="icon" style={{display:"flex"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.9339 18.6038C13.8155 18.0485 14.61 17.4955 15.3549 16.9029C18.3337 14.533 20 11.9435 20 9C20 6.64076 18.463 5 16.5 5C15.4241 5 14.2593 5.56911 13.4142 6.41421L12 7.82843L10.5858 6.41421C9.74068 5.56911 8.5759 5 7.5 5C5.55906 5 4 6.6565 4 9C4 11.9435 5.66627 14.533 8.64514 16.9029C9.39 17.4955 10.1845 18.0485 11.0661 18.6038C11.3646 18.7919 11.6611 18.9729 12 19.1752C12.3389 18.9729 12.6354 18.7919 12.9339 18.6038Z" fill="white"/>
</svg>

<a id="icon1" onClick={()=>{ document.getElementById("myDropdown2").classList.remove("closedrop"), document.getElementById("myDropdown").classList.remove("show"),document.getElementById("icon2").classList.remove("active"),document.getElementById("icon1").classList.toggle("active")
 }}  className="active desk">Избранные фильмы</a>

<a id="icon3" onClick={()=>{ document.getElementById("myDropdown2").classList.remove("closedrop"), document.getElementById("myDropdown").classList.remove("show"),document.getElementById("icon4").classList.remove("active"),document.getElementById("icon3").classList.toggle("active")
 }}  className="active mob">Избранные </a>

</div>

<div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z" fill="white"/>
</svg>
 <a id="icon2" className="forlink desk" onClick={()=>{ document.getElementById("myDropdown").classList.toggle("show"),document.getElementById("myDropdown2")?.classList.toggle("closedrop"),document.getElementById("icon1").classList.remove("active"),document.getElementById("icon2").classList.toggle("active")

 }} > Настройка аккаунта</a>

<a id="icon4" className="forlink mob" onClick={()=>{ document.getElementById("myDropdown").classList.toggle("show"),document.getElementById("myDropdown2")?.classList.toggle("closedrop"),document.getElementById("icon3").classList.remove("active"),document.getElementById("icon4").classList.toggle("active")

}} > Настройки </a>
            </div>
            </div>

            <div className="dropdown2">  
              
           <div id="myDropdown2" className=" ">
            <div id="myDropdown2" className=" userflex">

                
                 {move?.map((itemuser)=> {
                     return<div className="">
                    <div id={itemuser.id.toString()}  key={itemuser.id} className="b-pict ">
                    <DeleteBtn id={itemuser.id}/>
                    <img className="favimg " src={itemuser.posterUrl} alt="" />
                    </div>
                 </div>
                 }              
 )}</div>
           </div>
          
       
            </div>
    



         
            
      
  
 
      
            
       

           
<div className="dropdown1">


            </div>        
            <div id="myDropdown" className="dropdown-content1">
                <div className="flexacc">
                <span className="dot">{user?.name[0]}{user?.surname[0]}</span>
                    <div className="txt">
                        <p className="user_descr">Имя Фамилия</p>
    <h1 className="user_title">{user?.name} {user?.surname}</h1>  
                    </div>
                    
                </div>
                <div className="flexacc">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
<rect width="60" height="60" rx="30" fill="white" fill-opacity="0.5"/>
<path d="M39 21C39.5523 21 40 21.4477 40 22V38.0066C40 38.5552 39.5447 39 39.0082 39H20.9918C20.4441 39 20 38.5551 20 38.0066V37H38V25.3L30 32.5L20 23.5V22C20 21.4477 20.4477 21 21 21H39ZM26 33V35H18V33H26ZM23 28V30H18V28H23ZM37.5659 23H22.4341L30 29.8093L37.5659 23Z" fill="white"/>
</svg>                    <div className="txt">
                        <p className="user_descr">Электронная почта</p>
    <h1 className="user_title mb">{user?.email}</h1> 

                    </div>
                    
                    
                </div>    
                <button className="blue_btn
      logoutbtn" onClick={()=>{LogOut(),localStorage.clear(),
        window.location.href = '/'}}>Выйти из аккаунта</button>  
 </div>
 </div>
 </div>
 </div>
    )
}