import React from 'react';
import { RightClickDesignerConfig } from './config';
import './index.css';

export default function ClickPanel(props) {
    const { objectType, result, callback } = props;

    const getContentList = () => {
        // TODO: Get icon src and content
        return RightClickDesignerConfig[objectType];
    }

    const handleClick = (eventName) => {
        console.log('event', eventName);

        // Dispatch the event function
        window.Eventer.dispatchEvent(
            eventName,
            result,
        );

        // Run callback function from father component
        callback();
    }

    return(
        <div className='right-click-designer-content'>
            {
                getContentList().map((item, index) => {
                    return (
                        <li className='right-click-designer-selection' 
                            onClick={() => handleClick(item.callbackName)} 
                            key={index}
                        >
                            <div className='iconfont right-click-designer-selection-icon' dangerouslySetInnerHTML={{ __html: item.src }}></div>
                            <div className='right-click-designer-selection-text'>{item.content}</div>
                        </li>
                    )
                })
            }
        </div>
    )
}

