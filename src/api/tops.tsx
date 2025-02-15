import { z } from "zod";
import {  filmSchema, validateResponse } from "./random_move";


export const topSchema = z.array(z.object({
    id: z.number(),
    title: z.string(),
    originalTitle: z.string(),
    language: z.string(),
    relaseYear: z.undefined()
    .or( z.number() ),
    releaseDate: z.string().nullable(),
    genres: z.array(z.string()),
    plot: z.string().nullable(),
    runtime: z.number().nullable(),
    budget: z.string().nullable(),
    revenue: z.string().nullable(),
    homepage: z.string().nullable(),
    status: z.string().nullable(),
    posterUrl: z.string().nullable(),
    backdropUrl: z.string().nullable(),
    trailerUrl: z.string().nullable(),
    trailerYoutubeId: z.undefined()
    .or( z.number() ),
    tmdbRating: z.number().nullable(),
    searchL: z.string().nullable(),
    keywords: z.array(z.string()),
    countriesOfOrigin: z.array(z.string()),
    languages: z.array(z.string()),
    cast: z.array(z.string()),
    director: z.string().nullable(),
    production: z.string().nullable(),
    awardsSummary: z.string().nullable(), 
}));

    export type fetchFilmResponse=z.infer<typeof topSchema>


export function fetchTop():Promise<fetchFilmResponse>{
    return fetch('https://cinemaguide.skillbox.cc/movie/top10')
    .then(validateResponse)
    .then(response => response.json())
   .then(data => topSchema.parse(data))}

  export function fetchGetFavMovie():Promise<fetchFilmResponse>{
                             
                         
    return fetch('https://cinemaguide.skillbox.cc/favorites')
    .then(validateResponse)
    .then(response => response.json())
   .then(data => topSchema.parse(data))}