import React from 'react'
import Router from './routes'
import ThemeConfig from './themes'
import GlobalStyles from './themes/global.theme'
function App() {

  return (
    <>
      <ThemeConfig>
        <GlobalStyles />
        <Router />
      </ThemeConfig>
    </>
  )
}

export default App
