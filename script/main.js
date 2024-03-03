window.onscroll = function () {
    var elementToHide = document.getElementById('headerOne');
    var elementToShow = document.getElementById('headerTwo');

    var scrollThreshold = 80;


    if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) {
        elementToHide.classList.add('hidden');
    } else {
        elementToHide.classList.remove('hidden');
    }

    if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) {
        elementToShow.classList.add('show');
    } else {
        elementToShow.classList.remove('show');
    }
};