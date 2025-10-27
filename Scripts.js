// Espera a que el DOM (la página) esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Lógica para el botón de cambiar tema ---
    const themeToggleBtn = document.getElementById('theme-toggle');

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            // Alterna (toggle) la clase 'dark-mode' en el elemento <body>
            document.body.classList.toggle('dark-mode');
        });
    }

    // (Puedes agregar más lógica de JS aquí si la necesitas)

});