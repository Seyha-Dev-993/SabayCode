import { Lesson } from '../types';

export const swiftLessonsGroup4: Lesson[] = [
  {
    id: "swift-async-await-structured-concurrency",
    title: {
      en: "4.1 Async/Await & Structured Concurrency",
      km: "៤.១ Async/Await & Structured Concurrency"
    },
    starterCode: `// SabayCode Swift Master Track: Async/Await & Task Groups
import Foundation

struct BankAccountSummary {
    let accountNumber: String
    let balanceUSD: Double
}

func fetchAccountBalance(id: String) async throws -> BankAccountSummary {
    print("[Task]: Fetching balance for \(id) on concurrent background thread...")
    // Simulating network latency asynchronously without blocking thread
    try await Task.sleep(nanoseconds: 500_000_000) // 0.5s sleep
    return BankAccountSummary(accountNumber: id, balanceUSD: 3450.75)
}

// Running async task
Task {
    do {
        let account = try await fetchAccountBalance(id: "ABA-000-888")
        print("[Async Result]: Account \(account.accountNumber) Balance: $\(account.balanceUSD)")
    } catch {
        print("[Async Error]: \(error)")
    }
}
`,
    content: {
      en: `# 4.1 Async/Await & Structured Concurrency

> **Executive Summary:** Introduced in Swift 5.5, native \`async/await\` and structured concurrency (\`Task\`, \`TaskGroup\`, \`async let\`) eliminate completion-handler callback hell, guaranteeing compile-time safe asynchronous execution without thread blocking.

Before \`async/await\`, asynchronous iOS development relied heavily on escaping closures and GCD (\`DispatchQueue\`), which frequently caused memory leaks, missing completion callbacks, and unhandled error states. With \`async/await\`, asynchronous functions yield execution cooperatively using suspended execution points marked with \`await\`. Structured concurrency guarantees that child tasks created within a scope complete before their parent task exits, preventing orphan thread tasks.

---

## Tutorial Walkthrough

### 1. Cooperative Thread Suspension
When execution reaches an \`await\` keyword, the current thread is suspended and freed to perform other work until the asynchronous call completes.

\`\`\`swift
func loadUserProfile() async throws -> UserProfile {
    let rawData = try await networkClient.fetchData(from: "/user/profile")
    return try JSONDecoder().decode(UserProfile.self, from: rawData)
}
\`\`\`

### 2. Parallel Execution with \`async let\`
Execute independent asynchronous operations concurrently in parallel.

\`\`\`swift
async let balanceTask = fetchBalance()
async let transactionsTask = fetchTransactions()

// Await both parallel tasks simultaneously
let (balance, transactions) = try await (balanceTask, transactionsTask)
\`\`\`

---

## Code Example

\`\`\`swift
import Foundation

struct CurrencyExchangeRate {
    let currency: String
    let rateToUSD: Double
}

func fetchExchangeRate(for code: String) async throws -> CurrencyExchangeRate {
    try await Task.sleep(nanoseconds: 200_000_000)
    let rate = code == "KHR" ? 4100.0 : 0.92 // EUR
    return CurrencyExchangeRate(currency: code, rateToUSD: rate)
}

func loadMarketData() async {
    print("--- Starting Parallel Currency Synchronization ---")
    do {
        async let khrTask = fetchExchangeRate(for: "KHR")
        async let eurTask = fetchExchangeRate(for: "EUR")

        let (khr, eur) = try await (khrTask, eurTask)
        print("1 USD = \(Int(khr.rateToUSD)) \(khr.currency)")
        print("1 USD = \(eur.rateToUSD) \(eur.currency)")
        print("--- Parallel Sync Complete ---")
    } catch {
        print("Sync Error: \(error)")
    }
}

Task {
    await loadMarketData()
}
\`\`\`

---

## Expected Output / UI Preview

\`\`\`text
--- Starting Parallel Currency Synchronization ---
1 USD = 4100 KHR
1 USD = 0.92 EUR
--- Parallel Sync Complete ---
\`\`\`

---

## Try It Yourself

Use a \`withThrowingTaskGroup\` to fetch exchange rates for an array of 5 currency strings concurrently.
`,
      km: `# ៤.១ Async/Await & Structured Concurrency

> **សេចក្តីសង្ខេបប្រតិបត្តិ៖** បញ្ចូលក្នុង Swift 5.5, ប្រព័ន្ធ \`async/await\` និង Structured Concurrency (\`Task\`, \`TaskGroup\`, \`async let\`) លុបបំបាត់ Callback Hell និងធានាថាការរត់ Asynchronous កូដមានសុវត្ថិភាពខ្ពស់។

មុនពេលមាន \`async/await\`, កូដ Asynchronous ក្នុង iOS ពឹងផ្អែកលើ Closures និង GCD (\`DispatchQueue\`) ដែលងាយបង្កឱ្យមាន Memory Leaks។ ជាមួយ \`async/await\`, កូដរង់ចាំដោយស្វ័យប្រវត្តិត្រង់ចំណុច \`await\` ដោយមិនទាក់ស្ទះ Thread ឡើយ។ Structured Concurrency ធានាថា Child Tasks ទាំងអស់រត់រួចរាល់មុនពេល Parent Task បញ្ចប់។

---

## មេរៀនអនុវត្ត (Tutorial Walkthrough)

### ១. ការប្រើប្រាស់ \`async let\` សម្រាប់ Parallel Execution
រត់ Asynchronous Operations ដែលមិនពឹងផ្អែកលើគ្នាស្របពេលគ្នា។

\`\`\`swift
async let balanceTask = fetchBalance()
async let transactionsTask = fetchTransactions()

let (balance, transactions) = try await (balanceTask, transactionsTask)
\`\`\`

---

## ឧទាហរណ៍កូដ (Code Example)

\`\`\`swift
import Foundation

struct CurrencyExchangeRate {
    let currency: String
    let rateToUSD: Double
}

func fetchExchangeRate(for code: String) async throws -> CurrencyExchangeRate {
    try await Task.sleep(nanoseconds: 200_000_000)
    let rate = code == "KHR" ? 4100.0 : 0.92
    return CurrencyExchangeRate(currency: code, rateToUSD: rate)
}

func loadMarketData() async {
    print("--- Starting Parallel Currency Synchronization ---")
    do {
        async let khrTask = fetchExchangeRate(for: "KHR")
        async let eurTask = fetchExchangeRate(for: "EUR")

        let (khr, eur) = try await (khrTask, eurTask)
        print("1 USD = \(Int(khr.rateToUSD)) \(khr.currency)")
        print("1 USD = \(eur.rateToUSD) \(eur.currency)")
        print("--- Parallel Sync Complete ---")
    } catch {
        print("Sync Error: \(error)")
    }
}

Task {
    await loadMarketData()
}
\`\`\`

---

## លទ្ធផលរំពឹងទុក (Expected Output)

\`\`\`text
--- Starting Parallel Currency Synchronization ---
1 USD = 4100 KHR
1 USD = 0.92 EUR
--- Parallel Sync Complete ---
\`\`\`

---

## សាកល្បងដោយខ្លួនឯង (Try It Yourself)

សាកល្បងប្រើប្រាស់ \`withThrowingTaskGroup\` ដើម្បីទាញយកអត្រាប្តូរប្រាក់សម្រាប់ Array នៃ Currency Strings ចំនួន ៥ ក្នុងពេលតែមួយ។
`
    }
  },
  {
    id: "swift-actors-data-races",
    title: {
      en: "4.2 Actors & Data Race Prevention",
      km: "៤.២ Actors & ការការពារ Data Races"
    },
    starterCode: `// SabayCode Swift Master Track: Actors & Isolation
import Foundation

// ACTOR: Thread-safe reference type isolating mutable state
actor BankAccountVault {
    private(set) var balanceUSD: Double

    init(initialBalance: Double) {
        self.balanceUSD = initialBalance
    }

    func deposit(amount: Double) {
        balanceUSD += amount
        print("[Actor Vault]: Deposited $\(amount) | Current Balance: $\(balanceUSD)")
    }

    func withdraw(amount: Double) -> Bool {
        guard balanceUSD >= amount else { return false }
        balanceUSD -= amount
        print("[Actor Vault]: Withdrew $\(amount) | Remaining: $\(balanceUSD)")
        return true
    }
}

let vault = BankAccountVault(initialBalance: 1000.0)

Task {
    // Accessing actor methods requires 'await' because actor isolation serializes access
    await vault.deposit(amount: 500.0)
    let success = await vault.withdraw(amount: 200.0)
    print("Withdrawal Result: \(success)")
}
`,
    content: {
      en: `# 4.2 Actors & Data Race Prevention

> **Executive Summary:** Actors are reference types that protect mutable state from data races by serializing access through actor isolation, guaranteeing compile-time thread safety across multi-threaded applications.

A data race occurs when two concurrent threads access the same memory location simultaneously, and at least one access is a write operation. Swift \`actor\` types prevent data races at compile time. Methods and properties inside an actor are isolated; external callers must interact with an actor asynchronously using \`await\`, ensuring that only one thread mutates actor state at any given moment.

---

## Tutorial Walkthrough

### 1. Actor Isolation & Serial Execution
Actors ensure that only a single task can execute inside their scope at a time. Other tasks queue up safely outside actor boundaries.

\`\`\`swift
actor UserCache {
    private var cache: [String: String] = [:]

    func set(_ value: String, for key: String) {
        cache[key] = value
    }

    func get(_ key: String) -> String? {
        return cache[key]
    }
}
\`\`\`

### 2. \`nonisolated\` Keyword
Mark read-only properties or functions as \`nonisolated\` to allow synchronous external access without \`await\`.

\`\`\`swift
actor MerchantStore {
    let merchantID: String // Immutable constant

    nonisolated var idSummary: String {
        return "Merchant ID: \(merchantID)"
    }
}
\`\`\`

---

## Code Example

\`\`\`swift
import Foundation

actor ConcurrentSeatBookingSystem {
    private var availableSeats: Set<Int>

    init(totalSeats: Int) {
        self.availableSeats = Set(1...totalSeats)
    }

    func bookSeat(seatNumber: Int, user: String) -> Bool {
        if availableSeats.contains(seatNumber) {
            availableSeats.remove(seatNumber)
            print("[Booking SUCCESS]: Seat #\(seatNumber) confirmed for \(user).")
            return true
        } else {
            print("[Booking FAILED]: Seat #\(seatNumber) unavailable for \(user).")
            return false
        }
    }
}

let system = ConcurrentSeatBookingSystem(totalSeats: 2)

Task {
    async let userA = system.bookSeat(seatNumber: 1, user: "Sokha")
    async let userB = system.bookSeat(seatNumber: 1, user: "Chantra") // Concurrent collision!

    let _ = await [userA, userB]
}
\`\`\`

---

## Expected Output / UI Preview

\`\`\`text
[Booking SUCCESS]: Seat #1 confirmed for Sokha.
[Booking FAILED]: Seat #1 unavailable for Chantra.
\`\`\`

---

## Try It Yourself

Add a \`nonisolated var totalInitialCapacity: Int\` property to \`ConcurrentSeatBookingSystem\` and access it without using \`await\`.
`,
      km: `# ៤.២ Actors & ការការពារ Data Races

> **សេចក្តីសង្ខេបប្រតិបត្តិ៖** Actors គឺជា Reference Types ដែលការពារ Mutable State ពី Data Races ដោយសៀរៀល (Serializing) ការចូលប្រើប្រាស់ និងធានាសុវត្ថិភាព Thread ត្រឹមរយ:ពេល Compile Time។

Data Race កើតឡើងនៅពេល Threads ច្រើនចូលប្រើ Memory តែមួយក្នុងពេលតែមួយ ហើយមានយ៉ាងហោចណាស់ Thread មួយធ្វើការកែប្រែទិន្នន័យ។ Swift \`actor\` ការពារ Data Races ដោយតម្រូវឱ្យការហៅពីខាងក្រៅប្រើប្រាស់ \`await\` ជានិច្ច។

---

## មេរៀនអនុវត្ត (Tutorial Walkthrough)

### ១. Actor Isolation
Actor ធានាថាមានតែ Task មួយប៉ុណ្ណោះដែលអាចរត់ក្នុង Scope របស់វាក្នុងពេលតែមួយ។

\`\`\`swift
actor UserCache {
    private var cache: [String: String] = [:]

    func set(_ value: String, for key: String) {
        cache[key] = value
    }
}
\`\`\`

---

## ឧទាហរណ៍កូដ (Code Example)

\`\`\`swift
import Foundation

actor ConcurrentSeatBookingSystem {
    private var availableSeats: Set<Int>

    init(totalSeats: Int) {
        self.availableSeats = Set(1...totalSeats)
    }

    func bookSeat(seatNumber: Int, user: String) -> Bool {
        if availableSeats.contains(seatNumber) {
            availableSeats.remove(seatNumber)
            print("[Booking SUCCESS]: Seat #\(seatNumber) confirmed for \(user).")
            return true
        } else {
            print("[Booking FAILED]: Seat #\(seatNumber) unavailable for \(user).")
            return false
        }
    }
}

let system = ConcurrentSeatBookingSystem(totalSeats: 2)

Task {
    async let userA = system.bookSeat(seatNumber: 1, user: "Sokha")
    async let userB = system.bookSeat(seatNumber: 1, user: "Chantra")

    let _ = await [userA, userB]
}
\`\`\`

---

## លទ្ធផលរំពឹងទុក (Expected Output)

\`\`\`text
[Booking SUCCESS]: Seat #1 confirmed for Sokha.
[Booking FAILED]: Seat #1 unavailable for Chantra.
\`\`\`

---

## សាកល្បងដោយខ្លួនឯង (Try It Yourself)

បន្ថែម \`nonisolated var totalInitialCapacity: Int\` ទៅកាន់ \`ConcurrentSeatBookingSystem\` ហើយសាកល្បងហៅរត់ដោយមិនប្រើប្រាស់ \`await\`។
`
    }
  },
  {
    id: "swift-mainactor-ui-dispatch",
    title: {
      en: "4.3 @MainActor & UI Thread Dispatching",
      km: "៤.៣ @MainActor & ការ Dispatch លើ UI Thread"
    },
    starterCode: `// SabayCode Swift Master Track: @MainActor State Synchronization
import Foundation

@MainActor
class ProfileViewModel {
    var username: String = "Guest"
    var isRefreshing: Bool = false

    func updateUIState(newUsername: String) {
        // Automatically runs on Main Thread!
        self.username = newUsername
        self.isRefreshing = false
        print("[@MainActor]: UI State Updated -> Username: \(username) on Main Thread!")
    }
}

let viewModel = ProfileViewModel()

Task {
    // Calling @MainActor methods from outside main thread safely hops to Main Thread
    await viewModel.updateUIState(newUsername: "Seyha_Senior_iOS")
}
`,
    content: {
      en: `# 4.3 @MainActor & UI Thread Dispatching

> **Executive Summary:** The \`@MainActor\` global actor guarantees that UI state updates in SwiftUI and UIKit execute exclusively on the main thread, preventing graphics glitching and purple runtime warnings.

In iOS app development, UIKit views and SwiftUI state properties must strictly be mutated on the main queue. \`@MainActor\` is a global actor provided by Swift concurrency. Annotating ViewModels, classes, or individual functions with \`@MainActor\` enforces that all underlying state mutations, delegate callbacks, and UI updates execute safely on the main thread at compile time.

---

## Tutorial Walkthrough

### 1. Annotating Classes with \`@MainActor\`
Annotating an entire ViewModel class automatically isolates all stored properties and instance methods to the main actor.

\`\`\`swift
@MainActor
class FeedViewModel: ObservableObject {
    @Published var posts: [String] = []

    func fetchPosts() async {
        // Fetch from background thread, then automatically jump back to main thread to update posts
        let newPosts = try? await NetworkService.getFeed()
        self.posts = newPosts ?? []
    }
}
\`\`\`

---

## Code Example

\`\`\`swift
import Foundation

@MainActor
struct UIStatePresenter {
    static func renderStatusBanner(message: String) {
        print("[Main Thread UI Render]: \(message)")
    }
}

func performBackgroundDownload() async {
    print("[Background Thread]: Downloading image asset payload...")
    try? await Task.sleep(nanoseconds: 100_000_000)

    // Hop back to MainActor for UI Presentation
    await UIStatePresenter.renderStatusBanner(message: "Download Completed Successfully!")
}

Task {
    await performBackgroundDownload()
}
\`\`\`

---

## Expected Output / UI Preview

\`\`\`text
[Background Thread]: Downloading image asset payload...
[Main Thread UI Render]: Download Completed Successfully!
\`\`\`

---

## Try It Yourself

Annotate a function parameter closure with \`@MainActor () -> Void\` to guarantee that the callback runs on the main queue.
`,
      km: `# ៤.៣ @MainActor & ការ Dispatch លើ UI Thread

> **សេចក្តីសង្ខេបប្រតិបត្តិ៖** Global actor \`@MainActor\` ធានាថាការកែប្រែ State និង UI ក្នុង SwiftUI/UIKit ដំណើរការតែនៅលើ Main Thread ប៉ុណ្ណោះ ដើម្បីការពារកំហុស Graphics និង Purple Runtime Warnings។

ក្នុងកម្មវិធី iOS, UI ត្រូវតែកែប្រែនៅលើ Main Thread ជានិច្ច។ ការដាក់ Annotation \`@MainActor\` លើ ViewModels ឬ Classes ធានាថាគ្រប់ State Mutations ទាំងអស់ត្រូវបានរត់លើ Main Thread ដោយស្វ័យប្រវត្តិ។

---

## មេរៀនអនុវត្ត (Tutorial Walkthrough)

### ១. ការប្រើប្រាស់ \`@MainActor\` លើ ViewModel
កំណត់ \`@MainActor\` លើ Class ដើម្បីបំបែកទិន្នន័យឱ្យរត់លើ Main Thread។

\`\`\`swift
@MainActor
class FeedViewModel: ObservableObject {
    @Published var posts: [String] = []
}
\`\`\`

---

## ឧទាហរណ៍កូដ (Code Example)

\`\`\`swift
import Foundation

@MainActor
struct UIStatePresenter {
    static func renderStatusBanner(message: String) {
        print("[Main Thread UI Render]: \(message)")
    }
}

func performBackgroundDownload() async {
    print("[Background Thread]: Downloading image asset payload...")
    try? await Task.sleep(nanoseconds: 100_000_000)

    await UIStatePresenter.renderStatusBanner(message: "Download Completed Successfully!")
}

Task {
    await performBackgroundDownload()
}
\`\`\`

---

## លទ្ធផលរំពឹងទុក (Expected Output)

\`\`\`text
[Background Thread]: Downloading image asset payload...
[Main Thread UI Render]: Download Completed Successfully!
\`\`\`

---

## សាកល្បងដោយខ្លួនឯង (Try It Yourself)

សាកល្បងដាក់ Annotation \`@MainActor () -> Void\` លើ Closure Parameter ដើម្បីធានាថា Callback រត់លើ Main Thread។
`
    }
  }
];

