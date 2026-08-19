import { Lesson } from '../types';

export const swiftLessonsGroup1: Lesson[] = [
  {
    id: "swift-syntax-essentials",
    title: {
      en: "1.1 Swift Syntax Essentials",
      km: "១.១ គ្រឹះវាក្យសម្ពន្ធ Swift (Syntax Essentials)"
    },
    starterCode: `// SabayCode Swift Master Track: Syntax Essentials
import Foundation

struct CambodianStudent {
    let id: String
    var name: String
    var gpa: Double
    var isEnrolled: Bool
}

let student1 = CambodianStudent(id: "PP-2026-001", name: "Sokha Heng", gpa: 3.85, isEnrolled: true)
print("Student ID: \(student1.id)")
print("Name: \(student1.name) | GPA: \(student1.gpa)")
`,
    content: {
      en: `# 1.1 Swift Syntax Essentials

> **Executive Summary:** Swift is Apple's modern, strongly typed, compiled programming language designed specifically for production performance, memory safety, and expressive readability across iOS, macOS, watchOS, and visionOS applications.

Swift enforces immutability by default using \`let\` for constants and \`var\` for mutable variables, preventing accidental state mutations in multi-threaded environments. Its advanced type inference engine automatically resolves explicit data types at compile time while giving developers total precision when annotating types explicitly. In production iOS engineering, using string interpolation \`\\(variable)\` and type-safe constants ensures stable domain models and eliminates runtime type mismatch crashes across complex data pipelines.

---

## Tutorial Walkthrough

### 1. Immutability with \`let\` vs Mutability with \`var\`
In Swift, immutability is a core feature. Prefer \`let\` whenever a value will not change after initialization. Only use \`var\` when mutation is required.

\`\`\`swift
let storeName: String = "SabayStore Phnom Penh" // Immutable constant
var activeCartCount: Int = 3                 // Mutable variable
activeCartCount += 1                          // Valid mutation
\`\`\`

### 2. Type Inference & Explicit Annotations
Swift automatically infers types, but explicit type annotations are valuable when declaring public APIs or working with ambiguity.

\`\`\`swift
let conversionRate = 4100.0 // Inferred as Double
let khqrCode: String = "KHQR-ABA-855-001" // Explicit String
\`\`\`

---

## Code Example

\`\`\`swift
import Foundation

struct MarketplaceItem {
    let sku: String
    var title: String
    var priceUSD: Double
    var isAvailable: Bool

    var priceKHR: Double {
        return priceUSD * 4100.0
    }
}

let item = MarketplaceItem(sku: "CAM-01", title: "Angkor Silk Scarf", priceUSD: 15.0, isAvailable: true)

print("--- SabayStore Item Summary ---")
print("SKU: \(item.sku)")
print("Product: \(item.title)")
print("Price: $\(item.priceUSD) USD (\(Int(item.priceKHR)) KHR)")
print("In Stock: \(item.isAvailable ? "Yes" : "No")")
\`\`\`

---

## Expected Output / UI Preview

\`\`\`text
--- SabayStore Item Summary ---
SKU: CAM-01
Product: Angkor Silk Scarf
Price: $15.0 USD (61500 KHR)
In Stock: Yes
\`\`\`

---

## Try It Yourself

Modify the \`priceUSD\` property or add a secondary item to calculate total shopping cart value in both USD and KHR. Notice how compiler type inference prevents combining an \`Int\` and a \`Double\` without explicit casting.
`,
      km: `# ១.១ គ្រឹះវាក្យសម្ពន្ធ Swift (Syntax Essentials)

> **សេចក្តីសង្ខេបប្រតិបត្តិ៖** ភាសា Swift គឺជាភាសាសរសេរកូដទំនើប ប្រភេទ Strong Type ដែលបានបង្កើតឡើងដោយ Apple សម្រាប់អភិវឌ្ឍន៍កម្មវិធី iOS, macOS, watchOS និង visionOS ជាមួយនឹងល្បឿនលឿន និងសុវត្ថិភាព Memory ខ្ពស់។

Swift ជំរុញឱ្យប្រើប្រាស់ភាពមិនប្រែប្រួល (Immutability) ជាចម្បងដោយប្រើប្រាស់ \`let\` សម្រាប់តម្លៃថេរ (Constant) និង \`var\` សម្រាប់អថេរប្រែប្រួល (Mutable Variable) ដើម្បីការពារកំហុសទិន្នន័យពេលរត់ប្រព័ន្ធ Concurrent។ ប្រព័ន្ធ Type Inference របស់ Swift កំណត់ប្រភេទទិន្នន័យដោយស្វ័យប្រវត្តិតាំងពីពេល Compile Time។ ក្នុងវិស្វកម្ម iOS អាជីព ការប្រើប្រាស់ String Interpolation \`\\(variable)\` និង Type Safety ជួយធានាថា Domain Models ដំណើរការដោយរលូន និងមិនបង្កការ Crash ឡើយ។

---

## មេរៀនអនុវត្ត (Tutorial Walkthrough)

### ១. ភាពខុសគ្នារវាង \`let\` និង \`var\`
គួរប្រើប្រាស់ \`let\` ជានិច្ចប្រសិនបើតម្លៃនោះមិនប្រែប្រួលបន្ទាប់ពីបង្កើត។ ប្រើ \`var\` លុះត្រាតែត្រូវការកែប្រែទិន្នន័យនោះ។

\`\`\`swift
let storeName: String = "SabayStore Phnom Penh" // តម្លៃថេរ
var activeCartCount: Int = 3                 // អថេរដែលអាចកែប្រែបាន
activeCartCount += 1                          // ការកែប្រែត្រឹមត្រូវ
\`\`\`

### ២. Type Inference និង Explicit Type
Swift កំណត់ Type ដោយស្វ័យប្រវត្តិ ប៉ុន្តែការកំណត់ Type ជាក់លាក់មានប្រយោជន៍ពេលបង្កើត API ធំៗ។

\`\`\`swift
let conversionRate = 4100.0 // Inferred ជា Double
let khqrCode: String = "KHQR-ABA-855-001" // Explicit String
\`\`\`

---

## ឧទាហរណ៍កូដ (Code Example)

\`\`\`swift
import Foundation

struct MarketplaceItem {
    let sku: String
    var title: String
    var priceUSD: Double
    var isAvailable: Bool

    var priceKHR: Double {
        return priceUSD * 4100.0
    }
}

let item = MarketplaceItem(sku: "CAM-01", title: "Angkor Silk Scarf", priceUSD: 15.0, isAvailable: true)

print("--- SabayStore Item Summary ---")
print("SKU: \(item.sku)")
print("Product: \(item.title)")
print("Price: $\(item.priceUSD) USD (\(Int(item.priceKHR)) KHR)")
print("In Stock: \(item.isAvailable ? "Yes" : "No")")
\`\`\`

---

## លទ្ធផលរំពឹងទុក (Expected Output)

\`\`\`text
--- SabayStore Item Summary ---
SKU: CAM-01
Product: Angkor Silk Scarf
Price: $15.0 USD (61500 KHR)
In Stock: Yes
\`\`\`

---

## សាកល្បងដោយខ្លួនឯង (Try It Yourself)

សាកល្បងកែប្រែតម្លៃ \`priceUSD\` ឬបន្ថែម Item ថ្មីដើម្បីគណនាតម្លៃសរុបជា USD និង KHR។ កត់សម្គាល់ថា Swift មិនអនុញ្ញាតឱ្យបូក \`Int\` និង \`Double\` បញ្ចូលគ្នាដោយគ្មានការ Cast ប្រភេទទិន្នន័យឡើយ។
`
    }
  },
  {
    id: "swift-optionals-unwrapping",
    title: {
      en: "1.2 Optionals & Safe Unwrapping",
      km: "១.២ ប្រព័ន្ធ Optionals & ការ Unwrapping ដោយសុវត្ថិភាព"
    },
    starterCode: `// SabayCode Swift Master Track: Optionals
import Foundation

func processAccount(accountNumber: String, phoneNumber: String?) {
    print("Account: \(accountNumber)")
    
    // Unwrapping optional phone number safely with guard let
    guard let validPhone = phoneNumber, !validPhone.isEmpty else {
        print("Warning: No mobile phone bound to this account.")
        return
    }
    
    print("Verified Mobile: \(validPhone)")
}

processAccount(accountNumber: "ABA-000123-88", phoneNumber: "012 345 678")
processAccount(accountNumber: "ABA-000999-11", phoneNumber: nil)
`,
    content: {
      en: `# 1.2 Optionals & Safe Unwrapping

> **Executive Summary:** Optionals represent Swift's signature approach to null safety, completely eliminating NullPointerExceptions at runtime by requiring explicit handling whenever a value might be missing (\`nil\`).

An optional is an enum with two cases: \`.none\` (representing nil) and \`.some(Wrapped)\` (containing the underlying value). Professional iOS developers utilize \`guard let\` statements for early exits, \`if let\` bindings for localized conditional logic, and the nil-coalescing operator (\`??\`) to provide production defaults. Forced unwrapping (\`!\`) is strictly avoided in production codebases because encountering a nil value at runtime triggers an unrecoverable fatal application crash.

---

## Tutorial Walkthrough

### 1. Defining Optionals
An optional type is designated by appending a question mark \`?\` to any Swift type.

\`\`\`swift
var userBio: String? = "Mobile app developer based in Siem Reap"
userBio = nil // Valid: optionals can safely hold nil
\`\`\`

### 2. Guard Let (Early Exit Pattern)
\`guard let\` binds unwrapped variables to the enclosing scope and mandates a \`return\`, \`throw\`, or \`break\` inside the else block.

\`\`\`swift
func validateKHQRToken(_ token: String?) {
    guard let activeToken = token, activeToken.hasPrefix("KHQR") else {
        print("Invalid KHQR merchant payload")
        return
    }
    print("Processing active transaction for token: \(activeToken)")
}
\`\`\`

### 3. Nil-Coalescing Operator (\`??\`)
Provides a fallback default value if the optional evaluates to nil.

\`\`\`swift
let avatarURL: String? = nil
let displayURL = avatarURL ?? "https://sabaycode.com/default-avatar.png"
\`\`\`

---

## Code Example

\`\`\`swift
import Foundation

struct UserProfile {
    let username: String
    var email: String?
    var phoneNumber: String?
}

func generateUserBadge(user: UserProfile) -> String {
    // 1. Nil Coalescing for default fallback
    let emailDisplay = user.email ?? "No email linked"

    // 2. If let optional binding
    if let phone = user.phoneNumber {
        return "User \(user.username) [Email: \(emailDisplay) | Verified SMS: \(phone)]"
    } else {
        return "User \(user.username) [Email: \(emailDisplay) | SMS: Unverified]"
    }
}

let user1 = UserProfile(username: "seyha_dev", email: "seyha@sabaycode.com", phoneNumber: "+855 12 999 888")
let user2 = UserProfile(username: "angkor_coder", email: nil, phoneNumber: nil)

print(generateUserBadge(user: user1))
print(generateUserBadge(user: user2))
\`\`\`

---

## Expected Output / UI Preview

\`\`\`text
User seyha_dev [Email: seyha@sabaycode.com | Verified SMS: +855 12 999 888]
User angkor_coder [Email: No email linked | SMS: Unverified]
\`\`\`

---

## Try It Yourself

Create a function that parses an optional string input into an integer representing a user's age (\`Int(input)\`). Use \`guard let\` to handle invalid non-numeric strings safely without crashing.
`,
      km: `# ១.២ ប្រព័ន្ធ Optionals & ការ Unwrapping ដោយសុវត្ថិភាព

> **សេចក្តីសង្ខេបប្រតិបត្តិ៖** Optionals គឺជាលក្ខណៈពិសេសចម្បងរបស់ Swift ក្នុងការការពារ Null Safety ដោយលុបបំបាត់បញ្ហា NullPointerExceptions ទាំងស្រុងតាមរយៈតម្រូវការឱ្យសរសេរកូដ Unwrapping ដោយច្បាស់លាស់នៅពេលតម្លៃអាចជា \`nil\`។

Optional គឺជា Enum ដែលមាន ២ Cases: \`.none\` (តំណាងឱ្យ nil) និង \`.some(Wrapped)\` (មានតម្លៃពិតប្រាកដ)។ វិស្វករ iOS អាជីពប្រើប្រាស់ \`guard let\` សម្រាប់ការចាកចេញជាមុន (Early Exit), \`if let\` សម្រាប់ការ Unwrapping តាមលក្ខខណ្ឌ និង Nil-Coalescing Operator (\`??\`) សម្រាប់ផ្ផ្តល់តម្លៃ Default។ ការប្រើប្រាស់ Forced Unwrapping (\`!\`) ត្រូវតែចៀសវាងក្នុង Production ដោយសារវាបង្កឱ្យ App Crash ភ្លាមៗប្រសិនបើតម្លៃស្មើ nil។

---

## មេរៀនអនុវត្ត (Tutorial Walkthrough)

### ១. ការប្រកាស Optionals
Optional ប្រកាសដោយបន្ថែមសញ្ញាសួរ \`?\` នៅពីក្រោយ Type។

\`\`\`swift
var userBio: String? = "Mobile app developer based in Siem Reap"
userBio = nil // អាចផ្ទុកតម្លៃ nil បានដោយសុវត្ថិភាព
\`\`\`

### ២. Guard Let Pattern
\`guard let\` បើក Unwrapped Variable ទៅកាន់ Scope ខាងក្រៅ ហើយតម្រូវឱ្យមាន \`return\` ឬ \`throw\` ក្នុង Else Block។

\`\`\`swift
func validateKHQRToken(_ token: String?) {
    guard let activeToken = token, activeToken.hasPrefix("KHQR") else {
        print("Invalid KHQR merchant payload")
        return
    }
    print("Processing active transaction for token: \(activeToken)")
}
\`\`\`

---

## ឧទាហរណ៍កូដ (Code Example)

\`\`\`swift
import Foundation

struct UserProfile {
    let username: String
    var email: String?
    var phoneNumber: String?
}

func generateUserBadge(user: UserProfile) -> String {
    let emailDisplay = user.email ?? "No email linked"

    if let phone = user.phoneNumber {
        return "User \(user.username) [Email: \(emailDisplay) | Verified SMS: \(phone)]"
    } else {
        return "User \(user.username) [Email: \(emailDisplay) | SMS: Unverified]"
    }
}

let user1 = UserProfile(username: "seyha_dev", email: "seyha@sabaycode.com", phoneNumber: "+855 12 999 888")
let user2 = UserProfile(username: "angkor_coder", email: nil, phoneNumber: nil)

print(generateUserBadge(user: user1))
print(generateUserBadge(user: user2))
\`\`\`

---

## លទ្ធផលរំពឹងទុក (Expected Output)

\`\`\`text
User seyha_dev [Email: seyha@sabaycode.com | Verified SMS: +855 12 999 888]
User angkor_coder [Email: No email linked | SMS: Unverified]
\`\`\`

---

## សាកល្បងដោយខ្លួនឯង (Try It Yourself)

សរសេរ Function មួយដែលទទួល string ហើយបំប្លែងទៅជា integer \`Int(input)\` ដោយប្រើប្រាស់ \`guard let\` ដើម្បីឆែកមើលថាបើជាអត្ថបទមិនមែនលេខ វានឹងរាយការណ៍កំហុសដោយសុវត្ថិភាព។
`
    }
  },
  {
    id: "swift-control-flow-pattern-matching",
    title: {
      en: "1.3 Control Flow & Pattern Matching",
      km: "១.៣ គ្រប់គ្រងលំហូរកូដ (Control Flow) & Pattern Matching"
    },
    starterCode: `// SabayCode Swift Master Track: Control Flow & Switch Pattern Matching
import Foundation

enum PaymentStatus {
    case pending(amountUSD: Double)
    case completed(transactionId: String, timestamp: Date)
    case failed(errorCode: Int, reason: String)
}

let currentTransaction = PaymentStatus.completed(transactionId: "TXN-ABA-2026-99", timestamp: Date())

switch currentTransaction {
case .pending(let amount) where amount > 1000.0:
    print("High-value pending transaction: $\(amount) - Requires manager approval.")
case .pending(let amount):
    print("Standard transaction pending: $\(amount)")
case .completed(let txId, let date):
    print("Payment Successful! Ref: \(txId) at \(date)")
case .failed(let code, let reason) where code == 401:
    print("Authentication Failed (\(code)): \(reason)")
case .failed(let code, let reason):
    print("Transaction Error (\(code)): \(reason)")
}
`,
    content: {
      en: `# 1.3 Control Flow & Pattern Matching

> **Executive Summary:** Pattern matching in Swift switch statements provides unmatched expressive power, allowing iOS engineers to decompose complex data structures, inspect enum associated values, and apply value-binding filters with \`where\` clauses.

Unlike traditional C-style switch statements that require explicit \`break\` statements to prevent fallthrough, Swift switch statements execute only the first matching case and enforce exhaustive checking at compile time. Pattern matching combines tuple matching, value ranges (\`1...100\`), enum pattern extraction, and type casting (\`is\` / \`as?\`) into clean, maintainable logic free of nested if-else ladders.

---

## Tutorial Walkthrough

### 1. Exhaustive Switch & Associated Enum Values
Swift enums can hold strongly typed payload values. \`switch\` statements extract these payload variables seamlessly using pattern matching syntax.

\`\`\`swift
enum NetworkState {
    case idle
    case loading(progress: Double)
    case success(payload: [String])
    case error(code: Int)
}
\`\`\`

### 2. Pattern Matching with \`where\` Clauses
You can add extra boolean expressions to a switch case using \`where\` clauses.

\`\`\`swift
func handleState(_ state: NetworkState) {
    switch state {
    case .loading(let p) where p >= 1.0:
        print("Data loaded, parsing UI...")
    case .loading(let p):
        print("Progress: \(Int(p * 100))%")
    case .error(let code) where code >= 500:
        print("Server error \(code), retrying request...")
    default:
        print("Other state")
    }
}
\`\`\`

---

## Code Example

\`\`\`swift
import Foundation

enum ProvinceRegion {
    case central(city: String)
    case coastal(city: String)
    case northern(city: String)
}

let location = ProvinceRegion.coastal(city: "Kampot")

switch location {
case .central(let city):
    print("Central Cambodia Hub: \(city)")
case .coastal(let city) where city == "Sihanoukville" || city == "Kampot":
    print("Major Coastal Tourism & Trade Zone: \(city)")
case .coastal(let city):
    print("Coastal Region: \(city)")
case .northern(let city) where city == "Siem Reap":
    print("Cultural & Historical Capital: \(city)")
case .northern(let city):
    print("Northern Region: \(city)")
}
\`\`\`

---

## Expected Output / UI Preview

\`\`\`text
Major Coastal Tourism & Trade Zone: Kampot
\`\`\`

---

## Try It Yourself

Add a new case \`case border(city: String, gateName: String)\` to the enum and write a pattern matching rule that checks if the gateName contains "Bavet" or "Poipet".
`,
      km: `# ១.៣ គ្រប់គ្រងលំហូរកូដ (Control Flow) & Pattern Matching

> **សេចក្តីសង្ខេបប្រតិបត្តិ៖** Pattern Matching នៅក្នុង Swift Switch Statements ផ្តល់នូវអានុភាពខ្ពស់ក្នុងការបំផ្លែងទិន្នន័យ Enum Associated Values, ពិនិត្យប្រភេទ Range, និងចម្រោះលក្ខខណ្ឌបន្ថែមដោយប្រើប្រាស់ \`where\` clauses។

ខុសពី Switch ក្នុងភាសាចាស់ៗ Swift Switch មិនត្រូវការ \`break\` ទេ ហើយតម្រូវឱ្យមានភាពគ្រប់ជ្រុងជ្រោយ (Exhaustive) តាំងពី Compile Time។ Pattern Matching អនុញ្ញាតឱ្យទាញយកតម្លៃចេញពី Enums, Tuples, ពិនិត្យមើលប្រភេទទិន្នន័យ (\`is\` / \`as?\`) យ៉ាងស្អាតបាត។

---

## មេរៀនអនុវត្ត (Tutorial Walkthrough)

### ១. Switch លើ Enums ជាមួយ Associated Values
Enum ក្នុង Swift អាចផ្ទុក Payload Values។ កូដ \`switch\` អាចទាញតម្លៃនោះមកប្រើប្រាស់ភ្លាមៗ។

\`\`\`swift
enum NetworkState {
    case idle
    case loading(progress: Double)
    case success(payload: [String])
    case error(code: Int)
}
\`\`\`

### ២. ការប្រើប្រាស់ \`where\` Clause
អ្នកអាចបន្ថែមលក្ខខណ្ឌ Bool លើ Switch Case ដោយប្រើប្រាស់ពាក្យ \`where\`។

\`\`\`swift
func handleState(_ state: NetworkState) {
    switch state {
    case .loading(let p) where p >= 1.0:
        print("Data loaded, parsing UI...")
    case .loading(let p):
        print("Progress: \(Int(p * 100))%")
    default:
        print("Other state")
    }
}
\`\`\`

---

## ឧទាហរណ៍កូដ (Code Example)

\`\`\`swift
import Foundation

enum ProvinceRegion {
    case central(city: String)
    case coastal(city: String)
    case northern(city: String)
}

let location = ProvinceRegion.coastal(city: "Kampot")

switch location {
case .central(let city):
    print("Central Cambodia Hub: \(city)")
case .coastal(let city) where city == "Sihanoukville" || city == "Kampot":
    print("Major Coastal Tourism & Trade Zone: \(city)")
case .coastal(let city):
    print("Coastal Region: \(city)")
case .northern(let city) where city == "Siem Reap":
    print("Cultural & Historical Capital: \(city)")
case .northern(let city):
    print("Northern Region: \(city)")
}
\`\`\`

---

## លទ្ធផលរំពឹងទុក (Expected Output)

\`\`\`text
Major Coastal Tourism & Trade Zone: Kampot
\`\`\`

---

## សាកល្បងដោយខ្លួនឯង (Try It Yourself)

សាកល្បងបន្ថែម Case ថ្មី \`case border(city: String, gateName: String)\` ទៅកាន់ Enum ហើយសរសេរ Pattern Matching ពិនិត្យមើល \`gateName\`។
`
    }
  },
  {
    id: "swift-functions-closures-basics",
    title: {
      en: "1.4 Functions, Argument Labels & Closure Basics",
      km: "១.៤ អនុគមន៍ (Functions), Argument Labels & គ្រឹះ Closures"
    },
    starterCode: `// SabayCode Swift Master Track: Functions & Closures
import Foundation

// Function with custom argument label (for external caller) and internal parameter name
func calculateTotal(forPrice priceUSD: Double, applyDiscount discountPct: Double = 0.0) -> Double {
    let discounted = priceUSD * (1.0 - discountPct / 100.0)
    return discounted * 4100.0 // Output in KHR
}

let totalKHR = calculateTotal(forPrice: 20.0, applyDiscount: 10.0)
print("Discounted Total: \(Int(totalKHR)) KHR")

// Basic closure definition
let filterHighScores: ([Int], (Int) -> Bool) -> [Int] = { scores, predicate in
    return scores.filter(predicate)
}

let scores = [85, 92, 45, 68, 99, 73]
let passingScores = filterHighScores(scores) { $0 >= 70 }
print("Passing Scores: \(passingScores)")
`,
    content: {
      en: `# 1.4 Functions, Argument Labels & Closure Basics

> **Executive Summary:** Swift functions are first-class citizens that support expressive external argument labels for natural language readability, default parameter values, and anonymous inline closure blocks.

Swift's function syntax separates external argument labels (used at call sites) from internal parameter names (used inside the implementation body). Omitting argument labels using \`_\` enables concise mathematical API designs. Closures are self-contained blocks of functionality that can be passed around as function arguments, featuring trailing closure syntax and shorthand argument names (\`$0\`, \`$1\`) for clear, functional code pipelines.

---

## Tutorial Walkthrough

### 1. Argument Labels vs Parameter Names
External argument labels dramatically increase readability at call sites.

\`\`\`swift
// External label: 'from', Internal name: 'sender'
func sendPayment(from sender: String, to recipient: String, amount: Double) {
    print("\(sender) sent $\(amount) to \(recipient)")
}

// Call site reads like plain English:
sendPayment(from: "Sokha", to: "Bopha", amount: 50.0)
\`\`\`

### 2. Trailing Closure Syntax
When the last parameter of a function is a closure, you can write it outside the function parentheses as a trailing closure block.

\`\`\`swift
func performAsyncTask(completion: () -> Void) {
    print("Task running...")
    completion()
}

// Trailing closure call:
performAsyncTask {
    print("Task completed successfully!")
}
\`\`\`

---

## Code Example

\`\`\`swift
import Foundation

struct StudentGrade {
    let name: String
    let score: Double
}

func evaluateClass(students: [StudentGrade], evaluator: (StudentGrade) -> String) {
    for student in students {
        let result = evaluator(student)
        print("Student: \(student.name) -> Grade: \(result)")
    }
}

let classList = [
    StudentGrade(name: "Dara", score: 94.0),
    StudentGrade(name: "Chantra", score: 62.0),
    StudentGrade(name: "Khemra", score: 88.5)
]

// Using trailing closure shorthand
evaluateClass(students: classList) { student in
    switch student.score {
    case 90...100: return "A (Outstanding)"
    case 80..<90:  return "B (Very Good)"
    case 70..<80:  return "C (Good)"
    default:       return "F (Needs Improvement)"
    }
}
\`\`\`

---

## Expected Output / UI Preview

\`\`\`text
Student: Dara -> Grade: A (Outstanding)
Student: Chantra -> Grade: F (Needs Improvement)
Student: Khemra -> Grade: B (Very Good)
\`\`\`

---

## Try It Yourself

Refactor the evaluator closure above using shorthand argument syntax \`$0.score\` instead of explicit parameter binding.
`,
      km: `# ១.៤ អនុគមន៍ (Functions), Argument Labels & គ្រឹះ Closures

> **សេចក្តីសង្ខេបប្រតិបត្តិ៖** Functions ក្នុង Swift គឺជា First-class Citizens ដែលគាំទ្រ Argument Labels ខាងក្រៅដើម្បីបង្កើតអត្ថបទកូដអានស្រួលដូចភាសាអង់គ្លេស ព្រមទាំងគាំទ្រ Default Values និង Inline Closure Blocks។

វាក្យសម្ពន្ធ Function របស់ Swift បែងចែករវាង External Argument Label (ប្រើពេលហៅរត់) និង Internal Parameter Name (ប្រើក្នុង Body)។ ការប្រើប្រាស់ Closures និង Trailing Closure Syntax ព្រមទាំង \`$0\`, \`$1\` ជួយឱ្យការសរសេរ Functional Code ដូចជា \`.map\`, \`.filter\`, \`.reduce\` មានភាពបង្រួម និងរហ័ស។

---

## មេរៀនអនុវត្ត (Tutorial Walkthrough)

### ១. ភាពខុសគ្នារវាង Argument Labels & Parameter Names
 Argument Label ខាងក្រៅធ្វើឱ្យការហៅរត់កូដមានភាពច្បាស់លាស់។

\`\`\`swift
func sendPayment(from sender: String, to recipient: String, amount: Double) {
    print("\(sender) sent $\(amount) to \(recipient)")
}

sendPayment(from: "Sokha", to: "Bopha", amount: 50.0)
\`\`\`

---

## ឧទាហរណ៍កូដ (Code Example)

\`\`\`swift
import Foundation

struct StudentGrade {
    let name: String
    let score: Double
}

func evaluateClass(students: [StudentGrade], evaluator: (StudentGrade) -> String) {
    for student in students {
        let result = evaluator(student)
        print("Student: \(student.name) -> Grade: \(result)")
    }
}

let classList = [
    StudentGrade(name: "Dara", score: 94.0),
    StudentGrade(name: "Chantra", score: 62.0),
    StudentGrade(name: "Khemra", score: 88.5)
]

evaluateClass(students: classList) { student in
    switch student.score {
    case 90...100: return "A (Outstanding)"
    case 80..<90:  return "B (Very Good)"
    case 70..<80:  return "C (Good)"
    default:       return "F (Needs Improvement)"
    }
}
\`\`\`

---

## លទ្ធផលរំពឹងទុក (Expected Output)

\`\`\`text
Student: Dara -> Grade: A (Outstanding)
Student: Chantra -> Grade: F (Needs Improvement)
Student: Khemra -> Grade: B (Very Good)
\`\`\`

---

## សាកល្បងដោយខ្លួនឯង (Try It Yourself)

សាកល្បងសម្រួល Evaluator Closure ដោយប្រើប្រាស់ \`$0.score\` ជំនួសឱ្យការប្រកាស parameter ប៉ារ៉ាម៉ែត្រ explicit។
`
    }
  },
  {
    id: "swift-value-vs-reference-types",
    title: {
      en: "1.5 Value Types (Structs) vs Reference Types (Classes)",
      km: "១.៥ Value Types (Structs) ប្រៀបធៀបនឹង Reference Types (Classes)"
    },
    starterCode: `// SabayCode Swift Master Track: Structs vs Classes Memory Layout
import Foundation

// VALUE TYPE: Copy-on-assignment (Allocated on Stack)
struct CartItem {
    var title: String
    var quantity: Int
}

var cart1 = CartItem(title: "Angkor Wat T-Shirt", quantity: 1)
var cart2 = cart1 // Independent deep copy
cart2.quantity = 5

print("--- Struct (Value Type) ---")
print("Cart 1 Qty: \(cart1.quantity)") // Remains 1
print("Cart 2 Qty: \(cart2.quantity)") // Updated to 5

// REFERENCE TYPE: Shared reference pointers (Allocated on Heap)
class UserSession {
    var userId: String
    var isLoggedIn: Bool

    init(userId: String, isLoggedIn: Bool) {
        self.userId = userId
        self.isLoggedIn = isLoggedIn
    }
}

let sessionA = UserSession(userId: "USER-1001", isLoggedIn: true)
let sessionB = sessionA // Points to exact same heap instance
sessionB.isLoggedIn = false

print("\n--- Class (Reference Type) ---")
print("Session A LoggedIn: \(sessionA.isLoggedIn)") // Changed to false!
print("Session B LoggedIn: \(sessionB.isLoggedIn)") // false
`,
    content: {
      en: `# 1.5 Value Types (Structs) vs Reference Types (Classes)

> **Executive Summary:** Understanding the structural memory divide between value types (Structs/Enums copied on assignment) and reference types (Classes shared via heap pointers) is the cornerstone of writing thread-safe, performant Swift code.

In Swift architecture, **Structs** are value types stored on the fast execution stack. When passed to a function or assigned to a new variable, a distinct value copy is created, preventing unexpected side effects across concurrent threads. **Classes** are reference types allocated on the heap, managed via Automatic Reference Counting (ARC). Swift strongly favors structs for models, state definitions, and SwiftUI views, reserving classes for reference sharing, inheritance, and object lifecycles with explicit cleanup (\`deinit\`).

---

## Tutorial Walkthrough

### 1. Comparison Matrix

| Feature | Struct (Value Type) | Class (Reference Type) |
| :--- | :--- | :--- |
| **Memory Storage** | Stack allocation | Heap allocation |
| **Assignment Behavior** | Value copy (Copy-On-Write) | Shared pointer reference |
| **Thread Safety** | Thread-safe by default | Requires explicit synchronization |
| **Inheritance** | No class inheritance (uses Protocols) | Supports single class inheritance |
| **Identity Comparison** | Equality (\`==\`) | Reference identity (\`===\`) |

### 2. When to Use Structs vs Classes in iOS
- **Use Structs** for domain data models (User, Product, Order), SwiftUI views, configuration objects, and state payloads.
- **Use Classes** for singletons (LocationManager, DatabaseConnection), UIKit view controllers, or object graphs requiring identity persistence.

---

## Code Example

\`\`\`swift
import Foundation

// Model as a Value Type
struct InvoiceItem {
    let id: String
    var amountUSD: Double
}

// Session Manager as a Reference Type
class InvoiceManager {
    private(set) var items: [InvoiceItem] = []

    func add(_ item: InvoiceItem) {
        items.append(item)
    }

    var total: Double {
        return items.reduce(0) { $0 + $1.amountUSD }
    }
}

let manager1 = InvoiceManager()
manager1.add(InvoiceItem(id: "INV-101", amountUSD: 45.0))

let manager2 = manager1 // Both variables reference the same manager
manager2.add(InvoiceItem(id: "INV-102", amountUSD: 55.0))

print("Manager 1 Total: $\(manager1.total)") // Output: $100.0
print("Manager 2 Total: $\(manager2.total)") // Output: $100.0
print("Are managers pointing to identical heap memory? \(manager1 === manager2)")
\`\`\`

---

## Expected Output / UI Preview

\`\`\`text
Manager 1 Total: $100.0
Manager 2 Total: $100.0
Are managers pointing to identical heap memory? true
\`\`\`

---

## Try It Yourself

Change \`InvoiceManager\` from a \`class\` to a \`struct\` (making \`add\` a \`mutating func\`). Observe how assigning \`manager2 = manager1\` now creates an independent copy and breaks shared reference mutation.
`,
      km: `# ១.៥ Value Types (Structs) ប្រៀបធៀបនឹង Reference Types (Classes)

> **សេចក្តីសង្ខេបប្រតិបត្តិ៖** ការយល់ដឹងពីការចងចាំរវាង Value Types (Structs/Enums ដែលត្រូវ Copy តម្លៃពេល Assign) និង Reference Types (Classes ដែលប្រើប្រាស់ Pointer រួមគ្នានៅលើ Heap) គឺជាគ្រឹះសំខាន់បំផុតក្នុងការសរសេរកូដ Swift មានសុវត្ថិភាពខ្ពស់។

នៅក្នុងស្ថាបត្យកម្ម Swift **Structs** គឺជា Value Types ដែលរក្សាទុកនៅលើ Stack។ ពេល Assign ទៅកាន់អថេរថ្មី វានឹងបង្កើត Copy ថ្មីមួយដាច់ដោយឡែក ដែលការពារបញ្ហា Side Effects ពេលរត់ multi-threading។ ចំណែក **Classes** គឺជា Reference Types ដែលបែងចែកនៅលើ Heap និងគ្រប់គ្រងដោយ ARC។ Swift ជំរុញឱ្យប្រើប្រាស់ Structs សម្រាប់ Models, State, និង SwiftUI Views ដោយរក្សា Class ទុកសម្រាប់តែប្រព័ន្ធដែលត្រូវការ Shared References ដូចជា Singletons ឬ Controllers ប៉ុណ្ណោះ។

---

## មេរៀនអនុវត្ត (Tutorial Walkthrough)

### ១. តារាងប្រៀបធៀប

| លក្ខណៈពិសេស | Struct (Value Type) | Class (Reference Type) |
| :--- | :--- | :--- |
| **ការរក្សាទុក Memory** | Stack Allocation | Heap Allocation |
| **សកម្មភាព Assign** | Copy តម្លៃ (Copy-On-Write) | ប្រើប្រាស់ Pointer រួមគ្នា |
| **Thread Safety** | មានសុវត្ថិភាពតាមលំនាំដើម | ត្រូវការប្រព័ន្ធ Synchronize |
| **Inheritance** | មិនគាំទ្រទេ (ប្រើ Protocols) | គាំទ្រ Inheritance |
| **ការប្រៀបធៀប** | ពិនិត្យតម្លៃ (\`==\`) | ពិនិត្យ Pointer Memory (\`===\`) |

---

## ឧទាហរណ៍កូដ (Code Example)

\`\`\`swift
import Foundation

struct InvoiceItem {
    let id: String
    var amountUSD: Double
}

class InvoiceManager {
    private(set) var items: [InvoiceItem] = []

    func add(_ item: InvoiceItem) {
        items.append(item)
    }

    var total: Double {
        return items.reduce(0) { $0 + $1.amountUSD }
    }
}

let manager1 = InvoiceManager()
manager1.add(InvoiceItem(id: "INV-101", amountUSD: 45.0))

let manager2 = manager1
manager2.add(InvoiceItem(id: "INV-102", amountUSD: 55.0))

print("Manager 1 Total: $\(manager1.total)")
print("Manager 2 Total: $\(manager2.total)")
print("Are managers pointing to identical heap memory? \(manager1 === manager2)")
\`\`\`

---

## លទ្ធផលរំពឹងទុក (Expected Output)

\`\`\`text
Manager 1 Total: $100.0
Manager 2 Total: $100.0
Are managers pointing to identical heap memory? true
\`\`\`

---

## សាកល្បងដោយខ្លួនឯង (Try It Yourself)

សាកល្បងប្តូរ \`InvoiceManager\` ពី \`class\` ទៅជា \`struct\` (ហើយដាក់ \`mutating func\` លើ \`add\`) រួចសង្កេតមើលថាតើ \`manager2 = manager1\` បង្កើត Copy ថ្មីដាច់ដោយឡែកយ៉ាងដូចម្តេច។
`
    }
  }
];

