let player = {
    forename: "Ngolo",
    surname: "Kante",
    contactNo: "07862454413",
    email: "ngolo@gmail.com",
    teamPin: 1
}

function createPlayer() {

    if (document.getElementById("forenameRegister").value != "") {
        player.forename = document.getElementById("forenameRegister").value;
    }
    if (document.getElementById("surnameRegister").value != "") {
        player.surname = document.getElementById("surnameRegister").value;
    }
    if (document.getElementById("contactNoRegister").value != "") {
        player.contactNo = document.getElementById("contactNoRegister").value;
    }
    if (document.getElementById("emailRegister").value != "") {
        player.email = document.getElementById("emailRegister").value;
    }
    if (document.getElementById("teamPinRegister").value != "") {
        player.teamPin = document.getElementById("teamPinRegister").value;
    }

    let jsonPlayer = JSON.stringify(player);
    console.log(jsonPlayer);
    dataRequest("POST", "/player", jsonPlayer).then((request) => {
        console.log(request.responseText);
    })
}

