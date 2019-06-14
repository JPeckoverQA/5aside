function verifyPlayer() {
  

    getAllPlayers()
        .then(allPlayers => {
            for (let player of allPlayers) {
                if (player.email === document.getElementById("email.input").value)) {  //create input form for both
                    console.log('Player found', account);
                    return true;
                }
            }
            console.warn('No player recognised')
            return false;
        });
};
