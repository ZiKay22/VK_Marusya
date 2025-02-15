import { fetchMove } from "../../api/random_move";
import { queryClient } from "../../queryclient";
import { Loader } from "../Loader/Loader";
import {useQuery} from "@tanstack/react-query";
import { RandomCard } from "./RandomCard.tsx";
import React from "react";
export function FetchMoveView(){

    const useMoveQuery=useQuery({
       queryFn:()=>fetchMove(),
       queryKey:["move","random"], retry:0,
     },queryClient)
     switch (useMoveQuery.status){
       case "pending":
       return <Loader/>;
       case "success":
        console.log(useMoveQuery.data)
         return <RandomCard move={useMoveQuery.data} />;
         case "error":
           return <p>{useMoveQuery.error.message.toString()}</p>
     }
   }