import React, { useState } from "react"
import { fetchFilmResponse, fetchMove, validateResponse } from "../../api/random_move"
import { useParams } from "react-router-dom";
import { filmSchema } from "../../api/random_move";
import { useMutation, useQuery } from "@tanstack/react-query";
import { queryClient } from "../../queryclient";
import { Registration } from "../../api/registration";
import { LogIn } from "../../api/login";
import { fetchUserList } from "../Login/FetchUser";
import { PostFavorites } from "../../api/favorites";
import { delfav } from "../../api/delfav";
import { topSchema } from "../../api/tops";
export const Single=()=>{
    const { movieId } = useParams();
    function fetchMovie():Promise<fetchFilmResponse >{
        return fetch(`https://cinemaguide.skillbox.cc/movie/${movieId}`)
        .then(validateResponse)
        .then(response => response.json())
       .then(data => filmSchema.parse(data))}
    const useMoveQuery=useQuery({
        queryFn:()=>fetchMovie(),
        queryKey:["movie"], retry:0,
      },queryClient)
      const move = useMoveQuery.data
            function fetchGetFavMovie(){
                                   
                               
              return fetch(`https://cinemaguide.skillbox.cc/favorites`,{credentials:"include"})
              .then(validateResponse)
              .then(response => response.json())
             .then(data => topSchema.parse(data))}
          const useFavsQuery=useQuery({
              queryFn:()=>fetchGetFavMovie(),
              queryKey:["movie"], retry:0,
            },queryClient)
      
            const favs= useFavsQuery.data      
       const FavMutation=useMutation({
                  mutationFn:()=>PostFavorites(move?.id.toString()),
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
     if(isvalid){
      FavMutation.mutate()
 

   
     }
      
     else{
       DelFavMutation.mutate() 
     }
 
     if(favs?.toString().includes(move)){
      DelFavMutation.mutate()

     }
      
    
     
 
     
    
   }
  


return(

    <div className="">
      

         <div className="item__txt">
         <button className="btn"><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00105 12.1734L3.29875 14.8055L4.34897 9.51997L0.392578 5.86124L5.74394 5.22675L8.00105 0.333374L10.2581 5.22675L15.6095 5.86124L11.6531 9.51997L12.7033 14.8055L8.00105 12.1734Z" fill="white"/>
</svg>
{move?.tmdbRating}</button>
             <p className="itemruntime">{move?.releaseDate}</p>
         <p className="genre">{move?.genres}</p>
         <p className="runtime">{move?.runtime} мин</p>
         </div>
        <div className="container">
            <div className="">
                <div className="txts">
                    <h3 className="itemtitle">{move?.title}</h3>
    <p className="itemdescr">{move?.plot}</p>
                </div>
                <div className="single_flex">
                <button className="modal_btn blue_btn" id="myBtn" onClick={()=>document.getElementById("myModal").style.display = "block"}>Трейлер</button>
                <button className="btns"  id="a" onClick={aftorisation}>  
  <svg  className={ favs?.toString().includes(move)?"color1":"color"}  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
<path className={isvalid?"color":"color1"}
 d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.9339 18.6038C13.8155 18.0485 14.61 17.4955 15.3549 16.9029C18.3337 14.533 20 11.9435 20 9C20 6.64076 18.463 5 16.5 5C15.4241 5 14.2593 5.56911 13.4142 6.41421L12 7.82843L10.5858 6.41421C9.74068 5.56911 8.5759 5 7.5 5C5.55906 5 4 6.6565 4 9C4 11.9435 5.66627 14.533 8.64514 16.9029C9.39 17.4955 10.1845 18.0485 11.0661 18.6038C11.3646 18.7919 11.6611 18.9729 12 19.1752C12.3389 18.9729 12.6354 18.7919 12.9339 18.6038Z"/>
</svg></button>


              </div>  
    <div id="myModal" className="modal">

<div className="modal-content">
  <span onClick={()=>document.getElementById("myModal").style.display = "none"} className="close">&times;</span>
  <video  controls className="video">
      <source
        src={move?.trailerUrl}
      />
    </video>
      

</div>

</div>
    </div>
    
    <div className="img__div">
            <img src={move?.posterUrl} alt="" className="itemimg"/>

    </div>

    </div>

    <div className="">
             <h3 className="film__title">О фильме</h3>
        <div className="descrs"> 
      
            <p className="film__descr">Язык оригинала</p> 
            <p className="underline">................</p> 
            <p className="film__descr">{move?.language}</p>
        </div>

        <div className="descrs"> 
      
      <p className="film__descr">Бюджет</p> 
      <p className="underline">................</p> 
      <p className="film__descr">{move?.budget} $</p>
  </div>

  <div className="descrs"> 
      
      <p className="film__descr">Выручка</p> 
      <p className="underline">................</p> 
      <p className="film__descr">{move?.awardsSummary} $</p>
  </div>

  <div className="descrs"> 
      <p className="film__descr">Режиссёр</p> 
      <p className="underline">................</p> 
      <p className="film__descr">{move?.director} </p>
  </div>

  <div className="descrs"> 
      <p className="film__descr">Продакшен</p> 
      <p className="underline">................</p> 
      <p className="film__descr">{move?.production} </p>
  </div>

  <div className="descrs"> 
      <p className="film__descr">Награды</p> 
      <p className="underline">................</p> 
      <p className="film__descr">{move?.keywords} </p>
  </div>
      
    </div>
    
    </div>
)
}