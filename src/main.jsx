import { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import './style.css'

const rootElement = document.querySelector('#root')

ReactDOM.render(

  <StrictMode>
    <App />
  </StrictMode>,
  rootElement

)