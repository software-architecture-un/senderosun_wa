import React from 'react';
import './SOAPPage.css';
import { Link } from 'react-router-dom';
import DirectionGraphq from '../../components/conection/IpGraphql';

class SOAPPage extends React.Component {


    state = {
        EntradaDatosSOAP: "",
        SalidaConsultaSOAP: ": :"
    }

    handleClick = e => {
        console.log('--> PRUEBA SOAP')
        const query = `
          mutation{
            getCountFiles(username:{
              username: "${this.state.EntradaDatosSOAP}"
            }){
              value
            }
          }
      `;

        const url = DirectionGraphq;
        const opts = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query })
        };

        fetch(url, opts)
            .then(res => res.json())
            .then(res => {
                if (this.state.EntradaDatosSOAP.length !== 0) {
                    this.setState({
                        SalidaConsultaSOAP: res.data.getCountFiles.value
                    })
                    // alert(`Se ha realizado la prueba de SOAP al grupo C => value: ${res.data.getCountFiles.value}`);
                    console.log(res.data.getCountFiles);
                } else {
                    alert("Error: verificar campo ingresado");
                }
            })
            .catch(console.error);
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
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
                    <input onChange={this.handleChange} className="InputEntradaSOAP" name="EntradaDatosSOAP" value={this.state.EntradaDatosSOAP} />
                    <br />
                    <br />
                    <br />
                    <br />
                    <button className="BotonConsultarSOAP" onClick={this.handleClick} ># Archivos</button>
                    <br />
                    <br />
                    {/* <input onChange={this.handleChange} className="InputSalidaSOAP" name="SalidaConsultaSOAP" value={this.state.SalidaConsultaSOAP} /> */}
                    <label className="SalidaConsultaSOAP" >{this.state.SalidaConsultaSOAP}</label>
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