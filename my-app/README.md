<br><br>
---------------------------------------
## ***. my-app Project***

<br><br>

#### node 최신 버전 모듈 설치 하고 나서 버전 변경할 때
<br>
package-lock.json <br>
package.json <br>
 두 폴더를 <br>

프로젝트 모듈파일 삭제 후 예전 버전을 적용한다.
<br>

![화면 캡처 2024-12-17 121400](https://github.com/user-attachments/assets/8f049135-6f66-4f98-b07a-3efec312d1be) <br>

![화면 캡처 2024-12-17 121629](https://github.com/user-attachments/assets/4f7a0209-a60f-4ba5-9ba7-c15ecea5d5a6) <br>
<br>

두 폴더를 만들고 나서 
#### npm i   / npm start


-------------------------
### Webpack이란? : 리액트를 배포하도록 만듬.
<br>

#### App.js(src) -> index.js(scr)  -> index.html(public) : 출력  (rendering)

-- 실제 내용은 App.js 파일에서 작성

<br><br>

![화면 캡처 2024-12-17 094911](https://github.com/user-attachments/assets/aa014d43-e44c-4751-9b81-5860fa5715e4)
<br> 

<App/> 없이는..? 실행안됨 <br>

![화면 캡처 2024-12-17 095150](https://github.com/user-attachments/assets/d7d39527-0065-4126-a7cc-2c79dbd94e44)

다시 살리면..?!
<br>
![화면 캡처 2024-12-17 095250](https://github.com/user-attachments/assets/40d0b0a0-ce42-4cfa-86d8-4882687a619c)

#### 페이지사용가능 <br>

html 은 테그가 만들어져 있고 
xml은 테그를 만들어서 쓸 수 있음 

자바스크립트를 사용하되 테크를 만들어서 사용가능하여 
정확히는 jsxml 이 정확함
<br>

![화면 캡처 2024-12-17 095842](https://github.com/user-attachments/assets/7491fa69-a8fd-44a5-a3a9-d0a99e47fcb5)
<br>
수정시 <br>
      import './App.css'; <br>
      
<br> 있어야 가운데 정렬 
<br>>> css에서 다룸
![화면 캡처 2024-12-17 102314](https://github.com/user-attachments/assets/df59c4f7-8236-4b48-9703-e1c587661ec4) 
<br>


![화면 캡처 2024-12-17 102421](https://github.com/user-attachments/assets/2f184bb9-c1b1-4ed9-8a70-bcea0facb489)

<br>


---------------
#### - 배포판 만들기

<br>
npm run build <br>

![화면 캡처 2024-12-17 102804](https://github.com/user-attachments/assets/8a9eccb4-e4c9-402b-92e3-119260a213fd) <br>

![화면 캡처 2024-12-17 103004](https://github.com/user-attachments/assets/eda15763-04b3-4fa8-933a-cddcbabe69f1) <br>
<br> 
배포판 링크 ctrl + Click

<br>
<br>
------------------------------
새로운 프로젝트 생성 방식  -vite 최적화된 React 사용

D:\kmr_data\react_data\my-app>cd ..

D:\kmr_data\react_data>npm create vite@latest

<br>

### <Header> 사용자 정의함수->  리엑트에서 컴포넌트 태그라고 말함

![화면 캡처 2024-12-17 112950](https://github.com/user-attachments/assets/94e41962-3704-4715-bdd1-e9baf25c53be)
<br>

      function Header(props){
        console.log(object);
      
        return(
          <header>
            <h1><a href='/'>Hi - ̗̀( ˶' ３'˶) ̖́- React</a></h1>
          </header>
        )
      }
      

#### clg 단축키 console.log();

      function Header(props){
      
        console.log('props',props.title);
      
        return(
          <header>
            <h1><a href="/">{props.title}</a></h1>
          </header>
        )
      }


      function App() {
        return (
          < >   
            <Header title="React"></Header>
            <Nav></Nav>
            <Article></Article>
          </>
        );
      }
<br>

![화면 캡처 2024-12-17 114914](https://github.com/user-attachments/assets/6af63ee3-7533-42b3-81a3-193dd078911d)

<br>


      function Nav(){
         const lis =[
      
          <li><a href="/read/1">html</a></li>,
          <li><a href="/read/2">css</a></li>,
          <li><a href="/read/3">js</a></li>
          
        ]
        return(
          <nav>
            <ol>
              {lis}
            </ol>
          </nav>
        )
      }

<br>

      function App() {
        const topics =[
          {id:1, title:'html', body:'html is ...'},
          {id:2, title:'css', body:'css is ...'},
          {id:3, title:'javascript', body:'javascript is ...'}
        ]
        return (
          < >   
            <Header title="React"></Header>
            <Nav topics={topics}></Nav>
            <Article title="Welcome" body="Hello, Web :)"></Article>
            <Article title="HI" body="hello, Web :)"></Article>
          </>
        );
      }

<br>

### -> 다시 props전달하면 topics에서 받을 수 있다 
<br>

![화면 캡처 2024-12-17 122936](https://github.com/user-attachments/assets/39260f46-74c3-45d2-8407-1d8eedae32aa)
<br>




APP을 우선 title 옆에 모드 변견 적용한 후 

      
      function App() {
        const topics =[
          {id:1, title:'html', body:'html is ...'},
          {id:2, title:'css', body:'css is ...'},
          {id:3, title:'javascript', body:'javascript is ...'}
        ]
        return (
          < >   
            <Header title="WEB" onChangeMode = {function(){
              alert('Header');
            }}></Header>
      
            <Nav topics={topics}></Nav>
            <Article title="Welcome" body="Hello, Web :)"></Article>
            <Article title="HI" body="hello, Web :)"></Article>
          </>
        );
      }

Header(props)
return 값에 추가 

onClick - changeMode 가능해짐 

![화면 캡처 2024-12-17 124232](https://github.com/user-attachments/assets/7b46de7d-e1c2-4214-b800-79b38e324efe) <br>
![화면 캡처 2024-12-17 130024](https://github.com/user-attachments/assets/dca19f24-fd02-47be-9e65-ceeead283b15) <br>

<br><br>

![화면 캡처 2024-12-17 130024](https://github.com/user-attachments/assets/dca19f24-fd02-47be-9e65-ceeead283b15)
![화면 캡처 2024-12-17 130051](https://github.com/user-attachments/assets/d2e23d49-aa76-487d-a20d-a16fef8de846)

state 만들기 시작 
<br>


* 구조 분해 할당* 
const 는 값을 변경 할 수 없음.
<br>


useState -> Hook : 구조 분해 할당...?
<br>
![화면 캡처 2024-12-17 155843](https://github.com/user-attachments/assets/b28316d2-f9d3-4562-8af6-6194aa617455)

<br>

