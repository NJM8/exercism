

let Pangram = function(str){
  this.str = str;
}

Pangram.prototype.isPangram = function(){
  var regex = /([a-z])(?!.*\1)/gi;
  return (this.str.match(regex) || []).length === 26;
}

module.exports = Pangram;