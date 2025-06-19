document.addEventListener('DOMContentLoaded', () => {

    const htmlElement = document.documentElement;
    const bodyElement = document.body;

   
    const increaseFontBtn = document.querySelector('.accessibility-submenu [aria-label="Aumentar fonte"]');
    const decreaseFontBtn = document.querySelector('.accessibility-submenu [aria-label="Diminuir fonte"]');
    const contrastBtn = document.querySelector('.accessibility-submenu [aria-label="Modo de alto contraste"]');

  
    const changeFontSize = (step) => {
      
        const currentSize = parseFloat(window.getComputedStyle(htmlElement).fontSize);

        const newSize = Math.max(10, Math.min(24, currentSize + step));
        htmlElement.style.fontSize = newSize + 'px';
    };

    if (increaseFontBtn) {
        increaseFontBtn.addEventListener('click', () => changeFontSize(1));
    }

    if (decreaseFontBtn) {
        decreaseFontBtn.addEventListener('click', () => changeFontSize(-1));
    }

    if (contrastBtn) {
        contrastBtn.addEventListener('click', () => {
            bodyElement.classList.toggle('high-contrast');
        });
    }
});