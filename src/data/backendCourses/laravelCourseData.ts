import { BackendCourse } from '../backendCoursesHubData';

export const LARAVEL_COURSE_DATA: BackendCourse = {
  id: 'laravel',
  slug: 'laravel-production-apis',
  title: {
    en: 'Laravel Production APIs — Building Real Backends with PHP',
    km: 'Laravel Production APIs — សាង Backend ពិតប្រាកដដោយប្រើ PHP'
  },
  iconName: 'laravel',
  type: 'framework',
  parentLanguageId: 'php',
  categoryId: 'frameworks',
  difficulty: 'Intermediate',
  shortDescription: {
    en: 'The most popular PHP framework, used to power real production APIs at scale.',
    km: 'Framework PHP ដែលពេញនិយមបំផុត ប្រើសាង API ផលិតកម្មពិតប្រាកដក្នុងទំហំធំ។'
  },
  summary: {
    en: 'Laravel is the most widely used PHP framework, and it powers everything from small startup APIs to large-scale production backends serving millions of requests a day. It takes the PHP language you already know and layers on the tools that real backend engineering needs: clean routing, an expressive database layer called Eloquent, a built-in authentication system, and conventions that keep large codebases organized instead of turning into a tangle of scattered scripts. This course takes everything you learned in the PHP Fundamentals course and applies it to building real, production-shaped APIs: routing and controllers, Eloquent ORM and migrations, request validation, authentication with Laravel Sanctum, relationships between database tables, and the production concerns — caching, queues, environment configuration, and testing — that separate a toy project from something you could actually ship. By the end, you\'ll understand exactly how a real Laravel backend is structured and have built a complete, working REST API of your own.',
    km: 'Laravel ជា framework PHP ដែលត្រូវបានប្រើប្រាស់យ៉ាងទូលំទូលាយបំផុត ហើយវាជំរុញអ្វីៗគ្រប់យ៉ាងចាប់ពី API ក្រុមហ៊ុនតូចៗរហូតដល់ backend ផលិតកម្មទំហំធំដែលបម្រើសំណើរាប់លាននៅមួយថ្ងៃ។ វាយកភាសា PHP ដែលអ្នកបានចេះរួចមកហើយ មកបន្ថែមឧបករណ៍ដែលការងារ backend engineering ពិតប្រាកដត្រូវការ៖ routing ស្អាត, ស្រទាប់មូលដ្ឋានទិន្នន័យដ៏មានតម្លៃហៅថា Eloquent, ប្រព័ន្ធផ្ទៀងផ្ទាត់អត្តសញ្ញាណដែលមានស្រាប់ (authentication), និងលក្ខណៈស្តង់ដារ (conventions) ដែលរក្សា codebase ធំៗឱ្យមានរបៀបរៀបរយ ជំនួសឱ្យក្លាយជាកម្មវិធីខ្ចាត់ខ្ចាយ។ វគ្គសិក្សានេះយកអ្វីៗទាំងអស់ដែលអ្នករៀនក្នុងវគ្គ PHP Fundamentals ហើយអនុវត្តទៅលើការសាង API ផលិតកម្មពិតប្រាកដ៖ routing និង controllers, Eloquent ORM និង migrations, ការផ្ទៀងផ្ទាត់ទិន្នន័យបញ្ចូល (validation), ការផ្ទៀងផ្ទាត់អត្តសញ្ញាណជាមួយ Laravel Sanctum, ទំនាក់ទំនងរវាងតារាងមូលដ្ឋានទិន្នន័យ, និងកិច្ចការផលិតកម្ម — caching, queues, ការកំណត់រចនាសម្ព័ន្ធបរិស្ថាន (environment configuration) និងការសាកល្បង (testing) — ដែលញែកគម្រោងលេងសើចចេញពីអ្វីមួយដែលអ្នកអាចដាក់ឱ្យប្រើប្រាស់ពិតប្រាកដ។ ចប់វគ្គនេះ អ្នកនឹងយល់ច្បាស់ពីរបៀបដែល Laravel backend ពិតប្រាកដត្រូវបានរៀបចំ ហើយបានសាង REST API ពេញលេញផ្ទាល់ខ្លួន។'
  },
  estimatedHours: 28,
  lessonCount: 33,
  usedFor: 'Production REST APIs, SaaS E-Commerce Engines, Enterprise Backends, High-Volume Web Portals',
  realWorldApps: ['Mastercard Payment Hubs', 'Twitch Extensions', 'Pfizer Internal Services', 'Square Enix Game Services'],
  prerequisites: {
    en: 'Completion of a PHP Fundamentals course (or equivalent PHP knowledge) is strongly recommended — this course assumes comfort with PHP syntax, arrays, functions, basic OOP (classes, interfaces), and how HTTP requests work, and focuses entirely on applying that to Laravel.',
    km: 'គួរតែបានបញ្ចប់វគ្គសិក្សា PHP Fundamentals (ឬមានចំណេះដឹង PHP ស្មើគ្នា) — វគ្គនេះសន្មតថាលោកអ្នកមានភាពស្ទាត់ជំនាញជាមួយ PHP syntax, arrays, functions, basic OOP (classes, interfaces) និងដំណើរការនៃ HTTP requests។'
  },
  whatYouWillLearn: {
    en: [
      'Install Laravel and understand its project structure and Artisan CLI',
      'Build routes and controllers, and understand the request/response lifecycle',
      'Model and migrate database tables using Laravel\'s migration system',
      'Query and manipulate data expressively using Eloquent ORM',
      'Validate incoming requests using Form Request classes',
      'Return clean, consistent JSON with API Resources',
      'Authenticate API clients using Laravel Sanctum (token-based auth)',
      'Define relationships between models (one-to-many, many-to-many)',
      'Protect routes with middleware and authorize actions with Policies',
      'Use caching and queued jobs to keep API responses fast',
      'Manage configuration safely with .env files across environments',
      'Write feature tests for API endpoints using Laravel\'s built-in testing tools',
      'Build a complete, real, authenticated REST API from scratch'
    ],
    km: [
      'ដំឡេីង Laravel និងយល់ដឹងពីរចនាសម្ព័ន្ធគម្រោងព្រមទាំង Artisan CLI',
      'សាង routes និង controllers ព្រមទាំងយល់ដឹងពី request/response lifecycle',
      'ម៉ូឌែល និងបង្កើត migrations សម្រាប់តារាង database ដោយប្រើប្រាស់ប្រព័ន្ធ migration របស់ Laravel',
      'ទាញយក និងចាត់ចែងទិន្នន័យយ៉ាងងាយស្រួលដោយប្រើ Eloquent ORM',
      'ផ្ទៀងផ្ទាត់ទិន្នន័យ request ដោយប្រើ Form Request classes',
      'បញ្ជូនទិន្នន័យឆ្លើយតបជា JSON ស្តង់ដារ និងស្អាតតាមរយៈ API Resources',
      'ផ្ទៀងផ្ទាត់អត្តសញ្ញាណ API clients ដោយប្រើ Laravel Sanctum (token-based auth)',
      'កំណត់ទំនាក់ទំនងរវាង models (one-to-many, many-to-many)',
      'ការពារ routes ដោយប្រើ middleware និងផ្តល់សិទ្ធិប្រតិបត្តិការដោយប្រើ Policies',
      'ប្រើប្រាស់ caching និង queued jobs ដើម្បីរក្សា API responses ឱ្យលឿន',
      'គ្រប់គ្រងការកំណត់បរិស្ថានដោយសុវត្ថិភាពតាមរយៈ `.env` files',
      'សរសេរ feature tests សម្រាប់ API endpoints ដោយប្រើប្រាស់ឧបករណ៍ testing របស់ Laravel',
      'សាង REST API ពេញលេញ និងមានប្រព័ន្ធ authentication ពិតប្រាកដពីដំបូង'
    ]
  },
  toolsAndSetup: {
    en: '1. Install PHP (8.2 or later) and Composer (PHP\'s package manager)\n2. Create a new Laravel project using `composer create-project laravel/laravel shopcore`\n3. Install a local database — SQLite is the easiest to start with and works out of the box\n4. Start the built-in development server with `php artisan serve` and confirm the welcome page loads',
    km: '១. ដំឡើង PHP (8.2 ឬខ្ពស់ជាង) និង Composer (Package Manager របស់ PHP)\n២. បង្កើតគម្រោង Laravel ថ្មីដោយប្រើ `composer create-project laravel/laravel shopcore`\n៣. កំណត់ Local Database — SQLite ជាងជម្រើសងាយស្រួលបំផុតសម្រាប់ចាប់ផ្តើម\n៤. ដំណើរការ Development Server ដោយប្រើ `php artisan serve` ហើយផ្ទៀងផ្ទាត់ទំព័រ Welcome'
  },
  cheatSheet: [
    {
      concept: 'Route Definition (routes/api.php)',
      code: `use App\\Http\\Controllers\\ProductController;\n\nRoute::get('/products', [ProductController::class, 'index']);\nRoute::post('/products', [ProductController::class, 'store']);`,
      explanation: {
        en: 'Defines stateless JSON API routes mapped to controller action methods.',
        km: 'កំណត់ API routes ដែលមិនរក្សា session រួចភ្ជាប់ទៅកាន់ controller methods។'
      }
    },
    {
      concept: 'Eloquent Query with Relationship',
      code: `$products = Product::with('category')\n    ->where('quantity', '>', 0)\n    ->paginate(15);`,
      explanation: {
        en: 'Fetches products with eager-loaded category relationship and pagination.',
        km: 'ទាញយកទិន្នន័យ products ជាមួយ eager loading category និងការចែកទំព័រ (pagination)។'
      }
    },
    {
      concept: 'API Resource Transformation',
      code: `public function toArray($request): array {\n    return [\n        'id' => $this->id,\n        'name' => $this->name,\n        'price' => (float) $this->price,\n        'in_stock' => $this->quantity > 0,\n    ];\n}`,
      explanation: {
        en: 'Encapsulates model data transformation into a clean, predictable JSON contract.',
        km: 'រៀបចំទម្រង់ទិន្នន័យ model ទៅជា JSON response ស្តង់ដារ និងទស្សន៍ទាយបាន។'
      }
    },
    {
      concept: 'Sanctum Token Issuance',
      code: `$user = User::where('email', $request->email)->first();\n$token = $user->createToken('api-token')->plainTextToken;\nreturn response()->json(['token' => $token]);`,
      explanation: {
        en: 'Generates a plain-text bearer token for authenticated API clients.',
        km: 'បង្កើត Bearer Token សម្រាប់ API Client ដែលបានផ្ទៀងផ្ទាត់អត្តសញ្ញាណរួច។'
      }
    }
  ],
  quiz: [
    {
      id: 'lar-q1',
      question: {
        en: 'Why should API routes be defined in routes/api.php instead of routes/web.php in Laravel?',
        km: 'ហេតុអ្វីបានជាត្រូវប្រកាស API routes ក្នុង routes/api.php ជំនួសឱ្យ routes/web.php ក្នុង Laravel?'
      },
      options: [
        { id: '1', text: { en: 'routes/api.php routes are stateless and bypass cookie/session/CSRF middleware', km: 'routes/api.php មិនរក្សា state និងរំលង cookie, session, និង CSRF protection middleware' }, isCorrect: true },
        { id: '2', text: { en: 'routes/web.php routes cannot return JSON responses', km: 'routes/web.php មិនអាចបញ្ជូនទិន្នន័យជា JSON បានឡើយ' }, isCorrect: false },
        { id: '3', text: { en: 'routes/api.php is only compatible with MySQL databases', km: 'routes/api.php ដើរតែជាមួយ MySQL Database ប៉ុណ្ណោះ' }, isCorrect: false },
        { id: '4', text: { en: 'routes/web.php disables Eloquent ORM queries', km: 'routes/web.php បិទមិនឱ្យប្រើប្រាស់ Eloquent ORM ឡើយ' }, isCorrect: false }
      ],
      explanation: {
        en: 'API routes in routes/api.php apply the api middleware group which is stateless and avoids session overhead or CSRF token checks.',
        km: 'API routes ប្រើប្រាស់ api middleware group ដែលមានលក្ខណៈ stateless និងមិនត្រូវការ CSRF token ឬ session overhead ឡើយ។'
      }
    },
    {
      id: 'lar-q2',
      question: {
        en: 'What primary problem do Laravel API Resources solve in backend development?',
        km: 'តើ Laravel API Resources ដោះស្រាយបញ្ហាចម្បងអ្វីខ្លះក្នុងការបង្កើត Backend?'
      },
      options: [
        { id: '1', text: { en: 'They provide a transformation layer to shape and filter JSON outputs predictably', km: 'ពួកវាផ្តល់ស្រទាប់បំប្លែងទិន្នន័យដើម្បីកំណត់ទម្រង់ និង Filter JSON Output យ៉ាងប្រាកដប្រជា' }, isCorrect: true },
        { id: '2', text: { en: 'They automatically compile PHP code into WebAssembly', km: 'ពួកវាបំប្លែងកូដ PHP ទៅជា WebAssembly ដោយស្វ័យប្រវត្តិ' }, isCorrect: false },
        { id: '3', text: { en: 'They replace database migrations and SQL schema generation', km: 'ពួកវាជំនួសការប្រើប្រាស់ Database Migrations និង SQL schema' }, isCorrect: false },
        { id: '4', text: { en: 'They bypass HTTP authentication headers completely', km: 'ពួកវារំលង HTTP authentication headers ទាំងស្រុង' }, isCorrect: false }
      ],
      explanation: {
        en: 'API Resources allow developers to cleanly format Eloquent model data into standardized JSON structures without exposing sensitive database columns.',
        km: 'API Resources អនុញ្ញាតឱ្យសរសេរកូដរៀបចំទម្រង់ទិន្នន័យចេញពី Eloquent model ទៅជា JSON ស្តង់ដារ ដោយមិនបង្ហាញ column  حساس របស់ Database ឡើយ។'
      }
    }
  ],
  capstoneProject: {
    id: 'shopcore-api',
    slug: 'shopcore-api',
    title: {
      en: 'ShopCore API',
      km: 'ShopCore REST API ជាមួយ Laravel & Sanctum Auth'
    },
    description: {
      en: 'A real, authenticated Laravel REST API for a small e-commerce backend: products, categories, and orders, with token-based authentication via Sanctum, request validation, clean JSON responses via API Resources, and proper authorization rules.',
      km: 'REST API ពិតប្រាកដមានប្រព័ន្ធ Authentication សម្រាប់ e-commerce backend៖ គ្រប់គ្រងផលិតផល, ជំពូក, និងការកុម្ម៉ង់ទិញ (orders) ជាមួយ Sanctum Token, Validation, API Resources, និងសិទ្ធិប្រើប្រាស់។'
    },
    featureChecklist: {
      en: [
        'POST /api/register and POST /api/login — user registration and Sanctum token issuance',
        'GET /api/products — list products with category info, paginated',
        'POST /api/products — create a product (admin-only, enforced via a Policy)',
        'GET /api/products/{id} — get a single product',
        'POST /api/orders — authenticated customers place an order for one or more products',
        'GET /api/orders — a customer sees only their own orders (authorization enforced)',
        'Stock quantity decremented when an order is placed, with validation preventing overselling',
        'A queued job that logs an "order confirmation" after checkout, instead of blocking the request'
      ],
      km: [
        'POST /api/register & POST /api/login — ចុះឈ្មោះ និងបង្កើត Sanctum API Token',
        'GET /api/products — បង្ហាញបញ្ជីផលិតផល និង Category ព្រមទាំងចែកទំព័រ (paginated)',
        'POST /api/products — បង្កើតផលិតផលថ្មី (កំណត់សិទ្ធិសម្រាប់តែ Admin តាម Policy)',
        'GET /api/products/{id} — បង្ហាញព័ត៌មានលម្អិតនៃផលិតផល',
        'POST /api/orders — អតិថិជនដែលបាន Login ធ្វើការកុម្ម៉ង់ទិញផលិតផលមួយឬច្រើន',
        'GET /api/orders — អតិថិជនមើលឃើញតែ Orders របស់ខ្លួនឯងប៉ុណ្ណោះ',
        'កាត់បន្ថយចំនួនស្កុកស្វ័យប្រវត្តិពេល Order ជោគជ័យ ព្រមទាំងការពារការលក់លើសចំនួនស្កុក',
        'Queued Job ផ្ញើការបញ្ជាក់ Order តាមក្រោយដោយមិនធ្វើឱ្យរាំងស្ទះ HTTP Request'
      ]
    },
    starterCode: {
      language: 'php',
      code: `<?php

namespace App\\Http\\Controllers;

use App\\Models\\Product;
use Illuminate\\Http\\Request;

class ProductController extends Controller
{
    public function index()
    {
        return response()->json([
            'message' => 'ShopCore API is running',
            'data' => Product::all()
        ]);
    }
}`
    },
    finalCode: `<?php

namespace App\\Http\\Controllers;

use App\\Models\\Order;
use App\\Models\\Product;
use App\\Http\\Resources\\OrderResource;
use App\\Http\\Resources\\ProductResource;
use App\\Jobs\\SendOrderConfirmation;
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\DB;

class ShopCoreController extends Controller
{
    public function listProducts(Request $request)
    {
        $products = Product::with('category')
            ->when($request->category_id, fn($q) => $q->where('category_id', $request->category_id))
            ->paginate(10);

        return ProductResource::collection($products);
    }

    public function placeOrder(Request $request)
    {
        $validated = $request->validate([
            'items' => 'required|array|min:1',
            'items.*.product_id' => 'required|exists:products,id',
            'items.*.quantity' => 'required|integer|min:1',
        ]);

        $user = $request->user();

        $order = DB::transaction(function () use ($validated, $user) {
            $total = 0;
            $order = Order::create([
                'user_id' => $user->id,
                'status' => 'pending',
                'total_amount' => 0
            ]);

            foreach ($validated['items'] as $item) {
                $product = Product::findOrFail($item['product_id']);

                if ($product->quantity < $item['quantity']) {
                    throw new \\Exception("Insufficient stock for {$product->name}");
                }

                $product->decrement('quantity', $item['quantity']);
                $itemTotal = $product->price * $item['quantity'];
                $total += $itemTotal;

                $order->items()->create([
                    'product_id' => $product->id,
                    'quantity' => $item['quantity'],
                    'unit_price' => $product->price
                ]);
            }

            $order->update(['total_amount' => $total, 'status' => 'paid']);
            return $order;
        });

        // Dispatch background queued job
        SendOrderConfirmation::dispatch($order);

        return new OrderResource($order->load('items.product'));
    }
}`,
    sampleRequests: [
      {
        title: 'POST /api/login',
        method: 'POST',
        url: '/api/login',
        body: JSON.stringify({ email: 'customer@shopcore.io', password: 'secretpassword' }, null, 2),
        responseStatus: 200,
        responseBody: JSON.stringify({
          message: 'Login successful',
          token: '1|sanctum_token_abc123xyz'
        }, null, 2)
      },
      {
        title: 'GET /api/products',
        method: 'GET',
        url: '/api/products',
        responseStatus: 200,
        responseBody: JSON.stringify({
          data: [
            { id: 1, name: 'Mechanical Keyboard', category: 'Electronics', price: 89.99, quantity: 45 },
            { id: 2, name: 'Ergonomic Desk Chair', category: 'Furniture', price: 249.00, quantity: 12 }
          ],
          links: { first: '/api/products?page=1', last: '/api/products?page=1' },
          meta: { current_page: 1, total: 2 }
        }, null, 2)
      },
      {
        title: 'POST /api/orders',
        method: 'POST',
        url: '/api/orders',
        headers: {
          'Authorization': 'Bearer 1|sanctum_token_abc123xyz',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          items: [{ product_id: 1, quantity: 2 }]
        }, null, 2),
        responseStatus: 201,
        responseBody: JSON.stringify({
          data: {
            id: 101,
            status: 'paid',
            total_amount: 179.98,
            items: [
              { product_id: 1, name: 'Mechanical Keyboard', quantity: 2, unit_price: 89.99 }
            ]
          }
        }, null, 2)
      }
    ]
  },
  modules: [
    // Module 1 — Introduction & Setup (4 lessons)
    {
      moduleNumber: 1,
      title: {
        en: 'Module 1 — Introduction & Setup',
        km: 'មេរៀនទី ១ — ការណែនាំ និងការរៀបចំ បរិស្ថានកូដ'
      },
      description: {
        en: 'Understand Laravel\'s role in PHP backend engineering, project directory layout, Artisan CLI, and HTTP request lifecycle.',
        km: 'យល់ដឹងពីតួនាទីរបស់ Laravel ក្នុងការបង្កើត Backend, រចនាសម្ព័ន្ធ Folder, Artisan CLI និង Request Lifecycle។'
      },
      lessons: [
        {
          id: 'lar-1-1',
          slug: 'laravel-framework-role-backend',
          moduleNumber: 1,
          lessonNumberInModule: 1,
          title: {
            en: '1.1 What Laravel is, and why frameworks matter for real backend work',
            km: '១.១ អ្វីទៅជា Laravel និងសារៈសំខាន់នៃ Framework សម្រាប់ការងារ Backend'
          },
          durationMinutes: 18,
          difficulty: 'Intermediate',
          objective: {
            en: 'Explain what Laravel provides on top of plain PHP and why that matters for building real production APIs.',
            km: 'ពន្យល់ពីអ្វីដែល Laravel ផ្តល់ជូនបន្ថែមលើ PHP សុទ្ធ និងហេតុផលដែលវាសំខាន់សម្រាប់ការសាង Production API។'
          },
          explanation: {
            en: 'Plain PHP gives you everything you need to handle an HTTP request and talk to a database, but on a real project you\'d quickly end up hand-rolling routing, database connections, input validation, and authentication yourself — and every project would do it slightly differently, making it hard for engineers to move between codebases. Laravel is a framework that provides all of these pieces in a consistent, well-documented way: a router, an ORM (Eloquent), a validation system, an authentication layer, and strong conventions for where different kinds of code live.',
            km: 'PHP សុទ្ធផ្តល់ឱ្យអ្នកនូវអ្វីៗគ្រប់យ៉ាងដែលអ្នកត្រូវការដើម្បីគ្រប់គ្រងសំណើ HTTP និងនិយាយទៅកាន់មូលដ្ឋានទិន្នន័យ ប៉ុន្តែនៅក្នុងគម្រោងពិតប្រាកដ អ្នកនឹងឆាប់ត្រូវសរសេរ routing, ការតភ្ជាប់មូលដ្ឋានទិន្នន័យ, ការផ្ទៀងផ្ទាត់ទិន្នន័យបញ្ចូល, និងការផ្ទៀងផ្ទាត់អត្តសញ្ញាណដោយខ្លួនឯង — ហើយគម្រោងនីមួយៗនឹងធ្វើវាខុសគ្នាបន្តិច ធ្វើឱ្យពិបាកសម្រាប់វិស្វករផ្លាស់ប្តូររវាង codebase ។ Laravel ជា framework ដែលផ្តល់ផ្នែកទាំងអស់នេះក្នុងលក្ខណៈស្របគ្នា និងមានឯកសារល្អ។'
          },
          tutorial: {
            en: 'Defining your first API route in routes/api.php:',
            km: 'ការកំណត់ API Route ដំបូងរបស់អ្នកក្នុង routes/api.php៖'
          },
          starterCode: {
            language: 'php',
            code: `use Illuminate\\Support\\Facades\\Route;

Route::get('/hello', function () {
    return response()->json(['message' => 'Hello from Laravel!']);
});`
          },
          practiceExercise: {
            question: {
              en: 'Add a second route, /api/hello/{name}, that returns a personalized JSON greeting using the route parameter.',
              km: 'បន្ថែម Route ទីពីរ `/api/hello/{name}` ដែលបញ្ជូនត្រឡប់ JSON Greeting មានឈ្មោះតាម Route Parameter។'
            },
            solution: `Route::get('/hello/{name}', function ($name) {
    return response()->json(['message' => "Hello, {$name}! Welcome to Laravel."]);
});`
          },
          tips: {
            en: 'Always use routes/api.php for stateless JSON APIs so you do not carry web session and CSRF cookie overhead.',
            km: 'តែងតែប្រើប្រាស់ routes/api.php សម្រាប់ stateless JSON APIs ដើម្បីកុំឱ្យផ្ទុក Session និង CSRF Cookies ដោយមិនចាំបាច់។'
          },
          realWorldExample: {
            title: {
              en: 'Production Routing',
              km: 'Routing ក្នុងប្រព័ន្ធផលិតកម្ម'
            },
            description: {
              en: 'Every endpoint in modern Laravel applications starts from a clean route declaration in routes/api.php mapped to a dedicated controller.',
              km: 'គ្រប់ Endpoint ក្នុង Laravel ទំនើបចាប់ផ្តើមចេញពី Route Declaration ក្នុង routes/api.php ភ្ជាប់ទៅកាន់ Controller ជាក់លាក់។'
            }
          }
        },
        {
          id: 'lar-1-2',
          slug: 'laravel-install-project-structure',
          moduleNumber: 1,
          lessonNumberInModule: 2,
          title: {
            en: '1.2 Installing Laravel and exploring the project structure',
            km: '១.២ ការដំឡើង Laravel និងការយល់ដឹងពីរចនាសម្ព័ន្ធគម្រោង'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Bootstrap a new Laravel application using Composer and navigate app/, routes/, and database/ directories.',
            km: 'បង្កើតគម្រោង Laravel ថ្មីដោយប្រើ Composer និងស្វែងយល់ពី Folder app/, routes/, និង database/។'
          },
          starterCode: {
            language: 'bash',
            code: `# Create a new Laravel project
composer create-project laravel/laravel shopcore

# Navigate into project and start server
cd shopcore
php artisan serve`
          }
        },
        {
          id: 'lar-1-3',
          slug: 'laravel-artisan-cli-toolkit',
          moduleNumber: 1,
          lessonNumberInModule: 3,
          title: {
            en: '1.3 The Artisan CLI — Laravel\'s command-line toolkit',
            km: '១.៣ Artisan CLI — ឧបករណ៍បញ្ជារបស់ Laravel'
          },
          durationMinutes: 18,
          difficulty: 'Intermediate',
          objective: {
            en: 'Execute core Artisan commands for generating code scaffolding, running migrations, and inspecting routes.',
            km: 'ប្រើប្រាស់ Artisan commands សំខាន់ៗសម្រាប់បង្កើតកូដ, រត់ migrations, និងពិនិត្យមើលបញ្ជី routes។'
          },
          starterCode: {
            language: 'bash',
            code: `# List all available artisan commands
php artisan list

# Inspect registered routes
php artisan route:list`
          }
        },
        {
          id: 'lar-1-4',
          slug: 'laravel-request-response-lifecycle',
          moduleNumber: 1,
          lessonNumberInModule: 4,
          title: {
            en: '1.4 The request lifecycle: from URL to response, at a high level',
            km: '១.៤ ដំណើរការនៃ Request Lifecycle៖ ចាប់ពី URL រហូតដល់ Response'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Trace an incoming HTTP request through public/index.php, HTTP Kernel, Middleware, Router, and Controller.',
            km: 'តាមដានដំណើរការ HTTP request ឆ្លងកាត់ public/index.php, Kernel, Middleware, Router, និង Controller។'
          },
          starterCode: {
            language: 'text',
            code: `HTTP Request 
  ↓
public/index.php (Entry Point)
  ↓
HTTP Kernel & Global Middleware
  ↓
Router (routes/api.php)
  ↓
Route Middleware
  ↓
Controller Action → Model/Database
  ↓
HTTP JSON Response`
          }
        }
      ]
    },

    // Module 2 — Routing & Controllers (5 lessons)
    {
      moduleNumber: 2,
      title: {
        en: 'Module 2 — Routing & Controllers',
        km: 'មេរៀនទី ២ — Routing និង Controllers'
      },
      description: {
        en: 'Define RESTful routes, parameter binding, controller actions, and structured JSON responses.',
        km: 'កំណត់ RESTful routes, parameter binding, controller actions, និង structured JSON responses។'
      },
      lessons: [
        {
          id: 'lar-2-1',
          slug: 'laravel-defining-routes-api-php',
          moduleNumber: 2,
          lessonNumberInModule: 1,
          title: {
            en: '2.1 Defining routes in routes/api.php',
            km: '២.១ ការប្រកាស Routes ក្នុង routes/api.php'
          },
          durationMinutes: 18,
          difficulty: 'Intermediate',
          objective: {
            en: 'Map HTTP GET, POST, PUT, DELETE verbs to closure callbacks and controller references.',
            km: 'ភ្ជាប់ HTTP Verbs (GET, POST, PUT, DELETE) ទៅកាន់ Closure Callbacks ឬ Controllers។'
          },
          starterCode: {
            language: 'php',
            code: `use Illuminate\\Support\\Facades\\Route;

Route::get('/v1/status', fn() => response()->json(['status' => 'active']));`
          }
        },
        {
          id: 'lar-2-2',
          slug: 'laravel-route-parameters-model-binding',
          moduleNumber: 2,
          lessonNumberInModule: 2,
          title: {
            en: '2.2 Route parameters and route model binding',
            km: '២.២ Route Parameters និង Implicit Route Model Binding'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Leverage implicit route model binding to automatically inject model instances or throw 404s.',
            km: 'ប្រើប្រាស់ Route Model Binding ដើម្បីទាញយក Model Instance ស្វ័យប្រវត្តិ ឬបង្ហាញ 404 បើរកមិនឃើញ។'
          },
          starterCode: {
            language: 'php',
            code: `use App\\Models\\Product;

Route::get('/products/{product}', function (Product $product) {
    return response()->json($product);
});`
          }
        },
        {
          id: 'lar-2-3',
          slug: 'laravel-creating-controllers-artisan',
          moduleNumber: 2,
          lessonNumberInModule: 3,
          title: {
            en: '2.3 Creating and organizing controllers with Artisan',
            km: '២.៣ ការបង្កើត និងរៀបចំ Controllers ដោយប្រើ Artisan'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Generate API resource controllers using php artisan make:controller ProductController --api.',
            km: 'បង្កើត API Resource Controllers ដោយប្រើ `php artisan make:controller ProductController --api`។'
          },
          starterCode: {
            language: 'bash',
            code: `php artisan make:controller API/ProductController --api`
          }
        },
        {
          id: 'lar-2-4',
          slug: 'laravel-returning-json-responses',
          moduleNumber: 2,
          lessonNumberInModule: 4,
          title: {
            en: '2.4 Returning JSON responses from a controller',
            km: '២.៤ ការបញ្ជូន JSON Response ចេញពី Controller'
          },
          durationMinutes: 18,
          difficulty: 'Intermediate',
          objective: {
            en: 'Return standardized HTTP status codes and payloads using response()->json().',
            km: 'បញ្ជូន HTTP status codes និងទិន្នន័យ Payload តាមរយៈ response()->json()។'
          },
          starterCode: {
            language: 'php',
            code: `return response()->json([
    'success' => true,
    'data' => $data
], 200);`
          }
        },
        {
          id: 'lar-2-5',
          slug: 'laravel-practice-list-show-controller',
          moduleNumber: 2,
          lessonNumberInModule: 5,
          title: {
            en: '2.5 Practice: build a controller with two routes (list + show)',
            km: '២.៥ អនុវត្ត៖ បង្កើត Controller មួយដែលមាន Routes ពីរ (List + Show)'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Implement an in-memory or query controller handling index and show methods.',
            km: 'សរសេរ Controller ដែលមាន index និង show methods សម្រាប់បង្ហាញបញ្ជី និងព័ត៌មានលម្អិត។'
          },
          starterCode: {
            language: 'php',
            code: `namespace App\\Http\\Controllers;

class ProductController extends Controller
{
    private $items = [
        1 => ['id' => 1, 'name' => 'Laptop', 'price' => 999],
        2 => ['id' => 2, 'name' => 'Phone', 'price' => 699]
    ];

    public function index() {
        return response()->json(array_values($this->$items));
    }

    public function show($id) {
        if (!isset($this->items[$id])) {
            return response()->json(['error' => 'Not found'], 404);
        }
        return response()->json($this->items[$id]);
    }
}`
          }
        }
      ]
    },

    // Module 3 — Database & Eloquent Basics (5 lessons)
    {
      moduleNumber: 3,
      title: {
        en: 'Module 3 — Database & Eloquent Basics',
        km: 'មេរៀនទី ៣ — មូលដ្ឋានទិន្នន័យ និង Eloquent ORM'
      },
      description: {
        en: 'Schema migrations, Active Record Eloquent models, basic queries, and mass assignment protections.',
        km: 'Schema migrations, Eloquent models, វិធីសាស្ត្រ Query និងសុវត្ថិភាព Mass Assignment ($fillable)។'
      },
      lessons: [
        {
          id: 'lar-3-1',
          slug: 'laravel-migrations-schema-version-control',
          moduleNumber: 3,
          lessonNumberInModule: 1,
          title: {
            en: '3.1 Migrations — version-controlling your database schema',
            km: '៣.១ Migrations — ការគ្រប់គ្រង Version នៃ Database Schema'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Create and run a Laravel migration to define a database table\'s structure in code.',
            km: 'បង្កើត និងរត់ Laravel Migration ដើម្បីកំណត់រចនាសម្ព័ន្ធ Table តាមរយៈកូដ PHP។'
          },
          explanation: {
            en: 'A migration is a PHP class that describes a change to your database schema — creating a table, adding a column, and so on — that gets checked into version control alongside your application code, so every developer (and every environment) can run php artisan migrate and end up with an identical database structure.',
            km: 'Migration ជា PHP Class ដែលកំណត់ការកែប្រែ Schema នៃ Database — បង្កើត table, បន្ថែម column។ វាអនុញ្ញាតឱ្យក្រុមងាររត់ `php artisan migrate` ដើម្បីទទួលបាន Database ដូចគ្នាទាំងស្រុង។'
          },
          starterCode: {
            language: 'php',
            code: `use Illuminate\\Database\\Migrations\\Migration;
use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Support\\Facades\\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->integer('quantity')->default(0);
            $table->decimal('price', 8, 2);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};`
          },
          practiceExercise: {
            question: {
              en: 'Add a nullable string column category to the products migration definition above.',
              km: 'បន្ថែម Column `category` ប្រភេទ Nullable String ទៅក្នុង Migration ខាងលើ។'
            },
            solution: `$table->string('category')->nullable();`
          }
        },
        {
          id: 'lar-3-2',
          slug: 'laravel-eloquent-models-active-record',
          moduleNumber: 3,
          lessonNumberInModule: 2,
          title: {
            en: '3.2 Introduction to Eloquent models and the Active Record pattern',
            km: '៣.២ ការណែនាំអំពី Eloquent Models និង Active Record Pattern'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Map Eloquent models to database tables and understand convention over configuration.',
            km: 'ភ្ជាប់ Eloquent Models ទៅកាន់ Database Tables និងយល់ពីគោលការណ៍ Convention Over Configuration។'
          },
          starterCode: {
            language: 'php',
            code: `namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;

class Product extends Model
{
    // Automatically binds to 'products' table
}`
          }
        },
        {
          id: 'lar-3-3',
          slug: 'laravel-basic-eloquent-queries',
          moduleNumber: 3,
          lessonNumberInModule: 3,
          title: {
            en: '3.3 Basic Eloquent queries: all(), find(), where(), create()',
            km: '៣.៣ Eloquent Queries មូលដ្ឋាន៖ all(), find(), where(), create()'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Perform CRUD database operations using expressive Eloquent method calls.',
            km: 'ធ្វើប្រតិបត្តិការ CRUD ដោយប្រើប្រាស់ Eloquent Methods យ៉ាងខ្លី និងច្បាស់លាស់។'
          },
          starterCode: {
            language: 'php',
            code: `// Fetch all products
$all = Product::all();

// Find by primary key
$item = Product::find(1);

// Filter query
$cheap = Product::where('price', '<', 50)->get();`
          }
        },
        {
          id: 'lar-3-4',
          slug: 'laravel-mass-assignment-fillable-property',
          moduleNumber: 3,
          lessonNumberInModule: 4,
          title: {
            en: '3.4 Mass assignment and the $fillable property',
            km: '៣.៤ សុវត្ថិភាព Mass Assignment និង $fillable Property'
          },
          durationMinutes: 18,
          difficulty: 'Intermediate',
          objective: {
            en: 'Protect models against mass-assignment vulnerabilities using $fillable or $guarded properties.',
            km: 'ការពារ Models ពីការកែប្រែ Column ដោយគ្មានការអនុញ្ញាត តាមរយៈ $fillable ឬ $guarded។'
          },
          starterCode: {
            language: 'php',
            code: `class Product extends Model
{
    protected $fillable = ['name', 'price', 'quantity', 'category_id'];
}`
          }
        },
        {
          id: 'lar-3-5',
          slug: 'laravel-practice-migration-model-seeder',
          moduleNumber: 3,
          lessonNumberInModule: 5,
          title: {
            en: '3.5 Practice: create a migration and model for a Product table, then seed it',
            km: '៣.៥ អនុវត្ត៖ បង្កើត Migration, Model, និង Seeder សម្រាប់ Product Table'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Combine migrations, models, and DatabaseSeeders to populate sample development data.',
            km: 'ផ្សំ Migrations, Models, និង DatabaseSeeders ដើម្បីដាក់ទិន្នន័យគំរូក្នុង Database។'
          },
          starterCode: {
            language: 'php',
            code: `// database/seeders/ProductSeeder.php
Product::create(['name' => 'Wireless Mouse', 'price' => 29.99, 'quantity' => 100]);`
          }
        }
      ]
    },

    // Module 4 — Building Real APIs (5 lessons)
    {
      moduleNumber: 4,
      title: {
        en: 'Module 4 — Building Real APIs',
        km: 'មេរៀនទី ៤ — ការសាង Real APIs ជាមួយ Laravel'
      },
      description: {
        en: 'Form request validation, API resources, HTTP status codes, and pagination.',
        km: 'Form request validation, API resources, HTTP status codes, និង pagination។'
      },
      lessons: [
        {
          id: 'lar-4-1',
          slug: 'laravel-form-request-classes-validation',
          moduleNumber: 4,
          lessonNumberInModule: 1,
          title: {
            en: '4.1 Form Request classes for clean, reusable validation',
            km: '៤.១ Form Request Classes សម្រាប់ការផ្ទៀងផ្ទាត់ទិន្នន័យ (Validation)'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Decouple input validation rules into dedicated FormRequest classes.',
            km: 'ញែកកូដ Validation Rules ចេញពី Controller ទៅដាក់ក្នុង FormRequest Class ផ្សេង។'
          },
          starterCode: {
            language: 'php',
            code: `namespace App\\Http\\Requests;

use Illuminate\\Foundation\\Http\\FormRequest;

class StoreProductRequest extends FormRequest
{
    public function authorize(): bool { return true; }

    public function rules(): array {
        return [
            'name' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'quantity' => 'required|integer|min:0'
        ];
    }
}`
          }
        },
        {
          id: 'lar-4-2',
          slug: 'laravel-api-resources-shaping-json',
          moduleNumber: 4,
          lessonNumberInModule: 2,
          title: {
            en: '4.2 API Resources — shaping consistent JSON output',
            km: '៤.២ API Resources — ការកំណត់ទម្រង់ JSON Response ស្តង់ដារ'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Use a Laravel API Resource to control exactly what an Eloquent model looks like when returned as JSON.',
            km: 'ប្រើប្រាស់ API Resource ដើម្បីគ្រប់គ្រងទម្រង់ទិន្នន័យដែលចេញពី Eloquent Model ទៅជា JSON។'
          },
          explanation: {
            en: 'If you return an Eloquent model directly from a controller, Laravel will serialize every column on that model to JSON — including sensitive fields. An API Resource is a dedicated class that sits between your model and the JSON response, letting you explicitly choose which fields to expose.',
            km: 'បើអ្នក Return Eloquent Model ដោយផ្ទាល់ Laravel នឹងបង្ហាញគ្រប់ Column ទាំងអស់។ API Resource ជួយគ្រប់គ្រង និងរៀបចំ Field ដែលត្រូវបង្ហាញយ៉ាងជាក់លាក់។'
          },
          starterCode: {
            language: 'php',
            code: `namespace App\\Http\\Resources;

use Illuminate\\Http\\Resources\\Json\\JsonResource;

class ProductResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'quantity' => $this->quantity,
            'price' => (float) $this->price,
            'in_stock' => $this->quantity > 0,
        ];
    }
}`
          },
          practiceExercise: {
            question: {
              en: 'Add a category_name field to ProductResource pulling from a loaded category relationship.',
              km: 'បន្ថែម Field `category_name` ក្នុង ProductResource ដោយទាញចេញពី Relationship `category`។'
            },
            solution: `'category_name' => $this->whenLoaded('category', fn () => $this->category->name),`
          }
        },
        {
          id: 'lar-4-3',
          slug: 'laravel-http-status-codes-error-responses',
          moduleNumber: 4,
          lessonNumberInModule: 3,
          title: {
            en: '4.3 Proper HTTP status codes and error responses',
            km: '៤.៣ ការប្រើប្រាស់ HTTP Status Codes និង Error Responses ស្តង់ដារ'
          },
          durationMinutes: 18,
          difficulty: 'Intermediate',
          objective: {
            en: 'Return accurate HTTP codes (201 Created, 422 Unprocessable Entity, 404 Not Found, 401 Unauthorized).',
            km: 'បញ្ជូន HTTP Status Codes ត្រឹមត្រូវ (201, 422, 404, 401) សម្រាប់ករណីនីមួយៗ។'
          },
          starterCode: {
            language: 'php',
            code: `return response()->json([
    'message' => 'Resource created successfully',
    'data' => $resource
], 201);`
          }
        },
        {
          id: 'lar-4-4',
          slug: 'laravel-pagination-list-endpoints',
          moduleNumber: 4,
          lessonNumberInModule: 4,
          title: {
            en: '4.4 Pagination for list endpoints',
            km: '៤.៤ ការធ្វើ Pagination សម្រាប់ List API Endpoints'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Paginate large Eloquent query results cleanly using Model::paginate(15).',
            km: 'ចែកទំព័រទិន្នន័យ (Paginate) ដោយប្រើប្រាស់ `Model::paginate(15)`។'
          },
          starterCode: {
            language: 'php',
            code: `$products = Product::paginate(10);
return ProductResource::collection($products);`
          }
        },
        {
          id: 'lar-4-5',
          slug: 'laravel-practice-validated-create-list-api',
          moduleNumber: 4,
          lessonNumberInModule: 5,
          title: {
            en: '4.5 Practice: build a fully validated create-and-list API for a resource',
            km: '៤.៥ អនុវត្ត៖ បង្កើត Create និង List API ដែលមាន Validation ពេញលេញ'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Combine FormRequests, API Resources, and Controllers into a cohesive REST endpoint.',
            km: 'ផ្សំ FormRequests, API Resources, និង Controllers ទៅជា REST Endpoint ពេញលេញ។'
          },
          starterCode: {
            language: 'php',
            code: `public function store(StoreProductRequest $request) {
    $product = Product::create($request->validated());
    return new ProductResource($product);
}`
          }
        }
      ]
    },

    // Module 5 — Authentication with Sanctum (4 lessons)
    {
      moduleNumber: 5,
      title: {
        en: 'Module 5 — Authentication with Sanctum',
        km: 'មេរៀនទី ៥ — Authentication ជាមួយ Laravel Sanctum'
      },
      description: {
        en: 'Token-based authentication, Sanctum configuration, route protection, and auth endpoints.',
        km: 'Token-based authentication, ការកំណត់ Sanctum, ការពារ routes, និង auth endpoints។'
      },
      lessons: [
        {
          id: 'lar-5-1',
          slug: 'laravel-token-auth-vs-session-auth',
          moduleNumber: 5,
          lessonNumberInModule: 1,
          title: {
            en: '5.1 Token-based authentication concepts vs session-based auth',
            km: '៥.១ គោលការណ៍ Token-based Authentication ប្រៀបធៀបនឹង Session-based Auth'
          },
          durationMinutes: 18,
          difficulty: 'Intermediate',
          objective: {
            en: 'Understand stateless bearer token mechanics for mobile and REST client integrations.',
            km: 'យល់ដឹងពីដំណើរការនៃ Stateless Bearer Token សម្រាប់ Mobile និង REST clients។'
          },
          starterCode: {
            language: 'text',
            code: `Client Request:
GET /api/orders
Headers: Authorization: Bearer 1|sanctum_token_xyz98124`
          }
        },
        {
          id: 'lar-5-2',
          slug: 'laravel-setting-up-sanctum-api-tokens',
          moduleNumber: 5,
          lessonNumberInModule: 2,
          title: {
            en: '5.2 Setting up Laravel Sanctum for API tokens',
            km: '៥.២ ការរៀបចំ Laravel Sanctum សម្រាប់បង្កើត API Tokens'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Issue and validate API tokens using Laravel Sanctum so only authenticated clients can access protected routes.',
            km: 'បង្កើត និងផ្ទៀងផ្ទាត់ API Tokens ជាមួយ Laravel Sanctum ដើម្បីការពារ Protected Routes។'
          },
          explanation: {
            en: 'Laravel Sanctum provides a lightweight way to authenticate API requests using personal access tokens — a client logs in once with credentials, receives a token string back, and includes that token in an Authorization header on subsequent requests.',
            km: 'Laravel Sanctum ផ្តល់ប្រព័ន្ធផ្ទៀងផ្ទាត់អត្តសញ្ញាណស្រាល ដោយបង្កើត Personal Access Token ជូន Client ពេល Login ជោគជ័យ។'
          },
          starterCode: {
            language: 'php',
            code: `namespace App\\Http\\Controllers;

use App\\Models\\User;
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if (! $user || ! Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $token = $user->createToken('api-token')->plainTextToken;

        return response()->json(['token' => $token]);
    }
}`
          },
          practiceExercise: {
            question: {
              en: 'Add a logout method to AuthController that revokes the current token.',
              km: 'បន្ថែម Method `logout` ក្នុង AuthController ដើម្បីលុប (Revoke) Token បច្ចុប្បន្ន។'
            },
            solution: `public function logout(Request $request) {
    $request->user()->currentAccessToken()->delete();
    return response()->json(['message' => 'Logged out']);
}`
          }
        },
        {
          id: 'lar-5-3',
          slug: 'laravel-protecting-routes-auth-sanctum-middleware',
          moduleNumber: 5,
          lessonNumberInModule: 3,
          title: {
            en: '5.3 Protecting routes with the auth:sanctum middleware',
            km: '៥.៣ ការការពារ Routes ដោយប្រើប្រាស់ auth:sanctum Middleware'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Group routes under the auth:sanctum middleware to reject unauthenticated requests.',
            km: 'ដាក់ Routes ចូលក្នុង `auth:sanctum` Middleware Group ដើម្បីបដិសេធ Request គ្មាន Token។'
          },
          starterCode: {
            language: 'php',
            code: `Route::middleware('auth:sanctum')->group(function () {
    Route::get('/orders', [OrderController::class, 'index']);
    Route::post('/orders', [OrderController::class, 'store']);
});`
          }
        },
        {
          id: 'lar-5-4',
          slug: 'laravel-practice-login-register-endpoints',
          moduleNumber: 5,
          lessonNumberInModule: 4,
          title: {
            en: '5.4 Practice: build login/register endpoints that issue and validate tokens',
            km: '៥.៤ អនុវត្ត៖ បង្កើត Login/Register Endpoints ដែលបង្កើត និងផ្ទៀងផ្ទាត់ Tokens'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Implement user registration, password hashing, login token generation, and token logout.',
            km: 'សរសេរកូដសម្រាប់ User Registration, Password Hashing, Login Token, និង Logout។'
          },
          starterCode: {
            language: 'php',
            code: `public function register(Request $request) {
    $validated = $request->validate([
        'name' => 'required|string',
        'email' => 'required|email|unique:users',
        'password' => 'required|min:8'
    ]);
    $user = User::create([...$validated, 'password' => Hash::make($validated['password'])]);
    return response()->json(['token' => $user->createToken('auth')->plainTextToken], 201);
}`
          }
        }
      ]
    },

    // Module 6 — Relationships & Authorization (5 lessons)
    {
      moduleNumber: 6,
      title: {
        en: 'Module 6 — Relationships & Authorization',
        km: 'មេរៀនទី ៦ — ទំនាក់ទំនងទិន្នន័យ និង Authorization'
      },
      description: {
        en: 'Eloquent relationships (one-to-many, many-to-many), N+1 query optimization, and Policy authorization.',
        km: ' Eloquent relationships (hasMany, belongsToMany), ដោះស្រាយបញ្ហា N+1, និងសិទ្ធិប្រវត្តិ (Policies)។'
      },
      lessons: [
        {
          id: 'lar-6-1',
          slug: 'laravel-one-to-many-relationships',
          moduleNumber: 6,
          lessonNumberInModule: 1,
          title: {
            en: '6.1 One-to-many relationships (hasMany / belongsTo)',
            km: '៦.១ ទំនាក់ទំនង One-to-Many (hasMany / belongsTo)'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Define foreign key relationships between models such as Category hasMany Product.',
            km: 'កំណត់ទំនាក់ទំនង Foreign Key រវាង Models ដូចជា Category hasMany Product។'
          },
          starterCode: {
            language: 'php',
            code: `// Category Model
public function products() { return $this->hasMany(Product::class); }

// Product Model
public function category() { return $this->belongsTo(Category::class); }`
          }
        },
        {
          id: 'lar-6-2',
          slug: 'laravel-many-to-many-pivot-tables',
          moduleNumber: 6,
          lessonNumberInModule: 2,
          title: {
            en: '6.2 Many-to-many relationships (belongsToMany) and pivot tables',
            km: '៦.២ ទំនាក់ទំនង Many-to-Many (belongsToMany) និង Pivot Tables'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Wire up join/pivot tables for order items or multi-category products using belongsToMany.',
            km: 'រៀបចំ Pivot Tables សម្រាប់ Order Items ឬទិន្នន័យ Many-to-Many ដោយប្រើ belongsToMany។'
          },
          starterCode: {
            language: 'php',
            code: `public function products() {
    return $this->belongsToMany(Product::class)->withPivot('quantity', 'unit_price');
}`
          }
        },
        {
          id: 'lar-6-3',
          slug: 'laravel-eager-loading-n-plus-1-problem',
          moduleNumber: 6,
          lessonNumberInModule: 3,
          title: {
            en: '6.3 Eager loading and the N+1 query problem',
            km: '៦.៣ Eager Loading និងការដោះស្រាយបញ្ហា N+1 Query'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Diagnose and resolve N+1 query performance issues using Product::with(\'category\')->get().',
            km: 'ស្វែងរក និងដោះស្រាយបញ្ហា N+1 Query ដោយប្រើប្រាស់ `Product::with(\'category\')->get()`។'
          },
          starterCode: {
            language: 'php',
            code: `// Bad: Triggers N+1 queries
$products = Product::all();
foreach($products as $p) echo $p->category->name;

// Good: Eager loads in 2 queries total
$products = Product::with('category')->get();`
          }
        },
        {
          id: 'lar-6-4',
          slug: 'laravel-authorization-policies',
          moduleNumber: 6,
          lessonNumberInModule: 4,
          title: {
            en: '6.4 Authorization with Policies (can, authorize)',
            km: '៦.៤ ការកំណត់សិទ្ធិប្រវត្តិដោយប្រើប្រាស់ Policies (can, authorize)'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Restrict resource actions using Policy classes and $this->authorize(\'update\', $product).',
            km: 'កំណត់សិទ្ធិលើ Resource តាមរយៈ Policy classes និង `$this->authorize(\'update\', $product)`។'
          },
          starterCode: {
            language: 'php',
            code: `class OrderPolicy
{
    public function view(User $user, Order $order): bool {
        return $user->id === $order->user_id;
    }
}`
          }
        },
        {
          id: 'lar-6-5',
          slug: 'laravel-practice-category-product-policy',
          moduleNumber: 6,
          lessonNumberInModule: 5,
          title: {
            en: '6.5 Practice: add a Category -> Product relationship and a policy restricting edits',
            km: '៦.៥ អនុវត្ត៖ បន្ថែម Category -> Product Relationship និង Policy កំណត់សិទ្ធិកែប្រែ'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Implement relationship nesting and policy checks within an API controller store method.',
            km: 'សរសេរកូដភ្ជាប់ Relationship និងផ្ទៀងផ្ទាត់សិទ្ធិប្រើប្រាស់ក្នុង Controller Store Method។'
          },
          starterCode: {
            language: 'php',
            code: `public function update(UpdateProductRequest $request, Product $product) {
    $this->authorize('update', $product);
    $product->update($request->validated());
    return new ProductResource($product);
}`
          }
        }
      ]
    },

    // Module 7 — Production Concerns (4 lessons)
    {
      moduleNumber: 7,
      title: {
        en: 'Module 7 — Production Concerns',
        km: 'មេរៀនទី ៧ — កិច្ចការសម្រាប់ប្រព័ន្ធផលិតកម្ម (Production)'
      },
      description: {
        en: 'Environment configuration (.env), Redis caching, async queued background jobs, and error logs.',
        km: 'ការកំណត់ Environment (.env), Caching ជាមួយ Redis, Queued Background Jobs, និង Error Logs។'
      },
      lessons: [
        {
          id: 'lar-7-1',
          slug: 'laravel-environment-configuration-env',
          moduleNumber: 7,
          lessonNumberInModule: 1,
          title: {
            en: '7.1 Environment configuration with .env and config/',
            km: '៧.១ ការកំណត់បរិស្ថាន (Environment Configuration) តាមរយៈ .env និង config/'
          },
          durationMinutes: 18,
          difficulty: 'Intermediate',
          objective: {
            en: 'Manage application secrets cleanly using .env and access them through config() helpers.',
            km: 'គ្រប់គ្រង API keys និង Secrets ដោយសុវត្ថិភាពតាមរយៈ .env និងអានតាម `config()` helper។'
          },
          starterCode: {
            language: 'text',
            code: `# .env
DB_CONNECTION=sqlite
CACHE_STORE=redis
QUEUE_CONNECTION=database`
          }
        },
        {
          id: 'lar-7-2',
          slug: 'laravel-caching-basics-speeding-reads',
          moduleNumber: 7,
          lessonNumberInModule: 2,
          title: {
            en: '7.2 Caching basics — speeding up repeated reads',
            km: '៧.២ មូលដ្ឋានគ្រឹះ Caching — ការបង្កើនល្បឿននៃការអានទិន្នន័យ'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Store heavy database query results in Cache::remember for high-throughput responses.',
            km: 'រក្សាទុកទិន្នន័យ Query ធំៗក្នុង `Cache::remember` ដើម្បីបង្កើនល្បឿន API Response។'
          },
          starterCode: {
            language: 'php',
            code: `$categories = Cache::remember('categories.all', 3600, function () {
    return Category::all();
});`
          }
        },
        {
          id: 'lar-7-3',
          slug: 'laravel-queued-jobs-async-processing',
          moduleNumber: 7,
          lessonNumberInModule: 3,
          title: {
            en: '7.3 Queued jobs — moving slow work off the request cycle',
            km: '៧.៣ Queued Jobs — ការផ្លាស់ប្តូរការងារយឺតៗទៅដំណើរការក្នុង Background'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Offload emails, PDF generation, or third-party webhooks to background queue workers.',
            km: 'បញ្ជូនការងារដែលចំណាយពេលយូរ (ដូចជាការផ្ញើ Email) ទៅដំណើរការក្នុង Background Queue Workers។'
          },
          starterCode: {
            language: 'php',
            code: `// Dispatching a job
SendOrderConfirmation::dispatch($order);`
          }
        },
        {
          id: 'lar-7-4',
          slug: 'laravel-practice-queued-confirmation-job',
          moduleNumber: 7,
          lessonNumberInModule: 4,
          title: {
            en: '7.4 Practice: queue a job that sends a confirmation "email" after an order is created',
            km: '៧.៤ អនុវត្ត៖ បង្កើត Queued Job សម្រាប់ផ្ញើការបញ្ជាក់ Order បន្ទាប់ពីកុម្ម៉ង់ទិញ'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Create a ShouldQueue Job class and trigger it upon successful order checkout.',
            km: 'បង្កើត Job Class ដែលសរសេរ `ShouldQueue` រួចបញ្ជូនវាពេលធ្វើការ Order ជោគជ័យ។'
          },
          starterCode: {
            language: 'php',
            code: `class SendOrderConfirmation implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function __construct(public Order $order) {}

    public function handle(): void {
        Log::info("Sending email for order #{$this->order->id}");
    }
}`
          }
        }
      ]
    },

    // Module 8 — Testing, Deployment & Capstone (4 lessons + project)
    {
      moduleNumber: 8,
      title: {
        en: 'Module 8 — Testing, Deployment & Capstone',
        km: 'មេរៀនទី ៨ — Testing, Deployment និង គម្រោង Capstone'
      },
      description: {
        en: 'Automated feature testing with Pest/PHPUnit, deployment configurations, and ShopCore API Capstone.',
        km: 'ការធ្វើ Feature Testing ជាមួយ PHPUnit/Pest, ការរៀបចំ Deployment, និងគម្រោង Capstone ShopCore API។'
      },
      lessons: [
        {
          id: 'lar-8-1',
          slug: 'laravel-writing-feature-tests-phpunit-pest',
          moduleNumber: 8,
          lessonNumberInModule: 1,
          title: {
            en: '8.1 Writing feature tests for API endpoints with PHPUnit/Pest',
            km: '៨.១ ការសរសេរ Feature Tests សម្រាប់ API Endpoints ជាមួយ PHPUnit/Pest'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Write HTTP assertions like $this->getJson(\'/api/products\')->assertStatus(200).',
            km: 'សរសេរ HTTP Assertions ធ្វើតេស្ត API Response Status Codes និង JSON Structure។'
          },
          starterCode: {
            language: 'php',
            code: `public function test_can_list_products(): void
{
    Product::factory()->count(3)->create();

    $response = $this->getJson('/api/products');

    $response->assertStatus(200)
             ->assertJsonCount(3, 'data');
}`
          }
        },
        {
          id: 'lar-8-2',
          slug: 'laravel-testing-authenticated-routes-validation',
          moduleNumber: 8,
          lessonNumberInModule: 2,
          title: {
            en: '8.2 Testing authenticated routes and validation failures',
            km: '៨.២ ការធ្វើតេស្ត Authenticated Routes និង Validation Failures'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Simulate logged-in users with Sanctum::actingAs($user) and test 422 validation errors.',
            km: 'ធ្វើតេស្ត User ដែលបាន Login ដោយប្រើប្រាស់ `Sanctum::actingAs($user)` និងធ្វើតេស្ត Error 422។'
          },
          starterCode: {
            language: 'php',
            code: `public function test_unauthenticated_user_cannot_place_order(): void
{
    $response = $this->postJson('/api/orders', []);
    $response->assertStatus(401);
}`
          }
        },
        {
          id: 'lar-8-3',
          slug: 'laravel-planning-shopcore-capstone',
          moduleNumber: 8,
          lessonNumberInModule: 3,
          title: {
            en: '8.3 Planning the ShopCore capstone (models, endpoints, features)',
            km: '៨.៣ ការរៀបចំផែនការគម្រោង ShopCore Capstone (Models, Endpoints, Features)'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Architect database tables, relationships, authentication flows, and queue dispatchers.',
            km: 'រៀបចំ Schema នៃ Database, ទំនាក់ទំនងរវាង Tables, Authentication Flows, និង Queue Jobs។'
          },
          starterCode: {
            language: 'text',
            code: `Entities: User, Category, Product, Order, OrderItem
Endpoints:
  POST /api/register
  POST /api/login
  GET  /api/products
  POST /api/orders (Auth required)`
          }
        },
        {
          id: 'lar-8-4',
          slug: 'laravel-shopcore-capstone-building-deployment',
          moduleNumber: 8,
          lessonNumberInModule: 4,
          title: {
            en: '8.4 Building the ShopCore capstone & production deployment overview',
            km: '៨.៤ ការបង្កើត ShopCore Capstone & ទិដ្ឋភាពទូទៅនៃការរៀបចំ Deployment'
          },
          durationMinutes: 45,
          difficulty: 'Intermediate',
          objective: {
            en: 'Assemble all components into a complete, working REST API and review production deployment steps.',
            km: 'ផ្គុំគ្រប់សមាសភាគទាំងអស់ទៅជា REST API ពេញលេញ និងពិនិត្យមើលជំហានដំឡើងលើ Production Server។'
          },
          starterCode: {
            language: 'bash',
            code: `# Production deployment steps
git pull origin main
composer install --no-dev --optimize-autoloader
php artisan migrate --force
php artisan config:cache
php artisan route:cache`
          }
        }
      ]
    }
  ]
};
