import React from 'react';
import { AutoComplete, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

/**
 * 컴파일 타임에 프롭을 정의
 * @param {object} param
 * @param {() => void} param.logout
 */
export default function Settings({}) {
  function setKeyword(value){}
  function gotoUser(value){}
  return (
    <AutoComplete
      value={keyword}
      onChange={setKeyword}
      onSelect={gotoUser}
      style={{ width: '100%' }}
      options={[]}
      autoFocus
    >
      <Input
        size='large'
        placeholder='input here'
        prefix={<SearchOutlined />}
      />
    </AutoComplete>
  );
}
