//  js파일을 사용하기 위해 import 하여야 한다.
import Test from './Test'
import React, {useState} from 'react';
import './App.css';

function App() {
  const name="홍길동";
  //  React의 useState 훅을 사용하면 함수의 데이터 상태를 추적할 수 있다.
  const [color, setColor] = useState("RED");
  const [tel, setTel] = useState("010-1111-1111");

  const flower = ["코스모스","해바라기","민들레","히야신스","마리골드"];
  function FlowerList(props){
    return <li>내가 좋아하는 꽃은 {props.flowerName}</li>;
  }

  return (
    <div>
      <div>Color : {color}, Tel : {tel}</div>
      <button onClick={()=>setColor("Green")}>컬러변경(Green)</button>
      <button onClick={()=>setTel("010-8888-8888")}>연락처변경</button>
      <hr/>
      {<Test/>}

      <div>배열을 반목문처리</div>
      <ol>
        {/* map()함수를 이용한 배열의 반복 처리를 한다. */}
        {/* 배열명.map */}
        {flower.map((f)=><FlowerList flowerName={f} />)}
      </ol>

    </div>
  );
}

export default App;
