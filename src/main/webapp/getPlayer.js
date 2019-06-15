function getPlayer(playerId) {
    dataRequest("GET", "/player/" + playerId).then((request) => {
        let playerDetails = JSON.parse(request.responseText);

        document.getElementById('userForenameHeader').innerHTML = "Welcome " + playerDetails.forename + "!";
        return playerDetails;
        
    })
}

function populateCurrentDetails(playerId) {
    dataRequest("GET", "/player/" + playerId).then((request) => {
        let playerDetails = JSON.parse(request.responseText);

        document.getElementById('forenameUpdate').innerHTML = playerDetails.forename;
        document.getElementById('surnameUpdate').innerHTML = playerDetails.surname;
        document.getElementById('contactNoUpdate').innerHTML = playerDetails.contactNo;
        document.getElementById('emailUpdate').innerHTML = playerDetails.email;
        document.getElementById('teamPinUpdate').innerHTML = playerDetails.teamPin;

}