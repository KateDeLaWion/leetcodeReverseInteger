/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

  let reversed = 0;
  const MAX_INT = Math.pow(2, 31) - 1; //MAX_INT = 2147483647
  const MIN_INT = -Math.pow(2, 31);   //MIN_INT = -2147483648

  while (x !== 0) {
    const pop = x % 10;
    x = Math.trunc(x / 10);

    //when x is positive.  To avoid  x >> 8463847412  ||  x == 8463847412
    if (reversed > Math.floor(MAX_INT / 10) || (reversed === Math.floor(MAX_INT / 10) && pop > 7)) {
      return 0;
    }

    //when x is negative. 
    if (reversed < Math.ceil(MIN_INT / 10) || (reversed === Math.ceil(MIN_INT / 10) && pop < -8)) {
      return 0;
    }

    reversed = reversed * 10 + pop;
  }

  return reversed;

};
