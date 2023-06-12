'use strict';

const str1 = 'KaYaK';
function palidromeWord(str){
    let separator = '';
    return str.toUpperCase() === str.toUpperCase().split(separator).reverse()
    .join(separator);
}
console.log(palidromeWord(str1));