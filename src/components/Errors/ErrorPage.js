import React from 'react';

class ErrorPage extends React.Component {
    render() {
        return (
            <div>
                <h1>Error</h1>
                <p>No posee permiso para acceder a esta página</p>
                <a href="/login">Aceptar</a>
            </div>
        );
    }
}

export default ErrorPage;