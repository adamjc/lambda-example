import { pipe, tap } from "ramda"

export async function handler (name) {
  return Promise.resolve(
    pipe(
      tap(_ => console.log("I am doing something...")),
      name => `Hello, ${name}!`
    )(name)
  )
}