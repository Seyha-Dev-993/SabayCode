import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, Terminal, Check, Copy, Code2, Trash2, Cpu, CheckCircle2, AlertTriangle, Sparkles } from 'lucide-react';

export interface BackendClassCodeSandboxProps {
  starterCode?: {
    js?: string;
    sql?: string;
    json?: string;
    bash?: string;
    python?: string;
    php?: string;
    code?: string;
    language?: string;
  };
  code?: string;
  language?: string;
  simulatedOutput?: string;
  lang?: 'en' | 'km';
  title?: string;
  autoRunOnLoad?: boolean;
}

export const BackendClassCodeSandbox: React.FC<BackendClassCodeSandboxProps> = ({
  starterCode,
  code: directCode,
  language: directLanguage,
  simulatedOutput,
  lang = 'en',
  title,
  autoRunOnLoad = true,
}) => {
  // Determine initial language
  const detectLanguage = (): string => {
    if (directLanguage) return directLanguage;
    if (starterCode?.language) return starterCode.language;
    if (starterCode?.js) return 'javascript';
    if (starterCode?.sql) return 'sql';
    if (starterCode?.python) return 'python';
    if (starterCode?.php) return 'php';
    if (starterCode?.bash) return 'bash';
    if (starterCode?.json) return 'json';
    return 'javascript';
  };

  // Determine initial code
  const getInitialCode = (): string => {
    if (directCode) return directCode;
    if (starterCode?.code) return starterCode.code;
    if (starterCode?.js) return starterCode.js;
    if (starterCode?.sql) return starterCode.sql;
    if (starterCode?.python) return starterCode.python;
    if (starterCode?.php) return starterCode.php;
    if (starterCode?.bash) return starterCode.bash;
    if (starterCode?.json) return starterCode.json;
    return '// Write your backend code here...';
  };

  const currentLangName = detectLanguage();
  const [code, setCode] = useState<string>(getInitialCode());
  const [output, setOutput] = useState<string>('');
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);
  const [copiedOutput, setCopiedOutput] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [execTime, setExecTime] = useState<number | null>(null);

  // Sync state when props change
  useEffect(() => {
    const newCode = getInitialCode();
    setCode(newCode);
    if (autoRunOnLoad) {
      runCodeEngine(newCode, detectLanguage(), simulatedOutput);
    } else {
      setOutput(simulatedOutput || (lang === 'km' ? 'ចុច "រត់ Code" ដើម្បីមើលលទ្ធផល...' : 'Click "Run Code" to execute script...'));
    }
  }, [starterCode, directCode, directLanguage, simulatedOutput]);

  const runMongoDbEngine = (sourceCode: string, logs: string[], defaultSimOutput?: string) => {
    logs.push('🍃 [MONGODB 6.0 COMMUNITY SERVER]');

    if (sourceCode.includes('MongoClient') || sourceCode.includes('mongoose')) {
      logs.push('🚀 [NODE.JS MONGO DRIVER / MONGOOSE RUNTIME]');
      logs.push('✅ [CONNECTION] Connected successfully to mongodb://localhost:27017/my_app');
      if (sourceCode.includes('mongoose')) {
        logs.push('📋 [MONGOOSE] Schema model initialized and validated.');
        logs.push('Query OK: User.find() executed in 1.4ms.');
      } else {
        logs.push('📦 [QUERY RESULT] 3 documents returned from db.collection("products").find()');
        logs.push(JSON.stringify([
          { _id: '64f200000000000000000001', name: 'Wireless Ergonomic Mouse', price: 29.99, category: 'Electronics' },
          { _id: '64f200000000000000000002', name: 'Mechanical RGB Keyboard', price: 89.99, category: 'Electronics' },
          { _id: '64f200000000000000000004', name: '4K UltraHD Monitor 27-inch', price: 320.00, category: 'Electronics' }
        ], null, 2));
      }
      return logs.join('\n');
    }

    let cleanCode = sourceCode.trim();
    cleanCode = cleanCode.replace(/show\s+collections;?/gi, 'db.getCollectionNames();');
    cleanCode = cleanCode.replace(/show\s+dbs;?/gi, 'db.showDbs();');
    cleanCode = cleanCode.replace(/use\s+([a-zA-Z0-9_]+);?/gi, "db.useDatabase('$1');");

    if (cleanCode.startsWith('{') && !cleanCode.includes('var ') && !cleanCode.includes('const ') && !cleanCode.includes('let ')) {
      cleanCode = `console.log(${cleanCode.replace(/;$/, '')});`;
    }

    const mockCollections: Record<string, any[]> = {
      users: [
        { _id: 'ObjectId("64f100000000000000000001")', name: 'Sophea Chan', email: 'sophea@example.com', role: 'admin', age: 28, joinedAt: '2024-01-15T00:00:00.000Z' },
        { _id: 'ObjectId("64f100000000000000000002")', name: 'Dara Sok', email: 'dara@example.com', role: 'developer', age: 24, joinedAt: '2024-02-01T00:00:00.000Z' },
        { _id: 'ObjectId("64f100000000000000000003")', name: 'Rithy Kim', email: 'rithy@example.com', role: 'user', age: 31, joinedAt: '2024-02-10T00:00:00.000Z' },
      ],
      products: [
        { _id: 'ObjectId("64f200000000000000000001")', name: 'Wireless Ergonomic Mouse', price: 29.99, category: 'Electronics', stockCount: 150, rating: 4.8 },
        { _id: 'ObjectId("64f200000000000000000002")', name: 'Mechanical RGB Keyboard', price: 89.99, category: 'Electronics', stockCount: 45, rating: 4.9 },
        { _id: 'ObjectId("64f200000000000000000003")', name: 'USB-C Multiport Adapter Hub', price: 34.50, category: 'Accessories', stockCount: 200, rating: 4.5 },
        { _id: 'ObjectId("64f200000000000000000004")', name: '4K UltraHD Monitor 27-inch', price: 320.00, category: 'Electronics', stockCount: 12, rating: 4.7 },
        { _id: 'ObjectId("64f200000000000000000005")', name: 'Laptop', price: 899.00, category: 'Electronics', stockCount: 8, rating: 4.9 }
      ],
      posts: [
        { _id: 'ObjectId("64f300000000000000000001")', authorId: 'ObjectId("64f100000000000000000001")', title: 'Why we chose MongoDB', author: 'Sophea', content: 'Just deployed our new MongoDB cluster!', likes: ['ObjectId("64f100000000000000000002")'], isPublished: true, views: 150, createdAt: '2024-03-01T10:00:00.000Z' }
      ],
      orders: [
        { _id: 'ObjectId("64f400000000000000000001")', userId: 'ObjectId("64f100000000000000000001")', amount: 119.98, status: 'DELIVERED', category: 'Electronics', createdAt: '2024-03-15T00:00:00.000Z' },
        { _id: 'ObjectId("64f400000000000000000002")', userId: 'ObjectId("64f100000000000000000002")', amount: 34.50, status: 'DELIVERED', category: 'Accessories', createdAt: '2024-03-16T00:00:00.000Z' },
        { _id: 'ObjectId("64f400000000000000000003")', userId: 'ObjectId("64f100000000000000000003")', amount: 320.00, status: 'PENDING', category: 'Electronics', createdAt: '2024-03-17T00:00:00.000Z' }
      ],
      sales: [
        { _id: 'ObjectId("64f600000000000000000001")', category: 'Electronics', price: 899, quantity: 2, status: 'COMPLETED' },
        { _id: 'ObjectId("64f600000000000000000002")', category: 'Accessories', price: 34.5, quantity: 5, status: 'COMPLETED' }
      ],
      comments: [
        { _id: 'ObjectId("64f500000000000000000001")', postId: 'ObjectId("64f300000000000000000001")', userId: 'ObjectId("64f100000000000000000002")', text: 'Awesome work!', createdAt: '2024-03-02T10:00:00.000Z' }
      ]
    };

    const makeObjectId = (id?: string) => {
      if (id) return `ObjectId("${id}")`;
      return `ObjectId("64f" + Math.random().toString(16).slice(2, 11).padEnd(21, '0'))`;
    };

    let activeDbName = 'test';

    const createCollection = (colName: string) => {
      if (!mockCollections[colName]) {
        mockCollections[colName] = [];
      }
      const store = mockCollections[colName];

      const colObj = {
        insertOne: (doc: any) => {
          const id = doc?._id || makeObjectId();
          const newDoc = { _id: id, ...doc };
          store.push(newDoc);
          const res = { acknowledged: true, insertedId: id };
          logs.push(JSON.stringify(res, null, 2));
          return res;
        },
        insertMany: (docs: any[]) => {
          const insertedIds: Record<number, any> = {};
          const items = Array.isArray(docs) ? docs : [docs];
          items.forEach((doc, idx) => {
            const id = doc?._id || makeObjectId();
            const newDoc = { _id: id, ...doc };
            store.push(newDoc);
            insertedIds[idx] = id;
          });
          const res = { acknowledged: true, insertedCount: items.length, insertedIds };
          logs.push(JSON.stringify(res, null, 2));
          return res;
        },
        find: (filter?: any, projection?: any) => {
          let results = [...store];
          if (filter && typeof filter === 'object' && Object.keys(filter).length > 0) {
            results = results.filter(item => {
              return Object.entries(filter).every(([key, val]) => {
                if (key === '$or' && Array.isArray(val)) {
                  return val.some((subCond: any) => {
                    return Object.entries(subCond).every(([sk, sv]) => String(item[sk]) === String(sv));
                  });
                }
                if (val && typeof val === 'object') {
                  if ('$gt' in val) return (item[key] ?? 0) > val.$gt;
                  if ('$gte' in val) return (item[key] ?? 0) >= val.$gte;
                  if ('$lt' in val) return (item[key] ?? 0) < val.$lt;
                  if ('$lte' in val) return (item[key] ?? 0) <= val.$lte;
                  if ('$ne' in val) return item[key] !== val.$ne;
                  if ('$in' in val && Array.isArray(val.$in)) {
                    const targetArr = Array.isArray(item[key]) ? item[key] : [item[key]];
                    return val.$in.some((v: any) => targetArr.map(String).includes(String(v)));
                  }
                }
                if (Array.isArray(item[key])) {
                  return item[key].map(String).includes(String(val));
                }
                return String(item[key]) === String(val);
              });
            });
          }

          if (projection && typeof projection === 'object') {
            const keys = Object.keys(projection);
            const isInclusion = keys.some(k => projection[k] === 1);
            results = results.map(doc => {
              const newDoc: Record<string, any> = {};
              if (isInclusion) {
                if (projection._id !== 0 && doc._id !== undefined) newDoc._id = doc._id;
                keys.forEach(k => {
                  if (projection[k] === 1 && doc[k] !== undefined) newDoc[k] = doc[k];
                });
              } else {
                Object.keys(doc).forEach(k => {
                  if (projection[k] !== 0) newDoc[k] = doc[k];
                });
              }
              return newDoc;
            });
          }

          const cursor = {
            results,
            sort: (sortObj: any) => {
              if (sortObj) {
                const [key, dir] = Object.entries(sortObj)[0] || [];
                if (key) {
                  const multiplier = Number(dir) < 0 ? -1 : 1;
                  cursor.results.sort((a, b) => (a[key] > b[key] ? multiplier : -multiplier));
                }
              }
              return cursor;
            },
            limit: (n: number) => {
              cursor.results = cursor.results.slice(0, n);
              return cursor;
            },
            skip: (n: number) => {
              cursor.results = cursor.results.slice(n);
              return cursor;
            },
            explain: (mode?: string) => {
              const exp = {
                queryPlanner: {
                  plannerVersion: 1,
                  namespace: `${activeDbName}.${colName}`,
                  indexFilterSet: false,
                  winningPlan: { stage: "COLLSCAN" }
                },
                executionStats: {
                  executionSuccess: true,
                  nReturned: cursor.results.length,
                  executionTimeMillis: 2,
                  totalKeysExamined: 0,
                  totalDocsExamined: store.length
                }
              };
              logs.push(JSON.stringify(exp, null, 2));
              return exp;
            },
            toArray: () => cursor.results,
            count: () => cursor.results.length,
            countDocuments: () => cursor.results.length,
          };

          logs.push(JSON.stringify(cursor.results, null, 2));
          return cursor;
        },
        findOne: (filter?: any) => {
          let results = [...store];
          if (filter && typeof filter === 'object') {
            results = results.filter(item => {
              return Object.entries(filter).every(([key, val]) => String(item[key]) === String(val));
            });
          }
          const found = results[0] || null;
          logs.push(JSON.stringify(found, null, 2));
          return found;
        },
        updateOne: (filter: any, update: any) => {
          const res = { acknowledged: true, matchedCount: 1, modifiedCount: 1, upsertedId: null };
          logs.push(JSON.stringify(res, null, 2));
          return res;
        },
        updateMany: (filter: any, update: any) => {
          const res = { acknowledged: true, matchedCount: store.length || 1, modifiedCount: store.length || 1, upsertedId: null };
          logs.push(JSON.stringify(res, null, 2));
          return res;
        },
        deleteOne: (filter: any) => {
          const res = { acknowledged: true, deletedCount: 1 };
          logs.push(JSON.stringify(res, null, 2));
          return res;
        },
        deleteMany: (filter: any) => {
          const res = { acknowledged: true, deletedCount: store.length || 1 };
          logs.push(JSON.stringify(res, null, 2));
          return res;
        },
        aggregate: (pipeline: any[]) => {
          let results = [...store];
          if (Array.isArray(pipeline)) {
            pipeline.forEach(stage => {
              if (stage.$match) {
                const match = stage.$match;
                results = results.filter(item => {
                  return Object.entries(match).every(([k, v]) => {
                    if (v && typeof v === 'object' && '$ne' in v) return item[k] !== v.$ne;
                    if (v && typeof v === 'object' && '$gt' in v) return (item[k] ?? 0) > v.$gt;
                    return String(item[k]) === String(v);
                  });
                });
              }
              if (stage.$group) {
                const grp = stage.$group;
                const groupField = typeof grp._id === 'string' && grp._id.startsWith('$') ? grp._id.slice(1) : grp._id;
                const grouped: Record<string, any> = {};

                results.forEach(item => {
                  const gVal = item[groupField] ?? 'null';
                  if (!grouped[gVal]) {
                    grouped[gVal] = { _id: gVal };
                    Object.keys(grp).forEach(k => {
                      if (k !== '_id') {
                        if (grp[k]?.$sum) grouped[gVal][k] = 0;
                        if (grp[k]?.$avg) grouped[gVal][k] = { sum: 0, count: 0 };
                        if (grp[k]?.$max) grouped[gVal][k] = -Infinity;
                      }
                    });
                  }

                  Object.keys(grp).forEach(k => {
                    if (k !== '_id') {
                      if (grp[k]?.$sum === 1) {
                        grouped[gVal][k] += 1;
                      } else if (typeof grp[k]?.$sum === 'string' && grp[k].$sum.startsWith('$')) {
                        const field = grp[k].$sum.slice(1);
                        grouped[gVal][k] += (Number(item[field]) || 0);
                      }
                      if (typeof grp[k]?.$avg === 'string' && grp[k].$avg.startsWith('$')) {
                        const field = grp[k].$avg.slice(1);
                        grouped[gVal][k].sum += (Number(item[field]) || 0);
                        grouped[gVal][k].count += 1;
                      }
                    }
                  });
                });

                results = Object.values(grouped).map(g => {
                  Object.keys(g).forEach(k => {
                    if (g[k] && typeof g[k] === 'object' && 'count' in g[k]) {
                      g[k] = g[k].count > 0 ? Number((g[k].sum / g[k].count).toFixed(2)) : 0;
                    }
                  });
                  return g;
                });
              }
              if (stage.$sort) {
                const [sKey, sDir] = Object.entries(stage.$sort)[0] || [];
                if (sKey) {
                  const mult = Number(sDir) < 0 ? -1 : 1;
                  results.sort((a, b) => (a[sKey] > b[sKey] ? mult : -mult));
                }
              }
              if (stage.$limit) {
                results = results.slice(0, stage.$limit);
              }
            });
          }
          logs.push(JSON.stringify(results, null, 2));
          return {
            results,
            toArray: () => results
          };
        },
        createIndex: (keys: any, options?: any) => {
          const idxName = Object.keys(keys || {}).map(k => `${k}_${keys[k]}`).join('_') || 'index_1';
          logs.push(`"${idxName}"`);
          return idxName;
        },
        getIndexes: () => {
          const idxs = [
            { v: 2, key: { _id: 1 }, name: "_id_" },
            { v: 2, key: { category: 1, price: -1 }, name: "category_1_price_-1" }
          ];
          logs.push(JSON.stringify(idxs, null, 2));
          return idxs;
        },
        countDocuments: (filter?: any) => {
          const c = store.length;
          logs.push(String(c));
          return c;
        },
        drop: () => {
          mockCollections[colName] = [];
          logs.push('true');
          return true;
        }
      };

      return colObj;
    };

    const dbTarget = {
      runCommand: (cmd: any) => {
        const res = cmd?.ping ? { ok: 1 } : { ok: 1, ...cmd };
        logs.push(JSON.stringify(res, null, 2));
        return res;
      },
      stats: () => {
        const res = {
          db: activeDbName,
          collections: Object.keys(mockCollections).length,
          views: 0,
          objects: Object.values(mockCollections).reduce((acc, c) => acc + c.length, 0),
          avgObjSize: 256,
          dataSize: 31744,
          storageSize: 65536,
          indexes: 8,
          indexSize: 32768,
          ok: 1
        };
        logs.push(JSON.stringify(res, null, 2));
        return res;
      },
      getCollectionNames: () => {
        const names = Object.keys(mockCollections);
        logs.push(JSON.stringify(names, null, 2));
        return names;
      },
      getIndexes: () => {
        const idxs = [
          { v: 2, key: { _id: 1 }, name: "_id_" }
        ];
        logs.push(JSON.stringify(idxs, null, 2));
        return idxs;
      },
      showDbs: () => {
        const dbs = [
          "admin   0.000GB",
          "config  0.000GB",
          "local   0.000GB",
          "social  0.015GB"
        ];
        logs.push(dbs.join('\n'));
        return dbs;
      },
      useDatabase: (name: string) => {
        activeDbName = name;
        logs.push(`switched to db ${name}`);
        return name;
      },
      getMongo: () => {
        return {
          startSession: () => ({
            startTransaction: () => logs.push('Transaction started successfully.'),
            commitTransaction: () => logs.push('Transaction committed successfully.'),
            abortTransaction: () => logs.push('Transaction aborted.')
          })
        };
      }
    };

    const dbProxy: any = new Proxy(dbTarget, {
      get: (target, prop: string) => {
        if (prop in target) {
          return (target as any)[prop];
        }
        return createCollection(prop);
      }
    });

    const customConsole = {
      log: (...args: any[]) => logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ')),
      error: (...args: any[]) => logs.push('❌ [ERROR] ' + args.join(' ')),
      warn: (...args: any[]) => logs.push('⚠️ [WARN] ' + args.join(' ')),
    };

    try {
      const runFn = new Function('console', 'db', 'ObjectId', 'ISODate', cleanCode);
      const returnedValue = runFn(customConsole, dbProxy, makeObjectId, (d?: string) => d ? new Date(d).toISOString() : new Date().toISOString());

      if (returnedValue !== undefined && logs.length === 1) {
        logs.push(typeof returnedValue === 'object' ? JSON.stringify(returnedValue, null, 2) : String(returnedValue));
      }
    } catch (err: any) {
      if (defaultSimOutput) {
        logs.push(defaultSimOutput);
      } else {
        logs.push(`❌ [MONGOSH ERROR] ${err.message}`);
      }
    }

    return logs.join('\n');
  };

  const runCodeEngine = (sourceCode: string, langName: string, defaultSimOutput?: string) => {
    setIsRunning(true);
    setHasError(false);
    const startTime = performance.now();

    setTimeout(() => {
      const langLower = langName.toLowerCase();
      let resultText = '';
      let isErr = false;

      // Check if code is MongoDB query / shell command / BSON document or MongoDB course lesson
      const isMongo =
        (langLower.includes('mongo') ||
          langLower.includes('nosql') ||
          sourceCode.includes('db.') ||
          sourceCode.includes('ObjectId(') ||
          sourceCode.includes('show collections') ||
          sourceCode.includes('show dbs') ||
          sourceCode.includes('MongoClient') ||
          sourceCode.includes('mongoose') ||
          (sourceCode.trim().startsWith('{') && sourceCode.includes('ObjectId'))) &&
        !langLower.includes('sql') &&
        !langLower.includes('php') &&
        !langLower.includes('py');

      if (isMongo) {
        resultText = runMongoDbEngine(sourceCode, [], defaultSimOutput);
      }
      // 1. JavaScript / Node.js / Express / TypeScript Engine
      else if (
        langLower.includes('js') ||
        langLower.includes('javascript') ||
        langLower.includes('node') ||
        langLower.includes('express') ||
        langLower.includes('typescript') ||
        langLower.includes('ts')
      ) {
        const logs: string[] = [];

        // Check if code looks like Express app
        if (sourceCode.includes('express') || sourceCode.includes('app.get') || sourceCode.includes('app.post') || sourceCode.includes('app.listen')) {
          logs.push('⚡ [NODE.JS V20.10.0 RUNTIME]');
          logs.push('🚀 [EXPRESS] Server started on http://localhost:3000');
          logs.push('✅ [DATABASE] Connection pool established (PostgreSQL/MongoDB)');
          
          const routes = [...sourceCode.matchAll(/app\.(get|post|put|delete|patch)\s*\(\s*['"]([^'"]+)['"]/gi)];
          if (routes.length > 0) {
            logs.push('\n📡 [REGISTERED ENDPOINTS]');
            routes.forEach(m => {
              logs.push(`   • ${m[1].toUpperCase().padEnd(6)} ${m[2]}`);
            });

            // Simulate HTTP request to first route
            const route = routes[0];
            logs.push(`\n🧪 [SIMULATING HTTP REQUEST]`);
            logs.push(`> GET ${route[2]} HTTP/1.1`);
            logs.push(`> Host: localhost:3000`);
            logs.push(`> User-Agent: PostmanRuntime/7.32.3`);
            logs.push(`< HTTP/1.1 200 OK`);
            logs.push(`< Content-Type: application/json; charset=utf-8`);
          }

          if (defaultSimOutput) {
            logs.push('\n📦 [HTTP RESPONSE BODY]');
            logs.push(defaultSimOutput);
          }

          // Try running any extra console.log inside
          try {
            const customConsole = {
              log: (...args: any[]) => logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ')),
              error: (...args: any[]) => { isErr = true; logs.push('❌ [ERROR] ' + args.join(' ')); },
              warn: (...args: any[]) => logs.push('⚠️ [WARN] ' + args.join(' ')),
            };
            const runFn = new Function('console', sourceCode);
            runFn(customConsole);
          } catch (e) {
            // ignore top-level express require mock errors
          }

          resultText = logs.join('\n');
        } else {
          // Standard JavaScript runtime
          try {
            const customConsole = {
              log: (...args: any[]) => logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ')),
              error: (...args: any[]) => { isErr = true; logs.push('❌ [ERROR] ' + args.join(' ')); },
              warn: (...args: any[]) => logs.push('⚠️ [WARN] ' + args.join(' ')),
              info: (...args: any[]) => logs.push('ℹ️ [INFO] ' + args.join(' ')),
              table: (data: any) => logs.push(JSON.stringify(data, null, 2)),
            };

            const runFn = new Function('console', sourceCode);
            const returnedValue = runFn(customConsole);

            if (logs.length === 0 && returnedValue !== undefined) {
              logs.push(typeof returnedValue === 'object' ? JSON.stringify(returnedValue, null, 2) : String(returnedValue));
            }

            resultText = logs.join('\n') || defaultSimOutput || '✓ Code executed successfully with no console output.';
          } catch (err: any) {
            isErr = true;
            resultText = `❌ Runtime Error: ${err.message}\n${err.stack ? err.stack.split('\n').slice(0, 3).join('\n') : ''}`;
          }
        }
      }
      // 2. PHP / Laravel Engine
      else if (langLower.includes('php') || langLower.includes('laravel')) {
        const outputs: string[] = [];
        
        // Extract variables
        const vars: Record<string, string> = {};
        const varDecls = [...sourceCode.matchAll(/\$([a-zA-Z0-9_]+)\s*=\s*(["'])(.*?)\2;/g)];
        varDecls.forEach(m => { vars[m[1]] = m[3]; });

        // Parse echo statements
        const echoMatches = [...sourceCode.matchAll(/echo\s+([^;\n]+);/g)];
        echoMatches.forEach(m => {
          let raw = m[1].trim();
          if ((raw.startsWith('"') && raw.endsWith('"')) || (raw.startsWith("'") && raw.endsWith("'"))) {
            raw = raw.slice(1, -1);
          }
          Object.keys(vars).forEach(k => {
            raw = raw.replace(new RegExp(`\\$${k}`, 'g'), vars[k]);
            raw = raw.replace(new RegExp(`\\{\\$${k}\\}`, 'g'), vars[k]);
          });
          outputs.push(raw.replace(/\\n/g, '\n').replace(/<br\s*\/?>/gi, '\n'));
        });

        // Parse var_dump
        const varDumps = [...sourceCode.matchAll(/var_dump\((.*?)\);/g)];
        varDumps.forEach(m => {
          const vName = m[1].trim().replace('$', '');
          if (vars[vName]) {
            outputs.push(`string(${vars[vName].length}) "${vars[vName]}"`);
          } else {
            outputs.push(`var_dump(${m[1]})`);
          }
        });

        if (sourceCode.includes('artisan') || sourceCode.includes('Illuminate')) {
          outputs.unshift('🐘 [LARAVEL 10.X / PHP 8.2 ENGINE]');
        }

        if (outputs.length > 0) {
          resultText = outputs.join('\n');
        } else if (defaultSimOutput) {
          resultText = defaultSimOutput;
        } else {
          resultText = '[PHP 8.2 CLI] Script executed successfully.\nExit Code: 0 (0 errors)';
        }
      }
      // 3. Python / Django Engine
      else if (langLower.includes('python') || langLower.includes('py') || langLower.includes('django')) {
        const outputs: string[] = [];
        
        const pyVars: Record<string, string> = {};
        const varMatches = [...sourceCode.matchAll(/([a-zA-Z0-9_]+)\s*=\s*(["'])(.*?)\2/g)];
        varMatches.forEach(m => { pyVars[m[1]] = m[3]; });

        const printMatches = [...sourceCode.matchAll(/print\((.*?)\)/g)];
        printMatches.forEach(m => {
          let content = m[1].trim();
          if (content.startsWith('f"') || content.startsWith("f'")) {
            content = content.slice(2, -1);
            Object.keys(pyVars).forEach(v => {
              content = content.replace(new RegExp(`\\{${v}\\}`, 'g'), pyVars[v]);
            });
            outputs.push(content);
          } else if ((content.startsWith('"') && content.endsWith('"')) || (content.startsWith("'") && content.endsWith("'"))) {
            outputs.push(content.slice(1, -1));
          } else if (pyVars[content]) {
            outputs.push(pyVars[content]);
          } else {
            outputs.push(content);
          }
        });

        if (sourceCode.includes('django') || sourceCode.includes('models.Model')) {
          outputs.unshift('🐍 [PYTHON 3.11 / DJANGO 4.2 RUNTIME]');
        }

        if (outputs.length > 0) {
          resultText = outputs.join('\n');
        } else if (defaultSimOutput) {
          resultText = defaultSimOutput;
        } else {
          resultText = '🐍 [Python 3.11.4] Program completed successfully.\nProcess finished with exit code 0';
        }
      }
      // 4. SQL Engine
      else if (langLower.includes('sql') || langLower.includes('database')) {
        if (defaultSimOutput) {
          resultText = defaultSimOutput;
        } else {
          const upper = sourceCode.toUpperCase();
          if (upper.includes('SELECT')) {
            resultText = [
              '📊 [POSTGRESQL 15.3 ENGINE] Executing Query...',
              '+----+--------------------+-----------------------+------------+--------+',
              '| id | name               | email                 | role       | status |',
              '+----+--------------------+-----------------------+------------+--------+',
              '|  1 | Sokha Dev          | sokha@backend.kh      | admin      | active |',
              '|  2 | Khemara Vong       | khemara@backend.kh    | developer  | active |',
              '|  3 | Bory Chan          | bory@backend.kh       | user       | active |',
              '+----+--------------------+-----------------------+------------+--------+',
              'Query OK: 3 rows returned in 1.2ms'
            ].join('\n');
          } else if (upper.includes('INSERT')) {
            resultText = 'INSERT 0 1 (1 row inserted into database table successfully in 0.8ms)';
          } else if (upper.includes('UPDATE')) {
            resultText = 'UPDATE 1 (1 record modified successfully in 1.1ms)';
          } else if (upper.includes('DELETE')) {
            resultText = 'DELETE 1 (1 record deleted from database in 0.9ms)';
          } else if (upper.includes('CREATE TABLE')) {
            resultText = 'CREATE TABLE (Table schema created with primary and foreign keys in 2.4ms)';
          } else {
            resultText = 'SQL command executed successfully.';
          }
        }
      }
      // 5. Java / Spring Boot Engine
      else if (langLower.includes('java') || langLower.includes('spring')) {
        const sysOutMatches = [...sourceCode.matchAll(/System\.out\.println\((.*?)\)/g)];
        const outputs: string[] = ['☕ [OPENJDK 17.0.8 / SPRING BOOT 3.1]'];
        
        sysOutMatches.forEach(m => {
          let str = m[1].trim();
          if ((str.startsWith('"') && str.endsWith('"')) || (str.startsWith("'") && str.endsWith("'"))) {
            str = str.slice(1, -1);
          }
          outputs.push(str);
        });

        if (outputs.length > 1) {
          resultText = outputs.join('\n');
        } else if (defaultSimOutput) {
          resultText = defaultSimOutput;
        } else {
          resultText = '☕ [Java JVM] Build Success.\nTomcat started on port 8080 (http)';
        }
      }
      // 6. MongoDB Engine
      else if (langLower.includes('mongo') || langLower.includes('nosql')) {
        if (defaultSimOutput) {
          resultText = defaultSimOutput;
        } else {
          resultText = [
            '🍃 [MONGODB 6.0 COMMUNITY SERVER]',
            '{',
            '  "acknowledged": true,',
            '  "matchedCount": 1,',
            '  "modifiedCount": 1,',
            '  "upsertedId": null',
            '}'
          ].join('\n');
        }
      }
      // 7. Kotlin / Android Engine
      else if (langLower.includes('kotlin') || langLower.includes('kt') || langLower.includes('compose')) {
        const printlnMatches = [...sourceCode.matchAll(/println\((.*?)\)/g)];
        const outputs: string[] = ['🎯 [KOTLIN 1.9 / ART RUNTIME]'];

        printlnMatches.forEach(m => {
          let str = m[1].trim();
          if ((str.startsWith('"') && str.endsWith('"')) || (str.startsWith("'") && str.endsWith("'"))) {
            str = str.slice(1, -1);
          }
          outputs.push(str);
        });

        if (outputs.length > 1) {
          resultText = outputs.join('\n');
        } else if (defaultSimOutput) {
          resultText = defaultSimOutput;
        } else {
          resultText = '🎯 [Kotlin 1.9.20] Build Successful.\nMain activity mounted successfully.';
        }
      }
      // 8. Swift / iOS Engine
      else if (langLower.includes('swift') || langLower.includes('ios')) {
        const printMatches = [...sourceCode.matchAll(/print\((.*?)\)/g)];
        const outputs: string[] = ['🍎 [SWIFT 5.9 / LLVM ENGINE]'];

        printMatches.forEach(m => {
          let str = m[1].trim();
          if ((str.startsWith('"') && str.endsWith('"')) || (str.startsWith("'") && str.endsWith("'"))) {
            str = str.slice(1, -1);
          }
          outputs.push(str);
        });

        if (outputs.length > 1) {
          resultText = outputs.join('\n');
        } else if (defaultSimOutput) {
          resultText = defaultSimOutput;
        } else {
          resultText = '🍎 [Swift 5.9] Xcode Build Succeeded.\nSimulator target: iPhone 15 Pro Max (iOS 17.0)';
        }
      }
      // 9. Dart / Flutter Engine
      else if (langLower.includes('dart') || langLower.includes('flutter')) {
        const printMatches = [...sourceCode.matchAll(/print\((.*?)\)/g)];
        const outputs: string[] = ['💙 [DART 3.2 / FLUTTER ENGINE]'];

        printMatches.forEach(m => {
          let str = m[1].trim();
          if ((str.startsWith('"') && str.endsWith('"')) || (str.startsWith("'") && str.endsWith("'"))) {
            str = str.slice(1, -1);
          }
          outputs.push(str);
        });

        if (outputs.length > 1) {
          resultText = outputs.join('\n');
        } else if (defaultSimOutput) {
          resultText = defaultSimOutput;
        } else {
          resultText = '💙 [Flutter 3.16] Hot Reload Complete (1.1s).\nApplication running smoothly.';
        }
      }
      // 10. General Fallback
      else {
        resultText = defaultSimOutput || `[${langName.toUpperCase()} RUNTIME ENVIRONMENT]\nProgram executed successfully.\nExit Code: 0`;
      }

      const endTime = performance.now();
      setExecTime(Math.round(endTime - startTime + 8));
      setOutput(resultText);
      setHasError(isErr);
      setIsRunning(false);
    }, 250);
  };

  const handleRun = () => {
    runCodeEngine(code, currentLangName, simulatedOutput);
  };

  const handleReset = () => {
    const initial = getInitialCode();
    setCode(initial);
    runCodeEngine(initial, currentLangName, simulatedOutput);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleCopyOutput = () => {
    navigator.clipboard.writeText(output);
    setCopiedOutput(true);
    setTimeout(() => setCopiedOutput(false), 2000);
  };

  const handleClearOutput = () => {
    setOutput('');
  };

  // Determine language badge label
  const getLanguageBadge = () => {
    const l = currentLangName.toLowerCase();
    if (l.includes('php')) return 'PHP 8.2';
    if (l.includes('python') || l.includes('py')) return 'Python 3.11';
    if (l.includes('sql')) return 'PostgreSQL SQL';
    if (l.includes('express')) return 'Express.js / Node';
    if (l.includes('js') || l.includes('javascript')) return 'JavaScript (Node.js)';
    if (l.includes('ts') || l.includes('typescript')) return 'TypeScript';
    if (l.includes('java')) return 'Java / Spring';
    if (l.includes('kotlin') || l.includes('kt')) return 'Kotlin 1.9';
    if (l.includes('swift')) return 'Swift 5.9';
    if (l.includes('dart') || l.includes('flutter')) return 'Dart / Flutter';
    if (l.includes('mongo')) return 'MongoDB Query';
    if (l.includes('bash')) return 'Bash CLI';
    return currentLangName.toUpperCase();
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950 text-slate-100 shadow-2xl overflow-hidden my-4 transition-all">
      {/* Editor Header Bar */}
      <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800/90 gap-2">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block shadow-sm"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block shadow-sm"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block shadow-sm"></span>
          </div>
          
          <div className="h-4 w-px bg-slate-800 mx-1"></div>

          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-emerald-400" />
            <span className="font-mono text-xs font-bold text-slate-200">
              {title || getLanguageBadge()}
            </span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono text-[10px] font-black tracking-wider uppercase">
              {lang === 'km' ? 'កូដរត់បាន' : 'LIVE RUNNER'}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyCode}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono font-medium transition cursor-pointer"
            title={lang === 'km' ? 'ចម្លងកូដ' : 'Copy Code'}
          >
            {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedCode ? (lang === 'km' ? 'បានចម្លង' : 'Copied') : lang === 'km' ? 'ចម្លង' : 'Copy'}</span>
          </button>

          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono font-medium transition cursor-pointer"
            title={lang === 'km' ? 'កំណត់ឡើងវិញ' : 'Reset Code'}
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{lang === 'km' ? 'កំណត់ឡើងវិញ' : 'Reset'}</span>
          </button>

          <button
            onClick={handleRun}
            disabled={isRunning}
            className="flex items-center gap-1.5 px-3.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white text-xs font-mono font-bold shadow-md transition disabled:opacity-50 cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>{isRunning ? (lang === 'km' ? 'កំពុងរត់...' : 'Running...') : lang === 'km' ? 'រត់ Code' : 'Run Code'}</span>
          </button>
        </div>
      </div>

      {/* Code Textarea Area */}
      <div className="relative font-mono text-sm group">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          spellCheck={false}
          className="w-full h-56 sm:h-64 p-4 bg-slate-950 text-emerald-300 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 resize-y font-mono leading-relaxed text-xs sm:text-sm"
          placeholder={lang === 'km' ? 'សរសេរ ឬកែប្រែកូដនៅទីនេះ...' : 'Edit or write code here...'}
        />
        <div className="absolute top-2 right-3 pointer-events-none text-[10px] font-mono text-slate-600 group-hover:text-slate-500 transition">
          {lang === 'km' ? 'អាចកែប្រែកូដបាន' : 'Editable Code Sandbox'}
        </div>
      </div>

      {/* Code Output / Terminal Runner Panel */}
      <div className="border-t border-slate-800/90 bg-slate-900/60 p-4 font-mono text-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2 pb-2 border-b border-slate-800/60">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span className="font-bold text-slate-200 uppercase tracking-wider text-[11px]">
              {lang === 'km' ? 'លទ្ធផលរត់កូដ (Code Output)' : 'Code Output / Terminal Runner'}
            </span>

            {isRunning ? (
              <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 text-[10px] font-bold border border-amber-500/20">
                <Cpu className="w-3 h-3 animate-spin" />
                <span>Executing...</span>
              </span>
            ) : hasError ? (
              <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-400 text-[10px] font-bold border border-rose-500/20">
                <AlertTriangle className="w-3 h-3" />
                <span>Runtime Error</span>
              </span>
            ) : output ? (
              <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
                <CheckCircle2 className="w-3 h-3" />
                <span>Success {execTime ? `(${execTime}ms)` : ''}</span>
              </span>
            ) : null}
          </div>

          <div className="flex items-center gap-1.5 text-[11px]">
            {output && (
              <>
                <button
                  onClick={handleCopyOutput}
                  className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition flex items-center gap-1 cursor-pointer"
                  title="Copy output"
                >
                  {copiedOutput ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedOutput ? 'Copied' : 'Copy Output'}</span>
                </button>

                <button
                  onClick={handleClearOutput}
                  className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 transition flex items-center gap-1 cursor-pointer"
                  title="Clear console"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Clear</span>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Output Log Box */}
        <div className="relative">
          <pre className={`whitespace-pre-wrap font-mono text-xs max-h-52 overflow-y-auto leading-relaxed p-3.5 rounded-xl border bg-slate-950/90 shadow-inner ${
            hasError
              ? 'text-rose-300 border-rose-500/30 bg-rose-950/10'
              : 'text-emerald-300 border-slate-800/80'
          }`}>
            <code>
              {output || (lang === 'km' ? 'ចុច "រត់ Code" ដើម្បីមើលលទ្ធផល...' : 'Click "Run Code" above to view terminal output...')}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};
