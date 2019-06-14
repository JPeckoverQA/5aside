function getTeam(teamId) {
    dataRequest("GET", "/player/${teamId}", teamId).then((request) => {
        let teamDetails = JSON.parse(request.responseText);
        return teamDetails;
        console.log(teamDetails);
    })
}