//src/components/Listado.jsx

import Table from 'react-bootstrap/Table'
import {useState} from 'react'

const Listado = ({colaboradores}) =>   {
                        
                                            //const [colaboradoresOriginales,setColaboradoresOriginales] = useState(colaboradores)

                                            

                                            return  (

                                                                <div>
                                                                        <Table striped bordered hover responsive>
                                                                                                        <thead>
                                                                                                                <tr>
                                                                                                                    <th>Nombre</th>
                                                                                                                    <th>Correo</th>
                                                                                                                    <th>Edad</th>
                                                                                                                    <th>Cargo</th>
                                                                                                                    <th>Teléfono</th>
                                                                                                                </tr>
                                                                                                        </thead>
                                                                                                        <tbody>
                                                                                                                

                                                                                                                        {colaboradores.map(colaborador => 
                                                                                                                        
                                                                                                                        <tr key={colaborador.id}>
                                                                                                                                <td>{colaborador.nombre}</td>
                                                                                                                                <td>{colaborador.correo}</td>
                                                                                                                                <td>{colaborador.edad}</td>
                                                                                                                                <td>{colaborador.cargo}</td>
                                                                                                                                <td>{colaborador.telefono}</td>
                                                                                                                        </tr>
                                                                                                                        )}
                                                                                                                

                                                                                                        </tbody>
                                                                        </Table>
                                                        </div>
                                            
                                            

                                                    )

                        }

export default Listado