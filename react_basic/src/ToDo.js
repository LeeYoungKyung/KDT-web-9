// import { useState } from "react";

// export default function ToDo(){
//     const [input, setInput] = input('')
//     const[todos, setTodos] = useState({})

//     const addTodo = ()=>{
//         if(todos.length>10){
//             alert('할일이 너무 많아요')
//         }
//         if(inputTodo !=='') {
//             const newTodo = {
//                 text : inputTodo,
//                 checked : false,

//             }
//             setTodos({...todos,newTodo})
//             setInputTodo('')
//         }
//     }
//     const toggleTodo =(id) =>{
        
//     }

    
//     return (
//         <div>
//             <input type="text" value={inputTodo} onChange={e=>setInputTodo(e.target.value)} placeholder="할 일 입력"/>
//             <button onClick={addTodo}>추가</button>
//             <ul>
//                 {todos.map((todo,index) => {
//                     <li>{todo.id}</li>
//                 })}
//             </ul>
//             <button>완료된 할 일 삭제</button>
//         </div>
//     )
// }
