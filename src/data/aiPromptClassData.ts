import { AIPromptModule, BilingualText } from '../types/aiPromptClass';

export const AI_PROMPT_CLASS_INFO = {
  id: 'ai-prompt-engineering',
  title: {
    en: 'AI Prompt Engineering & Generative AI Master Track',
    km: 'វគ្គសិក្សាពិសេស AI Prompt Engineering & Generative AI អាជីព',
  },
  subtitle: {
    en: 'Master the art and science of communicating with Large Language Models, writing production-grade prompts, building automated agentic workflows, and crafting custom AI solutions.',
    km: 'រៀនបច្ចេកទេសសរសេរ Prompt កម្រិតខ្ពស់សម្រាប់បញ្ជា AI, បង្កើត Workflow ស្វ័យប្រវត្តិ និងទាញយកប្រយោជន៍អតិបរមាពី Generative AI សម្រាប់ការងារអាជីព។',
  },
  rating: 5.0,
  reviewCount: 3420,
  enrolledStudents: 24800,
  studentsEnrolled: 24800,
  badge: {
    en: 'FLAGSHIP AI BOOTCAMP',
    km: 'វគ្គសិក្សា FLAGSHIP AI',
  },
  durationWeeks: 18,
  durationHours: 80,
  totalHours: 80,
  totalModules: 9,
  totalLessons: 28,
  difficulty: 'Beginner to Master',
  level: {
    en: 'Beginner to Master',
    km: 'កម្រិតដំបូង ដល់ Master',
  },
  certificate: {
    en: 'Verified Master Certificate',
    km: 'វិញ្ញាបនប័ត្របញ្ជាក់ការសិក្សា',
  },
  category: 'AI & Generative Engineering',
  skillsLearned: [
    'LLM Architecture Intuition',
    'Role & Persona Prompting',
    'Few-Shot & One-Shot Prompting',
    'Chain-of-Thought (CoT) Reasoning',
    'Prompt Chaining & Self-Correction',
    'Website Building Prompts',
    'Code Generation & Refactoring',
    'Agentic Workflows & RAG Concepts',
    'Hallucination Verification & Ethics',
  ],
  whatYouWillLearn: [
    {
      en: 'Understand how LLMs process words into tokens, attention mechanisms, and context windows without heavy mathematical overhead.',
      km: 'យល់ដឹងពីរបៀបដែល LLM បម្លែងពាក្យទៅជា Tokens, យន្តការ Attention និង Context Windows ដោយមិនចាំបាច់មានគណិតវិទ្យាស្មុគស្មាញ។',
    },
    {
      en: 'Master back-and-forth conversational iteration, steering AI mid-session, and correcting misdirections effectively.',
      km: 'ស្ទាត់ជំនាញក្នុងការសន្ទនាឆ្លើយឆ្លងជាមួយ AI, តម្រង់ទិស AI ក្នុងពេលសន្ទនា និងកែប្រែចម្លើយឱ្យត្រឹមត្រូវ។',
    },
    {
      en: 'Construct 4-part production prompts with clear Context, Task, Format, and Constraints for reliable output quality.',
      km: 'សរសេរ Prompt ខ្នាតអាជីពដែលមាន ៤ ផ្នែក៖ បរិបទ (Context), ភារកិច្ច (Task), ទម្រង់ (Format) និងលក្ខខណ្ឌ (Constraints)។',
    },
    {
      en: 'Apply advanced techniques like Chain-of-Thought (CoT), Few-Shot examples, and System Prompt layering.',
      km: 'អនុវត្តបច្ចេកទេសកម្រិតខ្ពស់ដូចជា Chain-of-Thought (CoT), Few-Shot Examples និងការរៀបចំ System Prompts។',
    },
    {
      en: 'Craft end-to-end master prompts for web development, software engineering, copywriting, and business intelligence.',
      km: 'បង្កើត Master Prompt ពេញលេញសម្រាប់ការបង្កើតគេហទំព័រ, ការសរសេរកូដ, ការបង្កើតមាតិកា និងការវិភាគទិន្នន័យពាណិជ្ជកម្ម។',
    },
    {
      en: 'Design agentic AI workflows that execute multi-step automated reasoning, research, and self-refinement pipelines.',
      km: 'ឌីសាញ Workflow របស់ Agentic AI ដែលអាចអនុវត្តការស្រាវជ្រាវ វិភាគ និងកែប្រែទិន្នន័យដោយស្វ័យប្រវត្តច្រើនជំហាន។',
    },
  ],
  get learningOutcomes() {
    return this.whatYouWillLearn;
  },
};

