import { BackendCourse } from '../backendCoursesHubData';

export const PYTHON_BACKEND_COURSE_DATA: BackendCourse = {
  id: 'python',
  slug: 'python',
  title: {
    en: 'Python — Language for Backend & APIs',
    km: 'ភាសា Python សម្រាប់ Backend និង API'
  },
  iconName: 'python',
  type: 'language',
  categoryId: 'languages',
  difficulty: 'Beginner',
  shortDescription: {
    en: 'The language behind Django, Flask, FastAPI, and most of the modern data/AI stack — learn it first, build real APIs next.',
    km: 'ភាសាដែលនៅពីក្រោយ Django, Flask, FastAPI និងភាគច្រើននៃ stack ទិន្នន័យ/AI សម័យទំនើប — រៀនវាមុន រួចទើបទៅសាង API ពិតប្រាកដ។'
  },
  summary: {
    en: 'Python is one of the most widely used programming languages in the world, known for its clean, readable syntax and enormous ecosystem. On the backend, Python powers frameworks like Django (used by Instagram and Spotify), Flask, and FastAPI, and it is also the dominant language for data science and AI work — meaning Python backend skills open doors well beyond traditional web APIs. This course teaches Python as a standalone language, with no framework involved yet, so you build a solid foundation before moving into Django. You will learn variables, control flow, functions, data structures, object-oriented programming, and how to build and consume simple web APIs using nothing but Python standard library. By the end, you will be comfortable reading and writing real Python code and ready to move directly into the Django course to build production-grade backends.',
    km: 'Python ជាភាសាសរសេរកម្មវិធីមួយក្នុងចំណោមភាសាដែលប្រើប្រាស់ទូលំទូលាយបំផុតក្នុងពិភពលោក ល្បីឈ្មោះដោយសារវាក្សរសើមស្អាត អានយល់ស្រួល និងប្រព័ន្ធអេកូឡូស៊ីធំធេង។ លើផ្នែក backend, Python ដំណើរការ framework ដូចជា Django (ប្រើដោយ Instagram និង Spotify), Flask និង FastAPI ហើយវាក៏ជាភាសាគ្រប់គ្រងសម្រាប់ការងារវិទ្យាសាស្ត្រទិន្នន័យ និង AI ផងដែរ — មានន័យថាជំនាញ Python backend បើកទ្វារឱ្យលើសពី API គេហទំព័រធម្មតា។ វគ្គសិក្សានេះបង្រៀន Python ជាភាសាដោយឡែក គ្មាន framework ចូលរួមនៅឡើយ ដើម្បីឱ្យអ្នកមានមូលដ្ឋានគ្រឹះរឹងមាំមុននឹងចូលទៅ Django។ អ្នកនឹងសិក្សា variables, control flow, functions, data structures, object-oriented programming និងរបៀបសាង និងប្រើប្រាស់ web API សាមញ្ញដោយប្រើតែ Python standard library។ ចប់វគ្គនេះ អ្នកនឹងអាចអាន និងសរសេរកូដ Python ពិតប្រាកដបាន ហើយត្រៀមខ្លួនចូលទៅវគ្គ Django ដើម្បីសាង backend កម្រិតផលិតកម្មពិតប្រាកដ។'
  },
  estimatedHours: 18,
  lessonCount: 30,
  usedFor: 'Django, Flask, FastAPI, AI/ML Integrations, Data Pipelines',
  realWorldApps: ['Instagram Backend', 'Spotify Infrastructure', 'Dropbox Storage Engine', 'OpenAI API Middleware'],
  prerequisites: {
    en: 'None — this is a true beginner course. No prior programming experience required, though any prior coding exposure (any language) will help you move faster.',
    km: 'គ្មានទេ — នេះជាវគ្គសិក្សាសម្រាប់អ្នកចាប់ផ្តើមដំបូងពិតប្រាកដ។ មិនទាមទារបទពិសោធន៍សរសេរកូដពីមុនមកទេ ប៉ុន្តែប្រសិនបើមានបទពិសោធន៍ខ្លះៗនឹងជួយឱ្យអ្នករៀនបានលឿនជាងមុន។'
  },
  whatYouWillLearn: {
    en: [
      'Set up Python, a virtual environment, and pip for managing packages',
      'Use variables, data types, and Python\'s dynamic typing',
      'Write control flow logic with if/else and loops',
      'Build functions, including default arguments, *args/**kwargs, and lambdas',
      'Work with Python\'s core data structures: list, dict, tuple, and set',
      'Apply object-oriented programming: classes, inheritance, and key "dunder" methods',
      'Handle errors safely with try/except',
      'Read and write JSON data',
      'Build a simple web API using Python\'s built-in http.server module, with no framework',
      'Make outgoing HTTP requests to a public API using the requests library',
      'Read and understand real Python code found in backend projects'
    ],
    km: [
      'ដំឡើង Python, Virtual Environment និង pip សម្រាប់គ្រប់គ្រង Packages',
      'ប្រើប្រាស់ Variables, Data types និង Dynamic typing របស់ Python',
      'សរសេរ Control flow logic ដោយប្រើ if/else និង loops',
      'បង្កើត Functions រួមមាន Default arguments, *args/**kwargs និង Lambda functions',
      'ប្រើប្រាស់ Data structures គ្រឹះរបស់ Python: List, Dict, Tuple, និង Set',
      'អនុវត្ត Object-Oriented Programming: Classes, Inheritance និង Dunder methods',
      'គ្រប់គ្រង Errors ដោយសុវត្ថិភាពជាមួយ try/except',
      'អាន និងសរសេរទិន្នន័យ JSON',
      'បង្កើត Web API សាមញ្ញដោយប្រើ module http.server ដើមរបស់ Python ដោយគ្មាន framework',
      'ផ្ញើ Request ទៅកាន់ External Public API ដោយប្រើប្រាស់ requests library',
      'អាន និងយល់ដឹងពីកូដ Python ពិតប្រាកដក្នុងគម្រោង Backend'
    ]
  },
  toolsAndSetup: {
    en: '1. Install Python 3 (python.org/downloads) — verify with python3 --version\n2. Create a virtual environment for each project: python3 -m venv venv, then activate it (source venv/bin/activate on Mac/Linux, venv\\Scripts\\activate on Windows)\n3. Recommended: install VS Code + the official Python extension\n4. Create your first file: hello.py, run it with python3 hello.py',
    km: '១. ដំឡើង Python 3 (python.org/downloads) — ផ្ទៀងផ្ទាត់ជាមួយ python3 --version\n២. បង្កើត Virtual Environment សម្រាប់គម្រោងនីមួយៗ: python3 -m venv venv រួច Activate (source venv/bin/activate លើ Mac/Linux, venv\\Scripts\\activate លើ Windows)\n៣. អនុសាសន៍: ដំឡើង VS Code + ផ្លូវការ Python Extension\n៤. បង្កើតឯកសារដំបូង: hello.py រួចដំណើរការវាជាមួយ python3 hello.py'
  },
  cheatSheet: [
    {
      concept: 'Virtual Environment & Pip',
      code: `python3 -m venv venv\nsource venv/bin/activate  # macOS/Linux\n# venv\\Scripts\\activate   # Windows\npip install requests`,
      explanation: {
        en: 'Creates an isolated Python environment and installs external dependencies cleanly.',
        km: 'បង្កើត បរិស្ថានដាច់ដោយឡែកសម្រាប់ Python និងដំឡើង Packages ខាងក្រៅដោយសុវត្ថិភាព។'
      }
    },
    {
      concept: 'Dict & List Comprehension',
      code: `numbers = [1, 2, 3, 4, 5]\nevens = [n for n in numbers if n % 2 == 0]\nsquares = {n: n**2 for n in numbers}`,
      explanation: {
        en: 'Concise, readable signature syntax for constructing lists and dictionaries.',
        km: 'Syntax ពិសេសរបស់ Python សម្រាប់បង្កើត List និង Dictionary ដោយខ្លី និងអានស្រួល។'
      }
    },
    {
      concept: 'Class & Dunder Methods',
      code: `class Note:\n    def __init__(self, title: str):\n        self.title = title\n    def __str__(self):\n        return f"Note: {self.title}"`,
      explanation: {
        en: 'Defines an object-oriented class with string representation dunder method.',
        km: 'កំណត់ Class តាមបែប OOP ជាមួយ Dunder Method សម្រាប់បង្ហាញអត្ថបទ Readable។'
      }
    },
    {
      concept: 'Built-in http.server Handler',
      code: `from http.server import BaseHTTPRequestHandler, HTTPServer\nimport json\n\nclass Handler(BaseHTTPRequestHandler):\n    def do_GET(self):\n        self.send_response(200)\n        self.send_header('Content-Type', 'application/json')\n        self.end_headers()\n        self.wfile.write(json.dumps({"status": "ok"}).encode())`,
      explanation: {
        en: 'Lightweight web server endpoint built entirely with Python standard library.',
        km: 'បង្កើត Web Server Endpoint ដោយប្រើប្រាស់តែ Python Standard Library ដើម។'
      }
    }
  ],
  quiz: [
    {
      id: 'py-q1',
      question: {
        en: 'What is the purpose of creating a virtual environment in Python?',
        km: 'តើការបង្កើត Virtual Environment ក្នុង Python មានគោលបំណងអ្វី?'
      },
      options: [
        { id: '1', text: { en: 'To isolate project dependencies and avoid global package conflicts', km: 'ដើម្បីបែងចែក Packages ដាច់ដោយឡែក និងចៀសវាងការជាន់គ្នានៃ Package Versions' }, isCorrect: true },
        { id: '2', text: { en: 'To compile Python code into binary C executable', km: 'ដើម្បី បំប្លែង Python កូដទៅជា C Executable' }, isCorrect: false },
        { id: '3', text: { en: 'To speed up HTTP request latency automatically', km: 'ដើម្បីបង្កើនល្បឿន HTTP Request ស្វ័យប្រវត្តិ' }, isCorrect: false },
        { id: '4', text: { en: 'To replace the need for Django and FastAPI', km: 'ដើម្បីជំនួសការប្រើប្រាស់ Django និង FastAPI' }, isCorrect: false }
      ],
      explanation: {
        en: 'Virtual environments (venv) keep dependencies required by different projects separate by creating isolated python env directories.',
        km: 'Virtual Environments (venv) រក្សាទុក Packages សម្រាប់គម្រោងនីមួយៗដាច់ដោយឡែកពីគ្នា។'
      }
    },
    {
      id: 'py-q2',
      question: {
        en: 'Which Python dunder method controls string representation when printing an object?',
        km: 'តើ Python Dunder Method មួយណាដែលគ្រប់គ្រងការបង្ហាញ String ពេល print() Object?'
      },
      options: [
        { id: '1', text: { en: '__str__', km: '__str__' }, isCorrect: true },
        { id: '2', text: { en: '__init__', km: '__init__' }, isCorrect: false },
        { id: '3', text: { en: '__main__', km: '__main__' }, isCorrect: false },
        { id: '4', text: { en: '__call__', km: '__call__' }, isCorrect: false }
      ],
      explanation: {
        en: '__str__ defines the human-readable string representation of a class instance.',
        km: '__str__ កំណត់ការបង្ហាញអត្ថបទ readable សម្រាប់អ្នកប្រើប្រាស់ពេល print(object)។'
      }
    }
  ],
  capstoneProject: {
    id: 'python-simple-notes-api',
    slug: 'python-simple-notes-api',
    title: {
      en: 'Simple Notes API',
      km: 'Simple Notes API ជាមួយ Python Standard Library'
    },
    description: {
      en: 'A small, framework-free web API built with Python\'s built-in http.server module that lets a client create, list, and delete notes using JSON over HTTP, storing notes in a JSON file.',
      km: 'Web API សាមញ្ញដែលគ្មាន framework បង្កើតឡើងដោយប្រើប្រាស់ module http.server ដើមរបស់ Python ដែលអនុញ្ញាតឱ្យ Client បង្កើត (POST), មើលបញ្ជី (GET) និងលុប (DELETE) កំណត់ត្រា ដោយរក្សាទុកក្នុង JSON File។'
    },
    featureChecklist: {
      en: [
        'GET /notes — returns all notes as a JSON array',
        'POST /notes — accepts a JSON body (title, content) and saves a new note',
        'DELETE /notes/<id> — removes a note by its ID',
        'Notes persisted to a JSON file so they survive server restarts',
        'Basic validation: reject a POST request missing title or content with a clear JSON error message'
      ],
      km: [
        'GET /notes — ត្រឡប់មកវិញនូវបញ្ជី Notes ទាំងអស់ជា JSON Array',
        'POST /notes — ទទួលយក JSON Body (title, content) ហើយរក្សាទុក Note ថ្មី',
        'DELETE /notes/<id> — លុប Note ចេញតាមរយៈ ID របស់វា',
        'រក្សាទុកទិន្នន័យក្នុង JSON File ដើម្បីឱ្យព័ត៌មាននៅដដែលពេល Restart Server',
        'ការគ្រប់គ្រង Validation សាមញ្ញ: បដិសេធ POST Request ដែលខ្វះ title ឬ content ជាមួយ Error message ច្បាស់លាស់'
      ]
    },
    starterCode: {
      language: 'python',
      code: `from http.server import BaseHTTPRequestHandler, HTTPServer
import json
import os

NOTES_FILE = "notes.json"

def load_notes():
    if not os.path.exists(NOTES_FILE):
        return []
    with open(NOTES_FILE, "r") as f:
        try:
            return json.load(f)
        except json.JSONDecodeError:
            return []

def save_notes(notes):
    with open(NOTES_FILE, "w") as f:
        json.dump(notes, f, indent=2)

class NotesAPIHandler(BaseHTTPRequestHandler):
    def _set_json_headers(self, status=200):
        self.send_response(status)
        self.send_header('Content-Type', 'application/json')
        self.end_headers()

    def do_GET(self):
        if self.path == "/notes":
            notes = load_notes()
            self._set_json_headers(200)
            self.wfile.write(json.dumps(notes).encode())
        else:
            self._set_json_headers(404)
            self.wfile.write(json.dumps({"error": "Endpoint not found"}).encode())

if __name__ == "__main__":
    server = HTTPServer(("localhost", 8000), NotesAPIHandler)
    print("Simple Notes API running on http://localhost:8000")
    server.serve_forever()`
    },
    finalCode: `from http.server import BaseHTTPRequestHandler, HTTPServer
import json
import os
import time

NOTES_FILE = "notes.json"

class Note:
    def __init__(self, note_id, title, content):
        self.id = note_id
        self.title = title
        self.content = content

    def to_dict(self):
        return {"id": self.id, "title": self.title, "content": self.content}

    def __str__(self):
        return f"Note #{self.id}: {self.title}"

def load_notes():
    if not os.path.exists(NOTES_FILE):
        return []
    with open(NOTES_FILE, "r") as f:
        try:
            return json.load(f)
        except json.JSONDecodeError:
            return []

def save_notes(notes):
    with open(NOTES_FILE, "w") as f:
        json.dump(notes, f, indent=2)

class NotesAPIHandler(BaseHTTPRequestHandler):
    def _set_json_headers(self, status=200):
        self.send_response(status)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()

    def do_GET(self):
        if self.path == "/notes":
            notes = load_notes()
            self._set_json_headers(200)
            self.wfile.write(json.dumps(notes).encode())
        elif self.path == "/health":
            self._set_json_headers(200)
            self.wfile.write(json.dumps({"status": "ok", "service": "Notes API"}).encode())
        else:
            self._set_json_headers(404)
            self.wfile.write(json.dumps({"error": "Route not found"}).encode())

    def do_POST(self):
        if self.path == "/notes":
            content_length = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(content_length).decode('utf-8')
            try:
                data = json.loads(body)
            except json.JSONDecodeError:
                self._set_json_headers(400)
                self.wfile.write(json.dumps({"error": "Invalid JSON body"}).encode())
                return

            title = data.get("title")
            content = data.get("content")

            if not title or not content:
                self._set_json_headers(400)
                self.wfile.write(json.dumps({"error": "Both 'title' and 'content' fields are required"}).encode())
                return

            notes = load_notes()
            note_id = int(time.time() * 1000)
            new_note = Note(note_id, title, content)

            notes.append(new_note.to_dict())
            save_notes(notes)

            self._set_json_headers(201)
            self.wfile.write(json.dumps(new_note.to_dict()).encode())
        else:
            self._set_json_headers(404)
            self.wfile.write(json.dumps({"error": "Route not found"}).encode())

    def do_DELETE(self):
        if self.path.startswith("/notes/"):
            try:
                note_id = int(self.path.split("/")[2])
            except (IndexError, ValueError):
                self._set_json_headers(400)
                self.wfile.write(json.dumps({"error": "Invalid Note ID"}).encode())
                return

            notes = load_notes()
            updated_notes = [n for n in notes if n.get("id") != note_id]

            if len(notes) == len(updated_notes):
                self._set_json_headers(404)
                self.wfile.write(json.dumps({"error": f"Note with ID {note_id} not found"}).encode())
                return

            save_notes(updated_notes)
            self._set_json_headers(200)
            self.wfile.write(json.dumps({"message": f"Note {note_id} deleted successfully"}).encode())
        else:
            self._set_json_headers(404)
            self.wfile.write(json.dumps({"error": "Route not found"}).encode())

if __name__ == "__main__":
    server = HTTPServer(("localhost", 8000), NotesAPIHandler)
    print("Simple Notes API running on http://localhost:8000...")
    server.serve_forever()`,
    sampleRequests: [
      {
        title: 'GET /notes',
        method: 'GET',
        url: '/notes',
        responseStatus: 200,
        responseBody: JSON.stringify([
          { id: 1700000000000, title: 'Groceries', content: 'Buy rice and eggs' }
        ], null, 2)
      },
      {
        title: 'POST /notes',
        method: 'POST',
        url: '/notes',
        body: JSON.stringify({ title: 'Study Python', content: 'Finish Module 7 of Python Backend course' }, null, 2),
        responseStatus: 201,
        responseBody: JSON.stringify({ id: 1700000005000, title: 'Study Python', content: 'Finish Module 7 of Python Backend course' }, null, 2)
      },
      {
        title: 'DELETE /notes/1700000000000',
        method: 'DELETE',
        url: '/notes/1700000000000',
        responseStatus: 200,
        responseBody: JSON.stringify({ message: 'Note 1700000000000 deleted successfully' }, null, 2)
      }
    ]
  },
  modules: [
    // Module 1 — Introduction & Setup (3 lessons)
    {
      moduleNumber: 1,
      title: {
        en: 'Module 1 — Introduction & Setup',
        km: 'មេរៀនទី ១ — ការណែនាំ និងការរៀបចំ បរិស្ថានកូដ'
      },
      description: {
        en: 'Understand Python\'s role in modern tech, set up your development environment with venv, and run your first program.',
        km: 'យល់ដឹងពីតួនាទីរបស់ Python ក្នុងពិភពបច្ចេកវិទ្យា រៀបចំបរិស្ថាន venv និងសរសេរកម្មវិធីដំបូង។'
      },
      lessons: [
        {
          id: 'python-1-1',
          slug: 'python-intro-backend-data-ai',
          moduleNumber: 1,
          lessonNumberInModule: 1,
          title: {
            en: '1.1 What is Python and why it dominates backend, data, and AI work',
            km: '១.១ តើអ្វីជា Python និងហេតុអ្វីវាគ្របដណ្តប់លើ Backend, Data និង AI'
          },
          durationMinutes: 15,
          difficulty: 'Beginner',
          objective: {
            en: 'Explain what Python is and why it\'s used across backend web frameworks, data science, and AI.',
            km: 'ពន្យល់ពីអ្វីជា Python និងហេតុអ្វីបានជាគេប្រើប្រាស់វាសម្រាប់ Backend Web Frameworks, Data Science និង AI។'
          },
          explanation: {
            en: 'Python is a general-purpose, high-level programming language created by Guido van Rossum and first released in 1991, designed around a philosophy of readability — Python code is famously close to plain English, using indentation instead of curly braces to define blocks of code. This readability, combined with a massive ecosystem of libraries, is why Python became the language of choice for web backends (Django, Flask, FastAPI), data science (pandas, NumPy), and AI/machine learning (PyTorch, TensorFlow) all at once. Learning Python here, without a framework yet, means you build a foundation that\'s useful no matter which of those directions you take it in later.',
            km: 'Python ជាភាសាសរសេរកម្មវិធីទូទៅកម្រិតខ្ពស់ បង្កើតឡើងដោយ Guido van Rossum ហើយចេញផ្សាយដំបូងនៅឆ្នាំ 1991 រចនាឡើងជុំវិញទស្សនវិជ្ជានៃការអានយល់ស្រួល — កូដ Python ល្បីឈ្មោះថាជិតទៅនឹងភាសាអង់គ្លេសធម្មតា ដោយប្រើ indentation (ចន្លោះ) ជំនួសក្រចកកួច {} ដើម្បីកំណត់ប្លុកកូដ។ ភាពងាយស្រួលអាននេះ រួមផ្សំជាមួយប្រព័ន្ធអេកូឡូស៊ី library ធំធេង គឺជាមូលហេតុដែល Python ក្លាយជាភាសាដែលគេជ្រើសរើសសម្រាប់ backend គេហទំព័រ (Django, Flask, FastAPI), វិទ្យាសាស្ត្រទិន្នន័យ (pandas, NumPy) និង AI/machine learning (PyTorch, TensorFlow) ទាំងអស់ក្នុងពេលតែមួយ។ ការរៀន Python នៅទីនេះ គ្មាន framework នៅឡើយ មានន័យថាអ្នកសាងមូលដ្ឋានគ្រឹះដែលមានប្រយោជន៍ មិនថាទិសដៅណាមួយក្នុងចំណោមទាំងនេះដែលអ្នកយកទៅបន្តនាពេលក្រោយ។'
          },
          tutorial: {
            en: 'Run a simple print function in Python:',
            km: 'សាកល្បងដំណើរការ function print សាមញ្ញក្នុង Python៖'
          },
          starterCode: {
            language: 'python',
            code: `print("Hello, Python!")`
          },
          practiceExercise: {
            question: {
              en: 'Change the text inside print() to introduce yourself.',
              km: 'ផ្លាស់ប្តូរអត្ថបទក្នុង print() ដើម្បីណែនាំខ្លួនអ្នក។'
            },
            solution: `print("Hello, my name is Seyha and I am learning Python backend!")`
          },
          tips: {
            en: 'Avoid mixing tabs and spaces for indentation — Python uses exact indentation (4 spaces per level) to define scope.',
            km: 'ចៀសវាងការច្របូកច្របល់រវាង Tabs និង Spaces ក្នុងការកំណត់ Indentation — Python ប្រើប្រាស់ 4 spaces សម្រាប់ប្លុកកូដ។'
          },
          realWorldExample: {
            title: {
              en: 'Real-World Usage',
              km: 'ការប្រើប្រាស់ក្នុងពិភពពិត'
            },
            description: {
              en: 'Instagram backend, Spotify infrastructure, and NASA data analysis pipelines all rely heavily on Python.',
              km: 'Backend របស់ Instagram, ហេដ្ឋារចនាសម្ព័ន្ធ Spotify និងប្រព័ន្ធវិភាគទិន្នន័យ NASA ទាំងអស់សុទ្ធតែពឹងផ្អែកលើ Python។'
            }
          }
        },
        {
          id: 'python-1-2',
          slug: 'python-install-venv-pip',
          moduleNumber: 1,
          lessonNumberInModule: 2,
          title: {
            en: '1.2 Installing Python, virtual environments, and pip',
            km: '១.២ ការដំឡើង Python, Virtual Environments និង pip'
          },
          durationMinutes: 15,
          difficulty: 'Beginner',
          objective: {
            en: 'Set up a working Python environment, including a virtual environment, so you can write and run code cleanly.',
            km: 'រៀបចំបរិស្ថានកូដ Python រួមទាំង Virtual Environment ដើម្បីសរសេរ និងដំណើរការកូដដោយស្អាតស្អំ។'
          },
          explanation: {
            en: 'A virtual environment is an isolated space for a Python project\'s dependencies, so packages installed for one project don\'t conflict with another. This is a core habit in real Python backend work — every serious Python project uses one, and you\'ll use this exact same setup again in the Django course.',
            km: 'Virtual environment គឺជាកន្លែងដាច់ដោយឡែកសម្រាប់ Packages របស់គម្រោង Python ដើម្បីការពារកុំឱ្យ Package ក្នុងគម្រោងមួយជាន់ជាមួយគម្រោងមួយទៀត។ នេះជាទម្លាប់សំខាន់បំផុតក្នុង Python backend ពិតប្រាកដ។'
          },
          tutorial: {
            en: 'Terminal steps to set up Python virtual environment:',
            km: 'ជំហានក្នុង Terminal សម្រាប់រៀបចំ Python Virtual Environment៖'
          },
          starterCode: {
            language: 'bash',
            code: `# Step 1: Check python version
python3 --version

# Step 2: Create virtual environment
python3 -m venv venv

# Step 3: Activate environment
# On Mac/Linux:
source venv/bin/activate
# On Windows:
# venv\\Scripts\\activate

# Step 4: Verify pip inside venv
pip --version`
          },
          practiceExercise: {
            question: {
              en: 'Write the command to activate a virtual environment named "env" on macOS/Linux.',
              km: 'សរសេរ Command សម្រាប់ Activate Virtual Environment ដែលមានឈ្មោះថា "env" លើ macOS/Linux។'
            },
            solution: `source env/bin/activate`
          },
          tips: {
            en: 'Forgetting to activate the virtual environment before installing packages means packages go to global Python instead of project-isolated scope.',
            km: 'ប្រសិនបើភ្លេច Activate Virtual Environment មុនពេល Install Packages នោះ Packages នឹងត្រូវដំឡើងចូលទៅក្នុង Global Python ជំនួសវិញ។'
          }
        },
        {
          id: 'python-1-3',
          slug: 'python-first-program-hello',
          moduleNumber: 1,
          lessonNumberInModule: 3,
          title: {
            en: '1.3 Your first program — "Hello, Python!"',
            km: '១.៣ កម្មវិធីដំបូងរបស់អ្នក — "Hello, Python!"'
          },
          durationMinutes: 15,
          difficulty: 'Beginner',
          objective: {
            en: 'Write, run, and understand your first complete Python program with variables and string interpolation.',
            km: 'សរសេរ ដំណើរការ និងយល់ដឹងពីកម្មវិធី Python ដំបូងរបស់អ្នកជាមួយ Variables និង String Interpolation (f-strings)។'
          },
          explanation: {
            en: 'Python has no main() function requirement for a simple script — code runs top to bottom directly in the file. Python also infers variable types automatically, with no type declarations required (though optional type hints exist and are common in professional code).',
            km: 'Python មិនទាមទារ function main() សម្រាប់ script សាមញ្ញទេ — កូដដំណើរការពីលើចុះក្រោមដោយផ្ទាល់។ Python ក៏ស្វែងយល់ពី Type របស់ Variable ដោយស្វ័យប្រវត្តិផងដែរ។'
          },
          tutorial: {
            en: 'Declare variables and output formatted strings:',
            km: 'ប្រកាស Variable និងបង្ហាញ អត្ថបទដោយប្រើ f-string៖'
          },
          starterCode: {
            language: 'python',
            code: `name = "Seyha"
age = 25
print(f"Hello, my name is {name} and I am {age} years old.")`
          },
          practiceExercise: {
            question: {
              en: 'Declare your favorite framework in a variable and print a sentence using an f-string.',
              km: 'ប្រកាស Variable រក្សាទុកឈ្មោះ Framework ដែលអ្នកចូលចិត្ត រួច print វាចេញដោយប្រើ f-string។'
            },
            solution: `favorite_framework = "Django"
print(f"My favorite framework is {favorite_framework}!")`
          },
          tips: {
            en: 'f-strings (f"...{var}...") are the modern, standard way to format strings in Python — fast and easy to read.',
            km: 'f-strings (f"...{var}...") គឺជាវិធីសាស្ត្រទំនើប និងស្តង់ដារសម្រាប់បំប្លែងតម្លៃ Variable ចូលក្នុង String។'
          }
        }
      ]
    },

    // Module 2 — Language Fundamentals (5 lessons)
    {
      moduleNumber: 2,
      title: {
        en: 'Module 2 — Language Fundamentals',
        km: 'មេរៀនទី ២ — គ្រឹះនៃភាសា Python'
      },
      description: {
        en: 'Master dynamic typing, primitive data types, mathematical/logical operators, and clean string formatting with f-strings.',
        km: 'រៀនយល់ដឹងពី Dynamic Typing, Data Types គ្រឹះ, Operators និងការ Format String ដោយប្រើ f-strings។'
      },
      lessons: [
        {
          id: 'python-2-1',
          slug: 'python-variables-dynamic-typing',
          moduleNumber: 2,
          lessonNumberInModule: 1,
          title: {
            en: '2.1 Variables and Python\'s dynamic typing',
            km: '២.១ Variables និង Dynamic Typing របស់ Python'
          },
          durationMinutes: 15,
          difficulty: 'Beginner',
          objective: {
            en: 'Understand how Python handles variable assignment and dynamic type re-binding.',
            km: 'យល់ដឹងពីរបៀបដែល Python បង្កើត Variable និងផ្លាស់ប្តូរ Type តាមបែប Dynamic Typing។'
          },
          explanation: {
            en: 'In Python, variables are labels bound to objects in memory. You don\'t explicitly declare types like in C++ or Java; Python resolves object types dynamically at runtime.',
            km: 'ក្នុង Python ផ្លាកឈ្មោះ Variable ភ្ជាប់ទៅកាន់ Object ក្នុង Memory។ អ្នកមិនបាច់កំណត់ Type ដោយច្បាស់លាស់ដូច Java/C++ ទេ Python នឹងកំណត់ Type ស្វ័យប្រវត្តិនៅពេលកូដដំណើរការ។'
          },
          tutorial: {
            en: 'Re-assigning variables in Python:',
            km: 'ការផ្លាស់ប្តូរតម្លៃ Variable ក្នុង Python៖'
          },
          starterCode: {
            language: 'python',
            code: `status = "pending"
print("Initial status:", status, "Type:", type(status))

status = 200
print("Updated status:", status, "Type:", type(status))`
          }
        },
        {
          id: 'python-2-2',
          slug: 'python-data-types-primitives',
          moduleNumber: 2,
          lessonNumberInModule: 2,
          title: {
            en: '2.2 Data types (str, int, float, bool, None)',
            km: '២.២ Data types គ្រឹះ (str, int, float, bool, None)'
          },
          durationMinutes: 20,
          difficulty: 'Beginner',
          objective: {
            en: 'Identify and work with core Python primitive data types including strings, integers, floats, booleans, and None.',
            km: 'ស្គាល់ និងប្រើប្រាស់ Data types គ្រឹះរបស់ Python រួមមាន String, Integer, Float, Boolean និង None។'
          },
          explanation: {
            en: 'Python includes primitive data types: str for text, int for integers, float for decimals, bool for true/false flags, and None to represent null or missing values.',
            km: 'Python មាន Data Types គ្រឹះ៖ str (អត្ថបទ), int (ចំនួនគត់), float (ចំនួនទសភាគ), bool (ពិត/មិនពិត) និង None (គ្មានតម្លៃ/Null)។'
          },
          tutorial: {
            en: 'Exploring core primitive types:',
            km: 'សាកល្បងប្រើប្រាស់ Data types គ្រឹះ៖'
          },
          starterCode: {
            language: 'python',
            code: `user_name = "Chantra"
user_id = 101
account_balance = 249.50
is_active = True
last_login = None

print(f"User: {user_name} | ID: {user_id} | Balance: \${account_balance} | Active: {is_active} | Last Login: {last_login}")`
          }
        },
        {
          id: 'python-2-3',
          slug: 'python-operators-arithmetic-logic',
          moduleNumber: 2,
          lessonNumberInModule: 3,
          title: {
            en: '2.3 Operators (arithmetic, comparison, logical)',
            km: '២.៣ Operators (ការគណនា, ការប្រៀបធៀប និង Logic)'
          },
          durationMinutes: 20,
          difficulty: 'Beginner',
          objective: {
            en: 'Perform mathematical operations, equality checks, and logical combinations using standard Python operators.',
            km: 'អនុវត្តការគណនា ការប្រៀបធៀប និងការផ្សំពាក្យ Logic ដោយប្រើប្រាស់ Operators របស់ Python។'
          },
          explanation: {
            en: 'Python uses operators like +, -, *, /, // (floor division), % (modulo), ** (power), comparison operators (==, !=, >, <), and logical words (and, or, not).',
            km: 'Python ប្រើប្រាស់ Operators ដូចជា +, -, *, /, // (ចែកយកចំនួនគត់), % (សំណល់), ** (ស្វ័យគុណ), ប្រៀបធៀប (==, !=, >, <) និង Logical words (and, or, not)។'
          },
          tutorial: {
            en: 'Using arithmetic and comparison operators:',
            km: 'ការប្រើប្រាស់ Arithmetic និង Comparison Operators៖'
          },
          starterCode: {
            language: 'python',
            code: `price = 20
quantity = 3
discount = 5

total = (price * quantity) - discount
is_eligible_for_free_shipping = total >= 50 and quantity > 2

print(f"Total: \${total}, Free Shipping: {is_eligible_for_free_shipping}")`
          }
        },
        {
          id: 'python-2-4',
          slug: 'python-string-formatting-fstrings',
          moduleNumber: 2,
          lessonNumberInModule: 4,
          title: {
            en: '2.4 String formatting with f-strings',
            km: '២.៤ ការ Format String ដោយប្រើប្រាស់ f-strings'
          },
          durationMinutes: 15,
          difficulty: 'Beginner',
          objective: {
            en: 'Format numbers, dates, and variable interpolation cleanly with Python f-strings.',
            km: 'រៀបចំ Format តួលេខ អត្ថបទ និង Variable ឲ្យមានរបៀបរៀបរយតាមរយៈ f-strings។'
          },
          explanation: {
            en: 'Introduced in Python 3.6, f-strings evaluate expressions directly inside curly braces and support inline formatting specs like rounding floats (e.g. {:.2f}).',
            km: 'f-strings អនុញ្ញាតឱ្យសរសេរ Expression និងកំណត់ចំនួនខ្ទង់ទសភាគ (ឧទាហរណ៍ {:.2f}) ដោយផ្ទាល់ក្នុង String។'
          },
          tutorial: {
            en: 'Formatting floats with f-strings:',
            km: 'ការកំណត់ខ្ទង់ទសភាគក្នុង f-strings៖'
          },
          starterCode: {
            language: 'python',
            code: `raw_price = 19.9984
service_fee = 2.5

print(f"Subtotal: \${raw_price:.2f}")
print(f"Total with fee: \${(raw_price + service_fee):.2f}")`
          }
        },
        {
          id: 'python-2-5',
          slug: 'python-practice-mini-calculator',
          moduleNumber: 2,
          lessonNumberInModule: 5,
          title: {
            en: '2.5 Practice: mini calculator script',
            km: '២.៥ អនុវត្ត៖ បង្កើត Script Mini Calculator'
          },
          durationMinutes: 20,
          difficulty: 'Beginner',
          objective: {
            en: 'Combine variables, user inputs/values, arithmetic operations, and string formatting to build a mini calculator.',
            km: 'ផ្សំចំណេះដឹង Variables, Arithmetic Operations និង String Formatting ដើម្បីបង្កើត Mini Calculator។'
          },
          explanation: {
            en: 'Put your fundamentals to work by computing tax, totals, and tip percentages for a restaurant order.',
            km: 'អនុវត្តរាប់ទិន្នន័យ គណនាពន្ធ សរុបបូក និងភាគរយសម្រាប់ invoice ដកប្រាក់។'
          },
          tutorial: {
            en: 'Mini bill calculation program:',
            km: 'កម្មវិធីគណនាប្រាក់ Bill ម្ហូប៖'
          },
          starterCode: {
            language: 'python',
            code: `item_price = 45.0
tax_rate = 0.08
tip_rate = 0.15

tax_amount = item_price * tax_rate
tip_amount = item_price * tip_rate
grand_total = item_price + tax_amount + tip_amount

print(f"--- RESTAURANT BILL ---")
print(f"Subtotal: \${item_price:.2f}")
print(f"Tax (8%): \${tax_amount:.2f}")
print(f"Tip (15%): \${tip_amount:.2f}")
print(f"Grand Total: \${grand_total:.2f}")`
          }
        }
      ]
    },

    // Module 3 — Control Flow (4 lessons)
    {
      moduleNumber: 3,
      title: {
        en: 'Module 3 — Control Flow',
        km: 'មេរៀនទី ៣ — Control Flow ក្នុង Python'
      },
      description: {
        en: 'Master conditional branching with if/elif/else, looping structures, and signature list comprehension expressions.',
        km: 'រៀនប្រើប្រាស់ លក្ខខណ្ឌ if/elif/else, កូដ Loop ជុំវិញ និង List Comprehensions ដែលជាចំណុចពិសេសរបស់ Python។'
      },
      lessons: [
        {
          id: 'python-3-1',
          slug: 'python-control-flow-if-elif-else',
          moduleNumber: 3,
          lessonNumberInModule: 1,
          title: {
            en: '3.1 if / elif / else',
            km: '៣.១ លក្ខខណ្ឌ if / elif / else'
          },
          durationMinutes: 20,
          difficulty: 'Beginner',
          objective: {
            en: 'Branch execution based on single or multiple logical evaluation conditions.',
            km: 'បង្កើតលក្ខខណ្ឌបំបែកផ្លូវកូដ ដោយប្រើ if, elif, និង else។'
          },
          explanation: {
            en: 'Conditional statements check booleans in sequence; the first branch evaluating to True runs, while remaining branches are skipped.',
            km: 'លក្ខខណ្ឌ Conditional ពិនិត្យមើលតម្លៃ Boolean តាមលំដាប់លំដោយ ប្លុកណាដែល True ដំបូងនឹងត្រូវបានដំណើរការ។'
          },
          tutorial: {
            en: 'HTTP status code checker logic:',
            km: 'លក្ខខណ្ឌពិនិត្យមើល HTTP Status Code៖'
          },
          starterCode: {
            language: 'python',
            code: `status_code = 404

if status_code == 200:
    print("Success: OK")
elif status_code == 400:
    print("Client Error: Bad Request")
elif status_code == 404:
    print("Client Error: Not Found")
elif status_code == 500:
    print("Server Error: Internal Server Error")
else:
    print(f"Unknown status code: {status_code}")`
          }
        },
        {
          id: 'python-3-2',
          slug: 'python-loops-for-while',
          moduleNumber: 3,
          lessonNumberInModule: 2,
          title: {
            en: '3.2 for and while loops',
            km: '៣.២ ការប្រើប្រាស់ for និង while loops'
          },
          durationMinutes: 20,
          difficulty: 'Beginner',
          objective: {
            en: 'Iterate over sequences using for loops and execute conditional repetition with while loops.',
            km: 'រៀបចំការរាប់ជុំទិន្នន័យ (Iterate) លើបញ្ជីដោយប្រើ for loop និងរាប់ជុំតាមលក្ខខណ្ឌដោយប្រើ while loop។'
          },
          explanation: {
            en: 'for loops iterate directly over sequences like lists or ranges. while loops repeat as long as a condition expression remains True.',
            km: 'for loops រាប់ជុំលើបញ្ជីទិន្នន័យដោយផ្ទាល់ រីឯ while loops រាប់ជុំរហូតដល់លក្ខខណ្ឌក្លាយជា False។'
          },
          tutorial: {
            en: 'Looping through items and ranges:',
            km: 'ការរាប់ជុំទិន្នន័យជាមួយ for loop៖'
          },
          starterCode: {
            language: 'python',
            code: `fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print(f"Fruit item: {fruit}")

print("\nCounting with range():")
for i in range(1, 4):
    print(f"Attempt #{i}")`
          }
        },
        {
          id: 'python-3-3',
          slug: 'python-list-comprehensions',
          moduleNumber: 3,
          lessonNumberInModule: 3,
          title: {
            en: '3.3 List comprehensions (a Python signature feature)',
            km: '៣.៣ List comprehensions (លក្ខណៈពិសេសរបស់ Python)'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Construct filtered and transformed lists using compact single-line list comprehensions.',
            km: 'បង្កើត List ថ្មីចេញពី List ចាស់ដោយសរសេរតែមួយជួរ និងខ្លី តាមបែប List Comprehensions។'
          },
          explanation: {
            en: 'List comprehensions provide a concise syntax [expression for item in iterable if condition] that replaces multiline loop/append patterns.',
            km: 'List comprehensions ផ្តល់នូវ Syntax [expression for item in iterable if condition] សម្រាប់ជំនួសការសរសេរ for loop និង append ច្រើនជួរ។'
          },
          tutorial: {
            en: 'Filtering active users using list comprehension:',
            km: 'ការ Filter ទិន្នន័យ User ដែល Active ដោយប្រើ List Comprehension៖'
          },
          starterCode: {
            language: 'python',
            code: `numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
evens = [n for n in numbers if n % 2 == 0]
squares = [n ** 2 for n in numbers]

print("Evens:", evens)
print("Squares:", squares)`
          }
        },
        {
          id: 'python-3-4',
          slug: 'python-practice-fizzbuzz',
          moduleNumber: 3,
          lessonNumberInModule: 4,
          title: {
            en: '3.4 Practice: FizzBuzz in Python',
            km: '៣.៤ អនុវត្ត៖ FizzBuzz ក្នុង Python'
          },
          durationMinutes: 15,
          difficulty: 'Beginner',
          objective: {
            en: 'Solve the classic FizzBuzz interview problem combining loops, modulo operations, and condition branches.',
            km: 'ដោះស្រាយលំហាត់ FizzBuzz ដោយប្រើប្រាស់ modulo, loops និងលក្ខខណ្ឌ conditional។'
          },
          explanation: {
            en: 'Print numbers 1 to 20: for multiples of 3 print "Fizz", for 5 print "Buzz", and for multiples of both print "FizzBuzz".',
            km: 'រាប់លេខពី 1 ដល់ 20: បើចែកដាច់នឹង 3 បង្ហាញ "Fizz" បើចែកដាច់នឹង 5 បង្ហាញ "Buzz" បើចែកដាច់ទាំងពីរបង្ហាញ "FizzBuzz"។'
          },
          tutorial: {
            en: 'FizzBuzz solution script:',
            km: 'ដំណោះស្រាយលំហាត់ FizzBuzz៖'
          },
          starterCode: {
            language: 'python',
            code: `for num in range(1, 21):
    if num % 3 == 0 and num % 5 == 0:
        print("FizzBuzz")
    elif num % 3 == 0:
        print("Fizz")
    elif num % 5 == 0:
        print("Buzz")
    else:
        print(num)`
          }
        }
      ]
    },

    // Module 4 — Functions (4 lessons)
    {
      moduleNumber: 4,
      title: {
        en: 'Module 4 — Functions',
        km: 'មេរៀនទី ៤ — Functions ក្នុង Python'
      },
      description: {
        en: 'Write clean, reusable functions with default arguments, flexible *args and **kwargs parameter packing, and lambda expressions.',
        km: 'សរសេរ Functions ដែលអាចប្រើឡើងវិញបាន ជាមួយ Default Arguments, *args, **kwargs និង Lambda Functions។'
      },
      lessons: [
        {
          id: 'python-4-1',
          slug: 'python-functions-declaring-calling',
          moduleNumber: 4,
          lessonNumberInModule: 1,
          title: {
            en: '4.1 Declaring and calling functions',
            km: '៤.១ ការប្រកាស និងការហៅ Functions'
          },
          durationMinutes: 15,
          difficulty: 'Beginner',
          objective: {
            en: 'Define functions using the def keyword, handle parameter passing, and return computed results.',
            km: 'បង្កើត Function ដោយប្រើពាក្យ def បញ្ជូន Parameters និង Return តម្លៃដែលបានគណនា។'
          },
          explanation: {
            en: 'Functions organize reusable blocks of code. They accept zero or more parameters and use the return statement to pass back values.',
            km: 'Functions ជួយរៀបចំកូដឱ្យមានរបៀប និងអាចហៅប្រើឡើងវិញបាន ដោយបញ្ជូន Parameters និងទទួល Return Value។'
          },
          tutorial: {
            en: 'Creating a basic greeting function:',
            km: 'ការបង្កើត Function ស្វាគមន៍សាមញ្ញ៖'
          },
          starterCode: {
            language: 'python',
            code: `def greet_user(name: str) -> str:
    return f"Welcome back, {name}!"

msg = greet_user("Sopheak")
print(msg)`
          }
        },
        {
          id: 'python-4-2',
          slug: 'python-functions-default-keyword-args',
          moduleNumber: 4,
          lessonNumberInModule: 2,
          title: {
            en: '4.2 Default arguments and keyword arguments',
            km: '៤.២ Default arguments និង Keyword arguments'
          },
          durationMinutes: 20,
          difficulty: 'Beginner',
          objective: {
            en: 'Provide default fallback parameters and pass arguments by keyword name for clean, flexible function calls.',
            km: 'កំណត់តម្លៃ Default សម្រាប់ Parameters និងបញ្ជូន Arguments តាមរយៈឈ្មោះ Keyword យ៉ាងច្បាស់លាស់។'
          },
          explanation: {
            en: 'Parameters with default values become optional when calling functions. Keyword arguments allow passing arguments out of positional order.',
            km: 'Default values ធ្វើឱ្យ Parameters ក្លាយជាការជម្រើសបន្ថែម (Optional) ហើយ Keyword Arguments អនុញ្ញាតឱ្យបញ្ជូនតាមឈ្មោះ។'
          },
          tutorial: {
            en: 'Setting default function parameters:',
            km: 'ការកំណត់ Default parameters ក្នុង Function៖'
          },
          starterCode: {
            language: 'python',
            code: `def create_server(host="127.0.0.1", port=8000, debug=False):
    return f"Server running on {host}:{port} (Debug: {debug})"

print(create_server())
print(create_server(port=3000, debug=True))`
          }
        },
        {
          id: 'python-4-3',
          slug: 'python-functions-args-kwargs-lambda',
          moduleNumber: 4,
          lessonNumberInModule: 3,
          title: {
            en: '4.3 *args, **kwargs, and lambda functions',
            km: '៤.៣ *args, **kwargs និង Lambda functions'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Accept variable positional and keyword arguments using *args and **kwargs, and write inline lambda functions.',
            km: 'ទទួលយក Arguments មិនកំណត់ចំនួនដោយប្រើ *args, **kwargs និងសរសេរ Anonymous Lambda functions។'
          },
          explanation: {
            en: '*args packs extra positional arguments into a tuple, while **kwargs packs named arguments into a dictionary. Lambdas are concise inline single-expression functions.',
            km: '*args ច្របាច់ Positional Arguments ចូល Tuple រីឯ **kwargs ច្របាច់ Named Arguments ចូល Dictionary។ Lambdas ជា Function ខ្លីៗ។'
          },
          tutorial: {
            en: 'Using *args and **kwargs flexibility:',
            km: 'ការប្រើប្រាស់ *args និង **kwargs៖'
          },
          starterCode: {
            language: 'python',
            code: `def log_payload(endpoint, *tags, **metadata):
    print(f"Endpoint: {endpoint}")
    print(f"Tags: {tags}")
    print(f"Metadata: {metadata}")

log_payload("/api/v1/users", "v1", "auth", user_id=42, role="admin")

# Inline lambda for sorting
double = lambda x: x * 2
print("Lambda double:", double(15))`
          }
        },
        {
          id: 'python-4-4',
          slug: 'python-practice-utility-functions',
          moduleNumber: 4,
          lessonNumberInModule: 4,
          title: {
            en: '4.4 Practice: build a set of reusable utility functions',
            km: '៤.៤ អនុវត្ត៖ បង្កើត Reusable Utility Functions'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Build a suite of backend utility functions for string slugification, price formatting, and email validation.',
            km: 'បង្កើត Utility functions សម្រាប់ backend រួមមាន String Slugify, Price formatting និង Email validation។'
          },
          explanation: {
            en: 'Backend projects rely heavily on helper modules. Implement reusable helper functions that sanitize user input.',
            km: 'គម្រោង Backend តែងតែត្រូវការ Helper functions សម្រាប់សម្អាត និងគ្រប់គ្រង Input របស់ User។'
          },
          tutorial: {
            en: 'Building backend helper utilities:',
            km: 'ការបង្កើត Helper Functions សម្រាប់ Backend៖'
          },
          starterCode: {
            language: 'python',
            code: `def slugify(title: str) -> str:
    return title.lower().strip().replace(" ", "-")

def validate_email(email: str) -> bool:
    return "@" in email and "." in email

print("Slug:", slugify("  Python Backend Development 101  "))
print("Email valid:", validate_email("user@example.com"))`
          }
        }
      ]
    },

    // Module 5 — Data Structures (4 lessons)
    {
      moduleNumber: 5,
      title: {
        en: 'Module 5 — Data Structures',
        km: 'មេរៀនទី ៥ — Data Structures ក្នុង Python'
      },
      description: {
        en: 'Master Python\'s built-in data collections: Lists, Dictionaries, Tuples, and Sets for efficient data manipulation.',
        km: 'រៀនប្រើប្រាស់ Data Structures គ្រឹះរបស់ Python: Lists, Dictionaries, Tuples, និង Sets សម្រាប់ការគ្រប់គ្រងទិន្នន័យ។'
      },
      lessons: [
        {
          id: 'python-5-1',
          slug: 'python-data-structures-lists',
          moduleNumber: 5,
          lessonNumberInModule: 1,
          title: {
            en: '5.1 Lists — creating, looping, common methods',
            km: '៥.១ Lists — ការបង្កើត, ការរាប់ជុំ, និង Common Methods'
          },
          durationMinutes: 20,
          difficulty: 'Beginner',
          objective: {
            en: 'Manipulate ordered, mutable sequence collections using append, pop, sort, and slice operations.',
            km: 'គ្រប់គ្រង បញ្ជីទិន្នន័យ Ordered, Mutable ដោយប្រើ method append, pop, sort, និង list slicing។'
          },
          explanation: {
            en: 'Lists are mutable ordered collections. Key methods include .append(), .extend(), .pop(), .remove(), and slicing list[start:stop:step].',
            km: 'Lists គឺជាបញ្ជីទិន្នន័យដែលអាចកែប្រែបាន។ Methods សំខាន់ៗមាន .append(), .pop(), .sort() និង Slicing list[0:2]។'
          },
          tutorial: {
            en: 'List manipulations and slicing:',
            km: 'ការកែប្រែ និង Slice ទិន្នន័យក្នុង List៖'
          },
          starterCode: {
            language: 'python',
            code: `tasks = ["Write code", "Test API", "Deploy server"]
tasks.append("Review PR")
print("Tasks:", tasks)

first_two = tasks[0:2]
print("First two tasks:", first_two)`
          }
        },
        {
          id: 'python-5-2',
          slug: 'python-data-structures-dictionaries',
          moduleNumber: 5,
          lessonNumberInModule: 2,
          title: {
            en: '5.2 Dictionaries — key/value data',
            km: '៥.២ Dictionaries — ទិន្នន័យ Key/Value'
          },
          durationMinutes: 20,
          difficulty: 'Beginner',
          objective: {
            en: 'Store, query, and mutate key/value mappings with Python dicts.',
            km: 'រក្សាទុក ស្វែងរក និងកែប្រែទិន្នន័យ Key/Value Mapping ដោយប្រើប្រាស់ Dictionaries។'
          },
          explanation: {
            en: 'Dictionaries map unique keys to values. Use dict.get(key, default) for safe lookups that avoid KeyErrors when a key is missing.',
            km: 'Dictionaries ជាការភ្ជាប់ Key ទៅនឹង Value។ ប្រើប្រាស់ dict.get(key, default) ដើម្បីទាញយកទិន្នន័យដោយសុវត្ថិភាព។'
          },
          tutorial: {
            en: 'Dictionary operations and safe key retrieval:',
            km: 'ការទាញយកទិន្នន័យក្នុង Dict ដោយសុវត្ថិភាព៖'
          },
          starterCode: {
            language: 'python',
            code: `user = {
    "id": 1,
    "name": "Dara",
    "role": "developer"
}

# Safe lookup
email = user.get("email", "no-email@provided.com")
print(f"Name: {user[\'name\']} | Email: {email}")`
          }
        },
        {
          id: 'python-5-3',
          slug: 'python-data-structures-tuples-sets',
          moduleNumber: 5,
          lessonNumberInModule: 3,
          title: {
            en: '5.3 Tuples and sets',
            km: '៥.៣ Tuples និង Sets'
          },
          durationMinutes: 20,
          difficulty: 'Beginner',
          objective: {
            en: 'Utilize immutable tuples for fixed records and sets for unique value deduplication and set math.',
            km: 'ប្រើប្រាស់ Tuples (មិនអាចកែប្រែបាន) សម្រាប់ទិន្នន័យថេរ និង Sets សម្រាប់លុបទិន្នន័យស្ទួន (Deduplication)។'
          },
          explanation: {
            en: 'Tuples () are immutable sequences ideal for fixed structures. Sets {} store unique unordered elements with instant O(1) membership checks.',
            km: 'Tuples () មិនអាចកែប្រែបានទេ រីឯ Sets {} រក្សាទុកតែធាតុដែលមិនស្ទួន និងអាចពិនិត្យមើលធាតុយ៉ាងលឿន។'
          },
          tutorial: {
            en: 'Working with tuples and deduplicating with sets:',
            km: 'ការប្រើប្រាស់ Tuples និងការលុបទិន្នន័យស្ទួនដោយ Sets៖'
          },
          starterCode: {
            language: 'python',
            code: `# Tuple for coordinates
location = (11.5564, 104.9282)

# Set deduplication
raw_tags = ["python", "django", "python", "api", "django"]
unique_tags = set(raw_tags)

print(f"Coordinates: {location}")
print(f"Unique tags: {unique_tags}")`
          }
        },
        {
          id: 'python-5-4',
          slug: 'python-practice-word-frequency-counter',
          moduleNumber: 5,
          lessonNumberInModule: 4,
          title: {
            en: '5.4 Practice: word frequency counter',
            km: '៥.៤ អនុវត្ត៖ បង្កើត Word Frequency Counter'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Count word occurrences in text using dictionaries and loop iterations.',
            km: 'រាប់ចំនួនពាក្យដែលលេចឡើងក្នុងអត្ថបទ ដោយប្រើប្រាស់ Dictionaries និង Loops។'
          },
          explanation: {
            en: 'A classic data structure problem: process a paragraph string, split it into words, and tally occurrences in a dictionary.',
            km: 'លំហាត់ Data Structure ធម្មតា៖ បំបែកអត្ថបទទៅជាពាក្យនីមួយៗ រួចរាប់ចំនួនពាក្យនីមួយៗក្នុង Dictionary។'
          },
          tutorial: {
            en: 'Word frequency counter implementation:',
            km: 'ការសរសេរកូដរាប់ចំនួនពាក្យ៖'
          },
          starterCode: {
            language: 'python',
            code: `text = "python backend apis with python and django for web apis"
words = text.split()
counts = {}

for word in words:
    counts[word] = counts.get(word, 0) + 1

print("Word Frequencies:")
for word, count in counts.items():
    print(f" - {word}: {count}")`
          }
        }
      ]
    },

    // Module 6 — Object-Oriented Programming (5 lessons)
    {
      moduleNumber: 6,
      title: {
        en: 'Module 6 — Object-Oriented Programming',
        km: 'មេរៀនទី ៦ — Object-Oriented Programming (OOP)'
      },
      description: {
        en: 'Understand classes, constructors, inheritance, dunder methods, and encapsulation conventions in Python.',
        km: 'រៀនយល់ដឹងពី Classes, Constructors, Inheritance, Dunder Methods និង Encapsulation ក្នុង Python។'
      },
      lessons: [
        {
          id: 'python-6-1',
          slug: 'python-oop-classes-init-objects',
          moduleNumber: 6,
          lessonNumberInModule: 1,
          title: {
            en: '6.1 Classes, __init__, and objects',
            km: '៦.១ Classes, __init__ និង Objects'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Define Python classes, implement the __init__ constructor method, and instantiate class objects.',
            km: 'បង្កើត Python Classes, សរសេរ constructor method __init__ និងបង្កើត Objects។'
          },
          explanation: {
            en: 'Classes serve as blueprints for objects. The __init__ method initializes object instance attributes, with self referring to the instance.',
            km: 'Classes ជាប្លង់មេសម្រាប់បង្កើត Objects។ Method __init__ ផ្តល់តម្លៃដំបូងទៅឱ្យ Attributes ដោយមាន self ជាចំណងបញ្ជាក់ Instance។'
          },
          tutorial: {
            en: 'Defining a User class with instance methods:',
            km: 'ការបង្កើត User Class ជាមួយ Instance Methods៖'
          },
          starterCode: {
            language: 'python',
            code: `class User:
    def __init__(self, username: str, email: str):
        self.username = username
        self.email = email
        self.is_active = True

    def deactivate(self):
        self.is_active = False

user1 = User("seyha", "seyha@example.com")
print(f"User: {user1.username}, Active: {user1.is_active}")
user1.deactivate()
print(f"User: {user1.username}, Active: {user1.is_active}")`
          }
        },
        {
          id: 'python-6-2',
          slug: 'python-oop-inheritance-super',
          moduleNumber: 6,
          lessonNumberInModule: 2,
          title: {
            en: '6.2 Inheritance and super()',
            km: '៦.២ Inheritance និង super()'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Inherit features from parent classes and call parent constructors using super().',
            km: 'ទាញយកសមត្ថភាពពី Parent Class (Inheritance) និងហៅ Parent Constructor ដោយប្រើ super()។'
          },
          explanation: {
            en: 'Inheritance allows a child class to inherit attributes and methods from a parent class. super().__init__() invokes parent initialization logic.',
            km: 'Inheritance អនុញ្ញាតឱ្យ Child Class ទាញយក Attributes ពី Parent Class ហើយ super() ជួយហៅ logic ដើម។'
          },
          tutorial: {
            en: 'Subclassing an AdminUser from User:',
            km: 'ការបង្កើត AdminUser ចេញពី User Class ដើម៖'
          },
          starterCode: {
            language: 'python',
            code: `class User:
    def __init__(self, username, email):
        self.username = username
        self.email = email

class AdminUser(User):
    def __init__(self, username, email, permissions):
        super().__init__(username, email)
        self.permissions = permissions

admin = AdminUser("admin_lead", "admin@app.com", ["read", "write", "delete"])
print(f"Admin: {admin.username} | Permissions: {admin.permissions}")`
          }
        },
        {
          id: 'python-6-3',
          slug: 'python-oop-dunder-str-repr',
          moduleNumber: 6,
          lessonNumberInModule: 3,
          title: {
            en: '6.3 Key dunder methods: __str__ and __repr__',
            km: '៦.៣ Key dunder methods: __str__ និង __repr__'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Understand and implement Python\'s special "dunder" methods to control object string representations.',
            km: 'យល់ដឹង និងអនុវត្ត special "dunder" methods របស់ Python ដើម្បីគ្រប់គ្រងការបង្ហាញអត្ថបទរបស់ Object។'
          },
          explanation: {
            en: 'Python objects have special methods surrounded by double underscores — called "dunder" methods — that customize built-in behavior. __str__ controls what a friendly readable version of your object looks like when printed, and __repr__ controls a technical debugging representation.',
            km: 'Dunder methods ជា method ពិសេសដែលមាន __ នៅសងខាង។ __str__ គ្រប់គ្រងលើការបង្ហាញអត្ថបទ readable ពេល print() ហើយ __repr__ សម្រាប់ព័ត៌មាន debugging បច្ចេកទេស។'
          },
          tutorial: {
            en: 'Implementing __str__ and __repr__ on a Note class:',
            km: 'ការសរសេរ __str__ និង __repr__ ក្នុង Note class៖'
          },
          starterCode: {
            language: 'python',
            code: `class Note:
    def __init__(self, title, content):
        self.title = title
        self.content = content

    def __str__(self):
        return f"Note: {self.title} — {self.content}"

    def __repr__(self):
        return f"Note(title={self.title!r}, content={self.content!r})"

note = Note("Groceries", "Buy rice and eggs")
print(note)          # Uses __str__
print(repr(note))    # Uses __repr__`
          },
          practiceExercise: {
            question: {
              en: 'Add a __repr__ method to a Task class with title and status.',
              km: 'បន្ថែម method __repr__ ទៅកាន់ Task class ដែលមាន title និង status។'
            },
            solution: `def __repr__(self):\n    return f"Task(title={self.title!r}, status={self.status!r})"`
          },
          tips: {
            en: '__str__ is for end-user friendly display, while __repr__ is for developers debugging in a console.',
            km: '__str__ គឺសម្រាប់បង្ហាញអ្នកប្រើប្រាស់ រីឯ __repr__ គឺសម្រាប់អ្នកអភិវឌ្ឍន៍ធ្វើការ Debug កូដ។'
          }
        },
        {
          id: 'python-6-4',
          slug: 'python-oop-encapsulation-conventions',
          moduleNumber: 6,
          lessonNumberInModule: 4,
          title: {
            en: '6.4 Encapsulation conventions (Python\'s underscore-based approach)',
            km: '៦.៤ Encapsulation conventions ក្នុង Python'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Apply Python conventions for private and protected attributes using leading underscores (_single and __double).',
            km: 'អនុវត្តការកំណត់ Private/Protected Attributes ក្នុង Python តាមរយៈសញ្ញា underscore (_ និង __)។'
          },
          explanation: {
            en: 'Python uses naming conventions instead of strict enforcement keywords like private or protected. _protected suggests internal use, while __private triggers name mangling.',
            km: 'Python ប្រើប្រាស់ Naming conventions ជំនួសឱ្យពាក្យបញ្ជា strict ដូច Java។ _single_underscore បញ្ជាក់ថា Internal ហើយ __double ធ្វើ Name Mangling។'
          },
          tutorial: {
            en: 'Using underscores for private attributes:',
            km: 'ការប្រើប្រាស់ Underscore សម្រាប់ Private Attributes៖'
          },
          starterCode: {
            language: 'python',
            code: `class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner
        self._balance = balance  # protected convention

    def deposit(self, amount):
        if amount > 0:
            self._balance += amount

    def get_balance(self):
        return self._balance

acc = BankAccount("Sopheak", 500)
acc.deposit(150)
print(f"Account Balance: \${acc.get_balance()}")`
          }
        },
        {
          id: 'python-6-5',
          slug: 'python-practice-class-hierarchy',
          moduleNumber: 6,
          lessonNumberInModule: 5,
          title: {
            en: '6.5 Practice: build a small class hierarchy',
            km: '៦.៥ អនុវត្ត៖ បង្កើត Class Hierarchy សាមញ្ញ'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Build a small OOP class hierarchy (e.g. MediaItem -> Book / Video) with inheritance and method overriding.',
            km: 'បង្កើត រចនាសម្ព័ន្ធ Class Hierarchy សាមញ្ញដែលមាន Inheritance និង Method Overriding។'
          },
          explanation: {
            en: 'Combine inheritance, custom __init__, and method overriding by constructing a domain media hierarchy.',
            km: 'រួមបញ្ចូលចំណេះដឹង Inheritance និង Method Overriding ដើម្បីបង្កើត Class គ្រប់គ្រង Media Items។'
          },
          tutorial: {
            en: 'Building MediaItem parent and child classes:',
            km: 'ការសរសេរ Class Parent និង Child សម្រាប់ MediaItem៖'
          },
          starterCode: {
            language: 'python',
            code: `class MediaItem:
    def __init__(self, title, creator):
        self.title = title
        self.creator = creator

    def get_info(self):
        return f"{self.title} by {self.creator}"

class Book(MediaItem):
    def __init__(self, title, creator, pages):
        super().__init__(title, creator)
        self.pages = pages

    def get_info(self):
        return f"Book: {super().get_info()} ({self.pages} pages)"

b = Book("Clean Code", "Robert C. Martin", 464)
print(b.get_info())`
          }
        }
      ]
    },

    // Module 7 — Working with APIs & Web Basics (5 lessons)
    {
      moduleNumber: 7,
      title: {
        en: 'Module 7 — Working with APIs & Web Basics',
        km: 'មេរៀនទី ៧ — ការធ្វើការជាមួយ APIs និង Web Basics'
      },
      description: {
        en: 'Parse JSON files, make outgoing HTTP requests with requests library, and build native web servers with http.server.',
        km: 'អាន/សរសេរ JSON, ផ្ញើ HTTP Requests ជាមួយ requests library និងបង្កើត Web Server ដើមជាមួយ http.server។'
      },
      lessons: [
        {
          id: 'python-7-1',
          slug: 'python-json-module-handling',
          moduleNumber: 7,
          lessonNumberInModule: 1,
          title: {
            en: '7.1 Reading and writing JSON with the json module',
            km: '៧.១ ការអាន និងសរសេរ JSON ដោយប្រើប្រាស់ json module'
          },
          durationMinutes: 20,
          difficulty: 'Beginner',
          objective: {
            en: 'Serialize Python dicts/lists to JSON strings with json.dumps() and parse JSON with json.loads().',
            km: 'បំប្លែង Python Dictionaries ទៅជា JSON String ដោយ json.dumps() និង Parse JSON មកវិញដោយ json.loads()។'
          },
          explanation: {
            en: 'JSON is the universal exchange format for modern web APIs. Python\'s built-in json module handles conversion between native dicts/lists and JSON strings.',
            km: 'JSON គឺជាទម្រង់ផ្លាស់ប្តូរទិន្នន័យស្តង់ដារលើ Web APIs។ Module json របស់ Python ជួយបំប្លែងរវាង Python Dicts និង JSON Strings។'
          },
          tutorial: {
            en: 'Serializing and deserializing JSON data:',
            km: 'ការបំប្លែងទិន្នន័យ JSON ក្នុង Python៖'
          },
          starterCode: {
            language: 'python',
            code: `import json

payload = {"status": "ok", "users_count": 3, "active": True}

# Convert dict to JSON string
json_str = json.dumps(payload, indent=2)
print("JSON String:\n", json_str)

# Convert JSON string back to dict
parsed_dict = json.loads(json_str)
print("Parsed count:", parsed_dict["users_count"])`
          }
        },
        {
          id: 'python-7-2',
          slug: 'python-requests-outgoing-http',
          moduleNumber: 7,
          lessonNumberInModule: 2,
          title: {
            en: '7.2 Making outgoing HTTP requests with the requests library',
            km: '៧.២ ការផ្ញើ HTTP Requests ទៅខាងក្រៅដោយប្រើប្រាស់ requests library'
          },
          durationMinutes: 20,
          difficulty: 'Beginner',
          objective: {
            en: 'Fetch data from external REST APIs using GET/POST requests via the popular third-party requests package.',
            km: 'ទាញយកទិន្នន័យពី External REST APIs ដោយប្រើប្រាស់ requests library។'
          },
          explanation: {
            en: 'The requests library simplifies making HTTP calls. Use requests.get(url) or requests.post(url, json=data) to communicate with third-party web services.',
            km: 'Requests library សម្រួលដល់ការផ្ញើ HTTP Request។ ប្រើប្រាស់ requests.get() ឬ requests.post() ដើម្បីទាក់ទងជាមួយសេវាកម្មខាងក្រៅ។'
          },
          tutorial: {
            en: 'Making an HTTP GET request with requests:',
            km: 'ការផ្ញើ HTTP GET request ជាមួយ requests library៖'
          },
          starterCode: {
            language: 'python',
            code: `import requests

# Example GET request structure
# response = requests.get("https://api.github.com/zen")
# print("GitHub Zen:", response.text)

print("Requests library allows fetching JSON with response.json()")`
          }
        },
        {
          id: 'python-7-3',
          slug: 'python-http-server-minimal-webserver',
          moduleNumber: 7,
          lessonNumberInModule: 3,
          title: {
            en: '7.3 Building a minimal web server with http.server',
            km: '៧.៣ ការបង្កើត Web Server សាមញ្ញដោយប្រើប្រាស់ http.server'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Build a simple, working web server using only Python\'s standard library — no framework — that responds to HTTP requests.',
            km: 'បង្កើត Web Server សាមញ្ញដែលដំណើរការដោយប្រើតែ Python Standard Library ដើម (គ្មាន Framework)។'
          },
          explanation: {
            en: 'Python\'s built-in http.server module lets you build a real, working web server without installing anything extra. It is far more manual than Django, which helps you appreciate what frameworks automate.',
            km: 'Module http.server របស់ Python ជួយឱ្យអ្នកបង្កើត Web Server ពិតប្រាកដដោយមិនបាច់ដំឡើងអ្វីបន្ថែម។ ការធ្វើដោយដៃនេះ ជួយឱ្យអ្នកយល់ដឹងពីអ្វីដែល Framework សម្រួលឱ្យ។'
          },
          tutorial: {
            en: 'Basic http.server implementation:',
            km: 'ការសរសេរកូដ http.server សាមញ្ញ៖'
          },
          starterCode: {
            language: 'python',
            code: `from http.server import BaseHTTPRequestHandler, HTTPServer
import json

class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.end_headers()
        
        if self.path == '/health':
            response = {"status": "ok"}
        else:
            response = {"message": "Hello from a Python web server!"}
            
        self.wfile.write(json.dumps(response).encode())

if __name__ == "__main__":
    server = HTTPServer(("localhost", 8000), Handler)
    print("Server running at http://localhost:8000")
    # server.serve_forever()`
          },
          practiceExercise: {
            question: {
              en: 'Add a check so that visiting /health returns {"status": "ok"}.',
              km: 'បន្ថែមលក្ខខណ្ឌបើចូល /health ឱ្យត្រឡប់មកវិញនូវ {"status": "ok"}។'
            },
            solution: `if self.path == '/health':\n    response = {"status": "ok"}`
          },
          tips: {
            en: 'Always call self.end_headers() before writing the response body with self.wfile.write().',
            km: 'ត្រូវហៅ self.end_headers() ជានិច្ច មុនពេលសរសេរ Response Body ដោយ self.wfile.write()។'
          }
        },
        {
          id: 'python-7-4',
          slug: 'python-http-server-handling-get-post',
          moduleNumber: 7,
          lessonNumberInModule: 4,
          title: {
            en: '7.4 Handling different HTTP methods (GET/POST) in a simple handler',
            km: '៧.៤ ការគ្រប់គ្រង HTTP Methods ផ្សេងៗ (GET/POST) ក្នុង Handler'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Implement do_GET() and do_POST() handler methods, parsing incoming request body payloads.',
            km: 'សរសេរ do_GET() និង do_POST() handler methods និងអានទិន្នន័យពី Request Body។'
          },
          explanation: {
            en: 'In BaseHTTPRequestHandler, HTTP methods correspond to handler methods like do_GET(), do_POST(), and do_DELETE(). Incoming POST data is read via self.rfile based on Content-Length.',
            km: 'ក្នុង BaseHTTPRequestHandler, HTTP Methods ឆ្លើយតបទៅនឹង handler methods ដូចជា do_GET(), do_POST()។ ទិន្នន័យ POST ត្រូវអានតាម self.rfile។'
          },
          tutorial: {
            en: 'Reading POST JSON body in http.server:',
            km: 'ការអានទិន្នន័យ POST JSON Body ក្នុង http.server៖'
          },
          starterCode: {
            language: 'python',
            code: `# Example of reading POST payload in do_POST:
# content_len = int(self.headers.get('Content-Length', 0))
# post_body = self.rfile.read(content_len)
# data = json.loads(post_body)`
          }
        },
        {
          id: 'python-7-5',
          slug: 'python-practice-json-echo-endpoint',
          moduleNumber: 7,
          lessonNumberInModule: 5,
          title: {
            en: '7.5 Practice: build an endpoint that accepts a POST request and echoes it back as JSON',
            km: '៧.៥ អនុវត្ត៖ បង្កើត Endpoint ទទួល POST Request និង Echo ត្រឡប់មកវិញជា JSON'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Build a small POST echo endpoint that validates incoming JSON and echoes the payload back with a timestamp.',
            km: 'បង្កើត POST Echo Endpoint ដែលផ្ទៀងផ្ទាត់ទិន្នន័យ JSON និងផ្ញើព័ត៌មានត្រឡប់មកវិញជាមួយ Timestamp។'
          },
          explanation: {
            en: 'Synthesize HTTP POST handling, JSON parsing, and response creation into a complete handler method.',
            km: 'បូកបញ្ចូលការគ្រប់គ្រង POST Request, JSON parsing និងការឆ្លើយតប Response ទៅជា Handler method ពេញលេញ។'
          },
          tutorial: {
            en: 'Echo API handler pattern:',
            km: 'គំរូ Echo API Handler៖'
          },
          starterCode: {
            language: 'python',
            code: `import json
import time

def handle_echo(json_data: dict) -> dict:
    return {
        "received": json_data,
        "processed_at": time.time(),
        "status": "success"
    }

print(handle_echo({"title": "Test Note", "content": "Sample content"}))`
          }
        }
      ]
    },

    // Module 8 — Capstone Project (2 lessons + project)
    {
      moduleNumber: 8,
      title: {
        en: 'Module 8 — Capstone Project',
        km: 'មេរៀនទី ៨ — គម្រោង Capstone Project'
      },
      description: {
        en: 'Plan and build the Simple Notes API using Python\'s http.server module, persisting notes to a JSON file.',
        km: 'រៀបចំផែនការ និងបង្កើត Simple Notes API ដោយប្រើប្រាស់ module http.server របស់ Python និង រក្សាទុកក្នុង JSON File។'
      },
      lessons: [
        {
          id: 'python-8-1',
          slug: 'python-capstone-planning-notes-api',
          moduleNumber: 8,
          lessonNumberInModule: 1,
          title: {
            en: '8.1 Planning the Simple Notes API (data model, endpoints, features)',
            km: '៨.១ ការរៀបចំផែនការ Simple Notes API (Data Model, Endpoints, Features)'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Design the REST endpoints, Note data structure, and JSON storage schema before writing code.',
            km: 'រចនា REST Endpoints, Note Data Structure និង JSON storage schema មុនពេលចាប់ផ្តើមសរសេរកូដ។'
          },
          explanation: {
            en: 'Planning prior to building: map GET /notes, POST /notes, and DELETE /notes/<id> routes to corresponding functions and file read/write operations.',
            km: 'រៀបចំផែនការមុនពេលសាងសង់៖ កំណត់ផ្លូវ routes GET /notes, POST /notes, និង DELETE /notes/<id> ជាមួយ operations អាន/សរសេរ file។'
          },
          tutorial: {
            en: 'Architecture and data model layout:',
            km: 'រចនាសម្ព័ន្ធ និងគំរូទិន្នន័យ Data Model៖'
          },
          starterCode: {
            language: 'python',
            code: `# Notes API Plan:
# GET    /notes     -> List all notes from notes.json
# POST   /notes     -> Add a new note {title, content}
# DELETE /notes/id  -> Remove a note by ID`
          }
        },
        {
          id: 'python-8-2',
          slug: 'python-capstone-building-notes-api',
          moduleNumber: 8,
          lessonNumberInModule: 2,
          title: {
            en: '8.2 Building the Simple Notes API (full guided build)',
            km: '៨.២ ការបង្កើត Simple Notes API (ការណែនាំសាងសង់ពេញលេញ)'
          },
          durationMinutes: 45,
          difficulty: 'Intermediate',
          objective: {
            en: 'Build and deploy the full framework-free Simple Notes REST API with file persistence and error handling.',
            km: 'សាងសង់ និងរៀបចំ Simple Notes REST API ពេញលេញដែលគ្មាន framework ជាមួយការរក្សាទុកទិន្នន័យក្នុង File។'
          },
          explanation: {
            en: 'Combine everything learned in Modules 2-7: classes, JSON file handling, http.server handlers, status codes, and input validation into a complete API project.',
            km: 'ផ្សំចំណេះដឹងដែលបានរៀនទាំងអស់ពីមេរៀនទី ២ ដល់ទី ៧៖ classes, JSON handling, http.server handlers, status codes, និង validation ទៅជាគម្រោង API ពេញលេញ។'
          },
          tutorial: {
            en: 'Run the capstone project in the interactive playground.',
            km: 'សាកល្បងដំណើរកូដ Capstone ក្នុង Interactive Playground៖'
          },
          starterCode: {
            language: 'python',
            code: `print("Simple Notes API Capstone Ready! Check the Capstone tab to test the server.")`
          }
        }
      ]
    }
  ]
};
