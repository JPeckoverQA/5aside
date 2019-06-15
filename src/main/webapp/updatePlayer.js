function updatePlayer() {
    dataRequest("GET", "/player/" + playerId).then((request) => {
        let playerDetails = JSON.parse(request.responseText);







    let playerId = document.getElementById("playerIdInput").value;    

    setPlayerDetails();
    let playerJSON = JSON.stringify(player);
    console.log(jsonPlayer);
    dataRequest("PUT", "/players/${playerId}", playerJSON).then((request) => {
        console.log(request.responseText);
    })
}