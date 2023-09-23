// Special mapping function

/**
 * 
 * @param {(param: any) => 1 | 2 | 3} data 
 */
export default function (data /* a function - data: (param: any) => 1 | 2 | 3 */) {
  // your code starts here
    return function (arr) {
    return arr.map((el) => {
      const dataEl = data(el)

      if( dataEl === 1) {
        return el + 1;
      } else if (dataEl === 2) {
        return { name: el}; 
      } else if ( dataEl === 3) {
        return el.map((elNum) => elNum * elNum)
      }
    })
  }
  // your code ends here
}
