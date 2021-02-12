import React from 'react'
import { Steyel } from '../../utils'

import styles from './style.css'

const style = new Steyel(styles)

const Login = () => {
  return (
    <div className={style.cls('Login')}>
      <input type='text' placeholder='Username' />
      <br/>
      <input type='button' value='Login' />
    </div>
  )
}

export default Login;