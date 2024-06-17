
import React from 'react'
import type { Place } from '../api/Place'
import 'leaflet/dist/leaflet.css'
import type {Map as LeafletMap} from 'leaflet'
import { useEffect,useRef } from 'react'
import { MapContainer,TileLayer,Marker } from 'react-leaflet'


interface MapProps {
    place:Place|null
}
const Map = ({place}:MapProps) => {
    const MapRef = useRef<LeafletMap|null>(null)
    useEffect(()=>{
        if(MapRef.current && place)
            {
                MapRef.current.flyTo([place.latitude,place.longitude])
            }
    },[place])
  return (
    
        <MapContainer ref={MapRef} center={[40.7,-74]} zoom={12} scrollWheelZoom className='h-full'  >
         <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'  />
         {place && <Marker position={[place.latitude,place.longitude]} />}
        </MapContainer>
    
  )
}

export default Map