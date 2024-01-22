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
                !element.closest('div.donationCard')

                // !element.closest('ul.donationCard-inner')
                // !element.closest('ul.inner')
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