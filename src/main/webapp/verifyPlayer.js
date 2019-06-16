function verifyPlayer(userEmail) {

    verificationRequest("GET", "/player/" + userEmail).then((request) => {
        sessionStorage.setItem('playerId', user.id);
        sessionStorage.setItem('teamId', user.teamPin);
        window.location.href = '/5aside-1.0/team.html';
        return;
    })
}