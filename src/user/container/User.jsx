import React, { useEffect } from 'react';
import { PageHeader, Col, Row, Descriptions, Typography } from 'antd';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import useFetchInfo from '../../common/hook/useFetchInfo';

import { actions } from '../state';
import { Types } from '../state';

/**
 *
 * @param {object} param
 * @param {import('react-router').match} param.match
 */

export default function User({ match }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const name = match.params.name;

  const user = useSelector((state) => state.user.user);

  const { isFetched } = useFetchInfo(Types.FetchUser);

  useEffect(() => {
    dispatch(actions.fetchUser(name));
  }, [name]);

  return (
    <Row justify='center'>
      <Col xs={24} md={20} lg={14}>
        <PageHeader onBack={history.goBack} title='사용자 정보'>
          {user && (
            <Descriptions layout='vertical' bordered column={1}>
              <Descriptions.Item label='이름'>
                <Typography.Text>{user.name}</Typography.Text>
              </Descriptions.Item>
              <Descriptions.Item label='소속'>
                <Typography.Text>{user.tag}</Typography.Text>
              </Descriptions.Item>
              <Descriptions.Item label='수정내역'>
                <Typography.Text>수정내역</Typography.Text>
              </Descriptions.Item>
            </Descriptions>
          )}
          {!user && isFetched && (
            <Typography.Text>존재하지 않는 사용자 입니다.</Typography.Text>
          )}
        </PageHeader>
      </Col>
    </Row>
  );
}
