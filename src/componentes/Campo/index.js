import "./Campo.css"
import { useState } from "react";

const Campo = (props) => {
    const [valor,actualizarValor] = useState("");
    const placeholderModificado = `${props.placeholder}...`;

    //Destructupacion
    const { type="texto" } = props;

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }
    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
            placeholder={placeholderModificado} 
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
            type={type}
            />
    </div>
}
export default Campo;