import style from "./About.module.css";
import foto from "./foto.jpg";
import github from "../../utils/github (1).png";
import linkedin from "../../utils/linkedin-logo.png";

const About = () => {
  return (
    <div className={style.container}>
      <div>
        <h1>Name: Ana Garófalo</h1>
        <h3>Status: Studying</h3>
        <h3>Species: Human</h3>
        <h3>Gender: Female</h3>
        <h3>Origin: Henry Planet</h3>
        <a href="https://www.linkedin.com/in/ana-mar%C3%ADa-gar%C3%B3falo-a20bab238/">
          <img src={linkedin} />
        </a>
        <a href="https://github.com/AnaGarofalo">
          <img src={github} />
        </a>
      </div>

      <img src={foto} alt="Foto mía" className={style.foto} />
    </div>
  );
};
export default About;
