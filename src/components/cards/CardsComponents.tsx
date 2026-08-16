import { CardCursoProps } from "@/types";


export function CardsComponents({linkImg,textSpan, textSpanBold,textP,linkPages,linkGit,onClick}: CardCursoProps){
    return(
        <div id='id-card-pj' className='w-52  h-64 bg-1000 rounded-xl p-4 cursor-pointer flex flex-col justify-between' onClick={onClick}>
            <div id="id-img-pj" className='w-full h-[45%]'>
                <img className='rounded-t-xl w-full h-full' src={linkImg} />
            </div>
            <div id='id-information' className='w-full text-center'>
                <span className=' mt-4 text-[#49E8FF]'>{textSpanBold}</span> | {textSpan}
                {textP && <div className='text-xs mt-1'>{textP}</div>}
            </div>
            <div className='w-full flex justify-between' onClick={(e) => e.stopPropagation()}>
                < a className={`${linkGit ? 'px-5 py-1':'py-1 w-full text-center'} bg-400 rounded  hover:bg-[#09afe6be]`} href={linkPages} target={'_blank'} >Link</a>
                {linkGit && (
                    < a className='px-5 py-1 border-2 border-400 rounded hover:bg-bg-blue-900' href={linkGit}target={'_blank'}>GitHub</a>
                )}
            </div>
        </div>                  
    );
}