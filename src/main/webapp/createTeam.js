function createTeam() {

    setTeamDetails();
    let jsonTeam = JSON.stringify(team);
    console.log(jsonTeam);
    serverRequest("POST", "/teams", jsonTeam).then((request) => {
        console.log(request.responseText);
    })
}