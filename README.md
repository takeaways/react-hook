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
