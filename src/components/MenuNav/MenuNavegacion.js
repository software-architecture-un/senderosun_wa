import React from 'react';
import { Link } from 'react-router-dom';
import ImagenUser from '../../images/user.png';
import '../../GeneralStyles.css';

class MenuNavegacion extends React.Component {


    handleClickExit = e => {
        window.localStorage.clear()
        window.location.href = '/'
    }

    render() {
        return (
            <div className="BarraLateral">
                <div className="MiniDatoUsuario">
                    <img className="FotoPerfil" src={ImagenUser} width="160" height="160" alt=""></img>
                    <h2 className="NombreUsuario">{window.localStorage.name}</h2>
                </div>
                <br />
                <br />
                <div>
                    <Link to="/user-data" className={this.props.LinkDatosPersonales + " DatosPersonales"}>Datos Personales</Link>
                </div>
                <br />
                <br />
                <br />
                <div>
                    <Link to="/user-create-place" className={this.props.LinkCrearLugar + " CrearLugar"}>Crear Lugar</Link>
                </div>
                <br />
                <br />
                <br />
                <div>
                    <Link to="/user-delete-place" className={this.props.LinkBorrarLugar + " BorrarLugar"}>Borrar Lugar</Link>
                </div>
                <br />
                <br />
                <br />
                <div>
                    <Link to="/user-list-places" className={this.props.LinkLugares + " Lugares"}>Lugares</Link>
                </div>
                <br />
                <br />
                <br />
                <div>
                    <Link to="/user-create-route" className={this.props.LinkCrearRuta + " CrearRuta"}>Crear Ruta</Link>
                </div>
                <br />
                <br />
                <br />
                <div>
                    <Link to="/user-delete-route" className={this.props.LinkBorrarRuta + " BorrarRuta"}>Borrar Ruta</Link>
                </div>
                <br />
                <br />
                <br />
                <div>
                    <Link to="/user-list-routes" className={this.props.LinkRutas + " Rutas"}>Rutas</Link>
                </div>
                <br />
                <br />
                <br />
                <div>
                    <Link to="/user-delete" className={this.props.LinkEliminarCuenta + " EliminarCuenta"}>Eliminar Cuenta</Link>
                </div>
                <br />
                <br />
                <br />
                <div>
                    <Link to="/" onClick={this.handleClickExit} className="LinkInactivo Salir">Salir</Link>
                </div>

            </div>
        );
    }
}

export default MenuNavegacion;