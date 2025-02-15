import { z } from "zod"
import { validateResponse } from "../../api/random_move"
import { useQuery } from "@tanstack/react-query"
import { queryClient } from "../../queryclient"
import { Loader } from "../Loader/Loader";
import React from "react";
import { Mbtn } from "../../ModalButton";
import { Link } from "react-router-dom";
import { Accaunt } from "../Accaunt/acc";
import { Getfavs } from "../Accaunt/getfavs";
import { fetchGetFavMovie } from "../../api/tops";
const fetchUserListSchema=z.object({
    name:z.string(),
    surname:z.string(),
    email:z.string(),
    favorites:z.array(z.string()),
});


export type fetchUserListResponse=z.infer<typeof fetchUserListSchema>


export function fetchUserList():Promise<fetchUserListResponse>{
    return fetch("https://cinemaguide.skillbox.cc/profile",{
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type":"application/json",
  
      },
    })
    .then(validateResponse)
    .then((response) => response.json())
   .then((data) => fetchUserListSchema.parse(data))}


   export function FetchUserView(){

     const useUserQuery=useQuery({
       queryFn:()=>fetchUserList(),
       queryKey:["users","me"], retry:0,
     },queryClient)
     switch (useUserQuery.status){
       case "pending":
       return <Loader/>;
       case "success":
        
         return (<div className="">
          <Accaunt user={useUserQuery.data}/>

         </div>
         
        
         )
          
        case "error":
          return      <Mbtn />
     }
   }