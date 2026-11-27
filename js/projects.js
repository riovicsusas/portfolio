/**
 * Synapse Botanicals - Curated Flagship Projects Showcase
 * 21st.dev Card Grid, Filter System, & In-Depth Technical Defense Viewer
 */

let currentFilter = 'all';

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
  renderFlagshipGrid();

  // Check URL parameters (e.g. projects.html?id=d1-order-lifecycle)
  const params = new URLSearchParams(window.location.search);
  const idParam = params.get('id');
  if (idParam) {
    setTimeout(() => openProjectDetail(idParam), 60);
  }
});

// Filter Handlers
function filterProjects(cat) {
  currentFilter = cat;
  document.querySelectorAll('.filter-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === cat);
  });
  renderFlagshipGrid();
}

// Render the 21st.dev Grid
function renderFlagshipGrid() {
  const container = document.getElementById('projectsGrid');
  if (!container) return;

  const filtered = currentFilter === 'all'
    ? FLAGSHIP_PROJECTS
    : FLAGSHIP_PROJECTS.filter(project => project.filterCat === currentFilter);

  container.innerHTML = filtered.map((p, idx) => {
    const delay = (idx % 7) + 1;
    if (p.isFeatured) {
      return `
        <div class="project-card-21 featured-capstone reveal" data-delay="${delay}" onclick="openProjectDetail('${p.id}')">
          <div class="project-card-image">
            <img src="${p.image}" alt="${p.title}" loading="lazy" />
            <div class="card-badges-overlay">
              <span class="card-domain-badge"><i class="ph ph-crown"></i> ${p.domain}</span>
              ${p.loomUrl ? `<span class="card-loom-badge"><i class="ph ph-video-camera"></i> ${p.loomDuration}</span>` : `<span class="card-loom-badge"><i class="ph ph-file-text"></i> ${p.loomDuration}</span>`}
            </div>
          </div>
          <div class="project-card-body">
            <span class="featured-label-pill"><i class="ph ph-sparkle"></i> Capstone Technical Study</span>
            <h3 class="project-card-title" style="font-size:20px;">${p.title}</h3>
            <p style="font-size:12px; font-weight:600; color:var(--muted); margin-bottom:10px;">${p.subtitle}</p>
            <p class="project-card-desc">${p.desc}</p>
            <div class="project-card-tags">
              ${p.tags.map(t => `<span class="project-card-tag">${t}</span>`).join('')}
            </div>
            <span class="project-card-cta">
              ${p.loomUrl ? 'Watch Walkthrough &amp; Read Study' : 'Inspect Technical Study &amp; Architecture'} <i class="ph ph-arrow-right"></i>
            </span>
          </div>
        </div>
      `;
    }

    return `
      <div class="project-card-21 reveal" data-delay="${delay}" onclick="openProjectDetail('${p.id}')">
        <div class="project-card-image">
          <img src="${p.image}" alt="${p.title}" loading="lazy" />
          <div class="card-badges-overlay">
            <span class="card-domain-badge">${p.domain}</span>
            ${p.loomUrl ? `<span class="card-loom-badge"><i class="ph ph-video-camera"></i> ${p.loomDuration}</span>` : `<span class="card-loom-badge"><i class="ph ph-file-text"></i> ${p.loomDuration}</span>`}
          </div>
        </div>
        <div class="project-card-body">
          <h3 class="project-card-title">${p.title}</h3>
          <p style="font-size:11.5px; font-weight:600; color:var(--muted); margin-bottom:8px;">${p.subtitle}</p>
          <p class="project-card-desc">${p.desc}</p>
          <div class="project-card-tags">
            ${p.tags.map(t => `<span class="project-card-tag">${t}</span>`).join('')}
          </div>
          <span class="project-card-cta">
            ${p.loomUrl ? 'Watch Walkthrough &amp; Read Study' : 'Inspect Technical Study &amp; Architecture'} <i class="ph ph-arrow-right"></i>
          </span>
        </div>
      </div>
    `;
  }).join('');

  // Boot scroll-reveal observer after DOM is updated
  revealObserver('.reveal');
}

