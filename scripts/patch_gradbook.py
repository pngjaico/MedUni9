import sys

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# ── 1. GradBookScreen component (React.createElement style) ──────────────────
gradbook_component = """    const GradBookScreen = ({ user, onNavigate }) => {
      const mvpModules = [
        { icon: '\\u{1F4CB}', color: '#F59E0B', title: 'Prontu\\u00e1rio de Plant\\u00e3o', text: 'Lista de pacientes com status, diagn\\u00f3stico e pend\\u00eancias. Templates SOAP para evolu\\u00e7\\u00e3o, admiss\\u00e3o e alta. Exporta PDF em segundos.' },
        { icon: '\\u{1F48A}', color: '#00C896', title: 'Bul\\u00e1rio Completo', text: '2.000+ medicamentos com dose, via, ajuste renal, intera\\u00e7\\u00f5es e categoria na gesta\\u00e7\\u00e3o. Top-500 dispon\\u00edveis offline.' },
        { icon: '\\u{1F9EE}', color: '#3B82F6', title: 'Calculadoras M\\u00e9dicas', text: 'Wells, CURB-65, SOFA, qSOFA, APACHE II, Cockcroft-Gault e mais. Resultado com interpreta\\u00e7\\u00e3o cl\\u00ednica colorida por n\\u00edvel de risco.' },
        { icon: '\\u{1F4DD}', color: '#8B5CF6', title: 'Prescri\\u00e7\\u00f5es Prontas', text: '100+ modelos edit\\u00e1veis por categoria. Campos vari\\u00e1veis como [PESO_KG] e [DOSE]. Copia formatado ou salva direto no paciente.' },
      ];
      const integrations = [
        { icon: '\\u{1F511}', color: '#00C896', title: 'Login \\u00fanico', text: 'Mesma conta do MedGradPlus. Sem criar perfil novo, sem lembrar outra senha.' },
        { icon: '\\u{1F4B8}', color: '#F59E0B', title: 'Desconto autom\\u00e1tico', text: 'Assinantes MedGradPlus t\\u00eam 20% de desconto no GradBook+, detectado automaticamente.' },
        { icon: '\\u{1F517}', color: '#3B82F6', title: 'Cross-link de conte\\u00fado', text: 'Estudando pneumonia aqui? Link direto para o protocolo de pneumonia no GradBook+.' },
        { icon: '\\u{1F4C8}', color: '#8B5CF6', title: 'Jornada sem interrup\\u00e7\\u00e3o', text: 'Do ciclo b\\u00e1sico ao internato na mesma plataforma. Um app complementa o outro.' },
      ];
      const phases = [
        { phase: 'Fase 1 \\u2014 MVP Internato', color: '#F59E0B', status: 'Em constru\\u00e7\\u00e3o', items: ['Prontu\\u00e1rio + templates SOAP + export PDF', 'Bul\\u00e1rio + verificador de intera\\u00e7\\u00f5es', 'Calculadoras + scores cl\\u00ednicos', 'Prescri\\u00e7\\u00f5es prontas edit\\u00e1veis'] },
        { phase: 'Fase 2 \\u2014 Refer\\u00eancia Completa', color: '#3B82F6', status: 'Roadmap', items: ['Diagn\\u00f3stico diferencial por sintoma (DDx)', 'Procedimentos pr\\u00e1ticos (IOT, sutura, pun\\u00e7\\u00e3o)', 'Guia de antibi\\u00f3ticos + escalonamento', 'Protocolos de emerg\\u00eancia (PCR, sepse, AVC)'] },
        { phase: 'Fase 3 \\u2014 Plant\\u00e3o e Formados', color: '#8B5CF6', status: 'Futuro', items: ['Gerenciador de plant\\u00e3o + finan\\u00e7as', 'Receit\\u00e1rio digital', 'Planos corporativos (hospitais, cl\\u00ednicas)', 'GradBook Assist \\u2014 chat cl\\u00ednico com IA'] },
      ];
      return (
        React.createElement('div', { className: 'screen-content', style: { paddingBottom: '40px' } },
          React.createElement('div', { style: { display: 'flex', justifyContent: 'center', width: '100%', boxSizing: 'border-box' } },
            React.createElement('div', { style: { width: '100%', maxWidth: '1080px', boxSizing: 'border-box' } },
              React.createElement('div', { style: { position: 'relative', overflow: 'hidden', borderRadius: '28px', padding: '36px 24px 32px', background: 'linear-gradient(135deg, rgba(245,158,11,0.20) 0%, rgba(239,68,68,0.14) 40%, rgba(30,36,51,0.95) 100%)', border: '1px solid rgba(245,158,11,0.22)', boxShadow: '0 24px 80px rgba(0,0,0,0.32)', marginBottom: '24px', animation: 'gbFadeUp 0.5s ease both' } },
                React.createElement('div', { style: { position: 'absolute', inset: 0, background: 'radial-gradient(circle at top right, rgba(245,158,11,0.18), transparent 45%), radial-gradient(circle at bottom left, rgba(239,68,68,0.10), transparent 40%)', pointerEvents: 'none' } }),
                React.createElement('div', { style: { position: 'absolute', top: 24, right: 24, width: 80, height: 80, borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,158,11,0.22), transparent 70%)', animation: 'gbFloat 5s ease-in-out infinite', pointerEvents: 'none' } }),
                React.createElement('div', { style: { position: 'relative', zIndex: 1 } },
                  React.createElement('div', { className: 'gb-hero-badge' }, '\\ud83d\\ude80 Lan\\u00e7amento em breve'),
                  React.createElement('div', { style: { display: 'grid', gap: '28px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', alignItems: 'center' } },
                    React.createElement('div', null,
                      React.createElement('h1', { style: { fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(38px, 6vw, 64px)', lineHeight: 1.0, fontWeight: 800, marginBottom: '14px', letterSpacing: '-0.03em' } },
                        React.createElement('span', { className: 'gb-shimmer-text' }, 'GradBook+')
                      ),
                      React.createElement('p', { style: { fontSize: '16px', lineHeight: 1.75, color: 'rgba(232,235,240,0.90)', marginBottom: '20px', maxWidth: '520px' } },
                        'O whitebook m\\u00e9dico feito para o internato \\u2014 bul\\u00e1rio, calculadoras, prescri\\u00e7\\u00f5es prontas e prontu\\u00e1rio de plant\\u00e3o num app s\\u00f3, offline, no celular.'
                      ),
                      React.createElement('div', { style: { display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' } },
                        ['500+ medicamentos', '20+ calculadoras', '100+ prescri\\u00e7\\u00f5es', 'Offline'].map(tag =>
                          React.createElement('span', { key: tag, style: { padding: '7px 13px', borderRadius: '999px', background: 'rgba(255,255,255,0.10)', color: '#E8EBF0', fontSize: '12px', fontWeight: 700 } }, tag)
                        )
                      ),
                      React.createElement('div', { style: { display: 'flex', flexWrap: 'wrap', gap: '12px' } },
                        React.createElement('a', { href: 'https://github.com/pngjaico/GradBookApp', target: '_blank', rel: 'noopener noreferrer', className: 'gb-cta-btn' }, '\\u2b50 Acompanhar no GitHub'),
                        React.createElement('button', { onClick: () => onNavigate('materials'), style: { border: '1px solid rgba(255,255,255,0.18)', background: 'rgba(255,255,255,0.07)', color: '#fff', borderRadius: '14px', padding: '14px 20px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', backdropFilter: 'blur(8px)' } }, 'Voltar aos estudos')
                      )
                    ),
                    React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' } },
                      [{ value: 'PWA', label: 'Instal\\u00e1vel no celular' }, { value: 'Offline', label: 'Funciona sem internet' }, { value: '7 dias', label: 'Trial gratuito completo' }, { value: '20%', label: 'Desconto MedGradPlus' }].map((stat, i) =>
                        React.createElement('div', { key: stat.label, style: { padding: '16px 14px', borderRadius: '14px', background: 'rgba(11,15,25,0.30)', border: '1px solid rgba(245,158,11,0.15)' } },
                          React.createElement('div', { style: { fontFamily: 'Outfit, sans-serif', fontSize: '26px', fontWeight: 800, color: '#FCD34D', marginBottom: '5px' } }, stat.value),
                          React.createElement('div', { style: { fontSize: '12px', color: 'rgba(232,235,240,0.75)', lineHeight: 1.4 } }, stat.label)
                        )
                      )
                    )
                  )
                )
              ),
              React.createElement('div', { className: 'about-card', style: { marginBottom: '22px', animation: 'gbFadeUp 0.65s ease 0.1s both' } },
                React.createElement('div', { className: 'about-section-title' }, React.createElement('span', { style: { color: '#FCD34D' } }, 'O que vai ter no lan\\u00e7amento')),
                React.createElement('div', { style: { display: 'grid', gap: '14px', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' } },
                  mvpModules.map((mod, i) =>
                    React.createElement('div', { key: mod.title, className: 'gb-module-card', style: { animationDelay: i * 0.08 + 's' } },
                      React.createElement('div', { style: { fontSize: '26px', marginBottom: '12px' } }, mod.icon),
                      React.createElement('div', { style: { display: 'inline-block', padding: '3px 10px', borderRadius: '999px', background: mod.color + '18', color: mod.color, fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' } }, 'MVP'),
                      React.createElement('div', { style: { fontFamily: 'Outfit, sans-serif', fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '7px' } }, mod.title),
                      React.createElement('div', { style: { fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.75 } }, mod.text)
                    )
                  )
                )
              ),
              React.createElement('div', { style: { marginBottom: '22px', padding: '22px 20px', borderRadius: '18px', background: 'linear-gradient(135deg, rgba(245,158,11,0.10), rgba(239,68,68,0.08))', border: '1px solid rgba(245,158,11,0.22)', animation: 'gbFadeUp 0.72s ease 0.15s both' } },
                React.createElement('div', { style: { display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', alignItems: 'center' } },
                  React.createElement('div', null,
                    React.createElement('div', { style: { fontFamily: 'Outfit, sans-serif', fontSize: '20px', fontWeight: 800, color: '#FCD34D', marginBottom: '8px' } }, 'Gr\\u00e1tis para come\\u00e7ar. Pago quando precisar de mais.'),
                    React.createElement('div', { style: { fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.75 } }, '5 consultas por m\\u00f3dulo por dia no plano free. Trial de 7 dias com tudo desbloqueado, sem cart\\u00e3o. Assine quando travar no meio do plant\\u00e3o.')
                  ),
                  React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: '10px' } },
                    [{ plan: 'Free', price: 'R$ 0', detail: '5 usos/dia por m\\u00f3dulo' }, { plan: 'Mensal', price: 'R$ 29,90', detail: 'Ilimitado + offline' }, { plan: 'Anual', price: 'R$ 199,90', detail: '~R$16,60/m\\u00eas (\\u221244%)' }].map(p =>
                      React.createElement('div', { key: p.plan, style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' } },
                        React.createElement('span', { style: { fontWeight: 700, fontSize: '13px', color: 'var(--text-primary)' } }, p.plan),
                        React.createElement('div', { style: { textAlign: 'right' } },
                          React.createElement('div', { style: { fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '15px', color: '#FCD34D' } }, p.price),
                          React.createElement('div', { style: { fontSize: '11px', color: 'var(--text-secondary)' } }, p.detail)
                        )
                      )
                    )
                  )
                )
              ),
              React.createElement('div', { className: 'about-card', style: { marginBottom: '22px', animation: 'gbFadeUp 0.78s ease 0.2s both' } },
                React.createElement('div', { className: 'about-section-title' }, React.createElement('span', { style: { color: '#6EE7B7' } }, 'Integrado ao MedGradPlus')),
                React.createElement('p', { style: { fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '18px' } }, 'GradBook+ foi desenhado para ser o companheiro cl\\u00ednico do MedGradPlus. Voc\\u00ea estuda a base aqui, e no internato usa o GradBook+ com a mesma conta e fluxo.'),
                React.createElement('div', { style: { display: 'grid', gap: '12px', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' } },
                  integrations.map((item, i) =>
                    React.createElement('div', { key: item.title, className: 'gb-integration-item', style: { animation: 'gbFadeUp 0.5s ease both', animationDelay: i * 0.08 + 's' } },
                      React.createElement('div', { style: { width: 36, height: 36, borderRadius: '10px', background: item.color + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 } }, item.icon),
                      React.createElement('div', null,
                        React.createElement('div', { style: { fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' } }, item.title),
                        React.createElement('div', { style: { fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.65 } }, item.text)
                      )
                    )
                  )
                )
              ),
              React.createElement('div', { className: 'about-card', style: { marginBottom: '22px', animation: 'gbFadeUp 0.85s ease 0.25s both' } },
                React.createElement('div', { className: 'about-section-title' }, React.createElement('span', { style: { color: '#C4B5FD' } }, 'Roadmap de desenvolvimento')),
                React.createElement('div', { style: { display: 'grid', gap: '14px', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' } },
                  phases.map((ph, i) =>
                    React.createElement('div', { key: ph.phase, className: 'gb-phase-card', style: { animationDelay: i * 0.1 + 's', borderColor: ph.color + '28' } },
                      React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' } },
                        React.createElement('div', { style: { fontFamily: 'Outfit, sans-serif', fontSize: '14px', fontWeight: 800, color: ph.color } }, ph.phase),
                        React.createElement('span', { style: { padding: '4px 9px', borderRadius: '999px', background: ph.color + '18', color: ph.color, fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' } }, ph.status)
                      ),
                      React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: '8px' } },
                        ph.items.map(item =>
                          React.createElement('div', { key: item, style: { display: 'flex', gap: '8px', alignItems: 'flex-start' } },
                            React.createElement('span', { style: { width: 6, height: 6, borderRadius: '50%', background: ph.color, flexShrink: 0, marginTop: 6 } }),
                            React.createElement('span', { style: { fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 } }, item)
                          )
                        )
                      )
                    )
                  )
                )
              ),
              React.createElement('div', { style: { padding: '28px 24px', borderRadius: '20px', textAlign: 'center', background: 'linear-gradient(135deg, rgba(245,158,11,0.14), rgba(139,92,246,0.12))', border: '1px solid rgba(245,158,11,0.20)', animation: 'gbFadeUp 0.9s ease 0.3s both' } },
                React.createElement('div', { style: { fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '10px', letterSpacing: '-0.02em' } }, 'Constru\\u00eddo para quem vai ao internato.'),
                React.createElement('p', { style: { fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '22px', maxWidth: '480px', margin: '0 auto 22px' } }, 'Acompanhe o desenvolvimento no GitHub \\u2014 o reposit\\u00f3rio est\\u00e1 aberto. Assim que lan\\u00e7ar, sua conta MedGradPlus j\\u00e1 vai estar conectada.'),
                React.createElement('div', { style: { display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '12px' } },
                  React.createElement('a', { href: 'https://github.com/pngjaico/GradBookApp', target: '_blank', rel: 'noopener noreferrer', className: 'gb-cta-btn' }, '\\u2b50 Ver reposit\\u00f3rio'),
                  React.createElement('button', { onClick: () => onNavigate('about'), style: { border: '1px solid var(--border-subtle)', background: 'var(--surface-1)', color: 'var(--text-primary)', borderRadius: '14px', padding: '14px 20px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' } }, 'Sobre o MedGradPlus')
                )
              )
            )
          )
        )
      );
    };

"""

