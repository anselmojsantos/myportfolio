

export function CardsComponents({linkImg,textSpan, textColor, textSpanBold,linkPages,linkGit}){
    return(
        <div id='id-card-pj' className='w-52  h-60 bg-1000 rounded-xl p-4 cursor-pointer flex flex-col justify-between'>
            <div id="id-img-pj" className='w-full h-[50%]'>
                <img className='rounded-t-xl w-full h-full' src={linkImg} />
            </div>
            <div id='id-information' className='w-full text-center'>
                <span className=' mt-4' style={{color:textColor}}>{textSpanBold}</span> | {textSpan}
            </div>
            <div className='w-full flex justify-between'>
                < a className='px-5 py-1 bg-400 rounded  hover:bg-[#4F2AFA]' href={linkPages} target={'_blank'} >Link</a>
                < a className='px-5 py-1 border-2 border-400 rounded hover:bg-bg-blue-900' href={linkGit}target={'_blank'}>GitHub</a>
            </div>
        </div>                  
    );
}