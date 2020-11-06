import React,{ useState} from 'react'
import AC from './images/AC.png'
import AL from './images/AL.png'
import AM from './images/AM.png'
import AP from './images/AP.png'
import BA from './images/BA.png'
import CE from './images/CE.png'
import ES from './images/ES.png'
import GO from './images/GO.png'
import MA from './images/MA.png'
import MG from './images/MG.png'
import MS from './images/MS.png'
import MT from './images/MT.png'
import PA from './images/PA.png'
import PE from './images/PE.png'
import PI from './images/PI.png'
import PR from './images/PR.png'
import RJ from './images/RJ.png'
import RN from './images/RN.png'
import RO from './images/RO.png'
import RR from './images/RR.png'
import RS from './images/RS.png'
import SC from './images/SC.png'
import SE from './images/SE.png'
import SP from './images/SP.png'
import TO from './images/TO.png'
import './App.css';

function App() {

  const[search, setSearch] = useState('');
  const[countryData,setcountryData]= useState();

  

  const handleSubmit =(event)=>{
    event.preventDefault();
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados//${search}`)
    .then(Response=> Response.json())
    .then(CountryResponse => setcountryData(CountryResponse));
  }

  console.log(countryData)
  console.log(search)
  const handleChange = (event) =>{
    
    setSearch(event.target.value)
  }
  
  return (
    <div>
      <h1 > Digite a UF a ser buscada: (ex: SP) </h1>
      <form onSubmit={handleSubmit}>
        <div >
          <label>Busca por Estado </label>
          <div >
            <input 
              type="text" 
              required
              value={search}
              onChange={handleChange}
              />
            <span>
              <button type="submit" >
                Buscar
              </button>
            </span>
          </div>
        </div>
      </form>
      <div>  
        {!countryData  &&(
          <div>
            <h2> Nome Estado: </h2>
            <h2> Nome  da Regiao: </h2>
          </div>
        )}
        {(countryData && !countryData.nome) &&( 
          <h9>Dados não encontrados: insira novamente</h9>
        )}
        {(countryData && countryData.nome )&& (
          <div>
            <h2> Nome  Estado : {countryData.nome}</h2>
            <h2>Nome da Regiao: {countryData.regiao.nome} </h2>
            <div>
              <img src={CE} alt="ceara" height="200px"/>
            </div>
          </div>  
        )}
      </div>
        
    </div>  
  );
}

export default App;
