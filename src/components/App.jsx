import './index.css'
import {Header} from './Header'
import {Home} from './Home'
import { Experience } from './Experience'
import {Projects} from './Projects'
import { Curso } from './Curso'
import {Footer} from './Footer'

export default function App() {

  return (
    <div className="App relative">
       <Header/>
       <Home />
       <Experience />
       <Projects />
       <Curso />
       <Footer />
    </div>
  )
}


