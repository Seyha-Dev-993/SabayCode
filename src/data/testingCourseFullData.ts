import { FrontendCourse, FrontendQuizQuestion } from '../types/frontendClass';
import { TESTING_LESSONS_PART1 } from './testingLessonsPart1';
import { TESTING_LESSONS_PART2 } from './testingLessonsPart2';

const ALL_TESTING_LESSONS = [...TESTING_LESSONS_PART1, ...TESTING_LESSONS_PART2];

const TESTING_COURSE_QUIZ: FrontendQuizQuestion[] = [
  {
    id: 'quiz-test-1',
    question: {
      en: 'What will Jest print in the terminal when `expect(2 + 2).toBe(5)` is executed?',
      km: 'តើ Jest នឹងបង្ហាញអ្វីក្នុង Terminal នៅពេល `expect(2 + 2).toBe(5)` ត្រូវបានរត់?'
    },
    codeSnippet: `test('math test', () => {
  expect(2 + 2).toBe(5);
});`,
    options: [
      { id: '1', text: { en: 'FAIL with diff: - Expected: 5, + Received: 4', km: 'FAIL ជាមួយ diff: - Expected: 5, + Received: 4' }, isCorrect: true },
      { id: '2', text: { en: 'PASS silently', km: 'PASS ដោយស្ងប់ស្ងាត់' }, isCorrect: false },
      { id: '3', text: { en: 'Build error: NaN', km: 'Build error: NaN' }, isCorrect: false }
    ],
    explanation: {
      en: 'Jest prints a red FAIL status badge with a colorized diff showing expected 5 versus received 4.',
      km: 'Jest បង្ហាញ Badge ពណ៌ក្រហម FAIL ជាមួយបន្ទាត់ Diff ប្រៀបធៀបរវាង Expected 5 និង Received 4។'
    }
  },
  {
    id: 'quiz-test-2',
    question: {
      en: 'Which query priority order is strictly recommended by React Testing Library?',
      km: 'តើលំដាប់អាទិភាព Query មួយណាដែលត្រូវបានណែនាំដោយ React Testing Library?'
    },
    options: [
      { id: '1', text: { en: 'getByRole -> getByLabelText -> getByText -> getByTestId', km: 'getByRole -> getByLabelText -> getByText -> getByTestId' }, isCorrect: true },
      { id: '2', text: { en: 'getByTestId -> getByRole -> getByClass', km: 'getByTestId -> getByRole -> getByClass' }, isCorrect: false },
      { id: '3', text: { en: 'querySelector -> getByText -> getByTestId', km: 'querySelector -> getByText -> getByTestId' }, isCorrect: false }
    ],
    explanation: {
      en: 'Testing Library prioritizes accessible queries that resemble how real users find elements.',
      km: 'Testing Library ផ្តល់អាទិភាពលើ Accessible Queries ដូចរបៀបដែលអ្នកប្រើប្រាស់ស្វែងរក Element។'
    }
  },
  {
    id: 'quiz-test-3',
    question: {
      en: 'Why should you use `toEqual()` instead of `toBe()` when comparing object literals in Jest?',
      km: 'ហេតុអ្វីបានជាអ្នកគួរប្រើ `toEqual()` ជំនួសឱ្យ `toBe()` ពេលប្រៀបធៀប Object ក្នុង Jest?'
    },
    codeSnippet: `const objA = { name: 'Sophea' };
const objB = { name: 'Sophea' };
expect(objA).toEqual(objB); // Passes
expect(objA).toBe(objB);    // Fails!`,
    options: [
      { id: '1', text: { en: 'toBe checks strict reference equality (===), whereas toEqual checks deep property equality', km: 'toBe ពិនិត្យ Reference (===) ខណៈពេលដែល toEqual ពិនិត្យ Deep property equality' }, isCorrect: true },
      { id: '2', text: { en: 'toBe is deprecated in Jest v29', km: 'toBe ត្រូវបានគេលុបចោល' }, isCorrect: false }
    ],
    explanation: {
      en: 'toBe compares object references in memory. Separate objects with identical properties require deep comparison via toEqual.',
      km: 'toBe ប្រៀបធៀប Memory reference។ Object ផ្សេងគ្នាដែលមាន Key-Value ដូចគ្នាត្រូវប្រើ toEqual។'
    }
  },
  {
    id: 'quiz-test-4',
    question: {
      en: 'Which query variant MUST be used when you want to verify an element is NOT present in the DOM?',
      km: 'តើ Query variant មួយណាដែលត្រូវប្រើដើម្បីផ្ទៀងផ្ទាត់ថា Element មិនមានក្នុង DOM?'
    },
    options: [
      { id: '1', text: { en: 'queryByText() or queryByRole()', km: 'queryByText() ឬ queryByRole()' }, isCorrect: true },
      { id: '2', text: { en: 'getByText()', km: 'getByText()' }, isCorrect: false },
      { id: '3', text: { en: 'findByText()', km: 'findByText()' }, isCorrect: false }
    ],
    explanation: {
      en: 'queryBy returns null when elements are missing. getBy throws an error immediately.',
      km: 'queryBy បង្វិល Return null ពេលគ្មាន Element។ getBy បោះ Error ភ្លាម។'
    }
  },
  {
    id: 'quiz-test-5',
    question: {
      en: 'What is the purpose of `jest.fn()` in unit testing?',
      km: 'តើអ្វីជាគោលបំណងនៃការប្រើប្រាស់ `jest.fn()` ក្នុង Unit Testing?'
    },
    options: [
      { id: '1', text: { en: 'To create a mock function that tracks calls, arguments, and return values', km: 'បង្កើត Mock function សម្រាប់តាមដានការហៅ, Arguments, និង Return values' }, isCorrect: true },
      { id: '2', text: { en: 'To automatically compile TypeScript code', km: 'សម្រាប់ Compile កូដ TypeScript' }, isCorrect: false }
    ],
    explanation: {
      en: 'jest.fn() creates a mock spy function to verify how dependencies are invoked.',
      km: 'jest.fn() បង្កើត Mock spy function សម្រាប់ផ្ទៀងផ្ទាត់ការហៅ Function។'
    }
  },
  {
    id: 'quiz-test-6',
    question: {
      en: 'Why should you prepend `await` before calling `@testing-library/user-event` actions?',
      km: 'ហេតុអ្វីបានជាត្រូវដាក់ `await` ពីមុខ `@testing-library/user-event` actions?'
    },
    options: [
      { id: '1', text: { en: 'userEvent v14 methods return Promises that handle asynchronous event propagation', km: 'userEvent v14 methods ផ្តល់មកវិញនូវ Promises សម្រាប់ Async event propagation' }, isCorrect: true },
      { id: '2', text: { en: 'To prevent the browser window from closing', km: 'ដើម្បីការពារកុំឱ្យផ្ទាំង Browser បិទ' }, isCorrect: false }
    ],
    explanation: {
      en: 'userEvent actions simulate realistic delays and focus events asynchronously.',
      km: 'userEvent actions បង្កើត Event និង Focus តាមបែប Async ដូចមនុស្សចុចពិតប្រាកដ។'
    }
  },
  {
    id: 'quiz-test-7',
    question: {
      en: 'What command generates a code coverage report showing statement, branch, function, and line statistics?',
      km: 'តើ Command មួយណាដែលបង្កើត Code coverage report បង្ហាញ Statement, Branch, Function, និង Line statistics?'
    },
    options: [
      { id: '1', text: { en: 'npx jest --coverage', km: 'npx jest --coverage' }, isCorrect: true },
      { id: '2', text: { en: 'npm run jest-report', km: 'npm run jest-report' }, isCorrect: false }
    ],
    explanation: {
      en: 'jest --coverage collects and formats detailed code coverage metrics.',
      km: 'jest --coverage ប្រមូល និងរៀបចំទិន្នន័យ Code coverage យ៉ាងលម្អិត។'
    }
  },
  {
    id: 'quiz-test-8',
    question: {
      en: 'What is a major pitfall of testing implementation details like CSS class names?',
      km: 'តើអ្វីជាផលវិបាកចម្បងនៃការតេស្តលើ Implementation details ដូចជា CSS class names?'
    },
    options: [
      { id: '1', text: { en: 'Tests break during minor visual redesigns even when component functionality works perfectly', km: 'Tests បែកបាក់ពេលកែសម្រួល Design ទោះបីជា Functionality ដើរប្រក្រតីក៏ដោយ' }, isCorrect: true },
      { id: '2', text: { en: 'It decreases test coverage by 50%', km: 'វាធ្វើឱ្យថយចុះ Test coverage ៥០%' }, isCorrect: false }
    ],
    explanation: {
      en: 'Testing class names couples tests tightly to styles instead of user behavior.',
      km: 'ការតេស្តលើ Class name ធ្វើឱ្យ Test ភ្ជាប់ទៅនឹង Style ជំនួសឱ្យ Behavior របស់អតិថិជន។'
    }
  }
];

