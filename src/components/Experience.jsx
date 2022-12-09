

export function Experience(){
    return(
        <section id="id-personal" 
            className="w-full h-auto flex justify-center mt-5 "
         >
                <div id="ct-personal"
                    className="w-[1024px] h-auto p-5 rounded-t-xl bg-bg-blue-900 relative
                    lg:px-2"    
                 >
                    <h2 id="t-h2"
                        className="w-full text-400 text-center text-[25px] font-semibold
                        pb-6"
                     >
                        Um Pouco da Minha Experiência
                    </h2>
                    <div id="ct-personal-ex" className="w-full text-slate-100  text-center pb-3 leading-normal">
                        Sempre estou procurando formas de aprender e atualizar-me  com as novas tecnologias 
                        que vem crescendo. Tenho bom conhecimento em metodologías ágeis da Engenharia de 
                        Software, junto com a UI e UX. 
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
                                <li>JavaScript</li>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>Java Orientado a Objeto</li>
                                <li>Excel VBA</li>
                            </ul>
                            <ul>
                                <h2>Banco de Dados</h2>
                                <li>MySql</li>
                            </ul>
                            <ul>
                                <h2>Framework</h2>
                                <li>React.js</li>
                                <li>Vite.js</li>
                                <li>TailwindCSS</li>
                            </ul>
                            <ul>
                                <h2>Metodologias Ágeis</h2>
                                <li>Scrum</li>
                                <li>Extreme Programming</li>
                                <li>Design Think</li>
                                <li>UI & UX</li>
                            </ul>
                            <ul>
                                <h2>Prototipação</h2>
                                <li>Figma</li>
                            </ul>      
                        </div>
                    </div>
                </div>
        </section>
    );

}