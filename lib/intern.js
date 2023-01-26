const Employee = require('./Employee')

class Intern extends Employee {
    // constructor that takes in name, id , email, university
    constructor(name, id, email, university,) {
          //  super to get name, id, email
        super(name, id, email)

        this.university = university;

    }
    //method to get university

    getUniversity() {
        return this.university
    }
    getRole() {
        return 'Intern'
    }
}

module.exports=Intern;