let id;

function deletePlayer() {
    let playerId = document.getElementById("playerIdInput").value;
    let playerIdJSON = JSON.stringify(playerId);
    serverRequest("DELETE", "/players/${playerId}", playerIdJSON);
}

