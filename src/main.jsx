var React = require('react');
var ReactDOM = require('react-dom');
var WidgetLarge = require('./components/WidgetLarge.jsx');
var WidgetMedium = require('./components/WidgetMedium.jsx');
var WidgetSmall = require('./components/WidgetSmall.jsx');

ReactDOM.render(
    <WidgetMedium text="20" label="New followers added this month"/>, 
    document.getElementById('leftMediumWidget')
);

ReactDOM.render(
    <WidgetMedium text="$ 1250" label="Average Monthly Income"/>, 
    document.getElementById('middleMediumWidget')
);

ReactDOM.render(
    <WidgetMedium text="$ 13865" label="Yearly Income Goal"/>, 
    document.getElementById('rightMediumWidget')
);

ReactDOM.render(
    <WidgetMedium text="18&#176;" label="Paris" color="#ff7306"/>, 
    document.getElementById('orangeMediumWidget')
);

ReactDOM.render(
    <WidgetLarge 
        bodyColor="#0086c5"
        leftText="15080"
        leftLabel="Shot Views"
        middleText="12000"
        middleLabel="Likes"
        rightText="5100"
        rightLabel="Comments"
    />, 
    document.getElementById('blueLargeWidget')
);

ReactDOM.render(
    <WidgetLarge 
        bodyColor="#c5439d"
        leftText="15080"
        leftLabel="Shot Views"
        middleText="12000"
        middleLabel="Likes"
        rightText="5100"
        rightLabel="Comments"
    />, 
    document.getElementById('pinkLargeWidget')
);

ReactDOM.render(
    <WidgetSmall text="1.5k" label="New Visitors" color="#0086c5"/>, 
    document.getElementById('blueSmallWidget')
);

ReactDOM.render(
    <WidgetSmall text="50%" label="Bounce Rate" color="#a376cc"/>, 
    document.getElementById('purpleSmallWidget')
);

ReactDOM.render(
    <WidgetSmall text="28%" label="Searches" color="#ff2d1b"/>, 
    document.getElementById('redSmallWidget')
);

ReactDOM.render(
    <WidgetSmall text="140.5kb" label="Traffic" color="#4bb645"/>, 
    document.getElementById('greenSmallWidget')
);