import React from 'react';
import './App.css';


function App() {
//  JSA는 Javascript와 XML의 약자이다.
//  JSX는 리액트에서 HTML을 쉽게 작성할 수 있도록 하는 방법이다.

const element1 = <h1>HTML은 문자열로 처리해야 한다.</h1>
const element2 = (
  <ul>
    <li>바나나</li>
    <li>사과</li>
  </ul>
);
const element3 = (
  <>
    <p>해바라기</p>
    <p>코스모스</p>
  </>
);
//  jSX를 사용하지 않고 태그를 사용하는 방법
//                                    <h2>태그 내에 표시되는 내용</h2>
const element4 = React.createElement('h2', {}, '태그 내에 표시되는 내용');

//  변수 사용하는 방법
const x = 100;
let y = "React test 중...";
if(x > 50){
  y = "새로운 값으로 변경됨"
}

const element5 = <div>{y}</div>;

  return (
      <ul>
        <li>{element1}</li>
        <li>{element2}</li>
        <li>{element3}</li>
        <li>{element4}</li>
        <li>{element5}</li>
      </ul>
  );
}

export default App;
