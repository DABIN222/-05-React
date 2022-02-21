
import './App.css';

function App() {
  /* 스타일 시트를 json으로 작성하여 적용하기 */
  const sytle1 = {
    backgroundColor:'#000',
    padding:'20px',
    color:'#fff',
    marginTop:"10px",
    textAlign:"center"
  }

  const value ="1234";
  return (
    <div>
      {/* 주석 사용 */}
      {/* 따옴표 사용 하지 말 것!! */}
      <div sytle={sytle1}>JSon스타일 적용하기</div>

      <div>
        {
          1+1==2
          ? (<h1>맞습니다....</h1>)
          : (<h1>틀립니다!!!!</h1>)
        }
      </div>
      <div>
        <div>참일 때 실행문장만 있을 때</div>
        {
          1+1==3 && (<h1>맞쥬맞쥬?</h1>)
        }
      </div>
      <div>
        <div>함수를 이용한 실행</div>
        {
          (
            function(){
              if(value==1234) return (<h1>하나둘셋넷</h1>);
              if(value!=1234){
                var d ="";
                for(var i=1; i<10; i++){
                  d += i;
                }
                return (<h1>{d}</h1>);
              }
            }
          )()
        }
      </div>
      <div>
        {
          (
            ()=>{
              if(value==1234) return(<p>람다식 함수 생성하여 실행됨</p>)
            }
          )()
        }
      </div>
    </div>
  );
}

export default App;
