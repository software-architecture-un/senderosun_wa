import React from 'react';
// import MapaMarcarLugar from './MapaMarcarLugar';
// import Mapas from './Mapas';
import ContainerRuta from './ContainerRuta'

class MapaPrueba extends React.Component {

    render() {
        // return (
        //     <div className="MapaLugar">
        //         <div style={{ margin: '100px' }}>
        //             <MapaMarcarLugar
        //                 google={this.props.google}
        //                 center={{ lat: 4.570315, lng: -74.135717 }}
        //                 height='300px'
        //                 zoom={15}
        //             />
        //         </div>
        //     </div>
        // );

        const places = [
            { latitude: 25.8103146, longitude: -80.1751609 },
            { latitude: 27.9947147, longitude: -82.5943645 },
            { latitude: 28.4813018, longitude: -81.4387899 }
        ]
        return (
            <div>
                <ContainerRuta misMarkers={places} nombreRuta="Ruta-111" nombreOrigen="Tunal" nombreDestino="Hospital" />
                <ContainerRuta misMarkers={places} />
                <ContainerRuta misMarkers={places} />
                <ContainerRuta misMarkers={places} />
            </div>
        )
    }

}

export default MapaPrueba;