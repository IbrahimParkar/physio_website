import { sitePath } from "@/lib/paths";

const asset = (path: string) => sitePath(path);

export const specializationGroups = [
  { title: "Clinical Rehabilitation", cards: [["Neuro Rehabilitation", asset("/assets/cards/neuro-rehabilitation.png")], ["Orthopaedic Rehabilitation", asset("/assets/cards/orthopaedic-rehabilitation.png")], ["Sports Rehabilitation", asset("/assets/cards/sports-rehabilitation.png")], ["Post-Operative Rehabilitation", asset("/assets/cards/post-operative-rehabilitation.png")], ["Pain & Functional Rehabilitation", asset("/assets/cards/pain-functional-rehabilitation.png")], ["Paediatric Rehabilitation", asset("/assets/cards/paediatric-rehabilitation.png")], ["Geriatric Rehabilitation", asset("/assets/cards/geriatric-rehabilitation.png")]] },
  { title: "Exercise / Treatment Approaches", cards: [["Fitness Training", asset("/assets/cards/fitness-training.png")], ["Manual Therapy", asset("/assets/cards/manual-therapy.png")], ["Kinesiology Taping", asset("/assets/cards/kinesiology-taping.png")], ["Dry Needling", asset("/assets/cards/dry-needling.png")], ["Instrument-Assisted Soft Tissue Manipulation", asset("/assets/cards/instrument-assisted-soft-tissue-manipulation.png")], ["Cupping Therapy", asset("/assets/cards/cupping-therapy.png")], ["Spinal Manipulation", asset("/assets/cards/spinal-manipulation.png")]] },
  { title: "Care Delivery", cards: [["Home-Based Rehabilitation", asset("/assets/cards/home-based-rehabilitation.png")], ["Tele-Rehabilitation", asset("/assets/cards/tele-rehabilitation.png")]] },
] as const;
