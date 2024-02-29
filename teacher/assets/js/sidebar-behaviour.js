document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.class-items .es-item');
    let selectedItem = null; // Variable to store the currently selected item

    items.forEach(item => {
        item.addEventListener('click', function() {
            const itemId = item.id; // Get the id of the clicked item

            items.forEach(i => {
                const icon = i.querySelector('i');
                icon.classList.remove('fa-solid');
                icon.classList.add('fa-regular');
                i.style.backgroundColor = '';
            });

            const icon = item.querySelector('i');
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid');
            item.style.backgroundColor = 'rgb(216, 220, 240)';
            item.style.borderRadius = '10px';

            // Update the selectedItem variable
            selectedItem = item;

            // Work with the itemId here
            console.log("Selected item id:", itemId);
        });

        item.addEventListener('mouseenter', function() {
            if (item !== selectedItem) { // Only change background color if the item is not selected
                item.style.backgroundColor = 'var(--border-color)';
                item.style.borderRadius = '10px';
            }
        });

        item.addEventListener('mouseleave', function() {
            if (item !== selectedItem) { // Only reset background color if the item is not selected
                item.style.backgroundColor = ''; // Reset background color
                item.style.borderRadius = ''; // Reset border radius
            }
        });
    });
});
