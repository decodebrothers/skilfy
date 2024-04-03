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

$(function () {
    $.scrollify({
        section: ".panels",
        scrollbars: false,
        scrollSpeed: 500,
    });

    $(".pagination a").on("click", function () {
        $.scrollify.move($(this).attr("href"));
    });

});