import { Lesson } from '../types';

export const swiftLessonsGroup7: Lesson[] = [
  {
    id: "swift-codable-json-parsing",
    title: {
      en: "7.1 Codable & Advanced JSON Parsing",
      km: "៧.១ Codable & ការបំប្លែង JSON (CodingKeys)"
    },
    starterCode: `// SabayCode Swift Master Track: Codable & CodingKeys
import Foundation

let jsonPayload = """
{
    "merchant_id": "KHQR-ABA-9988",
    "amount_usd": 45.50,
    "created_at": "2026-08-02T10:00:00Z"
}
""".data(using: .utf8)!

struct TransactionPayload: Codable {
    let merchantID: String
    let amountUSD: Double
    let createdAt: Date

    enum CodingKeys: String, CodingKey {
        case merchantID = "merchant_id"
        case amountUSD = "amount_usd"
        case createdAt = "created_at"
    }
}

let decoder = JSONDecoder()
decoder.dateDecodingStrategy = .iso8601

if let decoded = try? decoder.decode(TransactionPayload.self, from: jsonPayload) {
    print("Decoded Merchant: \(decoded.merchantID)")
    print("Amount: $\(decoded.amountUSD)")
    print("Date: \(decoded.createdAt)")
}
`,
    content: {
      en: `# 7.1 Codable & Advanced JSON Parsing

> **Executive Summary:** Swift's \`Codable\` protocol synthesis combines \`Encodable\` and \`Decodable\`, leveraging custom \`CodingKeys\` enums and date strategies to map raw JSON payloads into type-safe domain models cleanly.

In modern iOS API integration, \`Codable\` enables type-safe serialization and deserialization without manual dictionary parsing. When backend JSON field names use snake_case (\`user_first_name\`) while Swift conventions mandate camelCase (\`userFirstName\`), explicit \`CodingKeys\` enums or \`.convertFromSnakeCase\` key decoding strategies seamlessly bridge the gap.

---

## Tutorial Walkthrough

### 1. Custom CodingKeys Mapping
Map mismatched backend keys to clean Swift property names using an explicit \`CodingKeys\` enum.

\`\`\`swift
struct UserDTO: Codable {
    let id: Int
    let fullName: String

    enum CodingKeys: String, CodingKey {
        case id = "user_id"
        case fullName = "full_name"
    }
}
\`\`\`

---

## Code Example

\`\`\`swift
import Foundation

struct CambodianMerchantResponse: Codable {
    let storeName: String
    let totalSalesKHR: Int

    enum CodingKeys: String, CodingKey {
        case storeName = "store_name"
        case totalSalesKHR = "total_sales_khr"
    }
}

let rawJSON = "{\"store_name\": \"Angkor Souvenirs\", \"total_sales_khr\": 18450000}".data(using: .utf8)!
let result = try JSONDecoder().decode(CambodianMerchantResponse.self, from: rawJSON)

print("Store: \(result.storeName)")
print("Total KHR Sales: \(result.totalSalesKHR) KHR")
\`\`\`

---

## Expected Output / UI Preview

\`\`\`text
Store: Angkor Souvenirs
Total KHR Sales: 18450000 KHR
\`\`\`

---

## Try It Yourself

Add a nested \`AddressDTO\` Codable struct inside \`UserDTO\` and decode a nested JSON payload.
`,
      km: `# ៧.១ Codable & ការបំប្លែង JSON (CodingKeys)

> **សេចក្តីសង្ខេបប្រតិបត្តិ៖** Protocol \`Codable\` ក្នុង Swift ផ្លាស់ប្តូរទិន្នន័យ JSON ទៅជា Domain Models ដោយស្វ័យប្រវត្តិ តាមរយៈ \`CodingKeys\` និង \`JSONDecoder\`។

ក្នុងប្រព័ន្ធ iOS, \`Codable\` លុបបំបាត់ការបំប្លែង Dictionary ដោយដៃ។ \`CodingKeys\` Enum ជួយបំប្លែងរវាង snake_case របស់ Backend ទៅជា camelCase របស់ Swift។

---

## មេរៀនអនុវត្ត (Tutorial Walkthrough)

### ១. ការប្រើប្រាស់ \`CodingKeys\`
ភ្ជាប់ឈ្មោះ Key របស់ Backend ទៅកាន់ Property របស់ Swift។

\`\`\`swift
struct UserDTO: Codable {
    let id: Int
    let fullName: String

    enum CodingKeys: String, CodingKey {
        case id = "user_id"
        case fullName = "full_name"
    }
}
\`\`\`

---

## ឧទាហរណ៍កូដ (Code Example)

\`\`\`swift
import Foundation

struct CambodianMerchantResponse: Codable {
    let storeName: String
    let totalSalesKHR: Int

    enum CodingKeys: String, CodingKey {
        case storeName = "store_name"
        case totalSalesKHR = "total_sales_khr"
    }
}

let rawJSON = "{\"store_name\": \"Angkor Souvenirs\", \"total_sales_khr\": 18450000}".data(using: .utf8)!
let result = try JSONDecoder().decode(CambodianMerchantResponse.self, from: rawJSON)

print("Store: \(result.storeName)")
print("Total KHR Sales: \(result.totalSalesKHR) KHR")
\`\`\`

---

## លទ្ធផលរំពឹងទុក (Expected Output)

\`\`\`text
Store: Angkor Souvenirs
Total KHR Sales: 18450000 KHR
\`\`\`

---

## សាកល្បងដោយខ្លួនឯង (Try It Yourself)

សាកល្បងបន្ថែម Nested Struct \`AddressDTO\` ចូលក្នុង \`UserDTO\` រួចធ្វើការ Decode ទិន្នន័យ JSON។
`
    }
  },
  {
    id: "swift-urlsession-async-networking",
    title: {
      en: "7.2 Asynchronous Networking with URLSession",
      km: "៧.២ ប្រព័ន្ធ Networking Asynchronous ជាមួយ URLSession"
    },
    starterCode: `// SabayCode Swift Master Track: Async URLSession Pipeline
import Foundation

struct APIPostModel: Codable {
    let id: Int
    let title: String
}

class NetworkClientService {
    func fetchPostData(id: Int) async throws -> APIPostModel {
        guard let url = URL(string: "https://jsonplaceholder.typicode.com/posts/\(id)") else {
            throw URLError(.badURL)
        }

        print("[URLSession]: Initiating GET request to \(url.absoluteString)...")
        let (data, response) = try await URLSession.shared.data(from: url)

        guard let httpResponse = response as? HTTPURLResponse, httpResponse.statusCode == 200 else {
            throw URLError(.badServerResponse)
        }

        return try JSONDecoder().decode(APIPostModel.self, from: data)
    }
}

let client = NetworkClientService()
Task {
    if let post = try? await client.fetchPostData(id: 1) {
        print("[HTTP 200 OK]: Post #\(post.id) Title: \(post.title)")
    }
}
`,
    content: {
      en: `# 7.2 Asynchronous Networking with URLSession

> **Executive Summary:** Modern iOS networking uses \`URLSession.shared.data(from:)\` with \`async/await\` to execute non-blocking HTTP requests, status code verification, and error handling.

Building robust iOS networking architectures requires constructing clean \`URLRequest\` instances (handling headers, tokens, and body payloads), inspecting \`HTTPURLResponse\` status codes (e.g., verifying \`200...299\` success ranges), and throwing custom network errors when requests fail.

---

## Tutorial Walkthrough

### 1. Modern \`URLSession\` Async API
Use \`URLSession.shared.data(for: request)\` directly inside \`async\` functions.

\`\`\`swift
var request = URLRequest(url: endpointURL)
request.httpMethod = "POST"
request.setValue("Bearer YOUR_TOKEN", forHTTPHeaderField: "Authorization")
request.setValue("application/json", forHTTPHeaderField: "Content-Type")

let (data, response) = try await URLSession.shared.data(for: request)
\`\`\`

---

## Code Example

\`\`\`swift
import Foundation

struct NetworkServiceSimulator {
    static func performGETRequest(endpoint: String) async -> String {
        print("[Network]: Sending HTTP GET request to \(endpoint)...")
        try? await Task.sleep(nanoseconds: 100_000_000)
        return "{\"status\": \"success\", \"code\": 200}"
    }
}

Task {
    let response = await NetworkServiceSimulator.performGETRequest(endpoint: "https://api.sabaycode.com/v1/courses")
    print("Response Received: \(response)")
}
\`\`\`

---

## Expected Output / UI Preview

\`\`\`text
[Network]: Sending HTTP GET request to https://api.sabaycode.com/v1/courses...
Response Received: {"status": "success", "code": 200}
\`\`\`

---

## Try It Yourself

Implement a custom error enum \`NetworkError: Error\` with cases for \`.invalidResponse\`, \`.unauthorized\`, and \`.serverError(code: Int)\`.
`,
      km: `# ៧.២ ប្រព័ន្ធ Networking Asynchronous ជាមួយ URLSession

> **សេចក្តីសង្ខេបប្រតិបត្តិ៖** ការសរសេរ Networking ក្នុង iOS ទំនើបប្រើប្រាស់ \`URLSession.shared.data(from:)\` ជាមួយ \`async/await\` ដើម្បីរត់ HTTP Requests ដោយមិនស្ទះ UI។

ប្រព័ន្ធ Networking ត្រូវការកំណត់ \`URLRequest\` (Headers, Authorization Tokens) និងពិនិត្យ \`HTTPURLResponse\` Status Code (200 OK)។

---

## មេរៀនអនុវត្ត (Tutorial Walkthrough)

### ១. ការប្រើប្រាស់ URLSession Async API
រត់ \`URLSession.shared.data(for: request)\` ក្នុង Async Functions។

\`\`\`swift
var request = URLRequest(url: endpointURL)
request.httpMethod = "POST"
request.setValue("Bearer YOUR_TOKEN", forHTTPHeaderField: "Authorization")

let (data, response) = try await URLSession.shared.data(for: request)
\`\`\`

---

## ឧទាហរណ៍កូដ (Code Example)

\`\`\`swift
import Foundation

struct NetworkServiceSimulator {
    static func performGETRequest(endpoint: String) async -> String {
        print("[Network]: Sending HTTP GET request to \(endpoint)...")
        try? await Task.sleep(nanoseconds: 100_000_000)
        return "{\"status\": \"success\", \"code\": 200}"
    }
}

Task {
    let response = await NetworkServiceSimulator.performGETRequest(endpoint: "https://api.sabaycode.com/v1/courses")
    print("Response Received: \(response)")
}
\`\`\`

---

## លទ្ធផលរំពឹងទុក (Expected Output)

\`\`\`text
[Network]: Sending HTTP GET request to https://api.sabaycode.com/v1/courses...
Response Received: {"status": "success", "code": 200}
\`\`\`

---

## សាកល្បងដោយខ្លួនឯង (Try It Yourself)

បង្កើត Custom Error Enum \`NetworkError\` ដែលមាន Cases \`.invalidResponse\`, \`.unauthorized\`, \`.serverError\`។
`
    }
  },
  {
    id: "swift-swiftdata-coredata-persistence",
    title: {
      en: "7.3 SwiftData & Persistent Storage Models",
      km: "៧.៣ Persistence Local Storage (SwiftData & CoreData)"
    },
    starterCode: `// SabayCode Swift Master Track: SwiftData Model Architecture
import Foundation

// Modern SwiftData @Model annotation concept (iOS 17+)
struct StudentDataEntity {
    var id: UUID
    var name: String
    var scoreXP: Int

    init(name: String, scoreXP: Int) {
        self.id = UUID()
        self.name = name
        self.scoreXP = scoreXP
    }
}

class SwiftDataContainerSimulator {
    private var databaseStore: [UUID: StudentDataEntity] = [:]

    func insert(_ entity: StudentDataEntity) {
        databaseStore[entity.id] = entity
        print("[SwiftData Persisted]: Saved '\(entity.name)' with \(entity.scoreXP) XP to SQLite persistent database.")
    }

    func fetchAll() -> [StudentDataEntity] {
        return Array(databaseStore.values)
    }
}

let container = SwiftDataContainerSimulator()
container.insert(StudentDataEntity(name: "Seyha", scoreXP: 1450))
container.insert(StudentDataEntity(name: "Sokha", scoreXP: 2100))

print("Total Persisted Records: \(container.fetchAll().count)")
`,
    content: {
      en: `# 7.3 SwiftData & Persistent Storage Models

> **Executive Summary:** Introduced in iOS 17, SwiftData replaces Core Data boilerplate with macro-driven persistence (\`@Model\`, \`@Query\`), seamlessly persisting application domain data to SQLite databases.

SwiftData simplifies local persistence by taking full advantage of modern Swift macros. Decorating a class with **\`@Model\`** converts it into a persistent database schema automatically. Views fetch live-updating data using the **\`@Query\`** property wrapper, eliminating fetch requests and context save boilerplate.

---

## Tutorial Walkthrough

### 1. Declaring a SwiftData Model
Decorate domain classes with \`@Model\`.

\`\`\`swift
import SwiftData

@Model
class CourseProgressModel {
    @Attribute(.unique) var courseID: String
    var completedLessonsCount: Int
    var lastStudiedAt: Date

    init(courseID: String, completedLessonsCount: Int, lastStudiedAt: Date) {
        self.courseID = courseID
        self.completedLessonsCount = completedLessonsCount
        self.lastStudiedAt = lastStudiedAt
    }
}
\`\`\`

---

## Code Example

\`\`\`swift
import Foundation

struct SwiftDataQuerySimulator {
    static func executeQuery(filter: String) {
        print("[@Query Predicate]: Executing SwiftData fetch with filter: '\(filter)'...")
        print("[SQLite Result]: Retried 2 matching persistent records.")
    }
}

SwiftDataQuerySimulator.executeQuery(filter: "scoreXP > 1000")
\`\`\`

---

## Expected Output / UI Preview

\`\`\`text
[@Query Predicate]: Executing SwiftData fetch with filter: 'scoreXP > 1000'...
[SQLite Result]: Retried 2 matching persistent records.
\`\`\`

---

## Try It Yourself

Explain how SwiftData handles automatic lightweight schema migrations when adding a new property to a \`@Model\` class.
`,
      km: `# ៧.៣ Persistence Local Storage (SwiftData & CoreData)

> **សេចក្តីសង្ខេបប្រតិបត្តិ៖** ដាក់ឱ្យប្រើប្រាស់ក្នុង iOS 17, SwiftData ជំនួស Core Data ដោយប្រើប្រាស់ Macros (\`@Model\`, \`@Query\`) ដើម្បី រក្សាទុកទិន្នន័យ Local ទៅកាន់ SQLite Database។

SwiftData កាត់បន្ថយកូដ Core Data យ៉ាងច្រើន។ ការដាក់ **\`@Model\`** លើ Class បំប្លែងវាទៅជា Database Schema ដោយស្វ័យប្រវត្តិ។

---

## មេរៀនអនុវត្ត (Tutorial Walkthrough)

### ១. ការបង្កើត SwiftData Model
ប្រើប្រាស់ \`@Model\` លើ Class។

\`\`\`swift
import SwiftData

@Model
class CourseProgressModel {
    @Attribute(.unique) var courseID: String
    var completedLessonsCount: Int
    var lastStudiedAt: Date
}
\`\`\`

---

## ឧទាហរណ៍កូដ (Code Example)

\`\`\`swift
import Foundation

struct SwiftDataQuerySimulator {
    static func executeQuery(filter: String) {
        print("[@Query Predicate]: Executing SwiftData fetch with filter: '\(filter)'...")
        print("[SQLite Result]: Retried 2 matching persistent records.")
    }
}

SwiftDataQuerySimulator.executeQuery(filter: "scoreXP > 1000")
\`\`\`

---

## លទ្ធផលរំពឹងទុក (Expected Output)

\`\`\`text
[@Query Predicate]: Executing SwiftData fetch with filter: 'scoreXP > 1000'...
[SQLite Result]: Retried 2 matching persistent records.
\`\`\`

---

## សាកល្បងដោយខ្លួនឯង (Try It Yourself)

ពន្យល់ពីរបៀបដែល SwiftData ធ្វើការ Lightweight Migration ពេលបន្ថែម Property ថ្មីលើ \`@Model\` Class។
`
    }
  }
];

