function displayTeamDetails(teamId) {
    dataRequest("GET", "/team/" + teamId).then((request) => {
        let teamDetails = JSON.parse(request.responseText);
        
        document.getElementById('userTeamNameHeader').innerHTML = teamDetails.name;
        document.getElementById('teamPageTitle').innerHTML = teamDetails.name;
        document.getElementById('teamHomeColour').innerHTML = "Home Kit: " + teamDetails.homeColour;
        document.getElementById('teamAwayColour').innerHTML = "Away Kit: " + teamDetails.awayColour;
        document.getElementById('teamPin').innerHTML = "Pin: " + teamDetails.id;
        return teamDetails;
        
    })
}

function displayTeamName(teamId) {
    dataRequest("GET", "/team/" + teamId).then((request) => {
        let teamDetails = JSON.parse(request.responseText);
        document.getElementById('userTeamNameHeader').innerHTML = teamDetails.name;
    })
}