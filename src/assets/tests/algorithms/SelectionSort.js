export const tests = [
  {
    expression: `typeof selectionSort === 'function'`,
    message: '<code>selectionSort</code> is a function'
  },
  {
    expression: `Array.isArray(selectionSort([1, 2, 3])) && JSON.stringify(selectionSort([1,2,3])) === '[1,2,3]'`,
    message: '<code>selectionSort</code> accepts and returns an array'
  },
  {
    expression: `!/\\.sort\\s*\\(.*\\)/.test(selectionSort.toString())`,
    message: '<code>selectionSort</code> does not use the built in <code>Array.sort()</code> method'
  },
  {
    expression: `
      (() => {
        return JSON.stringify(selectionSort([6,9,23,3564,0,4,99,11,25,74,939,35,1,643,3,75])) === '[0,1,3,4,6,9,11,23,25,35,74,75,99,643,939,3564]' &&
        JSON.stringify(selectionSort([987654,54,86753,0,-9,233,111,0,12,9,12,33,4])) === '[-9,0,0,4,9,12,12,33,54,111,233,86753,987654]' &&
        JSON.stringify(selectionSort([5,9,10,1,0,2,5,3,2])) === '[0,1,2,2,3,5,5,9,10]';
      })()`,
    message: '<code>selectionSort</code> sorts arrays from least to greatest'
  }
]
