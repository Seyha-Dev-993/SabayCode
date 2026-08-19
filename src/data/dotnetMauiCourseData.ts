import { MobileCourse } from './mobileCoursesHubData';

export const DOTNET_MAUI_COURSE_DATA: MobileCourse = {
  id: 'dotnet-maui',
  title: {
    en: '.NET MAUI — Cross-Platform Mobile & Desktop (C#)',
    km: 'វគ្គសិក្សា .NET MAUI — កម្មវិធីទូរស័ព្ទដៃ និង Desktop (C#)'
  },
  iconName: 'dotnet-maui',
  type: 'framework',
  parentLanguageId: 'csharp',
  categoryId: 'frameworks',
  difficulty: 'Intermediate',
  shortDescription: {
    en: 'Build cross-platform mobile and desktop apps for iOS, Android, macOS, and Windows using C# and .NET 8/9.',
    km: 'បង្កើត កម្មវិធីទូរស័ព្ទដៃ និង Desktop Apps (iOS, Android, Windows, Mac) ដោយប្រើ C# & .NET 8/9។'
  },
  summary: {
    en: '.NET MAUI (.NET Multi-platform App UI) is Microsoft\'s official modern framework for building native cross-platform applications across iOS, Android, macOS, and Windows from a single shared C# codebase. It evolves Xamarin.Forms into a streamlined Single Project structure, enabling enterprise developers and C# programmers to leverage XAML, modern C# 12 features, MVVM architecture, and native device APIs without managing platform-specific projects separately. This course teaches you everything required to architect, style, navigate, connect to REST APIs, store data with SQLite, and ship production-ready apps.',
    km: '.NET MAUI (.NET Multi-platform App UI) គឺជា Framework ផ្លូវការរបស់ Microsoft សម្រាប់បង្កើត Native Applications ឆ្លង Platform (iOS, Android, macOS, និង Windows) ចេញពី C# Codebase តែមួយ។ វាជាការអភិវឌ្ឍបន្តពី Xamarin.Forms ដោយប្រើប្រាស់ Single Project Structure ដែលអនុញ្ញាតឱ្យ Developers ប្រើប្រាស់ XAML, ភាសា C# 12, MVVM Architecture, និង Native APIs បានយ៉ាងងាយស្រួល។ វគ្គសិក្សានេះនឹងបង្រៀនអ្នកពីការរចនា UI, Navigation, ភ្ជាប់ REST APIs, សរសេរ SQLite Database និងការ Build App សម្រាប់ប្រព័ន្ធប្រតិបត្តិការទាំងអស់។'
  },
  estimatedHours: 30,
  lessonCount: 32,
  usedFor: 'Cross-platform Mobile (iOS/Android) & Desktop (Windows/Mac) Apps, Enterprise Systems, POS Systems, Healthcare & Logistics Tools',
  realWorldApps: ['UPS Logistics App', 'Enterprise POS Tools', 'Healthcare Patient Portals', 'Microsoft Internal Tools', 'Azure Management Apps'],
  prerequisites: {
    en: 'Prerequisite: C# fundamentals (classes, interfaces, async/await, LINQ) is recommended.',
    km: 'តម្រូវការជាមុន៖ ចេះមូលដ្ឋានគ្រឹះនៃភាសា C# (classes, interfaces, async/await, LINQ)។'
  },
  whatYouWillLearn: {
    en: [
      'Master .NET MAUI Single Project architecture (Platforms, Resources, AppShell)',
      'Design clean UI layouts using XAML (Grid, FlexLayout, StackLayout, ScrollView)',
      'Implement the MVVM pattern with CommunityToolkit.Mvvm source generators',
      'Handle data binding with ObservableProperty, ICommand, and AsyncRelayCommand',
      'Build AppShell navigation with TabBar, Flyout, and URI-based route parameters',
      'Style apps using DynamicResource, Setter, and automatic Light/Dark mode themes',
      'Fetch REST API data using HttpClient, System.Text.Json, and handling offline errors',
      'Store local data using Preferences, SecureStorage, and SQLite-net-pcl ORM',
      'Access native hardware features (Camera, Geolocation, DeviceInfo, Connectivity)',
      'Write unit tests for ViewModels with xUnit and Moq',
      'Build a complete cross-platform Inventory & POS Scanner capstone application'
    ],
    km: [
      'ស្ទាត់ជំនាញរចនាសម្ព័ន្ធ Single Project របស់ .NET MAUI (Platforms, Resources, AppShell)',
      'រចនា UI ស្អាតបាតដោយប្រើ XAML (Grid, FlexLayout, StackLayout, ScrollView)',
      'អនុវត្ត MVVM Pattern ដោយប្រើប្រាស់ CommunityToolkit.Mvvm Source Generators',
      'គ្រប់គ្រង Data Binding ជាមួយ ObservableProperty, ICommand, និង AsyncRelayCommand',
      'សាងសង់ AppShell Navigation ជាមួយ TabBar, Flyout, និង Route Parameters',
      'តុបតែង App ដោយប្រើប្រាស់ DynamicResource, Styles, និង Light/Dark Mode',
      'ទាញយកទិន្នន័យពី REST API ជាមួយ HttpClient និង System.Text.Json',
      'រក្សាទុកទិន្នន័យ Offline ដោយប្រើប្រាស់ Preferences, SecureStorage, និង SQLite',
      'ប្រើប្រាស់ Native Device APIs (Camera, Geolocation, DeviceInfo, Connectivity)',
      'សរសេរ Unit Tests សម្រាប់ ViewModels ដោយប្រើប្រាស់ xUnit',
      'សាងសង់ Capstone App គ្រប់គ្រងស្តុកទំនិញ Inventory & POS Scanner App'
    ]
  },
  toolsAndSetup: {
    en: '1. Install Visual Studio 2022 (v17.8+) with the ".NET Multi-platform App UI development" workload enabled.\n2. On macOS, install Visual Studio Code with the .NET MAUI extension & Xcode.\n3. Install Android SDK & Android Emulator via Visual Studio SDK Manager.\n4. Verify setup by running `dotnet workload list` in your terminal.',
    km: '១. ដំឡើង Visual Studio 2022 ជាមួយ Workload ".NET Multi-platform App UI development"\n២. លើ macOS ដំឡើង VS Code ជាមួយ .NET MAUI Extension & Xcode\n៣. ដំឡើង Android SDK & Emulator តាមរយៈ Visual Studio SDK Manager\n៤. ពិនិត្យមើល Setup ដោយរត់ `dotnet workload list` ក្នុង Terminal'
  },
  cheatSheet: [
    {
      concept: 'XAML Data Binding',
      code: '<Label Text="{Binding Product.Name}"\n       FontSize="18"\n       TextColor="{AppThemeBinding Light=#000000, Dark=#FFFFFF}" />\n<Button Text="Add to Cart"\n        Command="{Binding AddToCartCommand}"\n        CommandParameter="{Binding Product}" />',
      explanation: {
        en: 'Binds UI controls directly to ViewModel properties and commands with automatic theme color support.',
        km: 'ភ្ជាប់ UI Control ផ្ទាល់ទៅកាន់ Property និង Command របស់ ViewModel ជាមួយការប្តូរពណ៌ Theme ដោយស្វ័យប្រវត្តិ។'
      }
    },
    {
      concept: 'CommunityToolkit MVVM ObservableProperty',
      code: 'public partial class ProductViewModel : ObservableObject\n{\n    [ObservableProperty]\n    private string _title;\n\n    [RelayCommand]\n    private async Task SaveAsync()\n    {\n        // Automatically generates Title property and SaveCommand\n    }\n}',
      explanation: {
        en: '[ObservableProperty] source generators automatically create INotifyPropertyChanged properties and RelayCommands.',
        km: 'Source Generator [ObservableProperty] បង្កើត Property និង Command ស្វ័យប្រវត្តិដើម្បីកាត់បន្ថយកូដដដែលៗ។'
      }
    },
    {
      concept: 'Shell URI Navigation with Parameters',
      code: '// Shell.Current.GoToAsync Navigation\nawait Shell.Current.GoToAsync($"productdetails?id={product.Id}", new Dictionary<string, object>\n{\n    ["SelectedProduct"] = product\n});',
      explanation: {
        en: 'Shell GoToAsync performs route-based asynchronous navigation with optional parameter dictionaries.',
        km: 'Shell GoToAsync ធ្វើការប្តូរ Page តាម Route Path ព្រមទាំងអាចផ្ញើ Parameters/Objects ទៅជាមួយបាន។'
      }
    },
    {
      concept: 'SQLite Local Database ORM',
      code: 'var db = new SQLiteAsyncConnection(dbPath);\nawait db.CreateTableAsync<InventoryItem>();\nvar items = await db.Table<InventoryItem>().Where(x => x.Quantity < 5).ToListAsync();',
      explanation: {
        en: 'SQLiteAsyncConnection provides asynchronous local database persistence using C# object-relational mapping.',
        km: 'SQLiteAsyncConnection ផ្តល់ការរក្សាទុកទិន្នន័យលើ Local SQLite Database បែប Async ដោយប្រើ C# Model Classes។'
      }
    }
  ],
  quiz: [
    {
      id: 'q-maui-1',
      question: {
        en: 'What major architectural improvement does .NET MAUI introduce over legacy Xamarin.Forms?',
        km: 'តើ ការវិវត្តផ្នែក Architecture ដ៏ធំអ្វីខ្លះដែល .NET MAUI នាំមកជំនួស Xamarin.Forms ចាស់?'
      },
      options: [
        { id: '1', text: { en: 'Single Project structure managing iOS, Android, Mac, and Windows in one root folder', km: 'រចនាសម្ព័ន្ធ Single Project ដែលគ្រប់គ្រង platforms ទាំងអស់ក្នុង Folder តែមួយ' }, isCorrect: true },
        { id: '2', text: { en: 'Requirement to write separate HTML files for each OS target', km: 'តម្រូវឱ្យសរសេរ HTML ផ្សេងគ្នាសម្រាប់ OS នីមួយៗ' }, isCorrect: false },
        { id: '3', text: { en: 'Dropping support for Android devices completely', km: 'លុបចោលការ Support លើ Android Devices ទាំងស្រុង' }, isCorrect: false }
      ],
      explanation: {
        en: '.NET MAUI uses a unified Single Project approach where platforms reside inside a Platforms folder, sharing resources globally.',
        km: '.NET MAUI ប្រើប្រាស់ Single Project តែមួយដោយរួមបញ្ចូល Platform code ក្នុង Folder Platforms/ និងចែករំលែក Resource រួមគ្នា។'
      }
    },
    {
      id: 'q-maui-2',
      question: {
        en: 'Which MVVM library toolkit is recommended by Microsoft for .NET MAUI source generation?',
        km: 'តើ MVVM Library Toolkit មួយណាដែល Microsoft ណែនាំសម្រាប់ប្រើប្រាស់ក្នុង .NET MAUI?'
      },
      options: [
        { id: '1', text: { en: 'CommunityToolkit.Mvvm', km: 'CommunityToolkit.Mvvm' }, isCorrect: true },
        { id: '2', text: { en: 'jQuery Mobile', km: 'jQuery Mobile' }, isCorrect: false },
        { id: '3', text: { en: 'React Native Bridge', km: 'React Native Bridge' }, isCorrect: false }
      ],
      explanation: {
        en: 'CommunityToolkit.Mvvm uses C# source generators ([ObservableProperty], [RelayCommand]) to eliminate boilerplate code.',
        km: 'CommunityToolkit.Mvvm ប្រើ C# Source Generators ដើម្បីបង្កើត Property និង Command ស្វ័យប្រវត្តិ។'
      }
    },
    {
      id: 'q-maui-3',
      question: {
        en: 'Which XAML layout control should be used when placing items in flexible rows and columns?',
        km: 'តើ Layout Control មួយណា ក្នុង XAML ដែលត្រូវប្រើប្រាស់សម្រាប់រៀបចំ Element ជាជួរដេក និងជួរឈរ?'
      },
      options: [
        { id: '1', text: { en: 'Grid', km: 'Grid' }, isCorrect: true },
        { id: '2', text: { en: 'HorizontalStackLayout', km: 'HorizontalStackLayout' }, isCorrect: false },
        { id: '3', text: { en: 'AbsoluteLayout', km: 'AbsoluteLayout' }, isCorrect: false }
      ],
      explanation: {
        en: 'Grid layout allows defining RowDefinitions and ColumnDefinitions with star (*), auto, or absolute sizes.',
        km: 'Grid អនុញ្ញាតឱ្យកំណត់ RowDefinitions និង ColumnDefinitions សម្រាប់រៀបចំ UI យ៉ាងមានរបៀប។'
      }
    }
  ],
  capstoneProject: {
    title: {
      en: '.NET MAUI Cross-Platform POS & Stock Scanner App',
      km: 'កម្មវិធីគណនាប្រាក់ និងគ្រប់គ្រងស្តុក .NET MAUI Cross-Platform POS & Scanner'
    },
    description: {
      en: 'Build a full-featured Point of Sale (POS) & Inventory Scanner app running across Android, iOS, and Windows. Features product catalog, XAML custom cards, CommunityToolkit MVVM ViewModels, local SQLite caching, barcode search simulation, cart item quantity management, and receipt generator.',
      km: 'សាងសង់កម្មវិធី Point of Sale (POS) & ស្តុកទំនិញដែលដើរលើ Android, iOS, Windows និង Mac។ មានមុខងារ Catalog, XAML custom cards, CommunityToolkit ViewModels, SQLite local cache, ការស្វែងរកទំនិញ, ការគណនាប្រាក់ និងការចេញវិក្កយបត្រ។'
    },
    featureChecklist: {
      en: [
        'Single Project structure with AppShell Navigation & Bottom TabBar',
        'XAML Grid & CollectionView with dynamic Light/Dark mode styling',
        'MVVM ViewModels powered by ObservableObject & ObservableCollection',
        'SQLiteAsyncConnection database for offline product stock management',
        'REST API integration with HttpClient & System.Text.Json',
        'Interactive Shopping Cart & Stock adjustment controls'
      ],
      km: [
        'រចនាសម្ព័ន្ធ Single Project ជាមួយ AppShell Navigation & Bottom TabBar',
        'XAML Grid & CollectionView គាំទ្រ Light/Dark mode ស្វ័យប្រវត្តិ',
        'MVVM ViewModels ដើរដោយ ObservableObject & ObservableCollection',
        'SQLiteAsyncConnection សម្រាប់រក្សាទុកទិន្នន័យស្តុក Offline',
        'REST API integration ដោយប្រើ HttpClient & System.Text.Json',
        'ប្រព័ន្ធកញ្ចប់ទំនិញ Cart & ការកែប្រែចំនួនស្តុក'
      ]
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body style="background:#0f172a; color:#f8fafc; font-family:system-ui, sans-serif; padding:20px; line-height:1.6;">
  <div style="max-width:440px; margin:0 auto; background:#1e293b; border-radius:24px; padding:20px; border:2px solid #334155; box-shadow:0 10px 25px rgba(0,0,0,0.5);">
    <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #334155; padding-bottom:12px; margin-bottom:16px;">
      <h3 style="color:#a855f7; margin:0; font-size:18px;">💜 .NET MAUI POS Terminal</h3>
      <span style="background:#6d28d9; color:#ffffff; font-weight:bold; font-size:11px; padding:3px 10px; border-radius:12px;">C# 12 • .NET 9</span>
    </div>
    
    <div style="background:#0f172a; padding:16px; border-radius:16px; margin-bottom:16px; border:1px solid #334155;">
      <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
        <span style="color:#94a3b8; font-size:12px;">Cart Total (3 items)</span>
        <strong style="color:#4ade80; font-size:16px;">$124.50</strong>
      </div>
      <div style="height:6px; background:#334155; border-radius:3px; overflow:hidden;">
        <div style="width:75%; height:100%; background:#a855f7;"></div>
      </div>
    </div>

    <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:16px;">
      <div style="background:#1e293b; padding:12px; border-radius:14px; border:1px solid #334155; text-align:center;">
        <span style="font-size:11px; color:#94a3b8; display:block;">XAML UI</span>
        <strong style="color:#a855f7; font-size:13px;">CollectionView</strong>
      </div>
      <div style="background:#1e293b; padding:12px; border-radius:14px; border:1px solid #334155; text-align:center;">
        <span style="font-size:11px; color:#94a3b8; display:block;">MVVM Engine</span>
        <strong style="color:#38bdf8; font-size:13px;">CommunityToolkit</strong>
      </div>
    </div>

    <div style="background:#0f172a; padding:12px; border-radius:12px; font-family:monospace; font-size:11px; color:#cbd5e1;">
      ✓ Platforms: Android, iOS, Windows, Mac<br/>
      ✓ Database: SQLite-net-pcl<br/>
      ✓ Navigation: AppShell GoToAsync
    </div>
  </div>
</body>
</html>`
    },
    finalCode: `// ViewModels/PosViewModel.cs
using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using System.Collections.ObjectModel;

public partial class PosViewModel : ObservableObject
{
    [ObservableProperty]
    private decimal _totalAmount;

    public ObservableCollection<CartItem> Cart { get; } = new();

    [RelayCommand]
    private void AddItem(Product product)
    {
        var existing = Cart.FirstOrDefault(x => x.ProductId == product.Id);
        if (existing != null) {
            existing.Quantity++;
        } else {
            Cart.Add(new CartItem { ProductId = product.Id, Name = product.Name, Price = product.Price, Quantity = 1 });
        }
        TotalAmount = Cart.Sum(x => x.Price * x.Quantity);
    }
}`
  },
  lessons: [
    // MODULE 1
    {
      id: 'maui-1-1',
      slug: 'what-is-dotnet-maui-architecture',
      moduleNumber: 1,
      lessonNumberInModule: 1,
      title: {
        en: '1.1 What is .NET MAUI & Single Project Architecture',
        km: '១.១ អ្វីទៅជា .NET MAUI និងរចនាសម្ព័ន្ធ Single Project'
      },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: '.NET MAUI unifies platform-specific code into a Single Project where Android, iOS, Mac, and Windows run on a single platform-agnostic C# codebase.',
        km: '.NET MAUI ប្រមូលផ្តុំកូដរបស់ Android, iOS, Mac, និង Windows មកក្នុង Single Project តែមួយដោយប្រើប្រាស់ C# Codebase រួមគ្នា។'
      },
      tutorial: {
        en: '// .NET MAUI Project Layout:\n// 📂 Solution\n// ├── 📂 Platforms (Android, iOS, MacCatalyst, Windows)\n// ├── 📂 Resources (AppIcon, Fonts, Images, Raw, Styles)\n// ├── 📜 App.xaml & App.xaml.cs\n// └── 📜 AppShell.xaml & AppShell.xaml.cs',
        km: '// រចនាសម្ព័ន្ធ .NET MAUI Project:\n// 📂 Solution\n// ├── 📂 Platforms (Android, iOS, MacCatalyst, Windows)\n// ├── 📂 Resources (AppIcon, Fonts, Images, Raw, Styles)\n// ├── 📜 App.xaml & App.xaml.cs\n// └── 📜 AppShell.xaml & AppShell.xaml.cs'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#a855f7; padding:20px; font-family:monospace;"><h3>1.1 .NET MAUI Architecture</h3><p>Single Project Architecture<br/>Android • iOS • macOS • Windows</p></body></html>`
      },
      practiceExercise: {
        question: {
          en: 'Where are platform-specific entry points and manifest files stored in a .NET MAUI solution?',
          km: 'តើ ឯកសារ Manifest និង Entry points សម្រាប់ platform នីមួយៗត្រូវបានរក្សាទុកនៅឯណា ក្នុង .NET MAUI Project?'
        },
        solution: 'Inside the `Platforms/` folder at the root of the project (e.g. `Platforms/Android`, `Platforms/iOS`).'
      }
    },
    {
      id: 'maui-1-2',
      slug: 'setting-up-visual-studio-dotnet-sdk',
      moduleNumber: 1,
      lessonNumberInModule: 2,
      title: {
        en: '1.2 Installing Visual Studio 2022 & .NET MAUI Workload',
        km: '១.២ ការដំឡើង Visual Studio 2022 និង .NET MAUI Workload'
      },
      durationMinutes: 22,
      difficulty: 'Beginner',
      explanation: {
        en: 'Configure Visual Studio 2022 with the .NET MAUI workload, Android SDK, and emulators to compile multiplatform targets.',
        km: 'រៀបចំដំឡើង Visual Studio 2022 ជាមួយ .NET MAUI Workload, Android SDK និង Emulators ដើម្បីរត់ App លើ Device ផ្សេងៗ។'
      },
      tutorial: {
        en: '// Terminal check for installed MAUI workload:\ndotnet workload list\n\n// Create a new MAUI project via CLI:\ndotnet new maui -n MyMauiApp\ncd MyMauiApp\ndotnet build -t:Run -f net9.0-android',
        km: '// ពិនិត្យមើល MAUI Workload ក្នុង Terminal:\ndotnet workload list\n\n// បង្កើត MAUI Project ថ្មីតាម CLI:\ndotnet new maui -n MyMauiApp\ncd MyMauiApp\ndotnet build -t:Run -f net9.0-android'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#22c55e; padding:20px; font-family:monospace;"><h3>1.2 Setup Checklist</h3><p>✓ Visual Studio 2022 / VS Code<br/>✓ .NET 8 / 9 SDK Installed<br/>✓ Android Emulator Configured</p></body></html>`
      }
    },
    {
      id: 'maui-1-3',
      slug: 'app-lifecycle-and-entry-points',
      moduleNumber: 1,
      lessonNumberInModule: 3,
      title: {
        en: '1.3 App Lifecycle & Platform Entry Points',
        km: '១.៣ វដ្តជីវិតរបស់ App និង Platform Entry Points'
      },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'Understand how MauiProgram.cs acts as the cross-platform bootstrap entry point configuring services, fonts, and Dependency Injection.',
        km: 'យល់ដឹងពីរបៀបដែល MauiProgram.cs ដើរតួជា Entry Point រួមសម្រាប់កត់ត្រា Services, Fonts, និង Dependency Injection។'
      },
      tutorial: {
        en: 'public static class MauiProgram\n{\n    public static MauiApp CreateMauiApp()\n    {\n        var builder = MauiApp.CreateBuilder();\n        builder\n            .UseMauiApp<App>()\n            .ConfigureFonts(fonts => {\n                fonts.AddFont("OpenSans-Regular.ttf", "OpenSansRegular");\n            });\n        return builder.Build();\n    }\n}',
        km: 'public static class MauiProgram\n{\n    public static MauiApp CreateMauiApp()\n    {\n        var builder = MauiApp.CreateBuilder();\n        builder\n            .UseMauiApp<App>()\n            .ConfigureFonts(fonts => {\n                fonts.AddFont("OpenSans-Regular.ttf", "OpenSansRegular");\n            });\n        return builder.Build();\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#38bdf8; padding:20px; font-family:monospace;"><h3>1.3 MauiProgram.cs</h3><p>MauiApp.CreateBuilder() -> Configures Services & DI</p></body></html>`
      }
    },

    // MODULE 2
    {
      id: 'maui-2-1',
      slug: 'xaml-declarative-syntax-and-csharp-markup',
      moduleNumber: 2,
      lessonNumberInModule: 1,
      title: {
        en: '2.1 XAML Declarative Syntax & C# Markup',
        km: '២.១ អក្ខរវិរុទ្ធ XAML Declarative និង C# Markup'
      },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'XAML (Extensible Application Markup Language) declares element trees, layout structures, and bindings cleanly separate from code-behind C# files.',
        km: 'XAML ត្រូវបានប្រើសម្រាប់រចនា UI Hierarchy យ៉ាងច្បាស់លាស់ ដោយបំបែកចេញពី C# Code-behind File។'
      },
      tutorial: {
        en: '<!-- MainPage.xaml -->\n<ContentPage xmlns="http://schemas.microsoft.com/dotnet/2021/maui"\n             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"\n             x:Class="MyMauiApp.MainPage">\n    <VerticalStackLayout Padding="30" Spacing="25">\n        <Label Text="Welcome to .NET MAUI!" FontSize="24" HorizontalOptions="Center" />\n        <Button Text="Click Me" Clicked="OnCounterClicked" HorizontalOptions="Center" />\n    </VerticalStackLayout>\n</ContentPage>',
        km: '<!-- MainPage.xaml -->\n<ContentPage xmlns="http://schemas.microsoft.com/dotnet/2021/maui"\n             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"\n             x:Class="MyMauiApp.MainPage">\n    <VerticalStackLayout Padding="30" Spacing="25">\n        <Label Text="សូមស្វាគមន៍មកកាន់ .NET MAUI!" FontSize="24" HorizontalOptions="Center" />\n        <Button Text="ចុចទីនេះ" Clicked="OnCounterClicked" HorizontalOptions="Center" />\n    </VerticalStackLayout>\n</ContentPage>'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#a855f7; padding:20px; font-family:monospace;"><h3>2.1 XAML Page</h3><p>&lt;ContentPage&gt; &lt;Label Text="Welcome" /&gt; &lt;/ContentPage&gt;</p></body></html>`
      }
    },
    {
      id: 'maui-2-2',
      slug: 'grid-layout-rows-and-columns',
      moduleNumber: 2,
      lessonNumberInModule: 2,
      title: {
        en: '2.2 Grid Layout: Rows, Columns, and Auto/Star Sizing',
        km: '២.២ Grid Layout៖ ការកំណត់ Rows, Columns និង Auto/Star Sizing'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Grid is the most powerful layout in .NET MAUI, positioning elements in flexible matrix rows and columns using absolute, Auto, or Proportional (*) sizing.',
        km: 'Grid ជា Layout ដ៏មានថាមពលបំផុតក្នុង .NET MAUI សម្រាប់រៀបចំ Element ជា Matrix (Rows & Columns) ដោយប្រើទំហំ Auto, Star (*), ឬ Fixed Pixels។'
      },
      tutorial: {
        en: '<Grid RowDefinitions="Auto, *, 80"\n      ColumnDefinitions="*, 2*">\n    <Label Grid.Row="0" Grid.ColumnSpan="2" Text="Header Banner" HeightRequest="50" />\n    <BoxView Grid.Row="1" Grid.Column="0" Color="Purple" />\n    <CollectionView Grid.Row="1" Grid.Column="1" />\n    <Button Grid.Row="2" Grid.ColumnSpan="2" Text="Checkout" />\n</Grid>',
        km: '<Grid RowDefinitions="Auto, *, 80"\n      ColumnDefinitions="*, 2*">\n    <Label Grid.Row="0" Grid.ColumnSpan="2" Text="Header Banner" HeightRequest="50" />\n    <BoxView Grid.Row="1" Grid.Column="0" Color="Purple" />\n    <CollectionView Grid.Row="1" Grid.Column="1" />\n    <Button Grid.Row="2" Grid.ColumnSpan="2" Text="Checkout" />\n</Grid>'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#38bdf8; padding:20px; font-family:monospace;"><h3>2.2 Grid Layout</h3><p>RowDefinitions="Auto, *"<br/>ColumnDefinitions="*, 2*"</p></body></html>`
      }
    },
    {
      id: 'maui-2-3',
      slug: 'stacklayout-flexlayout-scrollview',
      moduleNumber: 2,
      lessonNumberInModule: 3,
      title: {
        en: '2.3 StackLayout, VerticalStackLayout, FlexLayout & ScrollView',
        km: '២.៣ StackLayout, VerticalStackLayout, FlexLayout និង ScrollView'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Explore optimized vertical/horizontal stack layouts, responsive wrapping with FlexLayout, and wrapping long content inside ScrollView.',
        km: 'សិក្សាពី VerticalStackLayout, HorizontalStackLayout, FlexLayout សម្រាប់រៀប Element ដោយស្វ័យប្រវត្តិ និង ScrollView សម្រាប់ទិន្នន័យវែង។'
      },
      tutorial: {
        en: '<ScrollView>\n    <FlexLayout Wrap="Wrap" JustifyContent="SpaceEvenly">\n        <Border WidthRequest="150" HeightRequest="150" Margin="10">\n            <Label Text="Product 1" HorizontalOptions="Center" VerticalOptions="Center" />\n        </Border>\n        <Border WidthRequest="150" HeightRequest="150" Margin="10">\n            <Label Text="Product 2" HorizontalOptions="Center" VerticalOptions="Center" />\n        </Border>\n    </FlexLayout>\n</ScrollView>',
        km: '<ScrollView>\n    <FlexLayout Wrap="Wrap" JustifyContent="SpaceEvenly">\n        <Border WidthRequest="150" HeightRequest="150" Margin="10">\n            <Label Text="Product 1" HorizontalOptions="Center" VerticalOptions="Center" />\n        </Border>\n        <Border WidthRequest="150" HeightRequest="150" Margin="10">\n            <Label Text="Product 2" HorizontalOptions="Center" VerticalOptions="Center" />\n        </Border>\n    </FlexLayout>\n</ScrollView>'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#22c55e; padding:20px; font-family:monospace;"><h3>2.3 FlexLayout & ScrollView</h3><p>FlexLayout Wrap="Wrap" inside ScrollView</p></body></html>`
      }
    },

    // MODULE 3
    {
      id: 'maui-3-1',
      slug: 'controls-label-button-entry-editor',
      moduleNumber: 3,
      lessonNumberInModule: 1,
      title: {
        en: '3.1 Core Controls: Labels, Buttons, Entry & Editor',
        km: '៣.១ Controls ស្នូល៖ Labels, Buttons, Entry និង Editor'
      },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'Master input controls in MAUI: Entry for single-line text input, Editor for multi-line notes, Labels for formatted text, and Buttons with visual states.',
        km: 'រៀនប្រើប្រាស់ Entry សម្រាប់វាយអត្ថបទមួយជួរ, Editor សម្រាប់អត្ថបទច្រើនជួរ, Labels និង Buttons ជាមួយ Visual States។'
      },
      tutorial: {
        en: '<VerticalStackLayout Spacing="15" Padding="20">\n    <Label Text="User Registration" FontSize="20" FontAttributes="Bold" />\n    <Entry Placeholder="Enter Full Name" Keyboard="Text" ClearButtonVisibility="WhileEditing" />\n    <Entry Placeholder="Enter Email" Keyboard="Email" />\n    <Editor Placeholder="Short Bio" HeightRequest="100" AutoSize="TextChanges" />\n    <Button Text="Submit Registration" CornerRadius="12" BackgroundColor="#6d28d9" />\n</VerticalStackLayout>',
        km: '<VerticalStackLayout Spacing="15" Padding="20">\n    <Label Text="User Registration" FontSize="20" FontAttributes="Bold" />\n    <Entry Placeholder="Enter Full Name" Keyboard="Text" ClearButtonVisibility="WhileEditing" />\n    <Entry Placeholder="Enter Email" Keyboard="Email" />\n    <Editor Placeholder="Short Bio" HeightRequest="100" AutoSize="TextChanges" />\n    <Button Text="Submit Registration" CornerRadius="12" BackgroundColor="#6d28d9" />\n</VerticalStackLayout>'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#a855f7; padding:20px; font-family:monospace;"><h3>3.1 Entry & Form Controls</h3><p>&lt;Entry Keyboard="Email" /&gt;<br/>&lt;Button CornerRadius="12" /&gt;</p></body></html>`
      }
    },
    {
      id: 'maui-3-2',
      slug: 'collectionview-and-datatemplates',
      moduleNumber: 3,
      lessonNumberInModule: 2,
      title: {
        en: '3.2 CollectionView & Custom DataTemplates',
        km: '៣.២ CollectionView និង ការសរសេរ Custom DataTemplates'
      },
      durationMinutes: 24,
      difficulty: 'Intermediate',
      explanation: {
        en: 'CollectionView provides high-performance scrolling lists and grid layouts with item selection, header/footer templates, and pull-to-refresh capabilities.',
        km: 'CollectionView ផ្តល់ល្បឿនលឿនក្នុងការបង្ហាញរាយបញ្ជី Scrolling Lists/Grids ជាមួយ Item Templates, Selection, និង Pull-to-refresh។'
      },
      tutorial: {
        en: '<CollectionView ItemsSource="{Binding Products}">\n    <CollectionView.ItemTemplate>\n        <DataTemplate x:DataType="models:Product">\n            <Border Margin="5" Padding="12" StrokeShape="RoundRectangle 10">\n                <Grid ColumnDefinitions="Auto, *, Auto">\n                    <Image Source="{Binding ImageUrl}" WidthRequest="50" HeightRequest="50" Grid.Column="0" />\n                    <VerticalStackLayout Grid.Column="1" Padding="10,0">\n                        <Label Text="{Binding Name}" FontAttributes="Bold" />\n                        <Label Text="{Binding Category}" FontSize="12" TextColor="Gray" />\n                    </VerticalStackLayout>\n                    <Label Grid.Column="2" Text="{Binding Price, StringFormat=\'{0:C}\'}" TextColor="Green" VerticalOptions="Center" />\n                </Grid>\n            </Border>\n        </DataTemplate>\n    </CollectionView.ItemTemplate>\n</CollectionView>',
        km: '<CollectionView ItemsSource="{Binding Products}">\n    <CollectionView.ItemTemplate>\n        <DataTemplate x:DataType="models:Product">\n            <Border Margin="5" Padding="12" StrokeShape="RoundRectangle 10">\n                <Grid ColumnDefinitions="Auto, *, Auto">\n                    <Image Source="{Binding ImageUrl}" WidthRequest="50" HeightRequest="50" Grid.Column="0" />\n                    <VerticalStackLayout Grid.Column="1" Padding="10,0">\n                        <Label Text="{Binding Name}" FontAttributes="Bold" />\n                        <Label Text="{Binding Category}" FontSize="12" TextColor="Gray" />\n                    </VerticalStackLayout>\n                    <Label Grid.Column="2" Text="{Binding Price, StringFormat=\'{0:C}\'}" TextColor="Green" VerticalOptions="Center" />\n                </Grid>\n            </Border>\n        </DataTemplate>\n    </CollectionView.ItemTemplate>\n</CollectionView>'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#38bdf8; padding:20px; font-family:monospace;"><h3>3.2 CollectionView</h3><p>&lt;CollectionView ItemsSource="{Binding Products}"&gt;</p></body></html>`
      }
    },
    {
      id: 'maui-3-3',
      slug: 'styles-dynamicresource-and-apptheme',
      moduleNumber: 3,
      lessonNumberInModule: 3,
      title: {
        en: '3.3 Styles, DynamicResource & AppTheme (Light/Dark Mode)',
        km: '៣.៣ Styles, DynamicResource និង AppTheme (Light/Dark Mode)'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Define global styles inside Resources/Styles/Styles.xaml and utilize AppThemeBinding to adjust UI colors automatically based on system Dark/Light mode.',
        km: 'កំណត់ Global Styles ក្នុង Resources/Styles/Styles.xaml ហើយប្រើ AppThemeBinding សម្រាប់ដូរពណ៌ Light/Dark Mode តាមប្រព័ន្ធប្រតិបត្តិការ។'
      },
      tutorial: {
        en: '<Label Text="Adaptive Theme Text"\n       TextColor="{AppThemeBinding Light=#0f172a, Dark=#f8fafc}"\n       BackgroundColor="{AppThemeBinding Light=#ffffff, Dark=#1e293b}" />',
        km: '<Label Text="Adaptive Theme Text"\n       TextColor="{AppThemeBinding Light=#0f172a, Dark=#f8fafc}"\n       BackgroundColor="{AppThemeBinding Light=#ffffff, Dark=#1e293b}" />'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#22c55e; padding:20px; font-family:monospace;"><h3>3.3 Light & Dark Mode</h3><p>AppThemeBinding Light=#ffffff, Dark=#1e293b</p></body></html>`
      }
    },

    // MODULE 4
    {
      id: 'maui-4-1',
      slug: 'mvvm-pattern-and-bindingcontext',
      moduleNumber: 4,
      lessonNumberInModule: 1,
      title: {
        en: '4.1 Understanding MVVM Pattern & BindingContext',
        km: '៤.១ យល់ដឹងពី MVVM Pattern និង BindingContext'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Model-View-ViewModel (MVVM) decouples UI rendering from business logic. Assigning a ViewModel instance to a Page\'s BindingContext enables clean two-way data bindings.',
        km: 'MVVM បំបែក UI ចេញពី Business Logic។ ការភ្ជាប់ ViewModel ទៅកាន់ BindingContext របស់ Page ធ្វើឱ្យ Data Binding មានភាពរលូន។'
      },
      tutorial: {
        en: '// MainPage.xaml.cs\npublic partial class MainPage : ContentPage\n{\n    public MainPage(MainViewModel viewModel)\n    {\n        InitializeComponent();\n        BindingContext = viewModel; // Inject ViewModel\n    }\n}',
        km: '// MainPage.xaml.cs\npublic partial class MainPage : ContentPage\n{\n    public MainPage(MainViewModel viewModel)\n    {\n        InitializeComponent();\n        BindingContext = viewModel; // Inject ViewModel\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#a855f7; padding:20px; font-family:monospace;"><h3>4.1 BindingContext</h3><p>BindingContext = viewModel;</p></body></html>`
      }
    },
    {
      id: 'maui-4-2',
      slug: 'communitytoolkit-mvvm-observableproperty',
      moduleNumber: 4,
      lessonNumberInModule: 2,
      title: {
        en: '4.2 CommunityToolkit.Mvvm: ObservableProperty & RelayCommand',
        km: '៤.២ CommunityToolkit.Mvvm៖ ObservableProperty និង RelayCommand'
      },
      durationMinutes: 24,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Use the official Microsoft `CommunityToolkit.Mvvm` library to automatically generate INotifyPropertyChanged properties and async commands using C# attributes.',
        km: 'ប្រើប្រាស់ `CommunityToolkit.Mvvm` របស់ Microsoft ដើម្បីបង្កើត INotifyPropertyChanged និង Commands ដោយស្វ័យប្រវត្តិ។'
      },
      tutorial: {
        en: 'using CommunityToolkit.Mvvm.ComponentModel;\nusing CommunityToolkit.Mvvm.Input;\n\npublic partial class LoginViewModel : ObservableObject\n{\n    [ObservableProperty]\n    private string _username = "";\n\n    [ObservableProperty]\n    private string _password = "";\n\n    [RelayCommand]\n    private async Task LoginAsync()\n    {\n        // Automatically generated LoginCommand with async support!\n    }\n}',
        km: 'using CommunityToolkit.Mvvm.ComponentModel;\nusing CommunityToolkit.Mvvm.Input;\n\npublic partial class LoginViewModel : ObservableObject\n{\n    [ObservableProperty]\n    private string _username = "";\n\n    [ObservableProperty]\n    private string _password = "";\n\n    [RelayCommand]\n    private async Task LoginAsync()\n    {\n        // Automatically generated LoginCommand with async support!\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#38bdf8; padding:20px; font-family:monospace;"><h3>4.2 Source Generators</h3><p>[ObservableProperty] private string _name;<br/>[RelayCommand] private async Task SaveAsync()</p></body></html>`
      }
    },
    {
      id: 'maui-4-3',
      slug: 'observablecollection-and-ui-sync',
      moduleNumber: 4,
      lessonNumberInModule: 3,
      title: {
        en: '4.3 ObservableCollection & Dynamic UI Synchronization',
        km: '៤.៣ ObservableCollection និងការធ្វើ Sync ទិន្នន័យលើ UI'
      },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: '`ObservableCollection<T>` emits collection change notifications automatically whenever items are added, removed, or cleared, keeping CollectionView synchronized.',
        km: '`ObservableCollection<T>` ផ្ញើសញ្ញាប្រាប់ UI ដោយស្វ័យប្រវត្តិរាល់ពេលមានការបន្ថែម លុប ឬកែប្រែទិន្នន័យក្នុង List។'
      },
      tutorial: {
        en: 'public ObservableCollection<Product> Products { get; } = new();\n\npublic void AddNewProduct(Product p)\n{\n    Products.Add(p); // CollectionView automatically adds row visually!\n}',
        km: 'public ObservableCollection<Product> Products { get; } = new();\n\npublic void AddNewProduct(Product p)\n{\n    Products.Add(p); // CollectionView automatically adds row visually!\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#22c55e; padding:20px; font-family:monospace;"><h3>4.3 ObservableCollection</h3><p>Products.Add(item) => Visual UI Sync</p></body></html>`
      }
    },

    // MODULE 5
    {
      id: 'maui-5-1',
      slug: 'appshell-tabbar-and-flyout',
      moduleNumber: 5,
      lessonNumberInModule: 1,
      title: {
        en: '5.1 AppShell Architecture: TabBar & Flyout Navigation',
        km: '៥.១ រចនាសម្ព័ន្ធ AppShell៖ TabBar និង Flyout Navigation'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'AppShell provides the structural frame of .NET MAUI applications, handling bottom tab bars, side navigation flyout menus, and visual page hierarchy.',
        km: 'AppShell ជាប្លង់ដើមនៃ .NET MAUI App សម្រាប់បង្កើត Bottom TabBar, Side Flyout Menu, និងកំណត់ Hierarchy នៃ Pages។'
      },
      tutorial: {
        en: '<!-- AppShell.xaml -->\n<Shell xmlns="http://schemas.microsoft.com/dotnet/2021/maui"\n       x:Class="MyMauiApp.AppShell">\n    <TabBar>\n        <Tab Title="Home" Icon="home.png">\n            <ShellContent ContentTemplate="{DataTemplate views:HomePage}" />\n        </Tab>\n        <Tab Title="Inventory" Icon="box.png">\n            <ShellContent ContentTemplate="{DataTemplate views:InventoryPage}" />\n        </Tab>\n        <Tab Title="Settings" Icon="gear.png">\n            <ShellContent ContentTemplate="{DataTemplate views:SettingsPage}" />\n        </Tab>\n    </TabBar>\n</Shell>',
        km: '<!-- AppShell.xaml -->\n<Shell xmlns="http://schemas.microsoft.com/dotnet/2021/maui"\n       x:Class="MyMauiApp.AppShell">\n    <TabBar>\n        <Tab Title="Home" Icon="home.png">\n            <ShellContent ContentTemplate="{DataTemplate views:HomePage}" />\n        </Tab>\n        <Tab Title="Inventory" Icon="box.png">\n            <ShellContent ContentTemplate="{DataTemplate views:InventoryPage}" />\n        </Tab>\n        <Tab Title="Settings" Icon="gear.png">\n            <ShellContent ContentTemplate="{DataTemplate views:SettingsPage}" />\n        </Tab>\n    </TabBar>\n</Shell>'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#a855f7; padding:20px; font-family:monospace;"><h3>5.1 AppShell Navigation</h3><p>&lt;TabBar&gt; &lt;Tab Title="Home" /&gt; &lt;/TabBar&gt;</p></body></html>`
      }
    },
    {
      id: 'maui-5-2',
      slug: 'shell-uri-navigation-and-gotoasync',
      moduleNumber: 5,
      lessonNumberInModule: 2,
      title: {
        en: '5.2 Shell Route Navigation: Shell.Current.GoToAsync',
        km: '៥.២ ការផ្លាស់ប្តូរ Route តាមរយៈ Shell.Current.GoToAsync'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Register detailed page routes in C# and perform asynchronous route navigation using relative (`details`) or absolute (`//home/details`) URIs.',
        km: 'ចុះឈ្មោះ Route ក្នុង C# ហើយធ្វើការប្តូរទៅកាន់ Page ផ្សេងៗដោយប្រើ `Shell.Current.GoToAsync("path")`។'
      },
      tutorial: {
        en: '// Register route in AppShell.xaml.cs:\nRouting.RegisterRoute(nameof(ProductDetailPage), typeof(ProductDetailPage));\n\n// Navigate asynchronously from ViewModel:\nawait Shell.Current.GoToAsync($"{nameof(ProductDetailPage)}?productId=102");',
        km: '// Register route in AppShell.xaml.cs:\nRouting.RegisterRoute(nameof(ProductDetailPage), typeof(ProductDetailPage));\n\n// Navigate asynchronously from ViewModel:\nawait Shell.Current.GoToAsync($"{nameof(ProductDetailPage)}?productId=102");'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#38bdf8; padding:20px; font-family:monospace;"><h3>5.2 URI Route Navigation</h3><p>Shell.Current.GoToAsync("ProductDetailPage?id=102")</p></body></html>`
      }
    },
    {
      id: 'maui-5-3',
      slug: 'passing-query-parameters-and-objects',
      moduleNumber: 5,
      lessonNumberInModule: 3,
      title: {
        en: '5.3 Passing Query Parameters & Complex Objects across Routes',
        km: '៥.៣ ការផ្ញើ Query Parameters និង Complex Objects ឆ្លង Page'
      },
      durationMinutes: 24,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Pass parameters using `IDictionary<string, object>` or decode `[QueryProperty]` attributes automatically on destination ViewModels.',
        km: 'ផ្ញើ Paramaters ឬ Objects ទៅកាន់ Page បន្ទាប់ដោយប្រើ dictionary ជាមួយ `[QueryProperty]` attribute។'
      },
      tutorial: {
        en: '// Sender:\nvar navigationParameter = new Dictionary<string, object>\n{\n    { "SelectedProduct", product }\n};\nawait Shell.Current.GoToAsync(nameof(ProductDetailPage), navigationParameter);\n\n// Receiver ViewModel:\n[QueryProperty(nameof(Item), "SelectedProduct")]\npublic partial class ProductDetailViewModel : ObservableObject\n{\n    [ObservableProperty]\n    private Product _item;\n}',
        km: '// Sender:\nvar navigationParameter = new Dictionary<string, object>\n{\n    { "SelectedProduct", product }\n};\nawait Shell.Current.GoToAsync(nameof(ProductDetailPage), navigationParameter);\n\n// Receiver ViewModel:\n[QueryProperty(nameof(Item), "SelectedProduct")]\npublic partial class ProductDetailViewModel : ObservableObject\n{\n    [ObservableProperty]\n    private Product _item;\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#22c55e; padding:20px; font-family:monospace;"><h3>5.3 QueryProperty Parameter</h3><p>[QueryProperty(nameof(Item), "SelectedProduct")]</p></body></html>`
      }
    },

    // MODULE 6
    {
      id: 'maui-6-1',
      slug: 'httpclient-json-deserialization',
      moduleNumber: 6,
      lessonNumberInModule: 1,
      title: {
        en: '6.1 REST Networking: HttpClient & System.Text.Json',
        km: '៦.១ ការធ្វើ Networking៖ HttpClient និង System.Text.Json'
      },
      durationMinutes: 24,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Inject `HttpClient` into services, execute HTTP GET/POST requests asynchronously, and deserialize JSON using `System.Text.Json`.',
        km: 'ប្រើប្រាស់ `HttpClient` ដើម្បីធ្វើ HTTP Request ទៅកាន់ Server ហើយបំប្លែងទិន្នន័យ JSON ដោយ `System.Text.Json`។'
      },
      tutorial: {
        en: 'public class ApiService\n{\n    private readonly HttpClient _httpClient;\n    public ApiService(HttpClient httpClient) => _httpClient = httpClient;\n\n    public async Task<List<Product>> GetProductsAsync()\n    {\n        var response = await _httpClient.GetAsync("https://api.example.com/products");\n        if (response.IsSuccessStatusCode)\n        {\n            var json = await response.Content.ReadAsStringAsync();\n            return JsonSerializer.Deserialize<List<Product>>(json, new JsonSerializerOptions { PropertyNameCaseInsensitive = true });\n        }\n        return new List<Product>();\n    }\n}',
        km: 'public class ApiService\n{\n    private readonly HttpClient _httpClient;\n    public ApiService(HttpClient httpClient) => _httpClient = httpClient;\n\n    public async Task<List<Product>> GetProductsAsync()\n    {\n        var response = await _httpClient.GetAsync("https://api.example.com/products");\n        if (response.IsSuccessStatusCode)\n        {\n            var json = await response.Content.ReadAsStringAsync();\n            return JsonSerializer.Deserialize<List<Product>>(json, new JsonSerializerOptions { PropertyNameCaseInsensitive = true });\n        }\n        return new List<Product>();\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#a855f7; padding:20px; font-family:monospace;"><h3>6.1 HttpClient REST API</h3><p>GetAsync() -> JsonSerializer.Deserialize&lt;T&gt;()</p></body></html>`
      }
    },
    {
      id: 'maui-6-2',
      slug: 'handling-connectivity-and-offline-errors',
      moduleNumber: 6,
      lessonNumberInModule: 2,
      title: {
        en: '6.2 Checking Network Connectivity & ActivityIndicator Spinners',
        km: '៦.២ ការពិនិត្យ Connectivity អ៊ីនធឺណិត និងការបង្ហាញ Loading Spinner'
      },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Check real-time network state using MAUI Essentials `IConnectivity.NetworkAccess` before attempting network operations.',
        km: 'ពិនិត្យមើលស្ថានភាព Network ជាមុនដោយប្រើប្រាស់ `IConnectivity.NetworkAccess` ដើម្បការពារកុំឱ្យ Crash នៅពេលគ្មាន អ៊ីនធឺណិត។'
      },
      tutorial: {
        en: 'if (Connectivity.Current.NetworkAccess != NetworkAccess.Internet)\n{\n    await Shell.Current.DisplayAlert("No Internet", "Please check your network connection.", "OK");\n    return;\n}',
        km: 'if (Connectivity.Current.NetworkAccess != NetworkAccess.Internet)\n{\n    await Shell.Current.DisplayAlert("No Internet", "Please check your network connection.", "OK");\n    return;\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#38bdf8; padding:20px; font-family:monospace;"><h3>6.2 Connectivity Check</h3><p>Connectivity.Current.NetworkAccess != NetworkAccess.Internet</p></body></html>`
      }
    },

    // MODULE 7
    {
      id: 'maui-7-1',
      slug: 'sqllite-local-database-persistence',
      moduleNumber: 7,
      lessonNumberInModule: 1,
      title: {
        en: '7.1 Local Persistence: SQLite-net-pcl ORM',
        km: '៧.១ Local Storage៖ SQLite-net-pcl ORM'
      },
      durationMinutes: 24,
      difficulty: 'Advanced',
      explanation: {
        en: 'Integrate SQLite-net-pcl to create local SQLite databases, perform async CRUD queries, and handle offline-first application data.',
        km: 'ប្រើប្រាស់ SQLite-net-pcl សម្រាប់បង្កើត Local SQLite Database លើទូរស័ព្ទ ដើម្បីសរសេរប្រព័ន្ធ Offline-First។'
      },
      tutorial: {
        en: 'public class DatabaseService\n{\n    private SQLiteAsyncConnection _db;\n\n    private async Task InitAsync()\n    {\n        if (_db != null) return;\n        var dbPath = Path.Combine(FileSystem.AppDataDirectory, "app.db3");\n        _db = new SQLiteAsyncConnection(dbPath);\n        await _db.CreateTableAsync<InventoryItem>();\n    }\n\n    public async Task<List<InventoryItem>> GetItemsAsync()\n    {\n        await InitAsync();\n        return await _db.Table<InventoryItem>().ToListAsync();\n    }\n}',
        km: 'public class DatabaseService\n{\n    private SQLiteAsyncConnection _db;\n\n    private async Task InitAsync()\n    {\n        if (_db != null) return;\n        var dbPath = Path.Combine(FileSystem.AppDataDirectory, "app.db3");\n        _db = new SQLiteAsyncConnection(dbPath);\n        await _db.CreateTableAsync<InventoryItem>();\n    }\n\n    public async Task<List<InventoryItem>> GetItemsAsync()\n    {\n        await InitAsync();\n        return await _db.Table<InventoryItem>().ToListAsync();\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#22c55e; padding:20px; font-family:monospace;"><h3>7.1 SQLite Database</h3><p>SQLiteAsyncConnection(dbPath) -> CreateTableAsync&lt;T&gt;()</p></body></html>`
      }
    },
    {
      id: 'maui-7-2',
      slug: 'secure-storage-and-preferences',
      moduleNumber: 7,
      lessonNumberInModule: 2,
      title: {
        en: '7.2 SecureStorage & User Preferences',
        km: '៧.២ ការរក្សាទុក Key/Value ដោយ SecureStorage និង Preferences'
      },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Store lightweight user settings in `Preferences` and encrypted auth tokens inside OS Keychain/Keystore via `SecureStorage`.',
        km: 'រក្សាទុកការប្រែក្លាយ UI ក្នុង `Preferences` ហើយរក្សាទុក Password/Tokens ក្នុង `SecureStorage` (iOS Keychain / Android Keystore)។'
      },
      tutorial: {
        en: '// Save encrypted auth token:\nawait SecureStorage.Default.SetAsync("auth_token", "eyJhbGciOi...");\n\n// Read auth token:\nstring token = await SecureStorage.Default.GetAsync("auth_token");',
        km: '// Save encrypted auth token:\nawait SecureStorage.Default.SetAsync("auth_token", "eyJhbGciOi...");\n\n// Read auth token:\nstring token = await SecureStorage.Default.GetAsync("auth_token");'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#a855f7; padding:20px; font-family:monospace;"><h3>7.2 SecureStorage</h3><p>SecureStorage.Default.SetAsync("auth_token", token)</p></body></html>`
      }
    },

    // MODULE 8
    {
      id: 'maui-8-1',
      slug: 'native-hardware-camera-geolocation-deviceinfo',
      moduleNumber: 8,
      lessonNumberInModule: 1,
      title: {
        en: '8.1 Essential Native Hardware APIs: Camera & Geolocation',
        km: '៨.១ Hardware APIs៖ ការប្រើប្រាស់ Camera, Gallery និង GPS Location'
      },
      durationMinutes: 24,
      difficulty: 'Advanced',
      explanation: {
        en: 'Access cross-platform hardware features via MAUI Essentials APIs including `MediaPicker.CapturePhotoAsync()` and `Geolocation.GetLocationAsync()`.',
        km: 'ហៅប្រើប្រាស់ Camera ថតរូប និង GPS Location លើទូរស័ព្ទដោយប្រើប្រាស់ `MediaPicker` និង `Geolocation` APIs។'
      },
      tutorial: {
        en: 'public async Task TakePhotoAsync()\n{\n    if (MediaPicker.Default.IsCaptureSupported)\n    {\n        FileResult photo = await MediaPicker.Default.CapturePhotoAsync();\n        if (photo != null)\n        {\n            using Stream stream = await photo.OpenReadAsync();\n            // Process captured image stream\n        }\n    }\n}',
        km: 'public async Task TakePhotoAsync()\n{\n    if (MediaPicker.Default.IsCaptureSupported)\n    {\n        FileResult photo = await MediaPicker.Default.CapturePhotoAsync();\n        if (photo != null)\n        {\n            using Stream stream = await photo.OpenReadAsync();\n            // Process captured image stream\n        }\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0f172a; color:#38bdf8; padding:20px; font-family:monospace;"><h3>8.1 Camera & GPS APIs</h3><p>MediaPicker.Default.CapturePhotoAsync()</p></body></html>`
      }
    }
  ]
};
