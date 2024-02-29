document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.class-items .es-item');

    items.forEach(item => {
        item.addEventListener('click', function() {
            items.forEach(i => {
                const icon = i.querySelector('i');
                icon.classList.remove('fa-solid');
                icon.classList.add('fa-regular');
                i.style.backgroundColor = ''; 
            });


            const icon = item.querySelector('i');
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid');
            item.style.backgroundColor = 'var(--border-color)'; 
            item.style.borderRadius = '10px';
        });
    });
});
    