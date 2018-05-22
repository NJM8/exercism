const School = function(){
  this.students = {};

  this.add = function(student, grade){
    if (this.students.hasOwnProperty(grade)) {
      this.students[grade].push(student);
    } else {
      this.students[grade] = [student];
    }
    this.students[grade].sort((a, b) => a[0] > b[0]);
  }

  this.roster = function(){
    return this.students;
  }

  this.grade = function(grade){
    if (this.students.hasOwnProperty(grade)) {
      return this.students[grade];
    } else {
      return [];
    }
  }
}

module.exports = School;
