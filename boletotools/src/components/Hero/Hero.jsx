import React, { useState, useRef, useEffect } from "react";
import styles from "./Hero.module.css";

const Hero = () => {
    const [inputValue, setInputValue] = useState("");
    const maxLength = 56;
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const handleChange = (event) => {
        const value = event.target.value;
        if (value.length <= maxLength) {
            setInputValue(value);
        }
    };

    const handleValidate = () => {
        console.log("Validando:", inputValue);
    };

    const handleClear = () => {
        setInputValue("");
    };

    return (
        <div className={styles.heroContainer}>
            <h1 className={styles.heroTitle}>Boletotools</h1>
            <p className={styles.heroDescription}>
                Utilize nossa ferramenta para validar boletos com precisão, seja a partir do código de barras ou da linha digitável. Também realizamos conversões rápidas entre os dois formatos, tornando o processo mais eficiente e seguro.
            </p>
            <form className={styles.heroForm} onSubmit={(e) => e.preventDefault()}>
                <div className={styles.heroInputContainer}>
                    <input
                        ref={inputRef}
                        type="text"
                        id="input"
                        value={inputValue}
                        onChange={handleChange}
                        className={styles.heroInput}
                        placeholder=" "
                        maxLength={maxLength}
                        inputMode="numeric"
                        aria-label="Código de barras ou linha digitável"
                    />
                    <label htmlFor="input" className={styles.heroInputLabel}>
                        Código de Barras ou Linha Digitável
                    </label>
                </div>

                <div className={styles.formFooter}>
                    <span className={styles.characterCount}>
                        {inputValue.length}/{maxLength} caracteres
                    </span>
                    <div className={styles.buttonsContainer}>
                        <button
                            type="button"
                            onClick={handleClear}
                            className={styles.clearButton}
                        >
                            Limpar
                        </button>
                        <button
                            type="button"
                            onClick={handleValidate}
                            className={styles.submitButton}
                        >
                            Validar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Hero;