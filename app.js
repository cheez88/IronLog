// ─── Inline SVG icons (no external dependency) ───────────────────────────────
function Icon({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style,
    ...rest
  }, children);
}
const Plus = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("line", {
  x1: "12",
  y1: "5",
  x2: "12",
  y2: "19"
}), /*#__PURE__*/React.createElement("line", {
  x1: "5",
  y1: "12",
  x2: "19",
  y2: "12"
}));
const Dumbbell = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M6.5 6.5v11"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 6.5v11"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.5 9v6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20.5 9v6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.5 12h11"
}));
const Footprints = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("polyline", {
  points: "22 12 18 12 15 20 9 4 6 12 2 12"
}));
const TrendingUp = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("polyline", {
  points: "22 7 13.5 15.5 8.5 10.5 2 17"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "16 7 22 7 22 13"
}));
const TrendingDown = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("polyline", {
  points: "22 17 13.5 8.5 8.5 13.5 2 7"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "16 17 22 17 22 11"
}));
const Minus = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("line", {
  x1: "5",
  y1: "12",
  x2: "19",
  y2: "12"
}));
const Flame = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"
}));
const Pencil = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "m15 5 4 4"
}));
const Trash2 = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M3 6h18"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"
}), /*#__PURE__*/React.createElement("line", {
  x1: "10",
  y1: "11",
  x2: "10",
  y2: "17"
}), /*#__PURE__*/React.createElement("line", {
  x1: "14",
  y1: "11",
  x2: "14",
  y2: "17"
}));
const ChevronRight = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("polyline", {
  points: "9 18 15 12 9 6"
}));
const RefreshCw = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 21v-5h5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 3v5h-5"
}));
const Smartphone = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("rect", {
  x: "5",
  y: "2",
  width: "14",
  height: "20",
  rx: "2",
  ry: "2"
}), /*#__PURE__*/React.createElement("line", {
  x1: "12",
  y1: "18",
  x2: "12.01",
  y2: "18"
}));
const Share = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "16 6 12 2 8 6"
}), /*#__PURE__*/React.createElement("line", {
  x1: "12",
  y1: "2",
  x2: "12",
  y2: "15"
}));
const Trophy = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 22h16"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 2H6v7a6 6 0 0 0 12 0V2Z"
}));
const ClipboardList = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("rect", {
  x: "8",
  y: "2",
  width: "8",
  height: "4",
  rx: "1",
  ry: "1"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 11h4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 16h4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 11h.01"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 16h.01"
}));
const ArrowUp = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("polyline", {
  points: "18 15 12 9 6 15"
}));
const BookmarkPlus = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"
}), /*#__PURE__*/React.createElement("line", {
  x1: "12",
  y1: "7",
  x2: "12",
  y2: "13"
}), /*#__PURE__*/React.createElement("line", {
  x1: "15",
  y1: "10",
  x2: "9",
  y2: "10"
}));
const Play = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("polygon", {
  points: "6 3 20 12 6 21 6 3"
}));
const ChevronDown = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("polyline", {
  points: "6 9 12 15 18 9"
}));
const ChevronLeft = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("polyline", {
  points: "15 18 9 12 15 6"
}));
const X = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}), /*#__PURE__*/React.createElement("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
}));
const Calendar = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "4",
  width: "18",
  height: "18",
  rx: "2",
  ry: "2"
}), /*#__PURE__*/React.createElement("line", {
  x1: "16",
  y1: "2",
  x2: "16",
  y2: "6"
}), /*#__PURE__*/React.createElement("line", {
  x1: "8",
  y1: "2",
  x2: "8",
  y2: "6"
}), /*#__PURE__*/React.createElement("line", {
  x1: "3",
  y1: "10",
  x2: "21",
  y2: "10"
}));
const CalendarDays = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "4",
  width: "18",
  height: "18",
  rx: "2",
  ry: "2"
}), /*#__PURE__*/React.createElement("line", {
  x1: "16",
  y1: "2",
  x2: "16",
  y2: "6"
}), /*#__PURE__*/React.createElement("line", {
  x1: "8",
  y1: "2",
  x2: "8",
  y2: "6"
}), /*#__PURE__*/React.createElement("line", {
  x1: "3",
  y1: "10",
  x2: "21",
  y2: "10"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"
}));
const Award = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "8",
  r: "6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"
}));
const Database = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("ellipse", {
  cx: "12",
  cy: "5",
  rx: "9",
  ry: "3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 12c0 1.66 4 3 9 3s9-1.34 9-3"
}));
const Download = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "7 10 12 15 17 10"
}), /*#__PURE__*/React.createElement("line", {
  x1: "12",
  y1: "15",
  x2: "12",
  y2: "3"
}));
const Upload = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "17 8 12 3 7 8"
}), /*#__PURE__*/React.createElement("line", {
  x1: "12",
  y1: "3",
  x2: "12",
  y2: "15"
}));
const ListChecks = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "m3 17 2 2 4-4"
}), /*#__PURE__*/React.createElement("path", {
  d: "m3 7 2 2 4-4"
}), /*#__PURE__*/React.createElement("line", {
  x1: "11",
  y1: "8",
  x2: "21",
  y2: "8"
}), /*#__PURE__*/React.createElement("line", {
  x1: "11",
  y1: "18",
  x2: "21",
  y2: "18"
}));

// ─── Recharts components ──────────────────────────────────────────────────────
const {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Dot,
  Cell
} = Recharts;

// ─── React hooks ─────────────────────────────────────────────────────────────
const {
  useState,
  useEffect,
  useMemo,
  useCallback
} = React;

// ─── Storage (localStorage) ───────────────────────────────────────────────────
const STORAGE_KEY = 'ironlog-workouts';
const SETTINGS_KEY = 'ironlog-settings';
const TEMPLATES_KEY = 'ironlog-templates';

// ─── Utility helpers ──────────────────────────────────────────────────────────
const uid = () => `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
const todayISO = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};
function formatDate(iso) {
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}
function formatDateShort(iso) {
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'short'
  });
}
function parseISO(iso) {
  return new Date(iso + 'T00:00:00');
}
function toISO(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
function startOfWeek(d) {
  const day = d.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  const res = new Date(d);
  res.setDate(d.getDate() + diff);
  res.setHours(0, 0, 0, 0);
  return res;
}
function startOfMonth(d) {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}
function addDays(d, n) {
  const r = new Date(d);
  r.setDate(r.getDate() + n);
  return r;
}
function addMonths(d, n) {
  return new Date(d.getFullYear(), d.getMonth() + n, 1);
}
function buildVisitBuckets(uniqueDates, granularity) {
  if (uniqueDates.length === 0) return [];
  const sorted = [...uniqueDates].sort();
  const first = parseISO(sorted[0]);
  const last = parseISO(sorted[sorted.length - 1]);
  const counts = new Map();
  sorted.forEach(iso => {
    const d = parseISO(iso);
    let key;
    if (granularity === 'week') key = toISO(startOfWeek(d));else if (granularity === 'month') key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;else key = `${d.getFullYear()}`;
    counts.set(key, (counts.get(key) || 0) + 1);
  });
  const buckets = [];
  if (granularity === 'week') {
    let cur = startOfWeek(first),
      end = startOfWeek(last);
    while (cur <= end) {
      const key = toISO(cur);
      buckets.push({
        key,
        label: formatDateShort(key),
        count: counts.get(key) || 0
      });
      cur = addDays(cur, 7);
    }
  } else if (granularity === 'month') {
    let cur = startOfMonth(first),
      end = startOfMonth(last);
    while (cur <= end) {
      const key = `${cur.getFullYear()}-${String(cur.getMonth() + 1).padStart(2, '0')}`;
      const label = cur.toLocaleDateString('en-AU', {
        month: 'short',
        year: '2-digit'
      });
      buckets.push({
        key,
        label,
        count: counts.get(key) || 0
      });
      cur = addMonths(cur, 1);
    }
  } else {
    let y = first.getFullYear(),
      endY = last.getFullYear();
    while (y <= endY) {
      buckets.push({
        key: `${y}`,
        label: `${y}`,
        count: counts.get(`${y}`) || 0
      });
      y++;
    }
  }
  return buckets;
}
function trendSlope(buckets) {
  const n = buckets.length;
  if (n < 2) return 0;
  const xs = buckets.map((_, i) => i);
  const ys = buckets.map(b => b.count);
  const xM = xs.reduce((a, b) => a + b, 0) / n;
  const yM = ys.reduce((a, b) => a + b, 0) / n;
  let num = 0,
    den = 0;
  for (let i = 0; i < n; i++) {
    num += (xs[i] - xM) * (ys[i] - yM);
    den += (xs[i] - xM) ** 2;
  }
  return den === 0 ? 0 : num / den;
}
function formatDuration(totalSeconds) {
  if (totalSeconds == null || isNaN(totalSeconds)) return '—';
  const s = Math.round(totalSeconds);
  const h = Math.floor(s / 3600),
    m = Math.floor(s % 3600 / 60),
    sec = s % 60;
  if (h > 0) return `${h}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  return `${m}:${String(sec).padStart(2, '0')}`;
}
function paceSecondsPerUnit(distance, durationSeconds) {
  if (!distance || distance <= 0) return null;
  return durationSeconds / distance;
}
function formatPace(secPerUnit, distanceUnit) {
  if (secPerUnit == null || isNaN(secPerUnit) || !isFinite(secPerUnit)) return '—';
  return `${formatDuration(secPerUnit)}/${distanceUnit}`;
}
function activityKey(type, name) {
  return `${type}::${name}`;
}

// ─── Effort rating ────────────────────────────────────────────────────────────
// Green = easy, yellow = tough, red = missed. Order matters for the picker (best first).
const RATINGS = {
  easy: {
    key: 'easy',
    label: 'Easy',
    color: '#4FA876',
    bg: 'rgba(79,168,118,0.14)',
    strength: 'Finished every rep with some left in the tank',
    run: 'Finished comfortably, could have kept going'
  },
  tough: {
    key: 'tough',
    label: 'Tough',
    color: '#D9A83A',
    bg: 'rgba(217,168,58,0.14)',
    strength: 'Finished, but the last reps were a grind',
    run: 'Finished, but had to dig deep'
  },
  missed: {
    key: 'missed',
    label: 'Missed',
    color: '#D9534A',
    bg: 'rgba(217,83,74,0.14)',
    strength: "Didn't complete all reps or sets",
    run: "Didn't finish, or had to stop and walk"
  }
};
const RATING_ORDER = ['easy', 'tough', 'missed'];
const isRating = r => Object.prototype.hasOwnProperty.call(RATINGS, r);

// Lets any WorkoutRow update an entry's rating without threading props through every view.
const RateContext = React.createContext(() => {});
const EditContext = React.createContext(() => {});

// Reads the most recent sessions of one exercise and suggests whether to progress.
// Only sessions at the latest working weight (or recent runs) count, so a deload doesn't skew it.
function progressionAdvice(entriesNewestFirst, type, unit = '') {
  const rated = entriesNewestFirst.filter(e => isRating(e.rating));
  if (!rated.length) return null;
  const pool = type === 'run' ? rated : rated.filter(e => e.weight === rated[0].weight);
  const recent = pool.slice(0, 3);
  const latest = recent[0].rating;
  const allEasy = recent.length === 3 && recent.every(e => e.rating === 'easy');
  const at = type === 'run' ? '' : ` at ${rated[0].weight}${unit}`;
  if (allEasy) return {
    tone: 'easy',
    title: 'Ready to step up',
    text: type === 'run' ? 'Your last 3 runs all felt easy. Try adding some distance or pushing the pace a little.' : `Your last 3 sessions${at} all felt easy. Try a small jump in weight next time.`
  };
  if (latest === 'missed') return {
    tone: 'missed',
    title: 'Hold steady',
    text: type === 'run' ? "You didn't finish last time. Repeat this distance until it feels manageable." : `You missed reps last time${at}. Stay at this weight, or drop slightly, until it's consistently green.`
  };
  const easyCount = recent.filter(e => e.rating === 'easy').length;
  return {
    tone: 'tough',
    title: 'Keep building',
    text: recent.length < 3 ? `Log ${3 - recent.length} more rated ${3 - recent.length === 1 ? 'session' : 'sessions'}${at} to get a progression signal.` : `${easyCount} of your last 3${at} felt easy. Aim for three greens in a row before adding more.`
  };
}

