import React, { Component } from "react";

class Practice2 extends Component {

  constructor(props){
    super(props)

    this.state = {
      inputWriter : "",//작성자
      inputTitle : "",//제목
      comments : [],//입력한 내용
      inputSearch:'',//검색타입
      searchType:'',
      results : []//검색결과
      
    }
    this.onChange=this.onChange.bind(this)
    this.addComment=this.addComment.bind(this)
  }


  onChange = (event)=>{
    this.setState({inputWriter:event.target.value})

  }

  addComment(){
    const newComment = {
      writer : this.state.inputWriter,
      title : this.state.inputTitle
    }
    this.setState(()=>({comments: [...this.state.comments,newComment]}))
    console.log(this.state.inputWriter)
  }
  searchComment(){
    this.state.comments.filter(value=>{
      console.log(value)
      //문자열 형태라서
      console.log(value['this.state.searchType'])
      const type = value['this.state.searchType']
      const include = type.includes(this.state.inputSearch)
      if(!include){
        return false
      }
      return true
    })
    this.setState({results: searchResult})
  }

  addComment
  render(){
    return(

        <>
        <form>
          <label htmlFor="writer">작성자 :</label>
          <input id="writer" type="text" value={this.state.input} onChange={(e)=>this.setState(e)}/>
          <input id="title" type="text" value={this.state.inputTitle} onChange={(e)=>this.setState({inputTitle:e.target.value})}></input>
          <button type="button" onClick={this.addComment}>작성</button>
        </form>
        <form>
          {/* 선택하는 화살표 내려오는 그것 */}
          {/* onChange : input, textarea,select 값이 변경될때마다 발생하는 이벤트 헨틀러 */}
          <select value={searchType} onChange={(e)=>this.setState({searchType:e.target.value})}> 
            <option value="writer">작성자</option>
            <option value="title">제목</option>
          </select>
          <input type="text" placeholder="검색어" value={inputSearch} onChange={(e)=>this.setState({inputSearch:e.target.value})}></input>
          <button></button>
        </form>
        <table>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </table>
        <h4></h4>
        </>
    

    ) 
  }
}

export default Practice2;

