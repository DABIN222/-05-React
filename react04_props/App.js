import logo from './logo.svg';
import './App.css';

function App() {
  // 자바스크립트에서 매개변수 html은 속성과 같은 것이다.
  function MyCar (props) {
    return <h1>나의 자가용은 {props.bland}이다. </h1>
  }

  function MyCar2(props){
      return (<h2>이름:{props.bland.name}, 모델:{props.bland.model}</h2>)
  }

  const myCar2 = <MyCar bland='제네시스'/>;
  //props 매개변수로 다른 함수에 데이터 전달하기
  function MyGarage(){
    const carName = "그랜저";
    const carInfo={name:"모닝", model:"기아"}

    return (
        <div>
          <h1>나의 차고~~~</h1>
          <MyCar bland="볼보"/>
          <MyCar bland={carName}/>{/*따옴표 사용 불가*/}
          <MyCar2 bland={carInfo}/>
        </div>

    );
  }
  return (
    <div className="App">
      {(<MyCar bland={'소나타'}></MyCar>)}
      {(myCar2)}
      {(<MyGarage></MyGarage>)}
    </div>
  );
}

export default App;
