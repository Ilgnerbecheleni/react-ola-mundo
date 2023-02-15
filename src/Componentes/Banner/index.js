import styles from './Banner.module.css'
import React from 'react'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha-foto.jpeg'


export default function Banner () {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Ola Mundo</h1>
        <p className={styles.paragrafo}>
          {' '}
          Ola , bem vindo ao meu pequeno espaço para mostrar um pouco de conhecimento e falar um pouco sobre mim.
        </p>
      </div>
      <div className={styles.imagens}>
        <img
          src={circuloColorido}
          aria-hidden={true}
          className={styles.circuloColorido}
        />
        <img src={minhaFoto} alt="minha foto sorrindo" className={styles.minhaFoto}/>
      </div>
    </div>
  )
}
