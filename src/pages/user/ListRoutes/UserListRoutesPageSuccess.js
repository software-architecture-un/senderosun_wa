import React from 'react';
import './UserListRoutesPage.css';
import IpGraphql from '../../../components/conection/IpGraphql';
import '../../../GeneralStyles.css';
import { Link } from 'react-router-dom';
import ImagenUser from '../../../images/user.png';
import ContainerRuta from '../../../components/Maps/ContainerRuta';

class UserListRoutesPageSuccess extends React.Component {


    state = {
        lugares: [],
        cargarMisRutas: []
    }

    extraerCoordenada(lugar_id) {
        const coordenada = {}
        for (let index = 0; index < this.state.lugares.length; index++) {
            if (this.state.lugares[index]._id === lugar_id) {

                // { latitude: 25.8103146, longitude: -80.1751609 }
                return {
                    nombreLugar: this.state.lugares[index].name, coordenada: { latitude: this.state.lugares[index].latitude, longitude: this.state.lugares[index].longitude }
                }
            }
        }
        return coordenada
    }



    cargarRutas() {
        var cargarMisRutas = this.state.rutas.map((ruta) => {
            return ({ nombreRuta: ruta.nametrail, origen: this.extraerCoordenada(ruta.origintrail), destino: this.extraerCoordenada(ruta.destinytrail) })
        })

        this.setState({
            cargarMisRutas: cargarMisRutas
        })
    }

    async componentWillMount() {
        console.log("AQUI SE CARGAN LOS LUGARES")

        var query = `
            query {
                scoreresourceByuser(user_id: ${window.localStorage.user_id}) {
                    content {
                        _id
                        name
                        latitude
                        longitude
                    }
                }
            }
        `;

        const url = IpGraphql;
        const optsLugares = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query })
        };

        var MisLugares = await fetch(url, optsLugares)
        MisLugares = await MisLugares.json()
        MisLugares = MisLugares.data.scoreresourceByuser.content
        this.setState({ lugares: MisLugares })


        query = `
            query {
                findTrailsByUser(id: ${window.localStorage.user_id}){
                    nametrail
                    origintrail
                    destinytrail
                }
            }
            
        `;

        const optsRutas = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query })
        };

        var MisRutas = await fetch(url, optsRutas)
        MisRutas = await MisRutas.json()
        MisRutas = MisRutas.data.findTrailsByUser
        console.log(MisRutas)
        this.setState({ rutas: MisRutas })


        await this.cargarRutas()
    }

    handleClickExit = e => {
        window.localStorage.clear()
        window.location.href = '/'
    }

    render() {

        const pintarRutas = this.state.cargarMisRutas.map((miruta) => {
            return (
                <div>
                    <ContainerRuta misMarkers={[miruta.origen.coordenada, miruta.destino.coordenada]} nombreRuta={miruta.nombreRuta} nombreOrigen={miruta.origen.nombreLugar} nombreDestino={miruta.destino.nombreLugar} />
                </div>
            )
        })

        return (
            <div className="UserListRoutesPageSuccess" >
                {console.log("RENDER")}
                {console.log(this.state.cargarMisRutas)}
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
                        <Link to="/" onClick={this.handleClickExit} className="LinkInactivo Salir">Salir</Link>
                    </div>
                </div>
                <div className="ObjetivoMenuLateralNuevo">
                    <div className="TituloTarget">
                        <h1>Mis Rutas</h1>
                    </div>
                    <div className="ContenedorMisRutas">
                        {pintarRutas}
                    </div>
                </div>
            </div >
        )
    }
}

export default UserListRoutesPageSuccess;