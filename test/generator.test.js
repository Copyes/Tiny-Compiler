import { codeGenerator } from '../src/generator'

describe('Test the codeGenerator method:', () => {
  const output = 'add(2,subtract(4,2));'
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

  describe('codeGenerator the right new output', () => {
    test('codeGenerator should turn `newAst` into a `output`', () => {
      expect(codeGenerator(newAst)).toEqual(output)
    })
  })
})
