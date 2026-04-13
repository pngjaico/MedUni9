/**
 * Painel local: GET/PUT /api/data/materiais_figuras (server.cjs na raiz do projeto).
 */
(function () {
  const API = '/api/data/materiais_figuras';

  const el = (id) => document.getElementById(id);

  let data = { version: 1, updatedAt: '', entries: [] };
  let editingIndex = -1;

  function setStatus(msg, type) {
    const s = el('saveStatus');
    s.textContent = msg;
    s.className = 'fm-status ' + (type || '');
  }

  function badgeClass(status) {
    const m = {
      pendente: 'fm-badge-pendente',
      encontrada: 'fm-badge-encontrada',
      inserida: 'fm-badge-inserida',
      descartada: '',
    };
    return m[String(status || '').toLowerCase()] || 'fm-badge-pendente';
  }

  function renderTable() {
    const q = (el('filterQ').value || '').trim().toLowerCase();
    const st = el('filterStatus').value;

    const rows = data.entries.filter((e) => {
      if (st && String(e.status || '') !== st) return false;
      if (!q) return true;
      const blob = [
        e.id,
        e.aula,
        e.disciplina,
        e.momento,
        e.descricaoVisual,
        e.tipoSugerido,
        e.buscaCommonsEn,
        e.buscaCommonsPt,
        e.notas,
        e.caminhoMaterial,
      ]
        .join(' ')
        .toLowerCase();
      return blob.includes(q);
    });

    const tb = el('tbody');
    tb.innerHTML = rows
      .map((e, idx) => {
        const i = data.entries.indexOf(e);
        const preview = e.urlImagem
          ? `<img class="fm-preview" src="${escapeAttr(e.urlImagem)}" alt="" loading="lazy" onerror="this.style.display='none'">`
          : '—';
        return `
        <tr data-index="${i}">
          <td><code>${escapeHtml(e.id)}</code></td>
          <td><code>${escapeHtml(e.aula)}</code></td>
          <td><span class="fm-badge ${badgeClass(e.status)}">${escapeHtml(e.status || 'pendente')}</span></td>
          <td class="fm-expand">${escapeHtml(e.momento || '')}</td>
          <td>
            <input type="url" class="fm-cell-input" data-field="urlImagem" data-index="${i}" placeholder="https://upload.wikimedia.org/..." value="${escapeAttr(e.urlImagem || '')}">
            ${preview}
          </td>
          <td><input type="url" class="fm-cell-input fm-cell-small" data-field="urlPaginaCommons" data-index="${i}" placeholder="Página do ficheiro no Commons" value="${escapeAttr(e.urlPaginaCommons || '')}"></td>
          <td><input type="text" class="fm-cell-input fm-cell-small" data-field="licenca" data-index="${i}" placeholder="CC BY-SA 4.0" value="${escapeAttr(e.licenca || '')}"></td>
          <td><input type="text" class="fm-cell-input" data-field="credito" data-index="${i}" placeholder="Autor / fonte" value="${escapeAttr(e.credito || '')}"></td>
          <td><input type="text" class="fm-cell-input" data-field="legenda" data-index="${i}" value="${escapeAttr(e.legenda || '')}"></td>
          <td>
            <select class="fm-cell-input fm-cell-small" data-field="status" data-index="${i}">
              ${['pendente', 'encontrada', 'inserida', 'descartada']
                .map((s) => `<option value="${s}" ${e.status === s ? 'selected' : ''}>${s}</option>`)
                .join('')}
            </select>
          </td>
          <td>
            <div class="fm-row-actions">
              <button type="button" class="fm-btn fm-btn-primary fm-open-briefing" data-index="${i}" style="padding:8px 10px;">Briefing equipe</button>
              <button type="button" class="fm-btn fm-btn-ghost fm-copy-search" data-en="${escapeAttr(e.buscaCommonsEn || '')}" data-pt="${escapeAttr(e.buscaCommonsPt || '')}">Copiar busca EN</button>
              <button type="button" class="fm-btn fm-btn-ghost fm-copy-search-pt" data-pt="${escapeAttr(e.buscaCommonsPt || '')}">Copiar busca PT</button>
            </div>
          </td>
        </tr>`;
      })
      .join('');

    el('countVisible').textContent = String(rows.length);
    el('countTotal').textContent = String(data.entries.length);

    tb.querySelectorAll('[data-field]').forEach((input) => {
      input.addEventListener('change', onFieldChange);
      input.addEventListener('input', onFieldChange);
    });

    tb.querySelectorAll('.fm-copy-search').forEach((btn) => {
      btn.addEventListener('click', () => {
        const t = btn.getAttribute('data-en') || '';
        navigator.clipboard.writeText(t).then(() => setStatus('Busca EN copiada.', 'ok'));
      });
    });
    tb.querySelectorAll('.fm-copy-search-pt').forEach((btn) => {
      btn.addEventListener('click', () => {
        const t = btn.getAttribute('data-pt') || '';
        navigator.clipboard.writeText(t).then(() => setStatus('Busca PT copiada.', 'ok'));
      });
    });

    tb.querySelectorAll('.fm-open-briefing').forEach((btn) => {
      btn.addEventListener('click', () => {
        const i = parseInt(btn.getAttribute('data-index'), 10);
        openBriefingDialog(i);
      });
    });
  }

  function openBriefingDialog(i) {
    editingIndex = i;
    const e = data.entries[i];
    if (!e) return;
    const d = el('briefingDialog');
    el('briefingId').textContent = e.id || '';
    el('bf_modulo').value = e.modulo != null ? String(e.modulo) : '';
    el('bf_disciplina').value = e.disciplina || '';
    el('bf_aula').value = e.aula || '';
    el('bf_caminho').value = e.caminhoMaterial || '';
    el('bf_momento').value = e.momento || '';
    el('bf_desc').value = e.descricaoVisual || '';
    el('bf_tipo').value = e.tipoSugerido || '';
    el('bf_en').value = e.buscaCommonsEn || '';
    el('bf_pt').value = e.buscaCommonsPt || '';
    el('bf_notas').value = e.notas || '';
    if (d.showModal) d.showModal();
    else alert('Seu navegador não suporta <dialog>. Use outro browser ou edite o JSON à mão.');
  }

  function closeBriefingDialog() {
    const d = el('briefingDialog');
    if (d.close) d.close();
    editingIndex = -1;
  }

  function applyBriefingDialog() {
    if (editingIndex < 0 || !data.entries[editingIndex]) return;
    const e = data.entries[editingIndex];
    e.modulo = parseInt(el('bf_modulo').value, 10) || e.modulo || 1;
    e.disciplina = el('bf_disciplina').value.trim();
    e.aula = el('bf_aula').value.trim();
    e.caminhoMaterial = el('bf_caminho').value.trim();
    e.momento = el('bf_momento').value.trim();
    e.descricaoVisual = el('bf_desc').value.trim();
    e.tipoSugerido = el('bf_tipo').value.trim();
    e.buscaCommonsEn = el('bf_en').value.trim();
    e.buscaCommonsPt = el('bf_pt').value.trim();
    e.notas = el('bf_notas').value.trim();
    closeBriefingDialog();
    renderTable();
    setStatus('Briefing atualizado na memória — clique em Salvar alterações para gravar o JSON.', 'ok');
  }

  function onFieldChange(ev) {
    const input = ev.target;
    const i = parseInt(input.getAttribute('data-index'), 10);
    const field = input.getAttribute('data-field');
    if (!data.entries[i] || !field) return;
    data.entries[i][field] = input.value;
  }

  function escapeHtml(s) {
    return String(s || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function escapeAttr(s) {
    return escapeHtml(s).replace(/'/g, '&#39;');
  }

  async function load() {
    setStatus('Carregando…', '');
    try {
      const res = await fetch(API);
      if (!res.ok) throw new Error(res.status + ' ' + res.statusText);
      data = await res.json();
      if (!Array.isArray(data.entries)) data.entries = [];
      renderTable();
      setStatus('Carregado. Edite URLs e clique em Salvar.', 'ok');
    } catch (e) {
      console.error(e);
      setStatus(
        'Falha ao carregar. Rode o servidor local: node server.cjs   http://localhost:3001/figuras-materiais/',
        'err'
      );
    }
  }

  async function save() {
    data.updatedAt = new Date().toISOString();
    setStatus('Salvando…', '');
    try {
      const body = JSON.stringify(data, null, 2);
      const res = await fetch(API, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || res.statusText);
      }
      setStatus('Salvo em data/materiais_figuras.json — faça commit e deploy para o app público.', 'ok');
      renderTable();
    } catch (e) {
      console.error(e);
      setStatus('Erro ao salvar: ' + (e.message || e), 'err');
    }
  }

  function addEmptyRow() {
    const id = prompt('ID da figura (ex.: BMF1-A6-F01):', '');
    if (!id || !id.trim()) return;
    data.entries.push({
      id: id.trim(),
      modulo: 1,
      disciplina: '',
      aula: '',
      caminhoMaterial: '',
      momento: '',
      descricaoVisual: '',
      tipoSugerido: '',
      buscaCommonsEn: '',
      buscaCommonsPt: '',
      status: 'pendente',
      urlImagem: '',
      urlThumbnail: '',
      urlPaginaCommons: '',
      licenca: '',
      credito: '',
      legenda: '',
      notas: '',
    });
    renderTable();
  }

  el('filterQ').addEventListener('input', renderTable);
  el('filterStatus').addEventListener('change', renderTable);
  el('btnReload').addEventListener('click', load);
  el('btnSave').addEventListener('click', save);
  el('btnAdd').addEventListener('click', addEmptyRow);

  if (el('briefingSave')) el('briefingSave').addEventListener('click', applyBriefingDialog);
  if (el('briefingClose')) el('briefingClose').addEventListener('click', closeBriefingDialog);
  if (el('briefingDialog')) {
    el('briefingDialog').addEventListener('close', () => {
      editingIndex = -1;
    });
  }

  load();
})();
