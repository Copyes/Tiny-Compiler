export default function(tokens) {
  let current = 0

  const walk = () => {
    let token = tokens[current]

    if (token.type === 'number') {
      current++

      return {
        type: 'NumberLiteral',
        value: token.value
      }
    }
    if (token.type === 'string') {
      current++

      return {
        type: 'StringLiteral',
        value: token.value
      }
    }
    return false
  }
  walk()

  return false
}
