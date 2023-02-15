import React from 'react'
import styles from './post.module.css'
import { Link } from 'react-router-dom'
import BotaoPrincipal from 'Componentes/BotaoPrincipal'
export default function PostCard ({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
      <img
        src={`/assets/posts/${post.id}/capa.png`}
        alt='imagem de capa do post'
        className={styles.capa}
      />
      <h2 className={styles.titulo}>{post.titulo}</h2>
    <BotaoPrincipal>Ler</BotaoPrincipal>
    </div>
    </Link>
  )
}
