import React from 'react';
import IpGraphql from '../../../components/conection/IpGraphql';
import './UserDataPage.css';
import '../../../GeneralStyles.css';
import { Link } from 'react-router-dom';
import ImagenUser from '../../../images/user.png';

class UserDataPageSuccess extends React.Component {

    state = {

    }

    componentWillMount() {
        const query = `
            mutation {
                userByEmail(email: { email: "${window.localStorage.email}" }){
                    content {
                        id
                        name
                        document
                        age
                        email
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
                window.localStorage.setItem('user_id', res.data.userByEmail.content.id)
                window.localStorage.setItem('name', res.data.userByEmail.content.name)
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

    handleClickExit = e => {
        window.localStorage.clear()
        window.location.href = '/'
    }

    render() {
        return (
            < div className="UserDataPageSuccess" >
                <div className="BarraMenuLateral">
                    <div className="MiniDatoUsuario">
                        <img className="FotoPerfil" src={ImagenUser} width="160" height="160" alt=""></img>
                        <h2 className="NombreUsuario">{window.localStorage.name}</h2>
                    </div>

                    <br />
                    <br />
                    <div>
                        <Link to="/user-data" className="LinkActivo DatosPersonales">Datos Personales</Link>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div>
                        <Link to="/user-create-place" className="LinkInactivo CrearLugar">Crear Lugar</Link>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div>
                        <Link to="/user-list-places" className="LinkInactivo Lugares">Lugares</Link>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div>
                        <Link to="/user-create-route" className="LinkInactivo CrearRuta">Crear Ruta</Link>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div>
                        <Link to="/user-list-routes" className="LinkInactivo Rutas">Rutas</Link>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div>
                        <Link to="/user-delete" className="LinkInactivo EliminarCuenta">Eliminar Cuenta</Link>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div>
                        <Link to="/" onClick={this.handleClickExit} className="LinkInactivo Salir">Salir</Link>
                    </div>
                </div>

                <div className="ObjetivoMenuLateralNuevo">
                    <div className="TituloTarget">
                        <h1>Datos Personales</h1>
                    </div>

                    {/* <div className="ContenedorDatosPersonales"> */}
                    <div className="ContenedorLabelsData">
                        <div className="OrdenarInformacion">
                            <div className="LabelUserData">
                                <label>Id Usuario:</label>
                            </div>
                            <input className="InputUserData" value={this.state.id} disabled />
                        </div>

                        <div className="OrdenarInformacion">
                            <div className="LabelUserData">
                                <label>Nombre:</label>
                            </div>
                            <input className="InputUserData" value={this.state.name} disabled />
                        </div>

                        <div className="OrdenarInformacion">
                            <div className="LabelUserData">
                                <label>Documento:</label>
                            </div>
                            <input className="InputUserData" value={this.state.document} disabled />
                        </div>

                        <div className="OrdenarInformacion">
                            <div className="LabelUserData">
                                <label>Age:</label>
                            </div>
                            <input className="InputUserData" value={this.state.age} disabled />
                        </div>

                        <div className="OrdenarInformacion">
                            <div className="LabelUserData">
                                <label> Correo:</label>
                            </div>
                            <input className="InputUserData" value={this.state.email} disabled />
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default UserDataPageSuccess;