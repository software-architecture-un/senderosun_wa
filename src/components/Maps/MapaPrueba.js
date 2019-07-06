import React from 'react';
import MapaMarcarLugar from './MapaMarcarLugar';

class MapaPrueba extends React.Component {

    render() {
        return (
            <div className="MapaLugar">
                <div style={{ margin: '100px' }}>
                    <MapaMarcarLugar
                        google={this.props.google}
                        center={{ lat: 4.570315, lng: -74.135717 }}
                        height='300px'
                        zoom={15}
                    />
                </div>
            </div>
        );
    }

}

export default MapaPrueba;