import './App.css';
import { useState } from 'react';
import { Header } from './Component/Header';
import Nav from './Component/Nav';
import { Article } from './Component/Article';
import { Create } from './Component/Create';
import { Update } from './Component/Update';

// App 컴포넌트
function App() {
  // 상태 변수 정의
  const [mode, setMode] = useState('WELCOME'); // 현재 화면 모드
  const [id, setId] = useState(null); // 선택된 주제의 id (READ 모드에서 사용)
  const [nextId, setNextId] = useState(4); // 새로운 주제를 생성할 때 사용할 id
  const [topics, setTopics] = useState([
    { id: 1, title: 'html🌟', body: 'html is ...' },
    { id: 2, title: 'css🪐', body: 'css is ...' },
    { id: 3, title: 'javascript🌙', body: 'javascript is ...' },
  ]); // 초기 주제 목록

  let content = null;
  let contextControl = null;

  // 화면 모드가 'WELCOME'
  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, Web🌏"></Article>;
    
  } 
  // 화면 모드가 'READ'
  else if (mode === 'READ') {
    let title, body = null;

    // 선택된 id에 해당하는 주제를 찾고 그 내용을 title과 body에 저장
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>;
    contextControl = <li><a href={'/update'+id} onClick={event=>{
      event.preventDefault();
      setMode('UPDATE'); 

    }}>Update🌠</a></li>
  } 
  // 화면 모드가 'CREATE'
  else if (mode === 'CREATE') {
    content = (
      <Create
        onCreate={(_title, _body) => {
          const newTopic = { id: nextId, title: _title, body: _body };  // 새로운 주제 객체
          const newTopics = [...topics];      // 기존 주제 목록 복사
          newTopics.push(newTopic);          // 새로운 주제를 목록에 추가
          setTopics(newTopics);             // 상태 업데이트
          setMode('READ');                 // 화면 모드를 'READ'로 변경
          setId(nextId);                  // 새로 생성된 주제의 id 설정
          setNextId(nextId+1);           // 다음 id 준비
        }}></Create>
    );                                // Create 모드 렌더링
  }else if (mode === 'UPDATE') {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Update title={title} body={body} onUpdate={(newTitle, body)=>{
      console.log(title, body);
      const newTopics = [...topics];
      const updatedTopic ={id:id, title:title, body:body}
      for (let i = 0; i < newTopics.length; i++) {
        if (newTopics[i].id === id) {
          newTopics[i] = updatedTopic;
          break;
        }
      }
      setTopics(newTopics);   //상태업데이트
      setMode('READ'); // Update 후 Read 모드로 전환
    }}></Update>
  }
  return (
    <>
      {/* Header 컴포넌트 렌더링: 웹 제목과 모드 변경 */}
      <Header
        title="WEB🌏"
        onChangeMode={() => {
          setMode('WELCOME'); // 헤더 클릭 시 화면 모드를 'WELCOME'으로 변경
        }}
      ></Header>

      {/* Nav 컴포넌트 렌더링: 주제 목록과 주제 선택 시 모드 변경 */}
      <Nav
        topics={topics}
        onChangeMode={(_id) => {
          setMode('READ'); // 주제 클릭 시 화면 모드를 'READ'로 변경
          setId(_id); // 클릭한 주제의 id 설정
        }}
      ></Nav>
      {content}
        <ul>
         <li><a href="/create" onClick={(event) => {
            event.preventDefault(); // 기본 링크 동작 방지
            setMode('CREATE'); // 화면 모드를 'CREATE'로 변경
          }}>Create_🖋️</a></li>


          {/* <li><a href ="/update"  onClick={(event) => {
            event.preventDefault(); // 기본 링크 동작 방지
            setMode('UPDATE'); // 화면 모드를 'CREATE'로 변경
          }}>Update🌠</a></li> */}
          
          {contextControl}
        </ul>
    </>
  );
}

export default App;
