// Módulo principal do rastreamento de ônibus
class BusTracker {
    constructor() {
        this.userLocation = null;
        this.map = null;
        this.userMarker = null;
        this.busMarker = null;
        this.init();
    }

    init() {
        this.requestLocation();
        setInterval(() => this.updateBusInfo(), CONFIG.UPDATE_INTERVAL);
    }

    requestLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => this.onLocationSuccess(position),
                (error) => this.onLocationError(error),
                CONFIG.GEOLOCATION
            );
        } else {
            document.getElementById('localizacao').textContent = 'Não suportada';
        }
    }

    onLocationSuccess(position) {
        this.userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
        
        document.getElementById('localizacao').textContent = 
            `${this.userLocation.lat.toFixed(4)}, ${this.userLocation.lng.toFixed(4)}`;
        
        this.initMap();
        this.updateBusInfo();
    }

    onLocationError(error) {
        document.getElementById('localizacao').textContent = 'Não autorizada';
    }

    initMap() {
        this.map = L.map('mapa').setView([this.userLocation.lat, this.userLocation.lng], CONFIG.MAP.ZOOM_LEVEL);
        
        L.tileLayer(CONFIG.MAP.TILE_URL, {
            attribution: CONFIG.MAP.ATTRIBUTION
        }).addTo(this.map);
        
        this.userMarker = L.marker([this.userLocation.lat, this.userLocation.lng])
            .addTo(this.map)
            .bindPopup('📍 Você está aqui')
            .openPopup();
    }

    calculateDistance(lat1, lng1, lat2, lng2) {
        const R = 6371000;
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLng = (lng2 - lng1) * Math.PI / 180;
        const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                Math.sin(dLng/2) * Math.sin(dLng/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return R * c;
    }

    updateBusInfo() {
        const minutes = Math.floor(Math.random() * (CONFIG.BUS.MAX_ARRIVAL_TIME - CONFIG.BUS.MIN_ARRIVAL_TIME + 1)) + CONFIG.BUS.MIN_ARRIVAL_TIME;
        const arrivalTime = new Date();
        arrivalTime.setMinutes(arrivalTime.getMinutes() + minutes);
        
        document.getElementById('minutos').textContent = minutes;
        document.getElementById('horario').textContent = 
            arrivalTime.getHours().toString().padStart(2, '0') + ':' + 
            arrivalTime.getMinutes().toString().padStart(2, '0');
        
        if (this.userLocation) {
            const busLat = this.userLocation.lat + (Math.random() - 0.5) * CONFIG.BUS.MOVEMENT_RADIUS;
            const busLng = this.userLocation.lng + (Math.random() - 0.5) * CONFIG.BUS.MOVEMENT_RADIUS;
            const distance = this.calculateDistance(
                this.userLocation.lat, this.userLocation.lng,
                busLat, busLng
            );
            
            document.getElementById('distancia').textContent = Math.round(distance);
            this.updateMapMarkers(busLat, busLng);
        }
    }

    updateMapMarkers(busLat, busLng) {
        if (!this.map) return;
        
        if (this.busMarker) {
            this.map.removeLayer(this.busMarker);
        }
        
        this.busMarker = L.marker([busLat, busLng], {
            icon: L.divIcon({
                html: '🚌',
                iconSize: [30, 30],
                className: 'emoji-icon'
            })
        }).addTo(this.map).bindPopup(`🚌 ${CONFIG.BUS.LINE}`);
        
        const group = L.featureGroup([this.userMarker, this.busMarker]);
        this.map.fitBounds(group.getBounds().pad(0.1));
    }
}

// Inicializa a aplicação
document.addEventListener('DOMContentLoaded', () => {
    new BusTracker();
});