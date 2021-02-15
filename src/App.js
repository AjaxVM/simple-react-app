import React from 'react'

import styles from './styles/site.css'
import Login from './components/Login'

const App = () => {
  return (
    <div className={styles.App}>
      <h1> Hello, World! </h1>
      <Login />
    </div>
  )
}

export default App;