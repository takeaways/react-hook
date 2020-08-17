import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col, Typography } from 'antd';

import Settings from '../component/Setting';
import SearchInput from './SearchInput';

export default function Search() {
  return (
    <>
      <Row justify='end' style={{ padding: 20 }}>
        <Col>
          <Settings logout={() => {}} />
        </Col>
      </Row>
      <Row justify='center' style={{ marginTop: 100 }}>
        <Col>
          <Typography.Title style={{ fontFamily: 'Caligrahhy' }}>
            찾 아 야 한 다
          </Typography.Title>
        </Col>
      </Row>
      <Row justify='center' style={{ marginTop: 50 }}>
        <Col xs={20} md={16} lg={12}>
          <SearchInput />
        </Col>
      </Row>
      <Row justify='center' style={{ marginTop: 50 }}>
        <Col xs={20} md={16} lg={12}>
          {/* <History /> */}
        </Col>
      </Row>
    </>
  );
}
