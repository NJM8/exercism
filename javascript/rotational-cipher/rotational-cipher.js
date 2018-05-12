const RotationalCipher = function(){
  this.rotate = function(str, num){
    return str.split('').map(letter => {
      if (!/[a-zA-Z]/.test(letter)) {
        return letter;
      }
      const thisCharCode = letter.charCodeAt(0);
      let shiftedCharCode = thisCharCode + (num < 25 ? num : 0);
      if (thisCharCode <= 90 && shiftedCharCode > 90 || thisCharCode <= 122 && shiftedCharCode > 122) {
        shiftedCharCode -= 26;
      }
      return String.fromCharCode(shiftedCharCode);
    }).join('');
  }
}

module.exports = RotationalCipher;
