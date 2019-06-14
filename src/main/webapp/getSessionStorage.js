
const userTeamId = sessionStorage.getItem(teamId);

function getUserTeam(userTeamId) {
    serverRequest("GET", "/player/${userTeamId}", userTeamId).then((request) => {
        let teamDetails = JSON.parse(request.responseText);
        return teamDetails;
        console.log(teamDetails);
    })
}


<script src="getTeam.js"></script>
    <script src="getSessionStorage.js"></script>