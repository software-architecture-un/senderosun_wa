import React from 'react';
import IpGraphql from '../../../components/conection/IpGraphql';
import { Link } from 'react-router-dom';
import './UserListPlacesPage.css';
import '../../../GeneralStyles.css';
import ContainerMap from '../../../components/Maps/ContainerMap';
import ImagenUser from '../../../images/user.png';


class UserListPlacesPageSuccess extends React.Component {


    state = {

        lugares: [],
        pintarLugares: [],

    }




    componentWillMount() {
        const query = `
            
            query {
                scoreresourceByuser(user_id: ${window.localStorage.user_id}) {
                  content {
                    _id
                    name
                    description
                    latitude
                    longitude
                    user_id
                  }
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
                console.log(res.data.scoreresourceByuser.content)
                this.setState({
                    lugares: res.data.scoreresourceByuser.content
                })
                console.log("===============================================")
                console.log("este es el valor del estado actual")
                console.log(this.state.lugares)
                console.log("===============================================")

            })
            .then(res => {
                const CargarLugares = this.state.lugares.map(lugar => {
                    return ({ name: lugar.name, info: lugar.description, coordenada: { latitude: lugar.latitude, longitude: lugar.longitude } })
                })
                this.setState({
                    pintarLugares: CargarLugares
                })
            })
            .catch(console.error))
    }

    handleClickExit = e => {
        window.localStorage.clear()
        window.location.href = '/'
    }

    render() {

        const ListaLugares = this.state.pintarLugares.map((ruta) => {
            return (
                <div>
                    <ContainerMap markers={ruta.coordenada} nombrelugar={ruta.name} infoMapa={ruta.info} />
                </div>
            )
        })

        return (
            < div className="UserListPlacesPageSuccess" >
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
                        <Link to="/user-list-places" className="LinkActivo Lugares">Lugares</Link>
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
                        <h1>Mis Lugares</h1>
                    </div>
                    <div className="ContenedorLugares">
                        {ListaLugares}
                    </div>
                </div>
            </div >
        )
    }
}

export default UserListPlacesPageSuccess;