const React = require('react');
const reactStringReplace = require('react-string-replace');
require('./tweet.scss');

const Tweet = React.createClass({
    propTypes: {
        tweet: React.PropTypes.object.isRequired
    },
    render: function () {
        const text = this.props.tweet.text;

        // Match URLs
        tweetText = reactStringReplace(text, /(https?:\/\/\S+)/g, (match, i) => (
            <a key={match + i}
               href={match}>
                {match}
            </a>
        ));

        // Match @-mentions
        tweetText = reactStringReplace(tweetText, /@(\w+)/g, (match, i) => (
            <span key={`span${match + i}`} className="handle">
                <a key={match + i}
                   href={`https://twitter.com/${match}`}>
                    @{match}
                </a>
            </span>
        ));

        // Match hashtags
        tweetText = reactStringReplace(tweetText, /#(\w+)/g, (match, i) => (
            <span key={`span${match + i}`} className="handle">
                <a key={match + i}
                   href={`https://twitter.com/hashtag/${match}`}>
                    #{match}</a>
            </span>
        ));


        return (
            <div className="tweet-text box box-container">
                <span>{tweetText}</span>
            </div>
        );
    }
});

module.exports = Tweet;