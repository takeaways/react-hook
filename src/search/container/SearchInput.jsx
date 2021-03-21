import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { AutoComplete, Input, Space, Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import { actions } from '../state';
import { actions as userActions } from '../../user/state';

export default function Search() {
  const dispatch = useDispatch();
  const history = useHistory();

  const keyword = useSelector((state) => state.search.keyword);
  function setKeyword(value) {
    if (value !== keyword) {
      dispatch(actions.setValue('keyword', value));
      dispatch(actions.fetchAutoComplete(value));
    }
  }

  const autoCompletes = useSelector((state) => state.search.autoCompletes);
  function goToUser(value) {
    const user = autoCompletes.find((item) => item.name === value);
    if (user) {
      dispatch(userActions.setValue('user', user));
      history.push(`/user/${user.name}`);
    }
  }
  return (
    <>
      <AutoComplete
        value={keyword}
        onChange={setKeyword}
        onSelect={goToUser}
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
          placeholder='검색어를 입력해주세요.'
          prefix={<SearchOutlined />}
        />
      </AutoComplete>
    </>
  );
}
