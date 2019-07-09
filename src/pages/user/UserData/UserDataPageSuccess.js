import React from 'react';
import IpGraphql from '../../../components/conection/IpGraphql';
import './UserDataPage.css';
import '../../../GeneralStyles.css';
import MenuNavegacion from '../../../components/MenuNav/MenuNavegacion';
import { Permisos } from '../../../components/firebase/push-notification';
import ImagenUser from '../../../images/user.png';

class UserDataPageSuccess extends React.Component {

    state = {

    }

    componentWillMount() {  
        console.log('empieza permiso')      
        this.cargarPermiso()
        console.log('termina permiso')
        const query = `
            mutation {
                userByEmail(email: { email: "${window.localStorage.email}" }){
                    content {
                        id
                        name
                        document
                        age
                        email
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
                window.localStorage.setItem('user_id', res.data.userByEmail.content.id)
                window.localStorage.setItem('name', res.data.userByEmail.content.name)
                this.setState({
                    name: res.data.userByEmail.content.name,
                    age: res.data.userByEmail.content.age,
                    document: res.data.userByEmail.content.document,
                    email: res.data.userByEmail.content.email,
                    id: res.data.userByEmail.content.id,
                })            
            })
            .catch(error => {
                this.setState({ errors: error })
            }))
    }

    cargarPermiso = () => {
        Permisos()   
    }

    render() {        
        return (
            < div className="UserDataPageSuccess" >
                {/* {Permisos()} */}

                <MenuNavegacion
                    LinkDatosPersonales="LinkActivo"
                    LinkCrearLugar="LinkInactivo"
                    LinkBorrarLugar="LinkInactivo"
                    LinkLugares="LinkInactivo"
                    LinkCrearRuta="LinkInactivo"
                    LinkBorrarRuta="LinkInactivo"
                    LinkRutas="LinkInactivo"
                    LinkEliminarCuenta="LinkInactivo"
                />


                <div className="ObjetivoMenuLateralNuevo">
                    <div className="TituloTarget">
                        <h1>Datos Personales</h1>
                    </div>

                    {/* <div className="ContenedorDatosPersonales"> */}
                    <div className="ContenedorLabelsData">
                        <div className="OrdenarInformacion">
                            <div className="LabelUserData">
                                <label>Id Usuario:</label>
                            </div>
                            <input className="InputUserData" value={this.state.id} disabled />
                        </div>

                        <div className="OrdenarInformacion">
                            <div className="LabelUserData">
                                <label>Nombre:</label>
                            </div>
                            <input className="InputUserData" value={this.state.name} disabled />
                        </div>

                        <div className="OrdenarInformacion">
                            <div className="LabelUserData">
                                <label>Documento:</label>
                            </div>
                            <input className="InputUserData" value={this.state.document} disabled />
                        </div>

                        <div className="OrdenarInformacion">
                            <div className="LabelUserData">
                                <label>Age:</label>
                            </div>
                            <input className="InputUserData" value={this.state.age} disabled />
                        </div>

                        <div className="OrdenarInformacion">
                            <div className="LabelUserData">
                                <label> Correo:</label>
                            </div>
                            <input className="InputUserData" value={this.state.email} disabled />
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default UserDataPageSuccess;