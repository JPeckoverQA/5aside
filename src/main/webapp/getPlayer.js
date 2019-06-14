function getPlayer(playerId) {
    serverRequest("GET", "/player/${playerId}", playerId).then((request) => {
        let playerDetails = JSON.parse(request.responseText);
        console.log(playerDetails);
        return playerDetails;
        
    })
}