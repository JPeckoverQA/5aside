function getTeam(teamId) {
    dataRequest("GET", "/team/" + teamId).then((request) => {
        let teamDetails = JSON.parse(request.responseText);
        console.log(teamDetails);
        console.log(teamDetails.name);
        return teamDetails;
        
    })
}