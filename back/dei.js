document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.carousel-item');

    // Инициализация состояния (все элементы неактивны по умолчанию)
    items.forEach(item => {
        item.classList.remove('active');
    });

    // Наведение мыши
    items.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.classList.add('active');
        });

        item.addEventListener('mouseleave', () => {
            item.classList.remove('active');
        });
    });
});
