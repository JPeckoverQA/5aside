function getPlayer(playerId) {
    dataRequest("GET", "/player/" + playerId).then((request) => {
        let playerDetails = JSON.parse(request.responseText);

        let userForename = playerDetails.forename;

        console.log(userForename);
        document.getElementById('userForenameHeader').innerHTML = "Welcome " + userForename + "!";
        return playerDetails;
        
    })
}