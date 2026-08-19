import { Lesson } from '../types';

export const cLessonsPart3: Lesson[] = [
  {
    id: "c-create-files",
    title: { en: "C Create Files", km: "ការបង្កើតឯកសារ C" },
    content: {
      en: `# C Create Files

In C, file operations are handled using a pointer of type \`FILE\` from the \`<stdio.h>\` library. To create a file, we use the \`fopen()\` function:
\`\`\`c
FILE *fptr;
fptr = fopen("notes.txt", "w");
\`\`\`

- **"w" (Write mode):** Opens a file for writing. If the file does not exist, it creates a new one. If it already exists, its previous content is deleted (overwritten).

Always check if the returned file pointer is \`NULL\` (meaning the file could not be opened or created due to permissions or full disk) and remember to close the file using \`fclose()\`.

> **Tip:** Leaving files open can cause resource leaks and prevent other programs from reading or writing to them. Always call \`fclose()\` when you are done!

### Worked Example
This example creates a new file called \`notes.txt\`. 
\`\`\`c
#include <stdio.h>

int main() {
    FILE *fptr;
    
    // Create and open file in Write mode
    fptr = fopen("notes.txt", "w");
    
    if (fptr == NULL) {
        printf("Error: Could not create notes.txt!\\n");
        return 1;
    }
    
    printf("File notes.txt created successfully!\\n");
    
    // Always close the file
    fclose(fptr);
    return 0;
}
\`\`\`

### Simulated Filesystem Output
Since standard sandboxes run in secure browser sessions, our compiler runs this code in an isolated container. When executed, the virtual sandbox outputs:
\`\`\`text
File notes.txt created successfully!
\`\`\``,
      km: `# ការបង្កើតឯកសារ C

នៅក្នុងភាសា C ដំណើរការឯកសារត្រូវបានគ្រប់គ្រងតាមរយៈចង្អុលបង្ហាញប្រភេទ \`FILE\` ពីបណ្ណាល័យ \`<stdio.h>\`។ ដើម្បីបង្កើតឯកសារថ្មី យើងប្រើប្រាស់អនុគមន៍ \`fopen()\`៖
\`\`\`c
FILE *fptr;
fptr = fopen("notes.txt", "w");
\`\`\`

- **"w" (របៀបសរសេរ - Write Mode)៖** បើកឯកសារសម្រាប់សរសេរកូដ។ បើសិនជាឯកសារមិនទាន់មាន វានឹងបង្កើតថ្មីមួយដោយស្វ័យប្រវត្ត។ បើមានស្រាប់ វានឹងលុបទិន្នន័យចាស់ចោលទាំងអស់។

អ្នកត្រូវឆែកមើលជានិច្ចថាតើ Pointer ដែលទទួលបានជា \`NULL\` ឬទេ (មានន័យថាការបង្កើតឯកសារបរាជ័យ) និងត្រូវបិទឯកសារវិញជានិច្ចដោយប្រើ \`fclose()\`។

> **គន្លឹះ៖** ការទុកឯកសារចំហរចោលដោយមិនបិទ នឹងធ្វើឱ្យលេចធ្លាយធនធានប្រព័ន្ធ (Resource Leaks)។ ត្រូវហៅប្រើ \`fclose()\` ជានិច្ចនៅពេលបញ្ចប់!

### ឧទាហរណ៍អនុវត្ត
កម្មវិធីបង្កើតឯកសារឈ្មោះ \`notes.txt\`៖
\`\`\`c
#include <stdio.h>

int main() {
    FILE *fptr;
    
    fptr = fopen("notes.txt", "w");
    
    if (fptr == NULL) {
        printf("Error: Could not create notes.txt!\\n");
        return 1;
    }
    
    printf("File notes.txt created successfully!\\n");
    
    fclose(fptr);
    return 0;
}
\`\`\`

### លទ្ធផលបង្ហាញពីប្រព័ន្ធឯកសារ
នៅពេលកូដនេះត្រូវបានដំណើរការនៅក្នុងប្រអប់សាកល្បង៖
\`\`\`text
File notes.txt created successfully!
\`\`\``
    },
    starterCode: `#include <stdio.h>

int main() {
    FILE *fptr = fopen("notes.txt", "w");
    if (fptr == NULL) {
        printf("Failed to create file.\\n");
        return 1;
    }
    printf("Created file notes.txt successfully!\\n");
    fclose(fptr);
    return 0;
}`
  },
  {
    id: "c-write-files",
    title: { en: "C Write to Files", km: "ការសរសេរចូលឯកសារ C" },
    content: {
      en: `# C Write to Files

Once you have opened a file using \`fopen()\` in write (\`"w"\`) or append (\`"a"\`) mode, you can write formatted text into it using the \`fprintf()\` function.

\`\`\`c
fprintf(fptr, "Hello Sabaicode C Course!\\n");
\`\`\`

- **\`fprintf()\`** works exactly like \`printf()\`, but the first parameter is the pointer to the target file.

> **Tip:** Append mode (\`"a"\`) allows you to add text to the *end* of an existing file without deleting its previous contents.

### Worked Example
Writing custom notes into our running \`notes.txt\` file:
\`\`\`c
#include <stdio.h>

int main() {
    FILE *fptr;
    
    // Open notes.txt in Write mode
    fptr = fopen("notes.txt", "w");
    
    if (fptr == NULL) {
        printf("Error opening file!\\n");
        return 1;
    }
    
    // Write text to file
    fprintf(fptr, "Welcome to the C Files tutorial.\\n");
    fprintf(fptr, "We are mastering file operations in C.\\n");
    
    printf("Successfully wrote to notes.txt!\\n");
    
    fclose(fptr);
    return 0;
}
\`\`\`

### Simulated File Content
After running this code, the simulated file system contains a file \`notes.txt\` with the following lines:
\`\`\`text
[File: notes.txt]
Welcome to the C Files tutorial.
We are mastering file operations in C.
\`\`\``,
      km: `# ការសរសេរចូលឯកសារ C

បន្ទាប់ពីបើកឯកសារដោយប្រើ \`fopen()\` ក្នុងរបៀបសរសេរ (\`"w"\`) ឬបន្ថែមបន្ត (\`"a"\`) អ្នកអាចសរសេរអត្ថបទចូលទៅក្នុងនោះដោយប្រើអនុគមន៍ \`fprintf()\`។

\`\`\`c
fprintf(fptr, "Hello Sabaicode C Course!\\n");
\`\`\`

- **\`fprintf()\`** ដំណើរការដូច \`printf()\` ដែរ ប៉ុន្តែប៉ារ៉ាម៉ែត្រដំបូងបង្អស់គឺ Pointer របស់ឯកសារគោលដៅ។

> **គន្លឹះ៖** របៀប Append (\`"a"\`) អនុញ្ញាតឱ្យអ្នកសរសេរអត្ថបទបន្ថែមនៅ *ចុងបញ្ចប់* នៃឯកសារចាស់ ដោយមិនលុបទិន្នន័យចាស់ចោលឡើយ។

### ឧទាហរណ៍អនុវត្ត
ការសរសេរអត្ថបទខ្លីៗចូលទៅក្នុងឯកសារ \`notes.txt\`៖
\`\`\`c
#include <stdio.h>

int main() {
    FILE *fptr;
    
    fptr = fopen("notes.txt", "w");
    
    if (fptr == NULL) {
        printf("Error opening file!\\n");
        return 1;
    }
    
    fprintf(fptr, "Welcome to the C Files tutorial.\\n");
    fprintf(fptr, "We are mastering file operations in C.\\n");
    
    printf("Successfully wrote to notes.txt!\\n");
    
    fclose(fptr);
    return 0;
}
\`\`\`

### លទ្ធផលបង្ហាញពីប្រព័ន្ធឯកសារ
បន្ទាប់ពីដំណើរការកូដនេះ ឯកសារត្រូវបានរក្សាទុក៖
\`\`\`text
[File: notes.txt]
Welcome to the C Files tutorial.
We are mastering file operations in C.
\`\`\``
    },
    starterCode: `#include <stdio.h>

int main() {
    FILE *fptr = fopen("notes.txt", "w");
    if (fptr == NULL) return 1;
    
    fprintf(fptr, "C is incredibly fast!\\n");
    printf("Wrote line successfully.\\n");
    
    fclose(fptr);
    return 0;
}`
  },
  {
    id: "c-read-files",
    title: { en: "C Read Files", km: "ការអានឯកសារ C" },
    content: {
      en: `# C Read Files

To read text from an existing file, open it in read mode (\`"r"\`) and use the \`fgets()\` function to capture lines of text into a character array buffer.

\`\`\`c
char buffer[100];
fgets(buffer, 100, fptr);
\`\`\`

- **\`fgets()\` Parameters:**
  1. The destination character array where the read text will be stored.
  2. The maximum number of characters to read in a single line.
  3. The file pointer representing the open source file.

> **Tip:** \`fgets()\` returns \`NULL\` when it reaches the end of the file. You can read an entire file line-by-line using a simple \`while\` loop.

### Worked Example
This program opens and reads the entire contents of \`notes.txt\`:
\`\`\`c
#include <stdio.h>

int main() {
    FILE *fptr;
    char buffer[150];
    
    // Open notes.txt in Read mode
    fptr = fopen("notes.txt", "r");
    
    if (fptr == NULL) {
        printf("Error: notes.txt file not found!\\n");
        return 1;
    }
    
    printf("--- Reading notes.txt file content: ---\\n");
    // Read line-by-line until end of file
    while (fgets(buffer, 150, fptr) != NULL) {
        printf("%s", buffer);
    }
    
    fclose(fptr);
    return 0;
}
\`\`\`

### Simulated Terminal Output
When compiled, this program reads from the mock filesystem and outputs:
\`\`\`text
--- Reading notes.txt file content: ---
Welcome to the C Files tutorial.
We are mastering file operations in C.
\`\`\``,
      km: `# ការអានឯកសារ C

ដើម្បីអានអត្ថបទពីឯកសារដែលមានស្រាប់ យើងបើកវាជាប្រភេទ Read (\`"r"\`) ហើយប្រើប្រាស់អនុគមន៍ \`fgets()\` ដើម្បីទាញយកអត្ថបទម្តងមួយបន្ទាត់មករក្សាទុកក្នុងអារេ Buffer តួអក្សរ។

\`\`\`c
char buffer[100];
fgets(buffer, 100, fptr);
\`\`\`

- **ប៉ារ៉ាម៉ែត្ររបស់ \`fgets()\`៖**
  1. អារេតួអក្សរគោលដៅសម្រាប់រក្សាទុកអត្ថបទដែលអានបាន។
  2. ចំនួនតួអក្សរអតិបរមាដែលត្រូវអានក្នុងមួយបន្ទាត់។
  3. Pointer របស់ឯកសារដែលត្រូវអាន។

> **គន្លឹះ៖** \`fgets()\` នឹងប្រគល់តម្លៃ \`NULL\` នៅពេលវាអានដល់ចុងបញ្ចប់នៃឯកសារ។ យើងអាចអានឯកសារទាំងមូលដោយប្រើរង្វិលជុំ \`while\`។

### ឧទាហរណ៍អនុវត្ត
កម្មវិធីអានខ្លឹមសារទាំងអស់នៅក្នុងឯកសារ \`notes.txt\`៖
\`\`\`c
#include <stdio.h>

int main() {
    FILE *fptr;
    char buffer[150];
    
    fptr = fopen("notes.txt", "r");
    
    if (fptr == NULL) {
        printf("Error: notes.txt file not found!\\n");
        return 1;
    }
    
    printf("--- Reading notes.txt file content: ---\\n");
    while (fgets(buffer, 150, fptr) != NULL) {
        printf("%s", buffer);
    }
    
    fclose(fptr);
    return 0;
}
\`\`\`

### លទ្ធផលរំពឹងទុក
នៅពេលកូដដំណើរការ វានឹងបង្ហាញខ្លឹមសារឯកសារ៖
\`\`\`text
--- Reading notes.txt file content: ---
Welcome to the C Files tutorial.
We are mastering file operations in C.
\`\`\``
    },
    starterCode: `#include <stdio.h>

int main() {
    // Write first to make sure file exists
    FILE *fptr = fopen("notes.txt", "w");
    if (fptr == NULL) return 1;
    fprintf(fptr, "C programming file reading content.\\n");
    fclose(fptr);

    // Now read it back
    fptr = fopen("notes.txt", "r");
    if (fptr == NULL) return 1;
    char line[100];
    if (fgets(line, 100, fptr) != NULL) {
        printf("Read Line: %s", line);
    }
    fclose(fptr);
    return 0;
}`
  },
  {
    id: "c-structures",
    title: { en: "C Structures", km: "រចនាសម្ព័ន្ធ Structures C" },
    content: {
      en: `# C Structures

A **Structure** (defined by the \`struct\` keyword) is a user-defined custom data type in C that allows you to group variables of different data types together under a single name.

Each variable inside a structure is referred to as a **structure member**.

Syntax:
\`\`\`c
struct Car {
    char brand[50];
    char model[50];
    int year;
    int speed;
};
\`\`\`

> **Tip:** While an array holds multiple elements of the *same* data type, a structure allows you to combine completely *different* data types (such as integers, floats, and character arrays) in a cohesive object model.

### Worked Example
Introducing our running \`Car\` struct:
\`\`\`c
#include <stdio.h>

// Defining our running struct
struct Car {
    char brand[50];
    char model[50];
    int year;
    int speed;
};

int main() {
    // Declaring a Car variable
    struct Car myCar;
    
    printf("Struct Car defined! Size of Car struct: %lu bytes\\n", sizeof(struct Car));
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
Struct Car defined! Size of Car struct: 108 bytes
\`\`\``,
      km: `# រចនាសម្ព័ន្ធ Structures C

**Structure** (ប្រកាសដោយពាក្យគន្លឹះ \`struct\`) គឺជាប្រភេទទិន្នន័យដែលបង្កើតដោយអ្នកប្រើប្រាស់ សម្រាប់ចងក្រងបណ្តុំអថេរដែលមានប្រភេទទិន្នន័យខុសៗគ្នាឱ្យស្ថិតនៅក្រោមកញ្ចប់ឈ្មោះតែមួយ។

អថេរនីមួយៗនៅក្នុង structure ហៅថា **សមាជិក (Structure Member)**។

វាក្យសម្ពន្ធ៖
\`\`\`c
struct Car {
    char brand[50];
    char model[50];
    int year;
    int speed;
};
\`\`\`

> **គន្លឹះ៖** ខុសពីអារេដែលរក្សាទុកតែតម្លៃដែលមានប្រភេទ *ដូចគ្នា* structure អនុញ្ញាតឱ្យអ្នករួមបញ្ចូលប្រភេទទិន្នន័យ *ខុសៗគ្នា* (ដូចជា int, float, array) ឱ្យក្លាយជាគំរូកម្មវិធីតែមួយ។

### ឧទាហរណ៍អនុវត្ត
ការចាប់ផ្តើមស្គាល់ជាមួយរចនាសម្ព័ន្ធ \`Car\`៖
\`\`\`c
#include <stdio.h>

struct Car {
    char brand[50];
    char model[50];
    int year;
    int speed;
};

int main() {
    struct Car myCar;
    
    printf("Struct Car defined! Size of Car struct: %lu bytes\\n", sizeof(struct Car));
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
Struct Car defined! Size of Car struct: 108 bytes
\`\`\``
    },
    starterCode: `#include <stdio.h>

struct Car {
    char brand[50];
    char model[50];
    int year;
    int speed;
};

int main() {
    printf("Car struct declared successfully!\\n");
    return 0;
}`
  },
  {
    id: "c-struct-members",
    title: { en: "C Struct Members", km: "សមាជិក Struct C" },
    content: {
      en: `# C Struct Members

To access and modify the member variables of a structure, we use the **member access operator** (the dot operator \`.\`).

\`\`\`c
struct Car myCar;
myCar.year = 2024;
myCar.speed = 120;
\`\`\`

You can assign values directly to numeric types, but strings inside structures require special handling which we will cover next.

> **Tip:** You can initialize struct members instantly at declaration using curly braces: \`struct Car myCar = {"Toyota", "Supra", 2024, 180};\`.

### Worked Example
Assigning and retrieving numeric values in our \`Car\` struct:
\`\`\`c
#include <stdio.h>

struct Car {
    char brand[50];
    char model[50];
    int year;
    int speed;
};

int main() {
    struct Car myCar;
    
    // Assigning values to members
    myCar.year = 2022;
    myCar.speed = 150;
    
    printf("Car Year: %d\\n", myCar.year);
    printf("Car Max Speed: %d km/h\\n", myCar.speed);
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
Car Year: 2022
Car Max Speed: 150 km/h
\`\`\``,
      km: `# សមាជិក Struct C

ដើម្បីចូលទៅកាន់ និងកែប្រែតម្លៃសមាជិករបស់ structure យើងប្រើប្រាស់ **សញ្ញាចុច (Dot Operator \`.\`)**។

\`\`\`c
struct Car myCar;
myCar.year = 2024;
myCar.speed = 120;
\`\`\`

អ្នកអាចផ្តល់តម្លៃឱ្យសមាជិកជាលេខបានដោយផ្ទាល់ ប៉ុន្តែចំពោះខ្សែអក្សរ (String) ក្នុង structure ទាមទារការសរសេរពិសេសមួយ។

> **គន្លឹះ៖** អ្នកអាចផ្តល់តម្លៃដំបូងឱ្យសមាជិកទាំងអស់ភ្លាមៗពេលប្រកាសអថេរ ដោយប្រើសញ្ញាធ្មេញកណ្តុរ៖ \`struct Car myCar = {"Toyota", "Supra", 2024, 180};\`។

### ឧទាហរណ៍អនុវត្ត
ការផ្តល់តម្លៃ និងទាញយកទិន្នន័យលេខពី \`Car\` struct៖
\`\`\`c
#include <stdio.h>

struct Car {
    char brand[50];
    char model[50];
    int year;
    int speed;
};

int main() {
    struct Car myCar;
    
    myCar.year = 2022;
    myCar.speed = 150;
    
    printf("Car Year: %d\\n", myCar.year);
    printf("Car Max Speed: %d km/h\\n", myCar.speed);
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
Car Year: 2022
Car Max Speed: 150 km/h
\`\`\``
    },
    starterCode: `#include <stdio.h>

struct Car {
    char brand[50];
    char model[50];
    int year;
    int speed;
};

int main() {
    struct Car simpleCar = {"Ford", "Mustang", 1969, 220};
    printf("Year of %s %s is %d\\n", simpleCar.brand, simpleCar.model, simpleCar.year);
    return 0;
}`
  },
  {
    id: "c-struct-strings",
    title: { en: "C Struct Strings", km: "ខ្សែអក្សរក្នុង Struct C" },
    content: {
      en: `# C Struct Strings

Because strings are represented as character arrays, you cannot assign a string directly to a struct member array after declaration:

\`\`\`c
struct Car myCar;
// This causes a compilation error!
myCar.brand = "Tesla"; 
\`\`\`

Instead, you must copy the string characters into the structure member array using the standard library function \`strcpy()\` from \`<string.h>\`.

> **Tip:** Array names represent the address of the first array element, which is a constant pointer. That's why they cannot be assigned direct values using \`=\` after compilation.

### Worked Example
\`\`\`c
#include <stdio.h>
#include <string.h>

struct Car {
    char brand[50];
    char model[50];
    int year;
    int speed;
};

int main() {
    struct Car myCar;
    
    // Copying strings into struct arrays
    strcpy(myCar.brand, "Tesla");
    strcpy(myCar.model, "Model S");
    myCar.year = 2023;
    myCar.speed = 250;
    
    printf("Car Brand: %s\\n", myCar.brand);
    printf("Car Model: %s\\n", myCar.model);
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
Car Brand: Tesla
Car Model: Model S
\`\`\``,
      km: `# ខ្សែអក្សរក្នុង Struct C

ដោយសារតែខ្សែអក្សរត្រូវបានតំណាងដោយអារេតួអក្សរ អ្នកមិនអាចផ្តល់តម្លៃអត្ថបទទៅឱ្យសមាជិក struct ដោយប្រើប្រាស់សញ្ញាស្មើបានឡើយ បន្ទាប់ពីវាត្រូវបានប្រកាស៖

\`\`\`c
struct Car myCar;
// កូដនេះនឹងខុសពេល Compile!
myCar.brand = "Tesla"; 
\`\`\`

ផ្ទុយទៅវិញ អ្នកត្រូវចម្លងតួអក្សរទាំងអស់ចូលទៅក្នុងអារេសមាជិកដោយប្រើអនុគមន៍ \`strcpy()\` ពីបណ្ណាល័យ \`<string.h>\`។

> **គន្លឹះ៖** ឈ្មោះរបស់អារេគឺជា Pointer ថេរតំណាងឱ្យអាសយដ្ឋានដំបូង ហេតុនេះហើយបានជាយើងមិនអាចផ្លាស់ប្តូរវាផ្ទាល់បាន។

### ឧទាហរណ៍អនុវត្ត
\`\`\`c
#include <stdio.h>
#include <string.h>

struct Car {
    char brand[50];
    char model[50];
    int year;
    int speed;
};

int main() {
    struct Car myCar;
    
    strcpy(myCar.brand, "Tesla");
    strcpy(myCar.model, "Model S");
    myCar.year = 2023;
    myCar.speed = 250;
    
    printf("Car Brand: %s\\n", myCar.brand);
    printf("Car Model: %s\\n", myCar.model);
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
Car Brand: Tesla
Car Model: Model S
\`\`\``
    },
    starterCode: `#include <stdio.h>
#include <string.h>

struct Car {
    char brand[50];
    char model[50];
    int year;
    int speed;
};

int main() {
    struct Car favorite;
    strcpy(favorite.brand, "Porsche");
    strcpy(favorite.model, "911 GT3");
    printf("My favorite car is %s %s\\n", favorite.brand, favorite.model);
    return 0;
}`
  },
  {
    id: "c-struct-copying",
    title: { en: "C Struct Copying", km: "ការចម្លង Struct C" },
    content: {
      en: `# C Struct Copying

While arrays cannot be copied directly with simple assignment operators, C allows you to copy the entire contents of a structure variable to another structure of the **same type** using the assignment operator \`=\`.

\`\`\`c
struct Car car1 = {"Toyota", "Supra", 2020, 240};
struct Car car2;
car2 = car1; // All member values are copied!
\`\`\`

The compiler performs a raw member-by-member memory copy of all structure data instantly.

> **Tip:** Modifying \`car2\` members after copying will not affect the original \`car1\` because they reside in separate stack memory allocations.

### Worked Example
\`\`\`c
#include <stdio.h>
#include <string.h>

struct Car {
    char brand[50];
    char model[50];
    int year;
    int speed;
};

int main() {
    struct Car car1 = {"Honda", "Civic", 2021, 200};
    struct Car car2;

    // Copying car1 structure values to car2
    car2 = car1;

    printf("Car 2 Details: %s %s (%d)\\n", car2.brand, car2.model, car2.year);
    
    // Proving independent values
    strcpy(car2.model, "Type R");
    printf("After modification:\\n");
    printf("Car 1 Model: %s\\n", car1.model);
    printf("Car 2 Model: %s\\n", car2.model);
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
Car 2 Details: Honda Civic (2021)
After modification:
Car 1 Model: Civic
Car 2 Model: Type R
\`\`\``,
      km: `# ការចម្លង Struct C

ទោះបីជាអារេមិនអាចចម្លងដោយផ្ទាល់ដោយប្រើសញ្ញាស្មើ (\`=\`) ក៏ដោយ ក៏ភាសា C អនុញ្ញាតឱ្យយើងចម្លងទិន្នន័យទាំងអស់ពី structure មួយទៅ structure មួយទៀតដែលមាន **ប្រភេទដូចគ្នា** ដោយប្រើសញ្ញាស្មើបានយ៉ាងងាយស្រួល។

\`\`\`c
struct Car car1 = {"Toyota", "Supra", 2020, 240};
struct Car car2;
car2 = car1; // រាល់សមាជិកទាំងអស់ត្រូវបានចម្លង!
\`\`\`

ម៉ាស៊ីនបកប្រែកូដនឹងធ្វើការចម្លងរាល់ទិន្នន័យពីសមាជិកនីមួយៗក្នុង Memory ភ្លាមៗ។

> **គន្លឹះ៖** ការកែប្រែតម្លៃរបស់ \`car2\` ក្រោយពេលចម្លង នឹងមិនប៉ះពាល់ដល់តម្លៃរបស់ \`car1\` ឡើយ ព្រោះវាស្ថិតនៅកន្លែងខុសគ្នាក្នុង Memory។

### ឧទាហរណ៍អនុវត្ត
\`\`\`c
#include <stdio.h>
#include <string.h>

struct Car {
    char brand[50];
    char model[50];
    int year;
    int speed;
};

int main() {
    struct Car car1 = {"Honda", "Civic", 2021, 200};
    struct Car car2;

    car2 = car1;

    printf("Car 2 Details: %s %s (%d)\\n", car2.brand, car2.model, car2.year);
    
    strcpy(car2.model, "Type R");
    printf("After modification:\\n");
    printf("Car 1 Model: %s\\n", car1.model);
    printf("Car 2 Model: %s\\n", car2.model);
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
Car 2 Details: Honda Civic (2021)
After modification:
Car 1 Model: Civic
Car 2 Model: Type R
\`\`\``
    },
    starterCode: `#include <stdio.h>

struct Car {
    char brand[50];
    char model[50];
    int year;
    int speed;
};

int main() {
    struct Car source = {"Ferrari", "Roma", 2022, 320};
    struct Car clone;
    clone = source;
    printf("Clone brand: %s\\n", clone.brand);
    return 0;
}`
  },
  {
    id: "c-nested-structs",
    title: { en: "C Nested Structs", km: "Struct ត្រួតគ្នា Nested Structs" },
    content: {
      en: `# C Nested Structs

In C, structures can be nested. This means a structure can contain another structure as one of its member variables.

This helps represent complex real-world database relationship concepts. For example, a \`Car\` structure can contain an \`Engine\` structure containing power details.

\`\`\`c
struct Engine {
    int horsepower;
    float displacement;
};

struct Car {
    char brand[50];
    struct Engine engine; // Nested Structure
};
\`\`\`

To access members of the nested structure, chain dot operators: \`myCar.engine.horsepower\`.

> **Tip:** Make sure to define the nested structure (\`Engine\`) *before* the outer structure (\`Car\`) in your source file so the compiler knows its layout and byte size.

### Worked Example
\`\`\`c
#include <stdio.h>

struct Engine {
    int horsepower;
    float displacement;
};

struct Car {
    char brand[50];
    struct Engine engine; // Nested Struct
};

int main() {
    struct Car sportsCar;
    
    // Accessing nested struct members
    sportsCar.engine.horsepower = 600;
    sportsCar.engine.displacement = 4.0;
    
    printf("Sports Car Engine HP: %d HP\\n", sportsCar.engine.horsepower);
    printf("Engine Displacement: %.1f Liters\\n", sportsCar.engine.displacement);
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
Sports Car Engine HP: 600 HP
Engine Displacement: 4.0 Liters
\`\`\``,
      km: `# Struct ត្រួតគ្នា Nested Structs

នៅក្នុង C structure អាចសរសេរត្រួតគ្នាបាន។ មានន័យថា structure មួយអាចផ្ទុក structure មួយទៀតជាសមាជិករបស់វា។

លំនាំនេះជួយសម្រួលដល់ការបង្ហាញគំរូទិន្នន័យជាក់ស្តែងដ៏ស្មុគស្មាញ។ ឧទាហរណ៍៖ structure \`Car\` អាចផ្ទុក structure \`Engine\` សម្រាប់បង្ហាញព័ត៌មានម៉ាស៊ីន។

\`\`\`c
struct Engine {
    int horsepower;
    float displacement;
};

struct Car {
    char brand[50];
    struct Engine engine; // Nested Structure
};
\`\`\`

ដើម្បីចូលទៅកាន់សមាជិកខាងក្នុង យើងប្រើប្រាស់សញ្ញាចុចតៗគ្នា៖ \`myCar.engine.horsepower\`។

> **គន្លឹះ៖** ត្រូវប្រាកដថាអ្នកបានសរសេរកំណត់ structure ខាងក្នុង (\`Engine\`) ឱ្យបាន *មុន* structure ខាងក្រៅ (\`Car\`)។

### ឧទាហរណ៍អនុវត្ត
\`\`\`c
#include <stdio.h>

struct Engine {
    int horsepower;
    float displacement;
};

struct Car {
    char brand[50];
    struct Engine engine; 
};

int main() {
    struct Car sportsCar;
    
    sportsCar.engine.horsepower = 600;
    sportsCar.engine.displacement = 4.0;
    
    printf("Sports Car Engine HP: %d HP\\n", sportsCar.engine.horsepower);
    printf("Engine Displacement: %.1f Liters\\n", sportsCar.engine.displacement);
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
Sports Car Engine HP: 600 HP
Engine Displacement: 4.0 Liters
\`\`\``
    },
    starterCode: `#include <stdio.h>

struct Engine {
    int cylinders;
};

struct Car {
    char model[20];
    struct Engine eng;
};

int main() {
    struct Car racingCar = {"F1-24", {8}};
    printf("Cylinders in %s: %d\\n", racingCar.model, racingCar.eng.cylinders);
    return 0;
}`
  },
  {
    id: "c-structs-in-functions",
    title: { en: "C Structs in Functions", km: "Struct ក្នុងអនុគមន៍ C" },
    content: {
      en: `# C Structs in Functions

Structures can be passed to functions as arguments just like normal variables.

- **Pass by Value:** By default, structures are passed by value. The entire struct is copied onto the stack, which can be slow for very large structures.
- **Pass by Pointer:** Passing a pointer to the structure is highly efficient because only a 4 or 8-byte memory address is copied. To access members via a struct pointer, we use the arrow operator (\`->\`) instead of the dot operator (\`.\`).

\`\`\`c
void displayCar(struct Car *cPtr) {
    printf("Brand: %s\\n", cPtr->brand); // Arrow operator
}
\`\`\`

> **Tip:** The arrow operator (\`->\`) is syntactic shorthand for pointer dereferencing and member access: \`(*cPtr).brand\`.

### Worked Example
Passing our running \`Car\` struct to functions:
\`\`\`c
#include <stdio.h>
#include <string.h>

struct Car {
    char brand[50];
    char model[50];
    int year;
    int speed;
};

// Function passing struct pointer
void printCarDetails(struct Car *c) {
    printf("Car: %s %s | Speed: %d km/h\\n", c->brand, c->model, c->speed);
}

int main() {
    struct Car myCar = {"Toyota", "Supra", 2021, 260};
    
    // Passing address of myCar
    printCarDetails(&myCar);
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
Car: Toyota Supra | Speed: 260 km/h
\`\`\``,
      km: `# Struct ក្នុងអនុគមន៍ C

Structures អាចបញ្ជូនទៅកាន់អនុគមន៍ក្នុងទម្រង់ជាប៉ារ៉ាម៉ែត្រ ដូចអថេរធម្មតាដែរ។

- **Pass by Value៖** ជាទូទៅ វានឹងចម្លងទិន្នន័យក្នុង struct ទាំងអស់ចូលទៅក្នុង Stack របស់អនុគមន៍ ដែលអាចយឺតបើសិនជា struct ធំខ្លាំង។
- **Pass by Pointer៖** បញ្ជូនអាសយដ្ឋាន (Pointer) របស់ struct ទៅឱ្យអនុគមន៍ ដែលមានប្រសិទ្ធភាពខ្ពស់ និងលឿនបំផុត។ ដើម្បីចូលទៅកាន់សមាជិកតាមរយៈ Pointer យើងត្រូវប្រើ **សញ្ញាព្រួញ (\`->\`)** ជំនួសឱ្យសញ្ញាចុច (\`.\`)។

\`\`\`c
void displayCar(struct Car *cPtr) {
    printf("Brand: %s\\n", cPtr->brand); 
}
\`\`\`

> **គន្លឹះ៖** សញ្ញាព្រួញ (\`->\`) គឺជាទម្រង់សរសេរកាត់ជំនួសឱ្យការប្រើប្រាស់ dereferencing រួមផ្សំសញ្ញាចុច៖ \`(*cPtr).brand\`។

### ឧទាហរណ៍អនុវត្ត
ការបញ្ជូន \`Car\` struct ទៅកាន់អនុគមន៍តាមរយៈ Pointer៖
\`\`\`c
#include <stdio.h>
#include <string.h>

struct Car {
    char brand[50];
    char model[50];
    int year;
    int speed;
};

void printCarDetails(struct Car *c) {
    printf("Car: %s %s | Speed: %d km/h\\n", c->brand, c->model, c->speed);
}

int main() {
    struct Car myCar = {"Toyota", "Supra", 2021, 260};
    
    printCarDetails(&myCar);
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
Car: Toyota Supra | Speed: 260 km/h
\`\`\``
    },
    starterCode: `#include <stdio.h>

struct Car {
    char brand[50];
    int speed;
};

void tuneCar(struct Car *c) {
    c->speed += 50; // Modify speed directly via pointer
}

int main() {
    struct Car myCar = {"Tesla", 200};
    tuneCar(&myCar);
    printf("New Speed: %d\\n", myCar.speed);
    return 0;
}`
  },
  {
    id: "c-array-of-structs",
    title: { en: "C Array of Structs", km: "អារេនៃ Structs C" },
    content: {
      en: `# C Array of Structs

Just like you can create arrays of integers or characters, you can create arrays of structures. This is highly useful for managing databases of records (e.g., a list of cars).

Syntax declaration:
\`\`\`c
struct Car fleet[3]; // An array of 3 Car structures
\`\`\`

You can access and assign values using both array indices and dot operators: \`fleet[0].speed = 100;\`.

> **Tip:** When iterating through an array of structures, use a standard \`for\` loop matching the size of the array.

### Worked Example
\`\`\`c
#include <stdio.h>

struct Car {
    char brand[50];
    char model[50];
    int year;
    int speed;
};

int main() {
    // Array of structures initialized at declaration
    struct Car fleet[2] = {
        {"Toyota", "Corolla", 2018, 180},
        {"Ford", "Ranger", 2022, 190}
    };

    printf("Fleet list:\\n");
    for (int i = 0; i < 2; i++) {
        printf("Car %d: %s %s (%d)\\n", i+1, fleet[i].brand, fleet[i].model, fleet[i].year);
    }
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
Fleet list:
Car 1: Toyota Corolla (2018)
Car 2: Ford Ranger (2022)
\`\`\``,
      km: `# អារេនៃ Structs C

ដូចគ្នានឹងការបង្កើតអារេអថេរទូទៅដែរ អ្នកអាចបង្កើតអារេនៃ structures បាន ដែលមានសារៈសំខាន់ខ្លាំងក្នុងការគ្រប់គ្រងបញ្ជីទិន្នន័យ (ដូចជា បញ្ជីរថយន្តជាដើម)។

វាក្យសម្ពន្ធប្រកាស៖
\`\`\`c
struct Car fleet[3]; // អារេមានផ្ទុក 3 Structures នៃប្រភេទ Car
\`\`\`

អ្នកអាចចូលទៅកាន់សមាជិកដោយប្រើ Index រួមជាមួយសញ្ញាចុច៖ \`fleet[0].speed = 100;\`។

> **គន្លឹះ៖** នៅពេលរុករកក្នុងអារេនៃ structures អ្នកត្រូវប្រើប្រាស់រង្វិលជុំ \`for\` ធម្មតាស្របទៅតាមទំហំរបស់អារេ។

### ឧទាហរណ៍អនុវត្ត
\`\`\`c
#include <stdio.h>

struct Car {
    char brand[50];
    char model[50];
    int year;
    int speed;
};

int main() {
    struct Car fleet[2] = {
        {"Toyota", "Corolla", 2018, 180},
        {"Ford", "Ranger", 2022, 190}
    };

    printf("Fleet list:\\n");
    for (int i = 0; i < 2; i++) {
        printf("Car %d: %s %s (%d)\\n", i+1, fleet[i].brand, fleet[i].model, fleet[i].year);
    }
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
Fleet list:
Car 1: Toyota Corolla (2018)
Car 2: Ford Ranger (2022)
\`\`\``
    },
    starterCode: `#include <stdio.h>

struct Car {
    char brand[20];
    int year;
};

int main() {
    struct Car inventory[2] = {{"BYD", 2023}, {"Kia", 2021}};
    printf("First car brand: %s\\n", inventory[0].brand);
    return 0;
}`
  },
  {
    id: "c-memory-address",
    title: { en: "C Memory Address", km: "អាសយដ្ឋានការចងចាំ C" },
    content: {
      en: `# C Memory Address

When a variable is created in C, a dedicated spot in the computer's system memory is allocated to store its value. This spot is represented by a physical **memory address**.

We retrieve a variable's address using the address-of operator \`&\`.

\`\`\`c
int score = 100;
printf("Address of score: %p\\n", &score);
\`\`\`

- **\`%p\`** is the format specifier used to print memory addresses in hexadecimal representation.

> **Tip:** Our running \`carSpeed\` and \`pSpeed\` pointers use this exact concept. Understanding address locations is key to mastering low-level C programming.

### Worked Example
\`\`\`c
#include <stdio.h>

int main() {
    int carSpeed = 80;
    
    printf("Value of carSpeed: %d\\n", carSpeed);
    // Print hexadecimal memory address
    printf("Memory address allocation: %p\\n", &carSpeed);
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
Value of carSpeed: 80
Memory address allocation: 0x7ffee23bc3a8 (address changes every run)
\`\`\``,
      km: `# អាសយដ្ឋានការចងចាំ C

នៅពេលអថេរមួយត្រូវបានបង្កើតឡើងក្នុងភាសា C កន្លែងផ្ទុកមួយនៅក្នុងប្រព័ន្ធ Memory របស់កុំព្យូទ័រនឹងត្រូវបានបែងចែកដើម្បីរក្សាទុកតម្លៃរបស់វា។ កន្លែងផ្ទុកនេះត្រូវបានតំណាងដោយ **អាសយដ្ឋានការចងចាំ (Memory Address)**។

យើងអាចទាញយកអាសយដ្ឋានរបស់អថេរបានដោយប្រើប្រាស់សញ្ញា \`&\`។

\`\`\`c
int score = 100;
printf("Address of score: %p\\n", &score);
\`\`\`

- **\`%p\`** គឺជា format specifier សម្រាប់បង្ហាញអាសយដ្ឋាន Memory ក្នុងទម្រង់ជាលេខគោលដប់ប្រាំមួយ (Hexadecimal)។

> **គន្លឹះ៖** អថេររថយន្ត \`carSpeed\` និងចង្អុល \`pSpeed\` ប្រើប្រាស់គោលការណ៍នេះ។ ការយល់ដឹងពីទីតាំងអាសយដ្ឋាន គឺជាសោរដ៏សំខាន់ក្នុងការស្ទាត់ជំនាញសរសេរកូដ C។

### ឧទាហរណ៍អនុវត្ត
\`\`\`c
#include <stdio.h>

int main() {
    int carSpeed = 80;
    
    printf("Value of carSpeed: %d\\n", carSpeed);
    printf("Memory address allocation: %p\\n", &carSpeed);
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
Value of carSpeed: 80
Memory address allocation: 0x7ffee23bc3a8
\`\`\``
    },
    starterCode: `#include <stdio.h>

int main() {
    char key = 'S';
    printf("Address of key is: %p\\n", &key);
    return 0;
}`
  },
  {
    id: "c-pointers-arrays",
    title: { en: "C Pointers & Arrays", km: "Pointer និង Array C" },
    content: {
      en: `# C Pointers & Arrays

In C, there is a very close relationship between pointers and arrays. In fact, **the name of an array acts as a pointer to its first element**.

\`\`\`c
int myNumbers[3] = {10, 20, 30};
// myNumbers is equivalent to &myNumbers[0]
\`\`\`

This means you can access array elements using pointer arithmetic!
- \`*myNumbers\` retrieves the first element (index 0).
- \`*(myNumbers + 1)\` retrieves the second element (index 1).
- \`*(myNumbers + 2)\` retrieves the third element (index 2).

> **Tip:** Pointer arithmetic automatically factors in the byte size of the array data type. Adding \`+1\` to an integer pointer adds 4 bytes to the actual memory address automatically.

### Worked Example
\`\`\`c
#include <stdio.h>

int main() {
    int list[3] = {50, 100, 150};
    
    printf("First element value (via index): %d\\n", list[0]);
    printf("First element value (via pointer): %d\\n", *list);
    
    printf("Second element value (via pointer arithmetic): %d\\n", *(list + 1));
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
First element value (via index): 50
First element value (via pointer): 50
Second element value (via pointer arithmetic): 100
\`\`\``,
      km: `# Pointer និង Array C

នៅក្នុងភាសា C មានទំនាក់ទំនងយ៉ាងជិតស្និទ្ធរវាង pointers និង arrays។ តាមពិតទៅ **ឈ្មោះរបស់អារេដើរតួជា pointer ចង្អុលទៅកាន់ធាតុដំបូងបង្អស់របស់វា**។

\`\`\`c
int myNumbers[3] = {10, 20, 30};
// myNumbers មានតម្លៃស្មើនឹង &myNumbers[0]
\`\`\`

នេះមានន័យថាអ្នកអាចទាញយកតម្លៃអារេដោយប្រើប្រាស់ប្រមាណវិធី Pointer Arithmetic!
- \`*myNumbers\` ទាញយកធាតុទីមួយ (index 0)។
- \`*(myNumbers + 1)\` ទាញយកធាតុទីពីរ (index 1)។

> **គន្លឹះ៖** ដំណើរការគណនាលើ Pointer នឹងបូកបន្ថែមចំនួនបៃទៅតាមប្រភេទទិន្នន័យដោយស្វ័យប្រវត្ត។ ការបូក \`+1\` លើ integer pointer នឹងបន្ថែម ៤ បៃទៅលើអាសយដ្ឋានពិតប្រាកដ។

### ឧទាហរណ៍អនុវត្ត
\`\`\`c
#include <stdio.h>

int main() {
    int list[3] = {50, 100, 150};
    
    printf("First element value (via index): %d\\n", list[0]);
    printf("First element value (via pointer): %d\\n", *list);
    
    printf("Second element value (via pointer arithmetic): %d\\n", *(list + 1));
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
First element value (via index): 50
First element value (via pointer): 50
Second element value (via pointer arithmetic): 100
\`\`\``
    },
    starterCode: `#include <stdio.h>

int main() {
    double values[2] = {1.5, 3.5};
    printf("Element 0: %.1f, Element 1: %.1f\\n", *values, *(values + 1));
    return 0;
}`
  },
  {
    id: "c-malloc",
    title: { en: "C malloc", km: "ការបែងចែក Memory malloc C" },
    content: {
      en: `# C malloc

So far, we have allocated memory on the stack (at compile-time). **Dynamic Memory Allocation** allows programs to request and allocate memory blocks during program execution (at runtime) on the **Heap**.

The \`malloc()\` (Memory Allocation) function is part of \`<stdlib.h>\`. It requests a specified block of bytes from system memory and returns a generic pointer (\`void*\`) pointing to the start of that allocated block.

\`\`\`c
struct Car *myCar = (struct Car*) malloc(sizeof(struct Car));
\`\`\`

Always verify if the returned pointer is \`NULL\`, which occurs if the operating system runs out of heap memory.

> **Tip:** Since \`malloc()\` returns an uninitialized block of memory, the allocated block will contain random "garbage" values until you explicitly assign values to it.

### Worked Example
Carrying our running \`Car\` struct through heap memory allocation with \`malloc\`:
\`\`\`c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Car {
    char brand[50];
    char model[50];
    int year;
    int speed;
};

int main() {
    // Allocating Car struct dynamically on the Heap
    struct Car *myCar = (struct Car*) malloc(sizeof(struct Car));
    
    if (myCar == NULL) {
        printf("Failed to allocate heap memory!\\n");
        return 1;
    }
    
    // Assigning values using Arrow operator
    strcpy(myCar->brand, "Toyota");
    strcpy(myCar->model, "Supra");
    myCar->year = 2021;
    myCar->speed = 280;
    
    printf("Dynamically Allocated Car: %s %s\\n", myCar->brand, myCar->model);
    
    // Clean up memory
    free(myCar);
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
Dynamically Allocated Car: Toyota Supra
\`\`\``,
      km: `# ការបែងចែក Memory malloc C

កន្លងមក យើងធ្លាប់បែងចែកការចងចាំនៅលើ Stack (ពេល Compile)។ **ការបែងចែកការចងចាំបែបឌីណាមិក (Dynamic Memory Allocation)** អនុញ្ញាតឱ្យកម្មវិធីស្នើសុំប្លុកផ្ទុកទិន្នន័យពី **Heap** ក្នុងពេលកំពុងដំណើរការកម្មវិធី (Runtime)។

អនុគមន៍ \`malloc()\` (បណ្ណាល័យ \`<stdlib.h>\`) ប្រើសម្រាប់ស្នើសុំទំហំបៃជាក់លាក់ និងប្រគល់ត្រឡប់មកវិញជា Pointer (\`void*\`) ចង្អុលទៅកាន់ប្លុកនោះ។

\`\`\`c
struct Car *myCar = (struct Car*) malloc(sizeof(struct Car));
\`\`\`

ត្រូវតែផ្ទៀងផ្ទាត់ជានិច្ចថាតើ Pointer ជា \`NULL\` ឬទេ (មានន័យថាកុំព្យូទ័រអស់ Memory សម្រាប់ចែកឱ្យ)។

> **គន្លឹះ៖** ដោយសារ \`malloc()\` មិនកំណត់តម្លៃដំបូងឱ្យទីតាំងដែលសុំបាននោះទេ ប្លុក Memory នោះនឹងមានផ្ទុក "ទិន្នន័យសម្រាម" (Garbage Values) រហូតដល់អ្នកផ្តល់តម្លៃឱ្យវា។

### ឧទាហរណ៍អនុវត្ត
ការប្រើប្រាស់ \`Car\` struct ជាមួយការ allocation លើ Heap៖
\`\`\`c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Car {
    char brand[50];
    char model[50];
    int year;
    int speed;
};

int main() {
    struct Car *myCar = (struct Car*) malloc(sizeof(struct Car));
    
    if (myCar == NULL) {
        printf("Failed to allocate heap memory!\\n");
        return 1;
    }
    
    strcpy(myCar->brand, "Toyota");
    strcpy(myCar->model, "Supra");
    myCar->year = 2021;
    myCar->speed = 280;
    
    printf("Dynamically Allocated Car: %s %s\\n", myCar->brand, myCar->model);
    
    free(myCar);
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
Dynamically Allocated Car: Toyota Supra
\`\`\``
    },
    starterCode: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int *p = (int*) malloc(sizeof(int));
    if (p == NULL) return 1;
    *p = 42;
    printf("Value: %d\\n", *p);
    free(p);
    return 0;
}`
  },
  {
    id: "c-calloc",
    title: { en: "C calloc", km: "ការបែងចែក Memory calloc C" },
    content: {
      en: `# C calloc

The \`calloc()\` (Contiguous Allocation) function is another way to request heap memory, designed primarily to allocate multiple elements of equal size (like an array).

Unlike \`malloc()\`, \`calloc()\` takes two arguments:
1. The number of elements to allocate.
2. The byte size of each element.

\`\`\`c
int *arr = (int*) calloc(5, sizeof(int));
\`\`\`

> **Tip:** \`calloc()\` automatically initializes all allocated memory bytes to **zero** (\`0\`). This adds a minor execution time cost compared to \`malloc()\` but completely prevents unpredictable garbage value bugs!

### Worked Example
\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int numElements = 3;
    
    // Allocate memory for 3 integers, initialized to 0
    int *list = (int*) calloc(numElements, sizeof(int));
    
    if (list == NULL) {
        printf("Memory allocation failed!\\n");
        return 1;
    }
    
    printf("Values inside calloc-allocated array:\\n");
    for (int i = 0; i < numElements; i++) {
        // Values will be exactly 0
        printf("Index %d: %d\\n", i, list[i]);
    }
    
    free(list);
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
Values inside calloc-allocated array:
Index 0: 0
Index 1: 0
Index 2: 0
\`\`\``,
      km: `# ការបែងចែក Memory calloc C

អនុគមន៍ \`calloc()\` (Contiguous Allocation) គឺជាវិធីមួយផ្សេងទៀតក្នុងការសុំទំហំផ្ទុកពី Heap ដែលរចនាឡើងសម្រាប់សុំទិន្នន័យជាប្រភេទអារេ (Array) ដែលមានធាតុទំហំប៉ុនៗគ្នា។

ខុសពី \`malloc()\` អនុគមន៍ \`calloc()\` ត្រូវការប៉ារ៉ាម៉ែត្រពីរ៖
1. ចំនួនធាតុដែលចង់បាន។
2. ទំហំបៃនៃធាតុនីមួយៗ។

\`\`\`c
int *arr = (int*) calloc(5, sizeof(int));
\`\`\`

> **គន្លឹះ៖** \`calloc()\` កំណត់តម្លៃក្នុង Memory ទាំងអស់ឱ្យទៅជា **សូន្យ (0)** ដោយស្វ័យប្រវត្ត។ ទោះបីវាចំណាយពេលលឿនជាង malloc បន្តិចក៏ដោយ តែវាជួយការពារមិនឱ្យមានកំហុស Garbage Values។

### ឧទហរណ៍អនុវត្ត
\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int numElements = 3;
    
    int *list = (int*) calloc(numElements, sizeof(int));
    
    if (list == NULL) {
        printf("Memory allocation failed!\\n");
        return 1;
    }
    
    printf("Values inside calloc-allocated array:\\n");
    for (int i = 0; i < numElements; i++) {
        printf("Index %d: %d\\n", i, list[i]);
    }
    
    free(list);
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
Values inside calloc-allocated array:
Index 0: 0
Index 1: 0
Index 2: 0
\`\`\``
    },
    starterCode: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int *grades = (int*) calloc(4, sizeof(int));
    if (grades == NULL) return 1;
    printf("calloc initialized grade 0: %d\\n", grades[0]);
    free(grades);
    return 0;
}`
  },
  {
    id: "c-realloc",
    title: { en: "C realloc", km: "ការប្តូរទំហំ Memory realloc C" },
    content: {
      en: `# C realloc

