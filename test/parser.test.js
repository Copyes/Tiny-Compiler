import parser from '../src/parser'

describe('Test the parser method', () => {
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
  const ast = {
    type: 'Program',
    body: [
      {
        type: 'CallExpression',
        name: 'add',
        params: [
          {
            type: 'NumberLiteral',
            value: '2'
          },
          {
            type: 'CallExpression',
            name: 'subtract',
            params: [
              {
                type: 'NumberLiteral',
                value: '4'
              },
              {
                type: 'NumberLiteral',
                value: '2'
              }
            ]
          }
        ]
      }
    ]
  }
  test('Parser should turn `tokens` array into `ast`', () => {
    expect(parser(tokens)).toEqual(ast)
  })
})
