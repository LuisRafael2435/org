import "./Formulario.css"
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";
import { useState } from "react";


const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");
    const [titulo, actualizarTitulo] = useState("");
    const [color, actualizarColor] = useState("");


    const {registrarColaborador, crearEquipo} = props;

    const manejarEnvio = (event) => {
        event.preventDefault();
        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo
        }
        registrarColaborador(datosAEnviar);
    }

    const manejarNuevoEquipo = ( e ) => {
        e.preventDefault();
        crearEquipo({titulo, colorPrimario : color});
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <Campo 
                titulo="Nombre" 
                placeholder="Ingresar Nombre" 
                required 
                valor={nombre} 
                actualizarValor={actualizarNombre}
                />
            <Campo 
                titulo="Puesto" 
                placeholder="Ingresar Puesto" 
                required
                valor={puesto} 
                actualizarValor={actualizarPuesto}
                />
            <Campo 
                titulo="Foto" 
                placeholder="Ingresar Enlace de Foto" 
                required
                valor={foto} 
                actualizarValor={actualizarFoto}
                />
            <ListaOpciones  
                valor={equipo} 
                actualizarEquipo={actualizarEquipo}
                equipos = {props.equipos}
                />
            <Boton texto="Crear"/>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo</h2>
            <Campo 
                titulo="Titulo" 
                placeholder="Ingresar Titulo" 
                required 
                valor={titulo} 
                actualizarValor={actualizarTitulo}
                />
            <Campo 
                titulo="Color" 
                placeholder="Ingresar el color en Hex" 
                required
                valor={color} 
                actualizarValor={actualizarColor}
                type="color"
                />
            <Boton texto="Registrar equipo"/>
        </form>
    </section>
}

export default Formulario;