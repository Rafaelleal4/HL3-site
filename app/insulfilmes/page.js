import React from 'react';
import Image from 'next/image';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import styles from './page.module.css';

const InsulfilmesPage = () => {
    const cards = [
        { id: 1, image: '/images/Carro Vertical.jpg', title: 'Nano Cerâmica', text: 'Tecnologia de ponta para quem busca máximo conforto térmico e proteção UV. Reduz o calor sem escurecer o vidro e não interfere em sinais de GPS, celular ou rádio, garantindo conectividade total. Sua composição com nanopartículas cerâmicas proporciona alta durabilidade, resistência a riscos e uma transparência superior, ideal para quem deseja sofisticação sem abrir mão da eficiência.' },
        { id: 2, image: '/images/Controle solar.jpg', title: 'Película de Controle Solar', text: 'Ideal para ambientes e veículos que precisam de menor incidência de calor. Reduz significativamente a temperatura interna, protege contra raios UV e contribui para a economia de energia ao diminuir a necessidade do uso de ar-condicionado. Além de proteger o interior contra o desbotamento causado pelo sol, oferece maior conforto visual e bem-estar térmico.' },
        { id: 3, image: '/images/Bmw.jpg', title: 'Película de Segurança', text: 'Proteção reforçada para vidros, dificultando que quebrem ou estilhacem em casos de impactos, tentativas de arrombamento ou vandalismo. Perfeita para aumentar a segurança de vitrines comerciais, residências e veículos, ela cria uma barreira extra contra acidentes, mantendo os estilhaços presos à película em caso de quebra.' },
        { id: 4, image: '/images/Espelhada.jpg', title: 'Película Espelhada', text: 'Privacidade e elegância em um só produto. Cria um efeito espelhado que bloqueia olhares curiosos durante o dia, enquanto reflete o calor e contribui para o conforto térmico. Muito utilizada em edifícios comerciais e residenciais, proporciona um visual moderno e sofisticado, além de aumentar a eficiência energética do ambiente.' },
        { id: 5, image: '/images/g5.jpg', title: 'Películas G5, G20, G35 e G50', text: 'G5: Super escura, máxima privacidade, ideal para quem deseja bloquear quase totalmente a visão externa.<br />G20: Escurecimento intenso com boa visibilidade interna, equilibrando privacidade e conforto visual.<br />G35: Equilíbrio perfeito entre privacidade e luminosidade natural, excelente para quem quer um ambiente mais iluminado, mas protegido.<br />G50: Mais clara, para quem quer discrição sem perder a luz natural, proporcionando leveza e visão ampla.' },
        { id: 6, image: '/images/Faixada Condominio .jpg', title: 'Película Fumê Tradicional', text: 'Clássica e eficiente, é uma das opções mais populares para veículos e edifícios. Reduz a luminosidade e o calor, proporcionando mais conforto e privacidade, além de proteger o interior contra o desbotamento causado pela exposição solar. Oferece um visual discreto e elegante, com excelente relação custo-benefício.' },
        { id: 7, image: '/images/jateado.jpg', title: 'Película Jateada e Decorativa', text: 'Estilo e privacidade para ambientes internos. Cria um efeito fosco sofisticado que bloqueia a visão direta sem comprometer a entrada de luz natural. Muito utilizada em escritórios, consultórios e residências, está disponível em designs personalizados e texturas decorativas que transformam qualquer espaço com um toque de modernidade e exclusividade.' },
    ];

    return (
        <div className={styles.page}>
            <Header />
            <main>
                <section id="home">
                    <h1 className={styles.mainTitle}>Nossas Películas.</h1>
                </section>
                <section id="services">
                    <div className={styles.cardsContainer}>
                        {cards.map(card => (
                            <div key={card.id} className={styles.card}>
                                <Image src={card.image} alt={card.title} width={400} height={250} className={styles.cardImage} />
                                <h3 className={styles.cardTitle}>{card.title}</h3>
                                <p className={`${styles.cardText} ${card.id === 5 ? styles.cardTextLeft : ''}`} dangerouslySetInnerHTML={{ __html: card.text }}></p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default InsulfilmesPage;