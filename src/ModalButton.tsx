import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { Registration } from "./api/registration";
import { queryClient } from "./queryclient";
import { LogIn } from "./api/login";
import "./m.css"

export const Mbtn = () =>{
  const classinput={
    borderColor:"red"
  }
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [errorMessage,setErrorMessage]=useState("");
   const LoginMutation=useMutation({
    mutationFn:()=>LogIn(email,password),
    onSuccess(){
      queryClient.invalidateQueries({queryKey:["users","me"]})
    }
  },queryClient);
  const handleSubmit=(event)=>{
    event.preventDefault();
    if(email.length>5 && password.length>8 ){
    LoginMutation.mutate();console.log("working")}
    else {
      setErrorMessage("Вы ввели неверные данные")
    }
  }

    const [emailReg,setEmailReg]=useState("");
    const [nameReg,setNameReg]=useState("");
    const [surnameReg,setSurnameReg]=useState("");
    const [passwordReg,setPasswordReg]=useState("");
    const [passwordReg2,setPasswordReg2]=useState("");

    const [errorMessageReg,setErrorMessageReg]=useState("");
      const RegMutation=useMutation({
        mutationFn:()=>Registration(nameReg,surnameReg,emailReg,passwordReg),
        onSuccess(){
          queryClient.invalidateQueries({queryKey:["users","me"]})
        }
      },queryClient);
  
      const handleSubmitReg=(event)=>{
        event.preventDefault();    
    
        if(nameReg.length>5 && passwordReg.length>=8 && passwordReg===passwordReg2 ){ 
         RegMutation.mutate();
        }
       
        else{
            setErrorMessageReg("Вы ввели неверные данные");
  
        }
      }

    return(
      <div className="" >
               <a className="desk modal_btn1" id="myBtn1" onClick={()=>document.getElementById("myModal1").style.display = "block"}>Войти</a>
               <a className="mob modal_btn1" id="myBtn1" onClick={()=>document.getElementById("myModal1").style.display = "block"}><svg className="link" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z" fill="white"/>
</svg></a>
        <div id="myModal1" className="modal">

        <div className="mc1">
          <span onClick={()=>document.getElementById("myModal1").style.display = "none"} className="close">&times;</span>
          <div className="modalc">
            <img className='m_logo' src="https://i.postimg.cc/yN5FK7sk/image.png" alt="" />
            <div className="inputs">
            <form className="register-form">
              <label className={errorMessage?"inp_flex inputred":"inp_flex"}>
                   <svg className='svg' width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 3.75C21.5523 3.75 22 4.19772 22 4.75V20.7566C22 21.3052 21.5447 21.75 21.0082 21.75H2.9918C2.44405 21.75 2 21.3051 2 20.7566V19.75H20V8.05L12 15.25L2 6.25V4.75C2 4.19772 2.44772 3.75 3 3.75H21ZM8 15.75V17.75H0V15.75H8ZM5 10.75V12.75H0V10.75H5ZM19.5659 5.75H4.43414L12 12.5593L19.5659 5.75Z" fill="black" fill-opacity="0.4"/>
        </svg>   
         <input  value={email} onChange={(event)=>{setEmail(event.currentTarget.value);setErrorMessage(undefined)}} style={{backgroundColor:"white"}} type="text" className="modal__input" placeholder='Электронная почта'/>
              </label>
        
           
              <label className={errorMessage?"inp_flex inputred":"inp_flex"} id="i1">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.917 13.75C12.441 16.5877 9.973 18.75 7 18.75C3.68629 18.75 1 16.0637 1 12.75C1 9.43629 3.68629 6.75 7 6.75C9.973 6.75 12.441 8.91229 12.917 11.75H23V13.75H21V17.75H19V13.75H17V17.75H15V13.75H12.917ZM7 16.75C9.20914 16.75 11 14.9591 11 12.75C11 10.5409 9.20914 8.75 7 8.75C4.79086 8.75 3 10.5409 3 12.75C3 14.9591 4.79086 16.75 7 16.75Z" fill="black" fill-opacity="0.4"/>
        </svg>
        
          <input value={password} onChange={(event)=>{setPassword(event.currentTarget.value);setErrorMessage(undefined)}} className="modal__input" type="password" placeholder='Пароль' /> 
        </label>
        </form>
        
        
            </div> 
            <div className="m_btns">
              <button className="login blue_btn" onClick={handleSubmit}>Войти</button>
              <div id="myModal2" className="modal2">
        
        <div className="mc2">
         
          <span onClick={()=>document.getElementById("myModal2").style.display = "none"} className="close">&times;</span>
          <form className="register-form register-form1" >
          <img className='m_logo' src="https://i.postimg.cc/yN5FK7sk/image.png" alt="" />
          <h2 className="regtitle">Регистрация</h2>
          <label className={errorMessageReg?"inp_flex inputred":"inp_flex"}>
          <svg className='svg' width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 3.75C21.5523 3.75 22 4.19772 22 4.75V20.7566C22 21.3052 21.5447 21.75 21.0082 21.75H2.9918C2.44405 21.75 2 21.3051 2 20.7566V19.75H20V8.05L12 15.25L2 6.25V4.75C2 4.19772 2.44772 3.75 3 3.75H21ZM8 15.75V17.75H0V15.75H8ZM5 10.75V12.75H0V10.75H5ZM19.5659 5.75H4.43414L12 12.5593L19.5659 5.75Z" fill="black" fill-opacity="0.4"/>
        </svg>  
        
          <input value={emailReg} onChange={(event)=>{setEmailReg(event.currentTarget.value);setErrorMessageReg(undefined)}} type="" className="modal__input" placeholder='Электронная почта'/> 
        </label>
        
      
        <label className={errorMessageReg?"inp_flex inputred":"inp_flex"}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
<path d="M4 22.75C4 18.3317 7.58172 14.75 12 14.75C16.4183 14.75 20 18.3317 20 22.75H18C18 19.4363 15.3137 16.75 12 16.75C8.68629 16.75 6 19.4363 6 22.75H4ZM12 13.75C8.685 13.75 6 11.065 6 7.75C6 4.435 8.685 1.75 12 1.75C15.315 1.75 18 4.435 18 7.75C18 11.065 15.315 13.75 12 13.75ZM12 11.75C14.21 11.75 16 9.96 16 7.75C16 5.54 14.21 3.75 12 3.75C9.79 3.75 8 5.54 8 7.75C8 9.96 9.79 11.75 12 11.75Z" fill="black" fill-opacity="0.4"/>
</svg>
        
          <input value={nameReg} onChange={(event)=>{setNameReg(event.currentTarget.value);setErrorMessage(undefined)}} type="" className="modal__input" placeholder='Name'/> 
        </label>
        <label className={errorMessageReg?"inp_flex inputred":"inp_flex"}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
<path d="M4 22.75C4 18.3317 7.58172 14.75 12 14.75C16.4183 14.75 20 18.3317 20 22.75H18C18 19.4363 15.3137 16.75 12 16.75C8.68629 16.75 6 19.4363 6 22.75H4ZM12 13.75C8.685 13.75 6 11.065 6 7.75C6 4.435 8.685 1.75 12 1.75C15.315 1.75 18 4.435 18 7.75C18 11.065 15.315 13.75 12 13.75ZM12 11.75C14.21 11.75 16 9.96 16 7.75C16 5.54 14.21 3.75 12 3.75C9.79 3.75 8 5.54 8 7.75C8 9.96 9.79 11.75 12 11.75Z" fill="black" fill-opacity="0.4"/>
</svg>
        
          <input value={surnameReg} onChange={(event)=>{setSurnameReg(event.currentTarget.value);setErrorMessage(undefined)}} type="" className="modal__input" placeholder='surname'/> 
        </label>

        <label className={errorMessageReg?"inp_flex inputred":"inp_flex"}>
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.917 13.75C12.441 16.5877 9.973 18.75 7 18.75C3.68629 18.75 1 16.0637 1 12.75C1 9.43629 3.68629 6.75 7 6.75C9.973 6.75 12.441 8.91229 12.917 11.75H23V13.75H21V17.75H19V13.75H17V17.75H15V13.75H12.917ZM7 16.75C9.20914 16.75 11 14.9591 11 12.75C11 10.5409 9.20914 8.75 7 8.75C4.79086 8.75 3 10.5409 3 12.75C3 14.9591 4.79086 16.75 7 16.75Z" fill="black" fill-opacity="0.4"/>
        </svg>
        
          <input value={passwordReg} onChange={(event)=>{setPasswordReg(event.currentTarget.value);setErrorMessage(undefined)}} type="password" className="modal__input" placeholder='Пароль'/> 
        </label>

        <label className={errorMessageReg?"inp_flex inputred":"inp_flex"}>
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.917 13.75C12.441 16.5877 9.973 18.75 7 18.75C3.68629 18.75 1 16.0637 1 12.75C1 9.43629 3.68629 6.75 7 6.75C9.973 6.75 12.441 8.91229 12.917 11.75H23V13.75H21V17.75H19V13.75H17V17.75H15V13.75H12.917ZM7 16.75C9.20914 16.75 11 14.9591 11 12.75C11 10.5409 9.20914 8.75 7 8.75C4.79086 8.75 3 10.5409 3 12.75C3 14.9591 4.79086 16.75 7 16.75Z" fill="black" fill-opacity="0.4"/>
        </svg>
        
          <input value={passwordReg2} onChange={(event)=>{setPasswordReg2(event.currentTarget.value);setErrorMessage(undefined)}} type="password" className="modal__input" placeholder='Подтвердите пароль'/> 
        </label>
        <div className="regflex">
                <button className="regbtn blue_btn" type='submit' onClick={handleSubmitReg}>Создать аккаунт</button>
      <a className="desk modal_btn1 linkreg" id="myModal" onClick={()=>document.getElementById("myModal2").style.display = "none"}>У меня есть пароль</a>
        </div>
  
        </form>
        
        </div>
        
        </div>
          <button className="reg" id="myBtn2" onClick={()=>document.getElementById("myModal2").style.display = "block"}>Регистрация</button>

            </div>
            
          </div> 
           
        </div> 
        
        </div>
        
         </div>  
    )
}
export const btn= document.getElementById("myModal1")
