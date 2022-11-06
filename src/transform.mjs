function fooTransformer () {
  return "foo"
}

function barTransformer () {
  return "bar"
}

const transformerMap = {
  "foo": fooTransformer,
  "bar": barTransformer
}

export default function getTransformer () {
  const transformer = transformerMap[process.env.platform]

  if (transformer === undefined) throw new Error("platform is undefined")

  return transformer
}