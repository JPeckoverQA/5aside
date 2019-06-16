function verifyPlayer(userEmail) {
    if (userEmail == "") {
        return
    }
    console.log(userEmail);
    verificationRequest("GET", "/player/" + userEmail).then((request) => {
        let user = JSON.parse(request.responseText);

        sessionStorage.setItem('playerId', user.id);
        sessionStorage.setItem('teamId', user.teamPin);
        window.location.href = '/5aside-1.0/team.html';
        return;
    })
}