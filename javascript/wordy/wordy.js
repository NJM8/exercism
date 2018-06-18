const WordProblem = {
  WordProblem: function(question) {
      this.operations = {
        'plus' : (x, y) => x + y, 
        'minus' : (x, y) => x - y, 
        'multiplied' : (x, y) => x * y, 
        'divided' : (x, y) => x / y
      }

      this.possibleOperations = Object.keys(this.operations)
      this.questionArray = question
        .substring(0, question.length - 1)
        .replace('by ', '')
        .split(' ')
        .reduce((res, word) => {
          if (this.possibleOperations.includes(word) && res.push(word)){}
          if (!isNaN(word) && res.push(Number(word))) {}
          return res
        }, [])

      this.answer = () => {
        let result = this.questionArray.shift()
        for (let i = 0; i < this.questionArray.length; i += 2) {
          result = this.operations[this.questionArray[i]](result, this.questionArray[i + 1])
        }
        return result
      }

    }
}

module.exports = WordProblem
