import ReactDOM from 'react-dom';
import React from 'react';
import Panel from './panel/index.jsx';
import RightClickDesigner from './right-click-designer/index.jsx';
import './index.css';

ReactDOM.render(
    <Panel/>,
    document.getElementById('panel')
);

ReactDOM.render(
    <RightClickDesigner/>,
    document.getElementById('rightClickDesigner')
);


