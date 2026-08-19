import { AIPromptModule } from '../types/aiPromptClass';

export const AI_PROMPT_MODULES_USECASE_CAPSTONE: AIPromptModule[] = [
  // MODULE 6
  {
    id: 'module-6',
    moduleNumber: 6,
    title: {
      en: 'Module 6: Prompting for Specific Real-World Use Cases',
      km: 'មូឌុលទី ៦៖ ការសរសេរ Prompt សម្រាប់ករណីប្រើប្រាស់ជាក់ស្តែង',
    },
    description: {
      en: 'Master domain-specialized prompts for Copywriting, Coding, Web Building, Business Analysis, Image Generation, and Research.',
      km: 'ស្ទាត់ជំនាញសរសេរ Prompt តាមជំនាញជាក់ស្តែង៖ ការសរសេរអត្ថបទ, ការសរសេរកូដ, ការបង្កើតវេបសាយ, ការវិភាគពាណិជ្ជកម្ម, ការបង្កើតរូបភាព និងការស្រាវជ្រាវ។',
    },
    lessons: [
      {
        id: 'm6-l1',
        moduleId: 'module-6',
        moduleNumber: 6,
        lessonNumber: 1,
        title: {
          en: 'Copywriting & Content Creation Prompts',
          km: 'Prompt សម្រាប់ការសរសេរអត្ថបទទីផ្សារ និងបង្កើតមាតិកា',
        },
        durationMinutes: 30,
        difficulty: 'Intermediate',
        description: {
          en: 'Generic content writing prompts lead to fluffy, repetitive AI copy filled with forbidden cliché terms ("supercharge", "unleash", "delve"). Production copywriting prompts force specific psychological hooks, rhythmic sentence lengths, human emotion triggers, and strict vocabulary boundaries.',
          km: 'Prompt សរសេរអត្ថបទបែបទូទៅបង្កើតបានជាអត្ថបទស្ទួនៗ និងប្រើពាក្យដដែលៗ ("supercharge", "unleash", "delve")។ Prompt កម្រិតអាជីពបង្ខំឱ្យប្រើប្រាស់ទំពក់ចិត្តសាស្ត្រ, ចង្វាក់នៃប្រវែងល្បះ, អារម្មណ៍មនុស្ស និងដែនកំណត់ពាក្យពេចន៍យ៉ាងម៉ត់ចត់។',
        },
        tutorial: {
          en: `### The Banned Vocabulary Guardrail

Always include a banned list in content creation prompts:
> *"Do NOT use these AI cliché words: leverage, delve, tapestry, game-changer, supercharge, empower, seamless, unlock."*`,
          km: `### បញ្ជីពាក្យហាមឃាត់សម្រាប់ Copywriting

ត្រូវតែបញ្ចូលបញ្ជីពាក្យហាមឃាត់ក្នុង Prompt៖
> *"កុំប្រើពាក្យដដែលៗទាំងនេះ៖ leverage, delve, tapestry, game-changer, supercharge, empower, seamless, unlock។"*`,
        },
        beforeAfter: {
          scenario: {
            en: 'Writing a headline and short introduction for a productivity app blog post.',
            km: 'សរសេរចំណងជើង និងសេចក្តីផ្តើមសម្រាប់អត្ថបទ Productivity App។',
          },
          weakPrompt: 'Write a catchy headline and intro for a new calendar app.',
          weakOutput: {
            en: 'Supercharge Your Productivity with Our Game-Changing Calendar App! Delve into seamless scheduling today.',
            km: 'បង្កើនផលិតភាពរបស់អ្នកជាអតិបរមា ជាមួយ Calendar App ដ៏អស្ចារ្យរបស់យើង! ចាប់ផ្តើមរៀបចំកាលវិភាគថ្ងៃនេះ។',
          },
          improvedPrompt:
            'Act as a Senior Copywriter at Apple. Write a headline and 3-sentence introduction for a minimalist calendar app. Rule 1: Use PAS (Problem-Agitate-Solve) framework. Rule 2: Maximum 8 words in headline. Rule 3: Do NOT use the words "supercharge", "game-changing", or "unleash".',
          improvedOutput: {
            en: `### Stop Fighting Your Calendar.

You spent 3 hours yesterday re-arranging meeting slots that shouldn't have been scheduled in the first place. Constant context-switching is quietly draining your deep work energy. ClearTime automatically defends your focus blocks so you can craft meaningful work.`,
            km: `### ឈប់ចំណាយពេលវង្វេងក្នុង Calendar ទៀតទៅ។

អ្នកបានចំណាយពេល ៣ ម៉ោងកាលពីម្សិលមិញ ដើម្បីរៀបចំកាលវិភាគប្រជុំឡើងវិញ។ ការផ្លាស់ប្តូរការងារញឹកញាប់កំពុងបូមយកថាមពលរបស់អ្នកដោយមិនដឹងខ្លួន។ ClearTime ការពារពេលវេលាផ្តោតអារម្មណ៍របស់អ្នកដោយស្វ័យប្រវត្តិ។`,
          },
          keyImprovements: [
            {
              en: 'Applied PAS framework with explicit banned word guardrails.',
              km: 'អនុវត្តក្របខ័ណ្ឌ PAS ជាមួយវិធានហាមឃាត់ពាក្យជាន់គ្នា។',
            },
          ],
        },
        realWorldExample: {
          context: {
            en: 'A digital marketing team crafting high-CTR Facebook ad copy.',
            km: 'ក្រុមទីផ្សារឌីជីថល បង្កើតអត្ថបទពាណិជ្ជកម្ម Facebook មាន CTR ខ្ពស់។',
          },
          solution: {
            en: 'Prompting with target audience pain points and strict word length increased ad click-through rate by 42%.',
            km: 'Prompt ដែលផ្តោតលើចំណុចឈឺចាប់របស់អតិថិជន បង្កើនអត្រាចុច (CTR) ចំនួន ៤២%។',
          },
        },
        exercise: {
          scenario: {
            en: 'Write a copywriting prompt for a high-converting email subject line targeting remote workers.',
            km: 'សរសេរ Prompt សម្រាប់បង្កើតចំណងជើងអ៊ីមែលទីផ្សារ ផ្តោតលើអ្នកធ្វើការពីផ្ទះ Remote Workers។',
          },
          targetDomain: 'Email Copywriting',
          hints: [
            {
              en: 'Require 3 variations under 6 words each.',
              km: 'តម្រូវឱ្យបង្កើត ៣ ជម្រើស ក្នុងមួយជម្រើសមិនលើសពី ៦ ពាក្យ។',
            },
          ],
          sampleStrongPrompt:
            'Generate 3 high-open-rate email subject lines targeting remote software developers suffering from Zoom fatigue. Constraint: Under 6 words per subject line. Tone: Intriguing, peer-to-peer.',
        },
        quiz: [
          {
            id: 'm6-l1-q1',
            question: {
              en: 'Why is providing a banned words list important in copywriting prompts?',
              km: 'ហេតុអ្វីបានជាការផ្តល់បញ្ជីពាក្យហាមឃាត់មានសារៈសំខាន់ក្នុង Copywriting Prompts?',
            },
            options: [
              {
                id: 'a',
                text: {
                  en: 'It forces the AI away from overused, generic buzzwords toward authentic human phrasing.',
                  km: 'វាបង្ខំឱ្យ AI ចៀសវាងពាក្យដដែលៗ ហើយមកប្រើប្រាស់ពាក្យពេចន៍ធម្មជាតិដូចមនុស្ស។',
                },
                isCorrect: true,
              },
              {
                id: 'b',
                text: {
                  en: 'It stops the AI from generating images.',
                  km: 'វាបញ្ឈប់ AI មិនឱ្យបង្កើតរូបភាព។',
                },
                isCorrect: false,
              },
            ],
            explanation: {
              en: 'Banned word lists prune generic high-frequency marketing tokens.',
              km: 'បញ្ជីពាក្យហាមឃាត់ជួយកាត់ចោលពាក្យទីផ្សារទូទៅដែលគ្មានទម្ងន់។',
            },
          },
        ],
      },
      {
        id: 'm6-l2',
        moduleId: 'module-6',
        moduleNumber: 6,
        lessonNumber: 2,
        title: {
          en: 'Coding Assistance, Bug Fixes & Code Review Prompts',
          km: 'Prompt សម្រាប់ការសរសេរកូដ ស្វែងរក Bug និងការពិនិត្យកូដ',
        },
        durationMinutes: 30,
        difficulty: 'Advanced',
        description: {
          en: 'Prompting AI for software engineering requires strict framework definition, TypeScript interface declarations, performance edge case checking, and security audits. Giving the AI clear architectural context ensures generated code is production-grade and maintainable.',
          km: 'ការបញ្ជា AI សម្រាប់ការងារសូហ្វវែរ ទាមទារឱ្យមានការកំណត់ Framework ច្បាស់លាស់, TypeScript Interfaces, ការពិនិត្យមើល Edge Cases និងការធ្វើ Security Audit។ ការផ្តល់ Context ស្ថាបត្យកម្មច្បាស់លាស់ ធានាថាកូដដែលចេញមកមានស្តង់ដារ និងងាយស្រួលថែទាំ។',
        },
        tutorial: {
          en: `### The Full-Stack Code Prompt Structure

\`\`\`markdown
[ROLE]: Senior Full-Stack Engineer (React 18 + Node.js).
[CONTEXT]: Building a real-time notification drawer.
[TASK]: Write a custom React hook \`useNotifications\` using WebSockets.
[REQUIREMENTS]:
1. Include reconnection backoff strategy.
2. Handle unmount cleanup properly.
3. Provide full TypeScript interface definitions.
\`\`\``,
          km: `### រចនាសម្ព័ន្ធ Code Prompt ពេញលេញ

\`\`\`markdown
[ROLE]៖ Senior Full-Stack Engineer (React 18 + Node.js)។
[CONTEXT]៖ បង្កើត Real-time Notification Drawer។
[TASK]៖ សរសេរ Custom React hook \`useNotifications\` ដោយប្រើ WebSockets។
[REQUIREMENTS]៖
១. បញ្ចូល Reconnection Backoff Strategy។
២. គ្រប់គ្រង Unmount Cleanup ឱ្យត្រឹមត្រូវ។
៣. ផ្តល់ជូន TypeScript Interface ពេញលេញ។
\`\`\``,
        },
        beforeAfter: {
          scenario: {
            en: 'Writing a debounce function in TypeScript for a live search bar.',
            km: 'សរសេរ Debounce Function ក្នុង TypeScript សម្រាប់កន្លែងស្វែងរកភ្លាមៗ។',
          },
          weakPrompt: 'Write JS debounce code.',
          weakOutput: {
            en: 'function debounce(fn, delay) { let t; return function(...args) { clearTimeout(t); t = setTimeout(() => fn(...args), delay); }; }',
            km: 'function debounce(fn, delay) { let t; return function(...args) { clearTimeout(t); t = setTimeout(() => fn(...args), delay); }; }',
          },
          improvedPrompt:
            'Act as a Principal Software Engineer. Write a production-ready, fully typed TypeScript `useDebounce` hook. Requirements: (1) Handle dynamic generic types <T>, (2) Ensure strict memory cleanup on unmount using useEffect, and (3) Include inline JSDoc code documentation.',
          improvedOutput: {
            en: `import { useState, useEffect } from 'react';

/**
 * Custom hook to debounce rapidly changing values.
 * @param value The value to be debounced
 * @param delay Delay in milliseconds (default 300ms)
 */
export function useDebounce<T>(value: T, delay = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer); // Crucial unmount cleanup
  }, [value, delay]);

  return debouncedValue;
}`,
            km: `import { useState, useEffect } from 'react';

/**
 * Custom hook to debounce rapidly changing values.
 * @param value The value to be debounced
 * @param delay Delay in milliseconds (default 300ms)
 */
export function useDebounce<T>(value: T, delay = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer); // Crucial unmount cleanup
  }, [value, delay]);

  return debouncedValue;
}`,
          },
          keyImprovements: [
            {
              en: 'Generated modern TypeScript hook with proper memory unmount cleanup.',
              km: 'បង្កើត Custom Hook តាមស្តង់ដារ TypeScript ជាមួយការសម្អាត Memory ត្រឹមត្រូវ។',
            },
          ],
        },
        realWorldExample: {
          context: {
            en: 'An engineering team performing automated code review PR audits.',
            km: 'ក្រុមវិស្វករសូហ្វវែរ អនុវត្តការពិនិត្យកូដស្វ័យប្រវត្តិលើ Pull Requests។',
          },
          solution: {
            en: 'Prompting for security, performance, and readability metrics caught 3 critical memory leak bugs before production deployment.',
            km: 'Prompt សម្រាប់ពិនិត្យសុវត្ថិភាព និង Performance រកឃើញ Memory Leak ធំៗចំនួន ៣ មុនពេលទម្លាក់កូដទៅ Production។',
          },
        },
        exercise: {
          scenario: {
            en: 'Draft a code review prompt that checks a submitted SQL query for missing indexes and unoptimized JOIN operations.',
            km: 'សរសេរ Prompt ពិនិត្យកូដ SQL ស្វែងរកចំណុចខ្វះ Indexes និងការ JOIN មិនមានប្រសិទ្ធភាព។',
          },
          targetDomain: 'Database Code Review',
          hints: [
            {
              en: 'Ask for specific performance risk rating and EXPLAIN ANALYZE suggestions.',
              km: 'តម្រូវឱ្យវាយតម្លៃកម្រិតហានិភ័យ Performance និងផ្តល់អនុសាសន៍ EXPLAIN ANALYZE។',
            },
          ],
          sampleStrongPrompt:
            'Act as a Principal Database Administrator. Audit this SQL query for performance bottlenecks: [INSERT QUERY]. Check for: (1) Full table scans, (2) Missing indexes, (3) N+1 subquery patterns. Output recommendations in Markdown table format.',
        },
        quiz: [
          {
            id: 'm6-l2-q1',
            question: {
              en: 'Why is defining explicit TypeScript interfaces important when asking AI to generate front-end code?',
              km: 'ហេតុអ្វីបានជាការកំណត់ TypeScript Interfaces ច្បាស់លាស់មានសារៈសំខាន់ ពេលសុំឱ្យ AI សរសេរ Frontend Code?',
            },
            options: [
              {
                id: 'a',
                text: {
                  en: 'It guarantees compile-time type safety and prevents runtime undefined prop errors in components.',
                  km: 'វាធានាសុវត្ថិភាពប្រភេទទិន្នន័យ (Type Safety) និងការពារកុំឱ្យមាន error undefined prop ពេលរត់កម្មវិធី។',
                },
                isCorrect: true,
              },
              {
                id: 'b',
                text: {
                  en: 'It reduces internet usage.',
                  km: 'វាកាត់បន្ថយការប្រើប្រាស់អ៊ីនធឺណិត។',
                },
                isCorrect: false,
              },
            ],
            explanation: {
              en: 'Type interfaces enforce strong structural contracts across generated code components.',
              km: 'Type interfaces បង្កើតកិច្ចសន្យារចនាសម្ព័ន្ធរឹងមាំសម្រាប់កូដ។',
            },
          },
        ],
      },
      {
        id: 'm6-l3',
        moduleId: 'module-6',
        moduleNumber: 6,
        lessonNumber: 3,
        title: {
          en: 'End-to-End Website Building Prompts',
          km: 'Master Prompts សម្រាប់ការបង្កើតគេហទំព័រពេញលេញ (End-to-End)',
        },
        durationMinutes: 35,
        difficulty: 'Master',
        description: {
          en: 'Building full websites or complex web app interfaces with AI requires master-level prompting that combines layout architecture, Tailwind CSS utility classes, responsive grid system design, state management, and accessible typography scale rules into a single executable prompt.',
          km: 'ការបង្កើតវេបសាយពេញលេញ ឬ UI ស្មុគស្មាញជាមួយ AI ទាមទារឱ្យមាន Master Prompt ដែលបូកផ្សំរវាង ស្ថាបត្យកម្ម Layout, Tailwind CSS Utilities, Responsive Grids, State Management, និងវិធាន Typography។',
        },
        tutorial: {
          en: `### The Master Web Architect Prompt Formula

\`\`\`markdown
[ROLE]: Principal Front-End Developer & UI/UX Architect.
[STACK]: React 18, Tailwind CSS, Lucide React Icons.
[LAYOUT REQUIREMENTS]:
1. Modern High-Contrast Light Mode with Slate/Zinc Neutral Palette.
2. Fluid Responsive Grid (1 col on mobile, 3 cols on desktop).
3. Zero placeholder stub functions—all state handlers must be fully wired!
4. Accessible ARIA attributes and clean semantic HTML markup.
\`\`\``,
          km: `### រូបមន្ត Master Web Architect Prompt

\`\`\`markdown
[ROLE]៖ Principal Front-End Developer & UI/UX Architect។
[STACK]៖ React 18, Tailwind CSS, Lucide React Icons។
[LAYOUT REQUIREMENTS]៖
១. ស្ទីលទំនើប High-Contrast Light Mode ជាមួយពណ៌ Slate/Zinc។
២. Fluid Responsive Grid (១ ជួរលើ mobile, ៣ ជួរលើ desktop)។
៣. មិនប្រើប្រាស់កូដក្លែងក្លាយ Stubs—គ្រប់ State Handlers ត្រូវតែមានកូដដំណើរការពេញលេញ!
៤. អនុវត្តតាមស្តង់ដារ Accessibility ARIA និង Semantic HTML Markup។
\`\`\``,
        },
        beforeAfter: {
          scenario: {
            en: 'Prompting AI to build an interactive SaaS pricing calculator component.',
            km: 'បញ្ជា AI ឱ្យបង្កើត Component គណនាតម្លៃសេវា SaaS។',
          },
          weakPrompt: 'Create a pricing page component in React.',
          weakOutput: {
            en: 'Simple static cards with fake hardcoded text and no interactive sliders.',
            km: 'Card ស្ដង់ដារដែលគ្មានប៊ូតុង ឬការគណនាចល័ត។',
          },
          improvedPrompt:
            'Act as a Senior UI Engineer. Build a self-contained, fully interactive SaaS Pricing Calculator in React with Tailwind CSS. Include: (1) User slider for active team members [1 to 100], (2) Annual vs Monthly billing toggle switch with 20% discount calculation, (3) 3 feature cards highlighting price changes dynamically, and (4) Lucide React checkmark icons.',
          improvedOutput: {
            en: `Fully functional interactive React component with working \`useState\` logic recalculating prices dynamically per seat, tier highlight badge, and smooth Tailwind CSS transitions!`,
            km: `Component ដែលមានកូដ \`useState\` គណនាតម្លៃចល័តតាមចំនួនសមាជិក ប៊ូតុងប្តូរប្រចាំខែ/ឆ្នាំ និងរចនាប័ទ្ម Tailwind CSS យ៉ាងស្រស់ស្អាត!`,
          },
          keyImprovements: [
            {
              en: 'Wired dynamic interactive state logic rather than static HTML mockup.',
              km: 'ភ្ជាប់ State Logic គណនាចល័តជាក់ស្តែង ជាជាងគ្រាន់តែជា HTML ស្ដង់ដារ។',
            },
          ],
        },
        realWorldExample: {
          context: {
            en: 'An agency rapid-prototyping client landing pages in under 30 minutes.',
            km: 'ក្រុមហ៊ុនឌីសាញ បង្កើតសេចក្តីព្រាង Landing Page ជូនអតិថិជនយ៉ាងលឿនក្នុងពេល ៣០ នាទី។',
          },
          solution: {
            en: 'Master Web Building prompts allowed developers to generate complete, visually polished landing pages with responsive grids on the first turn.',
            km: 'Master Web Building Prompts អនុញ្ញាតឱ្យអ្នកអភិវឌ្ឍន៍បង្កើត Landing Page ដែលមានភាពរស់រវើក និង Responsive ភ្លាមៗ។',
          },
        },
        exercise: {
          scenario: {
            en: 'Draft a Master Web Building Prompt for an interactive Dashboard Header with search bar, notification bell dropdown toggle, and user profile avatar.',
            km: 'សរសេរ Master Web Building Prompt សម្រាប់បង្កើត Dashboard Header ដែលមានប្រអប់ស្វែងរក, Notification Dropdown, និងរូប Profile Avatar។',
          },
          targetDomain: 'UI Architecture',
          hints: [
            {
              en: 'Specify state variables required (isNotificationOpen, searchQuery).',
              km: 'បញ្ជាក់ State Variables ដែលត្រូវប្រើ (isNotificationOpen, searchQuery)។',
            },
          ],
          sampleStrongPrompt:
            'Build a responsive React Dashboard Header using Tailwind CSS and Lucide React. Requirements: (1) Interactive search input updating state, (2) Notification bell with unread badge counter and toggleable dropdown drawer state, (3) User profile avatar with status dot, (4) Fully accessible keyboard navigation.',
        },
        quiz: [
          {
            id: 'm6-l3-q1',
            question: {
              en: 'What is the most critical instruction to include when asking AI to build interactive React UI components?',
              km: 'តើអ្វីជាការណែនាំសំខាន់បំផុត ពេលសុំឱ្យ AI បង្កើត Interactive React UI Components?',
            },
            options: [
              {
                id: 'a',
                text: {
                  en: 'Explicitly command that state handlers must be fully wired with real useState/useEffect logic rather than mock stub functions.',
                  km: 'បញ្ជាឱ្យច្បាស់ថាគ្រប់ State Handlers ត្រូវតែមានកូដ useState/useEffect ដំណើរការពិតប្រាកដ មិនមែនតែកូដក្លែងក្លាយឡើយ។',
                },
                isCorrect: true,
              },
              {
                id: 'b',
                text: {
                  en: 'Ask for inline CSS only.',
                  km: 'សុំតែ inline CSS។',
                },
                isCorrect: false,
              },
            ],
            explanation: {
              en: 'Explicit state wiring instructions prevent AI from outputting empty onClick={() => {}} placeholder functions.',
              km: 'ការណែនាំ State ច្បាស់លាស់ ការពារកុំឱ្យ AI បញ្ចេញកូដទទេ onClick={() => {}}។',
            },
          },
        ],
      },
      {
        id: 'm6-l4',
        moduleId: 'module-6',
        moduleNumber: 6,
        lessonNumber: 4,
        title: {
          en: 'Business Analysis, Emails & Report Prompts',
          km: 'Prompt សម្រាប់ការវិភាគអាជីវកម្ម អ៊ីមែល និងរបាយការណ៍',
        },
        durationMinutes: 25,
        difficulty: 'Intermediate',
        description: {
          en: 'Prompting for business analytics, executive summary reports, and client communication requires structured markdown summaries, quantitative data extraction, and executive tone positioning. Converting raw unstructured meeting notes into crisp actionable action items saves hours of executive overhead.',
          km: 'ការសរសេរ Prompt សម្រាប់ការវិភាគអាជីវកម្ម របាយការណ៍សង្ខេបប្រតិបត្តិ និងទំនាក់ទំនងអតិថិជន ទាមទារឱ្យមានទម្រង់ Markdown ច្បាស់លាស់ ការទាញយកទិន្នន័យបរិមាណ និងសំឡេងកម្រិតថ្នាក់ដឹកនាំ។ ការបម្លែងកំណត់ហេតុប្រជុំ ទៅជាចំណុចសកម្មភាពជាក់ស្តែង ជួយសន្សំសំជាពេលវេលាយ៉ាងច្រើន។',
        },
        tutorial: {
          en: `### Unstructured Data Extraction Pattern

Use this template to parse messy meeting notes:
\`\`\`markdown
[TASK]: Parse the raw meeting transcript below into a structured Executive Briefing.
[OUTPUT FORMAT]:
1. Executive Summary (Max 3 sentences)
2. Decisions Made (Bulleted)
3. Action Items Table: | Owner | Task | Deadline |
\`\`\``,
          km: `### គំរូទាញយកទិន្នន័យពីកំណត់ហេតុប្រជុំ

ប្រើប្រាស់ Template នេះដើម្បីរៀបចំកំណត់ហេតុប្រជុំ៖
\`\`\`markdown
[TASK]៖ បម្លែងអត្ថបទកំណត់ហេតុប្រជុំ ទៅជា Executive Briefing។
[OUTPUT FORMAT]៖
១. សេចក្តីសង្ខេបប្រតិបត្តិ (អតិបរមា ៣ ល្បះ)
២. ការសម្រេចចិត្តដែលបានព្រមព្រៀង (ចំណុចៗ)
៣. តារាងសកម្មភាពត្រូវធ្វើ៖ | អ្នកទទួលខុសត្រូវ | ភារកិច្ច | កាលបរិច្ឆេទកំណត់ |
\`\`\``,
        },
        beforeAfter: {
          scenario: {
            en: 'Summarizing a 1-hour messy client status call transcript.',
            km: 'សង្ខេបអត្ថបទសន្ទនាប្រជុំជាមួយអតិថិជនរយ:ពេល ១ ម៉ោង។',
          },
          weakPrompt: 'Summarize meeting call.',
          weakOutput: {
            en: 'The client talked about their budget, new timeline, design preferences, and asked for another call next week.',
            km: 'អតិថិជនបាននិយាយអំពីថវិកា កាលវិភាគថ្មី ការឌីសាញ និងសុំប្រជុំសប្តាហ៍ក្រោយ។',
          },
          improvedPrompt:
            'Act as a Chief of Staff. Process the raw transcript below into an Executive Briefing. Structure: (1) 2-sentence Executive Summary, (2) Key Risks Identified, and (3) Action Items Table with columns [Owner, Action, Due Date]. Keep total response under 200 words.',
          improvedOutput: {
            en: `### Executive Briefing: Q3 Portal Launch

**Executive Summary**: The client approved the core UI redesign but requested delaying launch to Oct 15 to allow external security penetration testing. Total project budget remains unchanged.

#### Key Risks Identified
- 2-week delay in security audit timeline could clash with holiday marketing.
- Third-party payment gateway API documentation remains incomplete.

#### Action Items Table
| Owner | Action Item | Due Date |
| :--- | :--- | :--- |
| **Sophea (Dev Lead)** | Send sandbox API credentials to audit team | Aug 10 |
| **Dara (PM)** | Draft revised project timeline charter | Aug 12 |`,
            km: `### របាយការណ៍សង្ខេបប្រតិបត្តិ៖ ការបើកដំណើរការ Q3

**សេចក្តីសង្ខេប**៖ អតិថិជនបានអនុម័តការឌីសាញ UI ថ្មី ប៉ុន្តែសុំពន្យារពេលបើកដំណើរការទៅថ្ងៃទី ១៥ តុលា ដើម្បីធ្វើ Security Penetration Testing។ ថវិកាសរុបនៅរក្សាដដែល។

#### ហានិភ័យសំខាន់ៗ
- ការពន្យារពេល ២សប្តាហ៍លើ Security Audit អាចប៉ះពាល់ដល់យុទ្ធនាការទីផ្សារ។

#### តារាងសកម្មភាពត្រូវធ្វើ
| អ្នកទទួលខុសត្រូវ | ភារកិច្ច | កាលបរិច្ឆេទ |
| :--- | :--- | :--- |
| **សុភា (Dev Lead)** | បញ្ជូន API Credentials ទៅក្រុម Audit | ១០ សីហា |
| **តារា (PM)** | រៀបចំកាលវិភាគគម្រោងថ្មី | ១២ សីហា |`,
          },
          keyImprovements: [
            {
              en: 'Structured unstructured call chatter into clean actionable markdown decision table.',
              km: 'បម្លែងការសន្ទនាស្មុគស្មាញ ទៅជាតារាងសកម្មភាព និងការសម្រេចចិត្តច្បាស់លាស់។',
            },
          ],
        },
        realWorldExample: {
          context: {
            en: 'An operations lead preparing quarterly business review (QBR) slides.',
            km: 'អ្នកគ្រប់គ្រងប្រតិបត្តិការ រៀបចំស្លាយរបាយការណ៍អាជីវកម្មប្រចាំត្រីមាស QBR។',
          },
          solution: {
            en: 'Prompting for risk-opportunity matrix layout reduced presentation prep time from 8 hours to 45 minutes.',
            km: 'Prompt សម្រាប់បង្កើត Risk-Opportunity Matrix កាត់បន្ថយពេលរៀបចំ Presentation ពី ៨ ម៉ោង មកត្រឹម ៤៥ នាទី។',
          },
        },
        exercise: {
          scenario: {
            en: 'Draft a business prompt that writes a polite but firm invoice payment reminder email for an overdue invoice (14 days past due).',
            km: 'សរសេរ Prompt សម្រាប់បង្កើត អ៊ីមែលរំលឹកទូទាត់ប្រាក់វិក្កយបត្រ (ហួសកំណត់ ១៤ ថ្ងៃ) ប្រកបដោយភាពគួរសម និងម៉ត់ចត់។',
          },
          targetDomain: 'Business Communication',
          hints: [
            {
              en: 'Specify tone: Polite, professional, firm. Include invoice number placeholder and late fee clause reference.',
              km: 'កំណត់សំឡេង៖ គួរសម អាជីព ម៉ត់ចត់។ បញ្ចូលលេខវិក្កយបត្រ និងលក្ខខណ្ឌប្រាក់ពិន័យ។',
            },
          ],
          sampleStrongPrompt:
            'Act as a Senior Accounts Receivable Specialist. Write a polite but firm 100-word payment reminder email for invoice #INV-4029 which is now 14 days overdue. Include clear payment link placeholder and mention standard 2% late charge applying after 30 days.',
        },
        quiz: [
          {
            id: 'm6-l4-q1',
            question: {
              en: 'What layout format is most effective for displaying action items extracted from business meeting transcripts?',
              km: 'តើទម្រង់ Layout មួយណាដែលមានប្រសិទ្ធភាពបំផុតសម្រាប់បង្ហាញសកម្មភាពត្រូវធ្វើដែលទាញចេញពីកំណត់ហេតុប្រជុំ?',
            },
            options: [
              {
                id: 'a',
                text: {
                  en: 'Markdown tables with explicit columns for Owner, Action, and Due Date.',
                  km: 'តារាង Markdown ដែលមានជួរឈរច្បាស់លាស់សម្រាប់ អ្នកទទួលខុសត្រូវ ភារកិច្ច និងកាលបរិច្ឆេទ។',
                },
                isCorrect: true,
              },
              {
                id: 'b',
                text: {
                  en: 'A single long paragraph of text.',
                  km: 'អត្ថបទរៀបរាប់វែងមួយវគ្គ។',
                },
                isCorrect: false,
              },
            ],
            explanation: {
              en: 'Tables enforce structured attribute mapping across action ownership.',
              km: 'តារាងជួយបែងចែកការទទួលខុសត្រូវ និងភារកិច្ចបានច្បាស់លាស់។',
            },
          },
        ],
      },
      {
        id: 'm6-l5',
        moduleId: 'module-6',
        moduleNumber: 6,
        lessonNumber: 5,
        title: {
          en: 'Visual/Image Generation Prompts (Composition & Style)',
          km: 'Prompt សម្រាប់ការបង្កើតរូបភាព Visual AI (សមាសភាព និងស្ទីល)',
        },
        durationMinutes: 30,
        difficulty: 'Intermediate',
        description: {
          en: 'Generative image models (such as Midjourney, Stable Diffusion, or Gemini Imagen) respond to camera lighting parameters, lens choices, art styles, color palettes, and composition terms rather than standard text syntax. Mastering photographic technical terms like "volumetric lighting", "85mm prime lens f/1.8", and "cyberpunk neon gradient" gives you surgical control over visual AI output.',
          km: 'ម៉ូឌែលបង្កើតរូបភាព AI (ដូចជា Midjourney, Stable Diffusion, ឬ Gemini Imagen) ឆ្លើយតបទៅនឹងប៉ារ៉ាម៉ែត្រពន្លឺកាមេរ៉ា, ការជ្រើសរើសកែវឡេន, ស្ទីលសិល្បៈ, កាយវិការ និងសមាសភាពរូបភាព។ ការស្ទាត់ជំនាញលើពាក្យបច្ចេកទេសថតរូប ដូចជា "Volumetric Lighting", "85mm Prime Lens f/1.8" ផ្តល់ឱ្យអ្នកនូវការគ្រប់គ្រងយ៉ាងម៉ត់ចត់លើរូបភាព AI។',
        },
        tutorial: {
          en: `### The 5-Element Image Prompt Architecture

1. **Subject**: Core focal object/person ("A Cambodian software engineer").
2. **Environment/Setting**: Background context ("inside a glowing futuristic neon tech lab in Phnom Penh").
3. **Lighting**: Atmospheric light quality ("cinematic volumetric rim lighting, dusk warm tones").
4. **Camera/Medium**: Photography parameters ("shot on 35mm lens, f/1.4 aperture, shallow depth of field").
5. **Style/Art Direction**: Aesthetic genre ("photorealistic, hyper-detailed, octane render 8k").`,
          km: `### រចនាសម្ព័ន្ធ Image Prompt ៥ ធាតុ

១. **Subject (ប្រធានបទ)**៖ វត្ថុ ឬមនុស្សកណ្តាល ("វិស្វករសូហ្វវែរជនជាតិខ្មែរ")។
២. **Environment (បរិស្ថាន)**៖ ព័ត៌មានខាងក្រោយ ("ក្នុងបន្ទប់ពិសោធន៍បច្ចេកវិទ្យាភ្លឺចែងចាំងនៅភ្នំពេញ")។
៣. **Lighting (ពន្លឺ)**៖ គុណភាពពន្លឺ ("Cinematic volumetric rim lighting")។
៤. **Camera (កាមេរ៉ា)**៖ ប៉ារ៉ាម៉ែត្រថតរូប ("ថតដោយកែវឡេន 35mm, f/1.4 aperture")។
៥. **Style (ស្ទីល)**៖ ទម្រង់សិល្បៈ ("Photorealistic, hyper-detailed, 8k")។`,
        },
        beforeAfter: {
          scenario: {
            en: 'Generating a banner image for an AI conference website.',
            km: 'បង្កើតរូបភាព Banner សម្រាប់វេបសាយសន្និសីទ AI។',
          },
          weakPrompt: 'Draw a futuristic robot in Cambodia.',
          weakOutput: {
            en: 'Generic cartoonish robot standing near a templated Angkor Wat drawing.',
            km: 'រូបត្លុក Robot ឈរក្បែររូបគំនូរប្រាសាទអង្គរវត្តទូទៅ។',
          },
          improvedPrompt:
            'A high-tech metallic humanoid AI robot seamlessly writing holographic code in mid-air, set against a sleek modern Phnom Penh skyline at twilight. Volumetric cyan and gold neon backlighting, camera shot on Hasselblad 80mm lens, photorealistic macro detail, cinematic shallow depth of field, 8k resolution, Unreal Engine 5 render style --ar 16:9.',
          improvedOutput: {
            en: `Stunning 16:9 cinematic photograph featuring crisp holographic glow, metallic reflections, ultra-sharp lens focal depth, and breathtaking futuristic aesthetic!`,
            km: `រូបថតខ្នាត 16:9 បែប Cinematic ដែលមានពន្លឺ Holographic ច្បាស់ត្រជាក់ភ្នែក, ចាំងចែងចាំងលើលោហៈ និងមានភាពរស់រវើកកម្រិត 8K!`,
          },
          keyImprovements: [
            {
              en: 'Replaced vague drawing request with specific lens (Hasselblad 80mm), lighting (cyan/gold volumetric), and aspect ratio bounds.',
              km: 'ផ្លាស់ប្តូរការសុំរូបគំនូរទូទៅ មកជាការកំណត់កែវឡេន ពន្លឺ និងសមាមាត្ររូបភាព 16:9។',
            },
          ],
        },
        realWorldExample: {
          context: {
            en: 'An e-commerce brand generating studio product photography without renting physical studio space.',
            km: 'ម៉ាកសញ្ញា E-Commerce បង្កើតរូបថតផលិតផលក្នុង Studio ដោយមិនបាច់ជួលកន្លែងថតពិតប្រាកដ។',
          },
          solution: {
            en: 'Using lighting parameters like "soft studio key light, marble countertop reflection, macro lens" produced commercial-grade product photos instantly.',
            km: 'ការប្រើប្រាស់ប៉ារ៉ាម៉ែត្រពន្លឺ "Soft studio key light, marble reflection" បង្កើតបានជា រូបថតផលិតផលពាណិជ្ជកម្មភ្លាមៗ។',
          },
        },
        exercise: {
          scenario: {
            en: 'Draft an image generation prompt for a modern coffee shop interior in Phnom Penh.',
            km: 'សរសេរ Image Prompt សម្រាប់បង្កើតរូបភាពខាងក្នុងហាងកាហ្វេទំនើបនៅភ្នំពេញ។',
          },
          targetDomain: 'Visual Prompt Architecture',
          hints: [
            {
              en: 'Include lighting (warm golden hour sunlight through window), camera parameters (35mm lens), and visual aesthetic keywords.',
              km: 'បញ្ចូលពន្លឺ (ពន្លឺព្រះអាទិត្យរលោងតាមបង្អួច), កាមេរ៉ា (35mm lens) និងពាក្យបច្ចេកទេសឌីសាញ។',
            },
          ],
          sampleStrongPrompt:
            'Interior photography of a minimalist modern coffee shop in Phnom Penh, warm golden hour sunlight streaming through floor-to-ceiling windows, lush indoor tropical plants, matte black espresso machine, shot on 35mm lens f/2.0, architectural digest style, warm natural tones --ar 16:9.',
        },
        quiz: [
          {
            id: 'm6-l5-q1',
            question: {
              en: 'Which camera terminology helps create a background blur (bokeh) effect in AI image prompts?',
              km: 'តើពាក្យបច្ចេកទេសកាមេរ៉ាមួយណាដែលជួយបង្កើតបែបផែន ព្រិលផ្ទៃខាងក្រោយ (Bokeh) ក្នុង AI Image Prompts?',
            },
            options: [
              {
                id: 'a',
                text: {
                  en: 'Shallow depth of field / wide aperture (e.g. f/1.4 or f/1.8 lens).',
                  km: 'Shallow depth of field / wide aperture (ឧទាហរណ៍ កែវឡេន f/1.4 ឬ f/1.8)។',
                },
                isCorrect: true,
              },
              {
                id: 'b',
                text: {
                  en: 'High ISO noise factor.',
                  km: 'High ISO noise factor. ',
                },
                isCorrect: false,
              },
            ],
            explanation: {
              en: 'Specifying wide apertures (f/1.4) triggers optical background blur training weights in visual generative models.',
              km: 'ការកំណត់ Aperture ធំ (f/1.4) បង្ខំឱ្យ AI បង្កើតភាពព្រិលនៅផ្ទៃខាងក្រោយ។',
            },
          },
        ],
      },
      {
        id: 'm6-l6',
        moduleId: 'module-6',
        moduleNumber: 6,
        lessonNumber: 6,
        title: {
          en: 'Research, Fact-Checking & Summarization Prompts',
          km: 'Prompt សម្រាប់ការស្រាវជ្រាវ ផ្ទៀងផ្ទាត់ការិត្យ និងការសង្ខេប',
        },
        durationMinutes: 25,
        difficulty: 'Intermediate',
        description: {
          en: 'Using AI for research without grounding rules invites hallucinated facts, false citations, and outdated information. Fact-checking prompts enforce strict citation boundaries, requiring the model to extract verbatim quotes from provided source texts and explicitly flag unverified claims.',
          km: 'ការប្រើប្រាស់ AI សម្រាប់ការស្រាវជ្រាវដោយគ្មានវិធានបង្អែក ច្រើនតែបង្កឱ្យមានការឆ្លើយខុស (Hallucination), ប្រភពយោងក្លែងក្លាយ និងព័ត៌មានហួសសម័យ។ Prompt សម្រាប់ការផ្ទៀងផ្ទាត់ការពិត បង្ខំឱ្យ AI យោងតាមអត្ថបទប្រភព និងចង្អុលបង្ហាញព័ត៌មានដែលគ្មានប្រភពច្បាស់លាស់។',
        },
        tutorial: {
          en: `### Grounded Research Prompt Formula

\`\`\`markdown
[STRICT RULE]: Answer the research question relying EXCLUSIVELY on the text provided inside <source_document>.
If the answer is NOT explicitly stated in the source document, output: "DATA NOT AVAILABLE IN SOURCE".
Do NOT use external knowledge.
\`\`\``,
          km: `### រូបមន្ត Grounded Research Prompt

\`\`\`markdown
[STRICT RULE]៖ ឆ្លើយសំណួរស្រាវជ្រាវដោយផ្អែកលើអត្ថបទក្នុង <source_document> តែមួយគត់។
ប្រសិនបើចម្លើយមិនមានក្នុងអត្ថបទប្រភពទេ សូមឆ្លើយ៖ "ទិន្នន័យមិនមានក្នុងប្រភពឡើយ"។
កុំប្រើប្រាស់ចំណេះដឹងខាងក្រៅជាដាច់ខាត។
\`\`\``,
        },
        beforeAfter: {
          scenario: {
            en: 'Extracting factual financial performance stats from an annual report PDF text.',
            km: 'ទាញយកទិន្នន័យហិរញ្ញវត្ថុពិតប្រាកដ ពីអត្ថបទរបាយការណ៍ប្រចាំឆ្នាំ PDF។',
          },
          weakPrompt: 'What was the revenue and profit of the company in 2025?',
          weakOutput: {
            en: 'The company generated approximately $50 million in revenue with strong profitability across all sectors.',
            km: 'ក្រុមហ៊ុនបង្កើតចំណូលបានប្រមាណ ៥០ លានដុល្លារ ជាមួយប្រាក់ចំណេញខ្ពស់។',
          },
          improvedPrompt: `<instructions>
Extract 2025 Revenue and Net Profit figures strictly from <source_report>.
Requirements:
1. Provide exact dollar figure.
2. Quote the verbatim sentence from the source document supporting your answer.
3. If figures are missing, write "NOT STATED".
</instructions>

<source_report>
[Pasted financial report text]
</source_report>`,
          improvedOutput: {
            en: `### Financial Figures
- **2025 Revenue**: $42.8 Million
  - *Supporting Citation*: "In FY2025, consolidated gross revenue reached $42.8M, representing a 14% YoY growth."
- **2025 Net Profit**: $8.1 Million
  - *Supporting Citation*: "Net profit after tax closed at $8.1M for the trailing 12-month period."`,
            km: `### ទិន្នន័យហិរញ្ញវត្ថុ
- **ចំណូលឆ្នាំ ២០២៥**៖ $៤២.៨ លានដុល្លារ
  - *អត្ថបទយោង*៖ "In FY2025, consolidated gross revenue reached $42.8M, representing a 14% YoY growth."
- **ប្រាក់ចំណេញសុទ្ធ ២០២៥**៖ $៨.១ លានដុល្លារ
  - *អត្ថបទយោង*៖ "Net profit after tax closed at $8.1M for the trailing 12-month period."`,
          },
          keyImprovements: [
            {
              en: 'Forced exact verbatim quote citations to eliminate hallucinated financial figures.',
              km: 'បង្ខំឱ្យទាញយកអត្ថបទយោងត្រង់ៗ ដើម្បីលុបបំបាត់ការឆ្លើយលេខក្លែងក្លាយ។',
            },
          ],
        },
        realWorldExample: {
          context: {
            en: 'A legal compliance team auditing vendor contracts for data privacy indemnification clauses.',
            km: 'ក្រុមអ្នកច្បាប់ ពិនិត្យមើលកិច្ចសន្យាអ្នកផ្គត់ផ្គង់ លើមាត្រាធានារ៉ាប់រងឯកជនភាព។',
          },
          solution: {
            en: 'Requiring strict verbatim quote verification prevented missing critical liability cap exclusions.',
            km: 'ការតម្រូវឱ្យមានការយោងអត្ថបទត្រង់ៗ ការពារកុំឱ្យរំលងមាត្រាកម្រិតការទទួលខុសត្រូវ។',
          },
        },
        exercise: {
          scenario: {
            en: 'Draft a research prompt that summarizes a medical study abstract without hallucinating clinical trial drug names or dosages.',
            km: 'សរសេរ Research Prompt សង្ខេបការស្រាវជ្រាវវេជ្ជសាស្ត្រ ដោយមិនឱ្យច្រឡំឈ្មោះថ្នាំ ឬកម្រិតប្រើប្រាស់។',
          },
          targetDomain: 'Medical Research Prompting',
          hints: [
            {
              en: 'Command: "Extract only named drugs and exact milligram dosage numbers stated in text."',
              km: 'បញ្ជា៖ "ទាញយកតែឈ្មោះថ្នាំ និងកម្រិត មីលីក្រាម ដែលមានក្នុងអត្ថបទប៉ុណ្ណោះ"។',
            },
          ],
          sampleStrongPrompt:
            'Summarize the clinical trial findings from <abstract_text>. Rules: (1) List only exact dosage numbers explicitly cited, (2) If sample size N is not stated, write "N unlisted", (3) Quote verbatim conclusion sentence.',
        },
        quiz: [
          {
            id: 'm6-l6-q1',
            question: {
              en: 'What is the most reliable prompt constraint to prevent AI from inventing fake facts during research tasks?',
              km: 'តើអ្វីជាលក្ខខណ្ឌ Prompt ដែលមានប្រសិទ្ធភាពបំផុតក្នុងការការពារ AI មិនឱ្យបង្កើតព័ត៌មានក្លែងក្លាយពេលស្រាវជ្រាវ?',
            },
            options: [
              {
                id: 'a',
                text: {
                  en: 'Instruct the model to answer EXCLUSIVELY using provided source text and require verbatim quote citations for every claim.',
                  km: 'បញ្ជាឱ្យ AI ឆ្លើយតែតាមអត្ថបទប្រភពដែលបានផ្តល់ឱ្យប៉ុណ្ណោះ និងតម្រូវឱ្យមានការយោងអត្ថបទត្រង់ៗសម្រាប់គ្រប់ចំណុច។',
                },
                isCorrect: true,
              },
              {
                id: 'b',
                text: {
                  en: 'Tell the AI to "be honest".',
                  km: 'ប្រាប់ AI ឱ្យ "ស្មោះត្រង់"។',
                },
                isCorrect: false,
              },
            ],
            explanation: {
              en: 'Verbatim quote grounding anchors the model attention weights directly to source tokens.',
              km: 'ការយោងអត្ថបទត្រង់ៗ ជួយភ្ជាប់ Attention របស់ AI ទៅកាន់អត្ថបទដើមដោយផ្ទាល់។',
            },
          },
        ],
      },
    ],
  },

  // MODULE 7
  {
    id: 'module-7',
    moduleNumber: 7,
    title: {
      en: 'Module 7: Agentic & Automated AI Workflows',
      km: 'មូឌុលទី ៧៖ Agentic & Automated AI Workflows',
    },
    description: {
      en: 'Understand Autonomous Multi-Step AI Agents, Function Calling, Tool Use, RAG, and Automated Prompt Pipelines.',
      km: 'យល់ដឹងអំពី Autonomous Multi-Step AI Agents, Function Calling, Tool Use, RAG និងការឌីសាញ Automated Prompt Pipelines។',
    },
    lessons: [
      {
        id: 'm7-l1',
        moduleId: 'module-7',
        moduleNumber: 7,
        lessonNumber: 1,
        title: {
          en: 'Introduction to Agentic AI & Autonomous Multi-Step Workflows',
          km: 'ណែនាំអំពី Agentic AI និង Autonomous Multi-Step Workflows',
        },
        durationMinutes: 30,
        difficulty: 'Advanced',
        description: {
          en: 'Unlike passive chatbots that wait for a single text prompt and respond once, Agentic AI systems operate autonomously. An AI Agent breaks down high-level objectives into sub-goals, decides which tools or search APIs to call, evaluates intermediate outputs, and continuously loops until the goal is accomplished.',
          km: 'ខុសពី Chatbot ធម្មតាដែលរង់ចាំតែការសួរ និងឆ្លើយម្តងៗ, ប្រព័ន្ធ Agentic AI ធ្វើការដោយស្វ័យប្រវត្ត។ AI Agent បំបែកគោលដៅធំៗទៅជាគោលដៅតូចៗ, ជ្រើសរើស Tools ឬ Search APIs ដែលត្រូវប្រើ, វាយតម្លៃលទ្ធផលបណ្តោះអាសន្ន និងធ្វើការរហូតដល់សម្រេចគោលដៅ។',
        },
        tutorial: {
          en: `### Passive LLM vs Agentic AI Architecture

\`\`\`
PASSIVE CHATBOT:
User Prompt ---> [LLM] ---> Static Text Answer

AGENTIC AI WORKFLOW:
User Objective ---> [Planner Agent]
                       |---> Calls Web Search API
                       |---> Parses Search Results
                       |---> Detects Missing Info -> Calls Weather API
                       |---> Synthesizes Report ---> [Final Output]
\`\`\``,
          km: `### ការប្រៀបធៀប Passive LLM និង Agentic AI

\`\`\`
PASSIVE CHATBOT:
User Prompt ---> [LLM] ---> ចម្លើយអត្ថបទធម្មតា

AGENTIC AI WORKFLOW:
User Objective ---> [Planner Agent]
                       |---> ប្រើប្រាស់ Web Search API
                       |---> បកប្រែទិន្នន័យ Search
                       |---> ស្វែងរកព័ត៌មានបន្ថែម -> ប្រើប្រាស់ Weather API
                       |---> សំយោគរបាយការណ៍ ---> [ចម្លើយចុងក្រោយ]
\`\`\``,
        },
        beforeAfter: {
          scenario: {
            en: 'Planning a business trip itinerary accounting for live weather and flights.',
            km: 'រៀបចំកាលវិភាគធ្វើដំណើរអាជីវកម្ម ដោយគិតគូរពីអាកាសធាតុ និងជើងហោះហើររស់។',
          },
          weakPrompt: 'Plan my trip to Tokyo next week.',
          weakOutput: {
            en: 'Here is a general 3-day tourist itinerary for Tokyo.',
            km: 'នេះជាកាលវិភាគដើរកម្សាន្តទូទៅ ៣ ថ្ងៃនៅតូក្យូ។',
          },
          improvedPrompt:
            'Act as an Autonomous Travel Agent. OBJECTIVE: Create a 3-day executive itinerary for Tokyo starting March 10. AGENT WORKFLOW: (1) Query live weather API for forecast, (2) If rain probability > 60%, substitute indoor venues, (3) Output finalized Markdown table with schedule and transit times.',
          improvedOutput: {
            en: `### Agent Execution Log:
- Step 1: Called Weather API -> Tokyo March 10: Rainy (78% prob).
- Step 2: Rerouted Outdoor Imperial Palace tour -> Tokyo National Museum (Indoor).
- Step 3: Generated finalized rain-proof executive schedule!`,
            km: `### កំណត់ហេតុប្រតិបត្តិការរបស់ Agent៖
- ជំហានទី ១៖ ប្រើប្រាស់ Weather API -> តូក្យូ ថ្ងៃទី ១០ មីនា៖ មានភ្លៀង (៧៨%)។
- ជំហានទី ២៖ ផ្លាស់ប្តូរការដើរក្រៅអគារ -> ទៅកាន់សារមន្ទីរជាតិ (ក្នុងអគារ)។
- ជំហានទី ៣៖ បង្កើតកាលវិភាគធ្វើដំណើរការពារភ្លៀងរួចរាល់!`,
          },
          keyImprovements: [
            {
              en: 'Shifted from static generation to dynamic agentic tool-use decision loop.',
              km: 'ផ្លាស់ប្តូរពីការបង្កើតអត្ថបទធម្មតា មកជាដំណើរការ Agentic ដែលប្រើប្រាស់ Tools។',
            },
          ],
        },
        realWorldExample: {
          context: {
            en: 'An autonomous customer support agent resolving complex shipping refunds.',
            km: 'Customer support agent ស្វ័យប្រវត្តិ ដោះស្រាយការសងប្រាក់ទំនិញស្មុគស្មាញ។',
          },
          solution: {
            en: 'Agent autonomously checked Shopify API order status, verified FedEx tracking API, and executed refund webhook without human intervention.',
            km: 'Agent ត្រួតពិនិត្យ Shopify API, ផ្ទៀងផ្ទាត់ FedEx tracking និងដោះស្រាយការសងប្រាក់ដោយស្វ័យប្រវត្តិ។',
          },
        },
        exercise: {
          scenario: {
            en: 'Draft an Agentic Goal Prompt for a Competitor Analysis Agent.',
            km: 'សរសេរ Agentic Goal Prompt សម្រាប់ Agent វិភាគគូប្រជែង។',
          },
          targetDomain: 'Agent Architecture',
          hints: [
            {
              en: 'Specify sub-goal sequence: Search pricing -> Extract features -> Build comparison table.',
              km: 'កំណត់លំដាប់ sub-goals៖ ស្វែងរកតម្លៃ -> ទាញយកមុខងារ -> បង្កើតតារាងប្រៀបធៀប។',
            },
          ],
          sampleStrongPrompt:
            'AGENT OBJECTIVE: Analyze top 3 competitors for "SaaS form builders". \nWORKFLOW: \n1. Search web for pricing pages of Competitor A, B, C. \n2. Extract free-tier limitations. \n3. Output markdown matrix comparing price vs feature limits.',
        },
        quiz: [
          {
            id: 'm7-l1-q1',
            question: {
              en: 'What fundamentally distinguishes an Agentic AI system from a standard chatbot?',
              km: 'តើអ្វីជាភាពខុសគ្នាគ្រឹះរវាង Agentic AI និង Chatbot ធម្មតា?',
            },
            options: [
              {
                id: 'a',
                text: {
                  en: 'Agentic AI autonomously plans, loops, and executes multi-step tool actions to achieve high-level goals.',
                  km: 'Agentic AI រៀបចំផែនការ រត់ Loop និងប្រើប្រាស់ Tools ជាច្រើនជំហានដោយស្វ័យប្រវត្តិ ដើម្បីសម្រេចគោលដៅ។',
                },
                isCorrect: true,
              },
              {
                id: 'b',
                text: {
                  en: 'Agentic AI uses a bigger monitor.',
                  km: 'Agentic AI ប្រើប្រាស់អេក្រង់ធំជាងមុន។',
                },
                isCorrect: false,
              },
            ],
            explanation: {
              en: 'Autonomous planning and tool iteration define agentic workflows.',
              km: 'ការរៀបចំផែនការស្វ័យប្រវត្តិ និងការប្រើប្រាស់ Tools កំណត់ Agentic Workflows។',
            },
          },
        ],
      },
      {
        id: 'm7-l2',
        moduleId: 'module-7',
        moduleNumber: 7,
        lessonNumber: 2,
        title: {
          en: 'Tool Use, Function Calling & RAG Concepts',
          km: 'ការប្រើប្រាស់ Tools, Function Calling និង RAG Concepts',
        },
        durationMinutes: 30,
        difficulty: 'Master',
        description: {
          en: 'Function Calling allows an LLM to output structured JSON arguments targeted at external API functions (e.g. `send_email()`, `query_database()`). Retrieval-Augmented Generation (RAG) fetches private domain documents from a vector database before prompting, enabling AI models to answer questions on proprietary company data with 0% public training leakage.',
          km: 'Function Calling អនុញ្ញាតឱ្យ LLM បញ្ចេញ JSON សម្រាប់ហៅប្រើប្រាស់ External API Functions (ដូចជា `send_email()`, `query_database()`)។ Retrieval-Augmented Generation (RAG) ទាញយកឯកសារឯកជនពី Vector Database មុនពេលសួរសំណួរ ធ្វើឱ្យ AI អាចឆ្លើយសំណួរលើទិន្នន័យផ្ទៃក្នុងក្រុមហ៊ុនបានយ៉ាងត្រឹមត្រូវ។',
        },
        tutorial: {
          en: `### The RAG (Retrieval-Augmented Generation) Pipeline

\`\`\`
1. [User Question] ---> "What is our company holiday policy?"
2. [Vector Search] ---> Fetches relevant paragraphs from HR_Policy_2026.pdf
3. [Augmented Prompt]:
   "Answer user question relying ONLY on retrieved context:
    <context> [Retrieved HR Paragraphs] </context>
    Question: What is our company holiday policy?"
4. [LLM Response] ---> Accurate factual answer based on internal document!
\`\`\``,
          km: `### ដំណើរការប្រព័ន្ធ RAG (Retrieval-Augmented Generation)

\`\`\`
១. [សំណួរអ្នកប្រើប្រាស់] ---> "តើអ្វីជាគោលការណ៍ឈប់សម្រាករបស់ក្រុមហ៊ុន?"
២. [Vector Search] ---> ទាញយកវគ្គអត្ថបទពាក់ព័ន្ធពី HR_Policy_2026.pdf
៣. [Augmented Prompt]៖
   "ឆ្លើយសំណួរដោយផ្អែកលើអត្ថបទដែលទាញបាន៖
    <context> [អត្ថបទ HR ដែលទាញបាន] </context>
    សំណួរ៖ តើអ្វីជាគោលការណ៍ឈប់សម្រាករបស់ក្រុមហ៊ុន?"
៤. [ចម្លើយ AI] ---> ចម្លើយត្រឹមត្រូវ ១០០% ចេញពីឯកសារក្រុមហ៊ុន!
\`\`\``,
        },
        beforeAfter: {
          scenario: {
            en: 'Asking an AI to query an inventory database via Function Calling.',
            km: 'សុំឱ្យ AI ពិនិត្យមើលទំនិញក្នុងស្តុក តាមរយៈ Function Calling។',
          },
          weakPrompt: 'Do we have iPhone 16 in stock?',
          weakOutput: {
            en: 'I do not have access to real-time inventory data as an AI language model.',
            km: 'ខ្ញុំមិនមានទិន្នន័យស្តុកជាក់ស្តែងនោះទេ។',
          },
          improvedPrompt: `SYSTEM CONTEXT: You have access to tool function \`check_inventory(item_id, warehouse_id)\`.
USER QUERY: "Check if we have iPhone 16 in Phnom Penh warehouse."
OUTPUT DIRECTIVE: Output valid JSON function call payload matching schema.`,
          improvedOutput: {
            en: `{"tool": "check_inventory", "arguments": {"item_name": "iPhone 16", "warehouse": "Phnom Penh"}}`,
            km: `{"tool": "check_inventory", "arguments": {"item_name": "iPhone 16", "warehouse": "Phnom Penh"}}`,
          },
          keyImprovements: [
            {
              en: 'Generated structured Function Calling payload to query live database.',
              km: 'បង្កើត Function Calling Payload ស្អាតស្អំ សម្រាប់ស្វែងរកក្នុង Database ពិតប្រាកដ។',
            },
          ],
        },
        realWorldExample: {
          context: {
            en: 'An enterprise internal AI knowledge portal for 2,000 employees.',
            km: 'ប្រព័ន្ធ AI ចេះដឹងផ្ទៃក្នុងក្រុមហ៊ុន សម្រាប់បុគ្គលិក ២,០០០ នាក់។',
          },
          solution: {
            en: 'RAG architecture connected to internal Notion & PDF docs allowed instant accurate policy answers without retraining models.',
            km: 'ស្ថាបត្យកម្ម RAG ដែលភ្ជាប់ទៅកាន់ Notion & PDFs ផ្តល់ចម្លើយត្រឹមត្រូវភ្លាមៗ ដោយមិនបាច់រៀន AI សារជាថ្មី។',
          },
        },
        exercise: {
          scenario: {
            en: 'Draft a RAG prompt structure combining retrieved knowledge snippets with a user support query.',
            km: 'សរសេរ រចនាសម្ព័ន្ធ RAG Prompt ដោយផ្គួបអត្ថបទដែលទាញបាន ជាមួយសំណួររបស់អតិថិជន។',
          },
          targetDomain: 'RAG Prompt Design',
          hints: [
            {
              en: 'Use <retrieved_docs> and <user_query> delimiter tags.',
              km: 'ប្រើប្រាស់ Tags <retrieved_docs> និង <user_query>។',
            },
          ],
          sampleStrongPrompt:
            '<instructions>Answer question using ONLY <retrieved_context>. Do not invent facts.</instructions>\n<retrieved_context>{{DOC_SNIPPETS}}</retrieved_context>\n<user_query>{{USER_QUESTION}}</user_query>',
        },
        quiz: [
          {
            id: 'm7-l2-q1',
            question: {
              en: 'What does RAG stand for in modern AI architecture?',
              km: 'តើ RAG ជាអក្សរកាត់នៃពាក្យអ្វីក្នុងស្ថាបត្យកម្ម AI ទំនើប?',
            },
            options: [
              {
                id: 'a',
                text: {
                  en: 'Retrieval-Augmented Generation',
                  km: 'Retrieval-Augmented Generation',
                },
                isCorrect: true,
              },
              {
                id: 'b',
                text: {
                  en: 'Random Automated Graphic',
                  km: 'Random Automated Graphic',
                },
                isCorrect: false,
              },
            ],
            explanation: {
              en: 'RAG combines document retrieval with text generation for grounded facts.',
              km: 'RAG បូកផ្សំការទាញយកឯកសារ ជាមួយការបង្កើតអត្ថបទចម្លើយ។',
            },
          },
        ],
      },
      {
        id: 'm7-l3',
        moduleId: 'module-7',
        moduleNumber: 7,
        lessonNumber: 3,
        title: {
          en: 'Designing Automated Prompt Pipelines',
          km: 'ការឌីសាញ Automated Prompt Pipelines',
        },
        durationMinutes: 30,
        difficulty: 'Master',
        description: {
          en: 'Production AI engineering involves building multi-stage prompt pipelines where specialized prompts execute in series or parallel (e.g. Ingestion -> Summarization -> Sentiment Tagging -> Database Storage). Designing resilient error-tolerant prompt pipelines guarantees scalable background data processing.',
          km: 'ការអភិវឌ្ឍ AI កម្រិតអាជីព រួមមានការសាងសង់ Prompt Pipelines ដែលសរសេរឡើងជាដំណាក់កាល (ឧទាហរណ៍៖ ទាញយកទិន្នន័យ -> សង្ខេប -> ដាក់ Sentiment Tag -> រក្សាទុកក្នុង Database)។',
        },
        tutorial: {
          en: `### Production Pipeline Architecture

1. **Stage 1 (Extractor Prompt)**: Extracts key entities from raw text into JSON.
2. **Stage 2 (Validator Prompt)**: Validates JSON against schema; flags errors.
3. **Stage 3 (Formatter Prompt)**: Converts validated data into database SQL insertion query.`,
          km: `### ស្ថាបត្យកម្ម Production Pipeline

១. **ដំណាក់កាលទី ១ (Extractor Prompt)**៖ ទាញយកទិន្នន័យពីអត្ថបទដើម ទៅជា JSON។
២. **ដំណាក់កាលទី ២ (Validator Prompt)**៖ ផ្ទៀងផ្ទាត់ JSON ជាមួយ Schema។
៣. **ដំណាក់កាលទី ៣ (Formatter Prompt)**៖ បម្លែងទិន្នន័យត្រឹមត្រូវ ទៅជា SQL Query។`,
        },
        beforeAfter: {
          scenario: {
            en: 'Processing customer feedback emails in background batch jobs.',
            km: 'ដំណើរការអ៊ីមែលមតិយោបល់អតិថិជន ក្នុងប្រព័ន្ធ Background ស្វ័យប្រវត្តិ។',
          },
          weakPrompt: 'Single prompt: Read email, analyze sentiment, write SQL query.',
          weakOutput: {
            en: 'Mix of text analysis and broken SQL syntax that failed database execution.',
            km: 'អត្ថបទវិភាគបូកឡូឡាជាមួយកូដ SQL ដែលរត់មិនកើត។',
          },
          improvedPrompt: `Pipeline Stage 1: Convert email to JSON schema {"sentiment": "POSITIVE|NEGATIVE", "urgency": 1-5}.
Pipeline Stage 2: Take Stage 1 JSON output and format PostgreSQL INSERT statement into table "feedback_logs".`,
          improvedOutput: {
            en: `Stage 1 Output: {"sentiment": "NEGATIVE", "urgency": 5}
Stage 2 Output: INSERT INTO feedback_logs (sentiment, urgency) VALUES ('NEGATIVE', 5);`,
            km: `Stage 1 Output: {"sentiment": "NEGATIVE", "urgency": 5}
Stage 2 Output: INSERT INTO feedback_logs (sentiment, urgency) VALUES ('NEGATIVE', 5);`,
          },
          keyImprovements: [
            {
              en: 'Decoupled monolithic prompt into 2 specialized single-purpose pipeline stages.',
              km: 'បំបែក Prompt ធំ ទៅជា ២ ដំណាក់កាលដែលមានជំនាញច្បាស់លាស់។',
            },
          ],
        },
        realWorldExample: {
          context: {
            en: 'An automated news aggregation platform publishing daily Tech Digests.',
            km: 'ប្រព័ន្ធប្រមូលផ្តុំព័ត៌មានស្វ័យប្រវត្តិ សម្រាប់បោះពុម្ពផ្សាយ Tech Digests ប្រចាំថ្ងៃ។',
          },
          solution: {
            en: 'Multi-stage prompt pipelines automated 100% of scraping, translation, summarization, and newsletter formatting.',
            km: 'Multi-stage prompt pipelines ធ្វើការងារ Scraping, បកប្រែ, សង្ខេប និងរៀបចំ Newsletter ដោយស្វ័យប្រវត្តិ ១០០%។',
          },
        },
        exercise: {
          scenario: {
            en: 'Design a 3-stage prompt pipeline blueprint for processing resume CVs.',
            km: 'ឌីសាញ 3-stage prompt pipeline blueprint សម្រាប់ការពិនិត្យប្រវត្តិរូបសង្ខេប (CVs)។',
          },
          targetDomain: 'Pipeline Engineering',
          hints: [
            {
              en: 'Define Stage 1 (Parsing), Stage 2 (Skill Matching), Stage 3 (Score Card Generation).',
              km: 'កំណត់ Stage 1 (Parsing), Stage 2 (Skill Matching), Stage 3 (Score Card)។',
            },
          ],
          sampleStrongPrompt:
            'PIPELINE BLUEPRINT:\nStage 1: Extract Name, Email, Skills list into JSON.\nStage 2: Compare Stage 1 skills with Job Requirements list.\nStage 3: Output Candidate Match Score (0-100%) with 3 key strengths.',
        },
        quiz: [
          {
            id: 'm7-l3-q1',
            question: {
              en: 'Why is decoupling complex AI workflows into multi-stage prompt pipelines recommended?',
              km: 'ហេតុអ្វីបានជាគេអនុសាសន៍ឱ្យបំបែក AI Workflows ស្មុគស្មាញ ទៅជា Multi-stage Prompt Pipelines?',
            },
            options: [
              {
                id: 'a',
                text: {
                  en: 'Single-purpose specialized prompts have dramatically higher reliability and are much easier to debug.',
                  km: 'Prompt ដែលមានជំនាញឯកទេសម្តងមួយៗ មានភាពត្រឹមត្រូវខ្ពស់ជាងមុន និងងាយស្រួល Debugging។',
                },
                isCorrect: true,
              },
              {
                id: 'b',
                text: {
                  en: 'It uses less electricity.',
                  km: 'វាកាត់បន្ថយការប្រើប្រាស់អគ្គិសនី។',
                },
                isCorrect: false,
              },
            ],
            explanation: {
              en: 'Modularity reduces prompt confusion and improves deterministic execution.',
              km: 'ភាពជាម៉ូឌុល កាត់បន្ថយការច្រឡំក្នុង Prompt និងបង្កើនភាពត្រឹមត្រូវ។',
            },
          },
        ],
      },
    ],
  },

  // MODULE 8
  {
    id: 'module-8',
    moduleNumber: 8,
    title: {
      en: 'Module 8: Prompt Engineering Ethics & Responsible Use',
      km: 'មូឌុលទី ៨៖ ចរិយាធម៌នៃការប្រើប្រាស់ Prompt & AI ប្រកបដោយការទទួលខុសត្រូវ',
    },
    description: {
      en: 'Identify Hallucinations, audit bias, enforce data privacy, and implement Human-in-the-Loop fact-checking workflows.',
      km: 'ស្វែងយល់ពីការឆ្លើយខុស (Hallucinations), ពិនិត្យមើល Bias, ការពារឯកជនភាពទិន្នន័យ និងអនុវត្ត Human-in-the-Loop Fact-Checking។',
    },
    lessons: [
      {
        id: 'm8-l1',
        moduleId: 'module-8',
        moduleNumber: 8,
        lessonNumber: 1,
        title: {
          en: 'Identifying Hallucinations & Verifying AI Outputs',
          km: 'ការសម្គាល់ Hallucinations និងការផ្ទៀងផ្ទាត់ចម្លើយ AI',
        },
        durationMinutes: 25,
        difficulty: 'Intermediate',
        description: {
          en: 'AI models generate text statistically, not logically. When asked about obscure topics or missing details, an LLM will confidently invent plausible-sounding facts, citations, or code APIs—a phenomenon known as hallucination. Prompt engineers build verification check loops to audit AI outputs before production deployment.',
          km: 'AI បង្កើតអត្ថបទតាមស្ថិតិ មិនមែនតាមការចងចាំពិតប្រាកដនោះទេ។ នៅពេលសួរអំពីប្រធានបទអរូប ឬព័ត៌មានដែលខ្វះ ទិន្នន័យ AI នឹងបង្កើតព័ត៌មានក្លែងក្លាយដែលស្តាប់ទៅដូចជាពិត—ដែលហៅថា Hallucination។ អ្នកជំនាញ Prompt Engineering រៀបចំប្រព័ន្ធផ្ទៀងផ្ទាត់ឡើងវិញ មុនពេលយកចម្លើយទៅប្រើប្រាស់។',
        },
        tutorial: {
          en: `### Hallucination Detection Checklist

1. **Non-Existent Code Libraries**: Always verify npm/pip packages generated by AI before running \`npm install\`.
2. **Fake Academic Citations**: Check DOIs and paper author names manually.
3. **Fictional Legal Cases**: Verify legal precedents in official court records.`,
          km: `### Checklist សម្គាល់ Hallucination

១. **កញ្ចប់កូដគ្មានពិត (Non-Existent Packages)**៖ ត្រូវតែផ្ទៀងផ្ទាត់ npm/pip packages មុននឹងរត់ \`npm install\`។
២. **ប្រភពអត្ថបទសិក្សាក្លែងក្លាយ**៖ ពិនិត្យមើល DOIs និងឈ្មោះអ្នកនិពន្ធដោយផ្ទាល់។
៣. **មាត្រាច្បាប់ស្រមៃ**៖ ផ្ទៀងផ្ទាត់ប្រភពច្បាប់ក្នុងឯកសារផ្លូវការ។`,
        },
        beforeAfter: {
          scenario: {
            en: 'Asking an AI for a React library to render 3D Gantt charts.',
            km: 'សុំឱ្យ AI ណែនាំ React Library សម្រាប់គូរ 3D Gantt Charts។',
          },
          weakPrompt: 'Recommend a npm package for React 3D Gantt charts.',
          weakOutput: {
            en: 'You can use `react-3d-gantt-canvas`. Install it via `npm i react-3d-gantt-canvas` (Package does not actually exist on npm!).',
            km: 'អ្នកអាចប្រើប្រាស់ `react-3d-gantt-canvas`។ ដំឡើងតាម `npm i react-3d-gantt-canvas` (Package នេះមិនដែលមានលើ npm ឡើយ!)។',
          },
          improvedPrompt:
            'Recommend top 3 real, actively maintained npm packages for React Gantt charts. CRITICAL: Only include packages with >100,000 monthly downloads. For each package, provide the exact official GitHub repository URL. If no package meets criteria, state so explicitly.',
          improvedOutput: {
            en: `1. **gantt-task-react** (GitHub: https://github.com/MaTeS96/gantt-task-react)
2. **@frappe/gantt** (GitHub: https://github.com/frappe/gantt)
*Note: No dedicated 3D Gantt package meets the 100k download threshold; 2D canvas is industry standard.*`,
            km: `១. **gantt-task-react** (GitHub: https://github.com/MaTeS96/gantt-task-react)
២. **@frappe/gantt** (GitHub: https://github.com/frappe/gantt)
*ចំណាំ៖ គ្មានកញ្ចប់ 3D Gantt ដែលមានការទាញយកលើសពី ១០០,០០០ ដងឡើយ។ 2D ជាស្តង់ដារឧស្សាហកម្ម។*`,
          },
          keyImprovements: [
            {
              en: 'Set strict quantitative verification criteria (100k downloads + GitHub URL requirement) eliminating fake package hallucination.',
              km: 'កំណត់លក្ខខណ្ឌផ្ទៀងផ្ទាត់ ១០០k downloads + GitHub URL ដើម្បីលុបបំបាត់ការទាយឈ្មោះ Package ក្លែងក្លាយ។',
            },
          ],
        },
        realWorldExample: {
          context: {
            en: 'A legal team relying on AI to draft court motions.',
            km: 'ក្រុមអ្នកច្បាប់ ប្រើប្រាស់ AI ដើម្បីរៀបចំពាក្យបណ្តឹង។',
          },
          solution: {
            en: 'Fact-checking verification prompts caught 2 fabricated legal precedent citations before court filing.',
            km: 'Prompt ផ្ទៀងផ្ទាត់ការពិត រកឃើញប្រភពច្បាប់ក្លែងក្លាយចំនួន ២ មុនពេលដាក់បណ្តឹងទៅតុលាការ។',
          },
        },
        exercise: {
          scenario: {
            en: 'Draft a verification prompt asking AI to audit its own previously generated list of historical statistics.',
            km: 'សរសេរ verification prompt ឱ្យ AI ពិនិត្យមើលបញ្ជីស្ថិតិប្រវត្តិសាស្ត្រដែលវាបានបង្កើតមុននេះ។',
          },
          targetDomain: 'Audit Prompting',
          hints: [
            {
              en: 'Command: "For each metric listed, assign a Confidence Score (HIGH/MEDIUM/LOW) and state official census/government source name."',
              km: 'បញ្ជា៖ "សម្រាប់ស្ថិតិនីមួយៗ សូមដាក់ Confidence Score (HIGH/MEDIUM/LOW) និងប្រាប់ឈ្មោះប្រភពផ្លូវការ"។',
            },
          ],
          sampleStrongPrompt:
            'AUDIT TASK: Review the 5 statistics above. For each stat: (1) Assign Confidence Score [HIGH/MEDIUM/LOW], (2) Name the official government/census publishing body, (3) Flag any stat that cannot be verified.',
        },
        quiz: [
          {
            id: 'm8-l1-q1',
            question: {
              en: 'What is "AI Hallucination"?',
              km: 'តើអ្វីទៅជា "AI Hallucination"?',
            },
            options: [
              {
                id: 'a',
                text: {
                  en: 'When an AI confidently generates false or fabricated information that sounds plausible.',
                  km: 'នៅពេល AI បង្កើតព័ត៌មានក្លែងក្លាយ ឬមិនពិត ដោយភាពជឿជាក់ និងស្តាប់ទៅដូចជាពិត។',
                },
                isCorrect: true,
              },
              {
                id: 'b',
                text: {
                  en: 'When the AI screen turns blue.',
                  km: 'នៅពេលអេក្រង់ AI ប្រែជាពណ៌ខៀវ។',
                },
                isCorrect: false,
              },
            ],
            explanation: {
              en: 'Hallucination occurs due to statistical word completion without underlying factual lookup.',
              km: 'Hallucination កើតឡើងដោយសារការទស្សន៍ទាយពាក្យតាមស្ថិតិ ដោយគ្មានការផ្ទៀងផ្ទាត់ការពិត។',
            },
          },
        ],
      },
      {
        id: 'm8-l2',
        moduleId: 'module-8',
        moduleNumber: 8,
        lessonNumber: 2,
        title: {
          en: 'Bias Awareness, Privacy & Avoiding Over-Reliance',
          km: 'ការយល់ដឹងពី Bias, ឯកជនភាព និងការចៀសវាងការអត់មិនបានលើ AI',
        },
        durationMinutes: 25,
        difficulty: 'Intermediate',
        description: {
          en: 'Training data reflects human societal biases and historical stereotypes. Prompt engineers must actively audit AI prompts for gender, cultural, and racial bias while enforcing strict data privacy standards (never sending PII or unencrypted API secret keys inside user prompts).',
          km: 'ទិន្នន័យដែលយកមកបណ្តុះបណ្តាល AI រក្សាទុកនូវ Bias និងគំនិតចាស់រឹលរបស់មនុស្ស។ អ្នកជំនាញ Prompt Engineering ត្រូវតែពិនិត្យមើលមាតិកា AI លើភាពលំអៀង និងការពារឯកជនភាពទិន្នន័យ (មិនត្រូវបញ្ជូនទិន្នន័យផ្ទាល់ខ្លួន PII ឬ Secret Keys ទៅកាន់ AI ឡើយ)។',
        },
        tutorial: {
          en: `### Privacy Rule #1: PII Sanitization

Never paste raw passwords, national IDs, or customer credit card details into prompt strings. Use placeholders like \`{{USER_ID_MASKED}}\`.`,
          km: `### វិធានឯកជនភាពទី ១៖ ការកាត់ចោលទិន្នន័យ sensitive PII

មិនត្រូវ Paste ពាក្យសម្ងាត់, អត្តសញ្ញាណប័ណ្ណ ឬលេខកាតធនាគារចូលក្នុង Prompt ឡើយ។ ត្រូវប្រើប្រាស់ Placeholders ដូចជា \`{{USER_ID_MASKED}}\` ជំនួសវិញ។`,
        },
        beforeAfter: {
          scenario: {
            en: 'Asking AI to generate job candidate screening summaries without cultural or gender bias.',
            km: 'សុំឱ្យ AI បង្កើតសេចក្តីសង្ខេបជ្រើសរើសបេក្ខជន ដោយគ្មានភាពលំអៀង។',
          },
          weakPrompt: 'Evaluate candidates John and Maria for engineering manager.',
          weakOutput: {
            en: 'John shows strong decisive technical leadership. Maria is warm and nurturing for team morale.',
            km: 'John បង្ហាញភាពជាអ្នកដឹកនាំបច្ចេកវិទ្យាម៉ត់ចត់។ Maria មានភាពទន់ភ្លន់សម្រាប់លើកទឹកចិត្តក្រុម។',
          },
          improvedPrompt:
            'Act as an Unbiased HR Auditor. Evaluate Candidate A and Candidate B using ONLY quantifiable metric scores in <candidate_data>. Exclude gender, age, nationality, or personality assumptions. Output structured scorecard focused 100% on system architecture accomplishments.',
          improvedOutput: {
            en: `### Objective Technical Scorecard
- **Candidate A**: 8/10 System Architecture | 9/10 Kubernetes Deployments | 5 Years Tech Lead Experience.
- **Candidate B**: 9/10 System Architecture | 8/10 Distributed Databases | 6 Years Tech Lead Experience.`,
            km: `### តារាងវាយតម្លៃបច្ចេកវិទ្យាគ្មានការលំអៀង
- **បេក្ខជន A**៖ 8/10 System Architecture | 9/10 Kubernetes | បទពិសោធន៍ ៥ ឆ្នាំ។
- **បេក្ខជន B**៖ 9/10 System Architecture | 8/10 Distributed Databases | បទពិសោធន៍ ៦ ឆ្នាំ។`,
          },
          keyImprovements: [
            {
              en: 'Anonymized candidate names and explicitly limited evaluation criteria to quantifiable technical scores.',
              km: 'លុបឈ្មោះបេក្ខជន និងកំណត់ការវាយតម្លៃលើស្ថិតិបច្ចេកវិទ្យាពិតប្រាកដ។',
            },
          ],
        },
        realWorldExample: {
          context: {
            en: 'An HR department using AI to prescreen 10,000 resumes.',
            km: 'នាយកដ្ឋាន HR ប្រើប្រាស់ AI ដើម្បីពិនិត្យ CVs ចំនួន ១០,០០០។',
          },
          solution: {
            en: 'Anonymizing PII before prompting ensured compliance with international equal opportunity employment standards.',
            km: 'ការលុបទិន្នន័យ PII មុនពេលបញ្ចូលក្នុង Prompt ធានាបាននូវសមភាព និងគ្មានការលំអៀង។',
          },
        },
        exercise: {
          scenario: {
            en: 'Draft a privacy-safe prompt that asks AI to analyze customer churn without leaking raw email addresses.',
            km: 'សរសេរ privacy-safe prompt ដើម្បីឱ្យ AI វិភាគមតិអតិថិជន ដោយមិនឱ្យលេចធ្លាយអាសយដ្ឋានអ៊ីមែល។',
          },
          targetDomain: 'Privacy Engineering',
          hints: [
            {
              en: 'Instruct: "Replace all email addresses with [ANONYMIZED_EMAIL] prior to analysis."',
              km: 'បញ្ជា៖ "ជំនួសគ្រប់អាសយដ្ឋានអ៊ីមែល ដោយ [ANONYMIZED_EMAIL] មុនពេលវិភាគ"។',
            },
          ],
          sampleStrongPrompt:
            'TASK: Analyze customer churn reasons. RULE: Replace all PII, emails, and phone numbers in <input> with [MASKED_PII] tokens before summarizing feedback trends.',
        },
        quiz: [
          {
            id: 'm8-l2-q1',
            question: {
              en: 'Why should sensitive user PII (Personally Identifiable Information) never be included in raw LLM prompts?',
              km: 'ហេតុអ្វីបានជាមិនត្រូវបញ្ចូលទិន្នន័យ sensitive PII ក្នុង Prompt ត្រង់ៗ?',
            },
            options: [
              {
                id: 'a',
                text: {
                  en: 'It violates privacy compliance laws (GDPR/CCPA) and risks unencrypted data exposure.',
                  km: 'វាបំពានច្បាប់ឯកជនភាព (GDPR/CCPA) និងបង្កហានិភ័យលេចធ្លាយទិន្នន័យ។',
                },
                isCorrect: true,
              },
              {
                id: 'b',
                text: {
                  en: 'It makes the AI slower.',
                  km: 'វាធ្វើឱ្យ AI យឺត។',
                },
                isCorrect: false,
              },
            ],
            explanation: {
              en: 'Sanitizing data prevents private credentials from being logged in model context histories.',
              km: 'ការសម្អាតទិន្នន័យ ការពារកុំឱ្យទិន្នន័យសម្ងាត់ត្រូវបានកត់ត្រាក្នុង Context History។',
            },
          },
        ],
      },
      {
        id: 'm8-l3',
        moduleId: 'module-8',
        moduleNumber: 8,
        lessonNumber: 3,
        title: {
          en: 'Human-in-the-Loop Fact-Checking Workflows',
          km: 'ប្រព័ន្ធការងារ Fact-Checking ដោយមានមនុស្សចូលរួម Human-in-the-Loop',
        },
        durationMinutes: 25,
        difficulty: 'Advanced',
        description: {
          en: 'Human-in-the-Loop (HITL) architecture positions AI as an accelerator rather than an unmonitored decision maker. Critical high-stakes operations (medical, legal, financial, system production deployments) mandate human review gates before AI-generated outputs are executed or published.',
          km: 'ស្ថាបត្យកម្ម Human-in-the-Loop (HITL) ចាត់ទុក AI ជាឧបករណ៍ជួយពន្លឿនការងារ មិនមែនជាអ្នកសម្រេចចិត្តដោយគ្មានការត្រួតពិនិត្យនោះទេ។ ប្រតិបត្តិការសំខាន់ៗ (សុខាភិបាល, ច្បាប់, ហិរញ្ញវត្ថុ, ការទម្លាក់កូដ) ទាមទារឱ្យមានការពិនិត្យពីមនុស្សជាដាច់ខាត មុនពេលអនុវត្ត។',
        },
        tutorial: {
          en: `### The HITL Approval Workflow

\`\`\`
[AI Draft Generation] ---> [Automated Linter/Validator]
                                 |
                          [Human Review Gate]
                                 |
                 +---------------+---------------+
                 |                               |
           [APPROVED]                        [REJECTED]
                 |                               |
     [Deploy to Production]           [Feed back to AI with Correction]
\`\`\``,
          km: `### ដំណើរការ HITL Approval Workflow

\`\`\`
[AI បង្កើតសេចក្តីព្រាង] ---> [Automated Linter/Validator]
                                 |
                          [Human Review Gate (មនុស្សពិនិត្យ)]
                                 |
                 +---------------+---------------+
                 |                               |
           [អនុម័ត APPROVED]               [បដិសេធ REJECTED]
                 |                               |
     [ទម្លាក់ទៅ Production]            [បញ្ជូនទៅ AI វិញដើមផ្លាស់ប្តូរ]
\`\`\``,
        },
        beforeAfter: {
          scenario: {
            en: 'Automating medical prescription draft summaries for doctor approval.',
            km: 'រៀបចំសេចក្តីសង្ខេបវេជ្ជបញ្ជា ដោយមានការពិនិត្យពីគ្រូពេទ្យ។',
          },
          weakPrompt: 'Send prescription directly to patient email.',
          weakOutput: {
            en: 'Direct unreviewed automated email dispatching.',
            km: 'ការបញ្ជូនអ៊ីមែលស្វ័យប្រវត្តិដោយគ្មានការពិនិត្យ។',
          },
          improvedPrompt:
            'Generate prescription summary draft for Patient #402. CRITICAL HITL RULE: Append an explicit Doctor Verification Approval Box: "[ ] Approved by Dr. ________, MD on Date: _______". Do NOT trigger external delivery APIs until checkbox is marked true.',
          improvedOutput: {
            en: `### Patient #402 Draft Summary
- Medication: Amoxicillin 500mg
- Schedule: 1 capsule twice daily after meals for 7 days.

---
**HUMAN-IN-THE-LOOP APPROVAL REQUIRED**:
[ ] I verify that I have reviewed this AI summary against patient charts.
Licensed Physician Signature: __________________ Date: _________`,
            km: `### សេចក្តីព្រាងសម្រាប់អ្នកជំងឺ #402
- ថ្នាំ៖ Amoxicillin 500mg
- កាលវិភាគ៖ 1 គ្រាប់ ២ដង/ថ្ងៃ បន្ទាប់ពីបាយ រយៈពេល ៧ ថ្ងៃ។

---
**ការអនុម័ត HUMAN-IN-THE-LOOP**:
[ ] ខ្ញុំបានផ្ទៀងផ្ទាត់សេចក្តីសង្ខេប AI នេះរួចរាល់។
ហត្ថលេខាគ្រូពេទ្យ៖ __________________ កាលបរិច្ឆេទ៖ _________`,
          },
          keyImprovements: [
            {
              en: 'Embedded explicit Human-in-the-Loop approval gate before execution.',
              km: 'បញ្ចូលដំណាក់កាលពិនិត្យពីមនុស្ស (HITL) មុនពេលអនុវត្តការងារ។',
            },
          ],
        },
        realWorldExample: {
          context: {
            en: 'A high-frequency algorithmic trading desk deploying AI sentiment signals.',
            km: 'ក្រុមហ៊ុនជួញដូរភាគហ៊ុន ប្រើប្រាស់ AI Sentiment Signals។',
          },
          solution: {
            en: 'Requiring human trader approval on orders >$50,000 prevented catastrophic market flash crash execution.',
            km: 'ការតម្រូវឱ្យមានការអនុម័តពី Trader លើការជួញដូរលើសពី $៥០,០០០ ការពារការខាតបង់ធ្ងន់ធ្ងរ។',
          },
        },
        exercise: {
          scenario: {
            en: 'Draft a HITL prompt for an AI that drafts company press releases.',
            km: 'សរសេរ HITL prompt សម្រាប់ AI ដែលសរសេរអត្ថបទព័ត៌មានក្រុមហ៊ុន។',
          },
          targetDomain: 'HITL Architecture',
          hints: [
            {
              en: 'Require PR Manager Sign-Off Section and Legal Audit Checkbox.',
              km: 'តម្រូវឱ្យមានផ្នែកអនុម័តពី PR Manager និង Legal Audit Checkbox។',
            },
          ],
          sampleStrongPrompt:
            'Draft a press release for product launch. REQUIRED FOOTER: Add Human Sign-Off Checklist: (1) PR Director Approval [ ], (2) Legal Counsel Clearance [ ]. Label: "DRAFT ONLY - PENDING HUMAN SIGN-OFF".',
        },
        quiz: [
          {
            id: 'm8-l3-q1',
            question: {
              en: 'What is the core philosophy of Human-in-the-Loop (HITL) AI systems?',
              km: 'តើអ្វីជាទស្សនវិជ្ជាគ្រឹះនៃប្រព័ន្ធ Human-in-the-Loop (HITL) AI?',
            },
            options: [
              {
                id: 'a',
                text: {
                  en: 'Using AI to accelerate draft generation while retaining human expertise for final verification and execution decisions.',
                  km: 'ប្រើប្រាស់ AI ជួយពន្លឿនការរៀបចំសេចក្តីព្រាង ប៉ុន្តែរក្សាមនុស្សជាអ្នកពិនិត្យ និងសម្រេចចិត្តចុងក្រោយ។',
                },
                isCorrect: true,
              },
              {
                id: 'b',
                text: {
                  en: 'Replacing all human employees completely.',
                  km: 'ជំនួសបុគ្គលិកទាំងអស់ដោយស្វ័យប្រវត្តិ។',
                },
                isCorrect: false,
              },
            ],
            explanation: {
              en: 'HITL balances generative AI velocity with human accountability and safety.',
              km: 'HITL បង្កើតតុល្យភាពរវាងល្បឿនរបស់ AI និងការទទួលខុសត្រូវរបស់មនុស្ស។',
            },
          },
        ],
      },
    ],
  },

  // MODULE 9
  {
    id: 'module-9',
    moduleNumber: 9,
    title: {
      en: 'Module 9: Capstone Project - Master Prompt Portfolio',
      km: 'មូឌុលទី ៩៖ គម្រោងបញ្ចប់ការសិក្សា Capstone Project - Master Prompt Portfolio',
    },
    description: {
      en: 'Construct and submit your production Master Prompt Library Portfolio across 4 key domains to earn your Flagship Master Certification.',
      km: 'បង្កើត និងបញ្ជូន Master Prompt Library Portfolio របស់អ្នកលើ ៤ ជំនាញសំខាន់ៗ ដើម្បីទទួលបានវិញ្ញាបនប័ត្របញ្ជាក់ការសិក្សា Master Certification។',
    },
    lessons: [
      {
        id: 'm9-l1',
        moduleId: 'module-9',
        moduleNumber: 9,
        lessonNumber: 1,
        title: {
          en: 'Capstone Project: Master Prompt Library Portfolio',
          km: 'គម្រោងបញ្ចប់ការសិក្សា៖ បង្កើត Master Prompt Library Portfolio',
        },
        durationMinutes: 60,
        difficulty: 'Master',
        description: {
          en: 'The Capstone Project is the ultimate demonstration of your prompt engineering mastery. You will construct a production-ready Master Prompt Library containing 10+ reusable templates with XML delimiters, CTFC framing, and error handling across 4 domains: Web Building, Software Engineering, Copywriting, and Business Analysis. Completing and submitting this portfolio unlocks 100% course progress and generates your Master Flagship Completion Record.',
          km: 'Capstone Project គឺជាការបង្ហាញសមត្ថភាពចុងក្រោយនៃជំនាញ Prompt Engineering របស់អ្នក។ អ្នកនឹងបង្កើត Master Prompt Library ដែលមាន 10+ Reusable Templates ដោយប្រើប្រាស់ XML delimiters, ក្របខ័ណ្ឌ CTFC និង Error Handling លើ ៤ ជំនាញ៖ បង្កើតវេបសាយ, សូហ្វវែរ, សរសេរអត្ថបទ និងវិភាគអាជីវកម្ម។ ការបញ្ជូនគម្រោងនេះនឹងផ្តល់ Course Completion 100%។',
        },
        tutorial: {
          en: `### Capstone Portfolio Requirements

To pass the Master Track, your portfolio must include:

1. **At least 10 Master Prompt Templates** properly formatted with XML tags (\`<context>\`, \`<instructions>\`, \`<constraints>\`).
2. **Coverage of 4 Domains**:
   - 🌐 **Web Development & UI/UX** (e.g. Landing Page Master Prompt)
   - 💻 **Software Engineering & Debugging** (e.g. Refactoring & Security Audit Prompt)
   - ✍️ **Copywriting & Marketing** (e.g. High-Conversion Email Campaign Prompt)
   - 📊 **Business Analytics & Strategy** (e.g. Executive Meeting Briefing Extraction Prompt)
3. **Structured Explanation**: Each template must explain the CTFC logic and include a sample output snippet.

Submit your templates directly inside the interactive Capstone Portfolio Builder below to complete the class!`,
          km: `### លក្ខខណ្ឌតម្រូវនៃ Capstone Portfolio

ដើម្បីប្រឡងជាប់ថ្នាក់រៀន Master Track នេះ Portfolio របស់អ្នកត្រូវតែមាន៖

១. **Master Prompt Templates យ៉ាងតិច ១០** ដែលមានរចនាសម្ព័ន្ធ XML Tags ត្រឹមត្រូវ (\`<context>\`, \`<instructions>\`, \`<constraints>\`)។
២. **គ្របដណ្តប់លើ ៤ ជំនាញសំខាន់ៗ**៖
   - 🌐 **Web Development & UI/UX** (ឧទាហរណ៍ Landing Page Master Prompt)
   - 💻 **Software Engineering & Debugging** (ឧទាហរណ៍ Refactoring & Security Audit Prompt)
   - ✍️ **Copywriting & Marketing** (ឧទាហរណ៍ High-Conversion Email Campaign Prompt)
   - 📊 **Business Analytics & Strategy** (ឧទាហរណ៍ Executive Briefing Prompt)
៣. **ការពន្យល់រចនាសម្ព័ន្ធ**៖ Template នីមួយៗត្រូវមានការពន្យល់ពីតក្កវិជ្ជា CTFC និងលទ្ធផលគំរូ។

បញ្ជូន Templates របស់អ្នកដោយផ្ទាល់ក្នុង Capstone Portfolio Builder ខាងក្រោមដើម្បីបញ្ចប់ថ្នាក់រៀន!`,
        },
        beforeAfter: {
          scenario: {
            en: 'Demonstrating a complete Master Prompt Template for Capstone submission.',
            km: 'បង្ហាញ Master Prompt Template ពេញលេញសម្រាប់គម្រោង Capstone។',
          },
          weakPrompt: 'Sample weak prompt without XML structure or constraints.',
          weakOutput: {
            en: 'Unstructured messy output.',
            km: 'ចម្លើយគ្មានរចនាសម្ព័ន្ធ។',
          },
          improvedPrompt: `<system_role> You are an Enterprise Software Architect. </system_role>
<context> Technology Stack: React 18, TypeScript, Tailwind CSS. </context>
<task> Build a responsive Kanban Board component with drag-and-drop state. </task>
<constraints>
- Strict TypeScript types for Board, Column, Card items.
- Smooth animations using framer-motion or Tailwind transitions.
- Zero external unstyled dependencies.
</constraints>`,
          improvedOutput: {
            en: `Production-ready Master Template verified for Capstone Portfolio Library!`,
            km: `Master Template កម្រិតអាជីព ត្រូវបានផ្ទៀងផ្ទាត់សម្រាប់ Capstone Portfolio Library!`,
          },
          keyImprovements: [
            {
              en: 'Production-ready XML delimited master template structure.',
              km: 'រចនាសម្ព័ន្ធ Master Template តាមទម្រង់ XML កម្រិតអាជីព។',
            },
          ],
        },
        realWorldExample: {
          context: {
            en: 'A senior prompt engineer presenting their internal team prompt library to CTO.',
            km: 'Senior Prompt Engineer បង្ហាញ Prompt Library ទៅកាន់ CTO។',
          },
          solution: {
            en: 'A structured prompt library standardized team AI output quality across all engineering departments.',
            km: 'Prompt Library បង្កើតស្តង់ដារគុណភាព AI សម្រាប់គ្រប់ផ្នែកវិស្វកម្មក្នុងក្រុមហ៊ុន។',
          },
        },
        exercise: {
          scenario: {
            en: 'Use the interactive Capstone Portfolio Builder below to complete and submit your 10 Master Templates!',
            km: 'ប្រើប្រាស់ Capstone Portfolio Builder ខាងក្រោម ដើម្បីរៀបចំ និងបញ្ជូន Master Templates ទាំង ១០ របស់អ្នក!',
          },
          targetDomain: 'Capstone Submission',
          hints: [
            {
              en: 'Ensure all 4 domains (Web, Code, Copy, Business) have at least 2 templates each.',
              km: 'ធានាថាជំនាញទាំង ៤ មានយ៉ាងតិច ២ Templates ក្នុងមួយជំនាញ។',
            },
          ],
          sampleStrongPrompt:
            'Use the dedicated Capstone Builder tool below to draft, organize, and submit your portfolio.',
        },
        quiz: [
          {
            id: 'm9-l1-q1',
            question: {
              en: 'What is the final requirement to graduate and earn 100% completion in the AI Prompt Engineering Master Track?',
              km: 'តើអ្វីជាលក្ខខណ្ឌចុងក្រោយដើម្បីបញ្ចប់ការសិក្សា ១០០% ក្នុងថ្នាក់រៀន AI Prompt Engineering Master Track?',
            },
            options: [
              {
                id: 'a',
                text: {
                  en: 'Building and submitting a production Master Prompt Library Portfolio across 4 key domains.',
                  km: 'ការបង្កើត និងបញ្ជូន Master Prompt Library Portfolio លើ ៤ ជំនាញសំខាន់ៗ។',
                },
                isCorrect: true,
              },
              {
                id: 'b',
                text: {
                  en: 'Watching 1 video.',
                  km: 'ទស្សនាវីដេអូ ១។',
                },
                isCorrect: false,
              },
            ],
            explanation: {
              en: 'The Capstone Portfolio validates practical hands-on prompt engineering mastery.',
              km: 'Capstone Portfolio ជាការផ្ទៀងផ្ទាត់សមត្ថភាពអនុវត្តផ្ទាល់នៃជំនាញ Prompt Engineering។',
            },
          },
        ],
      },
    ],
  },
];
