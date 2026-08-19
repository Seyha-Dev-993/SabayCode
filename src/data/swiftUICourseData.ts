import { MobileCourse } from './mobileCoursesHubData';

export const SWIFTUI_COURSE_DATA: MobileCourse = {
  id: 'swiftui',
  title: {
    en: 'SwiftUI — Modern Native iOS UI',
    km: 'SwiftUI — សាង UI iOS ទំនើប'
  },
  iconName: 'swiftui',
  type: 'framework',
  parentLanguageId: 'swift',
  categoryId: 'frameworks',
  difficulty: 'Intermediate',
  shortDescription: {
    en: "Apple's modern toolkit for building real native iOS apps with Swift.",
    km: 'ឧបករណ៍ទំនើបរបស់ Apple សម្រាប់សាងកម្មវិធី iOS native ពិតប្រាកដដោយប្រើ Swift។'
  },
  summary: {
    en: "SwiftUI is Apple's modern toolkit for building native UI across iPhone, iPad, Mac, Apple Watch, and Apple TV entirely in Swift — no separate storyboard or interface builder files required. Introduced in 2019, it replaced the older UIKit as Apple's recommended approach for new apps, using a declarative style similar in spirit to Flutter and React: you describe what the UI should look like for a given state, and SwiftUI automatically updates the screen when that state changes. This course takes everything you learned in the Swift course and applies it to real UI development: views, layouts, navigation, state management, working with APIs, and building a complete, real, installable native iOS app from scratch. By the end, you'll understand exactly how modern iOS apps are actually built today.",
    km: 'SwiftUI ជាឧបករណ៍ទំនើបរបស់ Apple សម្រាប់សាង UI native លើ iPhone, iPad, Mac, Apple Watch និង Apple TV ទាំងស្រុងជា Swift — គ្មានតម្រូវការឯកសារ storyboard ឬ interface builder ដាច់ដោយឡែកទៀតទេ។ ណែនាំនៅឆ្នាំ 2019, វាជំនួស UIKit ចាស់ជាវិធីសាស្ត្រដែល Apple ណែនាំសម្រាប់កម្មវិធីថ្មីៗ ដោយប្រើរចនាប័ទ្ម declarative ស្រដៀងនឹង Flutter និង React ក្នុងស្មារតី៖ អ្នកពិពណ៌នាថា UI គួរតែមើលទៅដូចអ្វីសម្រាប់ state ជាក់លាក់ ហើយ SwiftUI ធ្វើបច្ចុប្បន្នភាពអេក្រង់ដោយស្វ័យប្រវត្តិនៅពេល state នោះផ្លាស់ប្តូរ។ វគ្គសិក្សានេះយកអ្វីៗទាំងអស់ដែលអ្នករៀនក្នុងវគ្គ Swift ហើយអនុវត្តទៅលើការសាង UI ពិតប្រាកដ៖ views, layouts, navigation, state management, ការធ្វើការជាមួយ API និងការសាងកម្មវិធី iOS native ពេញលេញអាចដំឡើងបានពិតប្រាកដពីដើមដល់ចប់។ ចប់វគ្គនេះ អ្នកនឹងយល់ច្បាស់ពីរបៀបដែលកម្មវិធី iOS ទំនើបពិតប្រាកដត្រូវបានសាងសព្វថ្ងៃ។'
  },
  estimatedHours: 24,
  lessonCount: 34,
  usedFor: 'Native iOS, iPadOS, macOS, watchOS, visionOS apps',
  realWorldApps: ['Apple Fitness+', 'Weather App', 'Flighty', 'Threads iOS', 'Slack iOS', 'Airbnb iOS'],
  prerequisites: {
    en: 'Completion of the Swift course (or equivalent Swift knowledge) is strongly recommended — this course assumes comfort with Swift syntax, structs, optionals, and async/await, and focuses entirely on applying that to UI. Note: Xcode requires a Mac.',
    km: 'ការបញ្ចប់វគ្គ Swift (ឬមានចំណេះដឹង Swift ប្រហាក់ប្រហែល) ត្រូវបានណែនាំយ៉ាងខ្លាំង — វគ្គសិក្សានេះសន្មតថាអ្នកស្ទាត់ជំនាញជាមួយ Syntax របស់ Swift, Structs, Optionals និង Async/Await ហើយផ្តោតទាំងស្រុងលើការអនុវត្តទៅលើ UI។ សម្គាល់៖ Xcode ត្រូវការ Mac។'
  },
  whatYouWillLearn: {
    en: [
      'Set up Xcode for SwiftUI development (already installed from the Swift course, Mac required)',
      'Understand SwiftUI Views — every screen element is a small, composable View struct',
      'Build layouts using VStack, HStack, ZStack, and modifiers',
      'Navigate between screens using NavigationStack',
      'Manage state using @State, @Binding, and @Observable/@StateObject',
      'Style apps with SwiftUI\'s built-in styling system and light/dark mode',
      'Fetch and display real data from a REST API using URLSession and async/await',
      'Build and validate forms (login screens, text fields, buttons)',
      'Use iOS permissions and device feature concepts (camera, location)',
      'Debug SwiftUI apps using Xcode Previews without running the full simulator',
      'Build a complete, real, portfolio-ready iOS app from scratch',
      'Understand the basics of running your app on a real device and archiving a build'
    ],
    km: [
      'រៀបចំ Xcode សម្រាប់ការអភិវឌ្ឍន៍ SwiftUI (បានដំឡើងពីវគ្គ Swift, ត្រូវការ Mac)',
      'យល់ដឹងពី SwiftUI Views — ធាតុអេក្រង់នីមួយៗជា View Struct តូចៗអាចផ្គុំគ្នាបាន',
      'សាង Layouts ដោយប្រើ VStack, HStack, ZStack, និង Modifiers',
      'ធ្វើការផ្លាស់ប្តូរអេក្រង់ Navigation ដោយប្រើ NavigationStack',
      'គ្រប់គ្រង State ដោយប្រើ @State, @Binding, និង @Observable/@StateObject',
      'តុបតែង App ដោយប្រើប្រព័ន្ធ Styling របស់ SwiftUI និងគាំទ្រ Light/Dark mode',
      'ទាញយក និងបង្ហាញទិន្នន័យពី REST API ដោយប្រើ URLSession និង async/await',
      'សាងសង់ និងពិនិត្យភាពត្រឹមត្រូវនៃ Form (Login screens, text fields, buttons)',
      'ប្រើប្រាស់ប្រព័ន្ធ iOS Permissions និង Device Features (Camera, Location)',
      'ធ្វើការ Debug កម្មវិធី SwiftUI តាមរយៈ Xcode Previews ដោយមិនបាច់រត់ Simulator ពេញ',
      'សាងសង់កម្មវិធី iOS ពេញលេញមួយពីដើមដល់ចប់សម្រាប់ធ្វើ Portfolio',
      'យល់ដឹងពីមូលដ្ឋាននៃការរត់ App លើ Device ពិតប្រាកដ និងការធ្វើ Archiving Build'
    ]
  },
  toolsAndSetup: {
    en: '1. Open Xcode (already installed from the Swift course) — it includes everything needed for SwiftUI out of the box\n2. Create a new project using the "App" template with the SwiftUI interface option (the default in current Xcode versions)\n3. Set up an iOS Simulator via Xcode\'s device selector, or connect a physical iPhone/iPad with a free Apple Developer account for on-device testing\n4. Run your first project with the ▶ Run button and confirm the simulator/device launches it',
    km: '១. បើក Xcode (បានដំឡើងរួចរាល់ពីវគ្គ Swift) — វាមានអ្វីៗគ្រប់យ៉ាងដែលត្រូវការសម្រាប់ SwiftUI រួចជាស្រេច\n២. បង្កើតគម្រោងថ្មីដោយប្រើ Template "App" ជាមួយជម្រើស SwiftUI Interface (ជាតម្លៃដើមក្នុង Xcode បច្ចុប្បន្ន)\n៣. រៀបចំ iOS Simulator តាមរយៈ Device Selector របស់ Xcode ឬភ្ជាប់ iPhone/iPad ពិតប្រាកដជាមួយ Apple Developer Account ដោយឥតគិតថ្លៃ\n៤. រត់គម្រោងដំបូងរបស់អ្នកជាមួយប៊ូតុង ▶ Run ហើយបញ្ជាក់ថា Simulator/Device បើកដំណើរការវា'
  },
  cheatSheet: [
    {
      concept: 'View Struct & Modifiers',
      code: 'import SwiftUI\n\nstruct WelcomeCard: View {\n    var body: some View {\n        VStack {\n            Text("Welcome to SwiftUI")\n                .font(.title)\n                .fontWeight(.bold)\n                .foregroundColor(.blue)\n            Image(systemName: "swift")\n                .resizable()\n                .frame(width: 50, height: 50)\n        }\n        .padding()\n        .background(Color(.secondarySystemBackground))\n        .cornerRadius(12)\n    }\n}',
      explanation: {
        en: 'SwiftUI views are immutable structs that return a body view chain styled with declarative modifiers.',
        km: 'SwiftUI Views គឺជា Structs ដែលមិនអាចកែប្រែបាន ហើយត្រឡប់ Body View ដែលតុបតែងដោយ Modifiers។'
      }
    },
    {
      concept: 'Layout Stacks (VStack, HStack, ZStack)',
      code: '// Vertical Stack\nVStack(spacing: 10) {\n    Text("Top")\n    Text("Bottom")\n}\n\n// Horizontal Stack\nHStack {\n    Text("Left")\n    Spacer()\n    Text("Right")\n}\n\n// Depth Stack (Overlaying elements)\nZStack {\n    Color.blue\n    Text("Text over color").foregroundColor(.white)\n}',
      explanation: {
        en: 'Combine vertical (VStack), horizontal (HStack), and layered depth (ZStack) to construct any mobile layout.',
        km: 'បូកបញ្ចូល VStack (បញ្ឈរ), HStack (ផ្ដេក), និង ZStack (ជាន់លើគ្នា) ដើម្បីរៀបចំ UI គ្រប់ទម្រង់។'
      }
    },
    {
      concept: '@State & Counter Interaction',
      code: 'struct CounterView: View {\n    @State private var count = 0\n\n    var body: some View {\n        VStack(spacing: 16) {\n            Text("Count: \\(count)")\n                .font(.headline)\n            HStack {\n                Button("Subtract") { count -= 1 }\n                Button("Add") { count += 1 }\n            }\n        }\n    }\n}',
      explanation: {
        en: '@State manages view-local reactive storage. When @State changes, SwiftUI re-renders the body automatically.',
        km: '@State គ្រប់គ្រងការរក្សាទុក Storage ក្នុងស្រុកនៃ View។ ពេល @State ប្រែប្រួល SwiftUI ធ្វើ Re-render ស្វ័យប្រវត្តិ។'
      }
    },
    {
      concept: 'Async URLSession & Codable',
      code: 'struct Post: Codable, Identifiable {\n    let id: Int\n    let title: String\n}\n\nfunc fetchPosts() async throws -> [Post] {\n    let url = URL(string: "https://jsonplaceholder.typicode.com/posts")!\n    let (data, _) = try await URLSession.shared.data(from: url)\n    return try JSONDecoder().decode([Post].self, from: data)\n}',
      explanation: {
        en: 'Fetch remote REST APIs natively using URLSession and decode JSON into Swift structs with Codable.',
        km: 'ទាញយកទិន្នន័យពី REST API ដោយប្រើប្រាស់ URLSession និងបំលែង JSON ជា Swift Structs ជាមួយ Codable។'
      }
    }
  ],
  quiz: [
    {
      id: 'q-swui-1',
      question: {
        en: 'In SwiftUI, what protocol must every UI component implement to define its screen content?',
        km: 'ក្នុង SwiftUI តើ Protocol មួយណាដែលគ្រប់ UI Component ត្រូវតែអនុវត្តដើម្បីកំណត់មាតិកាអេក្រង់?'
      },
      options: [
        { id: '1', text: { en: 'View', km: 'View' }, isCorrect: true },
        { id: '2', text: { en: 'Widget', km: 'Widget' }, isCorrect: false },
        { id: '3', text: { en: 'Component', km: 'Component' }, isCorrect: false }
      ],
      explanation: {
        en: 'Every UI element in SwiftUI conforms to the `View` protocol, which requires a `body` property returning `some View`.',
        km: 'គ្រប់ធាតុ UI ក្នុង SwiftUI អនុវត្តតាម `View` protocol ដែលទាមទារអថេរ `body` ត្រឡប់ `some View`។'
      }
    },
    {
      id: 'q-swui-2',
      question: {
        en: 'Which property wrapper is used for simple reactive state owned locally by a single SwiftUI View?',
        km: 'តើ Property Wrapper មួយណាត្រូវបានប្រើសម្រាប់ State ប្រតិកម្មក្នុងស្រុកដែលគ្រប់គ្រងដោយ View តែមួយ?'
      },
      options: [
        { id: '1', text: { en: '@State', km: '@State' }, isCorrect: true },
        { id: '2', text: { en: '@Binding', km: '@Binding' }, isCorrect: false },
        { id: '3', text: { en: '@Environment', km: '@Environment' }, isCorrect: false }
      ],
      explanation: {
        en: '`@State` marks a value as mutated and managed by SwiftUI for the local View hierarchy.',
        km: '`@State` កំណត់សម្គាល់តម្លៃដែលកែប្រែ និងគ្រប់គ្រងដោយ SwiftUI សម្រាប់ View ក្នុងស្រុក។'
      }
    },
    {
      id: 'q-swui-3',
      question: {
        en: 'Which layout container layers child views on top of each other along the Z-axis (depth)?',
        km: 'តើ Layout Container មួយណាដែលតម្រៀប Views ជាន់លើគ្នាតាមអ័ក្ស Z (ជម្រៅ)?'
      },
      options: [
        { id: '1', text: { en: 'ZStack', km: 'ZStack' }, isCorrect: true },
        { id: '2', text: { en: 'VStack', km: 'VStack' }, isCorrect: false },
        { id: '3', text: { en: 'HStack', km: 'HStack' }, isCorrect: false }
      ],
      explanation: {
        en: '`ZStack` overlays views on top of each other in order of declaration.',
        km: '`ZStack` តម្រៀប Views ជាន់លើគ្នាតាមលំដាប់នៃការសរសេរ។'
      }
    }
  ],
  capstoneProject: {
    title: {
      en: 'HabitFlow — SwiftUI Habit Tracker App',
      km: 'HabitFlow — កម្មវិធីតាមដានទម្លាប់លើ SwiftUI'
    },
    description: {
      en: 'Upgrade the Swift course\'s CLI Habit Tracker into a full, real, installable iOS app called HabitFlow — with an actual visual interface, persistent storage, streak tracking, and native iOS polish.',
      km: 'លើកកម្ពស់កម្មវិធី Swift CLI Habit Tracker ទៅជាកម្មវិធី iOS Native ពេញលេញឈ្មោះ HabitFlow — មានប្រព័ន្ធ UI ស្រស់ស្អាត, រក្សាទុកទិន្នន័យ, តាមដាន Streak និងទម្រង់ Native iOS។'
    },
    featureChecklist: {
      en: [
        'Habit list screen showing all habits with their current streak',
        'Add-habit screen (separate screen, navigated to via a "+" toolbar button)',
        'Mark a habit done today (increments streak) with a tap',
        'Remove a habit via swipe-to-delete (a native iOS List gesture)',
        'Habits persist between app restarts using @AppStorage/UserDefaults',
        'Light/dark mode support (automatic via SwiftUI)'
      ],
      km: [
        'អេក្រង់បញ្ជីបង្ហាញ Habit ទាំងអស់ជាមួយ Streak បច្ចុប្បន្ន',
        'អេក្រង់បន្ថែម Habit ថ្មី ដែលបើកតាមរយៈប៊ូតុង "+" លើ Toolbar',
        'ចុចដកសញ្ញាសម្រេច Habit ថ្ងៃនេះដើម្បីកើនឡើង Streak',
        'លុប Habit តាមរយៈការ អូសពីស្តាំទៅឆ្វេង (Native iOS Swipe-to-delete gesture)',
        'រក្សាទុក Habit មិនឱ្យបាត់បង់ពេលបិទ App ដោយប្រើ UserDefaults',
        'គាំទ្រ Light/Dark mode ដោយស្វ័យប្រវត្តិ'
      ]
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body style="background:#0f172a; color:#f8fafc; font-family:-apple-system, BlinkMacSystemFont, sans-serif; padding:20px; line-height:1.6;">
  <div style="max-width:380px; margin:0 auto; background:#1e293b; border-radius:24px; padding:20px; border:2px solid #334155; box-shadow:0 10px 25px rgba(0,0,0,0.5);">
    <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #334155; padding-bottom:12px; margin-bottom:16px;">
      <h3 style="color:#38bdf8; margin:0; font-size:20px;">🔥 HabitFlow SwiftUI</h3>
      <span style="background:#0284c7; color:#ffffff; font-weight:bold; font-size:11px; padding:3px 8px; border-radius:12px;">iOS Native</span>
    </div>
    <div style="background:#0f172a; padding:12px; border-radius:12px; margin-bottom:10px; display:flex; justify-content:space-between; align-items:center;">
      <div>
        <p style="margin:0; font-weight:bold; color:#f8fafc;">Morning Meditation</p>
        <span style="font-size:12px; color:#38bdf8;">🔥 5 Day Streak</span>
      </div>
      <span style="color:#22c55e; font-size:18px;">✓</span>
    </div>
    <div style="background:#0f172a; padding:12px; border-radius:12px; margin-bottom:16px; display:flex; justify-content:space-between; align-items:center;">
      <div>
        <p style="margin:0; font-weight:bold; color:#f8fafc;">Read 20 Pages of Swift Book</p>
        <span style="font-size:12px; color:#94a3b8;">🔥 12 Day Streak</span>
      </div>
      <span style="color:#64748b; font-size:18px;">○</span>
    </div>
    <div style="text-align:center; margin-top:20px;">
      <button style="background:#0284c7; color:#ffffff; font-weight:bold; border:none; padding:10px 20px; border-radius:20px; cursor:pointer; width:100%;">+ Add New Habit</button>
    </div>
  </div>
</body>
</html>`
    },
    finalCode: `import SwiftUI

struct Habit: Identifiable, Codable {
    var id = UUID()
    var title: String
    var streak: Int = 0
    var isCompletedToday: Bool = false
}

class HabitStore: ObservableObject {
    @Published var habits: [Habit] = [] {
        didSet {
            save()
        }
    }
    
    private let saveKey = "HabitFlow_SavedHabits"
    
    init() {
        if let data = UserDefaults.standard.data(forKey: saveKey),
           let decoded = try? JSONDecoder().decode([Habit].self, from: data) {
            self.habits = decoded
        } else {
            self.habits = [
                Habit(title: "Morning Meditation 🧘", streak: 5, isCompletedToday: true),
                Habit(title: "Read 20 Pages of Swift 📖", streak: 12, isCompletedToday: false)
            ]
        }
    }
    
    private func save() {
        if let encoded = try? JSONEncoder().encode(habits) {
            UserDefaults.standard.set(encoded, forKey: saveKey)
        }
    }
    
    func addHabit(title: String) {
        let newHabit = Habit(title: title, streak: 0, isCompletedToday: false)
        habits.append(newHabit)
    }
    
    func toggleHabit(_ habit: Habit) {
        if let index = habits.firstIndex(where: { $0.id == habit.id }) {
            habits[index].isCompletedToday.toggle()
            if habits[index].isCompletedToday {
                habits[index].streak += 1
            } else {
                habits[index].streak = max(0, habits[index].streak - 1)
            }
        }
    }
    
    func deleteHabit(at offsets: IndexSet) {
        habits.remove(atOffsets: offsets)
    }
}

struct HabitFlowApp: View {
    @StateObject private var store = HabitStore()
    @State private var showingAddSheet = false
    @State private var newHabitTitle = ""
    
    var body: some View {
        NavigationStack {
            List {
                ForEach(store.habits) { habit in
                    HStack {
                        VStack(alignment: .leading, spacing: 4) {
                            Text(habit.title)
                                .font(.headline)
                            Text("🔥 \\(habit.streak) Day Streak")
                                .font(.subheadline)
                                .foregroundColor(.secondary)
                        }
                        
                        Spacer()
                        
                        Button {
                            withAnimation {
                                store.toggleHabit(habit)
                            }
                        } label: {
                            Image(systemName: habit.isCompletedToday ? "checkmark.circle.fill" : "circle")
                                .font(.title2)
                                .foregroundColor(habit.isCompletedToday ? .green : .gray)
                        }
                        .buttonStyle(.plain)
                    }
                    .padding(.vertical, 4)
                }
                .onDelete(perform: store.deleteHabit)
            }
            .navigationTitle("HabitFlow 🔥")
            .toolbar {
                ToolbarItem(placement: .primaryAction) {
                    Button {
                        showingAddSheet = true
                    } label: {
                        Image(systemName: "plus.circle.fill")
                            .font(.title2)
                    }
                }
            }
            .sheet(isPresented: $showingAddSheet) {
                NavigationStack {
                    Form {
                        Section(header: Text("New Habit")) {
                            TextField("Habit title...", text: $newHabitTitle)
                        }
                    }
                    .navigationTitle("Add Habit")
                    .navigationBarTitleDisplayMode(.inline)
                    .toolbar {
                        ToolbarItem(placement: .cancellationAction) {
                            Button("Cancel") {
                                showingAddSheet = false
                                newHabitTitle = ""
                            }
                        }
                        ToolbarItem(placement: .confirmationAction) {
                            Button("Add") {
                                if !newHabitTitle.trimmingCharacters(in: .whitespaces).isEmpty {
                                    store.addHabit(title: newHabitTitle.trimmingCharacters(in: .whitespaces))
                                    newHabitTitle = ""
                                    showingAddSheet = false
                                }
                            }
                            .disabled(newHabitTitle.trimmingCharacters(in: .whitespaces).isEmpty)
                        }
                    }
                }
                .presentationDetents([.medium])
            }
        }
    }
}

#Preview {
    HabitFlowApp()
}`
  },
  lessons: [
    // MODULE 1
    {
      id: 'swui-1-1',
      slug: 'what-is-swiftui-and-how-it-fits-with-swift',
      moduleNumber: 1,
      lessonNumberInModule: 1,
      title: {
        en: '1.1 What is SwiftUI and how it fits with Swift',
        km: '១.១ អ្វីទៅជា SwiftUI និងរបៀបដែលវាដើរជាមួយ Swift'
      },
      durationMinutes: 15,
      difficulty: 'Beginner',
      explanation: {
        en: 'SwiftUI is Apple\'s modern UI framework that lets you build native user interfaces across all Apple platforms using plain Swift structs called Views in a declarative programming style.',
        km: 'SwiftUI ជា framework UI ទំនើបរបស់ Apple ដែលអនុញ្ញាតឱ្យអ្នកសាង UI native លើ Apple platforms ទាំងអស់ដោយប្រើ Swift struct សុទ្ធៗហៅថា Views ក្នុងរចនាប័ទ្ម declarative។'
      },
      tutorial: {
        en: 'import SwiftUI\n\nstruct ContentView: View {\n    var body: some View {\n        Text("Hello, SwiftUI!")\n            .font(.title)\n    }\n}\n\n#Preview {\n    ContentView()\n}',
        km: 'import SwiftUI\n\nstruct ContentView: View {\n    var body: some View {\n        Text("សួស្តី SwiftUI!")\n            .font(.title)\n    }\n}\n\n#Preview {\n    ContentView()\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#38bdf8; padding:20px; font-family:monospace;"><h3>1.1 What is SwiftUI</h3><pre>struct ContentView: View -> body: some View -> Text("Hello SwiftUI")</pre></body></html>`
      }
    },
    {
      id: 'swui-1-2',
      slug: 'setting-up-a-swiftui-project-in-xcode',
      moduleNumber: 1,
      lessonNumberInModule: 2,
      title: {
        en: '1.2 Setting up a SwiftUI project in Xcode',
        km: '១.២ ការរៀបចំគម្រោង SwiftUI ក្នុង Xcode'
      },
      durationMinutes: 15,
      difficulty: 'Beginner',
      explanation: {
        en: 'Learn how to launch Xcode, create a new iOS App project using the SwiftUI interface, and configure an iOS Simulator for live previews.',
        km: 'រៀនពីរបៀបបើក Xcode, បង្កើតគម្រោង iOS App ថ្មីដោយប្រើ SwiftUI Interface, និងកំណត់រចនាសម្ព័ន្ធ iOS Simulator។'
      },
      tutorial: {
        en: '// Xcode Workflow:\n1. File -> New -> Project -> iOS App\n2. Interface: SwiftUI, Language: Swift\n3. Select iPhone 15 Pro simulator\n4. Press Cmd+R to Run',
        km: '// លំហូរការងារ Xcode:\n១. File -> New -> Project -> iOS App\n២. Interface: SwiftUI, Language: Swift\n៣. ជ្រើសរើស iPhone 15 Pro simulator\n៤. ចុច Cmd+R ដើម្បី Run'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#22c55e; padding:20px; font-family:monospace;"><h3>1.2 Xcode Project Setup</h3><p>✓ Xcode Installed<br>✓ SwiftUI Template Selected<br>📱 Simulator Ready</p></body></html>`
      }
    },
    {
      id: 'swui-1-3',
      slug: 'your-first-view-the-default-swiftui-starter-explained',
      moduleNumber: 1,
      lessonNumberInModule: 3,
      title: {
        en: '1.3 Your first View — the default SwiftUI starter, explained line by line',
        km: '១.៣ អេក្រង់ View ដំបូងរបស់អ្នក — កូដដើមរបស់ SwiftUI ពន្យល់មួយបន្ទាត់ម្តងៗ'
      },
      durationMinutes: 15,
      difficulty: 'Beginner',
      explanation: {
        en: 'Examine Xcode\'s default boilerplate: `@main` App struct, `WindowGroup`, `ContentView` hierarchy, and `#Preview` canvas macros.',
        km: 'វិភាគកូដដើមរបស់ Xcode៖ `@main` App struct, `WindowGroup`, រចនាសម្ព័ន្ធ `ContentView`, និង `#Preview` canvas macros។'
      },
      tutorial: {
        en: 'import SwiftUI\n\n@main\nstruct MyApp: App {\n    var body: some Scene {\n        WindowGroup {\n            ContentView()\n        }\n    }\n}',
        km: 'import SwiftUI\n\n@main\nstruct MyApp: App {\n    var body: some Scene {\n        WindowGroup {\n            ContentView()\n        }\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#f97316; padding:20px; font-family:monospace;"><h3>1.3 Default SwiftUI Entry</h3><p>App -> WindowGroup -> ContentView</p></body></html>`
      }
    },

    // MODULE 2
    {
      id: 'swui-2-1',
      slug: 'what-is-a-view-and-why-every-swiftui-screen-is-a-struct',
      moduleNumber: 2,
      lessonNumberInModule: 1,
      title: {
        en: '2.1 What is a View, and why every SwiftUI screen is a struct',
        km: '២.១ អ្វីទៅជា View និងហេតុអ្វីបានជាគ្រប់អេក្រង់ SwiftUI ជា struct'
      },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'In SwiftUI, views are lightweight, value-type structs rather than reference-type classes, making view creation fast and memory efficient.',
        km: 'ក្នុង SwiftUI Views គឺជា Structs ប្រភេទ Value-type ដែលស្រាល និងមានប្រសិទ្ធភាព Memory ខ្ពស់ជំនួសឱ្យ Classes។'
      },
      tutorial: {
        en: 'struct HeaderView: View {\n    let title: String\n    var body: some View {\n        Text(title)\n            .font(.headline)\n    }\n}',
        km: 'struct HeaderView: View {\n    let title: String\n    var body: some View {\n        Text(title)\n            .font(.headline)\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#38bdf8; padding:20px; font-family:monospace;"><h3>2.1 View Structs</h3><p>Value Types -> Zero Heap Overhead</p></body></html>`
      }
    },
    {
      id: 'swui-2-2',
      slug: 'core-views-text-image-button-sf-symbols',
      moduleNumber: 2,
      lessonNumberInModule: 2,
      title: {
        en: '2.2 Core views: Text, Image, Button, SF Symbols',
        km: '២.២ Core views: Text, Image, Button, SF Symbols'
      },
      durationMinutes: 22,
      difficulty: 'Beginner',
      explanation: {
        en: 'Master SwiftUI\'s primitive components: Text, Image assets, interactive Buttons, and Apple\'s vector icon set SF Symbols.',
        km: 'ស្ទាត់ជំនាញជាមួយ Primitives របស់ SwiftUI៖ Text, Image, Interactive Buttons, និង vector icons SF Symbols របស់ Apple។'
      },
      tutorial: {
        en: 'VStack {\n    Image(systemName: "star.fill")\n        .foregroundColor(.yellow)\n    Text("Bookmark")\n    Button("Save") {\n        print("Saved!")\n    }\n}',
        km: 'VStack {\n    Image(systemName: "star.fill")\n        .foregroundColor(.yellow)\n    Text("រក្សាទុក")\n    Button("Save") {\n        print("Saved!")\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#eab308; padding:20px; font-family:monospace;"><h3>2.2 Core Components</h3><p>Text | Image | Button | Image(systemName: "star.fill")</p></body></html>`
      }
    },
    {
      id: 'swui-2-3',
      slug: 'layout-views-vstack-hstack-zstack',
      moduleNumber: 2,
      lessonNumberInModule: 3,
      title: {
        en: '2.3 Layout views: VStack, HStack, ZStack',
        km: '២.៣ Layout views: VStack, HStack, ZStack'
      },
      durationMinutes: 22,
      difficulty: 'Beginner',
      explanation: {
        en: 'Arrange views vertically (VStack), horizontally (HStack), or layered in depth (ZStack) with spacing and alignment controls.',
        km: 'រៀបចំ views ជាលក្ខណៈបញ្ឈរ (VStack), ផ្ដេក (HStack), ឬជាន់លើគ្នា (ZStack) ជាមួយអថេរ Spacing និង Alignment។'
      },
      tutorial: {
        en: 'HStack(alignment: .center, spacing: 12) {\n    Image(systemName: "heart.fill")\n        .foregroundColor(.red)\n    Text("124 Likes")\n}',
        km: 'HStack(alignment: .center, spacing: 12) {\n    Image(systemName: "heart.fill")\n        .foregroundColor(.red)\n    Text("124 ចូលចិត្ត")\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#ec4899; padding:20px; font-family:monospace;"><h3>2.3 Stack Layouts</h3><p>VStack (Vertical) | HStack (Horizontal) | ZStack (Depth)</p></body></html>`
      }
    },
    {
      id: 'swui-2-4',
      slug: 'modifiers-swiftuis-chained-styling-system',
      moduleNumber: 2,
      lessonNumberInModule: 4,
      title: {
        en: '2.4 Modifiers — SwiftUI\'s chained styling/layout system',
        km: '២.៤ Modifiers — ប្រព័ន្ធ Chained Styling របស់ SwiftUI'
      },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'Modifiers return new modified View instances. Order matters: calling `.padding()` before `.background()` yields a vastly different result than vice versa.',
        km: 'Modifiers ត្រឡប់នូវ View Instance ថ្មីដែលបានកែប្រែ។ លំដាប់នៃការហៅមានសារៈសំខាន់ខ្លាំង៖ ការហៅ `.padding()` មុន `.background()` ផ្តល់ផលខុសគ្នាស្រឡះ។'
      },
      tutorial: {
        en: 'Text("Styled Label")\n    .font(.title2)\n    .padding()\n    .background(Color.blue)\n    .foregroundColor(.white)\n    .cornerRadius(8)',
        km: 'Text("អក្សរមាន Style")\n    .font(.title2)\n    .padding()\n    .background(Color.blue)\n    .foregroundColor(.white)\n    .cornerRadius(8)'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#38bdf8; padding:20px; font-family:monospace;"><h3>2.4 Chained Modifiers</h3><p>.font() -> .padding() -> .background() -> .cornerRadius()</p></body></html>`
      }
    },
    {
      id: 'swui-2-5',
      slug: 'practice-rebuild-a-simple-profile-card-ui',
      moduleNumber: 2,
      lessonNumberInModule: 5,
      title: {
        en: '2.5 Practice: rebuild a simple profile card UI',
        km: '២.៥ អនុវត្ត: សាងសង់ Profile Card UI ក្នុង SwiftUI'
      },
      durationMinutes: 26,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Combine `Image`, `Text`, `VStack`, `HStack`, and background modifiers to build an iOS native profile card component.',
        km: 'បូកបញ្ចូល `Image`, `Text`, `VStack`, `HStack`, និង Background Modifiers ដើម្បីបង្កើត Profile Card UI លើ iOS។'
      },
      tutorial: {
        en: 'VStack(spacing: 8) {\n    Image(systemName: "person.circle.fill")\n        .resizable()\n        .frame(width: 60, height: 60)\n        .foregroundColor(.blue)\n    Text("Seyha Nan")\n        .font(.headline)\n    Text("iOS Developer")\n        .font(.subheadline)\n        .foregroundColor(.secondary)\n}\n.padding()\n.background(Color(.secondarySystemBackground))\n.cornerRadius(16)',
        km: 'VStack(spacing: 8) {\n    Image(systemName: "person.circle.fill")\n        .resizable()\n        .frame(width: 60, height: 60)\n        .foregroundColor(.blue)\n    Text("Seyha Nan")\n        .font(.headline)\n    Text("iOS Developer")\n        .font(.subheadline)\n        .foregroundColor(.secondary)\n}\n.padding()\n.background(Color(.secondarySystemBackground))\n.cornerRadius(16)'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#4ade80; padding:20px; font-family:monospace;"><h3>2.5 Profile Card</h3><p>👤 Seyha Nan - iOS Developer</p></body></html>`
      }
    },

    // MODULE 3
    {
      id: 'swui-3-1',
      slug: 'setting-up-navigationstack',
      moduleNumber: 3,
      lessonNumberInModule: 1,
      title: {
        en: '3.1 Setting up NavigationStack',
        km: '៣.១ ការដំឡើង និងរៀបចំ NavigationStack'
      },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: '`NavigationStack` is Apple\'s modern stack-based navigation container introduced in iOS 16, replacing the older `NavigationView`.',
        km: '`NavigationStack` គឺជា Container Navigation ទំនើបរបស់ Apple ដែលណែនាំក្នុង iOS 16 ជំនួស `NavigationView` ចាស់។'
      },
      tutorial: {
        en: 'NavigationStack {\n    VStack {\n        Text("Home Screen")\n    }\n    .navigationTitle("Dashboard")\n}',
        km: 'NavigationStack {\n    VStack {\n        Text("អេក្រង់ដើម")\n    }\n    .navigationTitle("Dashboard")\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#38bdf8; padding:20px; font-family:monospace;"><h3>3.1 NavigationStack</h3><p>NavigationStack -> .navigationTitle("Dashboard")</p></body></html>`
      }
    },
    {
      id: 'swui-3-2',
      slug: 'navigating-between-screens',
      moduleNumber: 3,
      lessonNumberInModule: 2,
      title: {
        en: '3.2 Navigating between screens',
        km: '៣.២ ការផ្លាស់ប្តូររវាងអេក្រង់'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Use `NavigationLink` to trigger transitions to destination views when tapped inside a `NavigationStack`.',
        km: 'ប្រើ `NavigationLink` ដើម្បីបើកបង្ហាញអេក្រង់គោលដៅនៅពេលអ្នកប្រើប្រាស់ចុចលើវា។'
      },
      tutorial: {
        en: 'NavigationStack {\n    NavigationLink("Go to Details") {\n        DetailView()\n    }\n}',
        km: 'NavigationStack {\n    NavigationLink("ទៅកាន់អេក្រង់លម្អិត") {\n        DetailView()\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#eab308; padding:20px; font-family:monospace;"><h3>3.2 NavigationLink</h3><p>NavigationLink("Details") -> DetailView()</p></body></html>`
      }
    },
    {
      id: 'swui-3-3',
      slug: 'passing-data-between-screens',
      moduleNumber: 3,
      lessonNumberInModule: 3,
      title: {
        en: '3.3 Passing data between screens',
        km: '៣.៣ ការបញ្ជូនទិន្នន័យរវាងអេក្រង់'
      },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Pass model parameters directly into destination View initializers through NavigationLink closures or type-safe navigation value paths.',
        km: 'បញ្ជូនទិន្នន័យដោយផ្ទាល់ទៅក្នុង Initializers នៃ View គោលដៅតាមរយៈ NavigationLink។'
      },
      tutorial: {
        en: 'struct Course: Identifiable {\n    let id = UUID()\n    let title: String\n}\n\nNavigationLink(course.title) {\n    CourseDetailView(course: course)\n}',
        km: 'struct Course: Identifiable {\n    let id = UUID()\n    let title: String\n}\n\nNavigationLink(course.title) {\n    CourseDetailView(course: course)\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#4ade80; padding:20px; font-family:monospace;"><h3>3.3 Passing Data</h3><p>CourseDetailView(course: selectedCourse)</p></body></html>`
      }
    },
    {
      id: 'swui-3-4',
      slug: 'practice-build-a-two-screen-app-list-to-detail',
      moduleNumber: 3,
      lessonNumberInModule: 4,
      title: {
        en: '3.4 Practice: build a two-screen app (list → detail)',
        km: '៣.៤ អនុវត្ត: សាងសង់កម្មវិធីមាន ២ អេក្រង់ (List → Detail)'
      },
      durationMinutes: 28,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Combine `List` and `NavigationLink` inside `NavigationStack` to create a standard iOS master-detail screen hierarchy.',
        km: 'បូកបញ្ចូល `List` និង `NavigationLink` ក្នុង `NavigationStack` ដើម្បីបង្កើតអេក្រង់ iOS Master-Detail។'
      },
      tutorial: {
        en: 'NavigationStack {\n    List(items) { item in\n        NavigationLink(item.name) {\n            ItemDetailView(item: item)\n        }\n    }\n    .navigationTitle("Catalog")\n}',
        km: 'NavigationStack {\n    List(items) { item in\n        NavigationLink(item.name) {\n            ItemDetailView(item: item)\n        }\n    }\n    .navigationTitle("បញ្ជីទំនិញ")\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#38bdf8; padding:20px; font-family:monospace;"><h3>3.4 Master Detail</h3><p>List -> NavigationLink -> Detail Screen</p></body></html>`
      }
    },

    // MODULE 4
    {
      id: 'swui-4-1',
      slug: 'state-swiftuis-core-state-tool-for-a-single-view',
      moduleNumber: 4,
      lessonNumberInModule: 1,
      title: {
        en: '4.1 @State — SwiftUI\'s core state tool for a single view',
        km: '៤.១ @State — ឧបករណ៍ State ស្នូលរបស់ SwiftUI សម្រាប់ View តែមួយ'
      },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'Use `@State` to declare reactive storage owned by a single view. When `@State` mutates, SwiftUI automatically updates the view.',
        km: 'ប្រើ `@State` ដើម្បីប្រកាស Storage ប្រតិកម្មដែលគ្រប់គ្រងដោយ View តែមួយ។ ពេល `@State` កែប្រែ SwiftUI អាប់ដេត View ស្វ័យប្រវត្តិ។'
      },
      tutorial: {
        en: 'struct CounterView: View {\n    @State private var count = 0\n    var body: some View {\n        VStack {\n            Text("Count: \\(count)")\n            Button("Add 1") { count += 1 }\n        }\n    }\n}',
        km: 'struct CounterView: View {\n    @State private var count = 0\n    var body: some View {\n        VStack {\n            Text("ចំនួន: \\(count)")\n            Button("បន្ថែម 1") { count += 1 }\n        }\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#38bdf8; padding:20px; font-family:monospace;"><h3>4.1 @State Property Wrapper</h3><p>@State private var count = 0</p></body></html>`
      }
    },
    {
      id: 'swui-4-2',
      slug: 'binding-sharing-state-between-a-parent-and-child-view',
      moduleNumber: 4,
      lessonNumberInModule: 2,
      title: {
        en: '4.2 @Binding — sharing state between a parent and child view',
        km: '៤.២ @Binding — ការចែករំលែក State រវាង Parent និង Child View'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Use `@Binding` in a child view to create a two-way read/write reference to state owned by its parent view.',
        km: 'ប្រើ `@Binding` ក្នុង Child View ដើម្បីបង្កើត Reference អាន/សរសេរទៅកាន់ State របស់ Parent View។'
      },
      tutorial: {
        en: 'struct ToggleChild: View {\n    @Binding var isOn: Bool\n    var body: some View {\n        Toggle("Switch", isOn: $isOn)\n    }\n}',
        km: 'struct ToggleChild: View {\n    @Binding var isOn: Bool\n    var body: some View {\n        Toggle("កុងតាក់", isOn: $isOn)\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#eab308; padding:20px; font-family:monospace;"><h3>4.2 @Binding Binding</h3><p>Parent @State <-> Child @Binding ($isOn)</p></body></html>`
      }
    },
    {
      id: 'swui-4-3',
      slug: 'observable-stateobject-for-screen-level-state',
      moduleNumber: 4,
      lessonNumberInModule: 3,
      title: {
        en: '4.3 @Observable/@StateObject for screen-level state shared across views',
        km: '៤.៣ @Observable/@StateObject សម្រាប់ State ថ្នាក់អេក្រង់'
      },
      durationMinutes: 24,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Manage complex observable data objects using Swift\'s `@Observable` macro (iOS 17+) or `@StateObject` / `@Published` class models.',
        km: 'គ្រប់គ្រង Data Objects ស្មុគស្មាញដោយប្រើប្រាស់ `@Observable` macro (iOS 17+) ឬ `@StateObject` / `@Published` class models។'
      },
      tutorial: {
        en: 'class UserData: ObservableObject {\n    @Published var username = "Alex"\n}\n\nstruct ProfileView: View {\n    @StateObject var data = UserData()\n    var body: some View {\n        Text(data.username)\n    }\n}',
        km: 'class UserData: ObservableObject {\n    @Published var username = "Alex"\n}\n\nstruct ProfileView: View {\n    @StateObject var data = UserData()\n    var body: some View {\n        Text(data.username)\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#4ade80; padding:20px; font-family:monospace;"><h3>4.3 StateObject Model</h3><p>ObservableObject -> @Published -> @StateObject</p></body></html>`
      }
    },
    {
      id: 'swui-4-4',
      slug: 'sharing-state-across-screens',
      moduleNumber: 4,
      lessonNumberInModule: 4,
      title: {
        en: '4.4 Sharing state across screens',
        km: '៤.៤ ការចែករំលែក State ឆ្លងកាត់អេក្រង់ច្រើន'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Inject shared state into the view environment using `.environmentObject()` or `@Environment` to make data accessible anywhere down the view tree.',
        km: 'បញ្ជ្រាប Shared State ទៅក្នុង Environment តាមរយៈ `.environmentObject()` ដើម្បីអានទិន្នន័យបានគ្រប់ទីកន្លែង។'
      },
      tutorial: {
        en: '// In Root:\nContentView()\n    .environmentObject(userSettings)\n\n// In Child Screen:\n@EnvironmentObject var settings: UserSettings',
        km: '// In Root:\nContentView()\n    .environmentObject(userSettings)\n\n// In Child Screen:\n@EnvironmentObject var settings: UserSettings'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#38bdf8; padding:20px; font-family:monospace;"><h3>4.4 EnvironmentObject</h3><p>.environmentObject(store) -> @EnvironmentObject</p></body></html>`
      }
    },
    {
      id: 'swui-4-5',
      slug: 'practice-build-a-counter-with-shared-state-across-two-screens',
      moduleNumber: 4,
      lessonNumberInModule: 5,
      title: {
        en: '4.5 Practice: build a counter with shared state across two screens',
        km: '៤.៥ អនុវត្ត: សាងសង់ Counter ជាមួយ Shared State ឆ្លងអេក្រង់ ២'
      },
      durationMinutes: 28,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Build a practical mini app where updating a counter on a detail screen dynamically reflects in real-time on the parent dashboard screen.',
        km: 'សាងសង់ Mini App ដែលការកែប្រែ Counter លើអេក្រង់ Detail បង្ហាញលទ្ធផលភ្លាមៗលើអេក្រង់ Dashboard ដើម។'
      },
      tutorial: {
        en: 'struct ParentView: View {\n    @StateObject var store = CounterStore()\n    var body: some View {\n        NavigationStack {\n            VStack {\n                Text("Global Count: \\(store.count)")\n                NavigationLink("Edit Count") {\n                    EditScreen(store: store)\n                }\n            }\n        }\n    }\n}',
        km: 'struct ParentView: View {\n    @StateObject var store = CounterStore()\n    var body: some View {\n        NavigationStack {\n            VStack {\n                Text("ចំនួនសរុប: \\(store.count)")\n                NavigationLink("កែប្រែចំនួន") {\n                    EditScreen(store: store)\n                }\n            }\n        }\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#f97316; padding:20px; font-family:monospace;"><h3>4.5 Shared Counter</h3><p>Global Store -> Realtime Sync Across Screens</p></body></html>`
      }
    },

    // MODULE 5
    {
      id: 'swui-5-1',
      slug: 'builtin-styling-colors-fonts-and-system-materials',
      moduleNumber: 5,
      lessonNumberInModule: 1,
      title: {
        en: '5.1 Built-in styling: colors, fonts, and system materials',
        km: '៥.១ Built-in styling: ពណ៍, ហ្វុង, និង System Materials'
      },
      durationMinutes: 18,
      difficulty: 'Beginner',
      explanation: {
        en: 'Leverage iOS native semantic colors (`Color.accentColor`, `.secondary`), dynamic typography (`.title`, `.body`), and translucent blur materials (`.ultraThinMaterial`).',
        km: 'ប្រើប្រាស់ ពណ៍ Semantic ដើមរបស់ iOS (`Color.accentColor`), Dynamic Typography, និង Blurry Materials (`.ultraThinMaterial`)។'
      },
      tutorial: {
        en: 'VStack {\n    Text("Blurred Card")\n        .font(.title3)\n        .bold()\n}\n.padding()\n.background(.ultraThinMaterial)\n.cornerRadius(12)',
        km: 'VStack {\n    Text("កាត Blur Effect")\n        .font(.title3)\n        .bold()\n}\n.padding()\n.background(.ultraThinMaterial)\n.cornerRadius(12)'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#38bdf8; padding:20px; font-family:monospace;"><h3>5.1 Semantic Styling</h3><p>.font(.title) | .background(.ultraThinMaterial)</p></body></html>`
      }
    },
    {
      id: 'swui-5-2',
      slug: 'light-and-dark-mode-support',
      moduleNumber: 5,
      lessonNumberInModule: 2,
      title: {
        en: '5.2 Light and dark mode support',
        km: '៥.២ ការគាំទ្រ Light និង Dark mode'
      },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'SwiftUI UI elements automatically adapt to light/dark system appearance when using semantic system colors like `Color(.systemBackground)`.',
        km: 'ធាតុ UI របស់ SwiftUI សម្របខ្លួនស្វ័យប្រវត្តិទៅតាម Light/Dark mode របស់ iOS ពេលប្រើ System Semantic Colors។'
      },
      tutorial: {
        en: '@Environment(\\.colorScheme) var colorScheme\n\nText(colorScheme == .dark ? "Dark Mode" : "Light Mode")\n    .foregroundColor(Color(.label))',
        km: '@Environment(\\.colorScheme) var colorScheme\n\nText(colorScheme == .dark ? "Dark Mode" : "Light Mode")\n    .foregroundColor(Color(.label))'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#eab308; padding:20px; font-family:monospace;"><h3>5.2 Light/Dark Mode</h3><p>Automatic adaptation with Color(.systemBackground)</p></body></html>`
      }
    },
    {
      id: 'swui-5-3',
      slug: 'custom-color-assets-and-reusable-text-styles',
      moduleNumber: 5,
      lessonNumberInModule: 3,
      title: {
        en: '5.3 Custom color assets and reusable text styles',
        km: '៥.៣ Custom color assets និង reusable text styles'
      },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Define custom color palettes in Xcode Asset Catalogs and write reusable ViewModifiers for consistent app typography and branding.',
        km: 'បង្កើត Color Palette ក្នុង Xcode Asset Catalog និងសរសេរ Reusable ViewModifiers សម្រាប់ Brand របស់ App។'
      },
      tutorial: {
        en: 'struct PrimaryTitleStyle: ViewModifier {\n    func body(content: Content) -> some View {\n        content\n            .font(.title)\n            .fontWeight(.bold)\n            .foregroundColor(Color("BrandPrimary"))\n    }\n}',
        km: 'struct PrimaryTitleStyle: ViewModifier {\n    func body(content: Content) -> some View {\n        content\n            .font(.title)\n            .fontWeight(.bold)\n            .foregroundColor(Color("BrandPrimary"))\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#4ade80; padding:20px; font-family:monospace;"><h3>5.3 Custom Asset Colors</h3><p>Color("BrandPrimary") + ViewModifier</p></body></html>`
      }
    },
    {
      id: 'swui-5-4',
      slug: 'practice-theme-a-sample-screen-with-a-custom-color-palette',
      moduleNumber: 5,
      lessonNumberInModule: 4,
      title: {
        en: '5.4 Practice: theme a sample screen with a custom color palette',
        km: '៥.៤ អនុវត្ត: រចនាប្រធានបទអេក្រង់ជាមួយ Custom Color Palette'
      },
      durationMinutes: 26,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Apply cohesive styling, custom background fills, custom fonts, and crisp shadow overlays to polish a dashboard UI.',
        km: 'អនុវត្ត Styling, Background Fills, Custom Fonts, និង Shadows ដើម្បីតុបតែង Dashboard UI ឱ្យស្អាត។'
      },
      tutorial: {
        en: 'VStack {\n    Text("Summary")\n        .modifier(PrimaryTitleStyle())\n}\n.padding()\n.background(RoundedRectangle(cornerRadius: 16).fill(Color("CardBG")))\n.shadow(radius: 4)',
        km: 'VStack {\n    Text("សង្ខេប")\n        .modifier(PrimaryTitleStyle())\n}\n.padding()\n.background(RoundedRectangle(cornerRadius: 16).fill(Color("CardBG")))\n.shadow(radius: 4)'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#38bdf8; padding:20px; font-family:monospace;"><h3>5.4 Themed Screen</h3><p>Custom Palettes + Smooth Corner Radius</p></body></html>`
      }
    },

    // MODULE 6
    {
      id: 'swui-6-1',
      slug: 'local-state-vs-persisted-data-intro-to-appstorage',
      moduleNumber: 6,
      lessonNumberInModule: 1,
      title: {
        en: '6.1 Local state vs persisted data — intro to @AppStorage',
        km: '៦.១ Local state និង Persisted data — សេចក្តីផ្តើមអំពី @AppStorage'
      },
      durationMinutes: 18,
      difficulty: 'Beginner',
      explanation: {
        en: '`@AppStorage` is SwiftUI\'s property wrapper for reading and writing persistent key-value pairs stored in iOS `UserDefaults`.',
        km: '`@AppStorage` គឺជា Property Wrapper របស់ SwiftUI សម្រាប់រក្សាទុកទិន្នន័យ Key-Value ក្នុង `UserDefaults`។'
      },
      tutorial: {
        en: 'struct SettingsView: View {\n    @AppStorage("isDarkMode") private var isDarkMode = false\n    var body: some View {\n        Toggle("Dark Mode", isOn: $isDarkMode)\n    }\n}',
        km: 'struct SettingsView: View {\n    @AppStorage("isDarkMode") private var isDarkMode = false\n    var body: some View {\n        Toggle("Dark Mode", isOn: $isDarkMode)\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#38bdf8; padding:20px; font-family:monospace;"><h3>6.1 @AppStorage Persistence</h3><p>@AppStorage("isDarkMode") -> UserDefaults</p></body></html>`
      }
    },
    {
      id: 'swui-6-2',
      slug: 'making-a-network-request-with-urlsession-and-async-await',
      moduleNumber: 6,
      lessonNumberInModule: 2,
      title: {
        en: '6.2 Making a network request with URLSession and async/await',
        km: '៦.២ ការធ្វើ Network Request ដោយប្រើ URLSession និង async/await'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Use Apple\'s native `URLSession.shared.data(from: url)` with `async`/`await` for clean non-blocking network calls.',
        km: 'ប្រើ `URLSession.shared.data(from: url)` ជាមួយ `async`/`await` សម្រាប់ការហៅ Network យ៉ាងស្អាត។'
      },
      tutorial: {
        en: 'func fetchRawJSON() async throws -> Data {\n    let url = URL(string: "https://jsonplaceholder.typicode.com/todos/1")!\n    let (data, _) = try await URLSession.shared.data(from: url)\n    return data\n}',
        km: 'func fetchRawJSON() async throws -> Data {\n    let url = URL(string: "https://jsonplaceholder.typicode.com/todos/1")!\n    let (data, _) = try await URLSession.shared.data(from: url)\n    return data\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#eab308; padding:20px; font-family:monospace;"><h3>6.2 URLSession Async</h3><p>try await URLSession.shared.data(from: url)</p></body></html>`
      }
    },
    {
      id: 'swui-6-3',
      slug: 'displaying-async-data-cleanly-with-task',
      moduleNumber: 6,
      lessonNumberInModule: 3,
      title: {
        en: '6.3 Displaying async data cleanly with .task and loading/error states',
        km: '៦.៣ ការបង្ហាញទិន្នន័យ Async ដោយប្រើ .task ជាមួយ Loading និង Error States'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Attach `.task` modifier to trigger asynchronous network requests when a view appears, and handle ProgressView loading indicators.',
        km: 'ប្រើ Modifier `.task` ដើម្បីប្រកាស Async Operation ពេល View បង្ហាញ និងចាត់ចែង ProgressView។'
      },
      tutorial: {
        en: 'struct NewsView: View {\n    @State private var news: [String] = []\n    @State private var isLoading = true\n    var body: some View {\n        Group {\n            if isLoading { ProgressView() }\n            else { List(news, id: \\.self) { Text($0) } }\n        }\n        .task {\n            // Load data async\n            isLoading = false\n        }\n    }\n}',
        km: 'struct NewsView: View {\n    @State private var news: [String] = []\n    @State private var isLoading = true\n    var body: some View {\n        Group {\n            if isLoading { ProgressView() }\n            else { List(news, id: \\.self) { Text($0) } }\n        }\n        .task {\n            // Load data async\n            isLoading = false\n        }\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#4ade80; padding:20px; font-family:monospace;"><h3>6.3 .task Modifier</h3><p>.task { await loadData() } -> Auto Cancellation</p></body></html>`
      }
    },
    {
      id: 'swui-6-4',
      slug: 'decoding-json-into-swift-model-structs-with-codable',
      moduleNumber: 6,
      lessonNumberInModule: 4,
      title: {
        en: '6.4 Decoding JSON into Swift model structs with Codable',
        km: '៦.៤ ការបំលែង JSON ទៅជា Swift Struct Models ដោយប្រើ Codable'
      },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Conform Swift structs to `Codable` and use `JSONDecoder()` to parse JSON API payloads safely into strongly typed Swift models.',
        km: 'កំណត់ Swift Structs ជា `Codable` រួចប្រើ `JSONDecoder()` ដើម្បីបំលែង JSON ទៅជា Models មាន Type ច្បាស់លាស់។'
      },
      tutorial: {
        en: 'struct Post: Codable, Identifiable {\n    let id: Int\n    let title: String\n}\n\nlet posts = try JSONDecoder().decode([Post].self, from: jsonData)',
        km: 'struct Post: Codable, Identifiable {\n    let id: Int\n    let title: String\n}\n\nlet posts = try JSONDecoder().decode([Post].self, from: jsonData)'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#38bdf8; padding:20px; font-family:monospace;"><h3>6.4 Codable JSON</h3><p>JSONDecoder().decode([Post].self, from: data)</p></body></html>`
      }
    },
    {
      id: 'swui-6-5',
      slug: 'practice-fetch-and-display-a-list-of-items-from-a-public-api',
      moduleNumber: 6,
      lessonNumberInModule: 5,
      title: {
        en: '6.5 Practice: fetch and display a list of items from a public API',
        km: '៦.៥ អនុវត្ត: ទាញយក និងបង្ហាញបញ្ជីទិន្នន័យពី Public REST API'
      },
      durationMinutes: 28,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Build a complete API feed screen that fetches JSON articles, decodes them with `Codable`, and renders them inside a SwiftUI `List`.',
        km: 'សាងសង់ API Feed Screen ពេញលេញដែលទាញយក JSON Articles, បំលែងជាមួយ `Codable`, និងបង្ហាញក្នុង SwiftUI `List`។'
      },
      tutorial: {
        en: 'List(posts) { post in\n    VStack(alignment: .leading) {\n        Text(post.title).font(.headline)\n    }\n}\n.task {\n    if let fetched = try? await fetchPosts() {\n        self.posts = fetched\n    }\n}',
        km: 'List(posts) { post in\n    VStack(alignment: .leading) {\n        Text(post.title).font(.headline)\n    }\n}\n.task {\n    if let fetched = try? await fetchPosts() {\n        self.posts = fetched\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#f97316; padding:20px; font-family:monospace;"><h3>6.5 Live API Feed</h3><p>REST API -> Codable -> SwiftUI List</p></body></html>`
      }
    },

    // MODULE 7
    {
      id: 'swui-7-1',
      slug: 'building-a-form-with-textfield-and-form',
      moduleNumber: 7,
      lessonNumberInModule: 1,
      title: {
        en: '7.1 Building a form with TextField and Form',
        km: '៧.១ ការសាងសង់ Form ជាមួយ TextField និង Form'
      },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'Construct native iOS settings and input screens using `Form`, `Section`, `TextField`, and `Picker` containers.',
        km: 'បង្កើតអេក្រង់ Settings និង Input ដើមរបស់ iOS ដោយប្រើ `Form`, `Section`, `TextField`, និង `Picker`។'
      },
      tutorial: {
        en: 'Form {\n    Section(header: Text("User Info")) {\n        TextField("Full Name", text: $name)\n        SecureField("Password", text: $password)\n    }\n}',
        km: 'Form {\n    Section(header: Text("ព័ត៌មានអ្នកប្រើប្រាស់")) {\n        TextField("ឈ្មោះពេញ", text: $name)\n        SecureField("ពាក្យសម្ងាត់", text: $password)\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#38bdf8; padding:20px; font-family:monospace;"><h3>7.1 SwiftUI Form</h3><p>Form -> Section -> TextField & SecureField</p></body></html>`
      }
    },
    {
      id: 'swui-7-2',
      slug: 'form-validation',
      moduleNumber: 7,
      lessonNumberInModule: 2,
      title: {
        en: '7.2 Form validation',
        km: '៧.២ ការពិនិត្យផ្ទៀងផ្ទាត់ភាពត្រឹមត្រូវនៃ Form'
      },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Use computed properties to evaluate input constraints (e.g. valid email syntax, minimum password length) and disable submission controls.',
        km: 'ប្រើ Computed Properties ដើម្បីពិនិត្យលក្ខខណ្ឌ Input (ដូចជា Email ត្រឹមត្រូវ, ប្រវែងពាក្យសម្ងាត់) និងបិទប៊ូតុង Submit។'
      },
      tutorial: {
        en: 'var isFormValid: Bool {\n    !email.isEmpty && password.count >= 8\n}\n\nButton("Submit") { save() }\n    .disabled(!isFormValid)',
        km: 'var isFormValid: Bool {\n    !email.isEmpty && password.count >= 8\n}\n\nButton("បញ្ជូន") { save() }\n    .disabled(!isFormValid)'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#eab308; padding:20px; font-family:monospace;"><h3>7.2 Validation Rules</h3><p>Computed property .disabled(!isValid)</p></body></html>`
      }
    },
    {
      id: 'swui-7-3',
      slug: 'buttons-gestures-and-user-feedback',
      moduleNumber: 7,
      lessonNumberInModule: 3,
      title: {
        en: '7.3 Buttons, gestures, and user feedback (alerts, sheets)',
        km: '៧.៣ Buttons, Gestures, និង User Feedback (Alerts, Sheets)'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Trigger native modal popups using `.sheet()`, display confirm dialogs with `.alert()`, and attach touch gestures like `.onTapGesture`.',
        km: 'បើក Modals តាម `.sheet()`, បង្ហាញ Popup ប្រាប់ដំណឹងតាម `.alert()`, និងភ្ជាប់ Touch Gestures តាម `.onTapGesture`។'
      },
      tutorial: {
        en: '@State private var showAlert = false\n\nButton("Delete") { showAlert = true }\n    .alert("Confirm Delete", isPresented: $showAlert) {\n        Button("Delete", role: .destructive) { delete() }\n    }',
        km: '@State private var showAlert = false\n\nButton("លុប") { showAlert = true }\n    .alert("បញ្ជាក់ការលុប", isPresented: $showAlert) {\n        Button("លុប", role: .destructive) { delete() }\n    }'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#4ade80; padding:20px; font-family:monospace;"><h3>7.3 Modals & Feedback</h3><p>.sheet() & .alert() Feedback Overlays</p></body></html>`
      }
    },
    {
      id: 'swui-7-4',
      slug: 'ios-permissions-and-device-feature-concepts',
      moduleNumber: 7,
      lessonNumberInModule: 4,
      title: {
        en: '7.4 iOS permissions and device feature concepts (camera, location)',
        km: '៧.៤ ការស្នើសុំសិទ្ធិ iOS Permissions និងមុខងារ Device (Camera, Location)'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Understand how iOS security mandates Privacy Keys inside `Info.plist` before accessing native device features like Camera or GPS Location.',
        km: 'យល់ដឹងពីប្រព័ន្ធសុវត្ថិភាព iOS ដែលទាមទារ Privacy Keys ក្នុង `Info.plist` មុននឹងប្រើប្រាស់ Camera ឬ GPS Location។'
      },
      tutorial: {
        en: '// Info.plist configuration:\nNSCameraUsageDescription = "We need camera access to upload photos."\nNSLocationWhenInUseUsageDescription = "Location is needed for nearby search."',
        km: '// ការកំណត់ក្នុង Info.plist:\nNSCameraUsageDescription = "យើងត្រូវការសិទ្ធិប្រើ Camera ដើម្បីបង្ហោះរូបថត។"\nNSLocationWhenInUseUsageDescription = "ត្រូវការទីតាំងសម្រាប់ស្វែងរកកន្លែងក្បែរៗ។"'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#38bdf8; padding:20px; font-family:monospace;"><h3>7.4 Privacy & Info.plist</h3><p>NSCameraUsageDescription -> iOS Prompt</p></body></html>`
      }
    },
    {
      id: 'swui-7-5',
      slug: 'practice-build-a-login-style-form-with-validation',
      moduleNumber: 7,
      lessonNumberInModule: 5,
      title: {
        en: '7.5 Practice: build a login-style form with validation',
        km: '៧.៥ អនុវត្ត: សាងសង់ Login Form ជាមួយប្រព័ន្ធពិនិត្យ Validation'
      },
      durationMinutes: 28,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Build an iOS login screen with email format verification, secure password entry, submit button state toggling, and alert feedback.',
        km: 'សាងសង់អេក្រង់ Login លើ iOS មានការពិនិត្យ Email, ពាក្យសម្ងាត់, ការបិទ/បើកប៊ូតុង Submit និង Alert បង្ហាញសារ។'
      },
      tutorial: {
        en: 'Form {\n    Section {\n        TextField("Email", text: $email)\n        SecureField("Password", text: $password)\n    }\n    Button("Login") { performLogin() }\n        .disabled(!isFormValid)\n}',
        km: 'Form {\n    Section {\n        TextField("Email", text: $email)\n        SecureField("ពាក្យសម្ងាត់", text: $password)\n    }\n    Button("ចូលប្រើប្រាស់") { performLogin() }\n        .disabled(!isFormValid)\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#f97316; padding:20px; font-family:monospace;"><h3>7.5 Login Form Practice</h3><p>Email Validation + Secure Text Entry</p></body></html>`
      }
    },

    // MODULE 8
    {
      id: 'swui-8-1',
      slug: 'debugging-tools-xcode-previews-view-hierarchy-debugger',
      moduleNumber: 8,
      lessonNumberInModule: 1,
      title: {
        en: '8.1 Debugging tools: Xcode Previews, the View hierarchy debugger',
        km: '៨.១ ឧបករណ៍ Debugging: Xcode Previews, View Hierarchy Debugger'
      },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Utilize Xcode Previews for instant visual component rendering and inspect 3D view layers using Xcode\'s View Hierarchy Debugger.',
        km: 'ប្រើប្រាស់ Xcode Previews សម្រាប់មើល Component ភ្លាមៗ និងពិនិត្យមើល Visual Layers ជា 3D ដោយប្រើ View Hierarchy Debugger។'
      },
      tutorial: {
        en: '#Preview("Light Theme") {\n    ContentView()\n}\n\n#Preview("Dark Theme") {\n    ContentView()\n        .preferredColorScheme(.dark)\n}',
        km: '#Preview("Light Theme") {\n    ContentView()\n}\n\n#Preview("Dark Theme") {\n    ContentView()\n        .preferredColorScheme(.dark)\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#38bdf8; padding:20px; font-family:monospace;"><h3>8.1 Xcode Debugging</h3><p>#Preview Canvas & 3D Hierarchy Inspector</p></body></html>`
      }
    },
    {
      id: 'swui-8-2',
      slug: 'writing-a-basic-swiftui-test',
      moduleNumber: 8,
      lessonNumberInModule: 2,
      title: {
        en: '8.2 Writing a basic SwiftUI test',
        km: '៨.២ ការសរសេរ Unit Test មូលដ្ឋានសម្រាប់ SwiftUI'
      },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Write unit tests for Observable stores and view logic using Apple\'s `XCTest` framework or the new `Testing` macro framework.',
        km: 'សរសេរ Unit Tests សម្រាប់ Observable Models និង Logic ដោយប្រើប្រាស់ `XCTest` ឬ Swift `Testing` Framework ថ្មី។'
      },
      tutorial: {
        en: 'import XCTest\n@testable import HabitFlow\n\nfinal class HabitTests: XCTestCase {\n    func testAddHabit() {\n        let store = HabitStore()\n        store.addHabit(title: "Swim")\n        XCTAssertEqual(store.habits.last?.title, "Swim")\n    }\n}',
        km: 'import XCTest\n@testable import HabitFlow\n\nfinal class HabitTests: XCTestCase {\n    func testAddHabit() {\n        let store = HabitStore()\n        store.addHabit(title: "Swim")\n        XCTAssertEqual(store.habits.last?.title, "Swim")\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#22c55e; padding:20px; font-family:monospace;"><h3>8.2 XCTest Unit Testing</h3><p>XCTAssertEqual(store.habits.count, 1)</p></body></html>`
      }
    },
    {
      id: 'swui-8-3',
      slug: 'planning-the-habitflow-capstone',
      moduleNumber: 8,
      lessonNumberInModule: 3,
      title: {
        en: '8.3 Planning the HabitFlow capstone (screens, data model, features)',
        km: '៨.៣ គ្រោងការណ៍ Capstone HabitFlow (អេក្រង់, Data Model, មុខងារ)'
      },
      durationMinutes: 25,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Architect the complete HabitFlow iOS capstone project: define the Codable Habit struct, HabitStore state manager, List view, and Sheet navigation modal.',
        km: 'រៀបចំរចនាសម្ព័ន្ធគម្រោង Capstone HabitFlow៖ កំណត់ Codable Habit struct, HabitStore state manager, List view, និង Sheet navigation modal។'
      },
      tutorial: {
        en: '// Architecture Plan:\n1. Model: struct Habit: Codable, Identifiable\n2. Store: class HabitStore: ObservableObject\n3. Views: HabitFlowApp (List), AddHabitSheet (Form)\n4. Storage: UserDefaults JSON persistence',
        km: '// ផែនការរចនាសម្ព័ន្ធ:\n១. Model: struct Habit: Codable, Identifiable\n២. Store: class HabitStore: ObservableObject\n៣. Views: HabitFlowApp (List), AddHabitSheet (Form)\n៤. Storage: UserDefaults JSON persistence'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#f97316; padding:20px; font-family:monospace;"><h3>8.3 HabitFlow Architecture</h3><p>Codable Model + Observable Store + Native iOS List</p></body></html>`
      }
    }
  ]
};
