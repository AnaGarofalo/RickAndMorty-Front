import URL_BASE from "./utils/variables";

export const onSearch = (id, setCharacters) => {
  fetch(`${URL_BASE}/onsearch/${id}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
};
