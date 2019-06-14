function getAllPlayers() {
    dataRequest("GET", "/player", null).then((request) => {
        let allPlayers = JSON.parse(request.responseText);
        return allPlayers;
        console.log(allPlayers);
     });

}