//default player to avoid sending nulls
function setPlayerDetails() {

    defaultPlayer();

    if (document.getElementById("forenameInput").value != "") {
        player.forenameInput = document.getElementById("forenameInput").value;
    }
    if (document.getElementById("surnameInput").value != "") {
        player.surnameInput = document.getElementById("surnameInput").value;
    }
    if (document.getElementById("contactNoInput").value != "") {
        player.contactNoInput = document.getElementById("contactNoInput").value;
    }
    if (document.getElementById("emailInput").value != "") {
        player.emailInput = document.getElementById("emailInput").value;
    }
    if (document.getElementById("teamPin").value != "") {
        player.teamPin = document.getElementById("teamPin").value;
    }
}