/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';

// Componente que muestra una alerta dependiendo de un estado (true: success , false: danger)
const Alerts = (props) => {
    const { typeAlert=false } = props;

    // Estado de la alerta (Color, Mensaje)
    const [stateAlert, setStateAlert] = useState({ color: "" , message: ""})

    // Renderización en caso de cambio de tipo de alerta
    useEffect(() => {
        setStateAlert({color: typeAlert ? 'success' : 'danger', message: typeAlert ? "Colaborador Agregado!" : "Completa todos los campos!"})
    }, [typeAlert])

    return (
        <>
            { 
                <Alert key={ stateAlert.color } variant={ stateAlert.color } >
                    { stateAlert.message }
                </Alert>
            }
        </>
    );
};

export default Alerts;
