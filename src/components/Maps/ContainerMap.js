import React from 'react';
import './ContainerMap.css';
import MapaLugar from './MapaLugar';

class ContenedorMapa extends React.Component {

    render() {
        return (
            <div className="ContenedorMapa" >
                <div className="CajaInformacion">
                    <p className="TextTituloInfo">Lugar:</p>
                    <p className="TextoInfo">- {this.props.nombrelugar}</p>
                    <p className="TextTituloInfo">Descripción:</p>
                    <p className="TextoInfo">- {this.props.infoMapa}</p>
                    <p className="TextTituloInfo">Coordenadas:</p>
                    <p className="TextoInfo">-Lat: {this.props.markers.latitude}</p>
                    <p className="TextoInfo">-Lon: {this.props.markers.longitude}</p>
                </div>
                <div className="CajaMapa">
                    <MapaLugar isMarkerShown latitud={this.props.markers.latitude} longitud={this.props.markers.longitude} />
                </div>
            </div>
        );
    }
}

export default ContenedorMapa;
