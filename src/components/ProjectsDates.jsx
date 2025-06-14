import {CardsComponents} from './cards/CardsComponents';

export function ProjectsDates(){
    const bgimg = '../../public/BgDates.jpg';
    const dashChoco = '../../public/imagesDash/dashVendas.png';
    const dashFinFlcx = '../../public/imagesDash/dashFin.png';
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
                    <p className='text-dates text-center text-slate-100 text-[20px] font-semibold mb-5'>
                        Analise de Dados - Power BI
                    </p>
                    <div id="id-ct-pj" className='w-full h-auto flex justify-around items-center flex-wrap'>
                        <CardsComponents 
                            linkImg={dashChoco}
                            textSpanBold = "Mini Curos de Power BI - Vendas de Chocolates"
                            textSpan = "Karine Lago - 2025"
                            textColor = '#81D8F7'
                            linkPages = 'https://app.powerbi.com/view?r=eyJrIjoiNWNjYzdmZDgtYWQxMy00NWI3LTk4NjAtMWZjYTJmZDQ0MmIyIiwidCI6IjFlNTEwNDMzLWE4ZDAtNGJiNS1iMjkzLTllY2RhOWZkOTQzYSJ9'
                        />
                        <CardsComponents
                            linkImg= {dashFinFlcx}
                            textSpanBold = "Imerssão Power BI - Fluxo de Caixa"
                            textSpan = "Karina Lago e Letícia - 2025"
                            textColor = '#81D8F7'
                            linkPages = 'https://app.powerbi.com/view?r=eyJrIjoiOWJkOTdmMzUtNmIxNy00ZTc1LThkYTgtMjI1OTkwZmRlNzM5IiwidCI6IjFlNTEwNDMzLWE4ZDAtNGJiNS1iMjkzLTllY2RhOWZkOTQzYSJ9&pageName=2fcb35581e9bd5de6dc6' 
                            linkGit=""
                        />
                    </div>     
                </div>     
        </section>
    );
}