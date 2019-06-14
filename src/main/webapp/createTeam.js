let team = {
    name: "Team United",
    homeColour: "blue",
    awayColour: "white"
}


function createTeam() {

    if (document.getElementById("awayKitColourRegister").value != "") {
        team.name = document.getElementById("name").value;
    }
    if (document.getElementById("awayKitColourRegister").value != "") {
        team.cost = document.getElementById("homeColour").value;
    }
    if (document.getElementById("awayKitColourRegister").value != "") {
        team.type = document.getElementById("awayColour").value;
    }

    let jsonTeam = JSON.stringify(team);
    console.log(jsonTeam);
    serverRequest("POST", "/team", jsonTeam).then((request) => {
        console.log(request.responseText);
    })
}