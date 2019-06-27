import React from 'react';
import './ContainerMap.css';
import Mapas from './Mapas';

class ContenedorMapa extends React.Component {

    render() {
        return (
            <div className="ContenedorMapa">
                <h1>Lugar:</h1>
                <h3>mi lugar</h3>
                <div>
                    <Mapas markers={this.props.markers} largo={this.props.largo} />
                </div>
            </div>
        );
    }
}

export default ContenedorMapa;
