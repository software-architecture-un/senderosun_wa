import React from 'react';
import IpGraphql from '../../../components/conection/IpGraphql';
import './UserCreateRoutePage.css';
import { Link } from 'react-router-dom';


class UserCreateRoutePageSuccess extends React.Component {

    state = {
        NombreRuta: "",
        LugarOrigen: "",
        LugarDestino: ""
    }

    componentWillMount() {
        const query = `
            mutation {
                userByEmail( email: { email: "${window.localStorage.email}" } ) {
                    content {
                        id 
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
                    user_id: res.data.userByEmail.content.id,
                })
                console.log("USER-ID = ", this.state.user_id)
            })
            .catch(error => {
                this.setState({ errors: error })
            }))
    }


    handleClick = e => {
        console.log('--> CREAR RUTA')
        const query = `
            mutation {
                createTrail(trail: {
                usertrail:${this.state.user_id}
                nametrail:"${this.state.NombreRuta}"
                origintrail: ${this.state.LugarOrigen}
                destinytrail: ${this.state.LugarDestino}
                }){
                id
                usertrail
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
        fetch(url, opts)
            .then(res => res.json())
            .then(res => {
                if (this.state.NombreRuta.length !== 0 & this.state.LugarOrigen.length !== 0 & this.state.LugarDestino.length !== 0) {
                    alert(`Se ha creado la ruta con id = ${res.data.createTrail.id}`);
                    console.log(res.data);
                } else {
                    alert("Error: verificar campos ingresados");
                }
            })
            .catch(console.error)
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {
        return (
            < div className="UserCreateRoutePageSuccess" >
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
                        <Link to="/user-create-route" className="LinkActivo CrearRuta">Crear Ruta</Link>
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
                <div className="ObjetivoMenuLateralNuevo">
                    <h1>Crear Una Nueva Ruta</h1>

                    <label>Nombre Ruta</label>
                    <input onChange={this.handleChange} name="NombreRuta" value={this.state.NombreRuta} />
                    <br />
                    <br />
                    <label>Id Lugar Origen</label>
                    <input onChange={this.handleChange} name="LugarOrigen" value={this.state.LugarOrigen} />
                    <br />
                    <br />
                    <label>Id Lugar Destino</label>
                    <input onChange={this.handleChange} name="LugarDestino" value={this.state.LugarDestino} />

                    <div>
                        <button onClick={this.handleClick}>Crear Ruta</button>
                    </div>
                </div>
            </div >
        )
    }
}

export default UserCreateRoutePageSuccess;