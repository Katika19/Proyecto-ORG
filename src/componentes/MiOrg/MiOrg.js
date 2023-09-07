import { useState } from 'react';
import './MiOrg.css';

// Estado - hooks 
// useState ()
// const [nombreVariable, funcionActualizada] = useState(valorInicial)

const MiOrg = (props) => {
    console.log(props)

    // const [mostrar, actualizarMostrar] = useState(true)
    // const manejarClick = () => {
    //     console.log("Mostrar/Ocultar Elemento", !mostrar)
    //     actualizarMostrar(!mostrar)
    //}

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/Add.png"alt="Añadir" onClick={props.cambiarMostrar}/>
        </section>
}

export default MiOrg