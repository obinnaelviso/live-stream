 /**
  * Put your video IDs in this array
  */
//  var videoIDs = [
//     '24190444',
//     '25081735',
//     '71070693',
//     '278255877'
// ];

var videoIDs = $('#vimeo_id li').map(function () {
    return $(this).text();
});

var player, nextVideo, currentVideoId = 0;

player = new Vimeo.Player('vimeo', {
    height: '440',
    width: '850',
    autoplay: true,
    maxwidth: '100%',
    id: videoIDs[currentVideoId],
})

nextVideo = function(data) {
    currentVideoId++;
    if (currentVideoId >= videoIDs.length) {
        currentVideoId = 0;
    }
    if (currentVideoId < videoIDs.length) {
        player.unload()
        player.loadVideo(videoIDs[currentVideoId])
        player.play()
    }
}

player.on('ended', nextVideo)