const AI_PROMPT_MODULES_BASE: AIPromptModule[] = [
  // MODULE 1
  {
    id: 'module-1',
    moduleNumber: 1,
    title: {
      en: 'Module 1: Understanding AI & How It "Thinks"',
      km: 'មូឌុលទី ១៖ យល់ដឹងអំពី AI និងរបៀបដែលវា "គិត"',
    },
    description: {
      en: 'Gain intuitive clarity on Large Language Models (LLMs), tokens, pattern recognition, and context limits.',
      km: 'យល់ដឹងស៊ីជម្រៅពីដំណើរការរបស់ Large Language Models (LLMs), Tokens, ការសម្គាល់គំរូទិន្នន័យ និងដែនកំណត់ Context Window។',
    },
    lessons: [
      {
        id: 'm1-l1',
        moduleId: 'module-1',
        moduleNumber: 1,
        lessonNumber: 1,
        title: {
          en: 'What Large Language Models (LLMs) Actually Are',
          km: 'តើអ្វីទៅជា Large Language Models (LLMs) ពិតប្រាកដ?',
        },
        durationMinutes: 25,
        difficulty: 'Beginner',
        description: {
          en: 'Large Language Models (LLMs) are deep-learning neural networks trained on vast amounts of text data to predict the most statistically probable next words in a sequence. Rather than "thinking" like a human brain, an LLM operates as an extremely sophisticated pattern-recognition engine capable of synthesizing ideas, writing code, and answering complex prompts based on conditional probability. Understanding this core predictive nature helps you craft prompts that set up strong conditional patterns rather than expecting magical conscious intent from the model.',
          km: 'Large Language Models (LLMs) គឺជាបណ្តាញប្រព័ន្ធប្រសាទសិប្បនិម្មិត (Neural Networks) ដែលបានសិក្សាលើទិន្នន័យអត្ថបទដ៏ច្រើនសន្ធឹកសន្ធាប់ ដើម្បីទស្សន៍ទាយពាក្យបន្ទាប់ដែលមានប្រូបាប៊ីលីតេខ្ពស់បំផុត។ ជាជាងការ "គិត" ដូចខួរក្បាលមនុស្ស, LLM ធ្វើការជាម៉ាស៊ីនសម្គាល់គំរូទិន្នន័យដ៏ស្មុគស្មាញ ដែលអាចសំយោគគំនិត សរសេរកូដ និងឆ្លើយសំណួរដោយផ្អែកលើប្រូបាប៊ីលីតេ។ ការយល់ដឹងអំពីលក្ខណៈទស្សន៍ទាយនេះ ជួយឱ្យអ្នកអាចរៀបចំ Prompt ដែលបង្កើតគំរូទិន្នន័យច្បាស់លាស់ ជាជាងការរំពឹងទុកថាម៉ូឌែលមានវិញ្ញាណដឹងខុសត្រូវដូចមនុស្ស។',
        },
        tutorial: {
          en: `### 1. The Core Mechanism: Probabilistic Word Prediction

At its lowest layer, every modern AI text assistant calculates probabilities for the next sequence of text fragments (known as **tokens**).

When you feed an AI the sentence:
> *"The capital city of Cambodia is..."*

The model evaluates thousands of candidate words and computes statistical weights:
- **Phnom Penh**: 99.4% probability
- **Siem Reap**: 0.4% probability
- **Bangkok**: 0.1% probability

Because "Phnom Penh" has the highest statistical alignment with its training dataset for that pattern, the model outputs "Phnom Penh".

---

### 2. Why Prompts Determine Quality

Because LLMs are probability engines, **your prompt shapes the statistical distribution of possible outputs**.

1. **Vague Prompts** trigger generic high-probability responses that sound bland or repetitive.
2. **Detailed, Context-Rich Prompts** constrain the search space into specific, high-value, domain-specialized patterns.

---

### 3. Key Mental Models for Prompt Engineers

| Mental Model | What It Means | How to Apply in Prompting |
| :--- | :--- | :--- |
| **Probability Predictor** | AI predicts words based on current context. | Supply rich context so the correct answer becomes mathematically obvious. |
| **Autocomplete Engine** | AI completes the trajectory you start. | Begin your prompt with high-quality structure to enforce structured output. |
| **No Memory Window** | AI only remembers text inside the context window. | Never rely on hidden knowledge; restate core constraints clearly when needed. |`,
          km: `### ១. យន្តការគ្រឹះ៖ ការទស្សន៍ទាយពាក្យតាមប្រូបាប៊ីលីតេ

នៅកម្រិតបាតគ្រឹះ, AI ជំនួយការអត្ថបទទំនើបទាំងអស់គណនាប្រូបាប៊ីលីតេសម្រាប់ពាក្យ ឬអក្ខរាវិរុទ្ធបន្ទាប់ (ដែលហៅថា **Tokens**)។

នៅពេលអ្នកបញ្ចូលល្បះទៅកាន់ AI៖
> *"រាជធានីនៃព្រះរាជាណាចក្រកម្ពុជាគឺ..."*

ម៉ូឌែលនឹងវាយតម្លៃពាក្យបេក្ខភាពរាប់ពាន់ និងគណនាទម្ងន់ស្ថិតិ៖
- **ភ្នំពេញ**: ប្រូបាប៊ីលីតេ ៩៩.៤%
- **សៀមរាប**: ប្រូបាប៊ីលីតេ ០.៤%
- **បាងកក**: ប្រូបាប៊ីលីតេ ០.១%

ដោយសារពាក្យ "ភ្នំពេញ" មានភាពត្រូវគ្នានឹងទិន្នន័យដែលវាបានរៀន នោះ AI នឹងបញ្ចេញពាក្យ "ភ្នំពេញ"។

---

### ២. ហេតុអ្វីបានជា Prompt កំណត់គុណភាពចម្លើយ?

ដោយសារ LLM គឺជាម៉ាស៊ីនគណនាប្រូបាប៊ីលីតេ **Prompt របស់អ្នកជាអ្នកតម្រង់ទិសចម្លើយដែលត្រូវចេញមក**។

១. **Prompt ស្រពិចស្រពិល** បង្កើតចម្លើយទូទៅដែលគ្មានជម្រៅ និងស្ទួនៗ។
២. **Prompt មានបរិបទច្បាស់លាស់** បង្ខំឱ្យ AI ជ្រើសរើសពាក្យបច្ចេកទេស និងចម្លើយដែលមានគុណភាពខ្ពស់។`,
        },
        beforeAfter: {
          scenario: {
            en: 'Asking an AI to explain how JavaScript handles asynchronous operations.',
            km: 'សុំឱ្យ AI ពន្យល់អំពីរបៀបដែល JavaScript ដំណើរការ Asynchronous Operations។',
          },
          weakPrompt: 'Explain async JavaScript.',
          weakOutput: {
            en: 'JavaScript is single-threaded. Async code allows execution without blocking. You use callbacks, Promises, and async/await to handle tasks that take time.',
            km: 'JavaScript ដំណើរការ single-threaded។ Asynchronous code អនុញ្ញាតឱ្យរត់កូដដោយមិនស្ទះ។ អ្នកអាចប្រើ Callbacks, Promises, និង Async/Await សម្រាប់ភារកិច្ចដែលចំណាយពេល។',
          },
          improvedPrompt:
            'Act as a Senior Frontend Architect. Explain JavaScript asynchronous execution using a real-world kitchen restaurant analogy. Cover the Event Loop, Call Stack, Microtask Queue (Promises), and Macrotask Queue (setTimeout). Format the output with bullet points and a visual ASCII text diagram.',
          improvedOutput: {
            en: `### Asynchronous JavaScript: The Restaurant Kitchen Analogy

Imagine a high-traffic restaurant kitchen with **One Master Chef (The Single-Threaded Call Stack)**.

- **Call Stack (The Chef)**: Prepares dishes one at a time. If asked to boil broth for 2 hours directly on the counter, the kitchen freezes!
- **Web APIs (The Kitchen Assistants)**: Offloads heavy tasks like fetching food supplies (HTTP requests) or setting timers (setTimeout).
- **Microtask Queue (VIP Fast-Track Orders)**: Holds Promise callbacks (.then, async/await). The Chef MUST serve ALL VIP orders before taking regular orders.
- **Macrotask Queue (Regular Table Orders)**: Holds timers and I/O tasks. Serviced after the Microtask queue is completely clear.
- **Event Loop (The Expediter)**: Constantly checks if the Chef is idle and pushes waiting tasks onto the Call Stack.

\`\`\`
[ Call Stack ]  <-- (Event Loop pushes here)
     ▲
[ Microtask Queue (Promises) ]  -->  Served First!
[ Macrotask Queue (setTimeout) ] -->  Served Second!
\`\`\`,`,
            km: `### Asynchronous JavaScript៖ ឧទាហរណ៍ចុងភៅក្នុងភោជនីយដ្ឋាន

ឧបមាថាភោជនីយដ្ឋានមួយមាន **ចុងភៅធំម្នាក់ (Single-Threaded Call Stack)**។

- **Call Stack (ចុងភៅធំ)**៖ ធ្វើម្ហូបម្តងមួយមុខ។ ប្រសិនបើត្រូវរង់ចាំស្ងោរស៊ុប ២ម៉ោងដោយផ្ទាល់ ចុងភៅមិនអាចធ្វើម្ហូបផ្សេងទៀតបានទេ!
- **Web APIs (ជំនួយការចុងភៅ)**៖ ទទួលភារកិច្ចប្រើពេលយូរ ដូចជាការកុម្ម៉ង់គ្រឿងផ្សំ (HTTP Fetch) ឬកំណត់ម៉ោង (setTimeout)។
- **Microtask Queue (ជួរកុម្ម៉ង់ VIP - Promises)**៖ រក្សាទុក Promise callbacks។ ចុងភៅត្រូវតែធ្វើម្ហូប VIP ឱ្យអស់សិន មុននឹងធ្វើម្ហូបធម្មតា។
- **Macrotask Queue (ជួរកុម្ម៉ង់ធម្មតា - setTimeout)**៖ ធ្វើបន្ទាប់ពី Microtask Queue ទំនេរស្អាត។
- **Event Loop (អ្នករៀបចំជួរ)**៖ តាមដានមើលថាតើចុងភៅធំទំនេរឬនៅ ដើម្បីបញ្ជូនការងារបន្ត។`,
          },
          keyImprovements: [
            {
              en: 'Assigned an expert role (Senior Frontend Architect) to elevate language precision.',
              km: 'ប្រគល់តួនាទីអ្នកជំនាញ (Senior Frontend Architect) ដើម្បីបង្កើនភាពច្បាស់លាស់នៃពាក្យបច្ចេកទេស។',
            },
            {
              en: 'Requested a specific mental model (Restaurant Kitchen Analogy) to make complex concepts intuitive.',
              km: 'តម្រូវឱ្យប្រើឧទាហរណ៍ជាក់ស្តែង (Restaurant Kitchen) ដើម្បីងាយយល់។',
            },
            {
              en: 'Required specific structural formatting (ASCII diagram and distinct component bullet points).',
              km: 'កំណត់ទម្រង់ច្បាស់លាស់ (ASCII Diagram និងចំណុចគោល)។',
            },
          ],
        },
        realWorldExample: {
          context: {
            en: 'A software team lead needing a concise technical onboarding document for junior developers explaining Git merge conflicts.',
            km: 'ប្រធានក្រុមអភិវឌ្ឍន៍សូហ្វវែរត្រូវការឯកសារពន្យល់អំពី Git Merge Conflicts សម្រាប់ប្រាប់សមាជិកថ្មី។',
          },
          solution: {
            en: 'By structuring the prompt with role definition ("Senior Technical Writer"), clear constraints ("under 200 words, include step-by-step resolution command"), and persona, the AI generates an immediate, production-ready onboarding guide without extra fluff.',
            km: 'ដោយសរសេរ Prompt មានតួនាទីច្បាស់លាស់ ("Senior Technical Writer"), លក្ខខណ្ឌដែនកំណត់ ("ក្រោម ២០០ ពាក្យ រួមទាំងបទបញ្ជា Command ជាក់ស្តែង") AI បង្កើតបានជាឯកសារបណ្តុះបណ្តាលដែលអាជីព និងយកទៅប្រើប្រាស់បានភ្លាមៗ។',
          },
        },
        exercise: {
          scenario: {
            en: 'Draft a prompt that asks AI to explain how database indexing works to a 10-year-old using a library book index analogy.',
            km: 'សរសេរ Prompt បញ្ជា AI ឱ្យពន្យល់អំពីដំណើរការនៃ Database Indexing ទៅកាន់កុមារអាយុ ១០ ឆ្នាំ ដោយប្រើឧទាហរណ៍សៀវភៅក្នុងបណ្ណាល័យ។',
          },
          targetDomain: 'Database Concepts',
          hints: [
            {
              en: 'Set the target audience explicitly (10-year-old child).',
              km: 'កំណត់អ្នកស្តាប់ឱ្យច្បាស់លាស់ (កុមារអាយុ ១០ឆ្នាំ)។',
            },
            {
              en: 'Specify the metaphor to use (book index at the back of a textbook).',
              km: 'កំណត់ប្រៀបធៀបដែលត្រូវប្រើ (លិបិក្រមនៅខាងក្រោយសៀវភៅ)។',
            },
            {
              en: 'Request engaging formatting with emojis and bullet points.',
              km: 'កំណត់ទម្រង់ឱ្យមានភាពទាក់ទាញដោយប្រើ Emojis និង ចំណុចៗ។',
            },
          ],
          sampleStrongPrompt:
            'Act as an enthusiastic middle school science teacher. Explain "Database Indexing" to a 10-year-old student using the analogy of the index pages at the back of a heavy library encyclopedia. Keep the tone fun, use emojis, avoid jargon, and limit the response to 3 short paragraphs.',
        },
        quiz: [
          {
            id: 'm1-l1-q1',
            question: {
              en: 'How does a Large Language Model (LLM) fundamentally generate output text?',
              km: 'តើ Large Language Model (LLM) បង្កើតអត្ថបទចម្លើយតាមរបៀបណា?',
            },
            options: [
              {
                id: 'a',
                text: {
                  en: 'By searching a live database and copy-pasting existing paragraphs.',
                  km: 'ដោយស្វែងរកក្នុង Database ហើយ Copy-Paste វគ្គអត្ថបទដែលមានស្រាប់។',
                },
                isCorrect: false,
              },
              {
                id: 'b',
                text: {
                  en: 'By predicting the most statistically probable next token based on learned patterns in its training data.',
                  km: 'ដោយទស្សន៍ទាយ Token បន្ទាប់ដែលមានប្រូបាប៊ីលីតេខ្ពស់បំផុត ដោយផ្អែកលើគំរូទិន្នន័យដែលវាបានសិក្សា។',
                },
                isCorrect: true,
              },
              {
                id: 'c',
                text: {
                  en: 'By using conscious human-like reasoning to formulate thoughts.',
                  km: 'ដោយប្រើប្រាស់ការគិតដូចមនុស្សដើម្បីបង្កើតគំនិត។',
                },
                isCorrect: false,
              },
            ],
            explanation: {
              en: 'LLMs are statistical pattern prediction engines. They do not hold conscious thoughts or perform copy-pasting from a database; they predict text tokens probabilistic step by step.',
              km: 'LLM គឺជាម៉ាស៊ីនទស្សន៍ទាយគំរូស្ថិតិ។ វាមិនមានការគិតដូចមនុស្ស ឬស្វែងរកក្នុង Database ដើម្បីទាញយកអត្ថបទមកត្រង់ៗនោះទេ។',
            },
          },
          {
            id: 'm1-l1-q2',
            question: {
              en: 'Why does adding explicit context and constraints to a prompt improve AI output quality?',
              km: 'ហេតុអ្វីបានជាការបន្ថែមបរិបទ និងលក្ខខណ្ឌច្បាស់លាស់ក្នុង Prompt ជួយឱ្យចម្លើយ AI មានគុណភាពល្អជាងមុន?',
            },
            options: [
              {
                id: 'a',
                text: {
                  en: 'It narrows the probabilistic search space toward specialized, high-quality statistical patterns.',
                  km: 'វាបង្រួមដែនទិន្នន័យប្រូបាប៊ីលីតេឱ្យតម្រង់ទៅរកពាក្យបច្ចេកទេស និងចម្លើយដែលមានគុណភាពខ្ពស់។',
                },
                isCorrect: true,
              },
              {
                id: 'b',
                text: {
                  en: 'It triggers the AI to connect to faster internet servers.',
                  km: 'វាធ្វើឱ្យ AI ភ្ជាប់ទៅកាន់ Server លឿនជាងមុន។',
                },
                isCorrect: false,
              },
              {
                id: 'c',
                text: {
                  en: 'It overwrites the LLMs neural weights permanently.',
                  km: 'វាផ្លាស់ប្តូរ Neural Weights របស់ AI ជារៀងរហូត។',
                },
                isCorrect: false,
              },
            ],
            explanation: {
              en: 'Detailed context restricts the generative possibilities, steering the probabilistic engine away from generic filler toward targeted expert answers.',
              km: 'បរិបទលម្អិតជួយបង្រួមជម្រើសពាក្យចម្លើយ បង្ខំឱ្យ AI ផ្តល់ចម្លើយដែលចំគោលដៅ និងមានជំនាញច្បាស់លាស់។',
            },
          },
        ],
      },
      {
        id: 'm1-l2',
        moduleId: 'module-1',
        moduleNumber: 1,
        lessonNumber: 2,
        title: {
          en: 'How AI Reads Tokens, Context Windows & Attention',
          km: 'របៀបដែល AI អាន Tokens, Context Windows និង Attention Mechanism',
        },
        durationMinutes: 30,
        difficulty: 'Beginner',
        description: {
          en: 'Text is not processed as whole human words by an AI model, but rather broken down into numerical sub-word pieces called tokens. A token roughly corresponds to 4 characters or 0.75 words in English. Every LLM has a finite memory capacity called a "Context Window" which dictates how much total text (prompt + output) it can maintain in working memory at one time. Understanding tokenization and context bounds prevents your prompts from truncating mid-thought or suffering from the "lost in the middle" memory degradation phenomenon.',
          km: 'អត្ថបទមិនត្រូវបានអានជាពាក្យពេញលេញដោយ AI នោះទេ ប៉ុន្តែត្រូវបានបំបែកជាបំណែកតូចៗនៃពាក្យដែលហៅថា Tokens (១ Token ស្មើប្រមាណ ៤ តួអក្សរ)។ ម៉ូឌែល LLM នីមួយៗមានសមត្ថភាពចងចាំកំណត់ដែលហៅថា "Context Window" ដែលកំណត់ចំនួនទិន្នន័យសរុប (Prompt + ចម្លើយ) ដែលវាអាចរក្សាទុកក្នុង Memory ក្នុងពេលតែមួយ។ ការយល់ដឹងអំពី Tokens និង Context Windows ការពារការដាច់កាត់អត្ថបទ និងបញ្ហាភ្លេចព័ត៌មាននៅពាក់កណ្តាលសន្ទនា។',
        },
        tutorial: {
          en: `### 1. Token Estimation Formula

As a rule of thumb for English and code:
- **1 Token ≈ 4 characters**
- **1 Token ≈ 0.75 words**
- **100 Tokens ≈ 75 words**
- **1,000 Tokens ≈ 750 words (approx. 1.5 single-spaced pages)**

*Note on non-English languages (e.g., Khmer, Chinese, Arabic)*: Multi-byte script languages often require 2–4 tokens per character because tokenizers are optimized heavily for Latin alphabets.

---

### 2. The Anatomy of Context Windows

The **Context Window** represents the total combined token space available for:
1. **System Prompt**
2. **Conversation History**
3. **Your Current User Prompt**
4. **AI Generated Response Output**

\`\`\`
+-------------------------------------------------------------+
|                 TOTAL CONTEXT WINDOW CAPACITY               |
|  [System Prompt] + [Chat History] + [New Prompt] + [Output] |
+-------------------------------------------------------------+
\`\`\`

If your conversation exceeds the context window limits, older messages get silently pruned or truncated!

---

### 3. The "Lost in the Middle" Effect

Research shows that LLMs pay the highest attention to information placed at the **very beginning** (primacy effect) and **very end** (recency effect) of a long prompt. Crucial instructions buried in the middle of a massive block of text are frequently overlooked!

**Best Practice**: Put your most critical instructions at the top and restate essential output constraints at the bottom.`,
          km: `### ១. រូបមន្តស្មានចំនួន Token

ជាទូទៅសម្រាប់ភាសាអង់គ្លេស និងកូដ៖
- **1 Token ≈ ៤ តួអក្សរ**
- **1 Token ≈ ០.៧៥ ពាក្យ**
- **100 Tokens ≈ ៧៥ ពាក្យ**
- **1,000 Tokens ≈ ៧៥០ ពាក្យ**

---

### ២. បាតុភូត "Lost in the Middle" (បាត់បង់ព័ត៌មាននៅកណ្តាល)

ការស្រាវជ្រាវបង្ហាញថា AI យកចិត្តទុកដាក់ខ្ពស់បំផុតលើព័ត៌មានដែលស្ថិតនៅ **ដើមដំបូងបង្អស់** និង **ចុងក្រោយបង្អស់** នៃ Prompt វែងៗ។ ព័ត៌មានសំខាន់ៗដែលបង្កប់នៅពាក់កណ្តាលអត្ថបទវែងៗ ច្រើនតែត្រូវបាន AI រំលង!

**វិធីសាស្ត្រល្អបំផុត**៖ ដាក់ការណែនាំសំខាន់បំផុតនៅផ្នែកខាងលើ និងរំលឹកឡើងវិញពីដែនកំណត់នៅផ្នែកខាងក្រោមបង្អស់។`,
        },
        beforeAfter: {
          scenario: {
            en: 'Providing a 10-page document to an AI and asking it to summarize key compliance rules.',
            km: 'ផ្តល់ឯកសារ ១០ ទំព័រទៅឱ្យ AI ហើយសុំឱ្យវាសង្ខេបវិធានអនុលោមភាពសំខាន់ៗ។',
          },
          weakPrompt: '[10 pages of raw text pasted]... Summarize compliance rules above.',
          weakOutput: {
            en: 'The document discusses safety guidelines, employee handbooks, office hours, and general compliance policies without specific breakdown.',
            km: 'ឯកសារនេះពិភាក្សាអំពីគោលការណ៍ណែនាំសុវត្ថិភាព សៀវភៅដៃបុគ្គលិក ម៉ោងធ្វើការ និងគោលនយោបាយទូទៅ ដោយគ្មានការបែងចែកច្បាស់លាស់។',
          },
          improvedPrompt: `CRITICAL INSTRUCTION: Extract ALL mandatory compliance rules from the text below. Ignore historical background or intro sections.

FORMAT REQUIREMENT: Group rules into (1) Data Security, (2) Workplace Safety, and (3) Reporting Timelines.

[10 pages of raw text pasted here]

RECALL REINFORCEMENT: Remember to output ONLY the 3 grouped categories with bullet points. Do not write an intro or conclusion.`,
          improvedOutput: {
            en: `### Mandatory Compliance Rules

#### 1. Data Security Rules
- All customer PII must be encrypted at rest using AES-256.
- Multi-Factor Authentication (MFA) is compulsory for system access.

#### 2. Workplace Safety Rules
- Emergency exits must remain unblocked at all times.
- Annual safety refreshers must be completed by Oct 31.

#### 3. Reporting Timelines
- Security breaches must be logged within 2 hours of detection.
- Financial audit reports are due quarterly on the 15th.`,
            km: `### វិធានអនុលោមភាពកាតព្វកិច្ច

#### ១. បទប្បញ្ញត្តិសុវត្ថិភាពទិន្នន័យ
- ទិន្នន័យអតិថិជនទាំងអស់ត្រូវតែធ្វើ Encryption ដោយ AES-256។
- ការប្រើប្រាស់ MFA គឺជារឿងកាតព្វកិច្ច។

#### ២. បទប្បញ្ញត្តិសុវត្ថិភាពកន្លែងធ្វើការ
- ច្រកចេញសង្គ្រោះបន្ទាន់ត្រូវតែចំហជានិច្ច។

#### ៣. កាលបរិច្ឆេទកំណត់នៃការរាយការណ៍
- ករណីលួចចូលប្រព័ន្ធត្រូវរាយការណ៍ក្នុងរយ:ពេល ២ម៉ោង។`,
          },
          keyImprovements: [
            {
              en: 'Placed key directives at the very top before long document text.',
              km: 'ដាក់ការណែនាំសំខាន់ៗនៅផ្នែកខាងលើបង្អស់ មុនអត្ថបទវែង។',
            },
            {
              en: 'Added a recall reinforcement statement at the very bottom to combat "Lost in the Middle" bias.',
              km: 'បន្ថែមការរំលឹកឡើងវិញនៅផ្នែកខាងក្រោមបង្អស់ ដើម្បីកាត់បន្ថយបញ្ហា "Lost in the Middle"។',
            },
            {
              en: 'Specified strict structural boundaries for groupings.',
              km: 'កំណត់រចនាសម្ព័ន្ធបែងចែកក្រុមយ៉ាងច្បាស់លាស់។',
            },
          ],
        },
        realWorldExample: {
          context: {
            en: 'A developer attempting to summarize a massive JSON API payload without exhausting the model output tokens.',
            km: 'អ្នកអភិវឌ្ឍន៍ព្យាយាមសង្ខេបទិន្នន័យ JSON ដ៏ធំដោយមិនឱ្យលើសដែនកំណត់ Output Tokens របស់ AI។',
          },
          solution: {
            en: 'By explicitly directing the AI to prune redundant array items and only return schema field keys with data types, the token output dropped from 4,000 tokens to 180 tokens.',
            km: 'ដោយណែនាំ AI ឱ្យកាត់ចោលទិន្នន័យជាន់គ្នា និងបញ្ចេញតែឈ្មោះ Key និង Data Types ចំនួន Token Output ត្រូវបានកាត់បន្ថយពី ៤,០០០ Tokens មកត្រឹម ១៨០ Tokens ប៉ុណ្ណោះ។',
          },
        },
        exercise: {
          scenario: {
            en: 'Structure a prompt containing a long customer feedback transcript where the AI must identify sentiment and list top 3 complaints without missing instructions.',
            km: 'រៀបចំ Prompt សម្រាប់វិភាគអត្ថបទសន្ទនារបស់អតិថិជនដ៏វែង ដោយតម្រូវឱ្យ AI ស្វែងរកមតិអវិជ្ជមានកំពូលទាំង ៣ ដោយមិនឱ្យរំលងការណែនាំ។',
          },
          targetDomain: 'Data Analysis & Prompt Structuring',
          hints: [
            {
              en: 'Place prompt directives first, transcript second, and constraint restatement last.',
              km: 'ដាក់ការណែនាំមុនគេ អត្ថបទសន្ទនានៅកណ្តាល និងការរំលឹកលក្ខខណ្ឌនៅចុងក្រោយ។',
            },
            {
              en: 'Ask for concise bullet point output to conserve output tokens.',
              km: 'តម្រូវឱ្យចេញជាចំណុចៗដើម្បីសន្សំ Token ចម្លើយ។',
            },
          ],
          sampleStrongPrompt:
            'TASK: Analyze the transcript below. Extract: (1) Overall sentiment score [1-10], (2) Top 3 specific customer complaints. \n\nTRANSCRIPT: [pasted text] \n\nCONSTRAINT REMINDER: Keep summary under 100 words in total.',
        },
        quiz: [
          {
            id: 'm1-l2-q1',
            question: {
              en: 'Roughly how many English words equal 1,000 tokens?',
              km: 'តើ ១,០០០ Tokens ស្មើនឹងប្រមាណប៉ុន្មានពាក្យក្នុងភាសាអង់គ្លេស?',
            },
            options: [
              {
                id: 'a',
                text: { en: '1,000 words', km: '១,០០០ ពាក្យ' },
                isCorrect: false,
              },
              {
                id: 'b',
                text: { en: 'Approximately 750 words', km: 'ប្រមាណ ៧៥០ ពាក្យ' },
                isCorrect: true,
              },
              {
                id: 'c',
                text: { en: '10,000 words', km: '១០,០០០ ពាក្យ' },
                isCorrect: false,
              },
            ],
            explanation: {
              en: '1 token is roughly 0.75 words, so 1,000 tokens corresponds to roughly 750 English words.',
              km: '១ Token ស្មើប្រមាណ ០.៧៥ ពាក្យ ដូច្នេះ ១,០០០ Tokens ស្មើប្រមាណ ៧៥០ ពាក្យអង់គ្លេស។',
            },
          },
        ],
      },
      {
        id: 'm1-l3',
        moduleId: 'module-1',
        moduleNumber: 1,
        lessonNumber: 3,
        title: {
          en: 'Why the Same AI Gives Different Quality Answers',
          km: 'ហេតុអ្វីបានជា AI តែមួយផ្តល់ចម្លើយមានគុណភាពខុសគ្នា?',
        },
        durationMinutes: 25,
        difficulty: 'Beginner',
        description: {
          en: 'AI models do not have a single static answer to any question. Factors like prompt clarity, temperature settings, system framing, and seed context dynamically alter the probability distribution of words the AI generates. Understanding why output quality fluctuates empowers you to eliminate randomness and deterministically trigger peak performance every time you prompt.',
          km: 'AI មិនមានចម្លើយថេរតែមួយសម្រាប់សំណួរណាមួយនោះទេ។ កត្តាដូចជាភាពច្បាស់លាស់នៃ Prompt, កម្រិត Temperature, និងការបង្កើតលក្ខខណ្ឌតម្រង់ទិស ផ្លាស់ប្តូរប្រូបាប៊ីលីតេនៃពាក្យដែល AI បញ្ចេញ។ ការយល់ដឹងពីកត្តាទាំងនេះ ជួយឱ្យអ្នកអាចលុបបំបាត់ភាពមិនច្បាស់លាស់ និងទទួលបានចម្លើយដែលមានគុណភាពខ្ពស់ជានិច្ច។',
        },
        tutorial: {
          en: `### Key Factors Influencing Output Quality

1. **Temperature & Top-P Settings**:
   - **Low Temperature (0.0 – 0.2)**: Highly deterministic, precise, focused. Ideal for coding, math, and data extraction.
   - **High Temperature (0.7 – 1.0)**: Creative, varied, surprising. Ideal for brainstorming, fiction, and naming ideas.

2. **Persona Framing**:
   - Asking "How to write an email" yields generic templates.
   - Asking "Act as an executive coach with 20 years experience negotiation" forces high-stakes vocabulary.`,
          km: `### កត្តាសំខាន់ៗដែលប៉ះពាល់ដល់គុណភាពចម្លើយ

១. **កម្រិត Temperature**:
   - **Temperature ទាប (0.0 – 0.2)**៖ ចម្លើយមានភាពជាក់លាក់ មិនងាករេ។ ស័ក្តិសមសម្រាប់សរសេរកូដ គណិតវិទ្យា និងទាញយកទិន្នន័យ។
   - **Temperature ខ្ពស់ (0.7 – 1.0)**៖ មានគំនិតច្នៃប្រឌិតខ្ពស់។ ស័ក្តិសមសម្រាប់បង្កើតគំនិតថ្មីៗ និងការសរសេរអត្ថបទច្នៃប្រឌិត។`,
        },
        beforeAfter: {
          scenario: {
            en: 'Requesting marketing ideas for a new eco-friendly water bottle.',
            km: 'សុំគំនិតទីផ្សារសម្រាប់ដបទឹកបរិស្ថានថ្មី។',
          },
          weakPrompt: 'Give me marketing ideas for a water bottle.',
          weakOutput: {
            en: '1. Social media ads. 2. Influencer marketing. 3. Giveaways. 4. Discounts.',
            km: '១. ពាណិជ្ជកម្មលើ Social Media ២. ប្រើ Influencers ៣. កម្មវិធីចែកកាដូ ៤. ការបញ្ចុះតម្លៃ',
          },
          improvedPrompt:
            'Act as a Creative Director at a top eco-brand agency. Brainstorm 5 non-traditional, viral guerrilla marketing campaigns for a biodegradable bamboo water bottle targeting Gen-Z outdoor enthusiasts. For each idea, include: (1) Campaign Name, (2) Core Mechanic, and (3) Expected Virality Factor.',
          improvedOutput: {
            en: `### Guerrilla Marketing Campaigns: Bamboo Hydro-Bottle

#### 1. #LeaveZeroTrace Campus Challenge
- **Core Mechanic**: Pop-up trash containers on college campuses that trade plastic bottles directly for laser-engraved bamboo bottles.
- **Virality Factor**: On-site TikTok video booth recording the instant crushing of plastic bottles.

#### 2. The Dissolving Billboard
- **Core Mechanic**: Outdoor billboard made from organic plant material that completely dissolves in natural rain over 30 days.
- **Virality Factor**: Time-lapse livestream showing nature absorbing the billboard.`,
            km: `### យុទ្ធនាការទីផ្សារច្នៃប្រឌិត៖ ដបទឹកឫស្សីបរិស្ថាន

#### ១. #LeaveZeroTrace Campus Challenge
- **សកម្មភាព**៖ ដាក់ធុងសំរាមពិសេសនៅតាមសាកលវិទ្យាល័យ ដោយដូរដបប្លាស្ទិកចាស់ យកដបទឹកឫស្សីថ្មីភ្លាមៗ។
- **ភាពល្បីល្បាញ (Virality)**៖ ថតវីដេអូ TikTok ពេលកិនដបប្លាស្ទិក។`,
          },
          keyImprovements: [
            {
              en: 'Shifted from generic marketing request to specific guerrilla eco-campaigns.',
              km: 'ផ្លាស់ប្តូរពីការសុំគំនិតទូទៅ មកជាយុទ្ធនាការច្នៃប្រឌិតជាក់លាក់។',
            },
            {
              en: 'Targeted a precise demographic (Gen-Z outdoor enthusiasts).',
              km: 'កំណត់ក្រុមគោលដៅច្បាស់លាស់ (Gen-Z ដែលចូលចិត្តដើរកម្សាន្ត)។',
            },
          ],
        },
        realWorldExample: {
          context: {
            en: 'A business founder getting generic pitch deck slide descriptions until adding brand positioning framing.',
            km: 'ស្ថាបនិកក្រុមហ៊ុនទទួលបានការពិពណ៌នា Pitch Deck ទូទៅ រហូតដល់គាត់បន្ថែមការកំណត់តួនាទី និងស្ទីលម៉ាកសញ្ញា។',
          },
          solution: {
            en: 'Adding "Act as a Silicon Valley VC partner" transformed the outline into razor-sharp financial ROI arguments.',
            km: 'ការបន្ថែមតួនាទី "Act as a Silicon Valley VC partner" ធ្វើឱ្យចម្លើយផ្លាស់ប្តូរទៅជាទិន្នន័យសេដ្ឋកិច្ច និង ROI ដ៏មុតស្រួច។',
          },
        },
        exercise: {
          scenario: {
            en: 'Write a prompt asking AI to critique a product landing page headline, forcing it to act as a ruthless conversion rate optimization (CRO) expert.',
            km: 'សរសេរ Prompt បញ្ជា AI ឱ្យរះគន់ ចំណងជើង Landing Page ដោយកំណត់ឱ្យវាដើរតួជាអ្នកជំនាញ Conversion Rate Optimization (CRO) ដ៏ម៉ត់ចត់។',
          },
          targetDomain: 'Conversion Copywriting',
          hints: [
            {
              en: 'Set persona: Ruthless CRO Expert.',
              km: 'កំណត់តួនាទី៖ អ្នកជំនាញ CRO ដ៏ម៉ត់ចត់។',
            },
            {
              en: 'Ask for specific metrics evaluated: Clarity, Value Prop, Urgency.',
              km: 'តម្រូវឱ្យវាយតម្លៃលើ៖ ភាពច្បាស់លាស់, តម្លៃបន្ថែម, និងភាពបន្ទាន់។',
            },
          ],
          sampleStrongPrompt:
            'Act as a ruthless Lead CRO Expert. Critique this landing page headline: "We build better software for your business." Point out 3 reasons why it fails, score it out of 10, and provide 3 high-converting rewrites.',
        },
        quiz: [
          {
            id: 'm1-l3-q1',
            question: {
              en: 'Which Temperature setting is best suited for writing strict code or mathematical calculations?',
              km: 'តើកម្រិត Temperature មួយណាដែលស័ក្តិសមបំផុតសម្រាប់សរសេរកូដ ឬគណនាគណិតវិទ្យា?',
            },
            options: [
              {
                id: 'a',
                text: { en: 'Low Temperature (0.0 – 0.2)', km: 'Temperature ទាប (0.0 – 0.2)' },
                isCorrect: true,
              },
              {
                id: 'b',
                text: { en: 'High Temperature (0.9 – 1.0)', km: 'Temperature ខ្ពស់ (0.9 – 1.0)' },
                isCorrect: false,
              },
            ],
            explanation: {
              en: 'Low temperature minimizes randomness, producing predictable and exact technical outputs.',
              km: 'Temperature ទាប កាត់បន្ថយភាពចៃដន្យ ធ្វើឱ្យចម្លើយមានភាពច្បាស់លាស់ និងត្រឹមត្រូវតាមបច្ចេកទេស។',
            },
          },
        ],
      },
    ],
  },

  // MODULE 2
  {
    id: 'module-2',
    moduleNumber: 2,
    title: {
      en: 'Module 2: The Art of Conversation with AI',
      km: 'មូឌុលទី ២៖ សិល្បៈនៃការសន្ទនាជាមួយ AI',
    },
    description: {
      en: 'Shift your mindset from single-shot search engine queries to multi-turn collaborative dialogue, steering, and refining.',
      km: 'ផ្លាស់ប្តូរការគិតពីការស្វែងរកតាម Search Engine មកជាការសន្ទនាឆ្លើយឆ្លងពហុវគ្គ ដើម្បីតម្រង់ទិស និងអភិវឌ្ឍចម្លើយជាមួយ AI។',
    },
    lessons: [
      {
        id: 'm2-l1',
        moduleId: 'module-2',
        moduleNumber: 2,
        lessonNumber: 1,
        title: {
          en: 'AI as a Collaborator vs. Search Engine',
          km: 'AI ជាសហការី មិនមែនជា Search Engine នោះទេ',
        },
        durationMinutes: 25,
        difficulty: 'Beginner',
        description: {
          en: 'Search engines locate existing web pages based on keyword matching; AI models generate completely new content dynamically by synthesizing patterns. When users treat AI like Google, entering 2-3 isolated keywords, they waste 90% of the model’s capabilities. Treating AI as an elite intellectual co-worker who requires context, objectives, and dialogic steering yields dramatically superior results.',
          km: 'Search Engines ស្វែងរកទំព័រវេបសាយដែលមានស្រាប់តាមរយៈពាក្យគន្លឹះ ប៉ុន្តែ AI បង្កើតមាតិកាថ្មីស្រឡាងដោយសំយោគគំរូទិន្នន័យ។ នៅពេលអ្នកប្រើប្រាស់ AI ដូច Google ដោយបញ្ចូលពាក្យគន្លឹះ ២-៣ ពាក្យ ពួកគេកំពុងបាត់បង់សមត្ថភាព ៩០% របស់ AI។ ការចាត់ទុក AI ជាសហការីដែលមានចំណេះដឹងខ្ពស់ ដោយផ្តល់បរិបទ និងគោលដៅច្បាស់លាស់ នឹងផ្តល់លទ្ធផលល្អប្រសើរជាងមុនយ៉ាងខ្លាំង។',
        },
        tutorial: {
          en: `### Mindset Shift Breakdown

| Dimension | Search Engine Mindset | AI Collaborator Mindset |
| :--- | :--- | :--- |
| **Input Format** | Bare keywords ("react router tutorial") | Contextual assignment ("Help me architect routing for a SaaS dashboard") |
| **Interaction** | One query, click link, leave | Multi-turn dialogue, questioning, iterating |
| **Output Expectations** | Links to third-party articles | Custom customized solutions tailored to your exact constraints |
| **Feedback Loop** | Re-type new query | Correct direction ("Good, but simplify section 2") |`,
          km: `### ការប្រៀបធៀបរបៀបគិត

| កត្តា | របៀបគិតបែប Search Engine | របៀបគិតបែប AI Collaborator |
| :--- | :--- | :--- |
| **របៀបបញ្ចូលទិន្នន័យ** | ពាក្យគន្លឹះ "react router tutorial" | ផ្តល់បរិបទ "ជួយខ្ញុំរៀបចំប្រព័ន្ធ Routing សម្រាប់ SaaS Dashboard" |
| **ការប្រាស្រ័យទាក់ទង** | ស្វែងរកម្តង ចុច Link ហើយចាកចេញ | សន្ទនាឆ្លើយឆ្លងច្រើនដង តម្រង់ទិសចម្លើយ |
| **ការរំពឹងទុក** | Link ទៅកាន់អត្ថបទវេបសាយ | ដំណោះស្រាយផ្ទាល់ខ្លួនតាមតម្រូវការ |`,
        },
        beforeAfter: {
          scenario: {
            en: 'Designing an onboarding workflow for a new mobile banking app.',
            km: 'រៀបចំប្រព័ន្ធ Onboarding សម្រាប់កម្មវិធីធនាគារលើទូរស័ព្ទដៃ។',
          },
          weakPrompt: 'Mobile banking onboarding best practices.',
          weakOutput: {
            en: '1. Keep steps short. 2. Use biometric login. 3. Show progress bar.',
            km: '១. ធ្វើឱ្យខ្លី ២. ប្រើប្រព័ន្ធស្កេនមេដៃ ៣. បង្ហាញ Progress Bar',
          },
          improvedPrompt:
            'Let’s collaborate on designing the onboarding flow for a fintech app targeting first-time smartphone users in Southeast Asia. First, ask me 3 clarifying questions about our security compliance and user demographics before suggesting screens.',
          improvedOutput: {
            en: `I would love to collaborate on this onboarding architecture! To tailor the screen flows to your exact compliance and regional needs, please answer these 3 quick questions:

1. **KYC Requirement**: Do users need instant national ID OCR verification during onboarding, or can that be deferred after initial registration?
2. **Connectivity**: Should the flow be optimized for low-bandwidth 3G network environments?
3. **Language**: Will multi-language toggling (Khmer/English) be required on the very first screen?`,
            km: `ខ្ញុំរីករាយក្នុងការសហការជាមួយអ្នកលើការរៀបចំ Onboarding នេះ! ដើម្បីតម្រូវតាមបទប្បញ្ញត្តិ និងតម្រូវការតំបន់ សូមឆ្លើយសំណួរ ៣ នេះសិន៖

១. **លក្ខខណ្ឌ KYC**៖ តើអ្នកប្រើប្រាស់ត្រូវស្កេន អត្តសញ្ញាណប័ណ្ណ ភ្លាមៗ ឬអាចធ្វើតាមក្រោយ?
២. **អ៊ីនធឺណិត**៖ តើត្រូវធ្វើឱ្យដំណើរការស្រាលសម្រាប់អ៊ីនធឺណិត 3G ឬទេ?
៣. **ភាសា**៖ តើត្រូវមានប៊ូតុងប្តូរភាសា (ខ្មែរ/អង់គ្លេស) នៅលើអេក្រង់ដំបូងដែរឬទេ?`,
          },
          keyImprovements: [
            {
              en: 'Shifted from static query to collaborative partnership.',
              km: 'ផ្លាស់ប្តូរពីការសួរស្ដង់ដារ មកជាការសហការ។',
            },
            {
              en: 'Instructed AI to ask clarifying questions before generating final answers.',
              km: 'បញ្ជាឱ្យ AI សួរសំណួរបញ្ជាក់សិន មុននឹងចេញចម្លើយចុងក្រោយ។',
            },
          ],
        },
        realWorldExample: {
          context: {
            en: 'A UX Designer having AI act as an interviewer to discover flaws in their wireframe concepts.',
            km: 'អ្នកឌីសាញ UX ប្រើ AI ឱ្យធ្វើជាអ្នកសម្ភាសន៍ ដើម្បីស្វែងរកចំណុចខ្វះខាតក្នុង Wireframe។',
          },
          solution: {
            en: 'By asking AI to roleplay as a non-tech-savvy elderly user testing an e-wallet, the designer identified 4 major navigation obstacles.',
            km: 'ដោយសុំឱ្យ AI ធ្វើតួជាមនុស្សចាស់មិនសូវស្ទាត់បច្ចេកវិទ្យា ក្នុងការប្រើប្រាស់ កាបូបប្រាក់អេឡិចត្រូនិក អ្នកឌីសាញរកឃើញចំណុចស្មុគស្មាញចំនួន ៤។',
          },
        },
        exercise: {
          scenario: {
            en: 'Write a collaborative prompt asking AI to co-create a database schema with you by asking 2 questions first.',
            km: 'សរសេរ Prompt បញ្ជា AI ឱ្យសហការបង្កើត Database Schema ជាមួយអ្នក ដោយឱ្យវាសួរ ២ សំណួរសិន។',
          },
          targetDomain: 'Database Architecture',
          hints: [
            {
              en: 'Explicitly command: "Do not output schema yet. Ask me 2 questions first."',
              km: 'បញ្ជាឱ្យច្បាស់៖ "កុំទាន់ចេញ Schema។ សូមសួរខ្ញុំ ២ សំណួរសិន។"',
            },
          ],
          sampleStrongPrompt:
            'I am building an e-commerce platform for digital downloads. Act as a Senior Database Architect. Before drafting the PostgreSQL schema, ask me 2 essential questions regarding our scaling needs and payment providers.',
        },
        quiz: [
          {
            id: 'm2-l1-q1',
            question: {
              en: 'What is the main benefit of instructing AI to ask clarifying questions before answering?',
              km: 'តើអ្វីជាអត្ថប្រយោជន៍ចម្បងនៃការបញ្ជាឱ្យ AI សួរសំណួរបញ្ជាក់សិនមុននឹងឆ្លើយ?',
            },
            options: [
              {
                id: 'a',
                text: {
                  en: 'It ensures the final answer accounts for your specific hidden constraints and goals.',
                  km: 'វាធានាថាចម្លើយចុងក្រោយត្រូវតាមតម្រូវការ និងលក្ខខណ្ឌជាក់ស្តែងរបស់អ្នក។',
                },
                isCorrect: true,
              },
              {
                id: 'b',
                text: {
                  en: 'It permanently lowers your subscription cost.',
                  km: 'វាកាត់បន្ថយតម្លៃសេវា AI ជារៀងរហូត។',
                },
                isCorrect: false,
              },
            ],
            explanation: {
              en: 'Asking clarifying questions prevents the AI from making blind assumptions about your requirements.',
              km: 'ការឱ្យ AI សួរនាំមុន ការពារកុំឱ្យវាទាយចម្លើយដោយប្រហែលៗ។',
            },
          },
        ],
      },
      {
        id: 'm2-l2',
        moduleId: 'module-2',
        moduleNumber: 2,
        lessonNumber: 2,
        title: {
          en: 'Iterative Back-and-Forth Dialogue Techniques',
          km: 'បច្ចេកទេសសន្ទនាអភិវឌ្ឍន៍ចម្លើយជាច្រើនវគ្គ',
        },
        durationMinutes: 25,
        difficulty: 'Beginner',
        description: {
          en: 'Expecting a flawless complex output from a single prompt is unrealistic. High-performing prompt engineers use iterative prompting—building the solution layer by layer across multiple conversational turns. You begin with structure, refine tone, add constraints, and polish edge cases sequentially.',
          km: 'ការរំពឹងទុកចម្លើយដ៏ស្មុគស្មាញ និងល្អឥតខ្ចោះពីការសួរតែមួយលើក គឺជាការយល់ច្រឡំ។ អ្នកជំនាញ Prompt Engineering ប្រើប្រាស់វិធីសាស្ត្រ Iterative Prompting—ដោយសាងសង់ដំណោះស្រាយម្តងមួយស្រទាប់ៗតាមរយៈការសន្ទនាជាច្រើនវគ្គ។ អ្នកចាប់ផ្តើមពីរចនាសម្ព័ន្ធ កែសម្រួលសំឡេង បន្ថែមលក្ខខណ្ឌ និងដោះស្រាយចំណុចពិសេសជាបន្តបន្ទាប់។',
        },
        tutorial: {
          en: `### The 4-Step Iterative Cycle

1. **Turn 1: Blueprint**: Establish core layout or logic.
2. **Turn 2: Content Injection**: Populate with real data or specific arguments.
3. **Turn 3: Critique & Refine**: Tell AI what is weak and needs polish.
4. **Turn 4: Format & Constraints**: Enforce strict JSON, Markdown, or word limits.`,
          km: `### វដ្តអភិវឌ្ឍន៍ចម្លើយ ៤ ជំហាន

១. **វគ្គទី ១៖ រៀបគ្រោង (Blueprint)**៖ រៀបចំគ្រោងឆ្អឹង ឬតក្កវិជ្ជាគ្រឹះ។
២. **វគ្គទី ២៖ បញ្ចូលមាតិកា (Content)**៖ បញ្ចូលទិន្នន័យជាក់ស្តែង។
៣. **វគ្គទី ៣៖ រិះគន់ & កែសម្រួល (Critique)**៖ ប្រាប់ AI ពីចំណុចខ្វះខាត។
៤. **វគ្គទី ៤៖ កំណត់ទម្រង់ (Format)**៖ បង្ខំឱ្យចេញជា JSON, Markdown ឬកំណត់ចំនួនពាក្យ។`,
        },
        beforeAfter: {
          scenario: {
            en: 'Refining an API error handling function across turns.',
            km: 'អភិវឌ្ឍមុខងារដោះស្រាយ Error ក្នុង API ជាច្រើនដំណាក់កាល។',
          },
          weakPrompt: 'Write a JS function for fetching data with errors.',
          weakOutput: {
            en: 'function getData() { fetch(url).catch(err => console.log(err)); }',
            km: 'function getData() { fetch(url).catch(err => console.log(err)); }',
          },
          improvedPrompt:
            'Turn 2 Prompt: Great start. Now modify that fetch function to include: (1) Exponential backoff retry logic (up to 3 attempts), (2) Custom Error class throwing, and (3) TypeScript type annotations.',
          improvedOutput: {
            en: `export async function fetchWithRetry<T>(url: string, retries = 3, delay = 1000): Promise<T> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
      return await res.json();
    } catch (err) {
      if (attempt === retries) throw new ApiFetchError(err as Error);
      await new Promise(r => setTimeout(r, delay * Math.pow(2, attempt - 1)));
    }
  }
  throw new ApiFetchError(new Error('Unknown error'));
}`,
            km: `export async function fetchWithRetry<T>(url: string, retries = 3, delay = 1000): Promise<T> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
      return await res.json();
    } catch (err) {
      if (attempt === retries) throw new ApiFetchError(err as Error);
      await new Promise(r => setTimeout(r, delay * Math.pow(2, attempt - 1)));
    }
  }
  throw new ApiFetchError(new Error('Unknown error'));
}`,
          },
          keyImprovements: [
            {
              en: 'Built complex retry algorithm step-by-step rather than all at once.',
              km: 'បង្កើតតក្កវិជ្ជាស្មុគស្មាញម្តងមួយដំណាក់កាលៗ។',
            },
          ],
        },
        realWorldExample: {
          context: {
            en: 'Drafting a legal terms of service document iteratively to ensure full coverage.',
            km: 'រៀបចំឯកសារលក្ខខណ្ឌសេវាកម្មច្បាប់ជាច្រើនដំណាក់កាលដើម្បីធានាភាពគ្រប់ជ្រុងជ្រោយ។',
          },
          solution: {
            en: 'First generating clause titles, then expanding clause by clause, then running a risk check turn.',
            km: 'ដំបូងបង្កើតចំណងជើងមាត្រា បន្ទាប់មកពង្រីកខ្លឹមសារមាត្រានីមួយៗ និងចុងក្រោយពិនិត្យហានិភ័យ។',
          },
        },
        exercise: {
          scenario: {
            en: 'Draft a Turn-2 prompt that takes a basic 3-bullet blog outline and asks AI to expand point 2 with statistics and a quote.',
            km: 'សរសេរ Prompt វគ្គទី២ ដើម្បីពង្រីកចំណុចទី២ នៃគ្រោងអត្ថបទ បន្ថែមទិន្នន័យស្ថិតិ និងសម្ដីដកស្រង់។',
          },
          targetDomain: 'Content Iteration',
          hints: [
            {
              en: 'Reference the specific section: "For point #2..."',
              km: 'បញ្ជាក់ផ្នែកជាក់ស្តែង៖ "សម្រាប់ចំណុចទី ២..."',
            },
          ],
          sampleStrongPrompt:
            'Great outline. Now expand section #2 ("Remote Work Productivity") into 3 detailed paragraphs. Include 2 statistical citations and 1 industry leader quote.',
        },
        quiz: [
          {
            id: 'm2-l2-q1',
            question: {
              en: 'Why is iterative prompting superior for complex coding tasks?',
              km: 'ហេតុអ្វីបានជា Iterative Prompting មានប្រសិទ្ធភាពខ្ពស់សម្រាប់ការសរសេរកូដស្មុគស្មាញ?',
            },
            options: [
              {
                id: 'a',
                text: {
                  en: 'It allows you to verify logic at each layer and catch bugs before combining everything.',
                  km: 'វាអនុញ្ញាតឱ្យអ្នកផ្ទៀងផ្ទាត់តក្កវិជ្ជាតាមដំណាក់កាល និងស្វែងរក Bug មុនពេលបូកបញ្ចូលគ្នា។',
                },
                isCorrect: true,
              },
              {
                id: 'b',
                text: {
                  en: 'It bypasses the API key requirement.',
                  km: 'វារំលងការទាមទារ API Key។',
                },
                isCorrect: false,
              },
            ],
            explanation: {
              en: 'Building layer-by-layer keeps context clean and simplifies debugging.',
              km: 'ការសាងសង់ម្តងមួយស្រទាប់ ជួយឱ្យ Context ស្អាត និងងាយស្រួលរក Bug។',
            },
          },
        ],
      },
      {
        id: 'm2-l3',
        moduleId: 'module-2',
        moduleNumber: 2,
        lessonNumber: 3,
        title: {
          en: 'Mid-Conversation Course Corrections & Common Mistakes',
          km: 'ការកែប្រែទិសដៅក្នុងពេលសន្ទនា និងកំហុសទូទៅ',
        },
        durationMinutes: 25,
        difficulty: 'Beginner',
        description: {
          en: 'When an AI strays off course or generates an inaccurate response, many users abandon the chat or repeat the exact same prompt. Master prompt engineers know how to deliver constructive feedback mid-conversation—pinpointing the exact failure point, enforcing new negative constraints, and guiding the model back on track.',
          km: 'នៅពេល AI ឆ្លើយខុសទិសដៅ ឬមិនត្រឹមត្រូវ អ្នកប្រើប្រាស់ជាច្រើនច្រើនតែបោះបង់ ឬវាយ Prompt ដដែលឡើងវិញ។ អ្នកជំនាញ Prompt Engineering ស្ទាត់ជំនាញក្នុងការផ្តល់ការរិះគន់ស្ថាបនាភ្លាមៗក្នុងពេលសន្ទនា—ដោយចង្អុលបង្ហាញចំណុចខុសឆ្គង កំណត់ Negative Constraints ថ្មី និងតម្រង់ទិស AI ឱ្យមកផ្លូវត្រូវវិញ។',
        },
        tutorial: {
          en: `### Negative Constraints ("Do NOT" Rules)

AI handles explicit "Do NOT" rules much better when paired with an alternative "Instead, DO X" directive.

- ❌ **Weak Correction**: "Don't write so long."
- ✅ **Master Correction**: "You are being too wordy. Cut the previous output by 50%. Do NOT use passive voice. Instead, use short punchy active bullet points."`,
          km: `### ការប្រើប្រាស់ Negative Constraints

AI យល់ពីវិធាន "Do NOT" បានល្អបំផុត នៅពេលវាត្រូវបានផ្គួបជាមួយវិធាន "Instead, DO X"។

- ❌ **ការកែខុសរបៀប**៖ "កុំសរសេរវែងពេក"
- ✅ **ការកែបែបអាជីព**៖ "ចម្លើយមុននេះវែងពេក។ សូមកាត់បន្ថយ ៥០%។ កុំប្រើ Passive Voice។ ជំនួសមកវិញ ដោយប្រើចំណុចខ្លីៗ និងមានទម្ងន់។"`,
        },
        beforeAfter: {
          scenario: {
            en: 'Correcting an AI that wrote overly academic text for a marketing email.',
            km: 'កែប្រែ AI ដែលបានសរសេរ អ៊ីមែលទីផ្សារ បែបអត្ថបទសិក្សាធ្ងន់ធ្ងរពេក។',
          },
          weakPrompt: 'This sounds too formal.',
          weakOutput: {
            en: 'Dear valued customer, we hereby inform you of our latest corporate developments...',
            km: 'ជម្រាបសួរអតិថិជនដ៏ថ្លៃថ្លា យើងខ្ញុំសូមជម្រាបជូនអំពីការអភិវឌ្ឍន៍ក្រុមហ៊ុន...',
          },
          improvedPrompt:
            'CORRECTION: Stop. That draft is far too formal and academic. Rewrite it using a warm, conversational tone as if texting a close friend. Limit sentences to 12 words maximum. Do NOT use jargon like "hereby" or "valued customer".',
          improvedOutput: {
            en: `Hey Sarah! Quick update on your account—we just unlocked 3 new free features for you today. Check them out when you get a sec!`,
            km: `សួស្តី Sarah! ព័ត៌មានរហ័សអំពីគណនីរបស់អ្នក—យើងទើបតែបន្ថែមមុខងារឥតគិតថ្លៃ ៣ ថ្មីសម្រាប់អ្នកថ្ងៃនេះ។ ចុចមើលពេលទំនេរណា!`,
          },
          keyImprovements: [
            {
              en: 'Used clear pivot signal ("CORRECTION: Stop").',
              km: 'ប្រើសញ្ញាប្តូរទិសដៅច្បាស់លាស់ ("CORRECTION: Stop")។',
            },
            {
              en: 'Combined negative constraints (no jargon) with concrete positive bounds (max 12 words/sentence).',
              km: 'ផ្គួប Negative Constraints ជាមួយដែនកំណត់ជាក់ស្តែង (អតិបរមា ១២ពាក្យ/ល្បះ)។',
            },
          ],
        },
        realWorldExample: {
          context: {
            en: 'A developer steering an AI away from deprecated React class components back to modern functional hooks.',
            km: 'អ្នកអភិវឌ្ឍន៍តម្រង់ទិស AI ឱ្យឈប់ប្រើ React Class Components ហើយមកប្រើ Functional Hooks វិញ។',
          },
          solution: {
            en: 'Prompt: "Do NOT use React.Component or lifecycle methods. Refactor using React 18 useState and useEffect hooks only."',
            km: 'Prompt៖ "កុំប្រើ React.Component។ សូមរៀបចំឡើងវិញដោយប្រើតែ React 18 useState និង useEffect hooks ប៉ុណ្ណោះ។"',
          },
        },
        exercise: {
          scenario: {
            en: 'Write a course-correction prompt for an AI that generated code containing hardcoded secret API keys.',
            km: 'សរសេរ Prompt កែតម្រូវ AI ដែលបានសរសេរកូដ ដោយដាក់ Secret API Keys ដោយផ្ទាល់ក្នុងកូដ (Hardcoded)។',
          },
          targetDomain: 'Security Course Correction',
          hints: [
            {
              en: 'Point out the security issue explicitly (hardcoded key).',
              km: 'ចង្អុលបង្ហាញបញ្ហាសុវត្ថិភាពឱ្យច្បាស់ (Hardcoded key)។',
            },
            {
              en: 'Direct it to use environment variables (process.env).',
              km: 'ណែនាំឱ្យប្រើ Environment Variables (process.env)។',
            },
          ],
          sampleStrongPrompt:
            'SECURITY CORRECTION: Do NOT hardcode secret keys in source code! Refactor the function to safely load process.env.API_KEY and throw a descriptive error if the variable is missing.',
        },
        quiz: [
          {
            id: 'm2-l3-q1',
            question: {
              en: 'What is the most effective way to formulate a negative constraint in a prompt?',
              km: 'តើអ្វីជាវិធីសាស្ត្រមានប្រសិទ្ធភាពបំផុតក្នុងការកំណត់ Negative Constraint ក្នុង Prompt?',
            },
            options: [
              {
                id: 'a',
                text: {
                  en: 'Pair what NOT to do with a clear statement of what to DO instead.',
                  km: 'ផ្គួបអ្វីដែលមិនត្រូវធ្វើ ជាមួយការណែនាំច្បាស់លាស់អំពីអ្វីដែលត្រូវធ្វើជំនួសវិញ។',
                },
                isCorrect: true,
              },
              {
                id: 'b',
                text: {
                  en: 'Repeat "NO NO NO" 10 times in all capital letters.',
                  km: 'សរសេរពាក្យ "NO" ចំនួន ១០ ដង។',
                },
                isCorrect: false,
              },
            ],
            explanation: {
              en: 'Providing the replacement behavior removes ambiguity for the models predictive engine.',
              km: 'ការផ្តល់សកម្មភាពជំនួស ជួយលុបបំបាត់ភាពមិនច្បាស់លាស់សម្រាប់ AI។',
            },
          },
        ],
      },
    ],
  },

  // MODULE 3
  {
    id: 'module-3',
    moduleNumber: 3,
    title: {
      en: 'Module 3: Prompt Writing Fundamentals',
      km: 'មូឌុលទី ៣៖ មូលដ្ឋានគ្រឹះនៃការសរសេរ Prompt',
    },
    description: {
      en: 'Master the 4 core pillars of production-grade prompts: Context, Task, Format, and Constraints.',
      km: 'ស្ទាត់ជំនាញលើសសរស្តម្ភទាំង ៤ នៃ Prompt កម្រិតអាជីព៖ បរិបទ (Context), ភារកិច្ច (Task), ទម្រង់ (Format) និងលក្ខខណ្ឌ (Constraints)។',
    },
    lessons: [
      {
        id: 'm3-l1',
        moduleId: 'module-3',
        moduleNumber: 3,
        lessonNumber: 1,
        title: {
          en: 'Anatomy of a High-Quality Prompt (CTFC Framework)',
          km: 'រចនាសម្ព័ន្ធនៃ Prompt មានគុណភាពខ្ពស់ (ក្របខ័ណ្ឌ CTFC)',
        },
        durationMinutes: 30,
        difficulty: 'Intermediate',
        description: {
          en: 'Every professional prompt follows a structural blue-print comprising four non-negotiable elements: Context (background setup), Task (the exact directive), Format (how output must look), and Constraints (boundaries and rules). Omitting any of these components forces the AI to rely on generic default assumptions, diluting precision.',
          km: 'Prompt កម្រិតអាជីពនីមួយៗដើរតាមរចនាសម្ព័ន្ធដែលមានធាតុផ្សំសំខាន់ៗចំនួន ៤៖ បរិបទ (Context - ការរៀបចំព័ត៌មានខាងក្រោយ), ភារកិច្ច (Task - បទបញ្ជាជាក់ស្តែង), ទម្រង់ (Format - ទម្រង់នៃចម្លើយ) និងលក្ខខណ្ឌ (Constraints - ដែនកំណត់ និងវិធាន)។ ការរំលងធាតុផ្សំណាមួយ បង្ខំឱ្យ AI ប្រើប្រាស់ការស្មានទូទៅ ដែលធ្វើឱ្យបាត់បង់ភាពជាក់លាក់។',
        },
        tutorial: {
          en: `### The CTFC Framework Architecture

1. **C - Context**: Background story, target audience, brand tone, or technical ecosystem.
2. **T - Task**: Imperative action verb starting sentence ("Analyze", "Draft", "Refactor", "Summarize").
3. **F - Format**: Visual layout, Markdown tables, JSON structure, or section headings.
4. **C - Constraints**: Boundaries, word counts, forbidden terms, or language rules.

\`\`\`markdown
[CONTEXT]: You are a senior DevOps engineer managing an AWS Kubernetes cluster.
[TASK]: Write a step-by-step incident runbook for handling high CPU utilization spikes (>90%).
[FORMAT]: Markdown with numbered diagnostic steps and bash code blocks.
[CONSTRAINTS]: Maximum 300 words. Do NOT include non-AWS cloud services.
\`\`\``,
          km: `### រចនាសម្ព័ន្ធក្របខ័ណ្ឌ CTFC

១. **C - Context (បរិបទ)**៖ ព័ត៌មានខាងក្រោយ ក្រុមគោលដៅ ឬប្រព័ន្ធបច្ចេកវិទ្យា។
២. **T - Task (ភារកិច្ច)**៖ កិរិយាសព្ទបញ្ជាជាក់ស្តែង ("វិភាគ", "សរសេរ", "រៀបចំឡើងវិញ", "សង្ខេប")។
៣. **F - Format (ទម្រង់)**៖ ការរៀបចំទម្រង់ចម្លើយ ដូចជា តារាង Markdown, JSON ឬចំណងជើង។
៤. **C - Constraints (លក្ខខណ្ឌ)**៖ ដែនកំណត់ ចំនួនពាក្យ វិធានហាមឃាត់ ឬភាសា។`,
        },
        beforeAfter: {
          scenario: {
            en: 'Creating a privacy policy summary for a SaaS landing page.',
            km: 'បង្កើតសេចក្តីសង្ខេបគោលការណ៍ឯកជនភាពសម្រាប់ Landing Page នៃ SaaS។',
          },
          weakPrompt: 'Summarize our privacy policy for users.',
          weakOutput: {
            en: 'We collect your data including cookies, emails, and IP addresses to improve our services.',
            km: 'យើងប្រមូលទិន្នន័យរបស់អ្នក រួមមាន Cookies, អ៊ីមែល និង IP ដើម្បីអភិវឌ្ឍសេវាកម្ម។',
          },
          improvedPrompt: `[CONTEXT]: We are launching a B2B productivity app in Europe targeting GDPR compliance-conscious enterprise buyers.
[TASK]: Summarize our Privacy Policy into 3 reassure-focused highlight points.
[FORMAT]: HTML bullet list with <strong> tags on key terms.
[CONSTRAINTS]: Keep under 60 words total. Tone must be ultra-transparent and professional.`,
          improvedOutput: {
            en: `<ul>
  <li><strong>Zero Data Selling:</strong> We never monetize, rent, or trade user data to third-party advertisers.</li>
  <li><strong>GDPR Compliant:</strong> Full end-to-end AES-256 encryption with instant right-to-be-forgotten user data export.</li>
  <li><strong>SOC2 Certified:</strong> Hosted exclusively on audited ISO-27001 compliant European cloud infrastructure.</li>
</ul>`,
            km: `<ul>
  <li><strong>មិនលក់ទិន្នន័យ៖</strong> យើងមិនលក់ ឬចែករំលែកទិន្នន័យទៅកាន់ក្រុមហ៊ុនពាណិជ្ជកម្មឡើយ។</li>
  <li><strong>អនុលោមតាម GDPR៖</strong> ការពារទិន្នន័យដោយ AES-256 Encryption ជាមួយសិទ្ធិលុបទិន្នន័យភ្លាមៗ។</li>
  <li><strong>ស្តង់ដារ SOC2៖</strong> រក្សាទុកលើ Cloud Infrastructure នៅអឺរ៉ុបដែលមានសុវត្ថិភាពខ្ពស់។</li>
</ul>`,
          },
          keyImprovements: [
            {
              en: 'Applied full CTFC framework structuring explicit context, task, format, and constraints.',
              km: 'អនុវត្តក្របខ័ណ្ឌ CTFC ពេញលេញដោយកំណត់ បរិបទ ភារកិច្ច ទម្រង់ និងលក្ខខណ្ឌ។',
            },
            {
              en: 'Forced HTML list output with semantic bolding.',
              km: 'កំណត់ឱ្យបញ្ចេញជាទម្រង់ HTML List ជាមួយអក្សរដិត។',
            },
          ],
        },
        realWorldExample: {
          context: {
            en: 'An HR manager generating job descriptions using CTFC to match company culture.',
            km: 'អ្នកគ្រប់គ្រង HR បង្កើតការពិពណ៌នាការងារដោយប្រើ CTFC ដើម្បីឱ្យត្រូវតាមវប្បធម៌ក្រុមហ៊ុន។',
          },
          solution: {
            en: 'Using Context (remote startup), Task (Senior React dev post), Format (Salary + Tech Stack + Responsibilities), Constraints (no corporate fluff) produced a 100% ready-to-publish posting.',
            km: 'ការប្រើប្រាស់ CTFC បង្កើតបានជាការប្រកាសរើសបុគ្គលិកដែលត្រូវតាមតម្រូវការ ១០០% ដោយមិនបាច់កែប្រែ។',
          },
        },
        exercise: {
          scenario: {
            en: 'Draft a full CTFC prompt for generating a SQL query that finds top 5 highest spending customers this month.',
            km: 'សរសេរ Prompt តាម CTFC ពេញលេញ សម្រាប់បញ្ជា AI ឱ្យបង្កើត SQL Query រកមើលអតិថិជនចំណាយច្រើនជាងគេ ៥ នាក់ក្នុងខែនេះ។',
          },
          targetDomain: 'SQL Prompting',
          hints: [
            {
              en: 'Include PostgreSQL dialect in Context/Constraints.',
              km: 'បញ្ជាក់ប្រភេទ PostgreSQL ក្នុង Context/Constraints។',
            },
          ],
          sampleStrongPrompt:
            '[CONTEXT]: PostgreSQL 15 database with "orders" (id, customer_id, total_amount, created_at) and "customers" (id, name, email) tables. \n[TASK]: Write an optimized SQL query joining customers and orders to find top 5 spenders in August 2026. \n[FORMAT]: SQL code block with brief explanation below. \n[CONSTRAINTS]: Use explicit JOIN syntax and index-friendly date filter.',
        },
        quiz: [
          {
            id: 'm3-l1-q1',
            question: {
              en: 'What does the CTFC framework stand for?',
              km: 'តើអក្សរកាត់ CTFC តំណាងឱ្យអ្វីខ្លះ?',
            },
            options: [
              {
                id: 'a',
                text: {
                  en: 'Context, Task, Format, Constraints',
                  km: 'Context (បរិបទ), Task (ភារកិច្ច), Format (ទម្រង់), Constraints (លក្ខខណ្ឌ)',
                },
                isCorrect: true,
              },
              {
                id: 'b',
                text: {
                  en: 'Code, Testing, Filtering, Control',
                  km: 'Code, Testing, Filtering, Control',
                },
                isCorrect: false,
              },
            ],
            explanation: {
              en: 'CTFC represents Context, Task, Format, and Constraints—the 4 pillars of prompt engineering.',
              km: 'CTFC តំណាងឱ្យ Context, Task, Format, និង Constraints។',
            },
          },
        ],
      },
      {
        id: 'm3-l2',
        moduleId: 'module-3',
        moduleNumber: 3,
        lessonNumber: 2,
        title: {
          en: 'Specificity vs. Vagueness (Side-by-Side Quality Breakdown)',
          km: 'ភាពជាក់លាក់ និងភាពស្រពិចស្រពិល (ការប្រៀបធៀបគុណភាព)',
        },
        durationMinutes: 25,
        difficulty: 'Intermediate',
        description: {
          en: 'Vague prompts force the AI to make assumptions on tone, target audience, format, and depth—inevitably producing generic filler. Specific prompts eliminate ambiguity by explicitly bounding every variable. Learning to catch and replace vague words like "good", "better", "short", or "creative" with precise quantitative metrics is the fastest shortcut to master prompting.',
          km: 'Prompt ស្រពិចស្រពិលបង្ខំឱ្យ AI ស្មានទិសដៅដោយខ្លួនឯង លើសំឡេង ក្រុមគោលដៅ ទម្រង់ និងជម្រៅ—ដែលតែងតែបង្កើតបានជាចម្លើយទូទៅ។ Prompt ជាក់លាក់លុបបំបាត់ភាពមិនច្បាស់លាស់ ដោយកំណត់គ្រប់អថេរទាំងអស់។ ការរៀនផ្លាស់ប្តូរពាក្យស្រពិចស្រពិលដូចជា "ល្អ", "ប្រសើរ", "ខ្លី" ឬ "ច្នៃប្រឌិត" មកជាលក្ខខណ្ឌជាក់លាក់ គឺជាផ្លូវកាត់លឿនបំផុតដើម្បីស្ទាត់ជំនាញ។',
        },
        tutorial: {
          en: `### Replacing Vague Terms with Quantitative Precision

| Vague Term | Precise Master Replacement |
| :--- | :--- |
| *"Make it short"* | *"Limit output to exactly 3 bullet points, maximum 15 words per bullet."* |
| *"Make it sound professional"* | *"Write in the style of a Wall Street Journal technology editor."* |
| *"Explain simply"* | *"Explain using concepts understandable by an 8th grade student."* |
| *"Fix this code"* | *"Identify the memory leak bug in line 14 and refactor using weak references."* |`,
          km: `### ការផ្លាស់ប្តូរពាក្យស្រពិចស្រពិល មកជាពាក្យជាក់លាក់

| ពាក្យស្រពិចស្រពិល | ពាក្យជាក់លាក់កម្រិតអាជីព |
| :--- | :--- |
| *"ធ្វើឱ្យខ្លី"* | *"កំណត់ត្រឹម ៣ ចំណុច ដោយក្នុងមួយចំណុចមិនលើសពី ១៥ ពាក្យ"* |
| *"ធ្វើឱ្យមានលក្ខណៈអាជីព"* | *"សរសេរតាមស្ទីលរបស់អ្នកសារព័ត៌មានសេដ្ឋកិច្ច Wall Street Journal"* |
| *"ពន្យល់ឱ្យងាយយល់"* | *"ពន្យល់ដោយប្រើប្រាស់ពាក្យពេចន៍សមស្របសម្រាប់សិស្សថ្នាក់ទី ៨"* |
| *"កែកូដនេះ"* | *"រកមើលបញ្ហា Memory Leak នៅបន្ទាត់ទី ១៤ ហើយរៀបចំឡើងវិញ"* |`,
        },
        beforeAfter: {
          scenario: {
            en: 'Writing a product announcement post for LinkedIn.',
            km: 'សរសេរ អត្ថបទប្រកាសផលិតផលថ្មី លើ LinkedIn។',
          },
          weakPrompt: 'Write a good LinkedIn post about our new AI search feature.',
          weakOutput: {
            en: 'We are thrilled to announce our new AI search feature! It helps you find things faster and easier. Check it out today!',
            km: 'យើងខ្ញុំមានក្តីរំភើបរីករាយយ៉ាងខ្លាំងក្នុងការប្រកាសមុខងារ AI Search ថ្មី! វាជួយឱ្យអ្នកស្វែងរកបានលឿន។ ចុចមើលថ្ងៃនេះ!',
          },
          improvedPrompt:
            'Draft a high-converting 150-word LinkedIn post announcing our new Semantic AI Search engine. Target Audience: CTOs and Tech Leads. Tone: Authoritative yet energetic. Include: (1) The core problem (keyword search fails on synonyms), (2) The solution (vector search), (3) 3 bulleted key metrics, and (4) CTA link placeholder.',
          improvedOutput: {
            en: `Traditional keyword search is officially broken for enterprise codebases. Searching for "authentication" shouldn't fail just because your docs used "login".

Today, we are launching Semantic AI Search powered by vector embeddings.

⚡ 10x faster document discovery across multi-repo codebases
🎯 99.2% accuracy on natural language contextual queries
🔒 Zero data retention—100% private vector indexing

Stop wasting developer hours hunting down internal docs.

Try the live interactive demo here: [URL_LINK]`,
            km: `ការស្វែងរកតាមពាក្យគន្លឹះបែបចាស់លែងទាន់សម័យទៀតហើយ។ ការស្វែងរកពាក្យ "authentication" មិនគួរទទួលបរាជ័យដោយសារឯកសារប្រើពាក្យ "login" នោះទេ។

ថ្ងៃនេះ យើងខ្ញុំសូមប្រកាសបើកដំណើរការ Semantic AI Search។

⚡ រកឃើញឯកសារលឿនជាងមុន ១០ ដង
🎯 ភាពត្រឹមត្រូវ ៩៩.២% លើសំណួរធម្មជាតិ
🔒 สុវត្ថិភាពទិន្នន័យ ១០០%

ឈប់ចំណាយពេលឥតប្រយោជន៍ក្នុងការស្វែងរកឯកសារទៀតទៅ!

សាកល្បងផ្ទាល់នៅទីនេះ៖ [URL_LINK]`,
          },
          keyImprovements: [
            {
              en: 'Replaced "good post" with exact target persona (CTOs) and length (150 words).',
              km: 'ផ្លាស់ប្តូរ "អត្ថបទល្អ" មកជាក្រុមគោលដៅ (CTOs) និងប្រវែង (១៥០ពាក្យ)។',
            },
            {
              en: 'Specified exact structural components (problem, vector solution, 3 metrics, CTA).',
              km: 'កំណត់រចនាសម្ព័ន្ធច្បាស់លាស់ (បញ្ហា ដំណោះស្រាយ ៣ ស្ថិតិ និង CTA)។',
            },
          ],
        },
        realWorldExample: {
          context: {
            en: 'A customer support manager reducing AI template hallucination by quantifying strict criteria.',
            km: 'អ្នកគ្រប់គ្រងផ្នែកសេវាអតិថិជន កាត់បន្ថយការឆ្លើយខុសរបស់ AI ដោយកំណត់លក្ខខណ្ឌជាក់លាក់។',
          },
          solution: {
            en: 'Changing "Reply nicely to customer" to "Reply in under 100 words, cite policy section 4B, offer a $10 credit voucher code".',
            km: 'ប្តូរពី "ឆ្លើយតបទៅអតិថិជនឱ្យល្អ" ទៅជា "ឆ្លើយតបក្រោម ១០០ ពាក្យ យោងតាមផ្នែក 4B ផ្តល់ប័ណ្ណទឹកប្រាក់ ១០ដុល្លារ"។',
          },
        },
        exercise: {
          scenario: {
            en: 'Transform this vague prompt into a highly specific master prompt: "Write code to validate an email address."',
            km: 'ផ្លាស់ប្តូរ Prompt ស្រពិចស្រពិលនេះ ទៅជា Master Prompt ជាក់លាក់៖ "សរសេរកូដផ្ទៀងផ្ទាត់អាសយដ្ឋានអ៊ីមែល។"',
          },
          targetDomain: 'Validation Engineering',
          hints: [
            {
              en: 'Specify language (TypeScript), validation method (Regex + DNS lookup check), and error response format.',
              km: 'បញ្ជាក់ភាសា (TypeScript) វិធីសាស្ត្រផ្ទៀងផ្ទាត់ (Regex + DNS) និងទម្រង់ Error។',
            },
          ],
          sampleStrongPrompt:
            'Write a production-ready TypeScript function that validates email addresses. Requirements: (1) RFC 5322 Regex syntax compliance, (2) Rejection of disposable email domains (e.g. mailinator), and (3) Returns a boolean with custom validation error message string.',
        },
        quiz: [
          {
            id: 'm3-l2-q1',
            question: {
              en: 'Why should you avoid using words like "short" or "creative" in your prompts?',
              km: 'ហេតុអ្វីបានជាអ្នកគួរចៀសវាងការប្រើពាក្យដូចជា "ខ្លី" ឬ "ច្នៃប្រឌិត" ក្នុង Prompt របស់អ្នក?',
            },
            options: [
              {
                id: 'a',
                text: {
                  en: 'They are subjective terms that force the AI to make random guesses about your intent.',
                  km: 'ពួកវាជាពាក្យអរូបី ដែលបង្ខំឱ្យ AI ស្មានទិសដៅដោយប្រហែលៗ។',
                },
                isCorrect: true,
              },
              {
                id: 'b',
                text: {
                  en: 'They cause the server to crash.',
                  km: 'ពួកវាធ្វើឱ្យ Server ខូច។',
                },
                isCorrect: false,
              },
            ],
            explanation: {
              en: 'Subjective words lack mathematical boundaries. Quantify your constraints instead.',
              km: 'ពាក្យអរូបីគ្មានដែនកំណត់ច្បាស់លាស់ឡើយ។ ត្រូវប្រើលក្ខខណ្ឌជាក់លាក់ជំនួសវិញ។',
            },
          },
        ],
      },
      {
        id: 'm3-l3',
        moduleId: 'module-3',
        moduleNumber: 3,
        lessonNumber: 3,
        title: {
          en: 'Few-Shot Prompting & Persona/Role Assignment',
          km: 'ការប្រើប្រាស់ Few-Shot Prompting និងការកំណត់តួនាទី Persona',
        },
        durationMinutes: 30,
        difficulty: 'Intermediate',
        description: {
          en: 'Few-shot prompting provides the AI model with 1 to 3 concrete input-output examplars directly inside the prompt prior to requesting a final output. Showing rather than telling eliminates formatting guesswork. Paired with explicit Persona Assignment ("Act as an elite Cybersecurity Analyst"), few-shot prompting instantly primes the neural network to output domain-specialized responses with high precision.',
          km: 'Few-Shot Prompting ផ្តល់ឱ្យ AI នូវឧទាហរណ៍ជាក់ស្តែងចំនួន ១ ទៅ ៣ (Input-Output) ដោយផ្ទាល់ក្នុង Prompt មុនពេលទាមទារចម្លើយចុងក្រោយ។ ការបង្ហាញឧទាហរណ៍ជាក់ស្តែង ជួយលុបបំបាត់ការស្មានទម្រង់ចម្លើយ។ នៅពេលបូកផ្សំជាមួយ Persona Assignment ("ដើរតួជាអ្នកវិភាគ សុវត្ថិភាពអ៊ីនធឺណិត") វាធ្វើឱ្យ AI បញ្ចេញចម្លើយដែលមានកម្រិតជំនាញខ្ពស់ភ្លាមៗ។',
        },
        tutorial: {
          en: `### 1. Few-Shot Pattern Structure

\`\`\`markdown
You are a sentiment categorization assistant.

[EXAMPLE 1]
Input: "The package arrived 3 days late and was crushed."
Output: {"sentiment": "NEGATIVE", "category": "LOGISTICS", "urgency": "HIGH"}

[EXAMPLE 2]
Input: "App interface is intuitive and setup took 2 minutes!"
Output: {"sentiment": "POSITIVE", "category": "UX", "urgency": "LOW"}

[ACTUAL TASK]
Input: "System crashed during payment checkout step."
Output:
\`\`\``,
          km: `### 1. រចនាសម្ព័ន្ធគំរូ Few-Shot

\`\`\`markdown
អ្នកគឺជាជំនួយការបែកចែកប្រភេទ Sentiment។

[ឧទាហរណ៍ ១]
Input: "អីវ៉ាន់មកដល់យឺត ៣ ថ្ងៃ ហើយប្រអប់បាក់បែក។"
Output: {"sentiment": "NEGATIVE", "category": "LOGISTICS", "urgency": "HIGH"}

[ឧទាហរណ៍ ២]
Input: "កម្មវិធីងាយស្រួលប្រើប្រាស់ ហើយការដំឡើងប្រើពេលតែ ២ នាទី!"
Output: {"sentiment": "POSITIVE", "category": "UX", "urgency": "LOW"}

[ភារកិច្ចជាក់ស្តែង]
Input: "ប្រព័ន្ធគាំង ពេលកំពុងទូទាត់ប្រាក់។"
Output:
\`\`\``,
        },
        beforeAfter: {
          scenario: {
            en: 'Converting informal Khmer/English customer chat logs into structured support ticket JSON.',
            km: 'បម្លែងអត្ថបទសន្ទនារបស់អតិថិជន ទៅជា JSON Support Ticket។',
          },
          weakPrompt: 'Convert this chat to JSON ticket: "Hi admin, app keep freezing when upload photo."',
          weakOutput: {
            en: '{"issue": "app freezing", "type": "photo"}',
            km: '{"issue": "app freezing", "type": "photo"}',
          },
          improvedPrompt: `Act as a Lead IT Helpdesk Dispatcher. Convert customer chat logs into valid JSON following these exact examples:

[EXAMPLE 1]
Input: "Can't log in password wrong"
Output: {"ticket_id": "TCK-101", "category": "AUTH", "severity": "MEDIUM", "action": "Trigger Password Reset"}

[EXAMPLE 2]
Input: "App crashed during photo upload step"
Output: {"ticket_id": "TCK-102", "category": "MEDIA_UPLOAD", "severity": "HIGH", "action": "Escalate to Mobile Dev Team"}

[INPUT]: "Hi admin, payment completed but premium feature still locked."
[OUTPUT]:`,
          improvedOutput: {
            en: `{"ticket_id": "TCK-103", "category": "BILLING_ENTITLEMENT", "severity": "CRITICAL", "action": "Verify Webhook Transaction & Force Entitlement Sync"}`,
            km: `{"ticket_id": "TCK-103", "category": "BILLING_ENTITLEMENT", "severity": "CRITICAL", "action": "Verify Webhook Transaction & Force Entitlement Sync"}`,
          },
          keyImprovements: [
            {
              en: 'Used 2 clear few-shot input-output examples.',
              km: 'ប្រើប្រាស់ឧទាហរណ៍ Few-Shot ចំនួន ២ យ៉ាងច្បាស់លាស់។',
            },
            {
              en: 'Forced JSON output structure without markdown extra wrapping.',
              km: 'បង្ខំឱ្យបញ្ចេញទម្រង់ JSON ត្រឹមត្រូវ។',
            },
          ],
        },
        realWorldExample: {
          context: {
            en: 'A data pipeline engineering team cleaning unstructured phone numbers into standardized E.164 international formats.',
            km: 'ក្រុមវិស្វករទិន្នន័យ កែសម្រួលលេខទូរស័ព្ទឱ្យត្រូវតាមស្តង់ដារអន្តរជាតិ E.164។',
          },
          solution: {
            en: 'Providing 3 few-shot formatting examples allowed the model to parse messy numbers like "(+855) 012-345-678" to "+85512345678" with 100% accuracy.',
            km: 'ការផ្តល់ឧទាហរណ៍ Few-Shot ចំនួន ៣ ធ្វើឱ្យ AI បម្លែងលេខទូរស័ព្ទស្មុគស្មាញបានត្រឹមត្រូវ ១០០%។',
          },
        },
        exercise: {
          scenario: {
            en: 'Draft a few-shot prompt that converts product feature descriptions into concise 3-word marketing slogans.',
            km: 'សរសេរ Prompt បែប Few-Shot ដែលបម្លែងការពិពណ៌នាផលិតផល ទៅជាពាក្យស្លោកទីផ្សារ ៣ ពាក្យ។',
          },
          targetDomain: 'Copywriting Slogans',
          hints: [
            {
              en: 'Include 2 input-output examples demonstrating 3-word slogan output.',
              km: 'បញ្ចូលឧទាហរណ៍ Few-Shot ចំនួន ២ ដែលបង្ហាញពីពាក្យស្លោក ៣ ពាក្យ។',
            },
          ],
          sampleStrongPrompt:
            'Convert product features into punchy 3-word slogans. \n\nEx 1: "Noise cancelling headphones" -> "Pure Silence Instant"\nEx 2: "Ultra thin fast laptop" -> "Speed Without Weight"\n\nInput: "100-hour battery life wireless solar power bank"\nOutput:',
        },
        quiz: [
          {
            id: 'm3-l3-q1',
            question: {
              en: 'What is "Few-Shot Prompting"?',
              km: 'តើអ្វីទៅជា "Few-Shot Prompting"?',
            },
            options: [
              {
                id: 'a',
                text: {
                  en: 'Providing 1 to 3 concrete input-output examples inside the prompt to guide style and format.',
                  km: 'ការផ្តល់ឧទាហរណ៍ជាក់ស្តែង ១ ទៅ ៣ ក្នុង Prompt ដើម្បីតម្រង់ទិសស្ទីល និងទម្រង់ចម្លើយ។',
                },
                isCorrect: true,
              },
              {
                id: 'b',
                text: {
                  en: 'Prompting the AI late at night.',
                  km: 'ការសរសេរ Prompt នៅពេលយប់ជ្រៅ។',
                },
                isCorrect: false,
              },
            ],
            explanation: {
              en: 'Few-shot prompting uses exemplar patterns to anchor the LLMs output format.',
              km: 'Few-shot prompting ប្រើប្រាស់ឧទាហរណ៍គំរូដើម្បីកំណត់ទម្រង់ចម្លើយរបស់ AI។',
            },
          },
        ],
      },
    ],
  },
];

import { AI_PROMPT_MODULES_ADVANCED } from './aiPromptModulesAdvanced';
import { AI_PROMPT_MODULES_USECASE_CAPSTONE } from './aiPromptModulesUseCaseAndCapstone';

export const AI_PROMPT_MODULES: AIPromptModule[] = [
  ...AI_PROMPT_MODULES_BASE,
  ...AI_PROMPT_MODULES_ADVANCED,
  ...AI_PROMPT_MODULES_USECASE_CAPSTONE,
];

// Helper to get total counts dynamically
export const getAllAIPromptLessons = () => {
  return AI_PROMPT_MODULES.flatMap((m) => m.lessons);
};
