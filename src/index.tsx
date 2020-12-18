import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'mobx-react'
import { ThemeProvider } from 'styled-components'

import { Stores } from './stores'
import { confMobx } from './stores/mobxConf'

import { defaultTheme } from './theme/defaultTheme'
import { GlobalStyle } from './theme/GlobalStyle'

import { App } from './App'
import { Routes } from './routes'

import reportWebVitals from './reportWebVitals'

confMobx()

export const stores = new Stores()

render(
  <React.StrictMode>
    <Provider {...stores}>
      <ThemeProvider theme={defaultTheme}>
        <App>
          <Routes />
          <GlobalStyle />
        </App>
      </ThemeProvider>
    </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
