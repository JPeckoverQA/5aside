function getTeam(teamId) {
    serverRequest("GET", "/player/${teamId}", teamId).then((request) => {
        let teamDetails = JSON.parse(request.responseText);
        return teamDetails;
        console.log(teamDetails);
    })
}