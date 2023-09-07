import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton/Boton"

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (event) => {
        event.preventDefault()
        console.log("Manejar el envío")
        let datosAEnviar = {
            nombre:nombre, // es igual que escribir nombre solo
            puesto:puesto,
            foto:foto,
            equipo:equipo
        }
        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (evento) => {
       evento.preventDefault()
       crearEquipo({ titulo, colorPrimario: color }) // es igual que escribir titulo:titulo
    }
    
    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTexto 
            titulo="Nombre" 
            placeholder="Ingrese Nombre" 
            required 
            valor={nombre}
            actualizarValor={actualizarNombre}
            />
            <CampoTexto 
            titulo="Puesto" 
            placeholder="Ingrese Puesto" 
            required
            valor={puesto}
            actualizarValor={actualizarPuesto}
            />
            <CampoTexto 
            titulo="Foto" 
            placeholder="Ingresar Enlace Foto" 
            required
            valor={foto}
            actualizarValor={actualizarFoto}
            />
            <ListaOpciones
            valor={equipo}
            actualizarEquipo={actualizarEquipo}
            equipos={props.equipos}
            />
            <Boton texto="Crear" />
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo</h2>
            <CampoTexto 
            titulo="Titulo" 
            placeholder="Ingrese Titulo" 
            required 
            valor={titulo}
            actualizarValor={actualizarTitulo}
            />
            <CampoTexto 
            titulo="Color" 
            placeholder="Ingrese Código #Color" 
            required
            valor={color}
            actualizarValor={actualizarColor}
            type="color"
            />
            <Boton texto="Registrar Equipo" />
        </form>
        </section>
}

export default Formulario