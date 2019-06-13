function getAllTeams() {
    serverRequest("GET", "/team", null).then((request) => {
        let allTeams = JSON.parse(request.responseText);
        console.log(data);
        for (let team in allTeams) {
            for (let detail in allTeams[team]) {
                if (property != "id") {
                    document.getElementById(team + "." + detail).innerHTML = allTeams[team][detail];
                    console.log(allTeams)
                }
            }
        }
    });

}