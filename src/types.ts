import {
  Calculator,
  BookOpen,
  FlaskConical,
  Globe2,
  Code2,
  Palette,
  Music,
  Languages,
  Brain,
  FileText,
  PenTool,
  Atom,
  History,
  Landmark,
  Briefcase,
  HeartPulse,
  Leaf,
  Camera,
  LucideIcon,
} from 'lucide-react';

export type SubjectCategory =
  | 'math'
  | 'science'
  | 'english'
  | 'history'
  | 'coding'
  | 'languages'
  | 'art'
  | 'music'
  | 'business'
  | 'biology';

export interface Subject {
  id: string;
  name: string;
  category: SubjectCategory;
  icon: LucideIcon;
  color: string;
}

export interface Tutor {
  id: string;
  name: string;
  initials: string;
  avatarColor: string;
  skinColor: string;
  hairColor: string;
  hairStyle: 'short' | 'medium' | 'long';
  expression: 'neutral' | 'confused' | 'happy';
  accessory: 'book' | 'pencil' | 'none';
  shirtFrom: string;
  shirtTo: string;
  subjects: string[];
  rating: number;
  sessions: number;
  bio: string;
  online: boolean;
  responseTime: string;
}

export interface HelpRequest {
  id: string;
  studentName: string;
  initials: string;
  avatarColor: string;
  skinColor: string;
  hairColor: string;
  hairStyle: 'short' | 'medium' | 'long';
  expression: 'neutral' | 'confused' | 'happy';
  shirtFrom: string;
  shirtTo: string;
  subject: string;
  subjectIcon: LucideIcon;
  subjectColor: string;
  question: string;
  questionSummary: string;
  postedAgo: string;
  urgency: 'low' | 'medium' | 'high';
}

export const subjects: Subject[] = [
  { id: 'math', name: 'Mathematics', category: 'math', icon: Calculator, color: 'bg-primary-100 text-primary-700' },
  { id: 'science', name: 'Science', category: 'science', icon: FlaskConical, color: 'bg-secondary-100 text-secondary-700' },
  { id: 'english', name: 'English', category: 'english', icon: BookOpen, color: 'bg-accent-100 text-accent-700' },
  { id: 'history', name: 'History', category: 'history', icon: Landmark, color: 'bg-warning-100 text-warning-700' },
  { id: 'coding', name: 'Computer Science', category: 'coding', icon: Code2, color: 'bg-primary-100 text-primary-700' },
  { id: 'languages', name: 'Languages', category: 'languages', icon: Languages, color: 'bg-secondary-100 text-secondary-700' },
  { id: 'art', name: 'Art & Design', category: 'art', icon: Palette, color: 'bg-accent-100 text-accent-700' },
  { id: 'music', name: 'Music', category: 'music', icon: Music, color: 'bg-warning-100 text-warning-700' },
  { id: 'business', name: 'Business', category: 'business', icon: Briefcase, color: 'bg-primary-100 text-primary-700' },
  { id: 'biology', name: 'Biology', category: 'biology', icon: Leaf, color: 'bg-success-100 text-success-700' },
];

export const tutors: Tutor[] = [
  {
    id: 't1',
    name: 'Maya Chen',
    initials: 'MC',
    avatarColor: 'from-primary-400 to-primary-600',
    skinColor: '#F0D0B0',
    hairColor: '#2D1810',
    hairStyle: 'long',
    expression: 'happy',
    accessory: 'book',
    shirtFrom: '#7dcaa7',
    shirtTo: '#4eb088',
    subjects: ['Calculus', 'Linear Algebra', 'Statistics'],
    rating: 4.9,
    sessions: 127,
    bio: 'Math major who loves breaking complex problems into simple steps. Available most evenings.',
    online: true,
    responseTime: 'Usually replies in 5 min',
  },
  {
    id: 't2',
    name: 'Jordan Patel',
    initials: 'JP',
    avatarColor: 'from-secondary-400 to-secondary-600',
    skinColor: '#E8C39E',
    hairColor: '#3D2817',
    hairStyle: 'short',
    expression: 'neutral',
    accessory: 'book',
    shirtFrom: '#8eb6ff',
    shirtTo: '#5a8eff',
    subjects: ['Calculus', 'Algebra II', 'Physics'],
    rating: 4.8,
    sessions: 89,
    bio: 'Engineering student. I have helped over 80 peers through problem sets and exam prep.',
    online: true,
    responseTime: 'Usually replies in 10 min',
  },
  {
    id: 't3',
    name: 'Sam Rivera',
    initials: 'SR',
    avatarColor: 'from-accent-400 to-accent-600',
    skinColor: '#FCDBC4',
    hairColor: '#7B5E3B',
    hairStyle: 'medium',
    expression: 'happy',
    accessory: 'pencil',
    shirtFrom: '#fdba74',
    shirtTo: '#fb923c',
    subjects: ['Statistics', 'Pre-Calculus', 'Geometry'],
    rating: 4.7,
    sessions: 54,
    bio: 'Stats enthusiast and data science minor. Patient and detail-oriented with first-timers.',
    online: true,
    responseTime: 'Usually replies in 15 min',
  },
];

export const helpRequests: HelpRequest[] = [
  {
    id: 'r1',
    studentName: 'Alex Johnson',
    initials: 'AJ',
    avatarColor: 'from-secondary-400 to-secondary-600',
    skinColor: '#FCDBC4',
    hairColor: '#7B5E3B',
    hairStyle: 'short',
    expression: 'confused',
    shirtFrom: '#8eb6ff',
    shirtTo: '#5a8eff',
    subject: 'Essay Writing',
    subjectIcon: PenTool,
    subjectColor: 'bg-accent-100 text-accent-700',
    question: 'I need help structuring my 5-page argumentative essay on climate policy. I have my sources but I am stuck on how to organize my thesis and counterarguments.',
    questionSummary: 'Needs help structuring an argumentative essay — organizing thesis and counterarguments.',
    postedAgo: '12 min ago',
    urgency: 'medium',
  },
];
