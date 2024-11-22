import React from "react";
import { FiMail, FiPhone, FiLinkedin } from "react-icons/fi";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.brand}>
                    <h2>Boletools</h2>
                    <p>Validando boletos com precisão e segurança.</p>
                </div>
                <div className={styles.contacts}>
                    <h3>Contatos</h3>
                    <ul>
                        <li>
                            <FiMail className={styles.icon} />
                            <a href="mailto:contato@boletools.com">contato@boletools.com</a>
                        </li>
                        <li>
                            <FiPhone className={styles.icon} />
                            <a href="tel:+551199999999">+55 (11) 99999-9999</a>
                        </li>
                        <li>
                            <FiLinkedin className={styles.icon} />
                            <a href="https://linkedin.com/in/boletools" target="_blank" rel="noopener noreferrer">
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.links}>
                    <h3>Links úteis</h3>
                    <ul>
                        <li><a href="#home">Início</a></li>
                        <li><a href="#features">Funcionalidades</a></li>
                        <li><a href="#contact">Contato</a></li>
                        <li><a href="#privacidade">Política de Privacidade</a></li>
                    </ul>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p>&copy; 2024 Boletools. Todos os direitos reservados.</p>
                <p>Desenvolvido por <a href="https://matheusedivaldo.com.br/" target="_blank" rel="noopener noreferrer">Matheus Edivaldo</a></p>
            </div>
        </footer>
    );
};

export default Footer;