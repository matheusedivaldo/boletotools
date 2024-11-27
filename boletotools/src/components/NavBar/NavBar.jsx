import React, { useState } from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.setAttribute('data-theme', darkMode ? 'light' : 'dark');
    };

    const menuItems = [
        { label: 'Início', href: '#home' },
        { label: 'Funcionalidades', href: '#features' },
        { label: 'Contato', href: '#contact' },
    ];

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarContent}>
                <div className={styles.logo}>Boletools</div>
                <div
                    className={`${styles.menuIcon} ${menuOpen ? styles.open : ''}`}
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={`${styles.menuWrapper} ${menuOpen ? styles.menuOpen : ''}`}>
                    <ul className={styles.menu}>
                        {menuItems.map((item, index) => (
                            <li key={index} className={styles.menuItem}>
                                <a href={item.href} onClick={() => setMenuOpen(false)}>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <button
                        className={styles.darkModeToggle}
                        onClick={toggleDarkMode}
                        aria-label="Toggle dark mode"
                    >
                        {darkMode ? <MdDarkMode size={20} /> : <MdLightMode size={20} />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
