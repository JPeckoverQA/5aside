function createPlayer() {
   
    setPlayerDetails();
    let jsonPlayer = JSON.stringify(player);
    console.log(jsonPlayer);
    serverRequest("POST", "/players", jsonPlayer).then((request) => {
        console.log(request.responseText);
    })
}