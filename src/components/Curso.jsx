import { CardCurso } from "./cards/CardCurso";

export function Curso(){
    
    return(
        <section id="id-curso" 
            className="w-ful h-auto flex justify-center">
            <div id="id-pj" 
                className='w-[1024px] h-auto text-slate-50 p-5 bg-bg-blue-900 relative
                lg:px-2' 
                >
                <h2 id="t-h2"
                        className="w-full text-400 text-center text-[25px] font-semibold
                        pb-6"
                >
                        Cursos  & Formação
                </h2>
                <div id="id-ct-crs" className='w-full h-auto flex justify-around items-center flex-wrap'>
                <CardCurso 
                    bgColor = '#7456ff1c'
                    borderCol = '#7456FF'
                    linkImg='https://vemprafam.com.br/wp-content/uploads/2019/06/logo-1.png'
                    linkUrl = 'https://vemprafam.com.br/'
                    textSpan = 'Faculdade das Américas'
                    textP = 'Curso: Sistema de Informação'
                />
                <CardCurso 
                    bgColor = '#7456ff1c'
                    borderCol = '#7456FF'
                    linkImg='	https://b7web.com.br/fullstack/static/media/logo.774c48ad.png'
                    linkUrl='https://b7web.com.br/fullstack/'
                    textSpan = 'B7Web'
                    textP = 'Curso: Full Stack Dev'
                />
                <CardCurso 
                    bgColor = '#7456ff1c'
                    borderCol = '#7456FF'
                    linkImg='https://projetojavaweb.com/certificado-aluno/static/img/logotipo.png'
                    linkUrl='https://www.jdevtreinamento.com.br/'
                    textSpan = 'JDev Treinamentos'
                    textP = 'Curso: Java Web'
                />
                <CardCurso 
                    bgColor = '#7456ff1c'
                    borderCol = '#7456FF'
                    linkImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7-6phNFixniGjHmRTSOWH-kMscXGt0o9OAw&usqp=CAU'
                    linkUrl='https://app.rocketseat.com.br/'
                    textSpan = 'RocketSeat'
                    textP = 'Curso: Eventos Ignite Lab | NLW'
                />
                </div>
            </div>
        </section>
    );
}