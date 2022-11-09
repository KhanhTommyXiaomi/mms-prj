import ReactDOM from 'react-dom/client'
import App from '@/App'
import { Provider as StoreProvider } from 'react-redux'
import { ThemeProvider } from '@mui/material'
import { store } from '@/store'
import { theme } from '@/ui/mui/v5'

import '@/languages'
import '@/ui/styles'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const rootContainerEl = document.getElementById('root') as HTMLElement
const ReactDOMRoot = ReactDOM.createRoot(rootContainerEl)

const RootComponent = () => {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StoreProvider>
  )
}

ReactDOMRoot.render(<RootComponent />)
