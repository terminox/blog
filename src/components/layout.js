import React from 'react'
import { Link } from 'gatsby'

import styles from './layout.module.css'

const MenuLink = (props) => (
  <li className={styles.menuLink}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Layout = ({ children }) => (
  <div className={styles.container}>
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <h3 className={styles.logoText}>Yossapas</h3>
      </Link>

      <ul className={styles.menuList}>
        <MenuLink to="/about">About</MenuLink>
      </ul>
    </header>

    {children}
  </div>
)

export default Layout