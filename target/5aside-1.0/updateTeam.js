function updatePlayer() {
    let teamId = document.getElementById("teamIdInput").value;

    setPlayerDetails();
    let teamJSON = JSON.stringify(team);
    console.log(jsonPlayer);
    serverRequest("PUT", "/teams/${teamId}", teamJSON).then((request) => {
        console.log(request.responseText);
    })
}