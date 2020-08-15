# Let's Talk About React-Hooks

## useRef

1. 사용방법은 다양합니다. 이전값을 기억하기 위해서 사용
2. 돔 요소에 접근하기 위해서 사용

```jsx

import React ,{useRef} from "react";

function App(){
  const timerRef = useRef(-1);

  useEfferc(()=>{
    timerRef.current = setTimeout(()=>{},1000);
  }.[])
}


```

## useMemo

1. 계산량이 많은 함수의 반환값을 재활용합니다.

```jsx
import React, { useMemo } from 'react';

function App() {
  const value = useMemo(() => {
    add(a, b);
  }, [a, b]);

  return <h1>{`Result : ${value}`}</h1>;
}
```

## useCallback

1. 함수 메모이제이션에 특화되어 있다.

```jsx
import React, { useState } from 'react';
import Input from './Input';

const formContents = [
  { type: 'text', name: 'name', placeholder: 'name을 입력하세요' },
  { type: 'password', name: 'password', placeholder: 'password 입력하세요' },
  { type: 'email', name: 'email', placeholder: 'emaild 입력하세요' },
  { type: 'number', name: 'number', placeholder: 'number 입력하세요' },
];

function App() {
  const [state, setState] = useState({});
  const [show, setShow] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  return (
    <div className='App'>
      {formContents.map((item) => (
        <Input {...item} onChange={handleChange} />
      ))}

      <button
        type='button'
        onClick={() => {
          setShow(!show);
        }}
      >
        출력
      </button>
      {show && <p>{`${JSON.stringify(state)}`}</p>}
    </div>
  );
}

export default App;
```

## useImperativeHandle

1. 멤버 변수나 멤버함수가 있는것 처럼 만들 수 있다.
2. 부모 컴포넌트에서 자식 컴포넌트에 있는 함수를 실행 시키는 방법

```jsx
import React, {
  useRef,
  forwardRef,
  useState,
  useImperativeHandle,
} from 'react';

function App() {
  const childRef = useRef();
  const onClick = () => {
    if (childRef.current) {
      const name = childRef.current.getName();
      childRef.current.setList(name);
    }
  };
  return (
    <div>
      <User ref={childRef} />
      <button onClick={onClick}>Click</button>
    </div>
  );
}

const User = forwardRef(function (_, ref) {
  const [name, setName] = useState('GI');
  useImperativeHandle(ref, () => {
    return {
      getName: () => name,
      setList: () => setName((prev) => prev + 'GI'),
    };
  });

  return (
    <div>
      <h1>Hello {name}</h1>
    </div>
  );
});

export default App;
```

## useLayoutEffect

1. useEffect와 비슷하게 동작하나 동기적으로 호출한다는 점이 다르다.
2. 리액트가 렌더링을 하고 실제 돔에 반영은 했지만. 브라우저가 화면을 그리기 전에 useLayoutEffect가 실행이 된다.

   - 렌더링 직후에 돔 요소의 값을 읽어들이는 경우
   - 조건에 따라서 컴포넌트를 다시 렌더링하고 싶은 경우

```jsx

import React ,{useRef} from "react";

function App(){
  const timerRef = useRef(-1);

  useEfferc(()=>{
    timerRef.current = setTimeout(()=>{},1000);
  }.[])
}


```

# 추천 컴포넌트 작성법

## 컴포넌트 작성하기!!

1. 중요도 순으로 작성한다.
2. 복작도를 줄이기 위해서 기능끼리 묶어서 재사용하지 않더라도 컴포넌트 내부가 복잡해지면 커스텀 훅으로 기능을 분리한다.

```jsx
import React, { useState, useEffect } from 'react';

MyComponent.propTypes = {
  //컴포넌트에서 올바른 타입 정보를 입력할 수 있도록작성 한다.
};

//다음과 같이 명명된 매개 변수로 작성하는게 좋다.
export default function MyComponent({ title = 'my' }) {
  const width = useWindowWidth();
  return (
    <h1>
      {title}
      {width}
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
}
```

/_
1
_/
