import React from 'react';
import './SOAPPage.css';
import { Link } from 'react-router-dom';

class SOAPPage extends React.Component {


    state = {}

    handleChange = e => {

    }

    render() {
        return (
            <div className="SOAPPage">
                <h1 className="TituloSAOP">Interface (FILES)</h1>

                <div className="ContenedorConsulta">

                    <br />
                    <br />
                    <br />
                    <label className="LabelSOAP" >Nombre de usuario:</label>
                    <br />
                    <br />
                    <input onChange={this.handleChange} className="InputEntradaSOAP" name="EntradaDatosSOAP" />
                    <br />
                    <br />
                    <br />
                    <br />
                    <button className="BotonConsultarSOAP">Consultar</button>
                    <br />
                    <br />
                    <input className="InputSalidaSOAP" name="SalidaConsultaSOAP" disabled value="2" />
                    <br />
                    <br />
                </div>
                <br />
                <br />
                <br />
                <br />
                <Link className="BotonRegresarSOAP" to='/'>Regresar</Link>
            </div>
        );
    }

}

export default SOAPPage;