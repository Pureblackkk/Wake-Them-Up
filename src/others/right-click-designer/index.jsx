import React from 'react';
import ClickPanel from './click-panel/index'
import { ActionControllerEventName } from '../../global/event-name-config';
import { GlobalConfig } from '../../global/global-config';
import './index.css';

class RightClickDesigner extends React.Component {
    constructor() {
        super();
        this.state = {
            isShow: false,
            objectType: null,
        };

        // Register event
        window.Eventer.addEventListener(
            ActionControllerEventName.mouseRightClick,
            this.onRightClick.bind(this)
        );

        document.addEventListener('click', this.handlePanelClick.bind(this));

        // Define position
        this.mousePosition = {
            x: null,
            y: null,
        };

        this.result = null;
    }

    /**
     * Reciever when right click happened
     * @param {*} type 
     * @param {*} result 
     */
    onRightClick(type, result, position) {
        // TODO: Finish the callback function
        console.log('Ok, I\'m been right clicked');

        // If backgroud
        if (result == null) {
            type = 'background';
        }

        // Set position
        this.mousePosition.x = position.x;
        this.mousePosition.y = position.y;
        this.result = result;

        // Set new state
        this.setState({
            isShow: true,
            objectType: type,
        });
    }

    /**
     * Callback funtion when click the panel
     * @returns 
     */
    handlePanelClick(event) {
        if (!this.state.isShow) {
            return;
        }

        this.setState({
            isShow: false,
            objectType: null,
        });
    }

    render() {
        const {
            isShow, 
            objectType,
        } = this.state;

        const { x, y } = this.mousePosition;
        let panel = isShow ? 
        (
            <div className='right-click-designer-wrap' style={{left: x+GlobalConfig.pandelWidth, top: y+GlobalConfig.headerHeight}}>
                <ClickPanel 
                    objectType={objectType}
                    result={this.result}
                    callback={this.handlePanelClick.bind(this)}
                    position={this.mousePosition}
                />
            </div>
        )
        : null;

        return(
            panel
        );
    }
}

export default RightClickDesigner
