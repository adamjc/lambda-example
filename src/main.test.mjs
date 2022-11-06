import assert from "assert" // node.js built-in assertion library

import { handler } from "./main.mjs"

const expectedPlatform = process.env.platform === "foo" ? "foo" : "bar"

it('handles', async () => {
  const result = await handler('World')
  assert.equal(result, `Hello, ${expectedPlatform}!`)
})