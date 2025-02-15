import { fetchFilmResponse } from "../../api/random_move";
import React from "react";
import "./tops.css"
import { Link } from "react-router-dom";

export const TopCard=({topmove }:{topmove:fetchFilmResponse[]})=>{

    return(
      <div className="">
        <h2 className="topstitle">Топ 10 фильмов</h2>
     
        <div className="flex1 scroll" >

        {topmove.map((item,i)=>
        <div className="items"  key={item.id}>
          <div className="btn-div">
                           <button className="btn-img">{i+1}</button>

          </div>
          <div className="img-div">
            <Link to={`/movie/${item.id}`} key={item.id} className="nonestyle">
            <img src={item.posterUrl} alt=""  className="top_img"/></Link>
          </div>
                
      
        </div>  
       
        )}
        
      </div>
      </div>
    )
   
       
      
  
}