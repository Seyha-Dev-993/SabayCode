import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { translations } from '../translations';
import { Course, Lesson, Topic } from '../types';
import { coursesData } from '../data/coursesData';
import { getLessonExample } from '../utils/lessonExampleHelper';
import Editor from '@monaco-editor/react';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-kotlin';
import 'prismjs/components/prism-swift';
import 'prismjs/components/prism-sql';
import canvasConfetti from 'canvas-confetti';
import { 
  BookOpen, CheckCircle, ArrowRight, ArrowLeft, 
  Terminal, Layers, ChevronRight, ChevronDown, Menu, HelpCircle,
  Trophy, Award, Bookmark, Star, Share2, Clock, Sparkles, Code2,
  Maximize2, Minimize2, RotateCcw, Copy, Check, Play, FileCode,
  FolderTree, X, ExternalLink, AlertCircle, Info, Sliders, FileText, Search,
  ZoomIn, ZoomOut
} from 'lucide-react';
import { QuizCard } from './QuizCard';
import { CourseBrandIcon } from './CourseBrandIcon';
import { MiniProjectCard } from './MiniProjectCard';
import { ReferenceViewer } from './ReferenceViewer';
import { CertificateModal } from './CertificateModal';
import { TailwindLessonView } from './TailwindLessonView';
import { TopLearningNavigator } from './TopLearningNavigator';
import { CourseExplorerDrawer } from './CourseExplorerDrawer';
import { CommandPaletteModal } from './CommandPaletteModal';
import { LessonNotes } from './LessonNotes';
import { ScreenshotPlaceholder } from './ScreenshotPlaceholder';
import { IllustrationPlaceholder } from './IllustrationPlaceholder';
import { ExecutionService } from '../utils/executionService';

const SQL_SEED_SCRIPT = `
-- --- SQL SANDBOX PRE-SEED DATABASE START ---
CREATE TABLE IF NOT EXISTS Customers (
  CustomerID INTEGER PRIMARY KEY AUTOINCREMENT,
  CustomerName TEXT,
  ContactName TEXT,
  Address TEXT,
  City TEXT,
  PostalCode TEXT,
  Country TEXT
);

CREATE TABLE IF NOT EXISTS Employees (
  EmployeeID INTEGER PRIMARY KEY AUTOINCREMENT,
  LastName TEXT,
  FirstName TEXT,
  BirthDate TEXT,
  Photo TEXT,
  Notes TEXT
);

CREATE TABLE IF NOT EXISTS Products (
  ProductID INTEGER PRIMARY KEY AUTOINCREMENT,
  SupplierID INTEGER,
  CategoryID INTEGER,
  Unit TEXT,
  Price REAL
);

CREATE TABLE IF NOT EXISTS Orders (
  OrderID INTEGER PRIMARY KEY AUTOINCREMENT,
  CustomerID INTEGER,
  EmployeeID INTEGER,
  OrderDate TEXT,
  ShipperID INTEGER
);

INSERT INTO Customers (CustomerID, CustomerName, ContactName, Address, City, PostalCode, Country)
SELECT 1, 'Alfreds Futterkiste', 'Maria Anders', 'Obere Str. 57', 'Berlin', '12209', 'Germany' WHERE NOT EXISTS (SELECT 1 FROM Customers WHERE CustomerID = 1);
INSERT INTO Customers (CustomerID, CustomerName, ContactName, Address, City, PostalCode, Country)
SELECT 2, 'Ana Trujillo Emparedados y helados', 'Ana Trujillo', 'Avda. de la Constitución 2222', 'México D.F.', '05021', 'Mexico' WHERE NOT EXISTS (SELECT 1 FROM Customers WHERE CustomerID = 2);
INSERT INTO Customers (CustomerID, CustomerName, ContactName, Address, City, PostalCode, Country)
SELECT 3, 'Antonio Moreno Taquería', 'Antonio Moreno', 'Mataderos 2312', 'México D.F.', '05023', 'Mexico' WHERE NOT EXISTS (SELECT 1 FROM Customers WHERE CustomerID = 3);
INSERT INTO Customers (CustomerID, CustomerName, ContactName, Address, City, PostalCode, Country)
SELECT 4, 'Around the Horn', 'Thomas Hardy', '120 Hanover Sq.', 'London', 'WA1 1DP', 'UK' WHERE NOT EXISTS (SELECT 1 FROM Customers WHERE CustomerID = 4);

INSERT INTO Employees (EmployeeID, LastName, FirstName, BirthDate, Photo, Notes)
SELECT 1, 'Davolio', 'Nancy', '1968-12-08', 'EmpID1.pic', 'Education includes a BA in psychology.' WHERE NOT EXISTS (SELECT 1 FROM Employees WHERE EmployeeID = 1);
INSERT INTO Employees (EmployeeID, LastName, FirstName, BirthDate, Photo, Notes)
SELECT 2, 'Fuller', 'Andrew', '1952-02-19', 'EmpID2.pic', 'Andrew received his Ph.D. in computer science.' WHERE NOT EXISTS (SELECT 1 FROM Employees WHERE EmployeeID = 2);

INSERT INTO Products (ProductID, ProductName, SupplierID, CategoryID, Unit, Price)
SELECT 1, 'Chais', 1, 1, '10 boxes x 20 bags', 18.00 WHERE NOT EXISTS (SELECT 1 FROM Products WHERE ProductID = 1);
INSERT INTO Products (ProductID, ProductName, SupplierID, CategoryID, Unit, Price)
SELECT 2, 'Chang', 1, 1, '24 - 12 oz bottles', 19.00 WHERE NOT EXISTS (SELECT 1 FROM Products WHERE ProductID = 2);
INSERT INTO Products (ProductID, ProductName, SupplierID, CategoryID, Unit, Price)
SELECT 3, 'Aniseed Syrup', 1, 2, '12 - 550 ml bottles', 10.00 WHERE NOT EXISTS (SELECT 1 FROM Products WHERE ProductID = 3);

INSERT INTO Orders (OrderID, CustomerID, EmployeeID, OrderDate, ShipperID)
SELECT 10248, 1, 1, '1996-07-04', 3 WHERE NOT EXISTS (SELECT 1 FROM Orders WHERE OrderID = 10248);
INSERT INTO Orders (OrderID, CustomerID, EmployeeID, OrderDate, ShipperID)
SELECT 10249, 2, 2, '1996-07-05', 1 WHERE NOT EXISTS (SELECT 1 FROM Orders WHERE OrderID = 10249);
INSERT INTO Orders (OrderID, CustomerID, EmployeeID, OrderDate, ShipperID)
SELECT 10250, 3, 1, '1996-07-08', 2 WHERE NOT EXISTS (SELECT 1 FROM Orders WHERE OrderID = 10250);
-- --- SQL SANDBOX PRE-SEED DATABASE END ---
`;

let cachedPistonRuntimes: any[] | null = null;

const FALLBACK_PISTON_RUNTIMES = [
  { language: 'python', version: '3.10.0', aliases: ['py', 'python3'] },
  { language: 'typescript', version: '4.9.4', aliases: ['ts'] },
  { language: 'javascript', version: '18.15.0', aliases: ['js', 'node'] },
  { language: 'java', version: '15.0.2', aliases: ['openjdk'] },
  { language: 'c', version: '10.2.0', aliases: ['gcc'] },
  { language: 'cpp', version: '10.2.0', aliases: ['g++'] },
  { language: 'csharp', version: '6.12.0', aliases: ['cs'] },
  { language: 'php', version: '8.2.3', aliases: ['php'] },
  { language: 'kotlin', version: '1.8.20', aliases: ['kt'] },
  { language: 'swift', version: '5.8.0', aliases: ['swift'] },
  { language: 'dart', version: '2.19.6', aliases: ['dart'] },
  { language: 'sqlite3', version: '3.36.0', aliases: ['sqlite', 'sql'] },
  { language: 'bash', version: '5.2.0', aliases: ['sh'] }
];

async function getPistonRuntime(targetLang: string) {
  try {
    if (!cachedPistonRuntimes) {
      const res = await fetch('/api/runtimes');
      const contentType = res.headers.get('content-type') || '';
      if (res.ok && contentType.includes('application/json')) {
        cachedPistonRuntimes = await res.json();
      } else {
        cachedPistonRuntimes = FALLBACK_PISTON_RUNTIMES;
      }
    }
  } catch (e) {
    console.warn("Could not fetch Piston runtimes, using fallback list:", e);
    cachedPistonRuntimes = FALLBACK_PISTON_RUNTIMES;
  }

  const aliasMap: Record<string, string[]> = {
    python: ['python', 'python3', 'py'],
    typescript: ['typescript', 'ts'],
    java: ['java', 'openjdk'],
    c: ['c', 'gcc', 'clang'],
    cpp: ['cpp', 'g++', 'cpp', 'c++'],
    csharp: ['csharp', 'cs', 'mono-csharp', 'dotnet'],
    php: ['php'],
    kotlin: ['kotlin', 'kt'],
    swift: ['swift'],
    dart: ['dart'],
    sql: ['sqlite3', 'sqlite', 'sql'],
    mysql: ['sqlite3', 'sqlite', 'sql'],
    mongodb: ['javascript', 'js', 'node'],
    git: ['bash', 'sh']
  };

  const targets = aliasMap[targetLang] || [targetLang];

  if (cachedPistonRuntimes && cachedPistonRuntimes.length > 0) {
    for (const target of targets) {
      const match = cachedPistonRuntimes.find((r: any) => 
        r.language === target || 
        (r.aliases && r.aliases.includes(target))
      );
      if (match) {
        return {
          language: match.language,
          version: match.version
        };
      }
    }
  }

  const pistonMap: Record<string, { language: string; version: string }> = {
    python: { language: 'python3', version: '3.10.0' },
    typescript: { language: 'typescript', version: '4.9.4' },
    java: { language: 'java', version: '15.0.2' },
    c: { language: 'c', version: '10.2.0' },
    cpp: { language: 'cpp', version: '10.2.0' },
    csharp: { language: 'csharp', version: '6.12.0' },
    php: { language: 'php', version: '8.2.3' },
    kotlin: { language: 'kotlin', version: '1.8.20' },
    swift: { language: 'swift', version: '5.8.0' },
    dart: { language: 'dart', version: '2.19.6' },
    sql: { language: 'sqlite3', version: '3.36.0' },
    mysql: { language: 'sqlite3', version: '3.36.0' },
    mongodb: { language: 'javascript', version: '18.15.0' },
    git: { language: 'bash', version: '5.2.0' }
  };

  return pistonMap[targetLang] || { language: targetLang, version: '*' };
}

interface LessonInterfaceProps {
  course: Course;
  onGoBack: () => void;
  initialLessonId?: string | null;
  onSelectCourse?: (courseId: string) => void;
  onNavigateToEditor?: (data: { courseId: string; lessonId: string; code: string; lang: string; title: string }) => void;
}

