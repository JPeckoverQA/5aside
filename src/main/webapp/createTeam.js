function createTeam() {

    if (document.getElementById("teamNameRegister").value != "") {
        team.name = document.getElementById("teamNameRegister").value;
    } else {
        window.alert("You must enter a team name.")
    }
    if (document.getElementById("homeKitColourRegister").value != "") {
        team.homeColour = document.getElementById("homeKitColourRegister").value;
    } else {
        window.alert("You must enter a home kit colour.")
    }
    if (document.getElementById("awayKitColourRegister").value != "") {
        team.awayColour = document.getElementById("awayKitColourRegister").value;
    } else {
        window.alert("You must enter an away kit colour.")
    }

    let jsonTeam = JSON.stringify(team);
    console.log(jsonTeam);
    dataRequest("POST", "/team", jsonTeam).then((request) => {
        console.log(request.responseText);
        window.alert('Success! Now please register your player account')
    })
}