import { useState } from 'react';
import './App.css';
import Header from './componentes/header/header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg/MiOrg'; 
import Equipo from './componentes/Equipo/Equipo';
import Footer from './componentes/Footer/Footer';
import { v4 as uuid } from "uuid";

// Ternario --> condicion ? seMuestra: noSeMuestra
// Otra Forma: condicion && seMuestra

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([
  { 
    id: uuid(),
    equipo:"Front End",
    foto:"https://github.com/harlandlohora.png",
    nombre:"Harland Lohora",
    puesto:"Instructor",
    fav: true
  },
  {
    id: uuid(),
    equipo:"Programación",
    foto:"https://github.com/JeanmarieAluraLatam.png",
    nombre:"Genesys Rondón",
    puesto:"Desarrolladora de Software e Instructora",
    fav: false
  },
  {
    id: uuid(),
    equipo:"UX y Diseño",
    foto:"https://github.com/JeanmarieAluraLatam.png",
    nombre:"Jeanmarie Quijada",
    puesto:"Instructora",
    fav: false
  },
  {
    id: uuid(),
    equipo:"Programación",
    foto:"https://github.com/christianpva.png",
    nombre:"Christian Velasco",
    puesto:"Instructor",
    fav: false
  },
  {
    id: uuid(),
    equipo:"Innovación y Gestión",
    foto:"https://github.com/JoseDarioGonzalezCha.png",
    nombre:"José Gonzalez",
    puesto:"Dev FullStack",
    fav: false
  },
  ])

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo:"Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    }
    ,
    {
      id: uuid(),
      titulo:"Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF" 
    }
    ,
    {
      id: uuid(),
      titulo:"Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2" 
    }
    ,
    {
      id: uuid(),
      titulo:"Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    }
    ,
    {
      id: uuid(),
      titulo:"UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    }
    ,
    {
      id: uuid(),
      titulo:"Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    }
    ,
    {
      id: uuid(),
      titulo:"Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ])
 
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  const registrarColaborador = (colaborador) =>{
    console.log("Nuevo colaborador", colaborador)
    actualizarColaboradores([...colaboradores, colaborador]) //Spread Operator
  }

  const eliminarColaborador = (id) =>{
    console.log("Eliminar Colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !==id)
    actualizarColaboradores(nuevosColaboradores)
  }

  const actualizarColor = (color, id) =>{
    console.log("Actualizar: ", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id){
        equipo.colorPrimario = color
      }
    return equipo
    })
    actualizarEquipos(equiposActualizados)
  }
  
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid() }]) // los tres puntos indican copia de 
  }

  const like =(id) => {
    console.log("Me gusta", id)
    const colaboradoresActualizados = colaboradores.map ((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
    <Header />
    
    {/* {mostrarFormulario && <Formulario /> } */}
    { mostrarFormulario === true ? <Formulario equipos={equipos.map((equipo) => equipo.titulo)} 
      registrarColaborador={registrarColaborador}
      crearEquipo={crearEquipo}
    /> : <div></div>}

    <MiOrg cambiarMostrar={cambiarMostrar} />
    
    {
      equipos.map((equipo) => <Equipo 
      datos={equipo} 
      key={equipo.titulo} 
      colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
      eliminarColaborador={eliminarColaborador}
      actualizarColor={actualizarColor}
      like={like}
      />)
    }

    <Footer />

    </div>
  )
}

export default App
