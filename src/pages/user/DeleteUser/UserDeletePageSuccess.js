import React from 'react';
import IpGraphql from '../../../components/conection/IpGraphql';
import './UserDeletePage.css';
import '../../../GeneralStyles.css';
import MenuNavegacion from '../../../components/MenuNav/MenuNavegacion';


class UserDeletePageSuccess extends React.Component {


    state = {
        UsuarioCorreo: "",
        UsuarioDocumento: "",
        DatoInicialCorreo: "",
        DatoInicialDocumento: "",
        RespuestaBorrar: 400
    }

    async CargarDatosIniciales() {
        const url = IpGraphql;

        var query = `
                query {
                    userById(id: ${window.localStorage.user_id}) {
                        content {
                            name
                            document
                            age
                            email
                            password_digest
                        }
                    }
                }         
            `;

        const opts = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query })
        };


        var ResultadoDatos = await fetch(url, opts)
        ResultadoDatos = await ResultadoDatos.json()
        ResultadoDatos = ResultadoDatos.data.userById.content
        await this.setState({
            DatoInicialCorreo: ResultadoDatos.email,
            DatoInicialDocumento: ResultadoDatos.document
        })
    }

    async BorrarCuenta(usuario) {
        const url = IpGraphql;

        var query = `
                mutation {
                    deleteUser(id: ${window.localStorage.user_id}}) {
                    content {
                        id
                        name
                        document
                        age
                        email
                        password_digest
                    }
                    message
                    status
                    }
                } 
            `;

        const opts = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query })
        };


        var ResultadoDatos = await fetch(url, opts)
        ResultadoDatos = await ResultadoDatos.json()
        ResultadoDatos = ResultadoDatos.data.deleteUser.status
        await this.setState({
            RespuestaBorrar: ResultadoDatos
        })
    }

    componentWillMount() {
        this.CargarDatosIniciales()
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value, })
    }

    handleClickExit = e => {
        window.localStorage.clear()
        window.location.href = '/'
    }

    handleClick = e => {
        if (this.state.UsuarioCorreo !== "" && this.state.UsuarioDocumento !== "") {
            if (this.state.DatoInicialCorreo === this.state.UsuarioCorreo && this.state.DatoInicialDocumento === this.state.UsuarioDocumento) {
                this.BorrarCuenta(window.localStorage.user_id)
                if (this.state.RespuestaBorrar !== 200) {
                    alert("El usuario va a hacer eliminado");
                    window.location.href = '/login'
                } else {
                    alert("Error: verificar campos ingresados");
                }

            } else {
                alert("Error: verificar campos ingresados");
            }
        } else {
            alert("Error: verificar campos ingresados");
        }
    }

    render() {
        return (
            < div className="UserDataPageSuccess" >

                <MenuNavegacion
                    LinkDatosPersonales="LinkInactivo"
                    LinkCrearLugar="LinkInactivo"
                    LinkBorrarLugar="LinkInactivo"
                    LinkLugares="LinkInactivo"
                    LinkCrearRuta="LinkInactivo"
                    LinkBorrarRuta="LinkInactivo"
                    LinkRutas="LinkInactivo"
                    LinkEliminarCuenta="LinkActivo"
                />

                <div className="ObjetivoMenuLateralNuevo">

                    <div className="TituloTarget">
                        <h1>¿Estas seguro de eliminar la cuenta?</h1>
                    </div>

                    <div className="ContenedorLabelsData">
                        <div className="OrdenarInformacion">
                            <div className="LabelUserData">
                                <label >Correo:</label>
                            </div>
                            <input className="InputUserData" onChange={this.handleChange} name="UsuarioCorreo" value={this.state.UsuarioCorreo} />
                        </div>

                        <div className="OrdenarInformacion">
                            <div className="LabelUserData">
                                <label>Documento:</label>
                            </div>
                            <input className="InputUserData" onChange={this.handleChange} name="UsuarioDocumento" value={this.state.UsuarioDocumento} />
                        </div>
                    </div>
                    <button onClick={this.handleClick} className="BotonEliminarCuenta">ELIMINAR CUENTA</button>
                </div>
            </div >
        )
    }
}
export default UserDeletePageSuccess;