// ─── Import / export helpers ──────────────────────────────────────────────────
const CSV_COLUMNS = ['date', 'type', 'exercise', 'weight', 'reps', 'sets', 'distance', 'duration_min', 'rating', 'notes'];
function downloadFile(filename, content, mime) {
  const blob = new Blob([content], {
    type: mime
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
function csvEscape(v) {
  if (v == null) return '';
  const s = String(v);
  return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}
function workoutsToCSV(workouts) {
  const rows = [...workouts].sort((a, b) => a.date < b.date ? -1 : a.date > b.date ? 1 : a.createdAt - b.createdAt).map(w => [w.date, w.type || 'strength', w.exercise, w.weight, w.reps, w.sets, w.distance, w.durationSeconds != null ? Math.round(w.durationSeconds / 60) : '', w.rating || '', w.notes].map(csvEscape).join(','));
  return [CSV_COLUMNS.join(','), ...rows].join('\n');
}
function parseCSV(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQ = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQ) {
      if (c === '"' && text[i + 1] === '"') {
        field += '"';
        i++;
      } else if (c === '"') inQ = false;else field += c;
    } else if (c === '"') inQ = true;else if (c === ',') {
      row.push(field);
      field = '';
    } else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
    } else field += c;
  }
  if (field !== '' || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows.filter(r => r.some(cell => cell.trim() !== ''));
}
const num = v => v === '' || v == null || isNaN(parseFloat(v)) ? null : parseFloat(v);

// Accepts either a JSON backup or a CSV export; returns cleaned workout entries.
function parseImport(text, filename) {
  const trimmed = text.trim();
  let raw = [];
  if (trimmed.startsWith('{') || trimmed.startsWith('[')) {
    const data = JSON.parse(trimmed);
    raw = Array.isArray(data) ? data : data.workouts || [];
  } else {
    const rows = parseCSV(trimmed);
    if (!rows.length) return [];
    const header = rows[0].map(h => h.trim().toLowerCase());
    const idx = k => header.indexOf(k);
    if (idx('date') === -1 || idx('exercise') === -1) throw new Error('CSV needs at least "date" and "exercise" columns');
    raw = rows.slice(1).map(r => {
      const get = k => idx(k) === -1 ? '' : (r[idx(k)] || '').trim();
      const mins = num(get('duration_min'));
      return {
        date: get('date'),
        type: get('type') || 'strength',
        exercise: get('exercise'),
        weight: num(get('weight')),
        reps: num(get('reps')),
        sets: num(get('sets')),
        distance: num(get('distance')),
        durationSeconds: mins != null ? mins * 60 : null,
        rating: get('rating').toLowerCase(),
        notes: get('notes')
      };
    });
  }
  const valid = [];
  raw.forEach((w, i) => {
    if (!w || !/^\d{4}-\d{2}-\d{2}$/.test(w.date || '') || !w.exercise) return;
    const type = w.type === 'run' ? 'run' : 'strength';
    if (type === 'strength' && num(w.weight) == null) return;
    if (type === 'run' && (num(w.distance) == null || num(w.durationSeconds) == null)) return;
    valid.push({
      id: w.id || `${uid()}-${i}`,
      type,
      exercise: type === 'run' ? 'Run' : String(w.exercise).trim(),
      date: w.date,
      notes: w.notes || '',
      createdAt: w.createdAt || Date.now() + i,
      weight: type === 'strength' ? num(w.weight) : null,
      reps: type === 'strength' ? num(w.reps) : null,
      sets: type === 'strength' ? num(w.sets) : null,
      distance: type === 'run' ? num(w.distance) : null,
      durationSeconds: type === 'run' ? num(w.durationSeconds) : null,
      rating: isRating(w.rating) ? w.rating : null
    });
  });
  return valid;
}

// Keeps only well-formed templates: { id, name, items: [{ type, exercise, reps, sets }] }.
function cleanTemplates(list) {
  if (!Array.isArray(list)) return [];
  return list.filter(t => t && typeof t.name === 'string' && t.name.trim() && Array.isArray(t.items)).map((t, i) => ({
    id: t.id || `${uid()}-t${i}`,
    name: t.name.trim(),
    items: t.items.filter(it => it && (it.type === 'run' || typeof it.exercise === 'string' && it.exercise.trim())).map((it, j) => ({
      key: it.key || `${uid()}-${j}`,
      type: it.type === 'run' ? 'run' : 'strength',
      exercise: it.type === 'run' ? 'Run' : it.exercise.trim(),
      reps: it.type === 'run' ? null : num(it.reps) ?? 10,
      sets: it.type === 'run' ? null : num(it.sets) ?? 3
    }))
  })).filter(t => t.items.length);
}

// Same date + type + exercise + numbers = same session, so re-importing a file doesn't duplicate it.
function fingerprint(w) {
  return [w.date, w.type || 'strength', w.exercise, w.weight, w.reps, w.sets, w.distance, w.durationSeconds].join('|');
}

// ─── Main App ─────────────────────────────────────────────────────────────────
// ─── PWA helpers ──────────────────────────────────────────────────────────────
const isStandalone = () => window.matchMedia && window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
const isIOS = () => /iphone|ipad|ipod/i.test(navigator.userAgent) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

// Captured as early as possible: Chrome fires it once, possibly before React mounts.
let deferredInstallPrompt = null;
let updateRequested = false;
const installListeners = new Set();
// Not calling preventDefault(): Chrome may show its own install banner, and our button works too.
window.addEventListener('beforeinstallprompt', e => {
  deferredInstallPrompt = e;
  installListeners.forEach(fn => fn(true));
});
window.addEventListener('appinstalled', () => {
  deferredInstallPrompt = null;
  installListeners.forEach(fn => fn(false));
});
function usePWA() {
  const [canInstall, setCanInstall] = useState(!!deferredInstallPrompt);
  const [installed, setInstalled] = useState(isStandalone());
  const [updateReady, setUpdateReady] = useState(false);
  const waitingRef = React.useRef(null);
  useEffect(() => {
    const fn = v => {
      setCanInstall(v);
      if (!v) setInstalled(true);
    };
    installListeners.add(fn);
    return () => installListeners.delete(fn);
  }, []);
  useEffect(() => {
    // Ask the browser not to clear our data under storage pressure.
    try {
      navigator.storage && navigator.storage.persist && navigator.storage.persist();
    } catch (e) {}
    if (!('serviceWorker' in navigator) || location.protocol === 'file:') return;
    // Reload only when the user tapped "Update" — not when the first install takes control.
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (!updateRequested) return;
      updateRequested = false;
      location.reload();
    });
    navigator.serviceWorker.register('sw.js').then(reg => {
      const markWaiting = w => {
        waitingRef.current = w;
        setUpdateReady(true);
      };
      if (reg.waiting && navigator.serviceWorker.controller) markWaiting(reg.waiting);
      reg.addEventListener('updatefound', () => {
        const nw = reg.installing;
        if (!nw) return;
        nw.addEventListener('statechange', () => {
          // Only offer an update if an older version is already running this page.
          if (nw.state === 'installed' && navigator.serviceWorker.controller) markWaiting(nw);
        });
      });
      // Check for a new version whenever the app comes back to the foreground.
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') reg.update().catch(() => {});
      });
    }).catch(() => {});
  }, []);
  async function promptInstall() {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    try {
      await deferredInstallPrompt.userChoice;
    } catch (e) {}
    deferredInstallPrompt = null;
    setCanInstall(false);
  }
  function applyUpdate() {
    updateRequested = true;
    if (waitingRef.current) waitingRef.current.postMessage({
      type: 'SKIP_WAITING'
    });else location.reload();
  }
  return {
    canInstall,
    installed,
    updateReady,
    promptInstall,
    applyUpdate,
    ios: isIOS()
  };
}
function IronLog() {
  const pwa = usePWA();
  const [workouts, setWorkouts] = useState([]);
  const [unit, setUnit] = useState('kg');
  const [distanceUnit, setDistanceUnit] = useState('km');
  const [loaded, setLoaded] = useState(false);
  const [view, setView] = useState('log');
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [toast, setToast] = useState(null);
  const [calendarMonth, setCalendarMonth] = useState(startOfMonth(new Date()));
  const [granularity, setGranularity] = useState('week');
  const [selectedDay, setSelectedDay] = useState(null);
  useEffect(() => {
    try {
      window.scrollTo(0, 0);
    } catch (e) {}
  }, [view]);
  const emptyForm = {
    type: 'strength',
    exercise: '',
    weight: '',
    reps: '10',
    sets: '3',
    weightAuto: true,
    distance: '',
    durationMin: '',
    route: '',
    date: todayISO(),
    notes: '',
    rating: ''
  };
  const [form, setForm] = useState(emptyForm);

  // Load from localStorage
  useEffect(() => {
    try {
      const w = localStorage.getItem(STORAGE_KEY);
      if (w) setWorkouts(JSON.parse(w));
    } catch (e) {}
    try {
      const s = localStorage.getItem(SETTINGS_KEY);
      if (s) {
        const p = JSON.parse(s);
        if (p.unit) setUnit(p.unit);
        if (p.distanceUnit) setDistanceUnit(p.distanceUnit);
      }
    } catch (e) {}
    setLoaded(true);
  }, []);
  const [templates, setTemplates] = useState(() => {
    try {
      return cleanTemplates(JSON.parse(localStorage.getItem(TEMPLATES_KEY) || '[]'));
    } catch (e) {
      return [];
    }
  });
  const persistTemplates = useCallback(next => {
    setTemplates(next);
    try {
      localStorage.setItem(TEMPLATES_KEY, JSON.stringify(next));
    } catch (e) {}
  }, []);
  // Which template sheet is open: null | 'list' | { edit: template-or-draft } | { session: template }
  const [tplSheet, setTplSheet] = useState(null);
  const persistWorkouts = useCallback(next => {
    setWorkouts(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch (e) {}
  }, []);
  const persistSettings = useCallback((nextUnit, nextDistUnit) => {
    setUnit(nextUnit);
    setDistanceUnit(nextDistUnit);
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify({
        unit: nextUnit,
        distanceUnit: nextDistUnit
      }));
    } catch (e) {}
  }, []);
  const showToast = msg => {
    setToast(msg);
    setTimeout(() => setToast(null), 2200);
  };

  // ── Import / export ──
  const [showData, setShowData] = useState(false);
  const [pendingImport, setPendingImport] = useState(null); // { entries, newCount, dupCount, filename }
  const [importError, setImportError] = useState(null);
  const fileInputRef = React.useRef(null);
  function exportJSON() {
    const payload = {
      app: 'ironlog',
      version: 1,
      exportedAt: new Date().toISOString(),
      settings: {
        unit,
        distanceUnit
      },
      workouts,
      templates
    };
    downloadFile(`ironlog-backup-${todayISO()}.json`, JSON.stringify(payload, null, 2), 'application/json');
    showToast(`Exported ${workouts.length} entries`);
  }
  function exportCSV() {
    downloadFile(`ironlog-${todayISO()}.csv`, workoutsToCSV(workouts), 'text/csv');
    showToast(`Exported ${workouts.length} entries`);
  }
  function handleFileChosen(e) {
    const file = e.target.files && e.target.files[0];
    e.target.value = '';
    if (!file) return;
    setImportError(null);
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const text = String(reader.result);
        const entries = parseImport(text, file.name);
        let tpls = [];
        try {
          const d = JSON.parse(text);
          tpls = cleanTemplates(d && d.templates);
        } catch (e) {}
        const haveNames = new Set(templates.map(t => t.name.toLowerCase()));
        const newTemplates = tpls.filter(t => !haveNames.has(t.name.toLowerCase()));
        if (!entries.length && !newTemplates.length) {
          setImportError('No valid workouts found in that file.');
          return;
        }
        const existing = new Set(workouts.map(fingerprint));
        const fresh = entries.filter(w => !existing.has(fingerprint(w)));
        setPendingImport({
          entries,
          newCount: fresh.length,
          dupCount: entries.length - fresh.length,
          filename: file.name,
          newTemplates
        });
      } catch (err) {
        setImportError(`Couldn't read that file — ${err.message}`);
      }
    };
    reader.readAsText(file);
  }
  function confirmImport(mode) {
    if (!pendingImport) return;
    // Templates are always merged (never wiped): add any whose name isn't already used.
    if (pendingImport.newTemplates && pendingImport.newTemplates.length) {
      persistTemplates([...templates, ...pendingImport.newTemplates.map(t => ({
        ...t,
        id: uid()
      }))]);
    }
    if (mode === 'replace') {
      persistWorkouts(pendingImport.entries);
      showToast(`Replaced with ${pendingImport.entries.length} entries`);
    } else {
      const existing = new Set(workouts.map(fingerprint));
      const existingIds = new Set(workouts.map(w => w.id));
      const fresh = pendingImport.entries.filter(w => !existing.has(fingerprint(w))).map(w => existingIds.has(w.id) ? {
        ...w,
        id: uid()
      } : w);
      persistWorkouts([...workouts, ...fresh]);
      showToast(`Imported ${fresh.length} new ${fresh.length === 1 ? 'entry' : 'entries'}`);
    }
    setPendingImport(null);
    setShowData(false);
  }
  function closeData() {
    setShowData(false);
    setPendingImport(null);
    setImportError(null);
  }

  // ── Templates ──
  function saveTemplate(tpl) {
    const exists = templates.some(t => t.id === tpl.id);
    persistTemplates(exists ? templates.map(t => t.id === tpl.id ? tpl : t) : [...templates, tpl]);
    showToast(exists ? 'Template updated' : `Template "${tpl.name}" saved`);
    setTplSheet('list');
  }
  function deleteTemplate(id) {
    persistTemplates(templates.filter(t => t.id !== id));
    showToast('Template deleted');
    setTplSheet('list');
  }
  // Draft a template from a day you've already logged (exercises in the order you did them).
  function templateFromDay(day) {
    const seen = new Set();
    const items = [];
    day.items.forEach(w => {
      const k = (w.type === 'run' ? 'run' : 'strength') + '::' + (w.exercise || '').toLowerCase();
      if (seen.has(k)) return;
      seen.add(k);
      items.push({
        key: uid() + items.length,
        type: w.type === 'run' ? 'run' : 'strength',
        exercise: w.type === 'run' ? 'Run' : w.exercise,
        reps: w.type === 'run' ? null : w.reps ?? 10,
        sets: w.type === 'run' ? null : w.sets ?? 3
      });
    });
    setTplSheet({
      edit: {
        id: uid(),
        name: '',
        items
      },
      isNew: true
    });
  }
  // Log every completed item of a template session at once.
  function logSession(rows, date) {
    const base = Date.now();
    const entries = rows.map((r, i) => ({
      id: uid() + '-' + i,
      type: r.type,
      exercise: r.type === 'run' ? 'Run' : lastStrengthSession(r.exercise)?.exercise || r.exercise,
      date,
      notes: r.type === 'run' && r.route ? `Route: ${r.route}` : '',
      createdAt: base + i,
      weight: r.type === 'strength' ? parseFloat(r.weight) : null,
      reps: r.type === 'strength' && r.reps ? parseInt(r.reps, 10) : null,
      sets: r.type === 'strength' && r.sets ? parseInt(r.sets, 10) : null,
      distance: r.type === 'run' ? parseFloat(r.distance) : null,
      durationSeconds: r.type === 'run' ? parseInt(r.durationMin || '0', 10) * 60 : null,
      rating: isRating(r.rating) ? r.rating : null
    }));
    const next = [...workouts, ...entries];
    persistWorkouts(next);
    try {
      navigator.vibrate && navigator.vibrate(12);
    } catch (e) {}
    // Mention any lift that just hit three easy sessions in a row.
    const ready = entries.filter(e => e.type === 'strength' && e.rating === 'easy').find(e => {
      const same = next.filter(w => w.type !== 'run' && w.exercise === e.exercise).sort((a, b) => a.date < b.date ? 1 : a.date > b.date ? -1 : b.createdAt - a.createdAt);
      const adv = progressionAdvice(same, 'strength');
      return same[0] && same[0].id === e.id && adv && adv.tone === 'easy';
    });
    showToast(ready ? `3 easy in a row — ready to add weight to ${ready.exercise}` : `Logged ${entries.length} ${entries.length === 1 ? 'exercise' : 'exercises'}`);
    setTplSheet(null);
    setView('log');
  }

  // Latest logged session for an exercise name, matched case-insensitively.
  // When editing, the entry being edited is ignored so its own weight isn't treated as "last time".
  function lastStrengthSession(name, excludeId) {
    const key = name.trim().toLowerCase();
    if (!key) return null;
    let best = null;
    workouts.forEach(w => {
      if (w.type === 'run' || w.id === excludeId || (w.exercise || '').toLowerCase() !== key) return;
      if (!best || w.date > best.date || w.date === best.date && w.createdAt > best.createdAt) best = w;
    });
    return best;
  }
  function handleExerciseChange(value) {
    setForm(f => {
      const next = {
        ...f,
        exercise: value
      };
      if (f.weightAuto && !editingId) {
        const last = lastStrengthSession(value);
        next.weight = last && last.weight != null ? String(last.weight) : '';
      }
      return next;
    });
  }
  const strengthNames = useMemo(() => {
    const byKey = new Map();
    workouts.forEach(w => {
      if (w.type === 'run' || !w.exercise) return;
      const k = w.exercise.trim().toLowerCase();
      if (!byKey.has(k)) byKey.set(k, w.exercise.trim());
    });
    // Template exercises count too, so a lift you planned but haven't logged yet is still listed.
    templates.forEach(t => t.items.forEach(i => {
      if (i.type === 'run' || !i.exercise) return;
      const k = i.exercise.trim().toLowerCase();
      if (!byKey.has(k)) byKey.set(k, i.exercise.trim());
    }));
    return [...byKey.values()].sort((a, b) => a.localeCompare(b, undefined, {
      sensitivity: 'base'
    }));
  }, [workouts, templates]);
  const activities = useMemo(() => {
    const map = new Map();
    workouts.forEach(w => {
      const type = w.type || 'strength';
      const key = activityKey(type, w.exercise);
      if (!map.has(key)) map.set(key, {
        type,
        name: w.exercise
      });
    });
    return Array.from(map.values()).sort((a, b) => a.name.localeCompare(b.name));
  }, [workouts]);
  const sortedWorkouts = useMemo(() => [...workouts].sort((a, b) => a.date < b.date ? 1 : a.date > b.date ? -1 : b.createdAt - a.createdAt), [workouts]);
  const isPR = useCallback(entry => {
    const type = entry.type || 'strength';
    const prior = workouts.filter(w => (w.type || 'strength') === type && w.exercise === entry.exercise && w.date <= entry.date && w.id !== entry.id);
    if (type === 'run') {
      const ep = paceSecondsPerUnit(entry.distance, entry.durationSeconds);
      if (ep == null) return false;
      const best = Math.min(...prior.map(w => paceSecondsPerUnit(w.distance, w.durationSeconds)).filter(p => p != null), Infinity);
      return ep < best;
    }
    const priorMax = prior.reduce((m, w) => Math.max(m, w.weight), 0);
    return entry.weight > priorMax;
  }, [workouts]);
  function resetForm() {
    setForm(f => ({
      ...emptyForm,
      type: f.type
    }));
  }

  // ── Editing ──
  const [editingId, setEditingId] = useState(null);
  function openNewForm() {
    setEditingId(null);
    setForm(f => ({
      ...emptyForm,
      type: f.type
    }));
    setShowForm(true);
  }
  function closeForm() {
    setShowForm(false);
    if (editingId) {
      setEditingId(null);
      setForm(f => ({
        ...emptyForm,
        type: f.type
      }));
    }
  }
  function openEditForm(id) {
    const w = workouts.find(x => x.id === id);
    if (!w) return;
    const isRun = w.type === 'run';
    let route = '',
      notes = w.notes || '';
    // Runs store "Route: X — how it felt" in one field; split it back out for editing.
    if (isRun && notes.startsWith('Route: ')) {
      const rest = notes.slice('Route: '.length);
      const sep = rest.indexOf(' — ');
      route = sep === -1 ? rest : rest.slice(0, sep);
      notes = sep === -1 ? '' : rest.slice(sep + 3);
    }
    setForm({
      ...emptyForm,
      type: isRun ? 'run' : 'strength',
      exercise: isRun ? '' : w.exercise,
      weight: w.weight != null ? String(w.weight) : '',
      reps: w.reps != null ? String(w.reps) : '',
      sets: w.sets != null ? String(w.sets) : '',
      distance: w.distance != null ? String(w.distance) : '',
      durationMin: w.durationSeconds != null ? String(Math.round(w.durationSeconds / 60)) : '',
      route,
      notes,
      date: w.date,
      rating: isRating(w.rating) ? w.rating : ''
    });
    setEditingId(id);
    setShowForm(true);
  }
  function handleSubmit(e) {
    e.preventDefault();
    try {
      navigator.vibrate && navigator.vibrate(12);
    } catch (err) {}
    if (form.type === 'run') {
      if (!form.distance || !form.durationMin) return;
    } else {
      if (!form.exercise.trim() || !form.weight) return;
    }
    const durationSeconds = form.type === 'run' ? parseInt(form.durationMin || '0', 10) * 60 : null;
    const route = form.route.trim();
    const combinedNotes = form.type === 'run' ? [route ? `Route: ${route}` : null, form.notes.trim() || null].filter(Boolean).join(' — ') : form.notes.trim();
    const original = editingId ? workouts.find(w => w.id === editingId) : null;
    const entry = {
      id: original ? original.id : uid(),
      type: form.type,
      exercise: form.type === 'run' ? 'Run' : lastStrengthSession(form.exercise)?.exercise || form.exercise.trim(),
      date: form.date,
      notes: combinedNotes,
      createdAt: original ? original.createdAt : Date.now(),
      weight: form.type === 'strength' ? parseFloat(form.weight) : null,
      reps: form.type === 'strength' && form.reps ? parseInt(form.reps, 10) : null,
      sets: form.type === 'strength' && form.sets ? parseInt(form.sets, 10) : null,
      distance: form.type === 'run' ? parseFloat(form.distance) : null,
      // Keep any original seconds if the minutes weren't changed (older entries/imports may have them).
      durationSeconds: original && original.durationSeconds != null && durationSeconds != null && Math.round(original.durationSeconds / 60) * 60 === durationSeconds ? original.durationSeconds : durationSeconds,
      rating: isRating(form.rating) ? form.rating : null
    };
    if (original) {
      persistWorkouts(workouts.map(w => w.id === original.id ? entry : w));
      showToast('Entry updated');
      setEditingId(null);
      resetForm();
      setShowForm(false);
      return;
    }
    const next = [...workouts, entry];
    persistWorkouts(next);
    const priorSame = workouts.filter(w => (w.type || 'strength') === entry.type && w.exercise === entry.exercise);
    const sameNewestFirst = [entry, ...priorSame].sort((x, y) => x.date < y.date ? 1 : x.date > y.date ? -1 : y.createdAt - x.createdAt);
    const advice = entry.rating ? progressionAdvice(sameNewestFirst, entry.type) : null;
    const readyMsg = advice && advice.tone === 'easy' && sameNewestFirst[0].id === entry.id ? entry.type === 'run' ? '3 easy runs in a row — ready to go further' : `3 easy in a row — ready to add weight to ${entry.exercise}` : null;
    if (entry.type === 'run') {
      const ep = paceSecondsPerUnit(entry.distance, entry.durationSeconds);
      const best = Math.min(...priorSame.map(w => paceSecondsPerUnit(w.distance, w.durationSeconds)).filter(p => p != null), Infinity);
      if (ep != null && isFinite(best) && ep < best) {
        showToast(`New best pace — ${route || 'Run'} at ${formatPace(ep, distanceUnit)}`);
      } else {
        showToast(readyMsg || 'Run logged');
      }
    } else {
      const priorMax = priorSame.reduce((m, w) => Math.max(m, w.weight), 0);
      if (entry.weight > priorMax && priorMax > 0) {
        showToast(`New PR — ${entry.exercise} at ${entry.weight}${unit}`);
      } else {
        showToast(readyMsg || 'Workout logged');
      }
    }
    resetForm();
    setShowForm(false);
  }
  function handleDelete(id) {
    persistWorkouts(workouts.filter(w => w.id !== id));
  }
  function handleRate(id, rating) {
    persistWorkouts(workouts.map(w => w.id === id ? {
      ...w,
      rating: isRating(rating) ? rating : null
    } : w));
  }
  function openProgress(type, name) {
    setSelectedActivity({
      type: type || 'strength',
      name
    });
    setView('progress');
  }
  const activityStats = useMemo(() => {
    if (!selectedActivity) return null;
    const {
      type,
      name
    } = selectedActivity;
    const entries = workouts.filter(w => (w.type || 'strength') === type && w.exercise === name).sort((a, b) => a.date > b.date ? 1 : a.date < b.date ? -1 : a.createdAt - b.createdAt);
    if (!entries.length) return null;
    if (type === 'run') {
      const withPace = entries.map(e => ({
        ...e,
        pace: paceSecondsPerUnit(e.distance, e.durationSeconds)
      }));
      const paced = withPace.filter(e => e.pace != null);
      const bestEntry = paced.length ? paced.reduce((m, e) => e.pace < m.pace ? e : m, paced[0]) : entries[0];
      const longestEntry = entries.reduce((m, e) => e.distance > m.distance ? e : m, entries[0]);
      const last = withPace[withPace.length - 1];
      const prev = withPace.length > 1 ? withPace[withPace.length - 2] : null;
      const paceTrend = prev && last.pace != null && prev.pace != null ? last.pace - prev.pace : 0;
      const chartData = withPace.map(e => ({
        date: e.date,
        label: formatDateShort(e.date),
        pace: e.pace,
        distance: e.distance,
        isBest: paced.length ? e.pace <= bestEntry.pace : false,
        rating: e.rating
      }));
      return {
        type,
        entries: [...entries].reverse(),
        count: entries.length,
        best: bestEntry,
        longest: longestEntry,
        last,
        paceTrend,
        chartData
      };
    }
    const maxEntry = entries.reduce((m, e) => e.weight > m.weight ? e : m, entries[0]);
    const last = entries[entries.length - 1];
    const prev = entries.length > 1 ? entries[entries.length - 2] : null;
    const trend = prev ? last.weight - prev.weight : 0;
    const chartData = entries.map(e => ({
      date: e.date,
      label: formatDateShort(e.date),
      weight: e.weight,
      isPR: e.weight >= maxEntry.weight,
      rating: e.rating
    }));
    return {
      type,
      entries: [...entries].reverse(),
      count: entries.length,
      max: maxEntry,
      last,
      trend,
      chartData
    };
  }, [selectedActivity, workouts]);
  const weekCount = useMemo(() => {
    const weekAgo = new Date(Date.now() - 7 * 86400000);
    return workouts.filter(w => new Date(w.date + 'T00:00:00') >= weekAgo).length;
  }, [workouts]);
  const uniqueVisitDates = useMemo(() => Array.from(new Set(workouts.map(w => w.date))).sort(), [workouts]);
  const todaysWorkouts = sortedWorkouts.filter(w => w.date === todayISO());
  const workoutsByDay = useMemo(() => {
    const map = new Map();
    sortedWorkouts.forEach(w => {
      if (!map.has(w.date)) map.set(w.date, []);
      map.get(w.date).push(w);
    });
    return [...map.entries()].map(([date, items]) => ({
      date,
      items: items.slice().sort((a, b) => a.createdAt - b.createdAt)
    }));
  }, [sortedWorkouts]);
  if (!loaded) return /*#__PURE__*/React.createElement("div", {
    style: S.page
  }, /*#__PURE__*/React.createElement("div", {
    style: S.loadingWrap
  }, /*#__PURE__*/React.createElement(Dumbbell, {
    size: 28,
    color: "#E8472B"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Inter,sans-serif',
      color: '#8A9099',
      marginTop: 10
    }
  }, "Loading…")));
  return /*#__PURE__*/React.createElement(RateContext.Provider, {
    value: handleRate
  }, /*#__PURE__*/React.createElement(EditContext.Provider, {
    value: openEditForm
  }, /*#__PURE__*/React.createElement("div", {
    style: S.page
  }, /*#__PURE__*/React.createElement("header", {
    style: S.header
  }, /*#__PURE__*/React.createElement("div", {
    style: S.headerLeft
  }, /*#__PURE__*/React.createElement("div", {
    style: S.barIcon
  }, /*#__PURE__*/React.createElement("div", {
    style: S.plate
  }), /*#__PURE__*/React.createElement("div", {
    style: S.bar
  }), /*#__PURE__*/React.createElement("div", {
    style: S.plate
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: S.title
  }, "IRONLOG"), /*#__PURE__*/React.createElement("p", {
    style: S.subtitle
  }, "workout tracker"))), /*#__PURE__*/React.createElement("div", {
    style: S.unitToggleGroup
  }, /*#__PURE__*/React.createElement("button", {
    style: S.unitToggle,
    onClick: () => persistSettings(unit === 'kg' ? 'lb' : 'kg', distanceUnit)
  }, unit), /*#__PURE__*/React.createElement("button", {
    style: S.unitToggle,
    onClick: () => persistSettings(unit, distanceUnit === 'km' ? 'mi' : 'km')
  }, distanceUnit), /*#__PURE__*/React.createElement("button", {
    style: {
      ...S.unitToggle,
      padding: '7px 10px',
      display: 'flex',
      alignItems: 'center'
    },
    onClick: () => setShowData(true),
    "aria-label": "App and data settings"
  }, /*#__PURE__*/React.createElement(Database, {
    size: 14,
    color: "#EDEAE2"
  })))), pwa.updateReady && /*#__PURE__*/React.createElement("div", {
    style: S.updateBanner
  }, /*#__PURE__*/React.createElement(RefreshCw, {
    size: 15,
    color: "#E8472B"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, "A new version of IronLog is ready."), /*#__PURE__*/React.createElement("button", {
    style: S.updateBtn,
    onClick: pwa.applyUpdate
  }, "Update")), /*#__PURE__*/React.createElement("nav", {
    style: S.tabBar,
    "aria-label": "Sections"
  }, /*#__PURE__*/React.createElement("div", {
    style: S.tabBarInner
  }, [['log', 'Log', ListChecks], ['progress', 'Progress', TrendingUp], ['records', 'Records', Trophy], ['calendar', 'Calendar', CalendarDays]].map(([key, label, IconC]) => {
    const on = view === key;
    return /*#__PURE__*/React.createElement("button", {
      key: key,
      style: {
        ...S.tabBtn,
        color: on ? '#EDEAE2' : '#5B6470'
      },
      "aria-current": on ? 'page' : undefined,
      onClick: () => {
        if (key === 'progress' && !selectedActivity && activities.length) setSelectedActivity(activities[0]);
        setView(key);
      }
    }, /*#__PURE__*/React.createElement(IconC, {
      size: 22,
      color: on ? '#E8472B' : '#5B6470',
      strokeWidth: on ? 2.4 : 2
    }), /*#__PURE__*/React.createElement("span", null, label));
  }))), /*#__PURE__*/React.createElement("main", {
    style: S.main
  }, view === 'log' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: S.statRow
  }, /*#__PURE__*/React.createElement("div", {
    style: S.statCard
  }, /*#__PURE__*/React.createElement("div", {
    style: S.statNum
  }, workouts.length), /*#__PURE__*/React.createElement("div", {
    style: S.statLabel
  }, "Total logged")), /*#__PURE__*/React.createElement("div", {
    style: S.statCard
  }, /*#__PURE__*/React.createElement("div", {
    style: S.statNum
  }, weekCount), /*#__PURE__*/React.createElement("div", {
    style: S.statLabel
  }, "This week")), /*#__PURE__*/React.createElement("div", {
    style: S.statCard
  }, /*#__PURE__*/React.createElement("div", {
    style: S.statNum
  }, activities.length), /*#__PURE__*/React.createElement("div", {
    style: S.statLabel
  }, "Activities"))), /*#__PURE__*/React.createElement("button", {
    style: S.tplEntry,
    onClick: () => setTplSheet('list')
  }, /*#__PURE__*/React.createElement(ClipboardList, {
    size: 18,
    color: "#E8472B"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      display: 'block',
      fontSize: 14
    }
  }, "Start a workout"), /*#__PURE__*/React.createElement("small", {
    style: S.dataBtnSub
  }, templates.length ? `${templates.length} ${templates.length === 1 ? 'template' : 'templates'} — log a whole session at once` : 'Create a template to log a whole session at once')), /*#__PURE__*/React.createElement(ChevronRight, {
    size: 16,
    color: "#5B6470"
  })), workoutsByDay.length === 0 ? /*#__PURE__*/React.createElement(EmptyState, {
    onAdd: openNewForm
  }) : workoutsByDay.map(day => /*#__PURE__*/React.createElement(DayGroup, {
    key: day.date,
    day: day,
    unit: unit,
    distanceUnit: distanceUnit,
    isPR: isPR,
    onDelete: handleDelete,
    onView: openProgress,
    onSaveTemplate: templateFromDay
  }))), view === 'progress' && /*#__PURE__*/React.createElement(ProgressView, {
    activities: activities,
    selectedActivity: selectedActivity,
    setSelectedActivity: setSelectedActivity,
    stats: activityStats,
    unit: unit,
    distanceUnit: distanceUnit,
    onDelete: handleDelete,
    workouts: workouts
  }), view === 'records' && /*#__PURE__*/React.createElement(RecordsView, {
    workouts: workouts,
    unit: unit,
    distanceUnit: distanceUnit,
    onView: openProgress
  }), view === 'calendar' && /*#__PURE__*/React.createElement(CalendarFrequencyView, {
    workouts: workouts,
    uniqueVisitDates: uniqueVisitDates,
    calendarMonth: calendarMonth,
    setCalendarMonth: setCalendarMonth,
    granularity: granularity,
    setGranularity: setGranularity,
    selectedDay: selectedDay,
    setSelectedDay: setSelectedDay,
    unit: unit,
    distanceUnit: distanceUnit,
    onDelete: handleDelete
  })), /*#__PURE__*/React.createElement("button", {
    style: S.fab,
    onClick: openNewForm,
    "aria-label": "Log workout"
  }, /*#__PURE__*/React.createElement(Plus, {
    size: 24,
    color: "#14161A",
    strokeWidth: 2.5
  })), showForm && /*#__PURE__*/React.createElement("div", {
    style: S.modalOverlay,
    onClick: closeForm
  }, /*#__PURE__*/React.createElement("div", {
    style: S.modal,
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    style: S.modalHeader
  }, /*#__PURE__*/React.createElement("h2", {
    style: S.modalTitle
  }, editingId ? 'Edit entry' : 'Log workout'), /*#__PURE__*/React.createElement("button", {
    style: S.iconBtn,
    onClick: closeForm,
    "aria-label": "Close"
  }, /*#__PURE__*/React.createElement(X, {
    size: 18,
    color: "#8A9099"
  }))), /*#__PURE__*/React.createElement("div", {
    style: S.typeToggleRow
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: {
      ...S.typeToggleBtn,
      ...(form.type === 'strength' ? S.typeToggleBtnActive : {})
    },
    onClick: () => setForm(f => ({
      ...f,
      type: 'strength'
    }))
  }, /*#__PURE__*/React.createElement(Dumbbell, {
    size: 14,
    style: {
      marginRight: 6
    }
  }), " Strength"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: {
      ...S.typeToggleBtn,
      ...(form.type === 'run' ? S.typeToggleBtnActive : {})
    },
    onClick: () => setForm(f => ({
      ...f,
      type: 'run'
    }))
  }, /*#__PURE__*/React.createElement(Footprints, {
    size: 14,
    style: {
      marginRight: 6
    }
  }), " Run")), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    style: S.form
  }, form.type === 'strength' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: S.label
  }, "Exercise", /*#__PURE__*/React.createElement(ExercisePicker, {
    id: "log-exercise",
    names: strengthNames,
    value: form.exercise,
    onChange: handleExerciseChange
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...S.formRow,
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      ...S.label,
      flex: '0 0 38%'
    }
  }, "Weight (", unit, ")", /*#__PURE__*/React.createElement("input", {
    style: S.input,
    type: "number",
    inputMode: "decimal",
    step: "0.5",
    min: "0",
    value: form.weight,
    onChange: e => setForm(f => ({
      ...f,
      weight: e.target.value,
      weightAuto: e.target.value === ''
    })),
    placeholder: "0",
    required: true
  })), /*#__PURE__*/React.createElement("label", {
    style: {
      ...S.label,
      flex: 1
    }
  }, "Reps", /*#__PURE__*/React.createElement("input", {
    style: S.input,
    type: "number",
    inputMode: "numeric",
    min: "0",
    value: form.reps,
    onChange: e => setForm(f => ({
      ...f,
      reps: e.target.value
    })),
    placeholder: "—"
  })), /*#__PURE__*/React.createElement("label", {
    style: {
      ...S.label,
      flex: 1
    }
  }, "Sets", /*#__PURE__*/React.createElement("input", {
    style: S.input,
    type: "number",
    inputMode: "numeric",
    min: "0",
    value: form.sets,
    onChange: e => setForm(f => ({
      ...f,
      sets: e.target.value
    })),
    placeholder: "—"
  }))), (() => {
    const last = lastStrengthSession(form.exercise, editingId);
    if (!last) return null;
    const r = isRating(last.rating) ? RATINGS[last.rating] : null;
    return /*#__PURE__*/React.createElement("div", {
      style: S.lastHint
    }, /*#__PURE__*/React.createElement("span", null, "Last time (", formatDateShort(last.date), "): ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: '#EDEAE2'
      }
    }, last.weight, unit), last.sets || last.reps ? ` · ${last.sets ? last.sets + ' × ' : ''}${last.reps ? last.reps : ''}` : ''), r && /*#__PURE__*/React.createElement("span", {
      style: {
        ...S.ratingPill,
        marginLeft: 8,
        color: r.color,
        background: r.bg,
        cursor: 'default'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...S.ratingDot,
        background: r.color,
        width: 7,
        height: 7
      }
    }), r.label));
  })()) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...S.formRow,
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      ...S.label,
      flex: 1
    }
  }, "Distance (", distanceUnit, ")", /*#__PURE__*/React.createElement("input", {
    style: S.input,
    type: "number",
    inputMode: "decimal",
    step: "0.01",
    min: "0",
    value: form.distance,
    onChange: e => setForm(f => ({
      ...f,
      distance: e.target.value
    })),
    placeholder: "0",
    required: true,
    autoFocus: true
  })), /*#__PURE__*/React.createElement("label", {
    style: {
      ...S.label,
      flex: 1
    }
  }, "Minutes", /*#__PURE__*/React.createElement("input", {
    style: S.input,
    type: "number",
    inputMode: "numeric",
    min: "0",
    value: form.durationMin,
    onChange: e => setForm(f => ({
      ...f,
      durationMin: e.target.value
    })),
    placeholder: "0"
  }))), /*#__PURE__*/React.createElement("label", {
    style: S.label
  }, "Route (optional)", /*#__PURE__*/React.createElement("input", {
    style: S.input,
    value: form.route,
    onChange: e => setForm(f => ({
      ...f,
      route: e.target.value
    })),
    placeholder: "e.g. Corrimal loop"
  }))), /*#__PURE__*/React.createElement("div", {
    style: S.label
  }, "How did it go?", /*#__PURE__*/React.createElement(RatingPicker, {
    value: form.rating,
    type: form.type,
    onChange: r => setForm(f => ({
      ...f,
      rating: f.rating === r ? '' : r
    }))
  })), /*#__PURE__*/React.createElement("label", {
    style: S.label
  }, "Date", /*#__PURE__*/React.createElement("input", {
    style: {
      ...S.input,
      width: '100%',
      minWidth: 0,
      WebkitAppearance: 'none',
      appearance: 'none'
    },
    type: "date",
    value: form.date,
    max: todayISO(),
    onChange: e => setForm(f => ({
      ...f,
      date: e.target.value
    }))
  })), /*#__PURE__*/React.createElement("label", {
    style: S.label
  }, "Notes", /*#__PURE__*/React.createElement("textarea", {
    style: {
      ...S.input,
      minHeight: 56,
      resize: 'vertical',
      fontFamily: 'Inter,sans-serif'
    },
    value: form.notes,
    onChange: e => setForm(f => ({
      ...f,
      notes: e.target.value
    })),
    placeholder: "How did it feel?"
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: S.submitBtn
  }, editingId ? 'Save changes' : 'Save workout'), editingId && /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: S.cancelLink,
    onClick: closeForm
  }, "Cancel")))), tplSheet === 'list' && /*#__PURE__*/React.createElement(TemplateListSheet, {
    templates: templates,
    onClose: () => setTplSheet(null),
    onStart: t => setTplSheet({
      session: t
    }),
    onEdit: t => setTplSheet({
      edit: t
    }),
    onNew: () => setTplSheet({
      edit: {
        id: uid(),
        name: '',
        items: []
      },
      isNew: true
    })
  }), tplSheet && tplSheet.edit && /*#__PURE__*/React.createElement(TemplateEditor, {
    initial: tplSheet.edit,
    isNew: !!tplSheet.isNew,
    strengthNames: strengthNames,
    onSave: saveTemplate,
    onDelete: deleteTemplate,
    onCancel: () => setTplSheet('list'),
    nameTaken: name => templates.some(t => t.id !== tplSheet.edit.id && t.name.toLowerCase() === name.toLowerCase())
  }), tplSheet && tplSheet.session && /*#__PURE__*/React.createElement(TemplateSession, {
    template: tplSheet.session,
    lastStrengthSession: lastStrengthSession,
    unit: unit,
    distanceUnit: distanceUnit,
    onSave: logSession,
    onCancel: () => setTplSheet('list')
  }), showData && /*#__PURE__*/React.createElement("div", {
    style: S.modalOverlay,
    onClick: closeData
  }, /*#__PURE__*/React.createElement("div", {
    style: S.modal,
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    style: S.modalHeader
  }, /*#__PURE__*/React.createElement("h2", {
    style: S.modalTitle
  }, "App & data"), /*#__PURE__*/React.createElement("button", {
    style: S.iconBtn,
    onClick: closeData,
    "aria-label": "Close"
  }, /*#__PURE__*/React.createElement(X, {
    size: 18,
    color: "#8A9099"
  }))), /*#__PURE__*/React.createElement("input", {
    ref: fileInputRef,
    type: "file",
    accept: ".json,.csv,application/json,text/csv",
    style: {
      display: 'none'
    },
    onChange: handleFileChosen
  }), !pendingImport ? /*#__PURE__*/React.createElement(React.Fragment, null, !pwa.installed && (pwa.canInstall || pwa.ios) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: S.dataSectionLabel
  }, "Install"), pwa.canInstall ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    style: S.dataHint
  }, "Add IronLog to your home screen. It opens full screen and works offline at the gym."), /*#__PURE__*/React.createElement("button", {
    style: {
      ...S.dataBtn,
      width: '100%',
      marginBottom: 22
    },
    onClick: pwa.promptInstall
  }, /*#__PURE__*/React.createElement(Smartphone, {
    size: 16
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Install IronLog"), /*#__PURE__*/React.createElement("small", {
    style: S.dataBtnSub
  }, "Adds an app icon to your phone")))) : /*#__PURE__*/React.createElement("div", {
    style: S.iosSteps
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      ...S.dataHint,
      marginBottom: 8
    }
  }, "On iPhone, install it from Safari:"), /*#__PURE__*/React.createElement("ol", {
    style: S.iosList
  }, /*#__PURE__*/React.createElement("li", null, "Tap ", /*#__PURE__*/React.createElement(Share, {
    size: 14,
    style: {
      verticalAlign: -2,
      margin: '0 2px'
    }
  }), " ", /*#__PURE__*/React.createElement("strong", null, "Share"), " in Safari's toolbar"), /*#__PURE__*/React.createElement("li", null, "Choose ", /*#__PURE__*/React.createElement("strong", null, "Add to Home Screen")), /*#__PURE__*/React.createElement("li", null, "Tap ", /*#__PURE__*/React.createElement("strong", null, "Add"))), /*#__PURE__*/React.createElement("p", {
    style: {
      ...S.dataHint,
      margin: '8px 0 0'
    }
  }, "The home screen app keeps its own data. Export a backup here first, then import it in the app."))), /*#__PURE__*/React.createElement("div", {
    style: S.dataSectionLabel
  }, "Export"), /*#__PURE__*/React.createElement("p", {
    style: S.dataHint
  }, workouts.length, " ", workouts.length === 1 ? 'entry' : 'entries', " saved on this device."), /*#__PURE__*/React.createElement("div", {
    style: S.dataBtnRow
  }, /*#__PURE__*/React.createElement("button", {
    style: S.dataBtn,
    onClick: exportJSON,
    disabled: !workouts.length
  }, /*#__PURE__*/React.createElement(Download, {
    size: 16
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Backup"), /*#__PURE__*/React.createElement("small", {
    style: S.dataBtnSub
  }, ".json — full restore"))), /*#__PURE__*/React.createElement("button", {
    style: S.dataBtn,
    onClick: exportCSV,
    disabled: !workouts.length
  }, /*#__PURE__*/React.createElement(Download, {
    size: 16
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Spreadsheet"), /*#__PURE__*/React.createElement("small", {
    style: S.dataBtnSub
  }, ".csv — Excel / Sheets")))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...S.dataSectionLabel,
      marginTop: 22
    }
  }, "Import"), /*#__PURE__*/React.createElement("p", {
    style: S.dataHint
  }, "Load a backup or CSV from another device. Duplicate sessions are skipped automatically."), /*#__PURE__*/React.createElement("button", {
    style: {
      ...S.dataBtn,
      width: '100%'
    },
    onClick: () => fileInputRef.current && fileInputRef.current.click()
  }, /*#__PURE__*/React.createElement(Upload, {
    size: 16
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Choose file"), /*#__PURE__*/React.createElement("small", {
    style: S.dataBtnSub
  }, ".json or .csv"))), importError && /*#__PURE__*/React.createElement("p", {
    style: S.dataError
  }, importError)) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: S.dataSectionLabel
  }, "Import ", pendingImport.filename), /*#__PURE__*/React.createElement("div", {
    style: S.importSummary
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: S.importNum
  }, pendingImport.entries.length), " entries in file"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      ...S.importNum,
      color: '#4FA876'
    }
  }, pendingImport.newCount), " new"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      ...S.importNum,
      color: '#8A9099'
    }
  }, pendingImport.dupCount), " already logged")), pendingImport.newTemplates && pendingImport.newTemplates.length > 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      ...S.dataHint,
      marginTop: -4
    }
  }, "Also adds ", pendingImport.newTemplates.length, " workout ", pendingImport.newTemplates.length === 1 ? 'template' : 'templates', "."), /*#__PURE__*/React.createElement("button", {
    style: {
      ...S.submitBtn,
      width: '100%',
      marginTop: 0,
      opacity: pendingImport.newCount || (pendingImport.newTemplates || []).length ? 1 : 0.4
    },
    onClick: () => confirmImport('merge'),
    disabled: !pendingImport.newCount && !(pendingImport.newTemplates || []).length
  }, !pendingImport.newCount && (pendingImport.newTemplates || []).length ? 'Add templates' : pendingImport.newCount ? `Add ${pendingImport.newCount} new ${pendingImport.newCount === 1 ? 'entry' : 'entries'}` : 'Nothing new to add'), /*#__PURE__*/React.createElement("button", {
    style: S.replaceBtn,
    onClick: () => {
      if (window.confirm(`Replace all ${workouts.length} current entries with the ${pendingImport.entries.length} in this file? This can't be undone.`)) confirmImport('replace');
    }
  }, "Replace everything with this file"), /*#__PURE__*/React.createElement("button", {
    style: S.cancelLink,
    onClick: () => setPendingImport(null)
  }, "Cancel")))), toast && /*#__PURE__*/React.createElement("div", {
    style: S.toast
  }, toast.startsWith('New PR') && /*#__PURE__*/React.createElement(Flame, {
    size: 16,
    color: "#E8472B",
    style: {
      marginRight: 8
    }
  }), toast.startsWith('3 easy') && /*#__PURE__*/React.createElement(TrendingUp, {
    size: 16,
    color: "#4FA876",
    style: {
      marginRight: 8
    }
  }), toast))));
}

