let team = {
    name: "",
    homeColour: "",
    awayColour: ""
}


function createTeam() {

    if (document.getElementById("teamNameRegister").value != "") {
        team.name = document.getElementById("teamNameRegister").value;
    } else {
        window.alert("You must enter a team name.")
        return;
    }
    if (document.getElementById("homeKitColourRegister").value != "") {
        team.homeColour = document.getElementById("homeKitColourRegister").value;
    } else {
        window.alert("You must enter a home kit colour.")
        return;
    }
    if (document.getElementById("awayKitColourRegister").value != "") {
        team.awayColour = document.getElementById("awayKitColourRegister").value;
    } else {
        window.alert("You must enter an away kit colour.")
        return;
    }

    let jsonTeam = JSON.stringify(team);
    console.log(jsonTeam);
    dataRequest("POST", "/team", jsonTeam).then((request) => {
        console.log(request.responseText);
        let inputTeamName = document.getElementById("teamNameRegister").value
        dataRequest("GET", "/teamName/" + inputTeamName).then((request) => {
            let teamArray = JSON.parse(request.responseText);

            //reduces array of team objects to individual team objects. key is team name so pin can be found using team name
            const arrayToObject = (array) =>
                array.reduce((teamObj, detail) => {
                    teamObj[detail.name] = detail
                    return teamObj;
                }, {})
            const teamObject = arrayToObject(teamArray);
            console.log(teamObject[inputTeamName]);
            console.log(teamObject[inputTeamName].id);
            let teamPin = teamObject[inputTeamName].id;

            window.alert("Your team PIN is: " + teamPin + ". You must submit this in your player profile, or when you register");
           

            window.location.href = '/5aside-1.0';

        })
    })
}