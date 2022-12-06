

export function CardCurso({linkImg, bgColor,borderCol, textSpan, textP,textColor, linkUrl}){
    return(
        <>
        <a href={linkUrl} target='blank'>
            <div id='id-card-pj' className='w-52  h-60 rounded-xl p-4 cursor-pointer bg-900 flex flex-col justify-between items-center'>
            
                <div id="id-img-pj" className='w-28 h-28  rounded-full ring-1 ring-[#3a3a3a] flex items-center justify-center'>
                    <div id="id-img-pj" style={{backgroundColor:bgColor,borderColor:borderCol}} 
                                        className='w-24 h-24 p-3 rounded-full ring-1 flex items-center justify-center '>
                        <a><img className='w-14 ' src={linkImg}/></a>   
                    </div>
                </div>
                            
                <div id='id-information' className='w-full text-center'>
                    <span className=' mt-4' style={{color:textColor}}>{textSpan}</span> 
                </div>
                <div className='w-full text-center'>
                    {textP}
                </div>
            </div>  
        </a>
       
        </>                
    );
}