import React from 'react';
import IpGraphql from '../../../components/conection/IpGraphql';
import MenuNavegacion from '../../../components/MenuNav/MenuNavegacion';


class UserDeletePlacePageSuccess extends React.Component {


    state = {
        lugares: [],
        ListaRutas: [],
        LugarBorrar: "",
        LugarBorrarRutas: []
    }


    componentWillMount() {
        this.CargarMisLugares()
    }

    async CargarMisLugares() {

        // console.log("EMPIEZA LA CARGA DE LUGARES")
        const url = IpGraphql;

        var query = `
                query {
                    scoreresourceByuser(user_id: ${window.localStorage.user_id}) {
                    content {
                        _id
                        name
                    }
                    }
                }
            `;

        const opts = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query })
        };


        var ResultadoMisLugares = await fetch(url, opts)
        ResultadoMisLugares = await ResultadoMisLugares.json()
        ResultadoMisLugares = ResultadoMisLugares.data.scoreresourceByuser.content
        await this.setState({ lugares: ResultadoMisLugares })
        // console.log("TERMINA LA CARGA DE LUGARES")
    }

    async CargarRutas() {
        // console.log("EMPIEZA CARGAR RUTAS")
        const url = IpGraphql;

        var query = `
        query {
            findTrailsByUser(id: ${window.localStorage.user_id}){
                id
                origintrail
                destinytrail
            }
        }
        `;

        const optsRutas = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query })
        };

        // await console.log("CONSULTA EN FETCH")
        var ResultadoRutas = await fetch(url, optsRutas)
        // await console.log("JSON DEL FETCH")
        ResultadoRutas = await ResultadoRutas.json()
        // await console.log("GUARDANDO EL RESULTADO")
        ResultadoRutas = ResultadoRutas.data.findTrailsByUser
        // await console.log("SETEANDO EL ESTADO")
        await this.setState({ ListaRutas: ResultadoRutas })
        // await console.log("TERMINA LA FUNCION")
        // console.log("TERMINA CARGAR RUTAS")
    }

    async CargarRutasBorrar(lugar) {
        // console.log("EMPIEZA CARGAR RUTAS BORRAR")
        var ResultadoConsulta = []
        for (let index = 0; index < this.state.ListaRutas.length; index++) {
            if (this.state.ListaRutas[index].origintrail === parseInt(lugar) || this.state.ListaRutas[index].destinytrail === parseInt(lugar)) {
                ResultadoConsulta.push(this.state.ListaRutas[index].id)
            }
        }
        this.setState({ LugarBorrarRutas: ResultadoConsulta })
        // console.log("TERMINA CARGAR RUTAS BORRAR")
    }

    async BorrarRuta(ruta) {
        const url = IpGraphql;

        var query = `
                mutation {
                    deleteTrailById(id: "${ruta}"){
                    result
                    }
                }
            `;

        const opts = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query })
        };

        var ResultadoRutas = await fetch(url, opts)
        ResultadoRutas = await ResultadoRutas.json()
        console.log(ResultadoRutas.data)
    }

    async BorrarLugar(lugar) {
        // console.log("EMPIEZA BORRAR LUGAR")
        const url = IpGraphql;

        var query = `
        mutation {
            deleteScoreResource(_id: ${lugar}
            ) {
              content {
                _id
                name
                description
                latitude
                longitude
                user_id
              }
            }
          }
        `;

        const optsLugar = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query })
        };

        var ResultadoRutas = await fetch(url, optsLugar)
        ResultadoRutas = await ResultadoRutas.json()
        ResultadoRutas = ResultadoRutas.deleteScoreResource.content
        // console.log("TERMINA BORRAR LUGAR")
    }

    async clickCargarTodo() {

        // console.log("+++++++++++++++++++++++++++++++++")
        // console.log("CARGA LAS RUTAS")
        await this.CargarRutas()
        // console.log("+++++++++++++++++++++++++++++++++\n\n")



        // console.log("+++++++++++++++++++++++++++++++++")
        // console.log("CARGA LAS RUTAS A BORRAR")
        await this.CargarRutasBorrar(this.state.LugarBorrar)
        // console.log("+++++++++++++++++++++++++++++++++\n\n")



        // console.log("+++++++++++++++++++++++++++++++++")
        // console.log("BORRANDO LAS RUTAS")
        for (let index = 0; index < this.state.LugarBorrarRutas.length; index++) {
            // console.log(this.state.LugarBorrarRutas[index])
            this.BorrarRuta(this.state.LugarBorrarRutas[index]);
        }
        // console.log("+++++++++++++++++++++++++++++++++\n\n")



        // console.log("+++++++++++++++++++++++++++++++++")
        // console.log("BORRANDO EL LUGAR")
        // console.log(this.state.LugarBorrar)
        await this.BorrarLugar(this.state.LugarBorrar)
        // console.log("+++++++++++++++++++++++++++++++++")


        await this.setState({ LugarBorrar: "-1" })

        // console.log("+++++++++++++++++++++++++++++++++")
        // console.log("CARGA DE LUAGRES")
        await this.CargarMisLugares()
        // console.log("+++++++++++++++++++++++++++++++++")
    }

    handleClick = e => {
        this.clickCargarTodo()
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {

        const CargarListaLugares = this.state.lugares.map((lugar) => {
            return (
                <option value={lugar._id}>{lugar.name}</option>
            )
        })

        return (
            < div className="UserDeleteRoutePageSuccess" >
                <MenuNavegacion
                    LinkDatosPersonales="LinkInactivo"
                    LinkCrearLugar="LinkInactivo"
                    LinkBorrarLugar="LinkActivo"
                    LinkLugares="LinkInactivo"
                    LinkCrearRuta="LinkInactivo"
                    LinkBorrarRuta="LinkInactivo"
                    LinkRutas="LinkInactivo"
                    LinkEliminarCuenta="LinkInactivo"
                />

                <div className="ObjetivoMenuLateralNuevo">
                    <div className="TituloTarget">
                        <h1>Borrar un lugar</h1>
                    </div>

                    <div className="OrdenarInformacion">
                        <div className="LabelUserData">
                            <label>Ruta:</label>
                        </div>
                        <select className="InputUserData LugarRutaOrigen" onChange={this.handleChange} name="LugarBorrar" value={this.state.LugarBorrar}>
                            <option value="-1" selected>Seleccionar la lugar...</option>
                            {CargarListaLugares}
                        </select>

                    </div>

                    <div>
                        <button className="BotonCrearLugar" onClick={this.handleClick}>Borrar Lugar</button>
                    </div>
                </div>
            </div >
        );
    }

}

export default UserDeletePlacePageSuccess;