let player = {
    forename: "",
    surname: "",
    contactNo: "",
    email: "",
    teamPin: null
}

function createPlayer() {

    if (document.getElementById("forenameRegister").value != "") {
        player.forename = document.getElementById("forenameRegister").value;
    } else {
        window.alert("You must enter a forename.")
    }
    if (document.getElementById("surnameRegister").value != "") {
        player.surname = document.getElementById("surnameRegister").value;
    } else {
        window.alert("You must enter a surname.")
    }
    if (document.getElementById("contactNoRegister").value != "") {
        player.contactNo = document.getElementById("contactNoRegister").value;
    } else {
        window.alert("You must enter a contact number.")
    }
    if (document.getElementById("emailRegister").value != "") {
        player.email = document.getElementById("emailRegister").value;
    } else {
        window.alert("You must enter an email.")
    }
    if (document.getElementById("teamPinRegister").value) {
        player.teamPin = document.getElementById("teamPinRegister").value;
    }

    let jsonPlayer = JSON.stringify(player);
    console.log(jsonPlayer);
    dataRequest("POST", "/player", jsonPlayer).then((request) => {
        console.log(request.responseText);
        sessionStorage.setItem('playerId', player.id);
        sessionStorage.setItem('teamId', player.teamPin);
        window.location.href = '/5aside-1.0/team.html';
    })
}

