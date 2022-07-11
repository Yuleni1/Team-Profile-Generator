const htmlBlocks = function (teamMembers){
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title></title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
      <header>
       ${teamMembers}
      </header>
    </body>
    </html>
    `;
  }

function appendManager(manager) {
    return `
        <h1>${manager.name}</h1>
        <h2>${manager.id}</h2>
        <h2>${manager.email}</h2>
        <h2>${manager.officeNumber}</h2>
    `
} 

function appendEngineer(engineer) {
    return `
        <h1>${engineer.name}</h1>
        <h2>${engineer.id}</h2>
        <h2>${engineer.email}</h2>
        <h2>${engineer.github}</h2>
    `
}
function appendIntern(intern) {
    return `
        <h1>${intern.name}</h1>
        <h2>${intern.id}</h2>
        <h2>${intern.email}</h2>
        <h2>${intern.school}</h2>
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
