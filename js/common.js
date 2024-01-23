$(document).ready(function () {
    $(".introMenu a").mouseover(function () {
        $(".introSubMenu ul li").css({
            visibility: "visible",
            opacity: "1",
            transition: "1s",
            top: "2vh",
        });
    });
});
$(document).ready(function () {
    $(".activityMenu a").mouseover(function () {
        $(".activitySubMenu ul li").css({
            visibility: "visible",
            opacity: "1",
            transition: "1s",
            top: "2vh",
        });
    });
});
$(document).ready(function () {
    $(".businessMenu a").mouseover(function () {
        $(".businessSubMenu ul li").css({
            visibility: "visible",
            opacity: "1",
            transition: "1s",
            top: "2vh",
        });
    });
});

$(document).ready(function () {
    $(".communicationMenu a").mouseover(function () {
        $(".communicationSubMenu ul li").css({
            visibility: "visible",
            opacity: "1",
            transition: "1s",
            top: "2vh",
        });
    });
});

$(document).ready(function () {
    $(".donationMenu a").mouseover(function () {
        $(".donationSubMenu ul li").css({
            visibility: "visible",
            opacity: "1",
            transition: "1s",
            top: "2vh",
        });
    });
});

window.addEventListener("mouseout", function () {
    $(".main-menu ul li").css({
        visibility: "hidden",
        opacity: "0",
        transition: "0.5s",
        top: "0px",
    });
});

// HEAD
$(document).ready(function () {
    var $scrollToTopButton = $("#scrollToTopBtn");
    var scrollThreshold = 0.4; // 40%

    // 스크롤이 전체 페이지의 40% 이상 내려갔을 때 버튼 나타나게 구현
    $(window).scroll(function () {
        var windowHeight = $(window).height();
        var documentHeight = $(document).height();
        var scrollPosition = $(this).scrollTop();

        if (scrollPosition > scrollThreshold * (documentHeight - windowHeight)) {
            $scrollToTopButton.css("display", "inline-block");
        } else {
            $scrollToTopButton.css("display", "none");
        }
    });
});

$(document).ready(function () {
    var $scrollToTopButton = $("#scrollToTopBtn");
    var scrollThreshold = 0.4; // 40%

    // 스크롤이 전체 페이지의 40% 이상 내려갔을 때 버튼 나타나게 구현
    $(window).scroll(function () {
        var windowHeight = $(window).height();
        var documentHeight = $(document).height();
        var scrollPosition = $(this).scrollTop();

        if (scrollPosition > scrollThreshold * (documentHeight - windowHeight)) {
            $scrollToTopButton.css("display", "inline-block");
        } else {
            $scrollToTopButton.css("display", "none");
        }
    });
});

//버튼 클릭시 스크롤이 탑으로 부드럽게 올라가는 js
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

// $(document).ready(function () {
//     $(".goToDonation").click(function () {
//         location.href = "http://127.0.0.1:5502/html/donation/donation01.html";
//     });
// });

// $(document).ready(function () {
//     $(".cancelButt").click(function () {
//         $(".donationCard").fadeOut();
//     });
// });


// 다크모드

var mode = false; //true: dark, false: light

document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const header = document.querySelector('header');
    const section = document.querySelector('section');
    const body = document.querySelector('body');

    darkModeToggle.addEventListener('click', function () {
        const bodyElements = body.querySelectorAll('*');
        // bodyElements.forEach(element => element.classList.toggle('dark-mode'));

        bodyElements.forEach(element => {
            if (
                !element.closest('footer') &&
                !element.closest('div.intro-section') &&
                // !element.closest('div.main-menu') &&
                !element.matches('div.main-menu')&&
                !element.matches('ul.inner')&&
                !element.matches('button#scrollToTopBtn') &&
                !element.closest('div.donationCard') &&

                // index.html
                !element.closest('h3.youtubeH3') &&
                !element.closest('div.goToNoticeSection') &&
                !element.closest('div.goToBussinessSection') &&
                !element.closest('div.goToCampaign *') &&
                // activation
                !element.closest('div.join-us-section') 


            ) {

                element.classList.toggle('dark-mode');
                
            }
        });

        mode = !mode;
        if(mode){
            this.textContent = '라이트 모드';
            darkModeToggle.setAttribute('style','background-color: #FFF !important; color:black !important')
        }
        else{
            this.textContent = '다크 모드';
            darkModeToggle.setAttribute('style','background-color: #333; color:white')
        }
    
    });
});