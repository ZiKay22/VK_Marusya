import {z} from "zod"
export const filmSchema = z.object({
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
    trailerUrl: z.string(),
    trailerYoutubeId: z.undefined()
    .or( z.number() ),
    tmdbRating: z.number(),
    searchL: z.string().nullable(),
    keywords: z.array(z.string()),
    countriesOfOrigin: z.array(z.string()),
    languages: z.array(z.string()),
    cast: z.array(z.string()),
    director: z.string().nullable(),
    production: z.string().nullable(),
    awardsSummary: z.string().nullable(),
    });
export const validateResponse = async (response: Response): Promise<Response> => {
    if (!response.ok) {
        throw new Error(await response.text())
    }
    return response;
}
export type fetchFilmResponse=z.infer<typeof filmSchema>

export function fetchMove():Promise<fetchFilmResponse >{
    return fetch('https://cinemaguide.skillbox.cc/movie/random')
    .then(validateResponse)
    .then(response => response.json())
   .then(data => filmSchema.parse(data))}