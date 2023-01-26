const Employee = require('./Employee')

class Manager extends Employee{
   // constructor that takes in name, id , email, office
    constructor(name,id, email,office){
        super(name, id , email)
        this.office = office;
    }
    //method to get university
    getOffice() {
        return this.office
    }
    getRole() {
        return 'Manager'
    }

}
module.exports = Manager