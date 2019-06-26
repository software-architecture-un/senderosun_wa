import React from 'react';
import IpGraphql from '../../../components/conection/IpGraphql';
import './UserDataPage.css';

class UserDataPageSuccess extends React.Component {

    state = {

    }

    componentWillMount() {
        const query = `
            mutation {
                userByEmail( email: { email: "${window.localStorage.email}" } ) {
                    content {
                        id
                        name
                        document
                        age
                        email
                        password_digest
                    }
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
                this.setState({
                    name: res.data.userByEmail.content.name,
                    age: res.data.userByEmail.content.age,
                    document: res.data.userByEmail.content.document,
                    email: res.data.userByEmail.content.email,
                    id: res.data.userByEmail.content.id,
                })
            })
            .catch(error => {
                this.setState({ errors: error })
            }))
    }

    handleClick = e => {
        window.localStorage.clear()
        window.location.href = '/'
    }

    render() {
        return (
            < div className="UserDataPageSuccess" >
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
                    <button onClick={this.handleClick} className="OpcionMenu">
                        <h2 className="NombreMenu CerrarSesion">SALIR</h2>
                    </button>
                </div>
                <div className="ObjetivoMenuLateral">
                    <h1>CAMPOS</h1>
                    <div>
                        <label>Id Usuario</label>
                        <input value={this.state.id} />
                    </div>
                    <br />
                    <div>
                        <label>Nombre</label>
                        <input value={this.state.name} />
                    </div>
                    <br />
                    <div>
                        <label>Documento</label>
                        <input value={this.state.document} />
                    </div>
                    <br />
                    <div>
                        <label>Age</label>
                        <input value={this.state.age} />
                    </div>
                    <br />
                    <div>
                        <label>Correo</label>
                        <input value={this.state.email} />
                    </div>
                </div>
            </div >
        );
    }
}

export default UserDataPageSuccess;