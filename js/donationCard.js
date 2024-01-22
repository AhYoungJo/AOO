$(document).ready(function () {
	$('.goToDonation').click(function () {
		location.href = '/html/donation/donation01.html';
	});
});

$(document).ready(function () {
	$('.cancelButt').click(function () {
		$('.donationCard').fadeOut();
	});
});
