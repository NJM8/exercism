var TwoFer = function () {};

TwoFer.prototype.twoFer = function (who) {
  // your code goes here
  // You will have to use the parameter who
  // in some way. In this example, it is just
  // returned, but your solution will have to
  // use a conditional.
  let name = (who === undefined) ? 'you' : who;
  return `One for ${name}, one for me.`;
};

module.exports = TwoFer;
