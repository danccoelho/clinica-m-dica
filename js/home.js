document.addEventListener('DOMContentLoaded', function () {
    
    const appLayout = document.querySelector('.app-layout');
    const toggleSidebarBtn = document.querySelector('.toggle-sidebar-btn');

    if (toggleSidebarBtn && appLayout) {
        toggleSidebarBtn.addEventListener('click', function (e) {
            e.preventDefault(); 
            appLayout.classList.toggle('sidebar-collapsed');
        });
    }

   
    const userNameElement = document.getElementById('user-name');
    const userEmailElement = document.getElementById('user-email');
    const logoutBtn = document.getElementById('logout-btn');

    const userEmail = localStorage.getItem('userEmail');

    if (userEmail && userNameElement && userEmailElement) {

        userEmailElement.textContent = userEmail;
        const namePart = userEmail.split('@')[0];
        const capitalizedName = namePart.charAt(0).toUpperCase() + namePart.slice(1);
        userNameElement.textContent = capitalizedName;
    } else {
        userNameElement.textContent = "Visitante";
    }
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Limpa os dados do usuário do localStorage
            localStorage.removeItem('userEmail');
            // Redireciona para a página de login
            window.location.href = 'index.html';
        });
    }
});