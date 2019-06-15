function welcomePlayer(playerId) {
    dataRequest("GET", "/player/" + playerId).then((request) => {
        let playerDetails = JSON.parse(request.responseText);

        document.getElementById('userForenameHeader').innerHTML = "Hello " + playerDetails.forename + "!";
        return playerDetails;
        
    })
}