// ─── Rating UI ────────────────────────────────────────────────────────────────
function RatingPicker({
  value,
  type,
  onChange,
  compact
}) {
  const selected = isRating(value) ? RATINGS[value] : null;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: S.ratingRow
  }, RATING_ORDER.map(k => {
    const r = RATINGS[k];
    const on = value === k;
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      type: "button",
      onClick: e => {
        e.stopPropagation();
        onChange(k);
      },
      "aria-pressed": on,
      style: {
        ...S.ratingBtn,
        ...(compact ? S.ratingBtnCompact : {}),
        ...(on ? {
          background: r.bg,
          border: `1px solid ${r.color}`,
          color: '#EDEAE2'
        } : {})
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...S.ratingDot,
        background: r.color,
        opacity: on || !value ? 1 : 0.45
      }
    }), r.label);
  })), !compact && /*#__PURE__*/React.createElement("div", {
    style: S.ratingDesc
  }, selected ? selected[type === 'run' ? 'run' : 'strength'] : 'Optional — you can rate it later by tapping the entry.'));
}

// Compact history of recent ratings, oldest → newest left to right.
function RatingStrip({
  entriesNewestFirst,
  distanceUnit,
  unit
}) {
  const items = entriesNewestFirst.slice(0, 12).reverse();
  if (!items.some(e => isRating(e.rating))) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: S.stripWrap
  }, /*#__PURE__*/React.createElement("div", {
    style: S.stripLabel
  }, "Last ", items.length, " sessions"), /*#__PURE__*/React.createElement("div", {
    style: S.strip
  }, items.map(e => {
    const r = isRating(e.rating) ? RATINGS[e.rating] : null;
    const detail = e.type === 'run' ? `${e.distance}${distanceUnit}` : `${e.weight}${unit}`;
    return /*#__PURE__*/React.createElement("div", {
      key: e.id,
      title: `${formatDate(e.date)} · ${detail} · ${r ? r.label : 'Not rated'}`,
      style: {
        ...S.stripCell,
        background: r ? r.color : 'transparent',
        border: r ? 'none' : '1px dashed #3A3F45'
      }
    });
  })), /*#__PURE__*/React.createElement("div", {
    style: S.stripLegend
  }, RATING_ORDER.map(k => /*#__PURE__*/React.createElement("span", {
    key: k,
    style: S.legendItem
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...S.ratingDot,
      background: RATINGS[k].color
    }
  }), RATINGS[k].label))));
}
function AdviceBanner({
  advice
}) {
  if (!advice) return null;
  const r = RATINGS[advice.tone];
  const IconC = advice.tone === 'easy' ? TrendingUp : advice.tone === 'missed' ? Minus : Award;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...S.trendBanner,
      border: `1px solid ${r.color}`,
      background: r.bg,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(IconC, {
    size: 16,
    color: r.color
  }), /*#__PURE__*/React.createElement("span", {
    style: S.trendBannerText
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#EDEAE2'
    }
  }, advice.title, "."), " ", advice.text));
}

