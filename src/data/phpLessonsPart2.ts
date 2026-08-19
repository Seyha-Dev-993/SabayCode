import { Lesson } from '../types';

export const phpLessonsPart2: Lesson[] = [
  {
    id: "php-ifelse",
    title: {
      en: "PHP If...Else...Elseif",
      km: "លក្ខខណ្ឌ If...Else...Elseif"
    },
    content: {
      en: `### Conditional Statements in PHP
Conditional statements are used to perform different actions based on different decisions.

### Key Constructs:
- \`if\`: Executes code if a condition is true.
- \`else\`: Executes code if the same condition is false.
- \`elseif\`: Specifies a new condition to test if the first condition is false.
- **Ternary Operator (\`?:**): Shorthand syntax for simple if-else.
- **Null Coalescing Operator (\`??\`**): Returns its first operand if it exists and is not NULL; otherwise, it returns the second.

\`\`\`php
$status = ($score >= 50) ? "Pass" : "Fail";
$username = $_GET['user'] ?? 'anonymous';
\`\`\`

> **Note:** Semicolons are not placed right after the condition brackets! It should go inside the executable blocks.`,
      km: `### លក្ខខណ្ឌតម្រូវការ (Conditional Statements) ក្នុង PHP
សេចក្តីថ្លែងការណ៍លក្ខខណ្ឌត្រូវបានប្រើប្រាស់ដើម្បីដំណើរការសកម្មភាពផ្សេងៗគ្នាដោយផ្អែកលើការសម្រេចចិត្តផ្សេងៗគ្នា។

### សំណង់កូដសំខាន់ៗ៖
- \`if\`: ដំណើរការកូដ ប្រសិនបើលក្ខខណ្ឌពិត (true)។
- \`else\`: ដំណើរការកូដ ប្រសិនបើលក្ខខណ្ឌមិនពិត (false)។
- \`elseif\`: កំណត់លក្ខខណ្ឌថ្មីដើម្បីពិនិត្យបន្ថែម ប្រសិនបើលក្ខខណ្ឌដំបូងមិនពិត។
- **ប្រមាណសញ្ញា Ternary (\`?:\`):** ទម្រង់សរសេរកាត់លឿនជំនួស if-else សាមញ្ញ។
- ** Null Coalescing Operator (\`??\`):** ផ្តល់តម្លៃដំបូងប្រសិនបើវាមាន និងមិនមែន NULL បើមិនដូច្នោះទេវានឹងផ្តល់តម្លៃទី២។

\`\`\`php
$status = ($score >= 50) ? "Pass" : "Fail";
$username = $_GET['user'] ?? 'anonymous';
\`\`\`

> **សម្គាល់:** សញ្ញាក្បៀសចំនុច (\`;\`) មិនត្រូវដាក់នៅពីក្រោយវង់ក្រចកលក្ខខណ្ឌឡើយ! វាត្រូវដាក់នៅចុងបញ្ចប់នៃបន្ទាត់កូដក្នុងប្លុកវិញ។`
    },
    starterCode: `<?php
$score = 82;

if ($score >= 90) {
    echo "Grade: A\\n";
} elseif ($score >= 80) {
    echo "Grade: B\\n";
} elseif ($score >= 70) {
    echo "Grade: C\\n";
} else {
    echo "Grade: F\\n";
}

// Ternary shorthand
$result = ($score >= 50) ? "Passed" : "Failed";
echo "Result summary: " . $result . "\\n";

// Null coalescing demo
$dbName = null;
$activeDB = $dbName ?? "default_production";
echo "Active database: " . $activeDB . "\\n";
?>`
  },
  {
    id: "php-switch",
    title: {
      en: "PHP Switch",
      km: "ជម្រើសច្រើន Switch"
    },
    content: {
      en: `### The PHP switch Statement
The \`switch\` statement is used to perform different actions based on different conditions. It evaluates an expression once and compares the output against values in multiple \`case\` blocks.

### Rules of Engagement:
- Each \`case\` block must end with a \`break;\` statement. If you omit \`break;\`, execution will "fall through" and run the subsequent cases!
- The \`default\` block handles any value that does not match any specified cases.

> **Pitfall:** The \`switch\` statement uses loose comparison (\`==\`) by default, meaning \`switch("10")\` can match \`case 10:\`. If you need strict evaluation, use the new PHP 8 \`match\` expression.`,
      km: `### បញ្ជាជ្រើសរើសជម្រើសច្រើន (Switch Statement) ក្នុង PHP
សេចក្តីថ្លែងការណ៍ \`switch\` ត្រូវបានប្រើដើម្បីដំណើរការសកម្មភាពផ្សេងៗគ្នាដោយផ្អែកលើការប្រៀបធៀបតម្លៃតែមួយជាមួយករណី (cases) ជាច្រើន។

### វិធានការសរសេរ៖
- រាល់ប្លុក \`case\` នីមួយៗត្រូវតែបញ្ចប់ដោយ \`break;\`។ បើអ្នកភ្លេចដាក់ \`break;\` នោះកម្មវិធីនឹងបន្តដំណើរការកូដក្នុង case បន្ទាប់ៗដោយស្វ័យប្រវត្តិទោះជាលក្ខខណ្ឌមិនត្រូវគ្នាក៏ដោយ!
- ប្លុក \`default\` ប្រើសម្រាប់ដោះស្រាយរាល់តម្លៃដែលមិនត្រូវគ្នានឹង case ណាមួយឡើយ។

> **ប្រុងប្រយ័ត្ន:** switch ប្រើប្រាស់ការប្រៀបធៀបធូររលុង (\`==\`) តាមលំនាំដើម មានន័យថាអត្ថបទ \`"10"\` អាចត្រូវគ្នានឹង \`case 10:\`។ បើអ្នកចង់ប្រៀបធៀបតឹងរឹង សូមប្រើប្រាស់ \`match\` របស់ PHP 8។`
    },
    starterCode: `<?php
$favFruit = "Banana";

switch ($favFruit) {
    case "Apple":
        echo "Apples are delicious and red!\\n";
        break;
    case "Banana":
        echo "Bananas are rich in potassium!\\n";
        break;
    case "Orange":
        echo "Oranges are sweet and sour!\\n";
        break;
    default:
        echo "We don't have information about " . $favFruit . ".\\n";
        break;
}
?>`
  },
  {
    id: "php-match",
    title: {
      en: "PHP Match",
      km: "ប្រៀបធៀប Match (PHP 8+)"
    },
    content: {
      en: `### The PHP match Expression
Introduced in **PHP 8.0**, \`match\` is a modern alternative to the traditional \`switch\` statement. It is a highly optimized control flow expression that returns a value directly.

### Major Advantages over Switch:
1. **Strict Type Comparison:** Uses \`===\` instead of loose \`==\`.
2. **Direct Assignment:** Returns the matched expression directly, allowing immediate variable storage.
3. **No Fall-Through:** No need for tedious \`break\` statements. Execution stops at the first matching case.
4. **Exhaustive:** If the input does not match any case, and no \`default\` is provided, PHP will throw an \`UnhandledMatchError\`.`,
      km: `### កន្សោមប្រៀបធៀប Match ក្នុង PHP (PHP 8.0+)
ត្រូវបានណែនាំក្នុង **PHP 8.0** កន្សោម \`match\` គឺជាជម្រើសទំនើបជំនួសឱ្យ \`switch\` បុរាណ។ វាគឺជាកន្សោមត្រួតពិនិត្យដ៏មានប្រសិទ្ធភាពដែលផ្តល់តម្លៃត្រឡប់មកវិញភ្លាមៗ។

### អត្ថប្រយោជន៍ចម្បងលើ Switch៖
១. **ការប្រៀបធៀបតឹងរឹង (Strict Comparison):** ប្រើប្រាស់ \`===\` (តម្លៃ និងប្រភេទត្រូវតែដូចគ្នា)។
២. **ផ្តល់តម្លៃដោយផ្ទាល់ (Direct Return):** អាចបញ្ជូនតម្លៃត្រឡប់ទៅដាក់ក្នុងអថេរភ្លាមៗ។
៣. **មិនរត់ធ្លាក់ជម្រើស (No Fall-Through):** មិនបាច់សរសេរពាក្យ \`break\` ឡើយ។ កូដនឹងបញ្ឈប់ភ្លាមៗនៅករណីដែលត្រូវ។
៤. **ត្រួតពិនិត្យគ្រប់ជ្រុងជ្រោយ (Exhaustive):** បើតម្លៃមិនត្រូវនឹង case ណាទាល់តែសោះ ហើយគ្មាន \`default\` នោះ PHP នឹងបង្ហាញកំហុស \`UnhandledMatchError\`។`
    },
    starterCode: `<?php
$roleCode = 2;

// In PHP 8+, match returns value directly and uses ===
$userRole = match ($roleCode) {
    1 => "Super Administrator",
    2 => "Content Editor",
    3 => "Basic User",
    default => "Guest Visitor"
};

echo "Your assigned user role: " . $userRole . "\\n";
?>`
  },
  {
    id: "php-loops",
    title: {
      en: "PHP Loops",
      km: "រង្វិលជុំ Loops"
    },
    content: {
      en: `### Iterating in PHP
Loops are used to execute the same block of code repeatedly as long as a specified condition remains true.

### Four Types of Loops in PHP:
1. **\`while\`**: Loops through a block of code as long as the specified condition is true.
2. **\`do...while\`**: Always executes the block of code once, then checks the condition, repeating the loop while true.
3. **\`for\`**: Loops through a block of code a specified number of times.
4. **\`foreach\`**: Loops through a block of code for each element in an array.

\`\`\`php
foreach ($array as $key => $value) {
    // Process key and value
}
\`\`\``,
      km: `### រង្វិលជុំ (Loops) ក្នុង PHP
រង្វិលជុំត្រូវបានប្រើដើម្បីដំណើរការប្លុកកូដដដែលៗ ដរាបណាលក្ខខណ្ឌដែលបានកំណត់នៅតែពិត (true)។

### ប្រភេទរង្វិលជុំទាំង ៤ ក្នុង PHP៖
១. **\`while\`**: វិលត្រឡប់កូដដដែលៗ ដរាបណាលក្ខខណ្ឌនៅតែពិត។
២. **\`do...while\`**: ដំណើរការកូដយ៉ាងហោចណាស់ម្តងសិន រួចទើបពិនិត្យលក្ខខណ្ឌដើម្បីវិលបន្ត។
៣. **\`for\`**: វិលត្រឡប់កូដតាមចំនួនកំណត់ជាក់លាក់។
៤. **\`foreach\`**: វិលត្រឡប់កូដសម្រាប់គ្រប់ធាតុនីមួយៗនៅក្នុងអារេ (Array)។

\`\`\`php
foreach ($array as $key => $value) {
    // ដំណើរការកូដជាមួយសោរ និងតម្លៃ
}
\`\`\``
    },
    starterCode: `<?php
echo "=== For Loop ===\\n";
for ($i = 1; $i <= 3; $i++) {
    echo "Iteration: $i\\n";
}

echo "\\n=== While Loop ===\\n";
$x = 1;
while ($x <= 3) {
    echo "Number: $x\\n";
    $x++;
}

echo "\\n=== Foreach Loop (Associative Array) ===\\n";
$capitals = array("Cambodia" => "Phnom Penh", "France" => "Paris", "Japan" => "Tokyo");
foreach ($capitals as $country => $city) {
    echo "The capital of $country is $city\\n";
}
?>`
  },
  {
    id: "php-functions",
    title: {
      en: "PHP Functions",
      km: "មុខងារ Functions"
    },
    content: {
      en: `### Reusable Code: Functions
A function is a block of statements that can be used repeatedly in a program. It will not execute automatically when a page loads; it is executed by a call to the function.

### Key Concepts:
- **Parameters / Arguments:** Values passed into functions.
- **Default Arguments:** You can declare default parameter values. If you call the function without arguments, it uses the default.
- **Return Type Declarations:** In modern PHP, you can specify return types.
- **Pass-by-Reference:** Prefix arguments with an ampersand (\`&\`) to modify the original variable value outside the function.`,
      km: `### កូដប្រើឡើងវិញ៖ Functions ក្នុង PHP
Function គឺជាប្លុកនៃកូដបញ្ជាដែលអាចហៅមកប្រើឡើងវិញបានច្រើនដងក្នុងកម្មវិធី។ វានឹងមិនរត់ដោយស្វ័យប្រវត្តិឡើយ លុះត្រាតែមានការហៅបញ្ជា (Call)។

### គំនិតសំខាន់ៗ៖
- **Parameters / Arguments:** តម្លៃដែលបញ្ជូនទៅកាន់ Function។
- **តម្លៃលំនាំដើម (Default Arguments):** បើគ្មានតម្លៃបញ្ជូនទៅទេ វានឹងប្រើប្រាស់តម្លៃលំនាំដើមនេះ។
- **ការកំណត់ប្រភេទត្រឡប់ (Return Type Declarations):** កំណត់ប្រភេទទិន្នន័យដែល Function ត្រូវបញ្ជូនមកវិញ។
- **បញ្ជូនដោយយោង (Pass-by-Reference):** ប្រើប្រាស់សញ្ញា \`&\` ពីមុខអថេរ ដើម្បីអាចកែប្រែតម្លៃអថេរដើមនៅខាងក្រៅ Function បាន។`
    },
    starterCode: `<?php
declare(strict_types=1); // Enforces strict type parameters

// Function with return type and default parameter
function addNumbers(float $a, float $b = 5.0): float {
    return $a + $b;
}

echo "Sum: " . addNumbers(10.5) . "\\n"; // uses default 5.0 -> 15.5
echo "Sum with both: " . addNumbers(2.5, 3.5) . "\\n"; // 6.0

// Pass by reference
function multiplyByTen(int &$num) {
    $num = $num * 10;
}

$val = 5;
multiplyByTen($val); // $val is modified directly
echo "Original variable modified by reference: " . $val . "\\n";
?>`
  },
  {
    id: "php-arrays",
    title: {
      en: "PHP Arrays",
      km: "អារេ Arrays"
    },
    content: {
      en: `### Managing Arrays
An array is a special variable that can hold more than one value at a time.

### Array Types:
1. **Indexed Arrays:** Arrays with numeric index (starts at \`0\`).
2. **Associative Arrays:** Arrays with named keys (key-value pairs).
3. **Multidimensional Arrays:** Arrays containing one or more nested arrays.

### Useful Array Sorting Functions:
- \`sort()\` / \`rsort()\`: Sort indexed arrays ascending / descending.
- \`asort()\` / \`arsort()\`: Sort associative arrays ascending / descending by **value**.
- \`ksort()\` / \`krsort()\`: Sort associative arrays ascending / descending by **key**.`,
      km: `### ការគ្រប់គ្រងទិន្នន័យអារេ (Arrays) ក្នុង PHP
អារេ (Array) គឺជាអថេរពិសេសដែលអាចផ្ទុកទិន្នន័យច្រើនក្នុងពេលតែមួយ។

### ប្រភេទអារេ៖
១. **Indexed Arrays:** អារេប្រើប្រាស់លំដាប់លេខលិបិក្រម (Index ចាប់ពី \`0\`)។
២. **Associative Arrays:** អារេប្រើប្រាស់ឈ្មោះសោរ និងតម្លៃ (Key-Value pairs)។
៣. **Multidimensional Arrays:** អារេដែលមានផ្ទុកអារេផ្សេងទៀតនៅខាងក្នុងវា។

### មុខងារតម្រៀបទិន្នន័យអារេ (Sorting)៖
- \`sort()\` / \`rsort()\`: តម្រៀបអារេធម្មតា ឡើង / ចុះ។
- \`asort()\` / \`arsort()\`: តម្រៀបអារេ Associative តាម **តម្លៃ (value)** ឡើង / ចុះ។
- \`ksort()\` / \`krsort()\`: តម្រៀបអារេ Associative តាម **សោរ (key)** ឡើង / ចុះ។`
    },
    starterCode: `<?php
// 1. Indexed Array
$languages = ["PHP", "JavaScript", "Python"];
sort($languages);
echo "Sorted Indexed Array:\\n";
print_r($languages);

// 2. Associative Array
$studentScores = [
    "Dara" => 85,
    "Sok" => 95,
    "Bona" => 78
];
arsort($studentScores); // Sort by score descending
echo "\\nScores sorted descending by value:\\n";
foreach ($studentScores as $name => $score) {
    echo "$name: $score\\n";
}
?>`
  },
  {
    id: "php-superglobals",
    title: {
      en: "PHP Superglobals",
      km: "អថេរសកលជាន់ខ្ពស់ Superglobals"
    },
    content: {
      en: `### PHP Global Environment Arrays
PHP features several pre-defined arrays called **Superglobals**, meaning they are accessible from any scope (inside functions, classes, or files) without needing the \`global\` keyword.

### The Superglobals:
- \`$GLOBALS\`: Access all global variables inside functions.
- \`$_SERVER\`: Holds information about headers, paths, and script locations.
- \`$_GET\` / \`$_POST\`: Handles values sent in HTTP requests.
- \`$_REQUEST\`: Combines values from \`$_GET\`, \`$_POST\`, and \`$_COOKIE\`.
- \`$_SESSION\` / \`$_COOKIE\`: Manages browser session state and persistent storage.
- \`$_FILES\`: Handles file uploads.
- \`$_ENV\`: Accesses system environment secrets.`,
      km: `### អថេរសកលជាន់ខ្ពស់ (Superglobals) ក្នុង PHP
PHP មានអារេពិសេសៗដែលត្រូវបានកំណត់ជាស្រេចហៅថា **Superglobals** មានន័យថាពួកវាអាចហៅប្រើបានពីគ្រប់ទីកន្លែងក្នុងកម្មវិធី (ក្នុង Function, Class ឬឯកសារផ្សេងៗ) ដោយមិនចាំបាច់ប្រើពាក្យគន្លឹះ \`global\` ឡើយ។

### ក្រុម Superglobals សំខាន់ៗ៖
- \`$GLOBALS\`: ប្រើសម្រាប់ចូលទៅយកអថេរ Global ទាំងអស់ពីក្នុង Function។
- \`$_SERVER\`: ផ្ទុកព័ត៌មានអំពី Web Server បរិស្ថានរត់កូដ និងទីតាំងឯកសារ។
- \`$_GET\` / \`$_POST\`: ប្រមូល និងគ្រប់គ្រងតម្លៃផ្ញើតាម HTTP Requests។
- \`$_REQUEST\`: រួមបញ្ចូលគ្នានូវទិន្នន័យពី \`$_GET\`, \`$_POST\`, និង \`$_COOKIE\`។
- \`$_SESSION\` / \`$_COOKIE\`: គ្រប់គ្រងស្ថានភាពអ្នកប្រើប្រាស់ និងរក្សាទុកទិន្នន័យលើ Browser។
- \`$_FILES\`: គ្រប់គ្រងការបង្ហោះឯកសារ (File Uploads)។
- \`$_ENV\`: ប្រើសម្រាប់ទាញយកតម្លៃអថេរបរិស្ថានម៉ាស៊ីន (Environment Variables)។`
    },
    starterCode: `<?php
// Global array demonstration
$x = 75;
$y = 25;

function useGlobals() {
    $GLOBALS['z'] = $GLOBALS['x'] + $GLOBALS['y'];
}

useGlobals();
echo "Calculated via \$GLOBALS: " . $z . "\\n";

// Server information
echo "Server Running Software: " . ($_SERVER['SERVER_SOFTWARE'] ?? "Unknown Server") . "\\n";
echo "Script path: " . $_SERVER['PHP_SELF'] . "\\n";
?>`
  },
  {
    id: "php-regex",
    title: {
      en: "PHP RegEx",
      km: "កន្សោមធម្មតា RegEx"
    },
    content: {
      en: `### Regular Expressions (RegEx) Basics
A regular expression is a sequence of characters that forms a search pattern. It can be used for text search and text replacement.

### RegEx Delimiter & Syntax:
In PHP, a regular expression is usually written as a string surrounded by delimiters (most commonly forward slashes \`/\`).

\`\`\`
/pattern/modifiers
\`\`\`

### Common Modifiers:
- \`i\`: Performs case-insensitive matching.
- \`m\`: Performs multiline matching.
- \`u\`: Enables correct UTF-8 matching (important for Khmer scripts!).`,
      km: `### មូលដ្ឋានគ្រឹះកន្សោមធម្មតា (Regular Expressions - RegEx)
Regular Expression គឺជាទម្រង់លំនាំតួអក្សរដែលប្រើសម្រាប់ស្វែងរក ឬជំនួសអក្សរក្នុងអត្ថបទផ្សេងៗ។

### និមិត្តសញ្ញា និងរចនាសម្ព័ន្ធ៖
នៅក្នុង PHP កន្សោម RegEx ត្រូវបានសរសេរនៅក្នុងរបាំងអក្សរព័ទ្ធជុំវិញដោយសញ្ញាបញ្ឆិត \`/\`។

\`\`\`
/លំនាំស្វែងរក/សញ្ញាកែប្រែ(modifiers)
\`\`\`

### សញ្ញាកែប្រែ (Modifiers) ពេញនិយម៖
- \`i\`: ស្វែងរកដោយមិនគិតពីអក្សរតូចធំ (Case-insensitive)។
- \`m\`: ស្វែងរកឆ្លងកាត់បន្ទាត់ច្រើន (Multiline)។
- \`u\`: អនុញ្ញាតការស្វែងរកអក្សរ UTF-8 ត្រឹមត្រូវ (សំខាន់ខ្លាំងសម្រាប់អក្សរខ្មែរ!)។`
    },
    starterCode: `<?php
$string = "Siem Reap Cambodia";
$pattern = "/siem/i"; // Match 'siem' case-insensitively

// preg_match returns 1 if matched, 0 if not
$hasMatch = preg_match($pattern, $string);

echo "Is 'siem' matching in '$string'? " . ($hasMatch ? "Yes!" : "No") . "\\n";
?>`
  },
  {
    id: "php-regex-functions",
    title: {
      en: "PHP RegEx Functions",
      km: "មុខងារ RegEx Functions"
    },
    content: {
      en: `### Core RegEx Functions
PHP provides built-in operations for parsing, filtering, and splitting text models with regular expressions.

### Crucial Functions:
- \`preg_match($pattern, $subject)\`: Returns \`1\` if pattern is matched, \`0\` if not. Stops at the first match.
- \`preg_match_all($pattern, $subject, $matches)\`: Matches all occurrences of a pattern and populates an array with outputs.
- \`preg_replace($pattern, $replacement, $subject)\`: Replaces matched pattern with new values.
- \`preg_split($pattern, $subject)\`: Splits a string into an array based on regular expression boundaries.`,
      km: `### មុខងារស្នូលរបស់ RegEx ក្នុង PHP
PHP ផ្តល់ជូននូវមុខងារជាស្រេចសម្រាប់វិភាគ តម្រង និងបំបែកអត្ថបទដោយប្រើប្រាស់កន្សោមធម្មតា (Regular Expressions)។

### មុខងារសំខាន់ៗ៖
- \`preg_match($pattern, $subject)\`: ផ្តល់តម្លៃ \`1\` ប្រសិនបើរកឃើញលំនាំកូដត្រូវគ្នាដំបូងគេ បើមិនឃើញផ្តល់តម្លៃ \`0\`។
- \`preg_match_all($pattern, $subject, $matches)\`: ស្វែងរករាល់លំនាំទាំងអស់ដែលត្រូវគ្នា រួចរក្សាទុកលទ្ធផលក្នុងអារេ \`$matches\`។
- \`preg_replace($pattern, $replacement, $subject)\`: ស្វែងរកលំនាំកូដ រួចជំនួសមកវិញដោយពាក្យថ្មី។
- \`preg_split($pattern, $subject)\`: បំបែកខ្សែអក្សរទៅជាអារេ ដោយផ្អែកលើព្រំដែនកំណត់របស់ RegEx។`
    },
    starterCode: `<?php
$text = "The rain in Spain falls mainly on the plains.";
$pattern = "/ain/i";

// Match all
$count = preg_match_all($pattern, $text, $matches);
echo "Total occurrences of 'ain': $count\\n";
print_r($matches[0]);

// Replace
$replacedText = preg_replace("/Spain/i", "Cambodia", $text);
echo "\\nReplaced Text:\\n" . $replacedText . "\\n";

// Split string by commas or spaces
$words = preg_split("/[\\s,.]+/", $text);
echo "\\nSplit words:\\n";
print_r(array_filter($words));
?>`
  }
];
