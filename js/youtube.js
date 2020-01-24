/**
 * Put your video IDs in this array
 */
// var videoIDs = [
//     'FhsD72QgnuA',
//     'Qq4yRQMq4us',
//     '32EPh4PnFo0',
//     'UpiAeqHsWLk'
// ];
var videoIDs = $('#youtube_id li').map(function () {
    return $(this).text();
});

var player, currentVideoId = 0;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube', {
        height: '440',
        width: '850',
        playerVars: {
            autoplay: 1,
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.loadVideoById(videoIDs[currentVideoId]);
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        currentVideoId++;
        if (currentVideoId >= videoIDs.length) {
            currentVideoId = 0;
        }
        if (currentVideoId < videoIDs.length) {
            player.loadVideoById(videoIDs[currentVideoId]);
        }
    }
}