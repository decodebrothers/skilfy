let currentSectionIndex = 0;

function scrollToNextSection() {
    currentSectionIndex += 1;

    if (currentSectionIndex < 5) {
        const nextSection = document.getElementById(`section${currentSectionIndex + 1}`);
        nextSection.scrollIntoView({ behavior: 'smooth' });
    }
}

new WOW().init();

$(".custom-select .dropdown-menu li").click(function () {
    $(this).parents(".dropdown").find('button').html($(this).html() + ' <span class="caret"></span>');
    $(this).parents(".dropdown").find('button').val($(this).data('value'));
});

var Touch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
if (typeof Touch === 'undefined') {
    luxy.init({
        wrapper: '#main',
        targets: '.luxy-el',
        wrapperSpeed: 0.08
    });

    jumpToTop = (obj) => {
        scrollTo({
            top: document.querySelector(obj).offsetTop,
            left: 0,
            behavior: 'smooth'
        });
        window.location = `${obj}`;
    };

    jumpToContact = (obj) => {
        scrollTo({
            top: document.querySelector(obj).offsetTop,
            left: 0,
            behavior: 'smooth'
        });
        window.location = `${obj}`;
    };

    jumpToPortfolio = (obj) => {
        scrollTo({
            top: document.querySelector(obj).offsetTop,
            left: 0,
            behavior: 'smooth'
        });
        window.location = `${obj}`;
    };

}