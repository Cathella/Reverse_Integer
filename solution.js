/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
  const max = Math.pow(2, 31);
    
  let rev = 0;
    
  while (x !== 0) {
    rev = rev * 10 + x % 10;
      
    if (rev > max || rev < -max) return 0;
    x = (x / 10) << 0;
  }
    
  return rev;
};