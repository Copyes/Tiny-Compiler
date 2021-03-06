import transformer from '../src/transformer'

describe('Test the transformer method', () => {
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
  const newAst = {
    type: 'Program',
    body: [
      {
        type: 'ExpressionStatement',
        expression: {
          type: 'CallExpression',
          callee: {
            type: 'Identifier',
            name: 'add'
          },
          arguments: [
            {
              type: 'NumberLiteral',
              value: '2'
            },
            {
              type: 'CallExpression',
              callee: {
                type: 'Identifier',
                name: 'subtract'
              },
              arguments: [
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
      }
    ]
  }
  describe('Transformer the right new ast', () => {
    test('Transformer should turn `ast` into a `newAst`', () => {
      expect(transformer(ast)).toEqual(newAst)
    })
  })
})
