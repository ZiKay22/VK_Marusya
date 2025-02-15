import { useQuery } from "@tanstack/react-query";
import { fetchUserList } from "../compnents/Login/FetchUser";
import { queryClient } from "../queryclient";
import { validateResponse } from "./random_move";

export function PostFavorites(id:string|undefined):Promise<void>{
  
     
    return fetch("https://cinemaguide.skillbox.cc/favorites",{
        credentials:"include",
        method:"POST",
        headers:{ "Content-Type":"application/json"},
        body: JSON.stringify({ id }),
    })
        .then(validateResponse)
        .then(()=>undefined)
    
    
    }
