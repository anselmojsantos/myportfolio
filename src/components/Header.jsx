import { GiHamburgerMenu } from 'react-icons/gi'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import {Link} from  'react-scroll'
import logo from'../../public/ajs.svg';
import { useState } from 'react'

export function Header(){

    const [click, setClick] = useState(false);
    const closeMenu = ()=> setClick(false); 
      
    const [open, setOpen] = useState(100)
    const openMenu = () => setOpen(0);
    const clMenu = () =>   setOpen(100)

    const Fgithub = () =>{
        window.open("https://github.com/anselmojsantos/myportfolio","_blank")
    }
    const FlinkD = () => window.open('https://www.linkedin.com/in/anselmo-santos-3bgm', '_blank');


    return(
        <header id = 'header' className="pos w-full h-20 bg-900 flex justify-center items-center lg:px-1 sm:px-1 fixed z-50">    
            <div id='header-center' className="w-[1024px] h-20 flex items-center justify-between lg:px-2">
                <div id='logo' className="w-[198px] sm:w-[150px] xsm:w-[110px]"><img src={logo}  type={"image/svg+xml"} alt={"Logo"} /></div>
                <div id='menu' className='flex justify-between items-center'>
                    <div id ="id-btn-menu" className=' hidden sm:flex w-8 h-8 justify-center items-center' onClick={openMenu}>
                        <GiHamburgerMenu className='w-6 h-6 fill-50 cursor-pointer hover:fill-400'/>
                    </div>
                    <ul id='menu-ul' className ='flex justify-items-start items-center text-50
                                    sm:w-full sm:h-screen sm:flex-col sm:absolute sm:top-20
                                sm:bg-900 sm:shadow-violet-600 transition-box'
                                    style={{left:'-'+open+'%'}}>
                        
                        <li className='n-items cursor-pointer hover:text-400 sm:mt-20'><Link to="home" 
                            spy={true} smooth={true} offset={-80} duration={500} onClick={closeMenu}>HOME</Link></li>
                        <li className='n-items cursor-pointer hover:text-400'>
                            <Link to="id-personal" spy={true} smooth={true} offset={-80} duration={500} onClick={closeMenu}>EXPEREIENCE</Link></li>
                        <li className='n-items cursor-pointer hover:text-400'>
                            <Link to="id-projects" spy={true} smooth={true} offset={-80} duration={500} onClick={closeMenu}>PROJECTS</Link></li>
                        
                        <div id = "id-close-menu"className='hidden w-8 h-8 sm:flex justify-center items-center cursor-pointer rounded absolute
                                                            ring-slate-100 ring-2  p-3 top-0 hover:bg-400 hover:ring-400'
                                                            onClick={clMenu}>X</div>
                        
                        <div id="id-git" className='hidden w-32 h-auto p-1 sm:flex justify-around items-center bg-400 rounded ring-2 ring-400'>
                            <AiFillGithub className='w-8 h-8 cursor-pointer' onClick={Fgithub}/>
                            <AiFillLinkedin className='w-8 h-8 cursor-pointer' onClick={FlinkD} />
                        </div>
                    </ul>
                    <button id ="btn-ctm" className='ring-2 ring-400 text-50 font-semibold p-2 rounded ml-2 hover:bg-400 focus:bg-400' onClick={closeMenu}>
                            <Link to="id-ctm" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu} className="sm:text-sm sm:p-1">CONTACT ME</Link>
                    </button>
                </div>
            </div> 
        </header> 
    )
} 