export const LessonInterface: React.FC<LessonInterfaceProps> = ({ 
  course: initialCourse, 
  onGoBack, 
  initialLessonId,
  onSelectCourse: externalSelectCourse,
  onNavigateToEditor
}) => {
  const { language, theme, progress, completeLesson } = useApp();
  const t = translations[language];

  // Active Course state
  const [currentCourse, setCurrentCourse] = useState<Course>(initialCourse);

  useEffect(() => {
    setCurrentCourse(initialCourse);
  }, [initialCourse.id]);

  // Handle course switching
  const handleCourseSwitch = (courseId: string) => {
    if (externalSelectCourse) {
      externalSelectCourse(courseId);
    } else {
      const found = coursesData.find(c => c.id === courseId);
      if (found) {
        setCurrentCourse(found);
      }
    }
  };

  // 1. Navigation & UI Layout States
  const [activeTab, setActiveTab] = useState<'overview' | 'tutorial' | 'examples' | 'exercise' | 'quiz' | 'notes' | 'resources'>('tutorial');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCertOpen, setIsCertOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Classic Sidebar States
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);
  const [sidebarSearch, setSidebarSearch] = useState<string>('');
  const [collapsedTopics, setCollapsedTopics] = useState<Record<string, boolean>>({});

  const toggleTopic = (topicKey: string) => {
    setCollapsedTopics(prev => ({
      ...prev,
      [topicKey]: !prev[topicKey]
    }));
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  // Find initial lesson
  const getInitialLesson = (c: Course) => {
    if (initialLessonId) {
      const found = c.topics
        .flatMap(t => t.lessons)
        .find(l => l.id === initialLessonId);
      if (found) return found;
    }
    return c.topics[0]?.lessons[0] || null;
  };

  const [activeLesson, setActiveLesson] = useState<Lesson | null>(getInitialLesson(currentCourse));
  const [activeExampleFile, setActiveExampleFile] = useState<string>('');

  // Update active lesson when course changes
  useEffect(() => {
    const targetLesson = initialLessonId
      ? (currentCourse.topics.flatMap(t => t.lessons).find(l => l.id === initialLessonId) || currentCourse.topics[0]?.lessons[0] || null)
      : (currentCourse.topics[0]?.lessons[0] || null);
    setActiveLesson(targetLesson);
    setActiveTab('tutorial');
  }, [currentCourse.id, initialLessonId]);

  // Editor and Example Code state
  const [code, setCode] = useState<string>('');
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [iframeSrc, setIframeSrc] = useState<string>('');
  const [consoleOutput, setConsoleOutput] = useState<string>('');
  const [outputTab, setOutputTab] = useState<'console' | 'output' | 'errors' | 'terminal' | 'problems'>('output');
  const [isFullscreenEditor, setIsFullscreenEditor] = useState<boolean>(false);
  const [editorFontSize, setEditorFontSize] = useState<number>(13);
  const consoleContainerRef = useRef<HTMLDivElement>(null);

  // Auto exit fullscreen on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreenEditor) {
        setIsFullscreenEditor(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreenEditor]);

  // Auto scroll console container when new logs arrive
  useEffect(() => {
    if (consoleContainerRef.current) {
      consoleContainerRef.current.scrollTop = consoleContainerRef.current.scrollHeight;
    }
  }, [consoleOutput, outputTab]);

  // Listen for console logs emitted by iframe sandbox
  useEffect(() => {
    const handleIframeMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === 'iframe-console' && typeof event.data.logs === 'string') {
        setConsoleOutput(event.data.logs);
      }
    };
    window.addEventListener('message', handleIframeMessage);
    return () => window.removeEventListener('message', handleIframeMessage);
  }, []);

  // Sync editor starter code when active lesson or active file changes
  useEffect(() => {
    if (activeLesson) {
      const example = getLessonExample(activeLesson, currentCourse.id);
      const keys = Object.keys(example.files);
      let defaultActive = '';
      if (['javascript', 'js', 'jquery'].includes(currentCourse.id.toLowerCase())) {
        const jsFile = keys.find(k => k.endsWith('.js'));
        if (jsFile) {
          defaultActive = jsFile;
        }
      }
      if (!defaultActive) {
        defaultActive = keys.includes('index.html') ? 'index.html' : (keys[0] || '');
      }
      setActiveExampleFile(defaultActive);
      const initialCode = example.files[defaultActive] || activeLesson.starterCode || '// Write your code here';
      setCode(initialCode);
    }
  }, [activeLesson, currentCourse.id]);

  const handleOpenInEditor = (customCode?: string) => {
    if (!activeLesson) return;
    const example = getLessonExample(activeLesson, currentCourse.id);
    const codeToPass = customCode || code || example.files[activeExampleFile] || Object.values(example.files)[0] || activeLesson.starterCode || '';
    if (onNavigateToEditor) {
      onNavigateToEditor({
        courseId: currentCourse.id,
        lessonId: activeLesson.id,
        code: codeToPass,
        lang: currentCourse.id,
        title: `${currentCourse.title.en} > ${activeLesson.title.en}`
      });
    } else {
      window.location.hash = `#/tryit?course=${currentCourse.id}&lesson=${activeLesson.id}`;
    }
  };

  // Sync code when active file changes
  const handleFileChange = (filename: string) => {
    if (!activeLesson) return;
    const example = getLessonExample(activeLesson, currentCourse.id);
    setActiveExampleFile(filename);
    if (example.files[filename]) {
      setCode(example.files[filename]);
    }
  };

  // Bookmarks & Favorites State
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('sabaicode-bookmarks') || '[]');
    } catch {
      return [];
    }
  });

  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('sabaicode-favorites') || '[]');
    } catch {
      return [];
    }
  });

  const lessonKey = activeLesson ? `${currentCourse.id}-${activeLesson.id}` : '';
  const isBookmarked = bookmarks.includes(lessonKey);
  const isFavorite = favorites.includes(lessonKey);

  const toggleBookmark = () => {
    if (!lessonKey) return;
    let updated: string[];
    if (isBookmarked) {
      updated = bookmarks.filter(b => b !== lessonKey);
      showToast(language === 'en' ? 'Bookmark removed' : 'បានលុបចំណាំ');
    } else {
      updated = [...bookmarks, lessonKey];
      showToast(language === 'en' ? 'Lesson bookmarked!' : 'បានចំណាំមេរៀននេះ!');
    }
    setBookmarks(updated);
    localStorage.setItem('sabaicode-bookmarks', JSON.stringify(updated));
  };

  const toggleFavorite = () => {
    if (!lessonKey) return;
    let updated: string[];
    if (isFavorite) {
      updated = favorites.filter(f => f !== lessonKey);
      showToast(language === 'en' ? 'Removed from favorites' : 'បានលុបចេញពីបញ្ជីចូលចិត្ត');
    } else {
      updated = [...favorites, lessonKey];
      showToast(language === 'en' ? 'Added to favorites!' : 'បានបន្ថែមទៅបញ្ជីចូលចិត្ត!');
    }
    setFavorites(updated);
    localStorage.setItem('sabaicode-favorites', JSON.stringify(updated));
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast(language === 'en' ? 'Link copied to clipboard!' : 'បានចម្លងលីង!');
    }
  };

  // Syntax highlighting helper
  const highlightCode = (codeStr: string, lang: string): React.ReactNode => {
    if (!codeStr) return '';
    const mapPrismLang = (l: string): string => {
      const low = l.toLowerCase();
      if (['html', 'xml', 'vue', 'angular', 'tailwind', 'bootstrap', 'jquery'].includes(low)) {
        return 'markup';
      }
      if (['react', 'nextjs', 'jsx'].includes(low)) {
        return 'jsx';
      }
      if (['tsx'].includes(low)) {
        return 'tsx';
      }
      if (low === 'mysql') return 'sql';
      if (low === 'js') return 'javascript';
      if (low === 'ts') return 'typescript';
      return low;
    };
    
    const prismLang = mapPrismLang(lang);
    const grammar = Prism.languages[prismLang] || Prism.languages.clike || Prism.languages.markup;
    const html = Prism.highlight(codeStr, grammar, prismLang);
    return <code className={`language-${prismLang}`} dangerouslySetInnerHTML={{ __html: html }} />;
  };

  const renderInlineMarkdown = (text: string) => {
    if (!text) return '';
    // Strip any accidental leading header markers like ## if passed to inline renderer
    const cleanText = text.replace(/^(#+\s*)+/, '').replace(/\*\*/g, (m, offset) => offset === 0 ? '' : m);
    const parts: React.ReactNode[] = [];
    let currentIndex = 0;
    const regex = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*)/g;
    let match;
    
    while ((match = regex.exec(cleanText)) !== null) {
      const matchIndex = match.index;
      if (matchIndex > currentIndex) {
        parts.push(cleanText.substring(currentIndex, matchIndex));
      }
      
      const token = match[0];
      if (token.startsWith('`') && token.endsWith('`')) {
        const codeText = token.slice(1, -1);
        parts.push(
          <code key={matchIndex} className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-xs text-rose-500 font-semibold">
            {codeText}
          </code>
        );
      } else if (token.startsWith('**') && token.endsWith('**')) {
        const boldText = token.slice(2, -2);
        parts.push(<strong key={matchIndex} className="font-extrabold text-slate-900 dark:text-white">{boldText}</strong>);
      } else if (token.startsWith('*') && token.endsWith('*')) {
        const italicText = token.slice(1, -1);
        parts.push(<em key={matchIndex} className="italic">{italicText}</em>);
      }
      
      currentIndex = regex.lastIndex;
    }
    
    if (currentIndex < cleanText.length) {
      parts.push(cleanText.substring(currentIndex));
    }
    
    return parts.length > 0 ? parts : cleanText;
  };

  const getIllustrationPromptForFile = (filename: string, altText: string, labelText: string): string => {
    const fn = filename.toLowerCase();
    if (fn.includes('it-helpdesk-multimonitor-workstation')) {
      return `Create a clean, modern flat-design digital illustration for an IT training course. Style: soft blue and gold color palette, minimal clutter, professional but approachable, no text overlays, no logos.

Subject: An IT Support Officer at a helpdesk workstation, managing a ticket queue across dual monitors while monitoring workstation setup
Key visual elements:
- Professional, diverse-looking person wearing a headset
- Dual monitor setup, one screen showing a simplified ticket dashboard/queue, the other showing system monitoring graphs
- Desk with basic peripherals (keyboard, mouse) — keep uncluttered
- Warm, focused expression — approachable and competent, not stressed

Requirements:
- 16:9 aspect ratio, high resolution, suitable for web display
- Avoid photorealistic clutter; prioritize clarity for a beginner learner
- Leave clean negative space at the bottom 15% of the image for a caption to be added separately
- Filename to save as: it-helpdesk-multimonitor-workstation.png`;
    }

    if (fn.includes('it-support-career-path-roadmap')) {
      return `Create a clean, vector-style infographics illustration showing an IT career progression roadmap. Style: soft indigo, emerald green, and blue accents, modern tech aesthetic, clean typography placeholders, isometric or flat layout.

Subject: IT Support Career Progression Path
Key visual elements:
- Step 1: Helpdesk Tier 1 / IT Support Officer (headset, laptop, tickets)
- Step 2: Tier 2 / Systems Administrator (servers, cloud icons, networking)
- Step 3: Tier 3 / Cybersecurity Analyst or Cloud Architect (shield, locks, global network nodes)
- Connecting curved progression pathway with milestones and upward growth arrows

Requirements:
- 16:9 aspect ratio, clean white/soft gray background
- Crisp geometric shapes, easy to read for student learners
- Filename to save as: it-support-career-path-roadmap.png`;
    }

    if (fn.includes('helpdesk-communication-workflow-chart')) {
      return `Create a clean, modern workflow flowchart illustration for an IT Helpdesk communication lifecycle. Style: vibrant indigo, amber, and teal color palette, modern minimal iconography.

Subject: End-to-End IT Support Ticket Lifecycle
Key visual elements:
- Step 1: Ticket Submission (User submits issue via Email/Portal)
- Step 2: Triage & Categorization (IT Officer assigns priority: Low, Med, High)
- Step 3: Investigation & User Communication (Status update, remote troubleshooting)
- Step 4: Resolution & Verification (Ticket closed with Knowledge Base article created)
- Clear directional arrows connecting each phase with status badges (Open, In Progress, Resolved)

Requirements:
- 16:9 aspect ratio, high resolution web display
- Crisp flat vector graphics, readable hierarchy
- Filename to save as: helpdesk-communication-workflow-chart.png`;
    }

    if (fn.includes('pc-hardware-components-exploded-diagram')) {
      return `Create a detailed, clean technical vector illustration of a modern desktop PC interior layout and modular hardware components. Style: modern blueprint tech aesthetic, slate blue and cyan accents, clean exploded layout.

Subject: Desktop Computer Hardware Anatomy & Component Assembly
Key visual elements:
- Motherboard with labeled CPU socket, RAM slots (DIMM), PCIe expansion slots, and M.2 NVMe SSD slot
- Power Supply Unit (PSU) with modular cabling harness
- Dedicated Graphics Card (GPU) and CPU Air/AIO Cooler
- Highlighting interconnect cables: ATX 24-pin power, SATA, and CPU 8-pin power

Requirements:
- 16:9 aspect ratio, high contrast light/dark tech theme
- Clear visual grouping suited for computer hardware training
- Filename to save as: pc-hardware-components-exploded-diagram.png`;
    }

    if (fn.includes('pc-post-boot-troubleshooting-flowchart')) {
      return `Create a clean technical decision tree flowchart for PC POST (Power-On Self-Test) diagnostic troubleshooting. Style: clean vector design, emerald green (pass), amber (warning), and crimson red (error) color coding.

Subject: Computer Boot & POST Failure Troubleshooting Flowchart
Key visual elements:
- Start Node: Power Button Pressed -> Fans Spinning?
- Decision Node: Beep Codes / Diagnostic LEDs lit?
- Path A: No Power -> Check PSU switch, wall outlet, 24-pin ATX cable
- Path B: Power ON but No Display -> Re-seat RAM, check GPU power, inspect HDMI/DisplayPort cable
- Path C: POST Complete -> Boots into BIOS/UEFI

Requirements:
- 16:9 aspect ratio, high legibility, clean vector arrows and decision diamonds
- Filename to save as: pc-post-boot-troubleshooting-flowchart.png`;
    }

    if (fn.includes('printer-network-usb-spooler-management')) {
      return `Create a clean isometric vector illustration showing office printer network architecture and Windows Print Spooler management. Style: soft blue, teal, and slate tones.

Subject: Office Network & Local USB Printer Architecture
Key visual elements:
- Centralized Office Network Printer connected via IP address (RJ45 / Wi-Fi)
- Workstation sending print jobs through Print Server / Local Print Spooler queue
- Diagnostic panel showing "Printer Offline", "Paper Jam", and "Clear Print Spooler (\`services.msc\`)"
- Visual data packet icons moving from PC through network switch to printer

Requirements:
- 16:9 aspect ratio, modern flat vector, clean white background
- Filename to save as: printer-network-usb-spooler-management.png`;
    }

    if (fn.includes('esd-wrist-strap-grounding-safety')) {
      return `Create an educational vector illustration depicting Electrostatic Discharge (ESD) prevention and safe PC hardware servicing practices. Style: safety yellow, indigo, and slate gray palette.

Subject: Safe PC Assembly & ESD Anti-Static Protection
Key visual elements:
- IT technician wearing an ESD anti-static wrist strap clipped to an unpainted metal chassis ground
- Anti-static mat placed on a clean workbench holding RAM modules and motherboard
- Warning badge contrasting ESD damage (invisible static discharge) vs grounded safe handling
- Safe tools: magnetic Phillips screwdriver, thermal paste applicator, cable ties

Requirements:
- 16:9 aspect ratio, clear instructional layout for beginners
- Filename to save as: esd-wrist-strap-grounding-safety.png`;
    }

    if (fn.includes('dhcp-dns-ip-network-flow-diagram')) {
      return `Create a clean, modern network protocol sequence diagram illustrating DHCP (DORA) and DNS resolution. Style: vibrant cyan, purple, and slate blue vector graphics.

Subject: Network IP Assignment (DHCP DORA) & Domain Name Resolution (DNS)
Key visual elements:
- DHCP DORA Process: Discover -> Offer -> Request -> Acknowledge between Client PC and Router/DHCP Server
- DNS Resolution Flow: Client PC requests website name -> DNS Server resolves to IP -> Web Server responds
- Visual badges for IP Address, Subnet Mask, Default Gateway, and Preferred DNS (8.8.8.8)

Requirements:
- 16:9 aspect ratio, intuitive step-by-step numbered visual flow
- Filename to save as: dhcp-dns-ip-network-flow-diagram.png`;
    }

    if (fn.includes('office-network-topology-diagram')) {
      return `Create a modern corporate office network topology architecture diagram. Style: dark navy slate background with glowing blue, cyan, and emerald network paths.

Subject: Small-to-Medium Enterprise (SME) Network Architecture
Key visual elements:
- Internet ISP Gateway -> Hardware Firewall / Router -> Managed Network Switch
- Network Switch connecting: Office Workstations, Wi-Fi Access Points (APs), Network Printer, and Local Server/NAS
- Distinction between Local Area Network (LAN) subnet (192.168.1.x) and WAN Public IP

Requirements:
- 16:9 aspect ratio, crisp vector icons, professional IT infrastructure layout
- Filename to save as: office-network-topology-diagram.png`;
    }

    if (fn.includes('network-troubleshooting-flowchart-ping')) {
      return `Create a clean technical flowchart illustration for Network Connectivity Troubleshooting using Command Line tools (\`ping\`, \`traceroute\`, \`ipconfig\`). Style: dark terminal style box accents with emerald green and amber status indicators.

Subject: Step-by-Step CLI Network Troubleshooting Flow
Key visual elements:
- Step 1: \`ipconfig /all\` (Verify local IP assignment)
- Step 2: \`ping 127.0.0.1\` (Test local TCP/IP stack)
- Step 3: \`ping [Default Gateway]\` (Test local network switch & router connection)
- Step 4: \`ping 8.8.8.8\` & \`nslookup google.com\` (Test WAN Internet & DNS resolution)

Requirements:
- 16:9 aspect ratio, clean flowchart structure with CLI command boxes
- Filename to save as: network-troubleshooting-flowchart-ping.png`;
    }

    if (fn.includes('helpdesk-ticketing-system-sla-dashboard')) {
      return `Create a modern IT Service Management (ITSM) Helpdesk Ticket Dashboard UI illustration. Style: sleek slate dark/light UI design with status badges (Critical, High, Medium, Low) and Service Level Agreement (SLA) timers.

Subject: Helpdesk Ticket Queue & SLA Incident Management
Key visual elements:
- Ticket Table showing Ticket ID, Reporter, Subject ("VPN connection drops"), Category, Priority, and Status
- SLA Countdown timer widget showing "First Response Time: 12 mins remaining"
- Clean analytics chart showing Open Tickets vs Resolved Tickets per day

Requirements:
- 16:9 aspect ratio, clean modern web UI mockup presentation
- Filename to save as: helpdesk-ticketing-system-sla-dashboard.png`;
    }

    if (fn.includes('quick-assist-remote-desktop-session')) {
      return `Create a modern vector illustration depicting a Remote Desktop Support session using Windows Quick Assist / Remote Desktop (RDP). Style: soft indigo, blue, and amber color theme.

Subject: IT Support Remote Assistance & Session Sharing
Key visual elements:
- Support Officer laptop generating a 6-digit Security Code
- Remote User PC screen entering code to grant screen control
- Visual indication of secure encrypted remote connection with mouse pointer and chat toolbar
- Split perspective showing both technician workstation and user desktop

Requirements:
- 16:9 aspect ratio, approachable professional aesthetic
- Filename to save as: quick-assist-remote-desktop-session.png`;
    }

    if (fn.includes('it-kb-article-documentation-template')) {
      return `Create a clean vector illustration of an IT Knowledge Base (KB) Article & Standard Operating Procedure (SOP) documentation template. Style: clean paper/document editor aesthetic with teal and indigo accents.

Subject: IT Helpdesk Knowledge Base Documentation Template
Key visual elements:
- Article Layout: Issue Title, Symptom Description, Environment/Prerequisites, Step-by-Step Resolution Steps with screenshots, and Tagging
- Badges: "Verified Solution", "Last Updated", "Author: IT Support Team"
- Side index showing related KB articles and feedback rating stars

Requirements:
- 16:9 aspect ratio, clean readable document layout presentation
- Filename to save as: it-kb-article-documentation-template.png`;
    }

    return `Create a clean, modern flat-design digital vector illustration for an IT training course. Style: soft indigo and blue palette, minimal clutter, professional and clear, no text overlays, no logos.

Subject: ${labelText || 'IT Support Technical Concept'}
Key visual elements:
- ${altText || 'Technical workflow diagram showing clear step-by-step IT support procedures'}
- Modern minimal iconography, structured layout, high clarity for student learning

Requirements:
- 16:9 aspect ratio, high resolution web display
- Filename to save as: ${filename}`;
  };

  const renderMarkdown = (text: string) => {
    const blocks: { type: string; lang?: string; level?: number; content: string }[] = [];
    const lines = text.split('\n');
    let inCodeBlock = false;
    let currentLang = '';
    let codeLines: string[] = [];
    let currentParagraphLines: string[] = [];

    const flushParagraph = () => {
      if (currentParagraphLines.length > 0) {
        const content = currentParagraphLines.join('\n').trim();
        if (content) {
          if (content.startsWith('> ')) {
            blocks.push({ type: 'blockquote', content: content.replace(/^>\s*/gm, '').trim() });
          } else if (content.startsWith('#### ')) {
            blocks.push({ type: 'heading', level: 4, content: content.replace(/^####\s*/, '').trim() });
          } else if (content.startsWith('### ')) {
            blocks.push({ type: 'heading', level: 3, content: content.replace(/^###\s*/, '').trim() });
          } else if (content.startsWith('## ')) {
            blocks.push({ type: 'heading', level: 2, content: content.replace(/^##\s*/, '').trim() });
          } else if (content.startsWith('# ')) {
            blocks.push({ type: 'heading', level: 1, content: content.replace(/^#\s*/, '').trim() });
          } else if (content.startsWith('- ') || content.startsWith('* ') || /^\d+\./.test(content)) {
            blocks.push({ type: 'list', content });
          } else {
            blocks.push({ type: 'paragraph', content });
          }
        }
        currentParagraphLines = [];
      }
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();

      if (trimmed.startsWith('<figure') || trimmed.startsWith('<div class="screenshot') || trimmed.startsWith('<div class="illustration')) {
        flushParagraph();
        let figureLines: string[] = [line];
        const isDiv = trimmed.startsWith('<div');
        const endTag = isDiv ? '</div>' : '</figure>';
        while (i + 1 < lines.length && !lines[i].includes(endTag)) {
          i++;
          figureLines.push(lines[i]);
        }
        blocks.push({ type: 'figure', content: figureLines.join('\n') });
      } else if (trimmed.startsWith('```')) {
        if (inCodeBlock) {
          blocks.push({ type: 'code', lang: currentLang, content: codeLines.join('\n') });
          codeLines = [];
          inCodeBlock = false;
        } else {
          flushParagraph();
          inCodeBlock = true;
          currentLang = trimmed.substring(3).trim();
        }
      } else if (inCodeBlock) {
        codeLines.push(line);
      } else if (trimmed.startsWith('# ') || trimmed.startsWith('## ') || trimmed.startsWith('### ') || trimmed.startsWith('#### ')) {
        flushParagraph();
        let level = 1;
        if (trimmed.startsWith('#### ')) level = 4;
        else if (trimmed.startsWith('### ')) level = 3;
        else if (trimmed.startsWith('## ')) level = 2;
        
        const headingText = trimmed.replace(/^#+\s*/, '').trim();
        blocks.push({ type: 'heading', level, content: headingText });
      } else if (trimmed.startsWith('> ')) {
        flushParagraph();
        const bqContent = trimmed.replace(/^>\s*/, '').trim();
        blocks.push({ type: 'blockquote', content: bqContent });
      } else {
        if (trimmed === '') {
          flushParagraph();
        } else {
          currentParagraphLines.push(line);
        }
      }
    }
    flushParagraph();

    return blocks.map((block, i) => {
      switch (block.type) {
        case 'figure': {
          const raw = block.content;

          // Check for Illustration Placeholder Card
          if (raw.includes('illustration-instruction-card') || raw.includes('ILLUSTRATION NEEDED') || raw.includes('illustration-prompt')) {
            const h4Match = raw.match(/<h4[^>]*>(.*?)<\/h4>/s);
            const title = h4Match ? h4Match[1].trim() : 'Illustration Required';

            const promptMatch = raw.match(/<p class=["']illustration-prompt["'][^>]*>(.*?)<\/p>/s) ||
                                raw.match(/<div class=["']illustration-prompt["'][^>]*>(.*?)<\/div>/s) ||
                                raw.match(/<pre[^>]*>(.*?)<\/pre>/s);
            const prompt = promptMatch ? promptMatch[1].trim() : '';

            const noteMatch = raw.match(/<p class=["']illustration-note["'][^>]*>(.*?)<\/p>/s) ||
                              raw.match(/<p class=["']screenshot-note["'][^>]*>(.*?)<\/p>/s);
            let imagePath = noteMatch ? noteMatch[1].trim() : '';
            if (!imagePath) {
              const pathMatch = raw.match(/\/images\/lessons\/[a-zA-Z0-9_-]+\.png/);
              imagePath = pathMatch ? pathMatch[0] : '/images/lessons/illustration.png';
            } else {
              imagePath = imagePath.replace(/^Once generated, replace this placeholder with the actual image at:\s*/i, '')
                                  .replace(/^Once captured, replace this placeholder with the actual image at:\s*/i, '').trim();
            }

            return (
              <IllustrationPlaceholder
                key={i}
                title={title}
                prompt={prompt}
                imagePath={imagePath}
              />
            );
          }

          // Check for Screenshot Placeholder Card
          if (raw.includes('screenshot-instruction-card') || raw.includes('SCREENSHOT NEEDED') || raw.includes('screenshot-instructions')) {
            const h4Match = raw.match(/<h4[^>]*>(.*?)<\/h4>/s);
            const title = h4Match ? h4Match[1].trim() : 'Screenshot Required';

            const instrMatch = raw.match(/<p class=["']screenshot-instructions["'][^>]*>(.*?)<\/p>/s) || raw.match(/<div class=["']screenshot-instructions["'][^>]*>(.*?)<\/div>/s);
            const instructions = instrMatch ? instrMatch[1].trim() : '';

            const noteMatch = raw.match(/<p class=["']screenshot-note["'][^>]*>(.*?)<\/p>/s);
            let imagePath = noteMatch ? noteMatch[1].trim() : '';
            if (!imagePath) {
              const pathMatch = raw.match(/\/images\/lessons\/[a-zA-Z0-9_-]+\.png/);
              imagePath = pathMatch ? pathMatch[0] : '/images/lessons/screenshot.png';
            } else {
              imagePath = imagePath.replace(/^Once captured, replace this placeholder with the actual image at:\s*/i, '').trim();
            }

            const iconType = raw.toLowerCase().includes('monitor') ? 'monitor' : 'camera';

            return (
              <ScreenshotPlaceholder
                key={i}
                title={title}
                instructions={instructions}
                imagePath={imagePath}
                iconType={iconType}
              />
            );
          }

          const srcMatch = raw.match(/src=["']([^"']+)["']/);
          const altMatch = raw.match(/alt=["']([^"']+)["']/);
          const strongMatch = raw.match(/<strong>(.*?)<\/strong>/s);
          const pMatch = raw.match(/<p>(.*?)<\/p>/s);

          const src = srcMatch ? srcMatch[1] : '';
          const alt = altMatch ? altMatch[1] : '';
          const label = strongMatch ? strongMatch[1].trim() : 'Figure Example';
          const desc = pMatch ? pMatch[1].trim() : '';

          const isPlaceholder = src.includes('PLACEHOLDER:');
          const filename = isPlaceholder ? src.replace(/\[?PLACEHOLDER:\s*/, '').replace(/\]$/, '').trim() : src;

          if (isPlaceholder) {
            const prompt = getIllustrationPromptForFile(filename, alt, label);
            return (
              <IllustrationPlaceholder
                key={i}
                title={label}
                prompt={prompt}
                imagePath={`/images/lessons/${filename}`}
                description={alt}
              />
            );
          }

          return (
            <figure key={i} className="lesson-image-example my-6 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-slate-50/80 dark:bg-slate-900/80 shadow-xs">
              <div className="bg-slate-900 text-slate-200 px-4 py-2.5 flex items-center justify-between text-xs font-mono border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                  <span className="font-semibold text-cyan-300">Technical Diagram / Screenshot</span>
                </div>
                <span className="text-[11px] bg-slate-800 text-slate-300 px-2.5 py-0.5 rounded border border-slate-700/80 font-mono truncate max-w-[200px] sm:max-w-xs">
                  {filename}
                </span>
              </div>
              
              <div className="p-6 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white min-h-[160px] relative overflow-hidden group">
                <img src={src} alt={alt} className="max-h-72 object-contain rounded-lg shadow-md" />
              </div>

              <figcaption className="p-4 bg-white dark:bg-slate-900 text-left border-t border-slate-200/80 dark:border-slate-800">
                <strong className="block text-sm font-bold text-slate-900 dark:text-slate-100 mb-1">
                  {renderInlineMarkdown(label)}
                </strong>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  {renderInlineMarkdown(desc)}
                </p>
              </figcaption>
            </figure>
          );
        }
        case 'blockquote':
          return (
            <div key={i} className="p-4 bg-amber-50/80 dark:bg-amber-950/20 border-l-4 border-amber-500 rounded-r-2xl text-xs sm:text-sm text-slate-800 dark:text-slate-200 my-5 leading-relaxed font-medium text-left">
              {renderInlineMarkdown(block.content)}
            </div>
          );
        case 'heading':
          if (block.level === 3) {
            return <h3 key={i} className="text-base font-extrabold text-slate-900 dark:text-white mt-6 mb-3 text-left tracking-tight">{renderInlineMarkdown(block.content)}</h3>;
          }
          if (block.level === 2) {
            return <h2 key={i} className="text-lg font-black text-slate-900 dark:text-white mt-8 mb-4 text-left tracking-tight">{renderInlineMarkdown(block.content)}</h2>;
          }
          return <h1 key={i} className="text-xl font-black text-slate-950 dark:text-white mt-10 mb-5 text-left tracking-tight">{renderInlineMarkdown(block.content)}</h1>;
        case 'code':
          const lang = block.lang || 'javascript';
          return (
            <div key={i} className="my-5 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
              <div className="bg-slate-900 px-4 py-2 flex items-center justify-between text-[11px] font-mono text-slate-400 border-b border-slate-800">
                <span className="font-bold text-slate-300">{lang}</span>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(block.content);
                      showToast(language === 'en' ? 'Code copied' : 'បានចម្លងកូដ');
                    }}
                    className="flex items-center space-x-1 hover:text-white transition cursor-pointer"
                  >
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </button>
                  <button
                    onClick={() => handleOpenInEditor(block.content)}
                    className="flex items-center space-x-1 text-indigo-400 hover:text-indigo-300 font-bold transition cursor-pointer"
                    title="Try it yourself in full editor"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>{language === 'en' ? 'Try it yourself' : 'សាកល្បងដោយខ្លួនឯង'}</span>
                  </button>
                </div>
              </div>
              <pre className={`language-${lang} p-4 bg-slate-950 text-xs text-slate-200 leading-relaxed font-mono overflow-x-auto select-text text-left`}>
                {highlightCode(block.content, lang)}
              </pre>
            </div>
          );
        case 'list':
          const items = block.content.split('\n');
          return (
            <ul key={i} className="list-disc pl-5 space-y-1.5 my-4 text-slate-700 dark:text-slate-300 text-left">
              {items.map((li, j) => (
                <li key={j} className="text-xs sm:text-sm leading-relaxed">
                  {renderInlineMarkdown(li.replace(/^[\s\d.\-*]+\s*/, ''))}
                </li>
              ))}
            </ul>
          );
        case 'paragraph':
        default:
          return (
            <p key={i} className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mb-4 leading-relaxed text-left font-sans">
              {renderInlineMarkdown(block.content)}
            </p>
          );
      }
    });
  };

  // Run Code logic
  const runCode = async () => {
    setIsRunning(true);
    setConsoleOutput('Running execution engine...');

    const localIframeLanguages = [
      'html', 'css', 'javascript', 'jquery', 'react', 'nextjs', 
      'tailwind', 'bootstrap', 'vue', 'angular', 'xml', 'sass', 'scss', 'flutter'
    ];

    if (localIframeLanguages.includes(currentCourse.id)) {
      const consoleScript = `
        <script>
          (function() {
            const logs = [];
            const _log = console.log;
            const _err = console.error;
            const _warn = console.warn;
            console.log = function(...args) {
              const msg = args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ');
              logs.push(msg);
              _log.apply(console, args);
              window.parent.postMessage({ type: 'iframe-console', logs: logs.join('\\n') }, '*');
            };
            console.error = function(...args) {
              const msg = '[Error] ' + args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ');
              logs.push(msg);
              _err.apply(console, args);
              window.parent.postMessage({ type: 'iframe-console', logs: logs.join('\\n') }, '*');
            };
            console.warn = function(...args) {
              const msg = '[Warn] ' + args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ');
              logs.push(msg);
              _warn.apply(console, args);
              window.parent.postMessage({ type: 'iframe-console', logs: logs.join('\\n') }, '*');
            };
            window.onerror = function(msg, url, line) {
              logs.push('[Uncaught Error] ' + msg + ' (line ' + line + ')');
              window.parent.postMessage({ type: 'iframe-console', logs: logs.join('\\n') }, '*');
            };
          })();
        </script>
      `;

      const khmerFontStyles = `
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Kantumruy+Pro:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet">
        <style>
          html, body {
            font-family: 'Kantumruy Pro', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
            line-height: 1.6 !important;
          }
          h1, h2, h3, h4, h5, h6 {
            line-height: 1.4 !important;
          }
        </style>
      `;

      let htmlBundle = '';

      if (currentCourse.id === 'react' || currentCourse.id === 'nextjs') {
        const isFullHtml = /<!DOCTYPE html>|<html/i.test(code);
        if (isFullHtml) {
          htmlBundle = code.replace('<head>', `<head>${khmerFontStyles}${consoleScript}`);
        } else {
          htmlBundle = `
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>React Live Sandbox</title>
              ${khmerFontStyles}
              ${consoleScript}
              <script src="https://cdn.tailwindcss.com"></script>
              <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
              <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
              <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
              <script>
                window.React = React;
                window.ReactDOM = ReactDOM;
                const { useState, useEffect, useRef, useMemo, useCallback, useContext, createContext, useReducer } = React;
              </script>
            </head>
            <body class="bg-slate-50 text-slate-900 min-h-screen p-4">
              <div id="root"></div>
              <script type="text/babel">
                try {
                  ${code.replace(/export\s+default\s+/, ' ')}

                  const hasReactMount = /ReactDOM\.(?:createRoot|render)|render\(/i.test(\`${code.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`);
                  if (!hasReactMount) {
                    const possibleNames = ['App', 'HomePage', 'Home', 'Counter', 'Welcome', 'CustomCounter', 'PlaygroundApp', 'Main', 'Component'];
                    let componentToMount = null;
                    for (const name of possibleNames) {
                      try {
                        if (typeof eval(name) === 'function') {
                          componentToMount = name;
                          break;
                        }
                      } catch (e) {}
                    }
                    if (!componentToMount) {
                      const firstFuncMatch = \`${code.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`.match(/(?:function|class)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/);
                      if (firstFuncMatch && firstFuncMatch[1]) {
                        componentToMount = firstFuncMatch[1];
                      }
                    }
                    if (componentToMount) {
                      const root = ReactDOM.createRoot(document.getElementById('root'));
                      const Element = eval(componentToMount);
                      root.render(<Element />);
                    }
                  }
                } catch (err) {
                  console.error(err);
                  document.getElementById('root').innerHTML = '<div class="p-4 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-xs font-mono"><strong>React Runtime Error:</strong><br/>' + (err.message || err) + '</div>';
                }
              </script>
            </body>
            </html>
          `;
        }
      } else if (currentCourse.id === 'vue') {
        const escapedCode = code.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
        htmlBundle = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Vue 3 Live Sandbox</title>
            ${khmerFontStyles}
            ${consoleScript}
            <script src="https://cdn.tailwindcss.com"></script>
            <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
            <style>body { padding: 16px; margin: 0; background-color: #f8fafc; }</style>
          </head>
          <body>
            <div id="sandbox-root">
              <div id="app"></div>
            </div>
            <script>
              try {
                const userCode = \`${escapedCode}\`;
                const { createApp, ref, reactive, computed, onMounted } = Vue;

                if (userCode.includes('createApp')) {
                  eval(userCode);
                } else if (userCode.includes('<template>')) {
                  const templateMatch = userCode.match(/<template>([\\s\\S]*?)<\\/template>/i);
                  const template = templateMatch ? templateMatch[1] : userCode;
                  const app = createApp({ template });
                  app.mount('#app');
                } else {
                  const app = createApp({
                    template: '<div class="p-4 bg-white rounded-xl shadow-sm border border-slate-200"><h2 class="text-base font-bold text-emerald-600 mb-2">Vue 3 App</h2><div>' + userCode.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</div></div>'
                  });
                  app.mount('#app');
                }
              } catch(err) {
                console.error(err);
                document.getElementById('app').innerHTML = '<div class="p-4 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-xs font-mono"><strong>Vue Runtime Error:</strong><br/>' + (err.message || err) + '</div>';
              }
            </script>
          </body>
          </html>
        `;
      } else if (currentCourse.id === 'angular') {
        const escapedCode = code.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
        htmlBundle = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            ${khmerFontStyles}
            ${consoleScript}
            <script src="https://cdn.tailwindcss.com"></script>
            <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
            <style>body { font-family: sans-serif; padding: 20px; margin: 0; background-color: #f8fafc; }</style>
          </head>
          <body>
            <div id="sandbox-root">
              <div class="p-4 bg-white rounded-xl shadow-sm border border-slate-200">
                <h3 class="text-sm font-bold text-red-600 mb-2">Angular Component Live</h3>
                <div id="angular-outlet" class="text-xs font-mono text-slate-700"></div>
              </div>
            </div>
            <script>
              const AngularCore = {
                signal: function(initialValue) {
                  let value = initialValue;
                  const listeners = new Set();
                  const s = function() {
                    return value;
                  };
                  s.set = function(newValue) { value = newValue; listeners.forEach(fn => fn()); };
                  s.update = function(fn) { s.set(fn(value)); };
                  return s;
                },
                Component: function(metadata) {
                  return function(targetClass) { targetClass.metadata = metadata; return targetClass; };
                }
              };
              window.AngularCore = AngularCore;
            </script>
            <script>
              const userCode = \`${escapedCode}\`;
              try {
                const compiledClassCode = Babel.transform(userCode.replace(/export\\s+/g, ''), {
                  presets: [['typescript', { allExtensions: true, isTSX: true }]]
                }).code;
                eval(compiledClassCode);
                document.getElementById('angular-outlet').innerHTML = "<div class='text-emerald-600 font-sans text-xs'>✅ Angular Component & Signals compiled successfully!</div>";
              } catch(e) {
                console.error(e.message || e);
                document.getElementById('angular-outlet').innerHTML = "<pre class='text-rose-500 font-mono text-xs'>" + (e.message || e) + "</pre>";
              }
            </script>
          </body>
          </html>
        `;
      } else if (currentCourse.id === 'flutter') {
        htmlBundle = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            ${khmerFontStyles}
            ${consoleScript}
            <script src="https://cdn.tailwindcss.com"></script>
            <style>body { margin: 0; padding: 16px; background-color: #0f172a; color: #f8fafc; font-family: system-ui, sans-serif; }</style>
          </head>
          <body class="flex flex-col items-center justify-center min-h-screen">
            <div class="w-full max-w-sm bg-slate-900 border-4 border-slate-700 rounded-3xl overflow-hidden shadow-2xl">
              <div class="h-6 bg-slate-800 flex items-center justify-between px-4 text-[10px] text-slate-400">
                <span>9:41</span>
                <span>5G 100%</span>
              </div>
              <div class="p-6 bg-indigo-600 text-white text-center">
                <h1 class="text-lg font-bold">Flutter Live View</h1>
                <p class="text-xs text-indigo-200 mt-1">Widget Tree Preview</p>
              </div>
              <div class="p-6 space-y-4 bg-slate-950 text-slate-200 text-xs">
                <div class="p-4 bg-slate-900 rounded-2xl border border-slate-800">
                  <span class="text-sky-400 font-mono font-bold">StatelessWidget / State:</span>
                  <p class="mt-2 text-slate-300">Widget code compiled and rendered in Flutter sandbox.</p>
                </div>
                <button class="w-full py-3 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-xl shadow-lg transition">
                  Interactive Widget
                </button>
              </div>
            </div>
            <script>
              console.log("Flutter engine initialized: main.dart running successfully.");
            </script>
          </body>
          </html>
        `;
      } else if (currentCourse.id === 'xml' && (code.trim().startsWith('<?xml') || (!code.includes('<html') && !code.includes('<script')))) {
        const escapedXml = code.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
        htmlBundle = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            ${khmerFontStyles}
            ${consoleScript}
            <script src="https://cdn.tailwindcss.com"></script>
            <style>
              body { padding: 16px; margin: 0; background-color: #0f172a; color: #f8fafc; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: 13px; }
              .xml-tag { color: #f5a623; font-weight: bold; }
              .xml-attr-name { color: #38bdf8; }
              .xml-attr-val { color: #f43f5e; }
              .xml-text { color: #f8fafc; }
              .xml-comment { color: #64748b; font-style: italic; }
            </style>
          </head>
          <body>
            <div id="xml-render-tree" class="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl overflow-x-auto"></div>
            <script>
              (function() {
                const xmlString = \`${escapedXml}\`;
                const container = document.getElementById('xml-render-tree');
                try {
                  const parser = new DOMParser();
                  const xmlDoc = parser.parseFromString(xmlString, "application/xml");
                  const parseError = xmlDoc.getElementsByTagName("parsererror");
                  if (parseError.length > 0) {
                    container.innerHTML = '<div class="text-rose-400 font-sans p-3 bg-rose-950/40 border border-rose-800/60 rounded-xl"><strong>XML Syntax / Well-Formedness Error:</strong><br/><pre class="mt-2 text-xs font-mono text-rose-300 whitespace-pre-wrap">' + parseError[0].textContent.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</pre></div>';
                  } else {
                    function renderNode(node, indent = 0) {
                      let html = '';
                      const pad = '&nbsp;'.repeat(indent * 4);
                      if (node.nodeType === 1) {
                        html += '<div>' + pad + '<span class="xml-tag">&lt;' + node.nodeName + '</span>';
                        for (let attr of node.attributes) {
                          html += ' <span class="xml-attr-name">' + attr.name + '</span>=<span class="xml-attr-val">"' + attr.value + '"</span>';
                        }
                        if (node.childNodes.length === 0) {
                          html += '<span class="xml-tag">/&gt;</span></div>';
                        } else {
                          html += '<span class="xml-tag">&gt;</span>';
                          let hasChildElements = false;
                          for (let child of node.childNodes) {
                            if (child.nodeType === 1) { hasChildElements = true; break; }
                          }
                          if (hasChildElements) {
                            html += '</div>';
                            for (let child of node.childNodes) {
                              html += renderNode(child, indent + 1);
                            }
                            html += '<div>' + pad + '<span class="xml-tag">&lt;/' + node.nodeName + '&gt;</span></div>';
                          } else {
                            for (let child of node.childNodes) {
                              if (child.nodeType === 3) {
                                html += '<span class="xml-text">' + child.textContent.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</span>';
                              }
                            }
                            html += '<span class="xml-tag">&lt;/' + node.nodeName + '&gt;</span></div>';
                          }
                        }
                      } else if (node.nodeType === 8) {
                        html += '<div>' + pad + '<span class="xml-comment">&lt;!-- ' + node.nodeValue + ' --&gt;</span></div>';
                      }
                      return html;
                    }
                    container.innerHTML = '<div class="mb-3 text-xs font-sans text-amber-400 font-bold flex items-center gap-1.5"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> Valid Well-Formed XML Document Tree</div>' + renderNode(xmlDoc.documentElement);
                  }
                } catch(e) {
                  container.innerHTML = '<div class="text-rose-400 font-sans p-3 bg-rose-950/40 border border-rose-800 rounded-xl">Error: ' + e.message + '</div>';
                }
              })();
            </script>
          </body>
          </html>
        `;
      } else if (currentCourse.id === 'javascript' || currentCourse.id === 'jquery') {
        let cdn = currentCourse.id === 'jquery' ? '<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>' : '';
        htmlBundle = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            ${khmerFontStyles}
            ${consoleScript}
            ${cdn}
            <script src="https://cdn.tailwindcss.com"></script>
            <style>body { font-family: system-ui, sans-serif; padding: 16px; margin: 0; background-color: #ffffff; color: #1e293b; }</style>
          </head>
          <body>
            <div id="app"></div>
            <script>
              try {
                ${code}
              } catch(e) {
                console.error(e.message || e);
              }
            </script>
          </body>
          </html>
        `;
      } else if (!code.includes('<!DOCTYPE html>') && !code.includes('<html>')) {
        let extraCDN = '';
        if (currentCourse.id === 'tailwind') extraCDN = `<script src="https://cdn.tailwindcss.com"></script>`;
        if (currentCourse.id === 'bootstrap') extraCDN = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>`;

        htmlBundle = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            ${khmerFontStyles}
            ${consoleScript}
            <style>body { padding: 16px; margin: 0; background-color: #ffffff; }</style>
            ${extraCDN}
          </head>
          <body>
            ${code}
          </body>
          </html>
        `;
      } else {
        htmlBundle = code.includes('<head>') 
          ? code.replace('<head>', `<head>${khmerFontStyles}${consoleScript}`)
          : `<!DOCTYPE html><html><head>${khmerFontStyles}${consoleScript}</head><body>${code}</body></html>`;
      }

      setTimeout(() => {
        setIframeSrc(htmlBundle);
        setIsRunning(false);
        setOutputTab('output');
      }, 250);

    } else {
      const extMap: Record<string, string> = {
        python: 'py', typescript: 'ts', java: 'java', c: 'c', cpp: 'cpp', csharp: 'cs', 
        php: 'php', kotlin: 'kt', swift: 'swift', dart: 'dart', sql: 'sql', mysql: 'sql',
        mongodb: 'js', 'spring-boot': 'java', git: 'sh', it_support: 'sh'
      };
      const ext = extMap[currentCourse.id] || 'py';

      try {
        const resolved = await getPistonRuntime(currentCourse.id);
        let fileName = `main.${ext}`;
        if (currentCourse.id === 'java' || currentCourse.id === 'spring-boot') {
          const classMatch = code.match(/(?:public\s+)?class\s+(\w+)/);
          fileName = classMatch && classMatch[1] ? `${classMatch[1]}.java` : 'Main.java';
        }

        const isSql = currentCourse.id === 'sql' || currentCourse.id === 'mysql';
        const executableCode = isSql ? SQL_SEED_SCRIPT + '\n' + code : code;

        const result = await ExecutionService.executeCode(resolved.language, executableCode, {
          version: resolved.version,
          files: [{ name: fileName, content: executableCode }],
          courseId: currentCourse.id,
          lessonId: activeLesson?.id
        });

        setConsoleOutput(result.output || 'Code executed with no output.');
        setOutputTab('console');
      } catch (err) {
        setConsoleOutput(`Execution Output:\n${err}`);
        setOutputTab('console');
      } finally {
        setIsRunning(false);
      }
    }
  };

  // Completion Logic
  const handleMarkAsCompleted = () => {
    if (!activeLesson) return;
    completeLesson(currentCourse.id, activeLesson.id, code);
    canvasConfetti({ particleCount: 120, spread: 70, origin: { y: 0.6 } });
    showToast(language === 'en' ? 'Lesson Completed! +50 XP' : 'បានបញ្ចប់មេរៀន! +៥០ XP');
  };

  const isLessonCompleted = activeLesson 
    ? (
        progress.completedLessons.includes(`${currentCourse.id}-${activeLesson.id}`) ||
        progress.completedLessons.includes(`${currentCourse.id}_${activeLesson.id}`) ||
        progress.completedLessons.includes(activeLesson.id)
      ) 
    : false;

  // Next / Previous navigation calculation
  const flatLessons = currentCourse.topics.flatMap(t => t.lessons);
  const currentLessonIndex = activeLesson ? flatLessons.findIndex(l => l.id === activeLesson.id) : -1;
  const prevLesson = currentLessonIndex > 0 ? flatLessons[currentLessonIndex - 1] : null;
  const nextLesson = currentLessonIndex < flatLessons.length - 1 ? flatLessons[currentLessonIndex + 1] : null;

  // Course completion percentage calculation
  const completedInCourse = flatLessons.filter(l => 
    progress.completedLessons.includes(`${currentCourse.id}-${l.id}`) ||
    progress.completedLessons.includes(`${currentCourse.id}_${l.id}`) ||
    progress.completedLessons.includes(l.id)
  ).length;
  const coursePercent = flatLessons.length > 0 ? Math.round((completedInCourse / flatLessons.length) * 100) : 0;

  const getEditorLanguage = () => {
    if (activeExampleFile) {
      if (activeExampleFile.endsWith('.html') || activeExampleFile.endsWith('.htm')) return 'html';
      if (activeExampleFile.endsWith('.css')) return 'css';
      if (activeExampleFile.endsWith('.scss') || activeExampleFile.endsWith('.sass')) return 'scss';
      if (activeExampleFile.endsWith('.js') || activeExampleFile.endsWith('.jsx')) return 'javascript';
      if (activeExampleFile.endsWith('.ts') || activeExampleFile.endsWith('.tsx')) return 'typescript';
      if (activeExampleFile.endsWith('.py')) return 'python';
      if (activeExampleFile.endsWith('.java')) return 'java';
      if (activeExampleFile.endsWith('.c')) return 'c';
      if (activeExampleFile.endsWith('.cpp') || activeExampleFile.endsWith('.cc') || activeExampleFile.endsWith('.h')) return 'cpp';
      if (activeExampleFile.endsWith('.cs')) return 'csharp';
      if (activeExampleFile.endsWith('.php')) return 'php';
      if (activeExampleFile.endsWith('.kt')) return 'kotlin';
      if (activeExampleFile.endsWith('.swift')) return 'swift';
      if (activeExampleFile.endsWith('.dart')) return 'dart';
      if (activeExampleFile.endsWith('.sql')) return 'sql';
      if (activeExampleFile.endsWith('.xml')) return 'xml';
      if (activeExampleFile.endsWith('.sh') || activeExampleFile.endsWith('.bash')) return 'shell';
    }

    const editorMap: Record<string, string> = {
      html: 'html', css: 'css', javascript: 'javascript', typescript: 'typescript',
      python: 'python', java: 'java', c: 'c', cpp: 'cpp', csharp: 'csharp',
      php: 'php', kotlin: 'kotlin', swift: 'swift', sql: 'sql', mysql: 'sql', jquery: 'javascript',
      react: 'javascript', nextjs: 'javascript', tailwind: 'html', bootstrap: 'html', vue: 'html', angular: 'typescript',
      flutter: 'dart', dart: 'dart', xml: 'xml', 'spring-boot': 'java', mongodb: 'javascript',
      git: 'shell', it_support: 'shell'
    };
    return editorMap[currentCourse.id] || 'javascript';
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-slate-50 dark:bg-slate-950 flex flex-col transition-colors duration-200 text-left">
      
      {/* 1. Command Palette Modal */}
      <CommandPaletteModal
        isOpen={isSearchOpen}
        onOpen={() => setIsSearchOpen(true)}
        onClose={() => setIsSearchOpen(false)}
        onSelectLesson={(courseId, lessonId) => {
          handleCourseSwitch(courseId);
          setTimeout(() => {
            const targetCourse = coursesData.find(c => c.id === courseId);
            if (targetCourse) {
              const lesson = targetCourse.topics.flatMap(t => t.lessons).find(l => l.id === lessonId);
              if (lesson) setActiveLesson(lesson);
            }
          }, 50);
        }}
        onSelectCourse={handleCourseSwitch}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-2.5 rounded-2xl bg-slate-900 text-white font-mono text-xs font-bold shadow-2xl border border-slate-800 animate-fade-in flex items-center space-x-2">
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 2. Fixed/Sticky Top Course Sub-Header Bar (Docks flush under Main Header at top-16 with z-40) */}
      <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 sticky top-16 z-40 px-4 sm:px-6 lg:px-8 py-3 transition-colors shadow-xs m-0">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between gap-4">
          
          {/* Left: Mobile Sidebar Toggle + Back Arrow + Course Title & Category */}
          <div className="flex items-center space-x-3 min-w-0">
            <button
              onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition cursor-pointer"
              title="Toggle Curriculum Sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>

            <button
              onClick={onGoBack}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition cursor-pointer shrink-0"
              title={language === 'en' 
                ? (currentCourse.id === 'it-support' ? "Back to Classes" : "Back to Courses") 
                : (currentCourse.id === 'it-support' ? "ត្រឡប់ទៅថ្នាក់រៀន" : "ត្រឡប់ទៅវគ្គសិក្សា")}
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <div className="min-w-0">
              <h1 className="text-base font-bold text-slate-900 dark:text-white leading-tight truncate">
                {currentCourse.title.en}
              </h1>
              <div className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider truncate">
                TRACK: {currentCourse.category}
              </div>
            </div>
          </div>

          {/* Right: Search & Certificate Button */}
          <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center justify-between space-x-2 p-2 sm:px-3.5 sm:py-2 rounded-xl bg-slate-100/90 dark:bg-slate-800/80 hover:bg-slate-200/80 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs transition cursor-pointer border border-slate-200/80 dark:border-slate-700/60 sm:min-w-[180px] shadow-2xs shrink-0"
              title={language === 'en' ? 'Search lessons (Ctrl / ⌘ + K)' : 'ស្វែងរកមេរៀន (Ctrl / ⌘ + K)'}
            >
              <div className="flex items-center space-x-2 min-w-0">
                <Search className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-indigo-500 shrink-0" />
                <span className="hidden sm:inline font-sans text-xs font-medium text-slate-600 dark:text-slate-300 truncate">
                  {t.searchLessons}
                </span>
              </div>
              <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded-md bg-white dark:bg-slate-900 text-[10px] font-sans font-semibold text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-slate-700 leading-none shrink-0 shadow-2xs">
                {typeof window !== 'undefined' && /Mac|iPod|iPhone|iPad/i.test(navigator.userAgent) ? '⌘K' : 'Ctrl K'}
              </kbd>
            </button>

            {coursePercent === 100 && (
              <button
                onClick={() => setIsCertOpen(true)}
                className="flex items-center space-x-1.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500 text-slate-950 font-sans text-xs font-black shadow-lg shadow-amber-500/30 hover:scale-105 active:scale-95 transition cursor-pointer shrink-0 border border-amber-300 ring-2 ring-amber-400/50 animate-pulse"
              >
                <Award className="w-4 h-4 shrink-0 text-slate-950" />
                <span>{language === 'en' ? "🎓 Claim Certificate" : "🎓 ទទួលបានវិញ្ញាបនបត្រ"}</span>
              </button>
            )}
          </div>

        </div>
      </div>

      {/* 3. Feature Tab Row (separated from Course Sub-Header by 30px gap) */}
      <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-[30px] mb-6">
        <div className="flex items-center justify-start bg-slate-100 dark:bg-slate-950 p-1.5 rounded-2xl border border-slate-200/60 dark:border-slate-800 space-x-1.5 overflow-x-auto no-scrollbar max-w-full w-full sm:w-auto">
          {[
            { id: 'tutorial', labelEn: 'Lessons', labelKm: 'មេរៀន', icon: '📖' },
            { id: 'examples', labelEn: 'Playground', labelKm: 'សន្លឹកកូដសាកល្បង', icon: '>_' },
            { id: 'quiz', labelEn: 'Quiz', labelKm: 'កម្រងសំណួរ', icon: '❓' },
            { id: 'resources', labelEn: 'Mini Projects', labelKm: 'គម្រោងតូចៗ', icon: '📚' },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            const label = language === 'en' ? tab.labelEn : tab.labelKm;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 py-2 sm:px-5 sm:py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center space-x-1.5 whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-xs border border-slate-200/50 dark:border-slate-700'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span className="font-mono text-xs shrink-0">{tab.icon}</span>
                <span className="whitespace-nowrap">{label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Main Classic 2-Column Grid Workspace */}
      <main className="flex-1 max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-6 sm:pb-8 flex flex-col">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch flex-1 w-full">
          
          {/* LEFT COLUMN: PERMANENT CURRICULUM SIDEBAR */}
          <aside className={`lg:block ${isMobileSidebarOpen ? 'block fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm p-4' : 'hidden'} w-full lg:w-80 shrink-0 flex flex-col self-stretch`}>
            <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 shadow-xs h-full flex flex-col text-left lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] overflow-hidden">
              
              {/* Mobile close button */}
              <div className="flex items-center justify-between lg:hidden border-b border-slate-100 dark:border-slate-800 pb-3 mb-4">
                <span className="font-extrabold text-sm text-slate-900 dark:text-white">Course Curriculum</span>
                <button
                  onClick={() => setIsMobileSidebarOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Course Header Info */}
              <div className="space-y-3 shrink-0 pb-4 border-b border-slate-100 dark:border-slate-800/80">
                <div className="text-[11px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                  {language === 'en' ? 'Course Curriculum' : 'មាតិកាវគ្គសិក្សា'}
                </div>

                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-[10px] font-mono font-extrabold uppercase border border-indigo-100/60 dark:border-indigo-900/40">
                    {currentCourse.category} Track
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 font-bold">
                    {completedInCourse}/{flatLessons.length} Done
                  </span>
                </div>

                <h3 className="font-black text-lg text-slate-900 dark:text-white tracking-tight leading-snug flex items-center gap-2">
                  <CourseBrandIcon iconName={currentCourse.iconName || currentCourse.id} className="w-5 h-5 shrink-0" />
                  <span>{currentCourse.title.en}</span>
                </h3>

                {/* Track Progress Bar */}
                <div className="space-y-1.5 pt-1">
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div 
                      className={`${currentCourse.id === 'swift' ? 'bg-[#F05138]' : 'bg-indigo-600'} h-full rounded-full transition-all duration-300`} 
                      style={{ width: `${coursePercent}%` }}
                    />
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 text-right font-medium">
                    {coursePercent}% Completed
                  </div>
                </div>
              </div>

              {/* Sidebar Search Filter */}
              <div className="relative shrink-0 py-3">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-5" />
                <input
                  type="text"
                  value={sidebarSearch}
                  onChange={(e) => setSidebarSearch(e.target.value)}
                  placeholder={language === 'en' ? "Filter lessons..." : "ស្វែងរកមេរៀន..."}
                  className="w-full pl-9 pr-3.5 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 font-medium transition-all"
                />
              </div>

              {/* Topics Accordion List */}
              <div className="space-y-4 pt-1 flex-1 min-h-0 overflow-y-auto custom-scrollbar pr-1">
                {currentCourse.topics.map((topic) => {
                  const topicKey = `${currentCourse.id}-${topic.id}`;
                  const isCollapsed = collapsedTopics[topicKey];
                  const sq = sidebarSearch.trim().toLowerCase();

                  const matchingLessons = topic.lessons.filter((l) =>
                    !sq || l.title.en.toLowerCase().includes(sq) || l.id.toLowerCase().includes(sq)
                  );

                  if (sq && matchingLessons.length === 0) return null;

                  return (
                    <div key={topic.id} className="space-y-1.5">
                      {/* Topic Header Toggle */}
                      <button
                        onClick={() => toggleTopic(topicKey)}
                        className="w-full flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200 py-2 px-2.5 rounded-xl hover:bg-slate-100/70 dark:hover:bg-slate-800/60 transition cursor-pointer text-left"
                      >
                        <span className="truncate pr-2 font-mono uppercase text-[11px] text-slate-500 dark:text-slate-400 font-extrabold tracking-wider">
                          {topic.title.en}
                        </span>
                        {isCollapsed && !sq ? (
                          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        )}
                      </button>

                      {/* Lessons in Topic */}
                      {(!isCollapsed || sq) && (
                        <div className="space-y-1.5 pl-3 border-l-2 border-slate-100 dark:border-slate-800 ml-2">
                          {matchingLessons.map((lesson) => {
                            const isActive = activeLesson?.id === lesson.id;
                            const isDone = progress.completedLessons.includes(`${currentCourse.id}-${lesson.id}`) ||
                              progress.completedLessons.includes(`${currentCourse.id}_${lesson.id}`) ||
                              progress.completedLessons.includes(lesson.id);

                            return (
                              <button
                                key={lesson.id}
                                onClick={() => {
                                  setActiveLesson(lesson);
                                  setIsMobileSidebarOpen(false);
                                }}
                                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs flex items-center justify-between transition cursor-pointer font-medium ${
                                  isActive
                                    ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-bold border border-indigo-100/80 dark:border-indigo-900/40'
                                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100/80 dark:hover:bg-slate-800/80'
                                }`}
                              >
                                <span className="truncate pr-2">{lesson.title.en}</span>
                                {isDone && (
                                  <CheckCircle className="w-3.5 h-3.5 shrink-0 text-emerald-500" />
                                )}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          </aside>

          {/* RIGHT COLUMN: MAIN LESSON WORKSPACE */}
          <div className="flex-1 min-w-0 flex flex-col space-y-6">
            
            {/* Workspace Top Header Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
              
              {/* Top Breadcrumb & Progress Widget */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3.5 border-b border-slate-100 dark:border-slate-800 pb-5">
                <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-sans">
                  <button onClick={onGoBack} className="hover:text-indigo-600 transition font-medium whitespace-nowrap cursor-pointer">
                    {currentCourse.id === 'it-support' ? (language === 'en' ? 'Classes' : 'ថ្នាក់រៀន') : t.courses}
                  </button>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="capitalize text-slate-600 dark:text-slate-300 font-semibold whitespace-nowrap">
                    {currentCourse.category}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold whitespace-nowrap max-w-[150px] sm:max-w-[200px] truncate inline-block align-middle">
                    {currentCourse.title.en}
                  </span>
                  {activeLesson && (
                    <>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="text-slate-800 dark:text-slate-100 font-extrabold whitespace-nowrap max-w-[140px] sm:max-w-[220px] md:max-w-[280px] truncate inline-block align-middle">
                        {activeLesson.title.en}
                      </span>
                    </>
                  )}
                </div>

                {/* Course Progress Pill */}
                <div className="flex items-center space-x-3 bg-slate-50 dark:bg-slate-950 px-3.5 py-2 rounded-2xl border border-slate-200/60 dark:border-slate-800 shrink-0 self-start md:self-auto">
                  <div className="text-left">
                    <div className="text-[10px] font-mono font-extrabold uppercase text-slate-400 tracking-wider whitespace-nowrap">
                      {language === 'en' ? "Track Progress" : "វឌ្ឍនភាពក្នុងការសិក្សា"}
                    </div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white font-mono whitespace-nowrap">
                      {coursePercent}% {language === 'en' ? "Complete" : "បានបញ្ចប់"} ({completedInCourse}/{flatLessons.length})
                    </div>
                  </div>
                  <div className="w-16 bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden shrink-0">
                    <div 
                      className="bg-indigo-600 h-full rounded-full transition-all duration-300"
                      style={{ width: `${coursePercent}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Lesson Title, Badge & Quick Controls */}
              {activeLesson && (
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`px-3 py-1 rounded-xl ${currentCourse.id === 'swift' ? 'bg-[#F05138]/10 text-[#F05138] dark:text-[#f87171] border-[#F05138]/20' : 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border-indigo-100 dark:border-indigo-900/40'} font-mono text-[11px] font-extrabold uppercase tracking-wider border flex items-center gap-1.5`}>
                        <CourseBrandIcon iconName={currentCourse.iconName || currentCourse.id} className="w-3.5 h-3.5" />
                        <span>{currentCourse.title.en}</span>
                      </span>
                      <span className="px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono text-[11px] font-bold uppercase tracking-wider">
                        {currentCourse.difficulty}
                      </span>
                      <span className="px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-mono text-[11px] font-bold flex items-center space-x-1">
                        <Clock className="w-3.5 h-3.5 text-indigo-500" />
                        <span>8 min read</span>
                      </span>
                      {isLessonCompleted && (
                        <span className="px-3 py-1 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 font-mono text-[11px] font-extrabold flex items-center space-x-1">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                          <span>{language === 'en' ? "Completed (+50 XP)" : "បានបញ្ចប់ (+50 XP)"}</span>
                        </span>
                      )}
                    </div>

                    <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                      {activeLesson.title.en}
                    </h1>
                  </div>

                  {/* Action Buttons: Bookmark, Favorite, Share */}
                  <div className="flex items-center space-x-2 shrink-0">
                    <button
                      onClick={toggleBookmark}
                      className={`p-3 rounded-2xl border transition cursor-pointer ${
                        isBookmarked
                          ? 'bg-amber-500 text-white border-amber-500 shadow-sm'
                          : 'bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-amber-400'
                      }`}
                      title="Bookmark Lesson"
                    >
                      <Bookmark className="w-4 h-4 fill-current" />
                    </button>

                    <button
                      onClick={toggleFavorite}
                      className={`p-3 rounded-2xl border transition cursor-pointer ${
                        isFavorite
                          ? 'bg-rose-500 text-white border-rose-500 shadow-sm'
                          : 'bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-rose-400'
                      }`}
                      title="Favorite Lesson"
                    >
                      <Star className="w-4 h-4 fill-current" />
                    </button>

                    <button
                      onClick={handleShare}
                      className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 transition cursor-pointer"
                      title="Share Lesson"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
        </div>

        {/* 5. Main Tab Content Views */}
        
        {/* TAB 1: TUTORIAL */}
        {activeTab === 'tutorial' && activeLesson && (
          <div className="space-y-6 flex-1 flex flex-col justify-between">
            <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs flex-1">
              {currentCourse.id === 'tailwind' ? (
                <TailwindLessonView lessonId={activeLesson.id} language={language} />
              ) : (
                <div className="markdown-body font-sans leading-relaxed">
                  {renderMarkdown(activeLesson.content[language] || activeLesson.content.en)}
                </div>
              )}
            </div>

            {/* Starter Example Card if present */}
            {activeLesson.starterCode && (() => {
              const example = getLessonExample(activeLesson, currentCourse.id);
              const files = example.files;
              const filenames = Object.keys(files);
              const resolvedActiveFile = files[activeExampleFile] ? activeExampleFile : (filenames[0] || '');
              const currentFileContent = files[resolvedActiveFile] || '';

              return (
                <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs text-left">
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                    <div className="flex items-center space-x-2">
                      <Code2 className="w-4 h-4 text-indigo-500" />
                      <span className="font-extrabold text-xs uppercase font-mono text-slate-900 dark:text-white">
                        Code Example
                      </span>
                    </div>

                    <div className="flex items-center space-x-1.5 overflow-x-auto">
                      {filenames.map(fn => (
                        <button
                          key={fn}
                          onClick={() => handleFileChange(fn)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition cursor-pointer ${
                            fn === resolvedActiveFile
                              ? 'bg-indigo-600 text-white shadow-xs'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white'
                          }`}
                        >
                          {fn}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950">
                    <pre className="p-5 font-mono text-xs text-slate-200 leading-relaxed overflow-x-auto max-h-[380px]">
                      {highlightCode(currentFileContent, resolvedActiveFile.split('.').pop() || currentCourse.id)}
                    </pre>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <button
                      onClick={() => handleOpenInEditor(currentFileContent)}
                      className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-extrabold text-xs tracking-wider transition shadow-md shadow-indigo-600/20 cursor-pointer flex items-center space-x-2"
                      title="Try it yourself in full editor"
                    >
                      <Play className="w-4 h-4 fill-current" />
                      <span>{t.tryItYourself} »</span>
                    </button>
                  </div>
                </div>
              );
            })()}

            {/* Bottom Lesson Navigation Cards */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2 w-full">
              {prevLesson ? (
                <button
                  onClick={() => setActiveLesson(prevLesson)}
                  className="px-5 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600/60 hover:shadow-xs transition-all text-left cursor-pointer flex items-center space-x-3 group max-w-full sm:max-w-xs"
                >
                  <ArrowLeft className="w-4 h-4 shrink-0 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:-translate-x-1 transition-all" />
                  <div className="min-w-0">
                    <span className="block text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      {language === 'en' ? "Back lesson" : "មេរៀនមុន"}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate block">
                      {prevLesson.title.en}
                    </span>
                  </div>
                </button>
              ) : null}

              {nextLesson ? (
                <button
                  onClick={() => setActiveLesson(nextLesson)}
                  className="px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white shadow-xs hover:shadow-indigo-600/20 transition-all text-right cursor-pointer flex items-center justify-end space-x-3 group max-w-full sm:max-w-xs sm:ml-auto"
                >
                  <div className="min-w-0 text-right">
                    <span className="block text-[10px] font-mono font-bold text-indigo-200 uppercase tracking-wider">
                      {language === 'en' ? "Next Lesson" : "មេរៀនបន្ទាប់"}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white truncate block">
                      {nextLesson.title.en}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 shrink-0 text-white group-hover:translate-x-1 transition-transform" />
                </button>
              ) : (
                <button
                  onClick={() => setActiveTab('quiz')}
                  className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-all text-right cursor-pointer flex items-center justify-end space-x-3 group max-w-full sm:max-w-xs sm:ml-auto"
                >
                  <div className="min-w-0 text-right">
                    <span className="block text-[10px] font-mono font-bold text-emerald-100 uppercase tracking-wider">
                      {language === 'en' ? "Curriculum Finished" : "បញ្ចប់មេរៀនទាំងអស់"}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white truncate block">
                      {language === 'en' ? "Take Final Course Quiz →" : "ធ្វើកម្រងសំណួរចុងក្រោយ →"}
                    </span>
                  </div>
                  <Trophy className="w-4 h-4 shrink-0 text-white" />
                </button>
              )}
            </div>

            {/* Complete Lesson Action Banner */}
            <div className="bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                  {isLessonCompleted ? "Lesson Finished!" : "Finished reading this concept?"}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Mark as complete to unlock your XP points and record learning progress.
                </p>
              </div>

              {isLessonCompleted ? (
                <span className="px-4 py-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/80 font-bold text-xs flex items-center space-x-2 shrink-0">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Completed (+50 XP)</span>
                </span>
              ) : (
                <button
                  onClick={handleMarkAsCompleted}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs transition shadow-xs cursor-pointer flex items-center space-x-2 shrink-0"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>{t.markCompleted}</span>
                </button>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: OVERVIEW */}
        {activeTab === 'overview' && activeLesson && (
          <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm flex-1">
            <h2 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">
              Lesson Executive Overview
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 space-y-1">
                <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">Track</div>
                <div className="text-sm font-bold text-indigo-600 dark:text-indigo-400">{currentCourse.title.en}</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 space-y-1">
                <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">Difficulty</div>
                <div className="text-sm font-bold text-slate-800 dark:text-slate-200 capitalize">{currentCourse.difficulty}</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 space-y-1">
                <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">Estimated Time</div>
                <div className="text-sm font-bold text-slate-800 dark:text-slate-200">8 - 12 Minutes</div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/30 space-y-3">
              <h3 className="text-sm font-extrabold text-indigo-900 dark:text-indigo-300 flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-indigo-500" />
                <span>What you will learn in this lesson</span>
              </h3>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                This topic covers core principles, real-world syntax patterns, and best practices used by professional engineers when working with {currentCourse.title.en}.
              </p>
            </div>

            <button
              onClick={() => setActiveTab('tutorial')}
              className="px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs transition shadow-md shadow-indigo-600/10 cursor-pointer flex items-center space-x-2"
            >
              <span>Start Tutorial »</span>
            </button>
          </div>
        )}

        {/* TAB 3: EXAMPLES / INTERACTIVE EDITOR */}
        {activeTab === 'examples' && (
          <div className="space-y-4 flex-1">
            
            {/* Code Editor Header Toolbar */}
            <div className="bg-slate-900 text-white rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3 shadow-md border border-slate-800">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1 bg-slate-800 p-1 rounded-xl">
                  {activeLesson && (() => {
                    const example = getLessonExample(activeLesson, currentCourse.id);
                    const files = Object.keys(example.files);
                    return files.map(f => (
                      <button
                        key={f}
                        onClick={() => handleFileChange(f)}
                        className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition cursor-pointer ${
                          f === activeExampleFile ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {f}
                      </button>
                    ));
                  })()}
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={runCode}
                  disabled={isRunning}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs font-mono flex items-center space-x-1.5 shadow-sm transition cursor-pointer disabled:opacity-50"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{isRunning ? 'Running...' : 'Run Code'}</span>
                </button>

                <button
                  onClick={() => {
                    if (activeLesson) {
                      const example = getLessonExample(activeLesson, currentCourse.id);
                      setCode(example.files[activeExampleFile] || activeLesson.starterCode || '');
                      showToast('Code reset to starter template');
                    }
                  }}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition cursor-pointer"
                  title="Reset Code"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    navigator.clipboard.writeText(code);
                    showToast('Code copied to clipboard');
                  }}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition cursor-pointer"
                  title="Copy Code"
                >
                  <Copy className="w-4 h-4" />
                </button>

                <button
                  onClick={() => handleOpenInEditor(code)}
                  className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-bold text-xs flex items-center space-x-1.5 transition cursor-pointer shadow-md shadow-indigo-600/20"
                  title="Try it yourself in Full Editor"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{language === 'en' ? 'Try it yourself' : 'សាកល្បងដោយខ្លួនឯង'}</span>
                </button>
              </div>
            </div>

            {/* Editor & Output Split View */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              
              {/* Monaco Code Editor Container */}
              <div className={`rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-950 overflow-hidden shadow-sm flex flex-col transition-all duration-300 ${
                isFullscreenEditor ? 'fixed inset-4 sm:inset-8 z-50 shadow-2xl' : 'h-[480px]'
              }`}>
                <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between gap-2">
                  <div className="flex items-center space-x-2">
                    <span>Editor ({getEditorLanguage()})</span>
                    <span className="text-indigo-400 font-bold">{activeExampleFile || 'main.ts'}</span>
                  </div>

                  {/* Zoom and Fullscreen controls */}
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => setEditorFontSize(prev => Math.max(10, prev - 1))}
                      className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
                      title={language === 'en' ? "Zoom out font" : "បង្រួមទំហំអក្សរ"}
                    >
                      <ZoomOut className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => setEditorFontSize(13)}
                      className="text-[10px] font-mono text-slate-400 hover:text-indigo-400 px-1 py-0.5 rounded transition cursor-pointer min-w-[32px] text-center"
                      title={language === 'en' ? "Reset font size (100%)" : "កំណត់ទំហំដើម (100%)"}
                    >
                      {Math.round((editorFontSize / 13) * 100)}%
                    </button>

                    <button
                      onClick={() => setEditorFontSize(prev => Math.min(22, prev + 1))}
                      className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
                      title={language === 'en' ? "Zoom in font" : "ពង្រីកទំហំអក្សរ"}
                    >
                      <ZoomIn className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => setIsFullscreenEditor(!isFullscreenEditor)}
                      className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer ml-1"
                      title={isFullscreenEditor ? (language === 'en' ? "Exit fullscreen (Esc)" : "ចាកចេញពីពង្រីកពេញ (Esc)") : (language === 'en' ? "Maximize editor" : "ពង្រីកពេញ")}
                    >
                      {isFullscreenEditor ? (
                        <Minimize2 className="w-3.5 h-3.5" />
                      ) : (
                        <Maximize2 className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="flex-1">
                  <Editor
                    height="100%"
                    language={getEditorLanguage()}
                    theme={theme === 'dark' ? 'vs-dark' : 'vs-dark'}
                    value={code}
                    onChange={(val) => setCode(val || '')}
                    onMount={(editor, monaco) => {
                      try {
                        monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
                          jsx: monaco.languages.typescript.JsxEmit.React,
                          target: monaco.languages.typescript.ScriptTarget.ES2020,
                          allowJs: true,
                          allowNonTsExtensions: true,
                        });
                        monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
                          jsx: monaco.languages.typescript.JsxEmit.React,
                          target: monaco.languages.typescript.ScriptTarget.ES2020,
                          allowJs: true,
                        });
                        monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
                          noSemanticValidation: true,
                          noSyntaxValidation: true,
                          noSuggestionDiagnostics: true,
                        });
                        monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
                          noSemanticValidation: true,
                          noSyntaxValidation: true,
                          noSuggestionDiagnostics: true,
                        });
                      } catch (err) {
                        console.warn("Monaco setup error:", err);
                      }
                    }}
                    options={{
                      fontSize: editorFontSize,
                      fontFamily: 'JetBrains Mono, monospace',
                      minimap: { enabled: false },
                      scrollBeyondLastLine: false,
                      padding: { top: 12 },
                      lineNumbersMinChars: 3,
                      renderValidationDecorations: 'off',
                      automaticLayout: true,
                    }}
                  />
                </div>
              </div>

              {/* Console & Output Panel */}
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm h-[480px] flex flex-col">
                <div className="px-4 py-2 bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 text-xs font-mono font-bold flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[
                      { id: 'output', label: 'Preview / Output' },
                      { id: 'console', label: 'Console Logs' },
                      { id: 'errors', label: 'Problems' },
                    ].map(t => (
                      <button
                        key={t.id}
                        onClick={() => setOutputTab(t.id as any)}
                        className={`px-3 py-1 rounded-lg transition cursor-pointer ${
                          outputTab === t.id ? 'bg-indigo-600 text-white' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>

                  <span className="text-[10px] font-mono text-emerald-500 font-extrabold uppercase">
                    ● Ready
                  </span>
                </div>

                <div 
                  ref={consoleContainerRef}
                  className="flex-1 min-h-0 p-3 sm:p-4 overflow-y-auto font-mono text-xs text-slate-800 dark:text-slate-200 bg-slate-50/50 dark:bg-slate-950 touch-pan-y"
                >
                  {outputTab === 'output' ? (
                    iframeSrc ? (
                      <iframe
                        srcDoc={iframeSrc}
                        title="Output Sandbox"
                        className="w-full h-full min-h-[350px] bg-white rounded-xl border border-slate-200 dark:border-slate-800 overflow-auto"
                        sandbox="allow-scripts allow-modals"
                      />
                    ) : (
                      <div className="h-full flex flex-col items-center justify-center text-slate-400 space-y-2">
                        <Play className="w-8 h-8 opacity-20" />
                        <p className="text-xs">Click "Run Code" above to execute and preview output.</p>
                      </div>
                    )
                  ) : outputTab === 'console' ? (
                    <pre className="whitespace-pre-wrap leading-relaxed text-emerald-600 dark:text-emerald-400 overflow-auto font-mono">
                      {consoleOutput || 'No console logs recorded yet.'}
                    </pre>
                  ) : (
                    <div className="text-slate-400 text-xs">
                      No compilation errors detected in current workspace.
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 4: PRACTICE EXERCISES */}
        {activeTab === 'exercise' && (
          <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
            <MiniProjectCard course={currentCourse} />
          </div>
        )}

        {/* TAB 5: COURSE QUIZ */}
        {activeTab === 'quiz' && (
          <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
            <QuizCard course={currentCourse} />
          </div>
        )}

        {/* TAB 6: PERSONAL NOTES */}
        {activeTab === 'notes' && activeLesson && (
          <LessonNotes courseId={currentCourse.id} lessonId={activeLesson.id} />
        )}

        {/* TAB 7: CHEAT SHEET & RESOURCES */}
        {activeTab === 'resources' && (
          <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
            <ReferenceViewer courseId={currentCourse.id} />
          </div>
        )}

        {/* Floating Sticky Certificate Claim Banner */}
        {coursePercent === 100 && (
          <div className="fixed bottom-6 right-6 z-40 bg-slate-950/95 border-2 border-amber-400 text-white rounded-2xl p-4 shadow-2xl backdrop-blur-md flex items-center space-x-3 max-w-sm animate-bounce" id="sticky-cert-banner">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center text-xl shrink-0 font-bold shadow-md">
              🎓
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-xs font-black text-amber-300 uppercase tracking-wider">
                {language === 'en' ? "Course 100% Complete!" : "វគ្គសិក្សាបញ្ចប់ ១០០%!"}
              </h4>
              <p className="text-xs font-bold text-slate-100 truncate">
                {currentCourse.title.en}
              </p>
            </div>
            <button
              onClick={() => setIsCertOpen(true)}
              className="px-3.5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs shadow-md transition hover:scale-105 cursor-pointer shrink-0"
            >
              {language === 'en' ? "Claim" : "ទាញយក"}
            </button>
          </div>
        )}

        {/* Certificate Modal */}
        <CertificateModal 
          courseTitle={currentCourse.title.en} 
          isOpen={isCertOpen} 
          onClose={() => setIsCertOpen(false)} 
        />

          </div>
        </div>
      </main>
    </div>
  );
};
