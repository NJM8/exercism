
exports.for = (num) => {
  let primes = [];
  if (num === 1) {
    return primes;
  }

  let numCopy = num;
  let prime = 2;
  while (numCopy > 1) {
    if (numCopy % prime === 0) {
      primes.push(prime);
      numCopy /= prime;
    } else {
      prime++;
    }
  }

  return primes;
}