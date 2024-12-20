import { useState } from 'react';

export function Update(props) {
  const [title, setTitle] = useState(props.title); // title 상태
  const [body, setBody] = useState(props.body); // body 상태
  return <article>
    <h2>Update Topic</h2>
    <form onSubmit={(event) => {
      event.preventDefault(); // 폼의 기본 제출 동작 방지
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onUpdate(title, body);
    }}>
      <p><input type="text" name="title" placeholder="title" value={title} onChange={event => {
        setTitle(event.target.value);
      }} /></p>
      <p><textarea name="body" placeholder="body" value={body} onChange={event => {
        setBody(event.target.value);
      }}></textarea>
      </p>
      <p><input type="submit" value="Update"></input>
      </p>
    </form>
  </article>;
}
