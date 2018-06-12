import tokenizer from '../src/tokenizer'

describe('Test the tokenizer method', () => {
  const input = '(add 2 (subtract 4 2))'
  const tokens = [
    { type: 'paren', value: '(' },
    { type: 'name', value: 'add' },
    { type: 'number', value: '2' },
    { type: 'paren', value: '(' },
    { type: 'name', value: 'subtract' },
    { type: 'number', value: '4' },
    { type: 'number', value: '2' },
    { type: 'paren', value: ')' },
    { type: 'paren', value: ')' }
  ]
  describe('The string trans to array', () => {
    test('(add 2 (subtract 4 2)) become a array', () => {
      expect(Object.prototype.toString.call(tokenizer('')) === '[object Array]').toBe(true)
    })
  })
  describe('Generate the right array', () => {
    test('Tokenizer should turn `input` string into `tokens` array', () => {
      expect(tokenizer(input)).toEqual(tokens)
    })
  })
})
