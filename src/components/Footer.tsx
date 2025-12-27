import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import imgFooter from '../../public/vector.svg';
import phone from './../../public/iconPhone.svg';
import mail from './../../public/iconMail.svg';

export function Footer(){

    const Fgithub = () =>{
        window.open("https://github.com/anselmojsantos/myportfolio","_blank")
    }
    const FlinkD = () => window.open('https://www.linkedin.com/in/anselmo-santos-3bgm', '_blank');

    
    return(
        <section id="id-ctm" 
            className="w-ful h-auto flex justify-center mb-0">
            <div id="id-pj" 
                className='w-[1040px] h-auto text-slate-50 p-5  bg-1000 relative
                lg:px-2' 
                >
                <h2 id="t-h2"
                        className="w-full h-auto text-400 text-center text-[25px] font-semibold">
                        Contato
                </h2>
                    <div className="w-full flex justify-between items-center flex-wrap">
                        <div className="flex flex-col items-center sm:m-auto">
                            <div className='w-full h-10 flex items-center mb-2 sm:w-full'>
                                <div className='w-10 h-10'><img src={phone}/></div>
                                <div className='w-auto h-10 ml-2 flex items-center'>(11) 91052-9337</div>
                            </div>
                            <div className='w-full h-10 flex items-center mb-2 '>
                                <div className='w-10 h-10'><img src={phone}/></div>
                                <div className='w-auto h-10 ml-2 flex items-center'>(11) 97447-3636</div>
                            </div>
                            <div className='w-full h-10 flex items-center mb-2'>
                                <div className='w-10 h-10'><img src={mail}/></div>
                                <div className='w-auto h-10 ml-2 flex items-center'>anselmo3.santos@gmail.com</div>
                            </div>
                            <div id="id-rs" className='w-full h-auto gap-2  py-2 flex justify-start items-center'>
                                <AiFillGithub className='w-8 h-8 cursor-pointer' onClick={Fgithub}/>
                                <AiFillLinkedin className='w-8 h-8 cursor-pointer' onClick={FlinkD} />
                            </div>
                        </div>
                        
                        <div className="w-[150px] h-[150px] flex justify-end items-center sm:m-auto sm:w-[100px] sm:h-[150px]" 
                            style={{backgroundImage:`url(${imgFooter})`, backgroundPosition:'left', backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
                        </div>
                    </div>     
            </div>
        </section>
    );
}