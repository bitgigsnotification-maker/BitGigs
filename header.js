/* header.css - v1.0 */
:root {
    --primary-color: #5e72e4; --primary-light: #f0f2ff;
    --success-color: #2dce89; --danger-color: #f5365c; --warning-color: #fb6340;
    --text-dark: #32325d; --text-light: #8898aa; --border-color: #e9ecef;
    --card-bg: #ffffff; --body-bg: #f7fafc;
}
*, *::before, *::after { box-sizing: border-box; }
body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    background-color: var(--body-bg); margin: 0; padding-top: 60px;
}
body.sidenav-is-open { overflow: hidden; }

/* --- HEADER --- */
.header-bar {
    background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--border-color); padding: 0 15px; height: 60px;
    display: flex; align-items: center; justify-content: space-between;
    position: fixed; top: 0; left: 0; right: 0; z-index: 999;
}
.header-left, .header-right { display: flex; align-items: center; }
.header-icon-wrapper { position: relative; margin: 0 8px; }
.header-bar a.icon, .header-bar .icon { font-size: 22px; cursor: pointer; color: var(--text-dark); text-decoration: none; }
.user-id-badge {
    font-weight: 600; font-size: 0.9em; color: var(--text-dark); text-decoration: none;
    padding: 6px 16px; border-radius: 20px; background-color: #f0f2f5;
    border: 1px solid var(--border-color); display: flex; align-items: center; gap: 8px;
}
.pulsing-dot {
    position: absolute; top: -2px; right: -3px; height: 10px; width: 10px;
    background-color: var(--danger-color); border-radius: 50%; border: 2px solid var(--card-bg);
    animation: pulse-animation 1.5s infinite;
}
@keyframes pulse-animation { 0% { box-shadow: 0 0 0 0 rgba(245, 54, 92, 0.7); } 70% { box-shadow: 0 0 0 10px rgba(245, 54, 92, 0); } 100% { box-shadow: 0 0 0 0 rgba(245, 54, 92, 0); } }

/* --- SIDEBAR --- */
.sidenav {
    height: 100%; width: 280px; position: fixed; z-index: 1001; top: 0;
    right: -280px; background: var(--card-bg); border-left: 1px solid var(--border-color);
    transition: right 0.3s ease; display: flex; flex-direction: column;
}
.sidenav-header { padding: 15px 20px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); height: 61px; }
.sidenav-logo { max-height: 50px; }
.sidenav-close-btn { font-size: 24px; cursor: pointer; color: var(--text-light); }
.sidenav-profile { padding: 20px; text-align: left; border-bottom: 1px solid var(--border-color); display: flex; align-items: center; }
.sidenav-profile img { width: 40px; height: 40px; border-radius: 50%; object-fit: cover; margin-right: 15px; }
.sidenav-profile .username { font-weight: 600; font-size: 1.1em; margin: 0; color: var(--text-dark); }
.sidenav-nav { flex-grow: 1; overflow-y: auto; padding: 10px 0; }
.sidenav-nav a { padding: 12px 25px; text-decoration: none; font-size: 16px; font-weight: 500; color: var(--text-dark); display: flex; align-items: center; justify-content: space-between; transition: all 0.2s; border-left: 4px solid transparent; }
.sidenav-nav a:hover { background-color: var(--body-bg); border-left-color: var(--primary-color); }
.sidenav-nav a.active { background-color: var(--primary-light); color: var(--primary-color); font-weight: 600; border-left-color: var(--primary-color); }
.sidenav-nav a .link-content { display: flex; align-items: center; }
.sidenav-nav a .icon-wrapper { margin-right: 20px; width: 36px; height: 36px; font-size: 16px; display: grid; place-items: center; border-radius: 8px; color: white; }
.sidenav-nav .pulsing-dot { position: static; animation: none; border: none; }

.icon-dashboard { background-color: #5e72e4; } .icon-find { background-color: #2dce89; } .icon-post { background-color: #fb6340; } .icon-work { background-color: #5653b6; } .icon-jobs { background-color: #11cdef; } .icon-profile { background-color: #6c757d; } .icon-deposit { background-color: #f5365c; } .icon-withdraw { background-color: #ffc107; } .icon-notifications { background-color: #20c997; } .icon-referral { background-color: #6f42c1; } .icon-transactions { background-color: #fd7e14; } .icon-support { background-color: #007bff; } .icon-logout { background-color: #dc3545; }

.sidenav-footer { padding: 20px; border-top: 1px solid var(--border-color); }
.footer-btn { background-color: var(--success-color); color: white; border: none; padding: 12px; width: 100%; border-radius: 10px; font-size: 1em; text-decoration: none; display: block; text-align: center; font-weight: 600; cursor: pointer; }

.sidenav-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.5); z-index: 1000; opacity: 0; visibility: hidden; transition: opacity 0.3s ease, visibility 0s 0.3s; }
body.sidenav-is-open .sidenav { right: 0; }
body.sidenav-is-open .sidenav-overlay { opacity: 1; visibility: visible; }

/* --- MAIN CONTENT & STATS BAR --- */
.main-content-wrapper { padding: 80px 15px 20px 15px; }
.stats-card { display: flex; justify-content: space-around; background: var(--card-bg); padding: 8px 5px; margin-bottom: 20px; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid var(--border-color); max-width: 1200px; margin-left: auto; margin-right: auto; }
a.stat-link { text-decoration: none; flex: 1; }
.stat-item { display: flex; align-items: center; gap: 8px; justify-content: center; padding: 2px 8px; border-right: 1px solid #e9ecef; }
a.stat-link:last-of-type .stat-item, .stat-item:last-of-type { border-right: none; }
.stat-icon { width: 32px; height: 32px; font-size: 0.9em; display: grid; place-items: center; border-radius: 50%; }
.stat-text .label { font-size: 12px; color: var(--text-light); }
.stat-text .value { font-size: 1em; font-weight: 600; line-height: 1.2; }
.stat-icon.earning { background-color: #D4EDDA; color: #155724; } .stat-icon.deposit { background-color: #CCE5FF; color: #004085; } .stat-icon.timer { background-color: #FDEDD4; color: var(--warning-color); }
.stat-text .value.earning { color: #155724; } .stat-text .value.deposit { color: #004085; } .stat-text .value.timer { color: var(--warning-color); }

.announcement-bar { background-color: var(--card-bg); border-left: 5px solid; border-radius: 8px; padding: 15px 20px; display: flex; align-items: center; gap: 15px; position: relative; box-shadow: 0 4px 15px rgba(0,0,0,0.06); margin-bottom: 20px; max-width: 1200px; margin-left: auto; margin-right: auto; }
.announcement-text { flex: 1; font-size: 15px; line-height: 1.6; }
.announcement-dismiss { font-size: 1.5em; cursor: pointer; color: var(--text-light); text-decoration: none; padding: 5px; position: absolute; top: 10px; right: 10px; }
