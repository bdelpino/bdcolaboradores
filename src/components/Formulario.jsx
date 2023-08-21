//src/components/Formulario.jsx
import {useState} from 'react'

const Formulario = ({colaboradores,setdbc, stateSetShowAlert}) =>    {

                                const [nombre,setNombre] = useState("")
                                const [email,setEmail] = useState("")
                                const [edad,setEdad] = useState("")
                                const [cargo,setCargo] = useState("")
                                const [telefono,setTelefono] = useState("")

                                //const [colaboradoresOriginales,setColaboradoresOriginales] = useState(colaboradores)


                                //INICIO VALIDACIÓN DE FORMULARIO//
                                const ValidarFormulario = (e) =>    {
                                                                        e.preventDefault()

                                                                        if (nombre == "" || email=="" || edad=="" || cargo=="" || telefono=="")  
                                                                        
                                                                            {
                                                                                console.log('Por favor completar los campos')
                                                                                stateSetShowAlert(false);
                                                                            }
                                                                        
                                                                        else    {
                                                                                    setdbc([...colaboradores,
                                                                                        {   id: (Math.max(...colaboradores.map((colaborador) => colaborador.id)) + 1).toString(), //CALCULA ID DE FORMULARIO,
                                                                                            nombre: nombre,
                                                                                            correo: email,
                                                                                            edad: edad,
                                                                                            cargo: cargo,
                                                                                            telefono:telefono,
                                                                                        }])

                                                                                    console.log('Limpiando Formulario')

                                                                                    setNombre("")
                                                                                    setEmail("")
                                                                                    setEdad("")
                                                                                    setCargo("")
                                                                                    setTelefono("")
                                                                                    stateSetShowAlert(true);
                                                                                }


                                                                    }

                                //FIN VALIDACIÓN DE FORMULARIO//



                                return  (
                                            
                                            <div>
                                                    <h1>Agregar Colaborador</h1>
                                                    <form onSubmit={ValidarFormulario} className='form-box'>
                                                            <input name="nombre" type="text" placeholder="Nombre del colaborador" onChange={(e) => {setNombre(e.target.value)}} value={nombre} className="form-control"></input>

                                                            <input name="email" type="text" placeholder="Email del colaborador"onChange={(e) => {setEmail(e.target.value)}}value={email} className="form-control" ></input>

                                                            <input name="edad" type="text" placeholder="Edad del colaborador"onChange={(e) => {setEdad(e.target.value)}}value={edad} className="form-control"></input>

                                                            <input name="cargo" type="text" placeholder="Cargo del Colaborador"onChange={(e) => {setCargo(e.target.value)}}value={cargo} className="form-control"></input>

                                                            <input name="telefono" type="text" placeholder="Teléfono del Colaborador"onChange={(e) => {setTelefono(e.target.value)}} value={telefono} className="form-control"></input>

                                                            <button className="btn" type="submit">Agregar</button>
                                                    </form>
                                            </div>
                                        )






                            }

export default Formulario