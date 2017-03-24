var ReactDOM = require('react-dom');
var React = require('react');
var styles = require('./app.scss');

var TwitterFeed = require('./components/twitter-feed/twitter-feed.js');

ReactDOM.render( <TwitterFeed />,document.getElementById('application') );
