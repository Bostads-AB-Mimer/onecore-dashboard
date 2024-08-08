import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

type ApartmentMapProps = {
  address: string;
  latitude: number;
  longitude: number;
};

export default function ApartmentMap({ address, latitude, longitude }: ApartmentMapProps) {
  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <MapContainer center={[latitude, longitude]} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[latitude, longitude]}>
        <Popup>{address}</Popup>
      </Marker>
    </MapContainer>
  );
}
