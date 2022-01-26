import React from 'react';
import './index.css';
import WebLogo from '../common/img/web-logo.svg';
import { PanelOpearationControllerEventName } from '../../global/event-name-config';

class Header extends React.Component {
    constructor() {
        super();
    }
    
    handleClick(event) {
        // Add event to close all the color picker
        window.Eventer.dispatchEvent(
            PanelOpearationControllerEventName.closeColorPicker,
            null
        );
    }

    render() {
        return(
            <div className='header-wrap' onClick={this.handleClick}>
                <div className='header-web-lgo'>
                    <embed src={WebLogo} alt="logo" style={{width: '50px', height:'56px'}}/>
                </div>
                <div className='header-web-title'>Wake them up!</div>
            </div>
        ) 
    }
}

export default Header;