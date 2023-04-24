import {
  Home,
  Nav,
  About,
  Detail,
  Form,
  Error,
  Favorites,
} from "./components/index";
import axios from "axios";
import { onSearch } from "./funcionesApp";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./App.module.css";
import Register from "./components/Register/Register";
import { getUserId } from "./redux/actions";
import { useDispatch } from "react-redux";
import URL_BASE from "./utils/variables";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  async function login(userData) {
    await axios
      .get(
        `${URL_BASE}/login?email=${userData.username}&password=${userData.password}`
      )
      .then(async () => {
        setAccess(true);
        await dispatch(getUserId(userData.username));
        navigate("./home");
      })
      .catch((error) => {
        window.alert(error.response.data.error);
      });
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function logout() {
    navigate("/");
    setAccess(false);
  }

  return (
    <div className={style.App}>
      {location.pathname !== "/" && location.pathname !== "/register" ? (
        <Nav
          onSearch={onSearch}
          setCharacters={setCharacters}
          characters={characters}
          logout={logout}
        />
      ) : (
        ""
      )}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Home characters={characters} onClose={onClose} />}
        ></Route>
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
