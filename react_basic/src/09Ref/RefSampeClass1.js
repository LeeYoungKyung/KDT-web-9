
import { Component } from "react";

//콜백함수 형태 
class RefSampleClass1 extends Component{

    handleFocus = ()=>{
        this.myInput.focus()
    }
    render(){
        return<>        
            <p>(클래스형 컴포넌트) 버튼 클릭시 input에 focus 처리</p>
            <input ref={(ref)=>{this.myInput = ref}}/>
            <button onClick={this.handleFocus}>버튼</button>
        </>
        
    }
}

export default RefSampleClass1