The \`realloc()\` (Re-allocation) function lets you dynamically change (resize) the memory size of a previously allocated heap pointer block.

If you have allocated an array of 5 integers, but find you need to store 10 integers instead, you can increase its size without manually destroying it:

\`\`\`c
int *ptr = malloc(5 * sizeof(int));
ptr = realloc(ptr, 10 * sizeof(int));
\`\`\`

> **Tip:** \`realloc()\` will try to expand the existing block if adjacent memory is free. If not, it automatically copies all your previous data to a completely new heap location, frees the old location, and returns the new address pointer.

### Worked Example
\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int main() {
    // Initially allocate for 2 integers
    int *numbers = malloc(2 * sizeof(int));
    numbers[0] = 100;
    numbers[1] = 200;
    
    // Resize array block to hold 4 integers dynamically
    int *newNumbers = realloc(numbers, 4 * sizeof(int));
    
    if (newNumbers == NULL) {
        printf("Reallocation failed!\\n");
        free(numbers);
        return 1;
    }
    
    numbers = newNumbers; // Update ptr reference
    numbers[2] = 300;
    numbers[3] = 400;
    
    printf("Resized Array List values:\\n");
    for (int i = 0; i < 4; i++) {
        printf("Value %d: %d\\n", i, numbers[i]);
    }
    
    free(numbers);
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
Resized Array List values:
Value 0: 100
Value 1: 200
Value 2: 300
Value 3: 400
\`\`\``,
      km: `# ការប្តូរទំហំ Memory realloc C

អនុគមន៍ \`realloc()\` (Re-allocation) ប្រើសម្រាប់ផ្លាស់ប្តូរទំហំរបស់ប្លុក Memory ដែលបានបែងចែករួចពីមុនមកឱ្យតូចជាង ឬធំជាងមុន។

ឧទាហរណ៍៖ បើសិនជាអ្នកធ្លាប់សុំទំហំសម្រាប់ផ្ទុកលេខចំនួន ៥ តែក្រោយមកត្រូវការពង្រីកដល់ ១០ អ្នកអាចប្រើ realloc ដើម្បីផ្លាស់ប្តូរបាន៖

\`\`\`c
int *ptr = malloc(5 * sizeof(int));
ptr = realloc(ptr, 10 * sizeof(int));
\`\`\`

> **គន្លឹះ៖** \`realloc()\` នឹងព្យាយាមពង្រីកប្លុកចាស់ បើសិនជាមានកន្លែងទំនេរនៅក្បែរនោះ។ បើគ្មានទេ វានឹងចម្លងទិន្នន័យចាស់ទាំងអស់ទៅកាន់ប្លុកថ្មីលំហធំជាង ដោយស្វ័យប្រវត្ត រួចលុបប្លុកចាស់ចោល។

### ឧទាហរណ៍អនុវត្ត
\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int *numbers = malloc(2 * sizeof(int));
    numbers[0] = 100;
    numbers[1] = 200;
    
    int *newNumbers = realloc(numbers, 4 * sizeof(int));
    
    if (newNumbers == NULL) {
        printf("Reallocation failed!\\n");
        free(numbers);
        return 1;
    }
    
    numbers = newNumbers; 
    numbers[2] = 300;
    numbers[3] = 400;
    
    printf("Resized Array List values:\\n");
    for (int i = 0; i < 4; i++) {
        printf("Value %d: %d\\n", i, numbers[i]);
    }
    
    free(numbers);
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
Resized Array List values:
Value 0: 100
Value 1: 200
Value 2: 300
Value 3: 400
\`\`\``
    },
    starterCode: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int *arr = malloc(sizeof(int));
    *arr = 7;
    arr = realloc(arr, 2 * sizeof(int));
    *(arr + 1) = 14;
    printf("Values: %d, %d\\n", arr[0], arr[1]);
    free(arr);
    return 0;
}`
  },
  {
    id: "c-free",
    title: { en: "C free", km: "ការដោះលែង Memory free C" },
    content: {
      en: `# C free

