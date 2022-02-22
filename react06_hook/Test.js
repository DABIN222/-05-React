import {useState} from 'react';

function Test(){

    const [myInfo, setMyInfo] = useState({
        //  이 4개의 데이터 전부 myInfo에 들어가있다.
        username : "홍길동",
        tel : "010-1111-1111",
        addr : "서울시 강남구",
        email : "gildong@google.com"
    });
    console.log(myInfo)
    
    //  나머지 데이터를 보전하면서 수정하는 함수
    const updateInfor = ()=>{
        setMyInfo(
            //변수이름
            previous => {
                return {...previous, addr:"서울시 영등포구", email:"hong@google.com"};
            }
        );
    }
    
    const updateInfor2 = (part, data)=>{
        setMyInfo(p=>{
            if(part == 1) return{...p, username:data};
            if(part == 2) return{...p, tel:data};
            if(part == 3) return{...p, addr:data};
            if(part == 4) return{...p, email:data};
        });
    }

    return(
        // 나가는 건 반드시 <div>로 묶여있어야 한다.
        <div>
            <ol>
                <li>이름 : {myInfo.username}</li>
                <li>연락처 : {myInfo.tel}</li>
                <li>주소 : {myInfo.addr}</li>
                <li>이메일 : {myInfo.email}</li>
            </ol>
            {/* 데이터 중 1개만 수정할 시, 나머지 데이터는 초기화 된다. */}
            <button onClick={()=> setMyInfo({tel:'010-7777-7777'})}>연락처 변경하기</button>
            {/* 기존 데이터를 보전하면서 새로운 데이터가 수정되는 함수를 생성한다. */}
            <button onClick={updateInfor}>일부 정보 변경</button>
            <hr/>
            <button onClick={()=>updateInfor2(1,'세종대왕')}>이름변경</button>
            <button onClick={()=>updateInfor2(2,'02-8963-9634')}>연락처변경</button>
            <button onClick={()=>updateInfor2(3,'서울시강동구')}>주소변경</button>
            <button onClick={()=>updateInfor2(4,'goguma@google.com')}>이메일변경</button>
        </div>
    );
}
export default Test;
