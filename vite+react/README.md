<br><br>
---------------------------------------
## Vite + React test

<br>
<br>
<br>
내용이 적을 때는 export 한번에 통으로 가능하지만,


      Body.jsx

      export const Body = ({name, location, favorList}) => {
        console.log(name, location, favorList);
        return (
          <div className="body">
            {name}는 {location}에 거주합니다.
            <br />
            {favorList.length}개의 음식을 좋아합니다.
          </div>
        );
      }

<br>

내용이 길어지면 밑에 한번에 export 한다.

      
      import "./Body.css"
        
      function Body ({name, location, favorList}) {
        console.log(name, location, favorList);
        return (
          <div className="body">
            {name}는 {location}에 거주합니다.
            <br />
            {favorList.length}개의 음식을 좋아합니다.
          </div>
        );
      }
      Body.defaultProps = {
        favorList:[],
      };
      export default Body;

<br><br>

여러 코드를 export할 수 있지만, 
#### export default는 한번만 가능하다..! 

      ex)
      // Component1.js
      
      const ComponentA = () => {
        return <div>Component A</div>;
      };
      
      const ComponentB = () => {
        return <div>Component B</div>;
      };
      
      // 하나의 default export
      const MainComponent = () => {
        return <div>Main Component</div>;
      };
      
      // export 묶기
      export { ComponentA, ComponentB };
      export default MainComponent;

<br><br>

#### 자바에서는 클래스 단위로 파일을 생성, <br>
- 하나의 파일에 여러 개의 클래스가 생성가능 <br>
단, public은 한 개만
<br><br>

#### React 에서는 함수 단위로 파일을 만든다.! <br>
- 하나의 파일에 여러 개의 함수가 생성가능 <br>
단, export default는 한 개만

<br><br>
-----------------
### 실행순서 <br>
1. 리엑트 환경설정 
2. 컴포너트 
3. props
4. 컴포넌트도 props로 전달
5. event 
6. state



#### Assembly - Assembling -Assembler 기호언어

      
      import { useState } from "react";
      
      function Body(){
        console.log("Update!");
        const [count, setCount] = useState(0);
        const onIncrease = () => {
          setCount(count + 1);
        };
        return (
          <div>
            <h2>{count}</h2>
            <button onClick={onIncrease}>today-:D</button>
          </div> 
        ); 
      
      
      }
      export default Body;


