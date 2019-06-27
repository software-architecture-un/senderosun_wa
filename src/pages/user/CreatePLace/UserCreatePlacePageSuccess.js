import React from 'react';
import IpGraphql from '../../../components/conection/IpGraphql';
import './UserCreatePlacePage.css';
import { Link } from 'react-router-dom';

class UserCreatePlacePageSuccess extends React.Component {

    state = {
        CampoNombre: "",
        CampoDescripcion: "",
        CampoLatitud: "",
        CampoLongitud: ""
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


    handleClickExit = e => {
        window.localStorage.clear()
        // window.location.href = '/'
    }


    handleClick = e => {
        const query = `
          mutation {
            createScoreResource(scoreresource: {
              name: "${this.state.CampoNombre}"
              description: "${this.state.CampoDescripcion}"
              latitude: ${this.state.CampoLatitud}
              longitude: ${this.state.CampoLongitud}
              user_id: ${this.state.user_id}
            }) {
              _id
              name
              description
              latitude
              longitude
              user_id
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
                if (this.state.CampoNombre.length !== 0 & this.state.CampoDescripcion.length !== 0 & this.state.CampoLatitud.length !== 0 & this.state.CampoLongitud.length !== 0) {
                    alert(`Se ha creado el lugar con id = ${res.data.createScoreResource._id}`);
                    this.setState({
                        CampoNombre: "",
                        CampoDescripcion: "",
                        CampoLatitud: "",
                        CampoLongitud: ""
                    })
                } else {
                    alert("Error: verificar campos ingresados");
                }
            })
            .catch(console.error);
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })

    }

    render() {
        return (
            < div className="UserCreatePlacePageSuccess" >
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
                        <Link to="/user-create-place" className="LinkActivo CrearLugar">Crear Lugar</Link>
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
                        <Link to="/user-delete" className="LinkInactivo EliminarCuenta">Eliminar Cuenta</Link>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div>
                        <Link to="/" className="LinkInactivo Salir">Salir</Link>
                    </div>

                    {/* <Link to="/" onClick={this.handleClickExit} className="OpcionMenu" >Salir</Link> */}

                </div>
                <div className="ObjetivoMenuLateralNuevo">
                    <div className="TituloTarget">
                        <h1>CREAR UN NUEVO LUGAR</h1>
                    </div>
                    <label className="LabelUserData">Nombre del lugar</label>
                    <br />
                    <input className="InputUserData" onChange={this.handleChange} name="CampoNombre" value={this.state.CampoNombre} />
                    <br />
                    <br />
                    <label className="LabelUserData">Descripción</label>
                    <br />
                    <input className="InputUserData" onChange={this.handleChange} name="CampoDescripcion" value={this.state.CampoDescripcion} />
                    <br />
                    <br />
                    <label className="LabelUserData">Latitud</label>
                    <br />
                    <input className="InputUserData" onChange={this.handleChange} name="CampoLatitud" value={this.state.CampoLatitud} />
                    <br />
                    <br />
                    <label className="LabelUserData">Longitud</label>
                    <br />
                    <input className="InputUserData" onChange={this.handleChange} name="CampoLongitud" value={this.state.CampoLongitud} />
                    <br />
                    <br />
                    <div>
                        <button className="BotonCrearLugar" onClick={this.handleClick}>Crear Lugar</button>
                    </div>
                </div>
            </div >
        );
    }
}

export default UserCreatePlacePageSuccess;