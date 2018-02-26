
const Cipher = function(key){
  if (key === '') throw new Error('Bad key');
  if (key) {
    if (this.checkKey(key)){
      this.key = key;
    } else {
      throw new Error('Bad key');
    }
  } else {
    this.key = '';
    for (let i = 0; i < 100; i++) {
      this.key += String.fromCharCode(Math.floor(Math.random() * (123 - 97) + 97));
    }
  }
};

Cipher.prototype.checkKey = function(key){
  return (/^[a-z]+$/).test(key);
};

Cipher.prototype.encode = function(msg){
  this.verifyMsg(msg);
  this.equalizeKey(msg);
  let newMsg = msg.split('')
    .reduce((newMsg, letter, index) => {
      let code = letter.charCodeAt();
      let shiftAmount = this.key.charCodeAt(index) - 97;
      code + shiftAmount > 122 ? code = 96 + ((code + shiftAmount) - 122) :
                                 code += shiftAmount;
      newMsg += String.fromCharCode(code);
      return newMsg;
      }, '');

  return newMsg;
}

Cipher.prototype.decode = function(msg){
  this.verifyMsg(msg);
  this.equalizeKey(msg);
  let newMsg = msg.split('')
    .reduce((newMsg, letter, index) => {
      let code = letter.charCodeAt();
      let shiftAmount = this.key.charCodeAt(index) - 97;
      code - shiftAmount < 97 ? code = 123 - (97 - (code - shiftAmount)) :
                                code -= shiftAmount;
      newMsg += String.fromCharCode(code);
      return newMsg;
      }, '');

  return newMsg;
}

Cipher.prototype.equalizeKey = function(msg){
  let keyLength = this.key.length;
  let msgLength = msg.length;
  
  if (msgLength !== keyLength){
    keyLength > msgLength ? this.key = this.key.slice(0, msgLength) :
                            this.key = this.key.repeat(Math.ceil(msgLength / keyLength))
                                               .slice(0, msgLength);
  }
}

Cipher.prototype.verifyMsg = function(msg){
  if (!/^[a-z]+$/.test(msg)){
    throw new Error('Bad input');
  }
}

module.exports = Cipher;