Because C does not have automatic Garbage Collection, memory allocated dynamically on the heap remains occupied until the program ends or you explicitly deallocate it using **\`free()\`**.

\`\`\`c
free(ptr);
\`\`\`

Failing to free heap memory causes a **Memory Leak**. Over time, memory leaks consume all available system RAM, slow down the operating system, or cause programs to crash.

> **Tip:** Once you call \`free(ptr)\`, the pointer becomes a "dangling pointer" because it still points to the freed address location. It is a highly recommended safety habit to set the pointer to \`NULL\` right after freeing: \`ptr = NULL;\`.

### Worked Example
Carrying our running dynamic \`Car\` struct and freeing its heap memory:
\`\`\`c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Car {
    char brand[50];
    int speed;
};

int main() {
    // Allocate
    struct Car *myCar = (struct Car*) malloc(sizeof(struct Car));
    
    if (myCar == NULL) return 1;
    
    strcpy(myCar->brand, "Ferrari");
    myCar->speed = 340;
    
    printf("Active Ferrari in heap: %d km/h\\n", myCar->speed);
    
    // Deallocate / Free the heap memory safely
    free(myCar);
    myCar = NULL; // Prevent dangling pointer
    
    printf("Memory freed successfully!\\n");
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
Active Ferrari in heap: 340 km/h
Memory freed successfully!
\`\`\``,
      km: `# ការដោះលែង Memory free C

ដោយសារភាសា C មិនមានប្រព័ន្ធសម្អាតការចងចាំដោយស្វ័យប្រវត្ត (Garbage Collector) នោះទេ រាល់ Memory ដែលបានបែងចែកឌីណាមិកនៅលើ Heap នឹងបន្តកកស្ទះរហូតដល់អ្នកដោះលែងវាដោយដៃដោយប្រើ **\`free()\`**។

\`\`\`c
free(ptr);
\`\`\`

ការភ្លេចដោះលែងការចងចាំនឹងបង្កឱ្យមានបញ្ហា **Memory Leak**។ បញ្ហានេះនឹងស៊ី RAM ម៉ាស៊ីនបន្តិចម្តងៗរហូតដល់អស់ ដែលនាំឱ្យប្រព័ន្ធកុំព្យូទ័រគាំង ឬយឺតខ្លាំង។

> **គន្លឹះ៖** ក្រោយពេលហៅ \`free(ptr)\` រួច វានឹងក្លាយជា "Dangling Pointer" ព្រោះវានៅតែចង្អុលទៅទីតាំងចាស់ដែលគ្មានទិន្នន័យ។ ទម្លាប់សុវត្ថិភាពល្អបំផុតគឺត្រូវកំណត់វាទៅជា \`NULL\`៖ \`ptr = NULL;\`។

### ឧទាហរណ៍អនុវត្ត
ការដោះលែងរចនាសម្ព័ន្ធ \`Car\` ពី Heap៖
\`\`\`c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Car {
    char brand[50];
    int speed;
};

int main() {
    struct Car *myCar = (struct Car*) malloc(sizeof(struct Car));
    
    if (myCar == NULL) return 1;
    
    strcpy(myCar->brand, "Ferrari");
    myCar->speed = 340;
    
    printf("Active Ferrari in heap: %d km/h\\n", myCar->speed);
    
    free(myCar);
    myCar = NULL; 
    
    printf("Memory freed successfully!\\n");
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
Active Ferrari in heap: 340 km/h
Memory freed successfully!
\`\`\``
    },
    starterCode: `#include <stdio.h>
#include <stdlib.h>

int main() {
    double *temp = malloc(sizeof(double));
    if (temp == NULL) return 1;
    *temp = 36.6;
    printf("Temp: %.1f\\n", *temp);
    free(temp);
    temp = NULL;
    return 0;
}`
  }
];
