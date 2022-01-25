import React from 'react';
import { SketchPicker } from 'react-color';
import { PanelOpearationControllerEventName } from '../../../../global/event-name-config';
import { Button } from 'antd';
import './index.css';

export default class SleeperCreaator extends React.Component {
    constructor() {
        super();
        this.state = {
            sleeperColor: '#000000',
            isSleeperPicker: false,
            borderColor: '#000000',
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

        // TODO: Dispatch event change the canvas color
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

        // TODO: Dispatch event change the canvas color
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
            <div className='panel-sleeper-creator' onClick={(event) => this.stopPopUp(event)}>
                <div className='panel-sleeper-color'>
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
                    /> : null}
                </div>
                <div className='panel-border-color'>
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
                    /> : null}
                </div>
                <div className='panel-create-button'>
                    <Button type="primary" shape="round" size="middle">
                        Create
                    </Button>
                </div>
            </div>
        )
    }
}