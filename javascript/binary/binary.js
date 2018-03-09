
const Binary = function(binaryNumber){
  if (/^[0-1]+$/.test(binaryNumber)) {
    this.binaryNumber = binaryNumber;
  } else {
    this.binaryNumber = '0';
  }

  this.toDecimal = function(){
    if (this.binaryNumber === '0') {
      return 0;
    }
    let result = 0;
    this.binaryNumber.split('').reverse().map((number, index) => {
      if (number === '1') {
        result += Math.pow(2, index);
      }
    });

    return result;
  }
}

module.exports = Binary;