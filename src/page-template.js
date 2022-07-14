const htmlBlocks = function (teamMembers){
    console.log("what is this", teamMembers)
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title></title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
      <link rel="stylesheet" href="style.css">
    </head>

    <header><h1 class="header"> My Team </h1></header>
    
    <body>
      <div class="row">
       ${teamMembers}
      </div>
    </body>
    </html>
    `;
  }

function appendManager(manager) {
    return `
    <section class="card col-sm-3">
    <div >
        <h2 class="manager"> Manager </h2>
        <h2>${manager.name}</h2>
        <h2>${manager.id}</h2>
        <a href=mailto: ${manager.email}><h2>${manager.email}</h2></a>
        <h2>${manager.officeNumber}</h2>
        <div>
        </section>
       
    `
} 

function appendEngineer(engineer) {
    return `
    <section class="card col-sm-3">
    <div>
         <h2 class="engineer"> Engineer </h2>
        <h2>${engineer.name}</h2>
        <h2>${engineer.id}</h2>
        <a href=mailto: ${engineer.email}><h2>${engineer.email}</h2></a>
        <a href=https://github.com/${engineer.github}><h2>https://github.com/${engineer.github}</h2></a>

        </div>
        </section>
    `
}
function appendIntern(intern) {
    return `
    <section  class="card col-sm-3">
    <div>
         <h2 class="intern"> Intern </h2>
        <h2>${intern.name}</h2>
        <h2>${intern.id}</h2>
        <a href=mailto: ${intern.email}><h2>${intern.email}</h2></a>
        <h2>${intern.school}</h2>
        </div>
        </section>
    `
}


function generateHTML(teamMembersArray) {

    const teamMembersCard = [];

    for (let i = 0; i < teamMembersArray.length; i++) {
        const role = teamMembersArray[i].getRole();
        const member = teamMembersArray[i]

        if (role === "Manager") teamMembersCard.push(appendManager(member))
        else if(role === "Engineer") teamMembersCard.push(appendEngineer(member))
        else if(role === "Intern") teamMembersCard.push(appendIntern(member))
    }

    return htmlBlocks(teamMembersCard.join(''));

}


module.exports = generateHTML;
