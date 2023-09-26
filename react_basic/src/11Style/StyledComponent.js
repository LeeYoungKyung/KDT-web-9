import styled from "styled-components";

// const _Boxone = styled.div`
//     background-color : blue;
//     width : 100px;
//     height : 100px;
// `;

// //props

// const _Boxtwo = styled.div`
//     background-color: ${(props)=>props.color};
//     width: 100px;
//     height: 100px;
// `;

// //상속 받아서 이용하는 방법
// const _Circle = styled(_Boxtwo)`
// background-color: ${props=>props.color};
// width: 100px;
// height: 100px;
// border-radius: 50%;
// `

//기존 태그를 이름만 바꿔서 사용하는 방법
const _Btn = styled.button`
  background-color: aqua;
  color: red;
  padding: 10px 15px;
  border-radius: 4px;
`;
//html태그에 옵션값을 넣는 방법
const _Input = styled.input.attrs({ required: true })`
  background-color: yellow;
`;

//중첩
const _Boxthree = styled.div`
  width: 200px;
  height: 200px;
  background-color: blueviolet;
  line-height: 200px;
  text-align: center;

  //다른 컴포넌트를 불러와서 사용
  ${_Input} {
    background-color: brown;
  }

  p {
    color: white;
    font-weight: bold;
    &:hover {
      font-size: 30px;
    }
  }
`;

const _buttonColor = styled.button`
  width: 200px;
  height: 200px;
  background-color: blue;
  color: white;
  &:active {
    background-color: red;
    color: black;
  }
`;
const _ToDo = styled.div`
  width: 200px;
  height: 200px;
  background-color: aliceblue;
  ${_Input} {
    background-color: aliceblue;
  }
`;

export default function StyledComponent() {
  return (
    <div>
      <_ToDo>
        <_Input />
        <button>ADD</button>
      </_ToDo>
      {/* <_buttonColor>색상변경!</_buttonColor>
      <_Boxthree>
        <p>색상변경</p>
        <_Input />
      </_Boxthree> */}
      {/* <_Boxone></_Boxone>
        <_Boxtwo color={"red"}></_Boxtwo>
        <_Boxtwo color={'orange'}></_Boxtwo>
        <_Circle color={'green'}/> */}
      {/* <_Btn onClick={color}>색상변경!</_Btn> */}
      {/* <_Btn as='a' href='.../'>a태그</_Btn> */}
      {/* <_Input /> */}
      <br />
      {/* <_Input /> */}
      <br />
      {/* <_Input /> */}
    </div>
  );
}
