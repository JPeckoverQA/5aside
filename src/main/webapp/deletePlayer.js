function deletePlayer(playerId) {
    let playerIdJSON = JSON.stringify(playerId);
    serverRequest("DELETE", "/players/" + playerId, playerIdJSON);
}

