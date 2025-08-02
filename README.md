# bus-station
Projeto de Amazon Q - Hacktown 2025

# 🚌 Rastreamento de Ônibus

Aplicação web para rastreamento de ônibus em tempo real com geolocalização e visualização em mapa.

## 📋 Funcionalidades

- ✅ Rastreamento em tempo real
- ✅ Geolocalização do usuário
- ✅ Mapa interativo com posições
- ✅ Tempo estimado de chegada
- ✅ Distância do ônibus
- ✅ Atualização automática

## 🚀 Como usar

### Versão Simples (HTML)
1. Abra o arquivo `rastreamento.html` no navegador
2. Autorize o acesso à localização quando solicitado
3. Visualize o mapa e informações do ônibus

### Versão Servidor (Flask)
1. Instale as dependências:
   ```bash
   pip install -r requirements.txt
   ```
2. Execute o servidor:
   ```bash
   python app.py
   ```
3. Acesse: http://localhost:5000

## 📁 Estrutura do Projeto

```
pasta/
├── rastreamento.html      # Versão standalone
├── app.py                 # Servidor Flask
├── requirements.txt       # Dependências Python
├── templates/
│   └── index.html        # Template Flask
├── static/
│   └── style.css         # Estilos CSS
└── README.md             # Este arquivo
```

## 🛠️ Tecnologias

- **Frontend**: HTML5, CSS3, JavaScript
- **Mapa**: Leaflet.js + OpenStreetMap
- **Geolocalização**: Navigator API
- **Backend**: Flask (Python)

## 📱 Compatibilidade

- ✅ Chrome, Firefox, Safari, Edge
- ✅ Desktop e Mobile
- ✅ Requer HTTPS para geolocalização em produção

## 🔧 Personalização

Para integrar com dados reais:
- Substitua a simulação por API de transporte público
- Adicione autenticação se necessário
- Configure banco de dados para histórico

## 📄 Licença

Projeto educacional - uso livre.