document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown-content');
    const items = dropdown.querySelectorAll('a');
    
    document.querySelector('.dropbtn').addEventListener('mouseover', () => {
        dropdown.classList.add('show');
        items.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('show');
            }, index * 100); // Adjust this value for a smoother or quicker transition
        });
    });
    
    document.querySelector('.dropbtn').addEventListener('mouseleave', () => {
        items.forEach((item) => {
            item.classList.remove('show');
        });
        setTimeout(() => {
            dropdown.classList.remove('show');
        }, items.length * 100); // Match this value to the delay above
    });
});
