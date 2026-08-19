import { Course } from '../types';
import { swiftLessonsGroup1, swiftLessonsGroup2, swiftLessonsGroup3 } from './swiftLessonsPart1';
import { swiftLessonsGroup4, swiftLessonsGroup5, swiftLessonsGroup6 } from './swiftLessonsPart2';
import { swiftLessonsGroup7, swiftLessonsGroup8, swiftLessonsGroup9, swiftLessonsGroup10 } from './swiftLessonsPart3';

export const SWIFT_COURSE_FULL_DATA: Course = {
  id: "swift",
  title: {
    en: "Swift & iOS Engineering",
    km: "ការសរសេរកូដ Swift & iOS Engineering"
  },
  desc: {
    en: "Deep-dive master track into production-grade Swift 5.9+, SwiftUI, UIKit interoperability, modern Async/Await concurrency, SwiftData persistence, clean MVVM architecture, and App Store deployment.",
    km: "វគ្គសិក្សាកម្រិតខ្ពស់ (Master Level) លើភាសា Swift 5.9+, SwiftUI, UIKit Interoperability, Concurrency, SwiftData, ស្ថាបត្យកម្ម MVVM និងការបង្ហោះ App ទៅ App Store។"
  },
  category: "programming",
  difficulty: "advanced",
  estimatedHours: 24,
  iconName: "swift",
  topics: [
    {
      id: "swift-group-1",
      title: {
        en: "Group 1: Swift Language Foundations",
        km: "ក្រុមទី១៖ គ្រឹះភាសា Swift (Foundations)"
      },
      lessons: swiftLessonsGroup1
    },
    {
      id: "swift-group-2",
      title: {
        en: "Group 2: OOP & Protocol-Oriented Programming (POP)",
        km: "ក្រុមទី២៖ Object-Oriented & Protocol-Oriented Programming"
      },
      lessons: swiftLessonsGroup2
    },
    {
      id: "swift-group-3",
      title: {
        en: "Group 3: Advanced Swift Concepts",
        km: "ក្រុមទី៣៖ គំនិតកម្រិតខ្ពស់ក្នុង Swift (Advanced Concepts)"
      },
      lessons: swiftLessonsGroup3
    },
    {
      id: "swift-group-4",
      title: {
        en: "Group 4: Modern Concurrency & Async/Await",
        km: "ក្រុមទី៤៖ Concurrency ទំនើប & Async/Await"
      },
      lessons: swiftLessonsGroup4
    },
    {
      id: "swift-group-5",
      title: {
        en: "Group 5: Building Modern UIs with SwiftUI",
        km: "ក្រុមទី៥៖ បង្កើត UI ទំនើបជាមួយ SwiftUI"
      },
      lessons: swiftLessonsGroup5
    },
    {
      id: "swift-group-6",
      title: {
        en: "Group 6: UIKit Essentials & Interoperability",
        km: "ក្រុមទី៦៖ គ្រឹះ UIKit & អន្តរប្រតិបត្តិការ (Interop)"
      },
      lessons: swiftLessonsGroup6
    },
    {
      id: "swift-group-7",
      title: {
        en: "Group 7: Working with Data & Networking",
        km: "ក្រុមទី៧៖ ទិន្នន័យ & ប្រព័ន្ធ Networking"
      },
      lessons: swiftLessonsGroup7
    },
    {
      id: "swift-group-8",
      title: {
        en: "Group 8: App Architecture & Design Patterns",
        km: "ក្រុមទី៨៖ ស្ថាបត្យកម្ម App & Design Patterns"
      },
      lessons: swiftLessonsGroup8
    },
    {
      id: "swift-group-9",
      title: {
        en: "Group 9: Testing, Debugging & Performance",
        km: "ក្រុមទី៩៖ Testing, Debugging & ល្បឿន Performance"
      },
      lessons: swiftLessonsGroup9
    },
    {
      id: "swift-group-10",
      title: {
        en: "Group 10: App Store Deployment & Production Readiness",
        km: "ក្រុមទី១០៖ ការបង្ហោះ App Store & ភាពរួចរាល់ Production"
      },
      lessons: swiftLessonsGroup10
    },
    {
      id: "swift-group-11",
      title: {
        en: "Group 11: Real-World Mini Projects (Master Capstones)",
        km: "ក្រុមទី១១៖ គម្រោងអនុវត្តជាក់ស្តែង (Master Capstones)"
      },
      lessons: [
        {
          id: "swift-capstone-overview",
          title: {
            en: "11.1 Master Capstone Projects Overview",
            km: "១១.១ សេចក្តីផ្តើមគម្រោង Master Capstones"
          },
          starterCode: `// SabayCode Swift Master Track: Capstone Overview
import Foundation

print("Welcome to Group 11: Master Capstone Projects!")
print("Build production-grade Cambodian mobile applications applying SwiftUI, Concurrency, and Clean MVVM Architecture.")
`,
          content: {
            en: `# 11.1 Master Capstone Projects Overview

> **Executive Summary:** Apply all 10 core domain groups into production-grade iOS application mini-projects, demonstrating end-to-end Swift mastery.

The Group 11 Capstone projects feature full-fledged architectures:
1. **Cambodian E-Commerce & KHQR Payment Engine**: Value-type cart state, KHQR payloads, and error handling.
2. **Real-time Currency Exchange & Rates Tracker**: Async/await networking, URLSession, parallel fetch, and JSON Codable parsing.
3. **SwiftUI Mobile Banking Dashboard**: Complex stack layouts, animations, and @Observable state management.
4. **Async Image Cache & Feed Viewer**: @escaping closures, thread safety, and actor isolation.
5. **Production Security & Launch Readiness Audit**: Keychain storage, SSL certificate pinning, and XCTest assertions.
`,
            km: `# ១១.១ សេចក្តីផ្តើមគម្រោង Master Capstones

> **សេចក្តីសង្ខេបប្រតិបត្តិ៖** អនុវត្តចំណេះដឹងពីក្រុមទាំង ១០ ចូលទៅក្នុងគម្រោងកម្មវិធី iOS ជាក់ស្តែងដើម្បីបញ្ជាក់ពីសមត្ថភាព Swift កម្រិត Master។

គម្រោងអនុវត្ត Group 11 រួមមាន៖
១. ប្រព័ន្ធ E-Commerce & KHQR Payment Engine
២. ប្រព័ន្ធទាញយកអត្រាប្តូរប្រាក់ Real-time
៣. SwiftUI Mobile Banking Dashboard
៤. Async Image Cache & Feed Viewer
៥. ការពិនិត្យសុវត្ថិភាព Security & Launch Readiness Audit។
`
          }
        }
      ]
    }
  ],
  references: [
    {
      id: "swift-ref-1",
      syntax: "let x: Int = 10; var y: String = \"text\"",
      desc: {
        en: "Syntax reference for declaring immutable constants (let) and mutable variables (var).",
        km: "វាក្យសព្ទសម្រាប់ប្រកាសអថេរថេរ (let) និងអថេរប្រែប្រួល (var)។"
      },
      example: "let name = \"Sokha\"\nvar score = 95.5"
    },
    {
      id: "swift-ref-2",
      syntax: "guard let value = optional else { return }",
      desc: {
        en: "Safe optional unwrapping pattern with early exit requirement.",
        km: "វិធីសាស្ត្រ unwrapping optionals ដោយសុវត្ថិភាពជាមួយ early exit។"
      },
      example: "guard let email = userEmail else { return }\nprint(email)"
    },
    {
      id: "swift-ref-3",
      syntax: "func execute(action: @escaping () -> Void)",
      desc: {
        en: "Closure syntax for asynchronous callbacks and capture lists ([weak self]).",
        km: "កូដ Closure សម្រាប់ Asynchronous Callbacks និង [weak self]។"
      },
      example: "fetchData { [weak self] result in\n  self?.updateUI()\n}"
    },
    {
      id: "swift-ref-4",
      syntax: "protocol Identifiable { var id: String { get } }",
      desc: {
        en: "Protocol definition and default implementations via protocol extensions.",
        km: "ការបង្កើត Protocol និងកំណត់ Default Implementation តាម Protocol Extension។"
      },
      example: "extension Identifiable {\n  var logID: String { \"ID: \\(id)\" }\n}"
    },
    {
      id: "swift-ref-5",
      syntax: "VStack { Text(\"Title\"); Button(\"Click\") {} }",
      desc: {
        en: "SwiftUI declarative UI stack composition and state binding modifiers.",
        km: "ការរៀបចំ UI ក្នុង SwiftUI ដោយប្រើ Stack និង State Bindings។"
      },
      example: "@State private var count = 0\nButton(\"\\(count)\") { count += 1 }"
    },
    {
      id: "swift-ref-6",
      syntax: "func fetchData() async throws -> Data",
      desc: {
        en: "Modern async/await concurrency execution syntax and actor isolation.",
        km: "ការប្រើប្រាស់ async/await សម្រាប់ការសរសេរកូដ Concurrency និង Actor Isolation។"
      },
      example: "let data = try await URLSession.shared.data(from: url)"
    },
    {
      id: "swift-ref-7",
      syntax: "struct User: Codable { let name: String }",
      desc: {
        en: "JSON serialization and deserialization with Codable & CodingKeys.",
        km: "ការបំប្លែងទិន្នន័យ JSON ដោយប្រើ Codable & CodingKeys។"
      },
      example: "let user = try JSONDecoder().decode(User.self, from: jsonData)"
    },
    {
      id: "swift-ref-8",
      syntax: "XCTAssertEqual(actual, expected)",
      desc: {
        en: "Unit test assertions using XCTest framework.",
        km: "ការផ្ទៀងផ្ទាត់លទ្ធផលកូដក្នុង Unit Test ដោយប្រើ XCTest Assertions។"
      },
      example: "XCTAssertEqual(calc.add(2, 3), 5)"
    }
  ],
  quizzes: [
    {
      id: "swift-q1",
      question: {
        en: "Which keyword is used in Swift to declare an immutable constant?",
        km: "តើពាក្យគន្លឹះមួយណាដែលត្រូវប្រើក្នុង Swift ដើម្បីប្រកាសអថេរថេរ (Constant)?"
      },
      options: {
        en: ["var", "let", "const", "val"],
        km: ["var", "let", "const", "val"]
      },
      correctIndex: 1,
      explanation: {
        en: "In Swift, 'let' declares immutable constants, whereas 'var' declares mutable variables.",
        km: "ក្នុង Swift, 'let' ប្រើប្រាស់សម្រាប់ប្រកាស Constant ដែលមិនអាចកែប្រែបាន ខណៈ 'var' ប្រើសម្រាប់អថេរប្រែប្រួល។"
      }
    },
    {
      id: "swift-q2",
      question: {
        en: "What is the primary difference between a 'struct' and a 'class' in Swift?",
        km: "តើអ្វីជាភាពខុសគ្នាចម្បងរវាង 'struct' និង 'class' នៅក្នុង Swift?"
      },
      options: {
        en: [
          "Structs are reference types, while classes are value types.",
          "Structs are value types (copied on assignment), while classes are reference types (shared pointers on heap).",
          "Classes cannot have initializers.",
          "Structs support class inheritance."
        ],
        km: [
          "Structs គឺជា Reference Types ខណៈ Classes គឺជា Value Types",
          "Structs គឺជា Value Types (ចម្លងតម្លៃ) ខណៈ Classes គឺជា Reference Types (ចែករំលែក Pointer លើ Heap)",
          "Classes មិនអាចមាន Initializers ឡើយ",
          "Structs អាចធ្វើការ Inheritance បាន"
        ]
      },
      correctIndex: 1,
      explanation: {
        en: "Structs are value types stored on the stack and copied on assignment, whereas classes are reference types allocated on the heap.",
        km: "Structs គឺជា Value Types ដែលត្រូវ Copy ពេល Assignment ខណៈ Classes គឺជា Reference Types រក្សាទុកលើ Heap Memory។"
      }
    },
    {
      id: "swift-q3",
      question: {
        en: "How does 'guard let' differ from 'if let' when unwrapping optionals?",
        km: "តើ 'guard let' ខុសពី 'if let' យ៉ាងដូចម្តេចពេល unwrap optionals?"
      },
      options: {
        en: [
          "guard let unwraps values and forces an early exit (return/throw) in its else block, binding variables to the outer scope.",
          "if let can only be used inside loops.",
          "guard let causes a runtime crash if the value is nil.",
          "There is no difference."
        ],
        km: [
          "guard let តម្រូវឱ្យមាន Early Exit (return/throw) ក្នុង else block ហើយអាចប្រើប្រាស់អថេរដែល unwrap រួចក្នុង Scope ខាងក្រៅបាន",
          "if let អាចប្រើបានតែក្នុង Loop ប៉ុណ្ណោះ",
          "guard let ធ្វើឱ្យ App Crash ប្រសិនបើតម្លៃស្មើ nil",
          "គ្មានភាពខុសគ្នានោះទេ"
        ]
      },
      correctIndex: 0,
      explanation: {
        en: "'guard let' enforces early exits when unwrapping fails, making the unwrapped variable available in the rest of the enclosing function scope.",
        km: "'guard let' បង្ខំឱ្យមាន Early Exit ពេល unwrap មិនជោគជ័យ ហើយអនុញ្ញាតឱ្យប្រើប្រាស់អថេរដែល unwrap រួចក្នុង Function Scope។"
      }
    },
    {
      id: "swift-q4",
      question: {
        en: "Why is a closure parameter marked with '@escaping' in Swift?",
        km: "ហេតុអ្វីបានជា Closure Parameter ត្រូវដាក់សញ្ញា '@escaping' ក្នុង Swift?"
      },
      options: {
        en: [
          "To allow it to throw errors.",
          "Because it outlives the function body where it was passed as an argument (e.g. executed asynchronously).",
          "To run the closure on the GPU.",
          "To make the closure private."
        ],
        km: [
          "ដើម្បីអនុញ្ញាតឱ្យវា Throw Errors",
          "ដោយសារវាត្រូវរត់បន្ទាប់ពី Function Scope បានបញ្ចប់ (ឧទាហរណ៍ Asynchronous Callbacks)",
          "ដើម្បីរត់ Closure លើ GPU",
          "ដើម្បីធ្វើឱ្យ Closure ទៅជា Private"
        ]
      },
      correctIndex: 1,
      explanation: {
        en: "An '@escaping' closure escapes the function scope, such as when saved in a property or executed inside an asynchronous callback.",
        km: "An '@escaping' closure ត្រូវបានប្រើប្រាស់នៅពេល Closure រត់ក្រៅពី Function Scope ដែលបានផ្ញើវា។"
      }
    },
    {
      id: "swift-q5",
      question: {
        en: "Which Swift concurrency feature guarantees thread safety by serializing mutable state access?",
        km: "តើ Concurrency Feature មួយណា ក្នុង Swift ដែលធានាសុវត្ថិភាព Thread-Safety ដោយធ្វើការ Serialize ការចូលប្រើប្រាស់ State?"
      },
      options: {
        en: ["TaskGroup", "@MainActor", "actor", "DispatchQueue.async"],
        km: ["TaskGroup", "@MainActor", "actor", "DispatchQueue.async"]
      },
      correctIndex: 2,
      explanation: {
        en: "Swift 'actor' types isolate mutable state and serialize method execution to eliminate data races at compile time.",
        km: "ប្រភេទ 'actor' ក្នុង Swift ធ្វើការ Isolate State និងការពារ Data Races នៅពេល Compile Time។"
      }
    },
    {
      id: "swift-q6",
      question: {
        en: "Which property wrapper introduced in iOS 17 simplifies ViewModel state observation in SwiftUI?",
        km: "តើ Property Wrapper មួយណា ដែលដាក់ឱ្យប្រើក្នុង iOS 17 សម្រួលដល់ការដាន State ក្នុង ViewModel សម្រាប់ SwiftUI?"
      },
      options: {
        en: ["@Published", "@ObservableObject", "@Observable", "@Binding"],
        km: ["@Published", "@ObservableObject", "@Observable", "@Binding"]
      },
      correctIndex: 2,
      explanation: {
        en: "The '@Observable' macro introduced in iOS 17 automatically tracks property access in SwiftUI views without needing '@Published' or 'ObservableObject'.",
        km: " Macro \`@Observable\` ក្នុង iOS 17 តាមដានការផ្លាស់ប្តូរ Property ដោយស្វ័យប្រវត្តិដោយមិនបាច់ប្រើ \`@Published\` ឡើយ។"
      }
    }
  ],
  miniProjects: [
    {
      id: "swift-project-1",
      title: {
        en: "Cambodian E-Commerce & KHQR Payment Engine",
        km: "ប្រព័ន្ធ E-Commerce & KHQR Payment Engine"
      },
      desc: {
        en: "Build a domain-driven payment engine handling value-type product models, shopping cart state mutation, KHQR payload formatting, and throwing custom payment errors.",
        km: "បង្កើតប្រព័ន្ធទូទាត់ប្រាក់ KHQR សម្រាប់ E-Commerce ដោយប្រើប្រាស់ Value-type Structs, Error Handling និង Enum States។"
      },
      starterCode: `import Foundation

struct Product {
    let id: String
    let name: String
    let priceUSD: Double
}

class ShoppingCartEngine {
    private(set) var items: [Product] = []

    func add(_ product: Product) {
        items.append(product)
    }

    var totalUSD: Double {
        items.reduce(0) { $0 + $1.priceUSD }
    }
}

let cart = ShoppingCartEngine()
cart.add(Product(id: "P-1", name: "Angkor Silk", priceUSD: 25.0))
print("Cart Total: $\\(cart.totalUSD)")`,
      solutionCode: `import Foundation

enum KHQRError: Error {
    case invalidAmount
    case merchantNotFound
}

struct Product {
    let id: String
    let name: String
    let priceUSD: Double
}

class ShoppingCartEngine {
    private(set) var items: [Product] = []

    func add(_ product: Product) {
        items.append(product)
    }

    var totalUSD: Double {
        items.reduce(0) { $0 + $1.priceUSD }
    }

    func generateKHQRPayload(merchantID: String) throws -> String {
        guard totalUSD > 0 else { throw KHQRError.invalidAmount }
        return "KHQR:\\(merchantID):USD:\\(totalUSD)"
    }
}

let cart = ShoppingCartEngine()
cart.add(Product(id: "P-1", name: "Angkor Silk", priceUSD: 25.0))
if let payload = try? cart.generateKHQRPayload(merchantID: "ABA_001") {
    print("Generated Payload: \\(payload)")
}`
    },
    {
      id: "swift-project-2",
      title: {
        en: "Real-time Currency Exchange Tracker",
        km: "ប្រព័ន្ធទាញយកអត្រាប្តូរប្រាក់ Real-time"
      },
      desc: {
        en: "Develop an asynchronous networking service fetching USD/KHR exchange rates concurrently using URLSession, TaskGroup, and Codable JSON parsing.",
        km: "អភិវឌ្ឍន៍ Asynchronous Networking Service ដើម្បីទាញយកអត្រាប្តូរប្រាក់ USD/KHR ដោយប្រើ URLSession, TaskGroup និង Codable។"
      },
      starterCode: `import Foundation

struct ExchangeRatePayload: Codable {
    let currency: String
    let rateToUSD: Double
}

func fetchRatesConcurrently() async {
    print("Fetching USD/KHR exchange rates concurrently...")
}

Task { await fetchRatesConcurrently() }`,
      solutionCode: `import Foundation

struct ExchangeRatePayload: Codable {
    let currency: String
    let rateToUSD: Double
}

class ExchangeService {
    func fetchRates() async throws -> [ExchangeRatePayload] {
        return [
            ExchangeRatePayload(currency: "KHR", rateToUSD: 4100.0),
            ExchangeRatePayload(currency: "THB", rateToUSD: 36.5)
        ]
    }
}

let service = ExchangeService()
Task {
    if let rates = try? await service.fetchRates() {
        for rate in rates {
            print("1 USD = \\(rate.rateToUSD) \\(rate.currency)")
        }
    }
}`
    },
    {
      id: "swift-project-3",
      title: {
        en: "SwiftUI Mobile Banking Dashboard UI",
        km: "SwiftUI Mobile Banking Dashboard UI"
      },
      desc: {
        en: "Construct a responsive mobile banking dashboard interface utilizing SwiftUI stacks (VStack, HStack, ZStack), NavigationStack, custom cards, and spring animations.",
        km: "បង្កើត Mobile Banking Dashboard UI ជាមួយ SwiftUI ដោយប្រើប្រាស់ Stacks, Custom Cards និង @Observable ViewModel។"
      },
      starterCode: `import Foundation

@Observable
class BankingDashboardViewModel {
    var isBalanceVisible: Bool = false
    var balanceUSD: Double = 4250.80

    func toggleVisibility() {
        isBalanceVisible.toggle()
    }
}

let vm = BankingDashboardViewModel()
vm.toggleVisibility()
print("Balance Visible: \\(vm.isBalanceVisible)")`,
      solutionCode: `import Foundation

@Observable
class BankingDashboardViewModel {
    var isBalanceVisible: Bool = false
    var balanceUSD: Double = 4250.80

    func toggleVisibility() {
        isBalanceVisible.toggle()
    }

    var displayBalance: String {
        isBalanceVisible ? "$\\(balanceUSD)" : "••••••••"
    }
}

let vm = BankingDashboardViewModel()
print("Initial Balance: \\(vm.displayBalance)")
vm.toggleVisibility()
print("Toggled Balance: \\(vm.displayBalance)")`
    },
    {
      id: "swift-project-4",
      title: {
        en: "Thread-Safe Async Image Cache & Feed Engine",
        km: "Thread-Safe Async Image Cache Engine"
      },
      desc: {
        en: "Design a high-performance, thread-safe memory cache for network images using Swift actors, @escaping closures, and weak reference ARC cleanup.",
        km: "បង្កើត Thread-safe Image Cache ដោយប្រើប្រាស់ Swift Actors និង ARC Weak Memory Management។"
      },
      starterCode: `import Foundation

actor ImageCacheStore {
    private var cache: [String: String] = [:]

    func set(_ data: String, key: String) {
        cache[key] = data
    }

    func get(_ key: String) -> String? {
        return cache[key]
    }
}

let cache = ImageCacheStore()
Task {
    await cache.set("RAW_IMAGE_DATA", key: "avatar_1")
    let result = await cache.get("avatar_1")
    print("Cached Image: \\(result ?? "None")")
}`,
      solutionCode: `import Foundation

actor ImageCacheStore {
    private var cache: [String: String] = [:]

    func set(_ data: String, key: String) {
        cache[key] = data
    }

    func get(_ key: String) -> String? {
        return cache[key]
    }

    func clear() {
        cache.removeAll()
    }
}

let cache = ImageCacheStore()
Task {
    await cache.set("PNG_DATA_HEX_9981", key: "user_avatar")
    if let data = await cache.get("user_avatar") {
        print("Retrieved from Cache: \\(data)")
    }
}`
    }
  ]
};
