require('./moving-train.scss');
const React = require('react');

const MovingTrain = React.createClass({

    render: () => {
        return (
            <div className="wrapper">
                <div className="sky"></div>
                <div className="landscape"></div>
                <div className="skyline"></div>
                <div className="bridge"></div>
                <div className="train"></div>
            </div>

        )
    }
});

module.exports = MovingTrain;
