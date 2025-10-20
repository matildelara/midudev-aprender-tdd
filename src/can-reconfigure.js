export const canReconfigure = (from, to) => {
  if (typeof from !== 'string') throw new Error('from must be a string')
  if (typeof to !== 'string') throw new Error('to must be a string')

  if (from.length !== to.length) return false
  if (new Set(from).size !== new Set(to).size) return false

  const transformations = {}
  for (let i = 0; i < from.length; i++) {
    const fromLetter = from[i]
    const toLetter = to[i]

    const storeLetter = transformations[fromLetter]
    if (storeLetter && storeLetter !== toLetter) return false

    transformations[fromLetter] = toLetter
  }

  return true
}
