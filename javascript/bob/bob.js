const Bob = function(){};

Bob.prototype.hey = function(string){

  if (string.length === 0 || !string || !/[a-z0-9]/i.test(string)) {
    return 'Fine. Be that way!';
  }

  string = string.trim();
  const upperCase = string.toUpperCase() === string && /[a-z]/i.test(string);

  if (string[string.length - 1] === '?') {
    if (upperCase) {
      return 'Calm down, I know what I\'m doing!';
    } else {
      return 'Sure.';
    }
  } else {
    if (upperCase) {
      return 'Whoa, chill out!';
    }
    return 'Whatever.';
  }
};

module.exports = Bob;