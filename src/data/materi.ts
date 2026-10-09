export const moduleData: Record<
  number,
  {
    title: string;
    description: string;
    icon: string;
    color: string;
    sections: {
      title: string;
      content: {
        heading?: string;
        items: string[];
      }[];
    }[];
  }
> = {
  1: {
    title: "Wawasan Dunia Kerja",
    description:
      "Profesi dan kewirausahaan PPLG, manajemen proyek, dan budaya mutu dalam pengembangan perangkat lunak dan gim.",
    icon: "💼",
    color: "from-blue-500 to-blue-700",
    sections: [
      {
        title: "Profesi dan Kewirausahaan PPLG",
        content: [
          {
            heading: "Jenis-Jenis Profesi dalam Bidang PPLG",
            items: [
              "Software Developer - Membangun aplikasi web, mobile, dan desktop sesuai kebutuhan klien",
              "Game Developer - Membuat game untuk berbagai platform (mobile, PC, console) dengan engine seperti Unity, Unreal Engine, atau Godot",
              "UI/UX Designer - Mendesain antarmuka pengguna yang menarik dan meningkatkan pengalaman pengguna (user experience)",
              "Database Administrator - Mengelola dan mengoptimalkan database untuk memastikan performa dan keamanan data",
              "DevOps Engineer - Mengelola infrastruktur, deployment, dan continuous integration/continuous deployment (CI/CD)",
              "Quality Assurance (QA) Engineer - Melakukan testing aplikasi untuk memastikan kualitas dan menemukan bug",
              "Project Manager - Mengelola tim, jadwal, dan resources dalam proyek pengembangan software",
              "Product Owner - Menentukan fitur dan prioritas produk berdasarkan kebutuhan user dan bisnis",
              "Technical Writer - Membuat dokumentasi teknis untuk pengguna dan developer",
              "Security Engineer - Mengamankan aplikasi dari serangan cyber dan vulnerability",
            ],
          },
          {
            heading: "Kewirausahaan di Bidang PPLG",
            items: [
              "Technopreneurship - Wirausaha berbasis teknologi dengan memanfaatkan skill programming",
              "Startup Development - Membangun startup software/SaaS (Software as a Service)",
              "Freelance Development - Menawarkan jasa pengembangan software secara independen",
              "Game Studio - Mendirikan studio pengembangan game indie atau AAA",
              "Mobile App Business - Membuat dan memonetisasi aplikasi mobile",
              "E-commerce Solution - Menyediakan solusi e-commerce untuk bisnis",
              "Custom Software Development - Membuat software custom untuk kebutuhan spesifik klien",
              "Prinsip dasar kewirausahaan: innovation, risk-taking, value creation, dan market research",
            ],
          },
        ],
      },
      {
        title: "Manajemen Proyek dan Budaya Mutu",
        content: [
          {
            heading: "Tahapan SDLC (Software Development Life Cycle)",
            items: [
              "Planning - Perencanaan kebutuhan, scope, dan resources proyek",
              "Analysis - Analisis kebutuhan sistem dan feasibility study",
              "Design - Perancangan arsitektur, database, dan UI/UX sistem",
              "Implementation - Pengkodean dan pembangunan sistem",
              "Testing - Pengujian unit, integration, system, dan user acceptance",
              "Deployment - Peluncuran sistem ke production environment",
              "Maintenance - Pemeliharaan, bug fixing, dan improvement berkelanjutan",
            ],
          },
          {
            heading: "Metodologi Pengembangan",
            items: [
              "Waterfall - Metodologi tradisional dengan fase sequential yang rigid",
              "Agile - Metodologi fleksibel dengan iterasi cepat dan adaptif terhadap perubahan",
              "Scrum - Framework Agile dengan sprint (2-4 minggu), daily standup, dan roles (Scrum Master, Product Owner, Team)",
              "Kanban - Visual workflow management dengan focus pada continuous delivery",
              "Lean Startup - Metodologi untuk startup dengan build-measure-learn cycle",
            ],
          },
          {
            heading: "Manajemen Proyek",
            items: [
              "Project scope management - Menentukan dan mengontrol scope proyek",
              "Time management - Estimasi waktu, scheduling, dan deadline management",
              "Cost management - Budgeting dan pengelolaan biaya proyek",
              "Risk management - Identifikasi, analisis, dan mitigasi risiko proyek",
              "Quality management - Memastikan deliverables memenuhi standar kualitas",
              "Stakeholder management - Mengelola komunikasi dan ekspektasi stakeholder",
            ],
          },
          {
            heading: "Budaya Mutu (Quality Culture)",
            items: [
              "TQM (Total Quality Management) - Pendekatan manajemen yang fokus pada kualitas total",
              "Continuous Improvement - Kaizen, improvement berkelanjutan dari proses dan produk",
              "Quality Standards - ISO 9001, CMMI (Capability Maturity Model Integration)",
              "Code Quality - Code review, linting, testing, dan documentation",
              "Process Quality - Standard Operating Procedures (SOP) dan best practices",
              "Customer Satisfaction - Focus pada kepuasan pengguna sebagai ukuran mutu",
            ],
          },
          {
            heading: "HAKI (Hak Atas Kekayaan Intelektual)",
            items: [
              "Copyright - Perlindungan karya cipta software dan code",
              "Patent - Perlindungan inovasi teknologi dan algoritma",
              "Trademark - Perlindungan brand dan logo software",
              "Open Source Licenses - MIT, Apache, GPL, dan lisensi open source lainnya",
              "Proprietary Software - Software dengan hak cipta terbatas",
              "Intellectual Property Rights - Memahami dan menghormati IP dalam development",
            ],
          },
        ],
      },
    ],
  },
  2: {
    title: "K3LH dan Budaya Kerja",
    description:
      "Keselamatan kerja, etika profesional, budaya kerja industri, dan pengelolaan aset fisik dan digital.",
    icon: "⚡",
    color: "from-orange-500 to-red-600",
    sections: [
      {
        title: "K3LH (Kesehatan dan Keselamatan Kerja)",
        content: [
          {
            heading: "Prinsip Dasar K3LH di Lingkungan TI",
            items: [
              "Ergonomi - Posisi duduk yang benar, tinggi monitor sejajar mata, keyboard dan mouse pada posisi nyaman",
              "Eye Care - Istirahat berkala (20-20-20 rule: 20 detik istirahat setiap 20 menit, lihat objek 20 kaki jauhnya)",
              "Carpal Tunnel Prevention - Peregangan tangan dan wrist secara berkala",
              "Posture - Maintaining posture yang baik untuk menghindari back pain dan neck strain",
              "Lighting - Pencahayaan yang adequate untuk mengurangi eye strain",
              "Ventilation - Sirkulasi udara yang baik untuk kenyamanan dan kesehatan",
            ],
          },
          {
            heading: "Keamanan Fisik Perangkat",
            items: [
              "Pengelolaan kabel - Cable management yang rapi untuk mencegah tripping hazard",
              "Electrical Safety - Penggunaan stabilizer, UPS, dan grounding yang proper",
              "Fire Safety - Penempatan APAR, emergency exit, dan prosedur evakuasi",
              "Equipment Maintenance - Perawatan berkala komputer, monitor, dan perangkat lain",
              "Temperature Control - Suhu ruangan yang optimal untuk perangkat elektronik",
              "Dust Management - Cleaning berkala untuk mencegah overheating",
            ],
          },
          {
            heading: "Prosedur Keselamatan",
            items: [
              "Emergency Shutdown - Prosedur shutdown yang aman saat terjadi emergency",
              "First Aid - Pemahaman basic first aid untuk kondisi umum",
              "Reporting System - Mechanism untuk melapor incident dan near-miss",
              "Training - Regular safety training dan awareness program",
              "Safety Equipment - PPE (Personal Protective Equipment) jika diperlukan",
            ],
          },
        ],
      },
      {
        title: "Budaya Kerja Profesional",
        content: [
          {
            heading: "Etika Kerja Industri Software",
            items: [
              "Integrity - Kejujuran dalam pekerjaan dan reporting",
              "Professionalism - Attitude dan behavior yang profesional",
              "Confidentiality - Menjaga kerahasiaan data dan informasi klien",
              "Accountability - Bertanggung jawab atas pekerjaan dan kesalahan",
              "Respect - Menghargai rekan kerja, stakeholder, dan user",
              "Compliance - Mematuhi regulasi, SOP, dan standar industri",
            ],
          },
          {
            heading: "Kolaborasi dan Komunikasi",
            items: [
              "Team Communication - Komunikasi yang jelas dan efektif dalam tim",
              "Code Review - Review code constructively untuk quality assurance",
              "Documentation - Dokumentasi yang baik untuk knowledge sharing",
              "Meeting Etiquette - Produktifitas dalam meeting dan discussion",
              "Conflict Resolution - Menyelesaikan konflik secara profesional",
              "Cross-functional Collaboration - Bekerja dengan team lain (design, product, marketing)",
            ],
          },
          {
            heading: "Disiplin dan Time Management",
            items: [
              "Punctuality - Kedisiplinan dalam waktu dan deadline",
              "Priority Management - Mengelola prioritas tugas dengan metode seperti Eisenhower Matrix",
              "Time Boxing - Mengalokasikan waktu spesifik untuk tugas tertentu",
              "Pomodoro Technique - Teknik time management dengan interval kerja dan istirahat",
              "Deadlines - Menghormati dan memenuhi deadline yang disepakati",
              "Work-Life Balance - Balance antara pekerjaan dan kehidupan pribadi",
            ],
          },
          {
            heading: "Continuous Learning",
            items: [
              "Skill Development - Terus mengembangkan skill teknis dan soft skills",
              "Industry Trends - Keep up dengan tren teknologi terbaru",
              "Certification - Mendapatkan sertifikasi relevan untuk career advancement",
              "Knowledge Sharing - Berbagi knowledge dengan tim dan komunitas",
              "Feedback - Menerima dan memberikan feedback secara constructive",
              "Self-Reflection - Refleksi berkala untuk improvement diri",
            ],
          },
        ],
      },
      {
        title: "Pengelolaan Aset Fisik dan Digital",
        content: [
          {
            heading: "Pengelolaan File dan Direktori Proyek",
            items: [
              "Directory Structure - Struktur folder yang organized dan consistent",
              "Naming Convention - Convention penamaan file yang clear dan descriptive",
              "File Organization - Grouping file berdasarkan type, module, atau purpose",
              "Version Control - Menggunakan Git untuk version management",
              "Backup Strategy - Regular backup dengan multiple locations (local, cloud)",
              "Archive - Archiving project yang tidak aktif untuk storage efficiency",
            ],
          },
          {
            heading: "Version Control dengan Git",
            items: [
              "Basic Commands - init, add, commit, push, pull, clone",
              "Branching - Feature branch, release branch, hotfix branch",
              "Merging - Merge request dan code review process",
              "Conflict Resolution - Menyelesaikan merge conflict",
              "Git Workflow - Git Flow, GitHub Flow, atau custom workflow",
              "Best Practices - Commit messages yang descriptive, frequent commits",
            ],
          },
          {
            heading: "Pengelolaan Aset Digital",
            items: [
              "Source Code - Management code repository dengan proper access control",
              "Assets Management - Images, audio, video, dan media assets",
              "Database - Backup dan recovery database secara berkala",
              "Configuration Files - Environment variables dan config files management",
              "Documentation - Technical docs, API docs, dan user guides",
              "Dependencies - Package management (npm, pip, composer) dan vulnerability scanning",
            ],
          },
          {
            heading: "Pengelolaan Aset Fisik",
            items: [
              "Hardware Inventory - Tracking hardware assets (laptop, monitor, dll)",
              "Software Licenses - Management software licenses dan compliance",
              "Device Security - Encryption, password protection, dan device tracking",
              "Maintenance Schedule - Regular maintenance untuk hardware",
              "Replacement Planning - Planning untuk hardware replacement",
              "Asset Disposal - Proper disposal untuk end-of-life equipment",
            ],
          },
          {
            heading: "Keamanan Data",
            items: [
              "Data Classification - Mengklasifikasikan data berdasarkan sensitivity",
              "Access Control - Role-based access control (RBAC)",
              "Encryption - Encryption untuk data at rest dan in transit",
              "Security Protocols - SOP untuk security incident response",
              "Compliance - Mematuhi regulasi data protection (GDPR, PDPB)",
              "Audit - Regular security audit dan vulnerability assessment",
            ],
          },
        ],
      },
    ],
  },
  3: {
    title: "Teknologi Jaringan",
    description:
      "Lingkungan sistem operasi, konfigurasi jaringan dasar, dan arsitektur TCP/IP untuk pengembangan.",
    icon: "🌐",
    color: "from-green-500 to-teal-600",
    sections: [
      {
        title: "Lingkungan Sistem Operasi",
        content: [
          {
            heading: "Struktur File System dan Direktori",
            items: [
              "Hierarchical Structure - Tree-like structure dari file system",
              "Root Directory - Directory utama (/ di Unix, C:\\ di Windows)",
              "Absolute vs Relative Path - Perbedaan absolute dan relative path",
              "File Permissions - Read, write, execute permissions (rwx)",
              "Ownership - User dan group ownership untuk files dan directories",
              "Symbolic Links - Shortcut dan references ke files lain",
            ],
          },
          {
            heading: "Manajemen Permissions dan Ownership",
            items: [
              "Unix Permissions - chmod, chown, chgrp commands",
              "Access Control Lists - Advanced permission management",
              "User Management - User creation, deletion, dan group management",
              "Sudo/Su - Privilege escalation untuk administrative tasks",
              "Security Best Practices - Principle of least privilege",
              "Audit Logging - Monitoring access dan changes",
            ],
          },
          {
            heading: "Environment Variables",
            items: [
              "Purpose - Menyimpan configuration dan secrets",
              "Usage - Access dalam code untuk database URLs, API keys, dll",
              "Management - Setting di OS level atau .env files",
              "Security - Jangan commit .env files ke version control",
              "Scope - System-wide vs user-specific vs project-specific",
              "Best Practices - Use environment-specific configs (dev, staging, prod)",
            ],
          },
          {
            heading: "Package Manager",
            items: [
              "npm/yarn - Package manager untuk JavaScript/Node.js",
              "pip - Package manager untuk Python",
              "composer - Package manager untuk PHP",
              "cargo - Package manager untuk Rust",
              "Dependencies vs DevDependencies - Perbedaan runtime dan development dependencies",
              "Security - Regular vulnerability scanning dan updates",
            ],
          },
          {
            heading: "Virtual Environment dan Containerization",
            items: [
              "Virtual Environments - Isolated environment untuk dependencies (venv, conda)",
              "Docker - Containerization untuk consistent environment",
              "Docker Compose - Multi-container orchestration",
              "Kubernetes - Container orchestration untuk production",
              "Benefits - Reproducibility, scalability, dan isolation",
              "Best Practices - Minimal images, security scanning, proper networking",
            ],
          },
        ],
      },
      {
        title: "Konfigurasi Jaringan Dasar",
        content: [
          {
            heading: "IP Address dan Subnetting",
            items: [
              "IPv4 vs IPv6 - Perbedaan dan transition",
              "IP Address Classes - Class A, B, C, D, E",
              "Subnet Masks - Network vs host portion dari IP address",
              "CIDR Notation - Classless Inter-Domain Routing notation",
              "Private vs Public IP - Perbedaan dan usage",
              "DHCP - Dynamic Host Configuration Protocol untuk automatic IP assignment",
            ],
          },
          {
            heading: "Port dan Socket Programming",
            items: [
              "Ports - Logical endpoints untuk communication (0-65535)",
              "Well-known Ports - 80 (HTTP), 443 (HTTPS), 22 (SSH), 3306 (MySQL)",
              "Sockets - Endpoint untuk bidirectional communication",
              "TCP vs UDP - Perbedaan reliable vs unreliable transport",
              "Socket Programming - Programming langsung dengan sockets",
              "Port Forwarding - Exposing local services ke network",
            ],
          },
          {
            heading: "Konektivitas Client-Server",
            items: [
              "Client-Server Model - Architecture pattern untuk distributed systems",
              "Request-Response Cycle - Flow dari request ke response",
              "Load Balancing - Distributing traffic across multiple servers",
              "Proxy Servers - Intermediate servers untuk caching, security, dll",
              "Reverse Proxy - Exposing multiple services melalui single endpoint",
              "CDN - Content Delivery Network untuk static assets",
            ],
          },
          {
            heading: "Localhost dan Development Server",
            items: [
              "Localhost - 127.0.0.1 untuk local development",
              "Development Server - Local server untuk testing (localhost:3000, dll)",
              "Hot Reload - Automatic reload saat code changes",
              "Debugging - Debugging tools untuk development",
              "Port Conflicts - Menangani port yang sudah in use",
              "Network Interface - Multiple network interfaces (localhost, LAN, WiFi)",
            ],
          },
          {
            heading: "Proxy dan Firewall dalam Development",
            items: [
              "HTTP Proxy - Proxy untuk HTTP/HTTPS traffic",
              "Corporate Proxy - Bypassing corporate proxy restrictions",
              "Firewall Rules - Configuring firewall untuk development",
              "VPN - Virtual Private Network untuk secure remote access",
              "Network Security - Best practices untuk secure development",
              "Testing Network - Simulating network conditions (latency, offline)",
            ],
          },
        ],
      },
      {
        title: "Arsitektur TCP/IP",
        content: [
          {
            heading: "Layer TCP/IP dan Fungsinya",
            items: [
              "Application Layer - HTTP, FTP, SMTP, DNS, protocols untuk applications",
              "Transport Layer - TCP, UDP, end-to-end communication",
              "Internet Layer - IP, ICMP, routing dan addressing",
              "Link Layer - Ethernet, WiFi, physical network transmission",
              "Encapsulation - Data wrapping di setiap layer",
              "Decapsulation - Unwrapping data saat receiving",
            ],
          },
          {
            heading: "HTTP/HTTPS Protocol",
            items: [
              "HTTP Methods - GET, POST, PUT, DELETE, PATCH, dll",
              "Status Codes - 2xx (success), 3xx (redirect), 4xx (client error), 5xx (server error)",
              "Headers - Metadata untuk request dan response",
              "HTTPS - Encrypted HTTP dengan TLS/SSL",
              "HTTP/2 dan HTTP/3 - Enhanced versions dengan performance improvements",
              "RESTful Principles - Design principles untuk REST APIs",
            ],
          },
          {
            heading: "RESTful API dan Web Services",
            items: [
              "REST Architecture - Representational State Transfer",
              "Resources - Entities yang di-expose melalui API",
              "Stateless - Setiap request contains semua info yang diperlukan",
              "CRUD Operations - Create, Read, Update, Delete via HTTP methods",
              "JSON/XML - Data formats untuk API responses",
              "Authentication - API keys, OAuth, JWT untuk secure API access",
            ],
          },
          {
            heading: "WebSocket untuk Real-time Communication",
            items: [
              "WebSocket Protocol - Full-duplex communication over single TCP connection",
              "Use Cases - Chat apps, real-time updates, gaming",
              "Handshake - HTTP upgrade ke WebSocket connection",
              "Events - Sending dan receiving real-time events",
              "Reconnection - Handling connection drops dan reconnection",
              "Security - WSS (WebSocket Secure) untuk encrypted communication",
            ],
          },
          {
            heading: "Database Connection melalui Jaringan",
            items: [
              "Database Protocols - MySQL protocol, PostgreSQL protocol, dll",
              "Connection Pooling - Reusing database connections untuk efficiency",
              "Remote Database - Accessing database di remote server",
              "Security - Encrypted connections, authentication, authorization",
              "Performance - Latency considerations untuk remote database",
              "ORM - Object-Relational Mapping untuk database access",
            ],
          },
          {
            heading: "Analisis Kendala Koneksi",
            items: [
              "Latency - Delay dalam data transmission",
              "Bandwidth - Available data transfer rate",
              "Packet Loss - Lost packets affecting data integrity",
              "Network Congestion - Bottlenecks dalam network",
              "Troubleshooting - Tools untuk diagnose network issues (ping, traceroute, netstat)",
              "Mitigation - Strategies untuk handle network issues gracefully",
            ],
          },
        ],
      },
    ],
  },
  4: {
    title: "Pemrograman Terstruktur",
    description:
      "Struktur data, tipe data, struktur kontrol, dan modularisasi program berbasis algoritma.",
    icon: "🔧",
    color: "from-purple-500 to-indigo-600",
    sections: [
      {
        title: "Tipe Data dan Struktur Data",
        content: [
          {
            heading: "Tipe Data Primitif",
            items: [
              "Integer - Bilangan bulat (int, long, short)",
              "Float/Double - Bilangan desimal dengan presisi floating point",
              "String - Teks dan karakter sequences",
              "Boolean - True/false values",
              "Character - Single character",
              "Null/None - Absence of value",
            ],
          },
          {
            heading: "Array dan Multidimensional Array",
            items: [
              "Array - Collection of elements dengan fixed size (di beberapa bahasa)",
              "Dynamic Arrays - Arrays yang bisa grow/shrink (ArrayList, Vector)",
              "Multidimensional - 2D arrays, 3D arrays untuk matrices",
              "Array Operations - Access, insert, delete, search",
              "Time Complexity - O(1) access, O(n) search untuk unsorted",
              "Use Cases - Grid-based data, image processing, mathematical computations",
            ],
          },
          {
            heading: "Stack dan Queue",
            items: [
              "Stack - LIFO (Last In First Out) data structure",
              "Stack Operations - Push, pop, peek/top, isEmpty",
              "Use Cases - Function call stack, undo/redo, expression evaluation",
              "Queue - FIFO (First In First Out) data structure",
              "Queue Operations - Enqueue, dequeue, front, isEmpty",
              "Use Cases - Task scheduling, buffering, BFS traversal",
            ],
          },
          {
            heading: "Linked List",
            items: [
              "Singly Linked List - Setiap node punya pointer ke next node",
              "Doubly Linked List - Nodes punya pointer ke next dan previous",
              "Circular Linked List - Last node points ke first node",
              "Operations - Insert, delete, traverse, search",
              "Time Complexity - O(n) untuk search, O(1) untuk insert/delete di head",
              "vs Array - Dynamic size, efficient insertion/deletion, no random access",
            ],
          },
          {
            heading: "Hash Table dan Dictionary",
            items: [
              "Hash Table - Key-value pairs dengan hashing",
              "Hash Function - Function untuk mapping keys ke indices",
              "Collision Handling - Chaining, open addressing",
              "Operations - Insert, delete, search dengan average O(1)",
              "Use Cases - Caching, indexing, symbol tables",
              "Considerations - Load factor, collision resolution, resizing",
            ],
          },
          {
            heading: "Set dan Penggunaannya",
            items: [
              "Set - Collection of unique elements",
              "Operations - Add, remove, contains, union, intersection",
              "Types - HashSet, TreeSet, LinkedHashSet",
              "Use Cases - Removing duplicates, membership testing",
              "Ordered Sets - Sets yang maintain insertion order atau sorted order",
              "Performance - O(1) average untuk basic operations",
            ],
          },
          {
            heading: "Tree Structures",
            items: [
              "Binary Tree - Tree dengan max 2 children per node",
              "Binary Search Tree - Ordered binary tree untuk efficient search",
              "Balanced Trees - AVL tree, Red-Black tree untuk guaranteed O(log n)",
              "Tree Traversal - Inorder, preorder, postorder, level-order",
              "Use Cases - Hierarchical data, file systems, DOM",
              "Heaps - Priority queue implementation dengan binary heap",
            ],
          },
        ],
      },
      {
        title: "Struktur Kontrol Program",
        content: [
          {
            heading: "Percabangan (Conditional Statements)",
            items: [
              "If-Else - Basic conditional logic",
              "Else-If Ladder - Multiple conditions",
              "Switch-Case - Multi-way branch berdasarkan value",
              "Ternary Operator - Concise conditional expression",
              "Nested Conditions - Conditions dalam conditions",
              "Best Practices - Guard clauses, early returns untuk readability",
            ],
          },
          {
            heading: "Perulangan (Loops)",
            items: [
              "For Loop - Loop dengan counter",
              "While Loop - Loop berdasarkan condition",
              "Do-While Loop - Loop yang minimal execute sekali",
              "For-Each Loop - Iterasi over collections",
              "Nested Loops - Loops dalam loops",
              "Infinite Loops - Loops tanpa exit condition (biasanya bug)",
            ],
          },
          {
            heading: "Nested Loops dan Optimization",
            items: [
              "Nested Loops - O(n²) complexity untuk 2-level nesting",
              "Loop Unrolling - Reducing loop overhead",
              "Loop Invariant Code Motion - Moving code out of loops",
              "Cache Locality - Optimizing untuk CPU cache",
              "Parallel Loops - Parallel processing untuk independent iterations",
              "Best Practices - Minimize nesting, consider algorithm alternatives",
            ],
          },
          {
            heading: "Break dan Continue Statement",
            items: [
              "Break - Exit loop secara prematur",
              "Continue - Skip ke next iteration",
              "Labeled Break/Continue - Breaking out of nested loops",
              "Use Cases - Search algorithms, filtering, early termination",
              "Alternatives - Return statements, flags, refactoring",
              "Best Practices - Use sparingly, consider cleaner alternatives",
            ],
          },
          {
            heading: "Error Handling dengan Try-Catch",
            items: [
              "Try-Catch Block - Catching dan handling exceptions",
              "Finally Block - Code yang selalu execute regardless of exception",
              "Throw Statement - Raising exceptions secara manual",
              "Exception Types - Checked vs unchecked exceptions",
              "Custom Exceptions - Membuat custom exception classes",
              "Best Practices - Catch specific exceptions, don't catch generic Exception",
            ],
          },
        ],
      },
      {
        title: "Modularisasi Program",
        content: [
          {
            heading: "Fungsi dan Prosedur",
            items: [
              "Function - Reusable block of code yang returns value",
              "Procedure - Function yang tidak return value (void)",
              "Function Signature - Name, parameters, return type",
              "Function Body - Implementation code",
              "Declaration vs Definition - Forward declaration vs actual implementation",
              "Best Practices - Single responsibility, meaningful names, documentation",
            ],
          },
          {
            heading: "Parameter Passing",
            items: [
              "Pass by Value - Copy of value passed to function",
              "Pass by Reference - Reference to original passed to function",
              "Pass by Pointer - Pointer ke original passed to function",
              "Default Parameters - Parameters dengan default values",
              "Variable Arguments - Functions dengan variable number of arguments",
              "Language Differences - C++ (value/ref), Python (reference-like), Java (value)",
            ],
          },
          {
            heading: "Return Values dan Function Composition",
            items: [
              "Return Statement - Returning value dari function",
              "Multiple Returns - Multiple return statements dalam function",
              "Void Functions - Functions yang tidak return anything",
              "Function Composition - Combining functions (f(g(x)))",
              "Higher-Order Functions - Functions yang take/return functions",
              "Pure Functions - Functions dengan no side effects",
            ],
          },
          {
            heading: "Scope Variable dan Closures",
            items: [
              "Global Scope - Variables accessible throughout program",
              "Local Scope - Variables dalam function/block",
              "Block Scope - Variables dalam specific block (if, loop)",
              "Lexical Scoping - Scope determined by code structure",
              "Closures - Functions yang capture variables dari enclosing scope",
              "Shadowing - Inner variable hiding outer variable dengan nama sama",
            ],
          },
          {
            heading: "Recursion dan Base Case",
            items: [
              "Recursion - Function yang calls itself",
              "Base Case - Condition untuk stop recursion",
              "Recursive Case - Recursive call dengan smaller problem",
              "Stack Overflow - Excessive recursion depth",
              "Tail Recursion - Optimization untuk recursive calls",
              "Use Cases - Tree traversal, divide and conquer algorithms",
            ],
          },
          {
            heading: "Design Pattern Modular",
            items: [
              "Module Pattern - Encapsulating private state",
              "Singleton Pattern - Single instance class",
              "Factory Pattern - Object creation logic",
              "Strategy Pattern - Interchangeable algorithms encapsulated dalam classes",
              "Observer Pattern - Event subscription system",
              "Dependency Injection - Passing dependencies instead of creating internally",
            ],
          },
        ],
      },
      {
        title: "Algoritma dan Penyelesaian Masalah",
        content: [
          {
            heading: "Dekomposisi Masalah",
            items: [
              "Problem Decomposition - Breaking complex problems into smaller parts",
              "Divide and Conquer - Recursively solving subproblems",
              "Top-Down vs Bottom-Up - Approaches untuk problem solving",
              "Subproblems - Identifying independent subproblems",
              "Composition - Combining solutions dari subproblems",
              "Example - Merge sort (divide, sort subarrays, merge)",
            ],
          },
          {
            heading: "Pola Algoritmik",
            items: [
              "Sorting Algorithms - Bubble, selection, insertion, merge, quick sort",
              "Searching Algorithms - Linear search, binary search",
              "Greedy Algorithms - Making locally optimal choices",
              "Dynamic Programming - Memoization, tabulation untuk overlapping subproblems",
              "Backtracking - Exploring all possibilities dengan pruning",
              "Graph Algorithms - BFS, DFS, Dijkstra, A*",
            ],
          },
          {
            heading: "Complexity Analysis",
            items: [
              "Time Complexity - Big O notation untuk execution time",
              "Space Complexity - Memory usage analysis",
              "Common Complexities - O(1), O(log n), O(n), O(n log n), O(n²)",
              "Best/Average/Worst Case - Different scenarios",
              "Amortized Analysis - Average over sequence of operations",
              "Trade-offs - Time vs space trade-offs dalam algorithm design",
            ],
          },
          {
            heading: "Penyelesaian Masalah Kontekstual",
            items: [
              "Understanding Requirements - Clarifying problem statement",
              "Input/Output Analysis - Defining input format dan expected output",
              "Edge Cases - Handling boundary conditions dan special cases",
              "Validation - Validating input dan output",
              "Testing - Unit testing, integration testing",
              "Optimization - Improving performance setelah initial solution",
            ],
          },
        ],
      },
    ],
  },
  5: {
    title: "Pemrograman Berorientasi Objek",
    description:
      "Konsep OOP, enkapsulasi, inheritance, polymorphism untuk struktur program modular.",
    icon: "🎯",
    color: "from-pink-500 to-rose-600",
    sections: [
      {
        title: "Konsep Dasar OOP",
        content: [
          {
            heading: "Class dan Object",
            items: [
              "Class - Blueprint/template untuk membuat objects",
              "Object - Instance dari class dengan actual data",
              "Class Definition - Syntax untuk defining class",
              "Object Instantiation - Creating objects dari class",
              "Class Members - Attributes (fields) dan methods",
              "Constructor - Special method untuk initialize objects",
            ],
          },
          {
            heading: "Atribut dan Method",
            items: [
              "Attributes/Fields - Data stored dalam objects",
              "Instance Variables - Variables specific ke setiap object",
              "Class Variables - Variables shared across all instances",
              "Methods - Functions defined dalam class",
              "Instance Methods - Methods yang operate pada instance data",
              "Class Methods - Methods yang operate pada class data",
            ],
          },
          {
            heading: "Constructor dan Destructor",
            items: [
              "Constructor - Method yang dipanggil saat object creation",
              "Default Constructor - Constructor tanpa parameters",
              "Parameterized Constructor - Constructor dengan parameters",
              "Constructor Overloading - Multiple constructors dengan different parameters",
              "Destructor - Method yang dipanggil saat object destruction",
              "Resource Management - Managing resources dalam constructor/destructor",
            ],
          },
          {
            heading: "Prinsip OOP",
            items: [
              "Encapsulation - Bundling data dan methods yang operate pada data",
              "Inheritance - Creating new classes dari existing classes",
              "Polymorphism - Objects behaving differently based on type",
              "Abstraction - Hiding implementation details, exposing only essentials",
              "SOLID Principles - Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion",
            ],
          },
        ],
      },
      {
        title: "Enkapsulasi dan Access Modifier",
        content: [
          {
            heading: "Access Modifiers",
            items: [
              "Public - Accessible dari anywhere",
              "Private - Accessible hanya dalam class yang sama",
              "Protected - Accessible dalam class dan subclasses",
              "Package/Private (default) - Accessible dalam package yang sama",
              "Internal - Accessible dalam assembly/namespace yang sama",
              "Language Differences - C++ (public, private, protected), Java (public, private, protected, default), Python (public, private convention)",
            ],
          },
          {
            heading: "Getter dan Setter Methods",
            items: [
              "Getter Method - Method untuk retrieve private field value",
              "Setter Method - Method untuk set private field value",
              "Property Syntax - Syntactic sugar untuk getters/setters",
              "Validation - Validating input dalam setter",
              "Computed Properties - Properties yang di-compute on the fly",
              "Read-Only Properties - Properties dengan getter only",
            ],
          },
          {
            heading: "Property Encapsulation",
            items: [
              "Private Fields - Fields yang tidak accessible langsung",
              "Public Interface - Methods untuk interact dengan private data",
              "Data Hiding - Hiding implementation details",
              "Immutability - Making objects immutable setelah creation",
              "Defensive Copying - Returning copies daripada references",
              "Information Hiding - Hiding complexity dari external code",
            ],
          },
          {
            heading: "Data Validation dalam Setter",
            items: [
              "Input Validation - Checking input validity sebelum assignment",
              "Range Checking - Ensuring values dalam valid range",
              "Type Checking - Verifying correct data type",
              "Business Logic Validation - Enforcing business rules",
              "Exception Throwing - Throwing exceptions untuk invalid input",
              "Default Values - Setting default values untuk invalid cases",
            ],
          },
        ],
      },
      {
        title: "Inheritance dan Polymorphism",
        content: [
          {
            heading: "Superclass dan Subclass",
            items: [
              "Superclass/Parent Class - Class yang di-inherit",
              "Subclass/Child Class - Class yang inherits dari superclass",
              "extends Keyword - Syntax untuk inheritance (Java, TypeScript)",
              ": Syntax - Syntax untuk inheritance (C#, C++)",
              "Single Inheritance - Class inherits dari satu superclass",
              "Multiple Inheritance - Class inherits dari multiple superclasses (C++, Python)",
            ],
          },
          {
            heading: "Method Overriding",
            items: [
              "Overriding - Providing new implementation untuk inherited method",
              "@Override Annotation - Explicitly marking overridden methods (Java)",
              "virtual Keyword - Marking methods sebagai overridable (C#)",
              "Override Keyword - Explicitly overriding virtual methods (C#)",
              "super Keyword - Calling superclass method dari subclass",
              "Signature Matching - Must match parameter types dan return type",
            ],
          },
          {
            heading: "Method Overloading",
            items: [
              "Overloading - Multiple methods dengan nama sama tapi different parameters",
              "Parameter Types - Different parameter types",
              "Parameter Count - Different number of parameters",
              "Parameter Order - Different order of parameters",
              "Compile-time Polymorphism - Resolved at compile time",
              "Not Available in Some Languages - Python tidak punya method overloading",
            ],
          },
          {
            heading: "Abstract Class dan Interface",
            items: [
              "Abstract Class - Class yang tidak bisa di-instantiate, boleh punya abstract methods",
              "Abstract Methods - Methods tanpa implementation, must di-override",
              "Concrete Methods - Methods dengan implementation dalam abstract class",
              "Interface - Contract defining methods yang harus di-implement",
              "Multiple Interfaces - Class bisa implement multiple interfaces",
              "Default Methods - Methods dengan default implementation dalam interface (Java 8+)",
            ],
          },
          {
            heading: "Virtual Methods dan Dynamic Binding",
            items: [
              "Virtual Methods - Methods yang bisa di-override dan resolved at runtime",
              "Dynamic Binding - Method resolution based pada actual object type",
              "Static Binding - Method resolution at compile time",
              "vtable - Virtual method table untuk dynamic dispatch",
              "Performance Considerations - Virtual method call overhead",
              "Early Binding vs Late Binding - Compile-time vs runtime resolution",
            ],
          },
          {
            heading: "Polymorphism dan Referensi Objek",
            items: [
              "Upcasting - Treating subclass object sebagai superclass reference",
              "Downcasting - Treating superclass reference sebagai subclass (requires explicit cast)",
              "Type Checking - Checking actual type dengan instanceof, type()",
              "Polymorphic References - Superclass reference pointing ke subclass object",
              "Method Dispatch - Calling overridden methods via superclass reference",
              "Array Polymorphism - Array of superclass references holding subclass objects",
            ],
          },
          {
            heading: "Multiple Inheritance Challenges",
            items: [
              "Diamond Problem - Ambiguity saat multiple inheritance",
              "Conflict Resolution - Rules untuk resolving conflicts",
              "Virtual Inheritance - C++ mechanism untuk diamond problem",
              "Mixin Classes - Classes yang provide functionality tanpa inheritance hierarchy",
              "Composition over Inheritance - Favoring composition over multiple inheritance",
              "Interfaces as Alternative - Using interfaces sebagai alternative ke multiple inheritance",
            ],
          },
        ],
      },
      {
        title: "Design Patterns Berbasis OOP",
        content: [
          {
            heading: "Creational Patterns",
            items: [
              "Singleton - Ensure class has only one instance",
              "Factory Method - Create objects tanpa specifying exact class",
              "Abstract Factory - Create families of related objects",
              "Builder - Construct complex objects step by step",
              "Prototype - Create objects by cloning existing objects",
            ],
          },
          {
            heading: "Structural Patterns",
            items: [
              "Adapter - Convert interface dari class ke another interface",
              "Decorator - Add behavior dynamically tanpa changing class",
              "Facade - Simplified interface ke complex subsystem",
              "Proxy - Placeholder untuk another object untuk control access",
              "Composite - Tree structure untuk part-whole hierarchies",
              "Bridge - Separate abstraction dari implementation",
            ],
          },
          {
            heading: "Behavioral Patterns",
            items: [
              "Observer - One-to-many dependency, changes propagate ke dependents",
              "Strategy - Interchangeable algorithms encapsulated dalam classes",
              "Command - Encapsulate request sebagai object",
              "State - Object behavior changes based pada internal state",
              "Template Method - Skeleton algorithm dengan steps di-override",
              "Iterator - Sequential access ke elements tanpa exposing structure",
            ],
          },
        ],
      },
    ],
  },
};
