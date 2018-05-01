const PascalsTriangle = function(num){
  this.rows = [];

  this.lastRow = [];
  
  for (let i = 1; i <= num; i++) {
    let newRow = [];
    if (i === 1) {
      newRow.push(i);
    } else {
      for (let j = 1; j <= i; j++) {
        if (j === 1 || j === i) {
          newRow.push(1);
        } else {
          const numOne = this.rows[i - 2][j - 2];
          const numTwo = this.rows[i - 2][j - 1];
          newRow.push(numOne + numTwo);
        }
      }
    }
    this.rows.push(newRow);
    this.lastRow = this.rows[this.rows.length - 1];
  }
}

module.exports = PascalsTriangle;
