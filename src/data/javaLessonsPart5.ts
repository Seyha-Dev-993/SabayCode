import { Lesson } from '../types';

export const javaLessonsPart5: Lesson[] = [
  {
    id: "java-collections-comparison",
    title: {
      en: "Java Collections Comparison",
      km: "ការប្រៀបធៀបស្ទ្រីម Collections"
    },
    content: {
      en: `### The Collections Framework Overview
Before we dive deeper into specific data structures, let's look at how Java organizes collections.

### Comparative Table: List vs Set vs Map

| Feature | **List** (e.g. ArrayList) | **Set** (e.g. HashSet) | **Map** (e.g. HashMap) |
| :--- | :--- | :--- | :--- |
| **Duplicates** | Allows duplicates | strictly forbids duplicates | Keys must be unique, values can duplicate |
| **Ordering** | Maintains insertion order | Unordered (by default) | Unordered (by default) |
| **Access** | Via index integer (e.g., \`list.get(0)\`) | Requires iteration/search | Via unique keys (e.g., \`map.get(key)\`) |
| **Common Use** | Maintaining ordered sequences | Checking membership / removing duplicates | Looking up entities by unique identifiers |

> **Summary:** Use a **List** if you need a sequence of items, a **Set** if you need uniqueness, and a **Map** if you want to pair identifiers with objects.`,
      km: `### ទិដ្ឋភាពទូទៅនៃ Collections Framework
មុនពេលយើងស្វែងយល់លម្អិតអំពីទិន្នន័យនីមួយៗ តោះមើលរបៀបដែល Java រៀបចំប្រព័ន្ធ Collections។

### តារាងប្រៀបធៀប៖ List vs Set vs Map

| លក្ខណៈសម្បត្តិ | **List** (ឧ. ArrayList) | **Set** (ឧ. HashSet) | **Map** (ឧ. HashMap) |
| :--- | :--- | :--- | :--- |
| **ធាតុស្ទួន** | អនុញ្ញាតឱ្យស្ទួនតម្លៃ | ហាមឃាត់ការស្ទួនដាច់ខាត | Key ត្រូវតែប្លែកគ្នា, Value អាចស្ទួនបាន |
| **លំដាប់លំដោយ** | រក្សាលំដាប់តាមការបញ្ចូល | គ្មានលំដាប់លំដោយ (លំនាំដើម) | គ្មានលំដាប់លំដោយ (លំនាំដើម) |
| **ការទាញយកធាតុ** | តាមរយៈលេខលំដាប់ (ឧ. \`get(0)\`) | ទាមទារការរត់កាត់ស្វែងរក | តាមរយៈកូនសោប្លែកគ្នា (ឧ. \`get(key)\`) |
| **ការប្រើប្រាស់ទូទៅ** | រក្សាទុកបញ្ជីរាយនាមតម្រៀបជួរ | ឆែកមើលវត្តមានសមាជិក/ទប់ទិន្នន័យស្ទួន | ស្វែងរកព័ត៌មានដោយប្រើកូនសោសម្គាល់ |

> **សង្ខេប៖** ជ្រើសរើស **List** បើចង់បានបញ្ជីលំដាប់លំដោយ, ជ្រើសរើស **Set** បើចង់បានភាពប្លែកគ្នានៃធាតុ, និងជ្រើសរើស **Map** បើចង់ផ្គូផ្គងលេខសម្គាល់ជាមួយវត្ថុទិន្នន័យ។`
    },
    starterCode: `public class Main {
    public static void main(String[] args) {
        System.out.println("Collection Framework Table Analyzed!");
    }
}`
  },
  {
    id: "java-iterator",
    title: {
      en: "Java Iterator",
      km: "ថ្នាក់បង្វិល Iterator"
    },
    content: {
      en: `### Scanning Collections Safely
An **\`Iterator\`** is an object that can be used to loop through collections, such as \`ArrayList\` or \`HashSet\`. It is found in the \`java.util\` package.

### Why use an Iterator instead of a For-Each loop?
Using an Iterator allows you to **remove items** from the collection safely while looping. If you try to remove elements from a collection during a standard \`for\` loop, Java will throw a \`ConcurrentModificationException\`!

### Key Methods:
- \`hasNext()\`: Returns true if there is a next element.
- \`next()\`: Returns the next element.
- \`remove()\`: Removes the current element from the collection.`,
      km: `### ការរត់កាត់ទិន្នន័យជាមួយ Iterator
**\`Iterator\`** គឺជាវត្ថុពិសេសសម្រាប់រត់កាត់ និងស្កេនធាតុនានានៅក្នុង Collections ដូចជា \`ArrayList\` ឬ \`HashSet\`។

### ហេតុអ្វីត្រូវប្រើ Iterator ជំនួសឱ្យ For-Each loop?
ការប្រើប្រាស់ Iterator ផ្តល់លទ្ធភាពឱ្យអ្នក **លុបធាតុ** ចេញពី Collection បានយ៉ាងមានសុវត្ថិភាពក្នុងពេលកំពុងរត់រង្វិលជុំ។ ប្រសិនបើអ្នកព្យាយាមលុបធាតុដោយប្រើរង្វិលជុំ \`for\` ធម្មតា Java នឹងបោះកំហុស \`ConcurrentModificationException\` គាំងកម្មវិធីភ្លាម!

### វិធីសាស្ត្រសំខាន់ៗ៖
- \`hasNext()\`: ផ្តល់តម្លៃ true បើមានធាតុបន្ទាប់ទៀត។
- \`next()\`: ផ្តល់នូវធាតុបន្ទាប់។
- \`remove()\`: លុបធាតុបច្ចុប្បន្នចេញពី Collection។`
    },
    starterCode: `import java.util.ArrayList;
import java.util.Iterator;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> cars = new ArrayList<>();
        cars.add("Volvo");
        cars.add("Tesla");
        cars.add("Ford");
        
        // 1. Get the iterator
        Iterator<String> it = cars.iterator();
        
        System.out.println("Filtering list using Iterator:");
        // 2. Loop through collection
        while (it.hasNext()) {
            String car = it.next();
            if (car.equals("Tesla")) {
                it.remove(); // Safe deletion while looping!
                System.out.println("Removed: " + car);
            }
        }
        
        System.out.println("Remaining Fleet: " + cars);
    }
}`
  },
  {
    id: "java-value-reference-types",
    title: {
      en: "Java Value Type vs Reference Type",
      km: "ប្រភេទតម្លៃ VS ប្រភេទទាក់ទង"
    },
    content: {
      en: `### Memory Allocation in Java
Java splits variables into two categories based on how they store data in memory:

1. **Value Types (Primitive Types):** Store actual values directly on the **Stack** memory. Assigning one primitive to another copies the actual value.
2. **Reference Types (Objects):** Store memory addresses (references) on the Stack, pointing to the actual object data allocated on the **Heap** memory. Assigning one reference to another copies the address, meaning both variables point to the exact same object in memory!`,
      km: `### ការបែងចែកមេម៉ូរីក្នុង Java
Java បែងចែកអថេរជាពីរក្រុមធំៗ ផ្អែកលើរបៀបដែលពួកវារក្សាទុកទិន្នន័យក្នុងមេម៉ូរី៖

1. **Value Types (Primitive Types):** រក្សាទុកតម្លៃពិតដោយផ្ទាល់នៅក្នុងមេម៉ូរី **Stack**។ ការចម្លងអថេរនឹងចម្លងតម្លៃពិត។
2. **Reference Types (Objects):** រក្សាទុកអាសយដ្ឋានចង្អុល (References) ក្នុង Stack ដែលចង្អុលទៅកាន់ទិន្នន័យវត្ថុពិតប្រាកដនៅលើមេម៉ូរី **Heap**។ ការចម្លងនឹងចម្លងតែអាសយដ្ឋានចង្អុលប៉ុណ្ណោះ មានន័យថាអថេរទាំងពីរនឹងបន្តចង្អុលទៅកាន់វត្ថុតែមួយក្នុងពេលតែមួយ!`
    },
    starterCode: `class Number {
    int value;
    Number(int val) { this.value = val; }
}

public class Main {
    public static void main(String[] args) {
        // 1. Primitive Value Type Example
        int a = 10;
        int b = a; // Value is copied
        b = 20;
        System.out.println("Value Type: a=" + a + ", b=" + b); // 'a' stays 10
        
        // 2. Reference Type Example
        Number num1 = new Number(10);
        Number num2 = num1; // Address is copied! Both point to the same object.
        num2.value = 99;
        
        System.out.println("Reference Type: num1.value=" + num1.value + ", num2.value=" + num2.value); // num1 changes to 99!
    }
}`
  },
  {
    id: "java-wrapper-classes",
    title: {
      en: "Java Wrapper Classes",
      km: "ថ្នាក់ស្រោប Wrapper"
    },
    content: {
      en: `### Object Equivalents of Primitives
Java collections (like \`ArrayList\`, \`HashMap\`) can only store **Objects**, not primitive types (\`int\`, \`double\`, etc.).

To solve this, Java provides **Wrapper Classes** which "wrap" primitive values into corresponding object structures.

### Reference Table:
- \`int\` -> \`Integer\`
- \`double\` -> \`Double\`
- \`char\` -> \`Character\`
- \`boolean\` -> \`Boolean\`

### Autoboxing & Unboxing:
- **Autoboxing:** Automatic conversion of primitive type to its wrapper object.
- **Unboxing:** Automatic conversion of wrapper object back to its primitive value.`,
      km: `### ថ្នាក់ស្រោបសម្រាប់ប្រភេទទិន្នន័យមូលដ្ឋាន
ប្រព័ន្ធ Collections របស់ Java (ដូចជា \`ArrayList\`, \`HashMap\`) អាចផ្ទុកបានតែ **Objects** (វត្ថុ) ប៉ុណ្ណោះ មិនអាចផ្ទុក Primitive types (\`int\`, \`double\`, ផ្សេងៗ) បានឡើយ។

ដើម្បីដោះស្រាយបញ្ហានេះ Java ផ្តល់ជូននូវ **Wrapper Classes** ដែលស្រោបប្រភេទមូលដ្ឋានទាំងនោះឱ្យទៅជាវត្ថុ។

### តារាងយោង៖
- \`int\` -> \`Integer\`
- \`double\` -> \`Double\`
- \`char\` -> \`Character\`
- \`boolean\` -> \`Boolean\`

### Autoboxing & Unboxing៖
- **Autoboxing:** ការបំលែងដោយស្វ័យប្រវត្តពីប្រភេទមូលដ្ឋានទៅជាវត្ថុស្រោប។
- **Unboxing:** ការបំលែងដោយស្វ័យប្រវត្តពីវត្ថុស្រោបត្រឡប់មកជាប្រភេទមូលដ្ឋានវិញ។`
    },
    starterCode: `import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        // Autoboxing: int primitive 25 is automatically converted to Integer object
        Integer myInt = 25; 
        
        // Unboxing: Integer object is automatically converted to primitive int
        int primitive = myInt; 
        
        System.out.println("Wrapper object value: " + myInt);
        System.out.println("Primitive value: " + primitive);
        
        // Wrapper classes provide useful helper methods!
        String numberString = "500";
        int parsed = Integer.parseInt(numberString); // Parses string into real integer
        System.out.println("Parsed value + 100 = " + (parsed + 100));
    }
}`
  },
  {
    id: "java-stack",
    title: {
      en: "Java Stack",
      km: "ទិន្នន័យគរ Stack"
    },
    content: {
      en: `### LIFO: Last In, First Out
A **\`Stack\`** is a linear data structure that models a "pile" of items. It follows the **LIFO (Last In, First Out)** principle: the last item added to the stack is the first one to be removed.

### Core Stack Operations:
- **\`push(item)\`:** Pushes an item onto the top of the stack.
- **\`pop()\`:** Removes and returns the object at the top of the stack.
- **\`peek()\`:** Returns the object at the top of the stack without removing it.
- **\`empty()\`:** Checks if the stack is empty.`,
      km: `### ទិន្នន័យគរ Stack (LIFO)
**\`Stack\`** គឺជាទម្រង់រៀបចំទិន្នន័យលីនេអ៊ែរដែលតំណាងឱ្យ "គំនរ" ធាតុ។ វាអនុវត្តតាមគោលការណ៍ **LIFO (Last In, First Out)**៖ ធាតុដែលចូលចុងក្រោយគេ នឹងត្រូវយកចេញមុនគេបង្អស់។

### ប្រតិបត្តិការចម្បង៖
- **\`push(item)\`:** បញ្ចូលធាតុថ្មីទៅលើកំពូលគំនរ Stack។
- **\`pop()\`:** ដកយកធាតុនៅលើកំពូលគំនរចេញ និងផ្តល់តម្លៃរបស់វាត្រឡប់មកវិញ។
- **\`peek()\`:** មើលធាតុនៅលើកំពូលគំនរដំបូងគេ ដោយមិនលុបវាចេញឡើយ។
- **\`empty()\`:** ពិនិត្យថាតើ Stack ទទេឬទេ។`
    },
    starterCode: `import java.util.Stack;

public class Main {
    public static void main(String[] args) {
        Stack<String> backHistory = new Stack<>();
        
        // 1. Pushing pages
        backHistory.push("Home Page");
        backHistory.push("Course Catalog");
        backHistory.push("Java Basics Lesson");
        
        System.out.println("Current Stack: " + backHistory);
        System.out.println("Top item (peek): " + backHistory.peek());
        
        // 2. Popping page (going back)
        String popped = backHistory.pop();
        System.out.println("User pressed Back. Popped: " + popped);
        System.out.println("New top item after pop: " + backHistory.peek());
        System.out.println("Remaining Stack: " + backHistory);
    }
}`
  },
  {
    id: "java-queue",
    title: {
      en: "Java Queue",
      km: "ទិន្នន័យជួរ Queue"
    },
    content: {
      en: `### FIFO: First In, First Out
A **\`Queue\`** models a standard checkout line of items. It follows the **FIFO (First In, First Out)** principle: the first item added is the first one to be processed and removed.

### Declaring a Queue:
Since \`Queue\` is an **interface** in Java, we cannot instantiate it directly. We usually instantiate it using the \`LinkedList\` class which implements the \`Queue\` interface.

### Core Operations:
- **\`add()\` / \`offer()\`:** Inserts an item at the tail.
- **\`poll()\`:** Removes and returns the item at the head of the queue. Returns null if empty.
- **\`peek()\`:** Inspects the head element without removing it.`,
      km: `### ទិន្នន័យជួរ Queue (FIFO)
**\`Queue\`** គឺជាទម្រង់រៀបចំទិន្នន័យជួរដែលតំណាងឱ្យជួរតម្រង់ជួរតម្រៀបគ្នា។ វាអនុវត្តតាមគោលការណ៍ **FIFO (First In, First Out)**៖ ធាតុដែលចូលមុនគេ នឹងត្រូវដោះស្រាយ និងយកចេញមុនគេបង្អស់។

### ការប្រកាសប្រើប្រាស់៖
ដោយសារ \`Queue\` គឺជា **Interface** (ចំណុចប្រទាក់) នៅក្នុង Java យើងមិនអាចបង្កើតវាដោយផ្ទាល់បានទេ។ ជាទូទៅ យើងបង្កើតវាដោយប្រើថ្នាក់ \`LinkedList\` ដែលបានអនុវត្តការងារពី \`Queue\` Interface ស្រាប់។

### ប្រតិបត្តិការចម្បង៖
- **\`offer(item)\`:** បញ្ចូលធាតុថ្មីទៅខាងចុងជួរ។
- **\`poll()\`:** ដកយកធាតុនៅខាងមុខគេចេញពីជួរ និងបង្ហាញតម្លៃ។ ផ្តល់តម្លៃ null បើគ្មានធាតុក្នុងជួរ។
- **\`peek()\`:** មើលធាតុនៅក្បាលជួរដំបូងគេ ដោយមិនលុបចេញឡើយ។`
    },
    starterCode: `import java.util.LinkedList;
import java.util.Queue;

public class Main {
    public static void main(String[] args) {
        Queue<String> printerQueue = new LinkedList<>();
        
        // 1. Offering print jobs to the line
        printerQueue.offer("Final_Report.pdf");
        printerQueue.offer("Resume_Draft.docx");
        printerQueue.offer("Invoice_091.pdf");
        
        System.out.println("Jobs in Printer Line: " + printerQueue);
        
        // 2. Processing printer jobs in order (FIFO)
        while (!printerQueue.isEmpty()) {
            String activeJob = printerQueue.poll();
            System.out.println("Printing active file: " + activeJob);
        }
        
        System.out.println("Queue completed! Size: " + printerQueue.size());
    }
}`
  },
  {
    id: "java-deque",
    title: {
      en: "Java Deque",
      km: "ទិន្នន័យ Deque"
    },
    content: {
      en: `### Double-Ended Queue
A **\`Deque\`** (pronounced "deck", short for "Double-Ended Queue") is a linear collection that supports element insertion and removal at **both ends**.

Because of this versatility, it can be used as both a **FIFO Queue** and a **LIFO Stack**!

### Key Methods:
- \`addFirst(e)\` / \`addLast(e)\`: Inserts at head / tail.
- \`removeFirst()\` / \`removeLast()\`: Removes from head / tail.
- \`peekFirst()\` / \`peekLast()\`: Inspects head / tail.`,
      km: `### ជួរពីរទិសដៅ Deque
**\`Deque\`** (អានថា "ដេក" មកពីពាក្យ Double-Ended Queue) គឺជាការចងក្រងទិន្នន័យដែលគាំទ្រការបន្ថែម និងលុបធាតុចេញពី **ទាំងសងខាង** (ទាំងខាងក្បាល និងខាងកន្ទុយ)។

ដោយសារតែភាពបត់បែនខ្ពស់នេះ Deque អាចប្រើប្រាស់ដើរតួជាទាំង **Queue (FIFO)** ផង និងជា **Stack (LIFO)** ផង!

### វិធីសាស្ត្រសំខាន់ៗ៖
- \`addFirst(e)\` / \`addLast(e)\`: បញ្ចូលធាតុទៅខាងក្បាល / ខាងកន្ទុយ។
- \`removeFirst()\` / \`removeLast()\`: លុបធាតុពីខាងក្បាល / ខាងកន្ទុយ។
- \`peekFirst()\` / \`peekLast()\`: មើលធាតុខាងក្បាល / ខាងកន្ទុយ។`
    },
    starterCode: `import java.util.ArrayDeque;
import java.util.Deque;

public class Main {
    public static void main(String[] args) {
        Deque<String> deck = new ArrayDeque<>();
        
        // Using Deque to insert at both ends
        deck.addLast("Normal Task A");
        deck.addLast("Normal Task B");
        deck.addFirst("SUPER URGENT TASK!"); // Insert at head
        
        System.out.println("Active Deck: " + deck);
        
        // Servicing tasks
        System.out.println("Processing: " + deck.removeFirst());
        System.out.println("Processing: " + deck.removeFirst());
    }
}`
  },
  {
    id: "java-priority-queue",
    title: {
      en: "Java PriorityQueue",
      km: "ជួរអាទិភាព PriorityQueue"
    },
    content: {
      en: `### Priority-Based Processing
A standard Queue operates on "first-come, first-served" basis. However, in a **\`PriorityQueue\`**, elements are ordered according to their **natural ordering** or by a custom \`Comparator\` provided at construction time.

The element with the **lowest value** (or highest priority according to comparator) is always positioned at the head of the queue!

This is extremely powerful for implementing process schedulers or pathfinding algorithms like Dijkstra!`,
      km: `### ការដោះស្រាយផ្អែកលើអាទិភាព (PriorityQueue)
ជាទូទៅ Queue ធម្មតាដំណើរការតាមលំដាប់លំដោយ "មកមុន ដោះស្រាយមុន"។ ប៉ុន្តែនៅក្នុង **\`PriorityQueue\`** ធាតុទាំងឡាយត្រូវបានតម្រៀបតាម **តម្លៃអាទិភាពរបស់វា** (តូចបំផុត ឬធំបំផុត)។

ធាតុដែលមានតម្លៃតូចបំផុត (ឬមានអាទិភាពខ្ពស់បំផុតតាមលក្ខខណ្ឌ Comparator) នឹងត្រូវស្ថិតនៅលើក្បាលជួរដើម្បីដោះស្រាយមុនគេជានិច្ច!

វាមានសារៈសំខាន់ខ្លាំងណាស់សម្រាប់ការសរសេរប្រព័ន្ធគ្រប់គ្រងការងារម៉ាស៊ីន (Process schedulers) ឬកូដស្វែងរកផ្លូវលឿនបំផុត (Dijkstra algorithm)។`
    },
    starterCode: `import java.util.PriorityQueue;

public class Main {
    public static void main(String[] args) {
        // PriorityQueue of Integers (Natural order: smallest number comes first!)
        PriorityQueue<Integer> numbers = new PriorityQueue<>();
        
        numbers.add(80);
        numbers.add(10);
        numbers.add(50);
        numbers.add(5);
        
        System.out.println("Processing elements by priority:");
        while (!numbers.isEmpty()) {
            // poll() always returns the smallest element available
            System.out.println("Processed: " + numbers.poll());
        }
    }
}`
  },
  {
    id: "java-vector",
    title: {
      en: "Java Vector",
      km: "ថ្នាក់ Vector"
    },
    content: {
      en: `### Thread-Safe Dynamic Arrays
The **\`Vector\`** class implements a growable array of objects. It is very similar to \`ArrayList\`, but with one major architectural difference:

**\`Vector\` is synchronized (thread-safe).**

### Comparison:
- **ArrayList:** Not synchronized. Faster and preferred for single-threaded applications.
- **Vector:** Synchronized. Every operation is thread-safe, meaning multiple threads can edit it concurrently without data corruption. However, this synchronization adds a massive overhead, making it slower.`,
      km: `### អារេធានាសុវត្ថិភាព Thread (Vector)
ថ្នាក់ **\`Vector\`** ក៏ជាអារេដែលអាចពង្រីកទំហំបានដូចជា \`ArrayList\` ដែរ។ ប៉ុន្តែវាមានចំណុចខុសគ្នាតែមួយគត់ក្នុងការរៀបចំរចនាសម្ព័ន្ធ៖

**\`Vector\` គឺត្រូវបានធ្វើសមកាលកម្ម (Synchronized - ធានាសុវត្ថិភាព Thread)។**

### ការប្រៀបធៀប៖
- **ArrayList:** មិនសមកាលកម្ម។ រត់លឿនជាង និងជាជម្រើសល្អបំផុតសម្រាប់កម្មវិធីដំណើរការលក្ខណៈ Thread ទោល។
- **Vector:** សមកាលកម្ម។ រាល់សកម្មភាពទាំងអស់ធានាសុវត្ថិភាពខ្ពស់ទោះបីជាមាន Threads ច្រើនកែប្រែវាក្នុងពេលតែមួយ។ ប៉ុន្តែវាធ្វើឱ្យល្បឿនរត់យឺតជាង ArrayList។`
    },
    starterCode: `import java.util.Vector;

public class Main {
    public static void main(String[] args) {
        Vector<String> threadSafeFleet = new Vector<>();
        
        threadSafeFleet.add("Toyota");
        threadSafeFleet.add("Tesla");
        
        System.out.println("Vector size: " + threadSafeFleet.size());
        System.out.println("Item at index 1: " + threadSafeFleet.get(1));
    }
}`
  },
  {
    id: "java-treemap-treeset",
    title: {
      en: "Java TreeMap & TreeSet",
      km: "ថ្នាក់ TreeMap និង TreeSet"
    },
    content: {
      en: `### Sorted Sets and Maps
By default, \`HashSet\` and \`HashMap\` do not guarantee any specific order. If you need your keys or set elements to remain **automatically sorted**, Java provides:

1. **\`TreeSet\`:** Implements \`Set\` and keeps all unique elements sorted in natural ascending order.
2. **\`TreeMap\`:** Implements \`Map\` and keeps all entries sorted by their keys' natural order.

Under the hood, both structures utilize a self-balancing **Red-Black Tree** structure!`,
      km: `### សំណុំ និងផែនទីតម្រៀបលំដាប់ស្វ័យប្រវត្ត
ជាទូទៅ \`HashSet\` និង \`HashMap\` មិនរក្សាលំដាប់លំដោយទិន្នន័យឡើយ។ ប្រសិនបើអ្នកចង់ឱ្យទិន្នន័យត្រូវបាន **តម្រៀបលំដាប់ដោយស្វ័យប្រវត្តជានិច្ច** Java ផ្តល់ជូននូវ៖

1. **\`TreeSet\`:** អនុវត្តពី \`Set\` និងតម្រៀបរាល់ធាតុប្លែកៗពីតូចទៅធំដោយស្វ័យប្រវត្ត។
2. **\`TreeMap\`:** អនុវត្តពី \`Map\` និងតម្រៀបរាល់គូទិន្នន័យផ្អែកលើលំដាប់កូនសោ (Key) ដោយស្វ័យប្រវត្ត។

នៅពីក្រោយប្រព័ន្ធនេះ ថ្នាក់ទាំងពីរប្រើប្រាស់រចនាសម្ព័ន្ធមែកឈើ **Red-Black Tree** ដែលមានតុល្យភាពស្វ័យប្រវត្ត!`
    },
    starterCode: `import java.util.TreeMap;
import java.util.TreeSet;

public class Main {
    public static void main(String[] args) {
        // 1. TreeSet (Auto-sorted Unique values)
        TreeSet<Integer> sortedSet = new TreeSet<>();
        sortedSet.add(45);
        sortedSet.add(10);
        sortedSet.add(99);
        sortedSet.add(10); // duplicate ignored
        System.out.println("Auto-Sorted TreeSet: " + sortedSet); // [10, 45, 99]
        
        // 2. TreeMap (Auto-sorted by Keys)
        TreeMap<String, String> sortedMap = new TreeMap<>();
        sortedMap.add("Zara", "User A");
        sortedMap.add("Andy", "User B");
        sortedMap.add("Bob", "User C");
        System.out.println("Auto-Sorted TreeMap: " + sortedMap); // Andy first, then Bob, then Zara
    }
}`
  },
  {
    id: "java-sorting-collections",
    title: {
      en: "Java Sorting Collections",
      km: "ការតម្រៀបលំដាប់ Collections"
    },
    content: {
      en: `### Static Methods in Collections Class
The \`java.util.Collections\` class consists exclusively of static methods that operate on or return collections.

### Sorting Lists:
- **\`Collections.sort(List)\`:** Sorts elements in natural ascending order.
- **\`Collections.reverseOrder()\`:** Comparator that reverses natural order.
- **\`Collections.sort(List, Comparator)\`:** Sorts elements using a custom comparator.`,
      km: `### វិធីសាស្ត្រតម្រៀបលំដាប់ Collections
ថ្នាក់ \`java.util.Collections\` មានផ្ទុកទៅដោយរូបមន្ត Static ជាច្រើនសម្រាប់អនុវត្តសកម្មភាពកែច្នៃ ឬរៀបចំលំដាប់ Collections។

### ការតម្រៀបបញ្ជី (Lists)៖
- **\`Collections.sort(List)\`:** តម្រៀបធាតុពីតូចទៅធំតាមលំដាប់ធម្មជាតិ។
- **\`Collections.reverseOrder()\`:** បញ្ច្រាសលំដាប់តម្រៀប (ពីធំទៅតូចវិញ)។
- **\`Collections.sort(List, Comparator)\`:** តម្រៀបលំដាប់ដោយប្រើលក្ខខណ្ឌ Comparator ផ្ទាល់ខ្លួន។`
    },
    starterCode: `import java.util.ArrayList;
import java.util.Collections;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> fruits = new ArrayList<>();
        fruits.add("Mango");
        fruits.add("Banana");
        fruits.add("Apple");
        
        System.out.println("Original: " + fruits);
        
        // 1. Sort ascending
        Collections.sort(fruits);
        System.out.println("Sorted Ascending: " + fruits);
        
        // 2. Sort descending
        Collections.sort(fruits, Collections.reverseOrder());
        System.out.println("Sorted Descending: " + fruits);
    }
}`
  },
  {
    id: "java-search-collections",
    title: {
      en: "Java Search Collections",
      km: "ការស្វែងរកក្នុង Collections"
    },
    content: {
      en: `### High-Performance Searching
How do we find elements quickly in a collection?

### Core Searching APIs:
- **\`Collections.binarySearch(List, key)\`:** Searches for the specified key using the Binary Search algorithm. **The List must be sorted first!** Runs in logarithmic O(log n) time, which is incredibly fast!
- **\`Collections.max()\` / \`Collections.min()\`:** Retrieves the highest or lowest valued element in a collection directly.`,
      km: `### វិធីសាស្ត្រស្វែងរកល្បឿនលឿន
តើធ្វើដូចម្តេចដើម្បីស្វែងរកធាតុនៅក្នុងបណ្តុំទិន្នន័យឱ្យបានលឿនបំផុត?

### វិធីសាស្ត្រស្វែងរកសំខាន់ៗ៖
- **\`Collections.binarySearch(List, key)\`:** ស្វែងរកធាតុដោយប្រើក្បួនដោះស្រាយ Binary Search។ **លក្ខខណ្ឌ៖ List ត្រូវតែត្រូវបានតម្រៀបលំដាប់ជាមុនសិន!** វាដំណើរការក្នុងល្បឿន O(log n) ដែលលឿនបំផុតសម្រាប់ទិន្នន័យខ្នាតធំ!
- **\`Collections.max()\` / \`Collections.min()\`:** ស្វែងរកធាតុដែលមានតម្លៃធំបំផុត ឬតូចបំផុតដោយផ្ទាល់។`
    },
    starterCode: `import java.util.ArrayList;
import java.util.Collections;

public class Main {
    public static void main(String[] args) {
        ArrayList<Integer> scores = new ArrayList<>();
        scores.add(45);
        scores.add(85);
        scores.add(95);
        scores.add(100); // List is already sorted
        
        // 1. Finding Min and Max
        System.out.println("Highest Score: " + Collections.max(scores));
        System.out.println("Lowest Score: " + Collections.min(scores));
        
        // 2. Performing Binary Search
        int index = Collections.binarySearch(scores, 95);
        System.out.println("Score 95 found at index: " + index);
    }
}`
  },
  {
    id: "java-custom-collection",
    title: {
      en: "Java Custom Collection",
      km: "ការបង្កើតទម្រង់ទិន្នន័យខ្លួនឯង"
    },
    content: {
      en: `### Building Your Own Data Structure
Sometimes built-in collections don't fit your needs perfectly. You can build your own custom data structures by wrapping lists, nodes, or arrays.

Let's build a custom **\`SecureVehicleFleet\`** class that manages vehicle plates and automatically intercepts duplicate entries, while logging activity metrics!`,
      km: `### ការបង្កើតរចនាសម្ព័ន្ធទិន្នន័យផ្ទាល់ខ្លួន
ជួនកាល រចនាសម្ព័ន្ធទិន្នន័យស្រាប់ៗរបស់ Java មិនអាចបំពេញតម្រូវការការងារយើងបាន ១០០% ឡើយ។ អ្នកអាចបង្កើតរចនាសម្ព័ន្ធទិន្នន័យផ្ទាល់ខ្លួនបានដោយងាយស្រួល។

តោះបង្កើតថ្នាក់ **\`SecureVehicleFleet\`** ផ្ទាល់ខ្លួន ដែលជួយគ្រប់គ្រងស្លាកលេខឡាន ទប់ស្កាត់ការស្ទួនលេខ និងកត់ត្រាស្ថិតិដោយស្វ័យប្រវត្ត!`
    },
    starterCode: `import java.util.ArrayList;

class SecureVehicleFleet {
    private ArrayList<String> fleetPlates = new ArrayList<>();
    private int rejectedCount = 0;

    // Custom method to securely add plates
    public void registerPlate(String plate) {
        if (fleetPlates.contains(plate)) {
            rejectedCount++;
            System.out.println("Security Alert: Plate " + plate + " is a duplicate! Registration rejected.");
        } else {
            fleetPlates.add(plate);
            System.out.println("Plate " + plate + " successfully registered to fleet.");
        }
    }

    public void displayStats() {
        System.out.println("Active Fleet Size: " + fleetPlates.size());
        System.out.println("Rejected Duplicate Attempts: " + rejectedCount);
    }
}

public class Main {
    public static void main(String[] args) {
        SecureVehicleFleet myFleet = new SecureVehicleFleet();
        
        myFleet.registerPlate("PP-1111");
        myFleet.registerPlate("SR-2222");
        myFleet.registerPlate("PP-1111"); // Attempt duplicate!
        
        System.out.println("\\nFleet Status:");
        myFleet.displayStats();
    }
}`
  },
  {
    id: "java-generics",
    title: {
      en: "Java Generics",
      km: "ថ្នាក់ហ្សេណេរីក (Generics)"
    },
    content: {
      en: `### Type-Safe reusable classes
**Generics** mean parameterized types. The idea is to allow type (Integer, String, ... etc., and user-defined types) to be a parameter to methods, classes, and interfaces.

### Why Generics?
- **Type Safety:** Helps detect type mismatch errors at compile-time instead of runtime.
- **Code Reusability:** You can write a single class or method that can operate safely on any object type.

To specify a generic parameter, use the diamond operator containing \`<T>\`.`,
      km: `### ថ្នាក់ និងអនុគមន៍ហ្សេណេរីក (Generics)
**Generics** សំដៅលើការប្រើប្រាស់ "ប៉ារ៉ាម៉ែត្រប្រភេទកូដ"។ វាអនុញ្ញាតឱ្យប្រភេទទិន្នន័យ (ដូចជា Integer, String, ឬ Class ផ្ទាល់ខ្លួន) ដើរតួជាប៉ារ៉ាម៉ែត្រសម្រាប់ថ្នាក់ ឬវិធីសាស្ត្រ។

### ហេតុអ្វីត្រូវប្រើ Generics?
- **សុវត្ថិភាពខ្ពស់ (Type Safety):** ជួយឆែករកកំហុសឆ្គងទិន្នន័យខុសប្រភេទតាំងពីដំណាក់កាល Compile។
- **ប្រើប្រាស់ឡើងវិញបានចម្រុះ:** អ្នកអាចសរសេរថ្នាក់តែមួយ ដែលមានលទ្ធភាពចាត់ចែង និងធ្វើការជាមួយប្រភេទទិន្នន័យចម្រុះជាច្រើនប្រភេទ។

ដើម្បីកំណត់ប៉ារ៉ាម៉ែត្រប្រភេទកូដ យើងប្រើសញ្ញា \`<T>\`។`
    },
    starterCode: `// Generic Box Class that can hold ANY object type T
class FleetBox<T> {
    private T item;

    public void setItem(T item) {
        this.item = item;
    }

    public T getItem() {
        return item;
    }
}

public class Main {
    public static void main(String[] args) {
        // 1. Box holding a String
        FleetBox<String> strBox = new FleetBox<>();
        strBox.setItem("Container ID: #90812");
        System.out.println("Box content: " + strBox.getItem());
        
        // 2. Box holding an Integer
        FleetBox<Integer> intBox = new FleetBox<>();
        intBox.setItem(2026);
        System.out.println("Box content: " + intBox.getItem());
    }
}`
  },
  {
    id: "java-threads-advanced",
    title: {
      en: "Java Threads Advanced",
      km: " Threads កម្រិតខ្ពស់"
    },
    content: {
      en: `### Thread Synchronization & Safety
When multiple threads access shared resources, they can interfere with each other, causing corrupted states (race conditions).

### Thread Synchronization:
Use the \`synchronized\` keyword on methods to ensure that **only one thread** can execute that block of code at any given time. Other threads will wait patiently until the holding thread completes execution.

This is essential for operations like money transfers or inventory reservations!`,
      km: `### ស្ថិរភាព និងសុវត្ថិភាព Threads កម្រិតខ្ពស់
នៅពេល Threads ច្រើនព្យាយាមកែប្រែធនធានទិន្នន័យតែមួយក្នុងពេលតែមួយ ពួកវាអាចជាន់គ្នា បណ្តាលឱ្យទិន្នន័យខូចខាត (Race conditions)។

### ការធ្វើសមកាលកម្ម Threads (Synchronization)៖
ប្រើប្រាស់ពាក្យគន្លឹះ \`synchronized\` លើវិធីសាស្ត្រនានា ដើម្បីធានាថា **មានតែ Thread មួយគត់** ដែលអាចដំណើរការកូដនោះក្នុងពេលតែមួយ។ Thread ផ្សេងទៀតនឹងរង់ចាំរហូតដល់ Thread ដំបូងបញ្ចប់សកម្មភាព។

វាមានសារៈសំខាន់បំផុតសម្រាប់ដំណើរការផ្ទេរប្រាក់ ធនាគារ ឬកាត់ស្តុកទំនិញ!`
    },
    starterCode: `class Counter {
    private int count = 0;

    // synchronized keyword guarantees only one thread can increment at a time!
    public synchronized void increment() {
        count++;
    }

    public int getCount() {
        return count;
    }
}

public class Main {
    public static void main(String[] args) throws InterruptedException {
        Counter counter = new Counter();
        
        // Thread A
        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) counter.increment();
        });
        
        // Thread B
        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) counter.increment();
        });
        
        t1.start();
        t2.start();
        
        // Wait for both threads to finish
        t1.join();
        t2.join();
        
        System.out.println("Final Count (Should be exactly 2000): " + counter.getCount());
    }
}`
  },
  {
    id: "java-final-project-checklist",
    title: {
      en: "Java Final Project Checklist",
      km: "តារាងផ្ទៀងផ្ទាត់គម្រោងបញ្ចប់"
    },
    content: {
      en: `### Congratulations on completing the Java Course!
You have graduated from Java fundamentals all the way to complex Thread Synchronization, I/O Streams, and Collections architecture!

### Final Project Checklist & Practice Guidelines:
1. **Define Core Architecture:** Choose a real-world concept (like a Bank System, Library, or Online Store) and map its structural classes.
2. **Implement Encapsulation:** Wrap your fields as private, utilizing robust setter methods to validate incoming data.
3. **Establish Hierarchies (Inheritance):** Structure parent classes to share core methods, overriding behaviors with Polymorphism.
4. **Leverage Collections:** Manage lists dynamically with \`ArrayList\`, unique VIP registers with \`HashSet\`, and search maps with \`HashMap\`.
5. **Add I/O Streams:** Persist transaction reports to local text files using \`FileWriter\` or buffered streams.

> **What to do next?** Challenge yourself! Take our comprehensive final **Quiz** and start building full-stack Java solutions. You are fully equipped to excel!`,
      km: `### អបអរសាទរសម្រាប់ការបញ្ចប់វគ្គសិក្សា Java!
អ្នកបានបញ្ចប់ការសិក្សាតាំងពីមូលដ្ឋានគ្រឹះ រហូតដល់កម្រិតខ្ពស់ដូចជា Thread Synchronization, I/O Streams, និងការរៀបចំប្រព័ន្ធ Collections!

### តារាងផ្ទៀងផ្ទាត់គម្រោង និងការណែនាំការអនុវត្ត៖
1. **កំណត់រចនាសម្ព័ន្ធកម្មវិធី:** ជ្រើសរើសប្រធានបទជាក់ស្តែងមួយ (ដូចជាប្រព័ន្ធធនាគារ បណ្ណាល័យ ឬហាងអនឡាញ) រួចរៀបចំគំរូថ្នាក់ (Classes)។
2. **អនុវត្ត Encapsulation:** កំណត់អថេរជា Private និងប្រើប្រាស់ Setter ដើម្បីឆែកភាពត្រឹមត្រូវនៃទិន្នន័យ។
3. **បង្កើតមរតក (Inheritance):** រៀបចំថ្នាក់ឪពុកដើម្បីចែករំលែកកូដ រួចសរសេរឡើងវិញ (Override) ដោយប្រើ Polymorphism។
4. **ប្រើប្រាស់ Collections:** ចាត់ចែងបញ្ជីទិន្នន័យដោយប្រើ \`ArrayList\`, គ្រប់គ្រងវត្តមានដោយ \`HashSet\`, និងផ្គូផ្គងស្វែងរកដោយ \`HashMap\`។
5. **បញ្ជូលស្ទ្រីម I/O:** កត់ត្រា និងរក្សាទុករបាយការណ៍ទៅក្នុងឯកសារដោយប្រើ \`FileWriter\` ឬ Buffered Streams។

> **តើត្រូវធ្វើអ្វីបន្ទាប់ទៀត?** សាកល្បងសមត្ថភាពរបស់អ្នក! ធ្វើតេស្ត **Quiz** វគ្គសិក្សា និងចាប់ផ្តើមសរសេរគម្រោងផ្ទាល់ខ្លួនរបស់អ្នក។ អ្នកមានចំណេះដឹងពេញលេញដើម្បីឆ្ពោះទៅមុខប្រកបដោយភាពជោគជ័យ!`
    },
    starterCode: `public class Main {
    public static void main(String[] args) {
        System.out.println("Java Graduation Complete! Ready for the quiz and challenges.");
    }
}`
  }
];
