import React, { useEffect, useRef, useState } from "react";
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
const TOKEN = process.env.REACT_APP_API_TOKEN;
const InteractiveMap = ( {width = "100vw", lat = 18.5204 , lng = 73.8567} ) => {
  // console.log("InteractiveMap Component");
  // console.log("Map : "+lat +" "+ lng)
  const coord = [lng,lat];
  
  const Map = ReactMapboxGl({
    accessToken: process.env.REACT_APP_API_KEY,
  });


const mapRef = useRef(null);
useEffect(()=>{
  if(mapRef.current && lat && lng){
    mapRef.current.flyTo({center: coord, zoom: 12, essential:true});
  }
},[lat,lng]);

if (!lat || !lng || isNaN(lat) || isNaN(lng)) {
  return <div>Invalid coordinates</div>;
}
  return (
    // <div className="w-[20rem] h-[20rem]">
    //   <Map
    //     style="mapbox://styles/mapbox/streets-v9"
    //     containerStyle={{
    //       height: "20rem",
    //       width: width,
    //     }}
    //   >
    //     <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
    //       <Feature coordinates={coord} />
    //     </Layer>
    //   </Map>
    // </div>
    <div className="w-[20rem] h-[20rem]">
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        center={coord} 
        containerStyle={{
          height: "20rem",
          width: width,
        }}
      >
        <Marker coordinates={coord} anchor="bottom">
          <img src="/images/map-marker.png" className="w-[2rem] h-[2rem]" alt="Marker" />
        </Marker>
      </Map>
    </div>
  );
};

InteractiveMap.defaultProps = { width: "100vw", lat: 18.5204, lon: 73.8567 };

export default InteractiveMap;
