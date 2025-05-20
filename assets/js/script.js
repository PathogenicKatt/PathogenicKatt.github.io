// Initialize theme and navigation
function initNavigation() {
  const currentTheme = localStorage.getItem('theme') || 
                     (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', currentTheme);

  // Create navigation container
  const navContainer = document.createElement('div');
  navContainer.className = 'top-nav-container';

  // Home button
  const homeBtn = document.createElement('a');
  homeBtn.href = '/';
  homeBtn.className = 'nav-button home-button';
  homeBtn.innerHTML = '🏠';
  homeBtn.title = 'Return home';

  // Theme toggle button
  const themeBtn = document.createElement('button');
  themeBtn.className = 'nav-button theme-button';
  themeBtn.innerHTML = currentTheme === 'dark' ? '☀️' : '🌙';
  themeBtn.title = 'Toggle theme';
  themeBtn.addEventListener('click', toggleTheme);

  // Add buttons to container
  navContainer.appendChild(homeBtn);
  navContainer.appendChild(themeBtn);
  document.body.prepend(navContainer);
}

// Theme toggle function
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  const themeBtn = document.querySelector('.theme-button');
  if (themeBtn) {
    themeBtn.innerHTML = newTheme === 'dark' ? '☀️' : '🌙';
    themeBtn.title = newTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
  }
}

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', initNavigation);