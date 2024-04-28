import "./Home.scss";
import User from "../../assets/images/user.png";

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
        experiências digitais memoráveis. Meu compromisso com a inovação e a
        busca incessante pela excelência me capacitam a enfrentar desafios
        complexos de desenvolvimento com confiança e determinação. Estou pronto
        para colaborar com você na criação de soluções web impactantes que
        elevam sua marca ao próximo nível."
      </p>
    </div>
  );
}

export default Home;
