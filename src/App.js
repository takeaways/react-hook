import React, { useState } from 'react';
import Input from './Input';

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
      <Input
        type={'text'}
        name={'name'}
        placeholder={'name 입력하세요!'}
        onChange={handleChange}
      />
      <span>{state['name']}</span>
      <Input
        type={'password'}
        name={'passowrd'}
        placeholder={'password 입력하세요!'}
        onChange={handleChange}
      />
      <span>{state['passowrd']}</span>
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
