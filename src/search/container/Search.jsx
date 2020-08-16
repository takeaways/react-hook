import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col, Typography } from 'antd';

import Setting from '../component/Setting';

export default function Search() {
  return (
    <>
      <Row justify='end' style={{ padding: 20 }}>
        <Col>
          <Setting logout={() => {}} />
        </Col>
      </Row>
      <Row justify='center' style={{ marginTop: 100 }}>
        <Col>
          <Typography.Title style={{ fontFamily: 'Caligraphy' }}>
            찾 아 야 한 다
          </Typography.Title>
        </Col>
      </Row>
      <Row justify='center' style={{ marginTop: 50 }}>
        <Col span={12}>검색</Col>
      </Row>
    </>
  );
}