import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import './styles/index.css'
import {Provider} from "react-redux";
import { store } from './store'

const rootView = document.getElementById('root')

if (rootView) {
  ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    rootView
  )
}
