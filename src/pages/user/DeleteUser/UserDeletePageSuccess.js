import React from 'react';
import IpGraphql from '../../../components/conection/IpGraphql';
import './UserDeletePage.css';
import '../../../GeneralStyles.css';
import MenuNavegacion from '../../../components/MenuNav/MenuNavegacion';


class UserDeletePageSuccess extends React.Component {


    handleClickExit = e => {
        window.localStorage.clear()
        window.location.href = '/'
    }
    render() {
        return (
            < div className="UserDataPageSuccess" >

                <MenuNavegacion
                    LinkDatosPersonales="LinkInactivo"
                    LinkCrearLugar="LinkInactivo"
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
                                <label>Pass:</label>
                            </div>
                            <input className="InputUserData" />
                        </div>

                        <div className="OrdenarInformacion">
                            <div className="LabelUserData">
                                <label>Conf pass:</label>
                            </div>
                            <input className="InputUserData" />
                        </div>
                    </div>
                    <button className="BotonEliminarCuenta">ELIMINAR CUENTA</button>
                </div>
            </div >
        )
    }
}
export default UserDeletePageSuccess;