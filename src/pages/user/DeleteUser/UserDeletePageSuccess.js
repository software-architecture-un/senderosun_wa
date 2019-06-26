import React from 'react';

class UserDeletePageSuccess extends React.Component {

    handleClick = e => {
        window.localStorage.clear()
        window.location.href = '/'
    }

    render() {
        return (
            < div className="UserDataPageSuccess" >
                <div className="BarraMenuLateral">
                    <div className="MiniDatoUsuario">
                        <img className="FotoPerfil" width="160" height="160" alt=""></img>
                        <h2 className="NombreUsuario">Fulanito Perez</h2>
                    </div>
                    <div className="OpcionMenu">
                        <h2 className="NombreMenu DatosPersonales">MODIFICAR DATOS</h2>
                    </div>
                    <div className="OpcionMenu">
                        <h2 className="NombreMenu CrearListas">CREAR LISTAS</h2>
                    </div>
                    <div className="OpcionMenu">
                        <h2 className="NombreMenu VerListas">VER LISTAS</h2>
                    </div>
                    <div className="OpcionMenu">
                        <h2 className="NombreMenu  Lugares">LUGARES</h2>
                    </div>
                    <div className="OpcionMenu">
                        <h2 className="NombreMenu EliminarCuenta">ELIMINAR CUENTA</h2>
                    </div>
                    <button onClick={this.handleClick} className="OpcionMenu">
                        <h2 className="NombreMenu CerrarSesion">SALIR</h2>
                    </button>
                </div>
                <div className="ObjetivoMenuLateral">
                    <h1> ¿ ESTA SEGURO QUE DESEA ELIMINAR LA CUENTA ?</h1>

                    <div>
                        <label>CONTRASEÑA</label>
                        <br />
                        <input />
                    </div>
                    <br />
                    <br />
                    <br />
                    <div>
                        <label>CONTRASEÑA</label>
                        <br />
                        <input />
                    </div>
                    <br />
                    <br />
                    <br />
                    <button>ELIMINAR CUENTA</button>
                </div>
            </div >
        )
    }
}
export default UserDeletePageSuccess;