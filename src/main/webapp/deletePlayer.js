function deletePlayer(playerId) {
    let deleteConfirm = confirm("Are you sure you want to delete your account?");
    if (deleteConfirm == true) {
        let playerIdJSON = JSON.stringify(playerId);
        serverRequest("DELETE", "/players/" + playerId, playerIdJSON);
    }
}

