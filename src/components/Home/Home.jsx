import Cards from "../Cards/Cards"
import style from "./Home.module.css"

const Home=({characters, onClose})=>{
    return(
        <div className={style.container}>
            <Cards
                characters={characters}
                onClose={onClose}
             />
      </div>
    )
}
export default Home