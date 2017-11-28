import React from 'react'
import styles from './logout.css'
import PropTypes from 'prop-types'

const propTypes = {
  token: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired
}

function Logout({token, onLogout}) {
  return (
    <div className={styles.root}>
      <button onClick={onLogout} className={styles.button}>
        <span className='fa fa-lg fa-sign-out'></span>
        Logout
      </button>
    </div>
  )
}

Logout.propTypes = propTypes

export default Logout
