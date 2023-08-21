import './App.css'
import {BaseColaboradores} from '../src/assets/script/BaseColaboradores.js'
import  Listado from './components/Listado.jsx'
import Formulario from './components/Formulario.jsx'
import {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Alerts from './components/Alert'
import Buscador from './components/Buscador'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [dbColaboradores, setDbColaboradores] = useState(BaseColaboradores)
  // Estado Alert
  const [showAlert, setShowAlert] = useState(null);
  // Estado de filtro búsqueda
  const [colaboradorFilter, setColaboradorFilter] = useState(""); 

  // Obtiene listado de colaboradores luego de pasar por el filtro
  const getFilterColaboradores = () => dbColaboradores.filter((colaborador) => (
    colaborador.nombre.toLocaleLowerCase().includes(colaboradorFilter.toLocaleLowerCase())
    || colaborador.correo.toLocaleLowerCase().includes(colaboradorFilter.toLocaleLowerCase())
    || colaborador.edad.toLocaleLowerCase().includes(colaboradorFilter.toLocaleLowerCase())
    || colaborador.cargo.toLocaleLowerCase().includes(colaboradorFilter.toLocaleLowerCase())
    || colaborador.telefono.toLocaleLowerCase().includes(colaboradorFilter.toLocaleLowerCase())
    ))

  // Setea el valor actualizado en el filtro
  const handleChangeFilterColaborador = (e) => {
    setColaboradorFilter(e.target.value);
  }

  return (
    <>
        <Container className='container-root'>
          <h1>Lista de Colaboradores</h1>
          <div className='container-filter'>
            <Buscador stateColaboradorFilter={ colaboradorFilter } onChange={ handleChangeFilterColaborador }/>
          </div>
          
          <div className="container-list">
            <Listado
            colaboradores={getFilterColaboradores()}
            />
          </div>

          <div className="container-form">
            <Formulario
              colaboradores={dbColaboradores}
              setdbc={setDbColaboradores}
              stateSetShowAlert={ setShowAlert }
            />
            { showAlert == null ? undefined : <Alerts typeAlert={ showAlert }/>}
          </div>
          
            
            
        </Container>

        

    </>
  )
}

export default App
