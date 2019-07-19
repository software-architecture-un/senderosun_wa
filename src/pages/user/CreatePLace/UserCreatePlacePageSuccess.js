import React from 'react';
import IpGraphql from '../../../components/conection/IpGraphql';
import './UserCreatePlacePage.css';
import '../../../GeneralStyles.css';
import MenuNavegacion from '../../../components/MenuNav/MenuNavegacion';

import { withGoogleMap, GoogleMap, withScriptjs, Marker } from "react-google-maps";
import Geocode from "react-geocode";
Geocode.setApiKey("AIzaSyCOJZ-oU1uV5KmoxNS9zWBr2emcUZWjXUc");
Geocode.enableDebug();

class UserCreatePlacePageSuccess extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            CampoNombre: "",
            CampoDescripcion: "",
            CampoLatitud: "",
            CampoLongitud: "",
            mapPosition: {
                lat: this.props.center.lat,
                lng: this.props.center.lng
            },
            markerPosition: {
                lat: this.props.center.lat,
                lng: this.props.center.lng
            }
        }
    }

    // state = {
    //     CampoNombre: "",
    //     CampoDescripcion: "",
    //     CampoLatitud: "",
    //     CampoLongitud: ""
    // }

    onMarkerDragEnd = (event) => {
        let newLat = event.latLng.lat(),
            newLng = event.latLng.lng();
        Geocode.fromLatLng(newLat, newLng).then(
            response => {
                var latValue = response.results[0].geometry.location.lat
                var lngValue = response.results[0].geometry.location.lng
                console.log("POSICION")
                console.log(response.results[0].geometry.location.lat)
                console.log(response.results[0].geometry.location.lng)
                this.setState({
                    markerPosition: {
                        lat: latValue,
                        lng: lngValue
                    },
                    mapPosition: {
                        lat: latValue,
                        lng: lngValue
                    },
                    CampoLatitud: latValue,
                    CampoLongitud: lngValue
                })
            },
            error => {
                console.error(error);
            }
        );
    };

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

    // render() {
    //     return (
    //         < div className="UserCreatePlacePageSuccess" >

    //             <MenuNavegacion
    //                 LinkDatosPersonales="LinkInactivo"
    //                 LinkCrearLugar="LinkActivo"
    //                 LinkBorrarLugar="LinkInactivo"
    //                 LinkLugares="LinkInactivo"
    //                 LinkCrearRuta="LinkInactivo"
    //                 LinkBorrarRuta="LinkInactivo"
    //                 LinkRutas="LinkInactivo"
    //                 LinkEliminarCuenta="LinkInactivo"
    //             />


    //             <div className="ObjetivoMenuLateralNuevo">
    //                 <div className="TituloTarget">
    //                     <h1>Crea Un Nuevo Lugar</h1>
    //                 </div>


    //                 <div className="ContenedorCrearLugar">
    //                     <div className="ContenedorLabelsData">
    //                         <div className="OrdenarInformacion">
    //                             <div className="LabelUserData">
    //                                 <label >Lugar:</label>
    //                             </div>
    //                             <input className="InputUserData" onChange={this.handleChange} name="CampoNombre" value={this.state.CampoNombre} />
    //                         </div>

    //                         <div className="OrdenarInformacion">
    //                             <div className="LabelUserData">
    //                                 <label>Descripción:</label>
    //                             </div>
    //                             <input className="InputUserData" onChange={this.handleChange} name="CampoDescripcion" value={this.state.CampoDescripcion} />
    //                         </div>

    //                         <div className="OrdenarInformacion">
    //                             <div className="LabelUserData">
    //                                 <label>Latitud:</label>
    //                             </div>
    //                             <input className="InputUserData" onChange={this.handleChange} name="CampoLatitud" value={this.state.CampoLatitud} />
    //                         </div>

    //                         <div className="OrdenarInformacion">
    //                             <div className="LabelUserData">
    //                                 <label>Longitud:</label>
    //                             </div>
    //                             <input className="InputUserData" onChange={this.handleChange} name="CampoLongitud" value={this.state.CampoLongitud} />
    //                         </div>
    //                     </div>
    //                 </div>

    //                 <div>
    //                     <button className="BotonCrearLugar" onClick={this.handleClick}>Crear Lugar</button>
    //                 </div>
    //             </div>
    //         </div >
    //     );
    // }


    render() {
        const AsyncMap = withScriptjs(
            withGoogleMap(
                props => (


                    
                                <GoogleMap google={this.props.google}
                                    defaultZoom={this.props.zoom}
                                    defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
                                >
                                    <Marker google={this.props.google}
                                        name={'Dolores park'}
                                        draggable={true}
                                        onDragEnd={this.onMarkerDragEnd}
                                        position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
                                    />
                                    <Marker />
                                </GoogleMap>

                        



                   
                )
            )
        );
        let map;
        if (this.props.center.lat !== undefined) {
            map = <div>



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
            


                <AsyncMap
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCOJZ-oU1uV5KmoxNS9zWBr2emcUZWjXUc&libraries=places"
                    loadingElement={
                        <div style={{ height: `100%` }} />
                    }
                    containerElement={
                        <div style={{ height: this.props.height }} />
                    }
                    mapElement={
                        <div style={{ height: `100%` }} />
                    }
                />




                <div>
                    <button className="BotonCrearLugar" onClick={this.handleClick}>Crear Lugar</button>
                </div>
            </div>
        </div > 




               
            </div>
        } else {
            map = <div style={{ height: this.props.height }} />
        }
        return (map)
    }



}

export default UserCreatePlacePageSuccess;