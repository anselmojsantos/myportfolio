import { CardSkill } from "../components/cards/CardSkill";

export function Experience(){
    let listLP = ['JavaScript','Python Para Dados','Excel VBA(Básico)'];
    let listBD = ['Modelagem de banco de dados','MySQL','PostgreSQL'];
    let listFW = ['React.js & Vite.js', 'Node.js','Flask (Básico)'];
    let listMA = ['Scrum','Design Think','Seis Sigma White Belt'];
    let listPT = ['Figma','UI/UX Básico'];
    let listGit = ['Git Hub'];
   
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
                        Desenvolvimento Pessoal
                    </h2>
                    <div id="ct-skill" className="w-full text-slate-100 flex justify-between">
                        <div id="ct-l-personal" 
                        className="w-full flex justify-between m-1 flex-wrap ">
                            <CardSkill titleH2 ='Linguagem de programação' list={listLP}/>
                            <CardSkill titleH2 ='DB: Banco de dados' list={listBD}/>
                            <CardSkill titleH2 ='Front & Backend' list={listFW}/>
                            <CardSkill titleH2 ='Gestão e Metodologias' list={listMA}/>
                            <CardSkill titleH2 ='Prototipagem' list={listPT}/>
                            <CardSkill titleH2 = 'Versionamento de Cod' list={listGit}/>                           
                        </div>
                    </div>
                </div>
        </section>
    );

}