![화면 캡처 2024-12-20 122836](https://github.com/user-attachments/assets/5630967c-73d0-412b-aeae-ccbb739f74be)

<br><br>

 console.log("Update!");
콘솔에 +1 될 때마다 


![화면 캡처 2024-12-20 122952](https://github.com/user-attachments/assets/8095d79f-8b83-474d-ac8f-2caf0e3cee49)


      
      
      function Body(){
        const handleOnChange = (e) => {
          console.log (e.target.value);
        };
        return (
          <div>
            <input onChange={handleOnChange}/>
          </div> 
        ); 
      
      
      }
      export default Body;
      


![화면 캡처 2024-12-20 123607](https://github.com/user-attachments/assets/49a14508-c458-4c08-ada4-749f1c0eadcb)


text를 한번 입력하는데도 작은 차이가 있을 때 마다 console 에 적용됨. <br>
#### text 입력 끝나고 {useState}를 이용해서 click 한 후 console 이 한번에 적용되게 해야 함.
<br>
      
      import { useState } from "react";
      
      function Body(){
        const [text, setText] = useState("");
        const handleOnChange = (e) => {
          setText(e.target.value);
        };
      
        return (
          <div>
            <input value={text} onChange={handleOnChange}/>
            <div>{text}</div>
          </div> 
        ); 
      
      
      }
      export default Body;


![화면 캡처 2024-12-20 124009](https://github.com/user-attachments/assets/3c22e350-a89a-4938-8ed8-1ffa17bb87a6)

<br>

우선,  setText로 입력한 것을 console밖에 바로 적용되게 하였다.


<br>
      
      import { useState } from "react";
      
      function Body(){
        const [date, setDate] = useState("");
        const handleOnChange = (e) => {
          console.log("변경된 값: ", e.target.value);  // input value가 console.log
          setDate(e.target.value);
        };
      
        return (
          <div>
            <input type="date" value={date} onChange={handleOnChange}/>
          </div> 
        ); 
      
      
      }
      export default Body;

<br>

![화면 캡처 2024-12-20 124714](https://github.com/user-attachments/assets/f849eb90-bd52-4819-abe3-8f9b3ec5f10f)

<br>
<br>

useState 는 상태를 관리한다. 상태가 바뀌면 리랜더링함..!


      
      import { useState } from "react";
      
      function Body(){
        const [option, setOption] = useState("");
        const handleOnChange = (e) => {
          console.log("변경된 값: ", e.target.value);  // input value가 console.log
          setOption(e.target.value);
        };
      
        return (
          <div>
            <select value={option} onChange={handleOnChange}>
              <option key={"1번"}>1번</option>
              <option key={"2번"}>2번</option>
              <option key={"3번"}>3번</option>
            </select>
          </div> 
        ); 
      
      
      }
      export default Body;
      
<br>

![화면 캡처 2024-12-20 125231](https://github.com/user-attachments/assets/4c9b1d3c-91d7-45e6-8147-2f731097a114)


      
      import { useState } from "react";
      
      function Body(){
        const [text, setText] = useState("");
        const handleOnChange = (e) => {
          console.log("변경된 값: ", e.target.value);  // input value가 console.log
          setText(e.target.value);
        };
      
        return (
          <div>
            <textarea value={text} onChange={handleOnChange}/>
          </div> 
        ); 
      }
      export default Body;


![화면 캡처 2024-12-20 125547](https://github.com/user-attachments/assets/621bc8ab-f03d-49fb-af79-e503da0f477b)


전부 응용해  작성해보면 해당 코드가 된다!
<br>

      import { useState } from "react";
      
      function Body(){
        const [state, setState] = useState({
          name: "",
          gender: "",
          birth: "",
          bio: "",
        });
      
        const handleOnChange = (e) => {
          console.log("현재 수정 대상: ", e.target.name);
          console.log("수정값: ", e.target.value);
          setState({
            [e.target.name]: e.target.value,
          });
        };
      
        return (
          <div>
            <div>
              <input
               name ="name"
               value={state.name}
               onChange={handleOnChange}
               placeholder="이름"
              />
            </div> 
            <div>
              <select name="gender" value={state.gender} onChange={handleOnChange}>
                <option key={""}></option>
                <option key={"남성"}>남성</option>
                <option key={"여성"}>여성</option>
              </select>
            </div>
            <div>
              <input
              name="birth"
              type="date"
              value={state.birth}
              onChange={handleOnChange}
              />
            </div>
            <div>
              <textarea name="bio" value={state.bio} onChange={handleOnChange}/>
            </div>
          </div>
        ); 
      }
      export default Body;

<br>
      
![화면 캡처 2024-12-20 131626](https://github.com/user-attachments/assets/93f45151-5f86-4b0e-9a68-f747a8556988)


--------------------------
<br><br>

### useState와 useRef는 모두 React에서 상태나 값을 관리할 때 사용되는 훅(hook)입니다.
<br>

#### useState는 상태 관리에 사용되고, 값이 변경될 때마다 컴포넌트가 다시 렌더링됩니다.<br>
#### useRef는 렌더링을 트리거하지 않는 값의 참조나 DOM 요소에 대한 접근에 사용됩니다.<br>

![화면 캡처 2024-12-20 141357](https://github.com/user-attachments/assets/17d67a66-1df2-440b-ac6b-698a8967a3f7)

<br>

      import { useState } from "react";
      
      function Body(){
        const [text, setText] = useState("");
          
      
        const handleOnChange = (e) => {
          setText(e.target.value);
        };
      
        const handleOnClick = () => {
          alert(text);
        };
      
        return (
          <div>
            <input value={text} onChange={handleOnChange}/>
            <button onClick={handleOnClick}>작성완료</button>
          </div>
        ); 
      }
      export default Body;

<br>

![화면 캡처 2024-12-20 142235](https://github.com/user-attachments/assets/0d564b77-9581-4177-a3e4-f5783cc49b1d)

<br>


#### 글자 수를 제한해서 5글자 이상 (5미만은 완료되지 않게) 작성 완료 코딩해보기

      import { useRef, useState } from "react";
      
      function Body(){
        const [text, setText] = useState("");
        const textRef = useRef();
      
        const handleOnChange = (e) => {
          setText(e.target.value);
        };
      
        const handleOnClick = () => {
          if(text.length < 5){
            textRef.current.focus();
          }else{
            alert(text)
            setText("");
          }
        };
      
        return (
          <div>
            <input ref={textRef} value={text} onChange={handleOnChange}/>
            <button onClick={handleOnClick}>작성완료</button>
          </div>
        ); 
      }
      export default Body;
<br>

![화면 캡처 2024-12-20 143505](https://github.com/user-attachments/assets/0fc59123-96a1-4734-98d7-def30349c275)

<br>

![화면 캡처 2024-12-20 143535](https://github.com/user-attachments/assets/531fce4d-473a-4667-8472-ed39750c5896)

<br><br>
