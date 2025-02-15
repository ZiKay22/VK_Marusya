import { queryClient } from "../../queryclient";
import { Loader } from "../Loader/Loader";
import {useQuery} from "@tanstack/react-query";
import React from "react";
import { fetchGenre } from "../../api/genre.tsx";
import { GenreCard } from "./GetGenre.tsx";
export function FetchGenre(){

    const useMoveQuery=useQuery({
       queryFn:()=>fetchGenre(),
       queryKey:["move","genre"], retry:0,
     },queryClient)
     switch (useMoveQuery.status){
       case "pending":
       return <Loader/>;
       case "success":
         return <GenreCard genre={useMoveQuery.data}/>;
         case "error":
           return <p>{useMoveQuery.error.message.toString()}</p>
     }
   }