let player = {
    forename: "",
    surname: "",
    contactNo: "",
    email: "",
    teamPin: null
}

function createPlayer() {

    if (document.getElementById("emailRegister").value != "") {
        player.email = document.getElementById("emailRegister").value;
    } else {
        window.alert("You must enter an email.")
        return;
    }
    if (document.getElementById("forenameRegister").value != "") {
        player.forename = document.getElementById("forenameRegister").value;
    } else {
        window.alert("You must enter a forename.")
        return;
    }
    if (document.getElementById("surnameRegister").value != "") {
        player.surname = document.getElementById("surnameRegister").value;
    } else {
        window.alert("You must enter a surname.")
        return;
    }
    if (document.getElementById("contactNoRegister").value != "") {
        player.contactNo = document.getElementById("contactNoRegister").value;
    } else {
        window.alert("You must enter a contact number.")
        return;
    }
    if (document.getElementById("teamPinRegister").value != 0) {
        player.teamPin = document.getElementById("teamPinRegister").value;
    }

    let jsonPlayer = JSON.stringify(player);
    console.log(jsonPlayer);
    dataRequest("POST", "/player", jsonPlayer).then((request) => {
        console.log(request.responseText);
        window.location.href = '/5aside-1.0'
    })
}

