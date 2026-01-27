function initNavigation() {
  // Set initial theme based on user or system preference
  const currentTheme = localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', currentTheme);

  // Create navigation container
  const navContainer = document.createElement('div');
  navContainer.className = 'top-nav-container';

  // Home button (hidden on home page)
  const isHomePage = window.location.pathname === '/' || window.location.pathname === '/index.html';
  if (!isHomePage) {
    const homeBtn = document.createElement('a');
    homeBtn.href = '/';
    homeBtn.className = 'nav-button home-button';
    homeBtn.innerHTML = '🏠';
    homeBtn.title = 'Return home';
    navContainer.appendChild(homeBtn);
  }

  // Theme toggle button
  const themeBtn = document.createElement('button');
  themeBtn.className = 'nav-button theme-button';
  themeBtn.innerHTML = currentTheme === 'dark' ? '☀️' : '🌙';
  themeBtn.title = currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
  themeBtn.onclick = toggleTheme;
  navContainer.appendChild(themeBtn);

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
    const noteCards = document.querySelectorAll('.note-preview');
    
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
function setupCVESearchAndFilter() {
  const searchInput = document.getElementById('cvesSearch');
  const criticalityBtns = document.querySelectorAll('.difficulty-btn');
  if (!searchInput) return;

  // Search filter
  searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    document.querySelectorAll('.cve-card').forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(query) ? '' : 'none';
    });
  });

  // Criticality filter
  criticalityBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      criticalityBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const crit = this.getAttribute('data-criticality');
      document.querySelectorAll('.cve-card').forEach(card => {
        card.style.display = (crit === 'all' || card.dataset.criticality === crit) ? '' : 'none';
      });
    });
  });
}

// Image Lightbox Functionality
function setupImageLightbox() {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const closeBtn = document.querySelector('.modal-close');
  
  if (!modal) return;

  // Open modal on image click
  document.querySelectorAll('.cert-image').forEach(img => {
    img.addEventListener('click', function() {
      modal.classList.add('active');
      modalImg.src = this.src;
      modalImg.alt = this.alt;
      document.body.style.overflow = 'hidden';
    });
  });

  // Close modal functions
  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  // Close on X button click
  closeBtn.addEventListener('click', closeModal);

  // Close on background click
  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  // Close on ESC key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

// Initialize everything when DOM loads
document.addEventListener('DOMContentLoaded', function() {
  initNavigation();
  setupNotesSearch();
  setupWriteupsSearch();
  setupImageZoom();
  setupCVESearchAndFilter();
  setupImageLightbox();
  
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

  // Random Bible Verse for Christ's Journey page
  if (window.location.pathname.startsWith("/christ")) {
    const verses = [
      '"Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight." <strong>- Proverbs 3:5-6</strong>',
      '"For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future." <strong>- Jeremiah 29:11</strong>',
      '"The Lord is my light and my salvation—whom shall I fear? The Lord is the stronghold of my life—of whom shall I be afraid?" <strong>- Psalm 27:1</strong>',
      '"Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go." <strong>- Joshua 1:9</strong>',
      '"Cast all your anxiety on him because he cares for you." <strong>- 1 Peter 5:7</strong>',
      '"But seek first his kingdom and his righteousness, and all these things will be given to you as well." <strong>- Matthew 6:33</strong>',
      '"Jesus looked at them and said, \'With man this is impossible, but with God all things are possible.\'" <strong>- Matthew 19:26</strong>',
      '"Humble yourselves before the Lord, and he will lift you up." <strong>- James 4:10</strong>',
      '"The Lord will fight for you; you need only to be still." <strong>- Exodus 14:14</strong>',
      '"For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." <strong>- John 3:16</strong>',
      '"I can do all this through him who gives me strength." <strong>- Philippians 4:13</strong>',
      '"And we know that in all things God works for the good of those who love him, who have been called according to his purpose." <strong>- Romans 8:28</strong>',
      '"Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!" <strong>- 2 Corinthians 5:17</strong>',
      '"But he said to me, \'My grace is sufficient for you, for my power is made perfect in weakness.\' Therefore I will boast all the more gladly about my weaknesses, so that Christ\'s power may rest on me." <strong>- 2 Corinthians 12:9</strong>',
      '"Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus." <strong>- Philippians 4:6-7</strong>'
    ];
    const random = verses[Math.floor(Math.random() * verses.length)];
    const verseDiv = document.getElementById("random-verse");
    if (verseDiv) verseDiv.innerHTML = random;
  }
});
