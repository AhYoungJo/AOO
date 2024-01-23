
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