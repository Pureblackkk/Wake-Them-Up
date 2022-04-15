import ReactDOM from 'react-dom';
import React from 'react';
import Header from './header/index';
import Panel from './panel/index';
import RightClickDesigner from './right-click-designer/index';
import Summary from './summary/index';
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

ReactDOM.render(
    <RightClickDesigner/>,
    document.getElementById('rightClickDesigner')
);

ReactDOM.render(
    <Summary/>,
    document.getElementById('summary')
)


