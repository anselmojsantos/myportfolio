import { CardCurso } from "./cards/CardCurso";

export function Curso(){
    
    return(
        <section id="id-curso" 
            className="w-ful h-auto flex justify-center">
            <div id="id-pj" 
                className='w-[1040px] h-auto text-slate-50 p-5 bg-bg-blue-900 relative
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
                    bgColor = '#09afe61a'
                    borderCol = '#7456FF'
                    linkImg= 'https://www.vemprafam.com.br/wp-content/uploads/2019/06/logo-1.png'
                    linkUrl = 'https://vemprafam.com.br/'
                    textSpan = 'Faculdade das Américas'
                    textP = 'Curso: Sistema de Informação'
                />
                <CardCurso 
                    bgColor = '#09afe61a'
                    borderCol = '#7456FF'
                    linkImg='https://univesp.br/sites/58f6506869226e9479d38201/theme/images/logo-univesp.png?1746625787'
                    linkUrl = 'https://univesp.br/'
                    textSpan = 'Univesp'
                    textP = 'Curso: Ciências de Dados | 2022'
                />
                <CardCurso 
                    bgColor = '#09afe61a'
                    borderCol = '#7456FF'
                    linkImg='B7Web'
                    linkUrl='https://app.b7web.com.br/'
                    textSpan = 'B7Web'
                    textP = 'Curso: Full Stack Dev'
                />
                <CardCurso 
                    bgColor = '#09afe61a'
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
                <CardCurso 
                    bgColor = '#7456ff1c'
                    borderCol = '#7456FF'
                    linkImg='https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg'
                    linkUrl='https://www.udemy.com/course/formacao-em-ciencia-de-dados/?couponCode=LOCLZDOFFPBRTRMT'
                    textSpan = 'Udemy'
                    textP = 'Curso: Formação Plena em Analise e  Ciência de Dados | 2025 '
                />
                </div>
            </div>
        </section>
    );
}