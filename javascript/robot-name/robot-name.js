let names = []

const Robot = function () {  
  this.generateName = function () {
    const first = String.fromCharCode(this.generateRandomNumber(65, 90))
    const second = String.fromCharCode(this.generateRandomNumber(65, 90))
    const third = Number(this.generateRandomNumber(1, 9))
    const fourth = Number(this.generateRandomNumber(1, 9))
    const fifth = Number(this.generateRandomNumber(1, 9))

    return `${first}${second}${third}${fourth}${fifth}`
  }
  
  this.generateRandomNumber = function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  this.getName = function () {
    let newName = this.generateName()

    while (names.includes(newName)) {
      newName = this.generateName()
    }

    names.push(newName)
    return newName
  }

  this.name = this.getName()

  this.reset = function () {
    this.name = this.getName()
  }
}

module.exports = Robot
