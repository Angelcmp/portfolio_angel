// View counter for blog posts
document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('viewCount');
  if (!el) return;
  const key = window.location.pathname.replace(/\//g, '-').replace(/^-/, '');
  fetch('https://api.countapi.xyz/hit/angelcmp/' + key)
    .then(r => r.json())
    .then(d => { if (d.value) el.textContent = d.value.toLocaleString(); })
    .catch(() => { el.textContent = '0'; });
});

// Page transition: fade out on internal link click
document.addEventListener('click', (e) => {
  const link = e.target.closest('a');
  if (!link) return;
  const href = link.getAttribute('href');
  if (!href || href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('javascript:')) return;
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

  e.preventDefault();
  document.body.classList.add('is-leaving');
  setTimeout(() => {
    window.location.href = href;
  }, 250);
});

// Auto-generate table of contents from article h2 headings
document.addEventListener('DOMContentLoaded', () => {
  const article = document.querySelector('article');
  const toc = document.getElementById('toc');
  if (!article || !toc) return;

  const headings = article.querySelectorAll('h2');
  if (headings.length === 0) {
    const sidebar = toc.closest('.toc-sidebar');
    if (sidebar) sidebar.style.display = 'none';
    return;
  }

  const title = document.createElement('div');
  title.className = 'toc-title';
  title.textContent = 'Contenido';
  toc.appendChild(title);

  const ul = document.createElement('ul');
  headings.forEach((h, i) => {
    const id = 'toc-' + i;
    h.id = id;
    h.style.scrollMarginTop = '2rem';
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#' + id;
    a.textContent = h.textContent;
    li.appendChild(a);
    ul.appendChild(li);
  });

  toc.appendChild(ul);

  const tocLinks = ul.querySelectorAll('a');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          tocLinks.forEach((l) => l.classList.remove('active'));
          const active = ul.querySelector(`a[href="#${entry.target.id}"]`);
          if (active) active.classList.add('active');
        }
      });
    },
    { rootMargin: '-20% 0px -60% 0px' }
  );

  headings.forEach((h) => observer.observe(h));

  // Re-apply translations (TOC title needs it)
  const saved = localStorage.getItem('lang') || 'en';
  if (typeof applyLang === 'function') applyLang(saved);
});
