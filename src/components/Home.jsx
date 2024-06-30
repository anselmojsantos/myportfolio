import React,{useState, useEffect} from 'react';
import {CgFileDocument} from 'react-icons/cg';
import { TextApresentation } from './texts/TextApresentation';

export  function Home (){
    const [user, setUser] = useState({name:'', avatar:'',reposURL:''})
    const [rep, setRep] = useState({url:''})

    useEffect(()=>{
        fetch('https://api.github.com/users/anselmojsantos')
        .then(response => response.json())
        .then(data=>{
          setUser({
            name:data.name,
            avatar:data.avatar_url,
            reposURL:data.repos_url
          })
        })
      },[])

    function btnHome(){
        window.open("https://drive.google.com/file/d/1Y_M_sRVrgN2LCNXLZEmQU8GA-iUxttld/view?usp=sharing","_blank")
        
    }
    
    return(
        <section id ="home" className="w-full h-auto flex justify-center ">
            <div id = "home-ct" 
                className="w-[1040px] h-auto p-5 rounded-xl flex items-center 
                            justify-between bg-bg-blue-900 relative mt-20
                            lg:px-2 md:flex-col-reverse md:w-full sm:p-4"
                >
                    <div id="home-wc" 
                        className="h-full flex-1 flex flex-col justify-between items-baseline leading-loose"
                    >
                         <h1 id='t-h1' 
                            className="text-50 font-semibold text-[35px]
                                md:m-auto md:-text-[30px] sm:text-[19px]"
                        >
                            Bem vindo ao meu portifólio,<br />
                            meu nome é <span className="text-400">{user.name}</span>
                        </h1>
                        <div className="text-sm text-50 mb-4 md:m-ma">Study of Information Systen</div>
                        <div className="text-50 text-justify mb-4 mr-[10px] leading-loose">
                        <TextApresentation />
                        </div>
                        <button type="button" id="btn" 
                            className=" h-14 flex justify-center items-center gap-1 py-4 bg-[#09AFE6] w-[150px] rounded text-slate-700  
                                cursor-pointer shadow-md transition-colors ring-white sm:w-full
                            hover:border-white hover:bg-[#09afe6be] focus:ring-2" 
                                 onClick={btnHome}
                        >
                          <CgFileDocument className='w-6' />  Open CV
                        </button>
                    </div> 
                    
                    <div id='user' 
                        className="w-[320px] ml-[10px] flex justify-center
                            md:ml-0 md:w-full"
                    >
                    <div id="avatar" 
                        className='w-[320px] h-[320px] flex items-center justify-center  
                                   text-slate-100  overflow-hidden
                                   md:w-auto md:h-auto md:mb-2'
                        >
                            <img id='img-user'
                            className='w-[320px] h-[320px] border-4 border-white rounded-full 
                                       p-2 shadow-shi text-center leading-[310px]
                                       md:w-24 md:h-24 md:border-[1px] md:shadow-mbl md:p-[0.2rem]'
                            src={user.avatar} alt='Foto de Perfil'
                        />
                        </div>
                    </div>                          
            </div>
        </section>
    )
}
