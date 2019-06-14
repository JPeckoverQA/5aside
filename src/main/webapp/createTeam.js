let team = {
    name: "Team United",
    homeColour: "blue",
    awayColour: "white"
}


function createTeam() {

    if (document.getElementById("teamNameRegister").value != "") {
        team.name = document.getElementById("teamNameRegister").value;
    }
    if (document.getElementById("homeKitColourRegister").value != "") {
        team.homeColour = document.getElementById("homeKitColourRegister").value;
    }
    if (document.getElementById("awayKitColourRegister").value != "") {
        team.awayColour = document.getElementById("awayKitColourRegister").value;
    }

    let jsonTeam = JSON.stringify(team);
    console.log(jsonTeam);
    dataRequest("POST", "/team", jsonTeam).then((request) => {
        console.log(request.responseText);
    })
}