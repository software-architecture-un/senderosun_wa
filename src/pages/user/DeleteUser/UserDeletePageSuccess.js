import React from 'react';
import { Link } from 'react-router-dom';
import IpGraphql from '../../../components/conection/IpGraphql';
import './UserDeletePage.css';

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
                        <img className="FotoPerfil" width="160" height="160" alt=""></img>
                        <h2 className="NombreUsuario">Fulanito Perez</h2>
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
                        <Link to="/user-list-places" className="LinkInactivo ListaLugares">Lista Lugares</Link>
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
                        <Link to="/user-list-routes" className="LinkInactivo ListaRuta">Lista Rutas</Link>
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
                <div className="ObjetivoMenuLateral">
                    <div>
                        <label>CONTRASEÑA</label>
                        <br />
                        <input />
                    </div>
                    <br />
                    <br />
                    <br />
                    <div>
                        <label>CONTRASEÑA</label>
                        <br />
                        <input />
                    </div>
                    <br />
                    <br />
                    <br />
                    <button>ELIMINAR CUENTA</button>
                </div>
            </div >
        )
    }
}
export default UserDeletePageSuccess;