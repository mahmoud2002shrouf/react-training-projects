import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'
import ProdactProvider from '../src/components/constext/prodact-context'
import './index.css'
import App from './App'
import configerStore from '../src/components/hook-story/prodactStore'
configerStore()

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
)
