import React from 'react';
import {Row, Col} from 'antd';
import './index.scss';

const InfoCard = ({})=>{
    return(
        <div className="info-card-container">
            <Row gutter={{ md: 32}}>
                <Col md={8} xs={24}>
                    <div className="list">
                        Hello ya
                    </div>
                </Col>
                <Col md={8} xs={24}>
                    <div className="list">
                        Hello ya
                    </div>
                </Col>
                <Col md={8} xs={24}>
                    <div className="list">
                        Hello ya
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default InfoCard;