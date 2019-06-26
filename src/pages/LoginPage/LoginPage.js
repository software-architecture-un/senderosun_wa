import React from 'react';
import './LoginPage.css';
import IpGraphql from '../../components/conection/IpGraphql';
import { Link } from 'react-router-dom';

class LoginPage extends React.Component {

    state = {

        CampoUsuario: " ",
        CampoPassword: "",

        data: {
            data: {
                signIn: null
            },
            errors: [{
                message: {
                    content: {},
                    message: "",
                    status: 0

                }
            }]
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleClick = e => {

        const query = `
            mutation {
                signIn(user: {
                    email: "${this.state.CampoUsuario}"
                    password: "${this.state.CampoPassword}"
                }) {
                    content
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
                if (res.data.signIn != null) {
                    console.log(res.data.signIn.content)
                    window.localStorage.setItem('token', res.data.signIn.content)
                    window.localStorage.setItem('email', this.state.CampoUsuario)
                    this.setState({ data: res })
                    console.log(res)
                    window.location.href = '/user-data'
                } else {
                    alert("Error: verificar el usuario y contraseña")
                    window.localStorage.clear()
                }
            })
            .catch(console.log("DATOS INCORRECTOS"))
        // e.preventDefault()
    }

    render() {
        return (
            <div className="LoginPage">
                <div className="CajaLogin">
                    <h1 className="TituloLogin">Iniciar Sesión</h1>
                    <div className="ContenedorCamposLogin">
                        <label className="LabelUsuario">Usuario:</label>
                        <input name="CampoUsuario" onChange={this.handleChange} className="InputUsuario" value={this.state.CampouUario} ></input>
                        <br />
                        <label className="LabelPassword">Contraseña:</label>
                        <input name="CampoPassword" onChange={this.handleChange} className="InputPassword" value={this.state.CampoPassword}  ></input>
                    </div>
                    <div className="BotonesEntrarVolver">
                        <Link onClick={this.handleClick} className="BotonEntrar">Entrar</Link>
                        <Link to="/" onClick={this.handleProbar} className="BotonRegresar" >Regresar</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;