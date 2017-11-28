import React from 'react'
import {Link} from 'react-router-dom'
import styles from './header.css'
import Logout from '../Logout'
import PropTypes from 'prop-types'

const propTypes = {
  onLogout: PropTypes.func.isRequired
}

function Header({token, onLogout}) {
  return (
    <header className={styles.root}>
      <Link className={styles.logoLink} to='/'>
        <h1 className={styles.logo}>React Bitcoin Wallet</h1>
      </Link>
      <span className={styles.token}>{token
          ? token.substring(0, 4) + '...' + token.substring(token.length - 4)
          : ""}</span>
      {token
        ? <Logout token={token} onLogout={onLogout}/>
        : ""}
    </header>
  )
}

Header.propTypes = propTypes

export default Header
