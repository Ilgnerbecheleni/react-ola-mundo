import React from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import posts from 'json/posts.json'
import PostModelo from 'Componentes/PostModelo'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import './post.css'
import NotFound from 'paginas/NotFound'
import PaginaPadrao from 'Componentes/PaginaPadrao'
import styles from './Post.module.css'
import PostCard from 'Componentes/PostCard'

export default function Post () {
  const parametros = useParams() //hook que recebe uma constante

  const post = posts.find(post => {
    return post.id === Number(parametros.id)
  })

  const postsRecomendados = posts
  .filter((post) => post.id !== Number(parametros.id))
  .sort((a, b) => b.id - a.id)
  .slice(0, 4);

  console.log(post)

  if (!post) {
    return <NotFound />
  }
  return (
    <Routes>
      <Route path='*' element={<PaginaPadrao/>}>
<Route index element={
    <PostModelo 
    fotoCapa={`/assets/posts/${post.id}/capa.png`}
    titulo={post.titulo}
>
    <div className='post-markdown-container'>
    <ReactMarkdown>
    {post.texto}
    </ReactMarkdown>
    </div>
    <h2 className={styles.tituloOutrosPosts}>
                        Outros posts que você pode gostar:
                    </h2>

                    <ul className={styles.postsRecomendados}>
                        {postsRecomendados.map((post) => (
                            <li key={post.id}>
                                <PostCard post={post} />
                            </li>
                        ))}
                    </ul>
   
</PostModelo>
} />


      </Route>
    </Routes>
  )
}
