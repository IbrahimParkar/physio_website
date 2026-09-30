import type { LucideIcon } from "lucide-react";
import { Activity, Bell, CalendarDays, ClipboardList, CreditCard, FileText, Home, Library, LineChart, MessageSquare, NotebookTabs, Settings, UserRoundPlus, UsersRound, Video } from "lucide-react";

export type NavItem = [label: string, href: string, Icon: LucideIcon];

export const providerNav: NavItem[] = [
  ["Today", "/provider", Home], ["Patients", "/provider/patients", UsersRound], ["Cases", "/provider/cases", ClipboardList], ["New Case", "/provider/cases/new", UserRoundPlus], ["Appointments", "/provider/appointments", CalendarDays], ["Sessions", "/provider/sessions", Video], ["Assessments", "/provider/assessments", NotebookTabs], ["Exercise Library", "/provider/exercises", Library], ["Programs", "/provider/programs", Activity], ["Progress", "/provider/progress", LineChart], ["Reports", "/provider/reports", FileText], ["Billing", "/provider/billing", CreditCard], ["Documents", "/provider/documents", FileText], ["Messages", "/provider/messages", MessageSquare], ["Settings", "/provider/settings", Settings],
];

export const patientNav: NavItem[] = [
  ["Home", "/patient", Home], ["My Recovery", "/patient/current-case", ClipboardList], ["Exercises", "/patient/exercises", Activity], ["Appointments", "/patient/appointments", CalendarDays], ["Progress", "/patient/progress", LineChart], ["Messages", "/patient/messages", Bell], ["Documents", "/patient/documents", FileText], ["Profile", "/patient/profile", Settings],
];
