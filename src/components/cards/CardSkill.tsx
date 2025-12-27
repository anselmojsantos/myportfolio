export function CardSkill(props){
        
    return(
        <>
            <ul>
                <h2 className="bg-900 text-400 py-2 rounded-t">{props.titleH2}</h2>
                    {props.list.map((item, index)=>(<li className="p-2" key = {index}>{item}</li>))}
            </ul>
        </>
        
    )

}