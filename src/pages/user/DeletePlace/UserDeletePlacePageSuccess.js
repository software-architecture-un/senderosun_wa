import React from 'react';
import MenuNavegacion from '../../../components/MenuNav/MenuNavegacion';
import '../../../GeneralStyles.css';
import './UserDeletePlacePage.css';

class UserDeletePlacePageSuccess extends React.Component {


    render() {
        return (
            < div className="UserDeletePlacePageSuccess" >

                <MenuNavegacion
                    LinkDatosPersonales="LinkInactivo"
                    LinkCrearLugar="LinkInactivo"
                    LinkLugares="LinkInactivo"
                    LinkCrearRuta="LinkInactivo"
                    LinkBorrarRuta="LinkActivo"
                    LinkRutas="LinkInactivo"
                    LinkEliminarCuenta="LinkInactivo"
                />

                <div className="ObjetivoMenuLateralNuevo">
                    <div className="TituloTarget">
                        <h1>Borar una ruta</h1>
                    </div>


                    <div className="ContenedorCrearLugar">
                        {/*  */}
                        {/*  */}
                        {/*  */}
                        {/*  */}
                        {/*  */}
                        <div>
                            <h1>MENU DERECHA</h1>
                        </div>
                    </div>

                    <div>
                        <button className="BotonCrearLugar" onClick={this.handleClick}>Borar Ruta</button>
                    </div>
                </div>
            </div >
        );
    }
}

export default UserDeletePlacePageSuccess;