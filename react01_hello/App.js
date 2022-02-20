import logo from './logo.svg';
import './App.css';

function Hello() {
  //  var
  //  let
  //  const
  const name = "홍길동";

  //  리액트에서 함수 생성하기
  function myWelcome(){
    let hello = "하이하이하이~";
    //  여기에서 let hello 를 또 선언할 수는 없다.
    if(true){
      let hello = '헬로우~?';
      console.log(hello);
    }
    console.log(hello);
    return hello;
  }

  return (
    <div>
      <h1>바로반응한다.</h1>
      <p>Welcome Page : {name}</p>
      <ul>
        <li>name : {name}</li>
        <li>WelCome : {myWelcome()}</li>
      </ul>
    </div>
  );
}

//  함수에서 실행되서 리턴되는 것을 적어주면 됌
export default Hello;
