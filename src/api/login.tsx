import { validateResponse } from "./random_move";

export function LogIn(email:string,password:string):Promise<void>{
    return (fetch("https://cinemaguide.skillbox.cc/auth/login",{
        credentials:"include",
        method:"POST",
        headers:{ "Content-Type":"application/json" },
        body: JSON.stringify({ email, password }),
    })
        .then(validateResponse)
        .then(()=>undefined)
    
    
    )
}
        