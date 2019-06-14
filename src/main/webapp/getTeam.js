function getTeam(teamId) {
    dataRequest("GET", "/team/" + teamId).then((request) => {
        let teamDetails = JSON.parse(request.responseText);
        console.log(teamDetails);
        return teamDetails;
        
    })
}

function userTeamName(teamId) {
    dataRequest("GET", "/team/" + teamId).then((request) => {
        let teamDetails = JSON.parse(request.responseText);
        document.getElementById(userTeamNameHeader).innerHTML(teamDetails);

}