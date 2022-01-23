import HomePage from './pages/HomePage/HomePage'
import GlobalState from './context/GlobalState'

export const App = () => {
  return(
    <GlobalState>
      <HomePage />
    </GlobalState>
  )
}

export default App