export const swiftLessonsGroup8: Lesson[] = [
  {
    id: "swift-mvvm-combine-observation",
    title: {
      en: "8.1 Architecture: MVVM & Observation Macro (@Observable)",
      km: "៨.១ ស្ថាបត្យកម្ម MVVM & @Observable Macro"
    },
    starterCode: `// SabayCode Swift Master Track: MVVM & Observation
import Foundation

// Modern iOS 17+ @Observable Macro Concept
class StudentListViewModel {
    // Observable properties automatically track UI dependencies
    var students: [String] = []
    var isLoading: Bool = false

    func loadStudents() async {
        isLoading = true
        print("[MVVM ViewModel]: Requesting domain data from repository...")
        try? await Task.sleep(nanoseconds: 100_000_000)
        students = ["Sokha", "Chantra", "Dara"]
        isLoading = false
        print("[MVVM ViewModel]: State updated. UI re-renders automatically!")
    }
}

let vm = StudentListViewModel()
Task {
    await vm.loadStudents()
    print("Loaded Students Count: \(vm.students.count)")
}
`,
    content: {
      en: `# 8.1 Architecture: MVVM & Observation Macro (@Observable)

> **Executive Summary:** Model-View-ViewModel (MVVM) decouples UI layout from domain business logic. Modern iOS 17+ replaces Combine's \`ObservableObject\` with the **\`@Observable\`** macro for cleaner, performance-optimized state tracking.

MVVM is the industry-standard architecture for SwiftUI and iOS engineering. The **Model** represents business domain data, the **View** renders UI hierarchy declaratively, and the **ViewModel** mediates user actions, transforms domain data, and publishes view state. Modern iOS 17 uses the \`@Observable\` macro, eliminating the need for explicit \`@Published\` annotations on ViewModel properties.

---

## Tutorial Walkthrough

### 1. Legacy Combine vs Modern Observation

| Feature | Legacy (\`ObservableObject\`) | Modern iOS 17+ (\`@Observable\`) |
| :--- | :--- | :--- |
| **Declaration** | \`class VM: ObservableObject\` | \`@Observable class VM\` |
| **Property Decorator**| Requires \`@Published var\` | Plain \`var\` (automatic observation) |
| **View Binding** | Requires \`@StateObject\` | Plain \`@State var vm = VM()\` |

---

## Code Example

\`\`\`swift
import Foundation

struct UserProfileModel {
    let name: String
    let rank: String
}

@MainActor
class ProfileViewModelSimulator {
    var profile: UserProfileModel?
    var statusMessage: String = "Idle"

    func updateProfile(name: String, rank: String) {
        self.profile = UserProfileModel(name: name, rank: rank)
        self.statusMessage = "Profile Loaded for \(name)"
        print("[MVVM View State]: \(statusMessage)")
    }
}

let vm = ProfileViewModelSimulator()
vm.updateProfile(name: "Seyha Nan", rank: "Master Educator")
\`\`\`

---

## Expected Output / UI Preview

\`\`\`text
[MVVM View State]: Profile Loaded for Seyha Nan
\`\`\`

---

## Try It Yourself

Migrate an old Combine \`ObservableObject\` ViewModel class containing three \`@Published\` properties to the new iOS 17 \`@Observable\` macro syntax.
`,
      km: `# ៨.១ ស្ថាបត្យកម្ម MVVM & @Observable Macro

> **សេចក្តីសង្ខេបប្រតិបត្តិ៖** Model-View-ViewModel (MVVM) បំបែក UI ចេញពី Business Logic។ ចាប់ពី iOS 17+, \`@Observable\` Macro ជំនួស Combine \`ObservableObject\` ដើម្បីឱ្យកូដមានភាពបង្រួមស្អាត។

MVVM គឺជាស្ថាបត្យកម្មស្តង់ដារឧស្សាហកម្ម iOS។ **Model** រក្សាទុកទិន្នន័យ, **View** បង្ហាញ UI, ហើយ **ViewModel** គ្រប់គ្រង Business Logic។

---

## មេរៀនអនុវត្ត (Tutorial Walkthrough)

### ១. តារាងប្រៀបធៀប Combine vs Modern Observation

| លក្ខណៈ | Combine (\`ObservableObject\`) | Modern iOS 17+ (\`@Observable\`) |
| :--- | :--- | :--- |
| **ការប្រកាស** | \`class VM: ObservableObject\` | \`@Observable class VM\` |
| **Property** | \`@Published var\` | \`var\` ធម្មតា (អូតូម៉ាតិច) |

---

## ឧទាហរណ៍កូដ (Code Example)

\`\`\`swift
import Foundation

struct UserProfileModel {
    let name: String
    let rank: String
}

@MainActor
class ProfileViewModelSimulator {
    var profile: UserProfileModel?
    var statusMessage: String = "Idle"

    func updateProfile(name: String, rank: String) {
        self.profile = UserProfileModel(name: name, rank: rank)
        self.statusMessage = "Profile Loaded for \(name)"
        print("[MVVM View State]: \(statusMessage)")
    }
}

let vm = ProfileViewModelSimulator()
vm.updateProfile(name: "Seyha Nan", rank: "Master Educator")
\`\`\`

---

## លទ្ធផលរំពឹងទុក (Expected Output)

\`\`\`text
[MVVM View State]: Profile Loaded for Seyha Nan
\`\`\`

---

## សាកល្បងដោយខ្លួនឯង (Try It Yourself)

សាកល្បងផ្លាស់ប្តូរ Combine \`ObservableObject\` ViewModel ចាស់ទៅជា iOS 17 \`@Observable\` Macro Syntax។
`
    }
  },
  {
    id: "swift-dependency-injection",
    title: {
      en: "8.2 Dependency Injection & Testable Architectures",
      km: "៨.២ Dependency Injection & ស្ថាបត្យកម្មងាយស្រួល Testing"
    },
    starterCode: `// SabayCode Swift Master Track: Dependency Injection Pattern
import Foundation

protocol PaymentGatewayProtocol {
    func executePayment(amountUSD: Double) -> Bool
}

class ABAPayGateway: PaymentGatewayProtocol {
    func executePayment(amountUSD: Double) -> Bool {
        print("[Production ABA Gateway]: Charged $\(amountUSD) via KHQR live API.")
        return true
    }
}

class MockPaymentGateway: PaymentGatewayProtocol {
    func executePayment(amountUSD: Double) -> Bool {
        print("[Mock Testing Gateway]: Simulated successful offline payment of $\(amountUSD).")
        return true
    }
}

class CheckoutViewModel {
    private let gateway: PaymentGatewayProtocol // Injected protocol dependency

    // Dependency Injection via Initializer
    init(gateway: PaymentGatewayProtocol) {
        self.gateway = gateway
    }

    func completeCheckout(total: Double) {
        let _ = gateway.executePayment(amountUSD: total)
    }
}

let testCheckout = CheckoutViewModel(gateway: MockPaymentGateway())
testCheckout.completeCheckout(total: 25.0)

let prodCheckout = CheckoutViewModel(gateway: ABAPayGateway())
prodCheckout.completeCheckout(total: 25.0)
`,
    content: {
      en: `# 8.2 Dependency Injection & Testable Architectures

> **Executive Summary:** Dependency Injection (DI) passes external service instances into dependent objects via initializers or protocols, eliminating hardcoded singletons and enabling rapid unit testing.

Hardcoding direct instance creation inside ViewModels (e.g., \`let api = NetworkManager.shared\`) tightly couples components and prevents effective unit testing. Dependency Injection decouples classes by injecting abstract protocol dependencies via initializers. In unit tests, developers substitute live production network clients with fast, deterministic mock services.

---

## Tutorial Walkthrough

### 1. Initializer Injection Pattern
Pass protocol conformances through the initializer.

\`\`\`swift
class UserViewModel {
    private let repository: UserRepositoryProtocol

    init(repository: UserRepositoryProtocol) {
        self.repository = repository
    }
}
\`\`\`

---

## Code Example

\`\`\`swift
import Foundation

protocol AnalyticsLoggerProtocol {
    func logEvent(name: String)
}

struct ConsoleLogger: AnalyticsLoggerProtocol {
    func logEvent(name: String) {
        print("[Console Log]: Event '\(name)' recorded.")
    }
}

class CourseViewModel {
    private let logger: AnalyticsLoggerProtocol

    init(logger: AnalyticsLoggerProtocol) {
        self.logger = logger
    }

    func enroll() {
        logger.logEvent(name: "course_enrollment_click")
    }
}

let courseVM = CourseViewModel(logger: ConsoleLogger())
courseVM.enroll()
\`\`\`

---

## Expected Output / UI Preview

\`\`\`text
[Console Log]: Event 'course_enrollment_click' recorded.
\`\`\`

---

## Try It Yourself

Write a mock analytics logger that captures logged events inside an array for unit test verification.
`,
      km: `# ៨.២ Dependency Injection & ស្ថាបត្យកម្មងាយស្រួល Testing

> **សេចក្តីសង្ខេបប្រតិបត្តិ៖** Dependency Injection (DI) ផ្ញើ Service Instances ចូលទៅកាន់ Classes តាមរយៈ Initializers ឬ Protocols ដើម្បីលុបបំបាត់ Tight Coupling និងបង្កើនភាពងាយស្រួលធ្វើ Unit Testing។

ការបង្កើត Instance ផ្ទាល់ក្នុង ViewModel (ឧ. \`let api = NetworkManager.shared\`) ធ្វើឱ្យកូដពិបាកធ្វើ Testing។ DI ជួយបំបែក Dependencies ដោយប្រើប្រាស់ Protocols។

---

## មេរៀនអនុវត្ត (Tutorial Walkthrough)

### ១. Initializer Injection Pattern
ផ្ញើ Protocol Conformance តាមរយៈ Initializer។

\`\`\`swift
class UserViewModel {
    private let repository: UserRepositoryProtocol

    init(repository: UserRepositoryProtocol) {
        self.repository = repository
    }
}
\`\`\`

---

## ឧទាហរណ៍កូដ (Code Example)

\`\`\`swift
import Foundation

protocol AnalyticsLoggerProtocol {
    func logEvent(name: String)
}

struct ConsoleLogger: AnalyticsLoggerProtocol {
    func logEvent(name: String) {
        print("[Console Log]: Event '\(name)' recorded.")
    }
}

class CourseViewModel {
    private let logger: AnalyticsLoggerProtocol

    init(logger: AnalyticsLoggerProtocol) {
        self.logger = logger
    }

    func enroll() {
        logger.logEvent(name: "course_enrollment_click")
    }
}

let courseVM = CourseViewModel(logger: ConsoleLogger())
courseVM.enroll()
\`\`\`

---

## លទ្ធផលរំពឹងទុក (Expected Output)

\`\`\`text
[Console Log]: Event 'course_enrollment_click' recorded.
\`\`\`

---

## សាកល្បងដោយខ្លួនឯង (Try It Yourself)

សរសេរ Mock Analytics Logger ដែលរក្សាទុក Logged Events ក្នុង Array សម្រាប់ធ្វើការផ្ទៀងផ្ទាត់ក្នុង Unit Test។
`
    }
  },
  {
    id: "swift-modular-spm-architecture",
    title: {
      en: "8.3 Modularization & Swift Package Manager (SPM)",
      km: "៨.៣ ការបំបែក Module & Swift Package Manager (SPM)"
    },
    starterCode: `// SabayCode Swift Master Track: Swift Package Manager Concept
import Foundation

// Package.swift manifest concept
let packageManifestDescription = """
// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "SabayCodeNetworking",
    platforms: [.iOS(.v17)],
    products: [
        .library(name: "SabayCodeNetworking", targets: ["SabayCodeNetworking"])
    ],
    targets: [
        .target(name: "SabayCodeNetworking", dependencies: []),
        .testTarget(name: "SabayCodeNetworkingTests", dependencies: ["SabayCodeNetworking"])
    ]
)
"""

print("--- Swift Package Manager Manifest (Package.swift) ---")
print(packageManifestDescription)
`,
    content: {
      en: `# 8.3 Modularization & Swift Package Manager (SPM)

> **Executive Summary:** Modularization decomposes monolithic iOS applications into lightweight, isolated Swift Packages using Swift Package Manager (SPM), drastically improving build compilation times and domain boundary separation.

As enterprise iOS codebases scale, compiling a single monolithic application target slows developer productivity. **Swift Package Manager (SPM)** allows software architects to extract domain feature modules (\`NetworkingModule\`, \`AuthenticationModule\`, \`UIComponentKit\`) into standalone local or remote packages governed by \`Package.swift\` manifests.

---

## Tutorial Walkthrough

### 1. Structure of \`Package.swift\`
Define SPM dependencies, products, and target targets cleanly in Swift syntax.

\`\`\`swift
// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "FeatureAuth",
    products: [
        .library(name: "FeatureAuth", targets: ["FeatureAuth"])
    ],
    targets: [
        .target(name: "FeatureAuth")
    ]
)
\`\`\`

---

## Code Example

\`\`\`swift
import Foundation

struct SPMModuleSimulator {
    let moduleName: String
    
    func compileModule() {
        print("[SPM Build Engine]: Compiling isolated package target '\(moduleName)'...")
        print("[SPM Build Engine]: Build Succeeded in 0.82 seconds (Incremental Cache Hit).")
    }
}

let authModule = SPMModuleSimulator(moduleName: "SabayAuthKit")
authModule.compileModule()
\`\`\`

---

## Expected Output / UI Preview

\`\`\`text
[SPM Build Engine]: Compiling isolated package target 'SabayAuthKit'...
[SPM Build Engine]: Build Succeeded in 0.82 seconds (Incremental Cache Hit).
\`\`\`

---

## Try It Yourself

Create a multi-target \`Package.swift\` layout where a \`PaymentFeature\` target depends on a shared \`CoreNetwork\` target.
`,
      km: `# ៨.៣ ការបំបែក Module & Swift Package Manager (SPM)

> **សេចក្តីសង្ខេបប្រតិបត្តិ៖** ការបំបែក Module ជួយរៀបចំកម្មវិធី iOS ធំៗឱ្យទៅជា Swift Packages ដាច់ដោយឡែកពីគ្នាដោយប្រើប្រាស់ Swift Package Manager (SPM) ដើម្បីកាត់បន្ថយរយៈពេល Build Time។

**Swift Package Manager (SPM)** អនុញ្ញាតឱ្យទាញយក Feature Modules (\`NetworkingModule\`, \`UIComponentKit\`) ទៅជា Packages ដោយគ្រប់គ្រងតាមរយៈ \`Package.swift\`។

---

## មេរៀនអនុវត្ត (Tutorial Walkthrough)

### ១. រចនាសម្ព័ន្ធ \`Package.swift\`
កំណត់ Products និង Targets ក្នុង SPM។

\`\`\`swift
import PackageDescription

let package = Package(
    name: "FeatureAuth",
    products: [
        .library(name: "FeatureAuth", targets: ["FeatureAuth"])
    ]
)
\`\`\`

---

## ឧទាហរណ៍កូដ (Code Example)

\`\`\`swift
import Foundation

struct SPMModuleSimulator {
    let moduleName: String
    
    func compileModule() {
        print("[SPM Build Engine]: Compiling isolated package target '\(moduleName)'...")
        print("[SPM Build Engine]: Build Succeeded in 0.82 seconds (Incremental Cache Hit).")
    }
}

let authModule = SPMModuleSimulator(moduleName: "SabayAuthKit")
authModule.compileModule()
\`\`\`

---

## លទ្ធផលរំពឹងទុក (Expected Output)

\`\`\`text
[SPM Build Engine]: Compiling isolated package target 'SabayAuthKit'...
[SPM Build Engine]: Build Succeeded in 0.82 seconds (Incremental Cache Hit).
\`\`\`

---

## សាកល្បងដោយខ្លួនឯង (Try It Yourself)

សាកល្បងសរសេររចនាសម្ព័ន្ធ \`Package.swift\` ដែលមាន Targets ច្រើនពឹងផ្អែកលើគ្នា។
`
    }
  }
];

