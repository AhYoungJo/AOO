var imagePaths = [
    '/img/business01/air-problem1.png', // ".."은 상위 폴더를 나타냅니다.
    '/img/business01/air-problem2.png',
    '/img/business01/air-problem3.png', //임시용
];
// 이미지를 5초 간격으로 무한루프로 표시하는 함수
function showImages() {
    var imageContainer = document.getElementById('problem-image');
    var currentIndex = 0;

    function displayNextImage() {
        // 이미지 변경
        imageContainer.innerHTML = `<img src="${imagePaths[currentIndex]}" alt="Image">`;

        // 다음 이미지 인덱스 계산
        currentIndex = (currentIndex + 1) % imagePaths.length;

        // 5초 후에 다음 이미지 표시
        setTimeout(displayNextImage, 3000);
    }

    // 초기 이미지 표시
    displayNextImage();
}

// 페이지 로드 시 이미지 표시 시작
window.onload = showImages;

document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const header = document.querySelector('header');
    const section = document.querySelector('section');

    darkModeToggle.addEventListener('click', function () {
        // header의 ul과 li에 대한 클래스 추가 및 제거
        const ulElements = header.querySelectorAll('ul');
        ulElements.forEach(ul => ul.classList.toggle('dark-mode'));

        const liElements = header.querySelectorAll('li');
        liElements.forEach(li => li.classList.toggle('dark-mode'));

        // header의 나머지 하위 요소들에 대한 클래스 추가 및 제거
        const otherHeaderElements = header.querySelectorAll(':not(ul):not(li)');
        otherHeaderElements.forEach(element => element.classList.toggle('dark-mode'));

        // section의 .intro-section에 대한 클래스 추가 및 제거
        const introSection = section.querySelector('.intro-section');
        introSection.classList.toggle('dark-mode');

        // section의 나머지 하위 요소들에 대한 클래스 추가 및 제거
        const otherSectionElements = section.querySelectorAll(':not(.intro-section)');
        otherSectionElements.forEach(element => element.classList.toggle('dark-mode'));
    });
});