// create the team

const Engineer = require("../lib/Engineer");


const generateTeam = team => {

    console.log(team)
    team.map((teamMember, index) => {
        console.log(teamMember.getRole())

        if (teamMember.getRole() === 'Engineer') {

            return `
        
            <div>
                <h1> ${teamMember.getName()} </h1>
            <div>    
            `
        }
        else if (teamMember.getRole() === 'Manager') {

            return `
        
            <div>
                <h1> ${teamMember.getName()} </h1>
            <div>    
            `
        }
        else if (teamMember.getRole() === 'Intern') {

            return `
        
            <div>
                <h1> ${teamMember.getName()} </h1>
            <div>    
            `
        }


    })

    // create manager html 
    // const generateManager = manager => {
    //     return `
        
    //     <div>
    //         <h1> ${manager.getName()} </h1>
    //     <div>    
    //     `
    // };
    // create the html for the engineer
    // const generateEngineer = engineer => {
    //     return `
        
    //     <div>
    //         <h1> ${engineer.getName()} </h1>
    //     <div>    
    //     `

    // };
    // create the html for the intern
    // const generateIntern = intern => {
    //     return `
        
    //     <div>
    //         <h1> ${intern.getName()} </h1>
    //     <div>    
    //     `

    // };

    // const hmtl = [];

    //push the team array that is passed to this function into the empty html array
    // get just the employees out of the html array that have a role of Manager 
    //call the generateManager function, passing in that manager 

    // same thing , but for employees that have engineer role 
    // at the end , join the array together

    // same thing, but for employees that have intern role 
    // at the end , join the array together 

    // return the joined array





}


// export function to generate the entire page 

module.exports = team => {
    console.log(team)

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div> ${generateTeam(team)}</div>
</body>
</html> 
    `
}