export const swiftLessonsGroup2: Lesson[] = [
  {
    id: "swift-classes-inheritance-inits",
    title: {
      en: "2.1 Classes, Inheritance & Initializers",
      km: "២.១ Classes, ការបន្តវេន (Inheritance) & Initializers"
    },
    starterCode: `// SabayCode Swift Master Track: Classes & Initializers
import Foundation

class BaseAccount {
    let accountNumber: String
    var balanceUSD: Double

    // Designated Initializer
    init(accountNumber: String, balanceUSD: Double) {
        self.accountNumber = accountNumber
        self.balanceUSD = balanceUSD
    }

    convenience init(accountNumber: String) {
        self.init(accountNumber: accountNumber, balanceUSD: 0.0)
    }

    func calculateMonthlyFee() -> Double {
        return 1.00
    }
}

class SavingsAccount: BaseAccount {
    var interestRatePct: Double

    init(accountNumber: String, balanceUSD: Double, interestRatePct: Double) {
        self.interestRatePct = interestRatePct
        super.init(accountNumber: accountNumber, balanceUSD: balanceUSD)
    }

    override func calculateMonthlyFee() -> Double {
        return balanceUSD >= 500.0 ? 0.0 : 2.50
    }
}

let acc = SavingsAccount(accountNumber: "ABA-555-001", balanceUSD: 1200.0, interestRatePct: 4.5)
print("Account: \(acc.accountNumber) | Fee: $\(acc.calculateMonthlyFee())")
`,
    content: {
      en: `# 2.1 Classes, Inheritance & Initializers

> **Executive Summary:** Class inheritance allows subclasses to inherit properties and methods from superclasses while providing customized overrides and structured initializer delegation rules.

In Swift class hierarchies, initializers must satisfy strict two-phase initialization rules: phase 1 guarantees that all stored properties declared by the subclass are initialized before invoking \`super.init()\`, and phase 2 allows custom property modification. Swift distinguishes between **designated initializers** (the primary initializers responsible for delegating up to superclasses) and **convenience initializers** (secondary initializers that delegate across to another initializer in the same class).

---

## Tutorial Walkthrough

### 1. Designated vs Convenience Initializer Rules
- A designated initializer must call a designated initializer from its immediate superclass (\`super.init(...)\`).
- A convenience initializer must call another initializer from the *same* class (\`self.init(...)\`).
- A convenience initializer must ultimately call a designated initializer.

### 2. Overriding Methods and Required Inits
Use the \`override\` keyword when redefining superclass methods. Mark initializers as \`required\` to mandate implementation by every subclass.

---

## Code Example

\`\`\`swift
import Foundation

class Vehicle {
    let brand: String
    
    init(brand: String) {
        self.brand = brand
    }

    func displayInfo() {
        print("Vehicle Brand: \(brand)")
    }
}

class ElectricCar: Vehicle {
    var batteryCapacitykWh: Double

    init(brand: String, batteryCapacitykWh: Double) {
        self.batteryCapacitykWh = batteryCapacitykWh
        super.init(brand: brand) // Must initialize self properties before calling super.init
    }

    override func displayInfo() {
        super.displayInfo()
        print("Battery System: \(batteryCapacitykWh) kWh EV Pack")
    }
}

let myEV = ElectricCar(brand: "BYD Cambodia", batteryCapacitykWh: 60.5)
myEV.displayInfo()
\`\`\`

---

## Expected Output / UI Preview

\`\`\`text
Vehicle Brand: BYD Cambodia
Battery System: 60.5 kWh EV Pack
\`\`\`

---

## Try It Yourself

Add a convenience initializer to \`ElectricCar\` that defaults \`batteryCapacitykWh\` to \`50.0\` when only a brand string is supplied.
`,
      km: `# ២.១ Classes, ការបន្តវេន (Inheritance) & Initializers

> **សេចក្តីសង្ខេបប្រតិបត្តិ៖** ការបន្តវេន (Class Inheritance) អនុញ្ញាតឱ្យ Subclasses ទាញយកលក្ខណៈសម្បត្តិ និង Methods ពី Superclasses ព្រមទាំងធ្វើការ Custom Overrides និងអនុវត្តតាមវិធាននៃការបង្កើត Initializers។

នៅក្នុងប្រព័ន្ធ Class របស់ Swift, Initializer ត្រូវតែគោរពតាមវិធាន ២ ដំណាក់កាល (Two-Phase Initialization): ដំណាក់កាលទី១ ធានាថា Stored Properties របស់ Subclass ត្រូវកំណត់តម្លៃរួចរាល់មុនពេលហៅ \`super.init()\`, និងដំណាក់កាលទី២ អនុញ្ញាតឱ្យកែប្រែតម្លៃ។ Swift បែងចែករវាង **Designated Initializer** (Initializer ស្នូលដែលហៅទៅ Superclass) និង **Convenience Initializer** (Initializer ជំនួយដែលហៅទៅ Initializer ផ្សេងទៀតក្នុង Class ជាមួយគ្នា)។

---

## មេរៀនអនុវត្ត (Tutorial Walkthrough)

### ១. វិធាននៃ Designated vs Convenience Initializers
- Designated Initializer ត្រូវតែហៅ Designated Initializer របស់ Superclass (\`super.init(...)\`)។
- Convenience Initializer ត្រូវតែហៅ Initializer ផ្សេងទៀតក្នុង Class ដដែល (\`self.init(...)\`)។

---

## ឧទាហរណ៍កូដ (Code Example)

\`\`\`swift
import Foundation

class Vehicle {
    let brand: String
    
    init(brand: String) {
        self.brand = brand
    }

    func displayInfo() {
        print("Vehicle Brand: \(brand)")
    }
}

class ElectricCar: Vehicle {
    var batteryCapacitykWh: Double

    init(brand: String, batteryCapacitykWh: Double) {
        self.batteryCapacitykWh = batteryCapacitykWh
        super.init(brand: brand)
    }

    override func displayInfo() {
        super.displayInfo()
        print("Battery System: \(batteryCapacitykWh) kWh EV Pack")
    }
}

let myEV = ElectricCar(brand: "BYD Cambodia", batteryCapacitykWh: 60.5)
myEV.displayInfo()
\`\`\`

---

## លទ្ធផលរំពឹងទុក (Expected Output)

\`\`\`text
Vehicle Brand: BYD Cambodia
Battery System: 60.5 kWh EV Pack
\`\`\`

---

## សាកល្បងដោយខ្លួនឯង (Try It Yourself)

បន្ថែម Convenience Initializer ទៅកាន់ \`ElectricCar\` ដែលកំណត់តម្លៃលំនាំដើម \`batteryCapacitykWh = 50.0\` នៅពេលហៅរត់ដោយផ្តល់តែឈ្មោះ Brand។
`
    }
  },
  {
    id: "swift-protocols-conformance",
    title: {
      en: "2.2 Protocols & Protocol Composition",
      km: "២.២ Protocols & បន្សំ Protocol Composition"
    },
    starterCode: `// SabayCode Swift Master Track: Protocols & Conformance
import Foundation

protocol IdentifiableModel {
    var id: String { get }
}

protocol PrintableSummary {
    func summary() -> String
}

// Protocol composition (&)
typealias AppEntity = IdentifiableModel & PrintableSummary

struct StudentProfile: AppEntity {
    let id: String
    let name: String
    let major: String

    func summary() -> String {
        return "Student [\(id)]: \(name) - Major: \(major)"
    }
}

let student = StudentProfile(id: "STU-88", name: "Bopha Chhay", major: "Computer Science")
print(student.summary())
`,
    content: {
      en: `# 2.2 Protocols & Protocol Composition

> **Executive Summary:** Protocols define blueprints of properties, methods, and requirements that types (structs, classes, enums) implement, establishing decoupled interfaces across production software layers.

In Swift, protocols enable loose coupling and high testability. By programming to protocols rather than concrete implementations, iOS developers can easily swap production network clients with mock data providers during unit testing. Protocol composition using the ampersand syntax (\`ProtocolA & ProtocolB\`) allows functions to require multiple capabilities simultaneously without creating rigid class hierarchies.

---

## Tutorial Walkthrough

### 1. Defining Protocol Requirements
Protocols specify whether property requirements are read-only (\`{ get }\`) or read-write (\`{ get set }\`).

\`\`\`swift
protocol PaymentProcessor {
    var currencyCode: String { get }
    func processPayment(amount: Double) -> Bool
}
\`\`\`

### 2. Protocol Composition Syntax
Combine multiple protocols into a single type constraint.

\`\`\`swift
func renderProfileCard(entity: IdentifiableModel & PrintableSummary) {
    print("Rendering entity \(entity.id): \(entity.summary())")
}
\`\`\`

---

## Code Example

\`\`\`swift
import Foundation

protocol KHQRAuthenticatable {
    var merchantID: String { get }
    func signPayload(data: String) -> String
}

protocol LoggableService {
    func logActivity(message: String)
}

struct ABAPayService: KHQRAuthenticatable, LoggableService {
    let merchantID: String = "MERCHANT-ABA-007"

    func signPayload(data: String) -> String {
        return "SIG_SHA256_\(data.hashValue)_\(merchantID)"
    }

    func logActivity(message: String) {
        print("[ABA Merchant Log]: \(message)")
    }
}

let service = ABAPayService()
service.logActivity(message: "Initiating KHQR payment token generation")
let signature = service.signPayload(data: "AMOUNT=25.00_USD")
print("Generated Security Signature: \(signature)")
\`\`\`

---

## Expected Output / UI Preview

\`\`\`text
[ABA Merchant Log]: Initiating KHQR payment token generation
Generated Security Signature: SIG_SHA256_8293019283_MERCHANT-ABA-007
\`\`\`

---

## Try It Yourself

Create a third protocol \`Refundable\` with a method \`refundTransaction(id: String) -> Bool\` and conform \`ABAPayService\` to it.
`,
      km: `# ២.២ Protocols & បន្សំ Protocol Composition

> **សេចក្តីសង្ខេបប្រតិបត្តិ៖** Protocols កំណត់នូវប្លង់មេ (Blueprints) នៃ Properties និង Methods ដែល Types ផ្សេងៗ (structs, classes, enums) ត្រូវយកទៅអនុវត្តតាម ដើម្បីបង្កើត Interface កូដដាច់ដោយឡែកពីគ្នា។

ក្នុង Swift, Protocols ជួយបង្កើត Loose Coupling និងបង្កើនភាពងាយស្រួលក្នុងការធ្វើ Unit Testing។ តាមរយៈការសរសេរកូដពឹងផ្អែកលើ Protocols ជំនួសឱ្យ Concrete Classes, វិស្វករ iOS អាចផ្លាស់ប្តូរ Network Client ពិតប្រាកដទៅជា Mock Client ពេល Testing បានយ៉ាងងាយ។ Protocol Composition (\`ProtocolA & ProtocolB\`) អនុញ្ញាតឱ្យទាមទារសមត្ថភាពច្រើនក្នុងពេលតែមួយ។

---

## មេរៀនអនុវត្ត (Tutorial Walkthrough)

### ១. ការកំណត់ Protocol Requirements
Protocol កំណត់លក្ខខណ្ឌ Property ថាជា Read-Only (\`{ get }\`) ឬ Read-Write (\`{ get set }\`)។

\`\`\`swift
protocol PaymentProcessor {
    var currencyCode: String { get }
    func processPayment(amount: Double) -> Bool
}
\`\`\`

---

## ឧទាហរណ៍កូដ (Code Example)

\`\`\`swift
import Foundation

protocol KHQRAuthenticatable {
    var merchantID: String { get }
    func signPayload(data: String) -> String
}

protocol LoggableService {
    func logActivity(message: String)
}

struct ABAPayService: KHQRAuthenticatable, LoggableService {
    let merchantID: String = "MERCHANT-ABA-007"

    func signPayload(data: String) -> String {
        return "SIG_SHA256_\(data.hashValue)_\(merchantID)"
    }

    func logActivity(message: String) {
        print("[ABA Merchant Log]: \(message)")
    }
}

let service = ABAPayService()
service.logActivity(message: "Initiating KHQR payment token generation")
let signature = service.signPayload(data: "AMOUNT=25.00_USD")
print("Generated Security Signature: \(signature)")
\`\`\`

---

## លទ្ធផលរំពឹងទុក (Expected Output)

\`\`\`text
[ABA Merchant Log]: Initiating KHQR payment token generation
Generated Security Signature: SIG_SHA256_8293019283_MERCHANT-ABA-007
\`\`\`

---

## សាកល្បងដោយខ្លួនឯង (Try It Yourself)

បង្កើត Protocol ទី៣ \`Refundable\` ដែលមាន Method \`refundTransaction(id: String) -> Bool\` ហើយយក \`ABAPayService\` ទៅ Conform។
`
    }
  },
  {
    id: "swift-protocol-extensions-pop",
    title: {
      en: "2.3 Protocol Extensions & Protocol-Oriented Programming (POP)",
      km: "២.៣ Protocol Extensions & Protocol-Oriented Programming (POP)"
    },
    starterCode: `// SabayCode Swift Master Track: Protocol Extensions & POP
import Foundation

protocol TaxCalculatable {
    var preTaxAmountUSD: Double { get }
}

// Default Implementation via Protocol Extension
extension TaxCalculatable {
    var standardVAT: Double {
        return preTaxAmountUSD * 0.10 // 10% Cambodian VAT default
    }

    func generateReceiptHeader() -> String {
        return "--- OFFICIAL TAX INVOICE (VAT 10%) ---\nPre-Tax: $\(preTaxAmountUSD) | VAT: $\(standardVAT) | Total: $\(preTaxAmountUSD + standardVAT)"
    }
}

struct CoffeeOrder: TaxCalculatable {
    let preTaxAmountUSD: Double
}

struct HardwareOrder: TaxCalculatable {
    let preTaxAmountUSD: Double
    // Optional override of default implementation
    var standardVAT: Double {
        return preTaxAmountUSD * 0.05 // Special tax rate override
    }
}

let coffee = CoffeeOrder(preTaxAmountUSD: 4.00)
print(coffee.generateReceiptHeader())

let laptop = HardwareOrder(preTaxAmountUSD: 1200.00)
print("Hardware Special Total: $\(laptop.preTaxAmountUSD + laptop.standardVAT)")
`,
    content: {
      en: `# 2.3 Protocol Extensions & Protocol-Oriented Programming (POP)

> **Executive Summary:** Protocol-Oriented Programming (POP) is Swift's defining architectural design philosophy, replacing fragile deep class inheritance with flexible, mixin-style default implementations via protocol extensions.

Before Swift, Object-Oriented Programming relied heavily on base class inheritance, which often led to tight coupling and "god class" anti-patterns. Protocol extensions allow developers to attach default property and method implementations directly to a protocol. Types conforming to the protocol inherit these implementations automatically without repeating boilerplate code, while retaining the freedom to override default behavior whenever specialized customization is required.

---

## Tutorial Walkthrough

### 1. Default Method Implementations
By providing a default body inside an \`extension ProtocolName\`, conforming types receive functionality out of the box.

\`\`\`swift
protocol Auditable {
    var createdAt: Date { get }
}

extension Auditable {
    var formattedCreationDate: String {
        let formatter = DateFormatter()
        formatter.dateStyle = .medium
        return formatter.string(from: createdAt)
    }
}
\`\`\`

### 2. Conditional Extensions with \`where\`
Protocol extensions can be restricted conditionally to types matching specific constraints.

\`\`\`swift
extension Collection where Element == String {
    func joinedWithKhmerComma() -> String {
        return self.joined(separator: " \u{17D4} ") // Khmer Khan sign
    }
}
\`\`\`

---

## Code Example

\`\`\`swift
import Foundation

protocol Discountable {
    var originalPrice: Double { get }
    var discountPercentage: Double { get }
}

extension Discountable {
    var finalPrice: Double {
        return originalPrice * (1.0 - discountPercentage / 100.0)
    }

    var savingsSummary: String {
        return "Saved $\(originalPrice - finalPrice) (\(Int(discountPercentage))% off)"
    }
}

struct CourseEnrollment: Discountable {
    let originalPrice: Double = 150.0
    let discountPercentage: Double = 20.0
}

let enrollment = CourseEnrollment()
print("Final Course Price: $\(enrollment.finalPrice)")
print(enrollment.savingsSummary)
\`\`\`

---

## Expected Output / UI Preview

\`\`\`text
Final Course Price: $120.0
Saved $30.0 (20% off)
\`\`\`

---

## Try It Yourself

Write a protocol extension for \`Collection\` where \`Element: Numeric\` that adds a computed property \`average\` returning the arithmetic mean of all numeric items.
`,
      km: `# ២.៣ Protocol Extensions & Protocol-Oriented Programming (POP)

> **សេចក្តីសង្ខេបប្រតិបត្តិ៖** Protocol-Oriented Programming (POP) គឺជាទស្សនវិជ្ជារចនាកូដដ៏ល្បីល្បាញរបស់ Swift ដែលជំនួសការបន្តវេន Class ស្មុគស្មាញ (Class Inheritance) ដោយប្រើប្រាស់ Default Implementations តាមរយៈ Protocol Extensions។

មុនពេលមាន Swift, OOP ពឹងផ្អែកខ្លាំងលើ Base Classes ដែលជារឿយៗបណ្តាលឱ្យមាន Tight Coupling។ Protocol Extensions អនុញ្ញាតឱ្យបន្ថែម Default Methods និង Computed Properties ទៅកាន់ Protocol ផ្ទាល់។ Structs ឬ Classes ដែល Conform នឹងទទួលបាន Functionality នោះដោយស្វ័យប្រវត្តិ ដោយមិនបាច់សរសេរកូដឡើងវិញ ព្រមទាំងអាច Override ពេលត្រូវការ។

---

## មេរៀនអនុវត្ត (Tutorial Walkthrough)

### ១. ការបង្កើត Default Implementations
បន្ថែម Body ទៅក្នុង \`extension ProtocolName\` ដើម្បីផ្តល់សមត្ថភាពជាលំនាំដើម។

\`\`\`swift
protocol Auditable {
    var createdAt: Date { get }
}

extension Auditable {
    var formattedCreationDate: String {
        let formatter = DateFormatter()
        formatter.dateStyle = .medium
        return formatter.string(from: createdAt)
    }
}
\`\`\`

---

## ឧទាហរណ៍កូដ (Code Example)

\`\`\`swift
import Foundation

protocol Discountable {
    var originalPrice: Double { get }
    var discountPercentage: Double { get }
}

extension Discountable {
    var finalPrice: Double {
        return originalPrice * (1.0 - discountPercentage / 100.0)
    }

    var savingsSummary: String {
        return "Saved $\(originalPrice - finalPrice) (\(Int(discountPercentage))% off)"
    }
}

struct CourseEnrollment: Discountable {
    let originalPrice: Double = 150.0
    let discountPercentage: Double = 20.0
}

let enrollment = CourseEnrollment()
print("Final Course Price: $\(enrollment.finalPrice)")
print(enrollment.savingsSummary)
\`\`\`

---

## លទ្ធផលរំពឹងទុក (Expected Output)

\`\`\`text
Final Course Price: $120.0
Saved $30.0 (20% off)
\`\`\`

---

## សាកល្បងដោយខ្លួនឯង (Try It Yourself)

សរសេរ Protocol Extension លើ \`Collection\` កន្លែងដែល \`Element: Numeric\` ដើម្បីបន្ថែម Computed Property \`average\` គណនាតម្លៃមធ្យមភាគ។
`
    }
  },
  {
    id: "swift-generics-reusable-code",
    title: {
      en: "2.4 Generics & Type Constraints",
      km: "២.៤ Generics & លក្ខខណ្ឌ Type Constraints"
    },
    starterCode: `// SabayCode Swift Master Track: Generics
import Foundation

// Generic Stack data structure
struct Stack<Element> {
    private var items: [Element] = []

    mutating func push(_ item: Element) {
        items.append(item)
    }

    mutating func pop() -> Element? {
        return items.popLast()
    }

    var peek: Element? {
        return items.last
    }

    var count: Int {
        return items.count
    }
}

var stringStack = Stack<String>()
stringStack.push("Phnom Penh")
stringStack.push("Siem Reap")
stringStack.push("Battambang")

print("Top Province: \(stringStack.peek ?? "None")")
print("Popped: \(stringStack.pop() ?? "")")
print("Remaining Count: \(stringStack.count)")
`,
    content: {
      en: `# 2.4 Generics & Type Constraints

> **Executive Summary:** Generics empower engineers to write flexible, reusable, and type-safe algorithms and data structures that work across any type while retaining compile-time safety.

Swift generics eliminate redundant code duplication. Rather than writing separate utility methods or data collections for \`Int\`, \`String\`, and custom models, a generic placeholder type \`<T>\` allows a single implementation to handle any payload. By enforcing type constraints (such as \`<T: Equatable>\` or \`<T: Codable>\`), generics guarantee that generic operations remain strictly type-safe without falling back on unsafe runtime casting.

---

## Tutorial Walkthrough

### 1. Generic Functions with Constraints
Type constraints restrict generic placeholders to types that conform to specific protocols.

\`\`\`swift
// 'T: Equatable' guarantees that elements can be compared using '=='
func findIndex<T: Equatable>(of valueToFind: T, in array: [T]) -> Int? {
    for (index, item) in array.enumerated() {
        if item == valueToFind {
            return index
        }
    }
    return nil
}
\`\`\`

### 2. Associated Types in Protocols
Protocols use the \`associatedtype\` keyword to define generic requirements.

\`\`\`swift
protocol Container {
    associatedtype Item
    mutating func append(_ item: Item)
    var count: Int { get }
}
\`\`\`

---

## Code Example

\`\`\`swift
import Foundation

struct APIResponseCache<T: Codable> {
    private var cacheStore: [String: T] = [:]

    mutating func save(key: String, payload: T) {
        cacheStore[key] = payload
        print("[Cache Saved]: Key '\(key)' stored successfully.")
    }

    func retrieve(key: String) -> T? {
        return cacheStore[key]
    }
}

struct UserSessionData: Codable {
    let token: String
    let expiresAt: Date
}

var sessionCache = APIResponseCache<UserSessionData>()
let session = UserSessionData(token: "BEARER_TOKEN_991823", expiresAt: Date())
sessionCache.save(key: "current_user", payload: session)

if let cached = sessionCache.retrieve(key: "current_user") {
    print("Retrieved Token from Cache: \(cached.token)")
}
\`\`\`

---

## Expected Output / UI Preview

\`\`\`text
[Cache Saved]: Key 'current_user' stored successfully.
Retrieved Token from Cache: BEARER_TOKEN_991823
\`\`\`

---

## Try It Yourself

Create a generic function \`swapValues<T>(_ a: inout T, _ b: inout T)\` that exchanges two variables of any matching type.
`,
      km: `# ២.៤ Generics & លក្ខខណ្ឌ Type Constraints

> **សេចក្តីសង្ខេបប្រតិបត្តិ៖** Generics អនុញ្ញាតឱ្យវិស្វករបង្កើត Algorithms និង Data Structures ដែលអាចប្រើប្រាស់ឡើងវិញបានច្រើនប្រភេទ ដោយរក្សាបាននូវ Compile-Time Type Safety យ៉ាងរឹងមាំ។

Generics ក្នុង Swift លុបបំបាត់ការសរសេរកូដដដែលៗ។ ជំនួសឱ្យការសរសេរ Function ដាច់ដោយឡែកសម្រាប់ \`Int\`, \`String\` ឬ Custom Models, អ្នកអាចប្រើប្រាស់ Generic Placeholder \`<T>\`។ តាមរយៈ Type Constraints (\`<T: Equatable>\` ឬ \`<T: Codable>\`), Generics ធានាថាកូដដំណើរការបានត្រឹមត្រូវដោយមិនបាច់ប្រើប្រាស់ Unsafe Casting ឡើយ។

---

## មេរៀនអនុវត្ត (Tutorial Walkthrough)

### ១. Generic Functions ជាមួយ Constraints
Type Constraints កម្រិត Generic Placeholder ឱ្យប្រើប្រាស់បានតែជាមួយ Types ដែល Conform ទៅនឹង Protocol ជាក់លាក់។

\`\`\`swift
func findIndex<T: Equatable>(of valueToFind: T, in array: [T]) -> Int? {
    for (index, item) in array.enumerated() {
        if item == valueToFind {
            return index
        }
    }
    return nil
}
\`\`\`

---

## ឧទាហរណ៍កូដ (Code Example)

\`\`\`swift
import Foundation

struct APIResponseCache<T: Codable> {
    private var cacheStore: [String: T] = [:]

    mutating func save(key: String, payload: T) {
        cacheStore[key] = payload
        print("[Cache Saved]: Key '\(key)' stored successfully.")
    }

    func retrieve(key: String) -> T? {
        return cacheStore[key]
    }
}

struct UserSessionData: Codable {
    let token: String
    let expiresAt: Date
}

var sessionCache = APIResponseCache<UserSessionData>()
let session = UserSessionData(token: "BEARER_TOKEN_991823", expiresAt: Date())
sessionCache.save(key: "current_user", payload: session)

if let cached = sessionCache.retrieve(key: "current_user") {
    print("Retrieved Token from Cache: \(cached.token)")
}
\`\`\`

---

## លទ្ធផលរំពឹងទុក (Expected Output)

\`\`\`text
[Cache Saved]: Key 'current_user' stored successfully.
Retrieved Token from Cache: BEARER_TOKEN_991823
\`\`\`

---

## សាកល្បងដោយខ្លួនឯង (Try It Yourself)

បង្កើត Generic Function \`swapValues<T>(_ a: inout T, _ b: inout T)\` ដើម្បីផ្លាស់ប្តូរតម្លៃរវាងអថេរពីរ។
`
    }
  },
  {
    id: "swift-access-control-modifiers",
    title: {
      en: "2.5 Access Control Modifiers",
      km: "២.៥ Access Control Modifiers (Private, Internal, Public)"
    },
    starterCode: `// SabayCode Swift Master Track: Access Control
import Foundation

public class BankVaultManager {
    // Accessible everywhere within module, read-only setters externally
    public private(set) var vaultBalanceUSD: Double

    // Private property hidden inside class scope
    private let masterEncryptionKey: String

    public init(initialDeposit: Double, key: String) {
        self.vaultBalanceUSD = initialDeposit
        self.masterEncryptionKey = key
    }

    public func deposit(amount: Double) {
        guard amount > 0 else { return }
        vaultBalanceUSD += amount
        logInternalTransaction(action: "DEPOSIT", amount: amount)
    }

    // Private helper method
    private func logInternalTransaction(action: String, amount: Double) {
        print("[Audit Security Log]: \(action) $\(amount) | Key Verification Hash: \(masterEncryptionKey.hashValue)")
    }
}

let vault = BankVaultManager(initialDeposit: 50000.0, key: "KH-SECURE-KEY-2026")
vault.deposit(amount: 12500.0)
print("Public Balance Reading: $\(vault.vaultBalanceUSD)")
// vault.vaultBalanceUSD = 0.0 // ERROR: Setter is private!
`,
    content: {
      en: `# 2.5 Access Control Modifiers

> **Executive Summary:** Access control restricts code accessibility across source files and modules, enabling software architects to enforce encapsulation, protect private invariants, and expose clean public API surfaces.

Swift provides five explicit levels of access control: **open**, **public**, **internal** (the default level), **fileprivate**, and **private**. Controlling visibility prevents external components from corrupting internal class states. Using \`private(set)\` allows properties to remain publicly readable while restricting write access strictly to internal class methods.

---

## Tutorial Walkthrough

### 1. Access Level Hierarchy
1. **open**: Accessible and subclassable across external importing modules (Classes only).
2. **public**: Accessible across modules, but subclassable/overridable only within the defining module.
3. **internal** *(default)*: Accessible anywhere within the defining target/module.
4. **fileprivate**: Accessible strictly within the defining \`.swift\` source file.
5. **private**: Accessible strictly within the enclosing declaration scope and extensions in the same file.

---

## Code Example

\`\`\`swift
import Foundation

struct UserAccount {
    public let username: String
    public private(set) var loginCount: Int = 0
    private var hashedAuthToken: String

    public init(username: String, secretToken: String) {
        self.username = username
        self.hashedAuthToken = secretToken.lowercased()
    }

    public mutating func recordLogin() {
        loginCount += 1
        print("Welcome back, \(username)! Total Logins: \(loginCount)")
    }
}

var user = UserAccount(username: "seyha", secretToken: "SECRET_PASS_123")
user.recordLogin()
print("Public Username: \(user.username)")
print("Public Login Count: \(user.loginCount)")
// user.hashedAuthToken -> Compile error: 'hashedAuthToken' is inaccessible due to 'private' protection level
\`\`\`

---

## Expected Output / UI Preview

\`\`\`text
Welcome back, seyha! Total Logins: 1
Public Username: seyha
Public Login Count: 1
\`\`\`

---

## Try It Yourself

Add a \`fileprivate\` extension inside the same file that accesses a \`fileprivate\` helper method.
`,
      km: `# ២.៥ Access Control Modifiers (Private, Internal, Public)

> **សេចក្តីសង្ខេបប្រតិបត្តិ៖** Access Control កម្រិតសិទ្ធិចូលប្រើប្រាស់កូដឆ្លងកាត់ឯកសារ ឬ Modules ដើម្បីពង្រឹង Encapsulation និងការពារការកែប្រែទិន្នន័យពីខាងក្រៅ។

Swift ផ្តល់ជូន Access Levels ចំនួន ៥៖ **open**, **public**, **internal** (លំនាំដើម), **fileprivate**, និង **private**។ ការប្រើប្រាស់ \`private(set)\` អនុញ្ញាតឱ្យអានតម្លៃពីខាងក្រៅបាន ប៉ុន្តែហាមឃាត់ការកែប្រើតម្លៃពីខាងក្រៅ។

---

## មេរៀនអនុវត្ត (Tutorial Walkthrough)

### ១. កម្រិត Access Levels
1. **open**: អាចប្រើ និង Subclass បានពីគ្រប់ Module ខាងក្រៅ។
2. **public**: អាចប្រើពីគ្រប់ Module ប៉ុន្តែអាច Subclass បានតែក្នុង Module ដើម។
3. **internal**: ប្រើបានទូទាំង Module បច្ចុប្បន្ន (Default)។
4. **fileprivate**: ប្រើបានតែក្នុងឯកសារ \`.swift\` ដដែល។
5. **private**: ប្រើបានតែក្នុង Scope ឬ Extension ក្នុងឯកសារដដែល។

---

## ឧទាហរណ៍កូដ (Code Example)

\`\`\`swift
import Foundation

struct UserAccount {
    public let username: String
    public private(set) var loginCount: Int = 0
    private var hashedAuthToken: String

    public init(username: String, secretToken: String) {
        self.username = username
        self.hashedAuthToken = secretToken.lowercased()
    }

    public mutating func recordLogin() {
        loginCount += 1
        print("Welcome back, \(username)! Total Logins: \(loginCount)")
    }
}

var user = UserAccount(username: "seyha", secretToken: "SECRET_PASS_123")
user.recordLogin()
print("Public Username: \(user.username)")
print("Public Login Count: \(user.loginCount)")
\`\`\`

---

## លទ្ធផលរំពឹងទុក (Expected Output)

\`\`\`text
Welcome back, seyha! Total Logins: 1
Public Username: seyha
Public Login Count: 1
\`\`\`

---

## សាកល្បងដោយខ្លួនឯង (Try It Yourself)

សាកល្បងបន្ថែម \`fileprivate\` Method ក្នុងឯកសារ និងសង្កេតមើលកម្រិត Access របស់វា។
`
    }
  }
];

