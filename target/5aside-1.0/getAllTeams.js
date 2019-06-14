function getAllTeams() {
    serverRequest("GET", "/team", null).then((request) => {
        let allTeams = JSON.parse(request.responseText);
        return allTeams;
        console.log(allTeams);
     });

}