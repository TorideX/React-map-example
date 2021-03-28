import React, { useEffect, useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const reverseGeocodeApi = 'https://nominatim.openstreetmap.org/reverse?format=json&zoom=18&' // lat & lon

export const CustomMap = () => {
    
  const [viewport, setViewport] = React.useState({
    latitude: 40.37767,
    longitude: 49.89201,
    width:'auto',
    height:'300px',
    zoom: 12,
    pitch: 40
  }); 

    const [newMarker, setNewMarker] = useState(null);

  useEffect(()=>{
    //setNewEventAddressCallback(newMarker)
  }, [newMarker])

  const mapOnClickHandler = async (e) => {
    let query = reverseGeocodeApi + `lon=${e.lngLat[0]}&lat=${e.lngLat[1]}`
    let response = await fetch(query, {method:'get'})
    let result = await response.json();

    setNewMarker({
        lon: parseFloat(e.lngLat[0]), //parseFloat(result.lon), 
        lat: parseFloat(e.lngLat[1]), //parseFloat(result.lat), 
        displayName: result.display_name
    });

    console.log(e)
    console.log(result)
}

    return (
        <div>
            {
                newMarker != null &&
                <h5>{newMarker.displayName}</h5>
            }
            <ReactMapGL mapboxApiAccessToken='pk.eyJ1IjoiaWJyYXRlc3QiLCJhIjoiY2tsdWJja2s4MGd5bDJ2bzNyY3ZnMjIxayJ9.LhOxysANlms2lZWWANSuKw'
            {...viewport} mapStyle='mapbox://styles/mapbox/streets-v11' onViewportChange={(viewport) => setViewport(viewport)} onClick={mapOnClickHandler}
            >
                {
                    newMarker != null &&
                    <Marker longitude={newMarker.lon} latitude={newMarker.lat} offsetLeft={-15} offsetTop={-30}>
                        <img src={window.location.origin + '/mapMarker.png'} style={{width:30, height:30}}/>
                    </Marker>
                }
            </ReactMapGL>
        </div>
    )
}
