export function Header(props) {
    console.log('props', props.title); // props로 전달된 title을 로그로 출력
    return (
      <header>
        <h1>
          <a
            href="/"
            onClick={(event) => {
              event.preventDefault(); // 기본 링크 동작 방지 (페이지 리로드 방지)
              props.onChangeMode(); // 부모 컴포넌트에서 전달된 onChangeMode 호출
            }}
          >
            {props.title} {/* 전달된 title을 출력 */}
          </a>
        </h1>
      </header>
    );
  }