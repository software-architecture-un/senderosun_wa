import React from 'react';
import IpGraphql from '../../../components/conection/IpGraphql';
import { Link } from 'react-router-dom';
import './UserListPlacesPage.css';
import ContainerMap from '../../../components/Maps/ContainerMap';


class UserListPlacesPageSuccess extends React.Component {


    state = {

        lugares: [],
        pintarLugares: [],

        misRutas: [[{ latitude: 25.8103146, longitude: -80.1751609 },
        { latitude: 25.8103146, longitude: -80.1751609 }], [{ latitude: 25.8103146, longitude: -80.1751609 },
        { latitude: 27.9947147, longitude: -82.5943645 },
        { latitude: 28.4813018, longitude: -81.4387899 }], [{ latitude: 25.8103146, longitude: -80.1751609 },
        { latitude: 27.9947147, longitude: -82.5943645 }],
        [{ latitude: 4.570315, longitude: -74.135717 }, { latitude: 4.634018, longitude: -74.082195 }],
        [{ latitude: 4.570315, longitude: -74.135717 }, { latitude: 4.570315, longitude: -74.135717 }]],

        nuevasRutas: [[{ latitude: 4.570315, longitude: -74.135717 }, { latitude: 4.570315, longitude: -74.135717 }],
        [{ latitude: 4.634018, longitude: -74.082195 }, { latitude: 4.634018, longitude: -74.082195 }],
        [{ latitude: 4.635476, longitude: -74.062101 }, { latitude: 4.635476, longitude: -74.062101 }],
        [{ latitude: 4.645109, longitude: -74.078389 }, { latitude: 4.645109, longitude: -74.078389 }],
        [{ latitude: 4.624608, longitude: -74.06606 }, { latitude: 4.624608, longitude: -74.06606 }],
        [{ latitude: 4.61832, longitude: -74.063195 }, { latitude: 4.61832, longitude: -74.063195 }],
        [{ latitude: 4.614055, longitude: -74.063864 }, { latitude: 4.614055, longitude: -74.063864 }],
        [{ latitude: 4.644774, longitude: -74.063775 }, { latitude: 4.644774, longitude: -74.063775 }]]

        // nuevasRutas: [[{ latitude: 1, longitude: 1.1111 }, { latitude: 1, longitude: 1.1111 }],
        // [{ latitude: 1, longitude: 1.1111 }, { latitude: 1, longitude: 1.1111 }],
        // [{ latitude: 1.0022, longitude: 1.0011 }, { latitude: 1.0022, longitude: 1.0011 }],
        // [{ latitude: 4.570315, longitude: -74.135717 }, { latitude: 4.570315, longitude: -74.135717 }],
        // [{ latitude: 4.634018, longitude: -74.082195 }, { latitude: 4.634018, longitude: -74.082195 }],
        // [{ latitude: 4.635476, longitude: -74.062101 }, { latitude: 4.635476, longitude: -74.062101 }],
        // [{ latitude: 4.645109, longitude: -74.078389 }, { latitude: 4.645109, longitude: -74.078389 }],
        // [{ latitude: 4.624608, longitude: -74.06606 }, { latitude: 4.624608, longitude: -74.06606 }],
        // [{ latitude: 4.61832, longitude: -74.063195 }, { latitude: 4.61832, longitude: -74.063195 }],
        // [{ latitude: 4.614055, longitude: -74.063864 }, { latitude: 4.614055, longitude: -74.063864 }],
        // [{ latitude: 4.644774, longitude: -74.063775 }, { latitude: 4.644774, longitude: -74.063775 }]]
    }




    componentWillMount() {
        const query = `
            query {
                scoreresourceByuser(user_id: ${window.localStorage.user_id}){
                name
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
            .then(res => res.json())
            .then(res => {
                console.log(res.data.scoreresourceByuser)
                this.setState({
                    lugares: res.data.scoreresourceByuser
                })
                console.log("este es el valor del estado actual")
                console.log(this.state.lugares)
                console.log(this.state.misRutas)
            })
            .then(res => {
                console.log("-->" + res)
                const CargarLugares = this.state.lugares.map(lugar => {

                    return ([{ latitude: lugar.latitude, longitude: lugar.longitude }, { latitude: lugar.latitude, longitude: lugar.longitude }])
                    // return (lugar.name + " ---> (" + lugar.latitude + " :: " + lugar.longitude + " )\n\n")
                })
                console.log("======================================")
                console.log(CargarLugares)
                console.log("======================================")
                this.setState({
                    pintarLugares: CargarLugares
                })
            })
            .catch(console.error))
    }

    render() {

        const ListaRutas = this.state.nuevasRutas.map((ruta) => {
            return (
                <div>
                    <ContainerMap markers={ruta} nombrelugar="{ruta.name}" />
                </div>
            )
        })

        return (
            < div className="UserListPlacesPageSuccess" >
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
                        <Link to="/user-list-places" className="LinkActivo ListaLugares">Lista Lugares</Link>
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
                        <Link to="/user-delete" className="LinkInactivo EliminarCuenta">Eliminar Cuenta</Link>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div>
                        <Link to="/" className="LinkInactivo Salir">Salir</Link>
                    </div>
                </div>
                <div className="ObjetivoMenuLateral">
                    {ListaRutas}
                </div>
            </div >
        )
    }
}

export default UserListPlacesPageSuccess;