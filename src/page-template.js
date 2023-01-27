// create the team
// const Engineer = require('./lib/Engineer');
const Engineer = require("../lib/Engineer");
// const Employee = require("./lib/Employee");


const generateTeam = team => {

    const teamHTML = team.map((teamMember, index) => {
        console.log(teamMember.getRole())
        console.log(teamMember.getName())


        if (teamMember.getRole() === 'Engineer') {

            return `

                <div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="...">
                     <div class="card-body">
                        <h1 class="card-title">${teamMember.getName()}</h1>
                        <h2 class="card-text">${teamMember.getId()}</h2>
                        <h2> ${teamMember.getGithub()}</h2>
                        <a href="#" class="btn btn-primary">${teamMember.getEmail()}</a>
                    </div>
                </div>
        
             
            `
        }
        else if (teamMember.getRole() === 'Manager') {

            return `
            <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h1 class="card-title"> ${teamMember.getName()}</h1>
                    <h2 class="card-text"> ${teamMember.getId()}</h2>
                    <h2> ${teamMember.getOffice()} </h2>
                    <a href="#" class="btn btn-primary"> ${teamMember.getEmail()}</a>

                </div>
            </div>
           
            `
        }
        else if (teamMember.getRole() === 'Intern') {

            return `
        
            <div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h1 class="card-title"> ${teamMember.getName()}</h1>
                    <h2 class="card-text"> ${teamMember.getId()}</h2>
                    <h2 class="card-text"> ${teamMember.getUniversity()}</h2>
                    <a href="#" class="btn btn-primary"> ${teamMember.getEmail()}</a>
                </div>
             </div>
            `
        }


    }).join('')

    return teamHTML
}
// const hmtl = [];

//push the team array that is passed to this function into the empty html array
// get just the employees out of the html array that have a role of Manager 
//call the generateManager function, passing in that manager 

// same thing , but for employees that have engineer role 
// at the end , join the array together

// same thing, but for employees that have intern role 
// at the end , join the array together 

// return the joined array







// export function to generate the entire page 

module.exports = team => {
    console.log('this is the html with the team generated', team)

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    <title>Document</title>
</head>
<body>
    <header>
    <h1>The guys</h1>
    </header>

    <main>${generateTeam(team)}</main>
    
    
    
    
    
    
    
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
</body>
</html> 
    `
}