export const swiftLessonsGroup9: Lesson[] = [
  {
    id: "swift-xctest-unit-testing",
    title: {
      en: "9.1 Unit Testing with XCTest Framework",
      km: "៩.១ ការសរសេរ Unit Test ជាមួយ XCTest Framework"
    },
    starterCode: `// SabayCode Swift Master Track: XCTest Unit Testing
import Foundation

struct CurrencyConverter {
    static func convertUSDToKHR(usd: Double) -> Int {
        return Int(usd * 4100.0)
    }
}

// XCTestCase Simulator
class CurrencyConverterTests {
    func testUSDToKHRConversion() {
        let inputUSD = 10.0
        let expectedKHR = 41000

        let result = CurrencyConverter.convertUSDToKHR(usd: inputUSD)

        // XCTAssertEqual simulation
        if result == expectedKHR {
            print("[XCTest PASS]: testUSDToKHRConversion passed! Result \(result) == Expected \(expectedKHR)")
        } else {
            print("[XCTest FAIL]: Expected \(expectedKHR) but got \(result)")
        }
    }
}

let testRunner = CurrencyConverterTests()
testRunner.testUSDToKHRConversion()
`,
    content: {
      en: `# 9.1 Unit Testing with XCTest Framework

> **Executive Summary:** XCTest is Apple's primary testing framework for validating domain logic through automated unit tests, assertions (\`XCTAssertEqual\`, \`XCTAssertNil\`), and performance benchmarks.

Writing comprehensive unit tests guarantees that domain business logic remains correct as feature specifications evolve. In XCTest, test classes inherit from \`XCTestCase\`. Test methods must begin with the prefix \`test...\` (e.g., \`testCalculateTotal_WithValidDiscount_ReturnsCorrectAmount()\`). Modern Swift testing also leverages \`async\` test methods to validate asynchronous APIs.

---

## Tutorial Walkthrough

### 1. Common XCTest Assertions
- **\`XCTAssertEqual(a, b)\`**: Asserts two values are equal.
- **\`XCTAssertTrue(condition)\`**: Asserts expression evaluates to true.
- **\`XCTAssertNil(optional)\`**: Asserts an optional value is nil.
- **\`XCTAssertThrowsError(expression)\`**: Asserts that executing an expression throws an error.

---

## Code Example

\`\`\`swift
import Foundation

struct CartCalculator {
    func calculateTotal(itemsPrice: [Double], discountPct: Double) -> Double {
        let sum = itemsPrice.reduce(0, +)
        return sum * (1.0 - discountPct / 100.0)
    }
}

class CartCalculatorTests {
    func testDiscountCalculation() {
        let calculator = CartCalculator()
        let total = calculator.calculateTotal(itemsPrice: [10.0, 20.0], discountPct: 10.0)
        print("XCTAssertEqual test: Calculated Total $\(total) == Expected $27.0")
    }
}

let tests = CartCalculatorTests()
tests.testDiscountCalculation()
\`\`\`

---

## Expected Output / UI Preview

\`\`\`text
XCTAssertEqual test: Calculated Total $27.0 == Expected $27.0
\`\`\`

---

## Try It Yourself

Write an asynchronous XCTest method that uses \`await\` to verify an asynchronous network service call.
`,
      km: `# ៩.១ ការសរសេរ Unit Test ជាមួយ XCTest Framework

> **សេចក្តីសង្ខេបប្រតិបត្តិ៖** XCTest គឺជា Framework ផ្លូវការរបស់ Apple សម្រាប់ផ្ទៀងផ្ទាត់កូដតាមរយៈ Unit Tests, Assertions (\`XCTAssertEqual\`), និង Performance Benchmarks។

ការសរសេរ Unit Tests ធានាថាកូដដំណើរការបានត្រឹមត្រូវជានិច្ច។ ក្នុង XCTest, Test Class ត្រូវបន្តវេនពី \`XCTestCase\` ហើយរាល់ Test Methods ត្រូវផ្តើមដោយពាក្យ \`test...\`។

---

## មេរៀនអនុវត្ត (Tutorial Walkthrough)

### ១. Assertions ដែលប្រើប្រាស់ញឹកញាប់
- **\`XCTAssertEqual(a, b)\`**: ផ្ទៀងផ្ទាត់ថាតម្លៃទាំងពីរស្មើគ្នា។
- **\`XCTAssertTrue(condition)\`**: ផ្ទៀងផ្ទាត់ថាលក្ខខណ្ឌពិត (true)។
- **\`XCTAssertNil(optional)\`**: ផ្ទៀងផ្ទាត់ថាតម្លៃស្មើ nil។

---

## ឧទាហរណ៍កូដ (Code Example)

\`\`\`swift
import Foundation

struct CartCalculator {
    func calculateTotal(itemsPrice: [Double], discountPct: Double) -> Double {
        let sum = itemsPrice.reduce(0, +)
        return sum * (1.0 - discountPct / 100.0)
    }
}

class CartCalculatorTests {
    func testDiscountCalculation() {
        let calculator = CartCalculator()
        let total = calculator.calculateTotal(itemsPrice: [10.0, 20.0], discountPct: 10.0)
        print("XCTAssertEqual test: Calculated Total $\(total) == Expected $27.0")
    }
}

let tests = CartCalculatorTests()
tests.testDiscountCalculation()
\`\`\`

---

## លទ្ធផលរំពឹងទុក (Expected Output)

\`\`\`text
XCTAssertEqual test: Calculated Total $27.0 == Expected $27.0
\`\`\`

---

## សាកល្បងដោយខ្លួនឯង (Try It Yourself)

សាកល្បងសរសេរ Asynchronous XCTest Method ដោយប្រើប្រាស់ \`await\` ដើម្បីផ្ទៀងផ្ទាត់ការទាញយកទិន្នន័យ។
`
    }
  },
  {
    id: "swift-lldb-debugging-po",
    title: {
      en: "9.2 LLDB Debugging, Breakpoints & Instruments",
      km: "៩.២ ការ Debug កូដជាមួយ LLDB Commands & Instruments"
    },
    starterCode: `// SabayCode Swift Master Track: LLDB Debugging
import Foundation

struct UserDebugProfile {
    let username: String
    let token: String
}

let user = UserDebugProfile(username: "seyha_nan", token: "SECRET_99812")

print("--- LLDB Command Prompt Simulation ---")
print("(lldb) po user.username")
print("\"\(user.username)\"")
print("(lldb) po user.token")
print("\"\(user.token)\"")
print("(lldb) expr user.username = \"new_username\"")
`,
    content: {
      en: `# 9.2 LLDB Debugging, Breakpoints & Instruments

> **Executive Summary:** Mastering LLDB console commands (\`po\`, \`p\`, \`v\`, \`expr\`) and Xcode Instruments profiling tools (Leaks, Time Profiler) accelerates root-cause debugging for bugs, crash dumps, and memory leaks.

The **LLDB** debugger integrated into Xcode allows developers to inspect variable states dynamically at runtime when breakpoints hit. Using **\`po\`** (print object description) evaluates expressions interactively inside the console, while **\`expr\`** allows developers to alter runtime memory values on the fly without re-compiling the application.

---

## Tutorial Walkthrough

### 1. Essential LLDB Commands
- **\`po <expression>\`**: Evaluates and prints object descriptions (\`CustomDebugStringConvertible\`).
- **\`v <variable>\`**: Fast local variable value inspection without running the Swift evaluator engine.
- **\`expr <variable> = <value>\`**: Modifies a variable value dynamically at a breakpoint during live execution.
- **\`bt\`**: Prints the backtrace execution frame call stack.

---

## Code Example

\`\`\`swift
import Foundation

struct LLDBDebuggerSimulator {
    static func inspectStateAtBreakpoint(variableName: String, value: Any) {
        print("(lldb) po \(variableName)")
        print("└── Value: \(value) [Type: \(type(of: value))]")
    }
}

LLDBDebuggerSimulator.inspectStateAtBreakpoint(variableName: "selectedCourseID", value: "swift-master-2026")
\`\`\`

---

## Expected Output / UI Preview

\`\`\`text
(lldb) po selectedCourseID
└── Value: swift-master-2026 [Type: String]
\`\`\`

---

## Try It Yourself

Explain the difference between running \`po\` (object description) versus \`v\` (frame variable inspection) in LLDB console.
`,
      km: `# ៩.២ ការ Debug កូដជាមួយ LLDB Commands & Instruments

> **សេចក្តីសង្ខេបប្រតិបត្តិ៖** ការស្ទាត់ជំនាញលើ LLDB Debugger Commands (\`po\`, \`p\`, \`v\`, \`expr\`) និង Xcode Instruments (Leaks, Time Profiler) ជួយដោះស្រាយ Bugs និង Memory Leaks យ៉ាងឆាប់រហ័ស។

**LLDB** ក្នុង Xcode អនុញ្ញាតឱ្យពិនិត្យអថេរពេលកូដជួប Breakpoint។ ការប្រើប្រាស់ **\`po\`** (Print Object) និង **\`expr\`** អនុញ្ញាតឱ្យកែប្រែតម្លៃពេលកូដកំពុងរត់ដោយមិនបាច់ Re-compile ឡើយ។

---

## មេរៀនអនុវត្ត (Tutorial Walkthrough)

### ១. LLDB Commands ចាំបាច់
- **\`po <expression>\`**: បង្ហាញព័ត៌មានលម្អិតនៃ Object។
- **\`v <variable>\`**: ពិនិត្យមើលតម្លៃអថេររហ័ស។
- **\`expr <variable> = <value>\`**: កែប្រែតម្លៃអថេរភ្លាមៗពេល Debugging។

---

## ឧទាហរណ៍កូដ (Code Example)

\`\`\`swift
import Foundation

struct LLDBDebuggerSimulator {
    static func inspectStateAtBreakpoint(variableName: String, value: Any) {
        print("(lldb) po \(variableName)")
        print("└── Value: \(value) [Type: \(type(of: value))]")
    }
}

LLDBDebuggerSimulator.inspectStateAtBreakpoint(variableName: "selectedCourseID", value: "swift-master-2026")
\`\`\`

---

## លទ្ធផលរំពឹងទុក (Expected Output)

\`\`\`text
(lldb) po selectedCourseID
└── Value: swift-master-2026 [Type: String]
\`\`\`

---

## សាកល្បងដោយខ្លួនឯង (Try It Yourself)

ពន្យល់ពីភាពខុសគ្នារវាង \`po\` និង \`v\` នៅក្នុង LLDB Console។
`
    }
  },
  {
    id: "swift-performance-optimization",
    title: {
      en: "9.3 Performance Optimization & Launch Speed",
      km: "៩.៣ ការបង្កើន ល្បឿន Performance & Launch Optimization"
    },
    starterCode: `// SabayCode Swift Master Track: Performance Benchmarking
import Foundation

func benchmarkBlock(_ title: String, operation: () -> Void) {
    let start = CFAbsoluteTimeGetCurrent()
    operation()
    let elapsed = (CFAbsoluteTimeGetCurrent() - start) * 1000.0 // Convert to milliseconds
    print("[Benchmark - \(title)]: Completed in \(String(format: "%.3f", elapsed)) ms")
}

let numbers = Array(1...100_000)

benchmarkBlock("Standard Array Filter") {
    let _ = numbers.filter { $0 % 2 == 0 }
}

benchmarkBlock("Lazy Collection Filter") {
    let _ = numbers.lazy.filter { $0 % 2 == 0 }.prefix(10)
}
`,
    content: {
      en: `# 9.3 Performance Optimization & Launch Speed

> **Executive Summary:** High-performance iOS applications optimize cold launch times, minimize memory footprint, avoid main-thread blocking, and leverage lazy evaluation for large data collections.

Creating smooth, responsive iOS applications requires minimizing cold launch overhead (aiming for sub-400ms startup times), using \`lazy\` collection transformations when operating over large data arrays, and deferring non-critical framework initialization until after the initial UI frame renders.

---

## Tutorial Walkthrough

### 1. Lazy Collections Optimization
Standard collection transformations (\`.map\`, \`.filter\`) allocate intermediate arrays in memory. Chaining \`.lazy\` defers element evaluation until accessed.

\`\`\`swift
// Lazy collection computes elements on demand without allocating full arrays
let lazyEvens = hugeArray.lazy.filter { $0.isMultiple(of: 2) }.map { $0 * 2 }
\`\`\`

---

## Code Example

\`\`\`swift
import Foundation

struct LaunchOptimizer {
    static func measurePreMainTime() {
        print("[App Launch Optimizer]: Deferring non-critical SDK initialization to background queue...")
        print("[App Launch Optimizer]: First Frame Rendered in 180ms!")
    }
}

LaunchOptimizer.measurePreMainTime()
\`\`\`

---

## Expected Output / UI Preview

\`\`\`text
[App Launch Optimizer]: Deferring non-critical SDK initialization to background queue...
[App Launch Optimizer]: First Frame Rendered in 180ms!
\`\`\`

---

## Try It Yourself

Explain why using \`struct\` value types instead of \`class\` reference types reduces heap allocation overhead during large list renders.
`,
      km: `# ៩.៣ ការបង្កើន ល្បឿន Performance & Launch Optimization

> **សេចក្តីសង្ខេបប្រតិបត្តិ៖** កម្មវិធី iOS ដែលមាន Performance ខ្ពស់ត្រូវបង្កើនល្បឿននៃការបើក App (Launch Time), កាត់បន្ថយការប្រើប្រាស់ Memory, និងចៀសវាងការធ្វើឱ្យស្ទះ Main Thread។

ការបង្កើត App មានល្បឿនលឿនតម្រូវឱ្យបើក App ក្រោម 400ms, ប្រើប្រាស់ \`lazy\` collections លើទិន្នន័យធំៗ, និងពន្យារពេលបង្កើត SDK Connections រហូតដល់ UI ដំបូងបង្ហាញរួចរាល់។

---

## មេរៀនអនុវត្ត (Tutorial Walkthrough)

### ១. Lazy Collections Optimization
ការប្រើប្រាស់ \`.lazy\` ពន្យារការគណនាទិន្នន័យរហូតដល់ទិន្នន័យនោះត្រូវយកទៅប្រើ។

\`\`\`swift
let lazyEvens = hugeArray.lazy.filter { $0.isMultiple(of: 2) }.map { $0 * 2 }
\`\`\`

---

## ឧទាហរណ៍កូដ (Code Example)

\`\`\`swift
import Foundation

struct LaunchOptimizer {
    static func measurePreMainTime() {
        print("[App Launch Optimizer]: Deferring non-critical SDK initialization to background queue...")
        print("[App Launch Optimizer]: First Frame Rendered in 180ms!")
    }
}

LaunchOptimizer.measurePreMainTime()
\`\`\`

---

## លទ្ធផលរំពឹងទុក (Expected Output)

\`\`\`text
[App Launch Optimizer]: Deferring non-critical SDK initialization to background queue...
[App Launch Optimizer]: First Frame Rendered in 180ms!
\`\`\`

---

## សាកល្បងដោយខ្លួនឯង (Try It Yourself)

ពន្យល់ពីមូលហេតុដែលការប្រើប្រាស់ \`struct\` ជំនួសឱ្យ \`class\` កាត់បន្ថយ Heap Allocation ពេលបង្ហាញ List ធំៗ។
`
    }
  }
];

