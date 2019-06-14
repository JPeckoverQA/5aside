let team = {
    name: "Team United",
    homeColour: "blue",
    awayColour: "green"
}


function createTeam() {

    if (document.getElementById("name").value != "") {
        team.name = document.getElementById("name").value;
    }
    if (document.getElementById("homeColour").value != "") {
        team.cost = document.getElementById("surnameInput").value;
    }
    if (document.getElementById("awayColour").value != "") {
        team.type = document.getElementById("contactNoInput").value;
    }

    let jsonTeam = JSON.stringify(team);
    console.log(jsonTeam);
    serverRequest("POST", "/team", jsonTeam).then((request) => {
        console.log(request.responseText);
    })
}