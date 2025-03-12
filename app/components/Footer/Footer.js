import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.services}>
                    <h3>Nossos Serviços</h3>
                    <ul>
                        <li>Arquitetura - Controle Térmico</li>
                        <li>Arquitetura - Segurança</li>
                        <li>Arquitetura - Privacidade</li>
                        <li>Automotivo - Controle Térmico</li>
                        <li>Automotivo - Segurança</li>
                        <li>Automotivo - Privacidade</li>
                    </ul>
                </div>
                <div className={styles.contact}>
                    <h3>Entre em contato</h3>
                    <p>(19) 98221-4772</p>
                    <p>(11) 98023-4820</p>
                    <p>(15) 98841-0519</p>
                    <p>
                        <FaInstagram className={styles.icon} />
                        <a href="https://www.instagram.com/studio_hl3" target="_blank" rel="noopener noreferrer" className={styles.link}>
                            @studio_hl3
                        </a>
                    </p>
                </div>
            </div>
            <p className={styles.copy}>&copy; 2025 Studio HL3. Todos os direitos reservados.</p>
        </footer>
    );
};

export default Footer;