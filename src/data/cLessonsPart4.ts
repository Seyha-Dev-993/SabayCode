import { Lesson } from '../types';

export const cLessonsPart4: Lesson[] = [
  {
    id: "c-null-pointer",
    title: { en: "C NULL Pointer", km: "តម្លៃទទេ NULL Pointer C" },
    content: {
      en: `# C NULL Pointer

A **NULL Pointer** is a pointer that does not point to any valid memory address. It is assigned the constant value \`NULL\` (which is internally defined as \`0\`).

\`\`\`c
int *ptr = NULL;
\`\`\`

It is used as a safe placeholder to indicate that a pointer does not contain an active reference yet.

> **Caution:** Trying to read or write value to a NULL pointer (known as **dereferencing a NULL pointer**) causes an immediate **Segmentation Fault (Crash)**. Always perform a safety check before dereferencing!

### Worked Example
\`\`\`c
#include <stdio.h>

int main() {
    int *sensorReading = NULL; // Safe initialization
    
    // Safety check
    if (sensorReading == NULL) {
        printf("Sensor is offline. Pointer is NULL!\\n");
    } else {
        printf("Sensor Value: %d\\n", *sensorReading);
    }
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
Sensor is offline. Pointer is NULL!
\`\`\``,
      km: `# តម្លៃទទេ NULL Pointer C

**NULL Pointer** គឺជា pointer ដែលមិនចង្អុលទៅកាន់ទីតាំងអាសយដ្ឋាន Memory ណាទាំងអស់។ វាត្រូវបានផ្តល់តម្លៃថេរ \`NULL\` (ដែលស្មើនឹងលេខ \`0\`)។

\`\`\`c
int *ptr = NULL;
\`\`\`

វាត្រូវបានប្រើជាសញ្ញាសម្គាល់សុវត្ថិភាពដើម្បីបញ្ជាក់ថា pointer នេះមិនទាន់មានទិន្នន័យចង្អុលទៅណានៅឡើយ។

> **ការព្រមាន៖** ការព្យាយាមទាញយកតម្លៃពី NULL Pointer (ហៅថា **Dereferencing NULL**) នឹងធ្វើឱ្យកម្មវិធីគាំងជាបន្ទាន់ (Segmentation Fault)។ ត្រូវសរសេរកូដឆែកសុវត្ថិភាពជាមុនជានិច្ច!

### ឧទាហរណ៍អនុវត្ត
\`\`\`c
#include <stdio.h>

int main() {
    int *sensorReading = NULL; 
    
    if (sensorReading == NULL) {
        printf("Sensor is offline. Pointer is NULL!\\n");
    } else {
        printf("Sensor Value: %d\\n", *sensorReading);
    }
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
Sensor is offline. Pointer is NULL!
\`\`\``
    },
    starterCode: `#include <stdio.h>

int main() {
    int *data = NULL;
    if (data == NULL) {
        printf("Data pointer is safely checked.\\n");
    }
    return 0;
}`
  },
  {
    id: "c-error-handling",
    title: { en: "C Error Handling", km: "ការគ្រប់គ្រងកំហុស C" },
    content: {
      en: `# C Error Handling

Unlike modern languages, C does not have exception handling keywords like \`try\` or \`catch\`. Instead, C handles errors by returning specific value codes or utilizing the global state variable **\`errno\`** from \`<errno.h>\`.

Common error reporting tools:
- **\`errno\`**: Stores the integer error code of the most recent system operation failure.
- **\`perror(msg)\`**: Prints your custom message followed by the automatic text translation of the current error.
- **\`strerror(errno)\`**: Returns the system message text of a specific error code (requires \`<string.h>\`).

> **Tip:** Common error codes include \`EDOM\` (mathematical domain error, e.g. square root of negative) and \`ERANGE\` (value out of range overflow).

### Worked Example
\`\`\`c
#include <stdio.h>
#include <errno.h>
#include <string.h>
#include <math.h>

int main() {
    double val = -1.0;
    
    // Clear errno
    errno = 0;
    
    double result = sqrt(val);
    
    if (errno == EDOM) {
        // Output mathematical error details
        perror("Mathematical Error Occurred");
        printf("System Error Text: %s\\n", strerror(errno));
    } else {
        printf("Result: %.2f\\n", result);
    }
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
Mathematical Error Occurred: Numerical argument out of domain
System Error Text: Numerical argument out of domain
\`\`\``,
      km: `# ការគ្រប់គ្រងកំហុស C

ខុសពីភាសាទំនើប C មិនមានពាក្យគន្លឹះចាប់កំហុសដូចជា \`try\` ឬ \`catch\` ឡើយ។ ផ្ទុយទៅវិញ C គ្រប់គ្រងកំហុសដោយការប្រគល់តម្លៃកូដពិសេស ឬប្រើប្រាស់អថេរប្រព័ន្ធសកល **\`errno\`** ពីបណ្ណាល័យ \`<errno.h>\`។

ឧបករណ៍រាយការណ៍កំហុស៖
- **\`errno\`**៖ រក្សាទុកកូដលេខនៃកំហុសប្រព័ន្ធចុងក្រោយគេ។
- **\`perror(msg)\`**៖ បោះពុម្ពសារកំហុសផ្ទាល់ខ្លួនរបស់អ្នក រួមជាមួយអត្ថបទពន្យល់កំហុសប្រព័ន្ធ។
- **\`strerror(errno)\`**៖ ប្រគល់មកវិញនូវអត្ថបទពន្យល់ប្រព័ន្ធនៃកូដកំហុស (ត្រូវការ \`<string.h>\`)។

> **គន្លឹះ៖** កូដកំហុសទូទៅរួមមាន \`EDOM\` (កំហុសផ្នែកគណិតវិទ្យា ដូចជាការរកឫសការេនៃលេខអវិជ្ជមាន) និង \`ERANGE\` (តម្លៃហួសដែនកំណត់)។

### ឧទាហរណ៍អនុវត្ត
\`\`\`c
#include <stdio.h>
#include <errno.h>
#include <string.h>
#include <math.h>

int main() {
    double val = -1.0;
    
    errno = 0;
    double result = sqrt(val);
    
    if (errno == EDOM) {
        perror("Mathematical Error Occurred");
        printf("System Error Text: %s\\n", strerror(errno));
    } else {
        printf("Result: %.2f\\n", result);
    }
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
Mathematical Error Occurred: Numerical argument out of domain
System Error Text: Numerical argument out of domain
\`\`\``
    },
    starterCode: `#include <stdio.h>
#include <errno.h>
#include <string.h>

int main() {
    FILE *f = fopen("non_existent_file.txt", "r");
    if (f == NULL) {
        printf("Error code: %d\\n", errno);
        printf("System says: %s\\n", strerror(errno));
    } else {
        fclose(f);
    }
    return 0;
}`
  },
  {
    id: "c-input-validation",
    title: { en: "C Input Validation", km: "ការផ្ទៀងផ្ទាត់ទិន្នន័យបញ្ចូល C" },
    content: {
      en: `# C Input Validation

Accepting direct user input without checking is the most common source of security vulnerabilities in C (such as **Buffer Overflow** exploits).

Key safety rules:
1. **Never use \`gets()\`**: It has been completely deprecated because it does not check input bounds. Use \`fgets()\` instead!
2. **Validate bounds**: Check numbers against expected logical minimum and maximum boundaries before using them.
3. **Check function returns**: Verify that functions like \`scanf()\` successfully parsed the expected count of inputs.

> **Tip:** \`fgets()\` reads a newline character if there is space. You can strip it off using \`strcspn()\`.

### Worked Example
Checking numerical age limits and preventing buffer overflows:
\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int main() {
    char inputBuffer[10];
    printf("Enter age (1-120): ");
    
    // Safely capture max 9 characters + 1 null terminator
    if (fgets(inputBuffer, sizeof(inputBuffer), stdin) != NULL) {
        int age = atoi(inputBuffer);
        
        // Logical validation
        if (age < 1 || age > 120) {
            printf("Error: Invalid age range!\\n");
        } else {
            printf("Age registered successfully: %d\\n", age);
        }
    }
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
Enter age (1-120): 150
Error: Invalid age range!
\`\`\``,
      km: `# ការផ្ទៀងផ្ទាត់ទិន្នន័យបញ្ចូល C

ការទទួលយកទិន្នន័យបញ្ចូលពីអ្នកប្រើប្រាស់ដោយគ្មានការផ្ទៀងផ្ទាត់ គឺជាប្រភពចម្បងនៃចន្លោះប្រហោងសន្តិសុខនៅក្នុង C (ដូចជា **Buffer Overflow** ហួសដែនកំណត់អារេ)។

ច្បាប់សុវត្ថិភាពចម្បង៖
1. **ហាមប្រើប្រាស់ \`gets()\` ទាំងស្រុង**៖ វាត្រូវបានគេលុបចោលពីស្តង់ដារ C ព្រោះវាមិនឆែកដែនទំហំអត្ថបទឡើយ។ ត្រូវជំនួសដោយ \`fgets()\` ជានិច្ច!
2. **ផ្ទៀងផ្ទាត់ដែនកំណត់លេខ**៖ ឆែកមើលតម្លៃទិន្នន័យលេខប្រៀបនឹងលក្ខខណ្ឌមុនពេលយកទៅដំណើរការ។

> **គន្លឹះ៖** \`fgets()\` នឹងអានទាំងសញ្ញាចុះបន្ទាត់ថ្មីផងដែរ។ អ្នកអាចលុបវាចេញបានដោយប្រើ \`strcspn()\`។

### ឧទាហរណ៍អនុវត្ត
ការផ្ទៀងផ្ទាត់អាយុរបស់អ្នកប្រើប្រាស់ឱ្យស្ថិតក្នុងដែនកំណត់សុវត្ថិភាព៖
\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int main() {
    char inputBuffer[10];
    printf("Enter age (1-120): ");
    
    if (fgets(inputBuffer, sizeof(inputBuffer), stdin) != NULL) {
        int age = atoi(inputBuffer);
        
        if (age < 1 || age > 120) {
            printf("Error: Invalid age range!\\n");
        } else {
            printf("Age registered successfully: %d\\n", age);
        }
    }
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
Enter age (1-120): 150
Error: Invalid age range!
\`\`\``
    },
    starterCode: `#include <stdio.h>
#include <stdlib.h>

int main() {
    char buf[10] = "200"; // Mocking input
    int speed = atoi(buf);
    if (speed < 0 || speed > 180) {
        printf("Speed limit validation failed!\\n");
    } else {
        printf("Speed is valid: %d km/h\\n", speed);
    }
    return 0;
}`
  },
  {
    id: "c-debugging",
    title: { en: "C Debugging", km: "ការដោះស្រាយកំហុសកូដ C" },
    content: {
      en: `# C Debugging

Debugging is the analytical process of finding and fixing compilation and runtime errors. In C, bugs fall into three categories:

1. **Syntax Errors:** Missing semicolons, unmatched brackets (prevent compilation).
2. **Runtime Crashes:** Dereferencing NULL, dividing by zero, array out of bounds (Segmentation Faults).
3. **Logical Errors:** Incorrect math formulas (code runs but outputs wrong answers).

> **Tip:** The simplest, most direct debugging tool is inserting temporary \`printf()\` statements (also known as "Print Debugging") to print variables values and pinpoint which line is failing. For advanced systems, use debuggers like **GDB** (GNU Debugger).

### Worked Example
Using print debugging to find a logic error in an averaging function:
\`\`\`c
#include <stdio.h>

int main() {
    int score1 = 80;
    int score2 = 90;
    
    // Buggy line: division happens before addition due to operator priority
    double avg = score1 + score2 / 2.0; 
    printf("[DEBUG] Incorrect Avg: %.1f\\n", avg);
    
    // Corrected line with parenthesis
    avg = (score1 + score2) / 2.0;
    printf("[DEBUG] Fixed Avg: %.1f\\n", avg);
    
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
[DEBUG] Incorrect Avg: 125.0
[DEBUG] Fixed Avg: 85.0
\`\`\``,
      km: `# ការដោះស្រាយកំហុសកូដ C

ការស្វែងរកកំហុសកូដ (Debugging) គឺជាដំណើរការវិភាគដើម្បីដោះស្រាយកំហុសពេល Compile និងពេលដំណើរការកម្មវិធី (Runtime)។ ក្នុង C កំហុសចែកជាបី៖

1. **Syntax Errors៖** ភ្លេចសញ្ញាក្បៀសចំនុច សញ្ញាវង់ក្រចក (មិនអាច compile បាន)។
2. **Runtime Crashes៖** ហៅ NULL Pointer, ចែកនឹងសូន្យ, ហួសដែនអារេ (Segmentation Faults)។
3. **Logical Errors៖** កូដដំណើរការធម្មតា ប៉ុន្តែផ្តល់លទ្ធផលខុស។

> **គន្លឹះ៖** វិធីដោះស្រាយកំហុសសាមញ្ញ និងលឿនបំផុតគឺការសរសេរ \`printf()\` បណ្តោះអាសន្ន ដើម្បីពិនិត្យតម្លៃអថេរ និងរកបន្ទាត់ដែលមានបញ្ហា។ សម្រាប់កម្រិតខ្ពស់ គេប្រើប្រាស់កម្មវិធី **GDB** (GNU Debugger)។

### ឧទាហរណ៍អនុវត្ត
ការប្រើប្រាស់ \`printf\` ដើម្បីជួយដោះស្រាយលំដាប់លំដោយគណិតវិទ្យា៖
\`\`\`c
#include <stdio.h>

int main() {
    int score1 = 80;
    int score2 = 90;
    
    double avg = score1 + score2 / 2.0; 
    printf("[DEBUG] Incorrect Avg: %.1f\\n", avg);
    
    avg = (score1 + score2) / 2.0;
    printf("[DEBUG] Fixed Avg: %.1f\\n", avg);
    
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
[DEBUG] Incorrect Avg: 125.0
[DEBUG] Fixed Avg: 85.0
\`\`\``
    },
    starterCode: `#include <stdio.h>

int main() {
    int total = 150;
    printf("Line %d: Checkpoint - total is %d\\n", __LINE__, total);
    return 0;
}`
  },
  {
    id: "c-leak-detection",
    title: { en: "C Memory Leak Detection", km: "ការរក្សាសន្តិសុខការចងចាំ C" },
    content: {
      en: `# C Memory Leak Detection

A **Memory Leak** occurs when a program allocates dynamic memory on the heap but forgets to free it when it is no longer needed. Over time, the program consumes more and more system memory.

To detect memory leaks:
1. **Count Allocations**: Track every \`malloc\`/\`calloc\` call and make sure there is a corresponding \`free\` call.
2. **Valgrind**: A command-line tool that monitors heap memory leaks at runtime.
3. **AddressSanitizer**: A compiler flag supported by GCC and Clang.

To compile with AddressSanitizer locally, run:
\`\`\`bash
gcc -fsanitize=address -g program.c -o program
./program
\`\`\`

> **Tip:** AddressSanitizer will output a detailed crash log pinpointing the exact line where memory was allocated but never freed.

### Worked Example
\`\`\`c
#include <stdio.h>
#include <stdlib.h>

void performTask() {
    // Memory is allocated but never freed!
    int *data = malloc(5 * sizeof(int));
    data[0] = 42;
    printf("Task value: %d\\n", data[0]);
}

int main() {
    performTask();
    printf("Memory leak occurred because data was not freed!\\n");
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
Task value: 42
Memory leak occurred because data was not freed!
\`\`\``,
      km: `# ការរក្សាសន្តិសុខការចងចាំ C

**Memory Leak** កើតឡើងនៅពេលកម្មវិធីស្នើសុំការចងចាំពី Heap ប៉ុន្តែភ្លេចហៅប្រើ \`free()\` ដើម្បីប្រគល់វាទៅកាន់ប្រព័ន្ធវិញនៅពេលលែងត្រូវការ។

វិធីសាស្ត្រស្វែងរក៖
1. **ការរាប់ Allocation**៖ រាល់ការហៅ \`malloc\`/\`calloc\` ត្រូវតែគូសភ្ជាប់ជាមួយការហៅ \`free\`។
2. **Valgrind**៖ កម្មវិធីដោះស្រាយកំហុស Memory កម្រិតខ្ពស់លើ Terminal។
3. **AddressSanitizer**៖ មុខងារពិសេសរបស់ GCC/Clang សម្រាប់ឆែក Memory។

ដើម្បី Compile ជាមួយ AddressSanitizer លើកុំព្យូទ័រ៖
\`\`\`bash
gcc -fsanitize=address -g program.c -o program
./program
\`\`\`

> **គន្លឹះ៖** AddressSanitizer នឹងបង្ហាញរបាយការណ៍លម្អិតប្រាប់ពីបន្ទាត់កូដដែលបានសុំ Memory តែមិនព្រមដោះលែង។

### ឧទហរណ៍អនុវត្ត
\`\`\`c
#include <stdio.h>
#include <stdlib.h>

void performTask() {
    int *data = malloc(5 * sizeof(int));
    data[0] = 42;
    printf("Task value: %d\\n", data[0]);
}

int main() {
    performTask();
    printf("Memory leak occurred because data was not freed!\\n");
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
Task value: 42
Memory leak occurred because data was not freed!
\`\`\``
    },
    starterCode: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int *ptr = malloc(100);
    // Forgot to free! Fix this by adding free(ptr);
    printf("Memory leak demonstration. Fix me!\\n");
    free(ptr); // Safely fixed
    return 0;
}`
  },
  {
    id: "c-hardened-function",
    title: { en: "C Hardened Function", km: "អនុគមន៍ការពារកម្រិតខ្ពស់ C" },
    content: {
      en: `# C Hardened Function

Let us put all our error prevention, validation, and defensive rules together by analyzing a running function.

We will start with a typical **broken** function that causes a segmentation fault or division-by-zero, and look at the **hardened** production-grade code:

### Broken Version (Insecure)
\`\`\`c
// High risk of crash if size is negative or list pointer is NULL!
double getAverageSpeed(int *list, int size) {
    int sum = 0;
    for (int i = 0; i < size; i++) {
        sum += list[i];
    }
    return sum / size; // Crash if size is 0 (division by zero)!
}
\`\`\`

### Hardened Version (Production Grade)
\`\`\`c
double getAverageSpeed(int *list, int size) {
    // Rule 1: Validate NULL Pointer
    if (list == NULL) {
        printf("Error: Speed list pointer is NULL!\\n");
        return -1.0; 
    }
    // Rule 2: Validate logical boundaries
    if (size <= 0) {
        printf("Error: Invalid array size (%d)!\\n", size);
        return 0.0; 
    }
    
    int sum = 0;
    for (int i = 0; i < size; i++) {
        sum += list[i];
    }
    return (double)sum / size; // Safe division + proper float cast
}
\`\`\`

> **Tip:** Write defensive code. Never assume your callers will pass valid parameters. Defensive checks are cheap, but crashes are expensive!

### Worked Example
\`\`\`c
#include <stdio.h>

double getAverageSpeed(int *list, int size) {
    if (list == NULL) {
        printf("Error: Speed list pointer is NULL!\\n");
        return -1.0; 
    }
    if (size <= 0) {
        printf("Error: Invalid array size (%d)!\\n", size);
        return 0.0; 
    }
    
    int sum = 0;
    for (int i = 0; i < size; i++) {
        sum += list[i];
    }
    return (double)sum / size; 
}

int main() {
    // Test 1: Testing with invalid NULL pointer
    double test1 = getAverageSpeed(NULL, 5);
    
    // Test 2: Testing with invalid size boundary
    int data[3] = {60, 80, 100};
    double test2 = getAverageSpeed(data, 0);
    
    // Test 3: Valid parameters
    double test3 = getAverageSpeed(data, 3);
    printf("Valid Average Speed: %.1f km/h\\n", test3);
    
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
Error: Speed list pointer is NULL!
Error: Invalid array size (0)!
Valid Average Speed: 80.0 km/h
\`\`\``,
      km: `# អនុគមន៍ការពារកម្រិតខ្ពស់ C

ចូររួមបញ្ចូលរាល់ច្បាប់ការពារកំហុស ការផ្ទៀងផ្ទាត់ និងការសរសេរកូដការពារខ្លួនមកវិភាគលើអនុគមន៍តែមួយ។

យើងប្រៀបធៀបអនុគមន៍ **ងាយរងគ្រោះ** (បង្កឱ្យមាន Segmentation fault ឬចែកនឹងសូន្យ) ទៅនឹងអនុគមន៍ **ការពាររឹងមាំ (Hardened)** សម្រាប់ប្រើប្រាស់ការងារពិតប្រាកដ៖

### កូដងាយរងគ្រោះ (Insecure)
\`\`\`c
double getAverageSpeed(int *list, int size) {
    int sum = 0;
    for (int i = 0; i < size; i++) {
        sum += list[i];
    }
    return sum / size; // គាំងភ្លាមបើសិនជា size ស្មើ 0!
}
\`\`\`

### កូដការពាររឹងមាំ (Hardened)
\`\`\`c
double getAverageSpeed(int *list, int size) {
    // ច្បាប់ទី ១៖ ឆែកការពារ NULL Pointer
    if (list == NULL) {
        printf("Error: Speed list pointer is NULL!\\n");
        return -1.0; 
    }
    // ច្បាប់ទី ២៖ ឆែកដែនទិន្នន័យលេខបញ្ចូល
    if (size <= 0) {
        printf("Error: Invalid array size (%d)!\\n", size);
        return 0.0; 
    }
    
    int sum = 0;
    for (int i = 0; i < size; i++) {
        sum += list[i];
    }
    return (double)sum / size; // សុវត្ថិភាពខ្ពស់ និងបម្លែងជា float ត្រឹមត្រូវ
}
\`\`\`

> **គន្លឹះ៖** ត្រូវតែប្រុងប្រយ័ត្នជានិច្ចក្នុងការសរសេរកូដ។ កុំសន្មតថាអ្នកហៅប្រើប្រាស់កូដរបស់អ្នក នឹងបញ្ជូនតម្លៃត្រឹមត្រូវមកជានិច្ច។

### ឧទាហរណ៍អនុវត្ត
\`\`\`c
#include <stdio.h>

double getAverageSpeed(int *list, int size) {
    if (list == NULL) {
        printf("Error: Speed list pointer is NULL!\\n");
        return -1.0; 
    }
    if (size <= 0) {
        printf("Error: Invalid array size (%d)!\\n", size);
        return 0.0; 
    }
    
    int sum = 0;
    for (int i = 0; i < size; i++) {
        sum += list[i];
    }
    return (double)sum / size; 
}

int main() {
    double test1 = getAverageSpeed(NULL, 5);
    
    int data[3] = {60, 80, 100};
    double test2 = getAverageSpeed(data, 0);
    
    double test3 = getAverageSpeed(data, 3);
    printf("Valid Average Speed: %.1f km/h\\n", test3);
    
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
Error: Speed list pointer is NULL!
Error: Invalid array size (0)!
Valid Average Speed: 80.0 km/h
\`\`\``
    },
    starterCode: `#include <stdio.h>

double getAverageSpeed(int *list, int size) {
    if (list == NULL) return -1.0;
    if (size <= 0) return 0.0;
    int sum = 0;
    for (int i = 0; i < size; i++) sum += list[i];
    return (double)sum / size;
}

int main() {
    int speeds[2] = {50, 70};
    printf("Avg speed: %.1f\\n", getAverageSpeed(speeds, 2));
    return 0;
}`
  },
  {
    id: "c-preprocessor",
    title: { en: "C Preprocessor", km: "កម្មវិធីមុន Compile Preprocessor C" },
    content: {
      en: `# C Preprocessor

The **C Preprocessor** is a program that automatically processes your source code file *before* it is sent to the compiler. All preprocessor lines start with a hash symbol \`#\`.

Common directives:
- \`#include\`: Imports header libraries.
- \`#define\`: Declares constant macros or code replacements.
- \`#ifdef\` / \`#ifndef\` / \`#endif\`: Conditional compilation blocks used to include or exclude specific segments of code.

> **Tip:** Preprocessor directives do not end with semicolons because they are processed before the regular C language parser starts.

### Worked Example
\`\`\`c
#include <stdio.h>

#define VERSION 2.0
#define EXPERIMENTAL_FEATURE // Empty macro used as flag

int main() {
    printf("App Version: %.1f\\n", VERSION);
    
    #ifdef EXPERIMENTAL_FEATURE
    printf("Beta features are active!\\n");
    #endif
    
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
App Version: 2.0
Beta features are active!
\`\`\``,
      km: `# កម្មវិធីមុន Compile Preprocessor C

**C Preprocessor** គឺជាកម្មវិធីជំនួយស្វ័យប្រវត្តដែលរៀបចំ និងកែសម្រួលកូដរបស់អ្នក *មុនពេល* បញ្ជូនវាទៅកាន់ម៉ាស៊ីន Compile។ រាល់បន្ទាត់ Preprocessor ទាំងអស់ត្រូវតែចាប់ផ្តើមដោយសញ្ញាទ្រុងជ្រូក \`#\`។

សេចក្តីណែនាំទូទៅ៖
- \`#include\`៖ ទាញយកបណ្ណាល័យមកប្រើ។
- \`#define\`៖ បង្កើតតម្លៃថេរ (Macro)។
- \`#ifdef\` / \`#ifndef\` / \`#endif\`៖ គ្រប់គ្រងការ compile កូដតាមលក្ខខណ្ឌ។

> **គន្លឹះ៖** សេចក្តីណែនាំ preprocessor មិនប្រើសញ្ញាក្បៀសចំនុច (\`;\`) នៅខាងចុងឡើយ។

### ឧទាហរណ៍អនុវត្ត
\`\`\`c
#include <stdio.h>

#define VERSION 2.0
#define EXPERIMENTAL_FEATURE 

int main() {
    printf("App Version: %.1f\\n", VERSION);
    
    #ifdef EXPERIMENTAL_FEATURE
    printf("Beta features are active!\\n");
    #endif
    
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
App Version: 2.0
Beta features are active!
\`\`\``
    },
    starterCode: `#include <stdio.h>

#define PI 3.14

int main() {
    printf("PI value is: %.2f\\n", PI);
    return 0;
}`
  },
  {
    id: "c-header-files",
    title: { en: "C Header Files", km: "ឯកសារក្បាល Header Files C" },
    content: {
      en: `# C Header Files

In clean development practices, we separate code structures into modular source files. **Header Files** (ending with \`.h\`) contain declarations, prototypes, and macros that are shared across files.

To prevent double inclusion errors when compiling multiple files, headers employ **Include Guards**:

\`\`\`c
#ifndef MY_HEADER_H
#define MY_HEADER_H

// Declarations go here

#endif
\`\`\`

- **\`#include <file.h>\`**: Searches standard system paths (libraries).
- **\`#include "file.h"\`**: Searches the local project directory.

> **Tip:** Guards ensure that if a header is included multiple times inside nested structures, its code is compiled only once.

### Worked Example
An abstract model of a custom header file layout:
\`\`\`c
#include <stdio.h>

// Simulated Header Declarations
#ifndef CAR_LIBRARY_H
#define CAR_LIBRARY_H

struct Car {
    char brand[20];
    int speed;
};

void printSpeed(struct Car c);

#endif

int main() {
    printf("Header File guards compiled successfully!\\n");
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
Header File guards compiled successfully!
\`\`\``,
      km: `# ឯកសារក្បាល Header Files C

នៅក្នុងការអភិវឌ្ឍកម្មវិធីខ្នាតធំ យើងបំបែកកូដជាផ្នែកៗ។ **Header Files** (បញ្ចប់ដោយ \`.h\`) មានផ្ទុកការប្រកាស គំរូអនុគមន៍ និងម៉ាក្រូដែលត្រូវប្រើប្រាស់រួមគ្នាច្រើនកន្លែង។

ដើម្បីការពារមិនឱ្យមានកំហុសទាញយកកូដជាន់គ្នា (Double Inclusion Errors) យើងប្រើប្រាស់ **Include Guards**៖

\`\`\`c
#ifndef MY_HEADER_H
#define MY_HEADER_H

// ការប្រកាសកូដនានានៅទីនេះ

#endif
\`\`\`

- **\`#include <file.h>\`**៖ ស្វែងរកក្នុងបណ្ណាល័យស្តង់ដាររបស់ប្រព័ន្ធ។
- **\`#include "file.h"\`**៖ ស្វែងរកនៅក្នុងថតឯកសារកូដផ្ទាល់ខ្លួនរបស់អ្នក។

> **គន្លឹះ៖** Guards ធានាថាកូដនៅក្នុង Header នឹងត្រូវបកប្រែតែម្តងគត់ ទោះបីវាត្រូវបានទាញយកច្រើនដងក៏ដោយ។

### ឧទាហរណ៍អនុវត្ត
\`\`\`c
#include <stdio.h>

#ifndef CAR_LIBRARY_H
#define CAR_LIBRARY_H

struct Car {
    char brand[20];
    int speed;
};

#endif

int main() {
    printf("Header File guards compiled successfully!\\n");
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
Header File guards compiled successfully!
\`\`\``
    },
    starterCode: `#include <stdio.h>

#ifndef UTILS_H
#define UTILS_H
#define MAGIC_NUM 99
#endif

int main() {
    printf("Magic: %d\\n", MAGIC_NUM);
    return 0;
}`
  },
  {
    id: "c-typedef",
    title: { en: "C typedef", km: "កំណត់ឈ្មោះថ្មី typedef C" },
    content: {
      en: `# C typedef

The \`typedef\` keyword is used to create short, user-friendly aliases for existing types.

This is extremely popular for simplifying structure declarations:
\`\`\`c
// Instead of writing 'struct Car myCar;'
typedef struct Car {
    char brand[50];
    int speed;
} Car;

// Now you can declare simply:
Car myCar;
\`\`\`

> **Tip:** Using \`typedef\` makes code cleaner, reduces typing repetitive syntax, and mimics object-oriented class declaration models of Java and C++.

### Worked Example
Implementing typedef aliases in our \`Car\` struct:
\`\`\`c
#include <stdio.h>
#include <string.h>

// Creating a type alias named 'Car'
typedef struct {
    char brand[50];
    int speed;
} Car;

int main() {
    // Declare Car instantly without 'struct' keyword
    Car c1;
    strcpy(c1.brand, "Toyota");
    c1.speed = 220;
    
    printf("Brand: %s | Max Speed: %d km/h\\n", c1.brand, c1.speed);
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
Brand: Toyota | Max Speed: %d km/h
\`\`\``,
      km: `# កំណត់ឈ្មោះថ្មី typedef C

ពាក្យគន្លឹះ \`typedef\` ប្រើសម្រាប់បង្កើតឈ្មោះហៅក្រៅ (Alias) ខ្លីៗ ងាយស្រួលយល់ ទៅឱ្យប្រភេទទិន្នន័យដែលមានស្រាប់។

វាត្រូវបានគេនិយមប្រើប្រាស់បំផុតក្នុងការសម្រួលការប្រកាសរចនាសម្ព័ន្ធ structure៖
\`\`\`c
typedef struct Car {
    char brand[50];
    int speed;
} Car;

// ឥឡូវអ្នកអាចប្រកាសយ៉ាងខ្លី៖
Car myCar;
\`\`\`

> **គន្លឹះ៖** ការប្រើ \`typedef\` ជួយឱ្យកូដស្អាត មិនបាច់សរសេរពាក្យ repetitive \`struct\` ដដែលៗ និងដូចគ្នាទៅនឹងការបង្កើត Class ក្នុង Java និង C++។

### ឧទាហរណ៍អនុវត្ត
ការបង្កើត alias ឈ្មោះ \`Car\`៖
\`\`\`c
#include <stdio.h>
#include <string.h>

typedef struct {
    char brand[50];
    int speed;
} Car;

int main() {
    Car c1;
    strcpy(c1.brand, "Toyota");
    c1.speed = 220;
    
    printf("Brand: %s | Max Speed: %d km/h\\n", c1.brand, c1.speed);
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
Brand: Toyota | Max Speed: 220 km/h
\`\`\``
    },
    starterCode: `#include <stdio.h>

typedef unsigned long ulong;

int main() {
    ulong largeNum = 999999999;
    printf("Value: %lu\\n", largeNum);
    return 0;
}`
  },
  {
    id: "c-command-line-args",
    title: { en: "C Command Line", km: "អាគុយម៉ង់បញ្ជាបញ្ជូន Command Line C" },
    content: {
      en: `# C Command Line Arguments

Command line arguments allow developers to pass parameter options to a program directly when starting it from the operating system terminal.

To accept these arguments, we define \`main()\` with two standard parameters:
- **\`argc\` (Argument Count):** An integer representing the count of arguments passed.
- **\`argv\` (Argument Vector):** An array of string pointers representing the actual arguments.

\`\`\`c
int main(int argc, char *argv[])
\`\`\`

> **Tip:** \`argv[0]\` always stores the path/name of the running compiled program itself. Therefore, \`argc\` is always at least \`1\`.

### Worked Example
\`\`\`c
#include <stdio.h>

int main(int argc, char *argv[]) {
    printf("Program Name: %s\\n", argv[0]);
    printf("Total Arguments Count: %d\\n", argc);
    
    if (argc > 1) {
        printf("First Passed Option: %s\\n", argv[1]);
    }
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
Program Name: ./program
Total Arguments Count: 1
\`\`\``,
      km: `# អាគុយម៉ង់បញ្ជាបញ្ជូន Command Line C

អាគុយម៉ង់ Command Line (Command Line Arguments) អនុញ្ញាតឱ្យអ្នកអភិវឌ្ឍន៍បញ្ជូនប៉ារ៉ាម៉ែត្រនានាទៅកាន់កម្មវិធី ក្នុងពេលដំណើរការវាភ្លាមៗពីផ្ទាំងបញ្ជា Terminal។

ដើម្បីទទួលទិន្នន័យទាំងនេះ យើងត្រូវកំណត់ \`main()\` ជាមួយប៉ារ៉ាម៉ែត្រពីរ៖
- **\`argc\` (Argument Count)៖** ចំនួនអាគុយម៉ង់ទាំងអស់ដែលបានបញ្ជូនមក។
- **\`argv\` (Argument Vector)៖** អារេនៃខ្សែអក្សរ (String Pointers) ផ្ទុកតម្លៃអាគុយម៉ង់នីមួយៗ។

\`\`\`c
int main(int argc, char *argv[])
\`\`\`

> **គន្លឹះ៖** \`argv[0]\` ជានិច្ចកាលគឺជាឈ្មោះរបស់កម្មវិធីដែលកំពុងរត់។ ដូចនេះតម្លៃ \`argc\` យ៉ាងហោចណាស់ក៏ស្មើនឹង \`1\` ដែរ។

### ឧទាហរណ៍អនុវត្ត
\`\`\`c
#include <stdio.h>

int main(int argc, char *argv[]) {
    printf("Program Name: %s\\n", argv[0]);
    printf("Total Arguments Count: %d\\n", argc);
    
    if (argc > 1) {
        printf("First Passed Option: %s\\n", argv[1]);
    }
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
Program Name: ./main
Total Arguments Count: 1
\`\`\``
    },
    starterCode: `#include <stdio.h>

int main(int argc, char *argv[]) {
    printf("Argv count: %d\\n", argc);
    return 0;
}`
  },
  {
    id: "c-unions",
    title: { en: "C Unions", km: "ការរួមផ្សំ Union C" },
    content: {
      en: `# C Unions

A **Union** is a specialized user-defined data type in C that is declared exactly like a structure using the \`union\` keyword.

The critical difference: **All member variables inside a Union share the exact same memory location!**

While a structure allocates separate memory spots for every member, a Union allocates only enough memory to accommodate its **largest** member.

\`\`\`c
union Data {
    int i;
    float f;
    char str[20]; // Union size is 20 bytes (largest member)
};
\`\`\`

> **Tip:** Unions are highly popular in low-level embedded systems programming where system memory is extremely scarce. Only one member variable can hold a valid active value at any single point in time.

### Worked Example
\`\`\`c
#include <stdio.h>

union Data {
    int intVal;
    float floatVal;
};

int main() {
    union Data sample;
    
    sample.intVal = 50;
    printf("Value as Int: %d\\n", sample.intVal);
    
    // Writing to floatVal overwrites the memory shared with intVal!
    sample.floatVal = 12.5;
    printf("Value as Float: %.1f\\n", sample.floatVal);
    
    // Printing intVal now outputs corrupted corrupted data
    printf("Value as Int after Float overwrite: %d\\n", sample.intVal);
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
Value as Int: 50
Value as Float: 12.5
Value as Int after Float overwrite: 1095237632 (garbage integer from float representation)
\`\`\``,
      km: `# ការរួមផ្សំ Union C

**Union** គឺជាប្រភេទទិន្នន័យដែលបង្កើតដោយអ្នកប្រើប្រាស់ សម្រាប់ចងក្រងសមាជិកដែលប្រកាសដូច structure ដែរ ដោយប្រើពាក្យគន្លឹះ \`union\`។

ភាពខុសគ្នាដ៏ចម្បង៖ **រាល់សមាជិកទាំងអស់នៅក្នុង Union ប្រើប្រាស់ទីតាំង Memory តែមួយរួមគ្នា!**

ខុសពី structure ដែលបែងចែកទីតាំងដាច់ដោយឡែកពីគ្នា Union នឹងបែងចែកទំហំ Memory ស្មើនឹងសមាជិកណាដែលមានទំហំ **ធំជាងគេបំផុត** ប៉ុណ្ណោះ។

\`\`\`c
union Data {
    int i;
    float f;
    char str[20]; // ទំហំ Union គឺ ២០ បៃ (តាមធាតុធំជាងគេ)
};
\`\`\`

> **គន្លឹះ៖** Unions ពេញនិយមខ្លាំងក្នុងការសរសេរកម្មវិធី Embedded Systems ដែលប្រព័ន្ធកុំព្យូទ័រមានទំហំចងចាំតិចតួចបំផុត។ មានតែសមាជិកម្នាក់គត់ដែលអាចរក្សាតម្លៃត្រឹមត្រូវក្នុងពេលតែមួយ។

### ឧទាហរណ៍អនុវត្ត
\`\`\`c
#include <stdio.h>

union Data {
    int intVal;
    float floatVal;
};

int main() {
    union Data sample;
    
    sample.intVal = 50;
    printf("Value as Int: %d\\n", sample.intVal);
    
    sample.floatVal = 12.5;
    printf("Value as Float: %.1f\\n", sample.floatVal);
    
    printf("Value as Int after Float overwrite: %d\\n", sample.intVal);
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
Value as Int: 50
Value as Float: 12.5
Value as Int after Float overwrite: 1095237632
\`\`\``
    },
    starterCode: `#include <stdio.h>

union Number {
    int x;
    char y;
};

int main() {
    union Number n;
    n.x = 65; // ASCII for 'A'
    printf("n.x: %d, n.y: %c\\n", n.x, n.y);
    return 0;
}`
  },
  {
    id: "c-bitfields",
    title: { en: "C Bitfields", km: "ការកំណត់តូចតាច Bitfields C" },
    content: {
      en: `# C Bitfields

Inside structure definitions, C allows you to specify the exact **number of bits** allocated to each member variable. This structure feature is called a **Bitfield**.

Syntax representation:
\`\`\`c
struct {
    unsigned int isRed : 1;   // Occupies exactly 1 bit (0 or 1)
    unsigned int isGreen : 1; // Occupies exactly 1 bit
    unsigned int val : 4;     // Occupies exactly 4 bits (0 to 15)
};
\`\`\`

> **Tip:** Bitfields are critical for writing device drivers, networking packet headers, or working with microcontrollers where memory blocks are measured in individual bit flags.

### Worked Example
\`\`\`c
#include <stdio.h>

// Standard Struct size: 8 bytes
struct StandardStatus {
    unsigned int mode;
    unsigned int active;
};

// Bitfield Struct size: 4 bytes (all bits fit inside one integer slot)
struct BitfieldStatus {
    unsigned int mode : 3;   // 0 to 7
    unsigned int active : 1; // 0 or 1
};

int main() {
    printf("Size of standard struct: %lu bytes\\n", sizeof(struct StandardStatus));
    printf("Size of bitfield struct: %lu bytes\\n", sizeof(struct BitfieldStatus));
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
Size of standard struct: 8 bytes
Size of bitfield struct: 4 bytes
\`\`\``,
      km: `# ការកំណត់តូចតាច Bitfields C

នៅក្នុងការប្រកាស Structure ភាសា C អនុញ្ញាតឱ្យអ្នកកំណត់ទំហំ **ចំនួនប៊ីត (Bits)** ជាក់លាក់ទៅឱ្យសមាជិកនីមួយៗ។ មុខងារនេះហៅថា **Bitfield**។

វាក្យសម្ពន្ធ៖
\`\`\`c
struct {
    unsigned int isRed : 1;   // ប្រើទំហំតែ ១ ប៊ីតប៉ុណ្ណោះ (តម្លៃ 0 ឬ 1)
    unsigned int isGreen : 1; 
    unsigned int val : 4;     // ប្រើទំហំ ៤ ប៊ីត (តម្លៃពី 0 ដល់ 15)
};
\`\`\`

> **គន្លឹះ៖** Bitfields មានសារៈសំខាន់បំផុតក្នុងការសរសេរកូដគ្រប់គ្រងឧបករណ៍ Hardware (Device Drivers) ឬការបញ្ជូនកញ្ចប់ទិន្នន័យបណ្តាញ (Network Packets)។

### ឧទាហរណ៍អនុវត្ត
\`\`\`c
#include <stdio.h>

struct StandardStatus {
    unsigned int mode;
    unsigned int active;
};

struct BitfieldStatus {
    unsigned int mode : 3;   
    unsigned int active : 1; 
};

int main() {
    printf("Size of standard struct: %lu bytes\\n", sizeof(struct StandardStatus));
    printf("Size of bitfield struct: %lu bytes\\n", sizeof(struct BitfieldStatus));
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
Size of standard struct: 8 bytes
Size of bitfield struct: 4 bytes
\`\`\``
    },
    starterCode: `#include <stdio.h>

struct Flags {
    unsigned int flagA : 1;
    unsigned int flagB : 1;
};

int main() {
    struct Flags f = {1, 0};
    printf("Flags: %u, %u\\n", f.flagA, f.flagB);
    return 0;
}`
  },
  {
    id: "c-miscellaneous",
    title: { en: "C Miscellaneous", km: "មេរៀនផ្សេងៗ C" },
    content: {
      en: `# C Miscellaneous Overview

To conclude our comprehensive C curriculum, let us review several key advanced keywords and compiler storage structures:

- **\`extern\`**: Tells the compiler that a variable is declared and defined in a separate external source file.
- **\`volatile\`**: Prevents the compiler from optimizing variable readings, signaling that the value can be changed by hardware events outside of program execution.
- **\`register\`**: Requests the compiler to store a variable directly inside a CPU hardware register instead of standard RAM to achieve maximum access speed.

> **Tip:** Modern compilers are extremely smart and often handle register allocations automatically. Volatile remains critical for hardware programming.

### Worked Example
Using storage class indicators in code structures:
\`\`\`c
#include <stdio.h>

int main() {
    // Volatile variable representing hardware sensor input
    volatile int sensorInput = 100;
    
    // Register request for high speed counting loop
    register int loopCount = 0;
    
    printf("Sensor state monitored: %d\\n", sensorInput);
    printf("Register loop variable ready.\\n");
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
Sensor state monitored: 100
Register loop variable ready.
\`\`\``,
      km: `# មេរៀនផ្សេងៗ C

ដើម្បីបញ្ចប់កម្មវិធីសិក្សាភាសា C ដ៏ទូលំទូលាយនេះ ចូរពិនិត្យមើលពាក្យគន្លឹះកម្រិតខ្ពស់ និងរចនាសម្ព័ន្ធបកប្រែកូដមួយចំនួន៖

- **\`extern\`**៖ ប្រាប់ Compiler ថាអថេរនេះត្រូវបានប្រកាស និងកំណត់នៅក្នុងឯកសារកូដផ្សេងមួយទៀត។
- **\`volatile\`**៖ ការពារមិនឱ្យ Compiler ធ្វើការកែសម្រួលល្បឿនអថេរដោយស្វ័យប្រវត្ត ដើម្បីបញ្ជាក់ថាតម្លៃរបស់វាអាចកែប្រែដោយប្រព័ន្ធ Hardware ខាងក្រៅ។
- **\`register\`**៖ ស្នើសុំ Compiler ឱ្យរក្សាទុកអថេរនៅក្នុង Register របស់ CPU ផ្ទាល់ ជំនួសឱ្យ RAM ដើម្បីទទួលបានល្បឿនលឿនបំផុត។

> **គន្លឹះ៖** Compiler ទំនើបៗមានភាពឆ្លាតវៃខ្លាំង និងចេះរៀបចំ Register ដោយស្វ័យប្រវត្ត។ ចំណែកឯ Volatile នៅតែមានសារៈសំខាន់ខ្លាំងក្នុងការសរសេរកូដ Hardware។

### ឧទាហរណ៍អនុវត្ត
\`\`\`c
#include <stdio.h>

int main() {
    volatile int sensorInput = 100;
    register int loopCount = 0;
    
    printf("Sensor state monitored: %d\\n", sensorInput);
    printf("Register loop variable ready.\\n");
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
Sensor state monitored: 100
Register loop variable ready.
\`\`\``
    },
    starterCode: `#include <stdio.h>

int main() {
    volatile int timer = 1000;
    printf("Volatile timer value is: %d\\n", timer);
    return 0;
}`
  }
];
