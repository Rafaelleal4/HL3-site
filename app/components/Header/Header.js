"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={styles.header}>
            <h1 className={styles.title}>HL3 Studio</h1>
            <nav className={styles.nav}>
                <div className={styles.hamburger} onClick={toggleMenu}>
                    &#9776;
                </div>
                <ul className={`${styles.navList} ${isOpen ? styles.showMenu : ''}`}>
                    <li>
                        <Link href="/" legacyBehavior>
                            <a className={styles.link}>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/insulfilmes" legacyBehavior>
                            <a className={styles.link}>Películas</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;