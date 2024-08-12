import './styles/main.scss'
import { Header } from './components/header/header';
import { Main } from './components/main/main';
import { Recruitment } from './components/recruitment/recruitment'
import { Paralax } from './components/parralax/parralax';
import { Info } from './components/info/info';
import { Cases } from './components/cases/cases';
import { Selection } from './components/selections/selection';

function App() {
  return(
    <div className='container'>
      <Main />
      <Recruitment />
      <Paralax />
      <Info />
      <Cases />
      <Selection />
    </div>
  )
}

export default App;
