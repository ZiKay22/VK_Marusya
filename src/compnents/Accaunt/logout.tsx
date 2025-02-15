import { useQuery } from "@tanstack/react-query";
import { validateResponse } from "../../api/random_move";
import { queryClient } from "../../queryclient";
import { Loader } from "../Loader/Loader";
import React from "react";
import App from "../../App";
import { FetchMoveView } from "../Random_move/RandomFetch";

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

export function FetchLogut(){

                  
   const useUserQuery=useQuery({
     queryFn:()=>LogOut(),
     queryKey:["users","me"], retry:0,
   },queryClient)
   switch (useUserQuery.status){
     case "pending":
     return <Loader/>;
     case "success":
      
       return <FetchMoveView/>
       
      
       
        
      case "error":
        return           <button onClick={LogOut}>Выйти из аккаунта</button>

   }
 }