const React = require('react');
const Tweet = require('../tweet');
require('./tweets.scss');

const Tweets = React.createClass({
    propTypes: {
        tweets: React.PropTypes.array.isRequired
    },
    mapTweets: function (tweet) {
        return (
            <Tweet key={tweet.id} tweet={tweet}/>
        )
    },
    render: function () {
        let tweets = [];
        if (this.props && this.props.tweets) {
            tweets = this.props.tweets.map(this.mapTweets) || [];
        }

        return (
            <div className="tweet-container">
                {tweets}
            </div>
        );
    }

});

module.exports = Tweets;
