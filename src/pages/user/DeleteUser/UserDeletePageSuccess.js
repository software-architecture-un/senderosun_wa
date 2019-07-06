import React from 'react';
import { Link } from 'react-router-dom';
// import IpGraphql from '../../../components/conection/IpGraphql';
import './UserDeletePage.css';
import '../../../GeneralStyles.css';
import ImagenUser from '../../../images/user.png';

class UserDeletePageSuccess extends React.Component {

    handleClick = e => {
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
                        <Link to="/user-data" className="LinkInactivo DatosPersonales">Datos Personales</Link>
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
                        <Link to="/user-delete" className="LinkActivo EliminarCuenta">Eliminar Cuenta</Link>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div>
                        <Link to="/" className="LinkInactivo Salir">Salir</Link>
                    </div>
                </div>
                <div className="ObjetivoMenuLateralNuevo">

                    <div className="TituloTarget">
                        <h1>¿Estas seguro de eliminar la cuenta?</h1>
                    </div>

                    <div className="ContenedorLabelsData">
                        <div className="OrdenarInformacion">
                            <div className="LabelUserData">
                                <label>Pass:</label>
                            </div>
                            <input className="InputUserData" />
                        </div>

                        <div className="OrdenarInformacion">
                            <div className="LabelUserData">
                                <label>Conf pass:</label>
                            </div>
                            <input className="InputUserData" />
                        </div>
                    </div>
                    <button className="BotonEliminarCuenta">ELIMINAR CUENTA</button>
                </div>
            </div >
        )
    }
}
export default UserDeletePageSuccess;