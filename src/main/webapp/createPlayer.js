defaultPlayer();

function createPlayer() {

    defaultPlayer();

    if (document.getElementById("forenameRegister").value != "") {
        player.forename = document.getElementById("forenameInput").value;
    }
    if (document.getElementById("surnameRegister").value != "") {
        player.surname = document.getElementById("surnameInput").value;
    }
    if (document.getElementById("contactNoRegister").value != "") {
        player.contactNo = document.getElementById("contactNoInput").value;
    }
    if (document.getElementById("emailRegister").value != "") {
        player.email = document.getElementById("emailInput").value;
    }
    if (document.getElementById("teamPinRegister").value != "") {
        player.teamPin = document.getElementById("teamPin").value;
    }
}

let jsonPlayer = JSON.stringify(player);
console.log(jsonPlayer);
serverRequest("POST", "/players", jsonPlayer).then((request) => {
    console.log(request.responseText);
})