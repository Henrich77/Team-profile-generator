const Employee = require('./Employee')

class Engineer extends Employee {
    // constructor that takes in name, id , email, github
    constructor(name, id, email, gitHub) {


        //  super to get name, id, email
        super(name, id, email)

        this.github = gitHub

    }
    // method to get github
    getGithub() {
        return this.gitHub
    }
    getRole() {
        return 'Engineer'
    }





}

module.exports = Engineer