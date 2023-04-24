import style from "./Detail.module.css";
import useDetail from "./functions";

const Detail = () => {
  const character = useDetail();
  return (
    <div className={style.container}>
      {character.name ? (
        <>
          <div className={style.propiedades}>
            <h1>Nombre: {character.name}</h1>
            <h3>Estado: {character.status}</h3>
            <h3>Especie: {character.species}</h3>
            <h3>Género: {character.gender}</h3>
            <h3>Origen: {character.origin ? character.origin.name : ""}</h3>
          </div>
          <img src={character.image} alt="imagen del personaje" />
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};
export default Detail;
