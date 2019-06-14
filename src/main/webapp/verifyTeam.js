function verifyTeam() {


    getAllTeams()
        .then(allTeams => {
            for (let team of allTeams) {
                if (team.id === document.getElementById("teamPinInput").value) {  //create input form for both
                    console.log('Team found', account);
                    return true;
                }
            }
            console.warn('No team recognised')
            return false;
        });
};
