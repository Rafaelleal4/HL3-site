// filepath: /C:/Users/rafae/OneDrive/Documentos/Trabalho/hl3/site-insulfilme/app/insulfilmes/page.js
import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const InsulfilmesPage = () => {
    return (
        <div>
            <Header />
            <main>
                <section id="home">
                    <h2>Home</h2>
                    <p>Bem-vindo à nossa página de insulfilmes.</p>
                </section>
                <section id="services">
                    <h2>Serviços</h2>
                    <p>Oferecemos uma variedade de serviços de insulfilme.</p>
                </section>
                <section id="contact">
                    <h2>Contato</h2>
                    <p>Entre em contato conosco para mais informações.</p>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default InsulfilmesPage;