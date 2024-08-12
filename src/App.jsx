import './styles/main.scss'
import { Main } from './components/main/main';
import { Recruitment } from './components/recruitment/recruitment'
import { Paralax } from './components/parralax/parralax';
import { Info } from './components/info/info';
import { Cases } from './components/cases/cases';
import { Selection } from './components/selections/selection';
import { Experience } from './components/experience/experience';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';

function App() {
  return(
    <div className='container'>
      <Main />
      <Recruitment />
      <Paralax />
      <Info />
      <Cases />
      <Selection />
      <Experience />
      <Footer />
      <Header nav={false}/>
      <div className='privacy'>
        <span className='privacy_item'>© 2024, SkillHunter</span>
        <span className='privacy_item'>Privacy Policy</span>
      </div>
    </div>
  )
}

export default App;
