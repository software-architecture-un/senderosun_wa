import React from 'react';
import DirectionGraphq from '../../components/conection/IpGraphql';

class PruebaSoap extends React.Component{
  state= {
    CampoUsername:"",
    value:""
  }

  handleClick = e =>{
    console.log('--> PRUEBA SOAP')
    const query = `
      mutation{
        getCountFiles(username:{
          username: "${this.state.CampoUsername}"
        }){
          value
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
        .then(res => {
            if(this.state.CampoUsername.length!==0 ){
              alert(`Se ha realizado la prueba de SOAP al grupo C => value: ${res.data.getCountFiles.value}`);
              console.log(res.data.getCountFiles);
            }else{
              alert("Error: verificar campo ingresado");
            }              
        })
         
        .catch(console.error);      
  }

  handleChange = e => {
    this.setState({
        [e.target.name]: e.target.value,
    })

  }

  render(){
    const MiSoap = this.state.value
    return(
      <div className="PruebaSoap">
        <h1>Prueba SOAP</h1>
        <label>username</label>
        <input onChange={this.handleChange} name="CampoUsername" value={this.state.CampoUsername}/> 
        <div>
            <button onClick={this.handleClick}>Comprobar Soap</button>            
        </div> 
        {MiSoap}
      </div>
    );
  }
}
export default PruebaSoap;