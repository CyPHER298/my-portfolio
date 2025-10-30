import playingGuitar from "../../assets/playingGuitar.jpg";

export default function Intro() {
  return (
    <section className="container">
      <img className="playing-guitar-img" src={playingGuitar} />
      <main className="main">
        <h1 className="title">
          <label className="title-name">Henrique</label>
          <label className="title-role">Full-Stack</label>
        </h1>
        <article className="work-portfolio">
          <h2 className="subtitle">Work Portfolio</h2>
          <p className="text">
            Com uma paixão inabalável por tecnologia e inovação, sou um
            desenvolvedor Full-Stack dedicado a construir soluções robustas e
            escaláveis que impulsionam o sucesso dos negócios e aprimoram a
            experiência do usuário. Minha expertise vai desde o desenvolvimento
            de interfaces intuitivas no frontend até a criação de arquiteturas
            de backend eficientes e seguras. Com um olhar atento aos detalhes e
            um compromisso constante com a excelência, transformo ideias
            complexas em aplicações funcionais e de alto desempenho.
          </p>
        </article>
      </main>
      <div className="empty"></div>
    </section>
  );
}
