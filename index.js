// require all of your classes 

// require inquirer , path if needed, fs


// require your page template

// empty team members array 

// empty id array 


// function that wraps everything ( like an init function)




// function for creating a manager (call this at the bottom of your init function )
    //inquirer prompt with the manager questions
    //in your .then- set up a variable for manager that is equal to a new instance in your managers class passing in the response you received from the users input

    .then((answers) =>{
        const manager = new Manager(answers.name , answers.officeNumber)
        teamMember.push(manager)
    })
        // push that variable to your team members array, push the id to the id array 
        // call your next function

// next function should be for creating the team 
// this should ask the user what type of employee they would like to create 
// in your .then have a conditional or switch case that runs that employee types function based on what they choose 
// or if they select the option that says they are done adding team members, run the function that builds the team


function buildTeam() {

    // fs.writeFileSync(yourPathToThisFolder, functionFromThePageTempplate(teamMembers), 'utf8');

}


// make sure to call your init fucntions

