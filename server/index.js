import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";  // <-- ici, on remplace require par import

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" }
});

let sessions = {};

io.on("connection", (socket) => {
  socket.on("join", (code) => {
    socket.join(code);
  });

  socket.on("answer", ({ code, answer }) => {
    console.log(`Réponse reçue pour ${code} : ${answer}`);
  });

  // Exemple de question toutes les 10 sec
  setInterval(() => {
    for (const code in sessions) {
      io.to(code).emit("question", {
        question: "Quelle est la capitale de la France ?",
        choices: ["Paris", "Berlin", "Rome", "Madrid"]
      });
    }
  }, 10000);
});

app.get("/", (req, res) => res.send("Tohaak backend opérationnel."));

server.listen(process.env.PORT || 3000, () => {
  console.log("Serveur backend démarré");
});
