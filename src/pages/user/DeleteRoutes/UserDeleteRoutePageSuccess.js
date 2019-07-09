import React from 'react';
import MenuNavegacion from '../../../components/MenuNav/MenuNavegacion';
import '../../../GeneralStyles.css';
import './UserDeleteRoutePage.css';
import IpGraphql from '../../../components/conection/IpGraphql';

class UserDeletePlacePageSuccess extends React.Component {

    state = {
        ListaRutas: [],
        RutaBorrar: "-1"
    }


    componentWillMount() {
        // console.log("WIL MOUNT")
        const query = `
                query {
                    findTrailsByUser(id: ${window.localStorage.user_id}){
                    id
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

        (fetch(url, opts)
            .then(res => res.json())
            .then(res => { this.setState({ ListaRutas: res.data.findTrailsByUser }) })
            .catch(error => { this.setState({ errors: error }) }))
    }


    async SeleccionarRutaBorrar() {

        if (this.state.RutaBorrar !== "-1") {
            // console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
            // console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

            var query = `
                mutation {
                    deleteTrailById(id: "${this.state.RutaBorrar}"){
                    result
                    }
                }
            `;

            const url = IpGraphql;
            const optsDel = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ query })
            };

            var ResultadoBorrarRuta = await fetch(url, optsDel)
            ResultadoBorrarRuta = await ResultadoBorrarRuta.json()
            ResultadoBorrarRuta = ResultadoBorrarRuta.data

            // console.log(ResultadoBorrarRuta)

            // console.log("HOLA MUNDO")

            // console.log(this.state.RutaBorrar)

            alert("Se ha eliminado la ruta satisfactoriamente")

            this.setState({ RutaBorrar: "-1" })

            // ==================================================================================

            query = `
            query {
                findTrailsByUser(id: ${window.localStorage.user_id}){
                    id
                        nametrail
                        origintrail
                        destinytrail
                    }
                }
                `;

            const opts = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ query })
            };

            (fetch(url, opts)
                .then(res => res.json())
                .then(res => { this.setState({ ListaRutas: res.data.findTrailsByUser }) })
                .catch(error => { this.setState({ errors: error }) }))

            // console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
            // console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
        } else {
            alert("Por favor seleccione una ruta para eliminar");
        }

    }



    handleClick = e => {
        this.SeleccionarRutaBorrar()
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {

        const CargarListaRutas = this.state.ListaRutas.map((ruta) => {
            return (
                <option value={ruta.id}>{ruta.nametrail}</option>
            )
        })
        return (
            < div className="UserDeleteRoutePageSuccess" >
                {/* {console.log("COMPONENTE")} */}
                <MenuNavegacion
                    LinkDatosPersonales="LinkInactivo"
                    LinkCrearLugar="LinkInactivo"
                    LinkBorrarLugar="LinkInactivo"
                    LinkLugares="LinkInactivo"
                    LinkCrearRuta="LinkInactivo"
                    LinkBorrarRuta="LinkActivo"
                    LinkRutas="LinkInactivo"
                    LinkEliminarCuenta="LinkInactivo"
                />

                <div className="ObjetivoMenuLateralNuevo">
                    <div className="TituloTarget">
                        <h1>Borrar una ruta</h1>
                    </div>

                    <div className="OrdenarInformacion">
                        <div className="LabelUserData">
                            <label>Ruta:</label>
                        </div>
                        <select className="InputUserData LugarRutaOrigen" onChange={this.handleChange} name="RutaBorrar" value={this.state.RutaBorrar}>
                            <option value="-1" selected>Seleccionar la ruta...</option>
                            {CargarListaRutas}
                        </select>

                    </div>

                    <div>
                        <button className="BotonCrearLugar" onClick={this.handleClick}>Borrar Ruta</button>
                    </div>
                </div>
            </div >
        );
    }
}

export default UserDeletePlacePageSuccess;