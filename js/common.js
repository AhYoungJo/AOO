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
