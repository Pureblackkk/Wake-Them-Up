import React from 'react';
import './index.css';
import WebLogo from '../common/img/web-logo.svg';

class Header extends React.Component {
    constructor() {
        super();
    }
    
    render() {
        return(
            <div className='header-wrap'>
                <div className='header-web-lgo'>
                    <embed src={WebLogo} alt="logo" style={{width: '50px', height:'56px'}}/>
                </div>
                <div className='header-web-title'>Wake them up!</div>
            </div>
        ) 
    }
}

export default Header;