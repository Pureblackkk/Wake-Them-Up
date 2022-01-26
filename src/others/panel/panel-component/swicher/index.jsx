import React from 'react';
import { Switch } from 'antd';
import './index.css';

export default function Swticher(props) {

    return (
        <div className='panel-swicher'>
            <Switch checkedChildren="Prob" unCheckedChildren="Threshold" disabled={true} defaultChecked />
        </div>
    )
}