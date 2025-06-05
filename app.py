import eventlet
eventlet.monkey_patch()  # ⬅️ DOIT ÊTRE AVANT TOUT

from flask import Flask, request
from flask_socketio import SocketIO, join_room, emit
import os

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")

@app.route('/')
def home():
    return "Serveur de quiz Flask opérationnel"

@socketio.on('join_quiz')
def handle_join(data):
    room = data['quiz_id']
    name = data['player_name']
    join_room(room)
    emit('player_joined', {'player': name}, room=room)

@socketio.on('send_question')
def handle_question(data):
    room = data['quiz_id']
    question = data['question']
    emit('receive_question', {'question': question}, room=room)

@socketio.on('send_answer')
def handle_answer(data):
    room = data['quiz_id']
    player = data['player_name']
    answer = data['answer']
    emit('receive_answer', {'player': player, 'answer': answer}, room=room)

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    socketio.run(app, host='0.0.0.0', port=port)
