import React from 'react'

import style from './style.css'

const Login = () => {
  return (
    <div className={style.Login}>
      <input className={style.foo} type='text' placeholder='Username' />
      <br/>
      <input className='bar' type='button' value='Login' />
    </div>
  )
}

export default Login;