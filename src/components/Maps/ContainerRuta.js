import React from 'react';
import Mapas from './Mapas';
import './ContainerRuta.css';
import './ContainerMap.css';


class ContainerRuta extends React.Component {


    render() {
        return (
            <div className="ContainerRuta">
                <div className="CajaInformacionRuta">
                    <p className="TextTituloInfo">Ruta:</p>
                    <p className="TextoInfo">{this.props.nombreRuta}</p>
                    <p className="TextTituloInfo">Origen:</p>
                    <p className="TextoInfo">{this.props.nombreOrigen}</p>
                    <p className="TextTituloInfo">Destino:</p>
                    <p className="TextoInfo">{this.props.nombreDestino}</p>
                </div>
                <div className="ContainerMapaRuta">
                    <Mapas markers={this.props.misMarkers} />
                </div>

            </div>
        );
    }
}

export default ContainerRuta;