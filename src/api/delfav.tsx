import { validateResponse } from "./random_move";

export function delfav(movieId:string):Promise<void>{
  
     
    return fetch(`https://cinemaguide.skillbox.cc/favorites/${movieId}`,{
        credentials:"include",
        method:"DELETE",
        headers:{ "Content-Type":"application/json"},
        body: JSON.stringify({ movieId }),

    })
        .then(validateResponse)
        .then(()=>undefined)
    
    
    }