import React from 'react'
import styles from './Menu.module.css'
import { Link, useLocation } from 'react-router-dom'
import MenuLink from '../MenuLink'
export default function Menu () {
  return (
    <div>
      <header>
        <nav className={styles.navegacao}>
          <MenuLink to='/'>Inicio</MenuLink>
          <MenuLink to='/sobre'>SobreMim</MenuLink>
        </nav>
      </header>
    </div>
  )
}
