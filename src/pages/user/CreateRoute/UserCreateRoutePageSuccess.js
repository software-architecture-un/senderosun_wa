import React from 'react';
import IpGraphql from '../../../components/conection/IpGraphql';
import './UserCreateRoutePage.css';
import '../../../GeneralStyles.css';
import MenuNavegacion from '../../../components/MenuNav/MenuNavegacion';


class UserCreateRoutePageSuccess extends React.Component {

    state = {
        NombreRuta: "",
        LugarOrigen: -1,
        LugarDestino: -1,
        ListaLugares: [],
    }

    CargarMisLugares() {
        console.log("=====================================================================")
        console.log("=====================================================================")
        const query = `
                query {
                    scoreresourceByuser(user_id: ${window.localStorage.user_id}) {
                      content {
                        _id
                        name
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
                this.setState({
                    ListaLugares: res.data.scoreresourceByuser.content,
                })
                console.log(this.state.ListaLugares)
            })
            .catch(error => {
                this.setState({ errors: error })
            }))
        console.log("=====================================================================")
        console.log("=====================================================================")
    }


    componentWillMount() {
        this.CargarMisLugares()
    }


    handleClick = e => {

        if ((this.state.LugarOrigen !== this.state.LugarDestino) && (this.state.LugarOrigen !== -1) && (this.state.LugarDestino !== -1) && (this.state.NombreRuta.length > 0)) {
            console.log("SI SON DIFERENTES ++++++++++")
            console.log('--> CREAR RUTA')
            console.log(window.localStorage.user_id)
            console.log(this.state.NombreRuta)
            console.log(this.state.LugarOrigen)
            console.log(this.state.LugarDestino)
            const query = `
            mutation {
                createTrail(trail: {
                  usertrail: ${window.localStorage.user_id}
                  nametrail: "${this.state.NombreRuta}"
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
                    console.log(res.data);
                    alert(`Se ha creado la ruta con id = ${res.data.createTrail.id}`);
                })
                .catch(console.error)
        } else {
            console.log("LOS PUTOS LUGARES SON IGUALES O NO HA SELECCIONADO NI MIERDA")
            alert("Error: verificar campos ingresados");
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleClickExit = e => {
        window.localStorage.clear()
        window.location.href = '/'
    }

    render() {

        const CargarLista = this.state.ListaLugares.map((lugar) => {
            return (
                <option value={lugar._id}>{lugar.name}</option>
            )
        })

        return (
            < div className="UserCreateRoutePageSuccess" >

                <MenuNavegacion
                    LinkDatosPersonales="LinkInactivo"
                    LinkCrearLugar="LinkInactivo"
                    LinkLugares="LinkInactivo"
                    LinkCrearRuta="LinkActivo"
                    LinkBorrarRuta="LinkInactivo"
                    LinkRutas="LinkInactivo"
                    LinkEliminarCuenta="LinkInactivo"
                />


                <div className="ObjetivoMenuLateralNuevo">

                    <div className="TituloTarget">
                        <h1>Crea Una Nueva Ruta</h1>
                    </div>

                    <div className="ContenedorLabelsData">
                        <div className="OrdenarInformacion">
                            <div className="LabelUserData">
                                <label>Nombre de la ruta:</label>
                            </div>
                            <input className="InputUserData" onChange={this.handleChange} name="NombreRuta" value={this.state.NombreRuta} />
                        </div>

                        <div className="OrdenarInformacion">
                            <div className="LabelUserData">
                                <label>Origen:</label>
                            </div>
                            <select className="InputUserData LugarRutaOrigen" onChange={this.handleChange} name="LugarOrigen" value={this.state.LugarOrigen}>
                                <option value="-1" disabled selected>Seleccione el origen...</option>
                                {CargarLista}
                            </select>

                        </div>
                        <div className="OrdenarInformacion">
                            <div className="LabelUserData">
                                <label>Destino:</label>
                            </div>
                            <select className="InputUserData LugarRutaDestino" onChange={this.handleChange} name="LugarDestino" value={this.state.LugarDestino}>
                                <option value="-1" disabled selected>Seleccione el destino...</option>
                                {CargarLista}
                            </select>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div>
                        <button className="BotonCrearLugar" onClick={this.handleClick}>Crear Ruta</button>
                    </div>
                </div>
            </div >
        )
    }
}

export default UserCreateRoutePageSuccess;