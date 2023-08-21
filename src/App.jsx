import './App.css'
import {BaseColaboradores} from '../src/assets/script/BaseColaboradores.js'
import  Listado from './components/Listado.jsx'
import Formulario from './components/Formulario.jsx'
import {useState} from 'react'


function App() {

  const [dbColaboradores, setDbColaboradores] = useState(BaseColaboradores)
console.log(dbColaboradores)
  return (
    <>
        <Listado
        colaboradores={dbColaboradores}
        
        />

        <Formulario
        colaboradores={dbColaboradores}
        setdbc={setDbColaboradores}
        ></Formulario>

    </>
  )
}

export default App
