let id;

function deleteTeam() {
    let teamId = document.getElementById("teamIdInput").value;
    let teamIdJSON = JSON.stringify(teamId);
    serverRequest("DELETE", "/teams/${teamId}", teamIdJSON);
}

