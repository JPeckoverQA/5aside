//default player to avoid sending nulls
function setPlayerDetails() {

    defaultPlayer();

    if (document.getElementById("forenameInput").value != "") {
        player.name = document.getElementById("forenameInput").value;
    }
    if (document.getElementById("surnameInput").value != "") {
        player.cost = document.getElementById("surnameInput").value;
    }
    if (document.getElementById("contactNoInput").value != "") {
        player.type = document.getElementById("contactNoInput").value;
    }
    if (document.getElementById("emailInput").value != "") {
        player.playerText = document.getElementById("emailInput").value;
    }
    if (document.getElementById("teamPin").value != "") {
        player.damage = document.getElementById("teamPin").value;
    }
}