/* eslint-disable react/prop-types */
import { useEffect } from "react";
import './FloatingInput.css'

// Input dinamico con label flotante (Requiere FontAwesome)
const FloatingInput = (props) => {
    const {id, type, name, label, value, validate=null, stateShowPassword=null, stateSetShowPassword=null, inputColorHex="#B0BEC5" } = props;
    let { onChange=null } = props;

    /* #region Color Input */

    useEffect(() => {
        document.documentElement.style.setProperty("--background-label", inputColorHex);
        document.documentElement.style.setProperty("--border-input", inputColorHex);
    }, [inputColorHex]);

    /* #endRegion */

    /* #region Password */

    // Actualiza state para los input password
    useEffect(() => {
        type == "password" ? !findExistInputPassword(id) ? stateSetShowPassword([...stateShowPassword, {key: id, value: type, data: "fa-regular fa-eye-slash"}]) : null : null
    });

    // Obtiene el index según id
    const getIndexInputPassword = (id) => stateShowPassword == null ? -1 : stateShowPassword.findIndex((element) => element.key == id);
    // Valida la existencia de un input password
    const findExistInputPassword = (id) =>  getIndexInputPassword(id) == -1 ? false : true;
    // Obtiene type según index
    const findActuallyTypeInputPassword = (id) => stateShowPassword[getIndexInputPassword(id)].value;
    // Obtiene data según index
    const findDataInputPassword = (id) => stateShowPassword[getIndexInputPassword(id)].data;
    // Realiza cambio de estado para los Input Password (ver/ocultar contraseña)
    const handleClickViewPassword = (e) => {
        stateSetShowPassword(stateShowPassword.map((element) => {
            // Si el elemento no existe hace skip
            if (element.key != e.target.getAttribute("data-value")) return element
            
            // Condición
            let condition = element.value == "password" 
            
            // Cambio de elementos
            element.value = condition ? "text" : "password";
            element.data = condition ? "fa-regular fa-eye-slash" : "fa-regular fa-eye"
            
            return element
        }))
    }

    /* #endRegion */ 

    /* #region Function Input - Label */

    // Clase para Input
    const getInputClassName = () => `${ validate == null ? "" : validate ? "validateInput" : "notValidateInput"}`.trim();
    // Clase para Label
    const getLabelClassName = () => validate == null ? "" : validate ? "validateLabel" : value.lenght == 0 ? undefined : "notValidateLabel".trim();

    /* #endRegion */

    return (
        <>
            <div className="box-floating-input">
                <input
                    // Id de input
                    id={ id }
                    // Typo de input
                    type={ !findExistInputPassword(id) ? type : findActuallyTypeInputPassword(id) }
                    // Placeholder (para validaciones)
                    placeholder=" "
                    // Autocomplete
                    autoComplete="off"
                    // Nombre del input
                    name={ name }
                    // Valor actual del input
                    value={ value }
                    // Clase asociada al input
                    className={ getInputClassName() }
                    // Evento onchange
                    {...onChange != null ? onChange={onChange} : null }
                />
                {/* Span => Label */}
                <span className={ getLabelClassName() }>{ label }</span>
                {/* En caso de ser un input password aparece botón para ver contraseña */}
                {type != "password" ? undefined : <i className={ findDataInputPassword(id) } data-value={ id } onClick={ handleClickViewPassword }></i> }
            </div>
        </>
    );
};

export default FloatingInput;