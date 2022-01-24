import React from 'react';
import CopyRight from './panel-component/copy-right/index';
import './index.css';

class Panel extends React.Component {
    constructor() {
        super();
    }
    
    render() {
        return(
            <div className='panel-wrap'>
                Here's the panellllll
                <CopyRight/>
            </div>
        ) 
    }
}

export default Panel;