function initNavigation() {
  // Detect page type from body attribute
  const pageType = document.body.getAttribute('data-page');

  // Force dark mode for resources and tools pages
  if (pageType === 'resources' || pageType === 'tools') {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    // Set initial theme for other pages
    const currentTheme = localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', currentTheme);
  }

  // Create navigation container
  const navContainer = document.createElement('div');
  navContainer.className = 'top-nav-container';

  // Home button (always present)
  const homeBtn = document.createElement('a');
  homeBtn.href = '/';
  homeBtn.className = 'nav-button home-button';
  homeBtn.innerHTML = '🏠';
  homeBtn.title = 'Return home';
  navContainer.appendChild(homeBtn);

  // "Back to Resources" button for tool pages
  if (pageType === 'tools') {
  document.addEventListener('DOMContentLoaded', function() {
    const backBtn = document.createElement('a');
    backBtn.href = '/resources';
    backBtn.className = 'nav-button back-button';
    backBtn.innerHTML = '<i class="fas fa-arrow-left"></i> Back to Resources';
    backBtn.title = 'Back to Resources';
    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.justifyContent = 'center';
    wrapper.style.margin = '3em 0 2em 0';
    wrapper.appendChild(backBtn);
    document.body.appendChild(wrapper);
  });
}

  // Theme toggle button (only for non-resources/tools pages)
  if (pageType !== 'resources' && pageType !== 'tools') {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const themeBtn = document.createElement('button');
    themeBtn.className = 'nav-button theme-button';
    themeBtn.innerHTML = currentTheme === 'dark' ? '☀️' : '🌙';
    themeBtn.title = 'Toggle theme';
    themeBtn.addEventListener('click', toggleTheme);
    navContainer.appendChild(themeBtn);
  }

  document.body.prepend(navContainer);
}

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

// Notes Search System
function setupNotesSearch() {
  const searchInput = document.getElementById('notesSearch');
  if (!searchInput) return;

  searchInput.addEventListener('input', function() {
    const searchTerm = this.value.trim().toLowerCase();
    const noteCards = document.querySelectorAll('.note-card');
    
    noteCards.forEach(card => {
      const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
      const desc = card.querySelector('p')?.textContent.toLowerCase() || '';
      const tags = card.querySelector('.note-tags')?.textContent.toLowerCase() || '';
      
      const match = title.includes(searchTerm) || 
                   desc.includes(searchTerm) || 
                   tags.includes(searchTerm);
      
      card.style.display = match ? 'block' : 'none';
    });
  });
}

// Writeups Search and Filter System
function setupWriteupsSearch() {
  const searchInput = document.getElementById('writeupsSearch');
  const difficultyBtns = document.querySelectorAll('.difficulty-btn');
  
  if (!searchInput) return;

  const filterWriteups = () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const difficulty = document.querySelector('.difficulty-btn.active')?.dataset.difficulty || 'all';
    
    document.querySelectorAll('.writeup-card').forEach(card => {
      const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
      const desc = card.querySelector('p')?.textContent.toLowerCase() || '';
      const tags = card.querySelector('.writeup-tags')?.textContent.toLowerCase() || '';
      const event = card.querySelector('.event')?.textContent.toLowerCase() || '';
      const cardDifficulty = card.dataset.difficulty || 'easy';
      
      const matchesSearch = title.includes(searchTerm) || 
                          desc.includes(searchTerm) || 
                          tags.includes(searchTerm) ||
                          event.includes(searchTerm);
      const matchesDifficulty = difficulty === 'all' || cardDifficulty === difficulty;
      
      card.style.display = (matchesSearch && matchesDifficulty) ? 'block' : 'none';
    });
  };

  // Search input handler
  searchInput.addEventListener('input', filterWriteups);
  
  // Difficulty filter buttons
  difficultyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      difficultyBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterWriteups();
    });
  });

  // Trigger initial filter
  filterWriteups();
}

// Image Zoom Functionality
function setupImageZoom() {
  document.querySelectorAll('.writeup-content img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
      if (img.style.cursor === 'zoom-in') {
        img.style.maxWidth = '100%';
        img.style.cursor = 'zoom-out';
      } else {
        img.style.maxWidth = '100%';
        img.style.cursor = 'zoom-in';
      }
    });
  });
}

// Initialize everything when DOM loads
document.addEventListener('DOMContentLoaded', function() {
  initNavigation();
  setupNotesSearch();
  setupWriteupsSearch();
  setupImageZoom();
  
  // Syntax highlighting
  if (typeof hljs !== 'undefined') {
    hljs.highlightAll();
  }

  // Add copy buttons to code blocks
  document.querySelectorAll('pre code').forEach(codeBlock => {
    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-btn';
    copyBtn.innerHTML = '<i class="far fa-copy"></i>';
    copyBtn.title = 'Copy to clipboard';
    
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(codeBlock.textContent)
        .then(() => {
          copyBtn.innerHTML = '<i class="fas fa-check"></i>';
          setTimeout(() => {
            copyBtn.innerHTML = '<i class="far fa-copy"></i>';
          }, 2000);
        });
    });
    
    const pre = codeBlock.parentElement;
    if (pre) {
      pre.style.position = 'relative';
      pre.appendChild(copyBtn);
    }
  });
});

