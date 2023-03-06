import React ,{useState} from 'react'




function LessonHook(){
    const [name, setName] = useState('Aravind');
    
    const changeName = ()=>{
       setName('kkkk')
    }
    return(
        <div>
            <h1>Hello {name} </h1>
            <button onClick={changeName}>change name</button>
        </div>
    )
}

export default LessonHook;