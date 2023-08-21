import './App.css'
import {BaseColaboradores} from '../src/assets/script/BaseColaboradores.js'
import  Listado from './components/Listado.jsx'
import Formulario from './components/Formulario.jsx'
import {useState} from 'react'

import Alerts from './components/Alert'
import Buscador from './components/Buscador'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [dbColaboradores, setDbColaboradores] = useState(BaseColaboradores)
  // Estado Alert
  const [showAlert, setShowAlert] = useState(false);
  // Estado de filtro búsqueda
  const [colaboradorFilter, setColaboradorFilter] = useState(""); 

  // Obtiene listado de colaboradores luego de pasar por el filtro
  const getFilterColaboradores = () => dbColaboradores.filter((colaborador) => (
    colaborador.nombre.includes(colaboradorFilter)
    || colaborador.correo.includes(colaboradorFilter)
    || colaborador.edad.includes(colaboradorFilter)
    || colaborador.cargo.includes(colaboradorFilter)
    || colaborador.telefono.includes(colaboradorFilter)
    ))

  // Setea el valor actualizado en el filtro
  const handleChangeFilterColaborador = (e) => {
    setColaboradorFilter(e.target.value);
  }

  return (
    <>
        <div className='container-filter'>
          <Buscador stateColaboradorFilter={ colaboradorFilter } onChange={ handleChangeFilterColaborador }/>
        </div>
        <Listado
        colaboradores={getFilterColaboradores()}
        
        />

        <Formulario
        colaboradores={dbColaboradores}
        setdbc={setDbColaboradores}
        ></Formulario>

    </>
  )
}

export default App
