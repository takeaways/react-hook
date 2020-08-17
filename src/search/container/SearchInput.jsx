import React from 'react';
import { AutoComplete, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../state';

export default function Search() {
  const keyword = useSelector((state) => state.search.keyword);
  const dispatch = useDispatch();
  function setKeyword(value) {
    if (value !== keyword) {
      dispatch(actions.setValue(value));
    }
  }
  function togoUser(value) {}
  return (
    <>
      <AutoComplete
        value={keyword}
        onChange={setKeyword}
        onSelect={togoUser}
        style={{ width: '100%' }}
        options={[]}
        autoFocus
      >
        <Input
          value={keyword}
          size='large'
          placeholder='input here'
          prefix={<SearchOutlined />}
        />
      </AutoComplete>
    </>
  );
}
