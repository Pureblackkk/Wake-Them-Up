import React, { useState } from 'react';
import { SummaryEventName } from '../../global/event-name-config'

export const Detail = () => {
    const [sleeperNum, setSleeperNum] = useState(0);
    const [awakeNum, setAwakeNum] = useState(0);
    const [roundNum, setRoundNum] = useState(0);

    // Define event handler
    const handleUpdate = (sleeperNum, awakeNum, roundNum) => {
        setSleeperNum(sleeperNum);
        setAwakeNum(awakeNum);
        setRoundNum(roundNum);
    }

    // Register Event
    window.Eventer.addEventListener(SummaryEventName.updateDetail, handleUpdate);
    
    return (
        <div className='summary-detail-wrap' style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            padding: '20px',
            fontWeight: 'bold'
        }}>
            <div className='summary-detail-title'>
                <div>Sleeper Number:</div>
                <div>Awake Number:</div>
                <div>Round:</div>
            </div>
            <div className='summary-detail-number'>
                <div>{sleeperNum}</div>
                <div>{awakeNum}</div>
                <div>{roundNum}</div>
            </div>
        </div>
    )
}