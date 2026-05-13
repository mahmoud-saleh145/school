import { useState, useCallback } from 'react'
import Button from '../../components/Button/Button'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import { QUIZ_DATA, getScoreMessage } from '../../utils/helpers'
import './Quizzes.css'

const SUBJECTS = [
  { key: 'math', label: 'Math' },
  { key: 'science', label: 'Science' },
  { key: 'english', label: 'English' },
  { key: 'history', label: 'History' },
]

function QuizEngine({ subject }) {
  const questions = QUIZ_DATA[subject]

  const [idx, setIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState(null)   // index of chosen answer
  const [answered, setAnswered] = useState(false)
  const [finished, setFinished] = useState(false)

  const reset = useCallback(() => {
    setIdx(0)
    setScore(0)
    setSelected(null)
    setAnswered(false)
    setFinished(false)
  }, [])

  const handleAnswer = (optIdx) => {
    if (answered) return
    setAnswered(true)
    setSelected(optIdx)

    const isCorrect = optIdx === questions[idx].ans
    if (isCorrect) setScore(s => s + 1)

    setTimeout(() => {
      const next = idx + 1
      if (next < questions.length) {
        setIdx(next)
        setSelected(null)
        setAnswered(false)
      } else {
        setFinished(true)
      }
    }, 1600)
  }

  const q = questions[idx]

  // ── Score screen ──
  if (finished) {
    return (
      <div className="quiz-score">
        <div className="quiz-score__num">{score}/{questions.length}</div>
        <p className="quiz-score__msg">{getScoreMessage(score, questions.length)}</p>
        <Button onClick={reset}>Try Again</Button>
      </div>
    )
  }

  // ── Question screen ──
  return (
    <div className="quiz-engine">
      {/* Progress dots */}
      <div className="quiz-progress" aria-label={`Question ${idx + 1} of ${questions.length}`}>
        {questions.map((_, i) => (
          <div
            key={i}
            className={
              'quiz-progress__dot' +
              (i < idx ? ' quiz-progress__dot--done' : '') +
              (i === idx ? ' quiz-progress__dot--current' : '')
            }
          />
        ))}
      </div>

      {/* Question */}
      <p className="quiz-question">
        <span className="quiz-question__num">{idx + 1}.</span> {q.q}
      </p>

      {/* Options */}
      <div className="quiz-options" role="group" aria-label="Answer options">
        {q.opts.map((opt, i) => {
          let cls = 'quiz-option'
          if (answered) {
            if (i === q.ans) cls += ' quiz-option--correct'
            else if (i === selected && i !== q.ans) cls += ' quiz-option--wrong'
          }
          return (
            <button
              key={i}
              className={cls}
              onClick={() => handleAnswer(i)}
              disabled={answered}
              aria-pressed={selected === i}
            >
              {opt}
            </button>
          )
        })}
      </div>

      {/* Feedback */}
      {answered && (
        <div
          className={
            'quiz-feedback' +
            (selected === q.ans ? ' quiz-feedback--correct' : ' quiz-feedback--wrong')
          }
          role="alert"
        >
          {selected === q.ans
            ? '✅ Correct!'
            : `❌ The correct answer is: ${q.opts[q.ans]}`}
        </div>
      )}
    </div>
  )
}

export default function Quizzes() {
  const [subject, setSubject] = useState('math')
  // Key forces full remount (and reset) when subject changes
  const [quizKey, setQuizKey] = useState(0)

  const handleSubject = (key) => {
    setSubject(key)
    setQuizKey(k => k + 1)
  }

  return (
    <div>
      <div className="page-hero">
        <h1>Educational <span>Quizzes</span></h1>
        <p>Test your knowledge with fun, interactive quizzes for all grades</p>
      </div>

      <section className="section">
        <div className="container">
          <SectionTitle
            label="Knowledge Check"
            title="Try a"
            highlight="Quiz"
            sub="Select a subject and challenge yourself!"
          />

          {/* Subject selector */}
          <div className="quiz-subjects" role="tablist" aria-label="Quiz subjects">
            {SUBJECTS.map(({ key, label }) => (
              <button
                key={key}
                role="tab"
                aria-selected={subject === key}
                className={
                  'quiz-subject-btn' +
                  (subject === key ? ' quiz-subject-btn--active' : '')
                }
                onClick={() => handleSubject(key)}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Quiz box */}
          <div className="quiz-box">
            <QuizEngine key={quizKey} subject={subject} />
          </div>
        </div>
      </section>
    </div>
  )
}
