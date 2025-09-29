// header.js - v1.0
document.addEventListener('DOMContentLoaded', function() {
    
    // Sidenav open/close logic
    const openBtn = document.getElementById('sidenav-open-btn');
    const closeBtn = document.getElementById('sidenav-close-btn');
    const overlay = document.getElementById('sidenav-overlay');

    const openNav = () => document.body.classList.add('sidenav-is-open');
    const closeNav = () => document.body.classList.remove('sidenav-is-open');

    if(openBtn) openBtn.addEventListener('click', openNav);
    if(closeBtn) closeBtn.addEventListener('click', closeNav);
    if(overlay) overlay.addEventListener('click', closeNav);

    // Logout Modal Logic
    // Creating logout modal elements dynamically
    const logoutModal = document.createElement('div');
    logoutModal.id = 'logoutConfirmModal';
    logoutModal.style.cssText = 'display: none; position: fixed; z-index: 2000; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgba(0,0,0,0.6); align-items: center; justify-content: center; animation: fadeIn 0.3s;';
    
    logoutModal.innerHTML = `
        <div style="background-color: #fff; color: #32325d; margin: auto; padding: 30px; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.15); max-width: 400px; width: 90%; text-align: center; animation: slideIn 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);">
            <h3 style="margin-top: 0; font-size: 1.5em;">Confirm Logout</h3>
            <p style="color: #8898aa; margin-bottom: 25px;">Are you sure you want to sign out?</p>
            <div style="display: flex; gap: 15px; justify-content: center;">
                <button id="cancelLogoutBtn" style="border: none; padding: 12px 25px; border-radius: 8px; font-weight: 600; font-size: 1em; cursor: pointer; transition: all 0.2s; background-color: #f1f1f1; color: #32325d;">Cancel</button>
                <button id="confirmLogoutBtn" style="border: none; padding: 12px 25px; border-radius: 8px; font-weight: 600; font-size: 1em; cursor: pointer; transition: all 0.2s; background-color: #f5365c; color: white;">Logout</button>
            </div>
        </div>
        <style>
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
            @keyframes slideIn { from { transform: translateY(-30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        </style>
    `;
    document.body.appendChild(logoutModal);

    const logoutBtn = document.getElementById('logoutBtn');
    const cancelBtn = document.getElementById('cancelLogoutBtn');
    const confirmBtn = document.getElementById('confirmLogoutBtn');

    if(logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            logoutModal.style.display = "flex";
        });
    }
    if(cancelBtn) {
        cancelBtn.addEventListener('click', () => {
            logoutModal.style.display = "none";
        });
    }
    if(confirmBtn) {
        confirmBtn.addEventListener('click', () => {
            window.location.href = 'logout.php';
        });
    }
    window.addEventListener('click', (event) => {
        if (event.target == logoutModal) {
            logoutModal.style.display = "none";
        }
    });
});
