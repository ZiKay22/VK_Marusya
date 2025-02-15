import { Link, useParams } from "react-router-dom";
import { fetchFilmResponse, filmSchema, validateResponse } from "../../api/random_move";
import { useQueries, useQuery } from "@tanstack/react-query";
import { queryClient } from "../../queryclient";
import React from "react";
import { topSchema } from "../../api/tops";

export const GetMovieGenre =()=>{
    const { genre } = useParams();
    function fetchGetGenreMovie(){
        return fetch(`https://cinemaguide.skillbox.cc/movie/`)
        .then(validateResponse)
        .then(response => response.json())
       .then(data => topSchema.parse(data))}
    const useMoveQuery=useQuery({
        queryFn:()=>fetchGetGenreMovie(),
        queryKey:["movie","genre"], retry:0,
      },queryClient)
   

	const move = useMoveQuery.data
    return(
        <div className="">
        <div className="displayf" onClick={()=>history.back()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<path d="M18.047 20.0012L26.2967 28.2507L23.9397 30.6077L13.333 20.0012L23.9397 9.39453L26.2967 11.7515L18.047 20.0012Z" fill="white"/>
</svg>
        <h2>{genre}</h2> 

        </div>
         
 
        <div style={{display:"flex",flexWrap:"wrap",gap:30}}>
            {move?.map((item)=>
            item.genres.map((genr)=>
            genr===genre? 
             <Link to={`/movie/${item.id}`} key={item.id} className="">
            <img src={item.posterUrl} alt=""  className="genre_move_img"/></Link>:null
            )
            
            )}
            
        </div></div>
    )
    
 
    
 

}