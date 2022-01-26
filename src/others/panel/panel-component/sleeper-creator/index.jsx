import React from 'react';
import { SketchPicker } from 'react-color';
import { PanelOpearationControllerEventName } from '../../../../global/event-name-config';
import { Button } from 'antd';
import { 
    DefaultSleeperCanvasInformation,
    DefaultAwakeCanvasInformation,
} from '../../../../core/data-layer/config';
import './index.css';

export default class SleeperCreaator extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            sleeperColor: (!!this.props.type) ? DefaultAwakeCanvasInformation.fillColor : DefaultSleeperCanvasInformation.fillColor,
            isSleeperPicker: false,
            borderColor: (!!this.props.type) ? DefaultAwakeCanvasInformation.borderColor : DefaultSleeperCanvasInformation.borderColor,
            isBorderPicker: false,
        };

        this.handleSleeperColorChange = this.handleSleeperColorChange.bind(this);
        this.handleBorderColorChange = this.handleBorderColorChange.bind(this);

        // Register Event
        window.Eventer.addEventListener(
            PanelOpearationControllerEventName.closeColorPicker,
            this.closeAllPanel.bind(this)
        )
    }

    closeAllPanel() {
        this.setState({
            isSleeperPicker: false,
            isBorderPicker: false,
        })
    }

    showPanel(objName, event) {
        if(objName == 'border') {
            this.setState({
                isSleeperPicker: false,
                isBorderPicker: true,
            })
        } else {
            this.setState({
                isSleeperPicker: true,
                isBorderPicker: false,
            })
        }

        this.stopPopUp(event);
    }

    /**
     * Handle sleepr sample color change
     * @param {*} color 
     * @param {*} event 
     */
    handleSleeperColorChange(color, event) {
        this.setState({
            sleeperColor: color.hex,
        })

        // Dispatch event change the sleeper color
        window.Eventer.dispatchEvent(
            PanelOpearationControllerEventName.changeNodeStyle,
            this.props.type,
            {
                fillColor: color.hex,
            }
        )
    }

    /**
     * Handle border sample color change
     * @param {*} color 
     * @param {*} event 
     */
    handleBorderColorChange(color, event) {
        this.setState({
            borderColor: color.hex,
        });

        // Dispatch event change the border color
        window.Eventer.dispatchEvent(
            PanelOpearationControllerEventName.changeNodeStyle,
            this.props.type,
            {
                borderColor: color.hex,
            }
        )
    }

    /**
     * Create new sleeper
     */
    handleCreateButtonClick() {
        window.Eventer.dispatchEvent(
            PanelOpearationControllerEventName.createNode,
            this.props.type
        )
    }

    /**
     * Stop Click event propup
     */
    stopPopUp(event) {
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
    }

    render() {
        return (
            <div className='panel-sleeper-creator'>
                <div className='panel-sleeper-color' onClick={this.stopPopUp}>
                    <div className='panel-sleeper-name'>
                        {this.props.sleeperName}
                    </div>
                    <div 
                        className='iconfont panel-sleeper-example'
                        onClick={(event) => {this.showPanel('sleeper', event)}}
                        style={{color: this.state.sleeperColor}}
                    >
                        &#xec44;
                    </div>
                    {this.state.isSleeperPicker ? <SketchPicker
                        className='panel-color-picker'
                        color={this.state.sleeperColor}
                        onChange={this.handleSleeperColorChange}
                        id='panelColorPicker'
                    /> : null}
                </div>
                <div className='panel-border-color' onClick={this.stopPopUp}>
                    <div className='panel-border-name'>
                        {this.props.borderName}
                    </div>
                    <div 
                        className='iconfont panel-border-example'
                        onClick={(event) => {this.showPanel('border', event)}}
                        style={{color: this.state.borderColor}}
                    >
                        &#xec7f;
                    </div>
                    {this.state.isBorderPicker ? <SketchPicker
                        className='panel-color-picker'
                        color={this.state.borderColor}
                        onChange={this.handleBorderColorChange}
                        id='panelColorPicker'
                    /> : null}
                </div>
                <div className='panel-create-button'>
                    <Button type="primary" shape="round" size="middle" onClick={this.handleCreateButtonClick.bind(this)}>
                        Create
                    </Button>
                </div>
            </div>
        )
    }
}