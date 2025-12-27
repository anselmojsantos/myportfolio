import './index.css'
import {Header} from './Header'
import {Home} from './Home'
import { Experience } from './Experience'
import {ProjectsWeb} from './Projects.Web'
import { ProjectsDates } from './ProjectsDates'
import { Curso } from './Curso'
import {Footer} from './Footer'

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


