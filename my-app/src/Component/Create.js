// Create 컴포넌트: 새로운 주제를 작성할 수 있는 폼을 제공
export function Create(props) {
  return <article>
    <h2>Create New Topic</h2>
    <form
      onSubmit={(event) => {
        event.preventDefault(); // 폼의 기본 제출 동작 방지
        const title = event.target.title.value; // 폼에서 title 값을 가져옴
        const body = event.target.body.value; // 폼에서 body 값을 가져옴
        props.onCreate(title, body); // 부모 컴포넌트의 onCreate 함수 호출
      }}>
      <p>
        <input type="text" name="title" placeholder="title" /> {/* 제목 입력란 */}
      </p>
      <p>
        <textarea name="body" placeholder="body"></textarea> {/* 본문 입력란 */}
      </p>
      <p>
        <input type="submit" value="Create"></input> {/* 제출 버튼 */}
      </p>
    </form>
  </article>;
}
