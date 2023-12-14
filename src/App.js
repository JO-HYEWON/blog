import logo from './logo.svg';
import './App.css';

function App() {

// npm start

// JSX 문법 3개
// class는 className
// 데이터바인딩은 {}
// style 넣을 땐 style={{스타일명 : '값'}}



// 최초 커밋용


let post = '강남 우동 맛집';

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color : 'red', fontSize : '16px'}}>블로그임</h4>
      </div>
      <h4>{post}</h4>
    </div>
  );
}

export default App;
