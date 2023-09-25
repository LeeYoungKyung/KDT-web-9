import { useState, useCallback } from "react";

function ChildComponent({onClick}){
    console.log("child Component")
    return<>
    <button onClick={onClick}>plus</button>
    </>
}

export default function UseCallback(){
    const [count , setCount ] = useState(0)
    const [inputValue,setInputValue] = useState('')


//useCallback 미사용
    const plusCount=()=>{
        setCount(()=>count + 1)
    }


    //useCallback 사용
    const plusCountCallback = useCallback(()=>{
        setCount(()=>count +1)

    },[])
    return(
    <>
    
            <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
            <ChildComponent onClick={plusCountCallback}/>
            <p>{count}</p>
    </>
    )
}