export const swiftLessonsGroup10: Lesson[] = [
  {
    id: "swift-app-lifecycle-scene-delegate",
    title: {
      en: "10.1 iOS App Lifecycle & Scene Phase States",
      km: "១០.១ iOS App Lifecycle & Scene Phase States"
    },
    starterCode: `// SabayCode Swift Master Track: Modern SwiftUI App Lifecycle
import Foundation

// Modern SwiftUI @main App Lifecycle (iOS 14+)
enum MockScenePhase {
    case active
    case inactive
    case background
}

struct AppLifecycleHandler {
    func handlePhaseChange(from oldPhase: MockScenePhase, to newPhase: MockScenePhase) {
        switch newPhase {
        case .active:
            print("[App Lifecycle]: Scene active. Resuming UI animations & location updates.")
        case .inactive:
            print("[App Lifecycle]: Scene inactive. Pausing active timers.")
        case .background:
            print("[App Lifecycle]: Scene entered background. Persisting pending draft state to SQLite.")
        }
    }
}

let handler = AppLifecycleHandler()
handler.handlePhaseChange(from: .active, to: .background)
handler.handlePhaseChange(from: .background, to: .active)
`,
    content: {
      en: `# 10.1 iOS App Lifecycle & Scene Phase States

> **Executive Summary:** Modern SwiftUI application entry points use the \`@main\` attribute with the \`App\` protocol, monitoring scene state transitions (\`active\`, \`inactive\`, \`background\`) via the \`scenePhase\` environment key.

Modern iOS applications manage lifecycle transitions across three primary scene states: **active** (app is visible in the foreground receiving touch events), **inactive** (app is transitioning, interrupted by an incoming phone call or Control Center drag), and **background** (app is hidden from screen). Monitoring \`scenePhase\` allows applications to flush unsaved draft data and secure sensitive payment screens when transitioning to the background.

---

## Tutorial Walkthrough

### 1. Monitoring Scene Phase in SwiftUI
Observe state changes using the \`.onChange(of: scenePhase)\` view modifier.

\`\`\`swift
@main
struct SabayCodeApp: App {
    @Environment(\\.scenePhase) private var scenePhase

    var body: some Scene {
        WindowGroup {
            ContentView()
        }
        .onChange(of: scenePhase) { oldPhase, newPhase in
            if newPhase == .background {
                savePendingCartItems()
            }
        }
    }
}
\`\`\`

---

## Code Example

\`\`\`swift
import Foundation

struct AppSecurityGatekeeper {
    static func secureSensitiveUIOnBackground() {
        print("[Security Manager]: Overlaying privacy blur curtain over KHQR payment screen before taking app switcher snapshot.")
    }
}

AppSecurityGatekeeper.secureSensitiveUIOnBackground()
\`\`\`

---

## Expected Output / UI Preview

\`\`\`text
[Security Manager]: Overlaying privacy blur curtain over KHQR payment screen before taking app switcher snapshot.
\`\`\`

---

## Try It Yourself

Explain why rendering a blurred privacy shield when entering background prevents unauthorized users from viewing account balances in the iOS multitasking App Switcher.
`,
      km: `# ១០.១ iOS App Lifecycle & Scene Phase States

> **សេចក្តីសង្ខេបប្រតិបត្តិ៖** កម្មវិធី SwiftUI ទំនើបប្រើប្រាស់ \`@main\` ជាមួយ \`App\` Protocol ដោយតាមដានការផ្លាស់ប្តូរ Scene Phase (\`active\`, \`inactive\`, \`background\`) តាមរយៈ \`scenePhase\`។

កម្មវិធី iOS គ្រប់គ្រងស្ថានភាព Scene ៣ សំខាន់ៗ៖ **active** (បង្ហាញលើអេក្រង់), **inactive** (រអាក់រអួលដោយសារ Call ចូល), និង **background** (បិទពួនពីក្រោយ)។ ការតាមដាន \`scenePhase\` ជួយ រក្សាទុកទិន្នន័យ និងបាំងអេក្រង់ KHQR Payment ពេល App បិទទៅ background។

---

## មេរៀនអនុវត្ត (Tutorial Walkthrough)

### ១. ការតាមដាន Scene Phase
ប្រើប្រាស់ \`.onChange(of: scenePhase)\` Modifier។

\`\`\`swift
@main
struct SabayCodeApp: App {
    @Environment(\\.scenePhase) private var scenePhase

    var body: some Scene {
        WindowGroup {
            ContentView()
        }
        .onChange(of: scenePhase) { oldPhase, newPhase in
            if newPhase == .background {
                savePendingCartItems()
            }
        }
    }
}
\`\`\`

---

## ឧទាហរណ៍កូដ (Code Example)

\`\`\`swift
import Foundation

struct AppSecurityGatekeeper {
    static func secureSensitiveUIOnBackground() {
        print("[Security Manager]: Overlaying privacy blur curtain over KHQR payment screen before taking app switcher snapshot.")
    }
}

AppSecurityGatekeeper.secureSensitiveUIOnBackground()
\`\`\`

---

## លទ្ធផលរំពឹងទុក (Expected Output)

\`\`\`text
[Security Manager]: Overlaying privacy blur curtain over KHQR payment screen before taking app switcher snapshot.
\`\`\`

---

## សាកល្បងដោយខ្លួនឯង (Try It Yourself)

ពន្យល់ពីមូលហេតុដែលការបាំង Privacy Blur Shield ពេល App ចូល Background ការពារសុវត្ថិភាពទិន្នន័យក្នុង App Switcher។
`
    }
  },
  {
    id: "swift-app-store-submission",
    title: {
      en: "10.2 App Store Submission & TestFlight Distribution",
      km: "១០.២ ការដាក់ស្នើ App Store & TestFlight Distribution"
    },
    starterCode: `// SabayCode Swift Master Track: App Store Submission Pipeline
import Foundation

struct AppStoreReleasePipeline {
    let bundleID: String
    let versionNumber: String
    let buildNumber: Int

    func printSubmissionChecklist() {
        print("--- App Store Connect Release Checklist ---")
        print("1. Bundle Identifier: \(bundleID)")
        print("2. Version: \(versionNumber) (Build \(buildNumber))")
        print("3. Signing Certificate: Apple Distribution: SabayCode Co., Ltd.")
        print("4. Provisioning Profile: App Store Production Profile")
        print("5. TestFlight Internal & External Beta Groups Validated")
        print("6. Privacy Nutrition Labels & Encryption Declarations Configured")
    }
}

let release = AppStoreReleasePipeline(bundleID: "com.sabaycode.ios.app", versionNumber: "2.1.0", buildNumber: 104)
release.printSubmissionChecklist()
`,
    content: {
      en: `# 10.2 App Store Submission & TestFlight Distribution

> **Executive Summary:** Publishing iOS software requires configuring App Store Connect, Distribution Signing Certificates, App Provisioning Profiles, TestFlight beta distribution groups, and App Review guidelines compliance.

Submitting production apps to Apple's App Store requires executing specific distribution steps:
1. **Bundle ID & Capabilities**: Registering explicit App IDs in Apple Developer Portal.
2. **Signing & Certificates**: Creating Apple Distribution Certificates and App Store Provisioning Profiles.
3. **Archive & Upload**: Building release archives in Xcode and uploading builds to App Store Connect via Xcode Organizer or Fastlane CLI.
4. **TestFlight Beta Testing**: Distributing beta builds internally to engineers and externally to beta testers.
5. **App Store Review Submission**: Filling out Privacy Nutrition Labels, age ratings, promotional screenshots, and submitting for Apple App Review.

---

## Tutorial Walkthrough

### 1. Versioning Standards
Follow Semantic Versioning (\`Version: 1.0.0\`) alongside an auto-incrementing integer \`Build Number\` (\`Build: 102\`).

---

## Code Example

\`\`\`swift
import Foundation

struct TestFlightDistributor {
    static func submitToInternalGroup(groupName: String) {
        print("[TestFlight]: Uploading build to beta group '\(groupName)'...")
        print("[TestFlight]: Push notification sent to 25 QA beta testers!")
    }
}

TestFlightDistributor.submitToInternalGroup(groupName: "Cambodian-iOS-QA-Team")
\`\`\`

---

## Expected Output / UI Preview

\`\`\`text
[TestFlight]: Uploading build to beta group 'Cambodian-iOS-QA-Team'...
[TestFlight]: Push notification sent to 25 QA beta testers!
\`\`\`

---

## Try It Yourself

List three common reasons Apple rejects app submissions during human App Review (e.g., broken links, missing privacy policy, or crashing on launch).
`,
      km: `# ១០.២ ការដាក់ស្នើ App Store & TestFlight Distribution

> **សេចក្តីសង្ខេបប្រតិបត្តិ៖** ការបង្ហោះ App ទៅកាន់ App Store តម្រូវឱ្យរៀបចំ App Store Connect, Distribution Signing Certificates, Provisioning Profiles, និង TestFlight Beta Testing។

ដំណើរការដាក់ស្នើ App ទៅ App Store៖
១. កំណត់ Bundle ID & Capabilities
២. បង្កើត Distribution Certificate & Provisioning Profile
៣. ធ្វើការ Archive និង Upload តាម Xcode Organizer ឬ Fastlane
៤. ចែករំលែក TestFlight ទៅកាន់ Beta Testers
៥. ដាក់ស្នើឱ្យ Apple App Review ពិនិត្យ។

---

## មេរៀនអនុវត្ត (Tutorial Walkthrough)

### ១. Versioning Standards
ប្រើប្រាស់ Semantic Versioning (\`Version: 1.0.0\`) និង \`Build Number\` (Integer)។

---

## ឧទាហរណ៍កូដ (Code Example)

\`\`\`swift
import Foundation

struct TestFlightDistributor {
    static func submitToInternalGroup(groupName: String) {
        print("[TestFlight]: Uploading build to beta group '\(groupName)'...")
        print("[TestFlight]: Push notification sent to 25 QA beta testers!")
    }
}

TestFlightDistributor.submitToInternalGroup(groupName: "Cambodian-iOS-QA-Team")
\`\`\`

---

## លទ្ធផលរំពឹងទុក (Expected Output)

\`\`\`text
[TestFlight]: Uploading build to beta group 'Cambodian-iOS-QA-Team'...
[TestFlight]: Push notification sent to 25 QA beta testers!
\`\`\`

---

## សាកល្បងដោយខ្លួនឯង (Try It Yourself)

រៀបរាប់ពីមូលហេតុ ៣ ដែល Apple តែងតែបដិសេធ (Reject) App ពេលធ្វើការ App Review។
`
    }
  },
  {
    id: "swift-production-best-practices",
    title: {
      en: "10.3 Production Best Practices, Security & Localization",
      km: "១០.៣ ការអនុវត្តល្អៗក្នុង Production (Keychain Security & i18n)"
    },
    starterCode: `// SabayCode Swift Master Track: Production Security & Localization
import Foundation

// Secure Keychain Item Wrapper Concept
struct KeychainStorageManager {
    static func saveAuthToken(_ token: String) {
        print("[Keychain Security]: Encrypting token with Hardware Secure Enclave...")
        print("[Keychain Security]: Saved securely under kSecClassGenericPassword.")
    }
}

// Localization Helper Concept
enum AppLanguage {
    case english
    case khmer
}

func localizedGreeting(for lang: AppLanguage) -> String {
    switch lang {
    case .english: return "Welcome to SabayCode Swift Master Track!"
    case .khmer:   return "ស្វាគមន៍មកកាន់វគ្គសិក្សា Swift Master របស់ SabayCode!"
    }
}

KeychainStorageManager.saveAuthToken("JWT_BEARER_SECURE_TOKEN_2026")
print("EN: \(localizedGreeting(for: .english))")
print("KM: \(localizedGreeting(for: .khmer))")
`,
    content: {
      en: `# 10.3 Production Best Practices, Security & Localization

> **Executive Summary:** Hardening iOS software for production requires storing tokens in the iOS Keychain (not UserDefaults), enforcing SSL certificate pinning, setting up crash reporting, and implementing localized string tables (English & Khmer i18n).

Enterprise iOS production readiness centers on security and localization:
- **Keychain Storage**: Secure sensitive tokens, API keys, and biometric credentials inside the iOS Keychain using \`SecItemAdd\` rather than insecure plain-text \`UserDefaults\`.
- **SSL Certificate Pinning**: Pin server SSL certificates inside network request delegates to prevent Man-In-The-Middle (MITM) attacks.
- **Internationalization (i18n)**: Support dual-language interfaces using \`String(localized: "key")\` for seamless English and Khmer typography.

---

## Tutorial Walkthrough

### 1. Keychain vs UserDefaults Security

| Feature | UserDefaults | iOS Keychain |
| :--- | :--- | :--- |
| **Storage Security** | Unencrypted plain-text plist file | Hardware-encrypted via Secure Enclave |
| **Typical Usage** | User preferences (dark mode, layout tabs) | Auth tokens, passwords, private keys |
| **Persistence** | Cleared on app re-install | Retained across re-installs |

---

## Code Example

\`\`\`swift
import Foundation

struct ProductionSecurityAudit {
    static func auditSecurityStatus() {
        print("[Security Audit]: Keychain Encryption Active -> PASS")
        print("[Security Audit]: SSL Certificate Pinning -> PASS")
        print("[Security Audit]: Crashlytics Telemetry Initialized -> PASS")
        print("[Security Audit]: Khmer & English Localization Bundle -> PASS")
    }
}

ProductionSecurityAudit.auditSecurityStatus()
\`\`\`

---

## Expected Output / UI Preview

\`\`\`text
[Security Audit]: Keychain Encryption Active -> PASS
[Security Audit]: SSL Certificate Pinning -> PASS
[Security Audit]: Crashlytics Telemetry Initialized -> PASS
[Security Audit]: Khmer & English Localization Bundle -> PASS
\`\`\`

---

## Try It Yourself

Explain why storing auth tokens in \`UserDefaults\` exposes sensitive user data on jailbroken iOS devices.
`,
      km: `# ១០.៣ ការអនុវត្តល្អៗក្នុង Production (Keychain Security & i18n)

> **សេចក្តីសង្ខេបប្រតិបត្តិ៖** ការពង្រឹងសុវត្ថិភាពសម្រាប់ Production តម្រូវឱ្យរក្សាទុក Token ក្នុង iOS Keychain (មិនមែន UserDefaults), ប្រើប្រាស់ SSL Certificate Pinning, និងរៀបចំ Localization (អង់គ្លេស & ខ្មែរ)។

- **Keychain Storage**: រក្សាទុក Token និង Passwords ក្នុង iOS Keychain ដោយសុវត្ថិភាពខ្ពស់។
- **SSL Certificate Pinning**: ការពារការលួចទិន្នន័យ (MITM attacks) តាម Network។
- **Localization (i18n)**: គាំទ្រពីរភាសា (អង់គ្លេស និង ខ្មែរ) ដោយប្រើប្រាស់ \`String(localized: "key")\`។

---

## មេរៀនអនុវត្ត (Tutorial Walkthrough)

### ១. តារាងប្រៀបធៀប Keychain vs UserDefaults

| លក្ខណៈ | UserDefaults | iOS Keychain |
| :--- | :--- | :--- |
| **សុវត្ថិភាព** | អត្ថបទធម្មតា (Unencrypted) | កូដសម្ងាត់ Hardware-encrypted |
| **ការប្រើប្រាស់** | UI Preferences (Theme, Filters) | Token, Password, Private Keys |

---

## ឧទាហរណ៍កូដ (Code Example)

\`\`\`swift
import Foundation

struct ProductionSecurityAudit {
    static func auditSecurityStatus() {
        print("[Security Audit]: Keychain Encryption Active -> PASS")
        print("[Security Audit]: SSL Certificate Pinning -> PASS")
        print("[Security Audit]: Crashlytics Telemetry Initialized -> PASS")
        print("[Security Audit]: Khmer & English Localization Bundle -> PASS")
    }
}

ProductionSecurityAudit.auditSecurityStatus()
\`\`\`

---

## លទ្ធផលរំពឹងទុក (Expected Output)

\`\`\`text
[Security Audit]: Keychain Encryption Active -> PASS
[Security Audit]: SSL Certificate Pinning -> PASS
[Security Audit]: Crashlytics Telemetry Initialized -> PASS
[Security Audit]: Khmer & English Localization Bundle -> PASS
\`\`\`

---

## សាកល្បងដោយខ្លួនឯង (Try It Yourself)

ពន្យល់ពីមូលហេតុដែលការរក្សាទុក Auth Tokens ក្នុង \`UserDefaults\` អាចប្រឈមនឹងហានិភ័យសុវត្ថិភាព។
`
    }
  }
];
