import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
MyComponent.propTypes = {
  //컴포넌트에서 올바른 타입 정보를 입력할 수 있도록작성 한다.
  //중요한 문서의 역할을 한다.
  title: PropTypes.string,
};

//다음과 같이 명명된 매개 변수로 작성하는게 좋다.
export default function MyComponent({ title = 'my' }) {
  const width = useWindowWidth();
  return (
    <h1>
      {title}
      {/* 조건부 렌더링 
        [] != null
        && 삼항연산자
      */}
      {width > 400 && width}
    </h1>
  );
}

//중요도에서 밀리기 때문에 외부 변수는 대문자로 써주는게 좋다.
const NAME = 'GI';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const resizeEvent = window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener('resize', resizeEvent);
    };
  }, []);
  return width;
  console.log('123');
}
/*
2


9
3*/