export const TESTING_COURSE_DATA: FrontendCourse = {
  id: 'testing',
  title: {
    en: 'Testing Basics (Jest / Testing Library)',
    km: 'វគ្គសិក្សា Testing Basics (Jest / Testing Library)'
  },
  iconName: 'testing',
  categoryId: 'quality',
  difficulty: 'Intermediate',
  shortDescription: {
    en: 'Master unit testing with Jest, React Testing Library queries, DOM assertions, mocking with jest.fn(), async testing, and test coverage.',
    km: 'រៀនពី Unit Testing ជាមួយ Jest, React Testing Library queries, DOM assertions, Mocking ជាមួយ jest.fn(), Async testing, និង Test coverage។'
  },
  summary: {
    en: 'Testing ensures that your JavaScript code and React components work correctly as expected. Jest serves as a fast test runner with built-in assertions and mocking capabilities, while Testing Library allows you to query and test UI components from an end-user perspective.\n\n📌 Prerequisite: JavaScript Course and React Course (recommended).',
    km: 'Testing គឺជាការសរសេរ Code ដើម្បី Verify ថា Code ផ្សេងទៀតដំណើរការត្រឹមត្រូវ ដោយប្រើ Jest ជា Test Runner និង Testing Library ដើម្បី Test UI Component តាមរបៀបដែលអ្នកប្រើប្រាស់ពិតជា Interact ។\n\n📌 តម្រូវការជាមុន៖ វគ្គសិក្សា JavaScript និងវគ្គសិក្សា React (ណែនាំ)។'
  },
  estimatedHours: 5,
  lessonCount: ALL_TESTING_LESSONS.length,
  cheatSheet: [
    {
      concept: 'Jest Core Matchers',
      code: `expect(val).toBe(5);          // Strict ===
expect(obj).toEqual({id: 1}); // Deep equality
expect(arr).toContain('item'); // Array/String item
expect(fn).toThrow();         // Exception test`,
      explanation: {
        en: 'Essential Jest matchers for primitive values, object structures, arrays, and error handling.',
        km: 'Matchers ចាំបាច់ក្នុង Jest សម្រាប់ផ្ទៀងផ្ទាត់តម្លៃ Primitive, Object, Array និង Error។'
      }
    },
    {
      concept: 'Testing Library Query Hierarchy',
      code: `// 1. Accessibility & Role (Best)
screen.getByRole('button', { name: /submit/i });
screen.getByLabelText(/email address/i);

// 2. Visible Text
screen.getByText(/dashboard/i);

// 3. Test ID (Last Resort)
screen.getByTestId('custom-chart');`,
      explanation: {
        en: 'Query priority hierarchy for finding DOM elements as real users and assistive tools experience them.',
        km: 'លំដាប់អាទិភាព Query សម្រាប់ស្វែងរក Element ដូចអ្នកប្រើប្រាស់ និង Assistive Tools។'
      }
    },
    {
      concept: 'Query Variants (getBy vs queryBy vs findBy)',
      code: `// Synchronous - Throws error if missing
screen.getByText('Hello');

// Synchronous - Returns null if missing (Assert Absence)
expect(screen.queryByText('Error')).not.toBeInTheDocument();

// Asynchronous - Waits up to 1000ms for element
const item = await screen.findByText('Loaded Item');`,
      explanation: {
        en: 'Choosing the correct query variant for checking presence, absence, or async element rendering.',
        km: 'ការជ្រើសរើស Query variant ត្រឹមត្រូវសម្រាប់ផ្ទៀងផ្ទាត់ការមាន, គ្មាន, ឬ Async Element។'
      }
    },
    {
      concept: 'User Interaction with userEvent',
      code: `import userEvent from '@testing-library/user-event';

const user = userEvent.setup();
await user.type(screen.getByRole('textbox'), 'Hello');
await user.click(screen.getByRole('button', { name: /send/i }));
await user.clear(screen.getByRole('textbox'));`,
      explanation: {
        en: 'Simulating full realistic browser events (typing, clicking, clearing inputs).',
        km: 'ការធ្វើសិប្បនិម្មិតការវាយអក្សរ, ចុច Button, និង លុប Textbox ដូចមនុស្សចុចពិតប្រាកដ។'
      }
    },
    {
      concept: 'Common Testing Mistakes Mini-List',
      code: `❌ Missing 'await' before userEvent methods or findBy queries
❌ Testing CSS class names (.btn-primary) instead of getByRole
❌ Using toBe() on objects instead of toEqual()
❌ Snapshot tests that are too broad and unmaintainable`,
      explanation: {
        en: 'Avoid frequent testing anti-patterns that create fragile or flaky test suites.',
        km: 'ចៀសវាងកំហុសឆ្គងទូទៅដែលធ្វើឱ្យ Test Suite បែកបាក់ ឬរត់ Fail ដោយចៃដន្យ។'
      }
    }
  ],
  quiz: TESTING_COURSE_QUIZ,
  capstoneProject: {
    title: {
      en: 'Task Manager Component Test Suite',
      km: 'គម្រោង Capstone៖ ការសរសេរ Test Suite សម្រាប់ Task Manager'
    },
    description: {
      en: 'Write a comprehensive unit and integration test suite for an untested Task Manager component. Validate pure helper functions, component rendering, user interactions (add, toggle, delete), async data state, and achieve 80%+ test coverage.',
      km: 'សរសេរ Unit និង Integration test suite ពេញលេញសម្រាប់ Task Manager component។ ផ្ទៀងផ្ទាត់ Pure helper functions, Component rendering, User interactions (បន្ថែម, ប្តូរ trạng thái, លុប) និងទាញយក Async data ព្រមទាំងទទួលបាន Test Coverage ៨០%+។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .card { background: #1e293b; border: 1px solid #334155; border-radius: 12px; padding: 16px; max-width: 450px; margin: 0 auto; }
    input { background: #0f172a; border: 1px solid #475569; color: white; padding: 8px 12px; border-radius: 6px; width: 65%; }
    button { background: #3b82f6; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: bold; }
    .task-item { display: flex; justify-content: space-between; align-items: center; padding: 8px 0; border-bottom: 1px solid #334155; }
    .completed { text-decoration: line-through; color: #94a3b8; }
  </style>
</head>
<body>
  <div class="card">
    <h2>Task Manager (Untested Component)</h2>
    <div style="display: flex; gap: 8px; margin-bottom: 16px;">
      <input type="text" placeholder="Enter task title..." aria-label="New task title" />
      <button>Add Task</button>
    </div>
    <div class="task-item">
      <div>
        <input type="checkbox" id="t1" />
        <label for="t1" class="completed">Complete Jest Course</label>
      </div>
      <button style="background: #ef4444; padding: 4px 8px;">Delete</button>
    </div>
  </div>
</body>
</html>`,
      js: `// TaskManager.test.jsx Starter Code
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TaskManager from './TaskManager';

describe('TaskManager Component', () => {
  test('renders heading and add task form', () => {
    // Write assertion here
  });

  test('allows user to add new task to list', async () => {
    // Write userEvent test here
  });
});`
    },
    solutionCode: {
      js: `// TaskManager.test.jsx Solution Code
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TaskManager, { calculateRemainingTasks } from './TaskManager';

describe('TaskManager Logic & UI Suite', () => {
  test('calculateRemainingTasks returns count of active items', () => {
    const tasks = [
      { id: 1, text: 'Task 1', completed: false },
      { id: 2, text: 'Task 2', completed: true },
    ];
    expect(calculateRemainingTasks(tasks)).toBe(1);
  });

  test('renders initial UI elements correctly', () => {
    render(<TaskManager />);
    expect(screen.getByRole('heading', { name: /task manager/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /new task title/i })).toBeInTheDocument();
  });

  test('adds task when user types and submits form', async () => {
    const user = userEvent.setup();
    render(<TaskManager />);

    const input = screen.getByRole('textbox', { name: /new task title/i });
    const addBtn = screen.getByRole('button', { name: /add task/i });

    await user.type(input, 'Master Testing Library');
    await user.click(addBtn);

    expect(screen.getByText('Master Testing Library')).toBeInTheDocument();
  });
});`
    }
  },
  lessons: ALL_TESTING_LESSONS
};
