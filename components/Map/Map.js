import { useEffect, useRef, useState } from "react"
import styles from './Map.module.scss';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'; 

const Map = ({lat, lon, zoom}) => {
    const mapContainer = useRef(null);
    const marker = useRef(null);
    const map = useRef(null);
    const [longitude, setLng] = useState(lon);
    const [latitude, setLat] = useState(lat);
    const [zoomState, setZoom] = useState(zoom);

    useEffect( () => {
        if (map && map.current) return; // initialize map only once

        mapboxgl.accessToken = 'pk.eyJ1Ijoic2FtdWVsd2FncyIsImEiOiJja3pmNWhrdzQzZXNiMnVua3VuZWNncG0wIn0.k5wjUqUjpmf0Y1yYEJI15A';
        const map = new mapboxgl.Map({
            container: mapContainer.current, // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [longitude, latitude],
            zoom: zoomState
        });

        map.scrollZoom.disable();
        map.addControl(new mapboxgl.NavigationControl());
        
        const el = document.createElement('div');
        el.className = 'marker';
        new mapboxgl.Marker(el, {anchor: 'bottom', offset: [0, 0]})
            .setLngLat([longitude, latitude])
            .addTo(map);
    }, []);

    return (
        <div className={`${styles.mapContainer} map-container`}>
            <div ref={mapContainer}></div>
        </div>
    )
}

export default Map
