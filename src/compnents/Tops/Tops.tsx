import { fetchMove } from "../../api/random_move";
import { queryClient } from "../../queryclient";
import { Loader } from "../Loader/Loader";
import {useQuery} from "@tanstack/react-query";
import React from "react";
import { TopCard } from "./TopsCard.tsx";
import { fetchTop } from "../../api/tops.tsx";
export function FetchTop(){

    const useMoveQuery=useQuery({
       queryFn:()=>fetchTop(),
       queryKey:["move","top10"], retry:0,
     },queryClient)
     switch (useMoveQuery.status){
       case "pending":
       return <Loader/>;
       case "success":
         return <TopCard topmove={useMoveQuery.data} />;
         case "error":
           return <p>{useMoveQuery.error.message.toString()}</p>
     }
   }