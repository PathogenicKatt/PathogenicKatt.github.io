// Set theme and save preference
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
  
  // Initialize theme on load
  function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(savedTheme);
  
    // Create toggle button
    const toggle = document.createElement('button');
    toggle.className = 'theme-toggle';
    toggle.innerHTML = savedTheme === 'dark' ? '☀️' : '🌙';
    toggle.addEventListener('click', () => {
      const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
      toggle.innerHTML = newTheme === 'dark' ? '☀️' : '🌙';
    });
    document.body.appendChild(toggle);
  }
  
  // Start everything
  document.addEventListener('DOMContentLoaded', initTheme);