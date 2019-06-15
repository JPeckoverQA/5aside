function getTeam(teamId) {
    dataRequest("GET", "/team/" + teamId).then((request) => {
        let teamDetails = JSON.parse(request.responseText);
        
        document.getElementById('userTeamNameHeader').innerHTML = teamDetails.name;
        document.getElementById('teamPageTitle').innerHTML = teamDetails.name;
        document.getElementById('teamHomeColour').innerHTML = "Home kit: " + teamDetails.homeColour;
        document.getElementById('teamAwayColour').innerHTML = "Away kit: " + teamDetails.awayColour;
        document.getElementById('teamPin').innerHTML = "Pin: " + teamDetails.id;
        return teamDetails;
        
    })
}

//<button type="button" class="btn btn-outline-success" onclick="getTeam(userTeamId)">Success</button>