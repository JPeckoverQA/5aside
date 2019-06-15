function getTeam(teamId) {
    dataRequest("GET", "/team/" + teamId).then((request) => {
        let teamDetails = JSON.parse(request.responseText);
        
        let userTeamName = teamDetails.name;
        let teamHomeColour = teamDetails.homeColour;
        let teamAwayColour = teamDetails.awayColour;
        let teamPin = teamDetails.id;

        document.getElementById('userTeamNameHeader').innerHTML = userTeamName;
        document.getElementById('teamPageTitle').innerHTML = userTeamName;
        document.getElementById('teamHomeColour').innerHTML = "Home kit: " + teamHomeColour;
        document.getElementById('teamAwayColour').innerHTML = "Away kit: " + teamAwayColour;
        document.getElementById('teamPin').innerHTML = "Pin: " + teamPin;
        return teamDetails;
        
    })
}

//<button type="button" class="btn btn-outline-success" onclick="getTeam(userTeamId)">Success</button>