import './App.css'
import { Provider } from 'react-redux'
import Counter from './components/Counter'
import { store } from './store/store'
import { ThemeProvider } from './Context/ThemeContext'
import ThemeToggle from './components/ThemeToggle'

function App() {

  return (
    <Provider store={store}>
      <ThemeProvider>
        <ThemeToggle/>
        <Counter />
      </ThemeProvider>
    </Provider>
  )
}

export default App
