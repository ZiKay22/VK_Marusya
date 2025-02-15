async function validateResponse(response: Response): Promise<Response> {
    if (!response.ok) {
      throw new Error(await response.text());
    }
    return response;
  }
  
  
  
  export function Registration(
    name: string,
    surname:string,
    email: string,
    password: string
  ): Promise<void> {
    return fetch("https://cinemaguide.skillbox.cc/user", {
      credentials:"include",
      method: "POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify({ name,surname, email, password }),
    })
      .then(validateResponse)
              .then(()=>undefined)
  }