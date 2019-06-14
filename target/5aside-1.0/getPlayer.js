function getPlayer(playerId) {
    serverRequest("GET", "/player/${playerId}", playerId).then((request) => {
        let playerDetails = JSON.parse(request.responseText);
        return playerDetails;
        console.log(playerDetails);
    })
}