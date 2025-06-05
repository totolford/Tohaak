// socket-init.js
const socket = io("https://tohaak.onrender.com");

// 🔓 Déclarer la fonction dans le scope global
window.joinQuiz = function(quizId, playerName) {
    socket.emit("join_quiz", {
        quiz_id: quizId,
        player_name: playerName
    });
};

// Réception de messages
socket.on("player_joined", (data) => {
    console.log(`${data.player} a rejoint la partie !`);
});


socket.on("receive_question", (data) => {
    console.log("Question reçue :", data.question);
});
