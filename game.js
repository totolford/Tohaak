
const socket = io("https://tohaak-backend.onrender.com");
const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get('code');

socket.emit('join', code);

socket.on('question', (data) => {
  document.getElementById("question").innerText = data.question;
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";
  data.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.innerText = choice;
    btn.onclick = () => socket.emit("answer", { code, answer: choice });
    answersDiv.appendChild(btn);
  });
});
