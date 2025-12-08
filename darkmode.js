// Simple dark mode toggle saved to localStorage
(function(){
  const toggleButtons = document.querySelectorAll('#themeToggle');
  function applyTheme(theme){
    if(theme === 'dark') document.documentElement.setAttribute('data-theme','dark');
    else document.documentElement.removeAttribute('data-theme');
  }
  const saved = localStorage.getItem('rc_theme') || 'light';
  applyTheme(saved);
  toggleButtons.forEach(btn => btn.addEventListener('click', ()=>{
    const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('rc_theme', next);
  }));
})();
