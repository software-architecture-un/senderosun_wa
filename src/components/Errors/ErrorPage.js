import React from 'react';
import './ErrorPage.css';
import { Link } from 'react-router-dom';

class ErrorPage extends React.Component {
    render() {
        return (
            <div className="ErrorPage">
                <div className="MensajeError">
                    <h1 className="TituloError">Error</h1>
                    <p className="ParrafoError">No posee permiso para acceder a esta página</p>
                    <Link className="TengaloError" to="/login">Aceptar</Link>
                </div>
            </div>
        );
    }
}

export default ErrorPage;