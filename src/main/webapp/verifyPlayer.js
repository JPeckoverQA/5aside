function verifyPlayer() {

    dataRequest("GET", "/player", null).then((request) => {
        let allPlayers = JSON.parse(request.responseText);

            for (let player of allPlayers) {
                if (player.email === document.getElementById("emailLogin").value) {  //create input form for both
                    console.log('Player found', player);
                    return true;
                }
            }
            console.warn('No player recognised')
            return false;
        });
};
