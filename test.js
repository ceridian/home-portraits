var async = require('async');
//var hashids = require('hashids');
var crypto = require('crypto');
// var str = 'acdegilmnoprstuw';
// var h = "";
//var input = 7015671505811532;
var input = "680131659347";
// var leng = str.length;
var salt = "7ag97ga67gh0a7a780f7d67ag6";
var alphabet = 'acdegilmnoprstuw';
var alphabetLength = alphabet.length;

function convertToStr(str){
  //var hash = new hashids(salt, 7, 'acdegilmnoprstuw');
  //var id = hash.encode(s);
  //console.log(id);
  var i = 0;
  var hash = "";
  async.whilst(function(){
    return i < str.length;
  }, function(callback){
    var s = str[i];
    console.log(s);
    i++;
    hash = alphabet[i % alphabetLength] + hash;
    //hash = hash * 37 + alphabet.indexOf(s);
    callback();
  }, function(err){
    if(err) console.log(err);
    console.log(hash);
  });
  //crypto.pbkdf2(str, salt, 1, 7, function(err, key){
  //  if(err) console.log(err);
  //  console.log(key.toString());
  //});
}
function start(str){
  console.log(str);
}
start(input);
// function consistentShuffle(alphabet, salt) {
//
//   var integer, j, temp, i, v, p;
//
//   for (i = alphabet.length - 1, v = 0, p = 0; i > 0; i--, v++) {
//
//     v %= salt.length;
//     p += integer = salt[v].charCodeAt(0);
//     j = (integer + v + p) % i;
//
//     temp = alphabet[j];
//     alphabet = alphabet.substr(0, j) + alphabet[i] + alphabet.substr(j + 1);
//     alphabet = alphabet.substr(0, i) + temp + alphabet.substr(i + 1);
//
//   }
//
//   return alphabet;
//
// }
// consistentShuffle('acdegilmnoprstuw', 7015671505811532);
// function toHex(input) {
//
//   var hash = "",
//     alphabet = "0123456789abcdef",
//     alphabetLength = alphabet.length;
//
//   do {
//     hash = alphabet[input % alphabetLength] + hash;
//     input = parseInt(input / alphabetLength, 10);
//   } while (input);
//
//   return hash;
//
// }
// toHex(7015671505811532);
