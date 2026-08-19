import { Lesson } from '../types';

export const phpLessonsPart5: Lesson[] = [
  {
    id: "php-date-time",
    title: {
      en: "PHP Date and Time",
      km: "កាលបរិច្ឆេទ និងម៉ោង Date and Time"
    },
    content: {
      en: `### Managing Timestamps in PHP
PHP has a comprehensive date-time engine that lets you format timestamps and manage multi-region timezones.

### Crucial Operations:
- \`date_default_timezone_set("Asia/Phnom_Penh")\`: Forces the active script to run inside a specific geographic timezone.
- \`date($format, $timestamp)\`: Formats a local date/time according to format rules. If no timestamp is provided, it defaults to the active system clock time.
- \`time()\`: Returns the active Unix timestamp (number of seconds elapsed since January 1, 1970).
- \`strtotime($time_string)\`: Parses any English textual datetime description into a Unix timestamp.

### Common Date Formatting Symbols:
- \`d\` - Day of the month (01 to 31)
- \`m\` - Month in numbers (01 to 12)
- \`Y\` - Year in four digits (e.g., 2026)
- \`H\` - 24-hour hour digit (00 to 23)
- \`i\` - Minutes (00 to 59)
- \`s\` - Seconds (00 to 59)
- \`l\` (lowercase L) - Name of the day of the week`,
      km: `### ការគ្រប់គ្រងម៉ោង និងកាលបរិច្ឆេទ (Date & Time) ក្នុង PHP
PHP មានម៉ាស៊ីនចាត់ចែងម៉ោងដ៏ទូលំទូលាយ ដែលអនុញ្ញាតឱ្យអ្នករៀបចំទម្រង់បង្ហាញកាលបរិច្ឆេទ និងកែតម្រូវតំបន់ម៉ោង (Timezones) តាមតំបន់ផ្សេងៗគ្នា។

### វិធីសាស្ត្រសំខាន់ៗ៖
- \`date_default_timezone_set("Asia/Phnom_Penh")\`: កំណត់តំបន់ម៉ោងឱ្យមកភ្នំពេញ មុននឹងទាញយកពេលវេលាបង្ហាញ។
- \`date($format, $timestamp)\`: បំប្លែងម៉ោងជាអក្សរស្រួលអានតាមតម្រូវការ។ បើគ្មានប៉ារ៉ាម៉ែត្រទី២ទេ វានឹងយកម៉ោងបច្ចុប្បន្ន។
- \`time()\`: ផ្តល់លេខម៉ោង Unix Timestamp (ចំនួនវិនាទីដែលបានកន្លងហួសចាប់តាំងពីថ្ងៃទី១ ខែមករា ឆ្នាំ១៩៧០)។
- \`strtotime($time_string)\`: បំប្លែងអត្ថបទបញ្ជាក់ពេលវេលាជាភាសាអង់គ្លេស ទៅជាលេខវិនាទី (Timestamp)។

### និមិត្តសញ្ញាកាលបរិច្ឆេទពេញនិយម៖
- \`d\` - លេខថ្ងៃនៃខែ (០១ ដល់ ៣១)
- \`m\` - លេខខែ (០១ ដល់ ១២)
- \`Y\` - លេខឆ្នាំមាន ៤ ខ្ទង់ (ឧទាហរណ៍៖ ២០២៦)
- \`H\` - លេខម៉ោងប្រព័ន្ធ ២៤ម៉ោង (០០ ដល់ ២៣)
- \`i\` - លេខនាទី (០០ ដល់ ៥៩)
- \`s\` - លេខវិនាទី (០០ ដល់ ៥៩)
- \`l\` (អក្សរ L តូច) - ឈ្មោះថ្ងៃនៃសប្តាហ៍`
    },
    starterCode: `<?php
// Set timezone to Cambodia
date_default_timezone_set("Asia/Phnom_Penh");

echo "Current date in Phnom Penh: " . date("d-m-Y H:i:s") . "\\n";
echo "Today is: " . date("l") . "\\n";

// strtotime conversions
$tomorrow = strtotime("tomorrow");
echo "Tomorrow date is: " . date("Y-m-d", $tomorrow) . "\\n";

$nextSunday = strtotime("next Sunday");
echo "Next Sunday date is: " . date("Y-m-d", $nextSunday) . "\\n";
?>`
  },
  {
    id: "php-include",
    title: {
      en: "PHP Include",
      km: "ការបង្កប់ឯកសារ Include / Require"
    },
    content: {
      en: `### Reusing File Structures
The \`include\` and \`require\` statements allow you to insert the entire content of one PHP file into another PHP file before the server executes it, promoting highly modular, multi-file code layouts.

### Crucial Difference:
- **\`include\`**: If the file is missing, PHP issues a warning (\`E_WARNING\`) but **continues** executing the rest of the script!
- **\`require\`**: If the file is missing, PHP triggers a fatal error (\`E_COMPILE_ERROR\`) and **stops** script execution immediately!
- **\`_once\` variants (\`include_once\`, \`require_once\`):** PHP checks if the file has already been included. If yes, it will not include it again, preventing function re-declaration crashes.

\`\`\`php
include 'header.php';
require 'database_connection.php';
\`\`\``,
      km: `### ការប្រើប្រាស់កូដរួមគ្នាច្រើនឯកសារ (Include / Require) ក្នុង PHP
សេចក្តីថ្លែងការណ៍ \`include\` និង \`require\` អនុញ្ញាតឱ្យអ្នកនាំយកកូដពីឯកសារ PHP ផ្សេងទៀតមកបង្កប់ចូលក្នុងឯកសារបច្ចុប្បន្ន មុនពេលម៉ាស៊ីនបម្រើដំណើរការវា ដែលជួយឱ្យការរៀបចំគម្រោងមានរបៀបរបប។

### ភាពខុសគ្នាសំខាន់៖
- **\`include\`**: ប្រសិនរកមិនឃើញឯកសារទេ វានឹងលោត Warning ប្រាប់ ប៉ុន្តែ**បន្ត**រត់កូដខាងក្រោមធម្មតា។
- **\`require\`**: ប្រសិនរកមិនឃើញឯកសារទេ វានឹងបង្កកំហុសធ្ងន់ធ្ងរ (Fatal Error) ហើយ**បញ្ឈប់**ការដំណើរការកម្មវិធីភ្លាមៗ!
- **បំរែបំរួល \`_once\` (\`include_once\`, \`require_once\`):** ពិនិត្យមើលថាតើឯកសារនោះធ្លាប់បង្កប់ហើយឬនៅ បើបង្កប់រួចហើយ វានឹងមិនបង្កប់សារជាថ្មីឡើយ ការពារកំហុសជាន់ឈ្មោះមុខងារ។

\`\`\`php
include 'header.php';
require 'database_connection.php';
\`\`\``
    },
    starterCode: `<?php
echo "=== File Modular Inclusion Concepts ===\\n";
echo "Use 'include' for optional UI blocks (headers, footers, sidebars).\\n";
echo "Use 'require' for vital server cores (database configurations, user auth gates).\\n";
?>`
  },
  {
    id: "php-file-handling",
    title: {
      en: "PHP File Handling",
      km: "ការដោះស្រាយឯកសារ File Handling"
    },
    content: {
      en: `### Server File Management
PHP possesses powerful built-in functions for reading, modifying, creating, and deleting physical files stored on the server environment.

### Simplest File Reading Function:
- **\`readfile()\`**: Reads a file and writes its contents directly to the server output buffer, returning the number of bytes read on success.

> **Warning:** Performing file operations is a high-privilege action. Ensure you always sanitize file path parameters from users to prevent directory traversal attacks (where hackers read sensitive configuration files like \`/etc/passwd\`).`,
      km: `### ការគ្រប់គ្រងឯកសារលើ Server (File Handling)
PHP មានមុខងារដ៏មានអំណាចក្នុងការ អាន កែប្រែ បង្កើត និងលុបឯកសាររូបវន្តដែលរក្សាទុកនៅលើប្រព័ន្ធផ្ទុកឯកសាររបស់ Server។

### មុខងារអានឯកសារសាមញ្ញបំផុត៖
- **\`readfile()\`**: អានឯកសារ រួចបញ្ជូនទិន្នន័យទាំងអស់ទៅកាន់អេក្រង់ភ្លាមៗ ព្រមទាំងផ្តល់ទំហំបៃ (bytes) ដែលបានអានរួចត្រឡប់មកវិញ។

> **ការព្រមាន:** ការចាត់ចែងឯកសារជាសកម្មភាពត្រូវការសិទ្ធិខ្ពស់។ ត្រូវប្រាកដថាអ្នកបានសម្អាតប៉ារ៉ាម៉ែត្រផ្លូវឯកសារជានិច្ច ដើម្បីការពារការវាយប្រហារចូលអានឯកសារប្រព័ន្ធសម្ងាត់របស់ម៉ាស៊ីន (Directory Traversal)!`
    },
    starterCode: `<?php
$filepath = "sandbox_memo.txt";

// Let's create a temporary file using file_put_contents
file_put_contents($filepath, "Line 1: Siem Reap\\nLine 2: Phnom Penh\\nLine 3: Sihanoukville");

echo "=== Outputting File Contents using readfile() ===\\n";
$bytesRead = readfile($filepath);

echo "\\n\\nTotal bytes processed: " . $bytesRead . "\\n";

// Cleanup temp file
unlink($filepath);
?>`
  },
  {
    id: "php-file-open-read",
    title: {
      en: "PHP File Open/Read",
      km: "ការបើក និងអានឯកសារ"
    },
    content: {
      en: `### Advanced File Parsing: fopen
The \`fopen()\` function is a flexible method to handle server files, providing more control than \`readfile()\`.

### File Operations Workflow:
1. **Open File:** Call \`$handle = fopen($filename, $mode)\`.
2. **Read/Write Contents:**
   - \`fread($handle, $length)\`: Reads specified number of bytes.
   - \`fgets($handle)\`: Reads a single line.
   - \`feof($handle)\`: Checks if the "End-of-File" has been reached.
3. **Close File:** Call \`fclose($handle)\`.

### Standard Modes:
- \`r\`: Read-only. Starts at the beginning.
- \`w\`: Write-only. Erases existing content or creates a new file.
- \`a\`: Append-only. Keeps existing content, starting at the end.`,
      km: `### ការបើក និងអានឯកសារលម្អិត (fopen) ក្នុង PHP
មុខងារ \`fopen()\` គឺជាវិធីសាស្ត្រដ៏បត់បែនក្នុងការចាត់ចែងឯកសារលើ Server ដែលផ្តល់សិទ្ធិគ្រប់គ្រងបានល្អជាង \`readfile()\`។

### ជំហានដំណើរការ៖
១. **បើកឯកសារ:** ហៅ \`$handle = fopen($filename, $mode)\`។
២. **អាន ឬសរសេរមាតិកា:**
   - \`fread($handle, $length)\`: អានទិន្នន័យទៅតាមប្រវែងបៃដែលបានកំណត់។
   - \`fgets($handle)\`: អានអត្ថបទម្តងមួយបន្ទាត់ៗ។
   - \`feof($handle)\`: ត្រួតពិនិត្យមើលថាតើអានដល់ចុងបញ្ចប់នៃឯកសារហើយឬនៅ (End-of-File)។
៣. **បិទឯកសារ:** ហៅ \`fclose($handle)\`។

### របៀបចាត់ចែងឯកសារ (Modes)៖
- \`r\`: អានតែប៉ុណ្ណោះ (Read-only) ចាប់ផ្តើមពីក្បាលទំព័រ។
- \`w\`: សរសេរតែប៉ុណ្ណោះ (Write-only) លុបកូដចាស់ចោល ឬបង្កើតឯកសារថ្មីបើសិនគ្មាន។
- \`a\`: សរសេរបន្ថែមពីខាងចុង (Append-only) រក្សាមាតិកាចាស់ដដែល។`
    },
    starterCode: `<?php
$filename = "cambodia_temp_data.txt";
file_put_contents($filename, "Dara Sok\\nSophea Heng\\nBona Chea\\n");

// Open file read-only mode
$fileHandle = fopen($filename, "r");

if ($fileHandle) {
    echo "=== Reading File Line-by-Line using fgets() ===\\n";
    while (!feof($fileHandle)) {
        $line = fgets($fileHandle);
        if ($line !== false) {
            echo "Line text: " . trim($line) . "\\n";
        }
    }
    
    // Always close file handle
    fclose($fileHandle);
}

// Cleanup temp file
unlink($filename);
?>`
  },
  {
    id: "php-file-create-write",
    title: {
      en: "PHP File Create/Write",
      km: "ការបង្កើត និងសរសេរឯកសារ"
    },
    content: {
      en: `### Creating and Appending Files
We can use \`fopen()\` with write (\`w\`) or append (\`a\`) modes to create files and save text outputs.

### Executing Actions:
- \`fwrite($handle, $string)\`: Writes data string into the active file pointer.
- \`file_put_contents($filename, $data, FILE_APPEND)\`: A convenient shorthand method that wraps fopen, fwrite, and fclose in a single function call.

> **Pitfall:** Opening a file in \`w\` mode will completely overwrite the target file without warning, discarding all previous contents. Use \`a\` mode if you want to preserve previous records.`,
      km: `### ការបង្កើត និងសរសេរទិន្នន័យចូលឯកសារ (File Create/Write)
យើងអាចប្រើប្រាស់មុខងារ \`fopen()\` ជាមួយជម្រើសសរសេរ (\`w\`) ឬសរសេរបន្ថែម (\`a\`) ដើម្បីបង្កើតឯកសារ និងរក្សាទុកអត្ថបទផ្សេងៗ។

### មុខងារប្រតិបត្តិការ៖
- \`fwrite($handle, $string)\`: សរសេរខ្សែអក្សរចូលទៅក្នុងឯកសារដែលកំពុងបើក។
- \`file_put_contents($filename, $data, FILE_APPEND)\`: មុខងារកាត់សាមញ្ញមួយ ដែលជួយសម្រួលមិនបាច់ហៅ fopen, fwrite, និង fclose ម្តងមួយៗ។

> **ប្រុងប្រយ័ត្ន:** ការបើកឯកសារក្នុងរបៀប \`w\` នឹងលុបមាតិកាចាស់ចោលទាំងអស់ភ្លាមៗដោយគ្មានការព្រមានទុកជាមុនឡើយ! បើចង់រក្សាទិន្នន័យចាស់ សូមប្រើរបៀប \`a\` (Append) ជំនួសវិញ។`
    },
    starterCode: `<?php
$file = "production_logs.txt";

// 1. Create file and write (overwriting if exists)
$handle = fopen($file, "w");
fwrite($handle, "Log entry 1: Admin logged in\\n");
fclose($handle);

// 2. Append text to file
$handle = fopen($file, "a");
fwrite($handle, "Log entry 2: DB backup completed\\n");
fclose($handle);

// Read back the contents to confirm
echo "=== Created File Contents ===\\n";
echo file_get_contents($file);

// Cleanup
unlink($file);
?>`
  },
  {
    id: "php-file-upload",
    title: {
      en: "PHP File Upload",
      km: "ការបង្ហោះឯកសារ File Upload"
    },
    content: {
      en: `### Handling Uploaded Files
PHP simplifies browser file uploads through the \`$_FILES\` associative array, containing metadata about the uploaded items.

### Required HTML Form Rules:
1. Form method **must** be \`post\`.
2. Form must contain the attribute \`enctype="multipart/form-data"\`.

### The \`$_FILES\` Properties:
- \`$_FILES["file"]["name"]\`: The original name of the client file.
- \`$_FILES["file"]["type"]\`: The MIME type of the file.
- \`$_FILES["file"]["size"]\`: The file size in bytes.
- \`$_FILES["file"]["tmp_name"]\`: The temporary path on the server where the file is stored.
- \`$_FILES["file"]["error"]\`: Error code (e.g., \`0\` on success).

> **Security Guard:** Always use \`move_uploaded_file($temp_name, $destination)\` to safely move the file to a permanent folder, and restrict permitted file extensions to prevent executing malicious scripts!`,
      km: `### ការបង្ហោះឯកសារ (File Upload) ក្នុង PHP
PHP សម្រួលការបង្ហោះឯកសារតាមរយៈអថេរសកលជាន់ខ្ពស់ \`$_FILES\` ដែលផ្ទុកព័ត៌មានលម្អិតរបស់ឯកសារដែលបានផ្ញើមកពី Browser។

### លក្ខខណ្ឌតម្រូវក្នុងទម្រង់ HTML Form៖
១. វិធីសាស្ត្រ Form **ត្រូវតែជា** \`post\`។
២. Form ត្រូវតែមានលក្ខណៈពិសេស \`enctype="multipart/form-data"\`។

### អថេរលក្ខណៈរបស់ \`$_FILES\`៖
- \`$_FILES["file"]["name"]\`: ឈ្មោះដើមរបស់ឯកសារពីកុំព្យូទ័រអ្នកប្រើប្រាស់។
- \`$_FILES["file"]["type"]\`: ប្រភេទឯកសារ (MIME type)។
- \`$_FILES["file"]["size"]\`: ទំហំឯកសារគិតជាបៃ (bytes)។
- \`$_FILES["file"]["tmp_name"]\`: ទីតាំងបណ្តោះអាសន្នលើ Server ដែលផ្ទុកឯកសារនោះ។
- \`$_FILES["file"]["error"]\`: កូដបង្ហាញកំហុស (\`0\` មានន័យថាជោគជ័យ)។

> **វិធានការសុវត្ថិភាព:** ត្រូវតែប្រើមុខងារ \`move_uploaded_file($temp_name, $destination)\` ដើម្បីប្តូរទីតាំងឯកសារទៅថតអចិន្ត្រៃយ៍ និងត្រូវកំណត់ប្រភេទឯកសារអនុញ្ញាត (ដូចជា .jpg, .png) ដើម្បីការពារការបង្ហោះកូដបំផ្លាញចូល Server!`
    },
    starterCode: `<?php
// Let's simulate file upload array metadata
$_FILES['userfile'] = [
    "name" => "cambodian_landscape.jpg",
    "type" => "image/jpeg",
    "tmp_name" => "/tmp/php_tmp_uploader",
    "error" => 0,
    "size" => 1572864 // 1.5MB
];

$allowedExtensions = ["jpg", "jpeg", "png"];
$filename = $_FILES['userfile']['name'];
$ext = strtolower(pathinfo($filename, PATHINFO_EXTENSION));

echo "=== Processing File Upload Metadata ===\\n";
echo "Filename: " . $filename . "\\n";
echo "File size: " . ($_FILES['userfile']['size'] / 1024 / 1024) . " MB\\n";

if (in_array($ext, $allowedExtensions)) {
    echo "Status: Valid image extension! Safe to move to uploads directory.\\n";
} else {
    echo "Status: Error! Blocked unsafe file format.\\n";
}
?>`
  },
  {
    id: "php-cookies",
    title: {
      en: "PHP Cookies",
      km: "ឃុកឃី Cookies"
    },
    content: {
      en: `### Client-Side State: Cookies
A cookie is a small key-value text file that the server embeds on the user's computer. Each time the browser requests a page, it sends the cookie back.

### Managing Cookies:
- **Set Cookie:** Use \`setcookie($name, $value, $expire, $path, $domain, $secure, $httponly)\`.
- **Read Cookie:** Access values via \`$_COOKIE[$name]\`.
- **Delete Cookie:** Set the expiration timestamp to a past time (e.g., \`time() - 3600\`).

> **Security Tip:** Always set the last argument \`$httponly\` to \`true\` to prevent client-side JavaScript scripts from stealing your cookies, neutralizing XSS session hijacking attacks.`,
      km: `### ការរក្សាទុកទិន្នន័យលើ Browser (Cookies)
ឃុកឃី (Cookie) គឺជាឯកសារអត្ថបទតូចមួយដែលម៉ាស៊ីនបម្រើ (Server) បង្កប់នៅលើកុំព្យូទ័ររបស់អ្នកប្រើប្រាស់។ រាល់ពេល Browser ស្នើសុំទំព័រកូដ វានឹងបញ្ជូន Cookie ត្រឡប់ទៅវិញ។

### ការគ្រប់គ្រង Cookies៖
- **បង្កើតឃុកឃី:** ប្រើប្រាស់ \`setcookie($name, $value, $expire, $path, $domain, $secure, $httponly)\`។
- **អានឃុកឃី:** ហៅយកតម្លៃតាមរយៈ \`$_COOKIE[$name]\`។
- **លុបឃុកឃី:** កំណត់ពេលវេលាផុតកំណត់ឱ្យទៅជាអតីតកាល (ឧទាហរណ៍៖ \`time() - 3600\`)។

> **គន្លឹះសុវត្ថិភាព:** ត្រូវតែកំណត់ប៉ារ៉ាម៉ែត្រចុងក្រោយ \`$httponly\` ទៅជា \`true\` ដើម្បីការពារមិនឱ្យកូដ JavaScript របស់ជនខូចលួចយកឃុកឃីរបស់អ្នកបាន ដែលជួយទប់ស្កាត់ការលួច Account!`
    },
    starterCode: `<?php
// Simulate setting and checking a preference cookie
$_COOKIE['user_theme'] = "dark_ambient";

echo "=== Reading Active Cookies ===\\n";
if (isset($_COOKIE['user_theme'])) {
    echo "User Selected Theme: " . htmlspecialchars($_COOKIE['user_theme']) . "\\n";
} else {
    echo "Theme Cookie is not set yet.\\n";
}
?>`
  },
  {
    id: "php-sessions",
    title: {
      en: "PHP Sessions",
      km: "សេសសិន Sessions"
    },
    content: {
      en: `### Server-Side State: Sessions
A session stores user information across multiple pages. Unlike cookies, session data is stored securely on the **server** environment, with only a random session ID cookie sent to the client browser.

### Session Lifecycle:
1. **\`session_start()\`**: Must be called at the very top of your PHP script before any HTML tags are output!
2. **Set Values:** Write to the \`$_SESSION\` superglobal array.
3. **Read Values:** Access \`$_SESSION\` anywhere.
4. **Clear Values:** Call \`session_unset()\` to clear variable states, and \`session_destroy()\` to kill the server session directory.`,
      km: `### ការគ្រប់គ្រងស្ថានភាពអ្នកប្រើប្រាស់លើ Server (Sessions)
សេសសិន (Session) គឺជាប្រព័ន្ធរក្សាទុកព័ត៌មានរបស់អ្នកប្រើប្រាស់ឆ្លងកាត់ទំព័រជាច្រើន។ ខុសពី Cookies ទិន្នន័យ Session ត្រូវបានរក្សាទុកនៅលើ **Server** ដែលមានសុវត្ថិភាពខ្ពស់ ដោយគ្រាន់តែបញ្ជូនលេខសម្គាល់ចៃដន្យ (Session ID) ទៅកាន់ Browser ប៉ុណ្ណោះ។

### វដ្តជីវិត Session៖
១. **\`session_start()\`**: ត្រូវតែហៅនៅផ្នែកលើបង្អស់នៃឯកសារ មុនពេលបង្ហាញកូដ HTML ឬអត្ថបទណាមួយ!
២. **បញ្ចូលតម្លៃ:** សរសេរចូលទៅក្នុងអថេរសកលជាន់ខ្ពស់ \`$_SESSION\`។
៣. **អានតម្លៃ:** ហៅយកពីក្នុង \`$_SESSION\` នៅគ្រប់ទីកន្លែង។
៤. **លុបចោល:** ហៅ \`session_unset()\` ដើម្បីសម្អាតតម្លៃអថេរ និង \`session_destroy()\` ដើម្បីលុប Session នោះចោលពី Server។`
    },
    starterCode: `<?php
// Start session
session_start();

// Store values in session
$_SESSION['user_id'] = 5055;
$_SESSION['username'] = "Kosal Sok";
$_SESSION['logged_in'] = true;

echo "=== Active Session Registered ===\\n";
echo "Session ID: " . session_id() . "\\n";
echo "Username saved: " . $_SESSION['username'] . "\\n";
echo "User ID saved: " . $_SESSION['user_id'] . "\\n";
?>`
  },
  {
    id: "php-filters",
    title: {
      en: "PHP Filters",
      km: "តម្រងទិន្នន័យ Filters"
    },
    content: {
      en: `### Sanitizing and Validating Inputs
PHP filters are used to validate and sanitize external user inputs, protecting your application against wrong data formats and script injections.

### Two Categories of Filters:
1. **Validation Filters:** Confirms if the input matches structural criteria (e.g., is integer, is IP, is email). Returns value or false.
2. **Sanitization Filters:** Strip invalid characters from the target string (e.g., removing HTML tags).

### Core Function:
- **\`filter_var($value, $filter_id)\`**: Runs a filter operation on a single variable.`,
      km: `### ការត្រួតពិនិត្យ និងសម្អាតទិន្នន័យ (PHP Filters)
តម្រង (Filters) ត្រូវបានប្រើប្រាស់ដើម្បីផ្ទៀងផ្ទាត់ និងសម្អាតទិន្នន័យដែលបញ្ចូលមកពីខាងក្រៅ ការពារកម្មវិធីពីទម្រង់ទិន្នន័យមិនត្រឹមត្រូវ និងការលួចបង្កប់កូដបំផ្លាញ។

### ប្រភេទតម្រងទាំង ២៖
១. **តម្រងផ្ទៀងផ្ទាត់ (Validation Filters):** ពិនិត្យមើលថាតើទិន្នន័យសរសេរត្រូវទម្រង់គ្រោងមែនឬទេ (ឧទាហរណ៍៖ ជាចំនួនគត់, ជា IP, ជាអ៊ីមែល)។ វាផ្តល់តម្លៃមកវិញ ឬ false។
២. **តម្រងសម្អាត (Sanitization Filters):** លុបចោលរាល់តួអក្សរមិនត្រូវច្បាប់ចេញពីខ្សែអក្សរ (ឧទាហរណ៍៖ លុប HTML tags ចេញ)។

### មុខងារចម្បង៖
- **\`filter_var($value, $filter_id)\`**: អនុវត្តតម្រងចម្រោះទៅលើអថេរតែមួយ។`
    },
    starterCode: `<?php
$email = "sokha(at)example.com";
$cleanEmail = filter_var($email, FILTER_SANITIZE_EMAIL);

echo "Original input: " . $email . "\\n";
echo "Sanitized output: " . $cleanEmail . "\\n\\n";

// Validate Integer
$number = 150;
if (filter_var($number, FILTER_VALIDATE_INT)) {
    echo "Value '$number' is a valid integer.\\n";
} else {
    echo "Value '$number' is NOT an integer.\\n";
}
?>`
  },
  {
    id: "php-filters-advanced",
    title: {
      en: "PHP Filters Advanced",
      km: "តម្រងកម្រិតខ្ពស់"
    },
    content: {
      en: `### Complex Filters and Options
You can configure filters with detailed options or flag rules to perform strict checks.

### Validating Range limits:
You can pass an options array containing \`min_range\` and \`max_range\` keys to constrain numerical inputs.

### Advanced Filters:
- \`FILTER_VALIDATE_IP\` with flags like \`FILTER_FLAG_IPV6\`.
- \`FILTER_VALIDATE_URL\` with flags like \`FILTER_FLAG_QUERY_REQUIRED\`.`,
      km: `### តម្រងកម្រិតខ្ពស់ និងជម្រើសបន្ថែម (Filters Advanced)
អ្នកអាចកំណត់រចនាសម្ព័ន្ធតម្រងឱ្យមានភាពស្មុគស្មាញ និងតឹងរឹងជាងមុន ដោយការបញ្ជូនអាគុយម៉ង់ជម្រើស (Options) ឬកំណត់ Flags។

### កំណត់ដែនកំណត់ចំនួនលេខ៖
អ្នកអាចបញ្ជូនអារេជម្រើសដែលមានផ្ទុកសោរ \`min_range\` និង \`max_range\` ដើម្បីកំណត់ឱ្យច្បាស់ពីចន្លោះលេខដែលអនុញ្ញាត។

### តម្រងកម្រិតខ្ពស់ផ្សេងៗ៖
- \`FILTER_VALIDATE_IP\` រួមជាមួយ flag \`FILTER_FLAG_IPV6\`។
- \`FILTER_VALIDATE_URL\` រួមជាមួយ flag \`FILTER_FLAG_QUERY_REQUIRED\` (តម្រូវឱ្យមាន query string)។`
    },
    starterCode: `<?php
$intVal = 85;
$min = 10;
$max = 100;

// Set up options array
$options = [
    "options" => [
        "min_range" => $min,
        "max_range" => $max
    ]
];

if (filter_var($intVal, FILTER_VALIDATE_INT, $options) !== false) {
    echo "Success: $intVal is in range [$min - $max].\\n";
} else {
    echo "Error: $intVal is OUTSIDE range [$min - $max].\\n";
}

// IP v6 Validation
$ip = "2001:0db8:85a3:0000:0000:8a2e:0370:7334";
if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_IPV6)) {
    echo "IP is a valid IPv6 address.\\n";
} else {
    echo "IP is not a valid IPv6 address.\\n";
}
?>`
  },
  {
    id: "php-callback-functions",
    title: {
      en: "PHP Callback Functions",
      km: "មុខងារហៅត្រឡប់ Callback Functions"
    },
    content: {
      en: `### Passing Functions as Arguments
A callback function (callback) is a function that is passed as an argument into another function to be executed later.

### Execution Framework:
- Any existing function can be passed simply as a string containing its name.
- Anonymous (closure) functions can also be passed directly.
- Functions like \`array_map()\`, \`array_filter()\`, and \`preg_replace_callback()\` rely heavily on callbacks.`,
      km: `### ការបញ្ជូន Function ជាអាគុយម៉ង់ (Callback Functions)
មុខងារហៅត្រឡប់ (Callback Function) គឺជាមុខងារដែលត្រូវបានបញ្ជូនជាអាគុយម៉ង់ទៅក្នុងមុខងារមួយផ្សេងទៀត ដើម្បីទុកហៅឱ្យរត់ដំណើរការនៅពេលក្រោយ។

### របៀបដំណើរការ៖
- រាល់ Function ធម្មតាទាំងអស់អាចបញ្ជូនទៅកាន់ Function មួយទៀតបានដោយគ្រាន់តែសរសេរឈ្មោះវាជាអក្សរ (String)។
- អ្នកក៏អាចប្រើប្រាស់មុខងារគ្មានឈ្មោះ (Anonymous/Closure Functions) បញ្ជូនទៅផ្ទាល់តែម្តងក៏បាន។
- មុខងារដូចជា \`array_map()\`, \`array_filter()\` និង \`preg_replace_callback()\` គឺពឹងផ្អែកខ្លាំងលើ Callbacks នេះ។`
    },
    starterCode: `<?php
// A simple callback function
function formatExclamation($item) {
    return $item . "! ";
}

$fruits = ["Apple", "Mango", "Banana"];

// Pass formatExclamation callback name as string to array_map
$formatted = array_map("formatExclamation", $fruits);

print_r($formatted);
?>`
  },
  {
    id: "php-json",
    title: {
      en: "PHP JSON",
      km: "ទម្រង់ទិន្នន័យ JSON"
    },
    content: {
      en: `### Parsing and Encoding JSON
JSON (JavaScript Object Notation) is the standard format for exchanging data across APIs. PHP has built-in functions to convert to and from JSON.

### Key Methods:
- \`json_encode($array_or_object)\`: Converts a PHP array/object into a JSON string.
- \`json_decode($json_string, $associative_bool)\`: Converts a JSON string back into PHP structures. If the second argument is set to \`true\`, it decodes into an associative array; if \`false\` or omitted, it decodes into a PHP object.`,
      km: `### ការវិភាគ និងបំប្លែងទិន្នន័យ JSON ក្នុង PHP
JSON (JavaScript Object Notation) គឺជាទម្រង់ស្តង់ដារសម្រាប់ប្តូរប្រែទិន្នន័យរវាងប្រព័ន្ធ ឬ APIs នានា។ PHP មានមុខងារគាំទ្រស្រាប់ៗសម្រាប់ដោះស្រាយ JSON។

### វិធីសាស្ត្រចម្បង៖
- \`json_encode($array_or_object)\`: បំប្លែងអារេ ឬវត្ថុ PHP ទៅជាអត្ថបទ JSON String។
- \`json_decode($json_string, $associative_bool)\`: បំប្លែងអត្ថបទ JSON ត្រឡប់មកជាទិន្នន័យ PHP វិញ។ បើប៉ារ៉ាម៉ែត្រទី២កំណត់ជា \`true\` វានឹងផ្តល់ជាអារេ (Array) បើដាក់ \`false\` វានឹងផ្តល់ជាវត្ថុ (Object)។`
    },
    starterCode: `<?php
// 1. Encoding associative array to JSON
$data = [
    "status" => "success",
    "course" => "PHP Advanced",
    "students" => ["Dara", "Sophea", "Bona"]
];

$jsonString = json_encode($data);
echo "=== JSON Encoded String ===\\n";
echo $jsonString . "\\n\\n";

// 2. Decoding JSON string to PHP Array
$jsonRaw = '{"name":"Sok","city":"Siem Reap","score":95}';
$decodedArray = json_decode($jsonRaw, true);

echo "=== Decoded PHP Array ===\\n";
echo "Student Name: " . $decodedArray['name'] . "\\n";
echo "City Location: " . $decodedArray['city'] . "\\n";
?>`
  },
  {
    id: "php-exceptions",
    title: {
      en: "PHP Exceptions",
      km: "ការគ្រប់គ្រងកំហុស Exceptions"
    },
    content: {
      en: `### Handling Runtime Errors
An exception is an object that describes an error or unexpected behavior of a PHP script.

### Key Constructs:
- \`throw\`: Keyword used to trigger an exception (e.g., \`throw new Exception("Error message")\`).
- \`try\`: Encloses code blocks that may trigger exception errors.
- \`catch\`: Catches the exception object, letting you handle the error gracefully without crashing the server.
- \`finally\`: Code block that always runs after try/catch blocks, regardless of whether an exception was thrown.`,
      km: `### ការគ្រប់គ្រងបញ្ហាកំហុសពេលកំពុងដំណើរការ (Exceptions)
Exception គឺជាវត្ថុ (Object) ពិសេសមួយដែលតំណាងឱ្យបញ្ហាកំហុសឆ្គង ឬសកម្មភាពមិនប្រក្រតីដែលកើតឡើងក្នុងកម្មវិធី PHP។

### សំណង់កូដសំខាន់ៗ៖
- \`throw\`: ពាក្យគន្លឹះសម្រាប់គប់បញ្ចេញកំហុស (ឧទាហរណ៍៖ \`throw new Exception("ErrorMessage")\`)។
- \`try\`: គ្របព័ទ្ធលើប្លុកកូដណាដែលអាចនឹងកើតមានបញ្ហា ដើម្បីត្រៀមខ្លួនដោះស្រាយ។
- \`catch\`: ចាប់យកវត្ថុកំហុសនោះមកដោះស្រាយយ៉ាងរលូន ដោយមិនធ្វើឱ្យម៉ាស៊ីនបម្រើគាំងគម្រោងឡើយ។
- \`finally\`: ប្លុកកូដដែលនឹងត្រូវដំណើរការជានិច្ច មិនថាកំហុសត្រូវបានកើតឡើង ឬមិនកើតឡើងនោះទេ។`
    },
    starterCode: `<?php
function divideNumbers($dividend, $divisor) {
    if ($divisor == 0) {
        throw new Exception("Division by zero error! Divisor cannot be 0.");
    }
    return $dividend / $divisor;
}

try {
    echo "Result: " . divideNumbers(10, 2) . "\\n";
    echo "Result: " . divideNumbers(10, 0) . "\\n"; // triggers exception
} catch (Exception $e) {
    echo "Caught Exception Error: " . $e->getMessage() . "\\n";
} finally {
    echo "Finally Block: This line runs no matter what!\\n";
}
?>`
  }
];
