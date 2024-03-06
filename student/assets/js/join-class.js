const back_class_render = document.querySelector('#back-class-render');

document.addEventListener('DOMContentLoaded', function () {
    back_class_render.addEventListener('click', function () {
        window.location.href = 'index.html'; // Use forward slashes
    });
});
