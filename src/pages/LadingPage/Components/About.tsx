import imageAbout from "../../../assets/AboutSection/image-about.png";
import imageMision from "../../../assets/AboutSection/about-mision.png"
;

const About = () => {
  return (
    <section id="sobre">
      <div className="p-20 lg:px-40 bg-light-organge flex flex-col-reverse md:flex-row bg-light-orange justify-center items-center gap-10">
        <div className="flex flex-col  md:items-start text-center gap-5">
          <h3 className="font-kaisei text-3xl text-dark-orange font-bold">
            Sobre
          </h3>
          <p className="text-start text-lg lg:text-xl font-inter text-gray-600 lg:w-3/4">
            Somos uma plataforma que facilita a divulgação de ofertas e
            panfletos para comerciantes locais. De forma rápida e prática,
            ajudamos negócios a alcançarem mais clientes e fortalecerem sua
            presença no ambiente digital.
          </p>
        </div>
        <img className="w-40" src={imageAbout} alt="" />
      </div>
      <div className="p-20 lg:px-40 bg-light-organge flex flex-col md:flex-row bg-light-blue justify-center items-center gap-10">
        <img className="w-40" src={imageMision} alt="" />
        <div className="flex flex-col md:items-end text-center gap-5">
          <h3 className="font-kaisei text-3xl text-dark-blue font-bold">
            Nossa missão
          </h3>
          <p className="text-end font-inter text-lg lg:text-xl text-gray-600 lg:w-3/4">
            Conectar comerciantes e consumidores, oferecendo uma solução simples
            e acessível para aumentar a visibilidade e impulsionar vendas no
            comércio local.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
