import React from 'react';
import './RegisterPage.css';
import DirectionGraphq from '../../components/conection/IpGraphql';

class RegisterPage extends React.Component {

    state = {
        // CampoEdad:0
    }

    handleClick = e => {

        console.log("=====================================================================")
        console.log("--> ESTO ES PARA REGISTRARSE")

       
        const query = `
            mutation {
                createUser(user: {
                name:"${this.state.CampoNombre}"
                document:"${this.state.CampoIdentificacion}"
                age:${this.state.CampoEdad}
                email: "${this.state.CampoEmail}"
                password: "${this.state.CampoPassword}"
                }) {
                content {
                    name
                    document
                    age
                    email
                    password_digest
                }
                message
                }
            }
        `;


        const url = DirectionGraphq;
        const opts = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query })
        };

        fetch(url, opts)
            .then(res => res.json())
            .then(console.log)
            .catch(console.error);
        console.log("=====================================================================\n\n")

        e.preventDefault();
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })

    }

    handleCrearCuenta = e => {
        e.preventDefault();
    }

    render() {
        return (
            <div className="RegisterPage">
                <div className="CajaRegistro">
                    <h1 className="TituloRegistro">Registro</h1>

                    <div className="ContenedorCamposRegistro">
                        <label className="LabelRegistroNombre">Nombre:</label>
                        <br />
                        <input onChange={this.handleChange} name="CampoNombre" className="InputRegistroNombre" value={this.state.CampoNombre} />
                        <br />
                        <br />
                        <label className="LabelRegistroIdentificacion">Identificación:</label>
                        <br />
                        <input onChange={this.handleChange} name="CampoIdentificacion" className="InputRegistroIdentificacion" value={this.state.CampoIdentificacion} />
                        <br />
                        <br />
                        <label className="LabelRegistroEdad">Edad:</label>
                        <br />
                        <input onChange={this.handleChange} name="CampoEdad" className="InputRegistroEdad"  value={this.state.CampoEdad} />
                        <br />
                        <br />
                        <label className="LabelRegistroGenero">Correo electrónico:</label>
                        <br />
                        <input onChange={this.handleChange} name="CampoEmail" className="InputRegistroGenero" value={this.state.CampoEmail} />                        <br />
                        <br />
                        <label className="LabelRegistroPassword">Contraseña:</label>
                        <br />
                        <input onChange={this.handleChange} name="CampoPassword" className="InputRegistroPassword"  value={this.state.CampoPassword} />
                        <br />
                        <br />
                        <label className="LabelRegistroConfirmarPassword">Confirmar contraseña:</label>
                        <br />
                        <input onChange={this.handleChange} name="CampoConfirmarPassword" className="InputRegistroConfirmarPassword" value={this.state.CampoConfirmarPassword} />
                        <br />
                        <br />

                    </div>

                        <div className="BotonesCrearVolver">
                            <a onClick={this.handleClick}  href="/" className="BotonCrear">Crear Cuenta</a>
                            <a className="BotonRegistroRegresar" href="/">Volver</a>
                        </div>
                </div>

            </div>
        );
    }
}

export default RegisterPage;