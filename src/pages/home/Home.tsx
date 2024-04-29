import "./Home.scss";
import User from "../../assets/images/user.png";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";

function Home() {
  return (
    <div className="main-content">
      <img src={User} alt="Avatar" className="avatar" />

      <h2 className="subtitle">
        Transformando linhas de código em{" "}
        <span className="experience">experiências incríveis</span>, uma tag de
        cada vez.
      </h2>

      <p className="description">
        "Com mais de 4 anos de experiência como desenvolvedora Front-end, trago
        uma paixão inabalável por criar interfaces digitais envolventes e
        funcionais. Ao longo da minha jornada, mergulhei nas complexidades do
        desenvolvimento web, aprimorando minhas habilidades em HTML, CSS,
        JavaScript e seus frameworks para traduzir conceitos criativos em
        experiências digitais memoráveis."
      </p>

      <div className="buttons">
        <button type="button" className="button contact-button">
          Entrar em Contato
        </button>
        <button type="button" className="button download-button">
          Download CV
        </button>
      </div>

      <div className="experience-content">
        <h2 className="experience-subtitle">Experiência com</h2>
        <div className="icons">
          <FaReact className="icon icon-react" />
          <FaAngular className="icon icon-angular" />
          <SiNextdotjs className="icon icon-next" />
          <FaWordpress className="icon icon-wordpress" />
          <IoLogoJavascript className="icon icon-javascript" />
          <SiTypescript className="icon icon-typescript" />
        </div>
      </div>
    </div>
  );
}

export default Home;
