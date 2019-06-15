function deleteTeam(teamId) {
    let deleteConfirm = confirm("Are you sure you want to delete your account?");
    if (deleteConfirm == true) {
        let teamIdJSON = JSON.stringify(teamId);
        dataRequest("DELETE", "/team/" + teamId, teamIdJSON);
        window.location.href = '/5aside-1.0/player.html';
    }
}