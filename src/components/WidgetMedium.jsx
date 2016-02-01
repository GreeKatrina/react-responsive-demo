var React = require('react');

var WidgetMedium = React.createClass({
    render: function() {

        var panelStyle = {
            height: 100
        };

        var bodyStyle = {}, 
            bodyTextStyle = {}, 
            bodyLabelStyle = {};

        if (this.props.color) {
            panelStyle.background = this.props.color;

            bodyStyle.textAlign = "center";
            
            bodyTextStyle.fontSize = 24;
            bodyTextStyle.color = "white";
            
            bodyLabelStyle.fontSize = 10;
            bodyLabelStyle.color = "white";
        } else {
            bodyTextStyle.paddingTop = 10;
            bodyTextStyle.fontSize = 16;
            bodyTextStyle.color = "#373c3c";
            bodyTextStyle.fontWeight = "bold";
            
            bodyLabelStyle.fontSize = 10;
            bodyLabelStyle.color = "#aaa";
        }

        return (
            <div style={panelStyle} className="panel panel-default">
                <div style={bodyStyle} className="panel-body">
                    <div style={bodyTextStyle}>{this.props.text}</div>
                    <div style={bodyLabelStyle}>{this.props.label}</div>
                </div>
            </div>
        );
    }
});

module.exports = WidgetMedium;