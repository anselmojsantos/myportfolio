import { CardCursoProps } from "@/types";


export function CardsComponents({linkImg,textSpan, textSpanBold,linkPages,linkGit}: CardCursoProps){
    return(
        <div id='id-card-pj' className='w-52  h-60 bg-1000 rounded-xl p-4 cursor-pointer flex flex-col justify-between'>
            <div id="id-img-pj" className='w-full h-[50%]'>
                <img className='rounded-t-xl w-full h-full' src={linkImg} />
            </div>
            <div id='id-information' className='w-full text-center'>
                <span className=' mt-4 text-[#49E8FF]'>{textSpanBold}</span> | {textSpan}
            </div>
            <div className='w-full flex justify-between'>
                < a className={`${linkGit ? 'px-5 py-1':'py-1 w-full text-center'} bg-400 rounded  hover:bg-[#09afe6be]`} href={linkPages} target={'_blank'} >Link</a>
                {linkGit && (
                    < a className='px-5 py-1 border-2 border-400 rounded hover:bg-bg-blue-900' href={linkGit}target={'_blank'}>GitHub</a>
                )}
            </div>
        </div>                  
    );
}