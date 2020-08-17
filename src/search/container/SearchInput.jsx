import React from 'react';
import { AutoComplete, Input, Space, Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../state';

export default function Search() {
  const dispatch = useDispatch();

  const keyword = useSelector((state) => state.search.keyword);
  function setKeyword(value) {
    if (value !== keyword) {
      dispatch(actions.setValue('keyword', value));
      dispatch(actions.fetchAutoComplete(value));
    }
  }

  const autoCompletes = useSelector((state) => state.search.autoCompletes);
  function togoUser(value) {}
  return (
    <>
      <AutoComplete
        value={keyword}
        onChange={setKeyword}
        onSelect={togoUser}
        style={{ width: '100%' }}
        options={autoCompletes.map((item) => ({
          value: item.name,
          label: (
            <Space>
              <Typography.Text strong>{item.name}</Typography.Text>
              <Typography.Text type='secondary'>
                {item.department}
              </Typography.Text>
              <Typography.Text>{item.tag}</Typography.Text>
            </Space>
          ),
        }))}
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
