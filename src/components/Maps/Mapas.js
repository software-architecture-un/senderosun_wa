import React from 'react';
import Map from './Map';

class Mapas extends React.Component {

    state = {
        googleMapsApiKey: "AIzaSyCOJZ-oU1uV5KmoxNS9zWBr2emcUZWjXUc",
    }

    render() {
        return (
            <div>
                {/* <h1>MIS MAPAS</h1> */}
                <Map
                    googleMapURL={
                        'https://maps.googleapis.com/maps/api/js?key=' +
                        this.state.googleMapsApiKey +
                        '&libraries=geometry,drawing,places'
                    }
                    markers={this.props.markers}
                    loadingElement={this.state.loadingElement || <div style={{ height: `100%` }} />}
                    containerElement={this.state.containerElement || <div style={{ height: "400px" }} />}
                    mapElement={this.state.mapElement || <div style={{ height: `100%` }} />}
                    defaultCenter={this.state.defaultCenter || { lat: 25.8103146, lng: -80.1751609 }}
                    defaultZoom={this.state.defaultZoom || 11}
                />
            </div>
        );
    }
}

export default Mapas;