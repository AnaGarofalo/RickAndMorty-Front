import style from "./Error.module.css"
const Error=()=>{
    return(
        <div className={style.container}> 
            <img src="https://img.freepik.com/vector-gratis/ups-error-404-ilustracion-concepto-robot-roto_114360-5529.jpg?size=626&ext=jpg&ga=GA1.1.2061672801.1678388505&semt=ais" alt="Imágen de error" className={style.imagen}/>
            <h3>La página que ha solicitado no existe</h3>
        </div>
    )
}
export default Error