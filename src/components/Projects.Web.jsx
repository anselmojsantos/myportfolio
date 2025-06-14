import {CardsComponents} from './cards/CardsComponents';

export function ProjectsWeb(){
   const bgimg = '/Background-Port.png';
    return(
        <section id="id-projects" 
            className="w-ful h-auto flex justify-center items-center">
                <div id="id-pj" 
                    className='w-[1040px] h-auto text-slate-50 p-5 bg-bg-blue-900 relative
                               lg:px-2' 
                           style={
                                {
                                    background:`url(${bgimg})`,
                                    backgroundRepeat:"no-repeat",
                                    backgroundPosition:"center",
                                    backgroundSize:"cover"
                                }
                            }
                >
                    <h2 id="t-h2"
                        className="w-full text-400 text-center text-[25px] font-semibold
                        pb-6"
                    >
                        My Projects
                    </h2>  
                    <p className='text-center text-slate-100 text-[20px] font-semibold mb-5'>
                        Desenvolvimento Web
                    </p>
                    <div id="id-ct-pj" className='w-full h-auto flex justify-around items-center flex-wrap'>
                        
                        <CardsComponents 
                            linkImg="https://user-images.githubusercontent.com/49048624/205319194-1dc3387f-99cd-4e24-82d2-a46edc42e1cd.png"
                            textSpanBold = "MyPortfolio"
                            textSpan = "Figma"
                            textColor= '#4F2AFA'
                            linkPages = "https://www.figma.com/file/OPs2yeN5b2SBURwWNIuIvq/Portif%C3%B3lio?node-id=223%3A16&t=mIrwFC5ZsoNPbkgs-1" 
                            linkGit="https://github.com/anselmojsantos/myportfolio"/>

                        <CardsComponents 
                            linkImg="https://github.com/anselmojsantos/explorer-lab-01/blob/main/.github/project.png?raw=true"
                            textSpanBold = "Explorer Lab"
                            textSpan = "RocketSeat - 2022"
                            textColor= '#49E8FF'
                            linkPages = "https://anselmojsantos.github.io/explorer-lab-01/" 
                            linkGit="https://github.com/anselmojsantos/explorer-lab-01"/>

                        <CardsComponents 
                            linkImg = "https://user-images.githubusercontent.com/49048624/204629530-a994102e-9357-4c18-a288-1e4aa399cd56.PNG"
                            textSpanBold = "Ignite lab ds"
                            textSpan = "RocketSeat - 2022"
                            textColor = '#81D8F7'
                            linkPages = "https://anselmojsantos.github.io/ignite-lab-ds" 
                            linkGit="https://github.com/anselmojsantos/ignite-lab-ds" /> 
                       
                        <CardsComponents 
                            linkImg = "https://user-images.githubusercontent.com/49048624/285263961-ce7f7755-29b3-46fa-aed1-077224dbeee0.png"
                            textSpanBold = "Projeto Node.Js PetDevShop"
                            textSpan = "B7web - 2023"
                            textColor = '#81D8F7'
                            linkPages = "https://canilprojects.onrender.com/" 
                            linkGit="https://github.com/anselmojsantos/projetoCanil" /> 
                    </div>     
                </div>     
        </section>
    );
}