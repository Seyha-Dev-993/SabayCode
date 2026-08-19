import { BackendCourse } from '../backendCoursesHubData';

export const API_SECURITY_COURSE_DATA: BackendCourse = {
  id: 'api-security',
  slug: 'api-security',
  title: {
    en: 'REST API Design, Auth & Security Practices',
    km: 'ការរចនា REST API, Auth & សុវត្ថិភាព API'
  },
  iconName: 'security',
  type: 'cross-cutting',
  categoryId: 'security',
  difficulty: 'Intermediate',
  shortDescription: {
    en: 'Master HTTP methods, RESTful resource design, OAuth 2.0 / OIDC flows, JWT security, Rate Limiting, OWASP Top 10 API vulnerabilities, and OpenAPI / Swagger documentation.',
    km: 'រៀនការរចនា RESTful Resources, OAuth 2.0 / OIDC, JWT Security, Rate Limiting, OWASP Top 10 API Security, និង OpenAPI/Swagger Spec។'
  },
  summary: {
    en: 'Building scalable backends requires strict API contract design and ironclad security guarantees. Master REST principles, status code conventions, OAuth 2.0 Authorization Code Flow with PKCE, JWT token rotation, protection against OWASP Top 10 API security threats (BOLA, Broken Auth, Rate Limit Bypass), CORS, and OpenAPI 3.0 documentation.',
    km: 'ការបង្កើត Backend ត្រូវការការរចនា API Contract ច្បាស់លាស់ និងប្រព័ន្ធសុវត្ថិភាពរឹងមាំ។ រៀន REST Principles, Status Codes, OAuth 2.0 + PKCE, JWT Token Rotation, OWASP Top 10 API Security (BOLA, Rate Limit Bypass), CORS, និង OpenAPI Spec។'
  },
  estimatedHours: 20,
  lessonCount: 26,
  usedFor: 'Production API Gateways, Secure Banking Services, Multi-Tenant SaaS Backends',
  realWorldApps: ['Google OAuth Gateway', 'Stripe Developer API Specs', 'Auth0 Security Engines', 'Cloudflare API Gateway Shields'],
  prerequisites: {
    en: 'Understanding of at least one backend language or framework recommended.',
    km: 'គួរតែមានការយល់ដឹងពី ភាសាសរសេរកូដ Backend ឬ Framework ណាមួយរួចរាល់ជាមុន។'
  },
  whatYouWillLearn: {
    en: [
      'Design idempotent and intuitive RESTful resource URLs following RFC standards',
      'Choose proper HTTP status codes (200, 201, 204, 400, 401, 403, 404, 422, 429, 500)',
      'Understand OAuth 2.0 framework: Grant types, Scopes, Tokens, and PKCE extension',
      'Secure JWTs: Signature algorithms (RS256 vs HS256), token expiration, and refresh rotation',
      'Defend against OWASP API Top 10: Broken Object Level Authorization (BOLA/IDOR)',
      'Mitigate DDoS and brute force attacks using sliding window rate limiters',
      'Configure Cross-Origin Resource Sharing (CORS) headers safely in production',
      'Document APIs automatically using OpenAPI 3.0 specs and Swagger UI'
    ],
    km: [
      'រចនា RESTful Resource URLs ត្រឹមត្រូវតាម RFC Standards',
      'ជ្រើសរើស HTTP Status Codes ត្រឹមត្រូវ (200, 201, 204, 400, 401, 403, 404, 422, 429, 500)',
      'យល់ដឹងពីប្រព័ន្ធ OAuth 2.0: Grant Types, Scopes, Access Tokens, និង PKCE',
      'ពង្រឹងសុវត្ថិភាព JWT: Algorithms (RS256 vs HS256), Token Rotation',
      'ការពារប្រព័ន្ធពី OWASP API Top 10: Broken Object Level Authorization (BOLA)',
      'ទប់ស្កាត់ការវាយប្រហារ DDoS/Brute Force ដោយប្រើ Sliding Window Rate Limiting',
      'កំណត់ Cross-Origin Resource Sharing (CORS) Headers ដោយសុវត្ថិភាព',
      'បង្កើតឯកសារ API Documentation ស្វ័យប្រវត្តិជាមួយ OpenAPI 3.0 និង Swagger UI'
    ]
  },
  toolsAndSetup: {
    en: 'Use Postman, Bruno, or curl. Practice testing API security headers, JWT validation logic, and OpenAPI specifications directly inside our live interactive editor.',
    km: 'ប្រើប្រាស់ Postman, Bruno ឬ curl។ អ្នកអាចសាកល្បងតេស្ត Security Headers, JWT Validation និង OpenAPI Spec ផ្ទាល់ក្នុង Editor លើវេបសាយនេះ។'
  },
  cheatSheet: [
    {
      concept: 'BOLA Defense Guard (Ownership Check)',
      code: `// Ensure resource belongs to authenticated user BEFORE returning\nconst document = await Document.findById(req.params.id);\nif (document.ownerId.toString() !== req.user.id) {\n  return res.status(403).json({ error: "Forbidden: Access Denied" });\n}`,
      explanation: { en: 'Prevents Broken Object Level Authorization (BOLA/IDOR) data leaks.', km: 'ទប់ស្កាត់ការលួចមើលទិន្នន័យរបស់អ្នកដទៃ (BOLA/IDOR Vulnerability)។' }
    },
    {
      concept: 'OpenAPI 3.0 Path Definition',
      code: `/users/{id}:\n  get:\n    summary: Get user profile by ID\n    security:\n      - BearerAuth: []\n    responses:\n      '200':\n        description: Successful user payload`,
      explanation: { en: 'Defines a REST endpoint specification in OpenAPI YAML.', km: 'កំណត់ Specification នៃ API Endpoint ក្នុងទម្រង់ OpenAPI YAML។' }
    }
  ],
  quiz: [
    {
      id: 'sec-q1',
      question: { en: 'Which security vulnerability ranks as #1 on the OWASP API Security Top 10, occurring when an API exposes endpoints that execute actions on resources without validating if the logged-in user owns that specific resource ID?', km: 'តើការឆកល្វែងផ្នែកសុវត្ថិភាពមួយណាដែលជាប់ចំណាត់ថ្នាក់លេខ ១ ក្នុង OWASP API Top 10 (កើនឡើងពេល API មិនបានត្រួតពិនិត្យម្ចាស់ ID)?' },
      options: [
        { id: '1', text: { en: 'BOLA / IDOR (Broken Object Level Authorization)', km: 'BOLA / IDOR (Broken Object Level Authorization)' }, isCorrect: true },
        { id: '2', text: { en: 'SQL Injection', km: 'SQL Injection' }, isCorrect: false },
        { id: '3', text: { en: 'Cross-Site Scripting (XSS)', km: 'Cross-Site Scripting (XSS)' }, isCorrect: false },
        { id: '4', text: { en: 'Missing Rate Limiting', km: 'Missing Rate Limiting' }, isCorrect: false }
      ],
      explanation: { en: 'BOLA occurs when endpoints fail to verify that the requesting user has explicit permission to operate on the target object ID.', km: 'BOLA កើតឡើងពេលដែល API មិនបានត្រួតពិនិត្យថា តើអ្នក Login មានសិទ្ធិកែប្រែ ឬមើល Object ID នោះដែរឬទេ។' }
    }
  ],
  capstoneProject: {
    id: 'sec-capstone',
    slug: 'api-security-gateway-shield',
    title: {
      en: 'Zero-Trust API Security Gateway Shield & Token Validator',
      km: 'ការបង្កើត Security Gateway Shield ទប់ស្កាត់ BOLA & Rate Limit Bypass'
    },
    description: {
      en: 'Build a production API Security Middleware Suite enforcing JWT signature checks, RS256 token rotation, BOLA ownership validation guards, rate limiting headers, and OpenAPI schema compliance.',
      km: 'បង្កើតប្រព័ន្ធ Security Middleware ការពារ REST API ពីការលួចទិន្នន័យ (BOLA), ត្រួតពិនិត្យ JWT RS256 Tokens, Rate Limiting, និង CORS Security Headers។'
    },
    starterCode: {
      language: 'javascript',
      code: `import express from 'express';

const app = express();
app.use(express.json());

// BOLA Vulnerable Endpoint (Do NOT use in production)
app.get('/api/v1/invoices/:id', (req, res) => {
  // Missing user ownership check!
  res.json({ invoiceId: req.params.id, amount: 5000.0, ownerId: "user_99" });
});

app.listen(3000);`
    },
    finalCode: `import express from 'express';
import jwt from 'jsonwebtoken';

const app = express();
app.use(express.json());

// 1. Hardened Security Headers Middleware
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  res.setHeader('Access-Control-Allow-Origin', 'https://app.sabaycode.com');
  next();
});

// 2. Authentication Token Guard
const authenticateUser = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'UNAUTHORIZED', message: 'Bearer token required' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, 'SECURITY_PUBLIC_KEY');
    req.user = decoded; // Contains { userId: "user_42", role: "MEMBER" }
    next();
  } catch (err) {
    return res.status(401).json({ error: 'INVALID_TOKEN', message: 'Token verification failed' });
  }
};

// 3. Secure Endpoint Defending Against BOLA (Broken Object Level Auth)
app.get('/api/v1/invoices/:id', authenticateUser, async (req, res) => {
  const invoiceId = req.params.id;

  // Mock DB Lookup
  const invoice = { id: invoiceId, amount: 1500.00, ownerUserId: "user_42" };

  // CRITICAL BOLA DEFENSE: Verify resource owner matches token subject!
  if (invoice.ownerUserId !== req.user.userId && req.user.role !== 'ADMIN') {
    return res.status(403).json({
      error: 'FORBIDDEN',
      message: 'You do not have permission to view this resource'
    });
  }

  res.json({ status: 'SUCCESS', data: invoice });
});

app.listen(3000, () => console.log('Zero-Trust Security Shield Online on port 3000'));`,
    featureChecklist: {
      en: [
        'Production security headers (X-Frame-Options, HSTS, strict CORS)',
        'Bearer JWT validation and token payload context extraction',
        'Strict BOLA / IDOR ownership validation guard protecting user resources',
        'Standardized RFC 7807 error status response format'
      ],
      km: [
        'ការកំណត់ Security Headers ស្តង់ដារ (X-Frame-Options, HSTS, CORS)',
        'ការត្រួតពិនិត្យ Bearer JWT និងទាញយក User Context',
        'ការបង្កើត BOLA/IDOR Guard ការពារទិន្នន័យអតិថិជនពីការលួចមើល',
        'ទម្រង់ឆ្លើយតប Error Response ស្តង់ដារ RFC 7807'
      ]
    },
    sampleRequests: [
      {
        title: 'GET /api/v1/invoices/INV-9001 (Owner Authorized Access)',
        method: 'GET',
        url: '/api/v1/invoices/INV-9001',
        headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' },
        responseStatus: 200,
        responseBody: JSON.stringify({ status: 'SUCCESS', data: { id: 'INV-9001', amount: 1500.0, ownerUserId: 'user_42' } }, null, 2)
      },
      {
        title: 'GET /api/v1/invoices/INV-9001 (BOLA Attack Blocked)',
        method: 'GET',
        url: '/api/v1/invoices/INV-9001',
        headers: { 'Authorization': 'Bearer token_belonging_to_attacker_user_99' },
        responseStatus: 403,
        responseBody: JSON.stringify({ error: 'FORBIDDEN', message: 'You do not have permission to view this resource' }, null, 2)
      }
    ]
  },
  modules: [
    {
      moduleNumber: 1,
      title: { en: 'Module 1: RESTful Resource Design', km: 'មេរៀនទី ១៖ ការរចនា RESTful Resources' },
      description: { en: 'HTTP verbs, URL Nouns vs Verbs, Idempotency, and RFC status codes.', km: 'HTTP Verbs, URL Nouns, Idempotency និង HTTP Status Codes។' },
      lessons: [
        {
          id: 'sec-m1-l1',
          slug: 'rest-resource-design-rules',
          moduleNumber: 1,
          lessonNumberInModule: 1,
          title: { en: '1. Designing Intuitive & Idempotent REST Resources', km: '១. ការរចនា REST Resources ត្រឹមត្រូវតាមស្តង់ដារ' },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: { en: 'Structure REST endpoints using nouns, plural collections, and correct HTTP verbs.', km: 'រៀបចំ REST Endpoints ដោយប្រើប្រាស់ Nouns, Plural Collections និង HTTP Verbs។' },
          explanation: {
            en: 'REST APIs treat data as resources identified by URI paths. HTTP GET, PUT, and DELETE must be idempotent.',
            km: 'REST APIs ចាត់ទុកទិន្នន័យជា Resources ដែលសម្គាល់តាម URI paths។ GET, PUT, និង DELETE ត្រូវតែ Idempotent។'
          },
          tutorial: {
            en: 'Standard RESTful URL mapping convention:',
            km: 'ស្តង់ដារនៃការរៀបចំ RESTful URL Mapping៖'
          },
          starterCode: {
            language: 'text',
            code: `GET    /api/v1/orders        -> List orders (200 OK)
POST   /api/v1/orders        -> Create order (201 Created)
GET    /api/v1/orders/{id}   -> Fetch order details (200 OK)
PUT    /api/v1/orders/{id}   -> Replace order (200 OK)
DELETE /api/v1/orders/{id}   -> Remove order (204 No Content)`
          }
        }
      ]
    },
    {
      moduleNumber: 2,
      title: { en: 'Module 2: HTTP Status Codes & Error RFCs', km: 'មេរៀនទី ២៖ HTTP Status Codes & Error Standards' },
      description: { en: '2xx, 3xx, 4xx, 5xx codes and RFC 7807 ProblemDetails specification.', km: '2xx, 3xx, 4xx, 5xx Status codes និងស្តង់ដារ RFC 7807 ProblemDetails។' },
      lessons: [
        {
          id: 'sec-m2-l1',
          slug: 'http-status-codes-rfc7807',
          moduleNumber: 2,
          lessonNumberInModule: 1,
          title: { en: '1. Standardizing Errors with RFC 7807 Problem Details', km: '១. ការកំណត់ទម្រង់ Error Response ស្តង់ដារតាម RFC 7807' },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: { en: 'Format error responses consistently across all backend microservices.', km: 'រៀបចំទម្រង់ឆ្លើយតប Error Responses ដូចៗគ្នាទូទាំង Microservices។' },
          explanation: {
            en: 'RFC 7807 defines a standard JSON layout (`type`, `title`, `status`, `detail`, `instance`) for HTTP API errors.',
            km: 'RFC 7807 កំណត់ទម្រង់ JSON ស្តង់ដារសម្រាប់បង្ហាញ Error Message ក្នុង API។'
          },
          tutorial: {
            en: 'RFC 7807 error payload JSON structure:',
            km: 'ទម្រង់ JSON នៃ RFC 7807 Error Payload៖'
          },
          starterCode: {
            language: 'json',
            code: `{
  "type": "https://api.sabaycode.com/errors/insufficient-funds",
  "title": "Insufficient Balance",
  "status": 400,
  "detail": "Account balance $50.00 is lower than requested withdrawal $100.00",
  "instance": "/api/v1/withdrawals/tx_88120"
}`
          }
        }
      ]
    },
    {
      moduleNumber: 3,
      title: { en: 'Module 3: OAuth 2.0 & OpenID Connect (OIDC)', km: 'មេរៀនទី ៣៖ OAuth 2.0 & OpenID Connect (OIDC)' },
      description: { en: 'Authorization code flow, PKCE extension, Client Credentials, OIDC ID Tokens.', km: 'Authorization code flow, PKCE extension, Client Credentials, OIDC ID Tokens។' },
      lessons: [
        {
          id: 'sec-m3-l1',
          slug: 'oauth2-pkce-oidc-flow',
          moduleNumber: 3,
          lessonNumberInModule: 1,
          title: { en: '1. Mastering OAuth 2.0 Authorization Code Flow with PKCE', km: '១. យល់ដឹងច្បាស់ពី OAuth 2.0 Authorization Code Flow ជាមួយ PKCE' },
          durationMinutes: 30,
          difficulty: 'Intermediate',
          objective: { en: 'Understand modern OAuth 2.0 grant types for mobile, SPA, and server clients.', km: 'យល់ដឹងពីប្រព័ន្ធ OAuth 2.0 Grant Types សម្រាប់ Mobile, SPA និង Server។' },
          explanation: {
            en: 'OAuth 2.0 delegates authentication to identity providers (Google, Auth0) without sharing user passwords.',
            km: 'OAuth 2.0 ប្រគល់ភារកិច្ច Login ទៅ Identity Providers ដោយមិនបាច់ចែករំលែក Password។'
          },
          tutorial: {
            en: 'PKCE code challenge generation sequence:',
            km: 'លំដាប់លំដោយនៃការបង្កើត PKCE Code Challenge៖'
          },
          starterCode: {
            language: 'javascript',
            code: `// Generate Code Verifier and SHA256 Code Challenge for PKCE flow
const codeVerifier = crypto.randomBytes(32).toString('base64url');
const codeChallenge = crypto.createHash('sha256').update(codeVerifier).digest('base64url');`
          }
        }
      ]
    },
    {
      moduleNumber: 4,
      title: { en: 'Module 4: JWT Hardening & Refresh Token Rotation', km: 'មេរៀនទី ៤៖ ពង្រឹងសុវត្ថិភាព JWT & Token Rotation' },
      description: { en: 'RS256 asymmetric signing, short-lived tokens, refresh rotation, revocation.', km: 'RS256 asymmetric signing, Short-lived tokens, Refresh token rotation, Revocation list។' },
      lessons: [
        {
          id: 'sec-m4-l1',
          slug: 'jwt-hardening-refresh-rotation',
          moduleNumber: 4,
          lessonNumberInModule: 1,
          title: { en: '1. Securing JWTs with RS256 & Refresh Token Rotation', km: '១. ពង្រឹងសុវត្ថិភាព JWT ដោយប្រើប្រាស់ RS256 & Refresh Token Rotation' },
          durationMinutes: 30,
          difficulty: 'Intermediate',
          objective: { en: 'Prevent token theft exploits using short lifetimes and refresh token rotation.', km: 'ទប់ស្កាត់ការលួចប្រើប្រាស់ Token តាមរយៈការធ្វើ Short Token Lifetime & Rotation។' },
          explanation: {
            en: 'RS256 uses a private key for signing tokens on auth servers and a public key for verification across microservices.',
            km: 'RS256 ប្រើប្រាស់ Private Key សម្រាប់ Sign Token និង Public Key សម្រាប់ Verify Token លើ Microservices។'
          },
          tutorial: {
            en: 'RS256 token verification pattern:',
            km: 'របៀបធ្វើ RS256 Token Verification៖'
          },
          starterCode: {
            language: 'javascript',
            code: `import jwt from 'jsonwebtoken';

// Verify token using PUBLIC key (safe to distribute to all backend microservices)
const verifiedPayload = jwt.verify(token, publicKey, { algorithms: ['RS256'] });`
          }
        }
      ]
    },
    {
      moduleNumber: 5,
      title: { en: 'Module 5: OWASP API Security Top 10 Mitigation', km: 'មេរៀនទី ៥៖ ទប់ស្កាត់ OWASP API Security Top 10' },
      description: { en: 'BOLA, Broken Auth, Excessive Data Exposure, Mass Assignment, Rate Limit Bypass.', km: 'ទប់ស្កាត់ BOLA, Broken Auth, Excessive Data Exposure, Mass Assignment។' },
      lessons: [
        {
          id: 'sec-m5-l1',
          slug: 'owasp-api-top10-bola-mitigation',
          moduleNumber: 5,
          lessonNumberInModule: 1,
          title: { en: '1. Preventing Broken Object Level Authorization (BOLA/IDOR)', km: '១. ការទប់ស្កាត់ការលួចមើលទិន្នន័យ BOLA/IDOR Vulnerability' },
          durationMinutes: 30,
          difficulty: 'Intermediate',
          objective: { en: 'Audit and enforce ownership authorization guards on all parameterized endpoints.', km: 'ត្រួតពិនិត្យ និងបង្កើត Guard ផ្ទៀងផ្ទាត់សិទ្ធិម្ចាស់ទិន្នន័យលើគ្រប់ Endpoints។' },
          explanation: {
            en: 'Never trust user inputs like `/api/users/:userId/orders` without validating that `:userId` matches `req.user.id`.',
            km: 'កុំជឿជាក់លើ User Input `/api/users/:userId/orders` ដោយមិនបានផ្ទៀងផ្ទាត់សិទ្ធិម្ចាស់ទិន្នន័យឱ្យសោះ។'
          },
          tutorial: {
            en: 'Enforcing ownership authorization check:',
            km: 'ការបង្កើត Guard ផ្ទៀងផ្ទាត់សិទ្ធិម្ចាស់ទិន្នន័យ៖'
          },
          starterCode: {
            language: 'javascript',
            code: `if (requestedResource.ownerId !== authenticatedUser.id) {
  return res.status(403).json({ error: "Access Denied: BOLA Guard Triggered" });
}`
          }
        }
      ]
    },
    {
      moduleNumber: 6,
      title: { en: 'Module 6: Rate Limiting & CORS Configuration', km: 'មេរៀនទី ៦៖ Rate Limiting & ការកំណត់ CORS' },
      description: { en: 'Sliding window limiters, Redis token bucket, CORS preflight headers.', km: 'Sliding window limiters, Redis token bucket, CORS headers។' },
      lessons: [
        {
          id: 'sec-m6-l1',
          slug: 'rate-limiting-cors-security',
          moduleNumber: 6,
          lessonNumberInModule: 1,
          title: { en: '1. Defending Endpoints with Rate Limiting & CORS Policy', km: '១. ការពារ Endpoints ដោយប្រើប្រាស់ Rate Limiting & CORS Policy' },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: { en: 'Throttle API abuse and configure CORS origin policies securely.', km: 'ទប់ស្កាត់ការ Spam API និងកំណត់ Origin CORS ឱ្យបានត្រឹមត្រូវ។' },
          explanation: {
            en: 'Never use `Access-Control-Allow-Origin: *` in production for endpoints requiring authentication cookies or Bearer headers.',
            km: 'កុំប្រើប្រាស់ `Access-Control-Allow-Origin: *` លើ Production សម្រាប់ API ណាដែលត្រូវប្រើប្រាស់ Authentication ឱ្យសោះ។'
          },
          tutorial: {
            en: 'Setting strict CORS policy headers:',
            km: 'ការកំណត់ CORS Policy Headers ត្រឹមត្រូវ៖'
          },
          starterCode: {
            language: 'javascript',
            code: `const corsOptions = {
  origin: 'https://app.sabaycode.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
};`
          }
        }
      ]
    },
    {
      moduleNumber: 7,
      title: { en: 'Module 7: API Documentation with OpenAPI 3.0', km: 'មេរៀនទី ៧៖ បង្កើត API Specs ជាមួយ OpenAPI 3.0' },
      description: { en: 'OpenAPI 3.0 YAML/JSON, Swagger UI, ReDoc, and contract testing.', km: 'OpenAPI 3.0 Spec, Swagger UI, ReDoc និង Contract testing។' },
      lessons: [
        {
          id: 'sec-m7-l1',
          slug: 'openapi-3-swagger-documentation',
          moduleNumber: 7,
          lessonNumberInModule: 1,
          title: { en: '1. Writing OpenAPI 3.0 Specifications & Swagger UI', km: '១. ការបង្កើត OpenAPI 3.0 Specification & Swagger UI' },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: { en: 'Generate clear, interactive API documentation contracts.', km: 'បង្កើតឯកសារ API Documentation មានភាពច្បាស់លាស់សម្រាប់ Frontend Developers។' },
          explanation: {
            en: 'OpenAPI 3.0 establishes a machine-readable contract between backend and frontend teams.',
            km: 'OpenAPI 3.0 បង្កើតកិច្ចព្រមព្រៀង (Contract) រវាង Backend និង Frontend Developers។'
          },
          tutorial: {
            en: 'OpenAPI 3.0 YAML endpoint definition block:',
            km: 'គំរូប្លុក OpenAPI 3.0 YAML Endpoint Specification៖'
          },
          starterCode: {
            language: 'yaml',
            code: `openapi: 3.0.3
info:
  title: SabayCode Core API
  version: 1.0.0
paths:
  /api/v1/health:
    get:
      summary: API Health Check
      responses:
        '200':
          description: Service Healthy`
          }
        }
      ]
    },
    {
      moduleNumber: 8,
      title: { en: 'Module 8: API Security Capstone Shield', km: 'មេរៀនទី ៨៖ គម្រោង Capstone API Security Gateway Shield' },
      description: { en: 'Complete Security Gateway Shield Capstone.', km: 'បង្កើតប្រព័ន្ធ Security Gateway Shield ពេញលេញ។' },
      lessons: [
        {
          id: 'sec-m8-l1',
          slug: 'api-security-capstone-building',
          moduleNumber: 8,
          lessonNumberInModule: 1,
          title: { en: '1. Executing the Zero-Trust API Security Capstone', km: '១. គម្រោងបង្កើត Zero-Trust API Security Capstone' },
          durationMinutes: 45,
          difficulty: 'Advanced',
          objective: { en: 'Deliver a production API security shield.', km: 'បង្កើតប្រព័ន្ធ API Security Shield អាជីព។' },
          explanation: {
            en: 'Combine JWT authentication, BOLA defense guards, rate limiters, and CORS policies into a zero-trust shield.',
            km: 'រួមបញ្ចូល JWT auth, BOLA defense, rate limiting, និង CORS ទៅជាប្រព័ន្ធការពារអាជីព។'
          },
          tutorial: {
            en: 'Run the security shield capstone project in the interactive editor.',
            km: 'សាកល្បងដំណើរកូដ Capstone ក្នុង Interactive Editor៖'
          },
          starterCode: {
            language: 'javascript',
            code: `console.log("Zero-Trust Security Gateway Shield Ready");`
          }
        }
      ]
    }
  ]
};
