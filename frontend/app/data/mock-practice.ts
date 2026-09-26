export type CaseStatus = "Active" | "Reassessment" | "Discharged" | "On Hold";

export const workflowSteps = [
  "Assess",
  "Create Case",
  "Set Goals",
  "Create Treatment Plan",
  "Prescribe Exercises",
  "Conduct Session",
  "Record Notes",
  "Monitor Progress",
  "Reassess",
  "Update Plan",
  "Discharge",
];

export const patients = [
  {
    id: "p-1001",
    name: "Aarav Sharma",
    age: 42,
    phone: "+91 98765 43210",
    email: "aarav@example.com",
    city: "Mumbai",
    status: "Active",
    adherence: 86,
    lastVisit: "16 Aug 2026",
    primaryGoal: "Return to pain-free walking and office work",
  },
  {
    id: "p-1002",
    name: "Meera Iyer",
    age: 35,
    phone: "+91 91234 56780",
    email: "meera@example.com",
    city: "Pune",
    status: "Active",
    adherence: 74,
    lastVisit: "14 Aug 2026",
    primaryGoal: "Reduce neck pain during desk work",
  },
  {
    id: "p-1003",
    name: "Kabir Khan",
    age: 51,
    phone: "+91 99887 77665",
    email: "kabir@example.com",
    city: "Delhi",
    status: "Inactive",
    adherence: 61,
    lastVisit: "28 Jul 2026",
    primaryGoal: "Self-manage recurrent low back pain",
  },
];

export const cases = [
  {
    id: "CASE-2026-014",
    patientId: "p-1001",
    patientName: "Aarav Sharma",
    status: "Active" as CaseStatus,
    complaint: "Knee arthritis with stair pain",
    history: "Six-month history of anterior knee pain aggravated by stairs and long walks.",
    assessment: "Reduced single-leg control, quadriceps inhibition, mild swelling after longer activity.",
    findings: "Pain 6/10 on stairs, knee flexion limited at end range, poor eccentric control.",
    impression: "Patellofemoral overload with early degenerative knee symptoms.",
    goals: ["Walk 30 minutes with pain under 2/10", "Climb two floors without rail support", "Improve LEFS by 15 points"],
    plan: "Strength block for quadriceps and hip abductors, gait pacing, activity modification, weekly tele-rehab review.",
    outcomeMeasures: ["Pain NRS: 6 -> 3", "LEFS: 48/80 -> 61/80", "Sit-to-stand: 10 -> 15 reps"],
    progress: 68,
    nextStep: "Reassessment",
  },
  {
    id: "CASE-2026-011",
    patientId: "p-1001",
    patientName: "Aarav Sharma",
    status: "Discharged" as CaseStatus,
    complaint: "Hand fracture rehabilitation",
    history: "Post-cast stiffness and reduced grip after distal radius fracture.",
    assessment: "Restricted wrist extension and low grip endurance.",
    findings: "Grip strength 42% of unaffected side at intake.",
    impression: "Post-immobilization stiffness with strength deficit.",
    goals: ["Restore wrist mobility", "Resume typing and daily lifting", "Improve grip symmetry"],
    plan: "Mobility drills, graded gripping, swelling control, and functional loading.",
    outcomeMeasures: ["Grip symmetry: 42% -> 88%", "QuickDASH: 48 -> 14"],
    progress: 100,
    nextStep: "Discharged",
  },
  {
    id: "CASE-2026-018",
    patientId: "p-1002",
    patientName: "Meera Iyer",
    status: "Reassessment" as CaseStatus,
    complaint: "Cervical pain and headaches",
    history: "Desk-related neck pain with intermittent headaches for three months.",
    assessment: "Reduced thoracic mobility, upper trapezius sensitivity, poor work break routine.",
    findings: "Neck Disability Index 34%, headache frequency 4/week.",
    impression: "Mechanical neck pain with workload and postural tolerance factors.",
    goals: ["Reduce headache frequency to 1/week", "Complete workday with pain under 3/10"],
    plan: "Mobility, deep neck flexor work, ergonomic coaching, micro-break schedule.",
    outcomeMeasures: ["NDI: 34% -> 20%", "Headaches: 4/week -> 2/week"],
    progress: 57,
    nextStep: "Update Plan",
  },
];

export const appointments = [
  { id: "APT-088", patient: "Aarav Sharma", type: "Tele-Rehab Review", date: "Today", time: "6:30 PM", status: "Confirmed" },
  { id: "APT-089", patient: "Meera Iyer", type: "Reassessment", date: "Tomorrow", time: "11:00 AM", status: "Pending" },
  { id: "APT-090", patient: "Kabir Khan", type: "Follow-up Call", date: "19 Aug", time: "5:00 PM", status: "Confirmed" },
];

export const sessions = [
  { id: "S-210", caseId: "CASE-2026-014", patient: "Aarav Sharma", date: "16 Aug 2026", notes: "Stair tolerance improved. Added step-down control drill.", pain: "3/10" },
  { id: "S-209", caseId: "CASE-2026-018", patient: "Meera Iyer", date: "14 Aug 2026", notes: "Headache frequency reduced. Reinforced desk break routine.", pain: "4/10" },
  { id: "S-207", caseId: "CASE-2026-014", patient: "Aarav Sharma", date: "10 Aug 2026", notes: "Good adherence. Increased wall-sit duration.", pain: "4/10" },
];

export const exerciseLibrary = [
  {
    id: "EX-001",
    name: "Supported Squat To Chair",
    category: "Knee",
    instructions: "Sit back to a chair with controlled knee alignment. Stand tall without pushing through pain.",
    sets: 3,
    reps: 10,
    duration: "8 min",
    hold: "0 sec",
    frequency: "5 days/week",
  },
  {
    id: "EX-002",
    name: "Wall Sit Isometric",
    category: "Knee",
    instructions: "Hold a comfortable wall sit angle while maintaining even pressure through both feet.",
    sets: 4,
    reps: 1,
    duration: "30 sec",
    hold: "30 sec",
    frequency: "4 days/week",
  },
  {
    id: "EX-003",
    name: "Deep Neck Flexor Activation",
    category: "Cervical",
    instructions: "Gently nod as if saying yes, keeping the larger neck muscles relaxed.",
    sets: 3,
    reps: 8,
    duration: "5 min",
    hold: "5 sec",
    frequency: "Daily",
  },
  {
    id: "EX-004",
    name: "Wrist Extension Mobility",
    category: "Hand",
    instructions: "Use the opposite hand to guide wrist extension within comfortable stretch limits.",
    sets: 2,
    reps: 12,
    duration: "6 min",
    hold: "3 sec",
    frequency: "Daily",
  },
];

export const programs = [
  { id: "PRG-301", patient: "Aarav Sharma", caseId: "CASE-2026-014", name: "Knee Strength Phase 2", exercises: 4, adherence: 86, updated: "Today" },
  { id: "PRG-299", patient: "Meera Iyer", caseId: "CASE-2026-018", name: "Desk Neck Reset", exercises: 5, adherence: 74, updated: "14 Aug" },
];

export const documents = [
  { id: "DOC-1", patient: "Aarav Sharma", title: "Initial Assessment PDF", type: "Assessment", date: "02 Aug 2026" },
  { id: "DOC-2", patient: "Meera Iyer", title: "Ergonomic Advice Sheet", type: "Education", date: "14 Aug 2026" },
  { id: "DOC-3", patient: "Aarav Sharma", title: "Discharge Summary - Hand", type: "Report", date: "20 Jul 2026" },
];
