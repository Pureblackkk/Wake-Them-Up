import React, { useEffect, useState } from 'react';
import { PanelOpearationControllerEventName } from '../../../../global/event-name-config';
import { Tooltip, Button } from 'antd';
import './index.css';

export default function StartPause() {
    const [isPause, setIsPause] = useState(true);

    const handleClick = () => {
        if (!!isPause) {
            setIsPause(false);
            // Start waking process
            window.Eventer.dispatchEvent(
                PanelOpearationControllerEventName.startWakingProcess,
            );
        } else {
            setIsPause(true);
            // Pause waking process
            window.Eventer.dispatchEvent(
                PanelOpearationControllerEventName.pauseWakingProcess,
            );
        }
    }

    const handleReset = () => {
        window.Eventer.dispatchEvent(
            PanelOpearationControllerEventName.resetSleepers,
        )
    }

    const handleRecievePause = () => {
        setIsPause(true);
    }

    useEffect(() => {
        // Init event handler
        window.Eventer.addEventListener(
            PanelOpearationControllerEventName.endWakingProcess,
            handleRecievePause,
        );
    })

    
    return (
        <div className='panel-start-pause-wrap'>
            <Tooltip placement="left" title={'Reset Sleepers'}>
                <Button 
                    className='panel-start-pause-reset' 
                    type="primary" 
                    shape="default" 
                    size="small"
                    disabled={!isPause}
                    onClick={handleReset}
                >
                    Reset
                </Button>
            </Tooltip>
          
            {
                isPause ? 
                <Tooltip placement="bottomLeft" title={'Start waking them up'}>
                <div className='iconfont panel-start-pause-name' onClick={handleClick}>
                    &#xe600;
                </div>
                </Tooltip>
                :
                <Tooltip placement="bottomLeft" title={'Pause'}>
                <div className='iconfont panel-start-pause-name' onClick={handleClick}>
                    &#xe62f;
                </div>
                </Tooltip>
            }
        </div>
    )
}