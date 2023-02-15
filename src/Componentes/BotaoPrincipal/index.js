import React from 'react'
import styles from './botaoprincipal.module.css'

export default function BotaoPrincipal({children,tamanho}) {
  return (
    <div>
        <button className={`${styles.botaoPrincipal}
        ${styles[tamanho]}
        `}>
            {children}</button>
    </div>
  )
}
