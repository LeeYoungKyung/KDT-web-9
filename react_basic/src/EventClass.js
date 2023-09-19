import { Component } from "react";


class EventClass extends Component{

    constructor(props){
        //super다 받아와서 상속으로 쓰겠다는 것
        //최상에 있는 부모를 쓰겠다는 뜻 
        //super는 부모의 값을 사용하기 위하여 넣은 키워드 
        super(props)

        //this 바인딩
        //일반형 함수일때만 사용
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(){
        alert('message')
    }
    handleClick2=()=>{
        alert('클래스형 컴포넌트 2번')
    }

    render(){
        return<>
            <button onClick={this.handleClick}>Show Message</button>
            {/* <button onClick={this.handleClick2}>클릭class2번</button> */}
        </>
    }
}

export default EventClass;