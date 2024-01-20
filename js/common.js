$(document).ready(function () {
    $('.introMenu').mouseover(function () {
        $('.introSubMenu ul li').css({
            visibility: 'visible',
            opacity: '1',
            transition: '1s',
            top: '4vh',
        });
    });
});
$(document).ready(function () {
    $('.activityMenu').mouseover(function () {
        $('.activitySubMenu ul li').css({
            visibility: 'visible',
            opacity: '1',
            transition: '1s',
            top: '4vh',
        });
    });
});
$(document).ready(function () {
    $('.businessMenu').mouseover(function () {
        $('.businessSubMenu ul li').css({
            visibility: 'visible',
            opacity: '1',
            transition: '1s',
            top: '4vh',
        });
    });
});

$(document).ready(function () {
    $('.communicationMenu').mouseover(function () {
        $('.communicationSubMenu ul li').css({
            visibility: 'visible',
            opacity: '1',
            transition: '1s',
            top: '4vh',
        });
    });
});

$(document).ready(function () {
    $('.donationMenu').mouseover(function () {
        $('.donationSubMenu ul li').css({
            visibility: 'visible',
            opacity: '1',
            transition: '1s',
            top: '4vh',
        });
    });
});

window.addEventListener('mouseout', function () {
    $('.main-menu ul li').css({
        visibility: 'hidden',
        opacity: '0',
        transition: '0.5s',
        top: '0vh',
    });
});

var scrollToTopButton = document.getElementById('scrollToTopBtn');

// 스크롤이 바디 70프로 이상 내려갔을때 버튼 나타나게 구현
// offsetHeight, clientHeight 둘중 하나 선택
// clientHeight은 스크롤영역 미포함 (페이지 들어때 뜨는 스크린 기준)
// offsetHeight은 스크롤영역 포함 (전체 화면 기준)

window.onscroll = function () {
    if (document.body.scrollTop > 0.6 * document.body.offsetHeight) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
};

//버튼 클릭시 스크롤이 탑으로 부드럽게 올라가는 js
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}
