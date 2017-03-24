const tweetStream = require('../../socket/tweets.io');
const React = require('react');
const _ = require('lodash');
const Tweets = require('./components/tweets');
const MovingTrain = require('../moving-train');

const TwitterFeed = React.createClass({
    getInitialState: function () {
        return {
            tweets: []
        };
    },
    addTweet: function (tweet) {

        var tweets = _.cloneDeep(this.state.tweets);
        tweets.splice(0, 0, tweet);
        tweets = _.take(tweets, 1);

        this.setState({
            tweets: tweets
        });
    },
    componentWillMount: function () {
        tweetStream(function (tweet) {
            this.addTweet(tweet);
        }.bind(this));
    },
    render: function () {
        return (
            <div>
                <Tweets tweets={this.state.tweets}/>
                <MovingTrain />
            </div>
        )
    }
});

module.exports = TwitterFeed;
