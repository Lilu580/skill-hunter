import './styles/main.scss'
import { Header } from './components/header/header';
import { Main } from './components/main/main';
import { Recruitment } from './components/recruitment/recruitment'

function App() {
  return(
    <div className='container'>
      <Main />
      <Recruitment />
    </div>
  )
}

export default App;
