사업 소개 바로가기
$(document).ready(function () {
	$('.goToBusiness01Container').mouseover(function () {
		$('.goBg1').css({ opacity: 1 });
		$('.bi-arrow-right-circle-fill').css({ opacity: 1 });
	});
	$('.goToBusiness01Container').mouseout(function () {
		$('.goBg1').css({ opacity: 0 });
		$('.bi-arrow-right-circle-fill').css({ opacity: 0 });
	});

	$('.goToBusiness02Container').mouseover(function () {
		$('.goBg2').css({ opacity: 1 });
		$('.bi-arrow-left-circle-fill').css({ opacity: 1 });
	});
	$('.goToBusiness02Container').mouseout(function () {
		$('.goBg2').css({ opacity: 0 });
		$('.bi-arrow-left-circle-fill').css({ opacity: 0 });
	});

	$('.goToBusiness01Container').click(function () {
		window.location.href = 'htmlbusinessbusiness01.html';
	});

	$('.goToBusiness02Container').click(function () {
		window.location.href = 'htmlbusinessbusiness02.html';
	});
});

$(document).ready(function () {
	$('.goToCamPaign').click(function () {
		window.location.href = 'htmlcampaigncampaign01.html';  Replace with your desired page URL
	});
});
