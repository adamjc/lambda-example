import assert from "assert" // node.js built-in assertion library

import { handler } from "./main.mjs"

it('handles', async () => {
  const result = await handler('World')
  assert.equal(result, 'Hello, World!')
})