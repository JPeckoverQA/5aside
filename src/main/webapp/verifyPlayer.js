function verifyPlayer(userEmail) {
    if (userEmail == "") {
        window.alert("You haven't enterred an email!")
        return
    }
    console.log(userEmail);
    verificationRequest("GET", "/playerEmail/" + userEmail).then((request) => {
        let user = JSON.parse(request.responseText);
        console.log(user);

        sessionStorage.setItem('playerId', user.id);
        sessionStorage.setItem('teamId', user.teamPin);
        window.location.href = '/5aside-1.0/team.html';
        return;
    })
}


//function verifyPlayer() {

//    dataRequest("GET", "/player", null).then((request) => {
//        const allPlayers = JSON.parse(request.responseText);

//        for (let player of allPlayers) {
//            if (player.email === document.getElementById("emailLogin").value) {
//                console.log('Player found', player);
//                const user = player;
//                console.log(user);
//                sessionStorage.setItem('playerId', user.id);
//                sessionStorage.setItem('teamId', user.teamPin);
//                window.location.href = '/5aside-1.0/team.html';
//                return;

//            }
//        }
//        window.alert('No player recognised')
//        return false;
//    });
//};
