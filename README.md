# react-live-tweets
Demonstration of live twitter streams using React, Node (6 and above) and Socket.io (1.x.x). Demo tracks buzz word 'javascript'.

## Installation

Install with [npm](https://www.npmjs.com/)

```sh
$ npm install
```

## Configuration
You would need to fill in the twitter credentials to run this application in order to see the tweets.
Please fill in the credential details in `src/server/twitter-config-keys/config.js` for:
```
consumer_key: 'TWITTER CONSUMER KEY',
consumer_secret: 'TWITTER CONSUMER SECRET',
access_token_key: 'TWITTER ACCESS TOKEN KEY',
access_token_secret: 'TWITTER TOKEN SECRET',
```
Tracking of tweets isn't done on the fly. You can only track one thing at a time.
For now if you would want to track anything particular, please change the following config key in the same file as above:
```
buzzword: 'javascript'
```


## Usage
```sh
$ npm start
```

## Design Illustrations
Design illustrations were created and designed by [David Willis](https://dribbble.com/DJWillis).
