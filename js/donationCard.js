$(document).ready(function () {
    $(".goToDonation").click(function () {
        location.href = "http://127.0.0.1:5502/html/donation/donation01.html";
    });
});

$(document).ready(function () {
    $(".cancelButt").click(function () {
        $(".donationCard").fadeOut();
    });
});
