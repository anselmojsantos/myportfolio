import './index.css'
import {Header} from './layout/Header'
import {Home} from './sections/Home'
import { Experience } from './sections/Experience'
import {ProjectsWeb} from './sections/Projects.Web'
import { ProjectsDates } from './sections/ProjectsDates'
import { Curso } from './sections/Curso'
import {Footer} from './layout/Footer'

export default function App() {

  return (
    <div className="App relative">
       <Header/>
       <Home />
       <Experience />
       <ProjectsWeb />
       <ProjectsDates />
       <Curso />
       <Footer />
    </div>
  )
}


