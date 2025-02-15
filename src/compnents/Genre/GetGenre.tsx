import { useQuery } from "@tanstack/react-query"
import { fetchGenre, fetchGenreResponse } from "../../api/genre"
import { queryClient } from "../../queryclient"
import React from "react"
import "./genre.css"
import { Link } from "react-router-dom"

export const GenreCard=({genre}:{genre:fetchGenreResponse})=>{

    return(
      <div className="content__container">

  
        <div className="genre__flex">
            {genre.map((item)=>
            <div className="">
                  {item==="history"?
                  <Link className="link" to={`/genres/${item}`}>
                  <div className="genre__title-div">
                    <img className="genre__img"  src="https://www.boredpanda.com/blog/wp-content/uploads/2022/04/historical-movies-11-625543acded12__700.jpg"/>
                    <h3 className="genre__title">History</h3>
                  </div></Link>
                   :null }

                {item==="horror"?
                  <Link className="link" to={`/genres/${item}`}>

                  <div className="genre__title-div">
                    <img className="genre__img" width={290} height={400} src="https://m.media-amazon.com/images/M/MV5BNzc2MWUyYzctY2E4Ny00ZTlmLThjNTMtMTViZGI5NjcyN2EzXkEyXkFqcGc@._V1_.jpg"/>
                    <h3 className="genre__title">Horror</h3>
                  </div></Link>
                   :null }
                        {item==="scifi"?
                          <Link className="link" to={`/genres/${item}`}>
                  <div className="genre__title-div">
                    <img className="genre__img" width={290} height={400} src="https://www.mirf.ru/backend/wp-content/uploads/2016/05/97dca4de1eae9b9a014eaaffe8db5122.jpg"/>
                    <h3 className="genre__title">Scifi</h3>
                  </div></Link>
                   :null }

                  {item==="stand-up"?
                    <Link className="link" to={`/genres/${item}`}>
                  <div className="genre__title-div">
                    <img className="genre__img" width={290} height={400} src="https://m.media-amazon.com/images/M/MV5BNDRhNWZiNmItZWM4MS00Yjc2LTk3MGEtODRiNzUzZmM3NTJjXkEyXkFqcGc@._V1_.jpg"/>
                    <h3 className="genre__title">Stand-up</h3>
                  </div></Link>
                   :null }
                {item==="fantasy"?
                  <Link className="link" to={`/genres/${item}`}>
                  <div className="genre__title-div">
                    <img className="genre__img" width={290} height={400} src="https://miro.medium.com/v2/resize:fit:1400/1*_RoSr5jogEzRDi5qDxXY1A.jpeg"/>
                    <h3 className="genre__title">Fantasy</h3>
                  </div></Link>
                   :null }

                {item==="drama"?
                  <Link className="link" to={`/genres/${item}`}>
                  <div className="genre__title-div">
                    <img className="genre__img" width={290} height={400} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVyj6g8GO8tpMHWTrCd8QfRaPIP2WKrHZ1xOKNciTCeRPBuXkfSqyB30yRp9Cqm8jL6eI&usqp=CAU"/>
                    <h3 className="genre__title">Drama</h3>
                  </div></Link>
                   :null }
                  {item==="mystery"?
                    <Link className="link" to={`/genres/${item}`}>
                  <div className="genre__title-div">
                    <img className="genre__img" width={290} height={400} src="https://hips.hearstapps.com/hmg-prod/images/115455159-1300x1733-1602867451.jpg?crop=0.910428158655109xw:1xh;center,top&resize=980:*"/>
                    <h3 className="genre__title">Mystery</h3>
                  </div></Link>
                   :null }

                {item==="family"?
                  <Link className="link" to={`/genres/${item}`}>
                  <div className="genre__title-div">
                    <img className="genre__img" width={290} height={400} src="https://www.boredpanda.com/blog/wp-content/uploads/2022/06/family-movies-11-62b1a7d5df381__700.jpg"/>
                    <h3 className="genre__title">Family</h3>
                  </div></Link>
                   :null }
                   {item==="comedy"?
                     <Link className="link" to={`/genres/${item}`}>
                  <div className="genre__title-div">
                    <img className="genre__img" width={290} height={400} src="https://resizing.flixster.com/uI2PmwGi1MUQmlIUbqvbd5wM8Ow=/fit-in/180x240/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p16298_p_v8_ae.jpg"/>
                    <h3 className="genre__title">Comedy</h3>
                  </div></Link>
                   :null }
                     {item==="romance"?
                       <Link className="link" to={`/genres/${item}`}>
                  <div className="genre__title-div">
                    <img className="genre__img" width={290} height={400} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8I1nbQIa_sEtTy0mdbZTzIzAHorfi3AJdkw&s"/>
                    <h3 className="genre__title">Romance</h3>
                  </div></Link>
                   :null }
                    {item==="music"?
                      <Link className="link" to={`/genres/${item}`}>
                  <div className="genre__title-div">
                    <img className="genre__img" width={290} height={400} src="https://m.media-amazon.com/images/M/MV5BOWUzN2YxNTctMjQ0My00NDczLTg5MWMtZWFhZmRjZDYyYzIwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"/>
                    <h3 className="genre__title">Music</h3>
                  </div></Link>
                   :null }

                  {item==="crime"?
                    <Link className="link" to={`/genres/${item}`}>
                  <div className="genre__title-div">
                    <img className="genre__img" width={290} height={400} src="https://blogs.iu.edu/establishingshot/files/2019/04/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_-1odtbn5.jpg"/>
                    <h3 className="genre__title">Crime</h3>
                  </div></Link>
                   :null }

                  {item==="documentary"?
                    <Link className="link" to={`/genres/${item}`}>
                  <div className="genre__title-div">
                    <img className="genre__img" width={290} height={400} src="https://lumiere-a.akamaihd.net/v1/images/wl-keyart_3c6678b7.jpeg"/>
                    <h3 className="genre__title">Documentary</h3>
                  </div></Link>
                   :null }
                       {item==="action"?
                         <Link className="link" to={`/genres/${item}`}>
                  <div className="genre__title-div">
                    <img className="genre__img" width={290} height={400} src="https://www.uphe.com/sites/default/files/styles/scale__344w_/public/2023/07/FastX_Poster%20ARt.jpg?itok=rlQoYVBu"/>
                    <h3 className="genre__title">Action</h3>
                  </div></Link>
                   :null }

                  {item==="thriller"?
                    <Link className="link" to={`/genres/${item}`}>
                  <div className="genre__title-div">
                    <img className="genre__img" width={290} height={400} src="https://qph.cf2.quoracdn.net/main-qimg-eecd6a7de309aa97779af69500c96fb9-lq"/>
                    <h3 className="genre__title">Thriller</h3>
                  </div></Link>
                   :null }

                  {item==="western"?
                    <Link className="link" to={`/genres/${item}`}>
                  <div className="genre__title-div">
                    <img className="genre__img" width={290} height={400} src="https://vader-prod.s3.amazonaws.com/1661459858-best-western-movies-the-power-of-the-dog-1661459812.jpg"/>
                    <div className="">
                         <h3 className="genre__title">Western</h3>
                    </div>
                 
                  </div></Link>
                   :null }
                        {item==="animation"?
                          <Link className="link" to={`/genres/${item}`}>
                  <div className="genre__title-div">
                    <img className="genre__img" width={290} height={400} src="https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_.jpg"/>
                    <h3 className="genre__title">Animation</h3>
                  </div></Link>
                   :null }
                  {item==="war"?
                    <Link className="link" to={`/genres/${item}`}>
                  <div className="genre__title-div">
                    <img className="genre__img" width={290} height={400} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhmn1cAOsmUTT_ZmIzOKuvQzJAOGZSxKK0lg&s"/>
                    <h3 className="genre__title">War</h3>
                  </div></Link>
                   :null }
                       {item==="adventure"?
                         <Link className="link" to={`/genres/${item}`}>
                  <div className="genre__title-div">
                    <img className="genre__img" width={290} height={400} src="https://www.boredpanda.com/blog/wp-content/uploads/2022/05/adventure_movies_10-6273871bdbc6a__700.jpg"/>
                    <h3 className="genre__title">Adventure</h3>
                  </div></Link>
                   :null }
                   
                  {item==="tv-movie"?
                    <Link className="link" to={`/genres/${item}`}>
                  <div className="genre__title-div">
                    <img className="genre__img" width={290} height={400} src="https://cdn.europosters.eu/image/1300/posters/la-casa-de-papel-i101932.jpg"/>
                    <h3 className="genre__title">Tv-Movie</h3>
                  </div></Link>
                   :null }
            </div>
                
            )}   
          
        </div>
        </div>
    )}