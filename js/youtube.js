 2. This code loads the IFrame Player API code asynchronously(비동기적).
var tag = document.createElement("script");

tag.src = "https:www.youtube.comiframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 3. This function creates an <iframe> (and YouTube player)
    after the API code downloads.
function onYouTubeIframeAPIReady() {
    new YT.Player("player", {
        videoId: "p9RF9_fsZqg", 최초 재생할 유튜브 영상 ID
        playerVars: {
            autoplay: 1,
            loop: 1, 반복재생여부(1:반복재생 함)
            playlist: "p9RF9_fsZqg", 반복 재생할 유튜브 영상 ID 목록
            rel: 0, 연관 동영상 표시여부(0:표시 안함)
            controls: 0, 플레이어 컨트롤러 표시여부(0:표시 안함)
            playsinline: 1,
            mute: 1, 음소거여부 (1:음소거 함)
        },
        events: {
            onReady: function (event) {
                 onReady는 함수 event가 실행될때 player와 연결시켜주는 매소드
                event.target.playVideo();
            },
        },
    });
}

const h3Youtube = document.getElementsByClassName("youtubeH3");

let changeH3YoutubeOpacity = () => {
    $(h3Youtube).animate(
        {
            opacity: 1,
        },
        5500
    );
};
changeH3YoutubeOpacity();
