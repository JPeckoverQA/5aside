function verifyPlayer() {
  

    getAllPlayers()
        .then(allPlayers => {
            for (let player of allPlayers) {
                if (player.forename === document.getElementById("forenameInput").value && player.surname === document.getElementById("surnameInput")) {  //create input form for both
                    console.log('Player found', account);
                    return true;
                }
            }
            console.warn('No player recognised')
            return false;
        });
};
