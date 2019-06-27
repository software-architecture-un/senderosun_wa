import React from 'react';
import './HomePage.css';
import Archivo from '../../images/archivo.png';
import Ruta from '../../images/rutas.png';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {

    render() {
        return (
            <div className="HomePage">

                <div className="HeaderLandig">
                    <div className="PosicionBotones">
                        <Link to="/login" className="BotonIniciarSesion" > Iniciar Sesión </Link>
                        <Link to="/register" className="BotonCrearCuenta" > Crear cuenta </Link>
                    </div>
                    <h1 className="TituloLanding"> Senderos UN </h1>
                </div>

                <div className="BodyLandig">
                    <div className="CajaGaleria">
                        <h2 className="SubTitulos">INTERFACE (files)</h2>
                        <a href="/interface-files">
                            <img src={Archivo} width="250" height="250" alt="Imagen_Camara"></img>
                        </a>
                        <div className="TextoJustificado">
                            <p>En este servicio a partir del nombre de un usuario se obtiene el número de archivos que tiene el usuario.</p>
                        </div>
                    </div>

                    <div className="CajaImagenes">
                        <h2 className="SubTitulos">Rutas</h2>
                        <a href="/routes">
                            <img src={Ruta} width="250" height="250" alt="Imagen_Ruta" ></img>
                        </a>
                        <div className="TextoJustificado">
                            <p>Aqui encontraras las rutas preferidas por los usarios.</p>
                            <p>Camina, conduce y descubre los caminos que el mundo tiene preparado para ti-</p>
                        </div>

                    </div>
                </div>

                <div className="FooterLandig">
                    <h3 className="Universidad">Universidad Nacional De Colombia</h3>
                    <h4 className="Materia">Arquitecura De software</h4>
                </div>

            </div>
        )
    }
}

export default HomePage;