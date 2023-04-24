import style from "./Form.module.css";
import { useState } from "react";
import { validar } from "./validation";
import { Link } from "react-router-dom";

function Form(props) {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleEnter = (event) => {
    if (event.keyCode === 13) {
      props.login(userData);
    }
  };

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setUserData({ ...userData, [property]: value });
    setErrors(validar({ ...userData, [property]: value }));
  };

  function handleSubmit(event) {
    event.preventDefault();
    props.login(userData);
  }

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
          LOGIN
        </button>
      </form>
      <div>
        <p>Don't have an user yet?</p>
        <Link to="/register">
          <span>Sign up!</span>
        </Link>
      </div>
    </div>
  );
}

export default Form;
