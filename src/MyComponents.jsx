import React from 'react';

MyComponent.propTypes = {
  //컴포넌트에서 올바른 타입 정보를 입력할 수 있도록작성 한다.
};

//다음과 같이 명명된 매개 변수로 작성하는게 좋다.
export default function MyComponent({ title = 'my' }) {
  console.log(NAME);
  return <h1>{title}</h1>;
}

//중요도에서 밀리기 때문에 외부 변수는 대문자로 써주는게 좋다.
const NAME = 'GI';
