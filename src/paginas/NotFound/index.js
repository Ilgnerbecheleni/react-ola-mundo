import React from 'react'
import styles from './notfound.module.css'
import erro404 from 'assets/erro_404.png'
import BotaoPrincipal from 'Componentes/BotaoPrincipal'
import { Link, useNavigate } from 'react-router-dom'
export default function NotFound() {

const navegar = useNavigate();

  return (
    <>
    <div className={styles.conteudoContainer}>
        <span className={styles.texto404}>Texto 404</span>
        <h1 className={styles.titulo}>OPS! Página não encontrada!</h1>
        <p className={styles.paragrafo}>Tem certeza que era isso que estava procurando?</p>
        <p className={styles.paragrafo}>Aguarde alguns instantes e recarregue a página</p>
        
        
        <div 
        className={styles.botaoContainer}
        onClick={()=>navegar('/')}

        >

           <BotaoPrincipal tamanho={"lg"}>Voltar</BotaoPrincipal>
        </div>
        <img src={erro404} alt=" cachorro de oculos e vestido como humano" className={styles.imagemCachorro}/>
    
    </div>
      <div className={styles.espacoEmBranco}></div>
      </>
  )
}
