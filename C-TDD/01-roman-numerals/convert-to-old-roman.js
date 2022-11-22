function convertToOldRoman(n) {
    let romanObj = {M:1000,D:500,C:100,L:50,X:10,V:5,I:1};
 let roman = '';
  for (let key in romanObj) {
   let remain = Math.floor(number / romanObj[key]);
    if (remain >= 0) {
      for (let i = 0; i < remain; i++) {
        roman += key;
      }
    }
    number = number % romanObj[key];
  }
  return roman;
}

module.exports = convertToOldRoman;
