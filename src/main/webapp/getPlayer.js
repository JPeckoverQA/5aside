function getPlayer(playerId) {
    dataRequest("GET", "/player/" + playerId).then((request) => {
        let playerDetails = JSON.parse(request.responseText);

        document.getElementById('userForenameHeader').innerHTML = "Welcome " + playerDetails.forename + "!";
        return playerDetails;
        
    })
}