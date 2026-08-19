import { Lesson } from '../types';

export const cLessonsPart2: Lesson[] = [
  {
    id: "c-for-loop",
    title: { en: "C For Loop", km: "រង្វិលជុំ For Loop" },
    content: {
      en: `# C For Loop

When you know exactly how many times you want to loop through a block of code, use the \`for\` loop instead of a \`while\` loop.

The syntax is:
\`\`\`c
for (initialization; condition; increment/decrement) {
    // code block to execute
}
\`\`\`

- **Initialization:** Executes once before the loop starts. Typically declares a counter variable.
- **Condition:** Evaluates before each iteration. If true, the loop executes. If false, the loop terminates.
- **Increment/Decrement:** Runs after the loop body executes, updating the counter.

> **Tip:** You can declare the counter variable directly inside the initialization statement in modern C (since C99), like \`for (int i = 0; i < 5; i++)\`.

### Worked Example
\`\`\`c
#include <stdio.h>

int main() {
    printf("Counting from 1 to 5:\\n");
    for (int i = 1; i <= 5; i++) {
        printf("Number: %d\\n", i);
    }
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
Counting from 1 to 5:
Number: 1
Number: 2
Number: 3
Number: 4
Number: 5
\`\`\``,
      km: `# រង្វិលជុំ For Loop

នៅពេលអ្នកដឹងពីចំនួនដងច្បាស់លាស់ដែលត្រូវដំណើរការប្លុកកូដដដែលៗ ចូរកំណត់ប្រើរង្វិលជុំ \`for\` ជំនួសឱ្យ \`while\`។

វាក្យសម្ពន្ធគឺ៖
\`\`\`c
for (initialization; condition; increment/decrement) {
    // ប្លុកកូដដំណើរការ
}
\`\`\`

- **Initialization៖** ដំណើរការតែម្តងគត់មុនគេ ដើម្បីប្រកាសអថេររាប់។
- **Condition៖** ឆែកមុនពេលរត់កូដម្តងៗ។ ប្រសិនបើត្រូវ វានឹងរត់កូដ បើមិនត្រូវ វានឹងឈប់។
- **Increment/Decrement៖** ដំណើរការបន្ទាប់ពីប្លុកកូដត្រូវបានរត់រួច ដើម្បីតម្លើង ឬបន្ថយតម្លៃអថេររាប់។

> **គន្លឹះ៖** នៅក្នុង C ជំនាន់ទំនើប អ្នកអាចប្រកាសអថេររាប់នៅក្នុង initialization ផ្ទាល់បាន ដូចជា \`for (int i = 0; i < 5; i++)\`។

### ឧទាហរណ៍អនុវត្ត
\`\`\`c
#include <stdio.h>

int main() {
    printf("Counting from 1 to 5:\\n");
    for (int i = 1; i <= 5; i++) {
        printf("Number: %d\\n", i);
    }
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
Counting from 1 to 5:
Number: 1
Number: 2
Number: 3
Number: 4
Number: 5
\`\`\``
    },
    starterCode: `#include <stdio.h>

int main() {
    for (int i = 0; i < 3; i++) {
        printf("Loop run %d\\n", i);
    }
    return 0;
}`
  },
  {
    id: "c-break-continue",
    title: { en: "C Break/Continue", km: "បញ្ជា Break/Continue" },
    content: {
      en: `# C Break/Continue

C provides loop control statements to prematurely change the normal iteration execution flow:

- \`break\`: Immediately exits the loop body entirely, jumping to the first statement following the loop.
- \`continue\`: Skips the rest of the current iteration's code body and jumps directly to the loop condition/increment check for the next iteration cycle.

> **Tip:** Use \`break\` to stop loops when a specific search item is found, avoiding unnecessary extra iterations. Use \`continue\` to bypass errors or invalid inputs.

### Worked Example
\`\`\`c
#include <stdio.h>

int main() {
    printf("Testing Break at i = 3:\\n");
    for (int i = 1; i <= 5; i++) {
        if (i == 3) {
            break; 
        }
        printf("Value: %d\\n", i);
    }

    printf("\\nTesting Continue to skip odd numbers:\\n");
    for (int i = 1; i <= 6; i++) {
        if (i % 2 != 0) {
            continue; 
        }
        printf("Even Value: %d\\n", i);
    }
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
Testing Break at i = 3:
Value: 1
Value: 2

Testing Continue to skip odd numbers:
Even Value: 2
Even Value: 4
Even Value: 6
\`\`\``,
      km: `# បញ្ជា Break/Continue

C ផ្តល់ការបញ្ជាពិសេសដើម្បីកែប្រែលំហូររត់របស់រង្វិលជុំ៖

- \`break\`៖ ប្រើសម្រាប់បញ្ចប់ និងចាកចេញពីរង្វិលជុំទាំងស្រុងភ្លាមៗ។
- \`continue\`៖ ប្រើដើម្បីរំលងផ្នែកដែលនៅសល់នៃជុំបច្ចុប្បន្ន ហើយលោតទៅជុំបន្ទាប់ភ្លាមៗ។

> **គន្លឹះ៖** ប្រើប្រាស់ \`break\` ដើម្បីឈប់រត់រង្វិលជុំនៅពេលរកឃើញទិន្នន័យដែលចង់បាន ដើម្បីសន្សំសំចៃល្បឿន CPU។ ប្រើ \`continue\` ដើម្បីរំលងរាល់ទិន្នន័យមិនត្រឹមត្រូវ។

### ឧទាហរណ៍អនុវត្ត
\`\`\`c
#include <stdio.h>

int main() {
    printf("Testing Break at i = 3:\\n");
    for (int i = 1; i <= 5; i++) {
        if (i == 3) {
            break; 
        }
        printf("Value: %d\\n", i);
    }

    printf("\\nTesting Continue to skip odd numbers:\\n");
    for (int i = 1; i <= 6; i++) {
        if (i % 2 != 0) {
            continue; 
        }
        printf("Even Value: %d\\n", i);
    }
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
Testing Break at i = 3:
Value: 1
Value: 2

Testing Continue to skip odd numbers:
Even Value: 2
Even Value: 4
Even Value: 6
\`\`\``
    },
    starterCode: `#include <stdio.h>

int main() {
    for (int i = 0; i < 10; i++) {
        if (i == 5) {
            break;
        }
        printf("%d ", i);
    }
    printf("\\nFinished\\n");
    return 0;
}`
  },
  {
    id: "c-arrays",
    title: { en: "C Arrays", km: "អារេ C Arrays" },
    content: {
      en: `# C Arrays

An array is a collection of data items of the same type stored at contiguous memory locations.

To declare an array, specify the data type, array name, and size in square brackets:
\`\`\`c
int myNumbers[4] = {25, 50, 75, 100};
\`\`\`

Array indices start at **0**. So \`myNumbers[0]\` is the first element, and \`myNumbers[3]\` is the fourth element.

> **Tip:** C does not perform array bounds checking at runtime. If you try to access an index outside the array size (e.g. \`myNumbers[10]\`), the program may compile but will access random unsafe memory locations (causing bugs or crashes).

### Worked Example
\`\`\`c
#include <stdio.h>

int main() {
    int scores[3] = {90, 85, 95};
    
    printf("First element: %d\\n", scores[0]);
    
    // Modify element value
    scores[1] = 99;
    
    printf("Iterating through array scores:\\n");
    for (int i = 0; i < 3; i++) {
        printf("Score %d: %d\\n", i, scores[i]);
    }
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
First element: 90
Iterating through array scores:
Score 0: 90
Score 1: 99
Score 2: 95
\`\`\``,
      km: `# អារេ C Arrays

អារេ (Array) គឺជាបណ្តុំទិន្នន័យដែលមានប្រភេទទិន្នន័យដូចគ្នា ហើយត្រូវបានរក្សាទុកជាប់ៗគ្នាក្នុង Memory។

ដើម្បីប្រកាសអារេ អ្នកត្រូវបញ្ជាក់ប្រភេទអថេរ ឈ្មោះ និងទំហំអារេក្នុងសញ្ញាគ្នាប៖
\`\`\`c
int myNumbers[4] = {25, 50, 75, 100};
\`\`\`

លេខលិបិក្រម (Index) របស់អារេចាប់ផ្តើមពី **0**។ ដូច្នេះ \`myNumbers[0]\` គឺជាធាតុទីមួយ។

> **គន្លឹះ៖** ភាសា C មិនមានប្រព័ន្ធឆែកដែនអារេ (Bounds Checking) ដោយស្វ័យប្រវត្តឡើយ។ ប្រសិនបើអ្នកព្យាយាមចូលទៅកាន់ index ហួសដែនកំណត់ (ដូចជា \`myNumbers[10]\`) វានឹងយកទិន្នន័យមិនច្បាស់លាស់ពី Memory មកបង្ហាញ ដែលនាំឱ្យកើតកំហុសខ្លាំង។

### ឧទាហរណ៍អនុវត្ត
\`\`\`c
#include <stdio.h>

int main() {
    int scores[3] = {90, 85, 95};
    
    printf("First element: %d\\n", scores[0]);
    
    scores[1] = 99;
    
    printf("Iterating through array scores:\\n");
    for (int i = 0; i < 3; i++) {
        printf("Score %d: %d\\n", i, scores[i]);
    }
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
First element: 90
Iterating through array scores:
Score 0: 90
Score 1: 99
Score 2: 95
\`\`\``
    },
    starterCode: `#include <stdio.h>

int main() {
    int grades[5] = {12, 14, 18, 11, 15};
    for (int i = 0; i < 5; i++) {
        printf("Grade: %d\\n", grades[i]);
    }
    return 0;
}`
  },
  {
    id: "c-multidimensional-arrays",
    title: { en: "C Multi-Dimensional Arrays", km: "អារេពហុវិមាត្រ C" },
    content: {
      en: `# C Multi-Dimensional Arrays

A multi-dimensional array is an array of arrays. The most common type is the **two-dimensional array**, which represents a grid of rows and columns (a matrix).

To declare a 2D array, specify the size of each dimension in separate square brackets:
\`\`\`c
int matrix[2][3] = {
    {1, 2, 3}, // Row 0
    {4, 5, 6}  // Row 1
};
\`\`\`

The first brackets specify the row count, and the second specify the column count.

> **Tip:** To traverse all elements of a multi-dimensional array, you must nest loops. One loop handles rows, while the inner loop handles columns.

### Worked Example
\`\`\`c
#include <stdio.h>

int main() {
    int grid[2][3] = {
        {10, 20, 30},
        {40, 50, 60}
    };

    printf("Accessing row 1, col 2 element: %d\\n", grid[1][2]);

    printf("Displaying full 2D grid matrix:\\n");
    for (int row = 0; row < 2; row++) {
        for (int col = 0; col < 3; col++) {
            printf("%d ", grid[row][col]);
        }
        printf("\\n");
    }
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
Accessing row 1, col 2 element: 60
Displaying full 2D grid matrix:
10 20 30 
40 50 60 
\`\`\``,
      km: `# អារេពហុវិមាត្រ C

អារេពហុវិមាត្រ (Multi-Dimensional Array) គឺជាអារេនៃអារេ។ ប្រភេទដែលគេប្រើញឹកញាប់បំផុតគឺ **អារេពីរវិមាត្រ (2D Array)** ដែលតំណាងឱ្យតារាងជួរដេក និងជួរឈរ (ម៉ាទ្រីស)។

ការប្រកាសអារេ ២ វិមាត្រ៖
\`\`\`c
int matrix[2][3] = {
    {1, 2, 3}, // ជួរដេក 0
    {4, 5, 6}  // ជួរដេក 1
};
\`\`\`

គ្នាបដំបូងបញ្ជាក់ពីចំនួនជួរដេក (Rows) និងគ្នាបទីពីរបញ្ជាក់ពីចំនួនជួរឈរ (Columns)។

> **គន្លឹះ៖** ដើម្បីបង្ហាញទិន្នន័យទាំងអស់ក្នុងអារេ ២ វិមាត្រ អ្នកត្រូវប្រើប្រាស់រង្វិលជុំសំបុកគ្នា (Nested Loops) ដោយរង្វិលជុំខាងក្រៅដើរលើជួរដេក ហើយរង្វិលជុំខាងក្នុងដើរលើជួរឈរ។

### ឧទាហរណ៍អនុវត្ត
\`\`\`c
#include <stdio.h>

int main() {
    int grid[2][3] = {
        {10, 20, 30},
        {40, 50, 60}
    };

    printf("Accessing row 1, col 2 element: %d\\n", grid[1][2]);

    printf("Displaying full 2D grid matrix:\\n");
    for (int row = 0; row < 2; row++) {
        for (int col = 0; col < 3; col++) {
            printf("%d ", grid[row][col]);
        }
        printf("\\n");
    }
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
Accessing row 1, col 2 element: 60
Displaying full 2D grid matrix:
10 20 30 
40 50 60 
\`\`\``
    },
    starterCode: `#include <stdio.h>

int main() {
    int arr[2][2] = {{1, 2}, {3, 4}};
    printf("Diagonal: %d, %d\\n", arr[0][0], arr[1][1]);
    return 0;
}`
  },
  {
    id: "c-strings",
    title: { en: "C Strings", km: "ខ្សែអក្សរ Strings C" },
    content: {
      en: `# C Strings

Unlike other modern programming languages, C does not have a native primitive \`string\` object. Instead, strings are implemented as **null-terminated arrays of characters**.

A string variable is declared like a normal character array, ending with the null-character escape sequence \`\\0\`:
\`\`\`c
char greeting[] = "Hello";
\`\`\`
Even though we write \`"Hello"\` (5 characters), the compiler automatically allocates 6 bytes of space to accommodate the hidden null character (\`\\0\`) representing string termination!

> **Tip:** Sizing a character array manually means you must leave one extra byte for \`\\0\`. For example, \`char name[5] = "John";\` is valid, but \`char name[4] = "John";\` is invalid and dangerous.

### Worked Example
\`\`\`c
#include <stdio.h>

int main() {
    char word[] = "Sabaicode";
    printf("String value: %s\\n", word);
    printf("Accessing character at index 4: %c\\n", word[4]);
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
String value: Sabaicode
Accessing character at index 4: i
\`\`\``,
      km: `# ខ្សែអក្សរ Strings C

ខុសពីភាសាផ្សេងទៀត C មិនមានប្រភេទអថេរ \`string\` ផ្ទាល់ខ្លួនឡើយ។ ខ្សែអក្សរ (String) ក្នុង C ត្រូវបានបង្កើតឡើងជា **អារេនៃតួអក្សរដែលបញ្ចប់ដោយ Null Character (\`\\0\`)**។

ការប្រកាស String៖
\`\`\`c
char greeting[] = "Hello";
\`\`\`
ទោះបីជាយើងឃើញពាក្យ \`"Hello"\` មាន ៥ តួអក្សរក៏ដោយ ក៏ម៉ាស៊ីនបកប្រែកូដបែងចែកទំហំ ៦ បៃដោយស្វ័យប្រវត្ត ដើម្បីទុកកន្លែងសម្រាប់ Null Character (\`\\0\`) ដើម្បីសម្គាល់ការបញ្ចប់នៃខ្សែអក្សរ!

> **គន្លឹះ៖** នៅពេលកំណត់ទំហំអារេតួអក្សរដោយខ្លួនឯង អ្នកត្រូវបូកបន្ថែម ១ ជានិច្ចសម្រាប់ \`\\0\`។ ឧទាហរណ៍៖ \`char name[5] = "John";\`។

### ឧទាហរណ៍អនុវត្ត
\`\`\`c
#include <stdio.h>

int main() {
    char word[] = "Sabaicode";
    printf("String value: %s\\n", word);
    printf("Accessing character at index 4: %c\\n", word[4]);
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
String value: Sabaicode
Accessing character at index 4: i
\`\`\``
    },
    starterCode: `#include <stdio.h>

int main() {
    char message[] = "Hello C Programmer!";
    printf("%s\\n", message);
    return 0;
}`
  },
  {
    id: "c-string-functions",
    title: { en: "C String Functions", km: "មុខងារគ្រប់គ្រង String C" },
    content: {
      en: `# C String Functions

To manipulate character array strings, import the standard library \`<string.h>\`. It contains pre-written functions to analyze, copy, combine, and compare strings safely:

- \`strlen(str)\`: Returns the length of the string (excluding the null terminator).
- \`strcpy(dest, src)\`: Copies the source string to the destination string.
- \`strcat(dest, src)\`: Concatenates (joins) the source string to the end of the destination string.
- \`strcmp(str1, str2)\`: Compares two strings. Returns \`0\` if they are identical.

> **Tip:** Never assign a string directly to another character array variable after declaration (e.g. \`name = "Alice";\` will fail). You must use \`strcpy(name, "Alice");\` instead.

### Worked Example
\`\`\`c
#include <stdio.h>
#include <string.h>

int main() {
    char username[] = "john_doe";
    char copy[20];
    
    // Copy string
    strcpy(copy, username);
    printf("Copied string: %s\\n", copy);
    
    // Get string length
    printf("Length of string: %lu\\n", strlen(username));
    
    // Compare strings
    if (strcmp(username, "john_doe") == 0) {
        printf("Strings match perfectly!\\n");
    }
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
Copied string: john_doe
Length of string: 8
Strings match perfectly!
\`\`\``,
      km: `# មុខងារគ្រប់គ្រង String C

ដើម្បីគ្រប់គ្រង ឬកែប្រែខ្សែអក្សរ អ្នកត្រូវរួមបញ្ចូលបណ្ណាល័យ \`<string.h>\`។ វាមានអនុគមន៍មានស្រាប់ជាច្រើន៖

- \`strlen(str)\`៖ គណនាប្រវែងខ្សែអក្សរ (មិនគិតបញ្ចូលសញ្ញាបញ្ចប់ \`\\0\`)។
- \`strcpy(dest, src)\`៖ ចម្លងខ្សែអក្សរពី src ទៅកាន់ dest។
- \`strcat(dest, src)\`៖ ភ្ជាប់ខ្សែអក្សរបន្ថែមពី src ទៅចុងបញ្ចប់នៃ dest។
- \`strcmp(str1, str2)\`៖ ផ្ទៀងផ្ទាត់ខ្សែអក្សរទាំងពីរ។ ប្រគល់តម្លៃ \`0\` បើសិនជាដូចគ្នាទាំងស្រុង។

> **គន្លឹះ៖** អ្នកមិនអាចផ្តល់តម្លៃថ្មីឱ្យអារេ String ដូចអថេរធម្មតាឡើយ (ឧទាហរណ៍៖ \`name = "Alice";\` នឹងគាំង)។ អ្នកត្រូវតែប្រើប្រាស់ \`strcpy(name, "Alice");\`។

### ឧទាហរណ៍អនុវត្ត
\`\`\`c
#include <stdio.h>
#include <string.h>

int main() {
    char username[] = "john_doe";
    char copy[20];
    
    strcpy(copy, username);
    printf("Copied string: %s\\n", copy);
    
    printf("Length of string: %lu\\n", strlen(username));
    
    if (strcmp(username, "john_doe") == 0) {
        printf("Strings match perfectly!\\n");
    }
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
Copied string: john_doe
Length of string: 8
Strings match perfectly!
\`\`\``
    },
    starterCode: `#include <stdio.h>
#include <string.h>

int main() {
    char s1[30] = "Happy ";
    char s2[] = "Coding!";
    strcat(s1, s2);
    printf("Result: %s\\n", s1);
    return 0;
}`
  },
  {
    id: "c-pointers",
    title: { en: "C Pointers", km: "ចង្អុលបង្ហាញ Pointers C" },
    content: {
      en: `# C Pointers

Pointers are one of C's most powerful and distinctive features. A **pointer** is a variable that stores the physical memory address of another variable.

To understand pointers, we must learn two key operators:
- **Address-of Operator (\`&\`):** Retrieves the hex address location of a variable in memory.
- **Dereferencing Operator (\`*\`):** Retrieves the actual value stored at the address a pointer is pointing to.

To declare a pointer variable, place an asterisk \`*\` before its name:
\`\`\`c
int carSpeed = 80;     // Normal variable
int *pSpeed = &carSpeed; // Pointer variable storing address of carSpeed
\`\`\`

> **Tip:** Pointers let you manipulate system memory directly, enabling dynamic memory allocation, complex data structures, and highly efficient pass-by-address parameters.

### Worked Example
Let's see our first running example with \`carSpeed\` and \`pSpeed\`:
\`\`\`c
#include <stdio.h>

int main() {
    int carSpeed = 80;
    int *pSpeed = &carSpeed; // pointer variable stores address

    printf("Value of carSpeed: %d\\n", carSpeed);
    printf("Memory address of carSpeed: %p\\n", &carSpeed);
    printf("Pointer pSpeed stores address: %p\\n", pSpeed);
    printf("Value retrieved via dereferencing *pSpeed: %d\\n", *pSpeed);
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
Value of carSpeed: 80
Memory address of carSpeed: 0x7ffd5f7c320c (address changes dynamically)
Pointer pSpeed stores address: 0x7ffd5f7c320c
Value retrieved via dereferencing *pSpeed: 80
\`\`\``,
      km: `# ចង្អុលបង្ហាញ Pointers C

Pointer គឺជាមុខងារដែលមានថាមពលបំផុតរបស់ C។ **Pointer** គឺជាអថេរពិសេសដែលផ្ទុកអាសយដ្ឋានការចងចាំ (Memory Address) របស់អថេរផ្សេងទៀត។

ប្រតិបត្តិករស្នូលពីរដែលត្រូវដឹង៖
- **ប្រតិបត្តិកររកអាសយដ្ឋាន Address-of (\`&\`)៖** ទាញយកទីតាំងអាសយដ្ឋាននៅក្នុង Memory របស់អថេរ។
- **ប្រតិបត្តិករទាញតម្លៃ Dereferencing (\`*\`)៖** ទាញយកតម្លៃពិតប្រាកដដែលរក្សាទុកនៅអាសយដ្ឋានដែល Pointer កំពុងចង្អុលទៅ។

ការប្រកាស Pointer ដោយប្រើសញ្ញាផ្កាយ \`*\`៖
\`\`\`c
int carSpeed = 80;     
int *pSpeed = &carSpeed; 
\`\`\`

> **គន្លឹះ៖** Pointers ជួយយើងកែប្រែប្រព័ន្ធ Memory ដោយផ្ទាល់ ដែលផ្តល់លទ្ធភាពក្នុងការបង្កើតរចនាសម្ព័ន្ធទិន្នន័យស្មុគស្មាញ និងដំណើរការកម្មវិធីលឿនបំផុត។

### ឧទាហរណ៍អនុវត្ត
ចូរពិនិត្យមើលដំណើរការរបស់អថេរ \`carSpeed\` និង Pointer \`pSpeed\`៖
\`\`\`c
#include <stdio.h>

int main() {
    int carSpeed = 80;
    int *pSpeed = &carSpeed; 

    printf("Value of carSpeed: %d\\n", carSpeed);
    printf("Memory address of carSpeed: %p\\n", &carSpeed);
    printf("Pointer pSpeed stores address: %p\\n", pSpeed);
    printf("Value retrieved via dereferencing *pSpeed: %d\\n", *pSpeed);
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
Value of carSpeed: 80
Memory address of carSpeed: 0x7ffd5f7c320c
Pointer pSpeed stores address: 0x7ffd5f7c320c
Value retrieved via dereferencing *pSpeed: 80
\`\`\``
    },
    starterCode: `#include <stdio.h>

int main() {
    int score = 100;
    int *ptr = &score;
    printf("Value: %d, Address: %p\\n", *ptr, ptr);
    return 0;
}`
  },
  {
    id: "c-functions",
    title: { en: "C Functions", km: "អនុគមន៍ C Functions" },
    content: {
      en: `# C Functions

A **function** is a modular, reusable block of code that performs a specific task. Functions organize code, make it easier to read, and prevent repetition.

Every C program has at least one function: \`main()\`. You can also write your own custom functions.

To declare a function, specify its return type, name, and parameters inside parentheses:
\`\`\`c
void greetUser() {
    printf("Hello from my function!\\n");
}
\`\`\`

- \`void\` indicates that the function does not return any value to the caller.

> **Tip:** Functions must be declared or defined in the file before they are called inside the \`main()\` block.

### Worked Example
\`\`\`c
#include <stdio.h>

// Defining the function before main
void sayHello() {
    printf("Hello User, hope you are learning well!\\n");
}

int main() {
    // Calling the function
    sayHello();
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
Hello User, hope you are learning well!
\`\`\``,
      km: `# អនុគមន៍ C Functions

**អនុគមន៍ (Function)** គឺជាប្លុកកូដដាច់ដោយឡែកដែលអាចប្រើឡើងវិញបាន ដើម្បីបំពេញភារកិច្ចជាក់លាក់ណាមួយ។ អនុគមន៍ជួយរៀបចំកូដឱ្យមានសណ្តាប់ធ្នាប់ ងាយស្រួលអាន និងមិនសរសេរដដែលៗ។

រាល់កម្មវិធី C ទាំងអស់ត្រូវតែមានអនុគមន៍យ៉ាងហោចណាស់មួយគឺ \`main()\`។ អ្នកអាចបង្កើតអនុគមន៍ផ្ទាល់ខ្លួនបាន។

របៀបបង្កើតអនុគមន៍៖
\`\`\`c
void greetUser() {
    printf("Hello from my function!\\n");
}
\`\`\`

- \`void\` បញ្ជាក់ថាអនុគមន៍នេះមិនប្រគល់តម្លៃត្រឡប់មកវិញឡើយ (No Return Value)។

> **គន្លឹះ៖** អនុគមន៍ត្រូវតែប្រកាស ឬសរសេរឱ្យបានមុនពេលយកវាទៅហៅប្រើប្រាស់នៅក្នុងប្លុក \`main()\`។

### ឧទាហរណ៍អនុវត្ត
\`\`\`c
#include <stdio.h>

void sayHello() {
    printf("Hello User, hope you are learning well!\\n");
}

int main() {
    sayHello();
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
Hello User, hope you are learning well!
\`\`\``
    },
    starterCode: `#include <stdio.h>

void displayMessage() {
    printf("This is a custom function block.\\n");
}

int main() {
    displayMessage();
    return 0;
}`
  },
  {
    id: "c-function-parameters",
    title: { en: "C Function Parameters", km: "ប៉ារ៉ាម៉ែត្រអនុគមន៍ C" },
    content: {
      en: `# C Function Parameters

Information can be passed to functions as parameters. Parameters act as variables inside the function body.

C supports two primary methods for passing parameters:
1. **Pass by Value:** A copy of the value is passed. Modifying the parameter inside the function does not affect the original variable outside.
2. **Pass by Reference (using pointers):** The actual memory address is passed. Modifying the parameter inside the function directly changes the original variable.

> **Tip:** Pass by reference is essential when a function needs to modify more than one variable or when passing large arrays and structs efficiently.

### Worked Example
\`\`\`c
#include <stdio.h>

// Pass by value
void addTen(int val) {
    val = val + 10;
}

// Pass by reference
void addTenReal(int *pVal) {
    *pVal = *pVal + 10;
}

int main() {
    int num = 50;

    addTen(num);
    printf("After addTen (by value): %d\\n", num);

    addTenReal(&num);
    printf("After addTenReal (by reference): %d\\n", num);

    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
After addTen (by value): 50
After addTenReal (by reference): 60
\`\`\``,
      km: `# ប៉ារ៉ាម៉ែត្រអនុគមន៍ C

ព័ត៌មានអាចត្រូវបានបញ្ជូនទៅកាន់អនុគមន៍តាមរយៈ ប៉ារ៉ាម៉ែត្រ (Parameters)។

ភាសា C គាំទ្រការបញ្ជូនប៉ារ៉ាម៉ែត្រពីររបៀប៖
1. **Pass by Value៖** បញ្ជូនតម្លៃចម្លង។ រាល់ការកែប្រែតម្លៃក្នុងអនុគមន៍មិនប៉ះពាល់ដល់អថេរដើមឡើយ។
2. **Pass by Reference (ប្រើ pointer)៖** បញ្ជូនអាសយដ្ឋានការចងចាំពិតប្រាកដ។ រាល់ការកែប្រែតម្លៃក្នុងអនុគមន៍នឹងផ្លាស់ប្តូរអថេរដើមភ្លាមៗ។

> **គន្លឹះ៖** Pass by reference មានសារៈសំខាន់ខ្លាំងនៅពេលអ្នកចង់ឱ្យអនុគមន៍កែប្រែតម្លៃអថេរផ្ទាល់ ឬបញ្ជូនទិន្នន័យទំហំធំដូចជា arrays ឬ structs។

### ឧទាហរណ៍អនុវត្ត
\`\`\`c
#include <stdio.h>

void addTen(int val) {
    val = val + 10;
}

void addTenReal(int *pVal) {
    *pVal = *pVal + 10;
}

int main() {
    int num = 50;

    addTen(num);
    printf("After addTen (by value): %d\\n", num);

    addTenReal(&num);
    printf("After addTenReal (by reference): %d\\n", num);

    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
After addTen (by value): 50
After addTenReal (by reference): 60
\`\`\``
    },
    starterCode: `#include <stdio.h>

void doubleValue(int *p) {
    *p = *p * 2;
}

int main() {
    int x = 25;
    doubleValue(&x);
    printf("x is now %d\\n", x);
    return 0;
}`
  },
  {
    id: "c-function-declarations",
    title: { en: "C Function Declarations", km: "ការប្រកាសអនុគមន៍ C" },
    content: {
      en: `# C Function Declarations

A C program executes sequentially. If you try to call a function that is written *below* \`main()\`, the compiler will throw a warning or error.

To solve this, we split functions into two parts:
- **Declaration (Prototype):** Declares the function's return type, name, and parameter types at the top of the file.
- **Definition:** Contains the actual body code of the function, placed elsewhere (often below \`main()\`).

\`\`\`c
// Function prototype declaration
int addNumbers(int, int); 
\`\`\`

> **Tip:** Prototypes act as a contract for the compiler, verifying that calls are syntactically correct before the function's full code is compiled.

### Worked Example
\`\`\`c
#include <stdio.h>

// 1. Function Prototype Declaration
int calculateArea(int width, int height);

int main() {
    // 2. Calling the function safely
    int area = calculateArea(10, 5);
    printf("Area of rectangle: %d\\n", area);
    return 0;
}

// 3. Function Definition (placed below main)
int calculateArea(int width, int height) {
    return width * height;
}
\`\`\`
**Expected Output:**
\`\`\`text
Area of rectangle: 50
\`\`\``,
      km: `# ការប្រកាសអនុគមន៍ C

កម្មវិធី C ដំណើរការកូដពីលើចុះក្រោម។ ប្រសិនបើអ្នកហៅប្រើអនុគមន៍ដែលសរសេរនៅខាងក្រោម \`main()\` នោះ Compiler នឹងបង្ហាញកំហុស។

ដើម្បីដោះស្រាយបញ្ហានេះ យើងបែងចែកអនុគមន៍ជាពីរផ្នែក៖
- **ការប្រកាស (Declaration / Prototype)៖** ប្រកាសប្រភេទអនុគមន៍ ឈ្មោះ និងប៉ារ៉ាម៉ែត្រនៅខាងលើបង្អស់។
- **ការកំណត់កូដ (Definition)៖** សរសេរប្លុកកូដលម្អិតរបស់អនុគមន៍ ដែលច្រើនតែដាក់នៅខាងក្រោម \`main()\`។

\`\`\`c
// គំរូប្រកាសអនុគមន៍ (Prototype)
int addNumbers(int, int); 
\`\`\`

> **គន្លឹះ៖** Prototype ជួយប្រាប់ Compiler ឱ្យដឹងជាមុនថាអនុគមន៍នេះពិតជាមានមែន ដើម្បីឱ្យកម្មវិធីអាច compile បានជោគជ័យ។

### ឧទាហរណ៍អនុវត្ត
\`\`\`c
#include <stdio.h>

int calculateArea(int width, int height);

int main() {
    int area = calculateArea(10, 5);
    printf("Area of rectangle: %d\\n", area);
    return 0;
}

int calculateArea(int width, int height) {
    return width * height;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
Area of rectangle: 50
\`\`\``
    },
    starterCode: `#include <stdio.h>

int getMax(int, int);

int main() {
    printf("Max: %d\\n", getMax(45, 89));
    return 0;
}

int getMax(int a, int b) {
    return (a > b) ? a : b;
}`
  },
  {
    id: "c-scope",
    title: { en: "C Scope", km: "ដែនកំណត់ Scope C" },
    content: {
      en: `# C Scope

In C, variables have a specific **scope**, which determines their accessibility and lifetime inside the program:

- **Local Scope:** Variables declared inside a function or a block \`{ ... }\`. They can only be accessed by code within that block and are destroyed when the block exits.
- **Global Scope:** Variables declared outside of all functions (at the file level). They are visible to all functions in the file from their point of declaration until the program ends.

> **Tip:** Avoid overusing global variables. They can be modified by any function, making debugging difficult and increasing the risk of unexpected bugs.

### Worked Example
\`\`\`c
#include <stdio.h>

// Global variable
int score = 100; 

void displayScore() {
    printf("Global score in function: %d\\n", score);
}

int main() {
    // Local variable
    int bonus = 25; 
    
    printf("Global score: %d\\n", score);
    printf("Local bonus: %d\\n", bonus);
    
    displayScore();
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
Global score: 100
Local bonus: 25
Global score in function: 100
\`\`\``,
      km: `# ដែនកំណត់ Scope C

នៅក្នុង C អថេរមាន **ដែនកំណត់ (Scope)** ផ្ទាល់ខ្លួន ដែលកំណត់លទ្ធភាពនៃការប្រើប្រាស់ និងអាយុកាលរបស់វា៖

- **Local Scope៖** អថេរដែលប្រកាសនៅក្នុងអនុគមន៍ ឬប្លុកកូដ \`{ ... }\`។ វាអាចប្រើបានតែក្នុងប្លុកនោះប៉ុណ្ណោះ ហើយនឹងត្រូវលុបចោលវិញនៅពេលចាកចេញ។
- **Global Scope៖** អថេរដែលប្រកាសនៅខាងក្រៅអនុគមន៍ទាំងអស់។ វាអាចហៅប្រើបានដោយគ្រប់អនុគមន៍ទាំងអស់ក្នុងឯកសារ។

> **គន្លឹះ៖** គួរចៀសវាងការប្រើប្រាស់អថេរ Global ច្រើនពេក ព្រោះវាអាចត្រូវបានកែប្រែដោយអនុគមន៍ណាមួយក៏បាន ដែលធ្វើឱ្យពិបាកស្វែងរកកំហុសកូដ។

### ឧទាហរណ៍អនុវត្ត
\`\`\`c
#include <stdio.h>

int score = 100; 

void displayScore() {
    printf("Global score in function: %d\\n", score);
}

int main() {
    int bonus = 25; 
    
    printf("Global score: %d\\n", score);
    printf("Local bonus: %d\\n", bonus);
    
    displayScore();
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
Global score: 100
Local bonus: 25
Global score in function: 100
\`\`\``
    },
    starterCode: `#include <stdio.h>

int globalVal = 500;

int main() {
    int localVal = 10;
    printf("Values: %d and %d\\n", globalVal, localVal);
    return 0;
}`
  },
  {
    id: "c-static-variables",
    title: { en: "C Static Variables", km: "អថេរឋិតិវន្ត Static C" },
    content: {
      en: `# C Static Variables

Standard local variables are destroyed when their parent function exits and re-created when the function is called again.

If you want a local variable to preserve its value across multiple function calls, use the \`static\` keyword modifier:
\`\`\`c
static int counter = 0;
\`\`\`

A static local variable is initialized only **once** and remains in memory until the program terminates.

> **Tip:** Static variables are ideal for implementing counters, sequence generators, or state indicators without relying on global variables.

### Worked Example
\`\`\`c
#include <stdio.h>

void triggerEvent() {
    static int eventCount = 0; // Initialized once
    int normalCount = 0;       // Re-created every call
    
    eventCount++;
    normalCount++;
    
    printf("Static Counter: %d | Normal Counter: %d\\n", eventCount, normalCount);
}

int main() {
    triggerEvent();
    triggerEvent();
    triggerEvent();
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
Static Counter: 1 | Normal Counter: 1
Static Counter: 2 | Normal Counter: 1
Static Counter: 3 | Normal Counter: 1
\`\`\``,
      km: `# អថេរឋិតិវន្ត Static C

អថេរ Local ធម្មតានឹងត្រូវលុបចេញពី Memory នៅពេលអនុគមន៍បញ្ចប់ការងារ ហើយនឹងត្រូវបង្កើតឡើងវិញជាថ្មីនៅពេលអនុគមន៍ត្រូវបានហៅម្តងទៀត។

ប្រសិនបើអ្នកចង់រក្សាតម្លៃរបស់អថេរ Local ឱ្យនៅដដែលទោះបីជាអនុគមន៍បញ្ចប់ការងារក៏ដោយ ចូរប្រើពាក្យគន្លឹះ \`static\`៖
\`\`\`c
static int counter = 0;
\`\`\`

អថេរ Static ត្រូវបានចាប់ផ្តើមតម្លៃដំបូងតែ **ម្តងគត់** និងរក្សាក្នុង Memory រហូតដល់កម្មវិធីឈប់ដំណើរការ។

> **គន្លឹះ៖** អថេរ Static ល្អបំផុតសម្រាប់បង្កើតកម្មវិធីរាប់ចំនួនដង (Counters) ឬរក្សាស្ថានភាពរបស់កម្មវិធីដោយមិនចាំបាច់ប្រើអថេរ Global។

### ឧទាហរណ៍អនុវត្ត
\`\`\`c
#include <stdio.h>

void triggerEvent() {
    static int eventCount = 0; 
    int normalCount = 0;       
    
    eventCount++;
    normalCount++;
    
    printf("Static Counter: %d | Normal Counter: %d\\n", eventCount, normalCount);
}

int main() {
    triggerEvent();
    triggerEvent();
    triggerEvent();
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
Static Counter: 1 | Normal Counter: 1
Static Counter: 2 | Normal Counter: 1
Static Counter: 3 | Normal Counter: 1
\`\`\``
    },
    starterCode: `#include <stdio.h>

void countCalls() {
    static int num = 1;
    printf("Call count: %d\\n", num++);
}

int main() {
    countCalls();
    countCalls();
    return 0;
}`
  },
  {
    id: "c-recursion",
    title: { en: "C Recursion", km: "ការហៅខ្លួនឯង Recursion C" },
    content: {
      en: `# C Recursion

**Recursion** is the process where a function calls itself directly or indirectly to solve a problem.

Every recursive function must contain two key parts:
1. **Base Case:** The stopping condition that prevents infinite looping.
2. **Recursive Step:** The logic where the function calls itself with a modified argument, progressively moving closer to the base case.

> **Tip:** If you forget to include a valid Base Case, or if the argument does not reach the stopping condition, you will cause an infinite recursion, leading to **Stack Overflow** (out of stack memory crash).

### Worked Example
Using recursion to calculate the mathematical factorial of a number:
\`\`\`c
#include <stdio.h>

int factorial(int n) {
    // Base Case
    if (n <= 1) {
        return 1;
    }
    // Recursive Step
    return n * factorial(n - 1);
}

int main() {
    int num = 5;
    printf("Factorial of %d is: %d\\n", num, factorial(num));
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
Factorial of 5 is: 120
\`\`\``,
      km: `# ការហៅខ្លួនឯង Recursion C

**Recursion** គឺជាដំណើរការដែលអនុគមន៍ហៅខ្លួនឯងជាប្រយោល ឬផ្ទាល់ ដើម្បីដោះស្រាយបញ្ហា។

អនុគមន៍ដែលប្រើលំនាំនេះត្រូវតែមានចំណុចពីរ៖
1. **លក្ខខណ្ឌបញ្ឈប់ (Base Case)៖** លក្ខខណ្ឌការពារមិនឱ្យកម្មវិធីហៅខ្លួនឯងរហូតគ្មានទីបញ្ចប់។
2. **ជំហានហៅខ្លួនឯង (Recursive Step)៖** ការហៅខ្លួនឯងម្តងទៀតជាមួយនឹងតម្លៃប៉ារ៉ាម៉ែត្រថ្មីដែលខិតជិតទៅរក Base Case។

> **គន្លឹះ៖** ប្រសិនបើអ្នកភ្លេចដាក់ Base Case ឬលក្ខខណ្ឌបញ្ឈប់មិនត្រឹមត្រូវ វានឹងបង្កឱ្យមានកំហុស **Stack Overflow** (អស់ទំហំផ្ទុក Memory នាំឱ្យកម្មវិធីលោតចេញ)។

### ឧទាហរណ៍អនុវត្ត
ការប្រើប្រាស់ Recursion ដើម្បីគណនា Factorial នៃចំនួនគត់៖
\`\`\`c
#include <stdio.h>

int factorial(int n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

int main() {
    int num = 5;
    printf("Factorial of %d is: %d\\n", num, factorial(num));
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
Factorial of 5 is: 120
\`\`\``
    },
    starterCode: `#include <stdio.h>

int sumRange(int n) {
    if (n <= 0) return 0;
    return n + sumRange(n - 1);
}

int main() {
    printf("Sum: %d\\n", sumRange(10));
    return 0;
}`
  },
  {
    id: "c-math-functions",
    title: { en: "C Math Functions", km: "មុខងារគណិតវិទ្យា C" },
    content: {
      en: `# C Math Functions

C provides standard mathematical operations inside the library header **\`<math.h>\`**. To use these functions, make sure to import the header file at the top of your program:

- \`sqrt(double x)\`: Calculates the square root of \`x\`.
- \`pow(double base, double exponent)\`: Calculates the value of base raised to the power of exponent.
- \`abs(int x)\`: Returns the absolute value of integer \`x\` (located in \`<stdlib.h>\`).
- \`ceil(double x)\`: Rounds \`x\` upward to the nearest mathematical whole integer.
- \`floor(double x)\`: Rounds \`x\` downward to the nearest mathematical whole integer.

> **Tip:** Most parameters and return types in \`<math.h>\` are double precision floats (\`double\`).

### Worked Example
\`\`\`c
#include <stdio.h>
#include <math.h>

int main() {
    double number = 16.0;
    double base = 2.0;
    double exp = 3.0;

    printf("Square root of %.1f is: %.1f\\n", number, sqrt(number));
    printf("%.1f raised to the power %.1f is: %.1f\\n", base, exp, pow(base, exp));
    printf("Ceil of 4.3: %.1f | Floor of 4.7: %.1f\\n", ceil(4.3), floor(4.7));
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
Square root of 16.0 is: 4.0
2.0 raised to the power 3.0 is: 8.0
Ceil of 4.3: 5.0 | Floor of 4.7: 4.0
\`\`\``,
      km: `# មុខងារគណិតវិទ្យា C

ភាសា C ផ្តល់មុខងារគណនាគណិតវិទ្យាដ៏សម្បូរបែបនៅក្នុងបណ្ណាល័យ **\`<math.h>\`**៖

- \`sqrt(double x)\`៖ គណនារឹសការេនៃ x។
- \`pow(double base, double exponent)\`៖ គណនាស្វ័យគុណ។
- \`abs(int x)\`៖ គណនាតម្លៃដាច់ខាត (តម្លៃវិជ្ជមានជានិច្ច ស្ថិតក្នុង \`<stdlib.h>\`)។
- \`ceil(double x)\`៖ បង្គត់ឡើងទៅចំនួនគត់ជិតបំផុត។
- \`floor(double x)\`៖ បង្គត់ចុះទៅចំនួនគត់ជិតបំផុត។

> **គន្លឹះ៖** អនុគមន៍ភាគច្រើននៅក្នុង \`<math.h>\` ទទួល និងប្រគល់តម្លៃជាប្រភេទ \`double\`។

### ឧទាហរណ៍អនុវត្ត
\`\`\`c
#include <stdio.h>
#include <math.h>

int main() {
    double number = 16.0;
    double base = 2.0;
    double exp = 3.0;

    printf("Square root of %.1f is: %.1f\\n", number, sqrt(number));
    printf("%.1f raised to the power %.1f is: %.1f\\n", base, exp, pow(base, exp));
    printf("Ceil of 4.3: %.1f | Floor of 4.7: %.1f\\n", ceil(4.3), floor(4.7));
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
Square root of 16.0 is: 4.0
2.0 raised to the power 3.0 is: 8.0
Ceil of 4.3: 5.0 | Floor of 4.7: 4.0
\`\`\``
    },
    starterCode: `#include <stdio.h>
#include <math.h>

int main() {
    printf("2^5 = %.1f\\n", pow(2, 5));
    return 0;
}`
  },
  {
    id: "c-string-conversion",
    title: { en: "C String to Number", km: "បម្លែង String ទៅលេខ C" },
    content: {
      en: `# C String to Number Conversions

When capturing user inputs or parsing configuration text files, numbers often arrive in string formats (e.g. \`"250"\`). 

C provides standard utility functions inside **\`<stdlib.h>\`** to convert string text into numerical representations:

- \`atoi(str)\`: Converts a string into a standard **integer** (\`int\`).
- \`atof(str)\`: Converts a string into a **floating-point** float/double.
- \`atol(str)\`: Converts a string into a **long integer** (\`long\`).

> **Tip:** If the string starts with non-numerical characters (such as \`"abc12"\`), these functions return \`0\`. Always validate your string text formats before performing mathematical calculations!

### Worked Example
\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int main() {
    char ageStr[] = "25";
    char priceStr[] = "19.99";

    // Converting strings to numeric types
    int age = atoi(ageStr);
    double price = atof(priceStr);

    printf("Age integer: %d (Calculated next year: %d)\\n", age, age + 1);
    printf("Price float: %.2f\\n", price);
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
Age integer: 25 (Calculated next year: 26)
Price float: 19.99
\`\`\``,
      km: `# បម្លែង String ទៅលេខ C

នៅពេលទាញយកទិន្នន័យពីអ្នកប្រើប្រាស់ ឬអានឯកសារអត្ថបទ លេខច្រើនតែស្ថិតក្នុងទម្រង់ជាអត្ថបទ (String ដូចជា \`"250"\`)។

C ផ្តល់អនុគមន៍ជំនួយនៅក្នុង **\`<stdlib.h>\`** ដើម្បីបម្លែងអត្ថបទទៅជាលេខ៖

- \`atoi(str)\`៖ បម្លែងអត្ថបទទៅជាចំនួនគត់ (**int**)។
- \`atof(str)\`៖ បម្លែងអត្ថបទទៅជាចំនួនទសភាគ (**float/double**)។
- \`atol(str)\`៖ បម្លែងអត្ថបទទៅជាចំនួនគត់វែង (**long**)។

> **គន្លឹះ៖** ប្រសិនបើអត្ថបទចាប់ផ្តើមដោយតួអក្សរមិនមែនជាលេខ (ដូចជា \`"abc12"\`) នោះអនុគមន៍ទាំងនេះនឹងប្រគល់តម្លៃ \`0\`។

### ឧទាហរណ៍អនុវត្ត
\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int main() {
    char ageStr[] = "25";
    char priceStr[] = "19.99";

    int age = atoi(ageStr);
    double price = atof(priceStr);

    printf("Age integer: %d (Calculated next year: %d)\\n", age, age + 1);
    printf("Price float: %.2f\\n", price);
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
Age integer: 25 (Calculated next year: 26)
Price float: 19.99
\`\`\``
    },
    starterCode: `#include <stdio.h>
#include <stdlib.h>

int main() {
    char numStr[] = "5000";
    int value = atoi(numStr);
    printf("Value multiplied: %d\\n", value * 2);
    return 0;
}`
  },
  {
    id: "c-function-pointers",
    title: { en: "C Function Pointers", km: "ចង្អុលមុខងារ Function Pointers C" },
    content: {
      en: `# C Function Pointers

Just like pointers can store variable addresses, a **Function Pointer** is a specialized pointer that stores the start address of executable code in memory.

This allows you to pass functions as arguments to other functions (creating **callbacks**), which is highly useful in systems programming and dynamic event routing.

Syntax declaration:
\`\`\`c
return_type (*pointer_name)(parameter_types);
\`\`\`

> **Tip:** Sizing and parenthesis are critical here! \`int (*fPtr)(int)\` is a function pointer, whereas \`int *fPtr(int)\` is a standard function declaration that returns an integer pointer.

### Worked Example
\`\`\`c
#include <stdio.h>

void showMessage(int count) {
    printf("Callback triggered with value: %d\\n", count);
}

int main() {
    // Declaring a function pointer pointing to showMessage
    void (*funcPtr)(int) = &showMessage;

    // Triggering function call via pointer dereferencing
    (*funcPtr)(99);
    
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
Callback triggered with value: 99
\`\`\``,
      km: `# ចង្អុលមុខងារ Function Pointers C

ដូចគ្នានឹង Pointers អាចរក្សាទុកអាសយដ្ឋានអថេរដែរ **Function Pointer** គឺជា Pointer ពិសេសដែលរក្សាទុកអាសយដ្ឋានទីតាំងរបស់អនុគមន៍នៅក្នុង Memory។

លក្ខណៈពិសេសនេះជួយឱ្យយើងអាចបញ្ជូនអនុគមន៍ជាប៉ារ៉ាម៉ែត្រទៅកាន់អនុគមន៍ផ្សេងទៀត (ហៅថា **Callbacks**) ដែលល្អបំផុតសម្រាប់កម្មវិធីកម្រិតខ្ពស់។

វាក្យសម្ពន្ធប្រកាស៖
\`\`\`c
return_type (*pointer_name)(parameter_types);
\`\`\`

> **គន្លឹះ៖** សញ្ញាវង់ក្រចកជុំវិញឈ្មោះ Pointer មានសារៈសំខាន់ណាស់! \`int (*fPtr)(int)\` គឺជា Function Pointer ចំណែកឯ \`int *fPtr(int)\` គឺជាការប្រកាសអនុគមន៍ធម្មតាដែលប្រគល់តម្លៃជា pointer។

### ឧទាហរណ៍អនុវត្ត
\`\`\`c
#include <stdio.h>

void showMessage(int count) {
    printf("Callback triggered with value: %d\\n", count);
}

int main() {
    void (*funcPtr)(int) = &showMessage;

    (*funcPtr)(99);
    
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
Callback triggered with value: 99
\`\`\``
    },
    starterCode: `#include <stdio.h>

int add(int a, int b) {
    return a + b;
}

int main() {
    int (*op)(int, int) = add;
    printf("Addition via pointer: %d\\n", op(12, 13));
    return 0;
}`
  }
];