target = '    const SobreScreen = ({ user, onNavigate }) => {'
if target in content:
    content = content.replace(target, gradbook_component + target, 1)
    print('GradBookScreen inserted OK')
else:
    print('ERROR: SobreScreen target not found')
    sys.exit(1)

# ── 2. VALID_TABS ──────────────────────────────────────────────────────────────
old_tabs = "const VALID_TABS = ['home', 'cards', 'quiz', 'materials', 'feedback', 'about', 'profile', 'anatomy_hist', 'ambassador'];"
new_tabs = "const VALID_TABS = ['home', 'cards', 'quiz', 'materials', 'feedback', 'about', 'profile', 'anatomy_hist', 'ambassador', 'gradbook'];"
if old_tabs in content:
    content = content.replace(old_tabs, new_tabs, 1)
    print('VALID_TABS updated OK')
else:
    print('WARNING: VALID_TABS not found')

# ── 3. Sidebar teaser clickable ───────────────────────────────────────────────
old_teaser = 'className="sidebar-gradbook-teaser"\n                role="note"\n                title="GradBook \u2014 internato e plant\u00e3o (em breve)"'
new_teaser = "className={`sidebar-gradbook-teaser sidebar-gradbook-teaser--clickable${currentTab === 'gradbook' ? ' active' : ''}`}\n                role=\"button\"\n                title=\"GradBook+ \u2014 internato e plant\u00e3o\"\n                onClick={() => navigateTo('gradbook')}"
if old_teaser in content:
    content = content.replace(old_teaser, new_teaser, 1)
    print('Sidebar teaser updated OK')
