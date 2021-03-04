import React, { useEffect, useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import someApi from '../api/locations.json'
import logoSVG from '../logo.svg'

export const CustomMap = () => {

    const [viewport, setViewport] = React.useState({
        latitude: 40.37767,
        longitude: 49.89201,
        width:'100vw',
        height:'100vh',
        zoom: 10
      }); 
    const [selectedMarker, setSelectedMarker] = useState(null);

    useEffect(() => {
        const escapePressHandler = (e) => {

            if(e.key === 'Escape') setSelectedMarker(null);
        }
        window.addEventListener('keydown', escapePressHandler);

        return () => {
            window.removeEventListener('keydown', escapePressHandler);
        }
    }, [])

    return (
        <div>
            <ReactMapGL mapboxApiAccessToken='pk.eyJ1IjoiaWJyYXRlc3QiLCJhIjoiY2tsdWJja2s4MGd5bDJ2bzNyY3ZnMjIxayJ9.LhOxysANlms2lZWWANSuKw'
                {...viewport} onViewportChange={(viewport) => setViewport(viewport)}
            >
                {someApi.features.map((location, i) => (
                    <Marker longitude={location.geometry.coordinates[0]} latitude={location.geometry.coordinates[1]} key={i}>
                        <button onClick={()=>{setSelectedMarker(location)}} style={{background:'none', border:'none'}}>
                            <img src={logoSVG} style={{width:30, height:30}}/>
                        </button>
                    </Marker>
                ))}

                {
                    selectedMarker &&
                    <Popup onClose={()=>{setSelectedMarker(null)}} longitude={selectedMarker.geometry.coordinates[0]} latitude={selectedMarker.geometry.coordinates[1]}>
                        <div>
                            This is my popup!!!
                        </div>
                    </Popup>
                }
            </ReactMapGL>
        </div>
    )
}
