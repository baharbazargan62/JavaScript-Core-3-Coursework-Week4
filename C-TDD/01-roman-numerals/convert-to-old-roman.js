function convertToOldRoman(n) {
    let romanObj = {M:1000,D:500,C:100,L:50,X:10,V:5,I:1};
 let roman = '';
 for (let key in romanObj){
    while (n>=romanObj[key]){
        roman+=key
        n-=romanObj[key]
    }
 }
return roman;
}

module.exports = convertToOldRoman;
