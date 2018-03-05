
const Gigasecond = function(startDate){
  this.startDate = startDate;
}

Gigasecond.prototype.date = function(){
  const gigasecondDate = new Date(this.startDate.getTime() + 1000000000000);
  if (gigasecondDate.getUTCHours() > 20) {
    return this.startOfDay(gigasecondDate);
  } else {
    return gigasecondDate;
  }
}

Gigasecond.prototype.startOfDay = function(input) {
  const date = new Date(input);
  date.setSeconds(0);
  date.setMinutes(0);
  date.setHours(0);
  return date;
};

module.exports = Gigasecond;


// var gs = new Gigasecond(new Date(Date.UTC(2015, 8, 14)));
// console.log(gs.date());
// var es = new Date(Date.UTC(2047, 4, 24, 1, 46, 39));
// console.log(es);

// console.log(es.date() - gs.date());