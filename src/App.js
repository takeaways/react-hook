import React, { useRef, useLayoutEffect, useState } from 'react';
import MyComponent from './MyComponents';

export default function App() {
  const [width, setWidth] = useState(100);
  const widthRef = useRef();
  //500이상이되면 깜빡인다.
  /*
    useEffect일때
    500보다 큰 값으로 렌더링을 했다가 500보다 크면 다시 500으로 렌더링 하기 때문에 깜빡이는 현상이 발생한다.
  */
  useLayoutEffect(() => {
    console.log(widthRef.current.getBoundingClientRect().width);
    if (width > 500) {
      setWidth(500);
    }
  }, [width]);

  return (
    <div>
      <MyComponent title={'Hello React'} />
      <div
        ref={widthRef}
        style={{ width, height: 100, backgroundColor: 'green' }}
      >
        test
      </div>
      <button
        onClick={() => {
          setWidth(Math.floor(Math.random() * 499 + 1));
        }}
      >
        500 ↓
      </button>
      <button
        onClick={() => {
          setWidth(Math.floor(Math.random() * 500 + 501));
        }}
      >
        500 ↑
      </button>
    </div>
  );
}
