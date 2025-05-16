import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/app/App'
import { ThemeProvider } from 'styled-components'
import {defaultTheme} from './thems/default';



const rootView = document.getElementById('root')

if (rootView) {
  ReactDOM.render(
    <React.StrictMode>
		<ThemeProvider theme={defaultTheme}>
      <App />
	  </ThemeProvider>
    </React.StrictMode>,
    rootView
  )
}
