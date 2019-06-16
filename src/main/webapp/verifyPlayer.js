function verifyPlayer(userEmail) {
    if (userEmail == "") {
        window.alert("You haven't enterred an email!")
        return
    }
    console.log(userEmail);
    verificationRequest("GET", "/playerEmail/" + userEmail).then((request) => {
        let userArray = JSON.parse(request.responseText);

        let id = userArray.map(user => user.id);
        let forename = userArray.map(user => user.forename);
        let surname = userArray.map(user => user.surname);
        let playerId = userArray.map(user => user.playerId);
        let contactNo = userArray.map(user => user.contactNo);
        let teamPin = userArray.map(user => user.teamPin);

        console.log(id);
        console.log(forename);
        console.log(surname);
        console.log(playerId);
        console.log(contactNo);
        console.log(teamPin);

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
