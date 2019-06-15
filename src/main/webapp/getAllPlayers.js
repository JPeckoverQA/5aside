function getAllPlayers() {
    dataRequest("GET", "/player", null).then((request) => {
        let allPlayers = JSON.parse(request.responseText);
        console.log(allPlayers);
        return allPlayers;
        
     });

}