$(document).ready(() => {
    $('.photo').on('mouseenter', (event) => {
        const targetElement = event.currentTarget;
        $(targetElement).css('animation', 'expand 200ms ease-out forwards');
    });
    $('.photo').on('mouseout', (event) => {
        const targetElement = event.currentTarget;
        $(targetElement).css('animation', 'contract 100ms ease-in forwards');
    });
});