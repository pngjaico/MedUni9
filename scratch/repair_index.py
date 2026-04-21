import sys

file_path = r'c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\index.html'
replacement_content = r'''    const QuizScreen = ({ flashcards, materias, selectedMateria, onSelectMateria, userSemester, initialAulaId, title = "Questões" }) => {
      const QUIZ_PROGRESS_KEY = 'meduni9_quiz_progress';
      const [activeQuiz, setActiveQuiz] = useState(null);
      const [activeTemas, setActiveTemas] = useState([]);
      const [showTemaSelector, setShowTemaSelector] = useState(false);
      const [pendingQuiz, setPendingQuiz] = useState(null);
      const [pendingTemas, setPendingTemas] = useState([]);
      const [pendingTemaSearch, setPendingTemaSearch] = useState('');
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [selectedOption, setSelectedOption] = useState(null);
      const [crossedOut, setCrossedOut] = useState(new Set());
      const [answered, setAnswered] = useState(false);
      const [quizStats, setQuizStats] = useState({ correct: 0, total: 0 });
      const [startTime, setStartTime] = useState(Date.now());
      const [quizComplete, setQuizComplete] = useState(false);
      const [answerResults, setAnswerResults] = useState({});
      const [reviewQuestionIds, setReviewQuestionIds] = useState([]);
      const [semesterFilter, setSemesterFilter] = useState(userSemester || null);
      const [searchQuery, setSearchQuery] = useState('');
      const [showCadernoErros, setShowCadernoErros] = useState(false);
      const [reportQuizOpen, setReportQuizOpen] = useState(false);
      const [reportQuizReason, setReportQuizReason] = useState('');
      const [reportQuizTarget, setReportQuizTarget] = useState(null);
      const [reportQuizSending, setReportQuizSending] = useState(false);
      const [reportQuizError, setReportQuizError] = useState('');
      const quizRouteAulaAppliedRef = useRef(false);
      const highlighterRef = useRef(null);

      useEffect(() => {
        if (!highlighterRef.current) return;
        return setupHighlighter(highlighterRef.current);
      }, [currentQuestion, activeQuiz, showCadernoErros, reviewQuestionIds, quizComplete]);

      const getErros = () => JSON.parse(localStorage.getItem('meduni9_caderno_erros') || '[]');
      const addErro = (questionId) => {
        const erros = getErros();
        if (!erros.includes(questionId)) {
          erros.push(questionId);
          localStorage.setItem('meduni9_caderno_erros', JSON.stringify(erros));
        }
      };
      const removeErro = (questionId) => {
        const erros = getErros().filter(id => id !== questionId);
        localStorage.setItem('meduni9_caderno_erros', JSON.stringify(erros));
      };
      const getQuizProgress = () => JSON.parse(localStorage.getItem(QUIZ_PROGRESS_KEY) || '{}');
      const markQuizAsDone = (questionId, correct) => {
        if (questionId == null) return;
        const map = getQuizProgress();
        const key = String(questionId);
        const prev = map[key] || { attempts: 0, correctAttempts: 0, done: false, level: 0 };
        const newLevel = correct ? Math.min((prev.level || 0) + 1, 5) : 0;
        const intervals = [0, 1, 3, 7, 14, 30];
        const nextInterval = intervals[newLevel] || 0;
        map[key] = {
          ...prev,
          done: true,
          attempts: (prev.attempts || 0) + 1,
          correctAttempts: (prev.correctAttempts || 0) + (correct ? 1 : 0),
          lastAnsweredAt: Date.now(),
          lastResult: correct ? 'correct' : 'wrong',
          level: newLevel,
          nextReview: nextInterval > 0 ? Date.now() + nextInterval * 24 * 60 * 60 * 1000 : null
        };
        localStorage.setItem(QUIZ_PROGRESS_KEY, JSON.stringify(map));
      };

      const quizQuestions = useMemo(() => {
        return flashcards.filter(f => f.tipo === 'quiz' && f.opcoes && f.opcoes.length > 0);
      }, [flashcards]);

      const quizzes = useMemo(() => {
        const grouped = {};
        materias.filter(m => m.ativo !== false).forEach(m => {
          const questions = m.id === 'todas' ? quizQuestions : quizQuestions.filter(f => f.materia === m.id);
          grouped[m.id] = { name: m.nome, sigla: m.sigla, cards: questions, icon: m.icon, semestre: m.modulo, ativo: m.ativo, cor: m.cor };
        });
        return grouped;
      }, [quizQuestions, materias]);

      const materiasById = useMemo(() => {
        const map = {};
        (materias || []).forEach((m) => { map[m.id] = m; });
        return map;
      }, [materias]);

      const getTemaDisplayName = (materiaId, temaId) => {
        if (!temaId) return '';
        const materia = materiasById[materiaId];
        const aulas = Array.isArray(materia?.aulas) ? materia.aulas : [];
        const aula = aulas.find(a => a.id === temaId);
        return aula?.tema || temaId;
      };

      const filteredQuizzes = useMemo(() => {
        let result = { ...quizzes };
        if (semesterFilter) {
          const f = {};
          Object.entries(result).forEach(([id, q]) => {
            if (q.semestre === semesterFilter && q.ativo !== false) f[id] = q;
          });
          result = f;
        }
        if (searchQuery) {
          const f = {};
          Object.entries(result).forEach(([id, q]) => {
            if (fuzzyMatch(searchQuery, q.name) || fuzzyMatch(searchQuery, q.sigla || '')) f[id] = q;
          });
          result = f;
        }
        return result;
      }, [quizzes, semesterFilter, searchQuery]);

      useEffect(() => {
        if (!activeQuiz || quizComplete) return;
        const handleKey = (e) => {
          if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
          if (!answered) {
            if (e.key === 'Enter' && selectedOption !== null) { e.preventDefault(); handleAnswer(); }
          } else {
            if (e.key === 'Enter') { e.preventDefault(); handleNextQuestion(); }
          }
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
      }, [activeQuiz, quizComplete, answered, selectedOption]);

      const handleQuizStart = (materiaId, temasArray) => {
        setActiveQuiz(materiaId);
        setActiveTemas(temasArray || []);
        setReviewQuestionIds([]);
        setCurrentQuestion(0);
        setSelectedOption(null);
        setCrossedOut(new Set());
        setAnswered(false);
        setQuizStats({ correct: 0, total: 0 });
        setAnswerResults({});
        setStartTime(Date.now());
        setShowTemaSelector(false);
        setQuizComplete(false);
      };

      const handleMateriaClick = (materiaId) => {
        onSelectMateria(materiaId);
        const cards = quizzes[materiaId]?.cards || [];
        if (cards.length === 0) { handleQuizStart(materiaId, []); return; }
        const materiaObj = materias.find(m => m.id === materiaId);
        const aulasCount = (materiaObj?.aulas || []).length;
        const temas = [...new Set(cards.map(c => c.tema).filter(Boolean))];
        if (aulasCount > 1 || temas.length > 1) {
          setPendingQuiz(materiaId);
          setPendingTemas([]);
          setPendingTemaSearch('');
          setShowTemaSelector(true);
        } else {
          handleQuizStart(materiaId, []);
        }
      };

      const togglePendingTema = (temaId) => {
        setPendingTemas(prev => prev.includes(temaId) ? prev.filter(t => t !== temaId) : [...prev, temaId]);
      };

      const toggleCross = (idx) => {
        const next = new Set(crossedOut);
        if (next.has(idx)) next.delete(idx); else next.add(idx);
        if (selectedOption === idx) setSelectedOption(null);
        setCrossedOut(next);
      };

      const getActiveCards = () => {
        if (reviewQuestionIds.length > 0) {
          const byId = new Map(quizQuestions.map(q => [q.id, q]));
          return reviewQuestionIds.map(id => byId.get(id)).filter(Boolean);
        }
        if (showCadernoErros) {
          const erros = getErros();
          return quizQuestions.filter(q => erros.includes(q.id));
        }
        if (!activeQuiz) return [];
        const quiz = quizzes[activeQuiz];
        if (!quiz) return [];
        return activeTemas.length > 0 ? quiz.cards.filter(c => activeTemas.includes(c.tema)) : quiz.cards;
      };

      const parseQuizExplanation = (card) => {
        const options = card?.opcoes || [];
        const letters = options.map((_, idx) => String.fromCharCode(65 + idx));
        const parseOptionMapFromText = (text) => {
          if (!text || typeof text !== 'string') return {};
          const map = {};
          for (const letter of letters) {
            const regex = new RegExp(`${letter}\\)\\s*(?:CORRETA\\.?|INCORRETA\\.?)?\\s*([\\s\\S]*?)(?=\\n[A-D]\\)|$)`, 'i');
            const match = text.match(regex);
            if (match && match[1]) map[letter] = match[1].trim();
          }
          return map;
        };
        const explicacoesOpcoes = Array.isArray(card?.explicacoes_opcoes)
          ? card.explicacoes_opcoes.reduce((acc, txt, idx) => {
              const letter = String.fromCharCode(65 + idx);
              if (txt) acc[letter] = String(txt).trim();
              return acc;
            }, {})
          : (card?.explicacoes_opcoes || {});
        const parsedFromText = parseOptionMapFromText(card?.explicacao || '');
        const optionMap = { ...parsedFromText, ...explicacoesOpcoes };
        const resumoMatch = typeof card?.explicacao === 'string' ? card.explicacao.match(/Resumo:\s*([\s\S]*?)(?=\n[A-D]\)|$)/i) : null;
        const generalRaw = card?.explicacao_geral || (resumoMatch ? resumoMatch[1].trim() : (card?.explicacao || ''));
        const general = String(generalRaw || '').trim();
        const optionExplanations = letters.map((letter, idx) => {
          const explanation = optionMap[letter];
          if (explanation) return explanation;
          if (idx === card?.correta) return 'Alternativa correta para este enunciado.';
          return 'Alternativa incorreta neste contexto.';
        });
        return { general, optionExplanations };
      };

      const handleAnswer = () => {
        const activeCards = getActiveCards();
        const card = activeCards[currentQuestion];
        const correct = selectedOption === card.correta;
        markQuizAsDone(card?.id, correct);
        if (card?.id != null) setAnswerResults(prev => ({ ...prev, [card.id]: correct }));
        if (correct) { setQuizStats(prev => ({ ...prev, correct: prev.correct + 1 })); removeErro(card.id); }
        else { addErro(card.id); }
        setAnswered(true);
      };

      const handleNextQuestion = () => {
        const activeCards = getActiveCards();
        if (currentQuestion < activeCards.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
          setSelectedOption(null);
          setCrossedOut(new Set());
          setAnswered(false);
        } else {
          setQuizComplete(true);
          const quizHistory = JSON.parse(localStorage.getItem('meduni9_quiz_history') || '[]');
          quizHistory.push({ date: new Date().toISOString(), materia: showCadernoErros ? 'caderno_erros' : activeQuiz, score: quizStats.correct, total: activeCards.length, time: formatTime(Date.now() - startTime) });
          localStorage.setItem('meduni9_quiz_history', JSON.stringify(quizHistory));
        }
      };

      const handleRestartQuiz = () => {
        if (showCadernoErros) {
          setCurrentQuestion(0); setSelectedOption(null); setCrossedOut(new Set()); setAnswered(false); setQuizStats({ correct: 0, total: 0 }); setAnswerResults({}); setReviewQuestionIds([]); setStartTime(Date.now()); setQuizComplete(false);
        } else {
          handleQuizStart(activeQuiz, activeTemas);
        }
      };

      const handleReportQuestion = () => {
        const activeCards = getActiveCards();
        const card = activeCards[currentQuestion];
        if (!card) return;
        setReportQuizTarget(card); setReportQuizReason(''); setReportQuizError(''); setReportQuizOpen(true);
      };

      const submitQuizReport = async () => {
        if (!reportQuizTarget) return;
        setReportQuizSending(true); setReportQuizError('');
        try {
          await submitContentFeedback({ origem: 'questoes', mensagem: reportQuizReason?.trim() || 'Erro reportado em questão', itemId: reportQuizTarget.id, materia: reportQuizTarget.materia || activeQuiz, tema: reportQuizTarget.tema, contexto: { pergunta: reportQuizTarget.pergunta, opcoes: reportQuizTarget.opcoes || [], correta: reportQuizTarget.correta, explicacao: reportQuizTarget.explicacao || '' } });
          setReportQuizOpen(false); setReportQuizTarget(null);
        } catch (e) { setReportQuizError('Erro ao enviar report.'); } finally { setReportQuizSending(false); }
      };

      const startCadernoErros = () => {
        onSelectMateria(null); setShowCadernoErros(true); setActiveQuiz('__erros__'); setReviewQuestionIds([]);
        setCurrentQuestion(0); setSelectedOption(null); setCrossedOut(new Set()); setAnswered(false); setQuizStats({ correct: 0, total: 0 }); setAnswerResults({}); setStartTime(Date.now()); setQuizComplete(false);
      };

      const startWrongOnlyReview = () => {
        const activeCards = getActiveCards();
        const wrongIds = activeCards.filter(card => card?.id != null && answerResults[card.id] === false).map(card => card.id);
        if (!wrongIds.length) return;
        setQuizComplete(false); setShowCadernoErros(false); setReviewQuestionIds(wrongIds); setCurrentQuestion(0); setSelectedOption(null); setCrossedOut(new Set()); setAnswered(false); setQuizStats({ correct: 0, total: 0 }); setAnswerResults({}); setStartTime(Date.now());
      };

      const getNextRecommendedTemaId = () => {
        if (!activeQuiz || showCadernoErros) return null;
        const quiz = quizzes[activeQuiz]; const materia = materiasById[activeQuiz]; if (!quiz) return null;
        const temasComQuestoes = [...new Set((quiz.cards || []).map(c => c.tema).filter(Boolean))];
        const aulas = Array.isArray(materia?.aulas) ? materia.aulas : [];
        const ordenadas = aulas.length ? aulas.map(a => a.id).filter(id => temasComQuestoes.includes(id)) : temasComQuestoes;
        const temaAtual = activeTemas.length === 1 ? activeTemas[0] : (getActiveCards()[0]?.tema || null);
        if (!temaAtual) return ordenadas[0];
        const idx = ordenadas.indexOf(temaAtual);
        if (idx >= 0 && idx < ordenadas.length - 1) return ordenadas[idx + 1];
        return ordenadas.find(id => id !== temaAtual) || null;
      };

      const startNextRecommendedTema = () => { const nextTema = getNextRecommendedTemaId(); if (nextTema) handleQuizStart(activeQuiz, [nextTema]); };

      if (quizComplete) {
        const activeCards = getActiveCards();
        const percentage = Math.round((quizStats.correct / Math.max(activeCards.length, 1)) * 100);
        const wrongIds = activeCards.filter(card => card?.id != null && answerResults[card.id] === false).map(card => card.id);
        const nextTemaId = getNextRecommendedTemaId();
        return (
          <div className="screen-content">
            <div className="quiz-result-screen">
              <div style={{ width: '64px', height: '64px', margin: '0 auto 18px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.16)', background: percentage >= 70 ? 'rgba(16,185,129,0.12)' : 'rgba(255,255,255,0.06)', color: percentage >= 70 ? '#34D399' : 'var(--text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {percentage >= 70 ? <IconTrophy /> : <IconTarget />}
              </div>
              <div className="quiz-score">{percentage}%</div>
              <p style={{ color: 'var(--text-secondary)' }}>{quizStats.correct} de {activeCards.length} questões</p>
              <div className="quiz-time">{formatTime(Date.now() - startTime)}</div>
              <div className="quiz-result-actions" style={{ display: 'grid', gap: '10px', marginTop: '20px' }}>
                {wrongIds.length > 0 && <button className="btn btn-secondary" onClick={startWrongOnlyReview}>Revisar Erradas</button>}
                {nextTemaId && <button className="btn btn-secondary" onClick={startNextRecommendedTema}>Próxima Aula</button>}
                <button className="btn btn-primary" onClick={handleRestartQuiz}>Tentar Novamente</button>
                <button className="btn btn-secondary" onClick={() => { setActiveQuiz(null); setActiveTemas([]); setQuizComplete(false); setShowCadernoErros(false); setReviewQuestionIds([]); onSelectMateria(null); }}>Voltar ao Início</button>
              </div>
            </div>
          </div>
        );
      }

      if (showTemaSelector && pendingQuiz) {
        const quiz = quizzes[pendingQuiz];
        const materiaObj = materias.find(m => m.id === pendingQuiz);
        const aulas = materiaObj?.aulas || [];
        const filteredAulas = aulas.filter(a => !pendingTemaSearch || normalizeText(a.tema).includes(normalizeText(pendingTemaSearch)));
        return (
          <div className="screen-content">
            <button className="back-btn" onClick={() => { setShowTemaSelector(false); setPendingQuiz(null); onSelectMateria(null); }}>← Voltar</button>
            <h2 className="section-title">{quiz.sigla || quiz.name}</h2>
            <div className="subject-search-wrap" style={{ marginBottom: '16px' }}><span className="subject-search-icon"><IconSearch /></span><input type="search" className="subject-search" placeholder="Buscar aula..." value={pendingTemaSearch} onChange={e => setPendingTemaSearch(e.target.value)} /></div>
            <div className="subject-select-list">
              <div className="subject-select-card" onClick={() => handleQuizStart(pendingQuiz, [])} style={{ borderColor: 'var(--primary)', background: 'rgba(0,200,150,0.06)', marginBottom: '12px' }}>
                <div className="subject-select-icon" style={{ background: 'rgba(0,200,150,0.15)', color: 'var(--primary)' }}><IconClipboardList /></div>
                <div className="subject-select-info"><div className="subject-select-name">Tudo desta matéria</div><div className="subject-select-meta">{quiz.cards.length} questões</div></div>
              </div>
              {filteredAulas.map(aula => {
                const count = quiz.cards.filter(c => c.tema === aula.id).length;
                if (count === 0) return null;
                const isSelected = pendingTemas.includes(aula.id);
                return (
                  <div key={aula.id} className={`subject-select-card ${isSelected ? 'tema-selected' : ''}`} onClick={() => togglePendingTema(aula.id)}>
                    <div className={`tema-checkbox ${isSelected ? 'tema-checkbox-checked' : ''}`}>{isSelected ? '✓' : ''}</div>
                    <div className="subject-select-info"><div className="subject-select-name">{aula.tema}</div><div className="subject-select-meta">{count} questões</div></div>
                  </div>
                );
              })}
            </div>
            {pendingTemas.length > 0 && (
              <div className="tema-start-bar"><button className="btn btn-primary" onClick={() => handleQuizStart(pendingQuiz, pendingTemas)}>Iniciar {pendingTemas.length} assunto(s)</button></div>
            )}
          </div>
        );
      }

      if (activeQuiz) {
        const activeCards = getActiveCards();
        const card = activeCards[currentQuestion];
        if (!card) return null;
        const progress = ((currentQuestion + 1) / activeCards.length) * 100;
        const explanationBundle = parseQuizExplanation(card);
        return (
          <div className="screen-content">
            <button className="back-btn" onClick={() => { setActiveQuiz(null); onSelectMateria(null); }}>← Sair</button>
            <div className="quiz-screen">
              <div className="quiz-progress-section">
                <div className="quiz-progress-bar"><div className="quiz-progress-fill" style={{ width: `${progress}%` }}></div></div>
                <div className="quiz-counter">{currentQuestion + 1} de {activeCards.length}</div>
              </div>
              <div className="quiz-question-card" ref={highlighterRef}><div className="quiz-question" dangerouslySetInnerHTML={{ __html: renderMarkdown(card.pergunta) }} /></div>
              <div className="quiz-options">
                {card.opcoes.map((option, idx) => (
                  <div key={idx} className={`quiz-option ${selectedOption === idx && !answered ? 'selected' : ''} ${answered && idx === card.correta ? 'correct' : ''} ${answered && selectedOption === idx && idx !== card.correta ? 'incorrect-selected' : ''} ${crossedOut.has(idx) ? 'crossed-out' : ''}`} onClick={() => !answered && !crossedOut.has(idx) && setSelectedOption(idx)}>
                    <span className="quiz-option-number">{String.fromCharCode(65 + idx)}</span>
                    <span style={{ flex: 1 }} dangerouslySetInnerHTML={{ __html: renderMarkdown(option) }} />
                    {!answered && !crossedOut.has(idx) && <button className="cross-btn" onClick={(e) => { e.stopPropagation(); toggleCross(idx); }}>✕</button>}
                  </div>
                ))}
              </div>
              {answered && (
                <div className="quiz-feedback" style={{ marginTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '16px', color: selectedOption === card.correta ? '#10B981' : '#EF4444', fontWeight: 800 }}>{selectedOption === card.correta ? <><IconCheck /> Correto!</> : <><IconX /> Incorreto</>}</div>
                  {explanationBundle.general && <p style={{ fontSize: '14px', opacity: 0.9, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: renderMarkdown(explanationBundle.general) }} />}
                </div>
              )}
              <div className="quiz-action-bar" style={{ display: 'flex', gap: '12px', marginTop: '30px' }}>
                <button className="btn quiz-report-btn" onClick={handleReportQuestion} style={{ width: '50px', background: 'rgba(255,255,255,0.05)' }}><IconMessageSquare /></button>
                {!answered ? (
                  <button className="btn btn-primary" style={{ flex: 1, height: '52px' }} onClick={handleAnswer} disabled={selectedOption === null}>Confirmar [Enter]</button>
                ) : (
                  <button className="btn btn-primary" style={{ flex: 1, height: '52px' }} onClick={handleNextQuestion}>{currentQuestion === activeCards.length - 1 ? 'Resultado' : 'Próxima'} [Enter]</button>
                )}
              </div>
            </div>
            <ContentReportModal open={reportQuizOpen} title="Reportar questão" reason={reportQuizReason} setReason={setReportQuizReason} sending={reportQuizSending} errorMsg={reportQuizError} onClose={() => setReportQuizOpen(false)} onSubmit={submitQuizReport} />
          </div>
        );
      }

      const semesters = [...new Set(Object.values(quizzes).filter(q => q.ativo !== false).map(q => q.semestre))].sort((a,b) => a-b);
      const quizProgressMap = getQuizProgress();
      const errosCount = getErros().length;
      return (
        <div className="screen-content">
          <h2 className="section-title">{title}</h2>
          <div className="semester-tabs">{semesters.map(s => <button key={s} className={`semester-tab ${semesterFilter === s ? 'active' : ''}`} onClick={() => setSemesterFilter(s)}>Módulo {s}</button>)}</div>
          <div className="subject-search-wrap"><span className="subject-search-icon"><IconSearch /></span><input type="search" className="subject-search" placeholder="Buscar matéria..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} /></div>
          {errosCount > 0 && <div className="subject-select-card" onClick={startCadernoErros} style={{ borderColor: 'var(--error)', background: 'rgba(239,68,68,0.05)', marginBottom: '16px' }}><div className="subject-select-icon" style={{ color: 'var(--error)' }}><IconFileText /></div><div className="subject-select-info"><div className="subject-select-name" style={{ color: 'var(--error)' }}>Caderno de Erros</div><div className="subject-select-meta">{errosCount} para rever</div></div></div>}
          <div className="subject-select-list">
            {Object.entries(filteredQuizzes).map(([id, quiz]) => {
              const done = quiz.cards.filter(c => quizProgressMap[String(c.id)]?.done).length;
              return (
                <div key={id} className="subject-select-card" onClick={() => handleMateriaClick(id)}>
                  <SubjectIcon materiaId={id} icon={quiz.icon} cor={quiz.cor} />
                  <div className="subject-select-info"><div className="subject-select-name">{quiz.sigla || quiz.name}</div><div className="subject-select-meta">{quiz.cards.length} q. — {done} feitas</div></div>
                  <IconChevronRight />
                </div>
              );
            })}
          </div>
        </div>
      );
    };

    const TO_ESTUDOS_MATERIA_ID = 'tecnica_operatoria';

    function normalizeInstrumentAnswerText(s) {
      const base = String(s || '').trim().replace(/\s+/g, ' ').toLowerCase();
      try { return base.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); } catch (e) { return base; }
    }

    function instrumentAnswerMatchesRelaxed(nu, ne) {
      if (!nu || !ne || nu.length < 2) return false;
      if (nu === ne) return true;
      if (ne.endsWith(' ' + nu)) return true;
      const tokens = ne.split(/\s+/).filter(Boolean);
      const last = tokens[tokens.length - 1] || '';
      if (nu === last) return true;
      const stop = new Set(['de', 'da', 'do', 'das', 'dos', 'e', 'o', 'a', 'em', 'no', 'na', 'tipo', 'com', 'para']);
      for (const t of tokens) { if (t === nu && t.length >= 3 && !stop.has(t)) return true; }
      return false;
    }

    function buildInstrumentAnswerDiff(userRaw, expectedNome) {
      const nu = normalizeInstrumentAnswerText(userRaw);
      const ne = normalizeInstrumentAnswerText(expectedNome);
      if (!nu.length) return { isEmpty: true, isCorrect: false, userSpans: [], normalizedExpected: ne };
      const relaxedOk = instrumentAnswerMatchesRelaxed(nu, ne);
      const userSpans = [];
      if (relaxedOk) { for (let i = 0; i < nu.length; i += 1) userSpans.push({ ch: nu[i], ok: true }); }
      else { for (let i = 0; i < nu.length; i += 1) { const ch = nu[i]; userSpans.push({ ch, ok: i < ne.length && ne[i] === ch }); } }
      return { isEmpty: false, isCorrect: relaxedOk, userSpans, normalizedUser: nu, normalizedExpected: ne };
    }

    function shuffleInstrumentIds(ids) {
      const a = ids.slice();
      for (let i = a.length - 1; i > 0; i -= 1) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
      return a;
    }

    function encodeLocalAssetPath(p) {
      const s = String(p || '').trim();
      if (!s) return s;
      return s.split('/').map((seg) => (seg === '' ? '' : encodeURIComponent(seg))).join('/');
    }

    function renderInlineBoldMarkdown(s, strongStyle) {
      const str = String(s || '');
      const style = strongStyle || { fontWeight: 700, color: 'inherit' };
      const parts = str.split(/(\*\*.+?\*\*)/g);
      return parts.map((part, i) => {
        const m = part.match(/^\*\*([\s\S]+?)\*\*$/);
        if (m) return <strong key={i} style={style}>{m[1]}</strong>;
        return part ? <span key={i}>{part}</span> : null;
      });
    }

    function toEstudosWhitenEmbeddedBlackBg(img, opts) {
      const threshold = opts && typeof opts.threshold === 'number' ? opts.threshold : 40;
      const w = img.naturalWidth; const h = img.naturalHeight;
      if (!w || !h || w * h > 18_000_000) return false;
      const canvas = document.createElement('canvas'); canvas.width = w; canvas.height = h;
      const ctx = canvas.getContext('2d'); if (!ctx) return false;
      ctx.drawImage(img, 0, 0); let data; try { data = ctx.getImageData(0, 0, w, h); } catch (e) { return false; }
      const px = data.data; let changed = false;
      for (let i = 0; i < px.length; i += 4) { if (px[i] <= threshold && px[i + 1] <= threshold && px[i + 2] <= threshold) { px[i] = 255; px[i + 1] = 255; px[i + 2] = 255; changed = true; } }
      if (!changed) return false; ctx.putImageData(data, 0, 0);
      try { img.src = canvas.toDataURL('image/png'); return true; } catch (e) { return false; }
    }

    function ToEstudosInstrumentFigure({ src, alt, onError }) {
      const doneRef = useRef(false);
      const onLoad = useCallback((e) => { const el = e.currentTarget; if (doneRef.current) return; const s = String(src || ''); if (!/\.(png|jpe?g)(\?|#|$)/i.test(s)) return; try { if (toEstudosWhitenEmbeddedBlackBg(el, { threshold: 40 })) doneRef.current = true; } catch (err) {} }, [src]);
      return <img src={src} alt={alt} loading="lazy" decoding="async" onLoad={onLoad} onError={onError} />;
    }

    const MATERIALS_CYCLES = [
      { id: 'basico', label: 'Ciclo Básico', sub: 'Módulos 1 a 4', min: 1, max: 4, anchor: 'materials-cycle-basico' },
      { id: 'clinico', label: 'Ciclo Clínico', sub: 'Módulos 5 a 8', min: 5, max: 8, anchor: 'materials-cycle-clinico' },
      { id: 'internato', label: 'Internato', sub: 'Módulos 9 a 12', min: 9, max: 12, anchor: 'materials-cycle-internato' },
    ];

    const MATERIAL_ADMIN_EMAILS = ['pngjaico@gmail.com'];
    function isMaterialAdminSession() {
      const cu = typeof window !== 'undefined' ? window.__fbAuth?.currentUser : null;
      if (!cu) return false;
      const em = normalizeAuthEmail(cu.email || '');
      return MATERIAL_ADMIN_EMAILS.includes(em) && cu.emailVerified === true;
    }
'''

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Replace range 7870 to 9013 (1-indexed)
# 0-indexed: [7869:9013]
start_idx = 7869
end_idx = 9013

new_lines = lines[:start_idx] + [replacement_content + '\n'] + lines[end_idx:]

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("Replacement successful")
