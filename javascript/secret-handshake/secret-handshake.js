const SecretHandshake = function(num){
  if (typeof(num) !== 'number') {
    throw new Error('Handshake must be a number'); 
  } else {
    this.binNum = num.toString(2);
  }

  this.commands = function(){
    return this.binNum.toString().split('').reverse().reduce((res, num, index) => {
      if (index === 0 && num === '1'){
        res.push('wink');
      } else if (index === 1 && num === '1'){
        res.push('double blink');
      } else if (index === 2 && num === '1'){
        res.push('close your eyes');
      } else if (index === 3 && num === '1'){
        res.push('jump');
      } else if (index === 4 && num === '1'){
        res.reverse();
      }
      return res;
    }, []);
  }
}

module.exports = SecretHandshake;
