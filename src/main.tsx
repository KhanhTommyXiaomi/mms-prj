import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import { store } from './store'

const rootContainerEl = document.getElementById('root') as HTMLElement
const ReactDOMRoot = ReactDOM.createRoot(rootContainerEl)

const RootComponent = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

ReactDOMRoot.render(<RootComponent />)