// ─── WorkoutRow ───────────────────────────────────────────────────────────────
function WorkoutRow({
  w,
  unit,
  distanceUnit,
  pr,
  onDelete,
  onView,
  hideDate
}) {
  const onRate = React.useContext(RateContext);
  const onEdit = React.useContext(EditContext);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [rating, setRating] = useState(false);
  const isRun = w.type === 'run';
  const pace = isRun ? paceSecondsPerUnit(w.distance, w.durationSeconds) : null;
  const r = isRating(w.rating) ? RATINGS[w.rating] : null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...S.row,
      borderLeft: `4px solid ${r ? r.color : '#2C3036'}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: S.rowMain,
    onClick: () => onView(w.type, w.exercise)
  }, /*#__PURE__*/React.createElement("div", {
    style: S.rowTop
  }, isRun ? /*#__PURE__*/React.createElement(Footprints, {
    size: 13,
    color: "#5B6470",
    style: {
      marginRight: 2
    }
  }) : /*#__PURE__*/React.createElement(Dumbbell, {
    size: 13,
    color: "#5B6470",
    style: {
      marginRight: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: S.exerciseName
  }, w.exercise), pr && /*#__PURE__*/React.createElement("span", {
    style: S.prBadge
  }, /*#__PURE__*/React.createElement(Flame, {
    size: 11,
    style: {
      marginRight: 3
    }
  }), " PR"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": r ? `Rated ${r.label}, tap to change` : 'Rate this session',
    onClick: e => {
      e.stopPropagation();
      setRating(v => !v);
    },
    style: r ? {
      ...S.ratingPill,
      color: r.color,
      background: r.bg
    } : S.ratingPillEmpty
  }, r ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      ...S.ratingDot,
      background: r.color,
      width: 7,
      height: 7
    }
  }), r.label) : '+ Rate')), /*#__PURE__*/React.createElement("div", {
    style: S.rowMeta
  }, isRun ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: S.weightVal
  }, w.distance, /*#__PURE__*/React.createElement("span", {
    style: S.unitSm
  }, distanceUnit)), /*#__PURE__*/React.createElement("span", {
    style: S.repsVal
  }, formatDuration(w.durationSeconds)), pace != null && /*#__PURE__*/React.createElement("span", {
    style: S.repsVal
  }, formatPace(pace, distanceUnit), " pace")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: S.weightVal
  }, w.weight, /*#__PURE__*/React.createElement("span", {
    style: S.unitSm
  }, unit)), (w.sets || w.reps) && /*#__PURE__*/React.createElement("span", {
    style: S.repsVal
  }, w.sets ? `${w.sets} × ` : '', w.reps ? `${w.reps} reps` : '')), !hideDate && /*#__PURE__*/React.createElement("span", {
    style: S.dateVal
  }, formatDate(w.date))), w.notes && /*#__PURE__*/React.createElement("div", {
    style: S.noteText
  }, w.notes), rating && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement(RatingPicker, {
    compact: true,
    value: w.rating,
    type: w.type,
    onChange: k => {
      onRate(w.id, w.rating === k ? null : k);
      setRating(false);
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: S.rowActions
  }, confirmDelete ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: S.confirmBtn,
    onClick: () => onDelete(w.id)
  }, "Delete"), /*#__PURE__*/React.createElement("button", {
    style: S.cancelBtn,
    onClick: () => setConfirmDelete(false)
  }, "Cancel")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    style: S.iconBtnGhost,
    onClick: e => {
      e.stopPropagation();
      onEdit(w.id);
    },
    "aria-label": "Edit entry"
  }, /*#__PURE__*/React.createElement(Pencil, {
    size: 15,
    color: "#5B6470"
  })), /*#__PURE__*/React.createElement("button", {
    style: S.iconBtnGhost,
    onClick: e => {
      e.stopPropagation();
      setConfirmDelete(true);
    },
    "aria-label": "Delete"
  }, /*#__PURE__*/React.createElement(Trash2, {
    size: 15,
    color: "#5B6470"
  }))), /*#__PURE__*/React.createElement(ChevronRight, {
    size: 16,
    color: "#3A3F45"
  })));
}
function dayHeading(iso) {
  const today = todayISO();
  const y = new Date();
  y.setDate(y.getDate() - 1);
  if (iso === today) return 'Today';
  if (iso === toISO(y)) return 'Yesterday';
  const d = parseISO(iso);
  const sameYear = d.getFullYear() === new Date().getFullYear();
  return d.toLocaleDateString('en-AU', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    ...(sameYear ? {} : {
      year: 'numeric'
    })
  });
}
function DayGroup({
  day,
  unit,
  distanceUnit,
  isPR,
  onDelete,
  onView,
  onSaveTemplate
}) {
  const lifts = day.items.filter(w => w.type !== 'run').length;
  const runs = day.items.length - lifts;
  const parts = [];
  if (lifts) parts.push(`${lifts} ${lifts === 1 ? 'exercise' : 'exercises'}`);
  if (runs) parts.push(`${runs} ${runs === 1 ? 'run' : 'runs'}`);
  const isToday = day.date === todayISO();
  return /*#__PURE__*/React.createElement("div", {
    style: S.dayGroup
  }, /*#__PURE__*/React.createElement("div", {
    style: S.dayHeader
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...S.dayTitle,
      color: isToday ? '#E8472B' : '#EDEAE2'
    }
  }, isToday && /*#__PURE__*/React.createElement(Calendar, {
    size: 13,
    color: "#E8472B",
    style: {
      marginRight: 6,
      verticalAlign: -1
    }
  }), dayHeading(day.date)), /*#__PURE__*/React.createElement("span", {
    style: S.daySummary
  }, onSaveTemplate && day.items.length > 1 && /*#__PURE__*/React.createElement("button", {
    style: S.daySaveBtn,
    onClick: () => onSaveTemplate(day),
    "aria-label": "Save this day as a template",
    title: "Save as template"
  }, /*#__PURE__*/React.createElement(BookmarkPlus, {
    size: 14,
    color: "#8A9099"
  })), parts.join(' · '), /*#__PURE__*/React.createElement("span", {
    style: S.dayDots
  }, day.items.map(w => {
    const r = isRating(w.rating) ? RATINGS[w.rating] : null;
    return /*#__PURE__*/React.createElement("span", {
      key: w.id,
      style: {
        ...S.ratingDot,
        width: 7,
        height: 7,
        background: r ? r.color : 'transparent',
        border: r ? 'none' : '1px solid #3A3F45'
      }
    });
  })))), day.items.map(w => /*#__PURE__*/React.createElement(WorkoutRow, {
    key: w.id,
    w: w,
    unit: unit,
    distanceUnit: distanceUnit,
    pr: isPR(w),
    onDelete: onDelete,
    onView: onView,
    hideDate: true
  })));
}

// ─── Exercise picker ──────────────────────────────────────────────────────────
// A dropdown of known exercises (A–Z) with "Add new exercise" at the end, which swaps to a text box.
const NEW_EXERCISE = '__new__';
function ExercisePicker({
  id,
  names,
  value,
  onChange,
  compact,
  label = 'Exercise'
}) {
  const known = names.find(n => n.toLowerCase() === (value || '').trim().toLowerCase());
  // Start typing straight away when there's nothing to pick from, or the value isn't on the list.
  const [adding, setAdding] = useState(() => names.length === 0 || !!value && !known);
  const pad = compact ? '8px 10px' : '10px 12px';
  if (adding) return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: id,
    style: {
      ...S.input,
      flex: 1,
      minWidth: 0,
      padding: pad
    },
    value: value,
    onChange: e => onChange(e.target.value),
    placeholder: "New exercise, e.g. Bench Press",
    "aria-label": label,
    autoFocus: !compact || !value,
    required: true
  }), names.length > 0 && /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: {
      ...S.pickBack,
      padding: compact ? '0 10px' : '0 12px'
    },
    onClick: () => {
      setAdding(false);
      onChange('');
    },
    "aria-label": "Choose from your exercises"
  }, "List"));
  return /*#__PURE__*/React.createElement("div", {
    style: S.selectWrap
  }, /*#__PURE__*/React.createElement("select", {
    id: id,
    style: {
      ...S.input,
      ...S.pickSelect,
      padding: compact ? '8px 34px 8px 10px' : '10px 38px 10px 12px'
    },
    value: known || '',
    "aria-label": label,
    required: true,
    onChange: e => {
      if (e.target.value === NEW_EXERCISE) {
        setAdding(true);
        onChange('');
      } else onChange(e.target.value);
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, "Choose an exercise"), names.map(n => /*#__PURE__*/React.createElement("option", {
    key: n,
    value: n
  }, n)), /*#__PURE__*/React.createElement("option", {
    value: NEW_EXERCISE
  }, "+ Add new exercise…")), /*#__PURE__*/React.createElement("span", {
    style: {
      ...S.selectChevron,
      right: compact ? 10 : 12
    }
  }, /*#__PURE__*/React.createElement(ChevronDown, {
    size: 16,
    color: "#8A9099"
  })));
}

// ─── Workout templates ────────────────────────────────────────────────────────
function Sheet({
  title,
  onClose,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: S.modalOverlay,
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    style: S.modal,
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    style: S.modalHeader
  }, /*#__PURE__*/React.createElement("h2", {
    style: S.modalTitle
  }, title), /*#__PURE__*/React.createElement("button", {
    style: S.iconBtn,
    onClick: onClose,
    "aria-label": "Close"
  }, /*#__PURE__*/React.createElement(X, {
    size: 18,
    color: "#8A9099"
  }))), children));
}
function TemplateListSheet({
  templates,
  onStart,
  onEdit,
  onNew,
  onClose
}) {
  return /*#__PURE__*/React.createElement(Sheet, {
    title: "Workouts",
    onClose: onClose
  }, templates.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: S.dataHint
  }, "A template is a saved list of exercises, like \"Push day\". Start one at the gym and log every exercise in one go, with weights filled in from last time."), templates.map(t => {
    const lifts = t.items.filter(i => i.type !== 'run');
    const hasRun = t.items.some(i => i.type === 'run');
    return /*#__PURE__*/React.createElement("div", {
      key: t.id,
      style: S.tplCard
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: S.tplName
    }, t.name), /*#__PURE__*/React.createElement("div", {
      style: S.tplMeta
    }, [...lifts.map(i => i.exercise), ...(hasRun ? ['Run'] : [])].join(' · '))), /*#__PURE__*/React.createElement("button", {
      style: S.iconBtnGhost,
      onClick: () => onEdit(t),
      "aria-label": `Edit ${t.name}`
    }, /*#__PURE__*/React.createElement(Pencil, {
      size: 16,
      color: "#8A9099"
    })), /*#__PURE__*/React.createElement("button", {
      style: S.tplStart,
      onClick: () => onStart(t)
    }, /*#__PURE__*/React.createElement(Play, {
      size: 13,
      color: "#14161A",
      style: {
        marginRight: 5
      }
    }), "Start"));
  }), /*#__PURE__*/React.createElement("button", {
    style: {
      ...S.dataBtn,
      width: '100%',
      marginTop: templates.length ? 6 : 0,
      justifyContent: 'center'
    },
    onClick: onNew
  }, /*#__PURE__*/React.createElement(Plus, {
    size: 16
  }), /*#__PURE__*/React.createElement("strong", null, "New template")), templates.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      ...S.dataHint,
      marginTop: 12
    }
  }, "Tip: on the Log tab, tap the bookmark next to any past day to turn that session into a template."));
}
function TemplateEditor({
  initial,
  isNew,
  strengthNames,
  onSave,
  onDelete,
  onCancel,
  nameTaken
}) {
  const [name, setName] = useState(initial.name || '');
  const [items, setItems] = useState(initial.items.map(i => ({
    ...i,
    reps: i.reps ?? '',
    sets: i.sets ?? ''
  })));
  const [error, setError] = useState(null);
  const [confirmDel, setConfirmDel] = useState(false);
  const update = (key, patch) => setItems(list => list.map(i => i.key === key ? {
    ...i,
    ...patch
  } : i));
  const move = (idx, dir) => setItems(list => {
    const next = list.slice();
    const j = idx + dir;
    if (j < 0 || j >= next.length) return list;
    [next[idx], next[j]] = [next[j], next[idx]];
    return next;
  });
  const addLift = () => setItems(list => [...list, {
    key: uid(),
    type: 'strength',
    exercise: '',
    reps: '10',
    sets: '3'
  }]);
  const addRun = () => setItems(list => [...list, {
    key: uid(),
    type: 'run',
    exercise: 'Run',
    reps: null,
    sets: null
  }]);
  function save() {
    const clean = items.filter(i => i.type === 'run' || i.exercise.trim());
    if (!name.trim()) return setError('Give the template a name.');
    if (nameTaken(name.trim())) return setError('You already have a template with that name.');
    if (!clean.length) return setError('Add at least one exercise.');
    onSave({
      id: initial.id,
      name: name.trim(),
      items: clean.map(i => ({
        key: i.key,
        type: i.type,
        exercise: i.type === 'run' ? 'Run' : i.exercise.trim(),
        reps: i.type === 'run' ? null : num(i.reps) ?? null,
        sets: i.type === 'run' ? null : num(i.sets) ?? null
      }))
    });
  }
  return /*#__PURE__*/React.createElement(Sheet, {
    title: isNew ? 'New template' : 'Edit template',
    onClose: onCancel
  }, /*#__PURE__*/React.createElement("div", {
    style: S.form
  }, /*#__PURE__*/React.createElement("label", {
    style: S.label
  }, "Name", /*#__PURE__*/React.createElement("input", {
    style: S.input,
    value: name,
    onChange: e => {
      setName(e.target.value);
      setError(null);
    },
    placeholder: "e.g. Push day",
    autoFocus: isNew
  })), /*#__PURE__*/React.createElement("div", {
    style: S.label
  }, "Exercises"), items.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      ...S.dataHint,
      marginTop: -8
    }
  }, "No exercises yet — add some below."), items.map((it, idx) => /*#__PURE__*/React.createElement("div", {
    key: it.key,
    style: S.tplItem
  }, /*#__PURE__*/React.createElement("div", {
    style: S.tplItemTop
  }, /*#__PURE__*/React.createElement("span", {
    style: S.tplIndex
  }, idx + 1), it.type === 'run' ? /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(Footprints, {
    size: 14,
    color: "#8A9099"
  }), "Run") : /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(ExercisePicker, {
    compact: true,
    id: `tpl-ex-${it.key}`,
    names: strengthNames,
    value: it.exercise,
    onChange: v => update(it.key, {
      exercise: v
    }),
    label: `Exercise ${idx + 1}`
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: S.iconBtnGhost,
    onClick: () => move(idx, -1),
    disabled: idx === 0,
    "aria-label": "Move up"
  }, /*#__PURE__*/React.createElement(ArrowUp, {
    size: 15,
    color: idx === 0 ? '#2C3036' : '#8A9099'
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: S.iconBtnGhost,
    onClick: () => move(idx, 1),
    disabled: idx === items.length - 1,
    "aria-label": "Move down"
  }, /*#__PURE__*/React.createElement(ChevronDown, {
    size: 15,
    color: idx === items.length - 1 ? '#2C3036' : '#8A9099'
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: S.iconBtnGhost,
    onClick: () => setItems(list => list.filter(i => i.key !== it.key)),
    "aria-label": "Remove"
  }, /*#__PURE__*/React.createElement(X, {
    size: 15,
    color: "#8A9099"
  }))), it.type === 'run' ? /*#__PURE__*/React.createElement("div", {
    style: S.tplItemNote
  }, "Distance and time are entered when you log.") : /*#__PURE__*/React.createElement("div", {
    style: {
      ...S.formRow,
      gap: 6,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      ...S.label,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8
    }
  }, "Reps", /*#__PURE__*/React.createElement("input", {
    style: {
      ...S.input,
      padding: '7px 10px'
    },
    type: "number",
    inputMode: "numeric",
    min: "0",
    value: it.reps,
    onChange: e => update(it.key, {
      reps: e.target.value
    })
  })), /*#__PURE__*/React.createElement("label", {
    style: {
      ...S.label,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8
    }
  }, "Sets", /*#__PURE__*/React.createElement("input", {
    style: {
      ...S.input,
      padding: '7px 10px'
    },
    type: "number",
    inputMode: "numeric",
    min: "0",
    value: it.sets,
    onChange: e => update(it.key, {
      sets: e.target.value
    })
  }))))), /*#__PURE__*/React.createElement("div", {
    style: S.dataBtnRow
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: {
      ...S.dataBtn,
      justifyContent: 'center'
    },
    onClick: addLift
  }, /*#__PURE__*/React.createElement(Dumbbell, {
    size: 15
  }), /*#__PURE__*/React.createElement("strong", null, "Add exercise")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: {
      ...S.dataBtn,
      justifyContent: 'center'
    },
    onClick: addRun
  }, /*#__PURE__*/React.createElement(Footprints, {
    size: 15
  }), /*#__PURE__*/React.createElement("strong", null, "Add run"))), error && /*#__PURE__*/React.createElement("p", {
    style: {
      ...S.dataError,
      margin: 0
    }
  }, error), /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: S.submitBtn,
    onClick: save
  }, isNew ? 'Save template' : 'Save changes'), !isNew && (confirmDel ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: {
      ...S.replaceBtn,
      marginTop: 0
    },
    onClick: () => onDelete(initial.id)
  }, "Yes, delete \"", initial.name, "\""), /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: {
      ...S.cancelLink,
      marginTop: 0,
      width: 'auto'
    },
    onClick: () => setConfirmDel(false)
  }, "Keep")) : /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: {
      ...S.cancelLink,
      color: '#D9534A'
    },
    onClick: () => setConfirmDel(true)
  }, "Delete template"))));
}
function TemplateSession({
  template,
  lastStrengthSession,
  unit,
  distanceUnit,
  onSave,
  onCancel
}) {
  const [date, setDate] = useState(todayISO());
  const [rows, setRows] = useState(() => template.items.map(it => {
    const last = it.type === 'run' ? null : lastStrengthSession(it.exercise);
    return {
      key: it.key,
      type: it.type,
      exercise: it.exercise,
      last,
      skip: false,
      rating: '',
      weight: last && last.weight != null ? String(last.weight) : '',
      reps: it.reps != null ? String(it.reps) : '',
      sets: it.sets != null ? String(it.sets) : '',
      distance: '',
      durationMin: '',
      route: ''
    };
  }));
  const [error, setError] = useState(null);
  const update = (key, patch) => {
    setError(null);
    setRows(list => list.map(r => r.key === key ? {
      ...r,
      ...patch
    } : r));
  };
  const active = rows.filter(r => !r.skip);
  function save() {
    const missing = active.find(r => r.type === 'run' ? !(r.distance && r.durationMin) : !r.weight);
    if (!active.length) return setError('Everything is skipped — nothing to log.');
    if (missing) return setError(missing.type === 'run' ? 'Add distance and minutes for the run, or skip it.' : `Add a weight for ${missing.exercise}, or skip it.`);
    onSave(active, date);
  }
  return /*#__PURE__*/React.createElement(Sheet, {
    title: template.name,
    onClose: onCancel
  }, /*#__PURE__*/React.createElement("div", {
    style: S.form
  }, /*#__PURE__*/React.createElement("label", {
    style: S.label
  }, "Date", /*#__PURE__*/React.createElement("input", {
    style: {
      ...S.input,
      width: '100%',
      minWidth: 0,
      WebkitAppearance: 'none',
      appearance: 'none'
    },
    type: "date",
    value: date,
    max: todayISO(),
    onChange: e => setDate(e.target.value)
  })), rows.map(r => {
    const lr = r.last && isRating(r.last.rating) ? RATINGS[r.last.rating] : null;
    return /*#__PURE__*/React.createElement("div", {
      key: r.key,
      style: {
        ...S.tplItem,
        opacity: r.skip ? 0.45 : 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: S.tplItemTop
    }, r.type === 'run' ? /*#__PURE__*/React.createElement(Footprints, {
      size: 15,
      color: "#8A9099"
    }) : /*#__PURE__*/React.createElement(Dumbbell, {
      size: 15,
      color: "#8A9099"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontWeight: 600,
        fontSize: 14.5
      }
    }, r.exercise), /*#__PURE__*/React.createElement("button", {
      type: "button",
      style: {
        ...S.skipBtn,
        ...(r.skip ? S.skipBtnOn : {})
      },
      onClick: () => update(r.key, {
        skip: !r.skip
      })
    }, r.skip ? 'Skipped' : 'Skip')), !r.skip && /*#__PURE__*/React.createElement(React.Fragment, null, r.type !== 'run' && /*#__PURE__*/React.createElement("div", {
      style: {
        ...S.lastHint,
        marginTop: 6
      }
    }, r.last ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, "Last (", formatDateShort(r.last.date), "): ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: '#EDEAE2'
      }
    }, r.last.weight, unit)), lr && /*#__PURE__*/React.createElement("span", {
      style: {
        ...S.ratingPill,
        marginLeft: 6,
        color: lr.color,
        background: lr.bg,
        cursor: 'default'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...S.ratingDot,
        background: lr.color,
        width: 7,
        height: 7
      }
    }), lr.label)) : /*#__PURE__*/React.createElement("span", null, "First time — enter a starting weight.")), r.type === 'run' ? /*#__PURE__*/React.createElement("div", {
      style: {
        ...S.formRow,
        gap: 6,
        marginTop: 10
      }
    }, /*#__PURE__*/React.createElement("label", {
      style: {
        ...S.label,
        flex: 1
      }
    }, "Distance (", distanceUnit, ")", /*#__PURE__*/React.createElement("input", {
      style: S.input,
      type: "number",
      inputMode: "decimal",
      step: "0.01",
      min: "0",
      value: r.distance,
      onChange: e => update(r.key, {
        distance: e.target.value
      }),
      placeholder: "0"
    })), /*#__PURE__*/React.createElement("label", {
      style: {
        ...S.label,
        flex: 1
      }
    }, "Minutes", /*#__PURE__*/React.createElement("input", {
      style: S.input,
      type: "number",
      inputMode: "numeric",
      min: "0",
      value: r.durationMin,
      onChange: e => update(r.key, {
        durationMin: e.target.value
      }),
      placeholder: "0"
    }))) : /*#__PURE__*/React.createElement("div", {
      style: {
        ...S.formRow,
        gap: 6,
        marginTop: 10
      }
    }, /*#__PURE__*/React.createElement("label", {
      style: {
        ...S.label,
        flex: '0 0 38%'
      }
    }, "Weight (", unit, ")", /*#__PURE__*/React.createElement("input", {
      style: S.input,
      type: "number",
      inputMode: "decimal",
      step: "0.5",
      min: "0",
      value: r.weight,
      onChange: e => update(r.key, {
        weight: e.target.value
      }),
      placeholder: "0"
    })), /*#__PURE__*/React.createElement("label", {
      style: {
        ...S.label,
        flex: 1
      }
    }, "Reps", /*#__PURE__*/React.createElement("input", {
      style: S.input,
      type: "number",
      inputMode: "numeric",
      min: "0",
      value: r.reps,
      onChange: e => update(r.key, {
        reps: e.target.value
      }),
      placeholder: "—"
    })), /*#__PURE__*/React.createElement("label", {
      style: {
        ...S.label,
        flex: 1
      }
    }, "Sets", /*#__PURE__*/React.createElement("input", {
      style: S.input,
      type: "number",
      inputMode: "numeric",
      min: "0",
      value: r.sets,
      onChange: e => update(r.key, {
        sets: e.target.value
      }),
      placeholder: "—"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 10
      }
    }, /*#__PURE__*/React.createElement(RatingPicker, {
      compact: true,
      value: r.rating,
      type: r.type,
      onChange: k => update(r.key, {
        rating: r.rating === k ? '' : k
      })
    }))));
  }), error && /*#__PURE__*/React.createElement("p", {
    style: {
      ...S.dataError,
      margin: 0
    }
  }, error), /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: S.submitBtn,
    onClick: save
  }, "Log ", active.length, " ", active.length === 1 ? 'exercise' : 'exercises')));
}

// ─── Personal records ─────────────────────────────────────────────────────────
// Epley estimate of a one-rep max from a working set.
const est1RM = (w, reps) => w && reps ? w * (1 + reps / 30) : w || 0;
const round1 = n => Math.round(n * 10) / 10;
function computeRecords(workouts) {
  const chrono = [...workouts].sort((a, b) => a.date < b.date ? -1 : a.date > b.date ? 1 : a.createdAt - b.createdAt);
  const lifts = new Map();
  const events = [];
  const run = {
    count: 0,
    total: 0,
    fastest: null,
    longest: null,
    longestTime: null
  };
  chrono.forEach(w => {
    if (w.type === 'run') {
      run.count++;
      run.total += w.distance || 0;
      const pace = paceSecondsPerUnit(w.distance, w.durationSeconds);
      if (pace != null && (!run.fastest || pace < run.fastest.pace)) {
        if (run.fastest) events.push({
          id: w.id,
          date: w.date,
          type: 'run',
          exercise: 'Run',
          label: 'Fastest pace',
          from: run.fastest.pace,
          to: pace
        });
        run.fastest = {
          pace,
          w
        };
      }
      if (w.distance && (!run.longest || w.distance > run.longest.distance)) {
        if (run.longest) events.push({
          id: w.id + 'd',
          date: w.date,
          type: 'run',
          exercise: 'Run',
          label: 'Longest run',
          from: run.longest.distance,
          to: w.distance
        });
        run.longest = w;
      }
      if (w.durationSeconds && (!run.longestTime || w.durationSeconds > run.longestTime.durationSeconds)) run.longestTime = w;
      return;
    }
    const key = (w.exercise || '').toLowerCase();
    let r = lifts.get(key);
    if (!r) {
      r = {
        name: w.exercise,
        sessions: 0,
        heaviest: null,
        best1RM: null,
        bestVolume: null,
        lastDate: null,
        lastPR: null
      };
      lifts.set(key, r);
    }
    r.sessions++;
    r.lastDate = w.date;
    if (!r.heaviest || w.weight > r.heaviest.weight || w.weight === r.heaviest.weight && (w.reps || 0) > (r.heaviest.reps || 0)) {
      if (r.heaviest && w.weight > r.heaviest.weight) {
        events.push({
          id: w.id,
          date: w.date,
          type: 'strength',
          exercise: r.name,
          label: 'Heaviest',
          from: r.heaviest.weight,
          to: w.weight
        });
        r.lastPR = w.date;
      }
      r.heaviest = w;
    }
    const e1 = est1RM(w.weight, w.reps);
    if (!r.best1RM || e1 > r.best1RM.value) r.best1RM = {
      value: e1,
      w
    };
    const vol = (w.weight || 0) * (w.reps || 1) * (w.sets || 1);
    if (!r.bestVolume || vol > r.bestVolume.value) r.bestVolume = {
      value: vol,
      w
    };
  });
  return {
    lifts: [...lifts.values()].sort((a, b) => a.lastDate < b.lastDate ? 1 : a.lastDate > b.lastDate ? -1 : a.name.localeCompare(b.name)),
    run,
    events: events.reverse()
  };
}
function daysAgo(iso) {
  const ms = parseISO(todayISO()) - parseISO(iso);
  return Math.round(ms / 86400000);
}
function RecordsView({
  workouts,
  unit,
  distanceUnit,
  onView
}) {
  const rec = useMemo(() => computeRecords(workouts), [workouts]);
  const prs30 = rec.events.filter(e => daysAgo(e.date) <= 30).length;
  const days = new Set(workouts.map(w => w.date)).size;
  if (!workouts.length) return /*#__PURE__*/React.createElement("div", {
    style: S.empty
  }, /*#__PURE__*/React.createElement(Trophy, {
    size: 26,
    color: "#3A3F45"
  }), /*#__PURE__*/React.createElement("p", {
    style: S.emptyText
  }, "Your personal bests will show up here once you start logging."));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: S.statRow
  }, /*#__PURE__*/React.createElement("div", {
    style: S.statCard
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...S.statNum,
      color: '#E8472B'
    }
  }, prs30), /*#__PURE__*/React.createElement("div", {
    style: S.statLabel
  }, "PRs · 30 days")), /*#__PURE__*/React.createElement("div", {
    style: S.statCard
  }, /*#__PURE__*/React.createElement("div", {
    style: S.statNum
  }, rec.lifts.length), /*#__PURE__*/React.createElement("div", {
    style: S.statLabel
  }, "Lifts tracked")), /*#__PURE__*/React.createElement("div", {
    style: S.statCard
  }, /*#__PURE__*/React.createElement("div", {
    style: S.statNum
  }, days), /*#__PURE__*/React.createElement("div", {
    style: S.statLabel
  }, "Days trained"))), rec.events.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: S.sectionBlock
  }, /*#__PURE__*/React.createElement("div", {
    style: S.sectionHeading
  }, /*#__PURE__*/React.createElement(Flame, {
    size: 14,
    color: "#E8472B"
  }), /*#__PURE__*/React.createElement("span", null, "RECENT PRS")), /*#__PURE__*/React.createElement("div", {
    style: S.prList
  }, rec.events.slice(0, 6).map(e => {
    const isPace = e.label === 'Fastest pace';
    const fmt = v => isPace ? formatPace(v, distanceUnit) : e.type === 'run' ? `${round1(v)}${distanceUnit}` : `${v}${unit}`;
    const diff = isPace ? `−${formatDuration(e.from - e.to)}` : `+${round1(e.to - e.from)}`;
    return /*#__PURE__*/React.createElement("button", {
      key: e.id,
      style: S.prRow,
      onClick: () => onView(e.type, e.exercise)
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0,
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        display: 'block',
        fontSize: 14
      }
    }, e.exercise, e.type === 'run' ? ` · ${e.label.toLowerCase()}` : ''), /*#__PURE__*/React.createElement("small", {
      style: S.dataBtnSub
    }, dayHeading(e.date))), /*#__PURE__*/React.createElement("span", {
      style: S.prChange
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#5B6470'
      }
    }, fmt(e.from)), " → ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: '#EDEAE2'
      }
    }, fmt(e.to)), /*#__PURE__*/React.createElement("span", {
      style: S.prDelta
    }, diff)));
  }))), rec.lifts.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: S.sectionBlock
  }, /*#__PURE__*/React.createElement("div", {
    style: S.sectionHeading
  }, /*#__PURE__*/React.createElement(Dumbbell, {
    size: 14,
    color: "#E8472B"
  }), /*#__PURE__*/React.createElement("span", null, "STRENGTH")), rec.lifts.map(l => {
    const fresh = l.lastPR && daysAgo(l.lastPR) <= 14;
    const h = l.heaviest;
    return /*#__PURE__*/React.createElement("button", {
      key: l.name,
      style: S.recCard,
      onClick: () => onView('strength', l.name)
    }, /*#__PURE__*/React.createElement("div", {
      style: S.recTop
    }, /*#__PURE__*/React.createElement("span", {
      style: S.exerciseName
    }, l.name), fresh && /*#__PURE__*/React.createElement("span", {
      style: S.prBadge
    }, /*#__PURE__*/React.createElement(Flame, {
      size: 11,
      style: {
        marginRight: 3
      }
    }), " NEW"), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto',
        ...S.dateVal
      }
    }, l.sessions, " ", l.sessions === 1 ? 'session' : 'sessions')), /*#__PURE__*/React.createElement("div", {
      style: S.recGrid
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: S.recBig
    }, h.weight, /*#__PURE__*/React.createElement("span", {
      style: S.unitSm
    }, unit)), /*#__PURE__*/React.createElement("div", {
      style: S.recLabel
    }, "Heaviest", h.reps ? ` · ×${h.reps}` : ''), /*#__PURE__*/React.createElement("div", {
      style: S.recDate
    }, formatDateShort(h.date))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: S.recMid
    }, round1(l.best1RM.value), /*#__PURE__*/React.createElement("span", {
      style: S.unitSm
    }, unit)), /*#__PURE__*/React.createElement("div", {
      style: S.recLabel
    }, "Est. 1-rep max"), /*#__PURE__*/React.createElement("div", {
      style: S.recDate
    }, formatDateShort(l.best1RM.w.date))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: S.recMid
    }, Math.round(l.bestVolume.value).toLocaleString('en-AU'), /*#__PURE__*/React.createElement("span", {
      style: S.unitSm
    }, unit)), /*#__PURE__*/React.createElement("div", {
      style: S.recLabel
    }, "Best volume"), /*#__PURE__*/React.createElement("div", {
      style: S.recDate
    }, formatDateShort(l.bestVolume.w.date)))));
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      ...S.dataHint,
      marginTop: 4
    }
  }, "Est. 1-rep max uses the Epley formula from your reps. Best volume is weight × reps × sets in one session.")), rec.run.count > 0 && /*#__PURE__*/React.createElement("div", {
    style: S.sectionBlock
  }, /*#__PURE__*/React.createElement("div", {
    style: S.sectionHeading
  }, /*#__PURE__*/React.createElement(Footprints, {
    size: 14,
    color: "#E8472B"
  }), /*#__PURE__*/React.createElement("span", null, "RUNNING")), /*#__PURE__*/React.createElement("button", {
    style: S.recCard,
    onClick: () => onView('run', 'Run')
  }, /*#__PURE__*/React.createElement("div", {
    style: S.recGrid
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: S.recMid
  }, rec.run.fastest ? formatPace(rec.run.fastest.pace, distanceUnit) : '—'), /*#__PURE__*/React.createElement("div", {
    style: S.recLabel
  }, "Fastest pace"), /*#__PURE__*/React.createElement("div", {
    style: S.recDate
  }, rec.run.fastest ? `${rec.run.fastest.w.distance}${distanceUnit} · ${formatDateShort(rec.run.fastest.w.date)}` : '')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: S.recMid
  }, rec.run.longest ? rec.run.longest.distance : '—', /*#__PURE__*/React.createElement("span", {
    style: S.unitSm
  }, distanceUnit)), /*#__PURE__*/React.createElement("div", {
    style: S.recLabel
  }, "Longest run"), /*#__PURE__*/React.createElement("div", {
    style: S.recDate
  }, rec.run.longest ? formatDateShort(rec.run.longest.date) : '')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: S.recMid
  }, rec.run.longestTime ? formatDuration(rec.run.longestTime.durationSeconds) : '—'), /*#__PURE__*/React.createElement("div", {
    style: S.recLabel
  }, "Longest time"), /*#__PURE__*/React.createElement("div", {
    style: S.recDate
  }, rec.run.longestTime ? formatDateShort(rec.run.longestTime.date) : ''))), /*#__PURE__*/React.createElement("div", {
    style: S.recFooter
  }, rec.run.count, " ", rec.run.count === 1 ? 'run' : 'runs', " · ", round1(rec.run.total), distanceUnit, " total"))));
}
function EmptyState({
  onAdd
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: S.empty
  }, /*#__PURE__*/React.createElement(Dumbbell, {
    size: 26,
    color: "#3A3F45"
  }), /*#__PURE__*/React.createElement("p", {
    style: S.emptyText
  }, "No workouts logged yet."), /*#__PURE__*/React.createElement("button", {
    style: S.emptyBtn,
    onClick: onAdd
  }, "Log your first set"));
}

// ─── ProgressView ─────────────────────────────────────────────────────────────
function ProgressView({
  activities,
  selectedActivity,
  setSelectedActivity,
  stats,
  unit,
  distanceUnit,
  onDelete,
  workouts
}) {
  const counts = useMemo(() => {
    const c = {};
    (workouts || []).forEach(w => {
      const k = activityKey(w.type || 'strength', w.exercise);
      c[k] = (c[k] || 0) + 1;
    });
    return c;
  }, [workouts]);
  useEffect(() => {
    const exists = selectedActivity && activities.some(a => a.type === selectedActivity.type && a.name === selectedActivity.name);
    if (!exists && activities.length) setSelectedActivity(activities[0]);
  }, [activities, selectedActivity]);
  if (!activities.length) return /*#__PURE__*/React.createElement("div", {
    style: S.empty
  }, /*#__PURE__*/React.createElement(TrendingUp, {
    size: 26,
    color: "#3A3F45"
  }), /*#__PURE__*/React.createElement("p", {
    style: S.emptyText
  }, "Log a workout to start tracking progress."));
  const isRun = stats && stats.type === 'run';
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: S.selectLabel
  }, "Exercise", /*#__PURE__*/React.createElement("div", {
    style: S.selectWrap
  }, /*#__PURE__*/React.createElement("span", {
    style: S.selectIcon
  }, selectedActivity && selectedActivity.type === 'run' ? /*#__PURE__*/React.createElement(Footprints, {
    size: 16,
    color: "#E8472B"
  }) : /*#__PURE__*/React.createElement(Dumbbell, {
    size: 16,
    color: "#E8472B"
  })), /*#__PURE__*/React.createElement("select", {
    style: S.select,
    "aria-label": "Choose exercise",
    value: selectedActivity ? activityKey(selectedActivity.type, selectedActivity.name) : '',
    onChange: e => {
      const a = activities.find(x => activityKey(x.type, x.name) === e.target.value);
      if (a) setSelectedActivity(a);
    }
  }, !selectedActivity && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, "Choose an exercise"), [['strength', 'Strength'], ['run', 'Running']].map(([type, label]) => {
    const items = activities.filter(a => a.type === type);
    if (!items.length) return null;
    return /*#__PURE__*/React.createElement("optgroup", {
      key: type,
      label: label
    }, items.map(a => {
      const n = counts[activityKey(a.type, a.name)] || 0;
      return /*#__PURE__*/React.createElement("option", {
        key: activityKey(a.type, a.name),
        value: activityKey(a.type, a.name)
      }, a.name, " (", n, ")");
    }));
  })), /*#__PURE__*/React.createElement("span", {
    style: S.selectChevron
  }, /*#__PURE__*/React.createElement(ChevronDown, {
    size: 18,
    color: "#8A9099"
  })))), stats && isRun && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: S.statRow
  }, /*#__PURE__*/React.createElement("div", {
    style: S.statCard
  }, /*#__PURE__*/React.createElement("div", {
    style: S.statNum
  }, stats.count), /*#__PURE__*/React.createElement("div", {
    style: S.statLabel
  }, "Times run")), /*#__PURE__*/React.createElement("div", {
    style: S.statCard
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...S.statNum,
      color: '#E8472B',
      fontSize: 20
    }
  }, formatPace(stats.best.pace ?? paceSecondsPerUnit(stats.best.distance, stats.best.durationSeconds), distanceUnit)), /*#__PURE__*/React.createElement("div", {
    style: S.statLabel
  }, /*#__PURE__*/React.createElement(Award, {
    size: 11,
    style: {
      marginRight: 3,
      verticalAlign: -1
    }
  }), " Best pace")), /*#__PURE__*/React.createElement("div", {
    style: S.statCard
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...S.statNum,
      fontSize: 20,
      color: stats.paceTrend < 0 ? '#4FA876' : stats.paceTrend > 0 ? '#C95C4A' : '#EDEAE2'
    }
  }, stats.paceTrend === 0 ? '—' : `${stats.paceTrend < 0 ? '-' : '+'}${formatDuration(Math.abs(stats.paceTrend))}`), /*#__PURE__*/React.createElement("div", {
    style: S.statLabel
  }, "pace vs last"))), /*#__PURE__*/React.createElement("div", {
    style: S.statRow
  }, /*#__PURE__*/React.createElement("div", {
    style: S.statCard
  }, /*#__PURE__*/React.createElement("div", {
    style: S.statNum
  }, stats.longest.distance, /*#__PURE__*/React.createElement("span", {
    style: S.unitSm
  }, distanceUnit)), /*#__PURE__*/React.createElement("div", {
    style: S.statLabel
  }, "Longest run")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...S.statCard,
      flex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: S.statNum
  }, formatDuration(stats.last.durationSeconds)), /*#__PURE__*/React.createElement("div", {
    style: S.statLabel
  }, "Last duration"))), /*#__PURE__*/React.createElement(AdviceBanner, {
    advice: progressionAdvice(stats.entries, stats.type, unit)
  }), /*#__PURE__*/React.createElement(RatingStrip, {
    entriesNewestFirst: stats.entries,
    unit: unit,
    distanceUnit: distanceUnit
  }), /*#__PURE__*/React.createElement("div", {
    style: S.chartCard
  }, /*#__PURE__*/React.createElement("div", {
    style: S.chartTitle
  }, selectedActivity.name, " — pace over time (lower is faster)"), stats.chartData.filter(d => d.pace != null).length > 1 ? /*#__PURE__*/React.createElement(ResponsiveContainer, {
    width: "100%",
    height: 220
  }, /*#__PURE__*/React.createElement(LineChart, {
    data: stats.chartData,
    margin: {
      top: 10,
      right: 14,
      left: -8,
      bottom: 0
    }
  }, /*#__PURE__*/React.createElement(CartesianGrid, {
    strokeDasharray: "3 3",
    stroke: "#2C3036",
    vertical: false
  }), /*#__PURE__*/React.createElement(XAxis, {
    dataKey: "label",
    tick: {
      fill: '#5B6470',
      fontSize: 11,
      fontFamily: 'JetBrains Mono,monospace'
    },
    axisLine: {
      stroke: '#2C3036'
    },
    tickLine: false
  }), /*#__PURE__*/React.createElement(YAxis, {
    reversed: true,
    tick: {
      fill: '#5B6470',
      fontSize: 10.5,
      fontFamily: 'JetBrains Mono,monospace'
    },
    axisLine: false,
    tickLine: false,
    width: 42,
    tickFormatter: v => formatDuration(v),
    domain: ['dataMin - 15', 'dataMax + 15']
  }), /*#__PURE__*/React.createElement(Tooltip, {
    contentStyle: {
      background: '#1D2024',
      border: '1px solid #2C3036',
      borderRadius: 8,
      fontFamily: 'Inter,sans-serif',
      fontSize: 12
    },
    labelStyle: {
      color: '#8A9099'
    },
    itemStyle: {
      color: '#EDEAE2'
    },
    formatter: v => [formatPace(v, distanceUnit), 'Pace']
  }), /*#__PURE__*/React.createElement(Line, {
    type: "monotone",
    dataKey: "pace",
    stroke: "#E8472B",
    strokeWidth: 2.5,
    connectNulls: true,
    dot: props => {
      const {
        cx,
        cy,
        payload,
        index
      } = props;
      const rc = isRating(payload.rating) ? RATINGS[payload.rating].color : null;
      return /*#__PURE__*/React.createElement(Dot, {
        key: `dot-${index}`,
        cx: cx,
        cy: cy,
        r: payload.isBest ? 6 : 4.5,
        fill: rc || '#14161A',
        stroke: rc ? '#14161A' : '#E8472B',
        strokeWidth: rc ? 1.5 : 2
      });
    },
    activeDot: {
      r: 6,
      fill: '#E8472B'
    }
  }))) : /*#__PURE__*/React.createElement("p", {
    style: S.chartEmpty
  }, "Log this run at least twice to see a pace trend.")), /*#__PURE__*/React.createElement("div", {
    style: S.sectionBlock
  }, /*#__PURE__*/React.createElement("div", {
    style: S.sectionHeading
  }, /*#__PURE__*/React.createElement("span", null, "SESSION HISTORY")), stats.entries.map(w => /*#__PURE__*/React.createElement(WorkoutRow, {
    key: w.id,
    w: w,
    unit: unit,
    distanceUnit: distanceUnit,
    pr: stats.best && w.id === stats.best.id,
    onDelete: onDelete,
    onView: () => {}
  })))), stats && !isRun && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: S.statRow
  }, /*#__PURE__*/React.createElement("div", {
    style: S.statCard
  }, /*#__PURE__*/React.createElement("div", {
    style: S.statNum
  }, stats.count), /*#__PURE__*/React.createElement("div", {
    style: S.statLabel
  }, "Times done")), /*#__PURE__*/React.createElement("div", {
    style: S.statCard
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...S.statNum,
      color: '#E8472B'
    }
  }, stats.max.weight, /*#__PURE__*/React.createElement("span", {
    style: S.unitSm
  }, unit)), /*#__PURE__*/React.createElement("div", {
    style: S.statLabel
  }, /*#__PURE__*/React.createElement(Award, {
    size: 11,
    style: {
      marginRight: 3,
      verticalAlign: -1
    }
  }), " Best")), /*#__PURE__*/React.createElement("div", {
    style: S.statCard
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...S.statNum,
      color: stats.trend > 0 ? '#4FA876' : stats.trend < 0 ? '#C95C4A' : '#EDEAE2'
    }
  }, stats.trend > 0 ? '+' : '', stats.trend), /*#__PURE__*/React.createElement("div", {
    style: S.statLabel
  }, "vs last time"))), /*#__PURE__*/React.createElement(AdviceBanner, {
    advice: progressionAdvice(stats.entries, stats.type, unit)
  }), /*#__PURE__*/React.createElement(RatingStrip, {
    entriesNewestFirst: stats.entries,
    unit: unit,
    distanceUnit: distanceUnit
  }), /*#__PURE__*/React.createElement("div", {
    style: S.chartCard
  }, /*#__PURE__*/React.createElement("div", {
    style: S.chartTitle
  }, selectedActivity.name, " — weight over time"), stats.chartData.length > 1 ? /*#__PURE__*/React.createElement(ResponsiveContainer, {
    width: "100%",
    height: 220
  }, /*#__PURE__*/React.createElement(LineChart, {
    data: stats.chartData,
    margin: {
      top: 10,
      right: 14,
      left: -4,
      bottom: 0
    }
  }, /*#__PURE__*/React.createElement(CartesianGrid, {
    strokeDasharray: "3 3",
    stroke: "#2C3036",
    vertical: false
  }), /*#__PURE__*/React.createElement(XAxis, {
    dataKey: "label",
    tick: {
      fill: '#5B6470',
      fontSize: 11,
      fontFamily: 'JetBrains Mono,monospace'
    },
    axisLine: {
      stroke: '#2C3036'
    },
    tickLine: false
  }), /*#__PURE__*/React.createElement(YAxis, {
    tick: {
      fill: '#5B6470',
      fontSize: 11,
      fontFamily: 'JetBrains Mono,monospace'
    },
    axisLine: false,
    tickLine: false,
    width: 44,
    domain: ['dataMin - 5', 'dataMax + 5']
  }), /*#__PURE__*/React.createElement(Tooltip, {
    contentStyle: {
      background: '#1D2024',
      border: '1px solid #2C3036',
      borderRadius: 8,
      fontFamily: 'Inter,sans-serif',
      fontSize: 12
    },
    labelStyle: {
      color: '#8A9099'
    },
    itemStyle: {
      color: '#EDEAE2'
    },
    formatter: v => [`${v} ${unit}`, 'Weight']
  }), /*#__PURE__*/React.createElement(Line, {
    type: "monotone",
    dataKey: "weight",
    stroke: "#E8472B",
    strokeWidth: 2.5,
    dot: props => {
      const {
        cx,
        cy,
        payload,
        index
      } = props;
      const rc = isRating(payload.rating) ? RATINGS[payload.rating].color : null;
      return /*#__PURE__*/React.createElement(Dot, {
        key: `dot-${index}`,
        cx: cx,
        cy: cy,
        r: payload.isPR ? 6 : 4.5,
        fill: rc || '#14161A',
        stroke: rc ? '#14161A' : '#E8472B',
        strokeWidth: rc ? 1.5 : 2
      });
    },
    activeDot: {
      r: 6,
      fill: '#E8472B'
    }
  }))) : /*#__PURE__*/React.createElement("p", {
    style: S.chartEmpty
  }, "Log this exercise at least twice to see a trend line.")), /*#__PURE__*/React.createElement("div", {
    style: S.sectionBlock
  }, /*#__PURE__*/React.createElement("div", {
    style: S.sectionHeading
  }, /*#__PURE__*/React.createElement("span", null, "SESSION HISTORY")), stats.entries.map(w => /*#__PURE__*/React.createElement(WorkoutRow, {
    key: w.id,
    w: w,
    unit: unit,
    distanceUnit: distanceUnit,
    pr: w.weight >= stats.max.weight,
    onDelete: onDelete,
    onView: () => {}
  })))));
}

// ─── CalendarFrequencyView ────────────────────────────────────────────────────
function CalendarFrequencyView({
  workouts,
  uniqueVisitDates,
  calendarMonth,
  setCalendarMonth,
  granularity,
  setGranularity,
  selectedDay,
  setSelectedDay,
  unit,
  distanceUnit,
  onDelete
}) {
  const visitSet = useMemo(() => new Set(uniqueVisitDates), [uniqueVisitDates]);
  const today = todayISO();
  const gridDays = useMemo(() => {
    const first = startOfMonth(calendarMonth);
    const gridStart = startOfWeek(first);
    return Array.from({
      length: 42
    }, (_, i) => addDays(gridStart, i));
  }, [calendarMonth]);
  const monthLabel = calendarMonth.toLocaleDateString('en-AU', {
    month: 'long',
    year: 'numeric'
  });
  const monthVisitCount = uniqueVisitDates.filter(iso => {
    const d = parseISO(iso);
    return d.getFullYear() === calendarMonth.getFullYear() && d.getMonth() === calendarMonth.getMonth();
  }).length;
  const buckets = useMemo(() => buildVisitBuckets(uniqueVisitDates, granularity), [uniqueVisitDates, granularity]);
  const slope = useMemo(() => trendSlope(buckets), [buckets]);
  const trendSummary = useMemo(() => {
    if (buckets.length < 4) return null;
    const mid = Math.floor(buckets.length / 2);
    const avg = arr => arr.reduce((a, b) => a + b.count, 0) / arr.length;
    const a = avg(buckets.slice(0, mid));
    const b = avg(buckets.slice(mid));
    if (a === 0 && b === 0) return {
      dir: 'flat',
      pct: 0
    };
    const pct = a === 0 ? 100 : Math.round((b - a) / a * 100);
    const dir = slope > 0.03 ? 'up' : slope < -0.03 ? 'down' : 'flat';
    return {
      dir,
      pct
    };
  }, [buckets, slope]);
  const selectedDayWorkouts = selectedDay ? workouts.filter(w => w.date === selectedDay) : [];
  const weekdayLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: S.calendarCard
  }, /*#__PURE__*/React.createElement("div", {
    style: S.calendarNav
  }, /*#__PURE__*/React.createElement("button", {
    style: S.navBtn,
    onClick: () => setCalendarMonth(m => addMonths(m, -1)),
    "aria-label": "Prev"
  }, /*#__PURE__*/React.createElement(ChevronLeft, {
    size: 18,
    color: "#8A9099"
  })), /*#__PURE__*/React.createElement("div", {
    style: S.calendarMonthLabel
  }, monthLabel), /*#__PURE__*/React.createElement("button", {
    style: S.navBtn,
    onClick: () => setCalendarMonth(m => addMonths(m, 1)),
    "aria-label": "Next"
  }, /*#__PURE__*/React.createElement(ChevronRight, {
    size: 18,
    color: "#8A9099"
  }))), /*#__PURE__*/React.createElement("div", {
    style: S.weekdayRow
  }, weekdayLabels.map(d => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: S.weekdayCell
  }, d))), /*#__PURE__*/React.createElement("div", {
    style: S.calendarGrid
  }, gridDays.map(d => {
    const iso = toISO(d);
    const inMonth = d.getMonth() === calendarMonth.getMonth();
    const visited = visitSet.has(iso);
    const isToday = iso === today;
    const isSelected = iso === selectedDay;
    return /*#__PURE__*/React.createElement("button", {
      key: iso,
      onClick: () => setSelectedDay(isSelected ? null : visited ? iso : null),
      disabled: !visited,
      style: {
        ...S.dayCell,
        ...(inMonth ? {} : S.dayCellFaded),
        ...(visited ? S.dayCellVisited : {}),
        ...(isToday ? S.dayCellToday : {}),
        ...(isSelected ? S.dayCellSelected : {}),
        cursor: visited ? 'pointer' : 'default'
      }
    }, d.getDate());
  })), /*#__PURE__*/React.createElement("div", {
    style: S.calendarFooter
  }, /*#__PURE__*/React.createElement("span", {
    style: S.calendarFooterText
  }, /*#__PURE__*/React.createElement(Flame, {
    size: 12,
    color: "#E8472B",
    style: {
      marginRight: 4,
      verticalAlign: -2
    }
  }), monthVisitCount, " ", monthVisitCount === 1 ? 'visit' : 'visits', " this month"))), selectedDay && /*#__PURE__*/React.createElement("div", {
    style: S.sectionBlock
  }, /*#__PURE__*/React.createElement("div", {
    style: S.sectionHeading
  }, /*#__PURE__*/React.createElement("span", null, formatDate(selectedDay).toUpperCase())), selectedDayWorkouts.map(w => /*#__PURE__*/React.createElement(WorkoutRow, {
    key: w.id,
    w: w,
    unit: unit,
    distanceUnit: distanceUnit,
    pr: false,
    onDelete: onDelete,
    onView: () => {}
  }))), /*#__PURE__*/React.createElement("div", {
    style: S.sectionHeading
  }, /*#__PURE__*/React.createElement("span", null, "VISIT FREQUENCY")), /*#__PURE__*/React.createElement("div", {
    style: S.granularityRow
  }, ['week', 'month', 'year'].map(g => /*#__PURE__*/React.createElement("button", {
    key: g,
    style: {
      ...S.granularityChip,
      ...(granularity === g ? S.granularityChipActive : {})
    },
    onClick: () => setGranularity(g)
  }, g))), trendSummary && /*#__PURE__*/React.createElement("div", {
    style: S.trendBanner
  }, trendSummary.dir === 'up' && /*#__PURE__*/React.createElement(TrendingUp, {
    size: 16,
    color: "#4FA876"
  }), trendSummary.dir === 'down' && /*#__PURE__*/React.createElement(TrendingDown, {
    size: 16,
    color: "#C95C4A"
  }), trendSummary.dir === 'flat' && /*#__PURE__*/React.createElement(Minus, {
    size: 16,
    color: "#8A9099"
  }), /*#__PURE__*/React.createElement("span", {
    style: S.trendBannerText
  }, trendSummary.dir === 'up' && `Visits are trending up — averaging ${Math.abs(trendSummary.pct)}% more per ${granularity} in the recent half of your log.`, trendSummary.dir === 'down' && `Visits have slowed — averaging ${Math.abs(trendSummary.pct)}% fewer per ${granularity} recently than earlier on.`, trendSummary.dir === 'flat' && `Your visit frequency has stayed roughly steady over time.`)), /*#__PURE__*/React.createElement("div", {
    style: S.chartCard
  }, buckets.length > 1 ? /*#__PURE__*/React.createElement(ResponsiveContainer, {
    width: "100%",
    height: 200
  }, /*#__PURE__*/React.createElement(BarChart, {
    data: buckets,
    margin: {
      top: 10,
      right: 12,
      left: -6,
      bottom: 0
    }
  }, /*#__PURE__*/React.createElement(CartesianGrid, {
    strokeDasharray: "3 3",
    stroke: "#2C3036",
    vertical: false
  }), /*#__PURE__*/React.createElement(XAxis, {
    dataKey: "label",
    tick: {
      fill: '#5B6470',
      fontSize: 10.5,
      fontFamily: 'JetBrains Mono,monospace'
    },
    axisLine: {
      stroke: '#2C3036'
    },
    tickLine: false,
    interval: buckets.length > 10 ? Math.ceil(buckets.length / 10) - 1 : 0
  }), /*#__PURE__*/React.createElement(YAxis, {
    tick: {
      fill: '#5B6470',
      fontSize: 11,
      fontFamily: 'JetBrains Mono,monospace'
    },
    axisLine: false,
    tickLine: false,
    width: 28,
    allowDecimals: false
  }), /*#__PURE__*/React.createElement(Tooltip, {
    contentStyle: {
      background: '#1D2024',
      border: '1px solid #2C3036',
      borderRadius: 8,
      fontFamily: 'Inter,sans-serif',
      fontSize: 12
    },
    labelStyle: {
      color: '#8A9099'
    },
    itemStyle: {
      color: '#EDEAE2'
    },
    formatter: v => [v, 'Visits']
  }), /*#__PURE__*/React.createElement(Bar, {
    dataKey: "count",
    radius: [4, 4, 0, 0]
  }, buckets.map((b, i) => /*#__PURE__*/React.createElement(Cell, {
    key: i,
    fill: b.count === 0 ? '#24272C' : '#E8472B'
  }))))) : /*#__PURE__*/React.createElement("p", {
    style: S.chartEmpty
  }, "Log a few more sessions to see your visit frequency trend.")));
}

// ─── Styles ───────────────────────────────────────────────────────────────────
const S = {
  page: {
    minHeight: '100vh',
    background: '#14161A',
    color: '#EDEAE2',
    fontFamily: "'Inter',sans-serif",
    paddingBottom: 'calc(150px + env(safe-area-inset-bottom))',
    maxWidth: 480,
    margin: '0 auto',
    position: 'relative'
  },
  loadingWrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
  },
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 'calc(env(safe-area-inset-top) + 14px) 18px 12px',
    background: 'rgba(20,22,26,0.94)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    borderBottom: '1px solid #21242A'
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: 12
  },
  barIcon: {
    display: 'flex',
    alignItems: 'center',
    gap: 1
  },
  plate: {
    width: 6,
    height: 22,
    background: '#E8472B',
    borderRadius: 1
  },
  bar: {
    width: 16,
    height: 4,
    background: '#5B6470',
    borderRadius: 2
  },
  title: {
    fontFamily: "'Bebas Neue',sans-serif",
    fontSize: 26,
    letterSpacing: 2,
    margin: 0,
    lineHeight: 1
  },
  subtitle: {
    fontFamily: "'JetBrains Mono',monospace",
    fontSize: 10,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    color: '#5B6470',
    margin: '3px 0 0'
  },
  unitToggleGroup: {
    display: 'flex',
    gap: 6
  },
  pickSelect: {
    width: '100%',
    minWidth: 0,
    WebkitAppearance: 'none',
    appearance: 'none',
    fontSize: 14,
    letterSpacing: 0,
    textTransform: 'none',
    cursor: 'pointer'
  },
  pickBack: {
    flexShrink: 0,
    background: '#1D2024',
    border: '1px solid #2C3036',
    borderRadius: 8,
    color: '#C7CAD1',
    fontFamily: "'Inter',sans-serif",
    fontSize: 12.5,
    fontWeight: 600,
    letterSpacing: 0,
    textTransform: 'none',
    cursor: 'pointer'
  },
  tplEntry: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    background: 'rgba(232,71,43,0.07)',
    border: '1px solid rgba(232,71,43,0.35)',
    borderRadius: 12,
    color: '#EDEAE2',
    fontFamily: "'Inter',sans-serif",
    padding: '13px 14px',
    marginBottom: 22,
    cursor: 'pointer'
  },
  tplCard: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    background: '#14161A',
    border: '1px solid #2C3036',
    borderRadius: 12,
    padding: '12px 10px 12px 14px',
    marginBottom: 8
  },
  tplName: {
    fontWeight: 700,
    fontSize: 15,
    marginBottom: 3
  },
  tplMeta: {
    fontSize: 12,
    color: '#8A9099',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  tplStart: {
    display: 'flex',
    alignItems: 'center',
    background: '#E8472B',
    color: '#14161A',
    border: 'none',
    fontWeight: 700,
    fontSize: 13,
    padding: '8px 12px',
    borderRadius: 8,
    cursor: 'pointer',
    flexShrink: 0
  },
  tplItem: {
    background: '#14161A',
    border: '1px solid #2C3036',
    borderRadius: 12,
    padding: '10px 10px 12px 12px'
  },
  tplItemTop: {
    display: 'flex',
    alignItems: 'center',
    gap: 6
  },
  tplIndex: {
    fontFamily: "'JetBrains Mono',monospace",
    fontSize: 11,
    color: '#5B6470',
    width: 16
  },
  tplItemNote: {
    fontSize: 12,
    color: '#5B6470',
    marginTop: 6,
    paddingLeft: 22
  },
  skipBtn: {
    background: 'transparent',
    border: '1px solid #2C3036',
    color: '#8A9099',
    fontSize: 11.5,
    fontWeight: 600,
    padding: '5px 10px',
    borderRadius: 20,
    cursor: 'pointer'
  },
  skipBtnOn: {
    border: '1px solid #5B6470',
    color: '#EDEAE2'
  },
  daySaveBtn: {
    background: 'none',
    border: 'none',
    padding: 4,
    display: 'flex',
    cursor: 'pointer'
  },
  prList: {
    background: '#1D2024',
    border: '1px solid #24272C',
    borderRadius: 12,
    overflow: 'hidden'
  },
  prRow: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    background: 'none',
    border: 'none',
    borderBottom: '1px solid #24272C',
    color: '#EDEAE2',
    fontFamily: "'Inter',sans-serif",
    padding: '11px 14px',
    cursor: 'pointer'
  },
  prChange: {
    display: 'flex',
    alignItems: 'baseline',
    gap: 5,
    fontFamily: "'JetBrains Mono',monospace",
    fontSize: 12,
    color: '#8A9099',
    flexShrink: 0
  },
  prDelta: {
    color: '#4FA876',
    fontWeight: 600,
    marginLeft: 4
  },
  recCard: {
    width: '100%',
    display: 'block',
    textAlign: 'left',
    background: '#1D2024',
    border: '1px solid #24272C',
    borderRadius: 12,
    color: '#EDEAE2',
    fontFamily: "'Inter',sans-serif",
    padding: '12px 14px',
    marginBottom: 8,
    cursor: 'pointer'
  },
  recTop: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10
  },
  recGrid: {
    display: 'grid',
    gridTemplateColumns: '1.1fr 1fr 1fr',
    gap: 10
  },
  recBig: {
    fontFamily: "'Bebas Neue',sans-serif",
    fontSize: 30,
    lineHeight: 1,
    color: '#E8472B'
  },
  recMid: {
    fontFamily: "'Bebas Neue',sans-serif",
    fontSize: 22,
    lineHeight: 1.15
  },
  recLabel: {
    fontFamily: "'JetBrains Mono',monospace",
    fontSize: 9.5,
    letterSpacing: 0.6,
    textTransform: 'uppercase',
    color: '#8A9099',
    marginTop: 4
  },
  recDate: {
    fontSize: 11,
    color: '#5B6470',
    marginTop: 2
  },
  recFooter: {
    fontSize: 12,
    color: '#8A9099',
    marginTop: 12,
    paddingTop: 10,
    borderTop: '1px solid #24272C'
  },
  dayGroup: {
    marginBottom: 22
  },
  dayHeader: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    gap: 10,
    padding: '0 2px 8px',
    marginBottom: 8,
    borderBottom: '1px solid #21242A'
  },
  dayTitle: {
    fontFamily: "'Bebas Neue',sans-serif",
    fontSize: 19,
    letterSpacing: 0.8
  },
  daySummary: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    fontFamily: "'JetBrains Mono',monospace",
    fontSize: 10.5,
    color: '#5B6470',
    textAlign: 'right'
  },
  dayDots: {
    display: 'flex',
    gap: 3
  },
  lastHint: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 4,
    fontSize: 12,
    color: '#8A9099',
    marginTop: -6
  },
  dataSectionLabel: {
    fontFamily: "'JetBrains Mono',monospace",
    fontSize: 11,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    color: '#5B6470',
    marginBottom: 6
  },
  dataHint: {
    fontSize: 12.5,
    color: '#8A9099',
    margin: '0 0 12px',
    lineHeight: 1.5
  },
  dataBtnRow: {
    display: 'flex',
    gap: 8
  },
  dataBtn: {
    flex: 1,
    minWidth: 0,
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    textAlign: 'left',
    background: '#14161A',
    border: '1px solid #2C3036',
    color: '#EDEAE2',
    fontFamily: "'Inter',sans-serif",
    fontSize: 13,
    padding: '12px',
    borderRadius: 10,
    cursor: 'pointer'
  },
  dataBtnSub: {
    display: 'block',
    fontSize: 11,
    color: '#5B6470',
    marginTop: 2,
    fontWeight: 400
  },
  dataError: {
    fontSize: 12.5,
    color: '#C95C4A',
    margin: '12px 0 0'
  },
  importSummary: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: 8,
    background: '#14161A',
    border: '1px solid #2C3036',
    borderRadius: 10,
    padding: '12px 14px',
    margin: '4px 0 14px',
    fontSize: 11.5,
    color: '#8A9099'
  },
  importNum: {
    display: 'block',
    fontFamily: "'Bebas Neue',sans-serif",
    fontSize: 24,
    color: '#EDEAE2'
  },
  replaceBtn: {
    width: '100%',
    background: 'transparent',
    border: '1px solid #4A2A24',
    color: '#C95C4A',
    fontWeight: 600,
    fontSize: 13,
    padding: '11px',
    borderRadius: 10,
    cursor: 'pointer',
    marginTop: 10
  },
  cancelLink: {
    width: '100%',
    background: 'none',
    border: 'none',
    color: '#8A9099',
    fontSize: 13,
    padding: '12px',
    cursor: 'pointer',
    marginTop: 4
  },
  unitToggle: {
    background: '#1D2024',
    border: '1px solid #2C3036',
    color: '#EDEAE2',
    fontFamily: "'JetBrains Mono',monospace",
    fontSize: 12,
    fontWeight: 500,
    padding: '7px 14px',
    borderRadius: 20,
    cursor: 'pointer',
    textTransform: 'uppercase'
  },
  tabs: {
    display: 'flex',
    gap: 8,
    padding: '0 18px 16px',
    borderBottom: '1px solid #21242A'
  },
  tabBar: {
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 40,
    background: 'rgba(23,25,29,0.96)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    borderTop: '1px solid #24272C',
    paddingBottom: 'env(safe-area-inset-bottom)'
  },
  tabBarInner: {
    maxWidth: 480,
    margin: '0 auto',
    display: 'flex'
  },
  tabBtn: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 3,
    background: 'none',
    border: 'none',
    padding: '9px 0 7px',
    fontFamily: "'Inter',sans-serif",
    fontSize: 10.5,
    fontWeight: 600,
    letterSpacing: 0.2,
    cursor: 'pointer'
  },
  updateBanner: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    margin: '12px 18px 0',
    padding: '10px 12px',
    background: 'rgba(232,71,43,0.10)',
    border: '1px solid rgba(232,71,43,0.45)',
    borderRadius: 10,
    fontSize: 13,
    color: '#EDEAE2'
  },
  updateBtn: {
    background: '#E8472B',
    color: '#14161A',
    border: 'none',
    fontWeight: 700,
    fontSize: 12.5,
    padding: '7px 12px',
    borderRadius: 8,
    cursor: 'pointer'
  },
  iosSteps: {
    background: '#14161A',
    border: '1px solid #2C3036',
    borderRadius: 10,
    padding: '12px 14px',
    marginBottom: 22
  },
  iosList: {
    margin: 0,
    paddingLeft: 20,
    fontSize: 13,
    color: '#C7CAD1',
    lineHeight: 1.9
  },
  tab: {
    display: 'flex',
    alignItems: 'center',
    background: 'transparent',
    border: 'none',
    color: '#5B6470',
    fontFamily: "'Inter',sans-serif",
    fontSize: 13,
    fontWeight: 600,
    padding: '8px 4px',
    cursor: 'pointer',
    borderBottom: '2px solid transparent',
    marginBottom: -1
  },
  tabActive: {
    color: '#EDEAE2',
    borderBottom: '2px solid #E8472B'
  },
  main: {
    padding: '18px 18px 0'
  },
  statRow: {
    display: 'flex',
    gap: 10,
    marginBottom: 22
  },
  statCard: {
    flex: 1,
    background: '#1D2024',
    border: '1px solid #2C3036',
    borderRadius: 12,
    padding: '14px 10px',
    textAlign: 'center'
  },
  statNum: {
    fontFamily: "'Bebas Neue',sans-serif",
    fontSize: 26,
    letterSpacing: 0.5
  },
  statLabel: {
    fontFamily: "'JetBrains Mono',monospace",
    fontSize: 9.5,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    color: '#5B6470',
    marginTop: 4
  },
  sectionBlock: {
    marginBottom: 26
  },
  sectionHeading: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    fontFamily: "'JetBrains Mono',monospace",
    fontSize: 11,
    letterSpacing: 1.5,
    color: '#5B6470',
    marginBottom: 10
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: '#1D2024',
    borderTop: '1px solid #24272C',
    borderRight: '1px solid #24272C',
    borderBottom: '1px solid #24272C',
    borderRadius: 10,
    padding: '12px 14px 12px 12px',
    marginBottom: 8,
    cursor: 'pointer'
  },
  ratingRow: {
    display: 'flex',
    gap: 6
  },
  ratingBtn: {
    flex: 1,
    minWidth: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
    background: '#14161A',
    border: '1px solid #2C3036',
    color: '#8A9099',
    fontFamily: "'Inter',sans-serif",
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: 0,
    textTransform: 'none',
    padding: '11px 4px',
    borderRadius: 9,
    cursor: 'pointer'
  },
  ratingBtnCompact: {
    padding: '8px 4px',
    fontSize: 12
  },
  ratingDot: {
    display: 'inline-block',
    width: 10,
    height: 10,
    borderRadius: '50%',
    flexShrink: 0
  },
  ratingDesc: {
    fontFamily: "'Inter',sans-serif",
    fontSize: 12,
    letterSpacing: 0,
    textTransform: 'none',
    color: '#8A9099',
    marginTop: 8,
    minHeight: 16
  },
  ratingPill: {
    display: 'flex',
    alignItems: 'center',
    gap: 5,
    marginLeft: 'auto',
    border: 'none',
    fontFamily: "'JetBrains Mono',monospace",
    fontSize: 10,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    padding: '3px 8px',
    borderRadius: 20,
    cursor: 'pointer'
  },
  ratingPillEmpty: {
    marginLeft: 'auto',
    background: 'transparent',
    border: '1px dashed #3A3F45',
    color: '#5B6470',
    fontFamily: "'JetBrains Mono',monospace",
    fontSize: 10,
    padding: '2px 8px',
    borderRadius: 20,
    cursor: 'pointer'
  },
  stripWrap: {
    background: '#1D2024',
    border: '1px solid #2C3036',
    borderRadius: 12,
    padding: '12px 14px',
    marginBottom: 18
  },
  stripLabel: {
    fontFamily: "'JetBrains Mono',monospace",
    fontSize: 10,
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: '#5B6470',
    marginBottom: 8
  },
  strip: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gap: 4
  },
  stripCell: {
    height: 18,
    borderRadius: 4
  },
  stripLegend: {
    display: 'flex',
    gap: 14,
    marginTop: 10,
    fontSize: 11,
    color: '#8A9099'
  },
  legendItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 5
  },
  rowMain: {
    flex: 1
  },
  rowTop: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4
  },
  exerciseName: {
    fontWeight: 600,
    fontSize: 14.5
  },
  prBadge: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: "'JetBrains Mono',monospace",
    fontSize: 10,
    fontWeight: 600,
    color: '#E8472B',
    background: 'rgba(232,71,43,0.12)',
    padding: '2px 7px',
    borderRadius: 20
  },
  rowMeta: {
    display: 'flex',
    alignItems: 'baseline',
    gap: 10,
    flexWrap: 'wrap'
  },
  weightVal: {
    fontFamily: "'JetBrains Mono',monospace",
    fontSize: 14,
    color: '#EDEAE2',
    fontWeight: 500
  },
  unitSm: {
    fontSize: 10,
    color: '#5B6470',
    marginLeft: 2
  },
  repsVal: {
    fontFamily: "'JetBrains Mono',monospace",
    fontSize: 12,
    color: '#8A9099'
  },
  dateVal: {
    fontFamily: "'JetBrains Mono',monospace",
    fontSize: 11,
    color: '#5B6470'
  },
  noteText: {
    fontSize: 12,
    color: '#8A9099',
    marginTop: 5,
    fontStyle: 'italic'
  },
  rowActions: {
    display: 'flex',
    alignItems: 'center',
    gap: 0,
    marginLeft: 6
  },
  iconBtnGhost: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 7,
    display: 'flex'
  },
  confirmBtn: {
    background: '#E8472B',
    color: '#14161A',
    border: 'none',
    fontSize: 11,
    fontWeight: 600,
    padding: '5px 10px',
    borderRadius: 6,
    cursor: 'pointer'
  },
  cancelBtn: {
    background: 'transparent',
    color: '#8A9099',
    border: '1px solid #2C3036',
    fontSize: 11,
    padding: '5px 10px',
    borderRadius: 6,
    cursor: 'pointer'
  },
  empty: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px 20px',
    textAlign: 'center'
  },
  emptyText: {
    color: '#5B6470',
    fontSize: 13,
    margin: '12px 0 16px'
  },
  emptyBtn: {
    background: '#E8472B',
    color: '#14161A',
    border: 'none',
    fontWeight: 600,
    fontSize: 13,
    padding: '10px 18px',
    borderRadius: 8,
    cursor: 'pointer'
  },
  exerciseSelectRow: {
    display: 'flex',
    gap: 8,
    overflowX: 'auto',
    paddingBottom: 14,
    marginBottom: 6
  },
  selectLabel: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    fontFamily: "'JetBrains Mono',monospace",
    fontSize: 10.5,
    letterSpacing: 0.6,
    textTransform: 'uppercase',
    color: '#5B6470',
    marginBottom: 18
  },
  selectWrap: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
  },
  select: {
    width: '100%',
    minWidth: 0,
    WebkitAppearance: 'none',
    appearance: 'none',
    background: '#1D2024',
    border: '1px solid #2C3036',
    borderRadius: 10,
    color: '#EDEAE2',
    fontFamily: "'Inter',sans-serif",
    fontSize: 16,
    fontWeight: 600,
    letterSpacing: 0,
    textTransform: 'none',
    padding: '13px 44px 13px 42px',
    cursor: 'pointer',
    outline: 'none'
  },
  selectIcon: {
    position: 'absolute',
    left: 14,
    display: 'flex',
    pointerEvents: 'none'
  },
  selectChevron: {
    position: 'absolute',
    right: 14,
    display: 'flex',
    pointerEvents: 'none'
  },
  exerciseChip: {
    flexShrink: 0,
    background: '#1D2024',
    border: '1px solid #2C3036',
    color: '#8A9099',
    fontSize: 12.5,
    fontWeight: 500,
    padding: '8px 14px',
    borderRadius: 20,
    cursor: 'pointer',
    whiteSpace: 'nowrap'
  },
  exerciseChipActive: {
    background: '#E8472B',
    border: '1px solid #E8472B',
    color: '#14161A',
    fontWeight: 600
  },
  chartCard: {
    background: '#1D2024',
    border: '1px solid #2C3036',
    borderRadius: 12,
    padding: '16px 8px 10px 4px',
    marginBottom: 24
  },
  chartTitle: {
    fontFamily: "'JetBrains Mono',monospace",
    fontSize: 11,
    color: '#8A9099',
    marginBottom: 6,
    paddingLeft: 12,
    textTransform: 'lowercase'
  },
  chartEmpty: {
    color: '#5B6470',
    fontSize: 12.5,
    textAlign: 'center',
    padding: '40px 20px'
  },
  calendarCard: {
    background: '#1D2024',
    border: '1px solid #2C3036',
    borderRadius: 12,
    padding: '14px 12px 10px',
    marginBottom: 20
  },
  calendarNav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12
  },
  navBtn: {
    background: '#24272C',
    border: 'none',
    borderRadius: 8,
    width: 30,
    height: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
  },
  calendarMonthLabel: {
    fontFamily: "'Bebas Neue',sans-serif",
    fontSize: 18,
    letterSpacing: 0.6
  },
  weekdayRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7,1fr)',
    marginBottom: 4
  },
  weekdayCell: {
    textAlign: 'center',
    fontFamily: "'JetBrains Mono',monospace",
    fontSize: 9.5,
    color: '#5B6470',
    padding: '4px 0',
    textTransform: 'uppercase'
  },
  calendarGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7,1fr)',
    gap: 4
  },
  dayCell: {
    aspectRatio: '1',
    background: 'transparent',
    border: 'none',
    borderRadius: 8,
    color: '#5B6470',
    fontFamily: "'JetBrains Mono',monospace",
    fontSize: 12.5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dayCellFaded: {
    color: '#33373D'
  },
  dayCellVisited: {
    background: 'rgba(232,71,43,0.16)',
    color: '#EDEAE2',
    fontWeight: 600
  },
  dayCellToday: {
    boxShadow: 'inset 0 0 0 1.5px #5B6470'
  },
  dayCellSelected: {
    background: '#E8472B',
    color: '#14161A'
  },
  calendarFooter: {
    borderTop: '1px solid #24272C',
    marginTop: 10,
    paddingTop: 10
  },
  calendarFooterText: {
    fontFamily: "'JetBrains Mono',monospace",
    fontSize: 11.5,
    color: '#8A9099'
  },
  granularityRow: {
    display: 'flex',
    gap: 8,
    marginBottom: 12
  },
  granularityChip: {
    background: '#1D2024',
    border: '1px solid #2C3036',
    color: '#8A9099',
    fontSize: 12,
    fontWeight: 500,
    padding: '7px 16px',
    borderRadius: 20,
    cursor: 'pointer',
    textTransform: 'capitalize'
  },
  granularityChipActive: {
    background: '#E8472B',
    border: '1px solid #E8472B',
    color: '#14161A',
    fontWeight: 600
  },
  trendBanner: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 10,
    background: '#1D2024',
    border: '1px solid #2C3036',
    borderRadius: 10,
    padding: '12px 14px',
    marginBottom: 14
  },
  trendBannerText: {
    fontSize: 12.5,
    color: '#C7CAD1',
    lineHeight: 1.5
  },
  fab: {
    position: 'fixed',
    zIndex: 45,
    bottom: 'calc(env(safe-area-inset-bottom) + 76px)',
    right: 'max(20px, calc(50vw - 220px))',
    width: 54,
    height: 54,
    borderRadius: '50%',
    background: '#E8472B',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 4px 16px rgba(232,71,43,0.4)'
  },
  modalOverlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(10,11,13,0.7)',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    zIndex: 50,
    overscrollBehavior: 'contain'
  },
  modal: {
    background: '#1A1C20',
    borderTop: '1px solid #2C3036',
    borderRadius: '18px 18px 0 0',
    width: '100%',
    maxWidth: 480,
    padding: '18px 20px calc(env(safe-area-inset-bottom) + 24px)',
    maxHeight: 'calc(92vh - env(safe-area-inset-top))',
    overflowY: 'auto',
    overflowX: 'hidden',
    overscrollBehavior: 'contain'
  },
  modalHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16
  },
  modalTitle: {
    fontFamily: "'Bebas Neue',sans-serif",
    fontSize: 22,
    letterSpacing: 1,
    margin: 0
  },
  typeToggleRow: {
    display: 'flex',
    gap: 8,
    marginBottom: 16
  },
  typeToggleBtn: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#14161A',
    border: '1px solid #2C3036',
    color: '#8A9099',
    fontWeight: 600,
    fontSize: 13,
    padding: '10px 0',
    borderRadius: 9,
    cursor: 'pointer'
  },
  typeToggleBtnActive: {
    background: 'rgba(232,71,43,0.14)',
    border: '1px solid #E8472B',
    color: '#EDEAE2'
  },
  iconBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 4
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 14
  },
  formRow: {
    display: 'flex',
    gap: 10
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    fontFamily: "'JetBrains Mono',monospace",
    fontSize: 10.5,
    letterSpacing: 0.6,
    textTransform: 'uppercase',
    color: '#5B6470'
  },
  input: {
    background: '#14161A',
    border: '1px solid #2C3036',
    borderRadius: 8,
    padding: '10px 12px',
    color: '#EDEAE2',
    fontSize: 14,
    fontFamily: "'Inter',sans-serif",
    outline: 'none',
    width: '100%'
  },
  submitBtn: {
    background: '#E8472B',
    color: '#14161A',
    border: 'none',
    fontWeight: 700,
    fontSize: 14.5,
    padding: '13px',
    borderRadius: 10,
    cursor: 'pointer',
    marginTop: 6
  },
  toast: {
    position: 'fixed',
    top: 'calc(env(safe-area-inset-top) + 72px)',
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#1D2024',
    border: '1px solid #2C3036',
    color: '#EDEAE2',
    padding: '10px 18px',
    borderRadius: 30,
    fontSize: 13,
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0 6px 20px rgba(0,0,0,0.4)',
    zIndex: 60,
    width: 'max-content',
    maxWidth: 'calc(100vw - 32px)',
    textAlign: 'center'
  }
};

// ─── Mount ────────────────────────────────────────────────────────────────────
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(IronLog));