// Helper to safely retrieve projects
function getProjects() {
  return typeof DEFAULT_PROJECTS !== 'undefined' ? DEFAULT_PROJECTS : [];
}

// Open Deliverable / Case Study Detail
function openProjectDetail(id) {
  const allProjects = getProjects();
  const allFlagships = typeof FLAGSHIP_PROJECTS !== 'undefined' ? FLAGSHIP_PROJECTS : [];
  const p = allProjects.find(x => x.id === id) || allFlagships.find(x => x.id === id);
  if (!p) return;

  // Hide grid and company accordion
  document.getElementById('projectsMainView').style.display = 'none';

  // Show detail container
  const detail = document.getElementById('deliverableDetailContainer');
  detail.style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });

  detail.innerHTML = `
    <div style="margin-bottom:24px;">
      <button class="back-btn" onclick="closeProjectDetail()">
        <i class="ph ph-arrow-left"></i> Back to All Projects
      </button>
      <div class="breadcrumb" style="margin-top:12px;">
        <span onclick="closeProjectDetail()">Projects</span>
        <i class="ph ph-caret-right" style="font-size:10px;"></i>
        <span style="color:var(--linen);">${p.domain || p.folder || 'Technical Study'}</span>
        <i class="ph ph-caret-right" style="font-size:10px;"></i>
        <span style="color:var(--isabelline);">${p.title}</span>
      </div>
    </div>

    <article class="deliverable-detail" style="background:var(--white); border-radius:var(--card-radius); padding:32px; border:1.5px solid var(--warm1);">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:12px; margin-bottom:12px;">
        <span class="deliverable-card-category" style="font-size:12px; padding:4px 12px; background:rgba(86,103,70,0.25); border:1px solid var(--hunter); border-radius:20px; color:var(--isabelline); font-weight:700;">
          ${p.category || 'Technical Operations SOP'}
        </span>
      </div>

      <h2 style="font-size:26px; font-weight:900; color:#FFFFFF; margin-bottom:6px; line-height:1.25;">${p.title}</h2>
      ${p.subtitle ? `<p style="font-size:14px; font-weight:600; color:var(--muted); margin-bottom:20px;">${p.subtitle}</p>` : ''}

      ${p.loomUrl ? `
      <!-- LOOM WALKTHROUGH CARD -->
      <div class="loom-placeholder-card" style="margin-bottom:28px;">
        <div class="loom-card-top">
          <div class="loom-meta-info">
            <span class="loom-live-pill"><i class="ph ph-circle-fill" style="color:var(--hunter);font-size:8px;"></i> Loom Walkthrough</span>
            <span class="loom-duration-pill"><i class="ph ph-clock"></i> ${p.loomDuration || 'Technical defense'}</span>
          </div>
        </div>
        <div class="loom-display-screen">
          <a href="${p.loomUrl}" target="_blank" rel="noopener" class="loom-display-title">Watch Recorded Walkthrough</a>
        </div>
      </div>
      ` : ''}

      <!-- EXECUTIVE SUMMARY -->
      <div style="margin-bottom:28px;">
        <p class="modal-section-label" style="font-size:11px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:var(--muted); margin-bottom:10px;">Executive Problem &amp; Solution Summary</p>
        <p style="font-size:14px; color:var(--text); line-height:1.8;">${p.fullOverview || p.overview || p.desc || p.short}</p>
      </div>

      <!-- ARCHITECTURE SCOPE & VERIFICATION PILLARS -->
      <div style="margin-bottom:28px;">
        <p class="modal-section-label" style="font-size:11px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:var(--muted); margin-bottom:12px;"><i class="ph ph-shield-check"></i> Architecture Scope &amp; Controls</p>
        <div class="pdf-placeholder-pillars">
          ${(p.references?.architectureScope?.length ? p.references.architectureScope : (p.tags || []).slice(0, 4).map(tag => ({ name: tag, role: 'Verified operational boundary and workflow control.' }))).map((scope, idx) => `
          <div class="pillar-box">
            <span class="pillar-num">${String(idx + 1).padStart(2, '0')}</span>
            <h5>${scope.name}</h5>
            <p>${scope.role}</p>
          </div>`).join('')}
        </div>
      </div>

      ${p.references?.dependencies?.length ? `
      <!-- RELATED ARCHITECTURE -->
      <div style="margin-bottom:28px;">
        <p class="modal-section-label" style="font-size:11px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:var(--muted); margin-bottom:10px;"><i class="ph ph-git-branch"></i> Related Specifications</p>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:10px;">
          ${p.references.dependencies.map(dep => `
          <div style="padding:12px 14px; border:1px solid rgba(201,183,159,0.22); border-radius:10px; background:rgba(255,255,255,0.025);">
            <div style="font-size:10.5px; font-weight:700; color:var(--isabelline); margin-bottom:4px;">${dep.code}</div>
            <div style="font-size:12.5px; font-weight:700; color:var(--linen); margin-bottom:4px;">${dep.title}</div>
            <p style="font-size:11.5px; color:var(--muted); margin:0; line-height:1.5;">${dep.role}</p>
          </div>`).join('')}
        </div>
      </div>` : ''}

            <!-- PRIMARY: TECHNICAL STUDY VIEWER + SECONDARY: PDF -->
      <div style="display:flex; flex-direction:column; gap:12px; margin-top:4px;">

        ${p.dossierUrl ? `
          <!-- Primary CTA: Full interactive technical study -->
          <div style="background:var(--bg); border:1.5px solid var(--hunter); border-radius:14px; padding:20px 24px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:16px;">
            <div style="display:flex; align-items:center; gap:14px;">
              <div style="width:46px; height:46px; border-radius:11px; background:linear-gradient(135deg,#566746,#3e5232); display:flex; align-items:center; justify-content:center; color:#FAEEE5; flex-shrink:0;">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
                </svg>
              </div>
              <div>
                <h4 style="font-size:14px; font-weight:700; color:#FFFFFF; margin-bottom:3px;">${p.dossierUrl && (p.dossierUrl.includes('TechnicalStudy') || p.dossierUrl.includes('MasterDossier')) ? 'Read the Full Technical Study' : 'Read Interactive Specification (.md)'}</h4>
                <p style="font-size:12px; color:var(--muted); margin:0; line-height:1.5;">Interactive Markdown Viewer &middot; Print-Ready &middot; One-Click Save as PDF</p>
              </div>
            </div>
            <a
              href="../dossier-viewer/?file=${p.dossierUrl}"
              target="_blank"
              rel="noopener"
              style="display:inline-flex; align-items:center; gap:8px; padding:10px 22px; border-radius:10px; font-size:13px; font-weight:700; background:linear-gradient(135deg,#566746,#3e5232); color:#FAEEE5; text-decoration:none; white-space:nowrap; box-shadow:0 2px 12px rgba(86,103,70,0.4); transition:all 0.2s;"
              onmouseover="this.style.transform='translateY(-1px)'; this.style.boxShadow='0 4px 18px rgba(86,103,70,0.55)'"
              onmouseout="this.style.transform=''; this.style.boxShadow='0 2px 12px rgba(86,103,70,0.4)'"
            >
              Read Technical Study
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          </div>
        ` : ''}

        ${p.pdfUrl ? `
          <!-- Secondary: legacy PDF small quiet link -->
          <div style="display:flex; align-items:center; gap:10px; padding:12px 16px; background:rgba(255,255,255,0.03); border:1px solid rgba(201,183,159,0.15); border-radius:10px;">
            <i class="ph ph-file-pdf" style="font-size:16px; color:var(--muted); flex-shrink:0;"></i>
            <span style="font-size:12px; color:var(--muted); flex:1; line-height:1.4;">Legacy PDF also available</span>
            <a href="../${p.pdfUrl}" target="_blank" style="font-size:12px; font-weight:600; color:var(--isabelline); text-decoration:none; white-space:nowrap; display:flex; align-items:center; gap:5px;">
              <i class="ph ph-file-arrow-down"></i> Download PDF
            </a>
          </div>
        ` : ''}

      </div>
    </article>
  `;
}

function closeProjectDetail() {
  document.getElementById('deliverableDetailContainer').style.display = 'none';
  document.getElementById('projectsMainView').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
