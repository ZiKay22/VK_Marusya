import {z} from "zod"
import { validateResponse } from "./random_move"
export const genreSchema = z.array(z.string())


export type fetchGenreResponse=z.infer<typeof genreSchema>

export function fetchGenre():Promise<fetchGenreResponse >{
    return fetch('https://cinemaguide.skillbox.cc/movie/genres')
    .then(validateResponse)
    .then(response => response.json())
   .then(data => genreSchema.parse(data))}