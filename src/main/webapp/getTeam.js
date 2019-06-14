function getTeam(teamId) {
    dataRequest("GET", "/team/" + teamId).then((request) => {
        let teamDetails = JSON.parse(request.responseText);
        
        let userTeamName = teamDetails.name;
        console.log(userTeamName);
        document.getElementById('userTeamNameHeader').innerHTML =userTeamName;
        return teamDetails;
        
    })
}

//<button type="button" class="btn btn-outline-success" onclick="getTeam(userTeamId)">Success</button>