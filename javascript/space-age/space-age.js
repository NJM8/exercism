
const SpaceAge = function(seconds){
  this.seconds = seconds;
  this.onEarth = function(){
    return parseFloat((this.seconds / 31557600).toFixed(2));
  }
  this.onMercury = function(){
    return parseFloat((this.seconds / (31557600 * 0.2408467)).toFixed(2))
  }
  this.onVenus = function(){
    return parseFloat((this.seconds / (31557600 * 0.61519726)).toFixed(2))
  }
  this.onMars = function(){
    return parseFloat((this.seconds / (31557600 * 1.8808158)).toFixed(2))
  }
  this.onJupiter = function(){
    return parseFloat((this.seconds / (31557600 * 11.862615)).toFixed(2))
  }
  this.onSaturn = function(){
    return parseFloat((this.seconds / (31557600 * 29.447498)).toFixed(2))
  }
  this.onUranus = function(){
    return parseFloat((this.seconds / (31557600 * 84.016846)).toFixed(2))
  }
  this.onNeptune = function(){
    return parseFloat((this.seconds / (31557600 * 164.79132)).toFixed(2))
  }
}

module.exports = SpaceAge;


// - Earth: orbital period 365.25 Earth days, or 31557600 seconds
// - Mercury: orbital period 0.2408467 Earth years
// - Venus: orbital period 0.61519726 Earth years
// - Mars: orbital period 1.8808158 Earth years
// - Jupiter: orbital period 11.862615 Earth years
// - Saturn: orbital period 29.447498 Earth years
// - Uranus: orbital period 84.016846 Earth years
// - Neptune: orbital period 164.79132 Earth years

// Interesting version with class and function constructor

// class SpaceAge {
    
//   constructor(seconds) {	
// this.seconds = seconds

// const planetOrbitalTimes = {
//     "Earth": 1,
//     "Mercury": 0.2408467,
//     "Venus": 0.61519726,
//     "Mars": 1.8808158,
//     "Jupiter": 11.862615,
//     "Saturn": 29.447498,
//     "Uranus": 84.016846,
//     "Neptune": 164.79132
// }

// for(var planetName in planetOrbitalTimes) {
//     const functionName = "on" + planetName
//     const orbitalTime = planetOrbitalTimes[planetName]
//     this[functionName] = this.createSpaceAgeFunction(orbitalTime)
// }
//   }

//   createSpaceAgeFunction(planetOrbital) {
// return function() {
//     const oneYearInSeconds = 31557600
//     const earthYears = this.seconds / oneYearInSeconds
//     const planetYears = earthYears / planetOrbital
//     return this.twoPointDecimal( planetYears )
// }
//   }

//   twoPointDecimal(floater) {
// return Number(floater.toFixed(2))
//   }
// }

// module.exports=SpaceAge
