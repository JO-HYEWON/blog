import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

// npm startE

// JSX 문법 3개
// class는 className
// 데이터바인딩은 {}
// style 넣을 땐 style={{스타일명 : '값'}}

let post = '강남 우동 맛집';

let [글제목1,b] = useState('남자 코트 추천');

// 이렇게 쓰면 a라고 가져오면 '남자 코트 추천'이 나온다.
// b는 state변경을 도와주는 함수임
// 변수와 state의 차이점? - 일반 변수는 갑자기 변경되면 다시 html이 변경되어야 하지만
// state는 아님. 갑자기 변경되면 자동으로 html이 랜더링이 됨.


let[글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
let[날짜, d] = useState('2월 17일 발행');
// return () 안에는 병렬로 태그 2개 이상 기입 금지
// <div></div> 를 쓰고 그 다음 또 <div></div> 쓰면 안되고 1개만 써야함

let [따봉, 따봉변경] = useState(0);

return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color : 'red', fontSize : '16px'}}>블로그임</h4>
      </div>
      <div className='list'>
        <h4>{글제목[0] } <span onClick={ () => { 따봉변경(따봉+1) } }>👍</span> {따봉} </h4>
        <p>{날짜}</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>{날짜}</p>
      </div>
      <div className='list'>
        <h4>{글제목[2]}</h4>
        <p>{날짜}</p>
      </div>
      <div>
        <button onClick={() => {
          let copy = [...글제목];
          copy[0] = '여자 코트 추천';
          글제목변경(copy);
          }}>😜</button>
          <button onClick={() => {
            let copy = [...글제목];
            글제목변경(copy.sort());
          }}>가나다순정렬</button>
      </div>

      <Modal/>
      <Test/>
    </div>
  );
}

// 컴포넌트라고 부름, 첫글자 대문자 쓰자
/**
 * 컴포넌트를 만들어 쓰면 좋은 경우
 * 1. 반복적인 html
 * 2. 큰 페이지들
 * 3. 자주 변경되는 것들
 */
function Modal(){
  return (
      <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

const Test = () => {
  return (
  <div>
    <h5>테스트다용</h5>
  </div>
  )
}

export default App;
