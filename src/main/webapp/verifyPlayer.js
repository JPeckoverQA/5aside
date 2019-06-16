function verifyPlayer(userEmail) {
    if (userEmail == "") {
        window.alert("You haven't enterred an email!")
        return
    }
    console.log(userEmail);
    verificationRequest("GET", "/playerEmail/" + userEmail).then((request) => {
        let user = JSON.parse(request.responseText);

        sessionStorage.setItem('playerId', user.id);
        sessionStorage.setItem('teamId', user.teamPin);
        window.location.href = '/5aside-1.0/team.html';
        return;
    })
}