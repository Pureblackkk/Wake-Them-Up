import React from 'react';
import { RightClickDesignerConfig } from './config';
import './index.css';

export default function ClickPanel(props) {
    const { objectType, result, callback, position } = props;

    // Get icon src and content
    const contentList = RightClickDesignerConfig[objectType];

    // Set params map
    const paramsMap = {
        'null': null,
        'position': position,
    }

    const handleClick = (event, eventName, params) => {
        console.log('event', eventName);

        // Dispatch the event function
        window.Eventer.dispatchEvent(
            eventName,
            result,
            paramsMap[params]
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
                            onClick={(e) => handleClick(e, item.callbackName, item.params)}
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

