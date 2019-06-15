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

        document.getElementById('forenameUpdate').value = playerDetails.forename;
        document.getElementById('surnameUpdate').value = playerDetails.surname;
        document.getElementById('contactNoUpdate').value = playerDetails.contactNo;
        document.getElementById('emailUpdate').value = playerDetails.email;
        document.getElementById('teamPinUpdate').value = playerDetails.teamPin;

    })
}