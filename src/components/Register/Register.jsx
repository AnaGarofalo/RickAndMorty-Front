import style from "./Register.module.css";
import { useState } from "react";
import { validar } from "./validation";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import URL_BASE from "../../utils/variables";

const Register = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setUserData({ ...userData, [property]: value });
    setErrors(validar({ ...userData, [property]: value }));
  };

  const registerUser = async (userData) => {
    await axios.post(`${URL_BASE}/login`, {
      email: userData.username,
      password: userData.password,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!errors.username && !errors.password) {
      try {
        await registerUser(userData);
        navigate(0);
      } catch (error) {
        window.alert(error.response.data.error);
      }
    } else {
      window.alert("Invalid email or password");
    }
  };
  const handleEnter = async (event) => {
    if (event.keyCode !== 13) return;
    if (!errors.username && !errors.password) {
      try {
        await registerUser(userData);
        navigate(0);
      } catch (error) {
        window.alert(error.response.data.error);
      }
    } else {
      window.alert("Invalid email or password");
    }
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            className={errors.username ? style.inputError : style.input}
            type="text"
            name="username"
            value={userData.username}
            onChange={handleChange}
            onKeyDown={handleEnter}
          ></input>
          <p className={style.textoError}>{errors.username}</p>
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            className={errors.password ? style.inputError : style.input}
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            onKeyDown={handleEnter}
          ></input>
          <p className={style.textoError}>{errors.password}</p>
        </div>
        <button className={style.boton} type="submit">
          REGISTER
        </button>
      </form>
    </div>
  );
};
export default Register;
