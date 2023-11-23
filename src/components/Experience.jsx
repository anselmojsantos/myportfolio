

export function Experience(){
    let listLP = ['JavaScript','HTML5','CSS3','Java Orientado a Objeto','Excel VBA'];
    let listBD = ['MySql'];
    let listFW = ['React.js','Vite.js','TailwindCSS'];
    let listMA = ['Scrum','Extreme Programming','Design Think','UI & UX'];
    let listPT = ['Figma'];
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
                    <div id="ct-personal-ex" className="w-full text-slate-100  text-center pb-3 leading-normal">
                        Apesar de não ser mais tão jovem, mantenho uma mentalidade jovem e uma 
                        abordagem ávida para aprender. Acredito que o aprendizado contínuo é a chave 
                        para o sucesso em qualquer área. Ao longo desta fase da vida, tenho adquirido 
                        conhecimentos e experiências que contribuem significativamente para o meu 
                        crescimento pessoal e profissional.
                        Minhas paixões no desenvolvimento de software incluem aplicações web, onde 
                        busco integrar criatividade e funcionalidade. Estou sempre atento às novas 
                        tecnologias e metodologias que possam aprimorar minhas habilidades e agregar 
                        valor aos projetos em que estou envolvido.
                    </div>
                    <div id="ct-personal-skill" 
                        className="w-full text-slate-100 text-center pb-2 ">
                        Algumas Skills:
                    </div>
                    <div id="ct-skill" className="w-full text-slate-100 flex justify-between">
                        <div id="ct-l-personal" 
                        className="w-full flex justify-between m-1 flex-wrap ">
                            <ul>
                            <h2>Linguagem de Programação</h2>
                                {listLP.map((item, index)=>(<li key = {index}>{item}</li>))}
                            </ul>
                            <ul>
                                <h2>Banco de Dados</h2>
                                {listBD.map((item, index)=>(<li key = {index}>{item}</li>))}
                            </ul>
                            <ul>
                                <h2>Framework</h2>
                                {listFW.map((item, index)=>(<li key = {index}>{item}</li>))}
                            </ul>
                            <ul>
                                <h2>Metodologias Ágeis</h2>
                                {listMA.map((item, index)=>(<li key = {index}>{item}</li>))}
                            </ul>
                            <ul>
                                <h2>Prototipação</h2>
                                {listPT.map((item, index)=>(<li key = {index}>{item}</li>))}
                            </ul>      
                        </div>
                    </div>
                </div>
        </section>
    );

}