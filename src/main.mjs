import { pipe, tap } from "ramda"
import getTransformer from "./transform.mjs"

const transformer = getTransformer()

export async function handler () {
  return Promise.resolve(
    pipe(
      tap(_ => console.log("I am doing something...")),
      transformer => `Hello, ${transformer()}!`
    )(transformer)
  )
}