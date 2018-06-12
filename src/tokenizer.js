export default function(input) {
  let current = 0
  let tokens = []
  while (current < input.length) {
    let char = input[current]
    // 解析左括号
    if (char === '(') {
      tokens.push({
        type: 'paren',
        value: '('
      })
      current++
      continue
    }
    // 解析右括号
    if (char === ')') {
      tokens.push({
        type: 'paren',
        value: ')'
      })
      current++
      continue
    }
    // 解析到空格就跳过
    const WHITESPACE = /\s/
    if (WHITESPACE.test(char)) {
      current++
      continue
    }
    // 解析数字
    const NUMBER = /[0-9]/
    if (NUMBER.test(char)) {
      let value = ''
      while (NUMBER.test(char)) {
        value += char
        char = input[++current]
      }

      tokens.push({
        type: 'number',
        value
      })
      continue
    }
    // 解析普通的字符串
    if (char === '"') {
      let value = ''
      char = input[++current]
      while (char !== '"') {
        value += char
        char = input[++current]
      }
      char = input[++current]
      tokens.push({
        type: 'string',
        value
      })
      continue
    }

    // 解析字母
    // aaa ()
    const LETTERS = /[a-z]/i
    if (LETTERS.test(char)) {
      let value = ''
      while (LETTERS.test(char)) {
        value += char
        char = input[++current]
      }
      tokens.push({
        type: 'name',
        value
      })
      continue
    }
    throw new TypeError(`Can not find the character: ${char}`)
  }
  return tokens
}
