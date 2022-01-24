import ReactDOM from 'react-dom';
import React from 'react';
import Header from './header/index';
import Panel from './panel/index';
import RightClickDesigner from './right-click-designer/index';
import './index.css';

ReactDOM.render(
    <Header/>,
    document.getElementById('header')
);

ReactDOM.render(
    <Panel/>,
    document.getElementById('panel')
);

ReactDOM.render(
    <RightClickDesigner/>,
    document.getElementById('rightClickDesigner')
);


