import {
  Truck, BookOpen, Microscope, HeartPulse, Trophy, Gavel, Shield, Globe2,
  Palette, Plane, Leaf, Home, Building2, Handshake, Banknote, Coins,
  ShieldCheck, Siren, ShieldAlert, Ship, Ambulance
} from "lucide-react";

export interface Department {
  id: string;
  name: string;
  icon: React.ElementType;
  baseIncomeCost: number;
}

export const KEMENTERIAN: Department[] = [
  {
    id: "infrastruktur",
    name: "Kementerian Infrastruktur",
    icon: Truck,
    baseIncomeCost: 1920,
  },
  {
    id: "pendidikan",
    name: "Kementerian Pendidikan",
    icon: BookOpen,
    baseIncomeCost: 1818,
  },
  {
    id: "sains",
    name: "Sains dan Penelitian",
    icon: Microscope,
    baseIncomeCost: 1800,
  },
  {
    id: "kesehatan",
    name: "Kementerian Kesehatan",
    icon: HeartPulse,
    baseIncomeCost: 1700,
  },
  {
    id: "olahraga",
    name: "Kementerian Olahraga",
    icon: Trophy,
    baseIncomeCost: 1200,
  },
  {
    id: "kehakiman",
    name: "Kementerian Kehakiman",
    icon: Gavel,
    baseIncomeCost: 1500,
  },
  {
    id: "pertahanan",
    name: "Kementerian Pertahanan",
    icon: Shield,
    baseIncomeCost: 2200,
  },
  {
    id: "luar-negeri",
    name: "Kementerian Luar Negeri",
    icon: Globe2,
    baseIncomeCost: 1600,
  },
  {
    id: "kebudayaan",
    name: "Kementerian Kebudayaan",
    icon: Palette,
    baseIncomeCost: 900,
  },
  {
    id: "pariwisata",
    name: "Kementerian Pariwisata",
    icon: Plane,
    baseIncomeCost: 1100,
  },
  {
    id: "lingkungan",
    name: "Kementerian Lingkungan Hidup",
    icon: Leaf,
    baseIncomeCost: 1000,
  },
  {
    id: "perumahan",
    name: "Kementerian Perumahan",
    icon: Home,
    baseIncomeCost: 1300,
  },
  {
    id: "pembangunan",
    name: "Kementerian Pembangunan",
    icon: Building2,
    baseIncomeCost: 1450,
  },
  {
    id: "perdagangan",
    name: "Kementerian Perdagangan",
    icon: Handshake,
    baseIncomeCost: 1550,
  },
  {
    id: "keuangan",
    name: "Kementerian Keuangan",
    icon: Banknote,
    baseIncomeCost: 2000,
  },
];

export const KEAMANAN: Department[] = [
  {
    id: "dinas-keamanan",
    name: "Dinas Keamanan",
    icon: ShieldCheck,
    baseIncomeCost: 1400,
  },
  {
    id: "polisi",
    name: "Polisi",
    icon: Siren,
    baseIncomeCost: 1250,
  },
  {
    id: "garda-nasional",
    name: "Garda Nasional",
    icon: Shield,
    baseIncomeCost: 1600,
  },
  {
    id: "komandan-angkatan-darat",
    name: "Komandan Angkatan Darat",
    icon: ShieldAlert,
    baseIncomeCost: 1900,
  },
  {
    id: "komandan-armada",
    name: "Komandan Armada",
    icon: Ship,
    baseIncomeCost: 2100,
  },
];

export const LAYANAN: Department[] = [
  {
    id: "layanan-darurat",
    name: "Layanan Darurat",
    icon: Ambulance,
    baseIncomeCost: 1350,
  },
  {
    id: "bank-sentral",
    name: "Kepala Bank Sentral",
    icon: Coins,
    baseIncomeCost: 2000,
  },
];

export const ALL_DEPARTMENTS = [...KEMENTERIAN, ...KEAMANAN, ...LAYANAN];
