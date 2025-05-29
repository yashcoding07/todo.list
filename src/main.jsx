import './index.css'
import App from './App.jsx'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import Wrapper from './Wrapper.jsx'

createRoot(document.getElementById('root')).render(

<Wrapper>
  <App />
  <ToastContainer position='top-center' theme="colored" />
</Wrapper>

);

