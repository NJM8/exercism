

const Matrix = function(string){
  this.rows = [];
  this.columns = [];

  if(string){
    // split input on newline char to get each line
    let splitString = string.split('\n');
    // get row length, must split to get individual number of items
    const rowLength = splitString[0].split(' ').length;

    // add empty sub arrays to rows and columns
    for (let i = 0; i < rowLength; i++) {
      this.rows.push([]);
      this.columns.push([]);
    }

    // fill rows, use outer index to push to each sub array to keep order
    splitString.forEach((str, index) => {
      str.split(' ').map(item => {
        // don't forget to turn strings into numbers
        this.rows[index].push(Number(item));
      })
    });

    // fill columns, use inner index to push to subarrays to create cross section
    splitString.forEach(str => {
      str.split(' ').map((item, index) => {
        // don't forget to turn strings into numbers
        this.columns[index].push(Number(item));
      })
    });

    // this works using reduce as well, not as readable. 
    // this.columns = splitString.reduce((columns, str) => {
    //   str.split(' ').map((item, index) => {
    //     columns[index].push(Number(item));
    //   });
    //   return columns;
    // }, this.columns);
  }
}

module.exports = Matrix;
