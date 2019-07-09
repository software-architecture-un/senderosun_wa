import React from 'react';
import IpGraphql from '../../../components/conection/IpGraphql';
import './UserCreatePlacePage.css';
import '../../../GeneralStyles.css';
import MenuNavegacion from '../../../components/MenuNav/MenuNavegacion';

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
                // console.log("USER-ID = ", this.state.user_id)
            })
            .catch(error => {
                this.setState({ errors: error })
            }))
    }


    handleClickExit = e => {
        window.localStorage.clear()
        window.location.href = '/'
    }


    handleClick = e => {
        const query = `
         
          mutation {
            createScoreResource(
              scoreresource: {
                name: "${this.state.CampoNombre}"
                description: "${this.state.CampoDescripcion}"
                latitude: ${this.state.CampoLatitud}
                longitude: ${this.state.CampoLongitud}
                user_id: ${this.state.user_id}
              }
            ) {
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

        fetch(url, opts)
            .then(res => res.json())
            .then(res => {
                if (this.state.CampoNombre.length !== 0 & this.state.CampoDescripcion.length !== 0 & this.state.CampoLatitud.length !== 0 & this.state.CampoLongitud.length !== 0) {

                    alert(`Se ha creado el lugar con id = ${res.data.createScoreResource.content._id}`);
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

                <MenuNavegacion
                    LinkDatosPersonales="LinkInactivo"
                    LinkCrearLugar="LinkActivo"
                    LinkBorrarLugar="LinkInactivo"
                    LinkLugares="LinkInactivo"
                    LinkCrearRuta="LinkInactivo"
                    LinkBorrarRuta="LinkInactivo"
                    LinkRutas="LinkInactivo"
                    LinkEliminarCuenta="LinkInactivo"
                />


                <div className="ObjetivoMenuLateralNuevo">
                    <div className="TituloTarget">
                        <h1>Crea Un Nuevo Lugar</h1>
                    </div>


                    <div className="ContenedorCrearLugar">
                        <div className="ContenedorLabelsData">
                            <div className="OrdenarInformacion">
                                <div className="LabelUserData">
                                    <label >Lugar:</label>
                                </div>
                                <input className="InputUserData" onChange={this.handleChange} name="CampoNombre" value={this.state.CampoNombre} />
                            </div>

                            <div className="OrdenarInformacion">
                                <div className="LabelUserData">
                                    <label>Descripción:</label>
                                </div>
                                <input className="InputUserData" onChange={this.handleChange} name="CampoDescripcion" value={this.state.CampoDescripcion} />
                            </div>

                            <div className="OrdenarInformacion">
                                <div className="LabelUserData">
                                    <label>Latitud:</label>
                                </div>
                                <input className="InputUserData" onChange={this.handleChange} name="CampoLatitud" value={this.state.CampoLatitud} />
                            </div>

                            <div className="OrdenarInformacion">
                                <div className="LabelUserData">
                                    <label>Longitud:</label>
                                </div>
                                <input className="InputUserData" onChange={this.handleChange} name="CampoLongitud" value={this.state.CampoLongitud} />
                            </div>
                        </div>
                    </div>

                    <div>
                        <button className="BotonCrearLugar" onClick={this.handleClick}>Crear Lugar</button>
                    </div>
                </div>
            </div >
        );
    }
}

export default UserCreatePlacePageSuccess;