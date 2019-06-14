function getTeam(teamId) {
    dataRequest("GET", "/team/" + teamId).then((request) => {
        let teamDetails = JSON.parse(request.responseText);
        console.log(teamDetails);
        let userTeamName = teamDetails.name;
        document.getElementById(userTeamNameHeader).appendChild(userTeamName);
        return teamDetails;
        
    })
}

