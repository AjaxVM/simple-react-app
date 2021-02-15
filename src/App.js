import React from 'react'
// import { Steyel } from './utils'

import Login from './components/Login'

// import our site-wide style after all components, so it takes precedent
import styles from './styles/site.css'
// alternative where we treat site.css as a module - will need to create a context provider to ship it around I think
// import styles from './styles/site.css'

// const theme = new Steyel(styles)

const App = () => {
  return (
    <div className='App'>
    {/* <div className={theme.cls('App')}> */}
      <h1> Hello, World! </h1>
      <Login />
    </div>
  )
}

export default App;