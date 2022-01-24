import React from 'react';
import { RightClickDesignerConfig } from './config';
import './index.css';

export default function ClickPanel(props) {
    const { objectType, result, callback } = props;

    // Get icon src and content
    const contentList = RightClickDesignerConfig[objectType];

    const handleClick = (event, eventName) => {
        console.log('event', eventName);

        // Dispatch the event function
        window.Eventer.dispatchEvent(
            eventName,
            result,
        );

        // Run callback function from father component
        callback();
        
        // Stop click event pop up
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
    }

    return(
        <div className='right-click-designer-content'>
            {
                contentList.map((item, index) => {
                    return (
                        <li className='right-click-designer-selection' 
                            onClick={(e) => handleClick(e, item.callbackName)} 
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

