// Configurações da aplicação
const CONFIG = {
    // Intervalo de atualização em milissegundos
    UPDATE_INTERVAL: 30000,
    
    // Configurações do mapa
    MAP: {
        ZOOM_LEVEL: 15,
        TILE_URL: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        ATTRIBUTION: '© OpenStreetMap'
    },
    
    // Simulação do ônibus
    BUS: {
        LINE: '101 - Centro/Bairro',
        PLATE: 'ABC-1234',
        MIN_ARRIVAL_TIME: 2,  // minutos
        MAX_ARRIVAL_TIME: 15, // minutos
        MOVEMENT_RADIUS: 0.01 // graus de latitude/longitude
    },
    
    // Configurações de geolocalização
    GEOLOCATION: {
        TIMEOUT: 10000,
        ENABLE_HIGH_ACCURACY: true,
        MAXIMUM_AGE: 60000
    }
};