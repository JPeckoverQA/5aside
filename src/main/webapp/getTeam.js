function getTeam(teamId) {
    dataRequest("GET", "/team/" + teamId).then((request) => {
        let teamDetails = JSON.parse(request.responseText);
        console.log(teamDetails.name);
        let userTeamName = teamDetails.name;
        document.getElementById(userTeamNameHeader).innerHTML =userTeamName;
        return teamDetails;
        
    })
}

