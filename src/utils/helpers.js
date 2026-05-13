// =====================================================
// QUIZ DATA
// =====================================================
export const QUIZ_DATA = {
  math: [
    { q: 'What is 12 × 12?', opts: ['144', '124', '132', '148'], ans: 0 },
    { q: 'Solve: 3x + 6 = 21', opts: ['x = 3', 'x = 5', 'x = 7', 'x = 9'], ans: 1 },
    { q: 'What is 25% of 200?', opts: ['40', '50', '55', '60'], ans: 1 },
    { q: 'What is √144?', opts: ['11', '12', '13', '14'], ans: 1 },
    { q: 'If a triangle has sides 3, 4, and 5, what is its area?', opts: ['6', '7.5', '10', '12'], ans: 0 },
  ],
  science: [
    { q: 'What planet is closest to the Sun?', opts: ['Venus', 'Mars', 'Mercury', 'Earth'], ans: 2 },
    { q: 'What gas do plants absorb during photosynthesis?', opts: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'], ans: 2 },
    { q: 'What is the chemical symbol for water?', opts: ['WO', 'H2O', 'HO2', 'W2H'], ans: 1 },
    { q: 'How many bones are in the adult human body?', opts: ['186', '196', '206', '216'], ans: 2 },
    { q: 'What force keeps planets in orbit around the Sun?', opts: ['Magnetism', 'Friction', 'Gravity', 'Nuclear Force'], ans: 2 },
  ],
  english: [
    { q: 'Which word is a synonym for "happy"?', opts: ['Sad', 'Joyful', 'Tired', 'Angry'], ans: 1 },
    { q: 'What is the past tense of "run"?', opts: ['Runned', 'Running', 'Ran', 'Runs'], ans: 2 },
    { q: 'Identify the noun: "The cat sat on the mat."', opts: ['sat', 'on', 'cat', 'the'], ans: 2 },
    { q: 'Which sentence uses correct punctuation?', opts: ["Its a nice day.", "It's a nice day.", "Its' a nice day.", "It is, a nice day."], ans: 1 },
    { q: 'What is a metaphor?', opts: ['A direct comparison using like or as', 'An indirect comparison without like or as', 'A type of rhyme', 'A question asked for effect'], ans: 1 },
  ],
  history: [
    { q: 'In what year did Egypt sign the Camp David Accords?', opts: ['1975', '1978', '1980', '1982'], ans: 1 },
    { q: 'Who built the Great Pyramid of Giza?', opts: ['Ramesses II', 'Tutankhamun', 'Khufu', 'Cleopatra'], ans: 2 },
    { q: 'What ancient river civilization developed in Egypt?', opts: ['Mesopotamian', 'Indus Valley', 'Nile Valley', 'Yellow River'], ans: 2 },
    { q: 'In which century did the Islamic conquest of Egypt occur?', opts: ['5th century', '7th century', '9th century', '11th century'], ans: 1 },
    { q: "Who was Egypt's first president after the 1952 revolution?", opts: ['Anwar Sadat', 'Hosni Mubarak', 'Mohamed Naguib', 'Gamal Abdel Nasser'], ans: 2 },
  ],
}

// =====================================================
// NAV LINKS
// =====================================================
export const NAV_LINKS = [
  { to: '/',             label: 'Home' },
  { to: '/about',        label: 'About' },
  { to: '/stages',       label: 'Stages' },
  { to: '/prekg',        label: 'Pre-KG & KG' },
  { to: '/primary',      label: 'Primary' },
  { to: '/preparatory',  label: 'Preparatory' },
  { to: '/secondary',    label: 'Secondary' },
  { to: '/admissions',   label: 'Admissions' },
  { to: '/student-life', label: 'Student Life' },
  { to: '/news',         label: 'News & Events' },
  { to: '/quizzes',      label: 'Quizzes' },
  { to: '/tips',         label: 'Tips' },
  { to: '/gallery',      label: 'Gallery' },
  { to: '/contact',      label: 'Contact' },
]

// =====================================================
// SCHOOLS
// =====================================================
export const SCHOOLS = [
  { abbr: 'MC',  name: 'Mansoura College',   sub: 'Language School',        color: '#1a3a6b' },
  { abbr: 'MMC', name: 'Modern MC',           sub: 'Modern Language School', color: '#2a6aad' },
  { abbr: 'AD',  name: 'American Division',   sub: 'American School System', color: '#b8381e' },
  { abbr: 'IG',  name: 'IGCSE Division',      sub: 'British School System',  color: '#2a7a4b' },
]

// =====================================================
// VALUES
// =====================================================
export const VALUES = [
  { icon: '🎓', title: 'Academic Excellence',    desc: 'Rigorous international curriculum tailored for every learner.' },
  { icon: '❤️', title: 'Character Education',    desc: 'Where love is shown daily and values are taught by example.' },
  { icon: '🌍', title: 'International Standards', desc: 'Full adherence to global education benchmarks and systems.' },
  { icon: '🚀', title: 'Student First',            desc: "Every decision is made with the student's best interest at heart." },
]

// =====================================================
// NEWS
// =====================================================
export const NEWS = [
  { icon: '🏆', tag: 'Achievement', title: 'Science Fair 2026 — Winners Announced',       desc: 'Our students swept the regional Science Fair, with the Robotics team taking first place in the engineering category.', date: 'March 2026' },
  { icon: '🎓', tag: 'Event',       title: 'Open House — Visit Our Campus',               desc: 'Join us for our upcoming Open House event. Meet faculty, tour facilities, and learn about our programs firsthand.',     date: 'Upcoming — April 2026' },
  { icon: '🤖', tag: 'Innovation',  title: 'New Robotics Lab Officially Opens',            desc: 'MMC inaugurated its state-of-the-art Robotics and STEM Lab, equipped with the latest tools for young engineers.',      date: 'February 2026' },
  { icon: '⚽', tag: 'Sports',      title: 'MMC Football Team Wins Regional Championship', desc: 'Our Secondary football team claimed the regional school championship for the second consecutive year.',                  date: 'January 2026' },
  { icon: '🎨', tag: 'Arts',        title: 'Annual Talent Show Returns This Spring',       desc: 'Students from all grades are preparing acts for our beloved annual Talent Show. Auditions are now open!',               date: 'Upcoming — May 2026' },
  { icon: '📚', tag: 'Academic',    title: '100% University Acceptance — Class of 2025',  desc: 'We are proud to announce that every Secondary 3 graduate of the Class of 2025 secured a university placement.',         date: 'December 2025' },
]

// =====================================================
// STUDENT ACTIVITIES
// =====================================================
export const ACTIVITIES = [
  { icon: '⚽', title: 'Sports',       desc: 'Soccer, basketball, swimming, and athletics. Our teams compete in regional school leagues.',                              bg: '#e6f0fb' },
  { icon: '🎨', title: 'Arts Club',    desc: 'Painting, sculpture, drama, and music. Annual talent shows showcase student creativity.',                                bg: '#fef9ec' },
  { icon: '🔬', title: 'Science Club', desc: 'Robotics, coding, experiments, and annual Science Fair competitions.',                                                   bg: '#ecfdf5' },
  { icon: '🎤', title: 'Debate Club',  desc: 'Public speaking, critical thinking, and Model UN participation for Prep and Secondary.',                                  bg: '#fdf2f8' },
  { icon: '📸', title: 'Photography',  desc: 'Documenting school life, competitions, and building creative visual storytelling skills.',                                bg: '#f0fdf4' },
  { icon: '🤖', title: 'Robotics Lab', desc: 'Hands-on engineering projects and participation in national robotics competitions.',                                      bg: '#eff6ff' },
]

// =====================================================
// TIPS DATA
// =====================================================
export const STUDENT_TIPS = [
  {
    title: '📅 Build a Daily Study Routine',
    items: [
      'Set a fixed time each day dedicated to studying.',
      'Break study sessions into 25-minute blocks with 5-minute breaks (Pomodoro method).',
      "Review notes from that day's lessons before starting homework.",
      "End each session by previewing what you'll study tomorrow.",
    ],
  },
  {
    title: '🃏 Use Active Recall & Flashcards',
    items: [
      'Write key concepts on one side of a card and answers on the other.',
      'Test yourself instead of just rereading notes.',
      'Use apps like Anki or Quizlet for digital flashcards.',
      'Space your reviews — revisit cards after 1 day, 3 days, then a week.',
    ],
  },
  {
    title: '✏️ Effective Note-Taking',
    items: [
      'Use the Cornell method: main notes, cue column, and summary section.',
      "Highlight key terms but don't highlight everything.",
      'Rewrite notes in your own words after class.',
      'Draw diagrams and mind maps for complex topics.',
    ],
  },
  {
    title: '😴 Rest, Exercise & Nutrition',
    items: [
      'Sleep at least 8 hours — memory consolidation happens during sleep.',
      'Exercise for 30 minutes daily to boost focus and reduce stress.',
      'Eat a balanced breakfast before school and exams.',
      'Stay hydrated — dehydration significantly reduces concentration.',
    ],
  },
]

export const PARENT_TIPS = [
  {
    title: '📖 Encourage Reading at Home',
    items: [
      'Set aside 20 minutes of reading time each evening.',
      'Let children choose books on topics they enjoy.',
      'Read together for younger children and discuss the story.',
      'Visit the public library regularly to keep reading fresh and exciting.',
    ],
  },
  {
    title: '🏫 Stay Engaged with School Life',
    items: [
      'Attend parent-teacher meetings and Open House events.',
      "Ask your child about their school day — listen actively.",
      'Volunteer for school events when possible.',
      'Review homework with your child without doing it for them.',
    ],
  },
  {
    title: '🧘 Support Emotional Wellbeing',
    items: [
      'Create a calm, positive home environment for study.',
      'Celebrate effort, not just results.',
      'Talk openly about stress, friendships, and challenges.',
      'Limit screen time and prioritize family meals together.',
    ],
  },
]

// =====================================================
// QUIZ SCORE MESSAGE
// =====================================================
export function getScoreMessage(score, total) {
  const pct = score / total
  if (pct === 1)   return 'Perfect score! Outstanding! 🎉'
  if (pct >= 0.8)  return 'Excellent work! 🌟'
  if (pct >= 0.6)  return 'Good job! Keep practising. 👍'
  return "Keep studying — you'll get there! 💪"
}
