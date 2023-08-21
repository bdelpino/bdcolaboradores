/* eslint-disable react/prop-types */
import FloatingInput from './FloatingInput'

// Componente que permite realizar ingreso de datos por teclado
// para búsqueda de datos en listado
const Buscador = (props) => {
    const { stateColaboradorFilter } = props;
    let { onChange } = props;

    // Configuración Input Filter
    const colaboradorInputValue = { key: "findColaborador", 
                                    type: "text", 
                                    label: "Buscar Colaborador", 
                                    name: "colaborador", 
                                    id: "txtColaborador"
                                }

    return (
        <>
            <FloatingInput 
                // Valores del input
                { ...colaboradorInputValue } 
                // Validacion
                validate={ null } 
                // Valor actual
                value={ stateColaboradorFilter }
                // State de password 
                stateShowPassword={ null } 
                // Set State de password
                stateSetShowPassword={ null } 
                // Color de input
                inputColorHex={ "#9CCC65" } 
                // Evento onchange
                onChange={ onChange }
            />
        </>
    );
};

export default Buscador;