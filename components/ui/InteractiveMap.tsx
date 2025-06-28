// components/InteractiveMap.tsx
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const InteractiveMap = () => {
    return (
        <div className="w-full h-[500px] my-8">
        <MapContainer center={[-13.971593028395253, 33.77726756154344]} zoom={13} style={{ height: "100%", width: "100%" }}>
            <TileLayer
            
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png&attribution='&copy; OpenStreetMap contributors'"
            />
            <Marker position={[-13.9626, 33.7741]}>
            <Popup>
                This is where you can find me!
            </Popup>
            </Marker>
        </MapContainer>
        </div>
    );
    };

export default InteractiveMap;
