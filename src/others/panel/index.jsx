import React from 'react';
import CopyRight from './panel-component/copy-right/index';
import SleeperCreaator from './panel-component/sleeper-creator/index';
import NumberWeights from './panel-component/number-weight/index';
import Swicher from './panel-component/swicher/index';
import StartPause from './panel-component/start-pause';
import { PanelOpearationControllerEventName } from '../../global/event-name-config';
import './index.css';

class Panel extends React.Component {
    constructor() {
        super();
    }

    handleClick() {
        // TODO: Add event to close all the color picker
        window.Eventer.dispatchEvent(
            PanelOpearationControllerEventName.closeColorPicker,
            null
        )
    }
    
    render() {
        return(
            <div className='panel-wrap' onClick={this.handleClick}>
                <Swicher></Swicher>
                <div className='panel-long-sperate-line'></div>
                <SleeperCreaator sleeperName={'Sleeper Color'} borderName={'Border Color'} type={0}/>
                <div className='panel-short-sperate-line'></div>
                <SleeperCreaator sleeperName={'Awake Color'} borderName={'Border Color'} type={1}/>
                <div className='panel-short-sperate-line'></div>
                <NumberWeights/>
                <div className='panel-short-sperate-line'></div>
                <StartPause/>
                <CopyRight/>
            </div>
        ) 
    }
}

export default Panel;