var tweetStream = function (callback) {
    var socket = io.connect();
    socket.on('tweet', function (data) {
        callback(data);
    });
};
module.exports = tweetStream;