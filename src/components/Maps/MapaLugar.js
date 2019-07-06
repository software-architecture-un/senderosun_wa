import React from 'react';

import { compose, withProps } from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";

const MapaLugar = compose(
    withProps({
        googleMapURL:
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyCOJZ-oU1uV5KmoxNS9zWBr2emcUZWjXUc&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
)(props => (
    <GoogleMap defaultZoom={16} defaultCenter={{ lat: props.latitud, lng: props.longitud }}>
        {props.isMarkerShown && (
            <Marker position={{ lat: props.latitud, lng: props.longitud }} />
        )}
    </GoogleMap>
));


export default MapaLugar;