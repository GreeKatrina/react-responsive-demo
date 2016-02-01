var React = require('react');

var WidgetSmall = React.createClass({
    render: function() {

        var panelStyle = {},
            headingStyle = {
                background: this.props.color,
                color: "white"
            }, 
            headingTextStyle = {
                fontSize: 16,
                // This is in em, not pixels
                lineHeight: 1.1,
                fontWeight: "bold"
            }, 
            headingLabelStyle = {
                fontSize: 10
            };

        return (
            <div style={panelStyle} className="panel panel-default">
                <div style={headingStyle} className="panel-heading">
                    <div style={headingLabelStyle}>{this.props.label}</div>
                    <div style={headingTextStyle}>{this.props.text}</div>
                </div>
                <div className="panel-body"></div>
            </div>
        );
    }
});

module.exports = WidgetSmall;