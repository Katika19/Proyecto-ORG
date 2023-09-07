import "./ListaOpciones.css"

    //Metodo Map: -> arreglo.map( (equipo, index) => {
    //                  return <option></option>
    //               })

    const ListaOpciones = (props) => {
    
    const manejarCambio = (e) => {
        console.log("Cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
            {props.equipos.map((equipo, index) => {
                return <option key={index} value={equipo}>{equipo}</option>
        })}    
        </select>
           </div>
}
    // Para reducir el código: {equipos.map((equipo, index) => <option key={index}>{equipo}</option>)}         
    
export default ListaOpciones