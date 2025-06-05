
const socket = io("https://tohaak-backend.onrender.com"); // Modifier si nécessaire

function joinGame() {
  const code = document.getElementById('sessionCode').value;
  if (code) {
    window.location.href = `/client/game.html?code=${code}`;
  }
}
