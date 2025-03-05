import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Proteção, Estilo e Conforto para o seu espaço!</h1>
      </header>
      <main className={styles.main}>
        <section>
          <h2>Seção 1</h2>
          <p>Conteúdo da seção 1.</p>
        </section>
        <section>
          <h2>Seção 2</h2>
          <p>Conteúdo da seção 2.</p>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>Seu rodapé aqui.</p>
      </footer>
    </div>
  );
}