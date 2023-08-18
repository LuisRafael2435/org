import "./MiOrg.css"
import { useState } from "react";

const MiOrg = (props) => {
    
    //const [mostrar,actualizarMostrar] = useState(true);

    //const manejarClick = () => {
    //    console.log("Mostrar/Ocultar elemento");
    //    actualizarMostrar(!mostrar);
    //}
    return <section className="orgSection">
        <h3 className="title">Mi organizacion</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg;