import { Lesson } from '../types';

export const pythonLessonsPart1: Lesson[] = [
  {
    id: "py-home",
    title: { en: "Python Home", km: "ទំព័រដើម Python" },
    content: {
      en: `### Welcome to Python Programming!
Python is a high-level, interpreted, general-purpose programming language. It is renowned for its clean syntax, readability, and versatile capabilities ranging from web development to Artificial Intelligence and Data Science.

### Course Outline
Through this comprehensive course, you will learn:
1. Core Python Basics (Variables, Loops, Functions, and Operators)
2. Object-Oriented Programming (OOP, Classes, Methods, Inheritance)
3. Advanced File Handling operations and virtual file persistence

### Try it Yourself
Click **Run Code** to execute your first Python statement. It outputs standard welcoming logs.`,
      km: `### សូមស្វាគមន៍មកកាន់ការសិក្សាសរសេរកូដ Python!
Python គឺជាភាសាសរសេរកម្មវិធីកម្រិតខ្ពស់ (High-level) បកប្រែផ្ទាល់ (Interpreted) និងប្រើប្រាស់ជាទូទៅ។ វាមានភាពល្បីល្បាញដោយសារវាក្យសម្ពន្ធស្អាត ងាយស្រួលអាន និងមានសមត្ថភាពខ្ពស់ តាំងពីការបង្កើតគេហទំព័រ រហូតដល់បញ្ញាសិប្បនិម្មិត (AI) និងវិទ្យាសាស្ត្រទិន្នន័យ (Data Science)។

### គ្រោងនៃវគ្គសិក្សា
តាមរយៈវគ្គសិក្សាដ៏ទូលំទូលាយនេះ អ្នកនឹងរៀន៖
១. មូលដ្ឋានគ្រឹះនៃ Python (អថេរ លូប អនុគមន៍ និងប្រមាណវិធី)
២. ការសរសេរកូដតម្រង់ទិសវត្ថុ (OOP, Classes, Methods, Inheritance)
៣. ប្រតិបត្តិការគ្រប់គ្រងឯកសារកម្រិតខ្ពស់ និងការរក្សាទុកឯកសារនិម្មិត

### សាកល្បងអនុវត្តដោយខ្លួនឯង
ចុចលើប៊ូតុង **ដំណើរការកូដ** (Run Code) ដើម្បីសាកល្បងកូដ Python ដំបូងរបស់អ្នក!`
    },
    starterCode: `print("សួស្តីពិភពលោក! Welcome to Python inside Sabaicode!")
print("Python is fun, clean, and incredibly powerful!")`
  },
  {
    id: "py-intro",
    title: { en: "Python Intro", km: "សេចក្តីផ្តើម Python" },
    content: {
      en: `### What is Python?
Python is a popular programming language created by Guido van Rossum and released in 1991. It is used for:
* Web development (server-side)
* Software development
* Mathematics and system scripting
* Machine Learning & AI

### Why Python?
* Works on different platforms (Windows, Mac, Linux, etc.)
* Clean syntax that resembles English words
* Allows writing programs with fewer lines of code than other languages
* Executes on an interpreter, meaning code runs as soon as it is written.`,
      km: `### តើអ្វីទៅជា Python?
Python គឺជាភាសាសរសេរកម្មវិធីដ៏ពេញនិយមមួយដែលត្រូវបានបង្កើតឡើងដោយលោក Guido van Rossum និងត្រូវបានបញ្ចេញនៅឆ្នាំ ១៩៩១។ វាត្រូវបានប្រើសម្រាប់៖
* ការអភិវឌ្ឍគេហទំព័រ (ខាង Server)
* ការបង្កើតកម្មវិធីកុំព្យូទ័រ
* គណិតវិទ្យា និងការសរសេរ Script ប្រព័ន្ធលីនុច/វីនដូ
* ការរៀនរបស់ម៉ាស៊ីន (Machine Learning) & AI

### ហេតុអ្វីបានជាជ្រើសរើស Python?
* ដំណើរការលើប្រព័ន្ធប្រតិបត្តិការខុសៗគ្នា (Windows, Mac, Linux ជាដើម)
* មានវាក្យសម្ពន្ធងាយស្រួល ស្រដៀងនឹងពាក្យភាសាអង់គ្លេស
* អនុញ្ញាតឱ្យសរសេរកម្មវិធីដោយប្រើកូដតិចជាងភាសាផ្សេងទៀត
* ដំណើរការលើ Interpreter មានន័យថាកូដដំណើរការភ្លាមៗនៅពេលសរសេររួច។`
    },
    starterCode: `# This is a Python introduction demo
import sys
print("Python Version is:")
print(sys.version)
print("Hello, world! We are starting Python.")`
  },
  {
    id: "py-get-started",
    title: { en: "Python Get Started", km: "ការចាប់ផ្តើមដំបូង" },
    content: {
      en: `### Quick Setup & Core Entry
In Python, you don't need a main method wrapping or complex class templates. To run code, we simply write instructions from top to bottom.

### Executing Code
To print a string of characters on the terminal, we invoke the built-in \`print()\` function.
\`\`\`python
print("Hello, Sabaicode!")
\`\`\`

> **Note:** Python files use the \`.py\` file extension.`,
      km: `### ការចាប់ផ្តើមយ៉ាងរហ័ស
នៅក្នុង Python អ្នកមិនត្រូវការការរៀបចំរចនាសម្ព័ន្ធ Class ស្មុគស្មាញ ឬរុំព័ទ្ធដោយ Function មេណាមួយឡើយ។ ដើម្បីដំណើរការកូដ យើងគ្រាន់តែសរសេរការណែនាំពីលើចុះក្រោមប៉ុណ្ណោះ។

### ការដំណើរការកូដ
ដើម្បីបោះពុម្ពខ្សែអក្សរទៅកាន់អេក្រង់ terminal យើងគ្រាន់តែហៅអនុគមន៍ស្រាប់ \`print()\`។
\`\`\`python
print("Hello, Sabaicode!")
\`\`\`

> **ចំណាំ៖** ឯកសារ Python ប្រើប្រាស់កន្ទុយ \`.py\`។`
    },
    starterCode: `# Write your Hello world script here and click Run Code
print("សូមស្វាគមន៍មកកាន់ Sabaicode ជំនាន់ថ្មី!")`
  },
  {
    id: "py-syntax",
    title: { en: "Python Syntax", km: "វាក្យសម្ពន្ធ Python" },
    content: {
      en: `### Python Indentation
Indentation refers to the spaces at the beginning of a code line. In other languages, indentation is for readability; in Python, **it is syntactically mandatory** to define code blocks (like loops or conditions).

\`\`\`python
if 5 > 2:
    print("Five is greater than two!") # Indented by 4 spaces
\`\`\`

### Common Error
If you skip indentation, Python will throw an \`IndentationError\`. Try correcting the starter code!`,
      km: `### ការខំខិតចូលបន្ទាត់ (Python Indentation)
Indentation សំដៅលើចន្លោះទទេ (Spaces) នៅដើមបន្ទាត់កូដ។ នៅក្នុងភាសាដទៃទៀត ការខំខិតចូលបន្ទាត់គឺដើម្បីងាយស្រួលមើល ប៉ុន្តែនៅក្នុង Python **វាជាកាតព្វកិច្ចវាក្យសម្ពន្ធ** ដើម្បីកំណត់ប្លុកកូដ (ដូចជាលូប ឬលក្ខខណ្ឌ)។

\`\`\`python
if 5 > 2:
    print("Five is greater than two!") # ខិតចូលបន្ទាត់ ៤ ដង (Spaces)
\`\`\`

### កំហុសទូទៅ
ប្រសិនបើអ្នករំលងការខិតចូលបន្ទាត់ Python នឹងបង្ហាញកំហុស \`IndentationError\`។ សាកល្បងកែកូដខាងក្រោម!`
    },
    starterCode: `# Correct this indentation to prevent IndentationError!
if 10 > 5:
print("Ten is greater than five!") # This line lacks indentation`
  },
  {
    id: "py-output",
    title: { en: "Python Output", km: "ការបង្ហាញលទ្ធផល" },
    content: {
      en: `### Printing Outputs
The \`print()\` function is frequently used to output variables or expressions.

### Multiple Items
You can print multiple items in a single print statement by separating them with commas \`,\`. Commas automatically insert a space separator.
\`\`\`python
print("Value is", 100, "USD")
\`\`\`

You can also use the \`+\` operator to concatenate strings:
\`\`\`python
print("Hello " + "World")
\`\`\``,
      km: `### ការបង្ហាញលទ្ធផល (Output)
អនុគមន៍ \`print()\` ត្រូវបានប្រើជាញឹកញាប់បំផុតដើម្បីបង្ហាញលទ្ធផលអថេរ ឬកន្សោមវិធីផ្សេងៗ។

### ធាតុច្រើនបញ្ចូលគ្នា
អ្នកអាចបង្ហាញធាតុជាច្រើនក្នុងសេចក្តីថ្លែងការណ៍តែមួយដោយប្រើសញ្ញាក្បៀស \`,\`។ សញ្ញាក្បៀសនឹងបន្ថែមចន្លោះទទេដោយស្វ័យប្រវត្ត។
\`\`\`python
print("តម្លៃគឺ", 100, "ដុល្លារ")
\`\`\`

អ្នកក៏អាចប្រើសញ្ញាបូក \`+\` ដើម្បីភ្ជាប់ខ្សែអក្សរបានផងដែរ៖
\`\`\`python
print("Hello " + "World")
\`\`\``
    },
    starterCode: `name = "Seyha"
age = 24
# Print utilizing both commas and plus sign
print("Developer:", name)
print("Age:" + " " + str(age))`
  },
  {
    id: "py-comments",
    title: { en: "Python Comments", km: "មតិយោបល់ Comments" },
    content: {
      en: `### Writing Comments
Comments prevent block execution when testing code and provide crucial logic documentation.

### Single-Line Comments
Single-line comments start with the hash symbol \`#\`.
\`\`\`python
# This is a comment statement
print("This executes")
\`\`\`

### Multi-Line Comments
Python doesn't have a specific syntax for multi-line comments. You can write a multi-line string (using triple quotes \`"""\`) that is not assigned to a variable; Python ignores it.`,
      km: `### ការសរសេរមតិយោបល់ (Comments)
មតិយោបល់ជួយការពារកុំឱ្យបន្ទាត់កូដត្រូវបានដំណើរការ និងជួយកត់ត្រាការពន្យល់កូដដ៏សំខាន់។

### Comments មួយបន្ទាត់
ចាប់ផ្តើមដោយសញ្ញាទ្រុងជ្រូក \`#\`។
\`\`\`python
# នេះជា comment មួយបន្ទាត់
print("This executes")
\`\`\`

### Comments ច្រើនបន្ទាត់
Python មិនមានវាក្យសម្ពន្ធជាក់លាក់សម្រាប់ comment ច្រើនបន្ទាត់ទេ។ អ្នកអាចប្រើប្រាស់សញ្ញាធ្មេញកណ្តុរ៣ជាន់ \`"""\` ដែលមិនត្រូវបានភ្ជាប់ទៅនឹងអថេរណាមួយឡើយ នោះ Python នឹងមិនដំណើរការវាទេ។`
    },
    starterCode: `# This comment prevents this line from crashing
# print("This will not execute")

"""
This is a multiline comment
using triple quotes in Python.
You can write any explanation here.
"""
print("Comments parsed successfully!")`
  },
  {
    id: "py-variables",
    title: { en: "Python Variables", km: "អថេរ Variables" },
    content: {
      en: `### Creating Variables
Variables are containers for storing data values. Unlike other languages, Python has no command for declaring a variable; a variable is created the moment you first assign a value to it.

\`\`\`python
x = 5
name = "Seyha"
\`\`\`

### Dynamic Typing
Variables do not need to be declared with any particular type, and can even change type after they have been set.`,
      km: `### ការបង្កើតអថេរ (Variables)
អថេរគឺជាប្រអប់សម្រាប់ផ្ទុកទិន្នន័យ។ ខុសពីភាសាផ្សេងទៀត Python គ្មានពាក្យគន្លឹះប្រកាសអថេរឡើយ អថេរត្រូវបានបង្កើតឡើងភ្លាមៗនៅពេលដែលអ្នកប្រគល់តម្លៃឱ្យវាជាលើកដំបូង។

\`\`\`python
x = 5
name = "Seyha"
\`\`\`

### ប្រភេទទិន្នន័យឌីណាមិក (Dynamic Typing)
អថេរមិនត្រូវការបញ្ជាក់ប្រភេទទិន្នន័យជាមុនឡើយ ហើយអាចប្តូរប្រភេទទិន្នន័យបានគ្រប់ពេល។`
    },
    starterCode: `x = 4       # x is of type int
x = "Dara"  # x is now of type str
print("Current value of x is:", x)`
  },
  {
    id: "py-datatypes",
    title: { en: "Python Data Types", km: "ប្រភេទទិន្នន័យ" },
    content: {
      en: `### Built-in Data Types
In programming, data type is an important concept. Variables can store data of different types.

Python has the following built-in types by default:
* **Text Type:** \`str\`
* **Numeric Types:** \`int\`, \`float\`, \`complex\`
* **Sequence Types:** \`list\`, \`tuple\`, \`range\`
* **Mapping Type:** \`dict\`
* **Set Types:** \`set\`, \`frozenset\`
* **Boolean Type:** \`bool\`
* **None Type:** \`NoneType\`

### Checking Types
Use the built-in \`type()\` function to verify any variable's data type.`,
      km: `### ប្រភេទទិន្នន័យស្រាប់ (Built-in Data Types)
នៅក្នុងការសរសេរកម្មវិធី ប្រភេទទិន្នន័យគឺជាគោលគំនិតសំខាន់។ អថេរអាចផ្ទុកតម្លៃដែលមានប្រភេទខុសៗគ្នា។

Python រួមមានប្រភេទទិន្នន័យមូលដ្ឋានដូចជា៖
* **ប្រភេទអត្ថបទ៖** \`str\`
* **ប្រភេទលេខ៖** \`int\`, \`float\`, \`complex\`
* **ប្រភេទលំដាប់ (Sequence)៖** \`list\`, \`tuple\`, \`range\`
* **ប្រភេទផែនទី (Mapping)៖** \`dict\`
* **ប្រភេទ Set៖** \`set\`
* **ប្រភេទប៊ូលីន៖** \`bool\`
* **ប្រភេទតំលៃទទេ៖** \`NoneType\`

### ការពិនិត្យប្រភេទទិន្នន័យ
ប្រើប្រាស់អនុគមន៍ \`type()\` ដើម្បីពិនិត្យមើលប្រភេទអថេរ។`
    },
    starterCode: `a = "Sabaicode"
b = 2026
c = [1, 2, 3]

print(type(a))
print(type(b))
print(type(c))`
  },
  {
    id: "py-numbers",
    title: { en: "Python Numbers", km: "លេខ Numbers" },
    content: {
      en: `### Three Number Types
There are three numeric types in Python:
1. **int** — Integer (positive or negative whole number without decimals).
2. **float** — Floating point number (containing one or more decimals).
3. **complex** — Complex numbers written with a "j" as the imaginary part.

\`\`\`python
x = 1    # int
y = 2.8  # float
z = 1j   # complex
\`\`\``,
      km: `### ប្រភេទលេខទាំង៣ក្នុង Python
មានប្រភេទលេខ៣យ៉ាងក្នុង Python៖
១. **int** — ចំនួនគត់ (វិជ្ជមាន ឬអវិជ្ជមាន ដោយគ្មានក្បៀស)។
២. **float** — ចំនួនទសភាគ (មានចំណុចក្បៀសទសភាគមួយ ឬច្រើន)។
៣. **complex** — ចំនួនកុំផ្លិច សរសេរដោយមានអក្សរ "j" នៅផ្នែកនិម្មិត។

\`\`\`python
x = 1    # int
y = 2.8  # float
z = 1j   # complex
\`\`\``
    },
    starterCode: `x = 10
y = -3.14159
z = 3 + 5j

print("x type is", type(x))
print("y type is", type(y))
print("z type is", type(z))`
  },
  {
    id: "py-casting",
    title: { en: "Python Casting", km: "ការប្តូរប្រភេទទិន្នន័យ" },
    content: {
      en: `### Specifying variable type (Casting)
There may be times when you want to specify a category type on a variable. This is done using constructor functions:

* \`int()\` — constructs an integer from float or string.
* \`float()\` — constructs a float from integer or string.
* \`str()\` — constructs a string from wide range of types.

\`\`\`python
x = int(2.8) # x will be 2
y = float("3") # y will be 3.0
\`\`\``,
      km: `### ការប្តូរប្រភេទទិន្នន័យ (Casting)
ពេលខ្លះអ្នកចង់កំណត់ ឬបំលែងប្រភេទទិន្នន័យរបស់អថេរមួយទៅជាប្រភេទមួយទៀត។ នេះត្រូវបានធ្វើឡើងដោយប្រើអនុគមន៍៖

* \`int()\` — បំលែងទៅជាចំនួនគត់ (Integer)។
* \`float()\` — បំលែងទៅជាចំនួនទសភាគ (Float)។
* \`str()\` — បំលែងទៅជាខ្សែអក្សរ (String)។

\`\`\`python
x = int(2.8) # x នឹងទទួលបានតម្លៃ ២
y = float("3") # y នឹងទទួលបានតម្លៃ ៣.០
\`\`\``
    },
    starterCode: `price_str = "19.99"
# Convert price to float, then convert a number to integer
price = float(price_str)
rounded_price = int(price)

print("Original float price:", price)
print("Rounded integer price:", rounded_price)`
  },
  {
    id: "py-strings",
    title: { en: "Python Strings", km: "ខ្សែអក្សរ Strings" },
    content: {
      en: `### String Arrays
Strings in Python are arrays of bytes representing unicode characters. However, Python does not have a character data type; a single character is simply a string with a length of 1.

### Slicing Strings
You can return a range of characters by using the slice syntax \`[start:end]\`.
\`\`\`python
b = "Hello"
print(b[1:4]) # Outputs "ell"
\`\`\`

### Common String Methods
* \`strip()\` removes whitespace from start/end.
* \`lower()\` / \`upper()\` converts casing.`,
      km: `### អារេនៃខ្សែអក្សរ (Strings)
ខ្សែអក្សរនៅក្នុង Python គឺជាអារេនៃបៃតំណាងឱ្យតួអក្សរយូនីកូដ។ នៅក្នុង Python មិនមានប្រភេទតួអក្សរដាច់ដោយឡែក (char) ទេ សូម្បីតែតួអក្សរមួយក៏ជាខ្សែអក្សរដែលមានប្រវែង ១ ដែរ។

### ការកាត់ខ្សែអក្សរ (Slicing)
អ្នកអាចទាញយកចំណែកតួអក្សរដោយប្រើវាក្យសម្ពន្ធ \`[start:end]\`។
\`\`\`python
b = "Hello"
print(b[1:4]) # បង្ហាញ "ell"
\`\`\`

### វិធីសាស្ត្រខ្សែអក្សរទូទៅ
* \`strip()\` លុបចន្លោះទទេនៅដើម និងចុង។
* \`lower()\` / \`upper()\` ប្តូរទម្រង់អក្សរតូច/ធំ។`
    },
    starterCode: `text = "  Sabaicode Learning  "
print("Length of text:", len(text))
print("Sliced [2:11]:", text[2:11])
print("Uppercase Cleaned:", text.strip().upper())`
  },
  {
    id: "py-booleans",
    title: { en: "Python Booleans", km: "ប៊ូលីន Booleans" },
    content: {
      en: `### Evaluating True and False
Booleans represent one of two values: \`True\` or \`False\`.

Most values are evaluated to \`True\` if they have some sort of content.
Any number is \`True\`, except \`0\`. Any string is \`True\`, except empty strings \`""\`. Any list, tuple, set, and dictionary is \`True\`, except empty ones.

\`\`\`python
print(bool("Hello")) # True
print(bool(0)) # False
\`\`\``,
      km: `### ការវាយតម្លៃតម្លៃពិត និងមិនពិត
ប៊ូលីនតំណាងឱ្យតម្លៃមួយក្នុងចំណោមតម្លៃពីរ៖ \`True\` (ពិត) ឬ \`False\` (មិនពិត)។

រាល់តម្លៃស្ទើរតែទាំងអស់ត្រូវបានវាយតម្លៃថាជា \`True\` ប្រសិនបើវាមានមាតិកា។
រាល់លេខទាំងអស់គឺ \`True\` លើកលែងតែ \`0\`។ រាល់ខ្សែអក្សរទាំងអស់គឺ \`True\` លើកលែងតែខ្សែអក្សរទទេ \`""\`។ រាល់បញ្ជីដែលគ្មានធាតុ (ទទេ) ក៏ជា \`False\` ដែរ។

\`\`\`python
print(bool("Hello")) # True
print(bool(0)) # False
\`\`\``
    },
    starterCode: `print(bool("Cambodia"))
print(bool(15))
print(bool(""))
print(bool([])) # Empty list is False`
  },
  {
    id: "py-operators",
    title: { en: "Python Operators", km: "ប្រមាណវិធី Operators" },
    content: {
      en: `### Python Operators
Operators are used to perform operations on variables and values.

* **Arithmetic:** \`+\`, \`-\`, \`*\`, \`/\`, \`%\`, \`**\` (Exponentiation), \`//\` (Floor division).
* **Logical:** \`and\`, \`or\`, \`not\`.
* **Identity Operators:** \`is\` and \`is not\` (checks if they point to the exact same memory object).
* **Membership Operators:** \`in\` and \`not in\` (checks if sequence contains a value).`,
      km: `### ប្រមាណវិធីផ្សេងៗ (Operators)
ប្រមាណវិធីត្រូវបានប្រើដើម្បីធ្វើប្រតិបត្តិការលើអថេរ និងតម្លៃ។

* **គណិតវិទ្យា៖** \`+\`, \`-\`, \`*\`, \`/\`, \`%\`, \`**\` (ស្វ័យគុណ), \`//\` (ចែកដាច់យកចំនួនគត់)។
* **ឡូហ្សិក៖** \`and\`, \`or\`, \`not\`។
* **Identity (អត្តសញ្ញាណ)៖** \`is\` និង \`is not\` (ពិនិត្យថាតើអថេរទាំងពីរចង្អុលទៅកាន់វត្ថុតែមួយក្នុងមេម៉ូរីឬទេ)។
* **សមាជិកភាព (Membership)៖** \`in\` និង \`not in\` (ពិនិត្យថាតើតម្លៃនោះស្ថិតនៅក្នុងលំដាប់លំដោយឬទេ)។`
    },
    starterCode: `fruits = ["apple", "banana", "cherry"]
print("Is apple in list?", "apple" in fruits)
print("Floor division 15 // 4:", 15 // 4)
print("Power calculation 2 ** 3:", 2 ** 3)`
  },
  {
    id: "py-lists",
    title: { en: "Python Lists", km: "បញ្ជី Lists" },
    content: {
      en: `### Creating and Modifying Lists
Lists are used to store multiple items in a single variable. They are **ordered**, **mutable (changeable)**, and allow duplicate values.

\`\`\`python
mylist = ["apple", "banana", "cherry"]
\`\`\`

### Common Operations
* **Add item:** \`append(value)\` or \`insert(index, value)\`.
* **Remove item:** \`remove(value)\` or \`pop(index)\`.
* **List comprehension:** Quick loop statement inside square brackets.`,
      km: `### បញ្ជី (Lists)
Lists ត្រូវបានប្រើដើម្បីរក្សាទុកធាតុជាច្រើននៅក្នុងអថេរតែមួយ។ ពួកវាមាន **លំដាប់លំដោយ** **អាចកែប្រែបាន (Mutable)** និងអនុញ្ញាតឱ្យមានតម្លៃស្ទួនគ្នា។

\`\`\`python
mylist = ["apple", "banana", "cherry"]
\`\`\`

### ប្រតិបត្តិការទូទៅ
* **បន្ថែមធាតុ៖** \`append(value)\` ឬ \`insert(index, value)\`។
* **លុបធាតុ៖** \`remove(value)\` ឬ \`pop(index)\`។
* **List comprehension៖** សរសេរលូបលឿននៅក្នុងសញ្ញាដង្កៀបទ្រុងជ្រូក។`
    },
    starterCode: `students = ["Seyha", "Sokchea", "Dara"]
students.append("Bona")
students.remove("Sokchea")

print("List items:", students)
print("First student:", students[0])`
  },
  {
    id: "py-tuples",
    title: { en: "Python Tuples", km: "ទុបផល Tuples" },
    content: {
      en: `### Immutable Sequences (Tuples)
Tuples are used to store multiple items in a single variable. A tuple is a collection which is **ordered** and **immutable (unchangeable)**. Written with round brackets.

\`\`\`python
mytuple = ("apple", "banana", "cherry")
\`\`\`

> **Note:** Because tuples are immutable, you cannot add or remove items once created! Use them for read-only constant datasets.`,
      km: `### បណ្តុំមិនអាចកែប្រែបាន (Tuples)
Tuples ត្រូវបានប្រើដើម្បីរក្សាទុកធាតុជាច្រើននៅក្នុងអថេរតែមួយ។ វាមាន **លំដាប់លំដោយ** និង **មិនអាចកែប្រែបានឡើយ (Immutable)**។ សរសេរដោយប្រើវង់ក្រចក។

\`\`\`python
mytuple = ("apple", "banana", "cherry")
\`\`\`

> **ចំណាំ៖** ដោយសារ tuples មិនអាចកែប្រែបាន អ្នកមិនអាចបន្ថែម ឬលុបធាតុបន្ទាប់ពីបង្កើតរួចទេ! ប្រើវាសម្រាប់ទិន្នន័យថេរសម្រាប់តែអាន។`
    },
    starterCode: `colors = ("red", "green", "blue")
# Accessing elements works like lists
print("First color:", colors[0])
# Unpacking tuple
r, g, b = colors
print("Unpacked Green:", g)`
  },
  {
    id: "py-sets",
    title: { en: "Python Sets", km: "សិត Sets" },
    content: {
      en: `### Unique Collections (Sets)
Sets are used to store multiple items in a single variable. A set is a collection which is **unordered**, **unindexed**, and **does not allow duplicate values**.

\`\`\`python
myset = {"apple", "banana", "cherry"}
\`\`\`

Sets are highly efficient for membership tests (checking if an item exists) and set mathematics like union and intersection.`,
      km: `### បណ្តុំតម្លៃមិនស្ទួន (Sets)
Sets ត្រូវបានប្រើដើម្បីរក្សាទុកធាតុច្រើននៅក្នុងអថេរតែមួយ។ Set គឺជាបណ្តុំដែល **គ្មានលំដាប់លំដោយ** **គ្មានសន្ទស្សន៍ (Unindexed)** និង **មិនអនុញ្ញាតឱ្យមានតម្លៃស្ទួនគ្នាឡើយ**។

\`\`\`python
myset = {"apple", "banana", "cherry"}
\`\`\`

Set មានប្រសិទ្ធភាពខ្ពស់សម្រាប់ការពិនិត្យសមាជិកភាព និងការធ្វើគណិតវិទ្យាសំណុំ (Union, Intersection)។`
    },
    starterCode: `numbers = {1, 2, 3, 3, 2, 4} # Duplicate items will be ignored
numbers.add(5)
print("Unique set values:", numbers)
print("Is 3 inside set?", 3 in numbers)`
  },
  {
    id: "py-dictionaries",
    title: { en: "Python Dictionaries", km: "វចនានុក្រម Dictionaries" },
    content: {
      en: `### Key-Value Store (Dicts)
Dictionaries are used to store data values in key:value pairs. A dictionary is a collection which is **ordered** (from Python 3.7+), **changeable**, and does not allow duplicate keys.

\`\`\`python
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
\`\`\``,
      km: `### បណ្តុំគូសោរ និងតម្លៃ (Dictionaries)
Dictionaries ត្រូវបានប្រើដើម្បីផ្ទុកទិន្នន័យជាគូ key:value ។ Dictionary គឺជាបណ្តុំដែល **មានលំដាប់** (ចាប់ពី Python 3.7) **អាចផ្លាស់ប្តូរបាន** និងមិនអនុញ្ញាតឱ្យមាន Key ស្ទួនគ្នាឡើយ។

\`\`\`python
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
\`\`\``
    },
    starterCode: `car = {
    "brand": "Toyota",
    "model": "Prius",
    "year": 2020
}
# Accessing value by key
print("Car Brand:", car["brand"])
# Adding new key-value pair
car["color"] = "White"
print("Updated Dictionary:", car)`
  },
  {
    id: "py-ifelse",
    title: { en: "Python If...Else", km: "លក្ខខណ្ឌ If...Else" },
    content: {
      en: `### Conditional Statements
Python supports the usual logical conditions from mathematics. These conditions can be used in several ways, most commonly in "if statements" and loops.

We use:
* \`if\` — executes if the expression is True.
* \`elif\` — (short for else if) checks next condition if previous failed.
* \`else\` — executes if all conditions fail.

> **Warning:** Don't forget the colon \`:\` at the end of the line, and indent the next block!`,
      km: `### សេចក្តីថ្លែងការណ៍លក្ខខណ្ឌ
Python គាំទ្រលក្ខខណ្ឌឡូហ្សិកធម្មតាពីគណិតវិទ្យា។ លក្ខខណ្ឌទាំងនេះអាចប្រើប្រាស់ក្នុងវិធីជាច្រើន ដែលពេញនិយមបំផុតគឺក្នុង "if statements" និងលូប។

យើងប្រើ៖
* \`if\` — ដំណើរការប្រសិនបើកន្សោមវាយតម្លៃឃើញ ពិត (True)។
* \`elif\` — (មកពីពាក្យ else if) ពិនិត្យលក្ខខណ្ឌបន្ទាប់ បើលក្ខខណ្ឌមុនមិនពិត។
* \`else\` — ដំណើរការកូដចុងក្រោយ បើគ្រប់លក្ខខណ្ឌខាងលើមិនពិតទាំងអស់។

> **ប្រុងប្រយ័ត្ន៖** កុំភ្លេចសញ្ញាចុចពីរ \`:\` នៅចុងបន្ទាត់ និងត្រូវខិតបន្ទាត់កូដបន្ទាប់ចូលក្នុងប្លុក! Void IndentationError។`
    },
    starterCode: `score = 85

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
else:
    print("Grade: C")`
  }
];
