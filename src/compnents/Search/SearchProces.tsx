import React, { ChangeEvent } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { validateResponse } from "../../api/random_move";
import { topSchema } from "../../api/tops";
import { useQuery } from "@tanstack/react-query";
import { queryClient } from "../../queryclient";
import './search.css'
export const Search=()=>{
  let bcolor=""
    const [searchParam, setSearchParam] = useSearchParams();
    const handleSearchGenre = (event: ChangeEvent<HTMLInputElement>): void => {
		const { value } = event.target;
		setSearchParam({ searchGenre: value.toLowerCase() });
	};
    let searchGenre = searchParam.get("searchGenre") || "";
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
  

      return (
        <div className="desk">



            <label className=" inp" htmlFor="genre">
              <div className="df">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
<path d="M18.3591 16.6168L22.6418 20.8995L21.2276 22.3137L16.9449 18.031C15.405 19.263 13.4521 20 11.3281 20C6.36013 20 2.32812 15.968 2.32812 11C2.32812 6.032 6.36013 2 11.3281 2C16.2961 2 20.3281 6.032 20.3281 11C20.3281 13.124 19.5911 15.0769 18.3591 16.6168ZM16.3528 15.8748C17.5756 14.6146 18.3281 12.8956 18.3281 11C18.3281 7.1325 15.1956 4 11.3281 4C7.46062 4 4.32812 7.1325 4.32812 11C4.32812 14.8675 7.46062 18 11.3281 18C13.2237 18 14.9427 17.2475 16.2029 16.0247L16.3528 15.8748Z" fill="white" fill-opacity="0.5"/>
</svg>
        <input className="input"  id="search" placeholder="Поиск" value={searchGenre} onChange={handleSearchGenre} />
              
        <svg style={{cursor:"pointer"}} onClick={()=>{document.getElementById("search").value=""}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M11.9987 10.5865L16.9485 5.63672L18.3627 7.05093L13.4129 12.0007L18.3627 16.9504L16.9485 18.3646L11.9987 13.4149L7.04899 18.3646L5.63477 16.9504L10.5845 12.0007L5.63477 7.05093L7.04899 5.63672L11.9987 10.5865Z" fill="white" fill-opacity="0.5"/>
</svg>
              </div>

        </label>
      
        {move?.map(( item,i) => (
          
 item.title.toLowerCase().includes(searchGenre)?

 
			<Link className="search__conten" to={`/movie/${item.id}`} key={item.id} >
                    
					{searchGenre?
           <div className="search__content">

          <div className="search_container" >
            
            <div className="flexs" >
  <div className="">
   
                <img width={40} height={65} className="" src={item.posterUrl}/>

  </div>
<div className="flx">
  <div className="flexsearch">



 <button  className={((item.tmdbRating?.toFixed(0)>7) ? "rbtna btn search":item.tmdbRating?.toFixed(1)<7? "rbtnb btn search ":"rbtnc  btn search")} ><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00105 12.1734L3.29875 14.8055L4.34897 9.51997L0.392578 5.86124L5.74394 5.22675L8.00105 0.333374L10.2581 5.22675L15.6095 5.86124L11.6531 9.51997L12.7033 14.8055L8.00105 12.1734Z" fill="white"/>
</svg>
{item.tmdbRating?.toFixed(2)}
</button>



 
<div className="flexsearch">
<p className="texttxt" >{item.releaseDate}</p>
<p className="texttxt">{item.genres}</p>
<p className="texttxt">{item.runtime}мин</p></div>
  </div>

 <div className="fortitle">
    <h3 className="title">{item.title} </h3>
</div>
</div>
         
 
  </div>
  
                  

           </div> </div>:null}
					</Link>    :null
				))}
            
         
        </div>
      )
}
