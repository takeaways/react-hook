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
