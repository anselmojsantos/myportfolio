import { CardSkill } from "../components/cards/CardSkill";

export function Experience(){
    let listLP = ['Python','Python para análise de dados','SQL','Pandas','Streamlit'];
    let listBD = ['PostgreSQL','MySQL','Modelagem de banco de dados'];
    let listFW = ['Node.js','React.js','JavaScript','Flask'];
    let listMA = ['Inteligência Artificial — em estudo','Estatística descritiva','Estatística inferencial','Machine Learning — fundamentos'];
    let listPT = ['Git/GitHub','Scrum','Design Thinking','Six Sigma','Figma/UI/UX'];
   
    return(
        <section id="id-personal" 
            className="w-full h-auto flex justify-center mt-5 "
         >
                <div id="ct-personal"
                    className="w-[1040px] h-auto p-5 rounded-t-xl bg-bg-blue-900 relative
                    lg:px-2"    
                 >
                    <h2 id="t-h2"
                        className="w-full text-400 text-center text-[25px] font-semibold
                        pb-6"
                     >
                        Competências Técnicas
                    </h2>
                    <div id="ct-skill" className="w-full text-slate-100 flex justify-between">
                        <div id="ct-l-personal" 
                        className="w-full flex justify-between m-1 flex-wrap ">
                            <CardSkill titleH2 ='Dados e Programação' list={listLP}/>
                            <CardSkill titleH2 ='Banco de Dados' list={listBD}/>
                            <CardSkill titleH2 ='Desenvolvimento' list={listFW}/>
                            <CardSkill titleH2 ='IA e Estatística' list={listMA}/>
                            <CardSkill titleH2 ='Ferramentas e Métodos' list={listPT}/>                          
                        </div>
                    </div>
                </div>
        </section>
    );

}