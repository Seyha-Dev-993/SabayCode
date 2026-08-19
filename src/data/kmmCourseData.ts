import { MobileCourse } from './mobileCoursesHubData';

export const KMM_COURSE_DATA: MobileCourse = {
  id: 'kotlin-multiplatform',
  title: {
    en: 'Kotlin Multiplatform (KMM) Course',
    km: 'វគ្គសិក្សា Kotlin Multiplatform (KMM)'
  },
  iconName: 'kmm',
  type: 'framework',
  parentLanguageId: 'kotlin',
  categoryId: 'frameworks',
  difficulty: 'Advanced',
  shortDescription: {
    en: 'Share business logic, networking, and database code natively across Android and iOS with Kotlin.',
    km: 'ចែករំលែក Business Logic, Networking និង Database រវាង Android និង iOS ដោយប្រើ Kotlin។'
  },
  summary: {
    en: 'Kotlin Multiplatform (KMM) allows you to write business logic once in Kotlin and reuse it natively on both Android and iOS while maintaining 100% native UI performance (or optionally sharing UI with Compose Multiplatform). It powers modern cross-platform apps at companies like Netflix, Cash App, McDonald\'s, and VMware. This course covers project structure (commonMain, androidMain, iosMain), the expect/actual mechanism, shared networking with Ktor, concurrency with Coroutines, local storage with SQLDelight, dependency injection with Koin, consuming shared logic from Jetpack Compose and SwiftUI, Compose Multiplatform, and unit testing.',
    km: 'Kotlin Multiplatform (KMM) អនុញ្ញាតឱ្យអ្នកសរសេរ Business Logic តែម្ដងជា Kotlin ហើយប្រើវាទាំងលើ Android និង iOS ដោយនៅតែសរសេរ UI ដាច់ដោយឡែកសម្រាប់ Platform នីមួយៗ (ឬប្រើ Compose Multiplatform ដើម្បីចែក UI ផងដែរ)។ វាត្រូវប្រើក្នុង Apps ធំៗដូចជា Netflix, Cash App, McDonald\'s និង VMware។ វគ្គសិក្សានេះគ្របដណ្តប់លើរចនាសម្ព័ន្ធ Project (commonMain, androidMain, iosMain), យន្តការ expect/actual, ការធ្វើ Networking ជាមួយ Ktor, Coroutines, Local Storage ជាមួយ SQLDelight, Dependency Injection ជាមួយ Koin, ការហៅ Shared Logic ចេញពី Jetpack Compose និង SwiftUI, Compose Multiplatform, និង Unit Testing។'
  },
  estimatedHours: 28,
  lessonCount: 33,
  usedFor: 'Shared Cross-Platform Business Logic, Enterprise Apps, Mobile Banking, SDK Development',
  realWorldApps: ['Netflix', 'Cash App', 'McDonald\'s', 'VMware', 'Forbes', 'Philips', 'Baidu'],
  prerequisites: {
    en: 'Prerequisite: Basic Kotlin language knowledge (required), some familiarity with Android (Jetpack Compose) or iOS (SwiftUI) development (recommended).',
    km: 'តម្រូវការជាមុន៖ ចេះមូលដ្ឋាន Kotlin Language (ចាំបាច់), យល់ដឹងអំពី Android ឬ iOS Development បន្តិចបន្តួច (ណែនាំ)'
  },
  whatYouWillLearn: {
    en: [
      'Understand KMM architecture and code sharing philosophy',
      'Master the expect/actual mechanism for platform-specific capabilities',
      'Structure multi-module projects (commonMain, androidMain, iosMain)',
      'Build a shared networking layer with Ktor Client and kotlinx.serialization',
      'Handle cross-platform concurrency safely with Kotlin Coroutines and StateFlow',
      'Implement shared local storage using SQLDelight and SQLite drivers',
      'Set up dependency injection with Koin across shared and native modules',
      'Consume shared Kotlin ViewModel / UseCases from Jetpack Compose (Android)',
      'Consume shared Kotlin ViewModel / UseCases from SwiftUI (iOS) via Kotlin/Native framework',
      'Explore Compose Multiplatform for sharing UI screens across iOS and Android',
      'Write multiplatform unit tests in commonMain and run them on both targets',
      'Build a complete cross-platform Weather App capstone with shared logic'
    ],
    km: [
      'យល់ដឹងពីរចនាសម្ព័ន្ធ KMM Architecture និងទស្សនវិជ្ជាចែងរំលែកកូដ',
      'ស្ទាត់ជំនាញយន្តការ expect/actual សម្រាប់ហៅ Platform APIs',
      'រៀបចំគម្រោង Multi-module (commonMain, androidMain, iosMain)',
      'បង្កើត Shared Network Layer ដោយប្រើ Ktor Client និង kotlinx.serialization',
      'គ្រប់គ្រង Concurrency និង StateFlow រវាង Android & iOS ដោយ Coroutines',
      'សាងសង់ Local Storage ដោយប្រើ SQLDelight លើ SQLite drivers',
      'រៀបចំ Dependency Injection ដោយប្រើ Koin សម្រាប់ Shared Logic',
      'ហៅ Shared Kotlin Logic ចេញពី Jetpack Compose (Android)',
      'ហៅ Shared Kotlin Logic ចេញពី SwiftUI (iOS) តាមរយៈ Kotlin/Native Framework',
      'ស្វែងយល់ពី Compose Multiplatform សម្រាប់ចែករំលែក UI ទាំងស្រុង',
      'សរសេរ Multiplatform Unit Tests ក្នុង commonMain ហើយរត់លើ platform ទាំងពីរ',
      'សាងសង់ Cross-Platform Weather App Capstone ដោយប្រើ Shared Business Logic'
    ]
  },
  toolsAndSetup: {
    en: '1. Install Android Studio (Ladybug / Hedgehog or newer) with Kotlin plugin.\n2. Install the "Kotlin Multiplatform" plugin inside Android Studio.\n3. macOS with Xcode (15+) installed is required if compiling and running the iOS target.\n4. Install JDK 17 or higher for Gradle builds.\n5. Use kdoctor tool in terminal to verify environment setup (`kdoctor`).',
    km: '១. ដំឡើង Android Studio (Ladybug / Hedgehog ឬថ្មីជាង) ជាមួយ Kotlin plugin\n២. ដំឡើង "Kotlin Multiplatform" plugin ក្នុង Android Studio\n៣. macOS ដែលមាន Xcode (15+) គឺចាំបាច់ប្រសិនបើតម្រូវឱ្យ Compile និងរត់លើ iOS Target\n៤. ដំឡើង JDK 17 ឬខ្ពស់ជាងសម្រាប់ Gradle Builds\n៥. ប្រើប្រាស់ឧបករណ៍ kdoctor ក្នុង Terminal ដើម្បីពិនិត្យមើលព័ត៌មានលម្អិតនៃ Setup (`kdoctor`)` '
  },
  cheatSheet: [
    {
      concept: 'expect / actual Declarations',
      code: '// commonMain/Platform.kt\nexpect class Platform() {\n    val name: String\n}\n\n// androidMain/Platform.android.kt\nactual class Platform {\n    actual val name: String = "Android ${android.os.Build.VERSION.SDK_INT}"\n}\n\n// iosMain/Platform.ios.kt\nimport platform.UIKit.UIDevice\nactual class Platform {\n    actual val name: String = UIDevice.currentDevice.systemName() + " " + UIDevice.currentDevice.systemVersion\n}',
      explanation: {
        en: 'expect declares contract in commonMain; actual provides platform implementation in androidMain & iosMain.',
        km: 'expect ប្រកាស Interface/Class ក្នុង commonMain ហើយ actual ផ្តល់ការអនុវត្តផ្ទាល់លើ androidMain និង iosMain។'
      }
    },
    {
      concept: 'Ktor Shared HTTP Client',
      code: '// commonMain/HttpClient.kt\nimport io.ktor.client.*\nimport io.ktor.client.plugins.contentnegotiation.*\nimport io.ktor.serialization.kotlinx.json.*\nimport kotlinx.serialization.json.Json\n\nval client = HttpClient {\n    install(ContentNegotiation) {\n        json(Json { prettyPrint = true; ignoreUnknownKeys = true })\n    }\n}',
      explanation: {
        en: 'Ktor Client provides asynchronous HTTP requests across all target platforms using platform engines (OkHttp on Android, Darwin on iOS).',
        km: 'Ktor Client ផ្តល់ការធ្វើ HTTP Request ឆ្លង platform ដោយប្រើ engine សមស្រប (OkHttp លើ Android, Darwin លើ iOS)។'
      }
    },
    {
      concept: 'SQLDelight Database Driver Creation',
      code: '// commonMain/DatabaseDriver.kt\nexpect class DatabaseDriverFactory {\n    fun createDriver(): SqlDriver\n}\n\n// androidMain/DatabaseDriver.android.kt\nactual class DatabaseDriverFactory(private val context: Context) {\n    actual fun createDriver(): SqlDriver {\n        return AndroidSqliteDriver(AppDatabase.Schema, context, "app.db")\n    }\n}\n\n// iosMain/DatabaseDriver.ios.kt\nactual class DatabaseDriverFactory {\n    actual fun createDriver(): SqlDriver {\n        return NativeSqliteDriver(AppDatabase.Schema, "app.db")\n    }\n}',
      explanation: {
        en: 'SQLDelight generates type-safe database queries from SQL files and uses platform-native SQLite drivers.',
        km: 'SQLDelight បង្កើត Typed Queries ពីឯកសារ .sq ដោយប្រើប្រាស់ Native SQLite Driver លើ platform នីមួយៗ។'
      }
    },
    {
      concept: 'Koin Dependency Injection in commonMain',
      code: '// commonMain/Koin.kt\nval sharedModule = module {\n    single { HttpClient() }\n    single { WeatherRepository(get()) }\n}\n\nfun initKoin() = startKoin {\n    modules(sharedModule)\n}',
      explanation: {
        en: 'Define shared DI modules in commonMain so dependencies can be injected cleanly into Android activities and iOS view controllers.',
        km: 'កំណត់ DI Module ក្នុង commonMain ដើម្បី Inject ចូលក្នុង Android Activity និង iOS View Model បានយ៉ាងងាយស្រួល។'
      }
    }
  ],
  quiz: [
    {
      id: 'q-kmm-1',
      question: {
        en: 'Which source set in a KMM project contains code that is shared across both Android and iOS targets?',
        km: 'តើ Source Set មួយណា ក្នុង KMM project ដែលផ្ទុកកូដសម្រាប់ចែករំលែករវាង Android និង iOS?'
      },
      options: [
        { id: '1', text: { en: 'commonMain', km: 'commonMain' }, isCorrect: true },
        { id: '2', text: { en: 'androidMain', km: 'androidMain' }, isCorrect: false },
        { id: '3', text: { en: 'iosMain', km: 'iosMain' }, isCorrect: false }
      ],
      explanation: {
        en: '`commonMain` holds all platform-agnostic Kotlin code shared across all targets.',
        km: '`commonMain` ផ្ទុកកូដ Kotlin សុទ្ធដែលមិនប្រកាន់ platform សម្រាប់ប្រើរួមគ្នា។'
      }
    },
    {
      id: 'q-kmm-2',
      question: {
        en: 'In KMM, if you declare an `expect fun getDeviceId(): String` in `commonMain`, what must you do on `androidMain` and `iosMain`?',
        km: 'ក្នុង KMM ប្រសិនបើអ្នកប្រកាស `expect fun getDeviceId(): String` ក្នុង `commonMain` តើអ្នកត្រូវធ្វើអ្វីលើ `androidMain` និង `iosMain`?'
      },
      options: [
        { id: '1', text: { en: 'Provide matching `actual fun getDeviceId(): String` implementations in both source sets', km: 'ផ្តល់ការសរសេរ `actual fun getDeviceId(): String` ក្នុង Source Sets ទាំងពីរ' }, isCorrect: true },
        { id: '2', text: { en: 'Do nothing, Kotlin generates it automatically', km: 'មិនបាច់ធ្វើអ្វីទេ Kotlin បង្កើតឱ្យស្វ័យប្រវត្តិ' }, isCorrect: false },
        { id: '3', text: { en: 'Define it only in Swift code inside Xcode', km: 'សរសេរតែក្នុង Swift code លើ Xcode ប៉ុណ្ណោះ' }, isCorrect: false }
      ],
      explanation: {
        en: 'Every `expect` declaration in `commonMain` MUST be matched with an `actual` implementation in every target source set.',
        km: 'រាល់ការប្រកាស `expect` ត្រូវតែមាន `actual` មកបំពេញលើគ្រប់ platform target។'
      }
    },
    {
      id: 'q-kmm-3',
      question: {
        en: 'Which HTTP client library is official and standard for making networking requests in KMM shared code?',
        km: 'តើ បណ្ណាល័យ HTTP Client មួយណាដែលជាស្តង់ដារផ្លូវការសម្រាប់ធ្វើ Networking ក្នុង KMM shared code?'
      },
      options: [
        { id: '1', text: { en: 'Ktor Client', km: 'Ktor Client' }, isCorrect: true },
        { id: '2', text: { en: 'Retrofit', km: 'Retrofit' }, isCorrect: false },
        { id: '3', text: { en: 'Alamofire', km: 'Alamofire' }, isCorrect: false }
      ],
      explanation: {
        en: 'Ktor Client is multiplatform-native, supporting Android (OkHttp engine) and iOS (Darwin engine) out of the box.',
        km: 'Ktor Client ជា Multiplatform library ផ្លូវការដែលគាំទ្រទាំង Android និង iOS។'
      }
    },
    {
      id: 'q-kmm-4',
      question: {
        en: 'Is platform-specific code (such as importing `java.io.File` or `platform.UIKit.*`) allowed directly inside `commonMain`?',
        km: 'តើកូដដែលជា Platform-specific (ដូចជា `java.io.File` ឬ `platform.UIKit.*`) ត្រូវបានអនុញ្ញាតឱ្យសរសេរផ្ទាល់ក្នុង `commonMain` ដែរឬទេ?'
      },
      options: [
        { id: '1', text: { en: 'No — commonMain can only access platform-agnostic Kotlin code and multiplatform libraries', km: 'មិនបានទេ — commonMain អាចប្រើបានតែកូដ Kotlin សុទ្ធ និង KMP Libraries ប៉ុណ្ណោះ' }, isCorrect: true },
        { id: '2', text: { en: 'Yes — Gradle will automatically fix any compiler errors', km: 'បាន — Gradle នឹងជួយកែ Error ដោយស្វ័យប្រវត្តិ' }, isCorrect: false }
      ],
      explanation: {
        en: '`commonMain` targets Kotlin/Common standard library and cannot directly import JVM-only or Apple-only APIs without expect/actual.',
        km: '`commonMain` មិនអាច Import JVM ឬ iOS SDKs ដោយផ្ទាល់ឡើយ ដោយសារវាត្រូវបានរចនាសម្រាប់រត់លើគ្រប់ Platform។'
      }
    }
  ],
  capstoneProject: {
    title: {
      en: 'KMM Cross-Platform Weather & Climate App',
      km: 'KMM Cross-Platform Weather & Climate App'
    },
    description: {
      en: 'Build a production-ready weather application powered by a shared Kotlin Multiplatform core (Ktor HTTP client, kotlinx.serialization, SQLDelight local SQLite caching, Koin DI) with native Jetpack Compose UI on Android and native SwiftUI UI on iOS.',
      km: 'សាងសង់កម្មវិធីព្យាករណ៍អាកាសធាតុដែលដើរដោយ KMM Shared Core (Ktor Client, kotlinx.serialization, SQLDelight caching, Koin DI) ដោយភ្ជាប់ជាមួយ UI Native លើ Android (Jetpack Compose) និង iOS (SwiftUI)។'
    },
    featureChecklist: {
      en: [
        'Shared WeatherRepository in commonMain with remote API fetching & offline local caching',
        'Expect/Actual implementation for location services or platform info string',
        'SQLDelight schema for caching current weather and 5-day forecast history',
        'Android UI built with Jetpack Compose observe StateFlow from shared ViewModel',
        'iOS UI built with SwiftUI observe StateFlow / Publisher from Kotlin framework',
        'Unit tests in commonMain verifying repository offline-first fallback behavior'
      ],
      km: [
        'Shared WeatherRepository ក្នុង commonMain មាន Networking និង Offline Local Cache',
        'ប្រើប្រាស់ expect/actual សម្រាប់ទាញយក Platform Info',
        'SQLDelight schema សម្រាប់រក្សាទុកទិន្នន័យអាកាសធាតុសម្រាប់មើល Offline',
        'Android UI សរសេរដោយ Jetpack Compose តាមដាន StateFlow ពី Shared ViewModel',
        'iOS UI សរសេរដោយ SwiftUI តាមដាន StateFlow ពី KMM Framework',
        'Unit tests ក្នុង commonMain ពិនិត្យមើលដំណើរការ Offline Fallback'
      ]
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body style="background:#0f172a; color:#f8fafc; font-family:system-ui, sans-serif; padding:20px; line-height:1.6;">
  <div style="max-width:440px; margin:0 auto; background:#1e293b; border-radius:24px; padding:20px; border:2px solid #334155; box-shadow:0 10px 25px rgba(0,0,0,0.5);">
    <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #334155; padding-bottom:12px; margin-bottom:16px;">
      <h3 style="color:#c084fc; margin:0; font-size:18px;">🌐 KMM Weather Core</h3>
      <span style="background:#7e22ce; color:#ffffff; font-weight:bold; font-size:11px; padding:3px 10px; border-radius:12px;">Android & iOS</span>
    </div>
    
    <div style="background:linear-gradient(135deg, #3b0764 0%, #1e1b4b 100%); padding:20px; border-radius:18px; margin-bottom:16px; border:1px solid #a855f7; text-align:center;">
      <span style="font-size:12px; color:#d8b4fe; text-transform:uppercase; letter-spacing:1px; font-weight:bold;">Phnom Penh, Cambodia</span>
      <h2 style="margin:8px 0; color:#ffffff; font-size:38px; font-weight:bold;">32°C</h2>
      <p style="margin:0; color:#e9d5ff; font-size:14px;">☀️ Sunny • Humidity 65%</p>
    </div>

    <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:16px;">
      <div style="background:#0f172a; padding:12px; border-radius:14px; border:1px solid #334155; text-align:center;">
        <span style="font-size:11px; color:#94a3b8; display:block;">Android UI</span>
        <strong style="color:#4ade80; font-size:13px;">Jetpack Compose</strong>
      </div>
      <div style="background:#0f172a; padding:12px; border-radius:14px; border:1px solid #334155; text-align:center;">
        <span style="font-size:11px; color:#94a3b8; display:block;">iOS UI</span>
        <strong style="color:#38bdf8; font-size:13px;">SwiftUI Native</strong>
      </div>
    </div>

    <div style="background:#0f172a; padding:12px; border-radius:12px; font-family:monospace; font-size:11px; color:#a855f7;">
      ✓ commonMain: Ktor + SQLDelight<br/>
      ✓ androidMain: AndroidSqliteDriver<br/>
      ✓ iosMain: NativeSqliteDriver
    </div>
  </div>
</body>
</html>`
    },
    finalCode: `// commonMain/WeatherRepository.kt
package com.example.weather.shared

import io.ktor.client.*
import io.ktor.client.call.*
import io.ktor.client.request.*
import kotlinx.coroutines.flow.Flow
import kotlinx.serialization.Serializable

@Serializable
data class WeatherData(
    val city: String,
    val temperatureC: Double,
    val condition: String
)

class WeatherRepository(
    private val httpClient: HttpClient,
    private val database: WeatherDatabase
) {
    suspend fun fetchWeather(city: String): WeatherData {
        return try {
            val remote: WeatherData = httpClient.get("https://api.weather.com/v1/$city").body()
            database.saveWeather(remote)
            remote
        } catch (e: Exception) {
            database.getWeather(city) ?: WeatherData(city, 30.0, "Sunny (Cached)")
        }
    }
}`
  },
  lessons: [
    // MODULE 1
    {
      id: 'kmm-1-1',
      slug: 'what-is-kmm-and-the-problem-it-solves',
      moduleNumber: 1,
      lessonNumberInModule: 1,
      title: {
        en: '1.1 What KMM is and the problem it solves',
        km: '១.១ អ្វីទៅជា KMM និងបញ្ហាដែលវាដោះស្រាយ'
      },
      durationMinutes: 18,
      difficulty: 'Beginner',
      explanation: {
        en: 'Kotlin Multiplatform (KMM) allows developers to write business logic once in Kotlin and share it seamlessly across Android and iOS targets without compromising native UI quality or performance.',
        km: 'Kotlin Multiplatform (KMM) អនុញ្ញាតឱ្យ Developers សរសេរ Business Logic តែម្តងជា Kotlin ហើយចែករំលែកវាទៅកាន់ Android និង iOS ដោយមិនបាត់បង់ល្បឿន ឬគុណភាព UI Native ឡើយ។'
      },
      tutorial: {
        en: '// KMM Architecture Overview:\n// [ commonMain ] (Shared Logic: Ktor, SQLDelight, Coroutines, ViewModels)\n//       │\n//       ├──> [ androidMain ] ──> Jetpack Compose Native App\n//       └──> [ iosMain ]     ──> SwiftUI Native App via .framework',
        km: '// រចនាសម្ព័ន្ធ KMM Architecture:\n// [ commonMain ] (Shared Logic: Ktor, SQLDelight, Coroutines, ViewModels)\n//       │\n//       ├──> [ androidMain ] ──> Jetpack Compose Native App\n//       └──> [ iosMain ]     ──> SwiftUI Native App តាមរយៈ .framework'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#c084fc; padding:20px; font-family:monospace;"><h3>1.1 KMM Architecture</h3><p>Write Business Logic Once in Kotlin<br/>Reuse natively on Android & iOS!</p></body></html>`
      }
    },
    {
      id: 'kmm-1-2',
      slug: 'setting-up-kmm-environment-android-studio-xcode',
      moduleNumber: 1,
      lessonNumberInModule: 2,
      title: {
        en: '1.2 Setting up the environment (Android Studio, KMM Plugin & Xcode)',
        km: '១.២ ការរៀបចំបរិស្ថានកូដ (Android Studio, KMM Plugin និង Xcode)'
      },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'To develop with KMM, you need Android Studio with the Kotlin Multiplatform plugin. Building for iOS also requires Xcode installed on macOS.',
        km: 'ដើម្បីសរសេរ KMM អ្នកត្រូវមាន Android Studio និង Kotlin Multiplatform plugin។ ការ Compile សម្រាប់ iOS តម្រូវឱ្យមាន Xcode លើ macOS។'
      },
      tutorial: {
        en: '// Setup Checklist:\n1. Open Android Studio -> Plugins -> Install "Kotlin Multiplatform"\n2. Install Xcode (macOS only) for iOS build tools & CocoaPods/Swift Package Manager\n3. Run `kdoctor` in Terminal to diagnose missing dependencies',
        km: '// Checklist សម្រាប់ការដំឡើង:\n១. បើក Android Studio -> Plugins -> Install "Kotlin Multiplatform"\n២. ដំឡើង Xcode (លើ macOS) សម្រាប់ iOS Build Tools\n៣. រត់បញ្ជា `kdoctor` ក្នុង Terminal ដើម្បីពិនិត្យមើលបរិស្ថាន'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#22c55e; padding:20px; font-family:monospace;"><h3>1.2 Environment Setup</h3><p>✓ Android Studio Ladybug<br/>✓ KMM Plugin Installed<br/>✓ Xcode 15+ (macOS)</p></body></html>`
      }
    },
    {
      id: 'kmm-1-3',
      slug: 'creating-a-new-kmm-project',
      moduleNumber: 1,
      lessonNumberInModule: 3,
      title: {
        en: '1.3 Creating a new KMM project from the wizard/template',
        km: '១.៣ ការបង្កើតគម្រោង KMM ថ្មីពី Wizard / Template'
      },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'Use Android Studio\'s Kotlin Multiplatform App Wizard to generate a multi-module workspace with shared, androidApp, and iosApp directories ready out-of-the-box.',
        km: 'ប្រើប្រាស់ Kotlin Multiplatform App Wizard ក្នុង Android Studio ដើម្បីបង្កើត Workspace ដែលមាន shared, androidApp, និង iosApp រួចជាស្រេច។'
      },
      tutorial: {
        en: '// Wizard Steps:\n1. File -> New -> New Project -> Kotlin Multiplatform App\n2. App Name: "KmmWeatherApp", Package: "com.example.weather"\n3. iOS Framework Distribution: Regular framework / CocoaPods\n4. Finish and allow Gradle sync',
        km: '// ជំហានតាម Wizard:\n១. File -> New -> New Project -> Kotlin Multiplatform App\n២. ឈ្មោះ App: "KmmWeatherApp"\n៣. ជ្រើសរើស iOS Framework: Regular framework\n៤. ចុច Finish ហើយរង់ចាំ Gradle Sync'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#38bdf8; padding:20px; font-family:monospace;"><h3>1.3 KMM Project Wizard</h3><p>Project Structure Created:<br/>📂 shared/<br/>📂 androidApp/<br/>📂 iosApp/</p></body></html>`
      }
    },

    // MODULE 2
    {
      id: 'kmm-2-1',
      slug: 'commonmain-shared-code',
      moduleNumber: 2,
      lessonNumberInModule: 1,
      title: {
        en: '2.1 commonMain — shared code for all platforms',
        km: '២.១ commonMain — កូដចែករំលែកសម្រាប់គ្រប់ Platform'
      },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: '`commonMain` is the core source set in KMM where you write target-agnostic Kotlin logic (data models, state machines, business validation) shared across Android and iOS.',
        km: '`commonMain` គឺជា Source Set ដើមក្នុង KMM ដែលអ្នកសរសេរ Kotlin Business Logic សុទ្ធ សម្រាប់ចែករំលែករវាង Android និង iOS។'
      },
      tutorial: {
        en: '// shared/src/commonMain/kotlin/Greeting.kt\npackage com.example.shared\n\nclass Greeting {\n    fun greet(): String {\n        return "Hello from KMM Shared Code!"\n    }\n}',
        km: '// shared/src/commonMain/kotlin/Greeting.kt\npackage com.example.shared\n\nclass Greeting {\n    fun greet(): String {\n        return "សួស្តីចេញពី KMM Shared Code!"\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#c084fc; padding:20px; font-family:monospace;"><h3>2.1 commonMain Source Set</h3><p>📂 shared/src/commonMain/kotlin/<br/>└─ Greeting.kt (100% Shared)</p></body></html>`
      }
    },
    {
      id: 'kmm-2-2',
      slug: 'androidmain-and-iosmain-source-sets',
      moduleNumber: 2,
      lessonNumberInModule: 2,
      title: {
        en: '2.2 androidMain / iosMain — platform-specific source sets',
        km: '២.២ androidMain / iosMain — Source sets សម្រាប់ Platform ជាក់លាក់'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: '`androidMain` can access Android SDK classes, while `iosMain` can directly interop with Apple CocoaTouch and Foundation framework APIs via Kotlin/Native.',
        km: '`androidMain` អាចហៅ Android SDKs បាន ហើយ `iosMain` អាចហៅ Apple Foundation / UIKit APIs បានដោយផ្ទាល់តាម Kotlin/Native។'
      },
      tutorial: {
        en: '// shared/src/androidMain/kotlin/Platform.android.kt\n// Has access to android.os.Build\n\n// shared/src/iosMain/kotlin/Platform.ios.kt\n// Has access to platform.UIKit.UIDevice',
        km: '// shared/src/androidMain/kotlin/Platform.android.kt\n// អាចប្រើ android.os.Build\n\n// shared/src/iosMain/kotlin/Platform.ios.kt\n// អាចប្រើ platform.UIKit.UIDevice'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#f59e0b; padding:20px; font-family:monospace;"><h3>2.2 Platform Source Sets</h3><p>androidMain -> Android SDK<br/>iosMain -> Apple Foundation SDK</p></body></html>`
      }
    },
    {
      id: 'kmm-2-3',
      slug: 'how-gradle-wires-kmm-together',
      moduleNumber: 2,
      lessonNumberInModule: 3,
      title: {
        en: '2.3 How Gradle wires it all together',
        km: '២.៣ របៀបដែល Gradle តភ្ជាប់គ្រប់យ៉ាងចូលគ្នា'
      },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'The Kotlin Multiplatform Gradle plugin compiles `commonMain` + `androidMain` into an Android library (AAR) and `commonMain` + `iosMain` into an Apple Framework (.framework).',
        km: 'Kotlin Multiplatform Gradle Plugin ធ្វើការ Compile `commonMain` + `androidMain` ជា Android AAR និង `commonMain` + `iosMain` ជា Apple Framework (.framework)។'
      },
      tutorial: {
        en: '// shared/build.gradle.kts snippet\nkotlin {\n    androidTarget()\n    iosX64()\n    iosArm64()\n    iosSimulatorArm64()\n    \n    sourceSets {\n        commonMain.dependencies {\n            // Shared libraries\n        }\n    }\n}',
        km: '// shared/build.gradle.kts snippet\nkotlin {\n    androidTarget()\n    iosX64()\n    iosArm64()\n    iosSimulatorArm64()\n    \n    sourceSets {\n        commonMain.dependencies {\n            // Shared libraries\n        }\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#4ade80; padding:20px; font-family:monospace;"><h3>2.3 Gradle KMP Plugin</h3><p>Gradle -> Android AAR & iOS Framework (.xcframework)</p></body></html>`
      }
    },

    // MODULE 3
    {
      id: 'kmm-3-1',
      slug: 'declaring-expect-declarations',
      moduleNumber: 3,
      lessonNumberInModule: 1,
      title: {
        en: '3.1 Declaring an expect function/class in commonMain',
        km: '៣.១ ការប្រកាស expect function/class ក្នុង commonMain'
      },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'When shared code needs to invoke a feature that behaves differently on each platform (e.g. device name, file system path, UUID generation), declare it using the `expect` keyword.',
        km: 'នៅពេលកូដរួមត្រូវការហៅ Feature ដែលខុសគ្នាតាម Platform (ដូចជា Device Name, File Path) យើងប្រកាសវាដោយប្រើពាក្យគន្លឹះ `expect`។'
      },
      tutorial: {
        en: '// commonMain/Platform.kt\npackage com.example.shared\n\nexpect class Platform() {\n    val name: String\n}\n\nexpect fun getDeviceUUID(): String',
        km: '// commonMain/Platform.kt\npackage com.example.shared\n\nexpect class Platform() {\n    val name: String\n}\n\nexpect fun getDeviceUUID(): String'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#c084fc; padding:20px; font-family:monospace;"><h3>3.1 Expect Declaration</h3><p>expect class Platform() { val name: String }</p></body></html>`
      }
    },
    {
      id: 'kmm-3-2',
      slug: 'providing-actual-implementations',
      moduleNumber: 3,
      lessonNumberInModule: 2,
      title: {
        en: '3.2 Providing actual implementations per platform',
        km: '៣.២ ការផ្តល់ការសរសេរ actual រៀងៗខ្លួនតាម Platform'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'For every `expect` signature declared in `commonMain`, you must provide a corresponding `actual` implementation in both `androidMain` and `iosMain`.',
        km: 'រាល់ `expect` ដែលបានប្រកាសក្នុង `commonMain` តម្រូវឱ្យមាន `actual` មកបំពេញក្នុង `androidMain` និង `iosMain` ដោយគ្មានចន្លោះ។'
      },
      tutorial: {
        en: '// androidMain/Platform.android.kt\nactual class Platform {\n    actual val name: String = "Android ${android.os.Build.VERSION.SDK_INT}"\n}\n\n// iosMain/Platform.ios.kt\nimport platform.UIKit.UIDevice\nactual class Platform {\n    actual val name: String = UIDevice.currentDevice.systemName() + " " + UIDevice.currentDevice.systemVersion\n}',
        km: '// androidMain/Platform.android.kt\nactual class Platform {\n    actual val name: String = "Android ${android.os.Build.VERSION.SDK_INT}"\n}\n\n// iosMain/Platform.ios.kt\nimport platform.UIKit.UIDevice\nactual class Platform {\n    actual val name: String = UIDevice.currentDevice.systemName() + " " + UIDevice.currentDevice.systemVersion\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#38bdf8; padding:20px; font-family:monospace;"><h3>3.2 Actual Implementation</h3><p>Android: "Android 34"<br/>iOS: "iOS 17.2"</p></body></html>`
      }
    },
    {
      id: 'kmm-3-3',
      slug: 'practical-example-platform-name-expect-actual',
      moduleNumber: 3,
      lessonNumberInModule: 3,
      title: {
        en: '3.3 Practical example: getting platform name via expect/actual',
        km: '៣.៣ ឧទាហរណ៍អនុវត្ត៖ ការទាញយកឈ្មោះ Platform តាម expect/actual'
      },
      durationMinutes: 24,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Put `expect`/`actual` to work by building a device greeting service that returns customized OS info string to both Android Compose UI and iOS SwiftUI.',
        km: 'អនុវត្ត `expect`/`actual` ជាក់ស្តែងដោយបង្កើត Service សម្រាប់បង្ហាញព័ត៌មានប្រព័ន្ធប្រតិបត្តិការលើ UI ទាំងពីរ។'
      },
      tutorial: {
        en: 'class Greeting {\n    private val platform: Platform = Platform()\n\n    fun greet(): String {\n        return "Hello, Running on ${platform.name}!"\n    }\n}',
        km: 'class Greeting {\n    private val platform: Platform = Platform()\n\n    fun greet(): String {\n        return "សួស្តី, កំពុងរត់លើ ${platform.name}!"\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#22c55e; padding:20px; font-family:monospace;"><h3>3.3 Execution Result</h3><p>📱 Android Screen: "Hello, Running on Android 34!"<br/>🍎 iOS Screen: "Hello, Running on iOS 17.2!"</p></body></html>`
      }
    },

    // MODULE 4
    {
      id: 'kmm-4-1',
      slug: 'data-classes-null-safety-sealed-classes',
      moduleNumber: 4,
      lessonNumberInModule: 1,
      title: {
        en: '4.1 Data classes, null safety, and sealed classes in KMM',
        km: '៤.១ Data classes, null safety និង sealed classes ក្នុង KMM'
      },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Shared KMM models rely heavily on Kotlin Data Classes for immutable state, Null Safety for compile-time guarantee, and Sealed Classes for type-safe UI result states.',
        km: 'Model ក្នុង KMM ប្រើប្រាស់ Data Classes សម្រាប់ទិន្នន័យ, Null Safety សម្រាប់ការពារ Error និង Sealed Classes សម្រាប់គ្រប់គ្រង UI Result States។'
      },
      tutorial: {
        en: 'sealed class NetworkResult<out T> {\n    data class Success<out T>(val data: T) : NetworkResult<T>()\n    data class Error(val message: String) : NetworkResult<Nothing>()\n    object Loading : NetworkResult<Nothing>()\n}',
        km: 'sealed class NetworkResult<out T> {\n    data class Success<out T>(val data: T) : NetworkResult<T>()\n    data class Error(val message: String) : NetworkResult<Nothing>()\n    object Loading : NetworkResult<Nothing>()\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#c084fc; padding:20px; font-family:monospace;"><h3>4.1 Sealed Result State</h3><p>NetworkResult.Loading | Success | Error</p></body></html>`
      }
    },
    {
      id: 'kmm-4-2',
      slug: 'coroutines-recap-suspend-launch-async',
      moduleNumber: 4,
      lessonNumberInModule: 2,
      title: {
        en: '4.2 Coroutines basics recap: suspend, launch, async',
        km: '៤.២ រំលឹកឡើងវិញពី Coroutines៖ suspend, launch, async'
      },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Kotlin Coroutines form the core asynchronous engine of KMM shared code, allowing non-blocking I/O operations across both Android JVM and iOS Kotlin/Native.',
        km: 'Kotlin Coroutines គឺជាម៉ាស៊ីនដំណើរការ Asynchronous ដើមរបស់ KMM សម្រាប់រត់ Network/Database ដោយមិនអោយកក Screen។'
      },
      tutorial: {
        en: 'suspend fun fetchUserProfile(userId: String): UserProfile {\n    return withContext(Dispatchers.Default) {\n        // Perform network operation\n        UserProfile(id = userId, name = "Sophea")\n    }\n}',
        km: 'suspend fun fetchUserProfile(userId: String): UserProfile {\n    return withContext(Dispatchers.Default) {\n        // Perform network operation\n        UserProfile(id = userId, name = "សុភា")\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#38bdf8; padding:20px; font-family:monospace;"><h3>4.2 Coroutines Engine</h3><p>suspend fun -> Non-blocking Async Dispatch</p></body></html>`
      }
    },
    {
      id: 'kmm-4-3',
      slug: 'kotlin-idioms-in-multiplatform-code',
      moduleNumber: 4,
      lessonNumberInModule: 3,
      title: {
        en: '4.3 Kotlin idioms in multiplatform code (scope & extension functions)',
        km: '៤.៣ Kotlin idioms ក្នុងកូដ Multiplatform (scope & extension functions)'
      },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Utilize scope functions like `let`, `apply`, `run`, and extension functions to keep shared KMM domain logic clean and expressive.',
        km: 'ប្រើប្រាស់ Scope Functions ដូចជា `let`, `apply`, `run` និង Extension Functions ដើម្បីធ្វើឱ្យ Shared Logic មានភាពច្បាស់លាស់ និងស្រស់ស្អាត។'
      },
      tutorial: {
        en: 'fun String.toWeatherIcon(): String = when (this.lowercase()) {\n    "sunny" -> "☀️"\n    "rainy" -> "🌧️"\n    else -> "🌤️"\n}\n\nval icon = response.condition?.toWeatherIcon() ?: "❓"',
        km: 'fun String.toWeatherIcon(): String = when (this.lowercase()) {\n    "sunny" -> "☀️"\n    "rainy" -> "🌧️"\n    else -> "🌤️"\n}\n\nval icon = response.condition?.toWeatherIcon() ?: "❓"'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#22c55e; padding:20px; font-family:monospace;"><h3>4.3 Extension Idioms</h3><p>"sunny".toWeatherIcon() => ☀️</p></body></html>`
      }
    },

    // MODULE 5
    {
      id: 'kmm-5-1',
      slug: 'why-ktor-client-for-shared-networking',
      moduleNumber: 5,
      lessonNumberInModule: 1,
      title: {
        en: '5.1 Why Ktor Client is used for shared networking in KMM',
        km: '៥.១ ហេតុអ្វី Ktor Client ត្រូវប្រើសម្រាប់ Shared Networking ក្នុង KMM'
      },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Ktor Client is Kotlin\'s official multiplatform HTTP client that abstracts underlying network engines (OkHttp on Android, Darwin/NSURLSession on iOS).',
        km: 'Ktor Client ជា HTTP Client ផ្លូវការរបស់ Kotlin ដែលដើរលើ engine ដើមរបស់ platform (OkHttp លើ Android, Darwin លើ iOS)។'
      },
      tutorial: {
        en: '// commonMain dependencies in build.gradle.kts\nimplementation("io.ktor:ktor-client-core:2.3.8")\nimplementation("io.ktor:ktor-client-content-negotiation:2.3.8")\nimplementation("io.ktor:ktor-serialization-kotlinx-json:2.3.8")',
        km: '// commonMain dependencies in build.gradle.kts\nimplementation("io.ktor:ktor-client-core:2.3.8")\nimplementation("io.ktor:ktor-client-content-negotiation:2.3.8")\nimplementation("io.ktor:ktor-serialization-kotlinx-json:2.3.8")'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#c084fc; padding:20px; font-family:monospace;"><h3>5.1 Ktor Engine</h3><p>Android Engine: OkHttp<br/>iOS Engine: Darwin (NSURLSession)</p></body></html>`
      }
    },
    {
      id: 'kmm-5-2',
      slug: 'making-a-get-request-from-commonmain',
      moduleNumber: 5,
      lessonNumberInModule: 2,
      title: {
        en: '5.2 Making a GET request from commonMain',
        km: '៥.២ ការធ្វើ GET request ចេញពី commonMain'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Instantiate `HttpClient`, configure json negotiation, and call `client.get("url").body()` inside a suspend function in `commonMain`.',
        km: 'បង្កើត `HttpClient`, កំណត់ JSON Negotiation ហើយហៅ `client.get("url").body()` ក្នុង Suspend Function ក្នុង `commonMain`។'
      },
      tutorial: {
        en: 'class WeatherApi(private val client: HttpClient) {\n    suspend fun getWeather(city: String): WeatherResponse {\n        return client.get("https://api.weatherapi.com/v1/current.json?q=$city").body()\n    }\n}',
        km: 'class WeatherApi(private val client: HttpClient) {\n    suspend fun getWeather(city: String): WeatherResponse {\n        return client.get("https://api.weatherapi.com/v1/current.json?q=$city").body()\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#38bdf8; padding:20px; font-family:monospace;"><h3>5.2 Ktor GET Request</h3><p>client.get("...") -> Deserialized Object</p></body></html>`
      }
    },
    {
      id: 'kmm-5-3',
      slug: 'parsing-json-responses-with-kotlinx-serialization',
      moduleNumber: 5,
      lessonNumberInModule: 3,
      title: {
        en: '5.3 Parsing JSON responses with kotlinx.serialization',
        km: '៥.៣ ការបំប្លែង JSON Responses ជាមួយ kotlinx.serialization'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: '`kotlinx.serialization` provides multiplatform, reflection-free JSON parsing using `@Serializable` annotations on Kotlin data classes.',
        km: '`kotlinx.serialization` ផ្តល់ការបំប្លែង JSON ដោយមិនប្រើ Reflection តាមរយៈ `@Serializable` annotation លើ Data Classes។'
      },
      tutorial: {
        en: 'import kotlinx.serialization.Serializable\n\n@Serializable\ndata class WeatherResponse(\n    val location: Location,\n    val current: CurrentWeather\n)\n\n@Serializable\ndata class CurrentWeather(\n    val temp_c: Double,\n    val condition: Condition\n)',
        km: 'import kotlinx.serialization.Serializable\n\n@Serializable\ndata class WeatherResponse(\n    val location: Location,\n    val current: CurrentWeather\n)\n\n@Serializable\ndata class CurrentWeather(\n    val temp_c: Double,\n    val condition: Condition\n)'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#22c55e; padding:20px; font-family:monospace;"><h3>5.3 @Serializable DTO</h3><p>JSON String => Strongly Typed Kotlin Data Class</p></body></html>`
      }
    },

    // MODULE 6
    {
      id: 'kmm-6-1',
      slug: 'coroutines-across-platforms',
      moduleNumber: 6,
      lessonNumberInModule: 1,
      title: {
        en: '6.1 Coroutines across platforms (what works the same, what differs)',
        km: '៦.១ Coroutines លើគ្រប់ Platform (អ្វីដែលដូចគ្នា និងអ្វីដែលខុសគ្នា)'
      },
      durationMinutes: 22,
      difficulty: 'Advanced',
      explanation: {
        en: 'While Coroutines run seamlessly on Android JVM, iOS Kotlin/Native previously mandated strict memory immutability rules. Modern Kotlin/Native memory manager simplifies coroutines, making `StateFlow` and `SharedFlow` behave identically across targets.',
        km: 'Coroutines រត់លើ Android JVM បានយ៉ាងរលូន ចំណែកលើ iOS Kotlin/Native ត្រូវប្រើប្រាស់ Memory Manager ទំនើបដើម្បីឱ្យ `StateFlow` និង `SharedFlow` ដើរដូចគ្នា។'
      },
      tutorial: {
        en: 'class WeatherViewModel {\n    private val _state = MutableStateFlow<WeatherUiState>(WeatherUiState.Loading)\n    val state: StateFlow<WeatherUiState> = _state.asStateFlow()\n}',
        km: 'class WeatherViewModel {\n    private val _state = MutableStateFlow<WeatherUiState>(WeatherUiState.Loading)\n    val state: StateFlow<WeatherUiState> = _state.asStateFlow()\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#c084fc; padding:20px; font-family:monospace;"><h3>6.1 Shared StateFlow</h3><p>StateFlow<WeatherUiState> -> Observable on Android & iOS</p></body></html>`
      }
    },
    {
      id: 'kmm-6-2',
      slug: 'dispatchers-in-multiplatform-context',
      moduleNumber: 6,
      lessonNumberInModule: 2,
      title: {
        en: '6.2 Dispatchers in a multiplatform context',
        km: '៦.២ Dispatchers ក្នុងបរិបទ Multiplatform'
      },
      durationMinutes: 20,
      difficulty: 'Advanced',
      explanation: {
        en: '`Dispatchers.Main` maps to Android UI Thread and Apple Main GCD Queue. `Dispatchers.Default` uses background thread pools on both platforms.',
        km: '`Dispatchers.Main` ភ្ជាប់ទៅ Android UI Thread និង iOS Main GCD Queue ហើយ `Dispatchers.Default` ប្រើ Background Threads លើគ្រប់ Platform។'
      },
      tutorial: {
        en: 'suspend fun performBackgroundComputation(): List<Int> = withContext(Dispatchers.Default) {\n    (1..1000).map { it * it }\n}',
        km: 'suspend fun performBackgroundComputation(): List<Int> = withContext(Dispatchers.Default) {\n    (1..1000).map { it * it }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#f59e0b; padding:20px; font-family:monospace;"><h3>6.2 Multiplatform Dispatchers</h3><p>Dispatchers.Main => Main UI Thread<br/>Dispatchers.Default => Background Thread Pool</p></body></html>`
      }
    },
    {
      id: 'kmm-6-3',
      slug: 'exposing-suspend-functions-safely-to-swift',
      moduleNumber: 6,
      lessonNumberInModule: 3,
      title: {
        en: '6.3 Exposing suspend functions safely to Swift/iOS callers',
        km: '៦.៣ ការបង្ហាញ suspend functions ទៅកាន់ Swift/iOS យ៉ាងមានសុវត្ថិភាព'
      },
      durationMinutes: 24,
      difficulty: 'Advanced',
      explanation: {
        en: 'Kotlin `suspend` functions are automatically exported to Swift as async/await functions (iOS 15+) or completion handlers in Objective-C/Swift interop.',
        km: 'Kotlin `suspend` functions ត្រូវបំប្លែងទៅជា Swift `async/await` (iOS 15+) ឬ Completion Handlers ដោយស្វ័យប្រវត្តិ។'
      },
      tutorial: {
        en: '// In Swift (iOS App):\nTask {\n    do {\n        let weather = try await repository.fetchWeather(city: "Phnom Penh")\n        print("Fetched temp: \\(weather.tempC)")\n    } catch {\n        print("Error: \\(error)")\n    }\n}',
        km: '// ក្នុង Swift (iOS App):\nTask {\n    do {\n        let weather = try await repository.fetchWeather(city: "Phnom Penh")\n        print("Fetched temp: \\(weather.tempC)")\n    } catch {\n        print("Error: \\(error)")\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#38bdf8; padding:20px; font-family:monospace;"><h3>6.3 Swift Interop</h3><p>Kotlin suspend fun => Swift async/await try await</p></body></html>`
      }
    },

    // MODULE 7
    {
      id: 'kmm-7-1',
      slug: 'why-sqldelight-for-shared-local-persistence',
      moduleNumber: 7,
      lessonNumberInModule: 1,
      title: {
        en: '7.1 Why SQLDelight is used for shared local persistence',
        km: '៧.១ ហេតុអ្វី SQLDelight ត្រូវប្រើសម្រាប់ Shared Local Persistence'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'SQLDelight reads pure SQL statements from `.sq` schema files and generates type-safe Kotlin APIs that query platform-native SQLite databases.',
        km: 'SQLDelight អានកូដ SQL សុទ្ធពីឯកសារ `.sq` ហើយបង្កើត Type-Safe Kotlin APIs សម្រាប់ហៅប្រើប្រាស់ SQLite Database លើគ្រប់ Platform។'
      },
      tutorial: {
        en: '// build.gradle.kts\nsqldelight {\n    databases {\n        create("AppDatabase") {\n            packageName.set("com.example.weather.db")\n        }\n    }\n}',
        km: '// build.gradle.kts\nsqldelight {\n    databases {\n        create("AppDatabase") {\n            packageName.set("com.example.weather.db")\n        }\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#4ade80; padding:20px; font-family:monospace;"><h3>7.1 SQLDelight ORM</h3><p>.sq SQL File => Generated Typed Kotlin Queries</p></body></html>`
      }
    },
    {
      id: 'kmm-7-2',
      slug: 'defining-sqldelight-schema-and-queries',
      moduleNumber: 7,
      lessonNumberInModule: 2,
      title: {
        en: '7.2 Defining a .sq schema & generated typed queries',
        km: '៧.២ ការកំណត់ .sq schema និង Generated Typed Queries'
      },
      durationMinutes: 24,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Write standard SQL DDL and query statements inside `commonMain/sqldelight/com/example/Weather.sq` to generate Kotlin interface methods automatically.',
        km: 'សរសេរ DDL និង SQL Queries ក្នុងឯកសារ `Weather.sq` ដើម្បីឱ្យ SQLDelight បង្កើត Kotlin Interface Methods ដោយស្វ័យប្រវត្តិ។'
      },
      tutorial: {
        en: '-- Weather.sq\nCREATE TABLE WeatherEntity (\n    city TEXT NOT NULL PRIMARY KEY,\n    tempC REAL NOT NULL,\n    condition TEXT NOT NULL\n);\n\nselectAll:\nSELECT * FROM WeatherEntity;\n\ninsertWeather:\nINSERT OR REPLACE INTO WeatherEntity(city, tempC, condition) VALUES (?, ?, ?);',
        km: '-- Weather.sq\nCREATE TABLE WeatherEntity (\n    city TEXT NOT NULL PRIMARY KEY,\n    tempC REAL NOT NULL,\n    condition TEXT NOT NULL\n);\n\nselectAll:\nSELECT * FROM WeatherEntity;\n\ninsertWeather:\nINSERT OR REPLACE INTO WeatherEntity(city, tempC, condition) VALUES (?, ?, ?);'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#c084fc; padding:20px; font-family:monospace;"><h3>7.2 SQL Schema File</h3><p>CREATE TABLE WeatherEntity ...<br/>selectAll: SELECT * FROM WeatherEntity;</p></body></html>`
      }
    },
    {
      id: 'kmm-7-3',
      slug: 'reading-writing-data-from-shared-code',
      moduleNumber: 7,
      lessonNumberInModule: 3,
      title: {
        en: '7.3 Reading and writing data from shared code on both platforms',
        km: '៧.៣ ការអាន និងសរសេរទិន្នន័យពី Shared Code លើ Platform ទាំងពីរ'
      },
      durationMinutes: 24,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Instantiate `AppDatabase` with `AndroidSqliteDriver` on Android and `NativeSqliteDriver` on iOS to read/write persistent offline cache seamlessly.',
        km: 'បង្កើត `AppDatabase` ដោយប្រើ `AndroidSqliteDriver` លើ Android និង `NativeSqliteDriver` លើ iOS សម្រាប់អាន និងរក្សាទុក Offline Data។'
      },
      tutorial: {
        en: 'class LocalWeatherDataSource(database: AppDatabase) {\n    private val queries = database.weatherQueries\n\n    fun getCachedWeather(): List<WeatherEntity> {\n        return queries.selectAll().executeAsList()\n    }\n\n    fun saveWeather(city: String, tempC: Double, condition: String) {\n        queries.insertWeather(city, tempC, condition)\n    }\n}',
        km: 'class LocalWeatherDataSource(database: AppDatabase) {\n    private val queries = database.weatherQueries\n\n    fun getCachedWeather(): List<WeatherEntity> {\n        return queries.selectAll().executeAsList()\n    }\n\n    fun saveWeather(city: String, tempC: Double, condition: String) {\n        queries.insertWeather(city, tempC, condition)\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#38bdf8; padding:20px; font-family:monospace;"><h3>7.3 Local SQLite Persistence</h3><p>queries.insertWeather(...) -> Persistent Local Storage</p></body></html>`
      }
    },

    // MODULE 8
    {
      id: 'kmm-8-1',
      slug: 'why-dependency-injection-matters-in-kmm',
      moduleNumber: 8,
      lessonNumberInModule: 1,
      title: {
        en: '8.1 Why DI matters in a shared-logic architecture',
        km: '៨.១ ហេតុអ្វី Dependency Injection មានសារៈសំខាន់ក្នុង KMM'
      },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Dependency Injection (DI) allows shared modules to receive platform-specific implementations (drivers, engines, context) cleanly without hardcoding dependencies.',
        km: 'Dependency Injection (DI) ជួយឱ្យ Shared Modules ទទួលបាន Platform Implementations (Drivers, Context) ដោយមិនបាច់សរសេរ Hardcode។'
      },
      tutorial: {
        en: '// Without DI: Tight coupling, hard to test\n// With DI (Koin): Clean injection across commonMain, androidMain, and iosMain',
        km: '// គ្មាន DI: កូដជាន់គ្នា ពិបាកធ្វើ Test\n// មាន DI (Koin): Inject Dependencies បានស្អាតលើគ្រប់ Platform'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#22c55e; padding:20px; font-family:monospace;"><h3>8.1 Koin DI Benefits</h3><p>Decoupled Architecture • Easy Mocking • Multiplatform Ready</p></body></html>`
      }
    },
    {
      id: 'kmm-8-2',
      slug: 'setting-up-koin-modules-in-commonmain',
      moduleNumber: 8,
      lessonNumberInModule: 2,
      title: {
        en: '8.2 Setting up Koin modules in commonMain',
        km: '៨.២ ការកំណត់ Koin modules ក្នុង commonMain'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Koin is a lightweight Kotlin-native DI framework. Declare `commonModule` containing singletons for HttpClient, Database, and Repositories in `commonMain`.',
        km: 'Koin ជា DI Framework ស្រាលសម្រាប់ Kotlin។ កំណត់ `commonModule` សម្រាប់ប្រកាស Singletons នៃ HttpClient, Database និង Repositories។'
      },
      tutorial: {
        en: 'import org.koin.dsl.module\n\nval commonModule = module {\n    single { HttpClient() }\n    single { WeatherApi(get()) }\n    single { WeatherRepository(get(), get()) }\n}\n\nfun initKoin() = startKoin {\n    modules(commonModule)\n}',
        km: 'import org.koin.dsl.module\n\nval commonModule = module {\n    single { HttpClient() }\n    single { WeatherApi(get()) }\n    single { WeatherRepository(get(), get()) }\n}\n\nfun initKoin() = startKoin {\n    modules(commonModule)\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#c084fc; padding:20px; font-family:monospace;"><h3>8.2 Koin Module Definition</h3><p>val commonModule = module { single { ... } }</p></body></html>`
      }
    },
    {
      id: 'kmm-8-3',
      slug: 'injecting-shared-dependencies-into-native-ui',
      moduleNumber: 8,
      lessonNumberInModule: 3,
      title: {
        en: '8.3 Injecting shared dependencies into platform-specific UI code',
        km: '៨.៣ ការ Inject shared dependencies ទៅកាន់ Native UI Code'
      },
      durationMinutes: 24,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Initialize Koin in Android `Application.onCreate()` with Android Context, and call `KoinKt.doInitKoin()` in Swift `App.init()` when launching iOS.',
        km: 'Start Koin ក្នុង Android `Application.onCreate()` ជាមួយ Android Context ហើយហៅ `doInitKoin()` ក្នុង Swift `App.init()` ពេលបើក App iOS។'
      },
      tutorial: {
        en: '// Android Application.kt:\nclass MainApplication : Application() {\n    override fun onCreate() {\n        super.onCreate()\n        startKoin {\n            androidContext(this@MainApplication)\n            modules(commonModule, androidModule)\n        }\n    }\n}\n\n// iOS iOSApp.swift:\n@main\nstruct iOSApp: App {\n    init() {\n        KoinKt.doInitKoin()\n    }\n}',
        km: '// Android Application.kt:\nclass MainApplication : Application() {\n    override fun onCreate() {\n        super.onCreate()\n        startKoin {\n            androidContext(this@MainApplication)\n            modules(commonModule, androidModule)\n        }\n    }\n}\n\n// iOS iOSApp.swift:\n@main\nstruct iOSApp: App {\n    init() {\n        KoinKt.doInitKoin()\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#f59e0b; padding:20px; font-family:monospace;"><h3>8.3 Application Launch DI</h3><p>Android: startKoin { androidContext(...) }<br/>iOS: KoinKt.doInitKoin()</p></body></html>`
      }
    },

    // MODULE 9
    {
      id: 'kmm-9-1',
      slug: 'calling-shared-kotlin-from-jetpack-compose',
      moduleNumber: 9,
      lessonNumberInModule: 1,
      title: {
        en: '9.1 Calling shared Kotlin code from Jetpack Compose (Android)',
        km: '៩.១ ការហៅ Shared Kotlin Code ពី Jetpack Compose (Android)'
      },
      durationMinutes: 24,
      difficulty: 'Intermediate',
      explanation: {
        en: 'In Android, shared KMM classes are directly accessible as standard Kotlin classes. Use `collectAsState()` in Compose to observe shared `StateFlow`.',
        km: 'លើ Android, KMM shared classes អាចហៅប្រើបានដូចកូដ Kotlin ធម្មតា។ ប្រើ `collectAsState()` ក្នុង Compose ដើម្បីតាមដាន Shared `StateFlow`។'
      },
      tutorial: {
        en: '@Composable\nfun WeatherScreen(viewModel: WeatherViewModel = koinViewModel()) {\n    val uiState by viewModel.state.collectAsState()\n\n    when (val state = uiState) {\n        is WeatherUiState.Loading -> CircularProgressIndicator()\n        is WeatherUiState.Success -> Text("Temp: ${state.data.tempC}°C")\n        is WeatherUiState.Error -> Text("Error: ${state.message}")\n    }\n}',
        km: '@Composable\nfun WeatherScreen(viewModel: WeatherViewModel = koinViewModel()) {\n    val uiState by viewModel.state.collectAsState()\n\n    when (val state = uiState) {\n        is WeatherUiState.Loading -> CircularProgressIndicator()\n        is WeatherUiState.Success -> Text("Temp: ${state.data.tempC}°C")\n        is WeatherUiState.Error -> Text("Error: ${state.message}")\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#38bdf8; padding:20px; font-family:monospace;"><h3>9.1 Android Jetpack Compose UI</h3><p>val uiState by viewModel.state.collectAsState()<br/>Render Native Compose UI Components</p></body></html>`
      }
    },
    {
      id: 'kmm-9-2',
      slug: 'calling-shared-kotlin-from-swiftui',
      moduleNumber: 9,
      lessonNumberInModule: 2,
      title: {
        en: '9.2 Calling shared Kotlin code from SwiftUI (iOS) via framework',
        km: '៩.២ ការហៅ Shared Kotlin Code ពី SwiftUI (iOS) តាមរយៈ Framework'
      },
      durationMinutes: 26,
      difficulty: 'Advanced',
      explanation: {
        en: 'Import `shared` framework into SwiftUI, create an `ObservableObject` wrapper class in Swift, and observe Kotlin `StateFlow` using async stream or Combine.',
        km: 'Import `shared` framework ចូលក្នុង SwiftUI, បង្កើត `ObservableObject` ក្នុង Swift ហើយតាមដាន Kotlin `StateFlow` លើ iOS UI។'
      },
      tutorial: {
        en: '// iOS SwiftUI View:\nimport SwiftUI\nimport shared\n\nstruct WeatherView: View {\n    @StateObject var viewModel = iOSWeatherViewModel()\n\n    var body: some View {\n        VStack {\n            if let weather = viewModel.weather {\n                Text("Temp: \\(weather.tempC)°C")\n                    .font(.largeTitle)\n            } else {\n                ProgressView()\n            }\n        }\n    }\n}',
        km: '// iOS SwiftUI View:\nimport SwiftUI\nimport shared\n\nstruct WeatherView: View {\n    @StateObject var viewModel = iOSWeatherViewModel()\n\n    var body: some View {\n        VStack {\n            if let weather = viewModel.weather {\n                Text("Temp: \\(weather.tempC)°C")\n                    .font(.largeTitle)\n            } else {\n                ProgressView()\n            }\n        }\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#4ade80; padding:20px; font-family:monospace;"><h3>9.2 iOS SwiftUI Screen</h3><p>import shared -> SwiftUI Native @StateObject Rendering</p></body></html>`
      }
    },
    {
      id: 'kmm-9-3',
      slug: 'idiomatic-native-ui-with-shared-logic',
      moduleNumber: 9,
      lessonNumberInModule: 3,
      title: {
        en: '9.3 Keeping platform UI idiomatic while sharing only logic',
        km: '៩.៣ ការរក្សាទម្រង់ UI តាមរចនាប័ទ្ម Native ដោយចែករំលែកតែ Business Logic'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'The classic KMM pattern focuses on sharing 100% of business logic, networks, and databases while crafting 100% platform-native UI (Material 3 on Android, Human Interface Guidelines on iOS).',
        km: 'ទម្រង់ KMM បុរាណផ្តោតលើការចែករំលែក Business Logic 100% ប៉ុន្តែរចនា UI តាមស្តង់ដារ Native ផ្ទាល់ខ្លួន (Material 3 លើ Android, HIG លើ iOS)។'
      },
      tutorial: {
        en: '// Architecture Rule:\n// Shared Layer: Models, UseCases, Repositories, Networking, DB\n// Android Native: Jetpack Compose, Material3, Navigation\n// iOS Native: SwiftUI, NavigationStack, SF Symbols',
        km: '// វិធានរចនាសម្ព័ន្ធ:\n// Shared Layer: Models, UseCases, Repositories, Networking, DB\n// Android Native: Jetpack Compose, Material3, Navigation\n// iOS Native: SwiftUI, NavigationStack, SF Symbols'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#c084fc; padding:20px; font-family:monospace;"><h3>9.3 Idiomatic UI Pattern</h3><p>🤖 Material 3 Cards & FAB (Android)<br/>🍎 NavigationStack & SF Symbols (iOS)</p></body></html>`
      }
    },

    // MODULE 10
    {
      id: 'kmm-10-1',
      slug: 'what-is-compose-multiplatform',
      moduleNumber: 10,
      lessonNumberInModule: 1,
      title: {
        en: '10.1 What Compose Multiplatform adds on top of KMM',
        km: '១០.១ អ្វីដែល Compose Multiplatform បន្ថែមលើ KMM'
      },
      durationMinutes: 22,
      difficulty: 'Advanced',
      explanation: {
        en: 'Compose Multiplatform extends Jetpack Compose beyond Android to iOS, Desktop, and Web — allowing developers to share UI code in addition to business logic.',
        km: 'Compose Multiplatform ពង្រីក Jetpack Compose ឱ្យដើរលើ iOS, Desktop និង Web — អនុញ្ញាតឱ្យចែករំលែក UI ព្រមជាមួយ Business Logic។'
      },
      tutorial: {
        en: '// commonMain UI in Compose Multiplatform:\n@Composable\nfun AppUI() {\n    MaterialTheme {\n        Surface {\n            Text("Shared UI running on Android & iOS!")\n        }\n    }\n}',
        km: '// commonMain UI in Compose Multiplatform:\n@Composable\nfun AppUI() {\n    MaterialTheme {\n        Surface {\n            Text("Shared UI រត់លើ Android & iOS!")\n        }\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#38bdf8; padding:20px; font-family:monospace;"><h3>10.1 Compose Multiplatform</h3><p>Share Business Logic + Share UI Layouts in Kotlin!</p></body></html>`
      }
    },
    {
      id: 'kmm-10-2',
      slug: 'simple-shared-ui-screen-android-ios',
      moduleNumber: 10,
      lessonNumberInModule: 2,
      title: {
        en: '10.2 A simple shared UI screen written once, run on Android and iOS',
        km: '១០.២ អេក្រង់ UI រួមមួយសរសេរតែម្តង រត់លើ Android និង iOS'
      },
      durationMinutes: 26,
      difficulty: 'Advanced',
      explanation: {
        en: 'Build a weather card component in `commonMain` using `@Composable` controls and embed it inside Android `setContent` and iOS `UIViewControllerRepresentable`.',
        km: 'បង្កើត Weather Card ក្នុង `commonMain` ដោយប្រើ `@Composable` រួចយកទៅដាក់ក្នុង Android `setContent` និង iOS `UIViewControllerRepresentable`។'
      },
      tutorial: {
        en: '@Composable\nfun WeatherCard(city: String, tempC: Double) {\n    Card(modifier = Modifier.padding(16.dp)) {\n        Column(modifier = Modifier.padding(16.dp)) {\n            Text(text = city, style = MaterialTheme.typography.titleLarge)\n            Text(text = "$tempC°C", style = MaterialTheme.typography.headlineMedium)\n        }\n    }\n}',
        km: '@Composable\nfun WeatherCard(city: String, tempC: Double) {\n    Card(modifier = Modifier.padding(16.dp)) {\n        Column(modifier = Modifier.padding(16.dp)) {\n            Text(text = city, style = MaterialTheme.typography.titleLarge)\n            Text(text = "$tempC°C", style = MaterialTheme.typography.headlineMedium)\n        }\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#22c55e; padding:20px; font-family:monospace;"><h3>10.2 Shared UI Screen</h3><p>Compose @Composable renders identically on Skia/UIKit iOS & Android</p></body></html>`
      }
    },
    {
      id: 'kmm-10-3',
      slug: 'native-ui-vs-compose-multiplatform-tradeoffs',
      moduleNumber: 10,
      lessonNumberInModule: 3,
      title: {
        en: '10.3 Native UI vs. Compose Multiplatform (honest trade-off discussion)',
        km: '១០.៣ Native UI vs. Compose Multiplatform (ការប្រៀបធៀបគុណសម្បត្តិ និងគុណវិបត្តិ)'
      },
      durationMinutes: 20,
      difficulty: 'Advanced',
      explanation: {
        en: 'Choose Classic KMM (Native UI) for maximum Apple HIG compliance and platform familiarity. Choose Compose Multiplatform for maximum speed, smaller dev team size, and 95%+ code sharing.',
        km: 'ជ្រើសរើស Classic KMM (Native UI) សម្រាប់ App ដែលត្រូវការស្ទីល Apple HIG សុទ្ធ។ ជ្រើសរើស Compose Multiplatform សម្រាប់ល្បឿនអភិវឌ្ឍន៍លឿន និងចែករំលែកកូដរហូតដល់ ៩៥%+។'
      },
      tutorial: {
        en: '// Trade-off Summary:\n// Classic KMM: Shared Logic (60-80%) + SwiftUI/Compose Native UI (High UX fidelity)\n// Compose Multiplatform: Shared Logic + Shared UI (85-95%) (Unmatched Dev Velocity)',
        km: '// សេចក្តីសង្ខេប:\n// Classic KMM: Shared Logic (60-80%) + SwiftUI/Compose Native UI (UX ស្តង់ដារខ្ពស់)\n// Compose Multiplatform: Shared Logic + Shared UI (85-95%) (អភិវឌ្ឍន៍លឿនបំផុត)'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#f59e0b; padding:20px; font-family:monospace;"><h3>10.3 Architecture Decision</h3><p>Native UI: Maximum Platform Fidelity<br/>Compose MP: Maximum Engineering Speed</p></body></html>`
      }
    },

    // MODULE 11
    {
      id: 'kmm-11-1',
      slug: 'writing-unit-tests-in-commonmain',
      moduleNumber: 11,
      lessonNumberInModule: 1,
      title: {
        en: '11.1 Writing unit tests in commonMain that run on both platforms',
        km: '១១.១ ការសរសេរ unit tests ក្នុង commonMain ដែលរត់លើ Platform ទាំងពីរ'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Write unit tests once in `commonTest` using `kotlin.test` assertions (`assertEquals`, `assertTrue`). Gradle executes them on JVM and iOS Simulator targets.',
        km: 'សរសេរ Unit Tests តែម្តងក្នុង `commonTest` ដោយប្រើ `kotlin.test` (`assertEquals`, `assertTrue`)។ Gradle នឹងរត់ Tests លើ JVM និង iOS Simulator។'
      },
      tutorial: {
        en: 'import kotlin.test.Test\nimport kotlin.test.assertEquals\n\nclass WeatherRepositoryTest {\n    @Test\n    fun testTemperatureConversion() {\n        val celsius = 30.0\n        val fahrenheit = celsius * 9 / 5 + 32\n        assertEquals(86.0, fahrenheit)\n    }\n}',
        km: 'import kotlin.test.Test\nimport kotlin.test.assertEquals\n\nclass WeatherRepositoryTest {\n    @Test\n    fun testTemperatureConversion() {\n        val celsius = 30.0\n        val fahrenheit = celsius * 9 / 5 + 32\n        assertEquals(86.0, fahrenheit)\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#22c55e; padding:20px; font-family:monospace;"><h3>11.1 commonTest Suite</h3><p>✓ testTemperatureConversion PASSED (JVM)<br/>✓ testTemperatureConversion PASSED (iOS Arm64)</p></body></html>`
      }
    },
    {
      id: 'kmm-11-2',
      slug: 'mocking-platform-dependencies-for-tests',
      moduleNumber: 11,
      lessonNumberInModule: 2,
      title: {
        en: '11.2 Mocking platform-specific dependencies for tests',
        km: '១១.២ ការធ្វើ Mock platform dependencies សម្រាប់ការធ្វើតេស្ត'
      },
      durationMinutes: 22,
      difficulty: 'Advanced',
      explanation: {
        en: 'Use fake repository implementations or MockEngine in Ktor Client to simulate network responses and errors inside `commonTest` without making real network requests.',
        km: 'ប្រើប្រាស់ Fake Repositories ឬ MockEngine ក្នុង Ktor Client ដើម្បីធ្វើតេស្តរាល់ស្ថានភាព Network ដោយមិនបាច់តភ្ជាប់ Internet ពិត។'
      },
      tutorial: {
        en: 'val mockEngine = MockEngine { request ->\n    respond(\n        content = """{"temp_c": 32.0, "condition": "Sunny"}""",\n        status = HttpStatusCode.OK,\n        headers = headersOf(HttpHeaders.ContentType, "application/json")\n    )\n}\nval mockClient = HttpClient(mockEngine) { install(ContentNegotiation) { json() } }',
        km: 'val mockEngine = MockEngine { request ->\n    respond(\n        content = """{"temp_c": 32.0, "condition": "Sunny"}""",\n        status = HttpStatusCode.OK,\n        headers = headersOf(HttpHeaders.ContentType, "application/json")\n    )\n}\nval mockClient = HttpClient(mockEngine) { install(ContentNegotiation) { json() } }'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#c084fc; padding:20px; font-family:monospace;"><h3>11.2 Ktor MockEngine</h3><p>Simulate 200 OK & 500 Error Responses in Tests</p></body></html>`
      }
    },
    {
      id: 'kmm-11-3',
      slug: 'running-the-shared-test-suite',
      moduleNumber: 11,
      lessonNumberInModule: 3,
      title: {
        en: '11.3 Running the shared test suite',
        km: '១១.៣ ការរត់តេស្ត shared test suite ទាំងអស់'
      },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Execute `./gradlew allTests` or `./gradlew desktopTest` from terminal or Android Studio gutter buttons to verify cross-platform correctness before publishing.',
        km: 'រត់បញ្ជា `./gradlew allTests` ក្នុង Terminal ឬចុចប៊ូតុង Run ក្នុង Android Studio ដើម្បីបញ្ជាក់ថាគ្រប់ Test ដើរត្រឹមត្រូវលើគ្រប់ Platform។'
      },
      tutorial: {
        en: '// Terminal Commands:\n./gradlew allTests            # Runs tests on all targets\n./gradlew androidUnitTest     # Runs JVM unit tests\n./gradlew iosSimulatorArm64Test # Runs iOS simulator native tests',
        km: '// បញ្ជា Terminal:\n./gradlew allTests            # រត់តេស្តលើគ្រប់ target\n./gradlew androidUnitTest     # រត់តេស្តលើ JVM\n./gradlew iosSimulatorArm64Test # រត់តេស្តលើ iOS simulator'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#4ade80; padding:20px; font-family:monospace;"><h3>11.3 Test Suite Execution</h3><p>BUILD SUCCESSFUL in 12s<br/>33 actionable tasks: 33 executed</p></body></html>`
      }
    }
  ]
};
