import { Topic } from '../../types';

export const group8Topics: Topic = {
  id: "dart-asynchronous-programming",
  title: {
    en: "Group 8: Asynchronous Programming",
    km: "ក្រុមទី ៨៖ Asynchronous & Reactive Programming ក្នុង Dart"
  },
  lessons: [
    {
      id: "dart-8-1-event-loop-architecture",
      title: {
        en: "8.1 Synchronous vs Asynchronous Execution & The Event Loop",
        km: "៨.១ ស្វែងយល់ពី Synchronous, Asynchronous និង Event Loop Architecture"
      },
      content: {
        en: `# 8.1 The Dart Event Loop Architecture

Dart is a single-threaded execution model backed by an **Event Loop** containing two internal queues:
1. **Microtask Queue**: High-priority internal async tasks (drained completely before Event Queue).
2. **Event Queue**: External I/O events, timers, user touch events, and Future callbacks.`,
        km: `# ៨.១ ស្វែងយល់ពី Dart Event Loop Architecture

Dart អនុវត្តតាម Single-threaded Execution Model ដែលមាន **Event Loop** គ្រប់គ្រងលើ Queue ចំនួនពីរ៖
១. **Microtask Queue**: កិច្ចការ Async អាទិភាពខ្ពស់ក្នុងស្រុក (ដំណើរការឱ្យអស់ មុនពេលឈានទៅ Event Queue)។
២. **Event Queue**: ព្រឹត្តិការណ៍ I/O, Timers, User Touch Events, និង Future callbacks។`
      },
      starterCode: `import 'dart:async';

void main() {
  print('1. Synchronous Code Start');

  scheduleMicrotask(() {
    print('3. Microtask Executed (High Priority)');
  });

  Future(() {
    print('4. Event Queue Future Executed');
  });

  print('2. Synchronous Code End');
}`
    },
    {
      id: "dart-8-2-future-fundamentals",
      title: {
        en: "8.2 Future<T> Fundamentals & States",
        km: "៨.២ មូលដ្ឋានគ្រឹះនៃ Future<T> និង States របស់វា"
      },
      content: {
        en: `# 8.2 Future<T> Fundamentals

A \`Future<T>\` represents a potential value or error that will be available at some point in the future.

### States of a Future:
- **Uncompleted**: Pending asynchronous operation.
- **Completed with Value**: Operation succeeded and produced a value of type \`T\`.
- **Completed with Error**: Operation failed and produced an exception.`,
        km: `# ៨.២ មូលដ្ឋានគ្រឹះនៃ Future<T>

\`Future<T>\` តំណាងឱ្យតម្លៃ ឬ Error ដែលនឹងមកដល់ក្នុងពេលអនាគត។

### ប្រភេទ States នៃ Future៖
- **Uncompleted**: ប្រតិបត្តិការ Asynchronous កំពុងរង់ចាំដំណើរការ។
- **Completed with Value**: ប្រតិបត្តិការជោគជ័យ និងប្រគល់តម្លៃ Type \`T\`។
- **Completed with Error**: ប្រតិបត្តិការបរាជ័យ និងបោះ Exception។`
      },
      starterCode: `Future<String> fetchUserData() {
  return Future.delayed(Duration(seconds: 1), () {
    return 'User JSON: {"name": "Sophea Sok", "role": "Senior Dev"}';
  });
}

void main() {
  print('Initiating background API fetch...');
  fetchUserData().then((data) {
    print('Data Received: $data');
  });
  print('Main thread continues executing non-blocking work...');
}`
    },
    {
      id: "dart-8-3-future-api-then-catcherror",
      title: {
        en: "8.3 Using Future API: .then(), .catchError() & .whenComplete()",
        km: "៨.៣ ការប្រើប្រាស់ Future API (.then, .catchError, .whenComplete)"
      },
      content: {
        en: `# 8.3 Future API Callback Chaining

Chain asynchronous callbacks using:
- **\`.then(value => ...)\`**: Handles successful completion value.
- **\`.catchError(error => ...)\`**: Handles exceptions.
- **\`.whenComplete(() => ...)\`**: Always runs regardless of success or error (similar to \`finally\`).`,
        km: `# ៨.៣ Future API Callback Chaining

តភ្ជាប់ Callbacks Asynchronous ដោយប្រើប្រាស់៖
- **\`.then(value => ...)\`**: ដោះស្រាយតម្លៃពេលប្រតិបត្តិការជោគជ័យ។
- **\`.catchError(error => ...)\`**: ចាប់យក Error ពេលមាន Exception។
- **\`.whenComplete(() => ...)\`**: ដំណើរការជានិច្ចទោះបីជាជោគជ័យ ឬមាន Error ក៏ដោយ (ដូច \`finally\`)។`
      },
      starterCode: `Future<double> fetchExchangeRateUSD() {
  return Future.delayed(Duration(milliseconds: 500), () => 4050.0);
}

void main() {
  fetchExchangeRateUSD()
      .then((rate) {
        print('Exchange Rate Fetched: 1 USD = $rate KHR');
      })
      .catchError((err) {
        print('Error Fetching Rate: $err');
      })
      .whenComplete(() {
        print('Network request lifecycle complete.');
      });
}`
    },
    {
      id: "dart-8-4-async-await-syntactic-sugar",
      title: {
        en: "8.4 Modern 'async' and 'await' Syntactic Sugar",
        km: "៨.៤ ការប្រើប្រាស់ 'async' និង 'await' ទំនើប"
      },
      content: {
        en: `# 8.4 Modern async/await

The \`async\` and \`await\` keywords provide a clean, sequential syntax for handling asynchronous operations that reads like synchronous code.`,
        km: `# ៨.៤ ការប្រើប្រាស់ async/await ទំនើប

ពាក្យ \`async\` និង \`await\` ផ្តល់នូវវាក្យសម្ពន្ធច្បាស់លាស់ សម្រាប់ការទាញយកទិន្នន័យ Asynchronous ឱ្យមើលទៅដូចជាកូដ Synchronous ធម្មតា។`
      },
      starterCode: `Future<String> loadAppConfig() async {
  await Future.delayed(Duration(milliseconds: 400));
  return 'Config Loaded: {theme: dark, locale: km_KH}';
}

void main() async {
  print('Loading app setting configs...');
  String config = await loadAppConfig();
  print('Config Result: $config');
}`
    },
    {
      id: "dart-8-5-async-error-handling-try-catch",
      title: {
        en: "8.5 Asynchronous Error Handling with try-catch & Future.error()",
        km: "៨.៥ ការចាប់ Error ក្នុង Asynchronous ដោយប្រើ try-catch"
      },
      content: {
        en: `# 8.5 Async Error Handling

Use standard \`try-catch-finally\` blocks inside \`async\` functions to catch errors thrown across \`await\` points cleanly.`,
        km: `# ៨.៥ ការចាប់ Error ក្នុង Asynchronous

ប្រើប្រាស់ \`try-catch-finally\` ធម្មតា នៅក្នុង \`async\` functions ដើម្បីចាប់យក Error ដែលបោះចេញពី \`await\` យ៉ាងមានសុវត្ថិភាព។`
      },
      starterCode: `Future<void> performPayment() async {
  try {
    print('Connecting to Wing Payment Gateway...');
    await Future.delayed(Duration(milliseconds: 500));
    throw FormatException('Invalid QR Checksum Signature');
  } on FormatException catch (e) {
    print('❌ Caught Specific Format Error: \${e.message}');
  } catch (e) {
    print('❌ Generic Error: $e');
  } finally {
    print('🔒 Closing Secure Gateway Connection.');
  }
}

void main() async {
  await performPayment();
}`
    },
    {
      id: "dart-8-6-streams-reactive-pipelines",
      title: {
        en: "8.6 Stream<T> Basics & Reactive Event Pipelines",
        km: "៨.៦ មូលដ្ឋានគ្រឹះនៃ Stream<T> និង Reactive Event Pipelines"
      },
      content: {
        en: `# 8.6 Stream<T> Fundamentals

A \`Stream<T>\` is a continuous sequence of asynchronous events. Unlike a \`Future\` which returns a single value, a \`Stream\` delivers multiple values over time.`,
        km: `# ៨.៦ មូលដ្ឋានគ្រឹះនៃ Stream<T>

\`Stream<T>\` គឺជាខ្សែសង្វាក់ទិន្នន័យព្រឹត្តិការណ៍ Asynchronous បន្តបន្ទាប់គ្នា។ ខុសពី \`Future\` ដែលប្រគល់តម្លៃតែមួយ \`Stream\` ផ្តល់តម្លៃជាច្រើនបន្តបន្ទាប់គ្នាតាមពេលវេលា។`
      },
      starterCode: `Stream<int> countSeconds(int max) async* {
  for (int i = 1; i <= max; i++) {
    await Future.delayed(Duration(milliseconds: 300));
    yield i; // Emits next value into the stream
  }
}

void main() async {
  print('Listening to timer stream...');
  await for (var second in countSeconds(4)) {
    print('⏱️ Tick: $second sec');
  }
  print('Stream complete!');
}`
    },
    {
      id: "dart-8-7-async-generators-yield",
      title: {
        en: "8.7 Async Generators (async*) & 'yield' / 'yield*'",
        km: "៨.៧ Async Generators (async*) និងការប្រើប្រាស់ yield / yield*"
      },
      content: {
        en: `# 8.7 Async Generators

- **\`async*\`**: Function modifier that marks a function as an asynchronous generator returning a \`Stream<T>\`.
- **\`yield value\`**: Emits a single item to the stream.
- **\`yield* stream\`**: Delegates emission to another stream source.`,
        km: `# ៨.៧ Async Generators

- **\`async*\`**: ប្រើប្រាស់សម្រាប់ប្រកាស Function ជា Asynchronous Generator ដែលប្រគល់ \`Stream<T>\`។
- **\`yield value\`**: បោះបញ្ជូនធាតុមួយទៅកាន់ Stream។
- **\`yield* stream\`**: បញ្ជូនបន្តការបោះធាតុចេញពី Stream មួយទៀត។`
      },
      starterCode: `Stream<String> passAppDriverLocation() async* {
  List<String> coordinates = [
    'Phnom Penh Tower (11.5564, 104.9282)',
    'Independence Monument (11.5519, 104.9286)',
    'Aeon Mall Phnom Penh (11.5478, 104.9351)'
  ];

  for (var loc in coordinates) {
    await Future.delayed(Duration(milliseconds: 400));
    yield '🚖 Driver Location: $loc';
  }
}

void main() async {
  await for (var update in passAppDriverLocation()) {
    print(update);
  }
}`
    },
    {
      id: "dart-8-8-single-subscription-vs-broadcast",
      title: {
        en: "8.8 Single-Subscription vs Broadcast Streams",
        km: "៨.៨ ការប្រៀបធៀប Single-Subscription និង Broadcast Streams"
      },
      content: {
        en: `# 8.8 Single-Subscription vs Broadcast Streams

- **Single-Subscription Stream**: Allows only **one listener**. Events are buffered until listened to.
- **Broadcast Stream**: Allows **multiple listeners** simultaneously (e.g., UI state updates, location tracking).`,
        km: `# ៨.៨ ការប្រៀបធៀប Single-Subscription និង Broadcast Streams

- **Single-Subscription Stream**: អនុញ្ញាតឱ្យមាន Listener តែ **១ ប៉ុណ្ណោះ**។
- **Broadcast Stream**: អនុញ្ញាតឱ្យមាន Listener **ជាច្រើនដំណាលគ្នា** (ឧទាហរណ៍៖ UI State updates, GPS Tracking)។`
      },
      starterCode: `import 'dart:async';

void main() {
  var controller = StreamController<String>.broadcast();

  // Listener 1: UI Widget
  controller.stream.listen((event) => print('📱 Listener 1 (UI Widget): $event'));

  // Listener 2: Analytics Logger
  controller.stream.listen((event) => print('📊 Listener 2 (Analytics): $event'));

  controller.sink.add('USER_CLICKED_KHQR_BUTTON');
  controller.sink.add('PAYMENT_COMPLETED');

  controller.close();
}`
    },
    {
      id: "dart-8-9-streamcontroller-event-pipelines",
      title: {
        en: "8.9 StreamController & Custom Event Pipelines",
        km: "៨.៩ StreamController និងការគ្រប់គ្រង Event Pipelines"
      },
      content: {
        en: `# 8.9 StreamController

\`StreamController<T>\` grants low-level manual control over a stream source:
- **\`controller.sink.add(data)\`**: Pushes data items into the stream pipeline.
- **\`controller.sink.addError(e)\`**: Pushes error signals into the pipeline.
- **\`controller.close()\`**: Safely terminates the stream pipeline.`,
        km: `# ៨.៩ StreamController

\`StreamController<T>\` ផ្តល់នូវការគ្រប់គ្រង Stream ផ្ទាល់ដៃកម្រិតខ្ពស់៖
- **\`controller.sink.add(data)\`**: បញ្ជូនទិន្នន័យចូលទៅក្នុង Stream pipeline។
- **\`controller.sink.addError(e)\`**: បញ្ជូន Error signal ចូលក្នុង pipeline។
- **\`controller.close()\`**: បិទ Stream pipeline ដោយសុវត្ថិភាព។`
      },
      starterCode: `import 'dart:async';

void main() async {
  final cartStreamController = StreamController<int>();

  cartStreamController.stream.listen(
    (count) => print('🛒 Cart Badge Updated: $count items'),
    onError: (err) => print('❌ Stream Error: $err'),
    onDone: () => print('✅ Cart Stream Closed.'),
  );

  cartStreamController.sink.add(1);
  cartStreamController.sink.add(3);
  cartStreamController.sink.add(5);
  await cartStreamController.close();
}`
    },
    {
      id: "dart-8-10-lab-realtime-delivery-tracker",
      title: {
        en: "8.10 Practical Lab: Real-Time PassApp / Grab Delivery Stream Pipeline",
        km: "៨.១០ អនុវត្តជាក់ស្តែង៖ ប្រព័ន្ធតាមដានទិន្នន័យ PassApp Delivery (Stream Pipeline)"
      },
      content: {
        en: `# 8.10 Practical Lab: Delivery Tracker Stream

Construct a real-time PassApp delivery tracking pipeline streaming driver status, GPS coordinates, distance remaining, and estimated arrival time.`,
        km: `# ៨.១០ អនុវត្តជាក់ស្តែង៖ ប្រព័ន្ធតាមដានទិន្នន័យ PassApp Delivery (Stream Pipeline)

សាងសង់ប្រព័ន្ធតាមដានព័ត៌មានដឹកជញ្ជូន PassApp Real-time ដោយប្រើប្រាស់ Stream, async*, និង Broadcast Controllers។`
      },
      starterCode: `class DeliveryStatus {
  final String stage;
  final double kmRemaining;
  DeliveryStatus(this.stage, this.kmRemaining);
}

Stream<DeliveryStatus> trackPassAppOrder() async* {
  yield DeliveryStatus('Driver Accepted Order', 4.5);
  await Future.delayed(Duration(milliseconds: 300));
  yield DeliveryStatus('Picked up package at Brown Coffee', 3.0);
  await Future.delayed(Duration(milliseconds: 300));
  yield DeliveryStatus('On Monivong Blvd', 1.2);
  await Future.delayed(Duration(milliseconds: 300));
  yield DeliveryStatus('Arrived at Destination! 📦', 0.0);
}

void main() async {
  print('=== REALTIME PASSAPP TRACKER ===');
  await for (var status in trackPassAppOrder()) {
    print('📍 \${status.stage} - Distance Remaining: \${status.kmRemaining} km');
  }
}`
    }
  ]
};
