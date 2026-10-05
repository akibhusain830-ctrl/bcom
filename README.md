# B.Com Gauhati University Exam & Study Portal

> **A high-performance, mobile-first, editorial revision portal and question bank for Gauhati University B.Com (CBCS / NEP) examinations.**

---

## 🌟 Key Highlights

- **143+ Fully Solved University Questions**: Complete coverage of official Gauhati University past year question papers (2024, 2023, 2022) and unit-wise syllabi.
- **2 Dedicated 40-Marks Sessional Papers (Units 1, 2 & 3)**:
  - **Set A & Set B**: Designed strictly according to the Gauhati University sessional pattern (Section A: 5×2M, Section B: 4×5M, Section C: 4×10M).
  - Target: Guaranteeing **80%+ marks** in internal sessional exams.
- **Psychological Memory Framework**:
  - Point-by-point answers structured for cognitive retention.
  - Memorable mnemonics (e.g., *POLCA*, *SMART*, *DECIDE*, *Fayol's 14 Principles*).
  - ASCII structured flowcharts and corporate real-world examples (Tata, Apple, Infosys, Reliance, etc.).
  - Pro examiner scoring tips to maximize marks under Gauhati University evaluation guidelines.
- **10/10 Editorial & Mobile UX**:
  - **Zero Card-Clutter / Anti-Slop**: Breathable, editorial typography inspired by Obsidian and Medium. No heavy nested borders or cognitive eye fatigue.
  - **Mobile Touch-Optimized**: Responsive floating action bar, bottom study drawer, horizontally scrollable comparative tables, and full viewport compliance (zero horizontal cut-off).
  - **Instant Search**: Full client-side modal search (`Ctrl+K` / search pill) with category badges and instant deep linking.
  - **Offline/Printable Markdown Archives**: Markdown compilations included in `/bom` for printing or note-taking apps.

---

## 📂 Repository Structure

```
bcom/
├── bom/                                          # Comprehensive Markdown Study Archives
│   ├── Business_Organisation_and_Management_Complete_Study_Guide.md
│   ├── Business_Organisation_and_Management_PYQ_Solved_GU.md
│   ├── Sessional_Paper_A_40Marks_Units_1_2_3.md # 40-Marks Sessional Paper Set A
│   └── Sessional_Paper_B_40Marks_Units_1_2_3.md # 40-Marks Sessional Paper Set B
│
└── site/                                         # Interactive Vite + React Application
    ├── public/                                   # Static assets
    ├── src/
    │   ├── components/                           # UI components & views
    │   │   ├── views/                            # Dashboard, Unit, PYQ, Sessional, Syllabus views
    │   │   ├── FormattedAnswer.tsx               # Editorial formatting engine
    │   │   ├── MobileDrawer.tsx                  # Mobile navigation drawer
    │   │   ├── SearchModal.tsx                   # Fast modal search
    │   │   └── Sidebar.tsx                       # Desktop navigation sidebar
    │   ├── data/bom/                             # TypeScript question & answer datasets
    │   │   ├── bomData.ts                        # Syllabus & unit-wise questions
    │   │   ├── pyqData.ts                        # 2022, 2023, 2024 solved university papers
    │   │   └── sessionalData.ts                  # Set A & Set B 40M sessional questions
    │   ├── App.tsx                               # Primary layout and routing
    │   └── main.tsx                              # React entry point
    ├── package.json
    ├── tailwind.config.js
    └── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/akibhusain830-ctrl/bcom.git
   cd bcom/site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

---

## 📚 Exam Coverage Breakdown

| Paper / Section | Question Count | Marks Breakdown | Target |
| :--- | :---: | :---: | :---: |
| **Sessional Set A (Units 1–3)** | 13 Questions | 5×2M + 4×5M + 4×10M (Choice-based) | 80%+ Internal Score |
| **Sessional Set B (Units 1–3)** | 13 Questions | 5×2M + 4×5M + 4×10M (Choice-based) | 80%+ Internal Score |
| **PYQ 2024 Solved** | Full Paper | 1M, 2M, 5M, 10M Questions | Official GU Past Exam |
| **PYQ 2023 Solved** | Full Paper | 1M, 2M, 5M, 10M Questions | Official GU Past Exam |
| **PYQ 2022 Solved** | Full Paper | 1M, 2M, 5M, 10M Questions | Official GU Past Exam |
| **Units 1 to 5 Syllabus** | 80+ Questions | Comprehensive conceptual coverage | Complete Mastery |
| **Total Solved Questions** | **143 Questions** | **Full Question Bank** | **First Class with Distinction** |

---

## 📄 License
Educational use for Gauhati University B.Com students.