else:
    # try to find and report context
    idx = content.find('sidebar-gradbook-teaser"')
    if idx >= 0:
        print('WARNING: sidebar teaser found but pattern mismatch. Context:')
        print(repr(content[idx:idx+300]))
    else:
        print('WARNING: sidebar-gradbook-teaser not found at all')

# ── 4. Mobile title ────────────────────────────────────────────────────────────
old_title = "currentTab === 'about' ? 'Sobre' : 'MedGrad+'"
new_title = "currentTab === 'about' ? 'Sobre' : currentTab === 'gradbook' ? 'GradBook+' : 'MedGrad+'"
if old_title in content:
    content = content.replace(old_title, new_title, 1)
    print('Mobile title updated OK')
else:
    print('WARNING: mobile title not found')

# ── 5. Gradbook tab rendering ──────────────────────────────────────────────────
old_render = "{currentTab === 'about' && (\n              <SobreScreen user={user} onNavigate={(tab, opts) => navigateTo(tab, opts || {})} />\n            )}"
new_render = "{currentTab === 'about' && (\n              <SobreScreen user={user} onNavigate={(tab, opts) => navigateTo(tab, opts || {})} />\n            )}\n\n            {currentTab === 'gradbook' && (\n              <GradBookScreen user={user} onNavigate={(tab, opts) => navigateTo(tab, opts || {})} />\n            )}"
if old_render in content:
    content = content.replace(old_render, new_render, 1)
    print('GradBook tab render added OK')
else:
    print('WARNING: about render block not found')
    idx = content.find("currentTab === 'about' && (")
    print(f'  About render index: {idx}')
    if idx >= 0:
        print(repr(content[idx:idx+200]))

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
print('File written successfully')
