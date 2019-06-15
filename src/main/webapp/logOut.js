function logOut() {
    window.location.href = '/5aside-1.0/player.html';
    sessionStorage.clear('playerId');
    sessionStorage.clear('teamId');
}