const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const args = process.argv.slice(2);
if (!args.length) {
  console.log('Uso: node build.js <archivo.md>');
  console.log('Ejemplo: node build.js _drafts/mi-articulo.md');
  process.exit(1);
}

const mdPath = path.resolve(args[0]);
const mdContent = fs.readFileSync(mdPath, 'utf-8');

// Parse frontmatter
const fmMatch = mdContent.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
if (!fmMatch) {
  console.error('Error: Se requiere frontmatter --- title: ... date: ... ---');
  process.exit(1);
}

const fm = {};
fmMatch[1].split('\n').forEach(line => {
  const m = line.match(/^(\w+):\s*(.+)$/);
  if (m) fm[m[1]] = m[2].trim();
});

if (!fm.title || !fm.date) {
  console.error('Error: frontmatter necesita title y date');
  process.exit(1);
}

const body = fmMatch[2];
const dateObj = new Date(fm.date);
const year = dateObj.getFullYear();
const monthName = dateObj.toLocaleString('en', { month: 'short' });

const slug = path.basename(mdPath, '.md')
  .toLowerCase()
  .replace(/[^\w]+/g, '-')
  .replace(/^-|-$/g, '');

const htmlPath = path.join(__dirname, 'posts', slug + '.html');
const htmlBody = marked.parse(body, { breaks: true });

const postHtml = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${fm.title} — Angel Campo</title>
  <link rel="stylesheet" href="../style.css">
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICA8cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHJ4PSI2IiBmaWxsPSIjZjVmNWY3Ii8+CiAgPHRleHQgeD0iMTYiIHk9IjIyLjUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSInSUJNIFBsZXggU2VyaWYnLCBHZW9yZ2lhLCBzZXJpZiIgZm9udC1zaXplPSIyMCIgZm9udC13ZWlnaHQ9IjcwMCIgZmlsbD0iIzFkMWQxZiI+QTwvdGV4dD4KPC9zdmc+">
  <script>
    const i18n = {
      es: { 'section-portfolio': 'Portfolio', 'section-work': 'Proyectos', 'section-blog': 'Blog', 'intro': 'Soy desarrollador y aprendiz de escritor. Estoy enfocado en crear herramientas inteligentes que resuelvan problemas reales. Actualmente desarrollando Solaria y BookmarkCollab, proyectos donde la IA y la web se encuentran.', 'projects-title': 'Proyectos', 'toc-title': 'Contenido', 'back-to-blog': '← Volver al blog' },
      en: { 'section-portfolio': 'Portfolio', 'section-work': 'Work', 'section-blog': 'Blog', 'intro': "I'm a developer and aspiring writer. I'm focused on building AI tools that solve real problems. Currently developing Solaria and BookmarkCollab, projects where AI and the web come together.", 'projects-title': 'Projects', 'toc-title': 'Contents', 'back-to-blog': '← Back to blog' }
    };
    function applyLang(l){ document.documentElement.lang=l; localStorage.setItem('lang',l); var t=document.getElementById('langToggle'); if(t) t.textContent=l==='es'?'EN':'ES'; document.querySelectorAll('[data-i18n]').forEach(function(e){ var k=e.getAttribute('data-i18n'); if(i18n[l]&&i18n[l][k]) e.textContent=i18n[l][k]; }); var tc=document.querySelector('.toc-title'); if(tc&&i18n[l]['toc-title']) tc.textContent=i18n[l]['toc-title']; }
    function toggleLang(){ var c=localStorage.getItem('lang')||'en'; applyLang(c==='es'?'en':'es'); }
    (function(){ var l=localStorage.getItem('lang')||'en'; document.documentElement.lang=l; document.addEventListener('DOMContentLoaded',function(){ applyLang(l); }); })();
  </script>
</head>
<body class="has-sidebar">
  <header>
    <a href="../index.html" class="brand">Angel Campo</a>
    <nav>
      <a href="../about.html">About</a>
      <a href="../blog.html">Blog</a>
      <span class="lang-toggle" onclick="toggleLang()" id="langToggle">ES</span>
    </nav>
  </header>

  <div class="article-layout">
    <article>
      <h1>${fm.title}</h1>
      <p class="article-meta">${monthName} ${year} — Angel Campo · <span id="viewCount">—</span> views</p>

      ${htmlBody}

      <p><a href="../blog.html" data-i18n="back-to-blog">← Volver al blog</a></p>
    </article>

    <aside class="toc-sidebar">
      <nav id="toc"></nav>
    </aside>
  </div>

  <footer>
    <span>&copy; 2026 Angel Campo</span>
    <span>
      <a href="https://github.com/Angelcmp">GitHub</a>
      <a href="https://www.linkedin.com/in/angelcmp/" style="margin-left: 0.75rem;">LinkedIn</a>
    </span>
  </footer>

  <script src="../main.js"></script>
</body>
</html>
`;

fs.writeFileSync(htmlPath, postHtml, 'utf-8');
console.log(`✓ Post creado: posts/${slug}.html`);

// --- Helper: insert entry into listing page ---
function addEntryToListing(filePath, slug, year, title) {
  const html = fs.readFileSync(filePath, 'utf-8');
  const entry = `    <li>
      <a href="posts/${slug}.html">
        <span class="meta">${year}</span>
        <span class="title">${title.replace(/'/g, "\\'")}</span>
      </a>
    </li>`;

  // Insert after the first <ul class="entries"> line
  const updated = html.replace(
    /(<ul class="entries">\n)/,
    '$1' + entry + '\n'
  );
  fs.writeFileSync(filePath, updated, 'utf-8');
}

// Update blog.html
addEntryToListing(path.join(__dirname, 'blog.html'), slug, year, fm.title);
console.log(`✓ blog.html actualizado`);

// Update index.html
addEntryToListing(path.join(__dirname, 'index.html'), slug, year, fm.title);
console.log(`✓ index.html actualizado`);

console.log(`\nHecho. Revisa el post en posts/${slug}.html`);