export const swiftLessonsGroup5: Lesson[] = [
  {
    id: "swiftui-declarative-syntax-layout",
    title: {
      en: "5.1 SwiftUI Declarative Syntax & Stacks Layout",
      km: "៥.១ គ្រឹះ SwiftUI Declarative Syntax & Stacks Layout"
    },
    starterCode: `// SabayCode Swift Master Track: SwiftUI Layout Engine
import Foundation

// Conceptual representation of SwiftUI Declarative Layout Structure
struct MockSwiftUIView {
    var body: String {
        return """
        VStack(spacing: 16) {
            HStack {
                Image("sabay_logo")
                Text("SabayCode iOS Track")
                    .font(.headline)
                    .foregroundColor(.orange)
            }
            ZStack {
                RoundedRectangle(cornerRadius: 12)
                    .fill(Color.purple.opacity(0.1))
                Text("Declarative Layout Active")
                    .padding()
            }
        }
        .padding()
        """
    }
}

let view = MockSwiftUIView()
print("--- SwiftUI Rendered Hierarchy Tree ---")
print(view.body)
`,
    content: {
      en: `# 5.1 SwiftUI Declarative Syntax & Stacks Layout

> **Executive Summary:** SwiftUI is Apple's modern, declarative framework for building user interfaces across all Apple platforms using composable stack layouts (\`VStack\`, \`HStack\`, \`ZStack\`), flexible frames, and view modifiers.

Declarative UI programming shifts developer focus from *how* to construct interface hierarchies step-by-step (imperative UIKit style) to *what* the interface should look like for any given state. In SwiftUI, every view conforms to the \`View\` protocol requiring a computed property \`var body: some View\`. Layout compositions rely on **VStack** (vertical alignment), **HStack** (horizontal alignment), and **ZStack** (back-to-front depth layering).

---

## Tutorial Walkthrough

### 1. View Modifiers Order Matters
In SwiftUI, chaining view modifiers returns a new wrapped view at each step. Modifier order directly influences rendering layout.

\`\`\`swift
// Padding applied before background fills expanded container:
Text("SabayCode")
    .padding()
    .background(Color.orange)
    .cornerRadius(8)
\`\`\`

### 2. View Composition
Break complex layouts into smaller, reusable child views to keep your view hierarchy modular and performant.

---

## Code Example

\`\`\`swift
import Foundation

// Simulated SwiftUI View Model
struct CambodianCourseCard {
    let title: String
    let levelBadge: String
    let isCompleted: Bool

    var layoutDescription: String {
        return """
        [Card View Container]
        ├── HStack (Space-Between)
        │   ├── Icon: "swift_logo_orange"
        │   └── VStack (Leading Alignment)
        │       ├── Text: "\(title)" [Font: Bold Headline]
        │       └── Text: "Level: \(levelBadge)" [Font: Subheadline Gray]
        └── Badge View: \(isCompleted ? "Completed [Checkmark]" : "In Progress")
        """
    }
}

let card = CambodianCourseCard(title: "Mastering Swift Concurrency", levelBadge: "Advanced", isCompleted: true)
print(card.layoutDescription)
\`\`\`

---

## Expected Output / UI Preview

\`\`\`text
[Card View Container]
├── HStack (Space-Between)
│   ├── Icon: "swift_logo_orange"
│   └── VStack (Leading Alignment)
│       ├── Text: Mastering Swift Concurrency [Font: Bold Headline]
│       └── Text: Level: Advanced [Font: Subheadline Gray]
└── Badge View: Completed [Checkmark]
\`\`\`

---

## Try It Yourself

Sketch the view layout for an ABA KHQR payment receipt using \`VStack\`, \`HStack\`, and \`Spacer()\`.
`,
      km: `# ៥.១ គ្រឹះ SwiftUI Declarative Syntax & Stacks Layout

> **សេចក្តីសង្ខេបប្រតិបត្តិ៖** SwiftUI គឺជា Framework ទំនើបរបស់ Apple សម្រាប់បង្កើត UI លើ Apple Platforms ដោយប្រើប្រាស់ Declarative Syntax ជាមួយ \`VStack\`, \`HStack\`, \`ZStack\` និង View Modifiers។

Declarative UI ផ្តោតលើអ្វីដែល UI ត្រូវបង្ហាញតាមរៀងរាល់ State។ គ្រប់ View ក្នុង SwiftUI Conform ទៅនឹង \`View\` Protocol ដែលមាន \`var body: some View\`។ រចនាសម្ព័ន្ធ Layout ប្រើប្រាស់ **VStack** (ឈរ), **HStack** (ដេក) និង **ZStack** (ជាន់ពីលើគ្នា)។

---

## មេរៀនអនុវត្ត (Tutorial Walkthrough)

### ១. លំដាប់នៃ View Modifiers
លំដាប់នៃការប្រើប្រាស់ View Modifiers មានឥទ្ធិពលផ្ទាល់លើការបង្ហាញ UI។

\`\`\`swift
Text("SabayCode")
    .padding()
    .background(Color.orange)
    .cornerRadius(8)
\`\`\`

---

## ឧទាហរណ៍កូដ (Code Example)

\`\`\`swift
import Foundation

struct CambodianCourseCard {
    let title: String
    let levelBadge: String
    let isCompleted: Bool

    var layoutDescription: String {
        return """
        [Card View Container]
        ├── HStack (Space-Between)
        │   ├── Icon: "swift_logo_orange"
        │   └── VStack (Leading Alignment)
        │       ├── Text: "\(title)" [Font: Bold Headline]
        │       └── Text: "Level: \(levelBadge)" [Font: Subheadline Gray]
        └── Badge View: \(isCompleted ? "Completed [Checkmark]" : "In Progress")
        """
    }
}

let card = CambodianCourseCard(title: "Mastering Swift Concurrency", levelBadge: "Advanced", isCompleted: true)
print(card.layoutDescription)
\`\`\`

---

## លទ្ធផលរំពឹងទុក (Expected Output)

\`\`\`text
[Card View Container]
├── HStack (Space-Between)
│   ├── Icon: "swift_logo_orange"
│   └── VStack (Leading Alignment)
│       ├── Text: Mastering Swift Concurrency [Font: Bold Headline]
│       └── Text: Level: Advanced [Font: Subheadline Gray]
└── Badge View: Completed [Checkmark]
\`\`\`

---

## សាកល្បងដោយខ្លួនឯង (Try It Yourself)

សាកល្បងរចនាទម្រង់ Layout នៃវិក្កយបត្រ ABA KHQR ដោយប្រើប្រាស់ \`VStack\`, \`HStack\`, និង \`Spacer()\`.
`
    }
  },
  {
    id: "swiftui-state-management",
    title: {
      en: "5.2 SwiftUI State Management (@State, @Binding, @StateObject, @EnvironmentObject)",
      km: "៥.២ ការគ្រប់គ្រង State ក្នុង SwiftUI (@State, @Binding, @StateObject)"
    },
    starterCode: `// SabayCode Swift Master Track: SwiftUI State Flow
import Foundation

// Simulated SwiftUI Reactive State Model
class CartViewModel {
    var itemsCount: Int = 0 {
        didSet {
            onStateChanged?(itemsCount)
        }
    }
    var onStateChanged: ((Int) -> Void)?

    func addItem() {
        itemsCount += 1
    }
}

let cartVM = CartViewModel()
cartVM.onStateChanged = { newCount in
    print("[SwiftUI Reactive Binding]: State mutated! Re-rendering Cart UI with count: \(newCount)")
}

print("Initial Cart State: \(cartVM.itemsCount)")
cartVM.addItem()
cartVM.addItem()
`,
    content: {
      en: `# 5.2 SwiftUI State Management (@State, @Binding, @StateObject, @EnvironmentObject)

> **Executive Summary:** SwiftUI drives UI rendering through a single source of truth using property wrappers (\`@State\`, \`@Binding\`, \`@StateObject\`, \`@ObservedObject\`, and \`@EnvironmentObject\`), automatically re-evaluating body hierarchy when state mutates.

State management property wrappers serve distinct architectural purposes:
- **\`@State\`**: Owned local view value storage (private state managed by the current view).
- **\`@Binding\`**: Read-write reference to a state value owned by a parent view.
- **\`@StateObject\`**: Instantiates and owns the lifecycle of an \`ObservableObject\` ViewModel.
- **\`@ObservedObject\`**: Subscribes to an existing \`ObservableObject\` passed into a child view.
- **\`@EnvironmentObject\`**: Injects shared dependencies globally down the view hierarchy tree.

---

## Tutorial Walkthrough

### 1. State Flow Hierarchy Matrix

| Property Wrapper | Lifecycle Owner | Typical Usage |
| :--- | :--- | :--- |
| **\`@State\`** | Current View | Local toggles, text field inputs, simple primitives |
| **\`@Binding\`** | Parent View | Two-way binding passed into child controls |
| **\`@StateObject\`** | Current View | Instantiating ViewModels (\`ObservableObject\`) |
| **\`@ObservedObject\`** | External Parent | Receiving existing ViewModels in child views |
| **\`@EnvironmentObject\`** | App / Root View | Global app settings, auth sessions, theme managers |

---

## Code Example

\`\`\`swift
import Foundation

// View Model conforming to ObservableObject
class CounterViewModel {
    var count: Int = 0

    func increment() {
        count += 1
        print("[ViewModel]: Count updated to \(count)")
    }
}

// Parent View owning ViewModel via @StateObject
struct ParentViewSimulator {
    let viewModel = CounterViewModel() // Represents @StateObject owner

    func render() {
        print("Parent View Rendered | Count: \(viewModel.count)")
    }
}

let parent = ParentViewSimulator()
parent.render()
parent.viewModel.increment()
parent.render()
\`\`\`

---

## Expected Output / UI Preview

\`\`\`text
Parent View Rendered | Count: 0
[ViewModel]: Count updated to 1
Parent View Rendered | Count: 1
\`\`\`

---

## Try It Yourself

Explain why creating an \`ObservableObject\` instance with \`@ObservedObject\` inside a view body causes bugged object re-initialization on view renders.
`,
      km: `# ៥.២ ការគ្រប់គ្រង State ក្នុង SwiftUI (@State, @Binding, @StateObject)

> **សេចក្តីសង្ខេបប្រតិបត្តិ៖** SwiftUI ធ្វើការ Re-render UI ដោយស្វ័យប្រវត្តិតាមរយៈ Single Source of Truth ដោយប្រើប្រាស់ Property Wrappers ដូចជា (\`@State\`, \`@Binding\`, \`@StateObject\`, \`@ObservedObject\`, \`@EnvironmentObject\`)។

- **\`@State\`**: រក្សាទុកតម្លៃ Local ផ្ទាល់ខ្លួនរបស់ View។
- **\`@Binding\`**: តំណភ្ជាប់អាន/សរសេរទៅកាន់ State របស់ Parent View។
- **\`@StateObject\`**: បង្កើត និងគ្រប់គ្រង Lifecycle របស់ ViewModel (\`ObservableObject\`)។
- **\`@EnvironmentObject\`**: ចាក់បញ្ចូល Dependency សកល (Global State) ទៅកាន់ View Hierarchy។

---

## មេរៀនអនុវត្ត (Tutorial Walkthrough)

### ១. តារាងប្រៀបធៀប State Property Wrappers

| Property Wrapper | ម្ចាស់ Lifecycle | ការប្រើប្រាស់ទូទៅ |
| :--- | :--- | :--- |
| **\`@State\`** | Current View | Local toggles, Text fields |
| **\`@Binding\`** | Parent View | Two-way binding ទៅកាន់ Child View |
| **\`@StateObject\`** | Current View | បង្កើត ViewModel ថ្មី |
| **\`@EnvironmentObject\`** | Root View | Global User Session, Theme Settings |

---

## ឧទាហរណ៍កូដ (Code Example)

\`\`\`swift
import Foundation

class CounterViewModel {
    var count: Int = 0

    func increment() {
        count += 1
        print("[ViewModel]: Count updated to \(count)")
    }
}

struct ParentViewSimulator {
    let viewModel = CounterViewModel()

    func render() {
        print("Parent View Rendered | Count: \(viewModel.count)")
    }
}

let parent = ParentViewSimulator()
parent.render()
parent.viewModel.increment()
parent.render()
\`\`\`

---

## លទ្ធផលរំពឹងទុក (Expected Output)

\`\`\`text
Parent View Rendered | Count: 0
[ViewModel]: Count updated to 1
Parent View Rendered | Count: 1
\`\`\`

---

## សាកល្បងដោយខ្លួនឯង (Try It Yourself)

ពន្យល់ពីមូលហេតុដែលការបង្កើត \`ObservableObject\` ដោយប្រើ \`@ObservedObject\` ក្នុង View Body អាចបង្កជា Bug ពេល View ធ្វើ Re-render។
`
    }
  },
  {
    id: "swiftui-navigation-lists",
    title: {
      en: "5.3 SwiftUI NavigationStack & Performant Lists",
      km: "៥.៣ SwiftUI NavigationStack & កម្រងបញ្ជី Lists"
    },
    starterCode: `// SabayCode Swift Master Track: SwiftUI NavigationStack & Lists
import Foundation

struct StudentRowItem: Identifiable {
    let id = UUID()
    let name: String
    let hometown: String
}

let students = [
    StudentRowItem(name: "Sokha Heng", hometown: "Phnom Penh"),
    StudentRowItem(name: "Chantra Keo", hometown: "Siem Reap"),
    StudentRowItem(name: "Vannak Meas", hometown: "Battambang")
]

print("--- NavigationStack View Stack Simulation ---")
print("Root Destination: Student Directory List")
for student in students {
    print("  └── [NavigationLink]: \(student.name) (\(student.hometown))")
}
`,
    content: {
      en: `# 5.3 SwiftUI NavigationStack & Performant Lists

> **Executive Summary:** Modern SwiftUI navigation uses \`NavigationStack\` with type-safe path bindings (\`NavigationPath\`) and performant lazily loaded \`List\` view components for smooth list rendering.

Deprecated \`NavigationView\` has been replaced in iOS 16+ with **\`NavigationStack\`**. Type-safe navigation paths allow developers to push custom data models onto the navigation stack using \`.navigationDestination(for: Model.self)\`. Combined with \`List\` (which recycles view cells efficiently for thousands of dynamic items), iOS applications achieve fluid 120Hz scrolling performance.

---

## Tutorial Walkthrough

### 1. Value-Based Navigation Destinations
Bind data types directly to destination views.

\`\`\`swift
NavigationStack {
    List(courseList) { course in
        NavigationLink(value: course) {
            CourseRowView(course: course)
        }
    }
    .navigationDestination(for: CourseModel.self) { selectedCourse in
        CourseDetailView(course: selectedCourse)
    }
}
\`\`\`

---

## Code Example

\`\`\`swift
import Foundation

struct CambodianProvince: Identifiable, Hashable {
    let id = UUID()
    let name: String
    let population: Int
}

let provinces = [
    CambodianProvince(name: "Phnom Penh", population: 2280000),
    CambodianProvince(name: "Siem Reap", population: 1015000),
    CambodianProvince(name: "Battambang", population: 987000)
]

print("--- Simulated Navigation Path Push ---")
func pushDestination(for province: CambodianProvince) {
    print("Pushing NavigationStack -> Destination: DetailView(Province: \(province.name), Pop: \(province.population))")
}

pushDestination(for: provinces[1]) // Pushing Siem Reap
\`\`\`

---

## Expected Output / UI Preview

\`\`\`text
--- Simulated Navigation Path Push ---
Pushing NavigationStack -> Destination: DetailView(Province: Siem Reap, Pop: 1015000)
\`\`\`

---

## Try It Yourself

Add programmatic pop-to-root functionality by manipulating a \`NavigationPath\` array instance.
`,
      km: `# ៥.៣ SwiftUI NavigationStack & កម្រងបញ្ជី Lists

> **សេចក្តីសង្ខេបប្រតិបត្តិ៖** ការរៀបចំ Navigation ទំនើបក្នុង SwiftUI ប្រើប្រាស់ \`NavigationStack\` ជាមួយ Type-Safe Path Bindings (\`NavigationPath\`) និង \`List\` សម្រាប់ទាញយកសមត្ថភាព Scrolling លឿនរហ័ស 120Hz។

\`NavigationView\` ចាស់ត្រូវជំនួសដោយ **\`NavigationStack\`** ចាប់ពី iOS 16+។ \`List\` អនុញ្ញាតឱ្យបង្ហាញទិន្នន័យ dynamic item រាប់ពាន់ដោយប្រើប្រាស់ Memory ទាប។

---

## មេរៀនអនុវត្ត (Tutorial Walkthrough)

### ១. Value-Based Navigation
ភ្ជាប់ Data Types ផ្ទាល់ទៅកាន់ Destination Views។

\`\`\`swift
NavigationStack {
    List(courseList) { course in
        NavigationLink(value: course) {
            CourseRowView(course: course)
        }
    }
    .navigationDestination(for: CourseModel.self) { selectedCourse in
        CourseDetailView(course: selectedCourse)
    }
}
\`\`\`

---

## ឧទាហរណ៍កូដ (Code Example)

\`\`\`swift
import Foundation

struct CambodianProvince: Identifiable, Hashable {
    let id = UUID()
    let name: String
    let population: Int
}

let provinces = [
    CambodianProvince(name: "Phnom Penh", population: 2280000),
    CambodianProvince(name: "Siem Reap", population: 1015000),
    CambodianProvince(name: "Battambang", population: 987000)
]

print("--- Simulated Navigation Path Push ---")
func pushDestination(for province: CambodianProvince) {
    print("Pushing NavigationStack -> Destination: DetailView(Province: \(province.name), Pop: \(province.population))")
}

pushDestination(for: provinces[1])
\`\`\`

---

## លទ្ធផលរំពឹងទុក (Expected Output)

\`\`\`text
--- Simulated Navigation Path Push ---
Pushing NavigationStack -> Destination: DetailView(Province: Siem Reap, Pop: 1015000)
\`\`\`

---

## សាកល្បងដោយខ្លួនឯង (Try It Yourself)

សាកល្បងបន្ថែមប្រព័ន្ធ Pop-to-Root តាមរយៈការកែប្រែអថេរ \`NavigationPath\`។
`
    }
  },
  {
    id: "swiftui-animations-transitions",
    title: {
      en: "5.4 SwiftUI Animations & Transitions",
      km: "៥.៤ SwiftUI Animations & Transitions"
    },
    starterCode: `// SabayCode Swift Master Track: SwiftUI Animations
import Foundation

struct AnimationStateSimulator {
    var isExpanded: Bool = false

    mutating func toggleWithSpringAnimation() {
        print("[Animation Triggered]: withAnimation(.spring(response: 0.4, dampingFraction: 0.7))")
        isExpanded.toggle()
        print("UI State Transformation -> Container Height: \(isExpanded ? "300pt" : "60pt")")
    }
}

var sim = AnimationStateSimulator()
sim.toggleWithSpringAnimation()
sim.toggleWithSpringAnimation()
`,
    content: {
      en: `# 5.4 SwiftUI Animations & Transitions

> **Executive Summary:** SwiftUI makes fluid 60/120fps animations effortless using implicit modifiers (\`.animation()\`), explicit block triggers (\`withAnimation\`), and physics-based spring interpolation.

SwiftUI interpolates view state changes smoothly across render frames. Developers trigger animations implicitly by attaching \`.animation(_:value:)\` to a view modifier chain or explicitly by wrapping state mutations inside \`withAnimation { ... }\`. Physics-based spring animations (\`.spring(response:dampingFraction:)\`) deliver natural fluid feedback without artificial keyframe calculations.

---

## Tutorial Walkthrough

### 1. Implicit vs Explicit Animations
- **Implicit**: Attached to view hierarchy, triggers whenever bound state changes.
- **Explicit**: Wrapped around state mutation calls inside button actions or callbacks.

\`\`\`swift
// Explicit Animation Trigger
Button("Toggle Card") {
    withAnimation(.easeInOut(duration: 0.3)) {
        isCardExpanded.toggle()
    }
}
\`\`\`

---

## Code Example

\`\`\`swift
import Foundation

struct ParticlePulseAnimation {
    var scale: Double = 1.0
    var opacity: Double = 1.0

    mutating func animatePulse() {
        print("Frame 1: Scale \(scale) | Opacity \(opacity)")
        scale = 1.5
        opacity = 0.2
        print("Frame 60 (Spring Target): Scale \(scale) | Opacity \(opacity)")
    }
}

var pulse = ParticlePulseAnimation()
pulse.animatePulse()
\`\`\`

---

## Expected Output / UI Preview

\`\`\`text
Frame 1: Scale 1.0 | Opacity 1.0
Frame 60 (Spring Target): Scale 1.5 | Opacity 0.2
\`\`\`

---

## Try It Yourself

Combine custom view transitions (\`.transition(.scale.combined(with: .opacity))\`) with matched geometry effects (\`matchedGeometryEffect\`).
`,
      km: `# ៥.៤ SwiftUI Animations & Transitions

> **សេចក្តីសង្ខេបប្រតិបត្តិ៖** SwiftUI បង្កើត Animation រលូន 60/120fps ដោយងាយស្រួលតាមរយៈ \`.animation()\`, \`withAnimation\`, និង Physics-Based Spring Interpolation។

SwiftUI ធ្វើការគណនាប្តូរ State នៃ View ដោយស្វ័យប្រវត្តិនីមួយៗ Render Frame។ ការប្រើប្រាស់ Spring Animation (\`.spring(response:dampingFraction:)\`) ផ្តល់នូវអារម្មណ៍ធម្មជាតិ។

---

## មេរៀនអនុវត្ត (Tutorial Walkthrough)

### ១. Explicit Animations ជាមួយ \`withAnimation\`
វេចខ្ចប់ការកែប្រែ State ក្នុង \`withAnimation\` Block។

\`\`\`swift
Button("Toggle Card") {
    withAnimation(.easeInOut(duration: 0.3)) {
        isCardExpanded.toggle()
    }
}
\`\`\`

---

## ឧទាហរណ៍កូដ (Code Example)

\`\`\`swift
import Foundation

struct ParticlePulseAnimation {
    var scale: Double = 1.0
    var opacity: Double = 1.0

    mutating func animatePulse() {
        print("Frame 1: Scale \(scale) | Opacity \(opacity)")
        scale = 1.5
        opacity = 0.2
        print("Frame 60 (Spring Target): Scale \(scale) | Opacity \(opacity)")
    }
}

var pulse = ParticlePulseAnimation()
pulse.animatePulse()
\`\`\`

---

## លទ្ធផលរំពឹងទុក (Expected Output)

\`\`\`text
Frame 1: Scale 1.0 | Opacity 1.0
Frame 60 (Spring Target): Scale 1.5 | Opacity 0.2
\`\`\`

---

## សាកល្បងដោយខ្លួនឯង (Try It Yourself)

សាកល្បងប្រើប្រាស់ Custom View Transition (\`.transition(.scale.combined(with: .opacity))\`)។
`
    }
  }
];

