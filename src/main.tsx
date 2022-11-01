import ReactDOM from 'react-dom/client'
import App from './App'

const rootContainerEl = document.getElementById('root') as HTMLElement
const ReactDOMRoot = ReactDOM.createRoot(rootContainerEl)

ReactDOMRoot.render(<App />)
