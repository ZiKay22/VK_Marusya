import { fetchFilmResponse } from "../../api/random_move";
import React, { useState } from "react";
import "./random.css"
import { FetchTop } from "../Tops/Tops";
import { Link } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchTop } from "../../api/tops";
import { queryClient } from "../../queryclient";
import { fetchUserList } from "../Login/FetchUser";
import { btn, Mbtn } from "../../ModalButton";
import { Registration } from "../../api/registration";
import { PostFavorites } from "../../api/favorites";
import { LogIn } from "../../api/login";
import { delfav } from "../../api/delfav";
<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Play:wght@400;700&display=swap');
</style>

export const RandomCard=({move}:{move:fetchFilmResponse},{click}:{click:fetchFilmResponse})=>{
   let color="" 
  // const [email,setEmail]=useState("");
    // const [password,setPassword]=useState("");
    // const [errorMessage,setErrorMessage]=useState("");
    // const LoginMutation=useMutation({
    //   mutationFn:()=>LogIn(email,password),
    //   onSuccess(){
    //     queryClient.invalidateQueries({queryKey:["users","me"]})
    //   }
    // },queryClient);
   
    // const handleSubmit=(event)=>{
    //   event.preventDefault();
    //   if(email.length>5 && password.length>8 ){
    //   LoginMutation.mutate();console.log("working")}
    //   else {
    //     setErrorMessage("Вы ввели неверные данные")
    //   }
    // }
  
      // const [emailReg,setEmailReg]=useState("");
      // const [nameReg,setNameReg]=useState("");
      // const [surnameReg,setSurnameReg]=useState("");
      // const [passwordReg,setPasswordReg]=useState("");
      // const [errorMessageReg,setErrorMessageReg]=useState("");
        // const RegMutation=useMutation({
        //   mutationFn:()=>Registration(nameReg,surnameReg,emailReg,passwordReg),
        //   onSuccess(){
        //     queryClient.invalidateQueries({queryKey:["users","me"]})
        //   }
        // },queryClient);
    
        // const handleSubmitReg=(event)=>{
        //   event.preventDefault();    
      
        //   if(nameReg.length>5 && passwordReg.length>=8 && emailReg.includes("@") && email.includes(".") ){ 
        //    RegMutation.mutate();
        //   }
         
        //   else{
        //       setErrorMessageReg("Вы ввели неверные данные");
    
        //   }
        // }

        // const useUserQuery=useQuery({
        //   queryFn:()=>fetchUserList(),
        //   queryKey:["users","me"], retry:0,
        // },queryClient)
        
            const FavMutation=useMutation({
            mutationFn:()=>PostFavorites(move.id.toString()),
            onSuccess(){
              queryClient.invalidateQueries({queryKey:["favorites"]})
            }
          },queryClient);

          const DelFavMutation=useMutation({
            mutationFn:()=>delfav(move.id.toString()),
            onSuccess(){
              queryClient.invalidateQueries({queryKey:["favorites"]})
            }
          },queryClient);

          const [isvalid, setColor] = useState(true);

   const  aftorisation=(event)=>{
    event.preventDefault();    
    setColor(prev=>!prev);
    {isvalid?FavMutation.mutate():  DelFavMutation.mutate()}

     
   
    

    
   
  }
    return(
        <div className="">
           
    <div className="allflex">
         <div className="item__txt">
            <button className="btn"><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00105 12.1734L3.29875 14.8055L4.34897 9.51997L0.392578 5.86124L5.74394 5.22675L8.00105 0.333374L10.2581 5.22675L15.6095 5.86124L11.6531 9.51997L12.7033 14.8055L8.00105 12.1734Z" fill="white"/>
</svg>
{move.tmdbRating}</button>
             <p className="itemruntime">{move.releaseDate}</p>
         <p className="genre">{move.genres[0]}</p>
         <p className="runtime">{move.runtime} мин</p>
         </div>
        <div className="container">
            <div className="">
                <div className="txts">
                    <h3 className="itemtitle">{move.title}</h3>
    <p className="itemdescr">{move.plot}</p>
                </div>
                
    <div className="btns">

    <button className="modal_btn blue_btn treiler" id="myBtn" onClick={()=>document.getElementById("myModal").style.display = "block"}>Трейлер</button>
    <div id="myModal" className="modal">

<div className="modal-content">
  <span onClick={()=>document.getElementById("myModal").style.display = "none"} className="close">&times;</span>
  <video  controls className="video">
      <source
        src={move.trailerUrl}
      />
    </video>
      

</div>

</div>
<div className="d_flex">
  


<Link to={`/movie/${move.id}`} key={move.id} className="about__btn">О фильме</Link>
         <button className="btns" onClick={()=>window.location.reload()}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 4C14.7486 4 17.1749 5.38626 18.6156 7.5H16V9.5H22V3.5H20V5.99936C18.1762 3.57166 15.2724 2 12 2C6.47715 2 2 6.47715 2 12H4C4 7.58172 7.58172 4 12 4ZM20 12C20 16.4183 16.4183 20 12 20C9.25144 20 6.82508 18.6137 5.38443 16.5H8V14.5H2V20.5H4V18.0006C5.82381 20.4283 8.72764 22 12 22C17.5228 22 22 17.5228 22 12H20Z" fill="white"/>
</svg>
</button>

<button className="btns"  id="a" onClick={aftorisation}>  
  <svg   xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
<path className={isvalid?"color":"color1"} d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.9339 18.6038C13.8155 18.0485 14.61 17.4955 15.3549 16.9029C18.3337 14.533 20 11.9435 20 9C20 6.64076 18.463 5 16.5 5C15.4241 5 14.2593 5.56911 13.4142 6.41421L12 7.82843L10.5858 6.41421C9.74068 5.56911 8.5759 5 7.5 5C5.55906 5 4 6.6565 4 9C4 11.9435 5.66627 14.533 8.64514 16.9029C9.39 17.4955 10.1845 18.0485 11.0661 18.6038C11.3646 18.7919 11.6611 18.9729 12 19.1752C12.3389 18.9729 12.6354 18.7919 12.9339 18.6038Z"/>
</svg></button>
</div>
{/* <div id="myModal1" className="modal">

<div className="mc1">
  <span onClick={()=>document.getElementById("myModal1").style.display = "none"} className="close">&times;</span>
  <div className="modalc">
    <img className='m_logo' src="https://i.postimg.cc/yN5FK7sk/image.png" alt="" />
    <div className="inp">
    <form className="register-form">
      <label className="inp_flex">
           <svg className='svg' width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 3.75C21.5523 3.75 22 4.19772 22 4.75V20.7566C22 21.3052 21.5447 21.75 21.0082 21.75H2.9918C2.44405 21.75 2 21.3051 2 20.7566V19.75H20V8.05L12 15.25L2 6.25V4.75C2 4.19772 2.44772 3.75 3 3.75H21ZM8 15.75V17.75H0V15.75H8ZM5 10.75V12.75H0V10.75H5ZM19.5659 5.75H4.43414L12 12.5593L19.5659 5.75Z" fill="black" fill-opacity="0.4"/>
</svg>   
 <input  value={email} onChange={(event)=>{setEmail(event.currentTarget.value);setErrorMessage(undefined)}} style={{backgroundColor:"white"}} type="text" className="modal__input" placeholder='Электронная почта'/>
      </label>

   
      <label className="inp_flex">
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.917 13.75C12.441 16.5877 9.973 18.75 7 18.75C3.68629 18.75 1 16.0637 1 12.75C1 9.43629 3.68629 6.75 7 6.75C9.973 6.75 12.441 8.91229 12.917 11.75H23V13.75H21V17.75H19V13.75H17V17.75H15V13.75H12.917ZM7 16.75C9.20914 16.75 11 14.9591 11 12.75C11 10.5409 9.20914 8.75 7 8.75C4.79086 8.75 3 10.5409 3 12.75C3 14.9591 4.79086 16.75 7 16.75Z" fill="black" fill-opacity="0.4"/>
</svg>

  <input value={password} onChange={(event)=>{setPassword(event.currentTarget.value);setErrorMessage(undefined)}} type="password" className="modal__input" placeholder='Пароль'/> 
</label>
</form>
{errorMessage && <span style={{color:"red"}}>{errorMessage}</span>}

    </div> 
    <div className="m_btns">
      <button className="login">Войти</button>
      <div id="myModal2" className="modal2">

<div className="mc2">
 
  <span onClick={()=>document.getElementById("myModal2").style.display = "none"} className="close">&times;</span>
  <form className="register-form" >

  <label className="inp_flex">
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.917 13.75C12.441 16.5877 9.973 18.75 7 18.75C3.68629 18.75 1 16.0637 1 12.75C1 9.43629 3.68629 6.75 7 6.75C9.973 6.75 12.441 8.91229 12.917 11.75H23V13.75H21V17.75H19V13.75H17V17.75H15V13.75H12.917ZM7 16.75C9.20914 16.75 11 14.9591 11 12.75C11 10.5409 9.20914 8.75 7 8.75C4.79086 8.75 3 10.5409 3 12.75C3 14.9591 4.79086 16.75 7 16.75Z" fill="black" fill-opacity="0.4"/>
</svg>

  <input value={emailReg} onChange={(event)=>{setEmailReg(event.currentTarget.value);setErrorMessageReg(undefined)}} type="" className="modal__input" placeholder='Email'/> 
</label>

<label className="inp_flex">
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.917 13.75C12.441 16.5877 9.973 18.75 7 18.75C3.68629 18.75 1 16.0637 1 12.75C1 9.43629 3.68629 6.75 7 6.75C9.973 6.75 12.441 8.91229 12.917 11.75H23V13.75H21V17.75H19V13.75H17V17.75H15V13.75H12.917ZM7 16.75C9.20914 16.75 11 14.9591 11 12.75C11 10.5409 9.20914 8.75 7 8.75C4.79086 8.75 3 10.5409 3 12.75C3 14.9591 4.79086 16.75 7 16.75Z" fill="black" fill-opacity="0.4"/>
</svg>

  <input value={passwordReg} onChange={(event)=>{setPasswordReg(event.currentTarget.value);setErrorMessage(undefined)}} type="password" className="modal__input" placeholder='Пароль'/> 
</label>
<label className="inp_flex">
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.917 13.75C12.441 16.5877 9.973 18.75 7 18.75C3.68629 18.75 1 16.0637 1 12.75C1 9.43629 3.68629 6.75 7 6.75C9.973 6.75 12.441 8.91229 12.917 11.75H23V13.75H21V17.75H19V13.75H17V17.75H15V13.75H12.917ZM7 16.75C9.20914 16.75 11 14.9591 11 12.75C11 10.5409 9.20914 8.75 7 8.75C4.79086 8.75 3 10.5409 3 12.75C3 14.9591 4.79086 16.75 7 16.75Z" fill="black" fill-opacity="0.4"/>
</svg>

  <input value={nameReg} onChange={(event)=>{setNameReg(event.currentTarget.value);setErrorMessage(undefined)}} type="" className="modal__input" placeholder='Name'/> 
</label>
<label className="inp_flex">
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.917 13.75C12.441 16.5877 9.973 18.75 7 18.75C3.68629 18.75 1 16.0637 1 12.75C1 9.43629 3.68629 6.75 7 6.75C9.973 6.75 12.441 8.91229 12.917 11.75H23V13.75H21V17.75H19V13.75H17V17.75H15V13.75H12.917ZM7 16.75C9.20914 16.75 11 14.9591 11 12.75C11 10.5409 9.20914 8.75 7 8.75C4.79086 8.75 3 10.5409 3 12.75C3 14.9591 4.79086 16.75 7 16.75Z" fill="black" fill-opacity="0.4"/>
</svg>

  <input value={surnameReg} onChange={(event)=>{setSurnameReg(event.currentTarget.value);setErrorMessage(undefined)}} type="" className="modal__input" placeholder='surname'/> 
</label>
<button type='submit' >Submit</button>
</form>
</div>

</div>
  <button className="reg" id="myBtn2" onClick={()=>document.getElementById("myModal2").style.display = "block"}>Регистрация</button>
    </div>
    
  </div>
   
</div>

</div> */}








    </div>
   

    </div>
    <div className="img__div">
            <img src={move.posterUrl} alt="" className="itemimg"/>
            </div>
    </div>
    
</div>

<FetchTop/>


        </div>
    )
}