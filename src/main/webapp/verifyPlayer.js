function verifyPlayer() {

    dataRequest("GET", "/player", null).then((request) => {
        const allPlayers = JSON.parse(request.responseText);

            for (let player of allPlayers) {
                if (player.email === document.getElementById("emailLogin").value) {  //create input form for both
                    console.log('Player found', player);
                    const user = player;
                    console.log(user);      
                    sessionStorage.setItem('playerId', user.id);
                    sessionStorage.setItem('teamId', user.teamPin);
                    window.location = 'http://35.246.42.33:8080/5aside-1.0/team.html/';
                    return user;
                    
                }
        }
            window.alert('No player recognised')
            return false;
        });
};
