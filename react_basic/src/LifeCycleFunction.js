import {useState, useEffect} from 'react'

//하나의 파일에는 하나의 컴포넌트만 넣기 
function MyComponent({number}){
    
    // const {number} = props
    const [text, setText] = useState('')

    useEffect(()=>{
        console.log('항상실행됩니다')
    })

    useEffect(()=>{
        console.log('컴포넌트가 생성될때 실행됩니다.')

        return ()=>{
            console.log('제거될때 실행됩니다.')
        }
    },[])

    useEffect(()=>{
        console.log('state가 변경될 때 실행됩니다.')
    },[text])

    return<>
    <div>My Component Func {number}</div>
    <input type='text' value={text} onChange={e=> setText(e.target.value)}/>
    </>
}

export default function LifeCycleFunction(){


    const [number, setNumber] = useState(0)
    const [visible, setVisible] = useState(0)

    const changeNumberState = ()=>{
        setNumber(()=>number + 1)
    }
    const changeVisibleState = ()=>{
        setVisible(()=>!visible)
    }


    return <>
        <button onClick={changeNumberState}>PLUS</button>
        <button onClick={changeVisibleState}>ON/OFF</button> 
        {visible && <MyComponent number={number}/>}
    </>
}
