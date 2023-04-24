import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import URL_BASE from "../../utils/variables";

export default function useDetail() {
  const [character, setCharacter] = useState({});
  const { detailId } = useParams();
  useEffect(() => {
    fetch(`${URL_BASE}/detail/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);
  return character;
}
