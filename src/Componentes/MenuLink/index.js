import React from 'react'
import styles from './MenuLink.module.css'
import { Link, NavLink, useLocation } from 'react-router-dom'

export default function MenuLink ({ children, to }) {

  return (
    <div>
      <NavLink
        className={({ isActive }) => `
                ${styles.link}
                ${isActive ? styles.linkDestacado : ''}
            `}
        to={to}
        end
      >
        {children}
      </NavLink>

    </div>
  )
}
