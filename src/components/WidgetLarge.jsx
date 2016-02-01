var React = require('react');

var WidgetLarge = React.createClass({
    render: function() {

        var panelStyle = {

        };

        var headingStyle = {
            height: 100
        };

        var footerStyle = {
            background: "#373c3c",
            // Get rid of white space between footer and header
            borderTop: "1px solid #373c3c",
            textAlign: "center"
        };

        var footerTextStyle = {
            fontSize: 18,
            color: "white"
        };

        var footerLabelStyle = {
            fontSize: 10,
            color: "#aaa"
        };

        if (this.props.bodyColor) {
            headingStyle.background = this.props.bodyColor;
            headingStyle.borderBottom = "1px solid " + this.props.bodyColor;
        }

        return (
            <div style={panelStyle} className="panel panel-default">
                <div style={headingStyle} className="panel-heading"></div>
                <div style={footerStyle} className="panel-footer">
                    <div className="row">
                        <div style={footerTextStyle} className="col-xs-4">{this.props.leftText}</div>
                        <div style={footerTextStyle} className="col-xs-4">{this.props.middleText}</div>
                        <div style={footerTextStyle} className="col-xs-4">{this.props.rightText}</div>
                    </div> 
                    <div className="row">
                        <div style={footerLabelStyle} className="col-xs-4">{this.props.leftLabel}</div>
                        <div style={footerLabelStyle} className="col-xs-4">{this.props.middleLabel}</div>
                        <div style={footerLabelStyle} className="col-xs-4">{this.props.rightLabel}</div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = WidgetLarge;