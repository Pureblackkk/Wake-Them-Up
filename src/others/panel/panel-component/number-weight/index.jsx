import React from 'react';
import 'antd/dist/antd.less';
import './index.css';
import { Slider, InputNumber, Row, Col, Tooltip} from 'antd';

class NumberWeights extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: 0,
        };
    }
      
    onChange = value => {
        if (isNaN(value)) {
            return;
        }
        this.setState({
            inputValue: value,
        });
    };
    
    render() {
        const { inputValue } = this.state;
        return (
            <div className='panel-cascade-probability'>
                <Tooltip placement="topLeft" title={'Probability for waking up other sleepers'}>
                    <div className='panel-cascade-name'>Probability</div>
                </Tooltip>    
                <div className='panel-cascade-scroll-bar'>
                    <Row>
                        <Col span={10}>
                        <Slider
                            min={0}
                            max={1}
                            onChange={this.onChange}
                            value={typeof inputValue === 'number' ? inputValue : 0}
                            step={0.01}
                        />
                        </Col>
                        <Col span={1}>
                        <InputNumber
                            min={0}
                            max={1}
                            style={{ margin: '0 16px' }}
                            step={0.01}
                            value={inputValue}
                            onChange={this.onChange}
                        />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default NumberWeights;