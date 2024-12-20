// Nav 컴포넌트: 주제 목록을 렌더링하고, 클릭 시 해당 주제의 id를 전달하여 onChangeMode 호출
// Article 컴포넌트: 주제의 제목과 본문을 출력
export function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2> {/* 전달된 title을 출력 */}
      {props.body} {/* 전달된 body를 출력 */}
    </article>
  );
}
