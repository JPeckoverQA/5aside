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

function updatePlayer(playerId) {
    dataRequest("GET", "/player/" + playerId).then((request) => {
        let player = JSON.parse(request.responseText)

        if (document.getElementById("forenameUpdate").value != "") {
            player.forename = document.getElementById("forenameUpdate").value;
        }
        if (document.getElementById("surnameUpdate").value != "") {
            player.surname = document.getElementById("surnameUpdate").value;
        }
        if (document.getElementById("contactNoUpdate").value != "") {
            player.contactNo = document.getElementById("contactNoUpdate").value;
        }
        if (document.getElementById("emailUpdate").value != "") {
            player.email = document.getElementById("emailUpdate").value;
        }
        if (document.getElementById("teamPinUpdate").value != "") {
            player.teamPin = document.getElementById("teamPinUpdate").value;
        }

        let playerJSON = JSON.stringify(player);
        console.log(jsonPlayer);
        dataRequest("PUT", "/players/" + playerId, playerJSON).then((request) => {
            console.log(request.responseText);
        }
        )
    })
}
