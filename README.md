# 🪐 Vaiśeṣika Ontological Systems Console

A high-performance, schema-validated TypeScript REST API and developer terminal dashboard exposing the complete physical and metaphysical naturalism matrix of Sage Kaṇāda.

This engine maps all **10 canonical chapters (347 sūtras)** of the classical _Vaiśeṣika Sūtra_, bridging ancient atomic kinematics, gravity models, and fluid dynamics directly into modern object-oriented software architectures, AI knowledge graphs, and classical physics.

---

## ⚡ Architecture Overview

```text
vaisheshika-api/
├── public/                 # Frontend Asset Workspace
│   └── index.html          # Embedded dynamic ASCII terminal dashboard UI
├── scripts/
│   └── validate-engine.ts  # Automated database compiler verification gate
└── src/
    ├── data.ts             # Central system compiler & Type maps
    ├── server.ts           # Ultra-fast native HTTP REST stream microservice
    ├── chapters/           # Decoupled text arrays (ch1.ts to ch10.ts)
    └── meta/               # Conceptual alignments & comparative data matrices
```

---

## 🛠️ Local Setup & Operational Flow

Ensure you have pnpm and Node.js installed, then execute the installation command:

```Bash
pnpm install
```

### 1. Execute the Database Validation Suite

Before booting, run the automated compile audit gate to test for structural text compliance, duplicate database keys, or empty objects:

```Bash
pnpm run test-data
```

### 2. Boot the API Microservice Engine

Spin up your backend vector engine. This launches a watch runtime powered by tsx that reloads instantly on file changes:

```Bash
pnpm run dev
```

Your server is now active and streaming raw database layers live on: http://localhost:3000

### 3. Deploy the Console Front-End Interface

In a separate terminal panel, launch your lightweight client-side file server layout:

```Bash
pnpm run start
```

## Open your web browser and navigate to the output port (usually http://localhost:5000) to access the interactive claymorphic terminal dashboard.

## 📡 Public API Router Mappings

The engine exports open **CORS wildcards**, allowing external microservices or remote consumer websites to query your philosophical and kinematics databases without hitting origin blocks.

| Target Resource Endpoints | HTTP Method | Data Payload Yield                                                                            |
| :------------------------ | :---------- | :-------------------------------------------------------------------------------------------- |
| **`/api`**                | `GET`       | Core service health state, engine version metadata, and route directories.                    |
| **`/api/overview`**       | `GET`       | Deep ontological definitions and naturalism frameworks scope parameters.                      |
| **`/api/founder`**        | `GET`       | Sage Kaṇāda's complete profile, historical aliases, and origin legends.                       |
| **`/api/chapters`**       | `GET`       | Consolidated map list of all 10 modules featuring their specific nested verse tallies.        |
| **`/api/chapters/:id`**   | `GET`       | **Full Array Dump:** Returns targeted module array complete with all nested sūtras.           |
| **`/api/modern-matrix`**  | `GET`       | High-contrast schema translations mapping ancient physics taxonomy into modern OOP instances. |

---

## 🔌 Cross-Platform Integration Snippet

Other developers can consume your data streams instantly within any front-end ecosystem (React, Next.js, Vue, or plain vanilla JavaScript) using a standard asynchronous fetch sequence:

```JavaScript
// Replace with your production cloud domain url string when deployed
const ENGINE_API = "https://vaisheshikaapi.vercel.app/api";

async function fetchKinematicsData() {
try {
// Querying Module 5 (Kinetics, Dynamics, Gravity, and Fluids)
const response = await fetch(`${ENGINE_API}/chapters/5`);
if (!response.ok) throw new Error("API Connection Interrupt encountered.");

    const chapterData = await response.json();

    console.log(`📦 System Loaded: ${chapterData.title}`);
    console.log(chapterData.verses); // Array containing individual sanskrit sutras and translations

} catch (error) {
console.error("Failed to stream from Vaisheshika Engine:", error);
}
}

fetchKinematicsData();
```

---

## 🛡️ License

This ontological engine is open-source software. Feel free to fork, expand, or wire these physics mappings straight into your own computational indology frameworks!
