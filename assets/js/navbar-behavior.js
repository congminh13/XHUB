document.addEventListener('DOMContentLoaded', function () {
    var nalItems = document.querySelectorAll('.nal-item');
    var borderSlider = document.querySelector('.border-slider');
    var activeItem = document.querySelector('.nal-item.selected');

    function moveSlider() {
        var selectedRect = activeItem.getBoundingClientRect();
        var sliderOffset = selectedRect.left - nalItems[0].getBoundingClientRect().left;

        borderSlider.style.width = selectedRect.width + 'px';
        borderSlider.style.transform = 'translateX(' + sliderOffset + 'px)';
    }

    function isElementInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    function isBottomOfPage() {
        var body = document.body;
        var html = document.documentElement;
        var documentHeight = Math.max(
            body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight
        );

        return (window.innerHeight + window.scrollY) >= documentHeight;
    }

    nalItems.forEach(function (item) {
        item.addEventListener('click', function () {
            nalItems.forEach(function (otherItem) {
                otherItem.classList.remove('selected');
                otherItem.classList.remove('heavy');
            });

            item.classList.add('selected');
            item.classList.add('heavy');
            activeItem = item;

            moveSlider();
        });
    });

    window.addEventListener('scroll', function () {
        var windowHeight = window.innerHeight || document.documentElement.clientHeight;

        for (var i = 0; i < nalItems.length; i++) {
            var sectionId = nalItems[i].getAttribute('href').substring(1);
            var targetSection = document.getElementById(sectionId);

            if (isElementInViewport(targetSection)) {
                nalItems.forEach(function (otherItem) {
                    otherItem.classList.remove('selected');
                    otherItem.classList.remove('heavy');
                });

                nalItems[i].classList.add('selected');
                nalItems[i].classList.add('heavy');
                activeItem = nalItems[i];

                moveSlider();
                break;  // Exit the loop once we find the visible section
            }
        }

        // Check if scrolled to the bottom and automatically select the last section
        if (isBottomOfPage()) {
            nalItems.forEach(function (item) {
                item.classList.remove('selected');
                item.classList.remove('heavy');
            });

            nalItems[nalItems.length - 1].classList.add('selected');
            nalItems[nalItems.length - 1].classList.add('heavy');
            activeItem = nalItems[nalItems.length - 1];

            moveSlider();
        }
    });

    moveSlider();
});
