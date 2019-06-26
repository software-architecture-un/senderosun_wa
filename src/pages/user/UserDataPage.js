import React from 'react';
import './UserDataPage.css';
import ErrorPage from '../../components/Errors/ErrorPage';
import IpGraphql from '../../components/conection/IpGraphql';


class UserDataPage extends React.Component {

    state = {
    }

    componentDidMount() {
        console.log("DID MOUNT")
    }

    componentWillMount() {
        const query = `
            mutation {
                verifyToken(jwt:{jwt: "${window.localStorage.token}"}) {
                    content
                    message
                    status
                }
            }
        `;

        const url = IpGraphql;
        const opts = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query })
        };

        (fetch(url, opts)
            .then(res => res.json())
            .then(res => {
                if (res.data.verifyToken != null) {
                    this.setState({
                        status: res.data.verifyToken.status,
                        authorization: true,
                    })
                    console.log(res.data.verifyToken.status)
                }
            })
            .catch(error => {
                this.setState({ errors: error })
            }))
        console.log("WILL MOUNT")
    }

    render() {
        if (this.state.authorization) {
            return (
                < div className="UserDataPage" >
                    {console.log("CARGA EL TRUE")}
                    <div className="BarraMenuLateral">
                        <div className="MiniDatoUsuario">
                            <img className="FotoPerfil" width="160" height="160" alt=""></img>
                            <h2 className="NombreUsuario">Fulanito Perez</h2>
                        </div>
                        <div className="OpcionMenu">
                            <h2 className="NombreMenu DatosPersonales">MODIFICAR DATOS</h2>
                        </div>
                        <div className="OpcionMenu">
                            <h2 className="NombreMenu CrearListas">CREAR LISTAS</h2>
                        </div>
                        <div className="OpcionMenu">
                            <h2 className="NombreMenu VerListas">VER LISTAS</h2>
                        </div>
                        <div className="OpcionMenu">
                            <h2 className="NombreMenu  Lugares">LUGARES</h2>
                        </div>
                        <div className="OpcionMenu">
                            <h2 className="NombreMenu EliminarCuenta">ELIMINAR CUENTA</h2>
                        </div>
                        <div className="OpcionMenu">
                            <h2 className="NombreMenu CerrarSesion">SALIR</h2>
                        </div>
                    </div>
                    <div className="ObjetivoMenuLateral">
                        <h1>CAMPOS</h1>
                    </div>
                </div >
            );
        } else {
            return (
                <div>
                    {console.log("CARGA EL FALSE")}
                    <ErrorPage />
                </div>
            );
        }
    }
}

export default UserDataPage;