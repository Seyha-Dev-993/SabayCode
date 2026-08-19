import { Lesson } from '../types';

export const pythonLessonsPart2: Lesson[] = [
  {
    id: "py-match",
    title: { en: "Python Match", km: "ការផ្ទៀងផ្ទាត់ Match" },
    content: {
      en: `### Structural Pattern Matching (Match-Case)
Introduced in Python 3.10, the \`match\` statement is similar to \`switch\` in other languages. It compares a subject value to one or more patterns inside \`case\` blocks.

\`\`\`python
match status:
    case 200:
        print("Success")
    case 404:
        print("Not Found")
    case _:
        print("Unknown Status") # Wildcard case
\`\`\`

> **Note:** The underscore \`_\` acts as a wildcard, catching any values that didn't match the previous cases.`,
      km: `### ការផ្ទៀងផ្ទាត់លំនាំ (Match-Case)
ត្រូវបានណែនាំនៅក្នុង Python កំណែ 3.10 សេចក្តីថ្លែងការណ៍ \`match\` មានលក្ខណៈស្រដៀងនឹង \`switch\` នៅក្នុងភាសាផ្សេងទៀតដែរ។ វាប្រៀបធៀបតម្លៃជាមួយលំនាំមួយ ឬច្រើននៅក្នុងប្លុក \`case\`។

\`\`\`python
match status:
    case 200:
        print("Success")
    case 404:
        print("Not Found")
    case _:
        print("Unknown Status") # ករណីទូទៅបើមិនត្រូវនឹងលក្ខខណ្ឌណាទាំងអស់
\`\`\`

> **ចំណាំ៖** សញ្ញាខណ្ឌសង្កត់ \`_\` ដើរតួជា wildcard ដែលចាប់រាល់តម្លៃដែលមិនត្រូវនឹងករណីមុនៗទាំងអស់។`
    },
    starterCode: `# Pattern matching demo
status_code = 404

match status_code:
    case 200:
        print("OK (Success)")
    case 400:
        print("Bad Request")
    case 404:
        print("Page Not Found!")
    case _:
        print("Server error or unknown status.")`
  },
  {
    id: "py-while",
    title: { en: "Python While Loops", km: "លូប While Loops" },
    content: {
      en: `### Conditional Loop (While)
With the \`while\` loop we can execute a set of statements as long as a condition is true.

### Loop Control
* \`break\` — terminates the loop entirely.
* \`continue\` — skips the current iteration and jumps to the next.
* \`else\` — executes a block of code once when the condition is no longer true.`,
      km: `### លូបតាមលក្ខខណ្ឌ (While Loops)
ជាមួយលូប \`while\` យើងអាចដំណើរការបណ្តុំកូដដដែលៗ ដរាបណាលក្ខខណ្ឌរបស់វាវាយតម្លៃឃើញពិត (True)។

### ការគ្រប់គ្រងលូប
* \`break\` — បញ្ឈប់លូបទាំងស្រុង។
* \`continue\` — រំលងការរត់ជុំបច្ចុប្បន្ន រួចលោតទៅជុំបន្ទាប់ភ្លាមៗ។
* \`else\` — ដំណើរការប្លុកកូដតែម្តងគត់ នៅពេលលក្ខខណ្ឌលែងពិត។`
    },
    starterCode: `count = 1
while count <= 5:
    print("Loop iteration:", count)
    count += 1
else:
    print("While condition became False, inside else block!")`
  },
  {
    id: "py-for",
    title: { en: "Python For Loops", km: "លូប For Loops" },
    content: {
      en: `### Sequence Iteration (For Loop)
A \`for\` loop is used for iterating over a sequence (such as a list, a tuple, a dictionary, a set, or a string).

Unlike the \`for\` keyword in other programming languages, it works more like an iterator method found in other object-oriented programming languages.

\`\`\`python
for fruit in ["apple", "banana"]:
    print(fruit)
\`\`\``,
      km: `### លូបស្កែនលំដាប់លំដោយ (For Loops)
លូប \`for\` ត្រូវបានប្រើដើម្បីដើរកាត់ ឬស្កែនលើធាតុផ្សេងៗនៃលំដាប់លំដោយ (ដូចជា list, tuple, dictionary, set ឬ string)។

ខុសពីពាក្យគន្លឹះ \`for\` នៅក្នុងភាសាសរសេរកម្មវិធីផ្សេងទៀត វាមិនតម្រូវឱ្យបង្កើតអថេរចង្អុលលិបិដកដោយដៃឡើយ។

\`\`\`python
for fruit in ["apple", "banana"]:
    print(fruit)
\`\`\``
    },
    starterCode: `languages = ["Khmer", "English", "French"]
for lang in languages:
    if lang == "French":
        continue # Skip French
    print("Language active:", lang)`
  },
  {
    id: "py-functions",
    title: { en: "Python Functions", km: "អនុគមន៍ Functions" },
    content: {
      en: `### Defining Functions
A function is a block of code which only runs when it is called. You can pass data, known as parameters, into a function.

To declare a function, use the \`def\` keyword:
\`\`\`python
def my_function(name):
    print("Hello", name)
\`\`\`

To return a value, use the \`return\` statement.`,
      km: `### ការបង្កើតអនុគមន៍ (Functions)
អនុគមន៍គឺជាប្លុកកូដដែលដំណើរការតែនៅពេលវាត្រូវបានហៅប៉ុណ្ណោះ។ អ្នកអាចបញ្ជូនទិន្នន័យ (ហៅថា parameters) ទៅកាន់វាបាន។

ដើម្បីបង្កើតអនុគមន៍ ត្រូវប្រើពាក្យគន្លឹះ \`def\`៖
\`\`\`python
def my_function(name):
    print("Hello", name)
\`\`\`

ដើម្បីប្រគល់តម្លៃត្រឡប់មកវិញ ត្រូវប្រើសេចក្តីថ្លែងការណ៍ \`return\`។`
    },
    starterCode: `def greet_student(name, school="Sabaicode"):
    return f"សួស្តី {name} មកពីសាលា {school}!"

message = greet_student("ណាន សីហា")
print(message)`
  },
  {
    id: "py-range",
    title: { en: "Python Range", km: "អនុគមន៍លំដាប់ Range" },
    content: {
      en: `### Sequence of Numbers
The \`range()\` function returns a sequence of numbers, starting from 0 by default, and increments by 1 (by default), and stops before a specified number.

### Syntax
\`\`\`python
range(start, stop, step)
\`\`\`

* **start** — Optional integer specifying starting position (default is 0).
* **stop** — Required integer specifying stopping position (exclusive).
* **step** — Optional integer specifying incrementation step (default is 1).`,
      km: `### លំដាប់លំដោយនៃតួរលេខ (Range)
អនុគមន៍ \`range()\` ផ្ដល់នូវលំដាប់តួរលេខដែលចាប់ផ្ដើមពី ០ ជាលំនាំដើម និងកើនឡើង ១ ជាលំនាំដើម រួចបញ្ចប់មុនចំនួនដែលបានកំណត់។

### វាក្យសម្ពន្ធ
\`\`\`python
range(start, stop, step)
\`\`\`

* **start** — ទីតាំងចាប់ផ្តើម (ស្រេចចិត្ត, លំនាំដើមគឺ ០)។
* **stop** — ទីតាំងបញ្ចប់ (ត្រូវតែបញ្ជាក់, មិនរាប់បញ្ចូលតម្លៃនេះឡើយ)។
* **step** — ចំនួនជំហានកើនឡើង (ស្រេចចិត្ត, លំនាំដើមគឺ ១)។`
    },
    starterCode: `# Loop from 2 to 10 with step of 2
for i in range(2, 11, 2):
    print("Even number:", i)`
  },
  {
    id: "py-arrays",
    title: { en: "Python Arrays", km: "អារេ Arrays" },
    content: {
      en: `### Python Array Representation
Python does not have built-in support for Arrays, but Python Lists can be used instead. Alternatively, for strict type arrays, you import the \`array\` module.

\`\`\`python
import array as arr
numbers = arr.array('i', [1, 2, 3]) # Integer array
\`\`\`

> **Tip:** In 99% of Python data operations, programmers prefer native lists because they are extremely versatile, or the Numpy library for mathematical matrix arrays.`,
      km: `### ការប្រើប្រាស់អារេ (Arrays)
Python មិនមានការគាំទ្រអារេ (Arrays) បែបប្រពៃណីជាលក្ខណៈ built-in ទេ ប៉ុន្តែ Python Lists ត្រូវបានយកមកជំនួសការងារនេះបានយ៉ាងល្អ។ ឬអ្នកអាចនាំចូលម៉ូឌុល \`array\` ដើម្បីបង្កើតអារេមានប្រភេទតឹងរ៉ឹងបាន។

\`\`\`python
import array as arr
numbers = arr.array('i', [1, 2, 3]) # អារេប្រភេទ integer
\`\`\`

> **គន្លឹះ៖** ក្នុងការសរសេរកូដ Python ទូទៅ អ្នកសរសេរកម្មវិធីពេញនិយមប្រើ Lists ព្រោះវាមានភាពបត់បែនខ្លាំង ឬបណ្ណាល័យ Numpy សម្រាប់អារេម៉ាទ្រីសធំៗ។`
    },
    starterCode: `import array as arr

# Create integer array ('i' type code)
my_numbers = arr.array('i', [10, 20, 30, 40])
print("First item in array:", my_numbers[0])
print("Length of array:", len(my_numbers))`
  },
  {
    id: "py-iterators",
    title: { en: "Python Iterators", km: "អាយធើរ៉ាទ័រ Iterators" },
    content: {
      en: `### Iterating Protocols
An iterator is an object that contains a countable number of values. It implements the iterator protocol, consisting of methods \`__iter__()\` and \`__next__()\`.

Lists, tuples, dictionaries, and sets are all iterable objects. You can obtain an iterator from them using \`iter()\`.

\`\`\`python
mytuple = ("apple", "banana")
myit = iter(mytuple)
print(next(myit)) # Outputs "apple"
\`\`\`

**Expected Output:**
\`\`\`text
First Call: apple
Second Call: cherry
\`\`\``,
      km: `### ពិធីការនៃការដើរកាត់ (Iterators)
Iterator គឺជាវត្ថុដែលអាចរាប់ចំនួនតម្លៃបាន។ វាអនុវត្តពិធីការដែលរួមមានវិធីសាស្ត្រពីរគឺ \`__iter__()\` និង \`__next__()\`។

Lists, tuples, dictionaries, and sets គឺជា iterable objects។ អ្នកអាចទាញយក iterator ពីពួកវាដោយប្រើ \`iter()\`។

\`\`\`python
mytuple = ("apple", "banana")
myit = iter(mytuple)
print(next(myit)) # បង្ហាញ "apple"
\`\`\`

**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
First Call: apple
Second Call: cherry
\`\`\``
    },
    starterCode: `fruits = ["apple", "cherry"]
iterator = iter(fruits)

print("First Call:", next(iterator))
print("Second Call:", next(iterator))
# next(iterator) now would raise StopIteration error`
  },
  {
    id: "py-modules",
    title: { en: "Python Modules", km: "ម៉ូឌុល Modules" },
    content: {
      en: `### Code Modularization
Consider a module to be the same as a code library — a file containing a set of functions you want to include in your application.

### Keywords
* \`import module_name\` — imports entire module.
* \`from module_name import member\` — imports specific function/variable.
* \`import module as alias\` — renames module for short reference.`,
      km: `### ការបែងចែកកូដជាចំណែកៗ (Modules)
ចាត់ទុកម៉ូឌុល (Module) ដូចជាបណ្ណាល័យកូដ — វាជាឯកសារដែលមានសំណុំអនុគមន៍ដែលអ្នកចង់បញ្ចូលទៅក្នុងកម្មវិធីរបស់អ្នក។

### ពាក្យគន្លឹះ
* \`import module_name\` — នាំចូលម៉ូឌុលទាំងមូល។
* \`from module_name import member\` — នាំចូលតែអនុគមន៍/អថេរជាក់លាក់ណាមួយ។
* \`import module as alias\` — ដាក់ឈ្មោះហៅក្រៅឱ្យម៉ូឌុលដើម្បីងាយសរសេរកាត់។`
    },
    starterCode: `# Importing built-in module 'platform'
import platform as pf

print("Operating System name:")
print(pf.system())`
  },
  {
    id: "py-dates",
    title: { en: "Python Dates", km: "កាលបរិច្ឆេទ Dates" },
    content: {
      en: `### Date Handling (datetime)
A date in Python is not a data type of its own, but we can import a module named \`datetime\` to work with dates as date objects.

\`\`\`python
import datetime
x = datetime.datetime.now()
print(x.year)
\`\`\`

### Formatting Dates
Use the \`strftime()\` method to format date objects into readable strings. For example, \`%Y\` for 4-digit year, \`%B\` for full month name.`,
      km: `### ការគ្រប់គ្រងកាលបរិច្ឆេទ (Datetime)
កាលបរិច្ឆេទនៅក្នុង Python មិនមែនជាប្រភេទទិន្នន័យដាច់ដោយឡែកទេ ប៉ុន្តែយើងអាចនាំចូលម៉ូឌុល \`datetime\` ដើម្បីធ្វើការជាមួយវាជាវត្ថុកាលបរិច្ឆេទ។

\`\`\`python
import datetime
x = datetime.datetime.now()
print(x.year)
\`\`\`

### ការរៀបចំទម្រង់បង្ហាញកាលបរិច្ឆេទ
ប្រើវិធីសាស្ត្រ \`strftime()\` ដើម្បីបំលែងកាលបរិច្ឆេទទៅជាអក្សរ។ ឧទាហរណ៍៖ \`%Y\` សម្រាប់ឆ្នាំ៤ខ្ទង់, \`%B\` សម្រាប់ឈ្មោះខែពេញ។`
    },
    starterCode: `import datetime

now = datetime.datetime.now()
print("Exact current date-time object:", now)
print("Formatted Year:", now.strftime("%Y"))
print("Day of the week:", now.strftime("%A"))`
  },
  {
    id: "py-math",
    title: { en: "Python Math", km: "គណិតវិទ្យា Math" },
    content: {
      en: `### Mathematical Functions
Python has a set of built-in math functions, and an extensive \`math\` module that allows you to perform mathematical tasks on numbers.

### Built-in Functions
* \`min()\` and \`max()\` find lowest and highest values.
* \`abs()\` returns positive absolute value.
* \`pow(x, y)\` returns $x$ raised to power of $y$.

### Import module 'math'
Provides functions like \`math.sqrt()\`, \`math.ceil()\`, \`math.floor()\`, and constants like \`math.pi\`.`,
      km: `### អនុគមន៍គណិតវិទ្យា (Math)
Python មានសំណុំអនុគមន៍គណិតវិទ្យាស្រាប់ៗ និងម៉ូឌុល \`math\` ដ៏ទូលំទូលាយដែលអនុញ្ញាតឱ្យអ្នកធ្វើការគណនាលេខកម្រិតខ្ពស់។

### អនុគមន៍ស្រាប់
* \`min()\` និង \`max()\` ស្វែងរកតម្លៃតូចបំផុត និងធំបំផុត។
* \`abs()\` ផ្ដល់តម្លៃដាច់ខាត (វិជ្ជមានជានិច្ច)។
* \`pow(x, y)\` គណនាស្វ័យគុណ $x^y$។

### ម៉ូឌុល 'math'
ផ្ដល់អនុគមន៍ដូចជា \`math.sqrt()\` (ឫសការ៉េ), \`math.ceil()\` (បង្គត់ឡើង), \`math.floor()\` (បង្គត់ចុះ) និងតម្លៃថេរ \`math.pi\`។`
    },
    starterCode: `import math

print("Square root of 64 is:", math.sqrt(64))
print("Ceil of 4.15 is:", math.ceil(4.15))
print("Pi constant value:", math.pi)`
  },
  {
    id: "py-json",
    title: { en: "Python JSON", km: "ការគ្រប់គ្រង JSON" },
    content: {
      en: `### JSON Parsing & Generation
JSON is a syntax for storing and exchanging data. Python has a built-in package called \`json\` to handle JSON translations.

### Translation Methods
* \`json.loads()\` — parses a JSON string into a Python Dictionary.
* \`json.dumps()\` — converts a Python Dictionary into a JSON string.`,
      km: `### ការវិភាគ និងបង្កើត JSON
JSON គឺជាវាក្យសម្ពន្ធសម្រាប់រក្សាទុក និងផ្លាស់ប្តូរទិន្នន័យ។ Python មានកញ្ចប់ស្រាប់ហៅថា \`json\` ដើម្បីធ្វើការងារនេះ។

### វិធីសាស្ត្របំលែង
* \`json.loads()\` — បំលែងខ្សែអក្សរ JSON ទៅជា Python Dictionary។
* \`json.dumps()\` — បំលែង Python Dictionary ទៅជាខ្សែអក្សរ JSON។`
    },
    starterCode: `import json

# JSON data string
student_json = '{"name": "Sokchea", "age": 21, "city": "Phnom Penh"}'

# Parse to dict
student_dict = json.loads(student_json)
print("Parsed student name is:", student_dict["name"])

# Convert back to JSON format with indentation
json_output = json.dumps(student_dict, indent=2)
print("Indented JSON output:")
print(json_output)`
  },
  {
    id: "py-regex",
    title: { en: "Python RegEx", km: "កន្សោម RegEx" },
    content: {
      en: `### Regular Expressions
A RegEx, or Regular Expression, is a sequence of characters that forms a search pattern. Python has a built-in package called \`re\` for matching patterns in strings.

### Key Functions
* \`re.search()\` — Returns Match object if search pattern is found.
* \`re.findall()\` — Returns list containing all matches.
* \`re.sub()\` — Replaces one or many matches with a replacement string.`,
      km: `### កន្សោមរៀបរយ (Regular Expressions - RegEx)
RegEx គឺជាលំដាប់តួអក្សរដែលបង្កើតជាគំរូស្វែងរក (Search pattern)។ Python រួមបញ្ចូលកញ្ចប់ \`re\` សម្រាប់អនុវត្តការងារនេះលើខ្សែអក្សរ។

### អនុគមន៍គន្លឹះ
* \`re.search()\` — ផ្ដល់ Match object បើស្វែងរកឃើញត្រូវគំរូ។
* \`re.findall()\` — បង្កើតជា list នៃរាល់ពាក្យដែលស្វែងរកឃើញ។
* \`re.sub()\` — ជំនួសពាក្យដែលរកឃើញដោយពាក្យថ្មី។`
    },
    starterCode: `import re

phrase = "Learning Python in 2026 is awesome!"

# Find all occurrences of digits
digits = re.findall("\\\\d+", phrase)
print("Digits found in phrase:", digits)

# Replace 'awesome' with 'essential'
new_phrase = re.sub("awesome", "essential", phrase)
print("Modified phrase:", new_phrase)`
  },
  {
    id: "py-pip",
    title: { en: "Python PIP", km: "កម្មវិធីគ្រប់គ្រង PIP" },
    content: {
      en: `### Package Manager for Python
PIP is a package manager for Python packages/modules. A package contains all the files needed for a module.

> **Note:** Since you are running in a secure browser sandbox, actual package download from PIP is disabled in this environment. The commands below are for your **local reference only**.

### Essential Terminal Commands
To install a package named \`camelcase\`:
\`\`\`bash
pip install camelcase
\`\`\`

To uninstall:
\`\`\`bash
pip uninstall camelcase
\`\`\`

To list installed libraries:
\`\`\`bash
pip list
\`\`\``,
      km: `### កម្មវិធីគ្រប់គ្រងកញ្ចប់បណ្ណាល័យ (PIP)
PIP គឺជាកម្មវិធីគ្រប់គ្រងកញ្ចប់ (Package Manager) សម្រាប់កម្មវិធី ឬម៉ូឌុលផ្សេងៗរបស់ Python។

> **ចំណាំ៖** ដោយសារតែអ្នកកំពុងដំណើរការកូដនៅក្នុង Browser Sandbox របស់ Sabaicode ការទាញយកកញ្ចប់ពិតប្រាកដត្រូវបានបិទ។ ពាក្យបញ្ជាខាងក្រោមគឺសម្រាប់ **ជាឯកសារយោងនៅមូលដ្ឋានរបស់អ្នកតែប៉ុណ្ណោះ**។

### ពាក្យបញ្ជា Terminal សំខាន់ៗ
ដើម្បីដំឡើងកញ្ចប់ឈ្មោះ \`camelcase\`៖
\`\`\`bash
pip install camelcase
\`\`\`

ដើម្បីលុបវិញ៖
\`\`\`bash
pip uninstall camelcase
\`\`\`

ដើម្បីបង្ហាញបញ្ជីដែលបានដំឡើង៖
\`\`\`bash
pip list
\`\`\``
    },
    starterCode: `# PIP is conceptual on sandbox, but we can verify our path imports!
print("Run this python code to see current sys search path packages:")
import sys
for path in sys.path[:3]:
    print("-", path)`
  },
  {
    id: "py-tryexcept",
    title: { en: "Python Try...Except", km: "ការចាប់កំហុស Try...Except" },
    content: {
      en: `### Exception Handling
When an error occurs, Python will normally stop and generate an error message. These exceptions can be handled using the \`try\` statement.

### The Blocks
* **try:** Lets you test a block of code for errors.
* **except:** Lets you handle the error.
* **else:** Executes if no errors occurred.
* **finally:** Executes regardless of any try-except errors.`,
      km: `### ការគ្រប់គ្រងកំហុសលោតឡើង (Exceptions)
នៅពេលដែលមានកំហុសកើតឡើង ជាធម្មតា Python នឹងបញ្ឈប់ការដំណើរការកូដ និងបង្ហាញសារកំហុស។ យើងអាចទប់ស្កាត់កុំឱ្យគាំងកម្មវិធីដោយប្រើ \`try...except\`។

### ផ្នែកនីមួយៗ
* **try:** សាកល្បងដំណើរការកូដដែលសង្ស័យថានឹងមានកំហុស។
* **except:** ចាប់យក និងគ្រប់គ្រងកំហុសប្រសិនបើវាកើតឡើងមែន។
* **else:** ដំណើរការបើគ្មានកំហុសណាមួយកើតឡើងឡើយ។
* **finally:** ដំណើរការជាដាច់ខាត ទោះបីជាមានកំហុសឬអត់ក៏ដោយ។`
    },
    starterCode: `try:
    # Intentionally dividing by zero to raise error
    result = 10 / 0
except ZeroDivisionError as error:
    print("Caught Division Error:", error)
finally:
    print("Cleanup actions completed here inside finally block!")`
  },
  {
    id: "py-formatting",
    title: { en: "Python String Formatting", km: "ការរៀបចំទ្រង់ទ្រាយខ្សែអក្សរ" },
    content: {
      en: `### Modern f-Strings
To make sure a string will display as expected, we format it. Python 3.6 introduced **f-strings**, the cleanest and fastest way to format strings.

### Syntax
Add an \`f\` prefix before the string, and wrap your variables or expressions inside curly braces \`{}\`.

\`\`\`python
price = 49
txt = f"The price is {price:.2f} dollars"
\`\`\`

You can also use the older \`.format()\` syntax:
\`\`\`python
txt = "The price is {:.2f} dollars".format(price)
\`\`\``,
      km: `### ខ្សែអក្សរទម្រង់ f-Strings ទំនើប
ដើម្បីធានាថាខ្សែអក្សរនឹងបង្ហាញលទ្ធផលស្របតាមការចង់បាន យើងកំណត់ទម្រង់វា។ Python 3.6 បានណែនាំ **f-strings** ដែលជាវិធីលឿន និងស្អាតបំផុតក្នុងការបញ្ចូលតម្លៃអថេរទៅក្នុងអត្ថបទ។

### វាក្យសម្ពន្ធ
គ្រាន់តែបន្ថែមអក្សរ \`f\` នៅពីមុខសញ្ញាធ្មេញកណ្តុរ រួចដាក់អថេរ ឬកន្សោមឡូហ្សិកនៅក្នុងសញ្ញាដង្កៀប \`{}\`។

\`\`\`python
price = 49
txt = f"The price is {price:.2f} dollars"
\`\`\`

អ្នកក៏អាចប្រើប្រាស់វាក្យសម្ពន្ធចាស់ \`.format()\` បានផងដែរ៖
\`\`\`python
txt = "The price is {:.2f} dollars".format(price)
\`\`\``
    },
    starterCode: `name = "Seyha"
score = 0.957

# Format name with casing and score as percentage
announcement = f"Student {name.upper()} scored {score:.1%}"
print(announcement)`
  },
  {
    id: "py-none",
    title: { en: "Python None", km: "តម្លៃទទេ None" },
    content: {
      en: `### The None Keyword
The \`None\` keyword is used to define a null value, or no value at all. It is not the same as \`0\`, \`False\`, or an empty string \`""\`. It is a data type of its own (\`NoneType\`).

### Comparison with None
Always use the identity operator \`is\` or \`is not\` when checking if a variable is \`None\`.

\`\`\`python
if val is None:
    print("Value is Null")
\`\`\``,
      km: `### ពាក្យគន្លឹះ None
ពាក្យគន្លឹះ \`None\` ត្រូវបានប្រើដើម្បីកំណត់តម្លៃទទេ (Null value) ឬមិនមានតម្លៃទាល់តែសោះ។ វាខុសពី \`0\` ឡូហ្សិក \`False\` ឬខ្សែអក្សរទទេ \`""\`។ វាជាប្រភេទទិន្នន័យផ្ទាល់ខ្លួនរបស់វា (\`NoneType\`)។

### ការប្រៀបធៀបជាមួយ None
ត្រូវប្រើប្រមាណវិធីអត្តសញ្ញាណ \`is\` ឬ \`is not\` ជានិច្ចនៅពេលចង់ពិនិត្យថាតើអថេរជា \`None\` ឬយ៉ាងណា។

\`\`\`python
if val is None:
    print("Value is Null")
\`\`\``
    },
    starterCode: `user_profile_photo = None

if user_profile_photo is None:
    print("User has no profile photo. Showing placeholder avatar.")
else:
    print("Rendering user photo.")`
  },
  {
    id: "py-user-input",
    title: { en: "Python User Input", km: "ការទទួលធាតុចូល User Input" },
    content: {
      en: `### Terminal Inputs
Python allows you to ask the user for input via the terminal. We achieve this using the built-in \`input()\` function.

> **Note:** The input returned by the \`input()\` function is always of type **String**. If you need to perform calculations, you must cast it to an integer or float first!

\`\`\`python
age = int(input("Enter age: "))
\`\`\`

In our online sandboxed executor, you can simulate user input by assigning mock variables, or executing real prompts.`,
      km: `### ការទទួលព័ត៌មានពីអ្នកប្រើប្រាស់ (User Input)
Python អនុញ្ញាតឱ្យអ្នកសួររកព័ត៌មានពីអ្នកប្រើប្រាស់តាមរយៈ terminal។ យើងប្រើប្រាស់អនុគមន៍ \`input()\`។

> **ចំណាំ៖** តម្លៃដែលផ្ដល់ដោយអនុគមន៍ \`input()\` គឺតែងតែជាប្រភេទ **ខ្សែអក្សរ (String)** ជានិច្ច។ បើអ្នកចង់យកវាទៅធ្វើគណនា ត្រូវតែបំលែងវាទៅជា int ឬ float ជាមុនសិន!

\`\`\`python
age = int(input("Enter age: "))
\`\`\`

នៅក្នុងកម្មវិធី sandbox របស់យើង អ្នកអាចសរសេរតម្រង់តម្លៃ ឬបញ្ចូលវាផ្ទាល់បាន។`
    },
    starterCode: `# Simulation of user input since standard terminal stdin requires prompts
username = "Nan Seyha"
# Let's mock input
entered_value = "25"
user_age = int(entered_value)

print(f"Profile: Name = {username}, Age next year = {user_age + 1}")`
  },
  {
    id: "py-virtualenv",
    title: { en: "Python VirtualEnv", km: "បរិស្ថាននិម្មិត VirtualEnv" },
    content: {
      en: `### Sandboxed Project Environments
A Virtual Environment is a self-contained directory tree that contains a Python installation for a particular version of Python, plus a number of additional packages.

This prevents package version conflicts between different local applications on your machine.

> **Note:** Since you are in a web-based sandbox, virtual environment directories cannot be actively created inside this local lesson page. This page serves as a **highly recommended local development guide**.

### Essential Commands (to run on your local machine)
To create a virtualenv named \`myenv\`:
\`\`\`bash
python -m venv myenv
\`\`\`

To activate on macOS/Linux:
\`\`\`bash
source myenv/bin/activate
\`\`\`

To activate on Windows:
\`\`\`bash
myenv\\\\Scripts\\\\activate
\`\`\``,
      km: `### បរិស្ថានអភិវឌ្ឍន៍ឯករាជ្យ (Virtual Environment)
បរិស្ថាននិម្មិត (Virtual Environment) គឺជាការបង្កើតថតឯកសារស្វ័យត ដែលផ្ទុកទៅដោយការដំឡើង Python និងកញ្ចប់បណ្ណាល័យដាច់ដោយឡែកសម្រាប់គម្រោងកម្មវិធីនីមួយៗ។

វាជួយទប់ស្កាត់ការជាន់គ្នា ឬប៉ះទង្គិចគ្នានៃកំណែបណ្ណាល័យរវាងគម្រោងកម្មវិធីផ្សេងៗលើម៉ាស៊ីនតែមួយ។

> **ចំណាំ៖** ដោយសារតែអ្នកកំពុងរៀននៅលើ Web sandbox ការបង្កើតបរិស្ថាននិម្មិតពិតប្រាកដត្រូវបានបិទ។ មេរៀននេះជា **ការណែនាំដ៏សំខាន់សម្រាប់ការសរសេរកូដនៅមូលដ្ឋានរបស់អ្នក**។

### បញ្ជាសំខាន់ៗ (សម្រាប់សាកល្បងលើកុំព្យូទ័ររបស់អ្នក)
ដើម្បីបង្កើតបរិស្ថាននិម្មិតឈ្មោះ \`myenv\`៖
\`\`\`bash
python -m venv myenv
\`\`\`

ដើម្បីដំណើរការលើ macOS/Linux៖
\`\`\`bash
source myenv/bin/activate
\`\`\`

ដើម្បីដំណើរការលើ Windows៖
\`\`\`bash
myenv\\\\Scripts\\\\activate
\`\`\``
    },
    starterCode: `# Explanatory page python check
print("Virtual environment concepts loaded.")
print("Remember: Always use venv when starting local production projects!")`
  }
];