export const swiftLessonsGroup3: Lesson[] = [
  {
    id: "swift-closures-deep-dive",
    title: {
      en: "3.1 Closures Deep Dive (@escaping vs Non-Escaping)",
      km: "៣.១ ជម្រៅ Closures (@escaping vs Non-Escaping)"
    },
    starterCode: `// SabayCode Swift Master Track: Escaping vs Non-Escaping Closures
import Foundation

class NetworkFetcher {
    var completionHandlers: [() -> Void] = []

    // Escaping closure: Outlives the function scope because it's saved in an array
    func requestAPIPayload(completion: @escaping () -> Void) {
        print("1. Initiating background API call...")
        completionHandlers.append(completion) // Saved for future execution
    }

    func executePendingCompletions() {
        print("3. Executing stored escaping closure callbacks...")
        for handler in completionHandlers {
            handler()
        }
    }
}

let fetcher = NetworkFetcher()
fetcher.requestAPIPayload {
    print("4. Async API Response Received & Parsed!")
}

print("2. Function requestAPIPayload returned immediately.")
fetcher.executePendingCompletions()
`,
    content: {
      en: `# 3.1 Closures Deep Dive (@escaping vs Non-Escaping)

> **Executive Summary:** Mastering memory capturing semantics and distinguishing between synchronous non-escaping closures and asynchronous \`@escaping\` closures is critical for building leak-free networking and completion handler architectures.

By default, function closure parameters in Swift are **non-escaping**, meaning they are executed synchronously inside the function body and discarded before the function returns. When a closure is executed asynchronously (such as after a network request finishes or stored inside a property/array), it outlives the function scope and must be explicitly annotated with \`@escaping\`. To avoid strong reference cycles inside escaping closures, engineers use capture lists (\`[weak self]\`).

---

## Tutorial Walkthrough

### 1. Capture Lists \`[weak self]\`
When an escaping closure captures \`self\` inside a class, it increases the reference count of \`self\`. Using \`[weak self]\` breaks potential memory retain cycles.

\`\`\`swift
class ProfileViewModel {
    var username = "Sokha"

    func loadData() {
        fetchFromNetwork { [weak self] result in
            guard let self = self else { return }
            print("Loaded data for \(self.username)")
        }
    }
}
\`\`\`

---

## Code Example

\`\`\`swift
import Foundation

class ImageLoaderService {
    private var downloadQueue: [(String) -> Void] = []

    // @escaping required because callback is added to array
    func enqueueDownload(url: String, onComplete: @escaping (String) -> Void) {
        print("[Queue]: Enqueuing image URL: \(url)")
        downloadQueue.append { _ in
            onComplete("ImageDataPayload_for_\(url)")
        }
    }

    func processQueue() {
        print("[Processing]: Flushing \(downloadQueue.count) image downloads...")
        for job in downloadQueue {
            job("https://sabaycode.com/image.png")
        }
        downloadQueue.removeAll()
    }
}

let loader = ImageLoaderService()
loader.enqueueDownload(url: "angkor-wat.jpg") { payload in
    print("[UI Render]: Displaying downloaded image: \(payload)")
}

loader.processQueue()
\`\`\`

---

## Expected Output / UI Preview

\`\`\`text
[Queue]: Enqueuing image URL: angkor-wat.jpg
[Processing]: Flushing 1 image downloads...
[UI Render]: Displaying downloaded image: ImageDataPayload_for_https://sabaycode.com/image.png
\`\`\`

---

## Try It Yourself

Explain why omitting \`@escaping\` on \`enqueueDownload\` produces a swift compiler error.
`,
      km: `# ៣.១ ជម្រៅ Closures (@escaping vs Non-Escaping)

> **សេចក្តីសង្ខេបប្រតិបត្តិ៖** ការយល់ដឹងពីការ Capture Memory ក្នុង Closures និងការបែងចែករវាង Synchronous Non-Escaping Closures និង Asynchronous \`@escaping\` Closures គឺចាំបាច់បំផុតសម្រាប់ការសរសេរ Networking Architecture។

ជាទូទៅ Closure Parameters ក្នុង Swift គឺជា **Non-Escaping** (រត់រួចរាល់ភ្លាមៗក្នុង Function)។ នៅពេល Closure ត្រូវរត់ជា Asynchronous (ដូចជាក្រោយពេលទាញទិន្នន័យតាម Network ឬរក្សាទុកក្នុង Property), វាត្រូវបានចាត់ទុកជា \`@escaping\`។ ដើម្បីការពារ Retain Cycles, វិស្វករប្រើប្រាស់ Capture List \`[weak self]\`។

---

## មេរៀនអនុវត្ត (Tutorial Walkthrough)

### ១. Capture Lists \`[weak self]\`
ការប្រើប្រាស់ \`[weak self]\` ការពារ Memory Retain Cycles ពេល Closure រក្សាទុក Reference ទៅកាន់ Class Instance។

\`\`\`swift
class ProfileViewModel {
    var username = "Sokha"

    func loadData() {
        fetchFromNetwork { [weak self] result in
            guard let self = self else { return }
            print("Loaded data for \(self.username)")
        }
    }
}
\`\`\`

---

## ឧទាហរណ៍កូដ (Code Example)

\`\`\`swift
import Foundation

class ImageLoaderService {
    private var downloadQueue: [(String) -> Void] = []

    func enqueueDownload(url: String, onComplete: @escaping (String) -> Void) {
        print("[Queue]: Enqueuing image URL: \(url)")
        downloadQueue.append { _ in
            onComplete("ImageDataPayload_for_\(url)")
        }
    }

    func processQueue() {
        print("[Processing]: Flushing \(downloadQueue.count) image downloads...")
        for job in downloadQueue {
            job("https://sabaycode.com/image.png")
        }
        downloadQueue.removeAll()
    }
}

let loader = ImageLoaderService()
loader.enqueueDownload(url: "angkor-wat.jpg") { payload in
    print("[UI Render]: Displaying downloaded image: \(payload)")
}

loader.processQueue()
\`\`\`

---

## លទ្ធផលរំពឹងទុក (Expected Output)

\`\`\`text
[Queue]: Enqueuing image URL: angkor-wat.jpg
[Processing]: Flushing 1 image downloads...
[UI Render]: Displaying downloaded image: ImageDataPayload_for_https://sabaycode.com/image.png
\`\`\`

---

## សាកល្បងដោយខ្លួនឯង (Try It Yourself)

ពន្យល់ពីមូលហេតុដែលការដក \`@escaping\` ចេញពី \`enqueueDownload\` បង្កើតជា Compiler Error។
`
    }
  },
  {
    id: "swift-error-handling-throws",
    title: {
      en: "3.2 Advanced Error Handling (Throws, Try, Catch & Custom Error Types)",
      km: "៣.២ ការគ្រប់គ្រងកំហុសកម្រិតខ្ពស់ (Throws, Try, Catch & Custom Errors)"
    },
    starterCode: `// SabayCode Swift Master Track: Advanced Error Handling
import Foundation

enum KHQRError: Error, LocalizedError {
    case invalidMerchantID
    case insufficientBalance(required: Double, available: Double)
    case networkTimeout

    var errorDescription: String? {
        switch self {
        case .invalidMerchantID:
            return "Merchant identification payload is corrupted or unverified."
        case .insufficientBalance(let req, let avail):
            return "Insufficient funds. Required: $\(req), Available: $\(avail)."
        case .networkTimeout:
            return "Payment gateway connection timed out. Please retry."
        }
    }
}

func processKHQRPayment(merchantID: String, amountUSD: Double, userBalanceUSD: Double) throws -> String {
    guard merchantID.hasPrefix("MERCHANT") else {
        throw KHQRError.invalidMerchantID
    }
    guard userBalanceUSD >= amountUSD else {
        throw KHQRError.insufficientBalance(required: amountUSD, available: userBalanceUSD)
    }

    return "TXN_SUCCESS_\(UUID().uuidString.prefix(8))"
}

do {
    let result = try processKHQRPayment(merchantID: "MERCHANT-001", amountUSD: 100.0, userBalanceUSD: 25.0)
    print("Transaction Successful: \(result)")
} catch let error as KHQRError {
    print("[Payment Failed]: \(error.localizedDescription)")
} catch {
    print("[Unexpected Error]: \(error)")
}
`,
    content: {
      en: `# 3.2 Advanced Error Handling (Throws, Try, Catch & Custom Error Types)

> **Executive Summary:** Swift provides a typed, compile-time enforced error handling system using \`throws\`, \`do-catch\` blocks, and localized error enums, guaranteeing that failure paths are handled gracefully.

Functions that can encounter errors are marked with the \`throws\` keyword. When calling throwing functions, developers express call safety using \`try\` inside a \`do-catch\` block, \`try?\` (which converts throwing results into optional values), or \`try!\` (which asserts that an error will never happen). Custom error enums conforming to \`Error\` or \`LocalizedError\` provide structured domain error diagnostics across application layers.

---

## Tutorial Walkthrough

### 1. \`try\` vs \`try?\` vs \`try!\`
- **\`try\`**: Used inside \`do-catch\` blocks for complete error inspection.
- **\`try?\`**: Converts throwing errors to \`nil\` if an error occurs.
- **\`try!\`**: Disables error propagation and crashes if an error is thrown (use only in static tests).

\`\`\`swift
// Optional conversion with try?
let transactionToken = try? processKHQRPayment(merchantID: "INVALID", amountUSD: 10.0, userBalanceUSD: 50.0)
print(transactionToken ?? "Payment failed silently") // Output: Payment failed silently
\`\`\`

---

## Code Example

\`\`\`swift
import Foundation

enum FileValidationError: Error {
    case fileNotFound(path: String)
    case unauthorizedAccess
}

func readConfigFile(path: String) throws -> String {
    guard path.hasSuffix(".json") else {
        throw FileValidationError.fileNotFound(path: path)
    }
    return "{\"appName\": \"SabayCode iOS\", \"version\": \"2.0\"}"
}

do {
    let config = try readConfigFile(path: "settings.txt")
    print("Config Content: \(config)")
} catch FileValidationError.fileNotFound(let path) {
    print("[File Error]: Could not locate valid JSON config at '\(path)'.")
} catch {
    print("[General Error]: \(error)")
}
\`\`\`

---

## Expected Output / UI Preview

\`\`\`text
[File Error]: Could not locate valid JSON config at 'settings.txt'.
\`\`\`

---

## Try It Yourself

Change the file path to \`"settings.json"\` and verify that the JSON string is successfully returned without entering any \`catch\` block.
`,
      km: `# ៣.២ ការគ្រប់គ្រងកំហុសកម្រិតខ្ពស់ (Throws, Try, Catch & Custom Errors)

> **សេចក្តីសង្ខេបប្រតិបត្តិ៖** Swift ផ្តល់នូវប្រព័ន្ធគ្រប់គ្រងកំហុសទិន្នន័យ (Error Handling) យ៉ាងរឹងមាំដោយប្រើប្រាស់ \`throws\`, \`do-catch\`, និង Custom Error Enums ដើម្បីធានាថាគ្រប់កំហុសទាំងអស់ត្រូវបានដោះស្រាយដោយស្វ័យប្រវត្តិ។

Function ដែលអាចបង្កើតកំហុសត្រូវកំណត់ដោយពាក្យ \`throws\`។ ពេលហៅរត់ ត្រូវប្រើប្រាស់ \`try\` ក្នុង \`do-catch\` block, \`try?\` (បំប្លែងកំហុសទៅជា nil), ឬ \`try!\`។

---

## មេរៀនអនុវត្ត (Tutorial Walkthrough)

### ១. ការប្រៀបធៀប \`try\` vs \`try?\` vs \`try!\`
- **\`try\`**: ប្រើក្នុង \`do-catch\` block សម្រាប់ការដោះស្រាយកំហុសលម្អិត។
- **\`try?\`**: បំប្លែងកំហុសទៅជាតម្លៃ \`nil\`។
- **\`try!\`**: បង្ខំរត់កូដ ហើយនឹង Crash ប្រសិនបើមាន Error។

---

## ឧទាហរណ៍កូដ (Code Example)

\`\`\`swift
import Foundation

enum FileValidationError: Error {
    case fileNotFound(path: String)
    case unauthorizedAccess
}

func readConfigFile(path: String) throws -> String {
    guard path.hasSuffix(".json") else {
        throw FileValidationError.fileNotFound(path: path)
    }
    return "{\"appName\": \"SabayCode iOS\", \"version\": \"2.0\"}"
}

do {
    let config = try readConfigFile(path: "settings.txt")
    print("Config Content: \(config)")
} catch FileValidationError.fileNotFound(let path) {
    print("[File Error]: Could not locate valid JSON config at '\(path)'.")
} catch {
    print("[General Error]: \(error)")
}
\`\`\`

---

## លទ្ធផលរំពឹងទុក (Expected Output)

\`\`\`text
[File Error]: Could not locate valid JSON config at 'settings.txt'.
\`\`\`

---

## សាកល្បងដោយខ្លួនឯង (Try It Yourself)

សាកល្បងប្តូរឈ្មោះ Path ទៅជា \`"settings.json"\` ហើយសង្កេតមើលលទ្ធផលដែលទទួលបាន។
`
    }
  },
  {
    id: "swift-memory-management-arc",
    title: {
      en: "3.3 Memory Management & Automatic Reference Counting (ARC)",
      km: "៣.៣ គ្រប់គ្រង Memory & ARC (Strong, Weak, Unowned References)"
    },
    starterCode: `// SabayCode Swift Master Track: ARC Memory Management
import Foundation

class Student {
    let name: String
    var laptop: Laptop? // Strong reference by default

    init(name: String) {
        self.name = name
        print("[ARC]: Student \(name) allocated in heap.")
    }

    deinit {
        print("[ARC DEINIT]: Student \(name) deallocated from memory!")
    }
}

class Laptop {
    let model: String
    weak var owner: Student? // WEAK reference breaks retain cycle!

    init(model: String) {
        self.model = model
        print("[ARC]: Laptop \(model) allocated in heap.")
    }

    deinit {
        print("[ARC DEINIT]: Laptop \(model) deallocated from memory!")
    }
}

var studentScope: Student? = Student(name: "Chantra")
var laptopScope: Laptop? = Laptop(model: "MacBook Pro M3")

studentScope?.laptop = laptopScope
laptopScope?.owner = studentScope

print("--- Releasing Scope References ---")
studentScope = nil // ARC deallocates Student because Laptop uses 'weak'!
laptopScope = nil  // ARC deallocates Laptop completely!
`,
    content: {
      en: `# 3.3 Memory Management & Automatic Reference Counting (ARC)

> **Executive Summary:** Automatic Reference Counting (ARC) tracks and manages application memory automatically, freeing heap memory allocated by class instances as soon as their strong reference counts drop to zero.

Memory leaks and retain cycles occur when two class instances hold strong references to each other, preventing reference counts from ever reaching zero. iOS developers break retain cycles by marking relationships as **weak** (optional references that automatically zero out when the instance is deallocated) or **unowned** (non-optional references expected to always have a valid instance throughout their lifecycle).

---

## Tutorial Walkthrough

### 1. Strong Reference Cycles
A retain cycle occurs when Instance A references Instance B strongly, and Instance B references Instance A strongly. Neither instance can be deallocated.

### 2. Weak vs Unowned References
- **weak**: Always declared as \`var\` optional (\`weak var owner: User?\`). Does not increment ARC count. Automatically set to \`nil\` when object deallocates.
- **unowned**: Non-optional reference (\`unowned let customer: Customer\`). Does not increment ARC count. Assumes object will never be deallocated while referenced.

---

## Code Example

\`\`\`swift
import Foundation

class Course {
    let title: String
    var instructor: Instructor?

    init(title: String) {
        self.title = title
    }

    deinit { print("Course '\(title)' deallocated.") }
}

class Instructor {
    let name: String
    unowned let assignedCourse: Course // Unowned relationship

    init(name: String, course: Course) {
        self.name = name
        self.assignedCourse = course
    }

    deinit { print("Instructor '\(name)' deallocated.") }
}

var iosCourse: Course? = Course(title: "Swift iOS Masterclass")
var leadTeacher: Instructor? = Instructor(name: "Seyha Nan", course: iosCourse!)

iosCourse?.instructor = leadTeacher

print("Releasing course object...")
iosCourse = nil
leadTeacher = nil
\`\`\`

---

## Expected Output / UI Preview

\`\`\`text
Releasing course object...
Course 'Swift iOS Masterclass' deallocated.
Instructor 'Seyha Nan' deallocated.
\`\`\`

---

## Try It Yourself

Remove \`unowned\` from \`assignedCourse\` and observe how neither \`deinit\` message prints due to a strong retain cycle memory leak.
`,
      km: `# ៣.៣ គ្រប់គ្រង Memory & ARC (Strong, Weak, Unowned References)

> **សេចក្តីសង្ខេបប្រតិបត្តិ៖** Automatic Reference Counting (ARC) គ្រប់គ្រង Memory របស់ App ដោយស្វ័យប្រវត្តិ ដោយដោះលែង Heap Memory ភ្លាមៗនៅពេល Strong Reference Count ធ្លាក់ដល់សូន្យ។

Memory Leaks និង Retain Cycles កើតឡើងនៅពេល Class Instances ពីរទាញ Strong Reference ទៅវិញទៅមក។ វិស្វករ iOS បំបែក Retain Cycles ដោយប្រើប្រាស់ **weak** (Optional Reference ដែលប្តូរទៅ nil ដោយស្វ័យប្រវត្តិ) ឬ **unowned** (Non-optional Reference)។

---

## មេរៀនអនុវត្ត (Tutorial Walkthrough)

### ១. Retain Cycles និងដំណោះស្រាយ
- **weak**: តែងតែប្រកាសជា \`var\` optional (\`weak var owner: User?\`)។ មិនបង្កើន ARC count ឡើយ។
- **unowned**: ប្រើសម្រាប់លក្ខខណ្ឌដែល Reference Object តែងតែមានអត្ថិភាពជានិច្ច។

---

## ឧទាហរណ៍កូដ (Code Example)

\`\`\`swift
import Foundation

class Course {
    let title: String
    var instructor: Instructor?

    init(title: String) {
        self.title = title
    }

    deinit { print("Course '\(title)' deallocated.") }
}

class Instructor {
    let name: String
    unowned let assignedCourse: Course

    init(name: String, course: Course) {
        self.name = name
        self.assignedCourse = course
    }

    deinit { print("Instructor '\(name)' deallocated.") }
}

var iosCourse: Course? = Course(title: "Swift iOS Masterclass")
var leadTeacher: Instructor? = Instructor(name: "Seyha Nan", course: iosCourse!)

iosCourse?.instructor = leadTeacher

print("Releasing course object...")
iosCourse = nil
leadTeacher = nil
\`\`\`

---

## លទ្ធផលរំពឹងទុក (Expected Output)

\`\`\`text
Releasing course object...
Course 'Swift iOS Masterclass' deallocated.
Instructor 'Seyha Nan' deallocated.
\`\`\`

---

## សាកល្បងដោយខ្លួនឯង (Try It Yourself)

សាកល្បងដកពាក្យ \`unowned\` ចេញពី \`assignedCourse\` ហើយសង្កេតមើលថាតើកូដ \`deinit\` រត់ឬទេ។
`
    }
  },
  {
    id: "swift-extensions-type-enhancements",
    title: {
      en: "3.4 Extensions & Type Enhancements",
      km: "៣.៤ Extensions & ការបន្ថែមសមត្ថភាពលើ Types"
    },
    starterCode: `// SabayCode Swift Master Track: Extensions
import Foundation

// Extending built-in Double type with KHR currency formatting
extension Double {
    var asFormattedKHR: String {
        let khrValue = Int(self * 4100.0)
        let formatter = NumberFormatter()
        formatter.numberStyle = .decimal
        let numberString = formatter.string(from: NSNumber(value: khrValue)) ?? "\(khrValue)"
        return "\(numberString) KHR"
    }
}

// Extending String with validation helpers
extension String {
    var isValidCambodianPhone: Bool {
        let phoneRegex = "^(\\+855|0)\\d{8,9}$"
        return self.range(of: phoneRegex, options: .regularExpression) != nil
    }
}

let priceUSD: Double = 12.50
print("Converted Currency: \(priceUSD.asFormattedKHR)")

let phone1 = "012345678"
let phone2 = "invalid-phone"
print("Phone 1 Valid: \(phone1.isValidCambodianPhone)")
print("Phone 2 Valid: \(phone2.isValidCambodianPhone)")
`,
    content: {
      en: `# 3.4 Extensions & Type Enhancements

> **Executive Summary:** Extensions add new functionality, computed properties, initializers, and protocol conformances to existing Swift types without modifying their original source code.

In modular iOS architectures, extensions clean up massive source files by grouping related methods by feature or protocol. You can extend primitive standard library types (\`Double\`, \`String\`, \`Date\`), custom structs, or third-party framework classes. Extensions can add new computed properties, instance methods, type methods, nested types, and new initializers.

---

## Tutorial Walkthrough

### 1. What Extensions Can and Cannot Do
- **Can Add**: Computed properties, new instance/type methods, new initializers, protocol conformances, subscripts.
- **Cannot Add**: Stored properties or property observers (\`willSet\` / \`didSet\`).

---

## Code Example

\`\`\`swift
import Foundation

struct User {
    let firstName: String
    let lastName: String
}

// Separate protocol conformance into an extension for clean code organization
extension User: CustomStringConvertible {
    var description: String {
        return "User Entity: \(firstName) \(lastName)"
    }
}

extension User {
    var initials: String {
        let firstInitial = firstName.first ?? " "
        let lastInitial = lastName.first ?? " "
        return "\(firstInitial)\(lastInitial)".uppercased()
    }
}

let user = User(firstName: "Sokha", lastName: "Heng")
print(user.description)
print("Initials: \(user.initials)")
\`\`\`

---

## Expected Output / UI Preview

\`\`\`text
User Entity: Sokha Heng
Initials: SH
\`\`\`

---

## Try It Yourself

Write an extension on \`Int\` that adds a computed property \`isEven: Bool\` and a method \`times(_ task: () -> Void)\` that executes a closure \`n\` times.
`,
      km: `# ៣.៤ Extensions & ការបន្ថែមសមត្ថភាពលើ Types

> **សេចក្តីសង្ខេបប្រតិបត្តិ៖** Extensions អនុញ្ញាតឱ្យបន្ថែមសមត្ថភាពថ្មីៗ, Computed Properties, Initializers, និង Protocol Conformances ទៅកាន់ Types ដែលមានស្រាប់ដោយមិនបាច់កែប្រែកូដដើមឡើយ។

ក្នុងស្ថាបត្យកម្ម iOS ទំនើប, Extensions ជួយបំបែកកូដឱ្យមានរចនាសម្ព័ន្ធស្អាតបាត។ អ្នកអាចពង្រីកសមត្ថភាពលើ Standard Library Types ដូចជា (\`Double\`, \`String\`, \`Date\`) ឬ Custom Structs បាន។

---

## មេរៀនអនុវត្ត (Tutorial Walkthrough)

### ១. អ្វីដែល Extensions អាចធ្វើបាន និងមិនអាចធ្វើបាន
- **អាចបន្ថែមបាន**: Computed Properties, New Methods, New Initializers, Protocol Conformances។
- **មិនអាចបន្ថែមបាន**: Stored Properties ឬ Property Observers ឡើយ។

---

## ឧទាហរណ៍កូដ (Code Example)

\`\`\`swift
import Foundation

struct User {
    let firstName: String
    let lastName: String
}

extension User: CustomStringConvertible {
    var description: String {
        return "User Entity: \(firstName) \(lastName)"
    }
}

extension User {
    var initials: String {
        let firstInitial = firstName.first ?? " "
        let lastInitial = lastName.first ?? " "
        return "\(firstInitial)\(lastInitial)".uppercased()
    }
}

let user = User(firstName: "Sokha", lastName: "Heng")
print(user.description)
print("Initials: \(user.initials)")
\`\`\`

---

## លទ្ធផលរំពឹងទុក (Expected Output)

\`\`\`text
User Entity: Sokha Heng
Initials: SH
\`\`\`

---

## សាកល្បងដោយខ្លួនឯង (Try It Yourself)

សរសេរ Extension លើ \`Int\` ដែលបន្ថែម Computed Property \`isEven: Bool\` និង Method \`times(_ task: () -> Void)\` ដើម្បីរត់កូដ \`n\` ដង។
`
    }
  },
  {
    id: "swift-property-wrappers",
    title: {
      en: "3.5 Property Wrappers (@propertyWrapper)",
      km: "៣.៥ Property Wrappers (@propertyWrapper)"
    },
    starterCode: `// SabayCode Swift Master Track: Property Wrappers
import Foundation

@propertyWrapper
struct Capitalized {
    private var value: String = ""

    var wrappedValue: String {
        get { value }
        set { value = newValue.capitalized }
    }

    init(wrappedValue: String) {
        self.wrappedValue = wrappedValue
    }
}

@propertyWrapper
struct ClampedUSD {
    private var amount: Double
    private let minUSD: Double
    private let maxUSD: Double

    var wrappedValue: Double {
        get { amount }
        set { amount = min(max(newValue, minUSD), maxUSD) }
    }

    init(wrappedValue: Double, min: Double = 0.0, max: Double = 10000.0) {
        self.minUSD = min
        self.maxUSD = max
        self.amount = min(max(wrappedValue, min), max)
    }
}

struct UserProfile {
    @Capitalized var city: String
    @ClampedUSD(min: 0.0, max: 5000.0) var dailyTransferLimitUSD: Double
}

var profile = UserProfile(city: "phnom penh", dailyTransferLimitUSD: 12000.0)
print("City (Auto-Capitalized): \(profile.city)")
print("Daily Limit (Clamped to Max $5000): $\(profile.dailyTransferLimitUSD)")
`,
    content: {
      en: `# 3.5 Property Wrappers (@propertyWrapper)

> **Executive Summary:** Property wrappers encapsulate property access management logic into reusable custom annotations, serving as the foundational compiler mechanism driving SwiftUI state features like \`@State\`, \`@Binding\`, and \`@AppStorage\`.

A property wrapper is a struct or class annotated with \`@propertyWrapper\` that defines a mandatory \`wrappedValue\` property. When applied to a property, the compiler delegates getter and setter logic directly to the wrapper structure. Property wrappers remove repetitive validation, persistence, and state mutation code from domain models across modern iOS codebases.

---

## Tutorial Walkthrough

### 1. Declaring a Property Wrapper
Define a type annotated with \`@propertyWrapper\` containing a \`wrappedValue\` property.

\`\`\`swift
@propertyWrapper
struct Trimmed {
    private var text: String = ""

    var wrappedValue: String {
        get { text }
        set { text = newValue.trimmingCharacters(in: .whitespacesAndNewlines) }
    }

    init(wrappedValue: String) {
        self.wrappedValue = wrappedValue
    }
}
\`\`\`

---

## Code Example

\`\`\`swift
import Foundation

@propertyWrapper
struct UserDefaultStorage<T> {
    let key: String
    let defaultValue: T

    var wrappedValue: T {
        get {
            return UserDefaults.standard.object(forKey: key) as? T ?? defaultValue
        }
        set {
            UserDefaults.standard.set(newValue, forKey: key)
        }
    }
}

struct AppSettings {
    @UserDefaultStorage(key: "has_completed_onboarding", defaultValue: false)
    static var hasCompletedOnboarding: Bool
}

print("Initial Onboarding Status: \(AppSettings.hasCompletedOnboarding)")
AppSettings.hasCompletedOnboarding = true
print("Updated Onboarding Status: \(AppSettings.hasCompletedOnboarding)")
\`\`\`

---

## Expected Output / UI Preview

\`\`\`text
Initial Onboarding Status: false
Updated Onboarding Status: true
\`\`\`

---

## Try It Yourself

Create a property wrapper \`@NonNegative\` that clamps numeric assignments to a minimum value of \`0\`.
`,
      km: `# ៣.៥ Property Wrappers (@propertyWrapper)

> **សេចក្តីសង្ខេបប្រតិបត្តិ៖** Property Wrappers ជួយវេចខ្ចប់ Logic នៃការគ្រប់គ្រង Property ទៅជា Annotations ដែលអាចប្រើប្រាស់ឡើងវិញបាន ហើយវាជាយន្តការស្នូលនៅពីក្រោយ SwiftUI \`@State\`, \`@Binding\`, និង \`@AppStorage\`។

Property Wrapper គឺជា struct ឬ class ដែលមាន Annotation \`@propertyWrapper\` និងមាន \`wrappedValue\`។ វាជួយកាត់បន្ថយកូដដដែលៗដូចជា Validation ឬ Persistence។

---

## មេរៀនអនុវត្ត (Tutorial Walkthrough)

### ១. ការបង្កើត Property Wrapper
ប្រកាស Type ដែលមាន \`@propertyWrapper\` និងមាន \`wrappedValue\`។

\`\`\`swift
@propertyWrapper
struct Trimmed {
    private var text: String = ""

    var wrappedValue: String {
        get { text }
        set { text = newValue.trimmingCharacters(in: .whitespacesAndNewlines) }
    }

    init(wrappedValue: String) {
        self.wrappedValue = wrappedValue
    }
}
\`\`\`

---

## ឧទាហរណ៍កូដ (Code Example)

\`\`\`swift
import Foundation

@propertyWrapper
struct UserDefaultStorage<T> {
    let key: String
    let defaultValue: T

    var wrappedValue: T {
        get {
            return UserDefaults.standard.object(forKey: key) as? T ?? defaultValue
        }
        set {
            UserDefaults.standard.set(newValue, forKey: key)
        }
    }
}

struct AppSettings {
    @UserDefaultStorage(key: "has_completed_onboarding", defaultValue: false)
    static var hasCompletedOnboarding: Bool
}

print("Initial Onboarding Status: \(AppSettings.hasCompletedOnboarding)")
AppSettings.hasCompletedOnboarding = true
print("Updated Onboarding Status: \(AppSettings.hasCompletedOnboarding)")
\`\`\`

---

## លទ្ធផលរំពឹងទុក (Expected Output)

\`\`\`text
Initial Onboarding Status: false
Updated Onboarding Status: true
\`\`\`

---

## សាកល្បងដោយខ្លួនឯង (Try It Yourself)

បង្កើត Property Wrapper \`@NonNegative\` ដែលកំណត់តម្លៃអប្បបរមាស្មើ \`0\` សម្រាប់លេខ។
`
    }
  }
];
