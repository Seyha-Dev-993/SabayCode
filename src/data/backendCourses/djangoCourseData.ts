import { BackendCourse } from '../backendCoursesHubData';

export const DJANGO_COURSE_DATA: BackendCourse = {
  id: 'django',
  slug: 'django',
  title: {
    en: 'Django & Django REST Framework',
    km: 'Django និង Django REST Framework'
  },
  iconName: 'django',
  type: 'framework',
  parentLanguageId: 'python',
  categoryId: 'frameworks',
  difficulty: 'Intermediate',
  shortDescription: {
    en: 'Python\'s "batteries-included" framework — build a real database-backed API fast.',
    km: 'Framework "batteries-included" របស់ Python — សាង API ដែលភ្ជាប់ជាមួយ database ពិតប្រាកដយ៉ាងលឿន។'
  },
  summary: {
    en: 'Django is a full-featured, "batteries-included" Python web framework — it comes with an ORM, an admin panel, authentication, and routing built in, so you spend your time building your actual app instead of wiring up basic infrastructure by hand. It powers Instagram, Spotify\'s internal tools, and Mozilla, among many others. This course takes everything you learned in the Python course and applies it to real backend development: Django\'s request/response flow, models and the ORM, the built-in admin panel, and — critically — Django REST Framework (DRF), the standard toolkit for turning Django into a proper JSON API instead of an HTML-rendering website. You\'ll rebuild the Python course\'s Simple Notes API on real infrastructure and see firsthand what a full framework buys you over hand-written routing. By the end, you\'ll have built a complete, secured REST API and understand exactly how production Django/DRF backends are structured.',
    km: 'Django ជា Python web framework ពេញលេញបែប "batteries-included" — វាមកជាមួយ ORM, ផ្ទាំងគ្រប់គ្រង admin, authentication និង routing ស្រាប់ ដូច្នេះអ្នកចំណាយពេលសាងកម្មវិធីពិតប្រាកដរបស់អ្នក ជំនួសឱ្យការភ្ជាប់ហេដ្ឋារចនាសម្ព័ន្ធមូលដ្ឋានដោយដៃ។ វាដំណើរការ Instagram ឧបករណ៍ខាងក្នុងរបស់ Spotify និង Mozilla ក្នុងចំណោមអ្នកផ្សេងទៀតជាច្រើន។ វគ្គសិក្សានេះយកអ្វីៗទាំងអស់ដែលអ្នករៀនក្នុងវគ្គ Python ហើយអនុវត្តទៅលើការសាង backend ពិតប្រាកដ៖ លំហូរ request/response របស់ Django, models និង ORM, ផ្ទាំង admin ស្រាប់ និង — សំខាន់បំផុត — Django REST Framework (DRF) ដែលជាឧបករណ៍ស្តង់ដារសម្រាប់ប្រែក្លាយ Django ទៅជា JSON API ពិតប្រាកដ ជំនួសឱ្យគេហទំព័របង្ហាញ HTML។ អ្នកនឹងសាង Simple Notes API ពីវគ្គ Python ឡើងវិញនៅលើហេដ្ឋារចនាសម្ព័ន្ធពិតប្រាកដ ហើយឃើញផ្ទាល់ភ្នែកថា framework ពេញលេញផ្តល់អ្វីខ្លះបន្ថែមពីលើ routing សរសេរដោយដៃ។ ចប់វគ្គនេះ អ្នកនឹងបានសាង REST API ពេញលេញ និងមានសុវត្ថិភាព ហើយយល់ច្បាស់ពីរបៀបដែល backend Django/DRF កម្រិតផលិតកម្មពិតប្រាកដត្រូវបានរៀបចំរចនាសម្ព័ន្ធ។'
  },
  estimatedHours: 25,
  lessonCount: 34,
  usedFor: 'Full-Stack Web Backends, RESTful Microservices, Content Management APIs, Data-Driven Applications',
  realWorldApps: ['Instagram Backend Engine', 'Spotify Internal Admin Tools', 'Mozilla Web Services', 'Disqus Comment Platform'],
  prerequisites: {
    en: 'Completion of the Python course (or equivalent Python knowledge) is strongly recommended — this course assumes comfort with Python syntax, classes, and working with JSON, and focuses entirely on applying that to a real framework. Basic familiarity with the Database & SQL Fundamentals course is also recommended, since Django\'s ORM concepts map directly onto relational database ideas.',
    km: 'បានបញ្ចប់វគ្គ Python (ឬមានចំណេះដឹង Python ប្រហាក់ប្រហែល) ត្រូវអនុសាសន៍យ៉ាងខ្លាំង — វគ្គនេះសន្មតថាអ្នកចេះសរសេរ Python, Classes, និង JSON រួចហើយ។ ការយល់ដឹងមូលដ្ឋានពីវគ្គ Database & SQL ក៏ត្រូវបានណែនាំផងដែរ ដោយសារ ORM របស់ Django ភ្ជាប់ដោយផ្ទាល់ជាមួយ Database។'
  },
  whatYouWillLearn: {
    en: [
      'Set up a Django project and app structure with django-admin and manage.py',
      'Understand Django\'s MTV (Model-Template-View) pattern and how it maps to a typical MVC mental model',
      'Define data models and use Django\'s ORM to query the database without raw SQL',
      'Generate and run database migrations',
      'Use the built-in Django admin panel to manage data instantly',
      'Set up Django REST Framework and build serializers to convert models to/from JSON',
      'Build API views and viewsets, and wire them up with DRF\'s router system',
      'Implement authentication (token-based and/or JWT via djangorestframework-simplejwt)',
      'Control access with DRF permissions (who can view/edit/delete)',
      'Write a basic automated test for an API endpoint',
      'Structure a real, production-style Django/DRF project',
      'Understand the basics of deploying a Django API'
    ],
    km: [
      'រៀបចំ Django Project និង App Structure ដោយប្រើ django-admin និង manage.py',
      'យល់ដឹងពី Django MTV (Model-Template-View) Pattern និងរបៀបដែលវាធៀបនឹង MVC',
      'កំណត់ Data Models និងប្រើប្រាស់ Django ORM ដើម្បី Query ទិន្នន័យដោយមិនបាច់សរសេរ Raw SQL',
      'បង្កើត និងរត់ Database Migrations',
      'ប្រើប្រាស់ Django Admin Panel ស្រាប់ ដើម្បីគ្រប់គ្រងទិន្នន័យភ្លាមៗ',
      'រៀបចំ Django REST Framework និងបង្កើត Serializers ដើម្បីបំប្លែង Models ទៅ/មក JSON',
      'បង្កើត API Views និង ViewSets រួចភ្ជាប់ជាមួយ DRF Router System',
      'អនុវត្ត Authentication (Token-based និង JWT តាមរយៈ djangorestframework-simplejwt)',
      'គ្រប់គ្រងសិទ្ធិចូលប្រើប្រាស់ជាមួយ DRF Permissions (សិទ្ធិមើល/កែ/លុប)',
      'សរសេរ Automated Test មូលដ្ឋានសម្រាប់ API Endpoint',
      'រៀបចំរចនាសម្ព័ន្ធ Django/DRF Project កម្រិតផលិតកម្ម',
      'យល់ដឹងពីមូលដ្ឋានគ្រឹះនៃការដាក់ Django API ឱ្យប្រើប្រាស់ (Deployment)'
    ]
  },
  toolsAndSetup: {
    en: '1. Activate a Python virtual environment (`python -m venv venv` and activate)\n2. Install Django: `pip install django`\n3. Create a project: `django-admin startproject notesproject .`\n4. Run the dev server: `python manage.py runserver` and visit http://localhost:8000\n5. Install Django REST Framework: `pip install djangorestframework djangorestframework-simplejwt`',
    km: '១. បង្កើត និងបើក Python Virtual Environment (`python -m venv venv`)\n២. ដំឡើង Django: `pip install django`\n៣. បង្កើត Project: `django-admin startproject notesproject .`\n៤. រត់ Dev Server: `python manage.py runserver` រួចចូលទៅកាន់ http://localhost:8000\n៥. ដំឡើង Django REST Framework: `pip install djangorestframework djangorestframework-simplejwt`'
  },
  cheatSheet: [
    {
      concept: 'Django ORM Model Definition',
      code: `from django.db import models\nfrom django.contrib.auth.models import User\n\nclass Note(models.Model):\n    title = models.CharField(max_length=200)\n    content = models.TextField()\n    created_at = models.DateTimeField(auto_now_add=True)\n    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='notes')\n\n    def __str__(self):\n        return self.title`,
      explanation: {
        en: 'Defines a Django database table model with fields, foreign key user relationship, and automatic timestamps.',
        km: 'កំណត់រចនាសម្ព័ន្ធ Database Table Model ក្នុង Django ជាមួយ Fields, Foreign Key ទៅកាន់ User និង Timestamps។'
      }
    },
    {
      concept: 'DRF ModelSerializer & ModelViewSet',
      code: `from rest_framework import serializers, viewsets\nfrom .models import Note\n\nclass NoteSerializer(serializers.ModelSerializer):\n    class Meta:\n        model = Note\n        fields = ['id', 'title', 'content', 'created_at', 'user']\n\nclass NoteViewSet(viewsets.ModelViewSet):\n    queryset = Note.objects.all()\n    serializer_class = NoteSerializer`,
      explanation: {
        en: 'Creates JSON serializer and complete 5-endpoint CRUD controller for Note model in just a few lines.',
        km: 'បង្កើត Serializer បំប្លែងទិន្នន័យ និង Controller CRUD API ៥-endpoints សម្រាប់ Note Model យ៉ាងខ្លី។'
      }
    },
    {
      concept: 'Router Wiring in urls.py',
      code: `from rest_framework.routers import DefaultRouter\nfrom .views import NoteViewSet\n\nrouter = DefaultRouter()\nrouter.register(r'notes', NoteViewSet, basename='note')\n\nurlpatterns = router.urls`,
      explanation: {
        en: 'Automatically wires up standard RESTful URL patterns for list, detail, create, update, and delete.',
        km: 'ភ្ជាប់ URL patterns ស្តង់ដារ RESTful ដោយស្វ័យប្រវត្តិ (list, detail, create, update, delete)។'
      }
    },
    {
      concept: 'Admin Registration in admin.py',
      code: `from django.contrib import admin\nfrom .models import Note\n\n@admin.register(Note)\nclass NoteAdmin(admin.ModelAdmin):\n    list_display = ('title', 'user', 'created_at')\n    search_fields = ('title', 'content')\n    list_filter = ('created_at', 'user')`,
      explanation: {
        en: 'Registers model with Django built-in admin dashboard with customized search, list display, and filters.',
        km: 'ចុះឈ្មោះ Model ទៅកាន់ Django Admin Dashboard ជាមួយមុខងារ Search, List Display, និង Filters។'
      }
    }
  ],
  quiz: [
    {
      id: 'dj-q1',
      question: {
        en: 'What architectural pattern does Django follow, and how does it map to MVC?',
        km: 'តើ Django ប្រើប្រាស់ Architectural Pattern មួយណា ហើយវាធៀបនឹង MVC យ៉ាងដូចម្តេច?'
      },
      options: [
        { id: '1', text: { en: 'MTV (Model-Template-View), where Template is View and View is Controller', km: 'MTV (Model-Template-View) ដែល Template ជា View ហើយ View ជា Controller' }, isCorrect: true },
        { id: '2', text: { en: 'MVVM (Model-View-ViewModel)', km: 'MVVM (Model-View-ViewModel)' }, isCorrect: false },
        { id: '3', text: { en: 'Clean Architecture with no routing', km: 'Clean Architecture គ្មាន Routing' }, isCorrect: false },
        { id: '4', text: { en: 'Flux Architecture', km: 'Flux Architecture' }, isCorrect: false }
      ],
      explanation: {
        en: 'Django uses MTV: Model handles database logic, Template handles presentation (HTML/JSON rendering), and View handles request logic (acting like an MVC Controller).',
        km: 'Django ប្រើ MTV៖ Model គ្រប់គ្រង DB, Template គ្រប់គ្រងការបង្ហាញទិន្នន័យ (HTML/JSON), ហើយ View គ្រប់គ្រង Request Logic (ដូច Controller ក្នុង MVC)។'
      }
    },
    {
      id: 'dj-q2',
      question: {
        en: 'In Django REST Framework, what component is responsible for serializing database model instances into Python dicts / JSON payloads?',
        km: 'ក្នុង Django REST Framework តើ Component មួយណាដែលមានតួនាទីបំប្លែង DB Model Instances ទៅជា JSON Payloads?'
      },
      options: [
        { id: '1', text: { en: 'Serializers (e.g. ModelSerializer)', km: 'Serializers (ឧ. ModelSerializer)' }, isCorrect: true },
        { id: '2', text: { en: 'Django Forms', km: 'Django Forms' }, isCorrect: false },
        { id: '3', text: { en: 'ORM QuerySets', km: 'ORM QuerySets' }, isCorrect: false },
        { id: '4', text: { en: 'Template Engine', km: 'Template Engine' }, isCorrect: false }
      ],
      explanation: {
        en: 'DRF Serializers define how complex datatypes (like QuerySets and Model instances) are converted to native Python datatypes for JSON rendering.',
        km: 'DRF Serializers កំណត់ពីរបៀបបំប្លែង QuerySets/Models ទៅជា Python datatypes រួចបញ្ជូនជា JSON។'
      }
    }
  ],
  capstoneProject: {
    id: 'notes-api-django',
    slug: 'notes-api-django',
    title: {
      en: 'Notes API (Django)',
      km: 'Notes API (Django) ជាមួយ DRF & SimpleJWT'
    },
    description: {
      en: 'A rebuild of the Python course\'s Simple Notes API on real Django infrastructure: a Note model backed by SQLite, full CRUD via Django REST Framework, JWT user authentication, and the Django admin panel for quick data management.',
      km: 'ការសាងសង់ Simple Notes API ឡើងវិញនៅលើហេដ្ឋារចនាសម្ព័ន្ធ Django៖ Note model ភ្ជាប់ SQLite DB, CRUD API តាមរយៈ DRF, JWT Authentication, និង Django Admin Panel។'
    },
    featureChecklist: {
      en: [
        'Note model with title, content, created_at, and an owning user foreign key',
        'Full CRUD via a DRF ModelViewSet + Router (GET/POST/PUT/DELETE /notes/)',
        'JWT authentication: POST /api/token/ to log in, token required for create/update/delete',
        'Public (unauthenticated) read access to GET /notes/, but writes require login',
        'Notes visible/manageable in the Django admin panel',
        'At least one automated test verifying an unauthenticated user cannot create a note'
      ],
      km: [
        'Note model មាន title, content, created_at, និង user foreign key',
        'Full CRUD តាមរយៈ DRF ModelViewSet + Router (GET/POST/PUT/DELETE /notes/)',
        'JWT Authentication: POST /api/token/ សម្រាប់ Login, ត្រូវការ Token ពេល create/update/delete',
        'សិទ្ធិមើល (GET /notes/) ជាសាធារណៈ ប៉ុន្តែការសរសេរត្រូវតែ Login',
        'គ្រប់គ្រង និងមើលព័ត៌មាន Notes តាមរយៈ Django Admin Panel',
        'Automated Test យ៉ាងតិចមួយ ផ្ទៀងផ្ទាត់ថា Unauthenticated User មិនអាចបង្កើត Note បានទេ'
      ]
    },
    starterCode: {
      language: 'python',
      code: `from rest_framework.views import APIView
from rest_framework.response import Response

class HealthCheckView(APIView):
    def get(self, request):
        return Response({
            "status": "online",
            "framework": "Django 5.x",
            "toolkit": "Django REST Framework"
        })`
    },
    finalCode: `# models.py
from django.db import models
from django.contrib.auth.models import User

class Note(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='notes')
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

# serializers.py
from rest_framework import serializers
from .models import Note

class NoteSerializer(serializers.ModelSerializer):
    username = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = Note
        fields = ['id', 'user', 'username', 'title', 'content', 'created_at']
        read_only_fields = ['id', 'user', 'created_at']

# views.py
from rest_framework import viewsets, permissions
from .models import Note
from .serializers import NoteSerializer

class IsOwnerOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.user == request.user

class NoteViewSet(viewsets.ModelViewSet):
    queryset = Note.objects.all().order_by('-created_at')
    serializer_class = NoteSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

# urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import NoteViewSet

router = DefaultRouter()
router.register(r'notes', NoteViewSet, basename='note')

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]

# tests.py
from rest_framework.test import APITestCase
from rest_framework import status

class NoteAPITestCase(APITestCase):
    def test_unauthenticated_cannot_create_note(self):
        response = self.client.post('/api/notes/', {'title': 'Test', 'content': 'Test'})
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)`,
    sampleRequests: [
      {
        title: 'POST /api/token/ (Get JWT)',
        method: 'POST',
        url: '/api/token/',
        body: JSON.stringify({ username: 'devuser', password: 'secretpassword' }, null, 2),
        responseStatus: 200,
        responseBody: JSON.stringify({
          refresh: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIs...',
          access: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiw...'
        }, null, 2)
      },
      {
        title: 'GET /api/notes/',
        method: 'GET',
        url: '/api/notes/',
        responseStatus: 200,
        responseBody: JSON.stringify([
          {
            id: 1,
            user: 2,
            username: 'devuser',
            title: 'Groceries list',
            content: 'Buy milk, coffee, and eggs',
            created_at: '2026-08-01T05:30:00Z'
          }
        ], null, 2)
      },
      {
        title: 'POST /api/notes/ (Protected)',
        method: 'POST',
        url: '/api/notes/',
        headers: {
          'Authorization': 'Bearer <access_token_here>',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: 'Django REST Framework Study',
          content: 'Master ViewSets, Serializers, and SimpleJWT authentication.'
        }, null, 2),
        responseStatus: 201,
        responseBody: JSON.stringify({
          id: 2,
          user: 2,
          username: 'devuser',
          title: 'Django REST Framework Study',
          content: 'Master ViewSets, Serializers, and SimpleJWT authentication.',
          created_at: '2026-08-01T05:31:00Z'
        }, null, 2)
      }
    ]
  },
  modules: [
    // Module 1 — Introduction & Setup (3 lessons)
    {
      moduleNumber: 1,
      title: {
        en: 'Module 1 — Introduction & Setup',
        km: 'មេរៀនទី ១ — ការណែនាំ និងការរៀបចំ បរិស្ថានកូដ'
      },
      description: {
        en: 'Understand Django\'s batteries-included philosophy, initialize projects with django-admin, and run the development server.',
        km: 'យល់ដឹងពីទស្សនវិជ្ជា Batteries-included របស់ Django, បង្កើត Project ជាមួយ django-admin និងរត់ Dev Server។'
      },
      lessons: [
        {
          id: 'dj-1-1',
          slug: 'what-is-django-batteries-included',
          moduleNumber: 1,
          lessonNumberInModule: 1,
          title: {
            en: '1.1 What is Django and its "batteries-included" philosophy',
            km: '១.១ អ្វីជា Django និងទស្សនវិជ្ជា "Batteries-included" របស់វា'
          },
          durationMinutes: 15,
          difficulty: 'Intermediate',
          objective: {
            en: 'Explain what Django provides out-of-the-box (ORM, Admin, Auth, Routing) and how it compares to minimal frameworks.',
            km: 'ពន្យល់ពីអ្វីដែល Django ផ្តល់ជូនស្រាប់ (ORM, Admin, Auth, Routing) និងរបៀបដែលវាខុសពី Minimal Frameworks។'
          },
          explanation: {
            en: 'Django was built with a "batteries-included" philosophy — instead of giving you just routing and letting you pick everything else (the Express approach), Django ships with an ORM, a built-in admin interface, a user/authentication system, and a clear project structure out of the box.',
            km: 'Django ត្រូវបានសាងឡើងជាមួយទស្សនវិជ្ជា "batteries-included" — ជំនួសឱ្យការផ្តល់ឱ្យអ្នកតែ routing, Django មកជាមួយ ORM ស្រាប់, Admin Panel ស្រាប់, ប្រព័ន្ធ Authentication ស្រាប់ និងរចនាសម្ព័ន្ធច្បាស់លាស់។'
          },
          starterCode: {
            language: 'python',
            code: `# views.py
from django.http import HttpResponse

def hello(request):
    return HttpResponse("Hello, Django!")`
          },
          practiceExercise: {
            question: {
              en: 'Modify views.py to return a JsonResponse with {"framework": "Django 5", "type": "Full-stack"} instead of HttpResponse.',
              km: 'កែប្រែ views.py ឱ្យបញ្ជូនត្រឡប់ JsonResponse {"framework": "Django 5", "type": "Full-stack"} ជំនួសឱ្យ HttpResponse។'
            },
            solution: `from django.http import JsonResponse

def hello(request):
    return JsonResponse({"framework": "Django 5", "type": "Full-stack"})`
          },
          tips: {
            en: 'Use JsonResponse when returning dictionary objects without DRF for quick API responses.',
            km: 'ប្រើប្រាស់ JsonResponse នៅពេលបញ្ជូន Dictionary Objects ត្រឡប់ទៅវិញដោយមិនបាច់ប្រើ DRF។'
          }
        },
        {
          id: 'dj-1-2',
          slug: 'setting-up-first-django-project-app',
          moduleNumber: 1,
          lessonNumberInModule: 2,
          title: {
            en: '1.2 Setting up your first Django project and app',
            km: '១.២ ការបង្កើត Django Project និង App ដំបូងរបស់អ្នក'
          },
          durationMinutes: 15,
          difficulty: 'Intermediate',
          objective: {
            en: 'Use django-admin startproject and python manage.py startapp to build a modular Django project.',
            km: 'ប្រើប្រាស់ django-admin startproject និង python manage.py startapp ដើម្បីបង្កើត Modular Django Project។'
          },
          starterCode: {
            language: 'bash',
            code: `# In terminal:
python -m venv venv
source venv/bin/activate
pip install django
django-admin startproject myproject .
python manage.py startapp notesapp`
          }
        },
        {
          id: 'dj-1-3',
          slug: 'first-view-hello-django-explained',
          moduleNumber: 1,
          lessonNumberInModule: 3,
          title: {
            en: '1.3 Your first view — "Hello, Django!" explained line by line',
            km: '១.៣ View ដំបូងរបស់អ្នក — បកស្រាយ "Hello, Django!" មួយជួរម្តងៗ'
          },
          durationMinutes: 15,
          difficulty: 'Intermediate',
          objective: {
            en: 'Understand request parameter in views, HttpResponse object, and wiring urls.py patterns.',
            km: 'យល់ដឹងពី Request parameter ក្នុង Views, HttpResponse Object, និងការរៀបចំ urls.py patterns។'
          },
          starterCode: {
            language: 'python',
            code: `# myproject/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('notesapp.urls')),
]`
          }
        }
      ]
    },

    // Module 2 — Django Fundamentals (5 lessons)
    {
      moduleNumber: 2,
      title: {
        en: 'Module 2 — Django Fundamentals: URLs, Views & MTV Pattern',
        km: 'មេរៀនទី ២ — មូលដ្ឋានគ្រឹះ Django៖ URLs, Views និង MTV Pattern'
      },
      description: {
        en: 'Master MTV architecture, URL routing with path converters, function-based vs class-based views, and raw JsonResponse rendering.',
        km: 'ស្ទាត់ជំនាញ MTV Architecture, URL routing ជាមួយ path converters, Function vs Class-based Views និង JsonResponse។'
      },
      lessons: [
        {
          id: 'dj-2-1',
          slug: 'mtv-pattern-explained',
          moduleNumber: 2,
          lessonNumberInModule: 1,
          title: {
            en: '2.1 The MTV (Model-Template-View) pattern explained',
            km: '២.១ ការបកស្រាយ MTV (Model-Template-View) Pattern'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Map Django\'s Model-Template-View structure to standard MVC terminology.',
            km: 'ប្រៀបធៀបរចនាសម្ព័ន្ធ Model-Template-View របស់ Django ទៅកាន់ MVC terminology។'
          },
          starterCode: {
            language: 'text',
            code: `Model    -> Database layer & business logic (same as MVC Model)
Template -> Presentation layer (HTML / JSON response rendering)
View     -> Callback function / logic handler (acts like MVC Controller)`
          }
        },
        {
          id: 'dj-2-2',
          slug: 'url-routing-with-urls-py',
          moduleNumber: 2,
          lessonNumberInModule: 2,
          title: {
            en: '2.2 URL routing with urls.py',
            km: '២.២ ការធ្វើ URL Routing ជាមួយ urls.py'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Define URL patterns using path() and extract parameters like <int:id> and <str:slug>.',
            km: 'កំណត់ URL Patterns ដោយប្រើ path() និងទាញយក Parameters ដូចជា <int:id> និង <str:slug>។'
          },
          starterCode: {
            language: 'python',
            code: `from django.urls import path
from . import views

urlpatterns = [
    path('notes/', views.note_list),
    path('notes/<int:pk>/', views.note_detail),
]`
          }
        },
        {
          id: 'dj-2-3',
          slug: 'function-based-views-vs-class-based-views',
          moduleNumber: 2,
          lessonNumberInModule: 3,
          title: {
            en: '2.3 Function-based views vs class-based views',
            km: '២.៣ ការប្រៀបធៀប Function-based Views និង Class-based Views'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Compare FBVs (explicit request.method checks) with CBVs (View subclasses with get/post methods).',
            km: 'ប្រៀបធៀប FBVs (ពិនិត្យ request.method) និង CBVs (សរសេរ Method get/post ក្នុង Class)។'
          },
          starterCode: {
            language: 'python',
            code: `from django.views import View
from django.http import JsonResponse

class HealthView(View):
    def get(self, request):
        return JsonResponse({"status": "ok"})`
          }
        },
        {
          id: 'dj-2-4',
          slug: 'returning-json-plain-django-view',
          moduleNumber: 2,
          lessonNumberInModule: 4,
          title: {
            en: '2.4 Returning JSON from a plain Django view (before DRF)',
            km: '២.៤ ការបញ្ជូន JSON ត្រឡប់ចេញពី Plain Django View (មុនពេលប្រើ DRF)'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Use JsonResponse and json.loads(request.body) to handle JSON APIs natively in Django.',
            km: 'ប្រើប្រាស់ JsonResponse និង json.loads(request.body) ដើម្បីគ្រប់គ្រង JSON API ក្នុង Django ឆៅ។'
          },
          starterCode: {
            language: 'python',
            code: `import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def notes_api(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        return JsonResponse({"received": data}, status=201)
    return JsonResponse([])`
          }
        },
        {
          id: 'dj-2-5',
          slug: 'practice-build-two-simple-json-views',
          moduleNumber: 2,
          lessonNumberInModule: 5,
          title: {
            en: '2.5 Practice: build two simple routes/views that return different JSON responses',
            km: '២.៥ អនុវត្ត៖ បង្កើត Routes/Views ពីរដែលបញ្ជូន JSON Response ខុសៗគ្នា'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Implement an info view and echo view returning formatted JSON responses.',
            km: 'សរសេរ Info View និង Echo View ដែលបញ្ជូន JSON Response មានទម្រង់ត្រឹមត្រូវ។'
          },
          starterCode: {
            language: 'python',
            code: `from django.http import JsonResponse

def api_info(request):
    return JsonResponse({"app": "Notes App", "version": "1.0"})`
          }
        }
      ]
    },

    // Module 3 — Models & the ORM (5 lessons)
    {
      moduleNumber: 3,
      title: {
        en: 'Module 3 — Models & the ORM',
        km: 'មេរៀនទី ៣ — Models និង Django ORM'
      },
      description: {
        en: 'Define Python data models, field constraints, schema migrations, and ORM query execution.',
        km: 'កំណត់ Python Data Models, Field Constraints, Schema Migrations និង ORM Queries។'
      },
      lessons: [
        {
          id: 'dj-3-1',
          slug: 'defining-model-django-orm',
          moduleNumber: 3,
          lessonNumberInModule: 1,
          title: {
            en: '3.1 Defining a model — Django\'s ORM instead of raw SQL',
            km: '៣.១ ការកំណត់ Model — ប្រើ Django ORM ជំនួស Raw SQL'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Inherit from models.Model and define fields mapping directly to relational database columns.',
            km: 'Inherit ពី models.Model និងកំណត់ Fields ដែលត្រូវនឹង Database Columns ដោយស្វ័យប្រវត្តិ។'
          },
          starterCode: {
            language: 'python',
            code: `from django.db import models

class Note(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)`
          }
        },
        {
          id: 'dj-3-2',
          slug: 'field-types-and-model-options',
          moduleNumber: 3,
          lessonNumberInModule: 2,
          title: {
            en: '3.2 Field types and model options',
            km: '៣.២ ប្រភេទ Fields និង Model Options ផ្សេងៗ'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Configure CharField, TextField, BooleanField, ForeignKey, auto_now_add, and Meta class ordering.',
            km: 'កំណត់ CharField, TextField, BooleanField, ForeignKey, auto_now_add និង Meta ordering។'
          },
          starterCode: {
            language: 'python',
            code: `class Note(models.Model):
    title = models.CharField(max_length=200)
    is_archived = models.BooleanField(default=False)

    class Meta:
        ordering = ['-created_at']`
          }
        },
        {
          id: 'dj-3-3',
          slug: 'migrations-generating-applying-schema-changes',
          moduleNumber: 3,
          lessonNumberInModule: 3,
          title: {
            en: '3.3 Migrations: generating and applying schema changes',
            km: '៣.៣ Migrations៖ ការបង្កើត និងការបញ្ជូន Schema Changes ទៅ DB'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Execute makemigrations and migrate commands to keep database tables synchronized with Python models.',
            km: 'រត់ការបញ្ជា makemigrations និង migrate ដើម្បីធ្វើបច្ចុប្បន្នភាព Database Tables។'
          },
          starterCode: {
            language: 'bash',
            code: `python manage.py makemigrations
python manage.py migrate`
          }
        },
        {
          id: 'dj-3-4',
          slug: 'querying-with-the-orm-filter-get-all',
          moduleNumber: 3,
          lessonNumberInModule: 4,
          title: {
            en: '3.4 Querying with the ORM (.all(), .filter(), .get())',
            km: '៣.៤ ការ Query ទិន្នន័យតាម ORM (.all(), .filter(), .get())'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Use QuerySet operations like .all(), .filter(title__icontains=...), .get(id=...), and .create().',
            km: 'ប្រើប្រាស់ QuerySet Methods ដូចជា .all(), .filter(), .get(), និង .create() ដើម្បីគ្រប់គ្រងទិន្នន័យ។'
          },
          explanation: {
            en: 'Once a model is defined and migrated, Django gives every model a .objects manager with methods like .all(), .filter(), .get(), and .create() that translate directly into SQL behind the scenes.',
            km: 'នៅពេល Model ត្រូវបានបង្កើត, Django ផ្តល់នូវ .objects manager ដែលមាន Methods ដូចជា .all(), .filter(), .get(), .create() ដែលបំប្លែងទៅជា SQL ដោយស្វ័យប្រវត្តិ។'
          },
          starterCode: {
            language: 'python',
            code: `# In django shell: python manage.py shell
from notesapp.models import Note

Note.objects.create(title="Groceries", content="Buy rice and eggs")
all_notes = Note.objects.all()
filtered = Note.objects.filter(title__icontains="grocer")`
          }
        },
        {
          id: 'dj-3-5',
          slug: 'practice-define-note-model-django-shell',
          moduleNumber: 3,
          lessonNumberInModule: 5,
          title: {
            en: '3.5 Practice: define a Note model and query it from the Django shell',
            km: '៣.៥ អនុវត្ត៖ បង្កើត Note Model រួច Query ចេញពី Django Shell'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Create, query, update, and delete Note model instances interactively in python manage.py shell.',
            km: 'បង្កើត, Query, Update, និង Delete Note records ដោយផ្ទាល់ក្នុង python manage.py shell។'
          },
          starterCode: {
            language: 'python',
            code: `# python manage.py shell
from notesapp.models import Note

n = Note(title="Study Django", content="Complete Module 3")
n.save()
print(Note.objects.count())`
          }
        }
      ]
    },

    // Module 4 — The Django Admin (3 lessons)
    {
      moduleNumber: 4,
      title: {
        en: 'Module 4 — The Django Admin',
        km: 'មេរៀនទី ៤ — Django Admin Panel'
      },
      description: {
        en: 'Enable the built-in admin dashboard, register models, and customize list displays, search fields, and filters.',
        km: 'បើកដំណើរការ Admin Dashboard ស្រាប់, ចុះឈ្មោះ Models និងកំណត់មុខងារ Search, Filters, List Display។'
      },
      lessons: [
        {
          id: 'dj-4-1',
          slug: 'registering-model-with-admin-site',
          moduleNumber: 1,
          lessonNumberInModule: 1,
          title: {
            en: '4.1 Registering a model with the admin site',
            km: '៤.១ ការចុះឈ្មោះ Model ជាមួយ Admin Site'
          },
          durationMinutes: 18,
          difficulty: 'Intermediate',
          objective: {
            en: 'Register custom models in admin.py using admin.site.register() or the @admin.register decorator.',
            km: 'ចុះឈ្មោះ Models ក្នុង admin.py ដោយប្រើ admin.site.register() ឬ @admin.register decorator។'
          },
          starterCode: {
            language: 'python',
            code: `from django.contrib import admin
from .models import Note

admin.site.register(Note)`
          }
        },
        {
          id: 'dj-4-2',
          slug: 'customizing-admin-list-detail-view',
          moduleNumber: 4,
          lessonNumberInModule: 2,
          title: {
            en: '4.2 Customizing the admin list/detail view',
            km: '៤.២ ការឌីសាញ Customization លើ Admin List/Detail View'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Configure list_display, search_fields, list_filter, and ordering inside ModelAdmin classes.',
            km: 'កំណត់ list_display, search_fields, list_filter និង ordering ក្នុង ModelAdmin Class។'
          },
          starterCode: {
            language: 'python',
            code: `@admin.register(Note)
class NoteAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at')
    search_fields = ('title', 'content')
    list_filter = ('created_at',)`
          }
        },
        {
          id: 'dj-4-3',
          slug: 'practice-manage-notes-admin-panel',
          moduleNumber: 4,
          lessonNumberInModule: 3,
          title: {
            en: '4.3 Practice: manage Note records entirely through the admin panel',
            km: '៤.៣ អនុវត្ត៖ គ្រប់គ្រងទិន្នន័យ Note ទាំងស្រុងតាមរយៈ Admin Panel'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Create a superuser (`python manage.py createsuperuser`) and manage note records via web UI.',
            km: 'បង្កើត Superuser (`python manage.py createsuperuser`) រួចគ្រប់គ្រងទិន្នន័យតាម Web UI។'
          },
          starterCode: {
            language: 'bash',
            code: `python manage.py createsuperuser
python manage.py runserver`
          }
        }
      ]
    },

    // Module 5 — Django REST Framework Basics (5 lessons)
    {
      moduleNumber: 5,
      title: {
        en: 'Module 5 — Django REST Framework Basics',
        km: 'មេរៀនទី ៥ — មូលដ្ឋានគ្រឹះ Django REST Framework (DRF)'
      },
      description: {
        en: 'Transform Django models into JSON APIs using DRF Serializers, APIView, ModelViewSet, and DefaultRouter.',
        km: 'បំប្លែង Django Models ទៅជា JSON APIs ដោយប្រើ DRF Serializers, APIView, ModelViewSet និង Router។'
      },
      lessons: [
        {
          id: 'dj-5-1',
          slug: 'installing-drf-and-why-you-need-it',
          moduleNumber: 5,
          lessonNumberInModule: 1,
          title: {
            en: '5.1 Installing DRF and why you need it for a JSON API',
            km: '៥.១ ការដំឡើង DRF និងហេតុផលដែលត្រូវប្រើវាសម្រាប់ JSON API'
          },
          durationMinutes: 18,
          difficulty: 'Intermediate',
          objective: {
            en: 'Add rest_framework to INSTALLED_APPS and understand DRF serialization, viewsets, and browsers API.',
            km: 'បន្ថែម rest_framework ទៅក្នុង INSTALLED_APPS និងយល់ដឹងពីមុខងារ Serialization, ViewSets និង Browsable API។'
          },
          starterCode: {
            language: 'python',
            code: `# settings.py
INSTALLED_APPS = [
    ...
    'rest_framework',
    'notesapp',
]`
          }
        },
        {
          id: 'dj-5-2',
          slug: 'serializers-converting-models-to-json',
          moduleNumber: 5,
          lessonNumberInModule: 2,
          title: {
            en: '5.2 Serializers — converting models to/from JSON',
            km: '៥.២ Serializers — ការបំប្លែង Models ទៅ/មក JSON'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Build ModelSerializer classes mapping Django model attributes to validated JSON fields.',
            km: 'បង្កើត ModelSerializer Classes ដើម្បីបំប្លែង Django Model Attributes ទៅជា JSON Fields។'
          },
          starterCode: {
            language: 'python',
            code: `from rest_framework import serializers
from .models import Note

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ['id', 'title', 'content', 'created_at']`
          }
        },
        {
          id: 'dj-5-3',
          slug: 'api-views-function-based-vs-apiview',
          moduleNumber: 5,
          lessonNumberInModule: 3,
          title: {
            en: '5.3 API views: function-based (@api_view) vs class-based (APIView)',
            km: '៥.៣ API Views៖ @api_view decorator vs APIView class'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Implement REST endpoints with @api_view([\'GET\', \'POST\']) and APIView subclasses.',
            km: 'បង្កើត REST Endpoints ដោយប្រើ @api_view([\'GET\', \'POST\']) និង APIView Class។'
          },
          starterCode: {
            language: 'python',
            code: `from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET', 'POST'])
def note_list(request):
    if request.method == 'GET':
        return Response([])
    return Response(request.data, status=201)`
          }
        },
        {
          id: 'dj-5-4',
          slug: 'viewsets-and-routers-drf-shortcut-crud',
          moduleNumber: 5,
          lessonNumberInModule: 4,
          title: {
            en: '5.4 ViewSets and Routers — DRF\'s shortcut for full CRUD',
            km: '៥.៤ ViewSets និង Routers — វិធីសាស្ត្រផ្លូវកាត់របស់ DRF សម្រាប់ Full CRUD'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Combine ModelViewSet and DefaultRouter to generate complete CRUD routes in minimal code.',
            km: 'រួមបញ្ចូល ModelViewSet និង DefaultRouter ដើម្បីបង្កើត CRUD Routes ទាំងស្រុងដោយសរសេរកូដតិចបំផុត។'
          },
          explanation: {
            en: 'Writing a separate view for every single CRUD operation gets repetitive fast. DRF\'s ModelViewSet bundles all five standard operations into one class based on your serializer and queryset, and a Router automatically generates the correct URL patterns for all of them.',
            km: 'ការសរសេរ View ដាច់ដោយឡែកសម្រាប់ CRUD នីមួយៗត្រូវការកូដច្រើនដដែលៗ។ DRF ModelViewSet រួមបញ្ចូលប្រមាណវិធីទាំង ៥ ចូលក្នុង Class តែមួយ ហើយ Router បង្កើត URL Patterns ដោយស្វ័យប្រវត្តិ។'
          },
          starterCode: {
            language: 'python',
            code: `# views.py
from rest_framework import viewsets
from .models import Note
from .serializers import NoteSerializer

class NoteViewSet(viewsets.ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

# urls.py
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('notes', NoteViewSet)
urlpatterns = router.urls`
          }
        },
        {
          id: 'dj-5-5',
          slug: 'practice-full-crud-api-viewset-router',
          moduleNumber: 5,
          lessonNumberInModule: 5,
          title: {
            en: '5.5 Practice: build a full CRUD API for the Note model using a ViewSet + Router',
            km: '៥.៥ អនុវត្ត៖ បង្កើត Full CRUD API សម្រាប់ Note Model ដោយប្រើ ViewSet + Router'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Wire up a functioning CRUD API and test GET, POST, PUT, DELETE operations via DRF Browsable API.',
            km: 'ភ្ជាប់ និងតេស្ត CRUD API (GET, POST, PUT, DELETE) តាមរយៈ DRF Browsable API។'
          },
          starterCode: {
            language: 'python',
            code: `# Verify all 5 endpoints automatically generated by Router:
# GET /notes/
# POST /notes/
# GET /notes/:id/
# PUT /notes/:id/
# DELETE /notes/:id/`
          }
        }
      ]
    },

    // Module 6 — Authentication & Permissions (5 lessons)
    {
      moduleNumber: 6,
      title: {
        en: 'Module 6 — Authentication & Permissions',
        km: 'មេរៀនទី ៦ — Authentication និង Permissions'
      },
      description: {
        en: 'Implement token authentication, SimpleJWT access/refresh tokens, and permission policy guards.',
        km: 'អនុវត្ត Token Authentication, SimpleJWT Tokens, និង Permission Guards។'
      },
      lessons: [
        {
          id: 'dj-6-1',
          slug: 'drf-builtin-authentication-classes-overview',
          moduleNumber: 6,
          lessonNumberInModule: 1,
          title: {
            en: '6.1 DRF\'s built-in authentication classes overview',
            km: '៦.១ ការណែនាំអំពី DRF Built-in Authentication Classes'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Understand SessionAuthentication, BasicAuthentication, TokenAuthentication, and JWT.',
            km: 'យល់ដឹងពី SessionAuthentication, BasicAuthentication, TokenAuthentication, និង JWT។'
          },
          starterCode: {
            language: 'python',
            code: `# settings.py
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework.authentication.TokenAuthentication',
    ]
}`
          }
        },
        {
          id: 'dj-6-2',
          slug: 'token-authentication-drf',
          moduleNumber: 6,
          lessonNumberInModule: 2,
          title: {
            en: '6.2 Token authentication with DRF authtoken app',
            km: '៦.២ ការប្រើប្រាស់ Token Authentication ជាមួយ rest_framework.authtoken'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Issue static database tokens on request and authenticate requests with Authorization: Token <key>.',
            km: 'បង្កើត DB Tokens ជូន User និងផ្ទៀងផ្ទាត់ Header Authorization: Token <key>។'
          },
          starterCode: {
            language: 'python',
            code: `# INSTALLED_APPS += ['rest_framework.authtoken']
# python manage.py migrate
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('api-token-auth/', obtain_auth_token),
]`
          }
        },
        {
          id: 'dj-6-3',
          slug: 'jwt-authentication-djangorestframework-simplejwt',
          moduleNumber: 6,
          lessonNumberInModule: 3,
          title: {
            en: '6.3 JWT authentication with djangorestframework-simplejwt',
            km: '៦.៣ JWT Authentication ជាមួយ djangorestframework-simplejwt'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Configure SimpleJWT to issue signed access and refresh tokens via /api/token/ and /api/token/refresh/.',
            km: 'កំណត់រចនាសម្ព័ន្ធ SimpleJWT ដើម្បីបញ្ជូន Access/Refresh Tokens តាមរយៈ /api/token/ និង /api/token/refresh/។'
          },
          starterCode: {
            language: 'python',
            code: `from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]`
          }
        },
        {
          id: 'dj-6-4',
          slug: 'permission-classes-isauthenticated-custom-permissions',
          moduleNumber: 6,
          lessonNumberInModule: 4,
          title: {
            en: '6.4 Permission classes: IsAuthenticated, custom permissions',
            km: '៦.៤ Permission classes៖ IsAuthenticated និង Custom Permissions'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Protect views with IsAuthenticated, IsAuthenticatedOrReadOnly, and custom BasePermission subclasses.',
            km: 'ការពារ Views ដោយប្រើ IsAuthenticated, IsAuthenticatedOrReadOnly និង Custom BasePermission Class។'
          },
          starterCode: {
            language: 'python',
            code: `from rest_framework.permissions import IsAuthenticated, BasePermission

class IsOwner(BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.user == request.user`
          }
        },
        {
          id: 'dj-6-5',
          slug: 'practice-require-login-for-writing-notes',
          moduleNumber: 6,
          lessonNumberInModule: 5,
          title: {
            en: '6.5 Practice: require login for creating/deleting notes, but allow public read access',
            km: '៦.៥ អនុវត្ត៖ សម្រេចសិទ្ធិ Login សម្រាប់ការ Create/Delete Notes ប៉ុន្តែអនុញ្ញាត Public Read'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Apply IsAuthenticatedOrReadOnly to NoteViewSet and automatically attach user in perform_create.',
            km: 'ដាក់ IsAuthenticatedOrReadOnly លើ NoteViewSet និងភ្ជាប់ user ស្វ័យប្រវត្តិក្នុង perform_create។'
          },
          starterCode: {
            language: 'python',
            code: `class NoteViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)`
          }
        }
      ]
    },

    // Module 7 — Validation, Error Handling & Testing (5 lessons)
    {
      moduleNumber: 7,
      title: {
        en: 'Module 7 — Validation, Error Handling & Testing',
        km: 'មេរៀនទី ៧ — Validation, Error Handling និង Testing'
      },
      description: {
        en: 'Field/object-level serializer validation, custom exception handlers, and APITestCase automated test suites.',
        km: 'Serializer Validation, Custom Exception Handlers និង APITestCase Automated Testing។'
      },
      lessons: [
        {
          id: 'dj-7-1',
          slug: 'field-level-object-level-validation-serializers',
          moduleNumber: 7,
          lessonNumberInModule: 1,
          title: {
            en: '7.1 Field-level and object-level validation in serializers',
            km: '៧.១ Field-level និង Object-level Validation ក្នុង Serializers'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Write validate_<fieldname> and validate(self, data) methods to enforce business constraints in serializers.',
            km: 'សរសេរ validate_<fieldname> និង validate(self, data) ដើម្បីត្រួតពិនិត្យ Business Rules ក្នុង Serializers។'
          },
          starterCode: {
            language: 'python',
            code: `class NoteSerializer(serializers.ModelSerializer):
    def validate_title(self, value):
        if len(value) < 3:
            raise serializers.ValidationError("Title must be at least 3 characters.")
        return value`
          }
        },
        {
          id: 'dj-7-2',
          slug: 'consistent-error-responses-drf',
          moduleNumber: 7,
          lessonNumberInModule: 2,
          title: {
            en: '7.2 Consistent error responses in DRF',
            km: '៧.២ ទម្រង់ឆ្លើយតប Error មានស្តង់ដារក្នុង DRF'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Customize DRF payload error formatting across 400 Bad Request and 422 Unprocessable Entity responses.',
            km: 'កំណត់រចនាសម្ព័ន្ធ Error Response Format ឱ្យមានភាពច្បាស់លាស់ និងដូចគ្នាគ្រប់ដង។'
          },
          starterCode: {
            language: 'python',
            code: `# Serializer validation failures automatically return HTTP 400 Bad Request:
# { "title": ["Title must be at least 3 characters."] }`
          }
        },
        {
          id: 'dj-7-3',
          slug: 'handling-404s-and-drf-exception-handling',
          moduleNumber: 7,
          lessonNumberInModule: 3,
          title: {
            en: '7.3 Handling 404s and DRF\'s default exception handling',
            km: '៧.៣ ការគ្រប់គ្រងករណី 404 Not Found និង DRF Custom Exception Handler'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Override custom_exception_handler in settings to format all API exceptions uniformly.',
            km: 'សរសេរ custom_exception_handler ក្នុង settings ដើម្បីរៀបចំរចនាសម្ព័ន្ធ API Exception ទាំងអស់។'
          },
          starterCode: {
            language: 'python',
            code: `from rest_framework.views import exception_handler

def custom_exception_handler(exc, context):
    response = exception_handler(exc, context)
    if response is not None:
        response.data['status_code'] = response.status_code
    return response`
          }
        },
        {
          id: 'dj-7-4',
          slug: 'writing-basic-api-test-django-test-client',
          moduleNumber: 7,
          lessonNumberInModule: 4,
          title: {
            en: '7.4 Writing a basic API test with Django\'s test client',
            km: '៧.៤ ការសរសេរ API Test មូលដ្ឋានដោយប្រើ APITestCase'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Subclass rest_framework.test.APITestCase and test HTTP status codes and response JSON.',
            km: 'បង្កើត Subclass ពី APITestCase និងតេស្ត HTTP status codes ព្រមទាំង Response JSON។'
          },
          starterCode: {
            language: 'python',
            code: `from rest_framework.test import APITestCase
from rest_framework import status

class NoteAPITests(APITestCase):
    def test_get_notes_list(self):
        response = self.client.get('/api/notes/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)`
          }
        },
        {
          id: 'dj-7-5',
          slug: 'practice-add-validation-serializer-write-test',
          moduleNumber: 7,
          lessonNumberInModule: 5,
          title: {
            en: '7.5 Practice: add validation to the Note serializer and write one test for it',
            km: '៧.៥ អនុវត្ត៖ បន្ថែម Validation ក្នុង Note Serializer រួចសរសេរ Test ផ្ទៀងផ្ទាត់'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Add title validation constraint and write test_create_note_validation_failure test method.',
            km: 'បន្ថែម Title validation constraint រួចសរសេរ Method test_create_note_validation_failure។'
          },
          starterCode: {
            language: 'python',
            code: `def test_invalid_title_fails(self):
    response = self.client.post('/api/notes/', {'title': 'a', 'content': 'short'})
    self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)`
          }
        }
      ]
    },

    // Module 8 — Capstone Project (3 lessons)
    {
      moduleNumber: 8,
      title: {
        en: 'Module 8 — Capstone Project',
        km: 'មេរៀនទី ៨ — គម្រោងបញ្ចប់វគ្គ (Capstone Project)'
      },
      description: {
        en: 'Plan, build, and test the production-ready Notes API using Django, DRF, SimpleJWT, and SQLite.',
        km: 'រៀបចំផែនការ សាងសង់ និងធ្វើតេស្ត Notes API កម្រិតផលិតកម្មជាមួយ Django, DRF, SimpleJWT, និង SQLite។'
      },
      lessons: [
        {
          id: 'dj-8-1',
          slug: 'planning-notes-api-django-rebuild',
          moduleNumber: 8,
          lessonNumberInModule: 1,
          title: {
            en: '8.1 Planning the Notes API (Django) rebuild',
            km: '៨.១ ការរៀបចំផែនការសាងសង់ Notes API (Django) ឡើងវិញ'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Outline database schema, endpoint route hierarchy, authentication flow, and test plan.',
            km: 'រៀបចំ Outline Database Schema, Endpoints, Auth Flow និង Test Plan។'
          },
          starterCode: {
            language: 'text',
            code: `Endpoints:
POST /api/token/          -> Obtain JWT Access/Refresh tokens
GET  /api/notes/          -> Public/Authenticated note listing
POST /api/notes/          -> Authenticated note creation (owned by user)
PUT  /api/notes/:id/      -> Update owned note
DELETE /api/notes/:id/   -> Delete owned note`
          }
        },
        {
          id: 'dj-8-2',
          slug: 'building-notes-api-django-guided-build',
          moduleNumber: 8,
          lessonNumberInModule: 2,
          title: {
            en: '8.2 Building the Notes API (Django) (full guided build)',
            km: '៨.២ ការសរសេរកូដសាងសង់ Notes API (Django) ជំហានដោយជំហាន'
          },
          durationMinutes: 60,
          difficulty: 'Intermediate',
          objective: {
            en: 'Build the entire Django REST Framework Notes API codebase from scratch.',
            km: 'សរសេរកូដប្រព័ន្ធ Django REST Framework Notes API ទាំងមូលពីដំបូងរហូតដល់បញ្ចប់។'
          },
          starterCode: {
            language: 'python',
            code: `# Complete Django REST Framework Notes API build including models, serializers, views, permissions, urls, and tests.`
          }
        },
        {
          id: 'dj-8-3',
          slug: 'comparing-project-against-handbuilt-python-version',
          moduleNumber: 8,
          lessonNumberInModule: 3,
          title: {
            en: '8.3 Comparing this project against the Python course\'s hand-built version',
            km: '៨.៣ ការប្រៀបធៀបគម្រោងនេះទៅនឹងកំណែ Hand-built ក្នុងវគ្គ Python'
          },
          durationMinutes: 30,
          difficulty: 'Intermediate',
          objective: {
            en: 'Evaluate architectural advantages of Django ORM, DRF Routers, and admin tools vs raw Python sockets/file I/O.',
            km: 'វាយតម្លៃអត្ថប្រយោជន៍នៃ Django ORM, DRF Routers, និង Admin Tools ធៀបនឹង Raw Python code។'
          },
          starterCode: {
            language: 'text',
            code: `Comparison Summary:
- Routing: Hand-built raw Python requires manual path parsing vs DRF DefaultRouter
- Data Storage: File-based JSON vs SQLite database backed by Django ORM
- Admin UI: Hand-built (none) vs Django auto-generated Admin Panel
- Auth: Custom token parsing vs battle-tested SimpleJWT library`
          }
        }
      ]
    }
  ]
};
