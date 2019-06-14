function verifyPlayer() {

    dataRequest("GET", "/player", null).then((request) => {
        let allPlayers = JSON.parse(request.responseText);

            for (let player of allPlayers) {
                if (player.email === document.getElementById("emailLogin").value) {  //create input form for both
                    console.log('Player found', player);
                    return true;
                    //window.location.href = 'http://35.246.42.33:8080/5aside-1.0/team/';
                }
            }
            console.warn('No player recognised')
            return false;
        });
};
