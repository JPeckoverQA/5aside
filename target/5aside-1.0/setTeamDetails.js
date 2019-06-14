//default team to avoid sending nulls
function setTeamDetails() {

    defaultTeam();

    if (document.getElementById("name").value != "") {
        team.name = document.getElementById("name").value;
    }
    if (document.getElementById("homeColour").value != "") {
        team.cost = document.getElementById("surnameInput").value;
    }
    if (document.getElementById("awayColour").value != "") {
        team.type = document.getElementById("contactNoInput").value;
    }
}