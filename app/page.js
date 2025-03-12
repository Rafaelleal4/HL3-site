import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.content}>
          <Image 
            src="/images/try 2.jpg" 
            alt="Descrição da imagem" 
            width={800} 
            height={400} 
            className={styles.image}
          />
          <h1 className={styles.title}>Proteção, Estilo e Conforto para o seu espaço!</h1>
          <a href="https://wa.me/5519982214772" target="_blank" rel="noopener noreferrer" className={styles.button}>
            Solicitar Orçamento
          </a>
          <section>
            <h2 className={styles.subtitle}>Sobre Nós</h2>
            <p className={styles.text}>
              Com uma trajetória consolidada ao longo de mais de 18 anos, a Studio
              HL3 se destaca como referência no mercado de aplicação de películas
              automotivas e arquitetônicas de alta qualidade, sendo reconhecida
              pela excelência, compromisso e inovação. Nossa sede está localizada
              em Valinhos - SP, porém nossa atuação se estende por todo o estado
              de São Paulo, atendendo uma ampla variedade de clientes que buscam
              proteção, conforto, privacidade e sofisticação para seus veículos e
              imóveis.</p> <p className={styles.text}> Nosso trabalho é fundamentado no uso de materiais de alto
              desempenho, selecionados cuidadosamente para garantir durabilidade,
              eficiência térmica e proteção contra raios UV, além de proporcionar
              uma estética aprimorada e um acabamento impecável. A aplicação é
              realizada por profissionais qualificados, utilizando técnicas
              avançadas para assegurar um resultado superior, sem bolhas,
              descolamentos ou imperfeições. </p> <p className={styles.text}> Acreditamos que cada cliente possui
              necessidades únicas, por isso, oferecemos um atendimento totalmente
              personalizado, analisando cuidadosamente cada projeto para entregar
              a melhor solução, seja para a proteção solar de veículos, aumento da
              segurança de residências e empresas ou valorização estética de
              fachadas e interiores. Nossa missão é transformar sua experiência
              com películas, garantindo mais conforto, privacidade e sofisticação
              para o seu dia a dia.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}