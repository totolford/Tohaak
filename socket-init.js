// socket-init.js

// Connexion au serveur Socket.io
const socket = io("https://kahoot-backend.onrender.com");

// Rejoindre un quiz (à appeler dynamiquement selon le mode choisi)
function joinQuiz(quizId, playerName) {
    socket.emit("join_quiz", {
        quiz_id: quizId,
        player_name: playerName
    });
}

// Gestion des événements de base
socket.on("player_joined", (data) => {
    console.log(`${data.player} a rejoint la partie !`);
});

socket.on("receive_question", (data) => {
    console.log("Question reçue :", data.question);
});