export const swiftLessonsGroup6: Lesson[] = [
  {
    id: "uikit-viewcontrollers-views",
    title: {
      en: "6.1 UIKit ViewControllers & View Lifecycle",
      km: "៦.១ UIKit ViewControllers & View Lifecycle"
    },
    starterCode: `// SabayCode Swift Master Track: UIKit View Lifecycle
import Foundation

class BaseViewController {
    func viewDidLoad() {
        print("1. viewDidLoad(): View hierarchy loaded into memory. Ideal for one-time setup.")
    }

    func viewWillAppear() {
        print("2. viewWillAppear(): View is about to become visible on screen.")
    }

    func viewDidAppear() {
        print("3. viewDidAppear(): View fully presented on screen. Start animations/timers.")
    }

    func viewWillDisappear() {
        print("4. viewWillDisappear(): View is about to be dismissed.")
    }
}

let vc = BaseViewController()
vc.viewDidLoad()
vc.viewWillAppear()
vc.viewDidAppear()
vc.viewWillDisappear()
`,
    content: {
      en: `# 6.1 UIKit ViewControllers & View Lifecycle

> **Executive Summary:** Understanding the imperative UIKit lifecycle events (\`viewDidLoad\`, \`viewWillAppear\`, \`viewDidAppear\`, \`viewWillDisappear\`, \`viewDidDisappear\`) remains essential for maintaining legacy iOS codebases and underlying window management.

While SwiftUI is Apple's primary UI framework for new applications, millions of production iOS apps rely on **UIKit** or hybrid architectures. The \`UIViewController\` manages a root view and orchestrates user interactions. Mastering its lifecycle methods ensures that heavy network calls, frame layout calculations, and resource cleanups happen at the correct execution step without causing frame drops.

---

## Tutorial Walkthrough

### 1. View Lifecycle Execution Sequence
1. **\`viewDidLoad()\`**: Called once when view hierarchy is loaded into heap memory. Configure layout constraints and initialize data bindings here.
2. **\`viewWillAppear(_:)\`**: Called every time the view is about to appear on screen. Refresh visible state or show spinners.
3. **\`viewDidAppear(_:)\`**: Called after view transition finishes. Trigger keyboard popups, audio playback, or analytics tracking.
4. **\`viewWillDisappear(_:)\`**: Called before view dismisses. Save draft inputs or pause audio timers.

---

## Code Example

\`\`\`swift
import Foundation

class PaymentScreenViewController: BaseViewController {
    private var isDataFetched = false

    override func viewDidLoad() {
        super.viewDidLoad()
        print("[UIKit Setup]: Instantiating KHQR UILabel & Submit UIButton...")
    }

    override func viewWillAppear() {
        super.viewWillAppear()
        if !isDataFetched {
            print("[UIKit Fetch]: Requesting fresh account balance from API...")
            isDataFetched = true
        }
    }
}

let paymentVC = PaymentScreenViewController()
paymentVC.viewDidLoad()
paymentVC.viewWillAppear()
\`\`\`

---

## Expected Output / UI Preview

\`\`\`text
1. viewDidLoad(): View hierarchy loaded into memory. Ideal for one-time setup.
[UIKit Setup]: Instantiating KHQR UILabel & Submit UIButton...
2. viewWillAppear(): View is about to become visible on screen.
[UIKit Fetch]: Requesting fresh account balance from API...
\`\`\`

---

## Try It Yourself

Explain why initiating heavy synchronous network requests inside \`viewDidLoad()\` freezes the UI main thread.
`,
      km: `# ៦.១ UIKit ViewControllers & View Lifecycle

> **សេចក្តីសង្ខេបប្រតិបត្តិ៖** ការយល់ដឹងអំពី Lifecycle របស់ UIKit (\`viewDidLoad\`, \`viewWillAppear\`, \`viewDidAppear\`, \`viewWillDisappear\`) គឺចាំបាច់សម្រាប់ការថែទាំកម្មវិធី iOS ធំៗ។

ទោះបីជា SwiftUI ជាជម្រើសចម្បងនាពេលបច្ចុប្បន្ន កម្មវិធី iOS អាជីពរាប់លាននៅតែប្រើប្រាស់ **UIKit**។ \`UIViewController\` គ្រប់គ្រង Root View និងរៀបចំលំហូរដំណើរការ។

---

## មេរៀនអនុវត្ត (Tutorial Walkthrough)

### ១. លំដាប់ដំណើការ Lifecycle
1. **\`viewDidLoad()\`**: រត់តែម្តងគត់ពេល View ត្រូវ Load ចូល Memory។
2. **\`viewWillAppear(_:)\`**: រត់រាល់ពេល View ជិតបង្ហាញលើអេក្រង់។
3. **\`viewDidAppear(_:)\`**: រត់ពេល View បង្ហាញពេញលេញលើអេក្រង់។
4. **\`viewWillDisappear(_:)\`**: រត់ពេល View ជិតបិទទៅវិញ។

---

## ឧទាហរណ៍កូដ (Code Example)

\`\`\`swift
import Foundation

class PaymentScreenViewController: BaseViewController {
    private var isDataFetched = false

    override func viewDidLoad() {
        super.viewDidLoad()
        print("[UIKit Setup]: Instantiating KHQR UILabel & Submit UIButton...")
    }

    override func viewWillAppear() {
        super.viewWillAppear()
        if !isDataFetched {
            print("[UIKit Fetch]: Requesting fresh account balance from API...")
            isDataFetched = true
        }
    }
}

let paymentVC = PaymentScreenViewController()
paymentVC.viewDidLoad()
paymentVC.viewWillAppear()
\`\`\`

---

## លទ្ធផលរំពឹងទុក (Expected Output)

\`\`\`text
1. viewDidLoad(): View hierarchy loaded into memory. Ideal for one-time setup.
[UIKit Setup]: Instantiating KHQR UILabel & Submit UIButton...
2. viewWillAppear(): View is about to become visible on screen.
[UIKit Fetch]: Requesting fresh account balance from API...
\`\`\`

---

## សាកល្បងដោយខ្លួនឯង (Try It Yourself)

ពន្យល់ពីមូលហេតុដែលការទាញយកទិន្នន័យតាម Network ក្នុង \`viewDidLoad()\` ដោយគ្មាន Async អាចធ្វើឱ្យ UI ទាក់ស្ទះ។
`
    }
  },
  {
    id: "uikit-autolayout-programmatic",
    title: {
      en: "6.2 Programmatic Auto Layout & NSLayoutConstraint",
      km: "៦.២ Programmatic Auto Layout & NSLayoutConstraint Anchors"
    },
    starterCode: `// SabayCode Swift Master Track: Programmatic Auto Layout Anchors
import Foundation

struct UIViewMock {
    var translatesAutoresizingMaskIntoConstraints: Bool = true
    var frame: String = "0, 0, 0, 0"
}

var containerView = UIViewMock()
var submitButton = UIViewMock()

// Step 1: Disable Autoresizing Mask when using Auto Layout
submitButton.translatesAutoresizingMaskIntoConstraints = false

print("Auto Layout Setup:")
print("1. Set translatesAutoresizingMaskIntoConstraints = false")
print("2. Activate constraints: submitButton.centerXAnchor.constraint(equalTo: containerView.centerXAnchor)")
print("3. Activate constraints: submitButton.widthAnchor.constraint(equalToConstant: 200)")
`,
    content: {
      en: `# 6.2 Programmatic Auto Layout & NSLayoutConstraint

> **Executive Summary:** Programmatic Auto Layout using Layout Anchors (\`NSLayoutAnchor\`) creates responsive, dynamic view hierarchies without depending on fragile Storyboards or XIB files.

Professional iOS teams favor programmatic UI over Interface Builder Storyboards because code constraints merge cleanly in Git version control without XML merge conflicts. Setting \`translatesAutoresizingMaskIntoConstraints = false\` disables legacy frame-based resizing, enabling developers to chain layout anchors (\`topAnchor\`, \`leadingAnchor\`, \`trailingAnchor\`, \`bottomAnchor\`, \`widthAnchor\`) into responsive layouts across all iPhone and iPad screen sizes.

---

## Tutorial Walkthrough

### 1. Mandatory First Step
Always set \`view.translatesAutoresizingMaskIntoConstraints = false\` before adding programmatic constraints.

\`\`\`swift
let cardView = UIView()
cardView.translatesAutoresizingMaskIntoConstraints = false
view.addSubview(cardView)

NSLayoutConstraint.activate([
    cardView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor, constant: 16),
    cardView.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 16),
    cardView.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -16),
    cardView.heightAnchor.constraint(equalToConstant: 120)
])
\`\`\`

---

## Code Example

\`\`\`swift
import Foundation

struct ConstraintDefinition {
    let anchor: String
    let constant: Double
}

func generateLayoutReport(title: String, constraints: [ConstraintDefinition]) {
    print("--- Auto Layout Active Constraints: \(title) ---")
    for c in constraints {
        print("Constraint -> Anchor: \(c.anchor) | Offset Constant: \(c.constant)pt")
    }
}

let activeConstraints = [
    ConstraintDefinition(anchor: "topAnchor -> safeArea.topAnchor", constant: 20.0),
    ConstraintDefinition(anchor: "leadingAnchor -> superview.leadingAnchor", constant: 16.0),
    ConstraintDefinition(anchor: "trailingAnchor -> superview.trailingAnchor", constant: -16.0)
]

generateLayoutReport(title: "Payment Summary Container", constraints: activeConstraints)
\`\`\`

---

## Expected Output / UI Preview

\`\`\`text
--- Auto Layout Active Constraints: Payment Summary Container ---
Constraint -> Anchor: topAnchor -> safeArea.topAnchor | Offset Constant: 20.0pt
Constraint -> Anchor: leadingAnchor -> superview.leadingAnchor | Offset Constant: 16.0pt
Constraint -> Anchor: trailingAnchor -> superview.trailingAnchor | Offset Constant: -16.0pt
\`\`\`

---

## Try It Yourself

Explain why setting a positive constant on a \`trailingAnchor\` pushes a view *outside* the screen bounds instead of padding inside.
`,
      km: `# ៦.២ Programmatic Auto Layout & NSLayoutConstraint Anchors

> **សេចក្តីសង្ខេបប្រតិបត្តិ៖** Programmatic Auto Layout តាមរយៈ \`NSLayoutAnchor\` បង្កើត Responsive UI ដោយមិនបាច់ពឹងផ្អែកលើ Storyboards ឬ XML XIBs ឡើយ។

ក្រុមការងារ iOS អាជីពចូលចិត្តការសរសេរ UI តាមរយៈកូដ (Programmatic UI) ដោយសារវាងាយស្រួលធ្វើ Git Merge។ ការកំណត់ \`translatesAutoresizingMaskIntoConstraints = false\` គឺជាជំហានចាំបាច់មុនពេលប្រើប្រាស់ Layout Anchors (\`topAnchor\`, \`leadingAnchor\`, \`trailingAnchor\`)។

---

## មេរៀនអនុវត្ត (Tutorial Walkthrough)

### ១. ជំហានគ្រឹះចាំបាច់
ត្រូវកំណត់ \`translatesAutoresizingMaskIntoConstraints = false\` ជានិច្ច។

\`\`\`swift
let cardView = UIView()
cardView.translatesAutoresizingMaskIntoConstraints = false
view.addSubview(cardView)

NSLayoutConstraint.activate([
    cardView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor, constant: 16),
    cardView.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 16)
])
\`\`\`

---

## ឧទាហរណ៍កូដ (Code Example)

\`\`\`swift
import Foundation

struct ConstraintDefinition {
    let anchor: String
    let constant: Double
}

func generateLayoutReport(title: String, constraints: [ConstraintDefinition]) {
    print("--- Auto Layout Active Constraints: \(title) ---")
    for c in constraints {
        print("Constraint -> Anchor: \(c.anchor) | Offset Constant: \(c.constant)pt")
    }
}

let activeConstraints = [
    ConstraintDefinition(anchor: "topAnchor -> safeArea.topAnchor", constant: 20.0),
    ConstraintDefinition(anchor: "leadingAnchor -> superview.leadingAnchor", constant: 16.0),
    ConstraintDefinition(anchor: "trailingAnchor -> superview.trailingAnchor", constant: -16.0)
]

generateLayoutReport(title: "Payment Summary Container", constraints: activeConstraints)
\`\`\`

---

## លទ្ធផលរំពឹងទុក (Expected Output)

\`\`\`text
--- Auto Layout Active Constraints: Payment Summary Container ---
Constraint -> Anchor: topAnchor -> safeArea.topAnchor | Offset Constant: 20.0pt
Constraint -> Anchor: leadingAnchor -> superview.leadingAnchor | Offset Constant: 16.0pt
Constraint -> Anchor: trailingAnchor -> superview.trailingAnchor | Offset Constant: -16.0pt
\`\`\`

---

## សាកល្បងដោយខ្លួនឯង (Try It Yourself)

ពន្យល់ពីមូលហេតុដែល \`trailingAnchor\` ត្រូវប្រើប្រាស់តម្លៃអវិជ្ជមាន (\`-16\`) សម្រាប់ Margin ខាងក្នុង។
`
    }
  },
  {
    id: "swiftui-uikit-interop",
    title: {
      en: "6.3 SwiftUI & UIKit Interoperability (UIViewRepresentable)",
      km: "៦.៣ អន្តរប្រតិបត្តិការ SwiftUI & UIKit (UIViewRepresentable)"
    },
    starterCode: `// SabayCode Swift Master Track: SwiftUI & UIKit Interop
import Foundation

// Conceptual bridge between UIKit UIView and SwiftUI
protocol UIViewRepresentableBridge {
    associatedtype UIViewType
    func makeUIView() -> UIViewType
    func updateUIView(_ uiView: UIViewType)
}

struct MKMapViewMock {
    var mapType: String = "Standard Satellite"
}

struct MapViewRepresentable: UIViewRepresentableBridge {
    func makeUIView() -> MKMapViewMock {
        print("[UIKit Bridge]: Initializing MKMapView instance...")
        return MKMapViewMock()
    }

    func updateUIView(_ uiView: MKMapViewMock) {
        print("[UIKit Bridge]: Updating map config -> Type: \(uiView.mapType)")
    }
}

let mapBridge = MapViewRepresentable()
let mapInstance = mapBridge.makeUIView()
mapBridge.updateUIView(mapInstance)
`,
    content: {
      en: `# 6.3 SwiftUI & UIKit Interoperability (UIViewRepresentable)

> **Executive Summary:** Protocols \`UIViewRepresentable\` and \`UIViewControllerRepresentable\` bridge legacy UIKit components (like \`MKMapView\`, \`WKWebView\`, and \`UIImagePickerController\`) seamlessly into modern SwiftUI view hierarchies.

As apps transition incrementally to SwiftUI, developers frequently need to wrap existing UIKit views or system frameworks that do not yet have native SwiftUI equivalents. Conforming a struct to \`UIViewRepresentable\` requires implementing two core methods: \`makeUIView(context:)\` (creates and configures the initial UIKit view) and \`updateUIView(_:context:)\` (updates the view when SwiftUI state changes). The \`Coordinator\` class handles delegate callbacks back to SwiftUI.

---

## Tutorial Walkthrough

### 1. Core Methods
- **\`makeUIView(context:)\`**: Instantiates and sets up initial properties of the \`UIView\`.
- **\`updateUIView(_:context:)\`**: Triggered automatically whenever bound SwiftUI state changes.
- **\`makeCoordinator()\`**: Creates a delegate object to bridge target-action events from UIKit back to SwiftUI bindings.

---

## Code Example

\`\`\`swift
import Foundation

struct WebViewBridge {
    let urlString: String

    func renderInSwiftUI() {
        print("[Bridging Layer]: Hosting WKWebView in SwiftUI View Hierarchy")
        print("Target URL: \(urlString)")
    }
}

let webView = WebViewBridge(urlString: "https://sabaycode.com/swift-track")
webView.renderInSwiftUI()
\`\`\`

---

## Expected Output / UI Preview

\`\`\`text
[Bridging Layer]: Hosting WKWebView in SwiftUI View Hierarchy
Target URL: https://sabaycode.com/swift-track
\`\`\`

---

## Try It Yourself

Write a Coordinator pattern sketch for bridging a \`UISearchBarDelegate\` text change back to a SwiftUI \`@Binding var searchText: String\`.
`,
      km: `# ៦.៣ អន្តរប្រតិបត្តិការ SwiftUI & UIKit (UIViewRepresentable)

> **សេចក្តីសង្ខេបប្រតិបត្តិ៖** Protocols \`UIViewRepresentable\` និង \`UIViewControllerRepresentable\` ជួយភ្ជាប់ UIKit Components ចាស់ៗ (ដូចជា \`MKMapView\`, \`WKWebView\`) ចូលទៅក្នុង SwiftUI View Hierarchy ដោយរលូន។

នៅពេលអភិវឌ្ឍន៍ SwiftUI Apps, វិស្វករតែងតែត្រូវការប្រើប្រាស់ UIKit Views មួយចំនួនដែលមិនទាន់មាន Native SwiftUI Equivalent។ ការប្រើប្រាស់ \`UIViewRepresentable\` តម្រូវឱ្យសរសេរ \`makeUIView\` និង \`updateUIView\` ព្រមទាំងប្រើ \`Coordinator\` សម្រាប់ដោះស្រាយ Delegate Callbacks។

---

## មេរៀនអនុវត្ត (Tutorial Walkthrough)

### ១. Methods ស្នូល
- **\`makeUIView(context:)\`**: បង្កើត និងកំណត់តម្លៃដំបូងនៃ \`UIView\`។
- **\`updateUIView(_:context:)\`**: រត់ដោយស្វ័យប្រវត្តិតាម SwiftUI State។
- **\`makeCoordinator()\`**: បង្កើត Delegate ដើម្បីផ្ញើសញ្ញាពី UIKit មក SwiftUI។

---

## ឧទាហរណ៍កូដ (Code Example)

\`\`\`swift
import Foundation

struct WebViewBridge {
    let urlString: String

    func renderInSwiftUI() {
        print("[Bridging Layer]: Hosting WKWebView in SwiftUI View Hierarchy")
        print("Target URL: \(urlString)")
    }
}

let webView = WebViewBridge(urlString: "https://sabaycode.com/swift-track")
webView.renderInSwiftUI()
\`\`\`

---

## លទ្ធផលរំពឹងទុក (Expected Output)

\`\`\`text
[Bridging Layer]: Hosting WKWebView in SwiftUI View Hierarchy
Target URL: https://sabaycode.com/swift-track
\`\`\`

---

## សាកល្បងដោយខ្លួនឯង (Try It Yourself)

សាកល្បងសរសេរ Coordinator Pattern សម្រាប់បញ្ជូនទិន្នន័យពី \`UISearchBarDelegate\` ទៅកាន់ SwiftUI \`@Binding var searchText: String\`។
`
    }
  }
];
