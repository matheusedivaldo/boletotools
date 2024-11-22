import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
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
                <div className={`${styles.menuIcon} ${menuOpen ? styles.open : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={`${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}>
                    {menuItems.map((item, index) => (
                        <li key={index} className={styles.menuItem}>
                            <a href={item.href} onClick={() => setMenuOpen(false)}>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;