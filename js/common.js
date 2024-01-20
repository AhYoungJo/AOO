$(document).ready(function () {
    $(".introMenu").mouseover(function () {
        $(".introSubMenu ul li").css({
            visibility: "visible",
            opacity: "1",
            transition: "1s",
            top: "3vh",
        });
    });
});
$(document).ready(function () {
    $(".activityMenu").mouseover(function () {
        $(".activitySubMenu ul li").css({
            visibility: "visible",
            opacity: "1",
            transition: "1s",
            top: "3vh",
        });
    });
});
$(document).ready(function () {
    $(".businessMenu").mouseover(function () {
        $(".businessSubMenu ul li").css({
            visibility: "visible",
            opacity: "1",
            transition: "1s",
            top: "3vh",
        });
    });
});

$(document).ready(function () {
    $(".communicationMenu").mouseover(function () {
        $(".communicationSubMenu ul li").css({
            visibility: "visible",
            opacity: "1",
            transition: "1s",
            top: "3vh",
        });
    });
});

$(document).ready(function () {
    $(".donationMenu").mouseover(function () {
        $(".donationSubMenu ul li").css({
            visibility: "visible",
            opacity: "1",
            transition: "1s",
            top: "4vh",
        });
    });
});

window.addEventListener("mouseout", function () {
    $(".main-menu ul li").css({
        visibility: "hidden",
        opacity: "0",
        transition: "0.5s",
        top: "0vh",
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

$scrollToTopButton.click(function () {
    $("html, body").animate(
        {
            scrollTop: 0,
        },
        "slow"
    );
});

$(document).ready(function () {
    $(".goToDonation").click(function () {
        location.href = "https://google.com";
    });
});

$(document).ready(function () {
    $(".cancelButt").click(function () {
        $(".donationCard").remove();
    });
});
