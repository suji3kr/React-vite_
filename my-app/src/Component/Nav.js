function Nav(props) {
    const lis = [];
    // topics 배열을 반복하면서 각 주제를 <li>로 렌더링
    for (let i = 0; i < props.topics.length; i++) {
      let t = props.topics[i];
      lis.push(
        <li key={t.id}>
          <a
            id={t.id}
            href={'/read' + t.id}
            onClick={(event) => {
              event.preventDefault(); // 기본 링크 동작 방지
              props.onChangeMode(Number(event.target.id)); // 클릭한 링크의 id를 onChangeMode로 전달
            }}
          >
            {t.title} {/* 주제의 제목을 출력 */}
          </a>
        </li>
      );
    }
    return (
      <nav>
        <ol>
          {lis} {/* topics 배열을 기반으로 만든 <li> 항목들 렌더링 */}
        </ol>
      </nav>
    );
  }
  export default Nav;