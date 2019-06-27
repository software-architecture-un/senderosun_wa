import React from 'react';
import './ErrorPage.css';

class ErrorPage extends React.Component {
    render() {
        return (
            <div className="ErrorPage">
                <h1>Error</h1>
                <p>No posee permiso para acceder a esta página</p>
                <a href="/login">Aceptar</a>
            </div>
        );
    }
}

export default ErrorPage;