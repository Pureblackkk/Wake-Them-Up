import React from 'react';
import { SummaryShare } from './share';
import { Detail } from './detail';
import './index.css';


export default class Summary extends React.Component {
    constructor() {
        super();
        this.state = {
            isSummaryShow: false,
        };
        this.summaryShare = null;
    }

    /**
     * Click the summary icon
     */
    onClick() {
        // Set isSummaryShow to true
        this.setState({
            isSummaryShow: true
        });
    }

    /**
     * Close summary panel
     */
    onClose() {
        // Set isSummaryShow to true
        this.setState({
            isSummaryShow: false
        });
    }

    componentDidMount() {
        // Load summary share component
        this.summaryShare = new SummaryShare('summaryShare');
    }

    render() {
        return (
            <div className='summary-wrap' style={{
            }}>
                <div className='summary-panel' style={{
                    opacity: this.state.isSummaryShow ? '1' : '0',
                    zIndex: this.state.isSummaryShow ? '3' : '-1',
                }}>
                    <div className='summary-panel-head'> 
                        <p style={{display: 'inline', fontSize: '16px', fontFamily: 'CommonPixel'}}>Summary</p>
                        <div className='summary-panel-close' onClick={this.onClose.bind(this)}></div>
                    </div>
                    <div className='summary-hline'></div>
                    <div id='summaryShare'></div>
                    <Detail></Detail>
                </div>
                <div 
                    className={'icon-font summary-icon'}
                    dangerouslySetInnerHTML={{ __html: '&#xe653;'}}
                    onClick={this.onClick.bind(this)}
                    style={this.state.isSummaryShow ? {
                        opacity: '0.0',
                        fontSize: '0px'
                    } : {
                        opacity: '1.0',
                        fontSize: '25px'
                    }}
                >
                </div>
            </div>
        );
    }
}
