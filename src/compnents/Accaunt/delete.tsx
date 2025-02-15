import React from "react";
import './acc.css'
import { fetchUserList } from "../Login/FetchUser";
import { Link } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { queryClient } from "../../queryclient";
import {  validateResponse } from "../../api/random_move";
import {   fetchFilmResponse,  topSchema } from "../../api/tops";
import { delfav } from "../../api/delfav";
import { string } from "zod";

export const DeleteBtn=({id})=>{

  const  DelFavMutation=useMutation({
        mutationFn:()=>delfav(id.toString()),
        onSuccess(){
          queryClient.invalidateQueries({queryKey:["favorites"]})
        }
      },queryClient);
      function Delete(){
        DelFavMutation.mutate();
        document.getElementById(`${id}`).remove()
       
      }

      return(
        <p className="b-pict__close" id="del" onClick={Delete}>x</p>

      )
}