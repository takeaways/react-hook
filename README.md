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
import React, { useCallback, useState } from 'react';

function App() {
  const [value, setValue] = useState(0);
  const onClick = () => {
    setValue(value++);
  };
  const handleChange = () => {};
  return (
    <>
      <h1>{value}</h1>
      <button onClick={onClick}>click</button>
      <Child onChange={handleChange} />
    </>
  );
}

function Child({ value, onChange, placeholder }) {
  const [value, setValue] = useState('');

  const handleInputChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <input
      value={value}
      onChange={(event) => setValue(event.target.value)}
      placeholder={placeholder}
    />
  );
}
```
