from flask import Flask, render_template, jsonify
import random
from datetime import datetime, timedelta

app = Flask(__name__)

# Simulação de dados de ônibus
onibus_data = {
    "linha": "101 - Centro/Bairro",
    "placa": "ABC-1234",
    "status": "Em movimento"
}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/tempo-chegada')
def tempo_chegada():
    # Simula tempo de chegada entre 2 e 15 minutos
    minutos = random.randint(2, 15)
    chegada = datetime.now() + timedelta(minutes=minutos)
    
    return jsonify({
        'tempo_minutos': minutos,
        'horario_chegada': chegada.strftime('%H:%M'),
        'linha': onibus_data['linha'],
        'status': onibus_data['status']
    })

if __name__ == '__main__':
    app.run(debug=True)
