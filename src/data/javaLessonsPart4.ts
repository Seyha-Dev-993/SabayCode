import { Lesson } from '../types';

export const javaLessonsPart4: Lesson[] = [
  {
    id: "java-exceptions",
    title: {
      en: "Java Exceptions (Try...Catch)",
      km: "ការគ្រប់គ្រងកំហុស (Try...Catch)"
    },
    content: {
      en: `### Handling Runtime Errors
When executing Java code, different errors can occur: coding errors made by the programmer, errors due to wrong input, or other unforeseeable things.

When an error occurs, Java will normally stop and generate an error message. The technical term for this is: Java will **throw an exception**.

### Syntax: try-catch-finally
We use the \`try\` block to test code, \`catch\` to handle any exceptions, and \`finally\` to execute code regardless of the result:

\`\`\`java
try {
    // Code to try
} catch (Exception e) {
    // Code to handle errors
} finally {
    // Code that always executes
}
\`\`\``,
      km: `### ការគ្រប់គ្រងកំហុសក្នុងពេលដំណើរការ
នៅពេលដំណើរការកូដ Java កំហុសផ្សេងៗអាចកើតឡើង៖ កំហុសសរសេរកូដដោយអ្នកសរសេរកម្មវិធី ការវាយបញ្ចូលខុសរបស់ជនបង្គោល ឬស្ថានភាពក្រៅការរំពឹងទុក។

នៅពេលកំហុសកើតឡើង Java នឹងបញ្ឈប់រត់កូដភ្លាមៗ និងបង្កើតសារកំហុសមួយ។ បច្ចេកសព្ទហៅថា៖ Java បោះចេញនូវករណីលើកលែង (**throw an exception**)។

### ទម្រង់សរសេរ៖ try-catch-finally
យើងប្រើប្លុក \`try\` សម្រាប់សាកល្បងកូដ ប្លុក \`catch\` សម្រាប់ចម្លើយតបនឹងកំហុស និងប្លុក \`finally\` សម្រាប់រត់កូដជានិច្ច ទោះបីជាមានកំហុសឬអត់៖

\`\`\`java
try {
    // កូដសម្រាប់សាកល្បង
} catch (Exception e) {
    // កូដសម្រាប់ដោះស្រាយនៅពេលមានកំហុស
} finally {
    // កូដដែលដំណើរការជានិច្ច
}
\`\`\``
    },
    starterCode: `public class Main {
    public static void main(String[] args) {
        System.out.println("Beginning execution...");
        
        try {
            int[] numbers = {1, 2, 3};
            // Array has index 0, 1, 2. Index 10 does not exist!
            System.out.println(numbers[10]); 
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Exception caught: Array index was out of bounds!");
            System.out.println("Error details: " + e.getMessage());
        } finally {
            System.out.println("The 'finally' block always executes for cleanup.");
        }
        
        System.out.println("Application recovered and continued running successfully!");
    }
}`
  },
  {
    id: "java-regex",
    title: {
      en: "Java RegEx",
      km: "កន្សោមស្វែងរក (RegEx)"
    },
    content: {
      en: `### Regular Expressions in Java
A **Regular Expression** (RegEx) is a sequence of characters that forms a search pattern. When you search for data in text, you can use this search pattern to describe what you are looking for.

### Java Built-in Regex Classes:
Import \`java.util.regex\` to use these classes:
1. **\`Pattern\` Class:** Defines a pattern (to be used in a search).
2. **\`Matcher\` Class:** Used to search for the pattern.
3. **\`PatternSyntaxException\` Class:** Indicates syntax errors in a regular expression pattern.`,
      km: `### កន្សោមស្វែងរកក្នុង Java (RegEx)
**Regular Expression** (ហៅកាត់ថា RegEx) គឺជាលំនាំតួអក្សរដែលបង្កើតឡើងសម្រាប់ការស្វែងរក។ វាមានប្រយោជន៍ខ្លាំងក្នុងការផ្ទៀងផ្ទាត់អ៊ីមែល លេខទូរស័ព្ទ ឬកាត់អត្ថបទស្មុគស្មាញ។

### ថ្នាក់ RegEx ស្រាប់ៗរបស់ Java៖
នាំចូលកញ្ចប់ \`java.util.regex\` ដើម្បីប្រើប្រាស់ថ្នាក់ទាំងនេះ៖
1. **\`Pattern\` Class:** កំណត់លំនាំស្វែងរក។
2. **\`Matcher\` Class:** ប្រើសម្រាប់រុករកស្វែងរកលំនាំ។
3. **\`PatternSyntaxException\` Class:** បង្ហាញកំហុសវេយ្យាករណ៍ RegEx។`
    },
    starterCode: `import java.util.regex.Matcher;
    import java.util.regex.Pattern;

public class Main {
    public static void main(String[] args) {
        // Find pattern "cambodia" ignoring case
        Pattern pattern = Pattern.compile("cambodia", Pattern.CASE_INSENSITIVE);
        Matcher matcher = pattern.matcher("Welcome to beautiful Cambodia!");
        
        boolean matchFound = matcher.find();
        if (matchFound) {
            System.out.println("Pattern Match Found!");
        } else {
            System.out.println("Match Not Found.");
        }
    }
}`
  },
  {
    id: "java-thread",
    title: {
      en: "Java Threads",
      km: "ខ្សែស្រឡាយរត់កូដ (Threads)"
    },
    content: {
      en: `### Concurrency with Threads
Threads allow a program to operate more efficiently by doing multiple tasks at the exact same time (concurrency).

### Two Ways to Create a Thread:
1. **Extend \`Thread\` Class:** Override its \`run()\` method. Start the thread by calling \`start()\`.
2. **Implement \`Runnable\` Interface:** Pass the instance to a \`Thread\` object constructor.

### Thread Control:
You can make a thread pause using the static \`Thread.sleep(milliseconds)\` method.`,
      km: `### ការរត់កូដស្របគ្នាជាមួយ Threads
Threads (ខ្សែស្រឡាយដំណើរការ) អនុញ្ញាតឱ្យកម្មវិធីដំណើរការលឿន និងមានប្រសិទ្ធភាពជាងមុន ដោយធ្វើការងារច្រើនក្នុងពេលតែមួយ (ស្របគ្នា)។

### វិធីបង្កើត Thread ចំនួនពីរ៖
1. **Extend ថ្នាក់ \`Thread\`:** សរសេរឡើងវិញនូវវិធីសាស្ត្រ \`run()\` រួចចាប់ផ្តើមវាដោយហៅ \`start()\`។
2. **Implement \`Runnable\` interface:** បញ្ជូនវត្ថុនោះទៅកាន់ Constructor របស់ \`Thread\`។

### ការគ្រប់គ្រង Thread៖
អ្នកអាចឱ្យ Thread ណាមួយផ្អាកដំណើរការបណ្តោះអាសន្នដោយប្រើ \`Thread.sleep(milliseconds)\`។`
    },
    starterCode: `// 1. Implementing Runnable for thread definition
class Worker implements Runnable {
    public void run() {
        try {
            System.out.println("Thread-1 starting active task...");
            Thread.sleep(1000); // Wait 1 second
            System.out.println("Thread-1 completed work successfully!");
        } catch (InterruptedException e) {
            System.out.println("Thread execution was interrupted!");
        }
    }
}

public class Main {
    public static void main(String[] args) {
        System.out.println("Main Thread starts.");
        
        // 2. Creating and running thread
        Thread thread = new Thread(new Worker());
        thread.start();
        
        System.out.println("Main Thread runs concurrently without waiting for Thread-1!");
    }
}`
  },
  {
    id: "java-compare",
    title: {
      en: "Java Compare (Comparable/Comparator)",
      km: "ការប្រៀបធៀបវត្ថុក្នុង Java"
    },
    content: {
      en: `### Sorting Objects Customly
By default, Java knows how to sort primitive types. But how do we sort a list of custom objects (like sorting a list of \`Car\` objects by their manufacturing year)?

### Two Core Interfaces:
1. **\`Comparable\` Interface:** Allows a class to define its natural sorting order by implementing \`compareTo(Object)\`.
2. **\`Comparator\` Interface:** Used to define custom sorting behaviors outside the target class by implementing \`compare(Object A, Object B)\`.`,
      km: `### ការតម្រៀបលំដាប់វត្ថុ (Sorting)
ជាទូទៅ Java ស្គាល់របៀបតម្រៀបលំដាប់លេខ ឬតួអក្សរ។ ប៉ុន្តែតើធ្វើដូចម្តេចដើម្បីតម្រៀបបញ្ជីនៃវត្ថុផ្ទាល់ខ្លួន (ដូចជាតម្រៀបបញ្ជី \`Car\` តាមឆ្នាំផលិត)?

### ចំណុចប្រទាក់ចម្បងពីរ៖
1. **\`Comparable\` Interface:** អនុញ្ញាតឱ្យថ្នាក់កំណត់លំដាប់តម្រៀបធម្មជាតិរបស់វា ដោយអនុវត្តវិធីសាស្ត្រ \`compareTo()\`។
2. **\`Comparator\` Interface:** ប្រើដើម្បីបង្កើតវិធីសាស្ត្រតម្រៀបចម្រុះជាច្រើនលក្ខខណ្ឌនៅខាងក្រៅថ្នាក់ ដោយអនុវត្ត \`compare()\`។`
    },
    starterCode: `import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

class Car {
    String model;
    int year;

    Car(String model, int year) {
        this.model = model;
        this.year = year;
    }
}

public class Main {
    public static void main(String[] args) {
        ArrayList<Car> cars = new ArrayList<>();
        cars.add(new Car("Prius", 2022));
        cars.add(new Car("Mustang", 1969));
        cars.add(new Car("Tesla", 2024));
        
        // Sorting cars by manufacturing year using Comparator lambda!
        Collections.sort(cars, (c1, c2) -> Integer.compare(c1.year, c2.year));
        
        System.out.println("Cars Sorted by Year (Oldest First):");
        for (Car c : cars) {
            System.out.println(c.year + " - " + c.model);
        }
    }
}`
  },
  {
    id: "java-lambda",
    title: {
      en: "Java Lambda Expressions",
      km: "កន្សោមឡាំដា (Lambda)"
    },
    content: {
      en: `### Writing Shorter, Cleaner Code
**Lambda Expressions** were introduced in Java 8. A lambda expression is a short block of code which takes in parameters and returns a value.

Lambda expressions are similar to methods, but they do not need a name and they can be implemented right in the body of a method.

### Syntax:
\`\`\`java
(parameter1, parameter2) -> { code block }
\`\`\`

They are commonly used to implement functional interfaces or pass code behaviors as parameters!`,
      km: `### ការសរសេរកូដខ្លី និងស្អាតជាមួយ Lambda
**Lambda Expressions** ត្រូវបានណែនាំក្នុង Java 8។ វាជាប្លុកកូដខ្លីដែលទទួលប៉ារ៉ាម៉ែត្រ និងបញ្ជូនតម្លៃត្រឡប់មកវិញភ្លាមៗ។

វាស្រដៀងនឹងអនុគមន៍ដែរ ប៉ុន្តែមិនត្រូវការឈ្មោះឡើយ ហើយអាចសរសេរបានភ្លាមៗក្នុងប្លុកកូដតែម្តង។

### ទម្រង់សរសេរ៖
\`\`\`java
(parameter1, parameter2) -> { ប្លុកកូដ }
\`\`\`

វាត្រូវបានប្រើប្រាស់ជាញឹកញាប់ដើម្បីអនុវត្ត Functional interfaces ឬបញ្ជូនសកម្មភាពកូដជាប៉ារ៉ាម៉ែត្រ!`
    },
    starterCode: `import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<Integer> numbers = new ArrayList<>();
        numbers.add(5);
        numbers.add(9);
        numbers.add(8);
        
        // Using Lambda to iterate and print each item (shorter!)
        System.out.println("Printing items using Lambda:");
        numbers.forEach((n) -> System.out.println("Value: " + n));
    }
}`
  },
  {
    id: "java-files",
    title: {
      en: "Java Files API",
      km: "ឯកសាររបស់ Java (Files)"
    },
    content: {
      en: `### File Handling in Java
File handling is an important part of any application. Java has a \`File\` class from the \`java.io\` package that allows us to work with files.

### Key File Methods:
- \`canRead()\`: Checks whether the file is readable.
- \`canWrite()\`: Checks whether the file is writable.
- \`createNewFile()\`: Creates an empty file.
- \`delete()\`: Deletes a file.
- \`exists()\`: Checks if the file exists.
- \`getName()\`: Returns the file's name.
- \`getAbsolutePath()\`: Returns the absolute path of the file.
- \`length()\`: Returns the file's size in bytes.

> **Environment Note:** Since you are compiling code inside our isolated, secure browser-connected sandbox container, you can perform real file operations safely in the current working directory!`,
      km: `### ការគ្រប់គ្រងឯកសារក្នុង Java
ការគ្រប់គ្រងឯកសារគឺជាផ្នែកមួយដ៏សំខាន់នៃកម្មវិធីណាក៏ដោយ។ Java មានថ្នាក់ \`File\` ពីកញ្ចប់ \`java.io\` ដែលអនុញ្ញាតឱ្យយើងធ្វើការជាមួយឯកសារ។

### វិធីសាស្ត្រសំខាន់ៗ៖
- \`canRead()\`: ពិនិត្យថាតើឯកសារអាចអានបានឬទេ។
- \`canWrite()\`: ពិនិត្យថាតើឯកសារអាចសរសេរបានឬទេ។
- \`createNewFile()\`: បង្កើតឯកសារទទេថ្មី។
- \`delete()\`: លុបឯកសារចោល។
- \`exists()\`: ពិនិត្យថាតើឯកសារមានពិតឬទេ។
- \`getName()\`: ផ្តល់ឈ្មោះឯកសារ។
- \`getAbsolutePath()\`: ផ្តល់អាសយដ្ឋានពេញលេញរបស់ឯកសារ។
- \`length()\`: ផ្តល់ទំហំឯកសារគិតជាបៃ។

> **ចំណាំបរិស្ថាន:** ដោយសារអ្នកកំពុងដំណើរការកូដនៅក្នុងកុងតឺន័រដាច់ដោយឡែក និងមានសុវត្ថិភាពរបស់យើង អ្នកអាចសាកល្បងលុប/បង្កើតឯកសារពិតៗនៅក្នុងថតបច្ចុប្បន្នបានយ៉ាងមានសុវត្ថិភាព!`
    },
    starterCode: `import java.io.File;

public class Main {
    public static void main(String[] args) {
        System.out.println("=== Safe Simulated File Sandbox ===");
        File file = new File("sandbox_info.txt");
        
        System.out.println("Checking file properties:");
        System.out.println("File exists? " + file.exists());
        System.out.println("File Name: " + file.getName());
    }
}`
  },
  {
    id: "java-create-write-files",
    title: {
      en: "Java Create & Write Files",
      km: "ការបង្កើត និងសរសេរឯកសារ"
    },
    content: {
      en: `### Creating and Writing Files
To create a file in Java, you can use the \`createNewFile()\` method of the \`File\` class.

To write text into a file, we can use the \`FileWriter\` class.

> **Rule:** When working with files, always wrap code in a \`try-catch\` block to catch \`IOException\` errors that can occur during stream operations. Also, make sure to **close()** your writers to release memory buffers!`,
      km: `### ការបង្កើត និងសរសេរអត្ថបទចូលឯកសារ
ដើម្បីបង្កើតឯកសារថ្មីក្នុង Java យើងប្រើវិធីសាស្ត្រ \`createNewFile()\` របស់ថ្នាក់ \`File\`។

ដើម្បីសរសេរអត្ថបទបញ្ចូលទៅក្នុងឯកសារ យើងប្រើថ្នាក់ \`FileWriter\`។

> **គោលការណ៍:** នៅពេលធ្វើការជាមួយឯកសារ ត្រូវសរសេរកូដនៅក្នុងប្លុក \`try-catch\` ជានិច្ច ដើម្បីចាប់កំហុស \`IOException\`។ លើសពីនេះ ត្រូវចងចាំហៅ \`close()\` នៅពេលសរសេរចប់ដើម្បីបញ្ចេញមេម៉ូរី buffer!`
    },
    starterCode: `import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        String filename = "sandbox_output.txt";
        
        try {
            // 1. Create file
            File file = new File(filename);
            if (file.createNewFile()) {
                System.out.println("File successfully created: " + file.getName());
            } else {
                System.out.println("File already exists, overwriting text...");
            }
            
            // 2. Write content
            FileWriter writer = new FileWriter(filename);
            writer.write("Hello from the Java File Writing Sandbox!\\n");
            writer.write("This file is running safely inside a secure Docker container.\\n");
            writer.close(); // Save and release buffer!
            
            System.out.println("Successfully wrote lines to: " + filename);
            System.out.println("File absolute path: " + file.getAbsolutePath());
        } catch (IOException e) {
            System.out.println("An I/O error occurred: " + e.getMessage());
        }
    }
}`
  },
  {
    id: "java-read-files",
    title: {
      en: "Java Read Files",
      km: "ការអានទិន្នន័យពីឯកសារ"
    },
    content: {
      en: `### Reading File Contents
To read text from a file, we can use the \`Scanner\` class from the \`java.util\` package.

Instead of reading inputs from the keyboard console (\`System.in\`), we pass the \`File\` object reference to the \`Scanner\` constructor.

### Line-by-Line Reading:
Using a \`while\` loop with \`scanner.hasNextLine()\`, we can pull every line of text sequentially.`,
      km: `### ការអានទិន្នន័យពីឯកសារ
ដើម្បីអានអត្ថបទចេញពីឯកសារ យើងអាចប្រើប្រាស់ថ្នាក់ \`Scanner\` មកពីកញ្ចប់ \`java.util\`។

ជំនួសឱ្យការទទួលទិន្នន័យពីក្តារចុច (\`System.in\`) យើងគ្រាន់តែបញ្ជូនអថេរ \`File\` ទៅកាន់ Constructor របស់ \`Scanner\`។

### ការអានម្តងមួយបន្ទាត់៖
ដោយប្រើប្រាស់រង្វិលជុំ \`while\` ជាមួយ \`scanner.hasNextLine()\` យើងអាចទាញយកអត្ថបទគ្រប់បន្ទាត់តាមលំដាប់លំដោយ។`
    },
    starterCode: `import java.io.File;
import java.io.FileWriter;
import java.io.Scanner;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        String filename = "read_sandbox.txt";
        
        try {
            // Setup: Create file and seed some lines first
            FileWriter writer = new FileWriter(filename);
            writer.write("First line of record.\\nSecond line of record.\\n");
            writer.close();
            
            // 1. Loading the file
            File file = new File(filename);
            Scanner reader = new Scanner(file);
            
            System.out.println("Reading contents of file:");
            // 2. Looping through lines
            while (reader.hasNextLine()) {
                String data = reader.nextLine();
                System.out.println("> " + data);
            }
            reader.close(); // Clean up!
            
        } catch (IOException e) {
            System.out.println("An error occurred: " + e.getMessage());
        }
    }
}`
  },
  {
    id: "java-delete-files",
    title: {
      en: "Java Delete Files",
      km: "ការលុបឯកសារចោល"
    },
    content: {
      en: `### Deleting Files programmatically
To delete a file in Java, use the \`.delete()\` method of the \`File\` class.

### Key Points:
- The \`delete()\` method returns a boolean: \`true\` if the file was deleted successfully, and \`false\` if it failed (or didn't exist).
- You can also delete a folder using the same method, but the **folder must be empty** before deleting.`,
      km: `### ការលុបឯកសារដោយប្រើកូដ
ដើម្បីលុបឯកសារចោលនៅក្នុង Java យើងប្រើវិធីសាស្ត្រ \`.delete()\` របស់ថ្នាក់ \`File\`។

### ចំណុចសំខាន់ៗ៖
- វិធីសាស្ត្រ \`delete()\` ផ្តល់តម្លៃត្រឡប់មកវិញជា boolean៖ \`true\` បើលុបបានជោគជ័យ និង \`false\` បើបរាជ័យ (ឬគ្មានឯកសារនោះ)។
- អ្នកក៏អាចលុបថត (Folder) តាមវិធីនេះបានដែរ ប៉ុន្តែ **Folder ត្រូវតែទទេ** ទើបអាចលុបបាន។`
    },
    starterCode: `import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        String filename = "delete_target.txt";
        
        try {
            // Setup: Create the file first
            File file = new File(filename);
            if (file.createNewFile()) {
                System.out.println("File created: " + file.getName());
            }
            
            // Verifying existence
            System.out.println("Does file exist now? " + file.exists());
            
            // 1. Deleting file
            if (file.delete()) {
                System.out.println("File successfully deleted programmatically!");
            } else {
                System.out.println("Failed to delete the file.");
            }
            
            System.out.println("Does file exist after deletion? " + file.exists());
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`
  },
  {
    id: "java-working-directory",
    title: {
      en: "Java Working Directory",
      km: "ស្វែងរកទីតាំងថតការងារ"
    },
    content: {
      en: `### Working Directory Paths
When working with files, paths can be:
1. **Relative Paths:** Relative to the current working directory (e.g. \`data.txt\`).
2. **Absolute Paths:** Full directory locations (e.g. \`/usr/src/app/data.txt\` on Linux, or \`C:\\\\Users\\\\Dara\\\\data.txt\` on Windows).

To find where your program is executing, you can fetch the \`user.dir\` property from the JVM environment.

> **Interactive Warning:** Remember, paths differ on various platforms. In our cloud container, paths follow Unix-based directories!`,
      km: `### ថតដំណើរការកូដ (Working Directory)
នៅពេលអាន/សរសេរឯកសារ អាសយដ្ឋានផ្លូវ (Paths) អាចជា៖
1. **Relative Paths (ផ្លូវធៀប):** ធៀបនឹងទីតាំងកំពុងដំណើរការបច្ចុប្បន្ន (ឧ. \`data.txt\`)។
2. **Absolute Paths (ផ្លូវពេញ):** ទីតាំងពេញលេញក្នុងកុំព្យូទ័រ (ឧ. \`/usr/src/app/data.txt\` លើ Linux ឬ \`C:\\\\Users\\\\Dara\\\\data.txt\` លើ Windows)។

ដើម្បីស្វែងរកថតការងារកំពុងដំណើរការកម្មវិធីរបស់អ្នក អ្នកអាចទាញយកលក្ខណៈ \`user.dir\` ពីប្រព័ន្ធ JVM។

> **ចំណាំ៖** ផ្លូវឯកសារមានភាពខុសគ្នាផ្អែកលើប្រព័ន្ធប្រតិបត្តិការ។ នៅក្នុង Cloud Container របស់យើង អាសយដ្ឋានផ្លូវអនុវត្តតាមប្រព័ន្ធដំណើរការ Linux/Unix!`
    },
    starterCode: `public class Main {
    public static void main(String[] args) {
        // Fetching system directory paths
        String currentDir = System.getProperty("user.dir");
        String os = System.getProperty("os.name");
        
        System.out.println("=== Working Directory Information ===");
        System.out.println("Operating System: " + os);
        System.out.println("Current Working Directory (Relative Root):");
        System.out.println("> " + currentDir);
    }
}`
  },
  {
    id: "java-file-output-stream",
    title: {
      en: "Java FileOutputStream",
      km: "ថ្នាក់ FileOutputStream"
    },
    content: {
      en: `### Storing Binary Data
In Java, **I/O Streams** are used to read and write bytes. This is different from Readers/Writers which are used for character data (text).

### FileOutputStream:
\`FileOutputStream\` is a byte stream class used to write raw bytes of binary data (such as images, music, or plain bytes) to a file.

### Key Methods:
- \`write(byte[] b)\`: Writes bytes to the file.
- \`write(int b)\`: Writes a single byte.
- \`close()\`: Closes the stream.`,
      km: `### ការរក្សាទុកទិន្នន័យជាបៃ (Binary Data)
នៅក្នុង Java **I/O Streams** ត្រូវបានប្រើប្រាស់សម្រាប់អាន និងសរសេរទិន្នន័យជាលំដាប់បៃ (Bytes)។ នេះខុសគ្នាពី Readers/Writers ដែលប្រើសម្រាប់ការអាន/សរសេរតួអក្សរ (Text)។

### ថ្នាក់ FileOutputStream៖
\`FileOutputStream\` គឺជាថ្នាក់ Byte Stream សម្រាប់សរសេរទិន្នន័យបៃឆៅ (ដូចជារូបភាព ចម្រៀង ឬកូដបៃ) ចូលទៅក្នុងឯកសារ។

### វិធីសាស្ត្រសំខាន់ៗ៖
- \`write(byte[] b)\`: សរសេរកញ្ចប់បៃទៅក្នុងឯកសារ។
- \`write(int b)\`: សរសេរបៃតែមួយ។
- \`close()\`: បិទស្ទ្រីមទិន្នន័យ។`
    },
    starterCode: `import java.io.FileOutputStream;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        String filename = "byte_sandbox.bin";
        
        try {
            // 1. Initializing Byte Output Stream
            FileOutputStream fos = new FileOutputStream(filename);
            
            String message = "Byte-level Stream Write!";
            byte[] rawBytes = message.getBytes(); // Convert text to raw bytes
            
            // 2. Writing raw bytes
            fos.write(rawBytes);
            fos.close(); // Flush and close!
            
            System.out.println("Successfully wrote binary bytes to " + filename);
        } catch (IOException e) {
            System.out.println("An I/O error occurred: " + e.getMessage());
        }
    }
}`
  },
  {
    id: "java-file-input-stream",
    title: {
      en: "Java FileInputStream",
      km: "ថ្នាក់ FileInputStream"
    },
    content: {
      en: `### Reading Binary Bytes
\`FileInputStream\` is a byte stream class used to read raw binary bytes from a file.

### How it works:
You read bytes one-by-one or in arrays until the end of the file is reached. The \`read()\` method returns \`-1\` when there are no more bytes to read.

Always close the input stream to release the file handle from system resources!`,
      km: `### ការអានទិន្នន័យបៃ (Binary)
\`FileInputStream\` គឺជាថ្នាក់ Byte Stream សម្រាប់អានទិន្នន័យបៃឆៅចេញពីឯកសារ។

### របៀបដំណើរការ៖
អ្នកអានទិន្នន័យម្តងមួយបៃ ឬអានជាកញ្ចប់ រហូតដល់អានអស់ពីឯកសារ។ វិធីសាស្ត្រ \`read()\` នឹងផ្តល់តម្លៃ \`-1\` នៅពេលគ្មានទិន្នន័យបៃអានបន្តទៀតឡើយ។

ត្រូវចងចាំបិទស្ទ្រីមជានិច្ច ដើម្បីបញ្ចេញធនធានប្រព័ន្ធមកវិញ!`
    },
    starterCode: `import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        String filename = "byte_demo.dat";
        
        try {
            // Setup: Write a few bytes first (ASCII codes for H, E, L, L, O)
            FileOutputStream fos = new FileOutputStream(filename);
            byte[] values = {72, 69, 76, 76, 79}; // "HELLO"
            fos.write(values);
            fos.close();
            
            // 1. Initializing Byte Input Stream
            FileInputStream fis = new FileInputStream(filename);
            
            System.out.println("Reading binary bytes as characters:");
            int data;
            // 2. Reading until -1
            while ((data = fis.read()) != -1) {
                System.out.print((char) data); // Cast byte integer back to character
            }
            System.out.println(); // newline
            fis.close();
            
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`
  },
  {
    id: "java-buffered-output-stream",
    title: {
      en: "Java BufferedOutputStream",
      km: "ថ្នាក់ BufferedOutputStream"
    },
    content: {
      en: `### Speeding up I/O with Buffering
Writing bytes one-by-one to disk is slow because each write triggers disk interaction.

**\`BufferedOutputStream\`** wraps around a standard \`FileOutputStream\` and buffers the written bytes in memory (usually 8KB). When the buffer is full, it writes all bytes to disk in a single operation, drastically improving performance!

### Key Method:
- \`flush()\`: Manually forces any remaining buffered bytes to write immediately to disk.`,
      km: `### បង្កើនល្បឿន I/O ជាមួយ Buffering
ការសរសេរបៃម្តងមួយទៅកាន់ឌីសផ្ទុកទិន្នន័យគឺយឺតខ្លាំង ព្រោះរាល់ការសរសេរត្រូវទាមទារសកម្មភាពរបស់ឌីស។

**\`BufferedOutputStream\`** ស្រោបពីលើ \`FileOutputStream\` ធម្មតា និងរក្សាទុកបៃបណ្តោះអាសន្នក្នុងមេម៉ូរី (ជាទូទៅទំហំ 8KB)។ នៅពេលមេម៉ូរីបណ្តោះអាសន្នពេញ វានឹងសរសេរទិន្នន័យទាំងអស់ទៅកាន់ឌីសក្នុងពេលតែមួយ ដែលជួយបង្កើនល្បឿនយ៉ាងលឿនបំផុត!

### វិធីសាស្ត្រសំខាន់៖
- \`flush()\`: បង្ខំឱ្យទិន្នន័យក្នុង buffer សរសេរទៅកាន់ឌីសភ្លាមៗដោយមិនបាច់រង់ចាំ buffer ពេញ។`
    },
    starterCode: `import java.io.BufferedOutputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        String filename = "buffered_out.bin";
        
        try {
            FileOutputStream fos = new FileOutputStream(filename);
            // Wrapping FileOutputStream in BufferedOutputStream
            BufferedOutputStream bos = new BufferedOutputStream(fos);
            
            String text = "High-performance buffered write operations.";
            bos.write(text.getBytes());
            
            bos.flush(); // Force write buffer contents to file
            bos.close(); // Also closes underlying fos
            
            System.out.println("Successfully wrote data using BufferedOutputStream!");
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`
  },
  {
    id: "java-buffered-input-stream",
    title: {
      en: "Java BufferedInputStream",
      km: "ថ្នាក់ BufferedInputStream"
    },
    content: {
      en: `### High-Performance Reading
Similarly to output buffering, **\`BufferedInputStream\`** wraps a standard \`FileInputStream\` to read blocks of bytes from disk into a memory buffer. Subsequent read operations pull directly from fast memory rather than disk!

This pattern is highly recommended for scanning large files or reading data streams over networks.`,
      km: `### ការអានល្បឿនលឿនជាមួយ Buffer
ស្រដៀងគ្នានឹង Buffered Output ដែរ ថ្នាក់ **\`BufferedInputStream\`** ស្រោបពីលើ \`FileInputStream\` ធម្មតា ដើម្បីអានប្លុកទិន្នន័យបៃពីឌីសទុកក្នុងមេម៉ូរីបណ្តោះអាសន្នជាមុន។ ការអានបន្តបន្ទាប់នឹងទាញយកពីមេម៉ូរីដោយផ្ទាល់ ជៀសវាងការអានពីឌីសញឹកញាប់!

រូបមន្តនេះត្រូវបានគេណែនាំឱ្យប្រើប្រាស់ជានិច្ចសម្រាប់ស្កេនឯកសារធំៗ ឬអានទិន្នន័យពីបណ្តាញអ៊ីនធឺណិត។`
    },
    starterCode: `import java.io.BufferedInputStream;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        String filename = "buffered_in.dat";
        
        try {
            // Setup: Write some data
            FileOutputStream fos = new FileOutputStream(filename);
            fos.write("Buffered Reading Demo.".getBytes());
            fos.close();
            
            // 1. Wrap FileInputStream in BufferedInputStream
            FileInputStream fis = new FileInputStream(filename);
            BufferedInputStream bis = new BufferedInputStream(fis);
            
            System.out.println("Buffered reading output:");
            int data;
            while ((data = bis.read()) != -1) {
                System.out.print((char) data);
            }
            System.out.println();
            bis.close(); // Closes underlying streams
            
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`
  },
  {
    id: "java-file-writer-reader",
    title: {
      en: "Java FileWriter & FileReader",
      km: "ថ្នាក់ FileWriter និង FileReader"
    },
    content: {
      en: `### Character-Based I/O Streams
For text files, Java provides character-oriented streams:

- **\`FileWriter\`:** Used to write text characters directly to files.
- **\`FileReader\`:** Used to read characters from files.

These classes are designed for handling 16-bit Unicode characters, making them ideal for writing and reading human-readable text logs (and multi-language text contents like English/Khmer!).`,
      km: `### ស្ទ្រីមអាន/សរសេរតួអក្សរ (Character Stream)
សម្រាប់ឯកសារអត្ថបទ (Text files) Java ផ្តល់ជូននូវថ្នាក់ដែលមានឯកទេសលើតួអក្សរ៖

- **\`FileWriter\`:** ប្រើសម្រាប់សរសេរតួអក្សរដោយផ្ទាល់ទៅកាន់ឯកសារ។
- **\`FileReader\`:** ប្រើសម្រាប់អានតួអក្សរចេញពីឯកសារ។

ថ្នាក់ទាំងនេះត្រូវបានរចនាឡើងដើម្បីគ្រប់គ្រងតួអក្សរ Unicode ១៦ប៊ីត ដែលធ្វើឱ្យពួកវាជាជម្រើសល្អបំផុតសម្រាប់ការអាន/សរសេរអត្ថបទភាសាខ្មែរ និងអង់គ្លេស!`
    },
    starterCode: `import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        String filename = "unicode_test.txt";
        
        try {
            // 1. Writing character text
            FileWriter writer = new FileWriter(filename);
            writer.write("សួស្តីភាសា Java! Hello Unicode!");
            writer.close();
            
            // 2. Reading character text
            FileReader reader = new FileReader(filename);
            System.out.println("Reading characters from Unicode file:");
            int ch;
            while ((ch = reader.read()) != -1) {
                System.out.print((char) ch);
            }
            System.out.println();
            reader.close();
            
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`
  }
];
