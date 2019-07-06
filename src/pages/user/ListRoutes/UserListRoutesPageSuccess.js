import React from 'react';
import './UserListRoutesPage.css';
import IpGraphql from '../../../components/conection/IpGraphql';
import '../../../GeneralStyles.css';
import { Link } from 'react-router-dom';
import ImagenUser from '../../../images/user.png';

class UserListRoutesPageSuccess extends React.Component {


    state = {

    }

    CargarLugares() {

        const query = `
            query {
                scoreresourceByuser(user_id: 1){
                    _id
                    latitude
                    longitude
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
            .then(res => {
                console.log("EMPIEZA LA CARGAR LUGARES")
                return res.json()
            })
            .then(res => {
                this.setState({ lugares: res.data.scoreresourceByuser })
                console.log("TERMINA LA CARGAR LUGARES")
                return true
            })
            .catch(console.error))

    }

    CargarRutas() {

        const query = `
        query {
            findTrailsByUser(id: 1){
                nametrail
                origintrail
                destinytrail
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
            .then(res => {
                console.log("COMIENZA LA CARGA DE LAS RUTAS")
                return res.json()
            })
            .then(res => {
                this.setState({ rutas: res.data.findTrailsByUser })
                console.log("TERMINA LA CARGA DE LAS RUTAS")
                return true
            })
            .catch(console.error))
    }


    componentWillMount() {

    }

    render() {



        return (
            < div className="UserListRoutesPageSuccess" >

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
                        <Link to="/user-list-roure" className="LinkActivo Rutas">Rutas</Link>
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
                        <Link to="/" className="LinkInactivo Salir">Salir</Link>
                    </div>
                </div>
                <div className="ObjetivoMenuLateralNuevo">
                    <div className="TituloTarget">
                        <h1>Mis Rutas</h1>
                    </div>

                </div>
            </div >
        )
    }
}

export default UserListRoutesPageSuccess;