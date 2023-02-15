import React from 'react'
import styles from './inicio.module.css'
import Banner from 'Componentes/Banner'
import posts from 'json/posts.json'
import PostCard from 'Componentes/PostCard'
export default function Inicio() {
  return (
   
     <ul className={styles.posts}>
{posts.map((post)=>{
  return(
    <li key={post.id}>
      <PostCard post={post}/>
    </li>
  )
})}
     </ul>

  )
}
